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
import DxPivot from 'devextreme/ui/pivot';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
export declare class DxPivotComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPivot;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    activeStateEnabled: any;
    disabled: any;
    hint: any;
    hoverStateEnabled: any;
    visible: any;
    dataSource: any;
    itemHoldTimeout: any;
    itemTemplate: any;
    selectedIndex: any;
    selectedItem: any;
    items: any;
    contentTemplate: any;
    itemTitleTemplate: any;
    swipeEnabled: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onItemClick: any;
    onItemContextMenu: any;
    onItemHold: any;
    onItemRendered: any;
    onSelectionChanged: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    activeStateEnabledChange: any;
    disabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    visibleChange: any;
    dataSourceChange: any;
    itemHoldTimeoutChange: any;
    itemTemplateChange: any;
    selectedIndexChange: any;
    selectedItemChange: any;
    itemsChange: any;
    contentTemplateChange: any;
    itemTitleTemplateChange: any;
    swipeEnabledChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPivot;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPivotModule {
}
