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
import { QueryList, ElementRef } from '@angular/core';
export interface INestedOptionContainer {
    instance: any;
}
export interface OptionPathGetter {
    (): string;
}
export declare abstract class BaseNestedOption implements INestedOptionContainer, ICollectionNestedOptionContainer {
    protected _host: INestedOptionContainer;
    protected _hostOptionPath: OptionPathGetter;
    private _collectionContainerImpl;
    protected _initialOptions: {};
    protected readonly abstract _optionPath: string;
    protected abstract _fullOptionPath(): string;
    constructor();
    protected _getOption(name: string): any;
    protected _setOption(name: string, value: any): void;
    setHost(host: INestedOptionContainer, optionPath: OptionPathGetter): void;
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
    _filterItems(items: QueryList<BaseNestedOption>): BaseNestedOption[];
    readonly instance: any;
    readonly isLinked: boolean;
}
export interface ICollectionNestedOptionContainer {
    setChildren<T>(propertyName: string, items: QueryList<T>): any;
}
export declare class CollectionNestedOptionContainerImpl implements ICollectionNestedOptionContainer {
    private _setOption;
    private _filterItems;
    private _activatedQueries;
    constructor(_setOption: Function, _filterItems?: Function);
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): void;
}
export declare abstract class NestedOption extends BaseNestedOption {
    setHost(host: INestedOptionContainer, optionPath: OptionPathGetter): void;
    protected _fullOptionPath(): string;
}
export interface ICollectionNestedOption {
    _index: number;
    _value: Object;
}
export declare abstract class CollectionNestedOption extends BaseNestedOption implements ICollectionNestedOption {
    _index: number;
    protected _fullOptionPath(): string;
    readonly _value: {};
    readonly isLinked: boolean;
}
export interface OptionWithTemplate extends BaseNestedOption {
    template: any;
}
export declare function extractTemplate(option: OptionWithTemplate, element: ElementRef): void;
export declare class NestedOptionHost {
    private _host;
    private _optionPath;
    setHost(host: INestedOptionContainer, optionPath?: OptionPathGetter): void;
    setNestedOption(nestedOption: BaseNestedOption): void;
}
