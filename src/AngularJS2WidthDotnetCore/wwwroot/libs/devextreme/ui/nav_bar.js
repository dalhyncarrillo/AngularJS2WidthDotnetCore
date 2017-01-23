/**
 * DevExtreme (ui/nav_bar.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    registerComponent = require("../core/component_registrator"),
    NavBarItem = require("./nav_bar/item"),
    Tabs = require("./tabs");
var NAVBAR_CLASS = "dx-navbar",
    ITEM_CLASS = "dx-item-content",
    NAVBAR_ITEM_CLASS = "dx-nav-item",
    NAVBAR_ITEM_CONTENT_CLASS = "dx-nav-item-content";
var NavBar = Tabs.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            scrollingEnabled: false
        })
    },
    _render: function() {
        this.callBase();
        this.element().addClass(NAVBAR_CLASS)
    },
    _postprocessRenderItem: function(args) {
        this.callBase(args);
        var $itemElement = args.itemElement,
            itemData = args.itemData;
        $itemElement.addClass(NAVBAR_ITEM_CLASS);
        $itemElement.find("." + ITEM_CLASS).addClass(NAVBAR_ITEM_CONTENT_CLASS);
        if (!itemData.icon && !itemData.iconSrc) {
            $itemElement.addClass("dx-navbar-text-item")
        }
    }
});
NavBar.ItemClass = NavBarItem;
registerComponent("dxNavBar", NavBar);
module.exports = NavBar;
module.exports.default = module.exports;
