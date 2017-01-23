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
import { ElementRef, AfterViewInit } from '@angular/core';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiToolbarItemComponent extends CollectionNestedOption implements AfterViewInit {
    private element;
    disabled: any;
    html: any;
    location: any;
    options: any;
    template: any;
    text: any;
    toolbar: any;
    visible: any;
    widget: any;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, element: ElementRef);
    ngAfterViewInit(): void;
}
export declare class DxiToolbarItemModule {
}
