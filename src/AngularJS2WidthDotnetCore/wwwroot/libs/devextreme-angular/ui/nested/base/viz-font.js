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
var DxoVizFont = (function (_super) {
    __extends(DxoVizFont, _super);
    function DxoVizFont() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DxoVizFont.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoVizFont.prototype, "family", {
        get: function () {
            return this._getOption('family');
        },
        set: function (value) {
            this._setOption('family', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoVizFont.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoVizFont.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoVizFont.prototype, "weight", {
        get: function () {
            return this._getOption('weight');
        },
        set: function (value) {
            this._setOption('weight', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoVizFont;
}(nested_option_1.NestedOption));
exports.DxoVizFont = DxoVizFont;
//# sourceMappingURL=viz-font.js.map