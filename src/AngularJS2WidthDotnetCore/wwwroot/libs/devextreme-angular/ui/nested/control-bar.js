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
var DxoControlBarComponent = (function (_super) {
    __extends(DxoControlBarComponent, _super);
    function DxoControlBarComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoControlBarComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "horizontalAlignment", {
        get: function () {
            return this._getOption('horizontalAlignment');
        },
        set: function (value) {
            this._setOption('horizontalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "verticalAlignment", {
        get: function () {
            return this._getOption('verticalAlignment');
        },
        set: function (value) {
            this._setOption('verticalAlignment', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoControlBarComponent.prototype, "_optionPath", {
        get: function () {
            return 'controlBar';
        },
        enumerable: true,
        configurable: true
    });
    DxoControlBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-control-bar',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoControlBarComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoControlBarComponent.propDecorators = {
        'borderColor': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'enabled': [{ type: core_1.Input },],
        'horizontalAlignment': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'verticalAlignment': [{ type: core_1.Input },],
    };
    return DxoControlBarComponent;
}(nested_option_2.NestedOption));
exports.DxoControlBarComponent = DxoControlBarComponent;
var DxoControlBarModule = (function () {
    function DxoControlBarModule() {
    }
    DxoControlBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoControlBarComponent
                    ],
                    exports: [
                        DxoControlBarComponent
                    ],
                },] },
    ];
    DxoControlBarModule.ctorParameters = function () { return []; };
    return DxoControlBarModule;
}());
exports.DxoControlBarModule = DxoControlBarModule;
//# sourceMappingURL=control-bar.js.map