/**
 * DevExtreme (core/errors.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var errorUtils = require("./utils/error");
module.exports = errorUtils({
    E0001: "Method is not implemented",
    E0002: "Member name collision: {0}",
    E0003: "A class must be instantiated using the 'new' keyword",
    E0004: "The NAME property of the component is not specified",
    E0005: "Unknown device",
    E0006: "Unknown endpoint key is requested",
    E0007: "'Invalidate' method is called outside the update transaction",
    E0008: "Type of the option name is not appropriate to create an action",
    E0009: "Component '{0}' has not been initialized for an element",
    E0010: "Animation configuration with the '{0}' type requires '{1}' configuration as {2}",
    E0011: "Unknown animation type '{0}'",
    E0012: "jQuery version is too old. Please upgrade jQuery to 1.10.0 or later",
    E0013: "KnockoutJS version is too old. Please upgrade KnockoutJS to 2.3.0 or later",
    E0014: "The 'release' method shouldn't be called for an unlocked Lock object",
    E0015: "Queued task returned an unexpected result",
    E0017: "Event namespace is not defined",
    E0018: "DevExpress.ui.DevExpressPopup widget is required",
    E0020: "Template engine '{0}' is not supported",
    E0021: "Unknown theme is set: {0}",
    E0022: "LINK[rel=DevExpress-theme] tags must go before DevExpress included scripts",
    E0023: "Template name is not specified",
    E0024: "DevExtreme bundle already included",
    E0100: "Unknown validation type is detected",
    E0101: "Misconfigured range validation rule is detected",
    E0102: "Misconfigured comparison validation rule is detected",
    E0110: "Unknown validation group is detected",
    E0120: "Adapter for a DevExpressValidator component cannot be configured",
    E0121: "The onCustomItemCreating action should return an item or Promise of jQuery Deferred object resolved when an item is created",
    E4016: "The compileSetter(expr) method is called with 'self' passed as a parameter",
    W0000: "'{0}' is deprecated in {1}. {2}",
    W0001: "{0} - '{1}' option is deprecated in {2}. {3}",
    W0002: "{0} - '{1}' method is deprecated in {2}. {3}",
    W0003: "{0} - '{1}' property is deprecated in {2}. {3}",
    W0004: "Timeout for theme loading is over: {0}",
    W0005: "'{0}' event is deprecated in {1}. {2}",
    W0006: "Invalid recurrence rule: '{0}'",
    W0007: "'{0}' Globalize culture is not defined",
    W0008: "Invalid view name: '{0}'",
    W0009: "Invalid time zone name: '{0}'",
    W0010: "{0} is deprecated in {1}. {2}",
    W0011: "Number parsing is invoked while the parser is not defined",
    W0012: "Date parsing is invoked while the parser is not defined",
    W0013: "'{0}' file is deprecated in {1}. {2}"
});