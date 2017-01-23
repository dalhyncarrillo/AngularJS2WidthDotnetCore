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
var DxoStripStyleComponent = (function (_super) {
    __extends(DxoStripStyleComponent, _super);
    function DxoStripStyleComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoStripStyleComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStripStyleComponent.prototype, "paddingLeftRight", {
        get: function () {
            return this._getOption('paddingLeftRight');
        },
        set: function (value) {
            this._setOption('paddingLeftRight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStripStyleComponent.prototype, "paddingTopBottom", {
        get: function () {
            return this._getOption('paddingTopBottom');
        },
        set: function (value) {
            this._setOption('paddingTopBottom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStripStyleComponent.prototype, "_optionPath", {
        get: function () {
            return 'stripStyle';
        },
        enumerable: true,
        configurable: true
    });
    DxoStripStyleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-strip-style',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoStripStyleComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoStripStyleComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'paddingLeftRight': [{ type: core_1.Input },],
        'paddingTopBottom': [{ type: core_1.Input },],
    };
    return DxoStripStyleComponent;
}(nested_option_2.NestedOption));
exports.DxoStripStyleComponent = DxoStripStyleComponent;
var DxoStripStyleModule = (function () {
    function DxoStripStyleModule() {
    }
    DxoStripStyleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoStripStyleComponent
                    ],
                    exports: [
                        DxoStripStyleComponent
                    ],
                },] },
    ];
    DxoStripStyleModule.ctorParameters = function () { return []; };
    return DxoStripStyleModule;
}());
exports.DxoStripStyleModule = DxoStripStyleModule;
//# sourceMappingURL=strip-style.js.map