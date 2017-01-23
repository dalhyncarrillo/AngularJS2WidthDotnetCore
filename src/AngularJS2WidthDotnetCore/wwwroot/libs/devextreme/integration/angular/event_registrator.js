/**
 * DevExtreme (integration/angular/event_registrator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    eventRegistrator = require("../../events/core/event_registrator"),
    ngModule = require("./module");
eventRegistrator.callbacks.add(function(name) {
    var ngEventName = name.slice(0, 2) + name.charAt(2).toUpperCase() + name.slice(3);
    ngModule.directive(ngEventName, ["$parse", function($parse) {
        return function(scope, element, attr) {
            var handler, attrValue = $.trim(attr[ngEventName]),
                eventOptions = {};
            if ("{" === attrValue.charAt(0)) {
                eventOptions = scope.$eval(attrValue);
                handler = $parse(eventOptions.execute)
            } else {
                handler = $parse(attr[ngEventName])
            }
            element.on(name, eventOptions, function(e) {
                scope.$apply(function() {
                    handler(scope, {
                        $event: e
                    })
                })
            })
        }
    }])
});
