/**
 * DevExtreme (integration/angular/template.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    TemplateBase = require("../../ui/widget/ui.template_base"),
    domUtils = require("../../core/utils/dom");
var NgTemplate = TemplateBase.inherit({
    ctor: function(element, templateCompiler) {
        this._element = element;
        this._compiledTemplate = templateCompiler(domUtils.normalizeTemplateElement(this._element))
    },
    _renderCore: function(options) {
        var compiledTemplate = this._compiledTemplate,
            result = $.isFunction(compiledTemplate) ? compiledTemplate(options) : compiledTemplate;
        return result
    },
    source: function() {
        return $(this._element).clone()
    }
});
module.exports = NgTemplate;
