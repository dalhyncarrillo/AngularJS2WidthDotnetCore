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
var nested_option_1 = require('../../../core/nested-option');
var DxoPivotGridDataSource = (function (_super) {
    __extends(DxoPivotGridDataSource, _super);
    function DxoPivotGridDataSource() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DxoPivotGridDataSource.prototype, "fields", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "filter", {
        get: function () {
            return this._getOption('filter');
        },
        set: function (value) {
            this._setOption('filter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onChanged", {
        get: function () {
            return this._getOption('onChanged');
        },
        set: function (value) {
            this._setOption('onChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onFieldsPrepared", {
        get: function () {
            return this._getOption('onFieldsPrepared');
        },
        set: function (value) {
            this._setOption('onFieldsPrepared', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadError", {
        get: function () {
            return this._getOption('onLoadError');
        },
        set: function (value) {
            this._setOption('onLoadError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "onLoadingChanged", {
        get: function () {
            return this._getOption('onLoadingChanged');
        },
        set: function (value) {
            this._setOption('onLoadingChanged', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "remoteOperations", {
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "retrieveFields", {
        get: function () {
            return this._getOption('retrieveFields');
        },
        set: function (value) {
            this._setOption('retrieveFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPivotGridDataSource.prototype, "store", {
        get: function () {
            return this._getOption('store');
        },
        set: function (value) {
            this._setOption('store', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoPivotGridDataSource;
}(nested_option_1.NestedOption));
exports.DxoPivotGridDataSource = DxoPivotGridDataSource;
//# sourceMappingURL=pivot-grid-data-source.js.map