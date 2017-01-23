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
var DxoSeriesTemplateComponent = (function (_super) {
    __extends(DxoSeriesTemplateComponent, _super);
    function DxoSeriesTemplateComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "customizeSeries", {
        get: function () {
            return this._getOption('customizeSeries');
        },
        set: function (value) {
            this._setOption('customizeSeries', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "nameField", {
        get: function () {
            return this._getOption('nameField');
        },
        set: function (value) {
            this._setOption('nameField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSeriesTemplateComponent.prototype, "_optionPath", {
        get: function () {
            return 'seriesTemplate';
        },
        enumerable: true,
        configurable: true
    });
    DxoSeriesTemplateComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-series-template',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoSeriesTemplateComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSeriesTemplateComponent.propDecorators = {
        'customizeSeries': [{ type: core_1.Input },],
        'nameField': [{ type: core_1.Input },],
    };
    return DxoSeriesTemplateComponent;
}(nested_option_2.NestedOption));
exports.DxoSeriesTemplateComponent = DxoSeriesTemplateComponent;
var DxoSeriesTemplateModule = (function () {
    function DxoSeriesTemplateModule() {
    }
    DxoSeriesTemplateModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSeriesTemplateComponent
                    ],
                    exports: [
                        DxoSeriesTemplateComponent
                    ],
                },] },
    ];
    DxoSeriesTemplateModule.ctorParameters = function () { return []; };
    return DxoSeriesTemplateModule;
}());
exports.DxoSeriesTemplateModule = DxoSeriesTemplateModule;
//# sourceMappingURL=series-template.js.map