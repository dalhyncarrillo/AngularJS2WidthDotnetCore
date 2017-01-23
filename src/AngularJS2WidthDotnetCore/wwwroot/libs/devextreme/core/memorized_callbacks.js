/**
 * DevExtreme (core/memorized_callbacks.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery");
var MemorizedCallbacks = function() {
    var memory = [];
    var callbacks = $.Callbacks();
    this.add = function(fn) {
        $.each(memory, function(_, item) {
            fn.apply(fn, item)
        });
        callbacks.add(fn)
    };
    this.remove = function(fn) {
        callbacks.remove(fn)
    };
    this.fire = function() {
        memory.push(arguments);
        callbacks.fire.apply(callbacks, arguments)
    }
};
module.exports = MemorizedCallbacks;
