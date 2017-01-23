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
var position_config_1 = require('./base/position-config');
var DxoPositionComponent = (function (_super) {
    __extends(DxoPositionComponent, _super);
    function DxoPositionComponent(parentOptionHost, optionHost) {
        _super.call(this);
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }
    Object.defineProperty(DxoPositionComponent.prototype, "_optionPath", {
        get: function () {
            return 'position';
        },
        enumerable: true,
        configurable: true
    });
    DxoPositionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-position',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'at',
                        'boundary',
                        'boundaryOffset',
                        'collision',
                        'my',
                        'of',
                        'offset'
                    ]
                },] },
    ];
    DxoPositionComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoPositionComponent;
}(position_config_1.DxoPositionConfig));
exports.DxoPositionComponent = DxoPositionComponent;
var DxoPositionModule = (function () {
    function DxoPositionModule() {
    }
    DxoPositionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPositionComponent
                    ],
                    exports: [
                        DxoPositionComponent
                    ],
                },] },
    ];
    DxoPositionModule.ctorParameters = function () { return []; };
    return DxoPositionModule;
}());
exports.DxoPositionModule = DxoPositionModule;
//# sourceMappingURL=position.js.map