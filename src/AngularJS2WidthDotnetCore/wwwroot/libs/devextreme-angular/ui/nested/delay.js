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
var DxoDelayComponent = (function (_super) {
    __extends(DxoDelayComponent, _super);
    function DxoDelayComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoDelayComponent.prototype, "hide", {
        get: function () {
            return this._getOption('hide');
        },
        set: function (value) {
            this._setOption('hide', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "show", {
        get: function () {
            return this._getOption('show');
        },
        set: function (value) {
            this._setOption('show', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoDelayComponent.prototype, "_optionPath", {
        get: function () {
            return 'delay';
        },
        enumerable: true,
        configurable: true
    });
    DxoDelayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-delay',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoDelayComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoDelayComponent.propDecorators = {
        'hide': [{ type: core_1.Input },],
        'show': [{ type: core_1.Input },],
    };
    return DxoDelayComponent;
}(nested_option_2.NestedOption));
exports.DxoDelayComponent = DxoDelayComponent;
var DxoDelayModule = (function () {
    function DxoDelayModule() {
    }
    DxoDelayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoDelayComponent
                    ],
                    exports: [
                        DxoDelayComponent
                    ],
                },] },
    ];
    DxoDelayModule.ctorParameters = function () { return []; };
    return DxoDelayModule;
}());
exports.DxoDelayModule = DxoDelayModule;
//# sourceMappingURL=delay.js.map