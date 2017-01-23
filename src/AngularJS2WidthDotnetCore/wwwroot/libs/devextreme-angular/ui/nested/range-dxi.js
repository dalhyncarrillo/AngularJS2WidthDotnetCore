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
var DxiRangeComponent = (function (_super) {
    __extends(DxiRangeComponent, _super);
    function DxiRangeComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiRangeComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRangeComponent.prototype, "_optionPath", {
        get: function () {
            return 'ranges';
        },
        enumerable: true,
        configurable: true
    });
    DxiRangeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-range',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiRangeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiRangeComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'endValue': [{ type: core_1.Input },],
        'startValue': [{ type: core_1.Input },],
    };
    return DxiRangeComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiRangeComponent = DxiRangeComponent;
var DxiRangeModule = (function () {
    function DxiRangeModule() {
    }
    DxiRangeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiRangeComponent
                    ],
                    exports: [
                        DxiRangeComponent
                    ],
                },] },
    ];
    DxiRangeModule.ctorParameters = function () { return []; };
    return DxiRangeModule;
}());
exports.DxiRangeModule = DxiRangeModule;
//# sourceMappingURL=range-dxi.js.map