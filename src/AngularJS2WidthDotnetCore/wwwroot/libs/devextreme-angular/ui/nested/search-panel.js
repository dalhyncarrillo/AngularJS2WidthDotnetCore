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
var DxoSearchPanelComponent = (function (_super) {
    __extends(DxoSearchPanelComponent, _super);
    function DxoSearchPanelComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSearchPanelComponent.prototype, "highlightSearchText", {
        get: function () {
            return this._getOption('highlightSearchText');
        },
        set: function (value) {
            this._setOption('highlightSearchText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "searchVisibleColumnsOnly", {
        get: function () {
            return this._getOption('searchVisibleColumnsOnly');
        },
        set: function (value) {
            this._setOption('searchVisibleColumnsOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoSearchPanelComponent.prototype, "_optionPath", {
        get: function () {
            return 'searchPanel';
        },
        enumerable: true,
        configurable: true
    });
    DxoSearchPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-search-panel',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoSearchPanelComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoSearchPanelComponent.propDecorators = {
        'highlightSearchText': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'searchVisibleColumnsOnly': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoSearchPanelComponent;
}(nested_option_2.NestedOption));
exports.DxoSearchPanelComponent = DxoSearchPanelComponent;
var DxoSearchPanelModule = (function () {
    function DxoSearchPanelModule() {
    }
    DxoSearchPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSearchPanelComponent
                    ],
                    exports: [
                        DxoSearchPanelComponent
                    ],
                },] },
    ];
    DxoSearchPanelModule.ctorParameters = function () { return []; };
    return DxoSearchPanelModule;
}());
exports.DxoSearchPanelModule = DxoSearchPanelModule;
//# sourceMappingURL=search-panel.js.map