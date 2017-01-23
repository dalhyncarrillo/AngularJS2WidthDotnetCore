/**
 * DevExtreme (ui/notify.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Action = require("../core/action"),
    viewPortUtils = require("../core/utils/view_port"),
    Toast = require("./toast");
var $notify = null;
var notify = function(message, type, displayTime) {
    var options = $.isPlainObject(message) ? message : {
        message: message
    };
    var userHiddenAction = options.onHidden;
    $.extend(options, {
        type: type,
        displayTime: displayTime,
        onHidden: function(args) {
            args.element.remove();
            new Action(userHiddenAction, {
                context: args.model
            }).execute(arguments)
        }
    });
    $notify = $("<div>").appendTo(viewPortUtils.value());
    new Toast($notify, options).show()
};
module.exports = notify;
module.exports.default = module.exports;
