/**
 * DevExtreme (viz/tree_map/colorizing.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var _normalizeEnum = require("../core/utils").normalizeEnum,
    _noop = require("jquery").noop,
    colorizers = {},
    defaultColorizerName;

function wrapLeafColorGetter(getter) {
    return function(node) {
        return !node.isNode() ? getter(node) : void 0
    }
}

function wrapGroupColorGetter(getter) {
    return function(node) {
        var parent = !node.isNode() && node.parent;
        return parent ? parent._groupColor = parent._groupColor || getter(parent) : void 0
    }
}
exports.getColorizer = function(options, themeManager, root) {
    var type = _normalizeEnum(options.type || defaultColorizerName),
        colorizer = colorizers[type] && colorizers[type](options, themeManager, root);
    return colorizer ? (options.colorizeGroups ? wrapGroupColorGetter : wrapLeafColorGetter)(colorizer) : _noop
};
exports.addColorizer = function(name, colorizer) {
    colorizers[name] = colorizer
};
exports.setDefaultColorizer = function(name) {
    defaultColorizerName = name
};

function getValueAsColorCode(node) {
    return node.value
}

function createColorCodeGetter(colorCodeField) {
    return function(node) {
        return Number(node.data[colorCodeField])
    }
}
exports.createColorCodeGetter = function(options) {
    return options.colorCodeField ? createColorCodeGetter(options.colorCodeField) : getValueAsColorCode
};
