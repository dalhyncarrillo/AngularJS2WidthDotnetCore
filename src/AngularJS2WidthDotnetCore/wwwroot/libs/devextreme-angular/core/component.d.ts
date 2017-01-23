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
import { ElementRef, NgZone, QueryList } from '@angular/core';
import { DxTemplateDirective } from './template';
import { DxTemplateHost } from './template-host';
import { EmitterHelper } from './events-strategy';
import { WatcherHelper } from './watcher-helper';
import { INestedOptionContainer, ICollectionNestedOption, ICollectionNestedOptionContainer } from './nested-option';
export declare abstract class DxComponent implements INestedOptionContainer, ICollectionNestedOptionContainer {
    protected element: ElementRef;
    private watcherHelper;
    private _initialOptions;
    private _collectionContainerImpl;
    eventHelper: EmitterHelper;
    templates: DxTemplateDirective[];
    instance: any;
    protected _events: {
        subscribe?: string;
        emit: string;
    }[];
    private _initTemplates();
    private _initOptions();
    protected _createEventEmitters(events: any): void;
    private _initEvents();
    protected _getOption(name: string): any;
    protected _setOption(name: string, value: any): void;
    protected abstract _createInstance(element: any, options: any): any;
    protected _createWidget(element: any): void;
    protected _destroyWidget(): void;
    constructor(element: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, watcherHelper: WatcherHelper);
    setTemplate(template: DxTemplateDirective): void;
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
}
export declare abstract class DxComponentExtension extends DxComponent {
    createInstance(element: any): void;
}