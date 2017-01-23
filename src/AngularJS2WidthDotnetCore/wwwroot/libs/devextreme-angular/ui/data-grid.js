/*!
 * devextreme-angular
 * Version: 16.2.4
 * Build date: Wed Jan 18 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var data_grid_1 = require('devextreme/ui/data_grid');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var column_chooser_1 = require('./nested/column-chooser');
var column_fixing_1 = require('./nested/column-fixing');
var texts_1 = require('./nested/texts');
var column_dxi_1 = require('./nested/column-dxi');
var format_1 = require('./nested/format');
var form_item_1 = require('./nested/form-item');
var label_1 = require('./nested/label');
var validation_rule_dxi_1 = require('./nested/validation-rule-dxi');
var header_filter_1 = require('./nested/header-filter');
var lookup_1 = require('./nested/lookup');
var editing_1 = require('./nested/editing');
var form_1 = require('./nested/form');
var col_count_by_screen_1 = require('./nested/col-count-by-screen');
var item_dxi_1 = require('./nested/item-dxi');
var tab_panel_options_1 = require('./nested/tab-panel-options');
var tab_dxi_1 = require('./nested/tab-dxi');
var export_1 = require('./nested/export');
var filter_row_1 = require('./nested/filter-row');
var operation_descriptions_1 = require('./nested/operation-descriptions');
var grouping_1 = require('./nested/grouping');
var group_panel_1 = require('./nested/group-panel');
var load_panel_1 = require('./nested/load-panel');
var master_detail_1 = require('./nested/master-detail');
var pager_1 = require('./nested/pager');
var paging_1 = require('./nested/paging');
var remote_operations_1 = require('./nested/remote-operations');
var scrolling_1 = require('./nested/scrolling');
var search_panel_1 = require('./nested/search-panel');
var selection_1 = require('./nested/selection');
var sort_by_group_summary_info_dxi_1 = require('./nested/sort-by-group-summary-info-dxi');
var sorting_1 = require('./nested/sorting');
var state_storing_1 = require('./nested/state-storing');
var summary_1 = require('./nested/summary');
var group_item_dxi_1 = require('./nested/group-item-dxi');
var value_format_1 = require('./nested/value-format');
var total_item_dxi_1 = require('./nested/total-item-dxi');
var column_dxi_2 = require('./nested/column-dxi');
var sort_by_group_summary_info_dxi_2 = require('./nested/sort-by-group-summary-info-dxi');
var DxDataGridComponent = (function (_super) {
    __extends(DxDataGridComponent, _super);
    function DxDataGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'adaptiveDetailRowPreparing', emit: 'onAdaptiveDetailRowPreparing' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellHoverChanged', emit: 'onCellHoverChanged' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'dataErrorOccurred', emit: 'onDataErrorOccurred' },
            { subscribe: 'editingStart', emit: 'onEditingStart' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initNewRow', emit: 'onInitNewRow' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'rowClick', emit: 'onRowClick' },
            { subscribe: 'rowCollapsed', emit: 'onRowCollapsed' },
            { subscribe: 'rowCollapsing', emit: 'onRowCollapsing' },
            { subscribe: 'rowExpanded', emit: 'onRowExpanded' },
            { subscribe: 'rowExpanding', emit: 'onRowExpanding' },
            { subscribe: 'rowInserted', emit: 'onRowInserted' },
            { subscribe: 'rowInserting', emit: 'onRowInserting' },
            { subscribe: 'rowPrepared', emit: 'onRowPrepared' },
            { subscribe: 'rowRemoved', emit: 'onRowRemoved' },
            { subscribe: 'rowRemoving', emit: 'onRowRemoving' },
            { subscribe: 'rowUpdated', emit: 'onRowUpdated' },
            { subscribe: 'rowUpdating', emit: 'onRowUpdating' },
            { subscribe: 'rowValidating', emit: 'onRowValidating' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'toolbarPreparing', emit: 'onToolbarPreparing' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'allowColumnReorderingChange' },
            { emit: 'allowColumnResizingChange' },
            { emit: 'cacheEnabledChange' },
            { emit: 'cellHintEnabledChange' },
            { emit: 'columnAutoWidthChange' },
            { emit: 'columnChooserChange' },
            { emit: 'columnFixingChange' },
            { emit: 'columnHidingEnabledChange' },
            { emit: 'columnsChange' },
            { emit: 'customizeColumnsChange' },
            { emit: 'customizeExportDataChange' },
            { emit: 'dataSourceChange' },
            { emit: 'editingChange' },
            { emit: 'errorRowEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'filterRowChange' },
            { emit: 'groupingChange' },
            { emit: 'groupPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'loadPanelChange' },
            { emit: 'masterDetailChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagerChange' },
            { emit: 'pagingChange' },
            { emit: 'remoteOperationsChange' },
            { emit: 'rowAlternationEnabledChange' },
            { emit: 'rowTemplateChange' },
            { emit: 'scrollingChange' },
            { emit: 'searchPanelChange' },
            { emit: 'selectedRowKeysChange' },
            { emit: 'selectionChange' },
            { emit: 'selectionFilterChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnHeadersChange' },
            { emit: 'showColumnLinesChange' },
            { emit: 'showRowLinesChange' },
            { emit: 'sortByGroupSummaryInfoChange' },
            { emit: 'sortingChange' },
            { emit: 'stateStoringChange' },
            { emit: 'summaryChange' },
            { emit: 'twoWayBindingEnabledChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxDataGridComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
        get: function () {
            return this._getOption('allowColumnReordering');
        },
        set: function (value) {
            this._setOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
        get: function () {
            return this._getOption('allowColumnResizing');
        },
        set: function (value) {
            this._setOption('allowColumnResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
        get: function () {
            return this._getOption('cacheEnabled');
        },
        set: function (value) {
            this._setOption('cacheEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
        get: function () {
            return this._getOption('cellHintEnabled');
        },
        set: function (value) {
            this._setOption('cellHintEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnAutoWidth", {
        get: function () {
            return this._getOption('columnAutoWidth');
        },
        set: function (value) {
            this._setOption('columnAutoWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnChooser", {
        get: function () {
            return this._getOption('columnChooser');
        },
        set: function (value) {
            this._setOption('columnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
        get: function () {
            return this._getOption('columnFixing');
        },
        set: function (value) {
            this._setOption('columnFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
        get: function () {
            return this._getOption('columnHidingEnabled');
        },
        set: function (value) {
            this._setOption('columnHidingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columns", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
        get: function () {
            return this._getOption('customizeColumns');
        },
        set: function (value) {
            this._setOption('customizeColumns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
        get: function () {
            return this._getOption('customizeExportData');
        },
        set: function (value) {
            this._setOption('customizeExportData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "editing", {
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
        get: function () {
            return this._getOption('errorRowEnabled');
        },
        set: function (value) {
            this._setOption('errorRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
        get: function () {
            return this._getOption('filterRow');
        },
        set: function (value) {
            this._setOption('filterRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
        get: function () {
            return this._getOption('groupPanel');
        },
        set: function (value) {
            this._setOption('groupPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
        get: function () {
            return this._getOption('masterDetail');
        },
        set: function (value) {
            this._setOption('masterDetail', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "pager", {
        get: function () {
            return this._getOption('pager');
        },
        set: function (value) {
            this._setOption('pager', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "paging", {
        get: function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
        get: function () {
            return this._getOption('rowAlternationEnabled');
        },
        set: function (value) {
            this._setOption('rowAlternationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
        get: function () {
            return this._getOption('rowTemplate');
        },
        set: function (value) {
            this._setOption('rowTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
        get: function () {
            return this._getOption('searchPanel');
        },
        set: function (value) {
            this._setOption('searchPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
        get: function () {
            return this._getOption('selectedRowKeys');
        },
        set: function (value) {
            this._setOption('selectedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selection", {
        get: function () {
            return this._getOption('selection');
        },
        set: function (value) {
            this._setOption('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectionFilter", {
        get: function () {
            return this._getOption('selectionFilter');
        },
        set: function (value) {
            this._setOption('selectionFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
        get: function () {
            return this._getOption('showColumnHeaders');
        },
        set: function (value) {
            this._setOption('showColumnHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
        get: function () {
            return this._getOption('showColumnLines');
        },
        set: function (value) {
            this._setOption('showColumnLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
        get: function () {
            return this._getOption('showRowLines');
        },
        set: function (value) {
            this._setOption('showRowLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this._setOption('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
        get: function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "summary", {
        get: function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
        get: function () {
            return this._getOption('twoWayBindingEnabled');
        },
        set: function (value) {
            this._setOption('twoWayBindingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", {
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this.setChildren('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDataGridComponent.prototype._createInstance = function (element, options) {
        return new data_grid_1.default(element, options);
    };
    DxDataGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDataGridComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('columns', changes);
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedRowKeys', changes);
        this._idh.setup('sortByGroupSummaryInfo', changes);
    };
    DxDataGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedRowKeys');
        this._idh.doCheck('sortByGroupSummaryInfo');
        this._watcherHelper.checkWatchers();
    };
    DxDataGridComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxDataGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-data-grid',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxDataGridComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxDataGridComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'allowColumnReordering': [{ type: core_1.Input },],
        'allowColumnResizing': [{ type: core_1.Input },],
        'cacheEnabled': [{ type: core_1.Input },],
        'cellHintEnabled': [{ type: core_1.Input },],
        'columnAutoWidth': [{ type: core_1.Input },],
        'columnChooser': [{ type: core_1.Input },],
        'columnFixing': [{ type: core_1.Input },],
        'columnHidingEnabled': [{ type: core_1.Input },],
        'columns': [{ type: core_1.Input },],
        'customizeColumns': [{ type: core_1.Input },],
        'customizeExportData': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'editing': [{ type: core_1.Input },],
        'errorRowEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'filterRow': [{ type: core_1.Input },],
        'grouping': [{ type: core_1.Input },],
        'groupPanel': [{ type: core_1.Input },],
        'headerFilter': [{ type: core_1.Input },],
        'loadPanel': [{ type: core_1.Input },],
        'masterDetail': [{ type: core_1.Input },],
        'noDataText': [{ type: core_1.Input },],
        'pager': [{ type: core_1.Input },],
        'paging': [{ type: core_1.Input },],
        'remoteOperations': [{ type: core_1.Input },],
        'rowAlternationEnabled': [{ type: core_1.Input },],
        'rowTemplate': [{ type: core_1.Input },],
        'scrolling': [{ type: core_1.Input },],
        'searchPanel': [{ type: core_1.Input },],
        'selectedRowKeys': [{ type: core_1.Input },],
        'selection': [{ type: core_1.Input },],
        'selectionFilter': [{ type: core_1.Input },],
        'showBorders': [{ type: core_1.Input },],
        'showColumnHeaders': [{ type: core_1.Input },],
        'showColumnLines': [{ type: core_1.Input },],
        'showRowLines': [{ type: core_1.Input },],
        'sortByGroupSummaryInfo': [{ type: core_1.Input },],
        'sorting': [{ type: core_1.Input },],
        'stateStoring': [{ type: core_1.Input },],
        'summary': [{ type: core_1.Input },],
        'twoWayBindingEnabled': [{ type: core_1.Input },],
        'wordWrapEnabled': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onAdaptiveDetailRowPreparing': [{ type: core_1.Output },],
        'onCellClick': [{ type: core_1.Output },],
        'onCellHoverChanged': [{ type: core_1.Output },],
        'onCellPrepared': [{ type: core_1.Output },],
        'onContextMenuPreparing': [{ type: core_1.Output },],
        'onDataErrorOccurred': [{ type: core_1.Output },],
        'onEditingStart': [{ type: core_1.Output },],
        'onEditorPrepared': [{ type: core_1.Output },],
        'onEditorPreparing': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onInitNewRow': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onRowClick': [{ type: core_1.Output },],
        'onRowCollapsed': [{ type: core_1.Output },],
        'onRowCollapsing': [{ type: core_1.Output },],
        'onRowExpanded': [{ type: core_1.Output },],
        'onRowExpanding': [{ type: core_1.Output },],
        'onRowInserted': [{ type: core_1.Output },],
        'onRowInserting': [{ type: core_1.Output },],
        'onRowPrepared': [{ type: core_1.Output },],
        'onRowRemoved': [{ type: core_1.Output },],
        'onRowRemoving': [{ type: core_1.Output },],
        'onRowUpdated': [{ type: core_1.Output },],
        'onRowUpdating': [{ type: core_1.Output },],
        'onRowValidating': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onToolbarPreparing': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'allowColumnReorderingChange': [{ type: core_1.Output },],
        'allowColumnResizingChange': [{ type: core_1.Output },],
        'cacheEnabledChange': [{ type: core_1.Output },],
        'cellHintEnabledChange': [{ type: core_1.Output },],
        'columnAutoWidthChange': [{ type: core_1.Output },],
        'columnChooserChange': [{ type: core_1.Output },],
        'columnFixingChange': [{ type: core_1.Output },],
        'columnHidingEnabledChange': [{ type: core_1.Output },],
        'columnsChange': [{ type: core_1.Output },],
        'customizeColumnsChange': [{ type: core_1.Output },],
        'customizeExportDataChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'editingChange': [{ type: core_1.Output },],
        'errorRowEnabledChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'filterRowChange': [{ type: core_1.Output },],
        'groupingChange': [{ type: core_1.Output },],
        'groupPanelChange': [{ type: core_1.Output },],
        'headerFilterChange': [{ type: core_1.Output },],
        'loadPanelChange': [{ type: core_1.Output },],
        'masterDetailChange': [{ type: core_1.Output },],
        'noDataTextChange': [{ type: core_1.Output },],
        'pagerChange': [{ type: core_1.Output },],
        'pagingChange': [{ type: core_1.Output },],
        'remoteOperationsChange': [{ type: core_1.Output },],
        'rowAlternationEnabledChange': [{ type: core_1.Output },],
        'rowTemplateChange': [{ type: core_1.Output },],
        'scrollingChange': [{ type: core_1.Output },],
        'searchPanelChange': [{ type: core_1.Output },],
        'selectedRowKeysChange': [{ type: core_1.Output },],
        'selectionChange': [{ type: core_1.Output },],
        'selectionFilterChange': [{ type: core_1.Output },],
        'showBordersChange': [{ type: core_1.Output },],
        'showColumnHeadersChange': [{ type: core_1.Output },],
        'showColumnLinesChange': [{ type: core_1.Output },],
        'showRowLinesChange': [{ type: core_1.Output },],
        'sortByGroupSummaryInfoChange': [{ type: core_1.Output },],
        'sortingChange': [{ type: core_1.Output },],
        'stateStoringChange': [{ type: core_1.Output },],
        'summaryChange': [{ type: core_1.Output },],
        'twoWayBindingEnabledChange': [{ type: core_1.Output },],
        'wordWrapEnabledChange': [{ type: core_1.Output },],
        'columnsChildren': [{ type: core_1.ContentChildren, args: [column_dxi_2.DxiColumnComponent,] },],
        'sortByGroupSummaryInfoChildren': [{ type: core_1.ContentChildren, args: [sort_by_group_summary_info_dxi_2.DxiSortByGroupSummaryInfoComponent,] },],
    };
    return DxDataGridComponent;
}(component_1.DxComponent));
exports.DxDataGridComponent = DxDataGridComponent;
var DxDataGridModule = (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        export_1.DxoExportModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        grouping_1.DxoGroupingModule,
                        group_panel_1.DxoGroupPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        master_detail_1.DxoMasterDetailModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sort_by_group_summary_info_dxi_1.DxiSortByGroupSummaryInfoModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        summary_1.DxoSummaryModule,
                        group_item_dxi_1.DxiGroupItemModule,
                        value_format_1.DxoValueFormatModule,
                        total_item_dxi_1.DxiTotalItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxDataGridComponent
                    ],
                    exports: [
                        DxDataGridComponent,
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        export_1.DxoExportModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        grouping_1.DxoGroupingModule,
                        group_panel_1.DxoGroupPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        master_detail_1.DxoMasterDetailModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sort_by_group_summary_info_dxi_1.DxiSortByGroupSummaryInfoModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        summary_1.DxoSummaryModule,
                        group_item_dxi_1.DxiGroupItemModule,
                        value_format_1.DxoValueFormatModule,
                        total_item_dxi_1.DxiTotalItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxDataGridModule.ctorParameters = function () { return []; };
    return DxDataGridModule;
}());
exports.DxDataGridModule = DxDataGridModule;
//# sourceMappingURL=data-grid.js.map