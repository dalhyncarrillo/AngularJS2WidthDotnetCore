/**
 * DevExtreme (ui/selection/selection.strategy.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    dataQuery = require("../../data/query"),
    commonUtils = require("../../core/utils/common"),
    getKeyHash = commonUtils.getKeyHash,
    Class = require("../../core/class");
module.exports = Class.inherit({
    ctor: function(Selection) {
        this._selection = Selection;
        this._clearItemKeys()
    },
    _clearItemKeys: function() {
        this._setSelectionOption("_addedItemKeys", []);
        this._setSelectionOption("_removedItemKeys", []);
        this._setSelectionOption("_removedItems", []);
        this._setSelectionOption("_addedItems", [])
    },
    validate: $.noop,
    _getSelectionOption: function(name) {
        return this._selection[name]
    },
    _setSelectionOption: function(name, value) {
        this._selection[name] = value
    },
    onSelectionChanged: function() {
        var addedItemKeys = this._getSelectionOption("_addedItemKeys"),
            removedItemKeys = this._getSelectionOption("_removedItemKeys"),
            addedItems = this._getSelectionOption("_addedItems"),
            removedItems = this._getSelectionOption("_removedItems"),
            selectedItems = this._getSelectionOption("_selectedItems"),
            selectedItemKeys = this._getSelectionOption("_selectedItemKeys");
        this._clearItemKeys();
        this._getSelectionOption("_selectionChangeHandler")({
            selectedItems: selectedItems,
            selectedItemKeys: selectedItemKeys,
            addedItemKeys: addedItemKeys,
            removedItemKeys: removedItemKeys,
            addedItems: addedItems,
            removedItems: removedItems
        })
    },
    equalKeys: function(key1, key2) {
        if (this._getSelectionOption("_equalByReference")) {
            if (commonUtils.isObject(key1) && commonUtils.isObject(key2)) {
                return key1 === key2
            }
        }
        return commonUtils.equalByValue(key1, key2)
    },
    _clearSelection: function(keys, preserve, isDeselect, isSelectAll) {
        keys = keys || [];
        keys = $.isArray(keys) ? keys : [keys];
        this.validate();
        return this.selectedItemKeys(keys, preserve, isDeselect, isSelectAll)
    },
    _loadFilteredData: function(filterExpr, filterFunction, select) {
        var filterLength = encodeURI(JSON.stringify(filterExpr)).length,
            needLoadAllData = this._getSelectionOption("_maxFilterLengthInRequest") && filterLength > this._getSelectionOption("_maxFilterLengthInRequest"),
            deferred = $.Deferred(),
            loadOptions = {
                filter: needLoadAllData ? void 0 : filterExpr,
                select: needLoadAllData ? this._getSelectionOption("_dataFields")() : select || this._getSelectionOption("_dataFields")()
            };
        if (filterExpr && 0 === filterExpr.length) {
            deferred.resolve([])
        } else {
            this._getSelectionOption("_load")(loadOptions).done(function(items) {
                var filteredItems = items;
                if (needLoadAllData) {
                    filteredItems = dataQuery(filteredItems).filter(filterExpr).toArray()
                }
                if (filterFunction) {
                    filteredItems = dataQuery(filteredItems).filter(filterFunction).toArray()
                }
                deferred.resolve(filteredItems)
            }).fail($.proxy(deferred.reject, deferred))
        }
        return deferred
    },
    updateSelectedItemKeyHash: function(keys) {
        for (var i = 0; i < keys.length; i++) {
            var keyHash = getKeyHash(keys[i]);
            if (!commonUtils.isObject(keyHash)) {
                this._getSelectionOption("_keyHashIndices")[keyHash] = this._getSelectionOption("_keyHashIndices")[keyHash] || [];
                var keyIndices = this._getSelectionOption("_keyHashIndices")[keyHash];
                keyIndices.push(i)
            }
        }
    },
    _isAnyItemSelected: function(items) {
        for (var i = 0; i < items.length; i++) {
            if (this._getSelectionOption("_isItemSelected")(items[i])) {
                return
            }
        }
        return false
    },
    _getFullSelectAllState: function() {
        var items = this._getSelectionOption("_plainItems")(),
            dataFilter = this._getSelectionOption("_filter")(),
            selectedItems = this._getSelectionOption("_selectedItems");
        if (dataFilter) {
            selectedItems = dataQuery(selectedItems).filter(dataFilter).toArray()
        }
        var selectedItemsLength = selectedItems.length;
        if (!selectedItemsLength) {
            return this._isAnyItemSelected(items)
        }
        if (selectedItemsLength >= this._getSelectionOption("_totalCount")()) {
            return true
        }
        return
    },
    _getVisibleSelectAllState: function() {
        var items = this._getSelectionOption("_plainItems")(),
            hasSelectedItems = false,
            hasUnselectedItems = false;
        for (var i = 0; i < items.length; i++) {
            var item = items[i],
                itemData = this._getSelectionOption("_getItemData")(item),
                key = this._getSelectionOption("_keyOf")(itemData);
            if (this._getSelectionOption("_isSelectableItem")(item)) {
                if (this.isItemKeySelected(key)) {
                    hasSelectedItems = true
                } else {
                    hasUnselectedItems = true
                }
            }
        }
        if (hasSelectedItems) {
            return !hasUnselectedItems ? true : void 0
        } else {
            return false
        }
    }
});
