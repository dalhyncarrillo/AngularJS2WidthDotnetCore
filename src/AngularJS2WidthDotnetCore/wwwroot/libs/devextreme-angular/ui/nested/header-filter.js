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
var DxoHeaderFilterComponent = (function (_super) {
    __extends(DxoHeaderFilterComponent, _super);
    function DxoHeaderFilterComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "groupInterval", {
        get: function () {
            return this._getOption('groupInterval');
        },
        set: function (value) {
            this._setOption('groupInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoHeaderFilterComponent.prototype, "_optionPath", {
        get: function () {
            return 'headerFilter';
        },
        enumerable: true,
        configurable: true
    });
    DxoHeaderFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-header-filter',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoHeaderFilterComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoHeaderFilterComponent.propDecorators = {
        'dataSource': [{ type: core_1.Input },],
        'groupInterval': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoHeaderFilterComponent;
}(nested_option_2.NestedOption));
exports.DxoHeaderFilterComponent = DxoHeaderFilterComponent;
var DxoHeaderFilterModule = (function () {
    function DxoHeaderFilterModule() {
    }
    DxoHeaderFilterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoHeaderFilterComponent
                    ],
                    exports: [
                        DxoHeaderFilterComponent
                    ],
                },] },
    ];
    DxoHeaderFilterModule.ctorParameters = function () { return []; };
    return DxoHeaderFilterModule;
}());
exports.DxoHeaderFilterModule = DxoHeaderFilterModule;
//# sourceMappingURL=header-filter.js.map