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
var DxiFieldComponent = (function (_super) {
    __extends(DxiFieldComponent, _super);
    function DxiFieldComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiFieldComponent.prototype, "allowCrossGroupCalculation", {
        get: function () {
            return this._getOption('allowCrossGroupCalculation');
        },
        set: function (value) {
            this._setOption('allowCrossGroupCalculation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "allowExpandAll", {
        get: function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "allowFiltering", {
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "allowSorting", {
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "allowSortingBySummary", {
        get: function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "area", {
        get: function () {
            return this._getOption('area');
        },
        set: function (value) {
            this._setOption('area', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "areaIndex", {
        get: function () {
            return this._getOption('areaIndex');
        },
        set: function (value) {
            this._setOption('areaIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "calculateCustomSummary", {
        get: function () {
            return this._getOption('calculateCustomSummary');
        },
        set: function (value) {
            this._setOption('calculateCustomSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "calculateSummaryValue", {
        get: function () {
            return this._getOption('calculateSummaryValue');
        },
        set: function (value) {
            this._setOption('calculateSummaryValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "customizeText", {
        get: function () {
            return this._getOption('customizeText');
        },
        set: function (value) {
            this._setOption('customizeText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "dataType", {
        get: function () {
            return this._getOption('dataType');
        },
        set: function (value) {
            this._setOption('dataType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "displayFolder", {
        get: function () {
            return this._getOption('displayFolder');
        },
        set: function (value) {
            this._setOption('displayFolder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "expanded", {
        get: function () {
            return this._getOption('expanded');
        },
        set: function (value) {
            this._setOption('expanded', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "filterType", {
        get: function () {
            return this._getOption('filterType');
        },
        set: function (value) {
            this._setOption('filterType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "filterValues", {
        get: function () {
            return this._getOption('filterValues');
        },
        set: function (value) {
            this._setOption('filterValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "groupIndex", {
        get: function () {
            return this._getOption('groupIndex');
        },
        set: function (value) {
            this._setOption('groupIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "groupInterval", {
        get: function () {
            return this._getOption('groupInterval');
        },
        set: function (value) {
            this._setOption('groupInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "groupName", {
        get: function () {
            return this._getOption('groupName');
        },
        set: function (value) {
            this._setOption('groupName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "isMeasure", {
        get: function () {
            return this._getOption('isMeasure');
        },
        set: function (value) {
            this._setOption('isMeasure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "runningTotal", {
        get: function () {
            return this._getOption('runningTotal');
        },
        set: function (value) {
            this._setOption('runningTotal', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "selector", {
        get: function () {
            return this._getOption('selector');
        },
        set: function (value) {
            this._setOption('selector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "showGrandTotals", {
        get: function () {
            return this._getOption('showGrandTotals');
        },
        set: function (value) {
            this._setOption('showGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "showTotals", {
        get: function () {
            return this._getOption('showTotals');
        },
        set: function (value) {
            this._setOption('showTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "sortBy", {
        get: function () {
            return this._getOption('sortBy');
        },
        set: function (value) {
            this._setOption('sortBy', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "sortBySummaryField", {
        get: function () {
            return this._getOption('sortBySummaryField');
        },
        set: function (value) {
            this._setOption('sortBySummaryField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "sortBySummaryPath", {
        get: function () {
            return this._getOption('sortBySummaryPath');
        },
        set: function (value) {
            this._setOption('sortBySummaryPath', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "sortingMethod", {
        get: function () {
            return this._getOption('sortingMethod');
        },
        set: function (value) {
            this._setOption('sortingMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "summaryDisplayMode", {
        get: function () {
            return this._getOption('summaryDisplayMode');
        },
        set: function (value) {
            this._setOption('summaryDisplayMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "summaryType", {
        get: function () {
            return this._getOption('summaryType');
        },
        set: function (value) {
            this._setOption('summaryType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "wordWrapEnabled", {
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiFieldComponent.prototype, "_optionPath", {
        get: function () {
            return 'fields';
        },
        enumerable: true,
        configurable: true
    });
    DxiFieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-field',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiFieldComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiFieldComponent.propDecorators = {
        'allowCrossGroupCalculation': [{ type: core_1.Input },],
        'allowExpandAll': [{ type: core_1.Input },],
        'allowFiltering': [{ type: core_1.Input },],
        'allowSorting': [{ type: core_1.Input },],
        'allowSortingBySummary': [{ type: core_1.Input },],
        'area': [{ type: core_1.Input },],
        'areaIndex': [{ type: core_1.Input },],
        'calculateCustomSummary': [{ type: core_1.Input },],
        'calculateSummaryValue': [{ type: core_1.Input },],
        'caption': [{ type: core_1.Input },],
        'customizeText': [{ type: core_1.Input },],
        'dataField': [{ type: core_1.Input },],
        'dataType': [{ type: core_1.Input },],
        'displayFolder': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'filterType': [{ type: core_1.Input },],
        'filterValues': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'groupIndex': [{ type: core_1.Input },],
        'groupInterval': [{ type: core_1.Input },],
        'groupName': [{ type: core_1.Input },],
        'isMeasure': [{ type: core_1.Input },],
        'precision': [{ type: core_1.Input },],
        'runningTotal': [{ type: core_1.Input },],
        'selector': [{ type: core_1.Input },],
        'showGrandTotals': [{ type: core_1.Input },],
        'showTotals': [{ type: core_1.Input },],
        'sortBy': [{ type: core_1.Input },],
        'sortBySummaryField': [{ type: core_1.Input },],
        'sortBySummaryPath': [{ type: core_1.Input },],
        'sortingMethod': [{ type: core_1.Input },],
        'sortOrder': [{ type: core_1.Input },],
        'summaryDisplayMode': [{ type: core_1.Input },],
        'summaryType': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'wordWrapEnabled': [{ type: core_1.Input },],
    };
    return DxiFieldComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiFieldComponent = DxiFieldComponent;
var DxiFieldModule = (function () {
    function DxiFieldModule() {
    }
    DxiFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiFieldComponent
                    ],
                    exports: [
                        DxiFieldComponent
                    ],
                },] },
    ];
    DxiFieldModule.ctorParameters = function () { return []; };
    return DxiFieldModule;
}());
exports.DxiFieldModule = DxiFieldModule;
//# sourceMappingURL=field-dxi.js.map