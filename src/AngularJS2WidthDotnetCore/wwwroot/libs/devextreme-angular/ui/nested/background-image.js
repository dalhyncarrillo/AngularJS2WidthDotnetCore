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
var DxoBackgroundImageComponent = (function (_super) {
    __extends(DxoBackgroundImageComponent, _super);
    function DxoBackgroundImageComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoBackgroundImageComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundImageComponent.prototype, "url", {
        get: function () {
            return this._getOption('url');
        },
        set: function (value) {
            this._setOption('url', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundImageComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoBackgroundImageComponent.prototype, "_optionPath", {
        get: function () {
            return 'backgroundImage';
        },
        enumerable: true,
        configurable: true
    });
    DxoBackgroundImageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-background-image',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoBackgroundImageComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoBackgroundImageComponent.propDecorators = {
        'height': [{ type: core_1.Input },],
        'url': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoBackgroundImageComponent;
}(nested_option_2.NestedOption));
exports.DxoBackgroundImageComponent = DxoBackgroundImageComponent;
var DxoBackgroundImageModule = (function () {
    function DxoBackgroundImageModule() {
    }
    DxoBackgroundImageModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoBackgroundImageComponent
                    ],
                    exports: [
                        DxoBackgroundImageComponent
                    ],
                },] },
    ];
    DxoBackgroundImageModule.ctorParameters = function () { return []; };
    return DxoBackgroundImageModule;
}());
exports.DxoBackgroundImageModule = DxoBackgroundImageModule;
//# sourceMappingURL=background-image.js.map