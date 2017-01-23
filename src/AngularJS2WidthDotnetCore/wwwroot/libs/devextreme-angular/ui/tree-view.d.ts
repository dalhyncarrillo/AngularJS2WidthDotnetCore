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
import DxTreeView from 'devextreme/ui/tree_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
export declare class DxTreeViewComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeView;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    dataSource: any;
    itemHoldTimeout: any;
    itemTemplate: any;
    keyExpr: any;
    noDataText: any;
    selectionMode: any;
    items: any;
    disabledExpr: any;
    displayExpr: any;
    itemsExpr: any;
    selectedExpr: any;
    animationEnabled: any;
    createChildren: any;
    dataStructure: any;
    expandAllEnabled: any;
    expandedExpr: any;
    expandNodesRecursive: any;
    hasItemsExpr: any;
    parentIdExpr: any;
    rootValue: any;
    scrollDirection: any;
    searchValue: any;
    selectAllEnabled: any;
    selectAllText: any;
    selectByClick: any;
    selectNodesRecursive: any;
    showCheckBoxes: any;
    showCheckBoxesMode: any;
    virtualModeEnabled: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onItemClick: any;
    onItemContextMenu: any;
    onItemHold: any;
    onItemRendered: any;
    onSelectionChanged: any;
    onItemCollapsed: any;
    onItemExpanded: any;
    onItemSelected: any;
    onItemSelectionChanged: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    activeStateEnabledChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
    visibleChange: any;
    dataSourceChange: any;
    itemHoldTimeoutChange: any;
    itemTemplateChange: any;
    keyExprChange: any;
    noDataTextChange: any;
    selectionModeChange: any;
    itemsChange: any;
    disabledExprChange: any;
    displayExprChange: any;
    itemsExprChange: any;
    selectedExprChange: any;
    animationEnabledChange: any;
    createChildrenChange: any;
    dataStructureChange: any;
    expandAllEnabledChange: any;
    expandedExprChange: any;
    expandNodesRecursiveChange: any;
    hasItemsExprChange: any;
    parentIdExprChange: any;
    rootValueChange: any;
    scrollDirectionChange: any;
    searchValueChange: any;
    selectAllEnabledChange: any;
    selectAllTextChange: any;
    selectByClickChange: any;
    selectNodesRecursiveChange: any;
    showCheckBoxesChange: any;
    showCheckBoxesModeChange: any;
    virtualModeEnabledChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTreeView;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxTreeViewModule {
}
