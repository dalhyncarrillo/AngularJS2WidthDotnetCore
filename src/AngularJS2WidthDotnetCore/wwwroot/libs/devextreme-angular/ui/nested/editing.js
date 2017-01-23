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
var DxoEditingComponent = (function (_super) {
    __extends(DxoEditingComponent, _super);
    function DxoEditingComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoEditingComponent.prototype, "allowAdding", {
        get: function () {
            return this._getOption('allowAdding');
        },
        set: function (value) {
            this._setOption('allowAdding', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDeleting", {
        get: function () {
            return this._getOption('allowDeleting');
        },
        set: function (value) {
            this._setOption('allowDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowUpdating", {
        get: function () {
            return this._getOption('allowUpdating');
        },
        set: function (value) {
            this._setOption('allowUpdating', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "editEnabled", {
        get: function () {
            return this._getOption('editEnabled');
        },
        set: function (value) {
            this._setOption('editEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "editMode", {
        get: function () {
            return this._getOption('editMode');
        },
        set: function (value) {
            this._setOption('editMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "form", {
        get: function () {
            return this._getOption('form');
        },
        set: function (value) {
            this._setOption('form', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "insertEnabled", {
        get: function () {
            return this._getOption('insertEnabled');
        },
        set: function (value) {
            this._setOption('insertEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "removeEnabled", {
        get: function () {
            return this._getOption('removeEnabled');
        },
        set: function (value) {
            this._setOption('removeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowDragging", {
        get: function () {
            return this._getOption('allowDragging');
        },
        set: function (value) {
            this._setOption('allowDragging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "allowResizing", {
        get: function () {
            return this._getOption('allowResizing');
        },
        set: function (value) {
            this._setOption('allowResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoEditingComponent.prototype, "_optionPath", {
        get: function () {
            return 'editing';
        },
        enumerable: true,
        configurable: true
    });
    DxoEditingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-editing',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxoEditingComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoEditingComponent.propDecorators = {
        'allowAdding': [{ type: core_1.Input },],
        'allowDeleting': [{ type: core_1.Input },],
        'allowUpdating': [{ type: core_1.Input },],
        'editEnabled': [{ type: core_1.Input },],
        'editMode': [{ type: core_1.Input },],
        'form': [{ type: core_1.Input },],
        'insertEnabled': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'removeEnabled': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
        'allowDragging': [{ type: core_1.Input },],
        'allowResizing': [{ type: core_1.Input },],
    };
    return DxoEditingComponent;
}(nested_option_2.NestedOption));
exports.DxoEditingComponent = DxoEditingComponent;
var DxoEditingModule = (function () {
    function DxoEditingModule() {
    }
    DxoEditingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoEditingComponent
                    ],
                    exports: [
                        DxoEditingComponent
                    ],
                },] },
    ];
    DxoEditingModule.ctorParameters = function () { return []; };
    return DxoEditingModule;
}());
exports.DxoEditingModule = DxoEditingModule;
//# sourceMappingURL=editing.js.map