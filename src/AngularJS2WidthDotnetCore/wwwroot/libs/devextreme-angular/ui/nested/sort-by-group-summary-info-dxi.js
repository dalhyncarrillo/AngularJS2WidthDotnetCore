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
var DxiSortByGroupSummaryInfoComponent = (function (_super) {
    __extends(DxiSortByGroupSummaryInfoComponent, _super);
    function DxiSortByGroupSummaryInfoComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "groupColumn", {
        get: function () {
            return this._getOption('groupColumn');
        },
        set: function (value) {
            this._setOption('groupColumn', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "sortOrder", {
        get: function () {
            return this._getOption('sortOrder');
        },
        set: function (value) {
            this._setOption('sortOrder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "summaryItem", {
        get: function () {
            return this._getOption('summaryItem');
        },
        set: function (value) {
            this._setOption('summaryItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiSortByGroupSummaryInfoComponent.prototype, "_optionPath", {
        get: function () {
            return 'sortByGroupSummaryInfo';
        },
        enumerable: true,
        configurable: true
    });
    DxiSortByGroupSummaryInfoComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-sort-by-group-summary-info',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiSortByGroupSummaryInfoComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiSortByGroupSummaryInfoComponent.propDecorators = {
        'groupColumn': [{ type: core_1.Input },],
        'sortOrder': [{ type: core_1.Input },],
        'summaryItem': [{ type: core_1.Input },],
    };
    return DxiSortByGroupSummaryInfoComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiSortByGroupSummaryInfoComponent = DxiSortByGroupSummaryInfoComponent;
var DxiSortByGroupSummaryInfoModule = (function () {
    function DxiSortByGroupSummaryInfoModule() {
    }
    DxiSortByGroupSummaryInfoModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiSortByGroupSummaryInfoComponent
                    ],
                    exports: [
                        DxiSortByGroupSummaryInfoComponent
                    ],
                },] },
    ];
    DxiSortByGroupSummaryInfoModule.ctorParameters = function () { return []; };
    return DxiSortByGroupSummaryInfoModule;
}());
exports.DxiSortByGroupSummaryInfoModule = DxiSortByGroupSummaryInfoModule;
//# sourceMappingURL=sort-by-group-summary-info-dxi.js.map