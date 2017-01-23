/**
 * DevExtreme (core/utils/svg.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";

function getMarkup(element) {
    var temp = document.createElement("div");
    temp.appendChild(element.cloneNode(true));
    return temp.innerHTML
}

function fixIENamespaces(markup) {
    var first = true;
    markup = markup.replace(/xmlns="[\s\S]*?"/gi, function(match) {
        if (!first) {
            return ""
        }
        first = false;
        return match
    });
    return markup.replace(/xmlns:NS1="[\s\S]*?"/gi, "").replace(/NS1:xmlns:xlink="([\s\S]*?)"/gi, 'xmlns:xlink="$1"')
}

function decodeHtmlEntities(markup) {
    return markup.replace(/&quot;/gi, "&#34;").replace(/&amp;/gi, "&#38;").replace(/&apos;/gi, "&#39;").replace(/&lt;/gi, "&#60;").replace(/&gt;/gi, "&#62;").replace(/&nbsp;/gi, "&#160;").replace(/&shy;/gi, "&#173;")
}
exports.getSvgMarkup = function(element) {
    return fixIENamespaces(decodeHtmlEntities(getMarkup(element)))
};