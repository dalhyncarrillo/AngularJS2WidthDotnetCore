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
var sparkline_1 = require('devextreme/viz/sparkline');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var margin_1 = require('./nested/margin');
var size_1 = require('./nested/size');
var tooltip_1 = require('./nested/tooltip');
var border_1 = require('./nested/border');
var font_1 = require('./nested/font');
var format_1 = require('./nested/format');
var shadow_1 = require('./nested/shadow');
var DxSparklineComponent = (function (_super) {
    __extends(DxSparklineComponent, _super);
    function DxSparklineComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'elementAttrChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'argumentFieldChange' },
            { emit: 'barNegativeColorChange' },
            { emit: 'barPositiveColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'firstLastColorChange' },
            { emit: 'ignoreEmptyPointsChange' },
            { emit: 'lineColorChange' },
            { emit: 'lineWidthChange' },
            { emit: 'lossColorChange' },
            { emit: 'maxColorChange' },
            { emit: 'maxValueChange' },
            { emit: 'minColorChange' },
            { emit: 'minValueChange' },
            { emit: 'pointColorChange' },
            { emit: 'pointSizeChange' },
            { emit: 'pointSymbolChange' },
            { emit: 'showFirstLastChange' },
            { emit: 'showMinMaxChange' },
            { emit: 'typeChange' },
            { emit: 'valueFieldChange' },
            { emit: 'winColorChange' },
            { emit: 'winlossThresholdChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxSparklineComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "argumentField", {
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barNegativeColor", {
        get: function () {
            return this._getOption('barNegativeColor');
        },
        set: function (value) {
            this._setOption('barNegativeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barPositiveColor", {
        get: function () {
            return this._getOption('barPositiveColor');
        },
        set: function (value) {
            this._setOption('barPositiveColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "firstLastColor", {
        get: function () {
            return this._getOption('firstLastColor');
        },
        set: function (value) {
            this._setOption('firstLastColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "ignoreEmptyPoints", {
        get: function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineColor", {
        get: function () {
            return this._getOption('lineColor');
        },
        set: function (value) {
            this._setOption('lineColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineWidth", {
        get: function () {
            return this._getOption('lineWidth');
        },
        set: function (value) {
            this._setOption('lineWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lossColor", {
        get: function () {
            return this._getOption('lossColor');
        },
        set: function (value) {
            this._setOption('lossColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxColor", {
        get: function () {
            return this._getOption('maxColor');
        },
        set: function (value) {
            this._setOption('maxColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxValue", {
        get: function () {
            return this._getOption('maxValue');
        },
        set: function (value) {
            this._setOption('maxValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minColor", {
        get: function () {
            return this._getOption('minColor');
        },
        set: function (value) {
            this._setOption('minColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minValue", {
        get: function () {
            return this._getOption('minValue');
        },
        set: function (value) {
            this._setOption('minValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointColor", {
        get: function () {
            return this._getOption('pointColor');
        },
        set: function (value) {
            this._setOption('pointColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSize", {
        get: function () {
            return this._getOption('pointSize');
        },
        set: function (value) {
            this._setOption('pointSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSymbol", {
        get: function () {
            return this._getOption('pointSymbol');
        },
        set: function (value) {
            this._setOption('pointSymbol', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showFirstLast", {
        get: function () {
            return this._getOption('showFirstLast');
        },
        set: function (value) {
            this._setOption('showFirstLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showMinMax", {
        get: function () {
            return this._getOption('showMinMax');
        },
        set: function (value) {
            this._setOption('showMinMax', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winColor", {
        get: function () {
            return this._getOption('winColor');
        },
        set: function (value) {
            this._setOption('winColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winlossThreshold", {
        get: function () {
            return this._getOption('winlossThreshold');
        },
        set: function (value) {
            this._setOption('winlossThreshold', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSparklineComponent.prototype._createInstance = function (element, options) {
        return new sparkline_1.default(element, options);
    };
    DxSparklineComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxSparklineComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
    };
    DxSparklineComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    };
    DxSparklineComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxSparklineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-sparkline',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxSparklineComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxSparklineComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'argumentField': [{ type: core_1.Input },],
        'barNegativeColor': [{ type: core_1.Input },],
        'barPositiveColor': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'firstLastColor': [{ type: core_1.Input },],
        'ignoreEmptyPoints': [{ type: core_1.Input },],
        'lineColor': [{ type: core_1.Input },],
        'lineWidth': [{ type: core_1.Input },],
        'lossColor': [{ type: core_1.Input },],
        'maxColor': [{ type: core_1.Input },],
        'maxValue': [{ type: core_1.Input },],
        'minColor': [{ type: core_1.Input },],
        'minValue': [{ type: core_1.Input },],
        'pointColor': [{ type: core_1.Input },],
        'pointSize': [{ type: core_1.Input },],
        'pointSymbol': [{ type: core_1.Input },],
        'showFirstLast': [{ type: core_1.Input },],
        'showMinMax': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'valueField': [{ type: core_1.Input },],
        'winColor': [{ type: core_1.Input },],
        'winlossThreshold': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'argumentFieldChange': [{ type: core_1.Output },],
        'barNegativeColorChange': [{ type: core_1.Output },],
        'barPositiveColorChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'firstLastColorChange': [{ type: core_1.Output },],
        'ignoreEmptyPointsChange': [{ type: core_1.Output },],
        'lineColorChange': [{ type: core_1.Output },],
        'lineWidthChange': [{ type: core_1.Output },],
        'lossColorChange': [{ type: core_1.Output },],
        'maxColorChange': [{ type: core_1.Output },],
        'maxValueChange': [{ type: core_1.Output },],
        'minColorChange': [{ type: core_1.Output },],
        'minValueChange': [{ type: core_1.Output },],
        'pointColorChange': [{ type: core_1.Output },],
        'pointSizeChange': [{ type: core_1.Output },],
        'pointSymbolChange': [{ type: core_1.Output },],
        'showFirstLastChange': [{ type: core_1.Output },],
        'showMinMaxChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
        'valueFieldChange': [{ type: core_1.Output },],
        'winColorChange': [{ type: core_1.Output },],
        'winlossThresholdChange': [{ type: core_1.Output },],
    };
    return DxSparklineComponent;
}(component_1.DxComponent));
exports.DxSparklineComponent = DxSparklineComponent;
var DxSparklineModule = (function () {
    function DxSparklineModule() {
    }
    DxSparklineModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxSparklineComponent
                    ],
                    exports: [
                        DxSparklineComponent,
                        margin_1.DxoMarginModule,
                        size_1.DxoSizeModule,
                        tooltip_1.DxoTooltipModule,
                        border_1.DxoBorderModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxSparklineModule.ctorParameters = function () { return []; };
    return DxSparklineModule;
}());
exports.DxSparklineModule = DxSparklineModule;
//# sourceMappingURL=sparkline.js.map