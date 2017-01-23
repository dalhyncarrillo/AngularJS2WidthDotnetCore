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
var bullet_1 = require('devextreme/viz/bullet');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var margin_1 = require('./nested/margin');
var size_1 = require('./nested/size');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var font_1 = require('./nested/font');
var format_1 = require('./nested/format');
var shadow_1 = require('./nested/shadow');
var DxBulletComponent = (function (_super) {
    __extends(DxBulletComponent, _super);
    function DxBulletComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'elementAttrChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'colorChange' },
            { emit: 'endScaleValueChange' },
            { emit: 'showTargetChange' },
            { emit: 'showZeroLevelChange' },
            { emit: 'startScaleValueChange' },
            { emit: 'targetChange' },
            { emit: 'targetColorChange' },
            { emit: 'targetWidthChange' },
            { emit: 'valueChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxBulletComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "endScaleValue", {
        get: function () {
            return this._getOption('endScaleValue');
        },
        set: function (value) {
            this._setOption('endScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showTarget", {
        get: function () {
            return this._getOption('showTarget');
        },
        set: function (value) {
            this._setOption('showTarget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showZeroLevel", {
        get: function () {
            return this._getOption('showZeroLevel');
        },
        set: function (value) {
            this._setOption('showZeroLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "startScaleValue", {
        get: function () {
            return this._getOption('startScaleValue');
        },
        set: function (value) {
            this._setOption('startScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetColor", {
        get: function () {
            return this._getOption('targetColor');
        },
        set: function (value) {
            this._setOption('targetColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetWidth", {
        get: function () {
            return this._getOption('targetWidth');
        },
        set: function (value) {
            this._setOption('targetWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBulletComponent.prototype._createInstance = function (element, options) {
        return new bullet_1.default(element, options);
    };
    DxBulletComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxBulletComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxBulletComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-bullet',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxBulletComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxBulletComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'endScaleValue': [{ type: core_1.Input },],
        'showTarget': [{ type: core_1.Input },],
        'showZeroLevel': [{ type: core_1.Input },],
        'startScaleValue': [{ type: core_1.Input },],
        'target': [{ type: core_1.Input },],
        'targetColor': [{ type: core_1.Input },],
        'targetWidth': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'colorChange': [{ type: core_1.Output },],
        'endScaleValueChange': [{ type: core_1.Output },],
        'showTargetChange': [{ type: core_1.Output },],
        'showZeroLevelChange': [{ type: core_1.Output },],
        'startScaleValueChange': [{ type: core_1.Output },],
        'targetChange': [{ type: core_1.Output },],
        'targetColorChange': [{ type: core_1.Output },],
        'targetWidthChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
    };
    return DxBulletComponent;
}(component_1.DxComponent));
exports.DxBulletComponent = DxBulletComponent;
var DxBulletModule = (function () {
    function DxBulletModule() {
    }
    DxBulletModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxBulletComponent
                    ],
                    exports: [
                        DxBulletComponent,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxBulletModule.ctorParameters = function () { return []; };
    return DxBulletModule;
}());
exports.DxBulletModule = DxBulletModule;
//# sourceMappingURL=bullet.js.map