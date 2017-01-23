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
var range_selector_1 = require('devextreme/viz/range_selector');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
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
var background_1 = require('./nested/background');
var image_1 = require('./nested/image');
var behavior_1 = require('./nested/behavior');
var chart_1 = require('./nested/chart');
var common_series_settings_1 = require('./nested/common-series-settings');
var border_1 = require('./nested/border');
var hover_style_1 = require('./nested/hover-style');
var hatching_1 = require('./nested/hatching');
var label_1 = require('./nested/label');
var argument_format_1 = require('./nested/argument-format');
var connector_1 = require('./nested/connector');
var format_1 = require('./nested/format');
var point_1 = require('./nested/point');
var height_1 = require('./nested/height');
var url_1 = require('./nested/url');
var width_1 = require('./nested/width');
var selection_style_1 = require('./nested/selection-style');
var reduction_1 = require('./nested/reduction');
var value_error_bar_1 = require('./nested/value-error-bar');
var area_1 = require('./nested/area');
var bar_1 = require('./nested/bar');
var bubble_1 = require('./nested/bubble');
var candlestick_1 = require('./nested/candlestick');
var fullstackedarea_1 = require('./nested/fullstackedarea');
var fullstackedbar_1 = require('./nested/fullstackedbar');
var fullstackedline_1 = require('./nested/fullstackedline');
var fullstackedspline_1 = require('./nested/fullstackedspline');
var fullstackedsplinearea_1 = require('./nested/fullstackedsplinearea');
var line_1 = require('./nested/line');
var rangearea_1 = require('./nested/rangearea');
var rangebar_1 = require('./nested/rangebar');
var scatter_1 = require('./nested/scatter');
var spline_1 = require('./nested/spline');
var splinearea_1 = require('./nested/splinearea');
var stackedarea_1 = require('./nested/stackedarea');
var stackedbar_1 = require('./nested/stackedbar');
var stackedline_1 = require('./nested/stackedline');
var stackedspline_1 = require('./nested/stackedspline');
var stackedsplinearea_1 = require('./nested/stackedsplinearea');
var steparea_1 = require('./nested/steparea');
var stepline_1 = require('./nested/stepline');
var stock_1 = require('./nested/stock');
var data_prepare_settings_1 = require('./nested/data-prepare-settings');
var series_dxi_1 = require('./nested/series-dxi');
var series_template_1 = require('./nested/series-template');
var value_axis_1 = require('./nested/value-axis');
var indent_1 = require('./nested/indent');
var scale_1 = require('./nested/scale');
var major_tick_interval_1 = require('./nested/major-tick-interval');
var marker_1 = require('./nested/marker');
var max_range_1 = require('./nested/max-range');
var minor_tick_1 = require('./nested/minor-tick');
var minor_tick_interval_1 = require('./nested/minor-tick-interval');
var min_range_1 = require('./nested/min-range');
var tick_1 = require('./nested/tick');
var tick_interval_1 = require('./nested/tick-interval');
var selected_range_1 = require('./nested/selected-range');
var shutter_1 = require('./nested/shutter');
var slider_handle_1 = require('./nested/slider-handle');
var slider_marker_1 = require('./nested/slider-marker');
var placeholder_size_1 = require('./nested/placeholder-size');
var DxRangeSelectorComponent = (function (_super) {
    __extends(DxRangeSelectorComponent, _super);
    function DxRangeSelectorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
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
            { subscribe: 'selectedRangeChanged', emit: 'onSelectedRangeChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
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
            { emit: 'backgroundChange' },
            { emit: 'behaviorChange' },
            { emit: 'chartChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataSourceFieldChange' },
            { emit: 'indentChange' },
            { emit: 'scaleChange' },
            { emit: 'selectedRangeChange' },
            { emit: 'selectedRangeColorChange' },
            { emit: 'shutterChange' },
            { emit: 'sliderHandleChange' },
            { emit: 'sliderMarkerChange' },
            { emit: 'valueChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxRangeSelectorComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "background", {
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "behavior", {
        get: function () {
            return this._getOption('behavior');
        },
        set: function (value) {
            this._setOption('behavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "chart", {
        get: function () {
            return this._getOption('chart');
        },
        set: function (value) {
            this._setOption('chart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSourceField", {
        get: function () {
            return this._getOption('dataSourceField');
        },
        set: function (value) {
            this._setOption('dataSourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "indent", {
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "scale", {
        get: function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRange", {
        get: function () {
            return this._getOption('selectedRange');
        },
        set: function (value) {
            this._setOption('selectedRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeColor", {
        get: function () {
            return this._getOption('selectedRangeColor');
        },
        set: function (value) {
            this._setOption('selectedRangeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "shutter", {
        get: function () {
            return this._getOption('shutter');
        },
        set: function (value) {
            this._setOption('shutter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderHandle", {
        get: function () {
            return this._getOption('sliderHandle');
        },
        set: function (value) {
            this._setOption('sliderHandle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderMarker", {
        get: function () {
            return this._getOption('sliderMarker');
        },
        set: function (value) {
            this._setOption('sliderMarker', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRangeSelectorComponent.prototype._createInstance = function (element, options) {
        var widget = new range_selector_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxRangeSelectorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('value', changes);
    };
    DxRangeSelectorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
    };
    DxRangeSelectorComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxRangeSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-range-selector',
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
    DxRangeSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxRangeSelectorComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
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
        'background': [{ type: core_1.Input },],
        'behavior': [{ type: core_1.Input },],
        'chart': [{ type: core_1.Input },],
        'containerBackgroundColor': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'dataSourceField': [{ type: core_1.Input },],
        'indent': [{ type: core_1.Input },],
        'scale': [{ type: core_1.Input },],
        'selectedRange': [{ type: core_1.Input },],
        'selectedRangeColor': [{ type: core_1.Input },],
        'shutter': [{ type: core_1.Input },],
        'sliderHandle': [{ type: core_1.Input },],
        'sliderMarker': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onSelectedRangeChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
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
        'backgroundChange': [{ type: core_1.Output },],
        'behaviorChange': [{ type: core_1.Output },],
        'chartChange': [{ type: core_1.Output },],
        'containerBackgroundColorChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'dataSourceFieldChange': [{ type: core_1.Output },],
        'indentChange': [{ type: core_1.Output },],
        'scaleChange': [{ type: core_1.Output },],
        'selectedRangeChange': [{ type: core_1.Output },],
        'selectedRangeColorChange': [{ type: core_1.Output },],
        'shutterChange': [{ type: core_1.Output },],
        'sliderHandleChange': [{ type: core_1.Output },],
        'sliderMarkerChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
    };
    return DxRangeSelectorComponent;
}(component_1.DxComponent));
exports.DxRangeSelectorComponent = DxRangeSelectorComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxRangeSelectorValueAccessorDirective; }),
    multi: true
};
var DxRangeSelectorValueAccessorDirective = (function () {
    function DxRangeSelectorValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxRangeSelectorValueAccessorDirective.prototype.onChange = function (_) { };
    DxRangeSelectorValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxRangeSelectorValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxRangeSelectorValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxRangeSelectorValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-range-selector[formControlName],dx-range-selector[formControl],dx-range-selector[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxRangeSelectorValueAccessorDirective.ctorParameters = function () { return [
        { type: DxRangeSelectorComponent, },
    ]; };
    DxRangeSelectorValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxRangeSelectorValueAccessorDirective;
}());
exports.DxRangeSelectorValueAccessorDirective = DxRangeSelectorValueAccessorDirective;
var DxRangeSelectorModule = (function () {
    function DxRangeSelectorModule() {
    }
    DxRangeSelectorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        background_1.DxoBackgroundModule,
                        image_1.DxoImageModule,
                        behavior_1.DxoBehaviorModule,
                        chart_1.DxoChartModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        format_1.DxoFormatModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        area_1.DxoAreaModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_1.DxoValueAxisModule,
                        indent_1.DxoIndentModule,
                        scale_1.DxoScaleModule,
                        major_tick_interval_1.DxoMajorTickIntervalModule,
                        marker_1.DxoMarkerModule,
                        max_range_1.DxoMaxRangeModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_range_1.DxoMinRangeModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        selected_range_1.DxoSelectedRangeModule,
                        shutter_1.DxoShutterModule,
                        slider_handle_1.DxoSliderHandleModule,
                        slider_marker_1.DxoSliderMarkerModule,
                        placeholder_size_1.DxoPlaceholderSizeModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxRangeSelectorComponent,
                        DxRangeSelectorValueAccessorDirective
                    ],
                    exports: [
                        DxRangeSelectorComponent,
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        background_1.DxoBackgroundModule,
                        image_1.DxoImageModule,
                        behavior_1.DxoBehaviorModule,
                        chart_1.DxoChartModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        format_1.DxoFormatModule,
                        point_1.DxoPointModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        area_1.DxoAreaModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_1.DxoValueAxisModule,
                        indent_1.DxoIndentModule,
                        scale_1.DxoScaleModule,
                        major_tick_interval_1.DxoMajorTickIntervalModule,
                        marker_1.DxoMarkerModule,
                        max_range_1.DxoMaxRangeModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        min_range_1.DxoMinRangeModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        selected_range_1.DxoSelectedRangeModule,
                        shutter_1.DxoShutterModule,
                        slider_handle_1.DxoSliderHandleModule,
                        slider_marker_1.DxoSliderMarkerModule,
                        placeholder_size_1.DxoPlaceholderSizeModule,
                        DxRangeSelectorValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxRangeSelectorModule.ctorParameters = function () { return []; };
    return DxRangeSelectorModule;
}());
exports.DxRangeSelectorModule = DxRangeSelectorModule;
//# sourceMappingURL=range-selector.js.map