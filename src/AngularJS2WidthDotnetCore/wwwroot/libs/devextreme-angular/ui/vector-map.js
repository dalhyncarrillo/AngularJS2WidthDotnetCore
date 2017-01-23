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
var vector_map_1 = require('devextreme/viz/vector_map');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var export_1 = require('./nested/export');
var loading_indicator_1 = require('./nested/loading-indicator');
var font_1 = require('./nested/font');
var size_1 = require('./nested/size');
var title_1 = require('./nested/title');
var margin_1 = require('./nested/margin');
var subtitle_1 = require('./nested/subtitle');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var shadow_1 = require('./nested/shadow');
var area_settings_1 = require('./nested/area-settings');
var label_1 = require('./nested/label');
var background_1 = require('./nested/background');
var control_bar_1 = require('./nested/control-bar');
var layer_dxi_1 = require('./nested/layer-dxi');
var legend_dxi_1 = require('./nested/legend-dxi');
var source_1 = require('./nested/source');
var marker_dxi_1 = require('./nested/marker-dxi');
var marker_settings_1 = require('./nested/marker-settings');
var layer_dxi_2 = require('./nested/layer-dxi');
var legend_dxi_2 = require('./nested/legend-dxi');
var marker_dxi_2 = require('./nested/marker-dxi');
var DxVectorMapComponent = (function (_super) {
    __extends(DxVectorMapComponent, _super);
    function DxVectorMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
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
            { subscribe: 'areaClick', emit: 'onAreaClick' },
            { subscribe: 'areaSelectionChanged', emit: 'onAreaSelectionChanged' },
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'markerClick', emit: 'onMarkerClick' },
            { subscribe: 'markerSelectionChanged', emit: 'onMarkerSelectionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'elementAttrChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'areaSettingsChange' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'mapDataChange' },
            { emit: 'markersChange' },
            { emit: 'markerSettingsChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'projectionChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxVectorMapComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "areaSettings", {
        get: function () {
            return this._getOption('areaSettings');
        },
        set: function (value) {
            this._setOption('areaSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "background", {
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
        get: function () {
            return this._getOption('bounds');
        },
        set: function (value) {
            this._setOption('bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "center", {
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
        get: function () {
            return this._getOption('controlBar');
        },
        set: function (value) {
            this._setOption('controlBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this._setOption('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this._setOption('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "mapData", {
        get: function () {
            return this._getOption('mapData');
        },
        set: function (value) {
            this._setOption('mapData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markers", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markerSettings", {
        get: function () {
            return this._getOption('markerSettings');
        },
        set: function (value) {
            this._setOption('markerSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
        get: function () {
            return this._getOption('maxZoomFactor');
        },
        set: function (value) {
            this._setOption('maxZoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
        get: function () {
            return this._getOption('panningEnabled');
        },
        set: function (value) {
            this._setOption('panningEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
        get: function () {
            return this._getOption('projection');
        },
        set: function (value) {
            this._setOption('projection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
        get: function () {
            return this._getOption('touchEnabled');
        },
        set: function (value) {
            this._setOption('touchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
        get: function () {
            return this._getOption('wheelEnabled');
        },
        set: function (value) {
            this._setOption('wheelEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
        get: function () {
            return this._getOption('zoomFactor');
        },
        set: function (value) {
            this._setOption('zoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
        get: function () {
            return this._getOption('zoomingEnabled');
        },
        set: function (value) {
            this._setOption('zoomingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "layersChildren", {
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this.setChildren('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legendsChildren", {
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this.setChildren('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markersChildren", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this.setChildren('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    DxVectorMapComponent.prototype._createInstance = function (element, options) {
        return new vector_map_1.default(element, options);
    };
    DxVectorMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxVectorMapComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('bounds', changes);
        this._idh.setup('center', changes);
        this._idh.setup('layers', changes);
        this._idh.setup('legends', changes);
        this._idh.setup('mapData', changes);
        this._idh.setup('markers', changes);
    };
    DxVectorMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
        this._idh.doCheck('mapData');
        this._idh.doCheck('markers');
        this._watcherHelper.checkWatchers();
    };
    DxVectorMapComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxVectorMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-vector-map',
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
    DxVectorMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxVectorMapComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'areaSettings': [{ type: core_1.Input },],
        'background': [{ type: core_1.Input },],
        'bounds': [{ type: core_1.Input },],
        'center': [{ type: core_1.Input },],
        'controlBar': [{ type: core_1.Input },],
        'layers': [{ type: core_1.Input },],
        'legends': [{ type: core_1.Input },],
        'mapData': [{ type: core_1.Input },],
        'markers': [{ type: core_1.Input },],
        'markerSettings': [{ type: core_1.Input },],
        'maxZoomFactor': [{ type: core_1.Input },],
        'panningEnabled': [{ type: core_1.Input },],
        'projection': [{ type: core_1.Input },],
        'touchEnabled': [{ type: core_1.Input },],
        'wheelEnabled': [{ type: core_1.Input },],
        'zoomFactor': [{ type: core_1.Input },],
        'zoomingEnabled': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onAreaClick': [{ type: core_1.Output },],
        'onAreaSelectionChanged': [{ type: core_1.Output },],
        'onCenterChanged': [{ type: core_1.Output },],
        'onClick': [{ type: core_1.Output },],
        'onMarkerClick': [{ type: core_1.Output },],
        'onMarkerSelectionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'onZoomFactorChanged': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'areaSettingsChange': [{ type: core_1.Output },],
        'backgroundChange': [{ type: core_1.Output },],
        'boundsChange': [{ type: core_1.Output },],
        'centerChange': [{ type: core_1.Output },],
        'controlBarChange': [{ type: core_1.Output },],
        'layersChange': [{ type: core_1.Output },],
        'legendsChange': [{ type: core_1.Output },],
        'mapDataChange': [{ type: core_1.Output },],
        'markersChange': [{ type: core_1.Output },],
        'markerSettingsChange': [{ type: core_1.Output },],
        'maxZoomFactorChange': [{ type: core_1.Output },],
        'panningEnabledChange': [{ type: core_1.Output },],
        'projectionChange': [{ type: core_1.Output },],
        'touchEnabledChange': [{ type: core_1.Output },],
        'wheelEnabledChange': [{ type: core_1.Output },],
        'zoomFactorChange': [{ type: core_1.Output },],
        'zoomingEnabledChange': [{ type: core_1.Output },],
        'layersChildren': [{ type: core_1.ContentChildren, args: [layer_dxi_2.DxiLayerComponent,] },],
        'legendsChildren': [{ type: core_1.ContentChildren, args: [legend_dxi_2.DxiLegendComponent,] },],
        'markersChildren': [{ type: core_1.ContentChildren, args: [marker_dxi_2.DxiMarkerComponent,] },],
    };
    return DxVectorMapComponent;
}(component_1.DxComponent));
exports.DxVectorMapComponent = DxVectorMapComponent;
var DxVectorMapModule = (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        shadow_1.DxoShadowModule,
                        area_settings_1.DxoAreaSettingsModule,
                        label_1.DxoLabelModule,
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        layer_dxi_1.DxiLayerModule,
                        legend_dxi_1.DxiLegendModule,
                        source_1.DxoSourceModule,
                        marker_dxi_1.DxiMarkerModule,
                        marker_settings_1.DxoMarkerSettingsModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxVectorMapComponent
                    ],
                    exports: [
                        DxVectorMapComponent,
                        export_1.DxoExportModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        font_1.DxoFontModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        shadow_1.DxoShadowModule,
                        area_settings_1.DxoAreaSettingsModule,
                        label_1.DxoLabelModule,
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        layer_dxi_1.DxiLayerModule,
                        legend_dxi_1.DxiLegendModule,
                        source_1.DxoSourceModule,
                        marker_dxi_1.DxiMarkerModule,
                        marker_settings_1.DxoMarkerSettingsModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxVectorMapModule.ctorParameters = function () { return []; };
    return DxVectorMapModule;
}());
exports.DxVectorMapModule = DxVectorMapModule;
//# sourceMappingURL=vector-map.js.map