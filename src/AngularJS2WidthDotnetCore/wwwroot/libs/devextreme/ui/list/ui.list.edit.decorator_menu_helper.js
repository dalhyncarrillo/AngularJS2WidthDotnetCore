/**
 * DevExtreme (ui/list/ui.list.edit.decorator_menu_helper.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var EditDecoratorMenuHelperMixin = {
    _menuEnabled: function() {
        return !!this._menuItems().length
    },
    _menuItems: function() {
        return this._list.option("menuItems")
    },
    _deleteEnabled: function() {
        return this._list.option("allowItemDeleting")
    },
    _fireMenuAction: function($itemElement, action) {
        this._list._itemEventHandlerByHandler($itemElement, action, {}, {
            excludeValidators: ["disabled", "readOnly"]
        })
    }
};
module.exports = EditDecoratorMenuHelperMixin;
