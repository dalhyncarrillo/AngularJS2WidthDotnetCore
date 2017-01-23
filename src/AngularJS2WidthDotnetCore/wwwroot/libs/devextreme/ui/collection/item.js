/**
 * DevExtreme (ui/collection/item.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class"),
    publicComponentUtils = require("../../core/utils/public_component"),
    dataUtils = require("../../core/utils/data");
var INVISIBLE_STATE_CLASS = "dx-state-invisible",
    DISABLED_STATE_CLASS = "dx-state-disabled",
    ITEM_CONTENT_PLACEHOLDER_CLASS = "dx-item-content-placeholder";
var forcibleWatcher = function(watchMethod, fn, callback) {
    var filteredCallback = function() {
        var oldValue;
        return function(value) {
            if (oldValue !== value) {
                callback(value);
                oldValue = value
            }
        }
    }();
    return {
        dispose: watchMethod(fn, filteredCallback),
        force: function() {
            filteredCallback(fn())
        }
    }
};
var CollectionItem = Class.inherit({
    ctor: function($element, collection, rawData) {
        this._$element = $element;
        this._collection = collection;
        this._rawData = rawData;
        publicComponentUtils.attachInstanceToElement($element, this, this._dispose);
        this._render()
    },
    _render: function() {
        var $placeholder = $("<div>").addClass(ITEM_CONTENT_PLACEHOLDER_CLASS);
        this._$element.append($placeholder);
        this._watchers = [];
        this._renderWatchers()
    },
    _renderWatchers: function() {
        this._startWatcher("disabled", this._renderDisabled.bind(this));
        this._startWatcher("visible", this._renderVisible.bind(this))
    },
    _startWatcher: function(field, render) {
        var rawData = this._rawData,
            expr = this._collection.option(field + "Expr"),
            exprGetter = dataUtils.compileGetter(expr);
        var watcher = forcibleWatcher(this._collection.option("integrationOptions.watchMethod"), function() {
            return exprGetter(rawData)
        }, function(value) {
            this._dirty = true;
            render(value)
        }.bind(this));
        this._watchers.push(watcher)
    },
    setDataField: function() {
        this._dirty = false;
        $.each(this._watchers, function(_, watcher) {
            watcher.force()
        });
        if (this._dirty) {
            return true
        }
    },
    _renderDisabled: function(disabled) {
        this._$element.toggleClass(DISABLED_STATE_CLASS, !!disabled)
    },
    _renderVisible: function(visible) {
        this._$element.toggleClass(INVISIBLE_STATE_CLASS, void 0 !== visible && !visible)
    },
    _dispose: function() {
        $.each(this._watchers, function(_, watcher) {
            watcher.dispose()
        })
    }
});
CollectionItem.getInstance = function($element) {
    return publicComponentUtils.getInstanceByElement($element, this)
};
module.exports = CollectionItem;
