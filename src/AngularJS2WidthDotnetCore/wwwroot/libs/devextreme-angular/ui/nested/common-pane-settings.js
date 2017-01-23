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
var DxoCommonPaneSettingsComponent = (function (_super) {
    __extends(DxoCommonPaneSettingsComponent, _super);
    function DxoCommonPaneSettingsComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoCommonPaneSettingsComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCommonPaneSettingsComponent.prototype, "border", {
        get: function () {
            return this._getOption('border');
        },
        set: function (value) {
            this._setOption('border', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoCommonPaneSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'commonPaneSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoCommonPaneSettingsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-common-pane-settings',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoCommonPaneSettingsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoCommonPaneSettingsComponent.propDecorators = {
        'backgroundColor': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
    };
    return DxoCommonPaneSettingsComponent;
}(nested_option_2.NestedOption));
exports.DxoCommonPaneSettingsComponent = DxoCommonPaneSettingsComponent;
var DxoCommonPaneSettingsModule = (function () {
    function DxoCommonPaneSettingsModule() {
    }
    DxoCommonPaneSettingsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoCommonPaneSettingsComponent
                    ],
                    exports: [
                        DxoCommonPaneSettingsComponent
                    ],
                },] },
    ];
    DxoCommonPaneSettingsModule.ctorParameters = function () { return []; };
    return DxoCommonPaneSettingsModule;
}());
exports.DxoCommonPaneSettingsModule = DxoCommonPaneSettingsModule;
//# sourceMappingURL=common-pane-settings.js.map