/**
 * DevExtreme (localization/message.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    dependencyInjector = require("../core/utils/dependency_injector"),
    stringFormat = require("../core/utils/string").format,
    humanize = require("../core/utils/inflector").humanize,
    coreLocalization = require("./core");
require("./core");
var baseDictionary = $.extend(true, {}, require("./default_messages"));
var newMessages = {};
var messageLocalization = dependencyInjector({
    _dictionary: baseDictionary,
    load: function(messages) {
        $.extend(true, this._dictionary, messages)
    },
    _localizablePrefix: "@",
    setup: function(localizablePrefix) {
        this._localizablePrefix = localizablePrefix
    },
    localizeString: function(text) {
        var that = this,
            regex = new RegExp("(^|[^a-zA-Z_0-9" + that._localizablePrefix + "-]+)(" + that._localizablePrefix + "{1,2})([a-zA-Z_0-9-]+)", "g"),
            escapeString = that._localizablePrefix + that._localizablePrefix;
        return text.replace(regex, function(str, prefix, escape, localizationKey) {
            var result, defaultResult = that._localizablePrefix + localizationKey;
            if (escape !== escapeString) {
                result = that.format(localizationKey)
            }
            if (!result) {
                newMessages[localizationKey] = humanize(localizationKey)
            }
            return prefix + (result || defaultResult)
        })
    },
    _messageLoaded: function(key, locale) {
        return void 0 !== this._dictionary[locale || coreLocalization.locale()][key]
    },
    localizeNode: function(node) {
        var that = this;
        $(node).each(function(index, nodeItem) {
            if (!nodeItem.nodeType) {
                return
            }
            if (3 === nodeItem.nodeType) {
                nodeItem.nodeValue = that.localizeString(nodeItem.nodeValue)
            } else {
                if (!$(nodeItem).is("iframe")) {
                    $.each(nodeItem.attributes || [], function(index, attr) {
                        if ("string" === typeof attr.value) {
                            var localizedValue = that.localizeString(attr.value);
                            if (attr.value !== localizedValue) {
                                attr.value = localizedValue
                            }
                        }
                    });
                    $(nodeItem).contents().each(function(index, node) {
                        that.localizeNode(node)
                    })
                }
            }
        })
    },
    getMessagesByLocales: function() {
        return this._dictionary
    },
    getDictionary: function(onlyNew) {
        if (onlyNew) {
            return newMessages
        }
        return $.extend({}, newMessages, this.getMessagesByLocales()[coreLocalization.locale()])
    },
    getFormatter: function(key) {
        return this._getFormatterBase(key) || this._getFormatterBase(key, "en")
    },
    _getFormatterBase: function(key, locale) {
        var localeMessages = this._dictionary[locale || coreLocalization.locale()],
            message = localeMessages && localeMessages[key];
        if (message) {
            return function() {
                var args = 1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0].slice(0) : Array.prototype.slice.call(arguments, 0);
                args.unshift(message);
                return stringFormat.apply(this, args)
            }
        }
    },
    format: function(key) {
        var formatter = this.getFormatter(key);
        return formatter && formatter() || ""
    }
});
module.exports = messageLocalization;
