/**
 * DevExtreme (ui/track_bar.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Editor = require("./editor/editor"),
    registerComponent = require("../core/component_registrator"),
    fx = require("../animation/fx");
var TRACKBAR_CLASS = "dx-trackbar",
    TRACKBAR_CONTAINER_CLASS = "dx-trackbar-container",
    TRACKBAR_RANGE_CLASS = "dx-trackbar-range",
    TRACKBAR_WRAPPER_CLASS = "dx-trackbar-wrapper";
var TrackBar = Editor.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            min: 0,
            max: 100,
            value: 0
        })
    },
    _render: function() {
        this.element().addClass(TRACKBAR_CLASS);
        this._renderWrapper();
        this._renderContainer();
        this._renderRange();
        this.callBase();
        this._renderValue()
    },
    _renderWrapper: function() {
        this._$wrapper = $("<div>").addClass(TRACKBAR_WRAPPER_CLASS).appendTo(this.element())
    },
    _renderContainer: function() {
        this._$bar = $("<div>").addClass(TRACKBAR_CONTAINER_CLASS).appendTo(this._$wrapper)
    },
    _renderRange: function() {
        this._$range = $("<div>").addClass(TRACKBAR_RANGE_CLASS).appendTo(this._$bar)
    },
    _renderValue: function() {
        var val = this.option("value"),
            min = this.option("min"),
            max = this.option("max");
        if (min > max) {
            return
        }
        if (val < min) {
            this.option("value", min);
            this._currentRatio = 0;
            return
        }
        if (val > max) {
            this.option("value", max);
            this._currentRatio = 1;
            return
        }
        var ratio = min === max ? 0 : (val - min) / (max - min);
        !this._needPreventAnimation && this._setRangeStyles({
            width: 100 * ratio + "%"
        });
        this.setAria({
            valuemin: this.option("min"),
            valuemax: max,
            valuenow: val
        });
        this._currentRatio = ratio
    },
    _setRangeStyles: function(options) {
        fx.stop(this._$range);
        if (!this._needPreventAnimation) {
            fx.animate(this._$range, {
                type: "custom",
                duration: 100,
                to: options
            })
        }
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "value":
                this._renderValue();
                this.callBase(args);
                break;
            case "max":
            case "min":
                this._renderValue();
                break;
            default:
                this.callBase(args)
        }
    },
    _dispose: function() {
        fx.stop(this._$range);
        this.callBase()
    }
});
registerComponent("dxTrackBar", TrackBar);
module.exports = TrackBar;
