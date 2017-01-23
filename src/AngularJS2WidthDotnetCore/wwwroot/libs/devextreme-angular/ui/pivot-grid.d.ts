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
import { ElementRef, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxPivotGridComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxPivotGrid;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    tabIndex: any;
    visible: any;
    allowExpandAll: any;
    allowFiltering: any;
    allowSorting: any;
    allowSortingBySummary: any;
    dataFieldArea: any;
    dataSource: any;
    export: any;
    fieldChooser: any;
    fieldPanel: any;
    hideEmptySummaryCells: any;
    loadPanel: any;
    rowHeaderLayout: any;
    scrolling: any;
    showBorders: any;
    showColumnGrandTotals: any;
    showColumnTotals: any;
    showRowGrandTotals: any;
    showRowTotals: any;
    showTotalsPrior: any;
    stateStoring: any;
    texts: any;
    useNativeScrolling: any;
    wordWrapEnabled: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onCellClick: any;
    onCellPrepared: any;
    onContextMenuPreparing: any;
    onExported: any;
    onExporting: any;
    onFileSaving: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    tabIndexChange: any;
    visibleChange: any;
    allowExpandAllChange: any;
    allowFilteringChange: any;
    allowSortingChange: any;
    allowSortingBySummaryChange: any;
    dataFieldAreaChange: any;
    dataSourceChange: any;
    exportChange: any;
    fieldChooserChange: any;
    fieldPanelChange: any;
    hideEmptySummaryCellsChange: any;
    loadPanelChange: any;
    rowHeaderLayoutChange: any;
    scrollingChange: any;
    showBordersChange: any;
    showColumnGrandTotalsChange: any;
    showColumnTotalsChange: any;
    showRowGrandTotalsChange: any;
    showRowTotalsChange: any;
    showTotalsPriorChange: any;
    stateStoringChange: any;
    textsChange: any;
    useNativeScrollingChange: any;
    wordWrapEnabledChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPivotGrid;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxPivotGridModule {
}
