/**
 * DevExtreme (mobile/process_hardware_back_button.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    hardwareBack = $.Callbacks();
module.exports = function() {
    hardwareBack.fire()
};
module.exports.processCallback = hardwareBack;
module.exports.default = module.exports;