/**
 * DevExtreme (ui/text_box/utils.caret.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    commonUtils = require("../../core/utils/common"),
    browser = require("../../core/utils/browser");
var isFocusingOnCaretChange = browser.msie && parseInt(browser.version) <= 12;
var getCaret = function(input) {
    if (isObsoleteBrowser(input)) {
        return getCaretForObsoleteBrowser(input)
    }
    return {
        start: input.selectionStart,
        end: input.selectionEnd
    }
};
var setCaret = function(input, position) {
    if (isObsoleteBrowser(input)) {
        setCaretForObsoleteBrowser(input, position);
        return
    }
    if (!$.contains(document, input)) {
        return
    }
    input.selectionStart = position.start;
    input.selectionEnd = position.end
};
var isObsoleteBrowser = function(input) {
    return !input.setSelectionRange
};
var getCaretForObsoleteBrowser = function(input) {
    var range = document.selection.createRange();
    var rangeCopy = range.duplicate();
    range.move("character", -input.value.length);
    range.setEndPoint("EndToStart", rangeCopy);
    return {
        start: range.text.length,
        end: range.text.length + rangeCopy.text.length
    }
};
var setCaretForObsoleteBrowser = function(input, position) {
    if (!$.contains(document, input)) {
        return
    }
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart("character", position.start);
    range.moveEnd("character", position.end - position.start);
    range.select()
};
var caret = function(input, position) {
    input = $(input).get(0);
    if (!commonUtils.isDefined(position)) {
        return getCaret(input)
    }
    if (isFocusingOnCaretChange && document.activeElement !== input) {
        return
    }
    setCaret(input, position)
};
module.exports = caret;
