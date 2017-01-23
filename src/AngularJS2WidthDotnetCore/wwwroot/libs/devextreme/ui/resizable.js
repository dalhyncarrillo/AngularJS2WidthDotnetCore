/**
 * DevExtreme (ui/resizable.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    registerComponent = require("../core/component_registrator"),
    stringUtils = require("../core/utils/string"),
    translator = require("../animation/translator"),
    fitIntoRange = require("../core/utils/math").fitIntoRange,
    DOMComponent = require("../core/dom_component"),
    eventUtils = require("../events/utils"),
    dragEvents = require("../events/drag");
var RESIZABLE = "dxResizable",
    RESIZABLE_CLASS = "dx-resizable",
    RESIZABLE_RESIZING_CLASS = "dx-resizable-resizing",
    RESIZABLE_HANDLE_CLASS = "dx-resizable-handle",
    RESIZABLE_HANDLE_TOP_CLASS = "dx-resizable-handle-top",
    RESIZABLE_HANDLE_BOTTOM_CLASS = "dx-resizable-handle-bottom",
    RESIZABLE_HANDLE_LEFT_CLASS = "dx-resizable-handle-left",
    RESIZABLE_HANDLE_RIGHT_CLASS = "dx-resizable-handle-right",
    RESIZABLE_HANDLE_CORNER_CLASS = "dx-resizable-handle-corner",
    DRAGSTART_START_EVENT_NAME = eventUtils.addNamespace(dragEvents.start, RESIZABLE),
    DRAGSTART_EVENT_NAME = eventUtils.addNamespace(dragEvents.move, RESIZABLE),
    DRAGSTART_END_EVENT_NAME = eventUtils.addNamespace(dragEvents.end, RESIZABLE);
var Resizable = DOMComponent.inherit({
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            handles: "all",
            step: "1",
            stepPrecision: "simple",
            area: void 0,
            minWidth: 30,
            maxWidth: 1 / 0,
            minHeight: 30,
            maxHeight: 1 / 0,
            onResizeStart: null,
            onResize: null,
            onResizeEnd: null
        })
    },
    _init: function() {
        this.callBase();
        this.element().addClass(RESIZABLE_CLASS)
    },
    _render: function() {
        this.callBase();
        this._renderActions();
        this._renderHandles()
    },
    _renderActions: function() {
        this._resizeStartAction = this._createActionByOption("onResizeStart");
        this._resizeEndAction = this._createActionByOption("onResizeEnd");
        this._resizeAction = this._createActionByOption("onResize")
    },
    _renderHandles: function() {
        var handles = this.option("handles");
        if ("none" === handles) {
            return
        }
        var directions = "all" === handles ? ["top", "bottom", "left", "right"] : handles.split(" ");
        $.each(directions, $.proxy(function(index, handleName) {
            this._renderHandle(handleName)
        }, this));
        $.inArray("bottom", directions) + 1 && $.inArray("right", directions) + 1 && this._renderHandle("corner-bottom-right");
        $.inArray("bottom", directions) + 1 && $.inArray("left", directions) + 1 && this._renderHandle("corner-bottom-left");
        $.inArray("top", directions) + 1 && $.inArray("right", directions) + 1 && this._renderHandle("corner-top-right");
        $.inArray("top", directions) + 1 && $.inArray("left", directions) + 1 && this._renderHandle("corner-top-left")
    },
    _renderHandle: function(handleName) {
        var $element = this.element(),
            $handle = $("<div>");
        $handle.addClass(RESIZABLE_HANDLE_CLASS).addClass(RESIZABLE_HANDLE_CLASS + "-" + handleName).appendTo($element);
        this._attachEventHandlers($handle)
    },
    _attachEventHandlers: function($handle) {
        if (this.option("disabled")) {
            return
        }
        var handlers = {};
        handlers[DRAGSTART_START_EVENT_NAME] = $.proxy(this._dragStartHandler, this);
        handlers[DRAGSTART_EVENT_NAME] = $.proxy(this._dragHandler, this);
        handlers[DRAGSTART_END_EVENT_NAME] = $.proxy(this._dragEndHandler, this);
        $handle.on(handlers, {
            direction: "both",
            immediate: true
        })
    },
    _dragStartHandler: function(e) {
        var $element = this.element();
        if ($element.is(".dx-state-disabled, .dx-state-disabled *")) {
            e.cancel = true;
            return
        }
        this._toggleResizingClass(true);
        this._movingSides = this._getMovingSides(e);
        this._elementLocation = translator.locate($element);
        this._elementSize = {
            width: $element.outerWidth(),
            height: $element.outerHeight()
        };
        this._renderDragOffsets(e);
        this._resizeStartAction({
            jQueryEvent: e,
            width: this._elementSize.width,
            height: this._elementSize.height,
            handles: this._movingSides
        });
        e.targetElements = null
    },
    _toggleResizingClass: function(value) {
        this.element().toggleClass(RESIZABLE_RESIZING_CLASS, value)
    },
    _renderDragOffsets: function(e) {
        var area = this._getArea();
        if (!area) {
            return
        }
        var $handle = $(e.target).closest("." + RESIZABLE_HANDLE_CLASS),
            handleWidth = $handle.outerWidth(),
            handleHeight = $handle.outerHeight(),
            handleOffset = $handle.offset(),
            areaOffset = area.offset;
        e.maxLeftOffset = handleOffset.left - areaOffset.left;
        e.maxRightOffset = areaOffset.left + area.width - handleOffset.left - handleWidth;
        e.maxTopOffset = handleOffset.top - areaOffset.top;
        e.maxBottomOffset = areaOffset.top + area.height - handleOffset.top - handleHeight
    },
    _getBorderWidth: function($element, direction) {
        var borderWidth = $element.css("border-" + direction + "-width");
        return parseInt(borderWidth) || 0
    },
    _dragHandler: function(e) {
        var $element = this.element(),
            sides = this._movingSides;
        var location = this._elementLocation,
            size = this._elementSize,
            offset = this._getOffset(e);
        var width = size.width + offset.x * (sides.left ? -1 : 1),
            height = size.height + offset.y * (sides.top ? -1 : 1);
        if (offset.x || "strict" === this.option("stepPrecision")) {
            this._renderWidth(width)
        }
        if (offset.y || "strict" === this.option("stepPrecision")) {
            this._renderHeight(height)
        }
        var offsetTop = offset.y - ((this.element().outerHeight() || height) - height),
            offsetLeft = offset.x - ((this.element().outerWidth() || width) - width);
        translator.move($element, {
            top: location.top + (sides.top ? offsetTop : 0),
            left: location.left + (sides.left ? offsetLeft : 0)
        });
        this._resizeAction({
            jQueryEvent: e,
            width: width,
            height: height,
            handles: this._movingSides
        })
    },
    _getOffset: function(e) {
        var offset = e.offset,
            steps = stringUtils.pairToObject(this.option("step")),
            sides = this._getMovingSides(e),
            strictPrecision = "strict" === this.option("stepPrecision");
        if (!sides.left && !sides.right) {
            offset.x = 0
        }
        if (!sides.top && !sides.bottom) {
            offset.y = 0
        }
        return strictPrecision ? this._getStrictOffset(offset, steps, sides) : this._getSimpleOffset(offset, steps)
    },
    _getSimpleOffset: function(offset, steps) {
        return {
            x: offset.x - offset.x % steps.h,
            y: offset.y - offset.y % steps.v
        }
    },
    _getStrictOffset: function(offset, steps, sides) {
        var location = this._elementLocation,
            size = this._elementSize,
            xPos = sides.left ? location.left : location.left + size.width,
            yPos = sides.top ? location.top : location.top + size.height,
            newXShift = (xPos + offset.x) % steps.h,
            newYShift = (yPos + offset.y) % steps.v,
            sign = Math.sign || function(x) {
                x = +x;
                if (0 === x || isNaN(x)) {
                    return x
                }
                return x > 0 ? 1 : -1
            },
            separatorOffset = function(steps, offset) {
                return (1 + .2 * sign(offset)) % 1 * steps
            },
            isSmallOffset = function(offset, steps) {
                return Math.abs(offset) < .2 * steps
            };
        var newOffsetX = offset.x - newXShift,
            newOffsetY = offset.y - newYShift;
        if (newXShift > separatorOffset(steps.h, offset.x)) {
            newOffsetX += steps.h
        }
        if (newYShift > separatorOffset(steps.v, offset.y)) {
            newOffsetY += steps.v
        }
        return {
            x: (sides.left || sides.right) && !isSmallOffset(offset.x, steps.h) ? newOffsetX : 0,
            y: (sides.top || sides.bottom) && !isSmallOffset(offset.y, steps.v) ? newOffsetY : 0
        }
    },
    _getMovingSides: function(e) {
        var $target = $(e.target),
            hasCornerTopLeftClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + "-top-left"),
            hasCornerTopRightClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + "-top-right"),
            hasCornerBottomLeftClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + "-bottom-left"),
            hasCornerBottomRightClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + "-bottom-right");
        return {
            top: $target.hasClass(RESIZABLE_HANDLE_TOP_CLASS) || hasCornerTopLeftClass || hasCornerTopRightClass,
            left: $target.hasClass(RESIZABLE_HANDLE_LEFT_CLASS) || hasCornerTopLeftClass || hasCornerBottomLeftClass,
            bottom: $target.hasClass(RESIZABLE_HANDLE_BOTTOM_CLASS) || hasCornerBottomLeftClass || hasCornerBottomRightClass,
            right: $target.hasClass(RESIZABLE_HANDLE_RIGHT_CLASS) || hasCornerTopRightClass || hasCornerBottomRightClass
        }
    },
    _getArea: function() {
        var area = this.option("area");
        if ($.isFunction(area)) {
            area = area.call(this)
        }
        if ($.isPlainObject(area)) {
            return this._getAreaFromObject(area)
        }
        return this._getAreaFromElement(area)
    },
    _getAreaFromObject: function(area) {
        var result = {
            width: area.right - area.left,
            height: area.bottom - area.top,
            offset: {
                left: area.left,
                top: area.top
            }
        };
        this._correctAreaGeometry(result);
        return result
    },
    _getAreaFromElement: function(area) {
        var result, $area = $(area);
        if ($area.length) {
            result = {};
            result.width = $area.innerWidth();
            result.height = $area.innerHeight();
            result.offset = $area.offset();
            this._correctAreaGeometry(result, $area)
        }
        return result
    },
    _correctAreaGeometry: function(result, $area) {
        var areaBorderLeft = $area ? this._getBorderWidth($area, "left") : 0,
            areaBorderTop = $area ? this._getBorderWidth($area, "top") : 0;
        result.offset.left += areaBorderLeft + this._getBorderWidth(this.element(), "left");
        result.offset.top += areaBorderTop + this._getBorderWidth(this.element(), "top");
        result.width -= this.element().outerWidth() - this.element().innerWidth();
        result.height -= this.element().outerHeight() - this.element().innerHeight()
    },
    _dragEndHandler: function(e) {
        var $element = this.element();
        this._resizeEndAction({
            jQueryEvent: e,
            width: $element.outerWidth(),
            height: $element.outerHeight(),
            handles: this._movingSides
        });
        this._toggleResizingClass(false)
    },
    _renderWidth: function(width) {
        this.option("width", fitIntoRange(width, this.option("minWidth"), this.option("maxWidth")))
    },
    _renderHeight: function(height) {
        this.option("height", fitIntoRange(height, this.option("minHeight"), this.option("maxHeight")))
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "disabled":
            case "handles":
                this._invalidate();
                break;
            case "minWidth":
            case "maxWidth":
                this._renderWidth(this.element().outerWidth());
                break;
            case "minHeight":
            case "maxHeight":
                this._renderHeight(this.element().outerHeight());
                break;
            case "onResize":
            case "onResizeStart":
            case "onResizeEnd":
                this._renderActions();
                break;
            case "area":
            case "stepPrecision":
            case "step":
                break;
            default:
                this.callBase(args)
        }
    },
    _clean: function() {
        this.element().find("." + RESIZABLE_HANDLE_CLASS).remove()
    }
});
registerComponent(RESIZABLE, Resizable);
module.exports = Resizable;
module.exports.default = module.exports;
