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
var chart_1 = require('devextreme/viz/chart');
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
var argument_format_1 = require('./nested/argument-format');
var adaptive_layout_1 = require('./nested/adaptive-layout');
var animation_1 = require('./nested/animation');
var legend_1 = require('./nested/legend');
var argument_axis_1 = require('./nested/argument-axis');
var constant_line_style_1 = require('./nested/constant-line-style');
var label_1 = require('./nested/label');
var grid_1 = require('./nested/grid');
var overlapping_behavior_1 = require('./nested/overlapping-behavior');
var minor_grid_1 = require('./nested/minor-grid');
var minor_tick_1 = require('./nested/minor-tick');
var strip_style_1 = require('./nested/strip-style');
var tick_1 = require('./nested/tick');
var constant_line_dxi_1 = require('./nested/constant-line-dxi');
var minor_tick_interval_1 = require('./nested/minor-tick-interval');
var strip_dxi_1 = require('./nested/strip-dxi');
var tick_interval_1 = require('./nested/tick-interval');
var common_axis_settings_1 = require('./nested/common-axis-settings');
var common_pane_settings_1 = require('./nested/common-pane-settings');
var common_series_settings_1 = require('./nested/common-series-settings');
var hover_style_1 = require('./nested/hover-style');
var hatching_1 = require('./nested/hatching');
var connector_1 = require('./nested/connector');
var point_1 = require('./nested/point');
var image_1 = require('./nested/image');
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
var crosshair_1 = require('./nested/crosshair');
var horizontal_line_1 = require('./nested/horizontal-line');
var vertical_line_1 = require('./nested/vertical-line');
var data_prepare_settings_1 = require('./nested/data-prepare-settings');
var pane_dxi_1 = require('./nested/pane-dxi');
var scroll_bar_1 = require('./nested/scroll-bar');
var series_dxi_1 = require('./nested/series-dxi');
var series_template_1 = require('./nested/series-template');
var value_axis_dxi_1 = require('./nested/value-axis-dxi');
var pane_dxi_2 = require('./nested/pane-dxi');
var series_dxi_2 = require('./nested/series-dxi');
var value_axis_dxi_2 = require('./nested/value-axis-dxi');
var DxChartComponent = (function (_super) {
    __extends(DxChartComponent, _super);
    function DxChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
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
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
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
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'legendChange' },
            { emit: 'paletteChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'adjustOnZoomChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'panesChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'scrollBarChange' },
            { emit: 'scrollingModeChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'useAggregationChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomingModeChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxChartComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adaptiveLayout", {
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "legend", {
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
        get: function () {
            return this._getOption('adjustOnZoom');
        },
        set: function (value) {
            this._setOption('adjustOnZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
        get: function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
        get: function () {
            return this._getOption('commonPaneSettings');
        },
        set: function (value) {
            this._setOption('commonPaneSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "crosshair", {
        get: function () {
            return this._getOption('crosshair');
        },
        set: function (value) {
            this._setOption('crosshair', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
        get: function () {
            return this._getOption('defaultPane');
        },
        set: function (value) {
            this._setOption('defaultPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panes", {
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this._setOption('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rotated", {
        get: function () {
            return this._getOption('rotated');
        },
        set: function (value) {
            this._setOption('rotated', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
        get: function () {
            return this._getOption('scrollBar');
        },
        set: function (value) {
            this._setOption('scrollBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
        get: function () {
            return this._getOption('scrollingMode');
        },
        set: function (value) {
            this._setOption('scrollingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
        get: function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
        get: function () {
            return this._getOption('synchronizeMultiAxes');
        },
        set: function (value) {
            this._setOption('synchronizeMultiAxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
        get: function () {
            return this._getOption('zoomingMode');
        },
        set: function (value) {
            this._setOption('zoomingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panesChildren", {
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this.setChildren('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxisChildren", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this.setChildren('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    DxChartComponent.prototype._createInstance = function (element, options) {
        return new chart_1.default(element, options);
    };
    DxChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxChartComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('panes', changes);
        this._idh.setup('series', changes);
        this._idh.setup('valueAxis', changes);
    };
    DxChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
    };
    DxChartComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-chart',
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
    DxChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxChartComponent.propDecorators = {
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
        'adaptiveLayout': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'customizeLabel': [{ type: core_1.Input },],
        'customizePoint': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'pointSelectionMode': [{ type: core_1.Input },],
        'adjustOnZoom': [{ type: core_1.Input },],
        'argumentAxis': [{ type: core_1.Input },],
        'barWidth': [{ type: core_1.Input },],
        'commonAxisSettings': [{ type: core_1.Input },],
        'commonPaneSettings': [{ type: core_1.Input },],
        'commonSeriesSettings': [{ type: core_1.Input },],
        'containerBackgroundColor': [{ type: core_1.Input },],
        'crosshair': [{ type: core_1.Input },],
        'dataPrepareSettings': [{ type: core_1.Input },],
        'defaultPane': [{ type: core_1.Input },],
        'equalBarWidth': [{ type: core_1.Input },],
        'maxBubbleSize': [{ type: core_1.Input },],
        'minBubbleSize': [{ type: core_1.Input },],
        'negativesAsZeroes': [{ type: core_1.Input },],
        'panes': [{ type: core_1.Input },],
        'resolveLabelOverlapping': [{ type: core_1.Input },],
        'rotated': [{ type: core_1.Input },],
        'scrollBar': [{ type: core_1.Input },],
        'scrollingMode': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'seriesSelectionMode': [{ type: core_1.Input },],
        'seriesTemplate': [{ type: core_1.Input },],
        'synchronizeMultiAxes': [{ type: core_1.Input },],
        'useAggregation': [{ type: core_1.Input },],
        'valueAxis': [{ type: core_1.Input },],
        'zoomingMode': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onDone': [{ type: core_1.Output },],
        'onPointClick': [{ type: core_1.Output },],
        'onPointHoverChanged': [{ type: core_1.Output },],
        'onPointSelectionChanged': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'onArgumentAxisClick': [{ type: core_1.Output },],
        'onLegendClick': [{ type: core_1.Output },],
        'onSeriesClick': [{ type: core_1.Output },],
        'onSeriesHoverChanged': [{ type: core_1.Output },],
        'onSeriesSelectionChanged': [{ type: core_1.Output },],
        'onZoomEnd': [{ type: core_1.Output },],
        'onZoomStart': [{ type: core_1.Output },],
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
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'customizeLabelChange': [{ type: core_1.Output },],
        'customizePointChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'pointSelectionModeChange': [{ type: core_1.Output },],
        'adjustOnZoomChange': [{ type: core_1.Output },],
        'argumentAxisChange': [{ type: core_1.Output },],
        'barWidthChange': [{ type: core_1.Output },],
        'commonAxisSettingsChange': [{ type: core_1.Output },],
        'commonPaneSettingsChange': [{ type: core_1.Output },],
        'commonSeriesSettingsChange': [{ type: core_1.Output },],
        'containerBackgroundColorChange': [{ type: core_1.Output },],
        'crosshairChange': [{ type: core_1.Output },],
        'dataPrepareSettingsChange': [{ type: core_1.Output },],
        'defaultPaneChange': [{ type: core_1.Output },],
        'equalBarWidthChange': [{ type: core_1.Output },],
        'maxBubbleSizeChange': [{ type: core_1.Output },],
        'minBubbleSizeChange': [{ type: core_1.Output },],
        'negativesAsZeroesChange': [{ type: core_1.Output },],
        'panesChange': [{ type: core_1.Output },],
        'resolveLabelOverlappingChange': [{ type: core_1.Output },],
        'rotatedChange': [{ type: core_1.Output },],
        'scrollBarChange': [{ type: core_1.Output },],
        'scrollingModeChange': [{ type: core_1.Output },],
        'seriesChange': [{ type: core_1.Output },],
        'seriesSelectionModeChange': [{ type: core_1.Output },],
        'seriesTemplateChange': [{ type: core_1.Output },],
        'synchronizeMultiAxesChange': [{ type: core_1.Output },],
        'useAggregationChange': [{ type: core_1.Output },],
        'valueAxisChange': [{ type: core_1.Output },],
        'zoomingModeChange': [{ type: core_1.Output },],
        'panesChildren': [{ type: core_1.ContentChildren, args: [pane_dxi_2.DxiPaneComponent,] },],
        'seriesChildren': [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
        'valueAxisChildren': [{ type: core_1.ContentChildren, args: [value_axis_dxi_2.DxiValueAxisComponent,] },],
    };
    return DxChartComponent;
}(component_1.DxComponent));
exports.DxChartComponent = DxChartComponent;
var DxChartModule = (function () {
    function DxChartModule() {
    }
    DxChartModule.decorators = [
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
                        argument_format_1.DxoArgumentFormatModule,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        legend_1.DxoLegendModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        label_1.DxoLabelModule,
                        grid_1.DxoGridModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        tick_interval_1.DxoTickIntervalModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
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
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxChartComponent
                    ],
                    exports: [
                        DxChartComponent,
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
                        argument_format_1.DxoArgumentFormatModule,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        legend_1.DxoLegendModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        label_1.DxoLabelModule,
                        grid_1.DxoGridModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        tick_interval_1.DxoTickIntervalModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
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
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxChartModule.ctorParameters = function () { return []; };
    return DxChartModule;
}());
exports.DxChartModule = DxChartModule;
//# sourceMappingURL=chart.js.map