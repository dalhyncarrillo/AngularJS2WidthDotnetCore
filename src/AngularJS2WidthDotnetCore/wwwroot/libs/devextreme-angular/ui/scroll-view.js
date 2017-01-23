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
var scroll_view_1 = require('devextreme/ui/scroll_view');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var DxScrollViewComponent = (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        get: function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new scroll_view_1.default(element, options);
    };
    DxScrollViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxScrollViewComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxScrollViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-scroll-view',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxScrollViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxScrollViewComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'bounceEnabled': [{ type: core_1.Input },],
        'direction': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'scrollByContent': [{ type: core_1.Input },],
        'scrollByThumb': [{ type: core_1.Input },],
        'showScrollbar': [{ type: core_1.Input },],
        'useNative': [{ type: core_1.Input },],
        'pulledDownText': [{ type: core_1.Input },],
        'pullingDownText': [{ type: core_1.Input },],
        'reachBottomText': [{ type: core_1.Input },],
        'refreshingText': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onScroll': [{ type: core_1.Output },],
        'onUpdated': [{ type: core_1.Output },],
        'onPullDown': [{ type: core_1.Output },],
        'onReachBottom': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'bounceEnabledChange': [{ type: core_1.Output },],
        'directionChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'scrollByContentChange': [{ type: core_1.Output },],
        'scrollByThumbChange': [{ type: core_1.Output },],
        'showScrollbarChange': [{ type: core_1.Output },],
        'useNativeChange': [{ type: core_1.Output },],
        'pulledDownTextChange': [{ type: core_1.Output },],
        'pullingDownTextChange': [{ type: core_1.Output },],
        'reachBottomTextChange': [{ type: core_1.Output },],
        'refreshingTextChange': [{ type: core_1.Output },],
    };
    return DxScrollViewComponent;
}(component_1.DxComponent));
exports.DxScrollViewComponent = DxScrollViewComponent;
var DxScrollViewModule = (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxScrollViewComponent
                    ],
                    exports: [
                        DxScrollViewComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxScrollViewModule.ctorParameters = function () { return []; };
    return DxScrollViewModule;
}());
exports.DxScrollViewModule = DxScrollViewModule;
//# sourceMappingURL=scroll-view.js.map