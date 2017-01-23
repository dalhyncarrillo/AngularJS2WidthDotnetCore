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
var DxoAdaptiveLayoutComponent = (function (_super) {
    __extends(DxoAdaptiveLayoutComponent, _super);
    function DxoAdaptiveLayoutComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoAdaptiveLayoutComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdaptiveLayoutComponent.prototype, "keepLabels", {
        get: function () {
            return this._getOption('keepLabels');
        },
        set: function (value) {
            this._setOption('keepLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdaptiveLayoutComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAdaptiveLayoutComponent.prototype, "_optionPath", {
        get: function () {
            return 'adaptiveLayout';
        },
        enumerable: true,
        configurable: true
    });
    DxoAdaptiveLayoutComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-adaptive-layout',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoAdaptiveLayoutComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAdaptiveLayoutComponent.propDecorators = {
        'height': [{ type: core_1.Input },],
        'keepLabels': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoAdaptiveLayoutComponent;
}(nested_option_2.NestedOption));
exports.DxoAdaptiveLayoutComponent = DxoAdaptiveLayoutComponent;
var DxoAdaptiveLayoutModule = (function () {
    function DxoAdaptiveLayoutModule() {
    }
    DxoAdaptiveLayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAdaptiveLayoutComponent
                    ],
                    exports: [
                        DxoAdaptiveLayoutComponent
                    ],
                },] },
    ];
    DxoAdaptiveLayoutModule.ctorParameters = function () { return []; };
    return DxoAdaptiveLayoutModule;
}());
exports.DxoAdaptiveLayoutModule = DxoAdaptiveLayoutModule;
//# sourceMappingURL=adaptive-layout.js.map