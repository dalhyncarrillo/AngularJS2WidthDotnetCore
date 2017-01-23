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
var DxoShadowComponent = (function (_super) {
    __extends(DxoShadowComponent, _super);
    function DxoShadowComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoShadowComponent.prototype, "blur", {
        get: function () {
            return this._getOption('blur');
        },
        set: function (value) {
            this._setOption('blur', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShadowComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShadowComponent.prototype, "offsetX", {
        get: function () {
            return this._getOption('offsetX');
        },
        set: function (value) {
            this._setOption('offsetX', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShadowComponent.prototype, "offsetY", {
        get: function () {
            return this._getOption('offsetY');
        },
        set: function (value) {
            this._setOption('offsetY', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShadowComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShadowComponent.prototype, "_optionPath", {
        get: function () {
            return 'shadow';
        },
        enumerable: true,
        configurable: true
    });
    DxoShadowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-shadow',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoShadowComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShadowComponent.propDecorators = {
        'blur': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'offsetX': [{ type: core_1.Input },],
        'offsetY': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
    };
    return DxoShadowComponent;
}(nested_option_2.NestedOption));
exports.DxoShadowComponent = DxoShadowComponent;
var DxoShadowModule = (function () {
    function DxoShadowModule() {
    }
    DxoShadowModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShadowComponent
                    ],
                    exports: [
                        DxoShadowComponent
                    ],
                },] },
    ];
    DxoShadowModule.ctorParameters = function () { return []; };
    return DxoShadowModule;
}());
exports.DxoShadowModule = DxoShadowModule;
//# sourceMappingURL=shadow.js.map