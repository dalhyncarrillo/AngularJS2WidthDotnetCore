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
import DxDateBox from 'devextreme/ui/date_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxDateBoxComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxDateBox;
    validator: DxValidatorComponent;
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
    acceptCustomValue: any;
    applyValueMode: any;
    deferRendering: any;
    fieldEditEnabled: any;
    opened: any;
    adaptivityEnabled: any;
    applyButtonText: any;
    cancelButtonText: any;
    dateOutOfRangeMessage: any;
    displayFormat: any;
    format: any;
    formatString: any;
    interval: any;
    invalidDateMessage: any;
    max: any;
    maxZoomLevel: any;
    min: any;
    minZoomLevel: any;
    pickerType: any;
    type: any;
    useCalendar: any;
    useNative: any;
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
    acceptCustomValueChange: any;
    applyValueModeChange: any;
    deferRenderingChange: any;
    fieldEditEnabledChange: any;
    openedChange: any;
    adaptivityEnabledChange: any;
    applyButtonTextChange: any;
    cancelButtonTextChange: any;
    dateOutOfRangeMessageChange: any;
    displayFormatChange: any;
    formatChange: any;
    formatStringChange: any;
    intervalChange: any;
    invalidDateMessageChange: any;
    maxChange: any;
    maxZoomLevelChange: any;
    minChange: any;
    minZoomLevelChange: any;
    pickerTypeChange: any;
    typeChange: any;
    useCalendarChange: any;
    useNativeChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxDateBox;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxDateBoxValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxDateBoxComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxDateBoxModule {
}
