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
var DxiColComponent = (function (_super) {
    __extends(DxiColComponent, _super);
    function DxiColComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiColComponent.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "screen", {
        get: function () {
            return this._getOption('screen');
        },
        set: function (value) {
            this._setOption('screen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColComponent.prototype, "_optionPath", {
        get: function () {
            return 'cols';
        },
        enumerable: true,
        configurable: true
    });
    DxiColComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-col',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiColComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiColComponent.propDecorators = {
        'baseSize': [{ type: core_1.Input },],
        'ratio': [{ type: core_1.Input },],
        'screen': [{ type: core_1.Input },],
    };
    return DxiColComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiColComponent = DxiColComponent;
var DxiColModule = (function () {
    function DxiColModule() {
    }
    DxiColModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiColComponent
                    ],
                    exports: [
                        DxiColComponent
                    ],
                },] },
    ];
    DxiColModule.ctorParameters = function () { return []; };
    return DxiColModule;
}());
exports.DxiColModule = DxiColModule;
//# sourceMappingURL=col-dxi.js.map