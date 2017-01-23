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
var range_slider_1 = require('devextreme/ui/range_slider');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var label_1 = require('./nested/label');
var format_1 = require('./nested/format');
var tooltip_1 = require('./nested/tooltip');
var DxRangeSliderComponent = (function (_super) {
    __extends(DxRangeSliderComponent, _super);
    function DxRangeSliderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
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
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'showRangeChange' },
            { emit: 'stepChange' },
            { emit: 'tooltipChange' },
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxRangeSliderComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "keyStep", {
        get: function () {
            return this._getOption('keyStep');
        },
        set: function (value) {
            this._setOption('keyStep', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "showRange", {
        get: function () {
            return this._getOption('showRange');
        },
        set: function (value) {
            this._setOption('showRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "step", {
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "end", {
        get: function () {
            return this._getOption('end');
        },
        set: function (value) {
            this._setOption('end', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "endName", {
        get: function () {
            return this._getOption('endName');
        },
        set: function (value) {
            this._setOption('endName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "start", {
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "startName", {
        get: function () {
            return this._getOption('startName');
        },
        set: function (value) {
            this._setOption('startName', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRangeSliderComponent.prototype._createInstance = function (element, options) {
        var widget = new range_slider_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxRangeSliderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRangeSliderComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('value', changes);
    };
    DxRangeSliderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
    };
    DxRangeSliderComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxRangeSliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-range-slider',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxRangeSliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxRangeSliderComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
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
        'readOnly': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'keyStep': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'showRange': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'end': [{ type: core_1.Input },],
        'endName': [{ type: core_1.Input },],
        'start': [{ type: core_1.Input },],
        'startName': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
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
        'readOnlyChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'maxChange': [{ type: core_1.Output },],
        'minChange': [{ type: core_1.Output },],
        'keyStepChange': [{ type: core_1.Output },],
        'labelChange': [{ type: core_1.Output },],
        'showRangeChange': [{ type: core_1.Output },],
        'stepChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'endChange': [{ type: core_1.Output },],
        'endNameChange': [{ type: core_1.Output },],
        'startChange': [{ type: core_1.Output },],
        'startNameChange': [{ type: core_1.Output },],
    };
    return DxRangeSliderComponent;
}(component_1.DxComponent));
exports.DxRangeSliderComponent = DxRangeSliderComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxRangeSliderValueAccessorDirective; }),
    multi: true
};
var DxRangeSliderValueAccessorDirective = (function () {
    function DxRangeSliderValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxRangeSliderValueAccessorDirective.prototype.onChange = function (_) { };
    DxRangeSliderValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxRangeSliderValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxRangeSliderValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxRangeSliderValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxRangeSliderValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-range-slider[formControlName],dx-range-slider[formControl],dx-range-slider[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxRangeSliderValueAccessorDirective.ctorParameters = function () { return [
        { type: DxRangeSliderComponent, },
    ]; };
    DxRangeSliderValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxRangeSliderValueAccessorDirective;
}());
exports.DxRangeSliderValueAccessorDirective = DxRangeSliderValueAccessorDirective;
var DxRangeSliderModule = (function () {
    function DxRangeSliderModule() {
    }
    DxRangeSliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        tooltip_1.DxoTooltipModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxRangeSliderComponent,
                        DxRangeSliderValueAccessorDirective
                    ],
                    exports: [
                        DxRangeSliderComponent,
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        tooltip_1.DxoTooltipModule,
                        DxRangeSliderValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxRangeSliderModule.ctorParameters = function () { return []; };
    return DxRangeSliderModule;
}());
exports.DxRangeSliderModule = DxRangeSliderModule;
//# sourceMappingURL=range-slider.js.map