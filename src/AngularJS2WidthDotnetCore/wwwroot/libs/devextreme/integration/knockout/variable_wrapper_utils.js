/**
 * DevExtreme (integration/knockout/variable_wrapper_utils.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var ko = require("knockout"),
    variableWrapper = require("../../core/utils/variable_wrapper");
variableWrapper.inject({
    isWrapped: ko.isObservable,
    isWritableWrapped: ko.isWritableObservable,
    wrap: ko.observable,
    unwrap: function(value) {
        if (ko.isObservable(value)) {
            return ko.utils.unwrapObservable(value)
        }
        return this.callBase(value)
    },
    assign: function(variable, value) {
        if (ko.isObservable(variable)) {
            variable(value)
        } else {
            this.callBase(variable, value)
        }
    }
});