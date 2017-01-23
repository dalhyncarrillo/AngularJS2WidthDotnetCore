/**
 * DevExtreme (data/endpoint_selector.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var errors = require("../core/errors"),
    proxyUrlFormatter = require("./proxy_url_formatter");
var location = window.location,
    IS_WINJS_ORIGIN = "ms-appx:" === location.protocol,
    IS_LOCAL_ORIGIN = isLocalHostName(location.hostname);

function isLocalHostName(url) {
    return /^(localhost$|127\.)/i.test(url)
}
var EndpointSelector = function(config) {
    this.config = config
};
EndpointSelector.prototype = {
    urlFor: function(key) {
        var bag = this.config[key];
        if (!bag) {
            throw errors.Error("E0006")
        }
        if (proxyUrlFormatter.isProxyUsed()) {
            return proxyUrlFormatter.formatProxyUrl(bag.local)
        }
        if (bag.production) {
            if (IS_WINJS_ORIGIN && !Debug.debuggerEnabled || !IS_WINJS_ORIGIN && !IS_LOCAL_ORIGIN) {
                return bag.production
            }
        }
        return bag.local
    }
};
module.exports = EndpointSelector;
module.exports.default = module.exports;
