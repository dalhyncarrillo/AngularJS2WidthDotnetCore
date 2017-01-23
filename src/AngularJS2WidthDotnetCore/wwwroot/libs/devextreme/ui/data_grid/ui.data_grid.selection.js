/**
 * DevExtreme (ui/data_grid/ui.data_grid.selection.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    gridCore = require("./ui.data_grid.core"),
    commonUtils = require("../../core/utils/common"),
    support = require("../../core/utils/support"),
    clickEvent = require("../../events/click"),
    messageLocalization = require("../../localization/message"),
    eventUtils = require("../../events/utils"),
    holdEvent = require("../../events/hold"),
    Selection = require("../selection/selection");
var DATAGRID_EDITOR_CELL_CLASS = "dx-editor-cell",
    DATAGRID_ROW_CLASS = "dx-row",
    DATAGRID_ROW_SELECTION_CLASS = "dx-selection",
    DATAGRID_SELECT_CHECKBOX_CLASS = "dx-select-checkbox",
    DATAGRID_CHECKBOXES_HIDDEN_CLASS = "dx-select-checkboxes-hidden",
    DATAGRID_COMMAND_SELECT_CLASS = "dx-command-select",
    DATAGRID_SELECTION_DISABLED_CLASS = "dx-selection-disabled",
    DATAGRID_DATA_ROW_CLASS = "dx-data-row";
var SHOW_CHECKBOXES_MODE = "selection.showCheckBoxesMode",
    SELECTION_MODE = "selection.mode";
var processLongTap = function(that, jQueryEvent) {
    var selectionController = that.getController("selection"),
        rowsView = that.getView("rowsView"),
        $row = $(jQueryEvent.target).closest("." + DATAGRID_DATA_ROW_CLASS),
        rowIndex = rowsView.getRowIndex($row);
    if (rowIndex < 0) {
        return
    }
    if ("onLongTap" === that.option(SHOW_CHECKBOXES_MODE)) {
        if (selectionController.isSelectionWithCheckboxes()) {
            selectionController.stopSelectionWithCheckboxes()
        } else {
            selectionController.startSelectionWithCheckboxes()
        }
    } else {
        if ("onClick" === that.option(SHOW_CHECKBOXES_MODE)) {
            selectionController.startSelectionWithCheckboxes()
        }
        if ("always" !== that.option(SHOW_CHECKBOXES_MODE)) {
            selectionController.changeItemSelection(rowIndex, {
                control: true
            })
        }
    }
};
exports.SelectionController = gridCore.Controller.inherit(function() {
    var updateSelectColumn = function(that) {
        var columnsController = that.getController("columns"),
            isSelectColumnVisible = that.isSelectColumnVisible();
        columnsController.addCommandColumn({
            command: "select",
            visible: isSelectColumnVisible,
            visibleIndex: -1,
            dataType: "boolean",
            alignment: "center",
            cssClass: DATAGRID_COMMAND_SELECT_CLASS,
            width: "auto"
        });
        columnsController.columnOption("command:select", "visible", isSelectColumnVisible)
    };
    var isSeveralRowsSelected = function(that, selectionFilter) {
        var keyIndex = 0,
            store = that.getController("data").store(),
            key = store && store.key(),
            isComplexKey = commonUtils.isArray(key);
        if (!selectionFilter.length) {
            return false
        }
        if (isComplexKey && commonUtils.isArray(selectionFilter[0]) && "and" === selectionFilter[1]) {
            for (var i = 0; i < selectionFilter.length; i++) {
                if (commonUtils.isArray(selectionFilter[i])) {
                    if (selectionFilter[i][0] !== key[keyIndex] || "=" !== selectionFilter[i][1]) {
                        return true
                    }
                    keyIndex++
                }
            }
            return false
        }
        return key !== selectionFilter[0]
    };
    return {
        init: function() {
            var that = this,
                dataController = that.getController("data"),
                selectionOptions = that.option("selection") || {};
            that._selectionMode = that.option(SELECTION_MODE);
            that._isSelectionWithCheckboxes = false;
            that._selection = that._createSelection({
                selectedKeys: that.option("selectedRowKeys"),
                mode: that._selectionMode,
                deferred: selectionOptions.deferred,
                maxFilterLengthInRequest: selectionOptions.maxFilterLengthInRequest,
                selectionFilter: that.option("selectionFilter"),
                key: function() {
                    var store = dataController.store();
                    return store && store.key()
                },
                keyOf: function(item) {
                    var store = dataController.store();
                    return store && store.keyOf(item)
                },
                dataFields: function() {
                    return dataController.dataSource() && dataController.dataSource().select()
                },
                load: function(options) {
                    return dataController.dataSource() && dataController.dataSource().load(options) || $.Deferred().resolve([])
                },
                plainItems: function() {
                    return dataController.items()
                },
                isItemSelected: function(item) {
                    return item.selected
                },
                isSelectableItem: function(item) {
                    return item && "data" === item.rowType && !item.inserted
                },
                getItemData: function(item) {
                    return item && (item.oldData || item.data || item)
                },
                filter: function() {
                    return dataController.getCombinedFilter()
                },
                totalCount: function() {
                    return dataController.totalCount()
                },
                onSelectionChanged: $.proxy(that._updateSelectedItems, this)
            });
            updateSelectColumn(that);
            that.createAction("onSelectionChanged", {
                excludeValidators: ["disabled", "readOnly"]
            })
        },
        _createSelection: function(options) {
            return new Selection(options)
        },
        _fireSelectionChanged: function() {
            var argument = this.option("selection.deferred") ? {
                selectionFilter: this.option("selectionFilter")
            } : {
                selectedRowKeys: this.option("selectedRowKeys")
            };
            this.selectionChanged.fire(argument)
        },
        _updateCheckboxesState: function(options) {
            var isDeferredMode = options.isDeferredMode,
                selectionFilter = options.selectionFilter,
                selectedItemKeys = options.selectedItemKeys,
                removedItemKeys = options.removedItemKeys;
            if ("onClick" === this.option(SHOW_CHECKBOXES_MODE)) {
                if (isDeferredMode ? selectionFilter && isSeveralRowsSelected(this, selectionFilter) : selectedItemKeys.length > 1) {
                    this.startSelectionWithCheckboxes()
                } else {
                    if (isDeferredMode ? selectionFilter && !selectionFilter.length : 0 === selectedItemKeys.length && removedItemKeys.length) {
                        this.stopSelectionWithCheckboxes()
                    }
                }
            }
        },
        _updateSelectedItems: function(args) {
            var that = this,
                isDeferredMode = that.option("selection.deferred"),
                selectionFilter = that._selection.selectionFilter(),
                dataController = that.getController("data"),
                items = dataController.items();
            if (!items) {
                return
            }
            var isSelectionWithCheckboxes = that.isSelectionWithCheckboxes();
            var changedItemIndexes = that.getChangedItemIndexes(items);
            that._updateCheckboxesState({
                selectedItemKeys: args.selectedItemKeys,
                removedItemKeys: args.removedItemKeys,
                selectionFilter: selectionFilter,
                isDeferredMode: isDeferredMode
            });
            if (changedItemIndexes.length || isSelectionWithCheckboxes !== that.isSelectionWithCheckboxes()) {
                dataController.updateItems({
                    changeType: "updateSelection",
                    itemIndexes: changedItemIndexes
                })
            }
            if (isDeferredMode) {
                that.option("selectionFilter", selectionFilter);
                that._fireSelectionChanged();
                that.executeAction("onSelectionChanged", {})
            } else {
                if (args.addedItemKeys.length || args.removedItemKeys.length) {
                    that._selectedItemsInternalChange = true;
                    that.option("selectedRowKeys", args.selectedItemKeys.slice(0));
                    that._selectedItemsInternalChange = false;
                    that.executeAction("onSelectionChanged", {
                        selectedRowsData: args.selectedItems,
                        selectedRowKeys: args.selectedItemKeys,
                        currentSelectedRowKeys: args.addedItemKeys,
                        currentDeselectedRowKeys: args.removedItemKeys
                    })
                }
                that._fireSelectionChanged()
            }
        },
        getChangedItemIndexes: function(items) {
            var that = this,
                itemIndexes = [],
                isDeferredSelection = this.option("selection.deferred");
            for (var i = 0, length = items.length; i < length; i++) {
                var row = items[i];
                var isItemSelected = that._selection.isItemSelected(isDeferredSelection ? row.data : row.key);
                if (that._selection.isDataItem(row) && row.isSelected !== isItemSelected) {
                    itemIndexes.push(i)
                }
            }
            return itemIndexes
        },
        callbackNames: function() {
            return ["selectionChanged"]
        },
        optionChanged: function(args) {
            var that = this;
            that.callBase(args);
            switch (args.name) {
                case "selection":
                    var oldSelectionMode = that._selectionMode;
                    that.init();
                    var selectionMode = that._selectionMode;
                    var selectedRowKeys = that.option("selectedRowKeys");
                    if (oldSelectionMode !== selectionMode) {
                        if ("single" === selectionMode) {
                            if (selectedRowKeys.length > 1) {
                                selectedRowKeys = [selectedRowKeys[0]]
                            }
                        } else {
                            if ("multiple" !== selectionMode) {
                                selectedRowKeys = []
                            }
                        }
                    }
                    that.selectRows(selectedRowKeys).always(function() {
                        that._fireSelectionChanged()
                    });
                    that.getController("columns").updateColumns();
                    args.handled = true;
                    break;
                case "selectionFilter":
                    this._selection.selectionFilter(args.value);
                    args.handled = true;
                    break;
                case "selectedRowKeys":
                    if (commonUtils.isArray(args.value) && !that._selectedItemsInternalChange) {
                        that.selectRows(args.value)
                    }
                    args.handled = true
            }
        },
        publicMethods: function() {
            return ["selectRows", "deselectRows", "selectRowsByIndexes", "getSelectedRowKeys", "getSelectedRowsData", "clearSelection", "selectAll", "deselectAll", "startSelectionWithCheckboxes", "stopSelectionWithCheckboxes", "isRowSelected"]
        },
        isRowSelected: function(arg) {
            return this._selection.isItemSelected(arg)
        },
        isSelectColumnVisible: function() {
            return "multiple" === this.option(SELECTION_MODE) && ("always" === this.option(SHOW_CHECKBOXES_MODE) || "onClick" === this.option(SHOW_CHECKBOXES_MODE) || this._isSelectionWithCheckboxes)
        },
        _isOnePageSelectAll: function() {
            return "page" === this.option("selection.selectAllMode")
        },
        isSelectAll: function() {
            return this._selection.getSelectAllState(this._isOnePageSelectAll())
        },
        selectAll: function() {
            if ("onClick" === this.option(SHOW_CHECKBOXES_MODE)) {
                this.startSelectionWithCheckboxes()
            }
            return this._selection.selectAll(this._isOnePageSelectAll())
        },
        deselectAll: function() {
            return this._selection.deselectAll(this._isOnePageSelectAll())
        },
        clearSelection: function() {
            return this.selectedItemKeys([])
        },
        refresh: function() {
            var selectedRowKeys = this.option("selectedRowKeys") || [];
            if (!this.option("selection.deferred") && selectedRowKeys.length) {
                return this.selectedItemKeys(selectedRowKeys)
            }
            return $.Deferred().resolve().promise()
        },
        selectedItemKeys: function(value, preserve, isDeselect, isSelectAll) {
            return this._selection.selectedItemKeys(value, preserve, isDeselect, isSelectAll)
        },
        getSelectedRowKeys: function() {
            return this._selection.getSelectedItemKeys()
        },
        selectRows: function(keys, preserve) {
            return this.selectedItemKeys(keys, preserve)
        },
        deselectRows: function(keys) {
            return this.selectedItemKeys(keys, true, true)
        },
        selectRowsByIndexes: function(indexes) {
            var items = this.getController("data").items(),
                keys = [];
            if (!commonUtils.isArray(indexes)) {
                indexes = Array.prototype.slice.call(arguments, 0)
            }
            $.each(indexes, function() {
                var item = items[this];
                if (item && "data" === item.rowType) {
                    keys.push(item.key)
                }
            });
            return this.selectRows(keys)
        },
        getSelectedRowsData: function() {
            return this._selection.getSelectedItems()
        },
        changeItemSelection: function(itemIndex, keys) {
            keys = keys || {};
            if (this.isSelectionWithCheckboxes()) {
                keys.control = true
            }
            return this._selection.changeItemSelection(itemIndex, keys)
        },
        focusedItemIndex: function(itemIndex) {
            var that = this;
            if (commonUtils.isDefined(itemIndex)) {
                that._selection._focusedItemIndex = itemIndex
            } else {
                return that._selection._focusedItemIndex
            }
        },
        isSelectionWithCheckboxes: function() {
            return "multiple" === this.option(SELECTION_MODE) && ("always" === this.option(SHOW_CHECKBOXES_MODE) || this._isSelectionWithCheckboxes)
        },
        startSelectionWithCheckboxes: function() {
            var that = this;
            if ("multiple" === that.option(SELECTION_MODE) && !that.isSelectionWithCheckboxes()) {
                that._isSelectionWithCheckboxes = true;
                updateSelectColumn(that);
                return true
            }
            return false
        },
        stopSelectionWithCheckboxes: function() {
            var that = this;
            if (that._isSelectionWithCheckboxes) {
                that._isSelectionWithCheckboxes = false;
                updateSelectColumn(that);
                return true
            }
            return false
        }
    }
}());
gridCore.registerModule("selection", {
    defaultOptions: function() {
        return {
            selection: {
                mode: "none",
                showCheckBoxesMode: "onClick",
                allowSelectAll: true,
                selectAllMode: "allPages",
                maxFilterLengthInRequest: 1500,
                deferred: false
            },
            selectionFilter: [],
            selectedRowKeys: []
        }
    },
    controllers: {
        selection: exports.SelectionController
    },
    extenders: {
        controllers: {
            data: {
                init: function() {
                    var selectionController = this.getController("selection"),
                        isDeferredMode = this.option("selection.deferred");
                    this.callBase.apply(this, arguments);
                    if (isDeferredMode) {
                        selectionController._updateCheckboxesState({
                            isDeferredMode: true,
                            selectionFilter: this.option("selectionFilter")
                        })
                    }
                },
                _loadDataSource: function() {
                    var that = this;
                    return that.callBase().done(function() {
                        that.getController("selection").refresh()
                    })
                },
                pageIndex: function(value) {
                    var that = this,
                        dataSource = that._dataSource;
                    if (dataSource && value && dataSource.pageIndex() !== value) {
                        that.getController("selection").focusedItemIndex(-1)
                    }
                    return that.callBase(value)
                },
                _processDataItem: function(item, options) {
                    var that = this,
                        selectionController = that.getController("selection"),
                        hasSelectColumn = selectionController.isSelectColumnVisible(),
                        isDeferredSelection = options.isDeferredSelection = void 0 === options.isDeferredSelection ? this.option("selection.deferred") : options.isDeferredSelection,
                        dataItem = this.callBase.apply(this, arguments);
                    dataItem.isSelected = selectionController.isRowSelected(isDeferredSelection ? dataItem.data : dataItem.key);
                    if (hasSelectColumn && dataItem.values) {
                        for (var i = 0; i < options.visibleColumns.length; i++) {
                            if ("select" === options.visibleColumns[i].command) {
                                dataItem.values[i] = dataItem.isSelected;
                                break
                            }
                        }
                    }
                    return dataItem
                },
                refresh: function() {
                    var that = this,
                        d = $.Deferred();
                    this.callBase.apply(this, arguments).done(function() {
                        that.getController("selection").refresh().done(d.resolve).fail(d.reject)
                    }).fail(d.reject);
                    return d.promise()
                }
            },
            contextMenu: {
                _contextMenuPrepared: function(options) {
                    var jQueryEvent = options.jQueryEvent;
                    if (jQueryEvent.originalEvent && "dxhold" !== jQueryEvent.originalEvent.type || options.items && options.items.length > 0) {
                        return
                    }
                    processLongTap(this, jQueryEvent)
                }
            }
        },
        views: {
            columnHeadersView: {
                init: function() {
                    var that = this;
                    that.callBase();
                    that.getController("selection").selectionChanged.add($.proxy(that._updateSelectAllValue, that))
                },
                _updateSelectAllValue: function() {
                    var that = this,
                        $element = that.element(),
                        $editor = $element && $element.find("." + DATAGRID_SELECT_CHECKBOX_CLASS);
                    if ($element && $editor.length && "multiple" === that.option("selection.mode")) {
                        $editor.dxCheckBox("instance").option("value", that.getController("selection").isSelectAll())
                    }
                },
                _handleDataChanged: function(e) {
                    this.callBase(e);
                    if (!e || "refresh" === e.changeType) {
                        this._updateSelectAllValue()
                    }
                },
                _getDefaultTemplate: function(column) {
                    var groupElement, that = this,
                        selectionController = that.getController("selection");
                    if ("select" === column.command) {
                        return function($cell, options) {
                            var column = options.column;
                            if ("select" === column.command) {
                                $cell.addClass(DATAGRID_EDITOR_CELL_CLASS);
                                groupElement = $("<div />").appendTo($cell).addClass(DATAGRID_SELECT_CHECKBOX_CLASS);
                                that.setAria("label", messageLocalization.format("dxDataGrid-ariaSelectAll"), $cell);
                                that.getController("editorFactory").createEditor(groupElement, $.extend({}, column, {
                                    parentType: "headerRow",
                                    value: selectionController.isSelectAll(),
                                    editorOptions: {
                                        visible: that.option("selection.allowSelectAll") || false !== selectionController.isSelectAll()
                                    },
                                    tabIndex: -1,
                                    setValue: function(value, e) {
                                        var allowSelectAll = that.option("selection.allowSelectAll");
                                        e.component.option("visible", allowSelectAll || false !== e.component.option("value"));
                                        if (!e.jQueryEvent || selectionController.isSelectAll() === value) {
                                            return
                                        }
                                        if (e.value && !allowSelectAll) {
                                            e.component.option("value", false)
                                        } else {
                                            e.value ? selectionController.selectAll() : selectionController.deselectAll()
                                        }
                                        e.jQueryEvent.preventDefault()
                                    }
                                }));
                                $cell.on(clickEvent.name, that.createAction(function(e) {
                                    var event = e.jQueryEvent;
                                    if (!$(event.target).closest("." + DATAGRID_SELECT_CHECKBOX_CLASS).length) {
                                        $(event.currentTarget).children().trigger(clickEvent.name)
                                    }
                                    event.preventDefault()
                                }))
                            }
                        }
                    } else {
                        return that.callBase(column)
                    }
                }
            },
            rowsView: {
                _getDefaultTemplate: function(column) {
                    var groupElement, that = this;
                    if ("select" === column.command) {
                        return function(container, options) {
                            if ("data" === options.rowType && !options.row.inserted) {
                                container.addClass(DATAGRID_EDITOR_CELL_CLASS);
                                container.on(clickEvent.name, that.createAction(function(e) {
                                    var selectionController = that.getController("selection"),
                                        event = e.jQueryEvent,
                                        rowIndex = that.getRowIndex($(event.currentTarget).closest("." + DATAGRID_ROW_CLASS));
                                    if (rowIndex >= 0) {
                                        selectionController.startSelectionWithCheckboxes();
                                        selectionController.changeItemSelection(rowIndex, {
                                            shift: event.shiftKey
                                        })
                                    }
                                }));
                                that.setAria("label", messageLocalization.format("dxDataGrid-ariaSelectRow"), container);
                                groupElement = $("<div />").addClass(DATAGRID_SELECT_CHECKBOX_CLASS).appendTo(container);
                                that.getController("editorFactory").createEditor(groupElement, $.extend({}, column, {
                                    parentType: "dataRow",
                                    value: options.value,
                                    tabIndex: -1,
                                    setValue: function(value, e) {
                                        if (e && e.jQueryEvent && "keydown" === e.jQueryEvent.type) {
                                            container.trigger(clickEvent.name, e)
                                        }
                                    }
                                }))
                            }
                        }
                    } else {
                        return that.callBase(column)
                    }
                },
                _update: function(change) {
                    var that = this,
                        tableElements = that.getTableElements();
                    if ("updateSelection" === change.changeType) {
                        if (tableElements.length > 0) {
                            $.each(tableElements, function(_, tableElement) {
                                $.each(change.itemIndexes || [], function(_, index) {
                                    var $row, isSelected;
                                    if (change.items[index]) {
                                        $row = that._getRowElements($(tableElement)).eq(index);
                                        isSelected = !!change.items[index].isSelected;
                                        $row.toggleClass(DATAGRID_ROW_SELECTION_CLASS, isSelected).find("." + DATAGRID_SELECT_CHECKBOX_CLASS).dxCheckBox("option", "value", isSelected);
                                        that.setAria("selected", isSelected, $row)
                                    }
                                })
                            });
                            that._updateCheckboxesClass()
                        }
                    } else {
                        that.callBase(change)
                    }
                },
                _createTable: function() {
                    var that = this,
                        selectionMode = that.option("selection.mode"),
                        $table = that.callBase.apply(that, arguments);
                    if ("none" !== selectionMode) {
                        if ("onLongTap" === that.option(SHOW_CHECKBOXES_MODE) || !support.touch) {
                            $table.on(eventUtils.addNamespace(holdEvent.name, "dxDataGridRowsView"), "." + DATAGRID_DATA_ROW_CLASS, that.createAction(function(e) {
                                processLongTap(that.component, e.jQueryEvent);
                                e.jQueryEvent.stopPropagation()
                            }))
                        }
                        $table.on("mousedown selectstart", that.createAction(function(e) {
                            var event = e.jQueryEvent;
                            if (event.shiftKey) {
                                event.preventDefault()
                            }
                        }))
                    }
                    return $table
                },
                _createRow: function(row) {
                    var isSelected, $row = this.callBase(row);
                    if (row) {
                        isSelected = !!row.isSelected;
                        if (isSelected) {
                            $row.addClass(DATAGRID_ROW_SELECTION_CLASS)
                        }
                        this.setAria("selected", isSelected, $row)
                    }
                    return $row
                },
                _rowClick: function(e) {
                    var that = this,
                        jQueryEvent = e.jQueryEvent,
                        isSelectionDisabled = $(jQueryEvent.target).closest("." + DATAGRID_SELECTION_DISABLED_CLASS).length;
                    if (!that.isClickableElement($(jQueryEvent.target))) {
                        if (!isSelectionDisabled && ("multiple" !== that.option(SELECTION_MODE) || "always" !== that.option(SHOW_CHECKBOXES_MODE))) {
                            if (that.getController("selection").changeItemSelection(e.rowIndex, {
                                    control: jQueryEvent.ctrlKey,
                                    shift: jQueryEvent.shiftKey
                                })) {
                                jQueryEvent.preventDefault();
                                e.handled = true
                            }
                        }
                        that.callBase(e)
                    }
                },
                isClickableElement: function($target) {
                    var isCommandSelect = $target.closest("." + DATAGRID_COMMAND_SELECT_CLASS).length;
                    return !!isCommandSelect
                },
                _renderCore: function(change) {
                    this.callBase(change);
                    this._updateCheckboxesClass()
                },
                _updateCheckboxesClass: function() {
                    var tableElements = this.getTableElements(),
                        selectionController = this.getController("selection"),
                        isCheckBoxesHidden = selectionController.isSelectColumnVisible() && !selectionController.isSelectionWithCheckboxes();
                    $.each(tableElements, function(_, tableElement) {
                        $(tableElement).toggleClass(DATAGRID_CHECKBOXES_HIDDEN_CLASS, isCheckBoxesHidden)
                    })
                }
            }
        }
    }
});