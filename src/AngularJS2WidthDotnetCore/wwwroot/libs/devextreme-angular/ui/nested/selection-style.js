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
var DxoSelectionStyleComponent = (function (_super) {
    __extends(DxoSelectionStyleComponent, _super);
    function DxoSelectionStyleComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "dashStyle", {
        get: function () {
            return this._getOption('dashStyle');
        },
        set: function (value) {
            this._setOption('dashStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "hatching", {
        get: function () {
            return this._getOption('hatching');
        },
        set: function (value) {
            this._setOption('hatching', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSelectionStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'selectionStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoSelectionStyleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-selection-style',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoSelectionStyleComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSelectionStyleComponent.propDecorators = {
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'dashStyle': [{ type: core_1.Input },],
        'hatching': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoSelectionStyleComponent;
}(nested_option_2.NestedOption));
exports.DxoSelectionStyleComponent = DxoSelectionStyleComponent;
var DxoSelectionStyleModule = (function () {
    function DxoSelectionStyleModule() {
    }
    DxoSelectionStyleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSelectionStyleComponent
                    ],
                    exports: [
                        DxoSelectionStyleComponent
                    ],
                },] },
    ];
    DxoSelectionStyleModule.ctorParameters = function () { return []; };
    return DxoSelectionStyleModule;
}());
exports.DxoSelectionStyleModule = DxoSelectionStyleModule;
//# sourceMappingURL=selection-style.js.map