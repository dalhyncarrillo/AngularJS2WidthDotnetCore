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
var DxoStoreComponent = (function (_super) {
    __extends(DxoStoreComponent, _super);
    function DxoStoreComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoStoreComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStoreComponent.prototype, "_optionPath", {
        get: function () {
            return 'store';
        },
        enumerable: true,
        configurable: true
    });
    DxoStoreComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-store',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoStoreComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoStoreComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
    };
    return DxoStoreComponent;
}(nested_option_2.NestedOption));
exports.DxoStoreComponent = DxoStoreComponent;
var DxoStoreModule = (function () {
    function DxoStoreModule() {
    }
    DxoStoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoStoreComponent
                    ],
                    exports: [
                        DxoStoreComponent
                    ],
                },] },
    ];
    DxoStoreModule.ctorParameters = function () { return []; };
    return DxoStoreModule;
}());
exports.DxoStoreModule = DxoStoreModule;
//# sourceMappingURL=store.js.map