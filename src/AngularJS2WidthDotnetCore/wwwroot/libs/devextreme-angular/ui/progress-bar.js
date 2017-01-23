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
var progress_bar_1 = require('devextreme/ui/progress_bar');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var DxProgressBarComponent = (function (_super) {
    __extends(DxProgressBarComponent, _super);
    function DxProgressBarComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'complete', emit: 'onComplete' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'showStatusChange' },
            { emit: 'statusFormatChange' }
        ]);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxProgressBarComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "showStatus", {
        get: function () {
            return this._getOption('showStatus');
        },
        set: function (value) {
            this._setOption('showStatus', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxProgressBarComponent.prototype, "statusFormat", {
        get: function () {
            return this._getOption('statusFormat');
        },
        set: function (value) {
            this._setOption('statusFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    DxProgressBarComponent.prototype._createInstance = function (element, options) {
        var widget = new progress_bar_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxProgressBarComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxProgressBarComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxProgressBarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-progress-bar',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    DxProgressBarComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxProgressBarComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'showStatus': [{ type: core_1.Input },],
        'statusFormat': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'onComplete': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'maxChange': [{ type: core_1.Output },],
        'minChange': [{ type: core_1.Output },],
        'showStatusChange': [{ type: core_1.Output },],
        'statusFormatChange': [{ type: core_1.Output },],
    };
    return DxProgressBarComponent;
}(component_1.DxComponent));
exports.DxProgressBarComponent = DxProgressBarComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxProgressBarValueAccessorDirective; }),
    multi: true
};
var DxProgressBarValueAccessorDirective = (function () {
    function DxProgressBarValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxProgressBarValueAccessorDirective.prototype.onChange = function (_) { };
    DxProgressBarValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxProgressBarValueAccessorDirective.prototype.setDisabledState = function (isDisabled) {
        this.host.disabled = isDisabled;
    };
    DxProgressBarValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxProgressBarValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DxProgressBarValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dx-progress-bar[formControlName],dx-progress-bar[formControl],dx-progress-bar[ngModel]',
                    providers: [CUSTOM_VALUE_ACCESSOR]
                },] },
    ];
    DxProgressBarValueAccessorDirective.ctorParameters = function () { return [
        { type: DxProgressBarComponent, },
    ]; };
    DxProgressBarValueAccessorDirective.propDecorators = {
        'onChange': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
    };
    return DxProgressBarValueAccessorDirective;
}());
exports.DxProgressBarValueAccessorDirective = DxProgressBarValueAccessorDirective;
var DxProgressBarModule = (function () {
    function DxProgressBarModule() {
    }
    DxProgressBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxProgressBarComponent,
                        DxProgressBarValueAccessorDirective
                    ],
                    exports: [
                        DxProgressBarComponent,
                        DxProgressBarValueAccessorDirective,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxProgressBarModule.ctorParameters = function () { return []; };
    return DxProgressBarModule;
}());
exports.DxProgressBarModule = DxProgressBarModule;
//# sourceMappingURL=progress-bar.js.map