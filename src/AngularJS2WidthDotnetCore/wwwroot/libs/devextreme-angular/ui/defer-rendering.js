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
var defer_rendering_1 = require('devextreme/ui/defer_rendering');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var animation_1 = require('./nested/animation');
var DxDeferRenderingComponent = (function (_super) {
    __extends(DxDeferRenderingComponent, _super);
    function DxDeferRenderingComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'rendered', emit: 'onRendered' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'renderWhenChange' },
            { emit: 'showLoadIndicatorChange' },
            { emit: 'staggerItemSelectorChange' },
            { emit: 'animationChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxDeferRenderingComponent.prototype, "renderWhen", {
        get: function () {
            return this._getOption('renderWhen');
        },
        set: function (value) {
            this._setOption('renderWhen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "showLoadIndicator", {
        get: function () {
            return this._getOption('showLoadIndicator');
        },
        set: function (value) {
            this._setOption('showLoadIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "staggerItemSelector", {
        get: function () {
            return this._getOption('staggerItemSelector');
        },
        set: function (value) {
            this._setOption('staggerItemSelector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDeferRenderingComponent.prototype._createInstance = function (element, options) {
        return new defer_rendering_1.default(element, options);
    };
    DxDeferRenderingComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDeferRenderingComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxDeferRenderingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-defer-rendering',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxDeferRenderingComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxDeferRenderingComponent.propDecorators = {
        'renderWhen': [{ type: core_1.Input },],
        'showLoadIndicator': [{ type: core_1.Input },],
        'staggerItemSelector': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'onRendered': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
        'renderWhenChange': [{ type: core_1.Output },],
        'showLoadIndicatorChange': [{ type: core_1.Output },],
        'staggerItemSelectorChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
    };
    return DxDeferRenderingComponent;
}(component_1.DxComponent));
exports.DxDeferRenderingComponent = DxDeferRenderingComponent;
var DxDeferRenderingModule = (function () {
    function DxDeferRenderingModule() {
    }
    DxDeferRenderingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxDeferRenderingComponent
                    ],
                    exports: [
                        DxDeferRenderingComponent,
                        animation_1.DxoAnimationModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxDeferRenderingModule.ctorParameters = function () { return []; };
    return DxDeferRenderingModule;
}());
exports.DxDeferRenderingModule = DxDeferRenderingModule;
//# sourceMappingURL=defer-rendering.js.map