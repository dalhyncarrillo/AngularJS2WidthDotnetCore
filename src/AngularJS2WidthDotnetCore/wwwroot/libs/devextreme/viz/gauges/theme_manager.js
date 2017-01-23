/**
 * DevExtreme (viz/gauges/theme_manager.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    _extend = $.extend,
    BaseThemeManager = require("../core/base_theme_manager").BaseThemeManager;
var ThemeManager = BaseThemeManager.inherit({
    _themeSection: "gauge",
    _fontFields: ["scale.label.font", "valueIndicators.rangebar.text.font", "valueIndicators.textcloud.text.font", "title.font", "title.subtitle.font", "tooltip.font", "indicator.text.font", "loadingIndicator.font", "export.font"],
    _initializeTheme: function() {
        var subTheme, that = this;
        if (that._subTheme) {
            subTheme = _extend(true, {}, that._theme[that._subTheme], that._theme);
            _extend(true, that._theme, subTheme)
        }
        that.callBase.apply(that, arguments)
    }
});
module.exports = ThemeManager;