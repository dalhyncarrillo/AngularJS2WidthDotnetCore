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
import DxPopover from 'devextreme/ui/popover';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiToolbarItemComponent } from './nested/toolbar-item-dxi';
export declare class DxPopoverComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPopover;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    disabled: any;
    hint: any;
    hoverStateEnabled: any;
    visible: any;
    animation: any;
    closeOnBackButton: any;
    closeOnOutsideClick: any;
    contentTemplate: any;
    deferRendering: any;
    maxHeight: any;
    maxWidth: any;
    minHeight: any;
    minWidth: any;
    shading: any;
    shadingColor: any;
    buttons: any;
    showCloseButton: any;
    showTitle: any;
    title: any;
    titleTemplate: any;
    toolbarItems: any;
    hideEvent: any;
    position: any;
    showEvent: any;
    target: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onHidden: any;
    onHiding: any;
    onShowing: any;
    onShown: any;
    onTitleRendered: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    disabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    visibleChange: any;
    animationChange: any;
    closeOnBackButtonChange: any;
    closeOnOutsideClickChange: any;
    contentTemplateChange: any;
    deferRenderingChange: any;
    maxHeightChange: any;
    maxWidthChange: any;
    minHeightChange: any;
    minWidthChange: any;
    shadingChange: any;
    shadingColorChange: any;
    buttonsChange: any;
    showCloseButtonChange: any;
    showTitleChange: any;
    titleChange: any;
    titleTemplateChange: any;
    toolbarItemsChange: any;
    hideEventChange: any;
    positionChange: any;
    showEventChange: any;
    targetChange: any;
    toolbarItemsChildren: QueryList<DxiToolbarItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPopover;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxPopoverModule {
}
