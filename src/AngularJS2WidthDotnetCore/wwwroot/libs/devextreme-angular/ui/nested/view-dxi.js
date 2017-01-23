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
var DxiViewComponent = (function (_super) {
    __extends(DxiViewComponent, _super);
    function DxiViewComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxiViewComponent.prototype, "agendaDuration", {
        get: function () {
            return this._getOption('agendaDuration');
        },
        set: function (value) {
            this._setOption('agendaDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "appointmentTemplate", {
        get: function () {
            return this._getOption('appointmentTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "appointmentTooltipTemplate", {
        get: function () {
            return this._getOption('appointmentTooltipTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTooltipTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "cellDuration", {
        get: function () {
            return this._getOption('cellDuration');
        },
        set: function (value) {
            this._setOption('cellDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "dataCellTemplate", {
        get: function () {
            return this._getOption('dataCellTemplate');
        },
        set: function (value) {
            this._setOption('dataCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "dateCellTemplate", {
        get: function () {
            return this._getOption('dateCellTemplate');
        },
        set: function (value) {
            this._setOption('dateCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "endDayHour", {
        get: function () {
            return this._getOption('endDayHour');
        },
        set: function (value) {
            this._setOption('endDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "firstDayOfWeek", {
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "groups", {
        get: function () {
            return this._getOption('groups');
        },
        set: function (value) {
            this._setOption('groups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "resourceCellTemplate", {
        get: function () {
            return this._getOption('resourceCellTemplate');
        },
        set: function (value) {
            this._setOption('resourceCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "startDayHour", {
        get: function () {
            return this._getOption('startDayHour');
        },
        set: function (value) {
            this._setOption('startDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "timeCellTemplate", {
        get: function () {
            return this._getOption('timeCellTemplate');
        },
        set: function (value) {
            this._setOption('timeCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiViewComponent.prototype, "_optionPath", {
        get: function () {
            return 'views';
        },
        enumerable: true,
        configurable: true
    });
    DxiViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-view',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    DxiViewComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiViewComponent.propDecorators = {
        'agendaDuration': [{ type: core_1.Input },],
        'appointmentTemplate': [{ type: core_1.Input },],
        'appointmentTooltipTemplate': [{ type: core_1.Input },],
        'cellDuration': [{ type: core_1.Input },],
        'dataCellTemplate': [{ type: core_1.Input },],
        'dateCellTemplate': [{ type: core_1.Input },],
        'endDayHour': [{ type: core_1.Input },],
        'firstDayOfWeek': [{ type: core_1.Input },],
        'groups': [{ type: core_1.Input },],
        'resourceCellTemplate': [{ type: core_1.Input },],
        'startDayHour': [{ type: core_1.Input },],
        'timeCellTemplate': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
    };
    return DxiViewComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiViewComponent = DxiViewComponent;
var DxiViewModule = (function () {
    function DxiViewModule() {
    }
    DxiViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiViewComponent
                    ],
                    exports: [
                        DxiViewComponent
                    ],
                },] },
    ];
    DxiViewModule.ctorParameters = function () { return []; };
    return DxiViewModule;
}());
exports.DxiViewModule = DxiViewModule;
//# sourceMappingURL=view-dxi.js.map