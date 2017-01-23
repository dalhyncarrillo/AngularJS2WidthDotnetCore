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
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var tag_box_1 = require('devextreme/ui/tag_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var item_dxi_2 = require('./nested/item-dxi');
var DxTagBoxComponent = (function (_super) {
    __extends(DxTagBoxComponent, _super);
    function DxTagBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'attrChange' },
            { emit: 'inputAttrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'textChange' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'hideSelectedItemsChange' },
            { emit: 'multilineChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'tagTemplateChange' },
            { emit: 'valuesChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxTagBoxComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "inputAttr", {
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "acceptCustomValue", {
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "applyValueMode", {
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldTemplate", {
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "pagingEnabled", {
        get: function () {
            return this._getOption('pagingEnabled');
        },
        set: function (value) {
            this._setOption('pagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchEnabled", {
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showDataBeforeSearch", {
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showSelectionControls", {
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hideSelectedItems", {
        get: function () {
            return this._getOption('hideSelectedItems');
        },
        set: function (value) {
            this._setOption('hideSelectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "multiline", {
        get: function () {
            return this._getOption('multiline');
        },
        set: function (value) {
            this._setOption('multiline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "selectedItems", {
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "tagTemplate", {
        get: function () {
            return this._getOption('tagTemplate');
        },
        set: function (value) {
            this._setOption('tagTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTagBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new tag_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxTagBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTagBoxComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('value', changes);
        this._idh.setup('searchExpr', changes);
        this._idh.setup('selectedItems', changes);
    };
    DxTagBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('value');
        this._idh.doCheck('searchExpr');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
    };
    DxTagBoxComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxTagBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tag-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxTagBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxTagBoxComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'dataSource': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'valueExpr': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'attr': [{ type: core_1.Input },],
        'inputAttr': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'showClearButton': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'acceptCustomValue': [{ type: core_1.Input },],
        'applyValueMode': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'fieldEditEnabled': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'fieldTemplate': [{ type: core_1.Input },],
        'minSearchLength': [{ type: core_1.Input },],
        'noDataText': [{ type: core_1.Input },],
        'pagingEnabled': [{ type: core_1.Input },],
        'searchEnabled': [{ type: core_1.Input },],
        'searchExpr': [{ type: core_1.Input },],
        'searchMode': [{ type: core_1.Input },],
        'searchTimeout': [{ type: core_1.Input },],
        'showDataBeforeSearch': [{ type: core_1.Input },],
        'showSelectionControls': [{ type: core_1.Input },],
        'hideSelectedItems': [{ type: core_1.Input },],
        'multiline': [{ type: core_1.Input },],
        'selectedItems': [{ type: core_1.Input },],
        'tagTemplate': [{ type: core_1.Input },],
        'values': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onFocusIn': [{ type: core_1.Output },],
        'onFocusOut': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'onChange': [{ type: core_1.Output },],
        'onEnterKey': [{ type: core_1.Output },],
        'onInput': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onKeyPress': [{ type: core_1.Output },],
        'onKeyUp': [{ type: core_1.Output },],
        'onClosed': [{ type: core_1.Output },],
        'onOpened': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onCustomItemCreating': [{ type: core_1.Output },],
        'onSelectAllValueChanged': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'valueExprChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'attrChange': [{ type: core_1.Output },],
        'inputAttrChange': [{ type: core_1.Output },],
        'placeholderChange': [{ type: core_1.Output },],
        'showClearButtonChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'acceptCustomValueChange': [{ type: core_1.Output },],
        'applyValueModeChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'fieldEditEnabledChange': [{ type: core_1.Output },],
        'openedChange': [{ type: core_1.Output },],
        'fieldTemplateChange': [{ type: core_1.Output },],
        'minSearchLengthChange': [{ type: core_1.Output },],
        'noDataTextChange': [{ type: core_1.Output },],
        'pagingEnabledChange': [{ type: core_1.Output },],
        'searchEnabledChange': [{ type: core_1.Output },],
        'searchExprChange': [{ type: core_1.Output },],
        'searchModeChange': [{ type: core_1.Output },],
        'searchTimeoutChange': [{ type: core_1.Output },],
        'showDataBeforeSearchChange': [{ type: core_1.Output },],
        'showSelectionControlsChange': [{ type: core_1.Output },],
        'hideSelectedItemsChange': [{ type: core_1.Output },],
        'multilineChange': [{ type: core_1.Output },],
        'selectedItemsChange': [{ type: core_1.Output },],
        'tagTemplateChange': [{ type: core_1.Output },],
        'valuesChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxTagBoxComponent;
}(component_1.DxComponent));
exports.DxTagBoxComponent = DxTagBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxTagBoxValueAccessorDirective; }),
    multi: true
};
var DxTagBoxValueAccessorDirective = (function () {
    function DxTagBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxTagBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxTagBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxTagBoxValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxTagBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxTagBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxTagBoxValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-tag-box[formControlName],dx-tag-box[formControl],dx-tag-box[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxTagBoxValueAccessorDirective.ctorParameters = function () { return [
        { type: DxTagBoxComponent, },
    ]; };
    DxTagBoxValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxTagBoxValueAccessorDirective;
}());
exports.DxTagBoxValueAccessorDirective = DxTagBoxValueAccessorDirective;
var DxTagBoxModule = (function () {
    function DxTagBoxModule() {
    }
    DxTagBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxTagBoxComponent,
                        DxTagBoxValueAccessorDirective
                    ],
                    exports: [
                        DxTagBoxComponent,
                        item_dxi_1.DxiItemModule,
                        DxTagBoxValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxTagBoxModule.ctorParameters = function () { return []; };
    return DxTagBoxModule;
}());
exports.DxTagBoxModule = DxTagBoxModule;
//# sourceMappingURL=tag-box.js.map