/**
 * DevExtreme (core/polyfills/weak_map.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    WeakMap = window.WeakMap;
if (!WeakMap) {
    WeakMap = function() {
        var keys = [],
            values = [];
        this.set = function(key, value) {
            var index = $.inArray(key, keys);
            if (index === -1) {
                keys.push(key);
                values.push(value)
            } else {
                values[index] = value
            }
        };
        this.get = function(key) {
            var index = $.inArray(key, keys);
            if (index === -1) {
                return
            }
            return values[index]
        };
        this.has = function(key) {
            var index = $.inArray(key, keys);
            if (index === -1) {
                return false
            }
            return true
        }
    }
}
module.exports = WeakMap;
