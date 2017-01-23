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
var DxoColCountByScreenComponent = (function (_super) {
    __extends(DxoColCountByScreenComponent, _super);
    function DxoColCountByScreenComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "lg", {
        get: function () {
            return this._getOption('lg');
        },
        set: function (value) {
            this._setOption('lg', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "md", {
        get: function () {
            return this._getOption('md');
        },
        set: function (value) {
            this._setOption('md', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "sm", {
        get: function () {
            return this._getOption('sm');
        },
        set: function (value) {
            this._setOption('sm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "xs", {
        get: function () {
            return this._getOption('xs');
        },
        set: function (value) {
            this._setOption('xs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColCountByScreenComponent.prototype, "_optionPath", {
        get: function () {
            return 'colCountByScreen';
        },
        enumerable: true,
        configurable: true
    });
    DxoColCountByScreenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-col-count-by-screen',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoColCountByScreenComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoColCountByScreenComponent.propDecorators = {
        'lg': [{ type: core_1.Input },],
        'md': [{ type: core_1.Input },],
        'sm': [{ type: core_1.Input },],
        'xs': [{ type: core_1.Input },],
    };
    return DxoColCountByScreenComponent;
}(nested_option_2.NestedOption));
exports.DxoColCountByScreenComponent = DxoColCountByScreenComponent;
var DxoColCountByScreenModule = (function () {
    function DxoColCountByScreenModule() {
    }
    DxoColCountByScreenModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoColCountByScreenComponent
                    ],
                    exports: [
                        DxoColCountByScreenComponent
                    ],
                },] },
    ];
    DxoColCountByScreenModule.ctorParameters = function () { return []; };
    return DxoColCountByScreenModule;
}());
exports.DxoColCountByScreenModule = DxoColCountByScreenModule;
//# sourceMappingURL=col-count-by-screen.js.map