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
var location_dxi_1 = require('./location-dxi');
var DxiRouteComponent = (function (_super) {
    __extends(DxiRouteComponent, _super);
    function DxiRouteComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiRouteComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "locations", {
        get: function () {
            return this._getOption('locations');
        },
        set: function (value) {
            this._setOption('locations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "weight", {
        get: function () {
            return this._getOption('weight');
        },
        set: function (value) {
            this._setOption('weight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "_optionPath", {
        get: function () {
            return 'routes';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiRouteComponent.prototype, "locationsChildren", {
        get: function () {
            return this._getOption('locations');
        },
        set: function (value) {
            this.setChildren('locations', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiRouteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-route',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiRouteComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiRouteComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'locations': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'weight': [{ type: core_1.Input },],
        'locationsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return location_dxi_1.DxiLocationComponent; }),] },],
    };
    return DxiRouteComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiRouteComponent = DxiRouteComponent;
var DxiRouteModule = (function () {
    function DxiRouteModule() {
    }
    DxiRouteModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiRouteComponent
                    ],
                    exports: [
                        DxiRouteComponent
                    ],
                },] },
    ];
    DxiRouteModule.ctorParameters = function () { return []; };
    return DxiRouteModule;
}());
exports.DxiRouteModule = DxiRouteModule;
//# sourceMappingURL=route-dxi.js.map