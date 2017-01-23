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
var DxoMarkerComponent = (function (_super) {
    __extends(DxoMarkerComponent, _super);
    function DxoMarkerComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoMarkerComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "separatorHeight", {
        get: function () {
            return this._getOption('separatorHeight');
        },
        set: function (value) {
            this._setOption('separatorHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "textLeftIndent", {
        get: function () {
            return this._getOption('textLeftIndent');
        },
        set: function (value) {
            this._setOption('textLeftIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "textTopIndent", {
        get: function () {
            return this._getOption('textTopIndent');
        },
        set: function (value) {
            this._setOption('textTopIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "topIndent", {
        get: function () {
            return this._getOption('topIndent');
        },
        set: function (value) {
            this._setOption('topIndent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMarkerComponent.prototype, "_optionPath", {
        get: function () {
            return 'marker';
        },
        enumerable: true,
        configurable: true
    });
    DxoMarkerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-marker',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoMarkerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMarkerComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'separatorHeight': [{ type: core_1.Input },],
        'textLeftIndent': [{ type: core_1.Input },],
        'textTopIndent': [{ type: core_1.Input },],
        'topIndent': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return DxoMarkerComponent;
}(nested_option_2.NestedOption));
exports.DxoMarkerComponent = DxoMarkerComponent;
var DxoMarkerModule = (function () {
    function DxoMarkerModule() {
    }
    DxoMarkerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMarkerComponent
                    ],
                    exports: [
                        DxoMarkerComponent
                    ],
                },] },
    ];
    DxoMarkerModule.ctorParameters = function () { return []; };
    return DxoMarkerModule;
}());
exports.DxoMarkerModule = DxoMarkerModule;
//# sourceMappingURL=marker.js.map