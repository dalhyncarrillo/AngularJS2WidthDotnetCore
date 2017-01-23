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
import { ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiItemComponent } from './item-dxi';
export declare class DxiTabComponent extends CollectionNestedOption implements AfterViewInit {
    private element;
    alignItemLabels: any;
    badge: any;
    colCount: any;
    colCountByScreen: any;
    disabled: any;
    icon: any;
    items: any;
    tabTemplate: any;
    template: any;
    title: any;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, element: ElementRef);
    ngAfterViewInit(): void;
}
export declare class DxiTabModule {
}