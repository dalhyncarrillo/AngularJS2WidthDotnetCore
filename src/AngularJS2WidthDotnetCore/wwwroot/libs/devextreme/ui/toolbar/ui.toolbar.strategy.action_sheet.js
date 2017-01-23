/**
 * DevExtreme (ui/toolbar/ui.toolbar.strategy.action_sheet.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    ToolbarStrategy = require("./ui.toolbar.strategy"),
    ActionSheet = require("../action_sheet");
var ActionSheetStrategy = ToolbarStrategy.inherit({
    NAME: "actionSheet",
    _getMenuItemTemplate: function() {
        return this._toolbar._getTemplate("actionSheetItem")
    },
    render: function() {
        if (!this._hasVisibleMenuItems()) {
            return
        }
        this.callBase()
    },
    _menuWidgetClass: function() {
        return ActionSheet
    },
    _menuContainer: function() {
        return this._toolbar.element()
    },
    _widgetOptions: function() {
        return $.extend({}, this.callBase(), {
            target: this._$button,
            showTitle: false
        })
    },
    _menuButtonOptions: function() {
        return $.extend({}, this.callBase(), {
            icon: "overflow"
        })
    },
    _toggleMenu: function() {
        this.callBase.apply(this, arguments);
        this._menu.toggle(this._menuShown);
        this._menuShown = false
    }
});
module.exports = ActionSheetStrategy;