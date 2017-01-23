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
import DxForm from 'devextreme/ui/form';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
export declare class DxFormComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxForm;
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
    alignItemLabels: any;
    alignItemLabelsInAllGroups: any;
    colCount: any;
    colCountByScreen: any;
    customizeItem: any;
    formData: any;
    items: any;
    labelLocation: any;
    minColWidth: any;
    optionalMark: any;
    readOnly: any;
    requiredMark: any;
    requiredMessage: any;
    screenByWidth: any;
    scrollingEnabled: any;
    showColonAfterLabel: any;
    showOptionalMark: any;
    showRequiredMark: any;
    showValidationSummary: any;
    validationGroup: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onEditorEnterKey: any;
    onFieldDataChanged: any;
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
    alignItemLabelsChange: any;
    alignItemLabelsInAllGroupsChange: any;
    colCountChange: any;
    colCountByScreenChange: any;
    customizeItemChange: any;
    formDataChange: any;
    itemsChange: any;
    labelLocationChange: any;
    minColWidthChange: any;
    optionalMarkChange: any;
    readOnlyChange: any;
    requiredMarkChange: any;
    requiredMessageChange: any;
    screenByWidthChange: any;
    scrollingEnabledChange: any;
    showColonAfterLabelChange: any;
    showOptionalMarkChange: any;
    showRequiredMarkChange: any;
    showValidationSummaryChange: any;
    validationGroupChange: any;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxForm;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxFormModule {
}