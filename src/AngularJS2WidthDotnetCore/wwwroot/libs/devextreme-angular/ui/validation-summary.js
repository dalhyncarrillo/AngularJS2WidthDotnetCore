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
var validation_summary_1 = require('devextreme/ui/validation_summary');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var item_dxi_2 = require('./nested/item-dxi');
var DxValidationSummaryComponent = (function (_super) {
    __extends(DxValidationSummaryComponent, _super);
    function DxValidationSummaryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { emit: 'elementAttrChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'validationGroupChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxValidationSummaryComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationSummaryComponent.prototype._createInstance = function (element, options) {
        return new validation_summary_1.default(element, options);
    };
    DxValidationSummaryComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidationSummaryComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('items', changes);
    };
    DxValidationSummaryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    DxValidationSummaryComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxValidationSummaryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-validation-summary',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxValidationSummaryComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxValidationSummaryComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'validationGroup': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'validationGroupChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxValidationSummaryComponent;
}(component_1.DxComponent));
exports.DxValidationSummaryComponent = DxValidationSummaryComponent;
var DxValidationSummaryModule = (function () {
    function DxValidationSummaryModule() {
    }
    DxValidationSummaryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxValidationSummaryComponent
                    ],
                    exports: [
                        DxValidationSummaryComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxValidationSummaryModule.ctorParameters = function () { return []; };
    return DxValidationSummaryModule;
}());
exports.DxValidationSummaryModule = DxValidationSummaryModule;
//# sourceMappingURL=validation-summary.js.map