/**
 * DevExtreme (ui/scroll_view/animator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    Class = require("../../core/class"),
    abstract = Class.abstract,
    animationFrame = require("../../animation/frame");
var Animator = Class.inherit({
    ctor: function() {
        this._finished = true;
        this._stopped = false;
        this._proxiedStepCore = $.proxy(this._stepCore, this)
    },
    start: function() {
        this._stopped = false;
        this._finished = false;
        this._stepCore()
    },
    stop: function() {
        this._stopped = true;
        animationFrame.cancelAnimationFrame(this._stepAnimationFrame)
    },
    _stepCore: function() {
        if (this._isStopped()) {
            this._stop();
            return
        }
        if (this._isFinished()) {
            this._finished = true;
            this._complete();
            return
        }
        this._step();
        this._stepAnimationFrame = animationFrame.requestAnimationFrame(this._proxiedStepCore)
    },
    _step: abstract,
    _isFinished: $.noop,
    _stop: $.noop,
    _complete: $.noop,
    _isStopped: function() {
        return this._stopped
    },
    inProgress: function() {
        return !(this._stopped || this._finished)
    }
});
module.exports = Animator;