/**
 * DevExtreme (ui/scheduler/ui.scheduler.timeline_week.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    registerComponent = require("../../core/component_registrator"),
    SchedulerTimeline = require("./ui.scheduler.timeline");
var TIMELINE_CLASS = "dx-scheduler-timeline-week",
    HEADER_PANEL_CELL_CLASS = "dx-scheduler-header-panel-cell",
    HEADER_ROW_CLASS = "dx-scheduler-header-row",
    CELL_WIDTH = 200;
var SchedulerTimelineWeek = SchedulerTimeline.inherit({
    _getElementClass: function() {
        return TIMELINE_CLASS
    },
    _getCellCount: function() {
        return this.callBase() * this._getWeekDuration()
    },
    _renderDateHeader: function() {
        var $headerRow = this.callBase(),
            firstViewDate = new Date(this._firstViewDate),
            $cells = [],
            colspan = this._getCellCountInDay(),
            cellTemplate = this.option("dateCellTemplate"),
            headerCellWidth = colspan * CELL_WIDTH;
        for (var i = 0; i < this._getWeekDuration(); i++) {
            var $th = $("<th>"),
                text = this._formatWeekdayAndDay(firstViewDate);
            if (cellTemplate) {
                var templateOptions = {
                    model: {
                        text: text,
                        date: firstViewDate
                    },
                    container: $th,
                    index: i
                };
                cellTemplate.render(templateOptions)
            } else {
                $th.text(text)
            }
            $th.addClass(HEADER_PANEL_CELL_CLASS).attr("colspan", colspan).width(headerCellWidth);
            $cells.push($th);
            firstViewDate.setDate(firstViewDate.getDate() + 1)
        }
        var $row = $("<tr>").addClass(HEADER_ROW_CLASS).append($cells);
        $headerRow.before($row)
    },
    _getWeekDuration: function() {
        return 7
    }
});
registerComponent("dxSchedulerTimelineWeek", SchedulerTimelineWeek);
module.exports = SchedulerTimelineWeek;