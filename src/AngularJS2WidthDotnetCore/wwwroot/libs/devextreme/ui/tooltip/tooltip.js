/**
 * DevExtreme (ui/tooltip/tooltip.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Guid = require("../../core/guid"),
    registerComponent = require("../../core/component_registrator"),
    Popover = require("../popover"),
    TOOLTIP_CLASS = "dx-tooltip",
    TOOLTIP_WRAPPER_CLASS = "dx-tooltip-wrapper";
var Tooltip = Popover.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            toolbarItems: [],
            showCloseButton: false,
            showTitle: false,
            title: null,
            titleTemplate: null,
            onTitleRendered: null,
            bottomTemplate: null,
            propagateOutsideClick: true
        })
    },
    _render: function() {
        this.element().addClass(TOOLTIP_CLASS);
        this._wrapper().addClass(TOOLTIP_WRAPPER_CLASS);
        this.callBase()
    },
    _renderContent: function() {
        this.callBase();
        this._contentId = new Guid;
        this._$content.attr({
            id: this._contentId,
            role: "tooltip"
        });
        this._toggleAriaDescription(true)
    },
    _toggleAriaDescription: function(showing) {
        var $target = $(this.option("target")),
            label = showing ? this._contentId : void 0;
        this.setAria("describedby", label, $target)
    }
});
registerComponent("dxTooltip", Tooltip);
module.exports = Tooltip;
