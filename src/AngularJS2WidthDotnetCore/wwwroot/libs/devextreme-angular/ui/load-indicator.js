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
var load_indicator_1 = require('devextreme/ui/load_indicator');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var DxLoadIndicatorComponent = (function (_super) {
    __extends(DxLoadIndicatorComponent, _super);
    function DxLoadIndicatorComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'hintChange' },
            { emit: 'visibleChange' },
            { emit: 'indicatorSrcChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadIndicatorComponent.prototype, "indicatorSrc", {
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLoadIndicatorComponent.prototype._createInstance = function (element, options) {
        return new load_indicator_1.default(element, options);
    };
    DxLoadIndicatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLoadIndicatorComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxLoadIndicatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-load-indicator',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxLoadIndicatorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxLoadIndicatorComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'indicatorSrc': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'indicatorSrcChange': [{ type: core_1.Output },],
    };
    return DxLoadIndicatorComponent;
}(component_1.DxComponent));
exports.DxLoadIndicatorComponent = DxLoadIndicatorComponent;
var DxLoadIndicatorModule = (function () {
    function DxLoadIndicatorModule() {
    }
    DxLoadIndicatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxLoadIndicatorComponent
                    ],
                    exports: [
                        DxLoadIndicatorComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxLoadIndicatorModule.ctorParameters = function () { return []; };
    return DxLoadIndicatorModule;
}());
exports.DxLoadIndicatorModule = DxLoadIndicatorModule;
//# sourceMappingURL=load-indicator.js.map