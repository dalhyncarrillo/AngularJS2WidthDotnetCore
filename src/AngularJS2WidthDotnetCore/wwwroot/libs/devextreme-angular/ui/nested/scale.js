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
var DxoScaleComponent = (function (_super) {
    __extends(DxoScaleComponent, _super);
    function DxoScaleComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoScaleComponent.prototype, "customMinorTicks", {
        get: function () {
            return this._getOption('customMinorTicks');
        },
        set: function (value) {
            this._setOption('customMinorTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "customTicks", {
        get: function () {
            return this._getOption('customTicks');
        },
        set: function (value) {
            this._setOption('customTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "hideFirstLabel", {
        get: function () {
            return this._getOption('hideFirstLabel');
        },
        set: function (value) {
            this._setOption('hideFirstLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "hideFirstTick", {
        get: function () {
            return this._getOption('hideFirstTick');
        },
        set: function (value) {
            this._setOption('hideFirstTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "hideLastLabel", {
        get: function () {
            return this._getOption('hideLastLabel');
        },
        set: function (value) {
            this._setOption('hideLastLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "hideLastTick", {
        get: function () {
            return this._getOption('hideLastTick');
        },
        set: function (value) {
            this._setOption('hideLastTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "majorTick", {
        get: function () {
            return this._getOption('majorTick');
        },
        set: function (value) {
            this._setOption('majorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTick", {
        get: function () {
            return this._getOption('minorTick');
        },
        set: function (value) {
            this._setOption('minorTick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTickInterval", {
        get: function () {
            return this._getOption('minorTickInterval');
        },
        set: function (value) {
            this._setOption('minorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "tick", {
        get: function () {
            return this._getOption('tick');
        },
        set: function (value) {
            this._setOption('tick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "horizontalOrientation", {
        get: function () {
            return this._getOption('horizontalOrientation');
        },
        set: function (value) {
            this._setOption('horizontalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "verticalOrientation", {
        get: function () {
            return this._getOption('verticalOrientation');
        },
        set: function (value) {
            this._setOption('verticalOrientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "categories", {
        get: function () {
            return this._getOption('categories');
        },
        set: function (value) {
            this._setOption('categories', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "logarithmBase", {
        get: function () {
            return this._getOption('logarithmBase');
        },
        set: function (value) {
            this._setOption('logarithmBase', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "majorTickInterval", {
        get: function () {
            return this._getOption('majorTickInterval');
        },
        set: function (value) {
            this._setOption('majorTickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "marker", {
        get: function () {
            return this._getOption('marker');
        },
        set: function (value) {
            this._setOption('marker', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "maxRange", {
        get: function () {
            return this._getOption('maxRange');
        },
        set: function (value) {
            this._setOption('maxRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minorTickCount", {
        get: function () {
            return this._getOption('minorTickCount');
        },
        set: function (value) {
            this._setOption('minorTickCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "minRange", {
        get: function () {
            return this._getOption('minRange');
        },
        set: function (value) {
            this._setOption('minRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "placeholderHeight", {
        get: function () {
            return this._getOption('placeholderHeight');
        },
        set: function (value) {
            this._setOption('placeholderHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "setTicksAtUnitBeginning", {
        get: function () {
            return this._getOption('setTicksAtUnitBeginning');
        },
        set: function (value) {
            this._setOption('setTicksAtUnitBeginning', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "showCustomBoundaryTicks", {
        get: function () {
            return this._getOption('showCustomBoundaryTicks');
        },
        set: function (value) {
            this._setOption('showCustomBoundaryTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "showMinorTicks", {
        get: function () {
            return this._getOption('showMinorTicks');
        },
        set: function (value) {
            this._setOption('showMinorTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "useTicksAutoArrangement", {
        get: function () {
            return this._getOption('useTicksAutoArrangement');
        },
        set: function (value) {
            this._setOption('useTicksAutoArrangement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "valueType", {
        get: function () {
            return this._getOption('valueType');
        },
        set: function (value) {
            this._setOption('valueType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScaleComponent.prototype, "_optionPath", {
        get: function () {
            return 'scale';
        },
        enumerable: true,
        configurable: true
    });
    DxoScaleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-scale',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoScaleComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoScaleComponent.propDecorators = {
        'customMinorTicks': [{ type: core_1.Input },],
        'customTicks': [{ type: core_1.Input },],
        'endValue': [{ type: core_1.Input },],
        'hideFirstLabel': [{ type: core_1.Input },],
        'hideFirstTick': [{ type: core_1.Input },],
        'hideLastLabel': [{ type: core_1.Input },],
        'hideLastTick': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'majorTick': [{ type: core_1.Input },],
        'minorTick': [{ type: core_1.Input },],
        'minorTickInterval': [{ type: core_1.Input },],
        'startValue': [{ type: core_1.Input },],
        'tick': [{ type: core_1.Input },],
        'tickInterval': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
        'horizontalOrientation': [{ type: core_1.Input },],
        'verticalOrientation': [{ type: core_1.Input },],
        'categories': [{ type: core_1.Input },],
        'logarithmBase': [{ type: core_1.Input },],
        'majorTickInterval': [{ type: core_1.Input },],
        'marker': [{ type: core_1.Input },],
        'maxRange': [{ type: core_1.Input },],
        'minorTickCount': [{ type: core_1.Input },],
        'minRange': [{ type: core_1.Input },],
        'placeholderHeight': [{ type: core_1.Input },],
        'setTicksAtUnitBeginning': [{ type: core_1.Input },],
        'showCustomBoundaryTicks': [{ type: core_1.Input },],
        'showMinorTicks': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'useTicksAutoArrangement': [{ type: core_1.Input },],
        'valueType': [{ type: core_1.Input },],
    };
    return DxoScaleComponent;
}(nested_option_2.NestedOption));
exports.DxoScaleComponent = DxoScaleComponent;
var DxoScaleModule = (function () {
    function DxoScaleModule() {
    }
    DxoScaleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoScaleComponent
                    ],
                    exports: [
                        DxoScaleComponent
                    ],
                },] },
    ];
    DxoScaleModule.ctorParameters = function () { return []; };
    return DxoScaleModule;
}());
exports.DxoScaleModule = DxoScaleModule;
//# sourceMappingURL=scale.js.map