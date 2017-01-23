/**
 * DevExtreme (ui/scheduler/ui.scheduler.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    translator = require("../../animation/translator"),
    errors = require("../widget/ui.errors"),
    dialog = require("../dialog"),
    recurrenceUtils = require("./utils.recurrence"),
    domUtils = require("../../core/utils/dom"),
    dateUtils = require("../../core/utils/date"),
    commonUtils = require("../../core/utils/common"),
    devices = require("../../core/devices"),
    registerComponent = require("../../core/component_registrator"),
    messageLocalization = require("../../localization/message"),
    dateLocalization = require("../../localization/date"),
    Widget = require("../widget/ui.widget"),
    subscribes = require("./ui.scheduler.subscribes"),
    FunctionTemplate = require("../widget/function_template"),
    appointmentTooltip = require("./ui.scheduler.appointment_tooltip"),
    SchedulerHeader = require("./ui.scheduler.header"),
    SchedulerWorkSpaceDay = require("./ui.scheduler.work_space_day"),
    SchedulerWorkSpaceWeek = require("./ui.scheduler.work_space_week"),
    SchedulerWorkSpaceWorkWeek = require("./ui.scheduler.work_space_work_week"),
    SchedulerWorkSpaceMonth = require("./ui.scheduler.work_space_month"),
    SchedulerTimelineDay = require("./ui.scheduler.timeline_day"),
    SchedulerTimelineWeek = require("./ui.scheduler.timeline_week"),
    SchedulerTimelineWorkWeek = require("./ui.scheduler.timeline_work_week"),
    SchedulerTimelineMonth = require("./ui.scheduler.timeline_month"),
    SchedulerAgenda = require("./ui.scheduler.agenda"),
    SchedulerResourceManager = require("./ui.scheduler.resource_manager"),
    SchedulerAppointmentModel = require("./ui.scheduler.appointment_model"),
    SchedulerAppointments = require("./ui.scheduler.appointments"),
    DropDownAppointments = require("./ui.scheduler.appointments.drop_down"),
    SchedulerTimezones = require("./ui.scheduler.timezones"),
    DataHelperMixin = require("../../data_helper"),
    loading = require("./ui.loading"),
    AppointmentForm = require("./ui.scheduler.appointment_form"),
    Popup = require("../popup"),
    when = require("../../integration/jquery/deferred").when,
    EmptyTemplate = require("../widget/empty_template"),
    BindableTemplate = require("../widget/bindable_template");
var WIDGET_CLASS = "dx-scheduler",
    WIDGET_SMALL_CLASS = "dx-scheduler-small",
    WIDGET_READONLY_CLASS = "dx-scheduler-readonly",
    APPOINTMENT_POPUP_CLASS = "dx-scheduler-appointment-popup",
    RECURRENCE_EDITOR_ITEM_CLASS = "dx-scheduler-recurrence-rule-item",
    RECURRENCE_EDITOR_OPENED_ITEM_CLASS = "dx-scheduler-recurrence-rule-item-opened",
    WIDGET_SMALL_WIDTH = 400,
    APPOINTEMENT_POPUP_WIDTH = 610;
var VIEWS_CONFIG = {
    day: {
        workSpace: SchedulerWorkSpaceDay,
        renderingStrategy: "vertical"
    },
    week: {
        workSpace: SchedulerWorkSpaceWeek,
        renderingStrategy: "vertical"
    },
    workWeek: {
        workSpace: SchedulerWorkSpaceWorkWeek,
        renderingStrategy: "vertical"
    },
    month: {
        workSpace: SchedulerWorkSpaceMonth,
        renderingStrategy: "horizontalMonth"
    },
    timelineDay: {
        workSpace: SchedulerTimelineDay,
        renderingStrategy: "horizontal"
    },
    timelineWeek: {
        workSpace: SchedulerTimelineWeek,
        renderingStrategy: "horizontal"
    },
    timelineWorkWeek: {
        workSpace: SchedulerTimelineWorkWeek,
        renderingStrategy: "horizontal"
    },
    timelineMonth: {
        workSpace: SchedulerTimelineMonth,
        renderingStrategy: "horizontalMonthLine"
    },
    agenda: {
        workSpace: SchedulerAgenda,
        renderingStrategy: "agenda"
    }
};
var Scheduler = Widget.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            views: ["day", "week"],
            currentView: "day",
            currentDate: dateUtils.trimTime(new Date),
            min: void 0,
            max: void 0,
            firstDayOfWeek: void 0,
            groups: [],
            resources: [],
            dataSource: null,
            appointmentTemplate: "item",
            dataCellTemplate: null,
            timeCellTemplate: null,
            resourceCellTemplate: null,
            dateCellTemplate: null,
            startDayHour: 0,
            endDayHour: 24,
            editing: {
                allowAdding: true,
                allowDeleting: true,
                allowDragging: true,
                allowResizing: true,
                allowUpdating: true
            },
            showAllDayPanel: true,
            recurrenceEditMode: "dialog",
            cellDuration: 30,
            onAppointmentRendered: null,
            onAppointmentClick: null,
            onAppointmentDblClick: null,
            onCellClick: null,
            onAppointmentAdding: null,
            onAppointmentAdded: null,
            onAppointmentUpdating: null,
            onAppointmentUpdated: null,
            onAppointmentDeleting: null,
            onAppointmentDeleted: null,
            onAppointmentFormCreated: null,
            appointmentTooltipTemplate: "appointmentTooltip",
            appointmentPopupTemplate: "appointmentPopup",
            crossScrollingEnabled: false,
            useDropDownViewSwitcher: false,
            startDateExpr: "startDate",
            endDateExpr: "endDate",
            textExpr: "text",
            descriptionExpr: "description",
            allDayExpr: "allDay",
            recurrenceRuleExpr: "recurrenceRule",
            recurrenceExceptionExpr: "recurrenceException",
            remoteFiltering: false,
            timeZone: "",
            startDateTimeZoneExpr: "startDateTimeZone",
            endDateTimeZoneExpr: "endDateTimeZone",
            noDataText: messageLocalization.format("dxCollectionWidget-noDataText"),
            allowMultipleCellSelection: true
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function() {
                return "desktop" === devices.real().deviceType && !devices.isSimulator()
            },
            options: {
                focusStateEnabled: true
            }
        }, {
            device: function() {
                return !devices.current().generic
            },
            options: {
                useDropDownViewSwitcher: true,
                editing: {
                    allowDragging: false,
                    allowResizing: false
                }
            }
        }])
    },
    _setDeprecatedOptions: function() {
        this.callBase();
        $.extend(this._deprecatedOptions, {
            horizontalScrollingEnabled: {
                since: "16.1",
                alias: "crossScrollingEnabled"
            }
        })
    },
    _optionChanged: function(args) {
        var value = args.value,
            name = args.name;
        switch (args.name) {
            case "firstDayOfWeek":
                this._updateOption("workSpace", name, value);
                this._updateOption("header", name, value);
                break;
            case "currentDate":
                value = dateUtils.trimTime(dateUtils.makeDate(value));
                this._workSpace.option(name, value);
                this._header.option(name, value);
                this._appointments.option("items", []);
                this._filterAppointmentsByDate();
                this._reloadDataSource();
                break;
            case "dataSource":
                this._initDataSource();
                this._customizeStoreLoadOptions();
                this._appointmentModel.setDataSource(this._dataSource);
                this._loadResources().done($.proxy(function() {
                    this._filterAppointmentsByDate();
                    this._updateOption("workSpace", "showAllDayPanel", this.option("showAllDayPanel"));
                    this._reloadDataSource()
                }, this));
                break;
            case "min":
            case "max":
                this._updateOption("header", name, dateUtils.makeDate(value));
                this._updateOption("workSpace", name, dateUtils.makeDate(value));
                break;
            case "views":
                if (!!this._getCurrentViewOptions()) {
                    this.repaint()
                } else {
                    this._header.option(name, value)
                }
                break;
            case "useDropDownViewSwitcher":
                this._header.option(name, value);
                break;
            case "currentView":
                this._appointments.option({
                    items: [],
                    allowDrag: this._allowDragging(),
                    allowResize: this._allowResizing()
                });
                this._header.option("min", this._getCurrentViewOption("min"));
                this._header.option("max", this._getCurrentViewOption("max"));
                this._header.option("currentDate", this._getCurrentViewOption("currentDate"));
                this._header.option("firstDayOfWeek", this._getCurrentViewOption("firstDayOfWeek"));
                this._header.option(name, value);
                this._loadResources().done($.proxy(function(resources) {
                    this._appointments.option("renderingStrategy", this._getAppointmentsRenderingStrategy());
                    this._refreshWorkSpace(resources);
                    this._filterAppointmentsByDate();
                    this._appointments.option("allowAllDayResize", "day" !== value);
                    this._reloadDataSource()
                }, this));
                break;
            case "appointmentTemplate":
                this._appointments.option("itemTemplate", value);
                break;
            case "dateCellTemplate":
            case "resourceCellTemplate":
            case "dataCellTemplate":
            case "timeCellTemplate":
                this._updateOption("workSpace", name, value);
                this.repaint();
                break;
            case "groups":
                this._loadResources().done($.proxy(function(resources) {
                    this._workSpace.option(name, resources);
                    this._filterAppointmentsByDate();
                    this._reloadDataSource()
                }, this));
                break;
            case "resources":
                this._resourcesManager.setResources(this.option("resources"));
                this._appointmentModel.setDataAccessors(this._combineDataAccessors());
                this._loadResources().done($.proxy(function(resources) {
                    this._workSpace.option("groups", resources);
                    this._filterAppointmentsByDate();
                    this._reloadDataSource()
                }, this));
                break;
            case "startDayHour":
            case "endDayHour":
                this._appointments.option("items", []);
                this._updateOption("workSpace", name, value);
                this._appointments.option("dayDuration", this._getDayDuration());
                this._filterAppointmentsByDate();
                this._reloadDataSource();
                break;
            case "onAppointmentAdding":
            case "onAppointmentAdded":
            case "onAppointmentUpdating":
            case "onAppointmentUpdated":
            case "onAppointmentDeleting":
            case "onAppointmentDeleted":
            case "onAppointmentFormCreated":
                this._actions[name] = this._createActionByOption(name);
                break;
            case "onAppointmentRendered":
                this._appointments.option("onItemRendered", this._getAppointmentRenderedAction());
                break;
            case "onAppointmentClick":
                this._appointments.option("onItemClick", this._createActionByOption(name));
                break;
            case "onAppointmentDblClick":
                this._appointments.option(name, this._createActionByOption(name));
                break;
            case "noDataText":
            case "allowMultipleCellSelection":
            case "accessKey":
            case "onCellClick":
                this._workSpace.option(name, value);
                break;
            case "crossScrollingEnabled":
                this._loadResources().done($.proxy(function(resources) {
                    this._refreshWorkSpace(resources);
                    this._appointments.repaint()
                }, this));
                break;
            case "cellDuration":
                this._updateOption("workSpace", "hoursInterval", value / 60);
                this._appointments.option("appointmentDurationInMinutes", value);
                break;
            case "tabIndex":
            case "focusStateEnabled":
                this._updateOption("header", name, value);
                this._updateOption("workSpace", name, value);
                this._appointments.option(name, value);
                this.callBase(args);
                break;
            case "width":
                this._updateOption("header", name, value);
                if (this.option("crossScrollingEnabled")) {
                    this._updateOption("workSpace", "width", value)
                }
                this.callBase(args);
                this._dimensionChanged();
                break;
            case "height":
                this.callBase(args);
                this._dimensionChanged();
                break;
            case "editing":
                this._initEditing();
                var editing = this._editing;
                this._bringEditingModeToAppointments(editing);
                if (this._appointmentForm) {
                    this._appointmentForm.option("readOnly", !this._editing.allowUpdating)
                }
                this.hideAppointmentTooltip();
                break;
            case "showAllDayPanel":
                this._loadResources().done($.proxy(function() {
                    this._filterAppointmentsByDate();
                    this._updateOption("workSpace", "allDayExpanded", value);
                    this._updateOption("workSpace", name, value);
                    this._reloadDataSource()
                }, this));
                break;
            case "appointmentTooltipTemplate":
            case "appointmentPopupTemplate":
            case "recurrenceEditMode":
            case "remoteFiltering":
            case "timeZone":
                this.repaint();
                break;
            case "startDateExpr":
            case "endDateExpr":
            case "startDateTimeZoneExpr":
            case "endDateTimeZoneExpr":
            case "textExpr":
            case "descriptionExpr":
            case "allDayExpr":
            case "recurrenceRuleExpr":
            case "recurrenceExceptionExpr":
                this._updateExpression(name, value);
                this._initAppointmentTemplate();
                this.repaint();
                break;
            default:
                this.callBase(args)
        }
    },
    _bringEditingModeToAppointments: function(editing) {
        var currentView = this.option("currentView");
        var editingConfig = {
            allowDelete: editing.allowUpdating && editing.allowDeleting
        };
        if ("agenda" !== currentView) {
            editingConfig.allowDrag = editing.allowDragging;
            editingConfig.allowResize = editing.allowResizing;
            editingConfig.allowAllDayResize = editing.allowResizing && "day" !== currentView
        }
        this._appointments.option(editingConfig);
        this._dropDownAppointments.repaintExisting(this.element())
    },
    _allowDragging: function() {
        return this._editing.allowDragging && "agenda" !== this.option("currentView")
    },
    _allowResizing: function() {
        return this._editing.allowResizing && "agenda" !== this.option("currentView")
    },
    _isAllDayExpanded: function(items) {
        return this.option("showAllDayPanel") && this._appointmentModel.hasAllDayAppointments(items, this._getCurrentViewOption("startDayHour"), this._getCurrentViewOption("endDayHour"))
    },
    _getTimezoneOffsetByOption: function(date) {
        return this._calculateTimezoneByValue(this.option("timeZone"), date)
    },
    _calculateTimezoneByValue: function(timezone, date) {
        var result = timezone;
        if ("string" === typeof timezone) {
            date = date || new Date;
            result = SchedulerTimezones.getTimezoneOffsetById(timezone, Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()))
        }
        return result
    },
    _filterAppointmentsByDate: function() {
        var dateRange = this._workSpace.getDateRange();
        this._appointmentModel.filterByDate(dateRange[0], dateRange[1], this.option("remoteFiltering"))
    },
    _loadResources: function() {
        var groups = this._getCurrentViewOption("groups"),
            result = $.Deferred();
        this._resourcesManager.loadResources(groups).done($.proxy(function(resources) {
            this._loadedResources = resources;
            result.resolve(resources)
        }, this));
        return result.promise()
    },
    _dataSourceLoadedCallback: $.Callbacks(),
    _reloadDataSource: function() {
        if (this._dataSource) {
            this._dataSource.load().done($.proxy(function() {
                loading.hide();
                this._fireContentReadyAction()
            }, this)).fail(function() {
                loading.hide()
            });
            this._dataSource.isLoading() && loading.show({
                container: this.element(),
                position: { of: this.element()
                }
            })
        }
    },
    _dimensionChanged: function() {
        if ("agenda" !== this.option("currentView")) {
            clearTimeout(this._repaintTimer);
            this._repaintTimer = setTimeout($.proxy(function() {
                this._appointments && this._appointments.repaint()
            }, this), 0)
        }
        this._toggleSmallClass();
        this.hideAppointmentTooltip()
    },
    _toggleSmallClass: function() {
        var width = this.element().outerWidth();
        this.element().toggleClass(WIDGET_SMALL_CLASS, width < WIDGET_SMALL_WIDTH)
    },
    _visibilityChanged: function(visible) {
        visible && this._dimensionChanged()
    },
    _dataSourceOptions: function() {
        return {
            paginate: false
        }
    },
    _init: function() {
        this._initExpressions({
            startDate: this.option("startDateExpr"),
            endDate: this.option("endDateExpr"),
            startDateTimeZone: this.option("startDateTimeZoneExpr"),
            endDateTimeZone: this.option("endDateTimeZoneExpr"),
            allDay: this.option("allDayExpr"),
            text: this.option("textExpr"),
            description: this.option("descriptionExpr"),
            recurrenceRule: this.option("recurrenceRuleExpr"),
            recurrenceException: this.option("recurrenceExceptionExpr")
        });
        this.callBase();
        this._initDataSource();
        this._loadedResources = [];
        this._proxiedCustomizeStoreLoadOptionsHandler = $.proxy(this._customizeStoreLoadOptionsHandler, this);
        this._customizeStoreLoadOptions();
        this.element().addClass(WIDGET_CLASS);
        this._initEditing();
        this._resourcesManager = new SchedulerResourceManager(this.option("resources"));
        var combinedDataAccessors = this._combineDataAccessors();
        this._appointmentModel = new SchedulerAppointmentModel(this._dataSource, {
            startDateExpr: this.option("startDateExpr"),
            endDateExpr: this.option("endDateExpr"),
            allDayExpr: this.option("allDayExpr"),
            recurrenceRuleExpr: this.option("recurrenceRuleExpr"),
            recurrenceExceptionExpr: this.option("recurrenceExceptionExpr")
        }, combinedDataAccessors);
        this._initActions();
        this._dropDownAppointments = new DropDownAppointments;
        this._subscribes = subscribes
    },
    _initTemplates: function() {
        this.callBase();
        this._initAppointmentTemplate();
        this._defaultTemplates.appointmentTooltip = new EmptyTemplate(this);
        this._defaultTemplates.appointmentPopup = new EmptyTemplate(this)
    },
    _initAppointmentTemplate: function() {
        var that = this;
        this._defaultTemplates.item = new BindableTemplate(function($container, data) {
            var appointmentsInst = that.getAppointmentsInstance();
            appointmentsInst._renderAppointmentTemplate.call(appointmentsInst, $container, data)
        }, ["html", "text", "startDate", "endDate", "allDay", "description", "recurrenceRule", "recurrenceException", "startDateTimeZone", "endDateTimeZone"], this.option("integrationOptions.watchMethod"), {
            text: this._dataAccessors.getter.text,
            startDate: this._dataAccessors.getter.startDate,
            endDate: this._dataAccessors.getter.endDate,
            startDateTimeZone: this._dataAccessors.getter.startDateTimeZone,
            endDateTimeZone: this._dataAccessors.getter.endDateTimeZone,
            allDay: this._dataAccessors.getter.allDay,
            recurrenceRule: this._dataAccessors.getter.recurrenceRule
        })
    },
    _combineDataAccessors: function() {
        var resourcesDataAccessors = this._resourcesManager._dataAccessors,
            result = $.extend(true, {}, this._dataAccessors);
        $.each(resourcesDataAccessors, $.proxy(function(type, accessor) {
            result[type].resources = accessor
        }, this));
        return result
    },
    _renderContent: function() {
        this._renderContentImpl()
    },
    _dataSourceChangedHandler: function(result) {
        var filteredItems = this.fire("prerenderFilter");
        this._workSpace.option("allDayExpanded", this._isAllDayExpanded(filteredItems));
        this._appointments.option("renderingStrategy", this._getAppointmentsRenderingStrategy());
        if ("agenda" === this.option("currentView")) {
            this._appointments._renderingStrategy.calculateRows(filteredItems, 7, this.option("currentDate"))
        }
        this._setAppointmentsData(filteredItems);
        if ("agenda" === this.option("currentView")) {
            this._workSpace._renderView();
            this._dataSourceLoadedCallback.fireWith(this, [result])
        }
    },
    _initExpressions: function(fields) {
        var dataCoreUtils = require("../../core/utils/data");
        if (!this._dataAccessors) {
            this._dataAccessors = {
                getter: {},
                setter: {}
            }
        }
        $.each(fields, $.proxy(function(name, value) {
            if (!!value) {
                this._dataAccessors.getter[name] = dataCoreUtils.compileGetter(value);
                this._dataAccessors.setter[name] = dataCoreUtils.compileSetter(value)
            } else {
                delete this._dataAccessors.getter[name];
                delete this._dataAccessors.setter[name]
            }
        }, this))
    },
    _updateExpression: function(name, value) {
        var exprObj = {};
        exprObj[name.replace("Expr", "")] = value;
        this._initExpressions(exprObj)
    },
    _initEditing: function() {
        var editing = this.option("editing");
        this._editing = {
            allowAdding: !!editing,
            allowUpdating: !!editing,
            allowDeleting: !!editing,
            allowResizing: !!editing,
            allowDragging: !!editing
        };
        if (commonUtils.isObject(editing)) {
            this._editing = $.extend(this._editing, editing)
        }
        this._editing.allowDragging = this._editing.allowDragging && this._editing.allowUpdating;
        this._editing.allowResizing = this._editing.allowResizing && this._editing.allowUpdating;
        this.element().toggleClass(WIDGET_READONLY_CLASS, this._isReadOnly())
    },
    _isReadOnly: function() {
        var result = true,
            editing = this._editing;
        for (var prop in editing) {
            if (editing.hasOwnProperty(prop)) {
                result = result && !editing[prop]
            }
        }
        return result
    },
    _customizeStoreLoadOptions: function() {
        this._dataSource && this._dataSource.on("customizeStoreLoadOptions", this._proxiedCustomizeStoreLoadOptionsHandler)
    },
    _dispose: function() {
        this.hideAppointmentPopup();
        this.hideAppointmentTooltip();
        this.option("templatesRenderAsynchronously") && clearTimeout(this._recalculateTimeout);
        clearTimeout(this._repaintTimer);
        this._dataSource && this._dataSource.off("customizeStoreLoadOptions", this._proxiedCustomizeStoreLoadOptionsHandler);
        this.callBase()
    },
    _customizeStoreLoadOptionsHandler: function(options) {
        options.storeLoadOptions.dxScheduler = {
            startDate: this.getStartViewDate(),
            endDate: this.getEndViewDate(),
            resources: this.option("resources")
        }
    },
    _initActions: function() {
        this._actions = {
            onAppointmentAdding: this._createActionByOption("onAppointmentAdding"),
            onAppointmentAdded: this._createActionByOption("onAppointmentAdded"),
            onAppointmentUpdating: this._createActionByOption("onAppointmentUpdating"),
            onAppointmentUpdated: this._createActionByOption("onAppointmentUpdated"),
            onAppointmentDeleting: this._createActionByOption("onAppointmentDeleting"),
            onAppointmentDeleted: this._createActionByOption("onAppointmentDeleted"),
            onAppointmentFormCreated: this._createActionByOption("onAppointmentFormCreated")
        }
    },
    _getAppointmentRenderedAction: function() {
        return this._createActionByOption("onAppointmentRendered", {
            excludeValidators: ["designMode", "disabled", "readOnly"]
        })
    },
    _renderFocusTarget: $.noop,
    _render: function() {
        this.callBase();
        this._renderHeader();
        this._appointments = this._createComponent("<div>", SchedulerAppointments, this._appointmentsConfig());
        this._toggleSmallClass();
        this._loadResources().done($.proxy(function(resources) {
            this._renderWorkSpace(resources);
            var $fixedContainer = this._workSpace.getFixedContainer(),
                $allDayContainer = this._workSpace.getAllDayContainer();
            this._appointments.option({
                fixedContainer: $fixedContainer,
                allDayContainer: $allDayContainer
            });
            this._filterAppointmentsByDate();
            this._reloadDataSource()
        }, this))
    },
    _setAppointmentsData: function(items) {
        if (items) {
            var opts = {
                items: items
            };
            opts.itemTemplate = this._getAppointmentTemplate("appointmentTemplate");
            this._appointments.option(opts)
        }
    },
    _renderHeader: function() {
        var $header = $("<div>").appendTo(this.element());
        this._header = this._createComponent($header, SchedulerHeader, this._headerConfig())
    },
    _headerConfig: function() {
        var result, currentViewOptions = this._getCurrentViewOptions(),
            viewNames = $.map(this.option("views"), function(view) {
                return commonUtils.isObject(view) ? view.type : view
            });
        result = $.extend({
            min: this.option("min"),
            max: this.option("max"),
            firstDayOfWeek: this.option("firstDayOfWeek"),
            currentView: this.option("currentView"),
            currentDate: this.option("currentDate"),
            tabIndex: this.option("tabIndex"),
            focusStateEnabled: this.option("focusStateEnabled"),
            width: this.option("width"),
            rtlEnabled: this.option("rtlEnabled"),
            useDropDownViewSwitcher: this.option("useDropDownViewSwitcher")
        }, currentViewOptions);
        result.observer = this;
        result.views = viewNames;
        result.min = dateUtils.makeDate(result.min);
        result.max = dateUtils.makeDate(result.max);
        result.currentDate = dateUtils.trimTime(dateUtils.makeDate(result.currentDate));
        return result
    },
    _appointmentsConfig: function() {
        var editing = this._editing,
            that = this;
        var config = {
            observer: this,
            renderingStrategy: this._getAppointmentsRenderingStrategy(),
            onItemRendered: this._getAppointmentRenderedAction(),
            onItemClick: this._createActionByOption("onAppointmentClick"),
            onAppointmentDblClick: this._createActionByOption("onAppointmentDblClick"),
            tabIndex: this.option("tabIndex"),
            focusStateEnabled: this.option("focusStateEnabled"),
            appointmentDurationInMinutes: this.option("cellDuration"),
            allowDrag: this._allowDragging(),
            allowDelete: this._editing.allowUpdating && this._editing.allowDeleting,
            allowResize: this._allowResizing(),
            allowAllDayResize: editing.allowResizing && "day" !== this.option("currentView"),
            rtlEnabled: this.option("rtlEnabled"),
            onContentReady: function() {
                that._workSpace && that._workSpace.option("allDayExpanded", that._isAllDayExpanded(that._appointments.option("items")))
            },
            dayDuration: this._getDayDuration()
        };
        return config
    },
    _getAppointmentsRenderingStrategy: function() {
        return VIEWS_CONFIG[this.option("currentView")].renderingStrategy
    },
    _getDayDuration: function() {
        return this._getCurrentViewOption("endDayHour") - this._getCurrentViewOption("startDayHour")
    },
    _renderWorkSpace: function(groups) {
        var $workSpace = $("<div>").appendTo(this.element());
        this._workSpace = this._createComponent($workSpace, VIEWS_CONFIG[this.option("currentView")].workSpace, this._workSpaceConfig(groups));
        this._workSpace.getWorkArea().append(this._appointments.element());
        var recalculateHandler = $.proxy(function() {
            domUtils.triggerResizeEvent(this.element())
        }, this);
        if (this.option("templatesRenderAsynchronously")) {
            this._recalculateTimeout = setTimeout(recalculateHandler)
        } else {
            domUtils.triggerResizeEvent(this._workSpace.element())
        }
    },
    _workSpaceConfig: function(groups) {
        var result, currentViewOptions = this._getCurrentViewOptions();
        result = $.extend({
            noDataText: this.option("noDataText"),
            min: this.option("min"),
            max: this.option("max"),
            currentDate: this.option("currentDate"),
            firstDayOfWeek: this.option("firstDayOfWeek"),
            startDayHour: this.option("startDayHour"),
            endDayHour: this.option("endDayHour"),
            tabIndex: this.option("tabIndex"),
            accessKey: this.option("accessKey"),
            focusStateEnabled: this.option("focusStateEnabled"),
            cellDuration: this.option("cellDuration"),
            showAllDayPanel: this.option("showAllDayPanel"),
            allDayExpanded: this._appointments.option("items"),
            crossScrollingEnabled: this.option("crossScrollingEnabled"),
            dataCellTemplate: this.option("dataCellTemplate"),
            timeCellTemplate: this.option("timeCellTemplate"),
            resourceCellTemplate: this.option("resourceCellTemplate"),
            dateCellTemplate: this.option("dateCellTemplate"),
            allowMultipleCellSelection: this.option("allowMultipleCellSelection")
        }, currentViewOptions);
        result.observer = this;
        result.groups = groups;
        result.onCellClick = this._createActionByOption("onCellClick");
        result.min = dateUtils.makeDate(result.min);
        result.max = dateUtils.makeDate(result.max);
        result.currentDate = dateUtils.trimTime(dateUtils.makeDate(result.currentDate));
        result.hoursInterval = result.cellDuration / 60;
        result.allDayExpanded = this._isAllDayExpanded(result.items);
        result.dataCellTemplate = result.dataCellTemplate ? this._getTemplate(result.dataCellTemplate) : null;
        result.timeCellTemplate = result.timeCellTemplate ? this._getTemplate(result.timeCellTemplate) : null;
        result.resourceCellTemplate = result.resourceCellTemplate ? this._getTemplate(result.resourceCellTemplate) : null;
        result.dateCellTemplate = result.dateCellTemplate ? this._getTemplate(result.dateCellTemplate) : null;
        return result
    },
    _getCurrentViewOptions: function() {
        var result, currentView = this.option("currentView");
        $.each(this.option("views"), function(_, view) {
            if (commonUtils.isObject(view) && view.type === currentView) {
                result = view;
                return false
            }
        });
        return result
    },
    _getCurrentViewOption: function(optionName) {
        var currentViewOptions = this._getCurrentViewOptions();
        if (currentViewOptions && currentViewOptions[optionName]) {
            return currentViewOptions[optionName]
        }
        return this.option(optionName)
    },
    _getAppointmentTemplate: function(optionName) {
        var currentViewOptions = this._getCurrentViewOptions();
        if (currentViewOptions && currentViewOptions[optionName]) {
            return this._getTemplate(currentViewOptions[optionName])
        }
        return this._getTemplateByOption(optionName)
    },
    _updateOption: function(viewName, optionName, value) {
        var currentViewOptions = this._getCurrentViewOptions();
        if (!currentViewOptions || !commonUtils.isDefined(currentViewOptions[optionName])) {
            this["_" + viewName].option(optionName, value)
        }
    },
    _refreshWorkSpace: function(groups) {
        this._appointments.element().detach();
        this._workSpace._dispose();
        this._workSpace.element().remove();
        delete this._workSpace;
        this._renderWorkSpace(groups);
        this._appointments.option({
            fixedContainer: this._workSpace.getFixedContainer(),
            allDayContainer: this._workSpace.getAllDayContainer()
        })
    },
    getWorkSpaceScrollable: function() {
        return this._workSpace.getScrollable()
    },
    getWorkSpaceScrollableScrollTop: function() {
        return this._workSpace.getScrollableScrollTop()
    },
    getWorkSpaceScrollableScrollLeft: function() {
        return this._workSpace.getScrollableScrollLeft()
    },
    getWorkSpaceScrollableContainer: function() {
        return this._workSpace.getScrollableContainer()
    },
    getWorkSpaceAllDayHeight: function() {
        return this._workSpace.getAllDayHeight()
    },
    getWorkSpaceHeaderPanelHeight: function() {
        return this._workSpace.getHeaderPanelHeight()
    },
    getWorkSpaceDateTableOffset: function() {
        return !this.option("crossScrollingEnabled") || this.option("rtlEnabled") ? this._workSpace.getTimePanelWidth() : 0
    },
    getWorkSpace: function() {
        return this._workSpace
    },
    getHeader: function() {
        return this._header
    },
    _createPopup: function(appointmentData, processTimeZone) {
        if (this._$popup) {
            this._popup.element().remove()
        }
        this._$popup = $("<div>").addClass(APPOINTMENT_POPUP_CLASS).appendTo(this.element());
        this._initDynamicPopupTemplate(appointmentData, processTimeZone);
        this._popup = this._createComponent(this._$popup, Popup, this._popupConfig(appointmentData))
    },
    _popupContent: function(appointmentData, processTimeZone) {
        var $popupContent = this._popup.content();
        this._createAppointmentForm(appointmentData, $popupContent, processTimeZone);
        return $popupContent
    },
    _createAppointmentForm: function(appointmentData, $content, processTimeZone) {
        var allDay = this.fire("getField", "allDay", appointmentData),
            resources = this.option("resources"),
            startDate = this.fire("getField", "startDate", appointmentData),
            endDate = this.fire("getField", "endDate", appointmentData);
        AppointmentForm.prepareAppointmentFormEditors(allDay, {
            textExpr: this.option("textExpr"),
            allDayExpr: this.option("allDayExpr"),
            startDateExpr: this.option("startDateExpr"),
            endDateExpr: this.option("endDateExpr"),
            descriptionExpr: this.option("descriptionExpr"),
            recurrenceRuleExpr: this.option("recurrenceRuleExpr"),
            startDateTimeZoneExpr: this.option("startDateTimeZoneExpr"),
            endDateTimeZoneExpr: this.option("endDateTimeZoneExpr")
        }, this);
        if (resources && resources.length) {
            this._resourcesManager.setResources(this.option("resources"));
            AppointmentForm.concatResources(this._resourcesManager.getEditors())
        }
        $.each(this._resourcesManager.getResourcesFromItem(appointmentData, true) || {}, function(resourceName, resourceValue) {
            appointmentData[resourceName] = resourceValue
        });
        var formData = $.extend(true, {}, appointmentData);
        if (processTimeZone) {
            startDate = this.fire("convertDateByTimezone", startDate);
            endDate = this.fire("convertDateByTimezone", endDate);
            this.fire("setField", "startDate", formData, startDate);
            this.fire("setField", "endDate", formData, endDate)
        }
        this._appointmentForm = AppointmentForm.create($.proxy(this._createComponent, this), $content, this._editAppointmentData ? !this._editing.allowUpdating : false, formData);
        var recurrenceRuleExpr = this.option("recurrenceRuleExpr"),
            recurrentEditorItem = recurrenceRuleExpr ? this._appointmentForm.itemOption(recurrenceRuleExpr) : null;
        if (recurrentEditorItem) {
            var options = recurrentEditorItem.editorOptions || {};
            options.startDate = startDate;
            this._appointmentForm.itemOption(recurrenceRuleExpr, "editorOptions", options)
        }
        this._actions.onAppointmentFormCreated({
            form: this._appointmentForm,
            appointmentData: appointmentData
        })
    },
    _initDynamicPopupTemplate: function(appointmentData, processTimeZone) {
        var that = this;
        this._defaultTemplates.appointmentPopup = new FunctionTemplate(function(options) {
            var $popupContent = that._popupContent(appointmentData, processTimeZone);
            options.container.append($popupContent);
            return options.container
        })
    },
    _popupConfig: function(appointmentData) {
        var template = this._getTemplateByOption("appointmentPopupTemplate");
        return {
            maxWidth: APPOINTEMENT_POPUP_WIDTH,
            onHiding: $.proxy(function() {
                this.focus()
            }, this),
            contentTemplate: new FunctionTemplate(function(options) {
                return template.render({
                    model: appointmentData,
                    container: options.container
                })
            }),
            defaultOptionsRules: [{
                device: function() {
                    return !devices.current().generic
                },
                options: {
                    fullScreen: true
                }
            }]
        }
    },
    _getPopupToolbarItems: function() {
        return [{
            shortcut: "done",
            location: "after",
            onClick: $.proxy(this._doneButtonClickHandler, this)
        }, {
            shortcut: "cancel",
            location: "after"
        }]
    },
    _doneButtonClickHandler: function(args) {
        args.cancel = true;
        this._saveChanges();
        var startDate = this.fire("getField", "startDate", this._appointmentForm.option("formData"));
        this._workSpace.updateScrollPosition(startDate)
    },
    _saveChanges: function() {
        var validation = this._appointmentForm.validate();
        if (validation && !validation.isValid) {
            return false
        }
        var formData = this._appointmentForm.option("formData"),
            oldData = this._editAppointmentData,
            recData = this._updatedRecAppointment;

        function convert(obj, dateFieldName) {
            var date = new Date(this.fire("getField", dateFieldName, obj));
            var tzDiff = 36e5 * this._getTimezoneOffsetByOption() + this.fire("getClientTimezoneOffset");
            return new Date(date.getTime() + tzDiff)
        }
        if (oldData) {
            var processedStartDate = this.fire("convertDateByTimezoneBack", this.fire("getField", "startDate", formData));
            var processedEndDate = this.fire("convertDateByTimezoneBack", this.fire("getField", "endDate", formData));
            this.fire("setField", "startDate", formData, processedStartDate);
            this.fire("setField", "endDate", formData, processedEndDate)
        }
        if (oldData && !recData) {
            this.updateAppointment(oldData, formData)
        } else {
            recData && this.updateAppointment(oldData, recData);
            delete this._updatedRecAppointment;
            if ("number" === typeof this._getTimezoneOffsetByOption()) {
                this.fire("setField", "startDate", formData, convert.call(this, formData, "startDate"));
                this.fire("setField", "endDate", formData, convert.call(this, formData, "endDate"))
            }
            this.addAppointment(formData)
        }
        return true
    },
    _checkRecurringAppointment: function(targetAppointment, singleAppointment, exceptionDate, callback, isDeleted, isPopupEditing) {
        delete this._updatedRecAppointment;
        var recurrenceRule = this.fire("getField", "recurrenceRule", targetAppointment);
        if (!recurrenceUtils.getRecurrenceRule(recurrenceRule).isValid || !this._editing.allowUpdating) {
            callback();
            return
        }
        var editMode = this.option("recurrenceEditMode");
        switch (editMode) {
            case "series":
                callback();
                break;
            case "occurrence":
                this._singleAppointmentChangesHandler(targetAppointment, singleAppointment, exceptionDate, isDeleted, isPopupEditing);
                break;
            default:
                this._showRecurrenceChangeConfirm(isDeleted).done($.proxy(function(result) {
                    result && callback();
                    !result && this._singleAppointmentChangesHandler(targetAppointment, singleAppointment, exceptionDate, isDeleted, isPopupEditing)
                }, this)).fail($.proxy(function() {
                    this._appointments.moveAppointmentBack()
                }, this))
        }
    },
    _singleAppointmentChangesHandler: function(targetAppointment, singleAppointment, exceptionDate, isDeleted, isPopupEditing) {
        exceptionDate = new Date(exceptionDate);

        function processAppointmentDates(appointment, commonTimezoneOffset) {
            var clientTzOffset = -(this._subscribes.getClientTimezoneOffset() / 36e5);
            var processedStartDate = this.fire("convertDateByTimezoneBack", this.fire("getField", "startDate", appointment), this.fire("getField", "startDateTimeZone", appointment));
            var processedEndDate = this.fire("convertDateByTimezoneBack", this.fire("getField", "endDate", appointment), this.fire("getField", "endDateTimeZone", appointment));
            if ("number" === typeof commonTimezoneOffset && !isNaN(commonTimezoneOffset)) {
                var processedStartDateInUTC = processedStartDate.getTime() - 36e5 * clientTzOffset,
                    processedEndDateInUTC = processedEndDate.getTime() - 36e5 * clientTzOffset;
                processedStartDate = new Date(processedStartDateInUTC + 36e5 * commonTimezoneOffset);
                processedEndDate = new Date(processedEndDateInUTC + 36e5 * commonTimezoneOffset)
            }
            this.fire("setField", "startDate", appointment, processedStartDate);
            this.fire("setField", "endDate", appointment, processedEndDate)
        }
        this.fire("setField", "recurrenceRule", singleAppointment, "");
        this.fire("setField", "recurrenceException", singleAppointment, "");
        if (!isDeleted && !isPopupEditing) {
            processAppointmentDates.call(this, singleAppointment, this._getTimezoneOffsetByOption());
            this.addAppointment(singleAppointment)
        }
        var recurrenceException = this._getRecurrenceException(exceptionDate, targetAppointment),
            updatedAppointment = $.extend({}, targetAppointment, {
                recurrenceException: recurrenceException
            });
        if (isPopupEditing) {
            this._updatedRecAppointment = updatedAppointment;
            processAppointmentDates.call(this, singleAppointment);
            this._showAppointmentPopup(singleAppointment, true, true);
            this._editAppointmentData = targetAppointment
        } else {
            this._updateAppointment(targetAppointment, updatedAppointment)
        }
    },
    _getRecurrenceException: function(exceptionDate, targetAppointment) {
        var startDate = this.getAppointmentsInstance()._getStartDate(targetAppointment, true),
            exceptionByDate = this._getRecurrenceExceptionDate(exceptionDate, startDate),
            recurrenceException = this.fire("getField", "recurrenceException", targetAppointment);
        return recurrenceException ? recurrenceException + "," + exceptionByDate : exceptionByDate
    },
    _getRecurrenceExceptionDate: function(exceptionDate, targetStartDate) {
        exceptionDate.setHours(targetStartDate.getHours());
        exceptionDate.setMinutes(targetStartDate.getMinutes());
        exceptionDate.setSeconds(targetStartDate.getSeconds());
        return dateLocalization.format(exceptionDate, "yyyyMMddTHHmmss")
    },
    _showRecurrenceChangeConfirm: function(isDeleted) {
        var message = messageLocalization.format(isDeleted ? "dxScheduler-confirmRecurrenceDeleteMessage" : "dxScheduler-confirmRecurrenceEditMessage"),
            seriesText = messageLocalization.format(isDeleted ? "dxScheduler-confirmRecurrenceDeleteSeries" : "dxScheduler-confirmRecurrenceEditSeries"),
            occurrenceText = messageLocalization.format(isDeleted ? "dxScheduler-confirmRecurrenceDeleteOccurrence" : "dxScheduler-confirmRecurrenceEditOccurrence");
        return dialog.custom({
            message: message,
            showCloseButton: true,
            showTitle: true,
            toolbarItems: [{
                text: seriesText,
                onClick: function() {
                    return true
                }
            }, {
                text: occurrenceText,
                onClick: function() {
                    return false
                }
            }]
        }).show()
    },
    _getUpdatedData: function(options) {
        var target = options.data || options;
        var cellData = this.getTargetCellData(),
            targetAllDay = this.fire("getField", "allDay", target),
            targetStartDate = dateUtils.makeDate(this.fire("getField", "startDate", target)),
            targetEndDate = dateUtils.makeDate(this.fire("getField", "endDate", target)),
            allDay = cellData.allDay,
            date = cellData.date || targetStartDate,
            groups = cellData.groups,
            duration = targetEndDate.getTime() - targetStartDate.getTime();
        var updatedData = {};
        this.fire("setField", "allDay", updatedData, allDay);
        this.fire("setField", "startDate", updatedData, date);
        var endDate = new Date(date.getTime() + duration);
        if (this.appointmentTakesAllDay(target) && !updatedData.allDay && this._workSpace.supportAllDayRow()) {
            endDate = this._workSpace.calculateEndDate(date)
        }
        if (targetAllDay && !this._workSpace.supportAllDayRow()) {
            var dateCopy = new Date(date);
            dateCopy.setHours(0);
            endDate = new Date(dateCopy.getTime() + duration);
            if (0 !== endDate.getHours()) {
                endDate.setHours(this._getCurrentViewOption("endDayHour"))
            }
        }
        this.fire("setField", "endDate", updatedData, endDate);
        for (var name in groups) {
            if (groups.hasOwnProperty(name)) {
                updatedData[name] = groups[name]
            }
        }
        return updatedData
    },
    _getCoordinates: function(dates, appointmentResources, allDay) {
        var result = [];
        for (var i = 0; i < dates.length; i++) {
            var currentCoords = this._workSpace.getCoordinatesByDateInGroup(dates[i], appointmentResources, allDay);
            for (var j = 0; j < currentCoords.length; j++) {
                $.extend(currentCoords[j], {
                    startDate: dates[i]
                })
            }
            result = result.concat(currentCoords)
        }
        return result
    },
    _getSingleAppointmentData: function(appointmentData, options) {
        options = options || {};
        var updatedStartDate, $appointment = options.$appointment,
            updatedData = options.skipDateCalculation ? {} : this._getUpdatedData(options),
            resultAppointmentData = $.extend({}, appointmentData, updatedData),
            allDay = this.fire("getField", "allDay", appointmentData),
            isAllDay = this._workSpace.supportAllDayRow() && allDay,
            startDate = new Date(this.fire("getField", "startDate", resultAppointmentData)),
            endDate = new Date(this.fire("getField", "endDate", resultAppointmentData)),
            appointmentDuration = endDate.getTime() - startDate.getTime();
        if (commonUtils.isDefined($appointment)) {
            var apptDataCalculator = this._appointments._renderingStrategy.getAppointmentDataCalculator();
            if ($.isFunction(apptDataCalculator)) {
                updatedStartDate = apptDataCalculator($appointment, startDate).startDate
            } else {
                if (this._needUpdateAppointmentData($appointment)) {
                    var coordinates = translator.locate($appointment);
                    updatedStartDate = new Date(this._workSpace.getCellDataByCoordinates(coordinates, isAllDay).startDate);
                    if ($appointment.hasClass("dx-scheduler-appointment-reduced")) {
                        updatedStartDate = $appointment.data("dxAppointmentStartDate")
                    }
                    if (!options.skipHoursProcessing) {
                        updatedStartDate.setHours(startDate.getHours());
                        updatedStartDate.setMinutes(startDate.getMinutes())
                    }
                }
            }
        }
        if (updatedStartDate) {
            this.fire("setField", "startDate", resultAppointmentData, updatedStartDate);
            this.fire("setField", "endDate", resultAppointmentData, new Date(updatedStartDate.getTime() + appointmentDuration))
        }
        return resultAppointmentData
    },
    _needUpdateAppointmentData: function($appointment) {
        return $appointment.hasClass("dx-scheduler-appointment-compact") || $appointment.hasClass("dx-scheduler-appointment-recurrence")
    },
    subscribe: function(subject, action) {
        this._subscribes[subject] = subscribes[subject] = action
    },
    fire: function(subject) {
        var callback = this._subscribes[subject],
            args = Array.prototype.slice.call(arguments);
        if (!$.isFunction(callback)) {
            throw errors.Error("E1031", subject)
        }
        return callback.apply(this, args.slice(1))
    },
    getTargetCellData: function() {
        return this._workSpace.getDataByDroppableCell()
    },
    _updateAppointment: function(target, appointment, onUpdatePrevented) {
        var updatingOptions = {
            newData: appointment,
            oldData: target,
            cancel: false
        };
        var performFailAction = function(err) {
            if ($.isFunction(onUpdatePrevented)) {
                onUpdatePrevented.call(this)
            }
            if (err && "Error" === err.name) {
                throw err
            }
        }.bind(this);
        this._actions.onAppointmentUpdating(updatingOptions);
        this._processActionResult(updatingOptions, function(canceled) {
            if (!canceled) {
                this._expandAllDayPanel(appointment);
                try {
                    this._appointmentModel.update(target, appointment).always($.proxy(function(e) {
                        this._executeActionWhenOperationIsCompleted(this._actions.onAppointmentUpdated, appointment, e)
                    }, this)).fail(function() {
                        performFailAction()
                    })
                } catch (err) {
                    performFailAction(err)
                }
            } else {
                performFailAction()
            }
        })
    },
    _processActionResult: function(actionOptions, callback) {
        when(actionOptions.cancel).done($.proxy(callback, this))
    },
    _expandAllDayPanel: function(appointment) {
        if (!this._isAllDayExpanded(this._appointments.option("items")) && this.appointmentTakesAllDay(appointment)) {
            this._workSpace.option("allDayExpanded", true)
        }
    },
    _executeActionWhenOperationIsCompleted: function(action, appointment, e) {
        var options = {
                appointmentData: appointment
            },
            isError = e && "Error" === e.name;
        if (isError) {
            options.error = e
        } else {
            if (this._popup && this._popup.option("visible")) {
                this._popup.hide()
            }
        }
        action(options);
        this._fireContentReadyAction()
    },
    _showAppointmentPopup: function(appointmentData, showButtons, processTimeZone) {
        this._createPopup(appointmentData, processTimeZone);
        var toolbarItems = [],
            showCloseButton = true;
        if (!commonUtils.isDefined(showButtons) || showButtons) {
            toolbarItems = this._getPopupToolbarItems();
            showCloseButton = this._popup.initialOption("showCloseButton")
        }
        this._popup.option({
            toolbarItems: toolbarItems,
            showCloseButton: showCloseButton
        });
        this._popup.show()
    },
    getAppointmentPopup: function() {
        return this._popup
    },
    getAppointmentDetailsForm: function() {
        return this._appointmentForm
    },
    getAppointmentsInstance: function() {
        return this._appointments
    },
    getResourceManager: function() {
        return this._resourcesManager
    },
    getAppointmentResourceData: function(field, value) {
        return this._resourcesManager.getResourceDataByValue(field, value)
    },
    getActions: function() {
        return this._actions
    },
    appointmentTakesAllDay: function(appointment) {
        return this._appointmentModel.appointmentTakesAllDay(appointment, this._getCurrentViewOption("startDayHour"), this._getCurrentViewOption("endDayHour"))
    },
    recurrenceEditorVisibilityChanged: function(visible) {
        if (this._appointmentForm) {
            this._appointmentForm.element().find("." + RECURRENCE_EDITOR_ITEM_CLASS).toggleClass(RECURRENCE_EDITOR_OPENED_ITEM_CLASS, visible)
        }
    },
    dayHasAppointment: function(day, appointment, trimTime) {
        var startDate = dateUtils.makeDate(this.fire("getField", "startDate", appointment)),
            endDate = dateUtils.makeDate(this.fire("getField", "endDate", appointment)),
            startDateTimeZone = this.fire("getField", "startDateTimeZone", appointment),
            endDateTimeZone = this.fire("getField", "endDateTimeZone", appointment);
        startDate = this.fire("convertDateByTimezone", startDate, startDateTimeZone);
        endDate = this.fire("convertDateByTimezone", endDate, endDateTimeZone);
        if (day.getTime() === endDate.getTime()) {
            return startDate.getTime() === endDate.getTime()
        }
        if (trimTime) {
            day = dateUtils.trimTime(day);
            startDate = dateUtils.trimTime(startDate);
            endDate = dateUtils.trimTime(endDate)
        }
        var dayTimeStamp = day.getTime(),
            startDateTimeStamp = startDate.getTime(),
            endDateTimeStamp = endDate.getTime();
        return $.inArray(dayTimeStamp, [startDateTimeStamp, endDateTimeStamp]) > -1 || startDateTimeStamp < dayTimeStamp && endDateTimeStamp > dayTimeStamp
    },
    setTargetedAppointmentResources: function(targetedAppointment, appointmentElement, appointmentIndex) {
        var groups = this._getCurrentViewOption("groups");
        if (groups && groups.length) {
            var getGroups, setResourceCallback, resourcesSetter = this._resourcesManager._dataAccessors.setter,
                workSpace = this._workSpace;
            if ("agenda" === this.option("currentView")) {
                getGroups = function() {
                    var apptSettings = this.getAppointmentsInstance()._positionMap[appointmentIndex];
                    return workSpace._getCellGroups(apptSettings[0].groupIndex)
                };
                setResourceCallback = function(_, group) {
                    resourcesSetter[group.name](targetedAppointment, group.id)
                }
            } else {
                getGroups = function() {
                    var apptPosition = appointmentElement.position();
                    return workSpace.getCellDataByCoordinates(apptPosition).groups
                };
                setResourceCallback = function(field, value) {
                    resourcesSetter[field](targetedAppointment, value)
                }
            }
            $.each(getGroups.call(this), setResourceCallback)
        }
    },
    getStartViewDate: function() {
        return this._workSpace.getStartViewDate()
    },
    getEndViewDate: function() {
        return this._workSpace.getEndViewDate()
    },
    showAppointmentPopup: function(appointmentData, createNewAppointment, currentAppointmentData) {
        var singleAppointment = !currentAppointmentData && appointmentData.length ? this._getSingleAppointmentData(appointmentData) : currentAppointmentData;
        var startDate;
        if (currentAppointmentData) {
            startDate = this.fire("getField", "startDate", currentAppointmentData)
        } else {
            startDate = this.fire("getField", "startDate", appointmentData)
        }
        this._checkRecurringAppointment(appointmentData, singleAppointment, startDate, $.proxy(function() {
            var editing = this._editing;
            if (createNewAppointment) {
                delete this._editAppointmentData;
                editing.allowAdding && this._showAppointmentPopup(appointmentData, true, false)
            } else {
                this._editAppointmentData = appointmentData;
                this._showAppointmentPopup(appointmentData, editing.allowUpdating, true)
            }
        }, this), false, true)
    },
    hideAppointmentPopup: function(saveChanges) {
        if (!this._popup || !this._popup.option("visible")) {
            return
        }
        if (saveChanges) {
            this._saveChanges()
        }
        this._popup.hide()
    },
    showAppointmentTooltip: function(appointmentData, target, currentAppointmentData) {
        if (!appointmentData) {
            return
        }
        currentAppointmentData = currentAppointmentData || appointmentData;
        appointmentTooltip.show(appointmentData, currentAppointmentData, target, this)
    },
    hideAppointmentTooltip: function() {
        appointmentTooltip.hide()
    },
    scrollToTime: function(hours, minutes, date) {
        this._workSpace.scrollToTime(hours, minutes, date)
    },
    addAppointment: function(appointment) {
        var text = this.fire("getField", "text", appointment);
        if (!text) {
            this.fire("setField", "text", appointment, "")
        }
        var addingOptions = {
            appointmentData: appointment,
            cancel: false
        };
        this._actions.onAppointmentAdding(addingOptions);
        this._processActionResult(addingOptions, function(canceled) {
            if (!canceled) {
                this._expandAllDayPanel(appointment);
                this._appointmentModel.add(appointment, {
                    value: this._getTimezoneOffsetByOption(),
                    clientOffset: this.fire("getClientTimezoneOffset")
                }).always($.proxy(function(e) {
                    this._executeActionWhenOperationIsCompleted(this._actions.onAppointmentAdded, appointment, e)
                }, this))
            }
        })
    },
    updateAppointment: function(target, appointment) {
        this._updateAppointment(target, appointment)
    },
    deleteAppointment: function(appointment) {
        var deletingOptions = {
            appointmentData: appointment,
            cancel: false
        };
        this._actions.onAppointmentDeleting(deletingOptions);
        this._processActionResult(deletingOptions, function(canceled) {
            if (!canceled) {
                this._appointmentModel.remove(appointment).always($.proxy(function(e) {
                    this._executeActionWhenOperationIsCompleted(this._actions.onAppointmentDeleted, appointment, e)
                }, this))
            }
        })
    },
    focus: function() {
        if (this._editAppointmentData) {
            this._appointments.focus()
        } else {
            this._workSpace.focus()
        }
    }
}).include(DataHelperMixin);
registerComponent("dxScheduler", Scheduler);
module.exports = Scheduler;
