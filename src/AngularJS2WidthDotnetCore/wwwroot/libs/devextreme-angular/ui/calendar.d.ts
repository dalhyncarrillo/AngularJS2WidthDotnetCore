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
import DxCalendar from 'devextreme/ui/calendar';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxCalendarComponent extends DxComponent implements OnDestroy, AfterViewInit {
    instance: DxCalendar;
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
    cellTemplate: any;
    firstDayOfWeek: any;
    max: any;
    maxZoomLevel: any;
    min: any;
    minZoomLevel: any;
    showTodayButton: any;
    zoomLevel: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onValueChanged: any;
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
    cellTemplateChange: any;
    firstDayOfWeekChange: any;
    maxChange: any;
    maxZoomLevelChange: any;
    minChange: any;
    minZoomLevelChange: any;
    showTodayButtonChange: any;
    zoomLevelChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxCalendar;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class DxCalendarValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxCalendarComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxCalendarModule {
}
