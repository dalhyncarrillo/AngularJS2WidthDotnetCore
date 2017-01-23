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
import { ElementRef, NgZone, OnDestroy, AfterViewInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxFileUploaderComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFileUploader;
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
    value: any;
    accept: any;
    allowCanceling: any;
    buttonText: any;
    labelText: any;
    multiple: any;
    progress: any;
    readyToUploadMessage: any;
    selectButtonText: any;
    showFileList: any;
    uploadButtonText: any;
    uploadedMessage: any;
    uploadFailedMessage: any;
    uploadHeaders: any;
    uploadMethod: any;
    uploadMode: any;
    uploadUrl: any;
    values: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onValueChanged: any;
    onProgress: any;
    onUploadAborted: any;
    onUploaded: any;
    onUploadError: any;
    onUploadStarted: any;
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
    valueChange: any;
    acceptChange: any;
    allowCancelingChange: any;
    buttonTextChange: any;
    labelTextChange: any;
    multipleChange: any;
    progressChange: any;
    readyToUploadMessageChange: any;
    selectButtonTextChange: any;
    showFileListChange: any;
    uploadButtonTextChange: any;
    uploadedMessageChange: any;
    uploadFailedMessageChange: any;
    uploadHeadersChange: any;
    uploadMethodChange: any;
    uploadModeChange: any;
    uploadUrlChange: any;
    valuesChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxFileUploader;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxFileUploaderValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxFileUploaderComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxFileUploaderModule {
}