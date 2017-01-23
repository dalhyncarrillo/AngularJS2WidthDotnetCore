/**
 * DevExtreme (viz/translators/datetime_translator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var numericTranslator = require("./numeric_translator");
module.exports = {
    translate: numericTranslator.translate,
    untranslate: function() {
        var result = numericTranslator.untranslate.apply(this, arguments);
        return null === result ? result : new Date(result)
    },
    _getValue: numericTranslator._getValue,
    getInterval: numericTranslator.getInterval,
    zoom: numericTranslator.zoom,
    getMinScale: numericTranslator.getMinScale,
    getScale: numericTranslator.getScale,
    isValid: function(value) {
        return numericTranslator.isValid.call(this, new Date(value))
    },
    parse: function(value) {
        return new Date(value)
    },
    to: numericTranslator.to,
    from: function(position) {
        return new Date(numericTranslator.from.call(this, position))
    },
    _add: require("../../core/utils/date").addDateInterval,
    isValueProlonged: numericTranslator.isValueProlonged
};
