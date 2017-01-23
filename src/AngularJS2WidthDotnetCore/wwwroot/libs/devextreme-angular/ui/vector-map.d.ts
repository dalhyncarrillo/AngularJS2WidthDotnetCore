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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiLayerComponent } from './nested/layer-dxi';
import { DxiLegendComponent } from './nested/legend-dxi';
import { DxiMarkerComponent } from './nested/marker-dxi';
export declare class DxVectorMapComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxVectorMap;
    elementAttr: any;
    rtlEnabled: any;
    export: any;
    loadingIndicator: any;
    pathModified: any;
    redrawOnResize: any;
    size: any;
    theme: any;
    title: any;
    tooltip: any;
    areaSettings: any;
    background: any;
    bounds: any;
    center: any;
    controlBar: any;
    layers: any;
    legends: any;
    mapData: any;
    markers: any;
    markerSettings: any;
    maxZoomFactor: any;
    panningEnabled: any;
    projection: any;
    touchEnabled: any;
    wheelEnabled: any;
    zoomFactor: any;
    zoomingEnabled: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onAreaClick: any;
    onAreaSelectionChanged: any;
    onCenterChanged: any;
    onClick: any;
    onMarkerClick: any;
    onMarkerSelectionChanged: any;
    onSelectionChanged: any;
    onTooltipHidden: any;
    onTooltipShown: any;
    onZoomFactorChanged: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    exportChange: any;
    loadingIndicatorChange: any;
    pathModifiedChange: any;
    redrawOnResizeChange: any;
    sizeChange: any;
    themeChange: any;
    titleChange: any;
    tooltipChange: any;
    areaSettingsChange: any;
    backgroundChange: any;
    boundsChange: any;
    centerChange: any;
    controlBarChange: any;
    layersChange: any;
    legendsChange: any;
    mapDataChange: any;
    markersChange: any;
    markerSettingsChange: any;
    maxZoomFactorChange: any;
    panningEnabledChange: any;
    projectionChange: any;
    touchEnabledChange: any;
    wheelEnabledChange: any;
    zoomFactorChange: any;
    zoomingEnabledChange: any;
    layersChildren: QueryList<DxiLayerComponent>;
    legendsChildren: QueryList<DxiLegendComponent>;
    markersChildren: QueryList<DxiMarkerComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxVectorMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxVectorMapModule {
}
