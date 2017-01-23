/**
 * DevExtreme (ui/menu/ui.submenu.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    positionUtils = require("../../animation/position"),
    ContextMenu = require("../context_menu");
var DX_CONTEXT_MENU_CONTENT_DELIMITER_CLASS = "dx-context-menu-content-delimiter",
    DX_SUBMENU_CLASS = "dx-submenu";
var Submenu = ContextMenu.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            orientation: "horizontal",
            onHoverStart: $.noop
        })
    },
    _initDataAdapter: function() {
        this._dataAdapter = this.option("_dataAdapter");
        if (!this._dataAdapter) {
            this.callBase()
        }
    },
    _renderContentImpl: function() {
        this._renderContextMenuOverlay();
        this._detachShowContextMenuEvents(this.option("target"));
        this._attachShowContextMenuEvents();
        var node = this._dataAdapter.getNodeByKey(this.option("_parentKey"));
        node && this._renderItems(this._getChildNodes(node));
        if (!this.option("_hideDelimiter")) {
            this._renderDelimiter()
        }
    },
    _renderDelimiter: function() {
        this.$contentDelimiter = $("<div>").appendTo(this._itemContainer()).addClass(DX_CONTEXT_MENU_CONTENT_DELIMITER_CLASS)
    },
    _getOverlayOptions: function() {
        return $.extend(this.callBase(), {
            onPositioned: $.proxy(this._overlayPositionedActionHandler, this)
        })
    },
    _overlayPositionedActionHandler: function(arg) {
        this._showDelimiter(arg)
    },
    _hoverEndHandler: function(e) {
        this.callBase(e);
        this._toggleFocusClass(false, e.currentTarget)
    },
    _isMenuHorizontal: function() {
        return "horizontal" === this.option("orientation")
    },
    _hoverStartHandler: function(e) {
        var hoverStartAction = this.option("onHoverStart");
        hoverStartAction(e);
        this.callBase(e);
        this._toggleFocusClass(true, e.currentTarget)
    },
    _showDelimiter: function(arg) {
        var containerOffset, rootOffset, $submenu = this._itemContainer().children("." + DX_SUBMENU_CLASS).eq(0),
            $rootItem = this.option("position").of,
            position = { of: $submenu
            };
        if (this.$contentDelimiter) {
            containerOffset = arg.position;
            rootOffset = $rootItem.offset();
            this.$contentDelimiter.css("display", "block");
            if (this._isMenuHorizontal()) {
                this.$contentDelimiter.width($rootItem.width() < $submenu.width() ? $rootItem.width() - 2 : $submenu.width());
                this.$contentDelimiter.height(2);
                if (containerOffset.v.location > rootOffset.top) {
                    if (Math.round(containerOffset.h.location) === Math.round(rootOffset.left)) {
                        position.offset = "1 -1";
                        position.at = "left top";
                        position.my = "left top"
                    } else {
                        position.offset = "-1 -1";
                        position.at = "right top";
                        position.my = "right top"
                    }
                } else {
                    this.$contentDelimiter.height(5);
                    if (Math.round(containerOffset.h.location) === Math.round(rootOffset.left)) {
                        position.offset = "1 4";
                        position.at = "left bottom";
                        position.my = "left bottom"
                    } else {
                        position.offset = "-1 2";
                        position.at = "right bottom";
                        position.my = "right bottom"
                    }
                }
            } else {
                this.$contentDelimiter.width(2);
                this.$contentDelimiter.height($rootItem.height() < $submenu.height() ? $rootItem.height() - 2 : $submenu.height());
                if (containerOffset.h.location > rootOffset.left) {
                    if (Math.round(containerOffset.v.location) === Math.round(rootOffset.top)) {
                        position.offset = "-1 1";
                        position.at = "left top";
                        position.my = "left top"
                    } else {
                        position.offset = "-1 -1";
                        position.at = "left bottom";
                        position.my = "left bottom"
                    }
                } else {
                    if (Math.round(containerOffset.v.location) === Math.round(rootOffset.top)) {
                        position.offset = "1 1";
                        position.at = "right top";
                        position.my = "right top"
                    } else {
                        position.offset = "1 -1";
                        position.at = "right bottom";
                        position.my = "right bottom"
                    }
                }
            }
            positionUtils.setup(this.$contentDelimiter, position)
        }
    },
    _getContextMenuPosition: function() {
        return this.option("position")
    },
    isOverlayVisible: function() {
        return this._overlay.option("visible")
    },
    getOverlayContent: function() {
        return this._overlay.content()
    }
});
module.exports = Submenu;
