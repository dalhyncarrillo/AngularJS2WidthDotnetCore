/**
 * DevExtreme (framework/html/markup_component.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class"),
    publicComponentUtils = require("../../core/utils/public_component");
var MarkupComponent = Class.inherit({
    ctor: function(element, options) {
        this.NAME = publicComponentUtils.name(this.constructor);
        options = options || {};
        this._$element = $(element);
        publicComponentUtils.attachInstanceToElement(this._$element, this, this._dispose);
        if (options.fromCache) {
            this._options = options
        } else {
            this._options = {};
            this._setDefaultOptions();
            if (options) {
                this.option(options)
            }
            this._render()
        }
    },
    _setDefaultOptions: $.noop,
    _render: $.noop,
    _dispose: $.noop,
    element: function() {
        return this._$element
    },
    option: function(name, value) {
        if (0 === arguments.length) {
            return this._options
        } else {
            if (1 === arguments.length) {
                if ("string" === typeof name) {
                    return this._options[name]
                } else {
                    value = name;
                    $.extend(this._options, value)
                }
            } else {
                this._options[name] = value
            }
        }
    },
    instance: function() {
        return this
    }
});
MarkupComponent.getInstance = function($element) {
    return publicComponentUtils.getInstanceByElement($($element), this)
};
exports.MarkupComponent = MarkupComponent;
