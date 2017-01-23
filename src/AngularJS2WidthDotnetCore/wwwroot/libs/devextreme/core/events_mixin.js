/**
 * DevExtreme (core/events_mixin.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    DefaultEventsStrategy = require("./events_strategy");
module.exports = {
    ctor: function() {
        this._events = {};
        this.setEventsStrategy(new DefaultEventsStrategy(this))
    },
    setEventsStrategy: function(strategy) {
        this._eventsStrategy = strategy
    },
    hasEvent: function(eventName) {
        return this._eventsStrategy.hasEvent(eventName)
    },
    fireEvent: function(eventName, eventArgs) {
        this._eventsStrategy.fireEvent(eventName, eventArgs);
        return this
    },
    on: function(eventName, eventHandler) {
        if ($.isPlainObject(eventName)) {
            $.each(eventName, $.proxy(function(e, h) {
                this.on(e, h)
            }, this))
        } else {
            this._eventsStrategy.on(eventName, eventHandler)
        }
        return this
    },
    off: function(eventName, eventHandler) {
        this._eventsStrategy.off(eventName, eventHandler);
        return this
    },
    _disposeEvents: function() {
        this._eventsStrategy.dispose()
    }
};
