/**
 * DevExtreme (ui/grid_core/ui.grid_core.sorting.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var commonUtils = require("../../core/utils/common");
var DATAGRID_SORT_CLASS = "dx-sort",
    DATAGRID_SORT_NONE_CLASS = "dx-sort-none",
    DATAGRID_SORTUP_CLASS = "dx-sort-up",
    DATAGRID_SORTDOWN_CLASS = "dx-sort-down",
    DATAGRID_HEADERS_ACTION_CLASS = "dx-datagrid-action";
exports.sortingMixin = {
    _applyColumnState: function(options) {
        var side, ariaSortState, $sortIndicator, that = this,
            sortingMode = that.option("sorting.mode"),
            rootElement = options.rootElement,
            column = options.column,
            $indicatorsContainer = that._getIndicatorContainer(rootElement);
        if ("sort" === options.name) {
            side = that.option("rtlEnabled") ? "right" : "left";
            rootElement.find("." + DATAGRID_SORT_CLASS).remove();
            !$indicatorsContainer.children().length && $indicatorsContainer.remove();
            if (("single" === sortingMode || "multiple" === sortingMode) && column.allowSorting || commonUtils.isDefined(column.sortOrder)) {
                ariaSortState = "asc" === column.sortOrder ? "ascending" : "descending";
                $sortIndicator = that.callBase(options).toggleClass(DATAGRID_SORTUP_CLASS, "asc" === column.sortOrder).toggleClass(DATAGRID_SORTDOWN_CLASS, "desc" === column.sortOrder);
                options.rootElement.addClass(DATAGRID_HEADERS_ACTION_CLASS)
            }
            if (!commonUtils.isDefined(column.sortOrder)) {
                that.setAria("sort", "none", rootElement)
            } else {
                that.setAria("sort", ariaSortState, rootElement)
            }
            return $sortIndicator
        } else {
            return that.callBase(options)
        }
    },
    _getIndicatorClassName: function(name) {
        if ("sort" === name) {
            return DATAGRID_SORT_CLASS
        }
        return this.callBase(name)
    },
    _renderIndicator: function(options) {
        var rtlEnabled, column = options.column,
            $container = options.container,
            $indicator = options.indicator;
        if ("sort" === options.name) {
            rtlEnabled = this.option("rtlEnabled");
            if (!commonUtils.isDefined(column.sortOrder)) {
                $indicator && $indicator.addClass(DATAGRID_SORT_NONE_CLASS)
            }
            if ($container.children().length && (!rtlEnabled && "left" === options.columnAlignment || rtlEnabled && "right" === options.columnAlignment)) {
                $container.prepend($indicator);
                return
            }
        }
        this.callBase(options)
    },
    _updateIndicator: function($cell, column, indicatorName) {
        if ("sort" === indicatorName && commonUtils.isDefined(column.groupIndex)) {
            return
        }
        return this.callBase.apply(this, arguments)
    },
    _getIndicatorElements: function($cell, returnAll) {
        var $indicatorElements = this.callBase($cell);
        return returnAll ? $indicatorElements : $indicatorElements && $indicatorElements.not("." + DATAGRID_SORT_NONE_CLASS)
    }
};