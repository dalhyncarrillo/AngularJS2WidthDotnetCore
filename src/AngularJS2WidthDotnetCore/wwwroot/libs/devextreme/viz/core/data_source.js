/**
 * DevExtreme (viz/core/data_source.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    DataHelperMixin = require("../../data_helper"),
    postCtor = DataHelperMixin.postCtor,
    name, members = {
        _dataSourceLoadErrorHandler: function() {
            this._dataSourceChangedHandler()
        },
        _dataSourceOptions: function() {
            return {
                paginate: false
            }
        },
        _updateDataSource: function() {
            this._refreshDataSource();
            if (!this.option("dataSource")) {
                this._dataSourceChangedHandler()
            }
        },
        _dataIsLoaded: function() {
            return !this._dataSource || this._dataSource.isLoaded()
        },
        _dataSourceItems: function() {
            return this._dataSource && this._dataSource.items()
        }
    };
for (name in DataHelperMixin) {
    if ("postCtor" === name) {
        continue
    }
    members[name] = DataHelperMixin[name]
}
exports.plugin = {
    name: "data_source",
    init: function() {
        postCtor.call(this)
    },
    dispose: $.noop,
    members: members
};
