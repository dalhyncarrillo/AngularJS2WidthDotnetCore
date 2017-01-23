/**
 * DevExtreme (core/utils/icon.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery");
var getImageSourceType = function(source) {
    if (!source || "string" !== typeof source) {
        return false
    }
    if (/data:.*base64|\.|\//.test(source)) {
        return "image"
    }
    if (/^[\w-_]+$/.test(source)) {
        return "dxIcon"
    }
    return "fontIcon"
};
var getImageContainer = function(source) {
    var imageType = getImageSourceType(source),
        ICON_CLASS = "dx-icon";
    switch (imageType) {
        case "image":
            return $("<img>", {
                src: source
            }).addClass(ICON_CLASS);
        case "fontIcon":
            return $("<i>", {
                "class": ICON_CLASS + " " + source
            });
        case "dxIcon":
            return $("<i>", {
                "class": ICON_CLASS + " " + ICON_CLASS + "-" + source
            });
        default:
            return null
    }
};
exports.getImageSourceType = getImageSourceType;
exports.getImageContainer = getImageContainer;