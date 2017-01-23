/**
 * DevExtreme (core/utils/queue.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var errors = require("../errors"),
    when = require("../../integration/jquery/deferred").when;

function createQueue(discardPendingTasks) {
    var _tasks = [],
        _busy = false;

    function exec() {
        while (_tasks.length) {
            _busy = true;
            var task = _tasks.shift(),
                result = task();
            if (void 0 === result) {
                continue
            }
            if (result.then) {
                when(result).always(exec);
                return
            }
            throw errors.Error("E0015")
        }
        _busy = false
    }

    function add(task, removeTaskCallback) {
        if (!discardPendingTasks) {
            _tasks.push(task)
        } else {
            if (_tasks[0] && removeTaskCallback) {
                removeTaskCallback(_tasks[0])
            }
            _tasks = [task]
        }
        if (!_busy) {
            exec()
        }
    }

    function busy() {
        return _busy
    }
    return {
        add: add,
        busy: busy
    }
}
exports.create = createQueue;
exports.enqueue = createQueue().add;
