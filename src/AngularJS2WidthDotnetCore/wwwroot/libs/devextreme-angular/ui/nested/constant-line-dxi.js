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
var DxiConstantLineComponent = (function (_super) {
    __extends(DxiConstantLineComponent, _super);
    function DxiConstantLineComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiConstantLineComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiConstantLineComponent.prototype, "_optionPath", {
        get: function () {
            return 'constantLines';
        },
        enumerable: true,
        configurable: true
    });
    DxiConstantLineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-constant-line',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiConstantLineComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiConstantLineComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'dashStyle': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'paddingLeftRight': [{ type: core_1.Input },],
        'paddingTopBottom': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
    };
    return DxiConstantLineComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiConstantLineComponent = DxiConstantLineComponent;
var DxiConstantLineModule = (function () {
    function DxiConstantLineModule() {
    }
    DxiConstantLineModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiConstantLineComponent
                    ],
                    exports: [
                        DxiConstantLineComponent
                    ],
                },] },
    ];
    DxiConstantLineModule.ctorParameters = function () { return []; };
    return DxiConstantLineModule;
}());
exports.DxiConstantLineModule = DxiConstantLineModule;
//# sourceMappingURL=constant-line-dxi.js.map