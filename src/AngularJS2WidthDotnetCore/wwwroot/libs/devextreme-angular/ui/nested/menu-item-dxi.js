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
var DxiMenuItemComponent = (function (_super) {
    __extends(DxiMenuItemComponent, _super);
    function DxiMenuItemComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiMenuItemComponent.prototype, "action", {
        get: function () {
            return this._getOption('action');
        },
        set: function (value) {
            this._setOption('action', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMenuItemComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiMenuItemComponent.prototype, "_optionPath", {
        get: function () {
            return 'menuItems';
        },
        enumerable: true,
        configurable: true
    });
    DxiMenuItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-menu-item',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiMenuItemComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiMenuItemComponent.propDecorators = {
        'action': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
    };
    return DxiMenuItemComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiMenuItemComponent = DxiMenuItemComponent;
var DxiMenuItemModule = (function () {
    function DxiMenuItemModule() {
    }
    DxiMenuItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiMenuItemComponent
                    ],
                    exports: [
                        DxiMenuItemComponent
                    ],
                },] },
    ];
    DxiMenuItemModule.ctorParameters = function () { return []; };
    return DxiMenuItemModule;
}());
exports.DxiMenuItemModule = DxiMenuItemModule;
//# sourceMappingURL=menu-item-dxi.js.map