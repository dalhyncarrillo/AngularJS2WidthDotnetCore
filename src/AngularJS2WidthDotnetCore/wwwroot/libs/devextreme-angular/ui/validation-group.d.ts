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
import DxValidationGroup from 'devextreme/ui/validation_group';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxValidationGroupComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxValidationGroup;
    elementAttr: any;
    height: any;
    width: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    elementAttrChange: any;
    heightChange: any;
    widthChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxValidationGroup;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxValidationGroupModule {
}
