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
import DxLoadIndicator from 'devextreme/ui/load_indicator';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxLoadIndicatorComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxLoadIndicator;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    hint: any;
    visible: any;
    indicatorSrc: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    hintChange: any;
    visibleChange: any;
    indicatorSrcChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxLoadIndicator;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxLoadIndicatorModule {
}
