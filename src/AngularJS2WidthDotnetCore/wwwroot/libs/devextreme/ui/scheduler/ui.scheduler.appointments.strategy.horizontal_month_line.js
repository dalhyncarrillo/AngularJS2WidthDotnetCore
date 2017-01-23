/**
 * DevExtreme (ui/scheduler/ui.scheduler.appointments.strategy.horizontal_month_line.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var HorizontalAppointmentsStrategy = require("./ui.scheduler.appointments.strategy.horizontal"),
    dateUtils = require("../../core/utils/date"),
    query = require("../../data/query");
var HorizontalMonthLineRenderingStrategy = HorizontalAppointmentsStrategy.inherit({
    calculateAppointmentWidth: function(appointment) {
        var startDate = new Date(this._startDate(appointment)),
            endDate = new Date(this._endDate(appointment)),
            cellWidth = this._defaultWidth || this.getAppointmentMinSize();
        startDate = dateUtils.trimTime(startDate);
        var durationInHours = (endDate.getTime() - startDate.getTime()) / 36e5;
        return Math.ceil(durationInHours / 24) * cellWidth
    },
    getDeltaTime: function(args, initialSize) {
        var deltaWidth = this._getDeltaWidth(args, initialSize);
        return 864e5 * deltaWidth
    },
    isAllDay: function() {
        return false
    },
    createTaskPositionMap: function(items, skipSorting) {
        if (!skipSorting) {
            this.instance._sortAppointmentsByStartDate(items)
        }
        return this.callBase(items)
    },
    _getSortedPositions: function(map, skipSorting) {
        var result = this.callBase(map);
        if (!skipSorting) {
            result = query(result).sortBy("top").thenBy("left").thenBy("i").toArray()
        }
        return result
    }
});
module.exports = HorizontalMonthLineRenderingStrategy;
