/**
 * DevExtreme (core/config.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    config = {
        rtlEnabled: false,
        defaultCurrency: "USD",
        designMode: false,
        serverDecimalSeparator: "."
    };
module.exports = function() {
    if (!arguments.length) {
        return config
    }
    $.extend(config, arguments[0])
};
module.exports.default = module.exports;
