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
var format_1 = require('./base/format');
var DxoFormatComponent = (function (_super) {
    __extends(DxoFormatComponent, _super);
    function DxoFormatComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoFormatComponent.prototype, "_optionPath", {
        get: function () {
            return 'format';
        },
        enumerable: true,
        configurable: true
    });
    DxoFormatComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-format',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'currency',
                        'formatter',
                        'parser',
                        'precision',
                        'type'
                    ]
                },] },
    ];
    DxoFormatComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoFormatComponent;
}(format_1.DxoFormat));
exports.DxoFormatComponent = DxoFormatComponent;
var DxoFormatModule = (function () {
    function DxoFormatModule() {
    }
    DxoFormatModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFormatComponent
                    ],
                    exports: [
                        DxoFormatComponent
                    ],
                },] },
    ];
    DxoFormatModule.ctorParameters = function () { return []; };
    return DxoFormatModule;
}());
exports.DxoFormatModule = DxoFormatModule;
//# sourceMappingURL=format.js.map