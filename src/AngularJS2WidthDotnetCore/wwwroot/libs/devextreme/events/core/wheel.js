/**
 * DevExtreme (events/core/wheel.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    registerEvent = require("./event_registrator"),
    eventUtils = require("../utils");
var EVENT_NAME = "dxmousewheel",
    EVENT_NAMESPACE = "dxWheel";
var wheelEvent = void 0 !== document.onwheel ? "wheel" : "mousewheel";
var wheel = {
    setup: function(element) {
        var $element = $(element);
        $element.on(eventUtils.addNamespace(wheelEvent, EVENT_NAMESPACE), $.proxy(wheel._wheelHandler, wheel))
    },
    teardown: function(element) {
        var $element = $(element);
        $element.off("." + EVENT_NAMESPACE)
    },
    _wheelHandler: function(e) {
        var delta = this._getWheelDelta(e.originalEvent);
        eventUtils.fireEvent({
            type: EVENT_NAME,
            originalEvent: e,
            delta: delta,
            pointerType: "mouse"
        });
        e.stopPropagation()
    },
    _getWheelDelta: function(event) {
        return event.wheelDelta ? event.wheelDelta : 30 * -event.deltaY
    }
};
registerEvent(EVENT_NAME, wheel);
exports.name = EVENT_NAME;
