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
var DxoWidthComponent = (function (_super) {
    __extends(DxoWidthComponent, _super);
    function DxoWidthComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoWidthComponent.prototype, "rangeMaxPoint", {
        get: function () {
            return this._getOption('rangeMaxPoint');
        },
        set: function (value) {
            this._setOption('rangeMaxPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "rangeMinPoint", {
        get: function () {
            return this._getOption('rangeMinPoint');
        },
        set: function (value) {
            this._setOption('rangeMinPoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "end", {
        get: function () {
            return this._getOption('end');
        },
        set: function (value) {
            this._setOption('end', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "start", {
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "left", {
        get: function () {
            return this._getOption('left');
        },
        set: function (value) {
            this._setOption('left', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "right", {
        get: function () {
            return this._getOption('right');
        },
        set: function (value) {
            this._setOption('right', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoWidthComponent.prototype, "_optionPath", {
        get: function () {
            return 'width';
        },
        enumerable: true,
        configurable: true
    });
    DxoWidthComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-width',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoWidthComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoWidthComponent.propDecorators = {
        'rangeMaxPoint': [{ type: core_1.Input },],
        'rangeMinPoint': [{ type: core_1.Input },],
        'end': [{ type: core_1.Input },],
        'start': [{ type: core_1.Input },],
        'left': [{ type: core_1.Input },],
        'right': [{ type: core_1.Input },],
    };
    return DxoWidthComponent;
}(nested_option_2.NestedOption));
exports.DxoWidthComponent = DxoWidthComponent;
var DxoWidthModule = (function () {
    function DxoWidthModule() {
    }
    DxoWidthModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoWidthComponent
                    ],
                    exports: [
                        DxoWidthComponent
                    ],
                },] },
    ];
    DxoWidthModule.ctorParameters = function () { return []; };
    return DxoWidthModule;
}());
exports.DxoWidthModule = DxoWidthModule;
//# sourceMappingURL=width.js.map