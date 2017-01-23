/**
 * DevExtreme (viz/tree_map/colorizing.range.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var _createColorCodeGetter = require("./colorizing").createColorCodeGetter;

function getPaletteIndex(value, items) {
    var middle, start = 0,
        end = items.length - 1,
        index = -1;
    if (items[start] <= value && value <= items[end]) {
        if (value === items[end]) {
            index = end - 1
        } else {
            while (end - start > 1) {
                middle = start + end >> 1;
                if (value < items[middle]) {
                    end = middle
                } else {
                    start = middle
                }
            }
            index = start
        }
    }
    return index
}

function rangeColorizer(options, themeManager) {
    var range = options.range || [],
        palette = themeManager.createDiscretePalette(options.palette, range.length - 1),
        getValue = _createColorCodeGetter(options);
    return function(node) {
        return palette.getColor(getPaletteIndex(getValue(node), range))
    }
}
require("./colorizing").addColorizer("range", rangeColorizer);
module.exports = rangeColorizer;
