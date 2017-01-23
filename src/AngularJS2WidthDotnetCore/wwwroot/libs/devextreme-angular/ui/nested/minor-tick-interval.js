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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var nested_option_1 = require('../../core/nested-option');
var nested_option_2 = require('../../core/nested-option');
var DxoMinorTickIntervalComponent = (function (_super) {
    __extends(DxoMinorTickIntervalComponent, _super);
    function DxoMinorTickIntervalComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "days", {
        get: function () {
            return this._getOption('days');
        },
        set: function (value) {
            this._setOption('days', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "hours", {
        get: function () {
            return this._getOption('hours');
        },
        set: function (value) {
            this._setOption('hours', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "milliseconds", {
        get: function () {
            return this._getOption('milliseconds');
        },
        set: function (value) {
            this._setOption('milliseconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "minutes", {
        get: function () {
            return this._getOption('minutes');
        },
        set: function (value) {
            this._setOption('minutes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "months", {
        get: function () {
            return this._getOption('months');
        },
        set: function (value) {
            this._setOption('months', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "quarters", {
        get: function () {
            return this._getOption('quarters');
        },
        set: function (value) {
            this._setOption('quarters', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "seconds", {
        get: function () {
            return this._getOption('seconds');
        },
        set: function (value) {
            this._setOption('seconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "weeks", {
        get: function () {
            return this._getOption('weeks');
        },
        set: function (value) {
            this._setOption('weeks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "years", {
        get: function () {
            return this._getOption('years');
        },
        set: function (value) {
            this._setOption('years', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickIntervalComponent.prototype, "_optionPath", {
        get: function () {
            return 'minorTickInterval';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinorTickIntervalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-minor-tick-interval',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoMinorTickIntervalComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMinorTickIntervalComponent.propDecorators = {
        'days': [{ type: core_1.Input },],
        'hours': [{ type: core_1.Input },],
        'milliseconds': [{ type: core_1.Input },],
        'minutes': [{ type: core_1.Input },],
        'months': [{ type: core_1.Input },],
        'quarters': [{ type: core_1.Input },],
        'seconds': [{ type: core_1.Input },],
        'weeks': [{ type: core_1.Input },],
        'years': [{ type: core_1.Input },],
    };
    return DxoMinorTickIntervalComponent;
}(nested_option_2.NestedOption));
exports.DxoMinorTickIntervalComponent = DxoMinorTickIntervalComponent;
var DxoMinorTickIntervalModule = (function () {
    function DxoMinorTickIntervalModule() {
    }
    DxoMinorTickIntervalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMinorTickIntervalComponent
                    ],
                    exports: [
                        DxoMinorTickIntervalComponent
                    ],
                },] },
    ];
    DxoMinorTickIntervalModule.ctorParameters = function () { return []; };
    return DxoMinorTickIntervalModule;
}());
exports.DxoMinorTickIntervalModule = DxoMinorTickIntervalModule;
//# sourceMappingURL=minor-tick-interval.js.map