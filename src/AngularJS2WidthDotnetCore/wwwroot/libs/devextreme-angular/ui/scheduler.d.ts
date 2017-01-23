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
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiResourceComponent } from './nested/resource-dxi';
import { DxiViewComponent } from './nested/view-dxi';
export declare class DxSchedulerComponent extends DxComponent implements OnDestroy, AfterViewInit, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxScheduler;
    elementAttr: any;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    tabIndex: any;
    visible: any;
    allDayExpr: any;
    appointmentTemplate: any;
    appointmentTooltipTemplate: any;
    cellDuration: any;
    crossScrollingEnabled: any;
    currentDate: any;
    currentView: any;
    dataCellTemplate: any;
    dataSource: any;
    dateCellTemplate: any;
    descriptionExpr: any;
    editing: any;
    endDateExpr: any;
    endDateTimeZoneExpr: any;
    endDayHour: any;
    firstDayOfWeek: any;
    groups: any;
    horizontalScrollingEnabled: any;
    max: any;
    min: any;
    noDataText: any;
    recurrenceEditMode: any;
    recurrenceExceptionExpr: any;
    recurrenceRuleExpr: any;
    remoteFiltering: any;
    resourceCellTemplate: any;
    resources: any;
    showAllDayPanel: any;
    startDateExpr: any;
    startDateTimeZoneExpr: any;
    startDayHour: any;
    textExpr: any;
    timeCellTemplate: any;
    timeZone: any;
    useDropDownViewSwitcher: any;
    views: any;
    onDisposing: any;
    onInitialized: any;
    onOptionChanged: any;
    onContentReady: any;
    onAppointmentAdded: any;
    onAppointmentAdding: any;
    onAppointmentClick: any;
    onAppointmentDblClick: any;
    onAppointmentDeleted: any;
    onAppointmentDeleting: any;
    onAppointmentFormCreated: any;
    onAppointmentRendered: any;
    onAppointmentUpdated: any;
    onAppointmentUpdating: any;
    onCellClick: any;
    elementAttrChange: any;
    heightChange: any;
    rtlEnabledChange: any;
    widthChange: any;
    accessKeyChange: any;
    disabledChange: any;
    focusStateEnabledChange: any;
    hintChange: any;
    tabIndexChange: any;
    visibleChange: any;
    allDayExprChange: any;
    appointmentTemplateChange: any;
    appointmentTooltipTemplateChange: any;
    cellDurationChange: any;
    crossScrollingEnabledChange: any;
    currentDateChange: any;
    currentViewChange: any;
    dataCellTemplateChange: any;
    dataSourceChange: any;
    dateCellTemplateChange: any;
    descriptionExprChange: any;
    editingChange: any;
    endDateExprChange: any;
    endDateTimeZoneExprChange: any;
    endDayHourChange: any;
    firstDayOfWeekChange: any;
    groupsChange: any;
    horizontalScrollingEnabledChange: any;
    maxChange: any;
    minChange: any;
    noDataTextChange: any;
    recurrenceEditModeChange: any;
    recurrenceExceptionExprChange: any;
    recurrenceRuleExprChange: any;
    remoteFilteringChange: any;
    resourceCellTemplateChange: any;
    resourcesChange: any;
    showAllDayPanelChange: any;
    startDateExprChange: any;
    startDateTimeZoneExprChange: any;
    startDayHourChange: any;
    textExprChange: any;
    timeCellTemplateChange: any;
    timeZoneChange: any;
    useDropDownViewSwitcherChange: any;
    viewsChange: any;
    resourcesChildren: QueryList<DxiResourceComponent>;
    viewsChildren: QueryList<DxiViewComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxScheduler;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
export declare class DxSchedulerModule {
}