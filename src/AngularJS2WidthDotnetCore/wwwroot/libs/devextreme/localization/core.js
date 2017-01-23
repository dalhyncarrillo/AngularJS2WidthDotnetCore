/**
 * DevExtreme (localization/core.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var dependencyInjector = require("../core/utils/dependency_injector");
module.exports = dependencyInjector({
    locale: function() {
        var currentLocale = "en";
        return function(locale) {
            if (!locale) {
                return currentLocale
            }
            currentLocale = locale
        }
    }()
});
