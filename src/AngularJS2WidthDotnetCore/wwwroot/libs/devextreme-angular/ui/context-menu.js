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
var context_menu_1 = require('devextreme/ui/context_menu');
var component_1 = require('../core/component');
var template_host_1 = require('../core/template-host');
var template_1 = require('../core/template');
var nested_option_1 = require('../core/nested-option');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var item_dxi_1 = require('./nested/item-dxi');
var animation_1 = require('./nested/animation');
var hide_1 = require('./nested/hide');
var show_1 = require('./nested/show');
var show_submenu_mode_1 = require('./nested/show-submenu-mode');
var delay_1 = require('./nested/delay');
var show_event_1 = require('./nested/show-event');
var position_1 = require('./nested/position');
var at_1 = require('./nested/at');
var boundary_offset_1 = require('./nested/boundary-offset');
var collision_1 = require('./nested/collision');
var my_1 = require('./nested/my');
var offset_1 = require('./nested/offset');
var item_dxi_2 = require('./nested/item-dxi');
var DxContextMenuComponent = (function (_super) {
    __extends(DxContextMenuComponent, _super);
    function DxContextMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
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
            { emit: 'dataSourceChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionByClickChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemsExprChange' },
            { emit: 'selectedExprChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'selectByClickChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'showEventChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'targetChange' },
            { emit: 'positionChange' }
        ]);
        this._idh.setHost(this);
        optionHost.setHost(this);
    }
    Object.defineProperty(DxContextMenuComponent.prototype, "elementAttr", {
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItems", {
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionByClick", {
        get: function () {
            return this._getOption('selectionByClick');
        },
        set: function (value) {
            this._setOption('selectionByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabledExpr", {
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsExpr", {
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedExpr", {
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectByClick", {
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showSubmenuMode", {
        get: function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showEvent", {
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "submenuDirection", {
        get: function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxContextMenuComponent.prototype._createInstance = function (element, options) {
        return new context_menu_1.default(element, options);
    };
    DxContextMenuComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxContextMenuComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedItems', changes);
        this._idh.setup('items', changes);
    };
    DxContextMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    DxContextMenuComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    DxContextMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-context-menu',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    DxContextMenuComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxContextMenuComponent.propDecorators = {
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
        'dataSource': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'selectedItem': [{ type: core_1.Input },],
        'selectedItems': [{ type: core_1.Input },],
        'selectionByClick': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabledExpr': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'itemsExpr': [{ type: core_1.Input },],
        'selectedExpr': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'cssClass': [{ type: core_1.Input },],
        'selectByClick': [{ type: core_1.Input },],
        'showSubmenuMode': [{ type: core_1.Input },],
        'closeOnOutsideClick': [{ type: core_1.Input },],
        'showEvent': [{ type: core_1.Input },],
        'submenuDirection': [{ type: core_1.Input },],
        'target': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onHiding': [{ type: core_1.Output },],
        'onPositioning': [{ type: core_1.Output },],
        'onShowing': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
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
        'dataSourceChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'selectedItemChange': [{ type: core_1.Output },],
        'selectedItemsChange': [{ type: core_1.Output },],
        'selectionByClickChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'disabledExprChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'itemsExprChange': [{ type: core_1.Output },],
        'selectedExprChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'cssClassChange': [{ type: core_1.Output },],
        'selectByClickChange': [{ type: core_1.Output },],
        'showSubmenuModeChange': [{ type: core_1.Output },],
        'closeOnOutsideClickChange': [{ type: core_1.Output },],
        'showEventChange': [{ type: core_1.Output },],
        'submenuDirectionChange': [{ type: core_1.Output },],
        'targetChange': [{ type: core_1.Output },],
        'positionChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxContextMenuComponent;
}(component_1.DxComponent));
exports.DxContextMenuComponent = DxContextMenuComponent;
var DxContextMenuModule = (function () {
    function DxContextMenuModule() {
    }
    DxContextMenuModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        show_event_1.DxoShowEventModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxContextMenuComponent
                    ],
                    exports: [
                        DxContextMenuComponent,
                        item_dxi_1.DxiItemModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        show_event_1.DxoShowEventModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    DxContextMenuModule.ctorParameters = function () { return []; };
    return DxContextMenuModule;
}());
exports.DxContextMenuModule = DxContextMenuModule;
//# sourceMappingURL=context-menu.js.map