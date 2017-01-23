/**
 * DevExtreme (ui/date_box/ui.date_utils.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    dateLocalization = require("../../localization/date");
var dateComponents = function() {
    return ["year", "day", "month", "day"]
};
var ONE_MINUTE = 6e4;
var ONE_DAY = 60 * ONE_MINUTE * 24;
var ONE_YEAR = 365 * ONE_DAY;
var getStringFormat = function(format) {
    var formatType = typeof format;
    if ("string" === formatType) {
        return "format"
    }
    if ("object" === formatType && void 0 !== format.type) {
        return format.type
    }
    return null
};
var dateUtils = {
    SUPPORTED_FORMATS: ["date", "time", "datetime"],
    DEFAULT_FORMATTER: function(value) {
        return value
    },
    DATE_COMPONENT_TEXT_FORMATTER: function(value, name) {
        var $container = $("<div>").addClass("dx-dateview-formatter-container");
        $("<span>").text(value).addClass("dx-dateview-value-formatter").appendTo($container);
        $("<span>").text(name).addClass("dx-dateview-name-formatter").appendTo($container);
        return $container
    },
    ONE_MINUTE: ONE_MINUTE,
    ONE_DAY: ONE_DAY,
    ONE_YEAR: ONE_YEAR,
    MIN_DATEVIEW_DEFAULT_DATE: new Date(1900, 0, 1),
    MAX_DATEVIEW_DEFAULT_DATE: function() {
        var newDate = new Date;
        return new Date(newDate.getFullYear() + 50, newDate.getMonth(), newDate.getDate(), 23, 59, 59)
    }(),
    FORMATS_INFO: {
        date: {
            getStandardPattern: function() {
                return "yyyy-MM-dd"
            },
            components: dateComponents()
        },
        time: {
            getStandardPattern: function() {
                return "HH':'mm"
            },
            components: ["hours", "minutes"]
        },
        datetime: {
            getStandardPattern: function() {
                var standardPattern;
                ! function() {
                    var androidFormatPattern = "yyyy-MM-ddTHH':'mm'Z'";
                    var $input = $("<input>").attr("type", "datetime");
                    $input.val(dateUtils.toStandardDateFormat(new Date, "datetime", androidFormatPattern));
                    if ($input.val()) {
                        standardPattern = androidFormatPattern
                    }
                }();
                if (!standardPattern) {
                    standardPattern = "yyyy-MM-ddTHH':'mm':'ss'Z'"
                }
                dateUtils.FORMATS_INFO.datetime.getStandardPattern = function() {
                    return standardPattern
                };
                return standardPattern
            },
            components: dateComponents().concat(["hours", "minutes", "seconds", "milliseconds"])
        },
        "datetime-local": {
            getStandardPattern: function() {
                return "yyyy-MM-ddTHH':'mm':'ss"
            },
            components: dateComponents().concat(["hours", "minutes", "seconds"])
        }
    },
    FORMATS_MAP: {
        date: "shortdate",
        time: "shorttime",
        datetime: "shortdateshorttime",
        "datetime-local": "datetime-local"
    },
    SUBMIT_FORMATS_MAP: {
        date: "date",
        time: "time",
        datetime: "datetime-local"
    },
    toStandardDateFormat: function(date, mode, pattern) {
        pattern = pattern || dateUtils.FORMATS_INFO[mode].getStandardPattern();
        return dateLocalization.format(date, pattern)
    },
    fromStandardDateFormat: function(date) {
        return dateLocalization.parse(date, dateUtils.FORMATS_INFO.datetime.getStandardPattern()) || dateLocalization.parse(date, dateUtils.FORMATS_INFO["datetime-local"].getStandardPattern()) || dateLocalization.parse(date, dateUtils.FORMATS_INFO.time.getStandardPattern()) || dateLocalization.parse(date, dateUtils.FORMATS_INFO.date.getStandardPattern()) || Date.parse && Date.parse(date) && new Date(Date.parse(date))
    },
    getMaxMonthDay: function(year, month) {
        return new Date(year, month + 1, 0).getDate()
    },
    mergeDates: function(oldValue, newValue, format) {
        if (!newValue) {
            return newValue || null
        }
        if (!oldValue || isNaN(oldValue.getTime())) {
            var now = new Date(null);
            oldValue = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        }
        var result = new Date(oldValue.valueOf());
        var formatInfo = dateUtils.FORMATS_INFO[format];
        $.each(formatInfo.components, function() {
            var componentInfo = dateUtils.DATE_COMPONENTS_INFO[this];
            result[componentInfo.setter](newValue[componentInfo.getter]())
        });
        return result
    },
    getLongestCaptionIndex: function(captionArray) {
        var i, longestIndex = 0,
            longestCaptionLength = 0;
        for (i = 0; i < captionArray.length; ++i) {
            if (captionArray[i].length > longestCaptionLength) {
                longestIndex = i;
                longestCaptionLength = captionArray[i].length
            }
        }
        return longestIndex
    },
    formatUsesMonthName: function(format) {
        return dateLocalization.formatUsesMonthName(format)
    },
    formatUsesDayName: function(format) {
        return dateLocalization.formatUsesDayName(format)
    },
    getLongestDate: function(format, monthNames, dayNames) {
        var stringFormat = getStringFormat(format),
            month = 9;
        if (!stringFormat || dateUtils.formatUsesMonthName(stringFormat)) {
            month = dateUtils.getLongestCaptionIndex(monthNames)
        }
        var longestDate = new Date(1888, month, 21, 23, 59, 59, 999);
        if (!stringFormat || dateUtils.formatUsesDayName(stringFormat)) {
            var date = longestDate.getDate() - longestDate.getDay() + dateUtils.getLongestCaptionIndex(dayNames);
            longestDate.setDate(date)
        }
        return longestDate
    }
};
dateUtils.DATE_COMPONENTS_INFO = {
    year: {
        getter: "getFullYear",
        setter: "setFullYear",
        formatter: dateUtils.DEFAULT_FORMATTER,
        startValue: void 0,
        endValue: void 0
    },
    day: {
        getter: "getDate",
        setter: "setDate",
        formatter: function(value, showNames, date) {
            if (!showNames) {
                return value
            }
            var formatDate = new Date(date.getTime());
            formatDate.setDate(value);
            return dateUtils.DATE_COMPONENT_TEXT_FORMATTER(value, dateLocalization.getDayNames()[formatDate.getDay()])
        },
        startValue: 1,
        endValue: void 0
    },
    month: {
        getter: "getMonth",
        setter: "setMonth",
        formatter: function(value, showNames) {
            var monthName = dateLocalization.getMonthNames()[value];
            return showNames ? dateUtils.DATE_COMPONENT_TEXT_FORMATTER(value + 1, monthName) : monthName
        },
        startValue: 0,
        endValue: 11
    },
    hours: {
        getter: "getHours",
        setter: "setHours",
        formatter: function(value) {
            return dateLocalization.format(new Date(0, 0, 0, value), "hour")
        },
        startValue: 0,
        endValue: 23
    },
    minutes: {
        getter: "getMinutes",
        setter: "setMinutes",
        formatter: function(value) {
            return dateLocalization.format(new Date(0, 0, 0, 0, value), "minute")
        },
        startValue: 0,
        endValue: 59
    },
    seconds: {
        getter: "getSeconds",
        setter: "setSeconds",
        formatter: function(value) {
            return dateLocalization.format(new Date(0, 0, 0, 0, 0, value), "second")
        },
        startValue: 0,
        endValue: 59
    },
    milliseconds: {
        getter: "getMilliseconds",
        setter: "setMilliseconds",
        formatter: function(value) {
            return dateLocalization.format(new Date(0, 0, 0, 0, 0, 0, value), "millisecond")
        },
        startValue: 0,
        endValue: 999
    }
};
module.exports = dateUtils;
