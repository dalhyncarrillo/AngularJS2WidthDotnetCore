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
import DxToast from 'devextreme/ui/toast';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxToastComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxToast;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
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
    closeOnClick: any;
    closeOnSwipe: any;
    displayTime: any;
    message: any;
    position: any;
    type: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onHidden: any;
    onHiding: any;
    onShowing: any;
    onShown: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
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
    closeOnClickChange: any;
    closeOnSwipeChange: any;
    displayTimeChange: any;
    messageChange: any;
    positionChange: any;
    typeChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxToast;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxToastModule {
}
