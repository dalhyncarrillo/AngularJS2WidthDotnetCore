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
var DxoShowEventComponent = (function (_super) {
    __extends(DxoShowEventComponent, _super);
    function DxoShowEventComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoShowEventComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowEventComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowEventComponent.prototype, "_optionPath", {
        get: function () {
            return 'showEvent';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowEventComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-show-event',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoShowEventComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShowEventComponent.propDecorators = {
        'delay': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
    };
    return DxoShowEventComponent;
}(nested_option_2.NestedOption));
exports.DxoShowEventComponent = DxoShowEventComponent;
var DxoShowEventModule = (function () {
    function DxoShowEventModule() {
    }
    DxoShowEventModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShowEventComponent
                    ],
                    exports: [
                        DxoShowEventComponent
                    ],
                },] },
    ];
    DxoShowEventModule.ctorParameters = function () { return []; };
    return DxoShowEventModule;
}());
exports.DxoShowEventModule = DxoShowEventModule;
//# sourceMappingURL=show-event.js.map