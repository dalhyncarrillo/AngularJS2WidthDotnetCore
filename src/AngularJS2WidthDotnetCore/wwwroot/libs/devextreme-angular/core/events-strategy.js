/*!
 * devextreme-angular
 * Version: 16.2.4
 * Build date: Wed Jan 18 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
"use strict";
var core_1 = require('@angular/core');
var dxToNgEventNames = {};
var NgEventsStrategy = (function () {
    function NgEventsStrategy(component) {
        this.component = component;
        this.subscribers = {};
    }
    NgEventsStrategy.prototype.hasEvent = function (name) {
        return this.getEmitter(name).observers.length;
    };
    NgEventsStrategy.prototype.fireEvent = function (name, args) {
        this.getEmitter(name).next(args && args[0]);
    };
    NgEventsStrategy.prototype.on = function (name, handler) {
        var eventSubscribers = this.subscribers[name] || [], subsriber = this.getEmitter(name).subscribe(handler.bind(this.component.instance)), unsubscribe = subsriber.unsubscribe.bind(subsriber);
        eventSubscribers.push({ handler: handler, unsubscribe: unsubscribe });
        this.subscribers[name] = eventSubscribers;
    };
    NgEventsStrategy.prototype.off = function (name, handler) {
        var eventSubscribers = this.subscribers[name] || [];
        eventSubscribers
            .filter(function (i) { return !handler || i.handler === handler; })
            .forEach(function (i) { return i.unsubscribe(); });
    };
    NgEventsStrategy.prototype.dispose = function () { };
    NgEventsStrategy.prototype.getEmitter = function (eventName) {
        var ngEventName = dxToNgEventNames[eventName];
        if (!this.component[ngEventName]) {
            this.component[ngEventName] = new core_1.EventEmitter();
        }
        return this.component[ngEventName];
    };
    return NgEventsStrategy;
}());
exports.NgEventsStrategy = NgEventsStrategy;
var EmitterHelper = (function () {
    function EmitterHelper(ngZone, component) {
        this.ngZone = ngZone;
        this.component = component;
        this.strategy = new NgEventsStrategy(component);
    }
    EmitterHelper.prototype.fireNgEvent = function (eventName, eventArgs) {
        var emitter = this.component[eventName];
        if (emitter) {
            this.ngZone.run(function () {
                emitter.next(eventArgs && eventArgs[0]);
            });
        }
    };
    EmitterHelper.prototype.createEmitter = function (ngEventName, dxEventName) {
        this.component[ngEventName] = new core_1.EventEmitter();
        if (dxEventName) {
            dxToNgEventNames[dxEventName] = ngEventName;
        }
    };
    return EmitterHelper;
}());
exports.EmitterHelper = EmitterHelper;
//# sourceMappingURL=events-strategy.js.map