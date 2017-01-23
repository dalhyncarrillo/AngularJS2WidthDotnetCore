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
import DxTextBox from 'devextreme/ui/text_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxTextBoxComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxTextBox;
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
    mask: any;
    maskChar: any;
    maskInvalidMessage: any;
    maskRules: any;
    placeholder: any;
    showClearButton: any;
    spellcheck: any;
    text: any;
    useMaskedValue: any;
    valueChangeEvent: any;
    maxLength: any;
    mode: any;
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
    maskChange: any;
    maskCharChange: any;
    maskInvalidMessageChange: any;
    maskRulesChange: any;
    placeholderChange: any;
    showClearButtonChange: any;
    spellcheckChange: any;
    textChange: any;
    useMaskedValueChange: any;
    valueChangeEventChange: any;
    maxLengthChange: any;
    modeChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTextBox;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxTextBoxValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxTextBoxComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxTextBoxModule {
}
