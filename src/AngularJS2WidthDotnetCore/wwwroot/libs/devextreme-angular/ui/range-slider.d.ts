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
import DxRangeSlider from 'devextreme/ui/range_slider';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxRangeSliderComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxRangeSlider;
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
    readOnly: any;
    validationError: any;
    validationMessageMode: any;
    value: any;
    max: any;
    min: any;
    keyStep: any;
    label: any;
    showRange: any;
    step: any;
    tooltip: any;
    end: any;
    endName: any;
    start: any;
    startName: any;
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
    readOnlyChange: any;
    validationErrorChange: any;
    validationMessageModeChange: any;
    valueChange: any;
    maxChange: any;
    minChange: any;
    keyStepChange: any;
    labelChange: any;
    showRangeChange: any;
    stepChange: any;
    tooltipChange: any;
    endChange: any;
    endNameChange: any;
    startChange: any;
    startNameChange: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxRangeSlider;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxRangeSliderValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxRangeSliderComponent);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxRangeSliderModule {
}
