/**
 * DevExtreme (ui/calendar/ui.calendar.base_view.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Widget = require("../widget/ui.widget"),
    dateUtils = require("../../core/utils/date"),
    dateLocalization = require("../../localization/date"),
    eventUtils = require("../../events/utils"),
    clickEvent = require("../../events/click");
var abstract = Widget.abstract,
    CALENDAR_OTHER_VIEW_CLASS = "dx-calendar-other-view",
    CALENDAR_CELL_CLASS = "dx-calendar-cell",
    CALENDAR_EMPTY_CELL_CLASS = "dx-calendar-empty-cell",
    CALENDAR_TODAY_CLASS = "dx-calendar-today",
    CALENDAR_SELECTED_DATE_CLASS = "dx-calendar-selected-date",
    CALENDAR_CONTOURED_DATE_CLASS = "dx-calendar-contoured-date",
    CALENDAR_DXCLICK_EVENT_NAME = eventUtils.addNamespace(clickEvent.name, "dxCalendar"),
    CALENDAR_DATE_VALUE_KEY = "dxDateValueKey";
var BaseView = Widget.inherit({
    _getViewName: function() {
        return "base"
    },
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            date: new Date,
            focusStateEnabled: false,
            cellTemplate: null,
            onCellClick: null,
            rowCount: 3,
            colCount: 4,
            allowValueSelection: true
        })
    },
    _init: function() {
        this.callBase();
        var value = this.option("value");
        this.option("value", new Date(value));
        if (!this.option("value").valueOf()) {
            this.option("value", new Date(0, 0, 0, 0, 0, 0))
        }
    },
    _render: function() {
        this.callBase();
        this._renderImpl()
    },
    _renderImpl: function() {
        this._$table = $("<table>");
        this.element().append(this._$table);
        this._renderBody();
        this._renderContouredDate();
        this._renderValue();
        this._renderEvents()
    },
    _renderBody: function() {
        this.$body = $("<tbody>").appendTo(this._$table);
        var that = this,
            cellTemplate = this.option("cellTemplate");
        var appendChild = this.option("rtl") ? function(row, cell) {
            row.insertBefore(cell, row.firstChild)
        } : function(row, cell) {
            row.appendChild(cell)
        };

        function renderCell(cellIndex) {
            if (prevCellDate) {
                dateUtils.fixTimezoneGap(prevCellDate, cellDate)
            }
            prevCellDate = cellDate;
            var cell = document.createElement("td"),
                className = CALENDAR_CELL_CLASS;
            if (that._isTodayCell(cellDate)) {
                className = className + " " + CALENDAR_TODAY_CLASS
            }
            if (that._isDateOutOfRange(cellDate)) {
                className = className + " " + CALENDAR_EMPTY_CELL_CLASS
            }
            if (that._isOtherView(cellDate)) {
                className = className + " " + CALENDAR_OTHER_VIEW_CLASS
            }
            cell.className = className;
            cell.setAttribute("data-value", dateLocalization.format(cellDate, dateUtils.getShortDateFormat()));
            $.data(cell, CALENDAR_DATE_VALUE_KEY, cellDate);
            that.setAria({
                role: "option",
                label: that.getCellAriaLabel(cellDate)
            }, $(cell));
            appendChild(row, cell);
            if (cellTemplate) {
                cellTemplate.render({
                    model: {
                        text: that._getCellText(cellDate),
                        date: cellDate,
                        view: that._getViewName()
                    },
                    container: $(cell),
                    index: cellIndex
                })
            } else {
                cell.innerHTML = that._getCellText(cellDate)
            }
            cellDate = that._getNextCellData(cellDate)
        }
        var prevCellDate, cellDate = this._getFirstCellData(),
            colCount = this.option("colCount");
        for (var indexRow = 0, len = this.option("rowCount"); indexRow < len; indexRow++) {
            var row = document.createElement("tr");
            this.$body.get(0).appendChild(row);
            this._iterateCells(colCount, renderCell)
        }
    },
    _iterateCells: function(colCount, delegate) {
        var i = 0;
        while (i < colCount) {
            delegate(i);
            ++i
        }
    },
    _renderEvents: function() {
        this._createCellClickAction();
        this._$table.off(CALENDAR_DXCLICK_EVENT_NAME).on(CALENDAR_DXCLICK_EVENT_NAME, "td", $.proxy(function(e) {
            if (!$(e.currentTarget).hasClass(CALENDAR_EMPTY_CELL_CLASS)) {
                this._cellClickAction({
                    jQueryEvent: e,
                    value: $(e.currentTarget).data(CALENDAR_DATE_VALUE_KEY)
                })
            }
        }, this))
    },
    _createCellClickAction: function() {
        this._cellClickAction = this._createActionByOption("onCellClick")
    },
    _isTodayCell: abstract,
    _isDateOutOfRange: abstract,
    _isOtherView: abstract,
    _getCellText: abstract,
    _getFirstCellData: abstract,
    _getNextCellData: abstract,
    _renderContouredDate: function(contouredDate) {
        if (!this.option("focusStateEnabled")) {
            return
        }
        contouredDate = contouredDate || this.option("contouredDate");
        var $oldContouredCell = this._$table.find("." + CALENDAR_CONTOURED_DATE_CLASS);
        var $newContouredCell = this._getCellByDate(contouredDate);
        $oldContouredCell.removeClass(CALENDAR_CONTOURED_DATE_CLASS);
        $newContouredCell.addClass(CALENDAR_CONTOURED_DATE_CLASS)
    },
    _dispose: function() {
        this._keyboardProcessor = void 0;
        this.callBase()
    },
    _changeValue: function(cellDate) {
        if (cellDate) {
            var value = this.option("value"),
                newValue = value ? new Date(value) : new Date;
            newValue.setDate(cellDate.getDate());
            newValue.setMonth(cellDate.getMonth());
            newValue.setFullYear(cellDate.getFullYear());
            newValue.setDate(cellDate.getDate());
            this.option("value", newValue)
        } else {
            this.option("value", null)
        }
    },
    _renderValue: function() {
        if (!this.option("allowValueSelection")) {
            return
        }
        var value = this.option("value"),
            selectedCell = this._getCellByDate(value);
        if (this._selectedCell) {
            this._selectedCell.removeClass(CALENDAR_SELECTED_DATE_CLASS)
        }
        selectedCell.addClass(CALENDAR_SELECTED_DATE_CLASS);
        this._selectedCell = selectedCell
    },
    getCellAriaLabel: function(date) {
        return this._getCellText(date)
    },
    _getFirstAvailableDate: function() {
        var date = this.option("date"),
            min = this.option("min");
        date = dateUtils.getFirstDateView(this._getViewName(), date);
        return new Date(min && date < min ? min : date)
    },
    _getCellByDate: abstract,
    isBoundary: abstract,
    _optionChanged: function(args) {
        var name = args.name;
        switch (name) {
            case "value":
                this._renderValue();
                break;
            case "contouredDate":
                this._renderContouredDate(args.value);
                break;
            case "onCellClick":
                this._createCellClickAction();
                break;
            case "cellTemplate":
                this._invalidate();
                break;
            default:
                this.callBase(args)
        }
    }
});
module.exports = BaseView;
