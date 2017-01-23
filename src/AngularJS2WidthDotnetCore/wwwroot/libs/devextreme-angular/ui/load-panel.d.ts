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
import DxLoadPanel from 'devextreme/ui/load_panel';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxLoadPanelComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxLoadPanel;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    visible: any;
    animation: any;
    closeOnOutsideClick: any;
    deferRendering: any;
    maxHeight: any;
    maxWidth: any;
    minHeight: any;
    minWidth: any;
    shading: any;
    shadingColor: any;
    delay: any;
    indicatorSrc: any;
    message: any;
    showIndicator: any;
    showPane: any;
    position: any;
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
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    visibleChange: any;
    animationChange: any;
    closeOnOutsideClickChange: any;
    deferRenderingChange: any;
    maxHeightChange: any;
    maxWidthChange: any;
    minHeightChange: any;
    minWidthChange: any;
    shadingChange: any;
    shadingColorChange: any;
    delayChange: any;
    indicatorSrcChange: any;
    messageChange: any;
    showIndicatorChange: any;
    showPaneChange: any;
    positionChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxLoadPanel;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxLoadPanelModule {
}
