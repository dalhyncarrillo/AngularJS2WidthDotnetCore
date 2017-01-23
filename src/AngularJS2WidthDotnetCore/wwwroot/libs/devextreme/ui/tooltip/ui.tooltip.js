/**
 * DevExtreme (ui/tooltip/ui.tooltip.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Tooltip = require("./tooltip"),
    viewPortUtils = require("../../core/utils/view_port");
var tooltip = null;
var removeTooltipElement = null;
var createTooltip = function(options) {
    options = $.extend({
        position: "top"
    }, options);
    var content = options.content;
    delete options.content;
    var $tooltip = $("<div />").html(content).appendTo(viewPortUtils.value());
    removeTooltipElement = function() {
        $tooltip.remove()
    };
    tooltip = new Tooltip($tooltip, options)
};
var removeTooltip = function() {
    if (!tooltip) {
        return
    }
    removeTooltipElement();
    tooltip = null
};
exports.show = function(options) {
    removeTooltip();
    createTooltip(options);
    return tooltip.show()
};
exports.hide = function() {
    if (!tooltip) {
        return $.Deferred().resolve()
    }
    return tooltip.hide().done(removeTooltip).promise()
};
