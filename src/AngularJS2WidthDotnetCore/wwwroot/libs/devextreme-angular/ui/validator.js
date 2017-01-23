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
var validator_1 = require('devextreme/ui/validator');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var adapter_1 = require('./nested/adapter');
var validation_rule_dxi_1 = require('./nested/validation-rule-dxi');
var validation_rule_dxi_2 = require('./nested/validation-rule-dxi');
var DxValidatorComponent = (function (_super) {
    __extends(DxValidatorComponent, _super);
    function DxValidatorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'widthChange' },
            { emit: 'adapterChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxValidatorComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "adapter", {
        get: function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidatorComponent.prototype._createInstance = function (element, options) {
        return new validator_1.default(element, options);
    };
    DxValidatorComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxValidatorComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('validationRules', changes);
    };
    DxValidatorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
    };
    DxValidatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-validator',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxValidatorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxValidatorComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'adapter': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'validationGroup': [{ type: core_1.Input },],
        'validationRules': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValidated': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'adapterChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'validationGroupChange': [{ type: core_1.Output },],
        'validationRulesChange': [{ type: core_1.Output },],
        'validationRulesChildren': [{ type: core_1.ContentChildren, args: [validation_rule_dxi_2.DxiValidationRuleComponent,] },],
    };
    return DxValidatorComponent;
}(component_1.DxComponentExtension));
exports.DxValidatorComponent = DxValidatorComponent;
var DxValidatorModule = (function () {
    function DxValidatorModule() {
    }
    DxValidatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxValidatorComponent
                    ],
                    exports: [
                        DxValidatorComponent,
                        adapter_1.DxoAdapterModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxValidatorModule.ctorParameters = function () { return []; };
    return DxValidatorModule;
}());
exports.DxValidatorModule = DxValidatorModule;
//# sourceMappingURL=validator.js.map