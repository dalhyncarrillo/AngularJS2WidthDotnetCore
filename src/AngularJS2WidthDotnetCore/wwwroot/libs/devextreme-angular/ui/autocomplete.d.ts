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
import DxAutocomplete from 'devextreme/ui/autocomplete';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
export declare class DxAutocompleteComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxAutocomplete;
    validator: DxValidatorComponent;
    dataSource: any;
    displayExpr: any;
    itemTemplate: any;
    valueExpr: any;
    items: any;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    isValid: any;
    name: any;
    readOnly: any;
    validationError: any;
    validationMessageMode: any;
    value: any;
    attr: any;
    inputAttr: any;
    placeholder: any;
    showClearButton: any;
    spellcheck: any;
    text: any;
    valueChangeEvent: any;
    maxLength: any;
    deferRendering: any;
    opened: any;
    displayValue: any;
    minSearchLength: any;
    searchExpr: any;
    searchMode: any;
    searchTimeout: any;
    selectedItem: any;
    maxItemCount: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onFocusIn: any;
    onFocusOut: any;
    onValueChanged: any;
    onChange: any;
    onCopy: any;
    onCut: any;
    onEnterKey: any;
    onInput: any;
    onKeyDown: any;
    onKeyPress: any;
    onKeyUp: any;
    onPaste: any;
    onClosed: any;
    onOpened: any;
    onContentReady: any;
    onItemClick: any;
    onSelectionChanged: any;
    dataSourceChange: any;
    displayExprChange: any;
    itemTemplateChange: any;
    valueExprChange: any;
    itemsChange: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    activeStateEnabledChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    hoverStateEnabledChange: any;
    tabIndexChange: any;
    visibleChange: any;
    isValidChange: any;
    nameChange: any;
    readOnlyChange: any;
    validationErrorChange: any;
    validationMessageModeChange: any;
    valueChange: any;
    attrChange: any;
    inputAttrChange: any;
    placeholderChange: any;
    showClearButtonChange: any;
    spellcheckChange: any;
    textChange: any;
    valueChangeEventChange: any;
    maxLengthChange: any;
    deferRenderingChange: any;
    openedChange: any;
    displayValueChange: any;
    minSearchLengthChange: any;
    searchExprChange: any;
    searchModeChange: any;
    searchTimeoutChange: any;
    selectedItemChange: any;
    maxItemCountChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxAutocomplete;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxAutocompleteValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxAutocompleteComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxAutocompleteModule {
}
