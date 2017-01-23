/**
 * DevExtreme (events/hover.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../core/class"),
    devices = require("../core/devices"),
    registerEvent = require("./core/event_registrator"),
    eventUtils = require("./utils"),
    pointerEvents = require("./pointer");
var HOVERSTART_NAMESPACE = "dxHoverStart",
    HOVERSTART = "dxhoverstart",
    POINTERENTER_NAMESPACED_EVENT_NAME = eventUtils.addNamespace(pointerEvents.enter, HOVERSTART_NAMESPACE),
    HOVEREND_NAMESPACE = "dxHoverEnd",
    HOVEREND = "dxhoverend",
    POINTERLEAVE_NAMESPACED_EVENT_NAME = eventUtils.addNamespace(pointerEvents.leave, HOVEREND_NAMESPACE);
var Hover = Class.inherit({
    noBubble: true,
    ctor: function() {
        this._handlerArrayKeyPath = this._eventNamespace + "_HandlerStore"
    },
    setup: function(element) {
        $.data(element, this._handlerArrayKeyPath, {})
    },
    add: function(element, handleObj) {
        var that = this,
            $element = $(element),
            handler = function(e) {
                that._handler(e)
            };
        $element.on(this._originalEventName, handleObj.selector, handler);
        $.data(element, this._handlerArrayKeyPath)[handleObj.guid] = handler
    },
    _handler: function(e) {
        if (eventUtils.isTouchEvent(e) || devices.isSimulator()) {
            return
        }
        eventUtils.fireEvent({
            type: this._eventName,
            originalEvent: e,
            delegateTarget: e.delegateTarget
        })
    },
    remove: function(element, handleObj) {
        var handler = $.data(element, this._handlerArrayKeyPath)[handleObj.guid];
        $(element).off(this._originalEventName, handleObj.selector, handler)
    },
    teardown: function(element) {
        $.removeData(element, this._handlerArrayKeyPath)
    }
});
var HoverStart = Hover.inherit({
    ctor: function() {
        this._eventNamespace = HOVERSTART_NAMESPACE;
        this._eventName = HOVERSTART;
        this._originalEventName = POINTERENTER_NAMESPACED_EVENT_NAME;
        this.callBase()
    },
    _handler: function(e) {
        var pointers = e.pointers || [];
        if (!pointers.length) {
            this.callBase(e)
        }
    }
});
var HoverEnd = Hover.inherit({
    ctor: function() {
        this._eventNamespace = HOVEREND_NAMESPACE;
        this._eventName = HOVEREND;
        this._originalEventName = POINTERLEAVE_NAMESPACED_EVENT_NAME;
        this.callBase()
    }
});
registerEvent(HOVERSTART, new HoverStart);
registerEvent(HOVEREND, new HoverEnd);
exports.start = HOVERSTART;
exports.end = HOVEREND;
