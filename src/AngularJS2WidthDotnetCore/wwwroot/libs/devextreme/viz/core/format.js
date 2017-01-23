/**
 * DevExtreme (viz/core/format.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var _format = require("../../format_helper").format;
module.exports = function(value, options) {
    return _format(value, options.format, options.precision)
};
