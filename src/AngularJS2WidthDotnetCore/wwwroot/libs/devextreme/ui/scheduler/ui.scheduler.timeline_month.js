/**
 * DevExtreme (ui/scheduler/ui.scheduler.timeline_month.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var registerComponent = require("../../core/component_registrator"),
    SchedulerTimeline = require("./ui.scheduler.timeline"),
    dateUtils = require("../../core/utils/date");
var TIMELINE_CLASS = "dx-scheduler-timeline-month",
    DAY_IN_MILLISECONDS = 864e5;
var SchedulerTimelineMonth = SchedulerTimeline.inherit({
    _getElementClass: function() {
        return TIMELINE_CLASS
    },
    _getDateHeaderTemplate: function() {
        return this.option("dateCellTemplate")
    },
    _getCellCount: function() {
        var currentDate = this.option("currentDate");
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    },
    _setFirstViewDate: function() {
        this._firstViewDate = dateUtils.getFirstMonthDate(this.option("currentDate"));
        this._setStartDayHour(this._firstViewDate)
    },
    _getFormat: function() {
        return this._formatWeekdayAndDay
    },
    _getDateByIndex: function(headerIndex) {
        var resultDate = new Date(this._firstViewDate);
        resultDate.setDate(this._firstViewDate.getDate() + headerIndex);
        return resultDate
    },
    _getInterval: function() {
        return DAY_IN_MILLISECONDS
    },
    _getIntervalBetween: function(currentDate) {
        var firstViewDate = this.getStartViewDate(),
            timeZoneOffset = dateUtils.getTimezonesDifference(firstViewDate, currentDate);
        return currentDate.getTime() - (firstViewDate.getTime() - 36e5 * this.option("startDayHour")) - timeZoneOffset
    },
    calculateEndDate: function(startDate) {
        var startDateCopy = new Date(startDate);
        return new Date(startDateCopy.setHours(this.option("endDayHour")))
    },
    _calculateHiddenInterval: function() {
        return 0
    },
    _getDateByCellIndexes: function(rowIndex, cellIndex) {
        var date = this.callBase(rowIndex, cellIndex);
        this._setStartDayHour(date);
        return date
    },
    needUpdateScrollPosition: function(hours, minutes, bounds, date) {
        return this._dateWithinBounds(bounds, date)
    },
    getPositionShift: function() {
        return {
            top: 0,
            left: 0
        }
    }
});
registerComponent("dxSchedulerTimelineMonth", SchedulerTimelineMonth);
module.exports = SchedulerTimelineMonth;
