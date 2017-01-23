/**
 * DevExtreme (ui/selection/selection.strategy.standard.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    commonUtils = require("../../core/utils/common"),
    getKeyHash = commonUtils.getKeyHash,
    dataQuery = require("../../data/query"),
    when = require("../../integration/jquery/deferred").when,
    errors = require("../widget/ui.errors"),
    SelectionStrategy = require("./selection.strategy");

function SelectionFilterCreator(keyExpr, selectedItemKeys, isSelectAll, equalKeys) {
    this.getFilter = function() {
        return this._filter || this.getExpr() || this.getFunction()
    };
    this.getFunction = function() {
        if (!isFunction()) {
            return
        }
        return functionFilter
    };
    this.getExpr = function() {
        if (isFunction()) {
            return
        }
        var filterExpr;
        for (var i = 0, length = selectedItemKeys.length; i < length; i++) {
            filterExpr = filterExpr || [];
            var filterExprPart, itemKeyValue = selectedItemKeys[i];
            if (i > 0) {
                filterExpr.push(isSelectAll ? "and" : "or")
            }
            if (commonUtils.isString(keyExpr)) {
                filterExprPart = getFilterForPlainKey(itemKeyValue)
            } else {
                filterExprPart = getFilterForCompositeKey(itemKeyValue)
            }
            filterExpr.push(filterExprPart)
        }
        this._filter = filterExpr;
        return filterExpr
    };
    this.getCombinedFilter = function(dataSourceFilter) {
        var filterExpr = this.getExpr(),
            combinedFilter = filterExpr;
        if (isSelectAll && dataSourceFilter) {
            if (filterExpr) {
                combinedFilter = [];
                combinedFilter.push(filterExpr);
                combinedFilter.push(dataSourceFilter)
            } else {
                combinedFilter = dataSourceFilter
            }
        }
        return combinedFilter
    };
    var isFunction = function() {
        return !keyExpr
    };
    var functionFilter = function(item) {
        for (var i = 0; i < selectedItemKeys.length; i++) {
            if (equalKeys(selectedItemKeys[i], item)) {
                return !isSelectAll
            }
        }
        return isSelectAll
    };
    var getFilterForPlainKey = function(keyValue, key) {
        return [key || keyExpr, isSelectAll ? "<>" : "=", keyValue]
    };
    var getFilterForCompositeKey = function(itemKeyValue) {
        var filterExpr = [];
        for (var i = 0, length = keyExpr.length; i < length; i++) {
            if (i > 0) {
                filterExpr.push(isSelectAll ? "or" : "and")
            }
            var currentKeyExpr = keyExpr[i],
                currentKeyValue = itemKeyValue && itemKeyValue[currentKeyExpr],
                filterExprPart = getFilterForPlainKey(currentKeyValue, currentKeyExpr);
            filterExpr.push(filterExprPart)
        }
        return filterExpr
    }
}
module.exports = SelectionStrategy.inherit({
    ctor: function(Selection) {
        this.callBase(Selection);
        this._initSelectedItemKeyHash()
    },
    _initSelectedItemKeyHash: function() {
        this._setSelectionOption("_keyHashIndices", this._getSelectionOption("_equalByReference") ? null : {})
    },
    getSelectedItemKeys: function() {
        return this._getSelectionOption("_selectedItemKeys").slice(0)
    },
    getSelectedItems: function() {
        return this._getSelectionOption("_selectedItems").slice(0)
    },
    _preserveSelectionUpdate: function(items, isDeselect) {
        var keyOf = this._getSelectionOption("_keyOf");
        if (!keyOf) {
            return
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i],
                key = keyOf(item);
            if (isDeselect) {
                this.removeSelectedItem(key)
            } else {
                this.addSelectedItem(key, item)
            }
        }
    },
    _loadSelectedItemsCore: function(keys, isDeselect, isSelectAll) {
        var deferred = $.Deferred(),
            key = this._getSelectionOption("_key");
        if (!keys.length && !isSelectAll) {
            deferred.resolve([]);
            return deferred
        }
        if (isSelectAll && isDeselect && !this._getSelectionOption("_filter")) {
            return this._clearSelection()
        }
        var selectionFilterCreator = new SelectionFilterCreator(key(), keys, isSelectAll, this.equalKeys.bind(this)),
            combinedFilter = selectionFilterCreator.getCombinedFilter(this._getSelectionOption("_filter")());
        var deselectedItems = [];
        if (isDeselect) {
            deselectedItems = combinedFilter ? dataQuery(this._getSelectionOption("_selectedItems")).filter(combinedFilter).toArray() : this._getSelectionOption("_selectedItems").slice(0)
        }
        var filteredItems = deselectedItems.length ? deselectedItems : this._getSelectionOption("_plainItems")().filter(this._getSelectionOption("_isSelectableItem")).map(this._getSelectionOption("_getItemData"));
        var filter = selectionFilterCreator.getFilter();
        if (filter) {
            filteredItems = dataQuery(filteredItems).filter(filter).toArray()
        }
        if (!isSelectAll && (deselectedItems.length || filteredItems.length === keys.length)) {
            deferred.resolve(filteredItems)
        } else {
            deferred = this._loadFilteredData(combinedFilter, selectionFilterCreator.getFunction())
        }
        return deferred
    },
    _replaceSelectionUpdate: function(items) {
        var internalKeys = [],
            keyOf = this._getSelectionOption("_keyOf");
        if (!keyOf) {
            return
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i],
                key = keyOf(item);
            internalKeys.push(key)
        }
        this.setSelectedItems(internalKeys, items)
    },
    _warnOnIncorrectKeys: function(keys) {
        for (var i = 0; i < keys.length; i++) {
            if (!this.isItemKeySelected(keys[i])) {
                errors.log("W1002", keys[i])
            }
        }
    },
    _loadSelectedItems: function(keys, isDeselect, isSelectAll) {
        var that = this,
            deferred = $.Deferred();
        when(that._lastLoadDeferred).always(function() {
            that._loadSelectedItemsCore(keys, isDeselect, isSelectAll).done(deferred.resolve).fail(deferred.reject)
        });
        that._lastLoadDeferred = deferred;
        return deferred
    },
    selectedItemKeys: function(keys, preserve, isDeselect, isSelectAll) {
        var that = this,
            deferred = that._loadSelectedItems(keys, isDeselect, isSelectAll);
        deferred.done(function(items) {
            if (preserve) {
                that._preserveSelectionUpdate(items, isDeselect)
            } else {
                that._replaceSelectionUpdate(items)
            }
            that.onSelectionChanged()
        });
        return deferred
    },
    addSelectedItem: function(key, itemData) {
        var keyHash = this._getKeyHash(key);
        if (this._indexOfSelectedItemKey(keyHash) === -1) {
            if (!commonUtils.isObject(keyHash) && this._getSelectionOption("_keyHashIndices")) {
                this._getSelectionOption("_keyHashIndices")[keyHash] = [this._getSelectionOption("_selectedItemKeys").length]
            }
            this._getSelectionOption("_selectedItemKeys").push(key);
            this._getSelectionOption("_addedItemKeys").push(key);
            this._getSelectionOption("_addedItems").push(itemData);
            this._getSelectionOption("_selectedItems").push(itemData)
        }
    },
    _getSelectedIndexByKey: function(key) {
        var selectedItemKeys = this._getSelectionOption("_selectedItemKeys");
        for (var index = 0; index < selectedItemKeys.length; index++) {
            if (this.equalKeys(selectedItemKeys[index], key)) {
                return index
            }
        }
        return -1
    },
    _getSelectedIndexByHash: function(key) {
        var indices = this._getSelectionOption("_keyHashIndices")[key];
        return indices && indices[0] >= 0 ? indices[0] : -1
    },
    _indexOfSelectedItemKey: function(key) {
        var selectedIndex;
        if (this._getSelectionOption("_equalByReference")) {
            selectedIndex = this._getSelectionOption("_selectedItemKeys").indexOf(key)
        } else {
            if (commonUtils.isObject(key)) {
                selectedIndex = this._getSelectedIndexByKey(key)
            } else {
                selectedIndex = this._getSelectedIndexByHash(key)
            }
        }
        return selectedIndex
    },
    _shiftSelectedKeyIndices: function(keyIndex) {
        for (var currentKeyIndex = keyIndex; currentKeyIndex < this._getSelectionOption("_selectedItemKeys").length; currentKeyIndex++) {
            var currentKey = this._getSelectionOption("_selectedItemKeys")[currentKeyIndex],
                currentKeyHash = getKeyHash(currentKey),
                currentKeyIndices = this._getSelectionOption("_keyHashIndices")[currentKeyHash];
            if (!currentKeyIndices) {
                continue
            }
            for (var i = 0; i < currentKeyIndices.length; i++) {
                if (currentKeyIndices[i] > keyIndex) {
                    currentKeyIndices[i]--
                }
            }
        }
    },
    removeSelectedItem: function(key) {
        var keyHash = this._getKeyHash(key),
            keyIndex = this._indexOfSelectedItemKey(keyHash);
        if (keyIndex < 0) {
            return
        }
        this._getSelectionOption("_selectedItemKeys").splice(keyIndex, 1);
        this._getSelectionOption("_removedItemKeys").push(key);
        this._getSelectionOption("_removedItems").push(this._getSelectionOption("_selectedItems")[keyIndex]);
        this._getSelectionOption("_selectedItems").splice(keyIndex, 1);
        if (commonUtils.isObject(keyHash) || !this._getSelectionOption("_keyHashIndices")) {
            return
        }
        var keyIndices = this._getSelectionOption("_keyHashIndices")[keyHash];
        if (!keyIndices) {
            return
        }
        keyIndices.shift();
        if (!keyIndices.length) {
            delete this._getSelectionOption("_keyHashIndices")[keyHash]
        }
        this._shiftSelectedKeyIndices(keyIndex)
    },
    _needRemoveItemKey: function(keys, key) {
        var hashIndices = this._getSelectionOption("_keyHashIndices");
        if (!hashIndices) {
            return keys.indexOf(key) < 0
        }
        var hash = this._getKeyHash(key);
        for (var i = 0; i < keys.length; i++) {
            var keyHash = this._getKeyHash(keys[i]);
            if (this.equalKeys(hash, keyHash)) {
                return false
            }
        }
        return true
    },
    _updateAddedItemKeys: function(keys, items) {
        for (var i = 0; i < keys.length; i++) {
            if (this._indexOfSelectedItemKey(keys[i]) < 0) {
                this._getSelectionOption("_addedItemKeys").push(keys[i]);
                this._getSelectionOption("_addedItems").push(items[i])
            }
        }
    },
    _updateRemovedItemKeys: function(keys) {
        var oldSelectedKeys = this._getSelectionOption("_selectedItemKeys"),
            oldSelectedItems = this._getSelectionOption("_selectedItems");
        for (var i = 0; i < oldSelectedKeys.length; i++) {
            if (this._needRemoveItemKey(keys, oldSelectedKeys[i])) {
                this._getSelectionOption("_removedItemKeys").push(oldSelectedKeys[i]);
                this._getSelectionOption("_removedItems").push(oldSelectedItems[i])
            }
        }
    },
    _getKeyHash: function(key) {
        return this._getSelectionOption("_equalByReference") ? key : getKeyHash(key)
    },
    setSelectedItems: function(keys, items) {
        this._updateRemovedItemKeys(keys, items);
        this._updateAddedItemKeys(keys, items);
        if (!this._getSelectionOption("_equalByReference")) {
            this._initSelectedItemKeyHash();
            this.updateSelectedItemKeyHash(keys)
        }
        this._setSelectionOption("_selectedItemKeys", keys);
        this._setSelectionOption("_selectedItems", items)
    },
    isItemDataSelected: function(itemData) {
        var key = this._getSelectionOption("_keyOf")(itemData);
        return this.isItemKeySelected(key)
    },
    isItemKeySelected: function(key) {
        var keyHash = this._getKeyHash(key);
        var index = this._indexOfSelectedItemKey(keyHash);
        return index !== -1
    },
    getSelectAllState: function(visibleOnly) {
        if (visibleOnly) {
            return this._getVisibleSelectAllState()
        } else {
            return this._getFullSelectAllState()
        }
    }
});