/**
 * DevExtreme (localization/currency.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    numberLocalization = require("./number");
numberLocalization.inject({
    _formatNumberCore: function(value, format, formatConfig) {
        if ("currency" === format) {
            formatConfig.precision = formatConfig.precision || 0;
            return this.getCurrencySymbol().symbol + this.format(value, $.extend({}, formatConfig, {
                type: "fixedpoint"
            }))
        }
        return this.callBase.apply(this, arguments)
    },
    getCurrencySymbol: function() {
        return {
            symbol: "$"
        }
    },
    getOpenXmlCurrencyFormat: function() {
        return "$#,##0{0}_);\\($#,##0{0}\\)"
    }
});
