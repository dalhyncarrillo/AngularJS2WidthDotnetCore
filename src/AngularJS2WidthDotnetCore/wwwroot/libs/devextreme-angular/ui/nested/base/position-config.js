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
var DxoPositionConfig = (function (_super) {
    __extends(DxoPositionConfig, _super);
    function DxoPositionConfig() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DxoPositionConfig.prototype, "at", {
        get: function () {
            return this._getOption('at');
        },
        set: function (value) {
            this._setOption('at', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "boundary", {
        get: function () {
            return this._getOption('boundary');
        },
        set: function (value) {
            this._setOption('boundary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "boundaryOffset", {
        get: function () {
            return this._getOption('boundaryOffset');
        },
        set: function (value) {
            this._setOption('boundaryOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "collision", {
        get: function () {
            return this._getOption('collision');
        },
        set: function (value) {
            this._setOption('collision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "my", {
        get: function () {
            return this._getOption('my');
        },
        set: function (value) {
            this._setOption('my', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "of", {
        get: function () {
            return this._getOption('of');
        },
        set: function (value) {
            this._setOption('of', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoPositionConfig;
}(nested_option_1.NestedOption));
exports.DxoPositionConfig = DxoPositionConfig;
//# sourceMappingURL=position-config.js.map