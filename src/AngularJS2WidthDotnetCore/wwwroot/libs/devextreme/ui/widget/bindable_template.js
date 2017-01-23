/**
 * DevExtreme (ui/widget/bindable_template.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    TemplateBase = require("./ui.template_base"),
    removeEvent = require("../../core/remove_event"),
    commonUtils = require("../../core/utils/common");
var watchChanges = function() {
    var start = function(rawData, watchMethod, fields, fieldsMap, callback) {
        var globalDispose, fieldsDispose;
        globalDispose = globalWatch(rawData, watchMethod, function(dataWithRawFields) {
            fieldsDispose && fieldsDispose();
            if (commonUtils.isPrimitive(dataWithRawFields)) {
                callback(dataWithRawFields);
                return
            }
            fieldsDispose = fieldsWatch(dataWithRawFields, watchMethod, fields, fieldsMap, function(data) {
                callback(data)
            })
        });
        return function() {
            fieldsDispose && fieldsDispose();
            globalDispose && globalDispose()
        }
    };
    var globalWatch = function(data, watchMethod, callback) {
        return watchMethod(function() {
            return data
        }, callback)
    };
    var fieldsWatch = function(data, watchMethod, fields, fieldsMap, callback) {
        var resolvedData = {},
            missedFields = fields.slice();
        var watchHandlers = $.map(fields, function(name) {
            var fieldGetter = fieldsMap[name];
            return watchMethod(fieldGetter ? function() {
                return fieldGetter(data)
            } : function() {
                return data[name]
            }, function(value) {
                resolvedData[name] = value;
                if (missedFields.length) {
                    var index = missedFields.indexOf(name);
                    if (index >= 0) {
                        missedFields.splice(index, 1)
                    }
                }
                if (!missedFields.length) {
                    callback(resolvedData)
                }
            })
        });
        return function() {
            $.each(watchHandlers, function(_, dispose) {
                dispose()
            })
        }
    };
    return start
}();
module.exports = TemplateBase.inherit({
    ctor: function(render, fields, watchMethod, fieldsMap) {
        this._render = render;
        this._fields = fields;
        this._fieldsMap = fieldsMap || {};
        this._watchMethod = watchMethod
    },
    _renderCore: function(options) {
        var $container = options.container;
        var dispose = watchChanges(options.model, this._watchMethod, this._fields, this._fieldsMap, function(data) {
            $container.empty();
            this._render($container, data, options.model)
        }.bind(this));
        $container.on(removeEvent, dispose);
        return $container.contents()
    }
});
