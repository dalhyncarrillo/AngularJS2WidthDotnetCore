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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxBarGauge from 'devextreme/viz/bar_gauge';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxBarGaugeComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxBarGauge;
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
    animation: any;
    backgroundColor: any;
    barSpacing: any;
    baseValue: any;
    endValue: any;
    geometry: any;
    label: any;
    palette: any;
    relativeInnerRadius: any;
    startValue: any;
    subtitle: any;
    values: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onDrawn: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    onIncidentOccurred: any;
    onTooltipHidden: any;
    onTooltipShown: any;
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
    animationChange: any;
    backgroundColorChange: any;
    barSpacingChange: any;
    baseValueChange: any;
    endValueChange: any;
    geometryChange: any;
    labelChange: any;
    paletteChange: any;
    relativeInnerRadiusChange: any;
    startValueChange: any;
    subtitleChange: any;
    valuesChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxBarGauge;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxBarGaugeModule {
}
