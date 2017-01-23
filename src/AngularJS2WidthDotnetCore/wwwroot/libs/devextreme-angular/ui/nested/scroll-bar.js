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
var DxoScrollBarComponent = (function (_super) {
    __extends(DxoScrollBarComponent, _super);
    function DxoScrollBarComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoScrollBarComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoScrollBarComponent.prototype, "_optionPath", {
        get: function () {
            return 'scrollBar';
        },
        enumerable: true,
        configurable: true
    });
    DxoScrollBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-scroll-bar',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoScrollBarComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoScrollBarComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoScrollBarComponent;
}(nested_option_2.NestedOption));
exports.DxoScrollBarComponent = DxoScrollBarComponent;
var DxoScrollBarModule = (function () {
    function DxoScrollBarModule() {
    }
    DxoScrollBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoScrollBarComponent
                    ],
                    exports: [
                        DxoScrollBarComponent
                    ],
                },] },
    ];
    DxoScrollBarModule.ctorParameters = function () { return []; };
    return DxoScrollBarModule;
}());
exports.DxoScrollBarModule = DxoScrollBarModule;
//# sourceMappingURL=scroll-bar.js.map