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
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiSeriesComponent } from './nested/series-dxi';
export declare class DxPieChartComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPieChart;
    elementAttr: any;
    rtlEnabled: any;
    export: any;
    loadingIndicator: any;
    margin: any;
    pathModified: any;
    redrawOnResize: any;
    size: any;
    theme: any;
    title: any;
    tooltip: any;
    adaptiveLayout: any;
    animation: any;
    customizeLabel: any;
    customizePoint: any;
    dataSource: any;
    legend: any;
    palette: any;
    pointSelectionMode: any;
    commonSeriesSettings: any;
    diameter: any;
    innerRadius: any;
    resolveLabelOverlapping: any;
    segmentsDirection: any;
    series: any;
    startAngle: any;
    type: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onDone: any;
    onPointClick: any;
    onPointHoverChanged: any;
    onPointSelectionChanged: any;
    onTooltipHidden: any;
    onTooltipShown: any;
    onLegendClick: any;
    elementAttrChange: any;
    rtlEnabledChange: any;
    exportChange: any;
    loadingIndicatorChange: any;
    marginChange: any;
    pathModifiedChange: any;
    redrawOnResizeChange: any;
    sizeChange: any;
    themeChange: any;
    titleChange: any;
    tooltipChange: any;
    adaptiveLayoutChange: any;
    animationChange: any;
    customizeLabelChange: any;
    customizePointChange: any;
    dataSourceChange: any;
    legendChange: any;
    paletteChange: any;
    pointSelectionModeChange: any;
    commonSeriesSettingsChange: any;
    diameterChange: any;
    innerRadiusChange: any;
    resolveLabelOverlappingChange: any;
    segmentsDirectionChange: any;
    seriesChange: any;
    startAngleChange: any;
    typeChange: any;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPieChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPieChartModule {
}
