/**
 * DevExtreme (ui/scroll_view/ui.scroll_view.native.slide_down.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    NativeStrategy = require("./ui.scrollable.native");
var STATE_RELEASED = 0,
    STATE_READY = 1,
    STATE_LOADING = 2,
    LOADING_HEIGHT = 80;
var SlideDownNativeScrollViewStrategy = NativeStrategy.inherit({
    _init: function(scrollView) {
        this.callBase(scrollView);
        this._$topPocket = scrollView._$topPocket;
        this._$bottomPocket = scrollView._$bottomPocket;
        this._initCallbacks()
    },
    _initCallbacks: function() {
        this.pullDownCallbacks = $.Callbacks();
        this.releaseCallbacks = $.Callbacks();
        this.reachBottomCallbacks = $.Callbacks()
    },
    render: function() {
        this.callBase();
        this._renderPullDown();
        this._renderBottom();
        this._releaseState();
        this._updateDimensions()
    },
    _renderPullDown: function() {
        this._$topPocket.empty()
    },
    _renderBottom: function() {
        this._$bottomPocket.empty().append("<progress>")
    },
    _releaseState: function() {
        if (this._state === STATE_RELEASED) {
            return
        }
        this._state = STATE_RELEASED
    },
    _updateDimensions: function() {
        this._scrollOffset = this._$container.prop("scrollHeight") - this._$container.prop("clientHeight");
        this._containerSize = {
            height: this._$container.prop("clientHeight"),
            width: this._$container.prop("clientWidth")
        };
        this._contentSize = this._componentContentSize = {
            height: this._$container.prop("scrollHeight"),
            width: this._$container.prop("scrollWidth")
        }
    },
    handleScroll: function(e) {
        this.callBase(e);
        if (this._isReachBottom(this._lastLocation.top)) {
            this._reachBottom()
        }
    },
    _isReachBottom: function(location) {
        this._scrollContent = this._$container.prop("scrollHeight") - this._$container.prop("clientHeight");
        return this._reachBottomEnabled && location < -this._scrollContent + LOADING_HEIGHT
    },
    _reachBottom: function() {
        if (this._state === STATE_LOADING) {
            return
        }
        this._state = STATE_LOADING;
        this.reachBottomCallbacks.fire()
    },
    pullDownEnable: function(enabled) {
        this._pullDownEnabled = enabled
    },
    reachBottomEnable: function(enabled) {
        this._reachBottomEnabled = enabled;
        this._$bottomPocket.toggle(enabled)
    },
    pendingRelease: function() {
        this._state = STATE_READY
    },
    release: function() {
        var deferred = $.Deferred();
        this._state = STATE_RELEASED;
        this.releaseCallbacks.fire();
        this.update();
        return deferred.resolve().promise()
    }
});
module.exports = SlideDownNativeScrollViewStrategy;
