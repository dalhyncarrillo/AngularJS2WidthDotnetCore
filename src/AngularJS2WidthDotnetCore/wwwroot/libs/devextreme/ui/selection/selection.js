/**
 * DevExtreme (ui/selection/selection.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class"),
    deferredStrategy = require("./selection.strategy.deferred"),
    standardStrategy = require("./selection.strategy.standard"),
    commonUtils = require("../../core/utils/common");
module.exports = Class.inherit({
    ctor: function(options) {
        options = options || {};
        this._selectionStrategy = options.deferred ? new deferredStrategy(this) : new standardStrategy(this);
        this._selectionMode = options.mode;
        this._filter = options.filter;
        this._getItemData = options.getItemData;
        this._isItemSelected = options.isItemSelected;
        this._totalCount = options.totalCount;
        this._key = options.key;
        this._keyOf = options.keyOf;
        this._isSelectableItem = options.isSelectableItem;
        this._load = options.load;
        this._dataFields = options.dataFields;
        this._plainItems = options.plainItems;
        this._focusedItemIndex = -1;
        this._selectedItemKeys = options.selectedKeys || [];
        this._selectionFilter = void 0 === options.selectionFilter ? [] : options.selectionFilter;
        this._selectedItems = [];
        this._selectionChangeHandler = options.onSelectionChanged || $.noop;
        this._maxFilterLengthInRequest = options.maxFilterLengthInRequest || 0;
        this._equalByReference = options.equalByReference;
        if (!this._equalByReference) {
            this._selectionStrategy.updateSelectedItemKeyHash(this._selectedItemKeys)
        }
    },
    validate: function() {
        this._selectionStrategy.validate()
    },
    getSelectedItemKeys: function() {
        return this._selectionStrategy.getSelectedItemKeys()
    },
    getSelectedItems: function() {
        return this._selectionStrategy.getSelectedItems()
    },
    selectionFilter: function(value) {
        if (void 0 === value) {
            return this._selectionFilter
        }
        var filterIsChanged = this._selectionFilter !== value && JSON.stringify(this._selectionFilter) !== JSON.stringify(value);
        this._selectionFilter = value;
        filterIsChanged && this.onSelectionChanged()
    },
    setSelection: function(keys) {
        return this.selectedItemKeys(keys)
    },
    select: function(keys) {
        return this.selectedItemKeys(keys, true)
    },
    deselect: function(keys) {
        return this.selectedItemKeys(keys, true, true)
    },
    selectedItemKeys: function(keys, preserve, isDeselect, isSelectAll) {
        var that = this;
        keys = keys || [];
        keys = $.isArray(keys) ? keys : [keys];
        that.validate();
        return this._selectionStrategy.selectedItemKeys(keys, preserve, isDeselect, isSelectAll)
    },
    clearSelection: function() {
        return this.selectedItemKeys([])
    },
    _addSelectedItem: function(itemData, key) {
        this._selectionStrategy.addSelectedItem(key, itemData)
    },
    _removeSelectedItem: function(key) {
        this._selectionStrategy.removeSelectedItem(key)
    },
    _setSelectedItems: function(keys, items) {
        this._selectionStrategy.setSelectedItems(keys, items)
    },
    onSelectionChanged: function() {
        this._selectionStrategy.onSelectionChanged()
    },
    changeItemSelection: function(itemIndex, keys) {
        var isSelectedItemsChanged, items = this._plainItems(),
            item = items[itemIndex];
        if (!this.isSelectable() || !this.isDataItem(item)) {
            return false
        }
        var itemData = this._getItemData(item),
            itemKey = this._keyOf(itemData);
        keys = keys || {};
        if (keys.shift && "multiple" === this._selectionMode && this._focusedItemIndex >= 0) {
            isSelectedItemsChanged = this.changeItemSelectionWhenShiftKeyPressed(itemIndex, items)
        } else {
            if (keys.control) {
                this._resetItemSelectionWhenShiftKeyPressed();
                var isSelected = this._selectionStrategy.isItemDataSelected(itemData);
                if ("single" === this._selectionMode) {
                    this.clearSelectedItems()
                }
                if (isSelected) {
                    this._removeSelectedItem(itemKey)
                } else {
                    this._addSelectedItem(itemData, itemKey)
                }
                isSelectedItemsChanged = true
            } else {
                this._resetItemSelectionWhenShiftKeyPressed();
                var isKeysEqual = this._selectionStrategy.equalKeys(this._selectedItemKeys[0], itemKey);
                if (1 !== this._selectedItemKeys.length || !isKeysEqual) {
                    this._setSelectedItems([itemKey], [itemData]);
                    isSelectedItemsChanged = true
                }
            }
        }
        if (isSelectedItemsChanged) {
            this._focusedItemIndex = itemIndex;
            this.onSelectionChanged();
            return true
        }
    },
    isDataItem: function(item) {
        return this._isSelectableItem(item)
    },
    isSelectable: function() {
        return "single" === this._selectionMode || "multiple" === this._selectionMode
    },
    isItemSelected: function(arg) {
        return this._selectionStrategy.isItemKeySelected(arg)
    },
    _resetItemSelectionWhenShiftKeyPressed: function() {
        delete this._shiftFocusedItemIndex
    },
    changeItemSelectionWhenShiftKeyPressed: function(itemIndex, items) {
        var itemIndexStep, index, isSelectedItemsChanged = false,
            keyOf = this._keyOf,
            key = keyOf(items[this._focusedItemIndex].data),
            isFocusedItemSelected = items[this._focusedItemIndex] && this.isItemSelected(key);
        if (!commonUtils.isDefined(this._shiftFocusedItemIndex)) {
            this._shiftFocusedItemIndex = this._focusedItemIndex
        }
        var data, itemKey;
        if (this._shiftFocusedItemIndex !== this._focusedItemIndex) {
            itemIndexStep = this._focusedItemIndex < this._shiftFocusedItemIndex ? 1 : -1;
            for (index = this._focusedItemIndex; index !== this._shiftFocusedItemIndex; index += itemIndexStep) {
                if (this.isDataItem(items[index])) {
                    itemKey = keyOf(this._getItemData(items[index]));
                    this._removeSelectedItem(itemKey);
                    isSelectedItemsChanged = true
                }
            }
        }
        if (itemIndex !== this._shiftFocusedItemIndex) {
            itemIndexStep = itemIndex < this._shiftFocusedItemIndex ? 1 : -1;
            for (index = itemIndex; index !== this._shiftFocusedItemIndex; index += itemIndexStep) {
                if (this.isDataItem(items[index])) {
                    data = this._getItemData(items[index]);
                    itemKey = keyOf(data);
                    this._addSelectedItem(data, itemKey);
                    isSelectedItemsChanged = true
                }
            }
        }
        if (this.isDataItem(items[this._focusedItemIndex]) && !isFocusedItemSelected) {
            data = this._getItemData(items[index]);
            itemKey = keyOf(data);
            this._addSelectedItem(data, itemKey);
            isSelectedItemsChanged = true
        }
        return isSelectedItemsChanged
    },
    clearSelectedItems: function() {
        this._setSelectedItems([], [])
    },
    selectAll: function(isOnePage) {
        if (isOnePage) {
            return this._onePageSelectAll(false)
        } else {
            return this.selectedItemKeys([], true, false, true)
        }
    },
    deselectAll: function(isOnePage) {
        if (isOnePage) {
            return this._onePageSelectAll(true)
        } else {
            return this.selectedItemKeys([], true, true, true)
        }
    },
    _onePageSelectAll: function(isDeselect) {
        var items = this._plainItems();
        for (var i = 0; i < items.length; i++) {
            var item = items[i],
                itemData = this._getItemData(item),
                itemKey = this._keyOf(itemData),
                isSelected = this.isItemSelected(itemKey);
            if (!isSelected && !isDeselect) {
                this._addSelectedItem(itemData, itemKey)
            }
            if (isSelected && isDeselect) {
                this._removeSelectedItem(itemKey)
            }
        }
        this.onSelectionChanged();
        return $.Deferred().resolve()
    },
    getSelectAllState: function(visibleOnly) {
        return this._selectionStrategy.getSelectAllState(visibleOnly)
    }
});