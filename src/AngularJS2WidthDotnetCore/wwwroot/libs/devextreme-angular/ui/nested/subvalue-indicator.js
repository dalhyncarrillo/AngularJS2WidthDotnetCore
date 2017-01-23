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
var nested_option_1 = require('../../core/nested-option');
var gauge_indicator_1 = require('./base/gauge-indicator');
var DxoSubvalueIndicatorComponent = (function (_super) {
    __extends(DxoSubvalueIndicatorComponent, _super);
    function DxoSubvalueIndicatorComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoSubvalueIndicatorComponent.prototype, "_optionPath", {
        get: function () {
            return 'subvalueIndicator';
        },
        enumerable: true,
        configurable: true
    });
    DxoSubvalueIndicatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-subvalue-indicator',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'arrowLength',
                        'backgroundColor',
                        'baseValue',
                        'color',
                        'horizontalOrientation',
                        'indentFromCenter',
                        'length',
                        'offset',
                        'palette',
                        'secondColor',
                        'secondFraction',
                        'size',
                        'spindleGapSize',
                        'spindleSize',
                        'text',
                        'verticalOrientation',
                        'width',
                        'type'
                    ]
                },] },
    ];
    DxoSubvalueIndicatorComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoSubvalueIndicatorComponent;
}(gauge_indicator_1.DxoGaugeIndicator));
exports.DxoSubvalueIndicatorComponent = DxoSubvalueIndicatorComponent;
var DxoSubvalueIndicatorModule = (function () {
    function DxoSubvalueIndicatorModule() {
    }
    DxoSubvalueIndicatorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoSubvalueIndicatorComponent
                    ],
                    exports: [
                        DxoSubvalueIndicatorComponent
                    ],
                },] },
    ];
    DxoSubvalueIndicatorModule.ctorParameters = function () { return []; };
    return DxoSubvalueIndicatorModule;
}());
exports.DxoSubvalueIndicatorModule = DxoSubvalueIndicatorModule;
//# sourceMappingURL=subvalue-indicator.js.map