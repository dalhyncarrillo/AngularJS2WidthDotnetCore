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
var core_1 = require('@angular/core');
var WatcherHelper = (function () {
    function WatcherHelper() {
        this._watchers = [];
    }
    WatcherHelper.prototype.getWatchMethod = function () {
        var _this = this;
        var watchMethod = function (valueGetter, valueChangeCallback, options) {
            var oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            var watcher = function () {
                var newValue = valueGetter();
                if (_this._isDifferentValues(oldValue, newValue, options.deep)) {
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            _this._watchers.push(watcher);
            return function () {
                var index = _this._watchers.indexOf(watcher);
                if (index !== -1) {
                    _this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    };
    WatcherHelper.prototype._isDifferentValues = function (oldValue, newValue, deepCheck) {
        if (deepCheck && newValue instanceof (Object) && oldValue instanceof (Object)) {
            return this._checkObjectsFields(newValue, oldValue);
        }
        return oldValue !== newValue;
    };
    WatcherHelper.prototype._checkObjectsFields = function (checkingFromObject, checkingToObject) {
        for (var field in checkingFromObject) {
            if (checkingFromObject[field] > checkingToObject[field] || checkingFromObject[field] < checkingToObject[field]) {
                return true;
            }
        }
    };
    WatcherHelper.prototype.checkWatchers = function () {
        for (var _i = 0, _a = this._watchers; _i < _a.length; _i++) {
            var watcher = _a[_i];
            watcher();
        }
    };
    WatcherHelper.decorators = [
        { type: core_1.Injectable },
    ];
    WatcherHelper.ctorParameters = function () { return []; };
    return WatcherHelper;
}());
exports.WatcherHelper = WatcherHelper;
//# sourceMappingURL=watcher-helper.js.map