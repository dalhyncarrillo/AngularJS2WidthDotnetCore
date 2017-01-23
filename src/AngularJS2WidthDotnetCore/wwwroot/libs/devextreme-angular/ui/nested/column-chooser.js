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
var DxoColumnChooserComponent = (function (_super) {
    __extends(DxoColumnChooserComponent, _super);
    function DxoColumnChooserComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoColumnChooserComponent.prototype, "emptyPanelText", {
        get: function () {
            return this._getOption('emptyPanelText');
        },
        set: function (value) {
            this._setOption('emptyPanelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoColumnChooserComponent.prototype, "_optionPath", {
        get: function () {
            return 'columnChooser';
        },
        enumerable: true,
        configurable: true
    });
    DxoColumnChooserComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-column-chooser',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoColumnChooserComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoColumnChooserComponent.propDecorators = {
        'emptyPanelText': [{ type: core_1.Input },],
        'enabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoColumnChooserComponent;
}(nested_option_2.NestedOption));
exports.DxoColumnChooserComponent = DxoColumnChooserComponent;
var DxoColumnChooserModule = (function () {
    function DxoColumnChooserModule() {
    }
    DxoColumnChooserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoColumnChooserComponent
                    ],
                    exports: [
                        DxoColumnChooserComponent
                    ],
                },] },
    ];
    DxoColumnChooserModule.ctorParameters = function () { return []; };
    return DxoColumnChooserModule;
}());
exports.DxoColumnChooserModule = DxoColumnChooserModule;
//# sourceMappingURL=column-chooser.js.map