/**
 * DevExtreme (ui/list/ui.list.edit.decorator.static.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Button = require("../button"),
    registerDecorator = require("./ui.list.edit.decorator_registry").register,
    EditDecorator = require("./ui.list.edit.decorator");
var STATIC_DELETE_BUTTON_CONTAINER_CLASS = "dx-list-static-delete-button-container",
    STATIC_DELETE_BUTTON_CLASS = "dx-list-static-delete-button";
registerDecorator("delete", "static", EditDecorator.inherit({
    afterBag: function(config) {
        var $itemElement = config.$itemElement,
            $container = config.$container;
        var $button = $("<div>").addClass(STATIC_DELETE_BUTTON_CLASS);
        this._list._createComponent($button, Button, {
            icon: "remove",
            onClick: $.proxy(function(args) {
                args.jQueryEvent.stopPropagation();
                this._deleteItem($itemElement)
            }, this),
            integrationOptions: {}
        });
        $container.addClass(STATIC_DELETE_BUTTON_CONTAINER_CLASS).append($button)
    },
    _deleteItem: function($itemElement) {
        if ($itemElement.is(".dx-state-disabled, .dx-state-disabled *")) {
            return
        }
        this._list.deleteItem($itemElement)
    }
}));
