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
var linear_gauge_1 = require('devextreme/viz/linear_gauge');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var export_1 = require('./nested/export');
var loading_indicator_1 = require('./nested/loading-indicator');
var font_1 = require('./nested/font');
var margin_1 = require('./nested/margin');
var size_1 = require('./nested/size');
var title_1 = require('./nested/title');
var subtitle_1 = require('./nested/subtitle');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var format_1 = require('./nested/format');
var shadow_1 = require('./nested/shadow');
var animation_1 = require('./nested/animation');
var range_container_1 = require('./nested/range-container');
var range_dxi_1 = require('./nested/range-dxi');
var width_1 = require('./nested/width');
var scale_1 = require('./nested/scale');
var label_1 = require('./nested/label');
var overlapping_behavior_1 = require('./nested/overlapping-behavior');
var major_tick_1 = require('./nested/major-tick');
var minor_tick_1 = require('./nested/minor-tick');
var tick_1 = require('./nested/tick');
var geometry_1 = require('./nested/geometry');
var subvalue_indicator_1 = require('./nested/subvalue-indicator');
var text_1 = require('./nested/text');
var value_indicator_1 = require('./nested/value-indicator');
var DxLinearGaugeComponent = (function (_super) {
    __extends(DxLinearGaugeComponent, _super);
    function DxLinearGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
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
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'animationChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'scaleChange' },
            { emit: 'subtitleChange' },
            { emit: 'subvaluesChange' },
            { emit: 'valueChange' },
            { emit: 'geometryChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'valueIndicatorChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxLinearGaugeComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rangeContainer", {
        get: function () {
            return this._getOption('rangeContainer');
        },
        set: function (value) {
            this._setOption('rangeContainer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "scale", {
        get: function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subtitle", {
        get: function () {
            return this._getOption('subtitle');
        },
        set: function (value) {
            this._setOption('subtitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalues", {
        get: function () {
            return this._getOption('subvalues');
        },
        set: function (value) {
            this._setOption('subvalues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "geometry", {
        get: function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalueIndicator", {
        get: function () {
            return this._getOption('subvalueIndicator');
        },
        set: function (value) {
            this._setOption('subvalueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "valueIndicator", {
        get: function () {
            return this._getOption('valueIndicator');
        },
        set: function (value) {
            this._setOption('valueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLinearGaugeComponent.prototype._createInstance = function (element, options) {
        return new linear_gauge_1.default(element, options);
    };
    DxLinearGaugeComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('subvalues', changes);
    };
    DxLinearGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
    };
    DxLinearGaugeComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxLinearGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-linear-gauge',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxLinearGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxLinearGaugeComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'containerBackgroundColor': [{ type: core_1.Input },],
        'rangeContainer': [{ type: core_1.Input },],
        'scale': [{ type: core_1.Input },],
        'subtitle': [{ type: core_1.Input },],
        'subvalues': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'geometry': [{ type: core_1.Input },],
        'subvalueIndicator': [{ type: core_1.Input },],
        'valueIndicator': [{ type: core_1.Input },],
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
        'exportChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'containerBackgroundColorChange': [{ type: core_1.Output },],
        'rangeContainerChange': [{ type: core_1.Output },],
        'scaleChange': [{ type: core_1.Output },],
        'subtitleChange': [{ type: core_1.Output },],
        'subvaluesChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'geometryChange': [{ type: core_1.Output },],
        'subvalueIndicatorChange': [{ type: core_1.Output },],
        'valueIndicatorChange': [{ type: core_1.Output },],
    };
    return DxLinearGaugeComponent;
}(component_1.DxComponent));
exports.DxLinearGaugeComponent = DxLinearGaugeComponent;
var DxLinearGaugeModule = (function () {
    function DxLinearGaugeModule() {
    }
    DxLinearGaugeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        animation_1.DxoAnimationModule,
                        range_container_1.DxoRangeContainerModule,
                        range_dxi_1.DxiRangeModule,
                        width_1.DxoWidthModule,
                        scale_1.DxoScaleModule,
                        label_1.DxoLabelModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        major_tick_1.DxoMajorTickModule,
                        minor_tick_1.DxoMinorTickModule,
                        tick_1.DxoTickModule,
                        geometry_1.DxoGeometryModule,
                        subvalue_indicator_1.DxoSubvalueIndicatorModule,
                        text_1.DxoTextModule,
                        value_indicator_1.DxoValueIndicatorModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxLinearGaugeComponent
                    ],
                    exports: [
                        DxLinearGaugeComponent,
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        animation_1.DxoAnimationModule,
                        range_container_1.DxoRangeContainerModule,
                        range_dxi_1.DxiRangeModule,
                        width_1.DxoWidthModule,
                        scale_1.DxoScaleModule,
                        label_1.DxoLabelModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        major_tick_1.DxoMajorTickModule,
                        minor_tick_1.DxoMinorTickModule,
                        tick_1.DxoTickModule,
                        geometry_1.DxoGeometryModule,
                        subvalue_indicator_1.DxoSubvalueIndicatorModule,
                        text_1.DxoTextModule,
                        value_indicator_1.DxoValueIndicatorModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxLinearGaugeModule.ctorParameters = function () { return []; };
    return DxLinearGaugeModule;
}());
exports.DxLinearGaugeModule = DxLinearGaugeModule;
//# sourceMappingURL=linear-gauge.js.map