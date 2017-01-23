/**
 * DevExtreme (ui/widget/function_template.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var TemplateBase = require("./ui.template_base"),
    domUtils = require("../../core/utils/dom");
var FunctionTemplate = TemplateBase.inherit({
    ctor: function(render) {
        this._render = render
    },
    _renderCore: function(options) {
        return domUtils.normalizeTemplateElement(this._render(options))
    }
});
module.exports = FunctionTemplate;
