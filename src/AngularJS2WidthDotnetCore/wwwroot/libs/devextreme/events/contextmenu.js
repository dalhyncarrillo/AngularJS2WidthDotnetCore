/**
 * DevExtreme (events/contextmenu.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    support = require("../core/utils/support"),
    devices = require("../core/devices"),
    Class = require("../core/class"),
    registerEvent = require("./core/event_registrator"),
    eventUtils = require("./utils"),
    holdEvent = require("./hold");
var CONTEXTMENU_NAMESPACE = "dxContexMenu",
    CONTEXTMENU_NAMESPACED_EVENT_NAME = eventUtils.addNamespace("contextmenu", CONTEXTMENU_NAMESPACE),
    HOLD_NAMESPACED_EVENT_NAME = eventUtils.addNamespace(holdEvent.name, CONTEXTMENU_NAMESPACE),
    CONTEXTMENU_EVENT_NAME = "dxcontextmenu";
var ContextMenu = Class.inherit({
    setup: function(element) {
        var $element = $(element);
        $element.on(CONTEXTMENU_NAMESPACED_EVENT_NAME, $.proxy(this._contextMenuHandler, this));
        if (support.touch || devices.isSimulator()) {
            $element.on(HOLD_NAMESPACED_EVENT_NAME, $.proxy(this._holdHandler, this))
        }
    },
    _holdHandler: function(e) {
        if (eventUtils.isMouseEvent(e) && !devices.isSimulator()) {
            return
        }
        this._fireContextMenu(e)
    },
    _contextMenuHandler: function(e) {
        this._fireContextMenu(e)
    },
    _fireContextMenu: function(e) {
        return eventUtils.fireEvent({
            type: CONTEXTMENU_EVENT_NAME,
            originalEvent: e
        })
    },
    teardown: function(element) {
        $(element).off("." + CONTEXTMENU_NAMESPACE)
    }
});
registerEvent(CONTEXTMENU_EVENT_NAME, new ContextMenu);
exports.name = CONTEXTMENU_EVENT_NAME;
