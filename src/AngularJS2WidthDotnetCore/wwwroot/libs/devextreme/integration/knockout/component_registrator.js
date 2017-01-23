/**
 * DevExtreme (integration/knockout/component_registrator.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    ko = require("knockout"),
    registerComponent = require("../../core/component_registrator"),
    Widget = require("../../ui/widget/ui.widget"),
    KoTemplate = require("./template"),
    Editor = require("../../ui/editor/editor"),
    Locker = require("../../core/utils/locker");
var LOCKS_DATA_KEY = "dxKoLocks",
    CREATED_WITH_KO_DATA_KEY = "dxKoCreation",
    DX_POLYMORPH_WIDGET_TEMPLATE = "<!-- ko dxPolymorphWidget: { name: $data.widget, options: $data.options } --><!-- /ko -->";
var editorsBindingHandlers = [];
var registerComponentKoBinding = function(componentName, componentClass) {
    if (componentClass.subclassOf(Editor)) {
        editorsBindingHandlers.push(componentName)
    }
    ko.bindingHandlers[componentName] = {
        init: function(domNode, valueAccessor) {
            var component, $element = $(domNode),
                optionChangedCallbacks = $.Callbacks(),
                optionsByReference = {},
                ctorOptions = {
                    onInitializing: function() {
                        optionsByReference = this._getOptionsByReference();
                        ko.computed(function() {
                            var model = ko.unwrap(valueAccessor());
                            if (component) {
                                component.beginUpdate()
                            }
                            unwrapModel(model);
                            if (component) {
                                component.endUpdate()
                            }
                        }, null, {
                            disposeWhenNodeIsRemoved: domNode
                        });
                        component = this
                    },
                    modelByElement: function($element) {
                        if ($element.length) {
                            return ko.dataFor($element.get(0))
                        }
                    },
                    nestedComponentOptions: function(component) {
                        return {
                            modelByElement: component.option("modelByElement"),
                            nestedComponentOptions: component.option("nestedComponentOptions")
                        }
                    },
                    _optionChangedCallbacks: optionChangedCallbacks,
                    integrationOptions: {
                        watchMethod: function(fn, callback, options) {
                            options = options || {};
                            var skipCallback = options.skipImmediate;
                            var watcher = ko.computed(function() {
                                var newValue = ko.unwrap(fn());
                                if (!skipCallback) {
                                    callback(newValue)
                                }
                                skipCallback = false
                            });
                            return function() {
                                watcher.dispose()
                            }
                        },
                        templates: {
                            "dx-polymorph-widget": new KoTemplate(DX_POLYMORPH_WIDGET_TEMPLATE, this)
                        },
                        createTemplate: function(element) {
                            return new KoTemplate(element)
                        }
                    }
                },
                optionNameToModelMap = {};
            var applyModelValueToOption = function(optionName, modelValue) {
                var locks = $element.data(LOCKS_DATA_KEY),
                    optionValue = ko.unwrap(modelValue);
                if (ko.isWriteableObservable(modelValue)) {
                    optionNameToModelMap[optionName] = modelValue
                }
                if (component) {
                    if (locks.locked(optionName)) {
                        return
                    }
                    locks.obtain(optionName);
                    try {
                        if (ko.ignoreDependencies) {
                            ko.ignoreDependencies(component.option, component, [optionName, optionValue])
                        } else {
                            component.option(optionName, optionValue)
                        }
                    } finally {
                        locks.release(optionName)
                    }
                } else {
                    ctorOptions[optionName] = optionValue
                }
            };
            var handleOptionChanged = function(args) {
                var optionName = args.fullName,
                    optionValue = args.value;
                if (!(optionName in optionNameToModelMap)) {
                    return
                }
                var $element = this._$element,
                    locks = $element.data(LOCKS_DATA_KEY);
                if (locks.locked(optionName)) {
                    return
                }
                locks.obtain(optionName);
                try {
                    optionNameToModelMap[optionName](optionValue)
                } finally {
                    locks.release(optionName)
                }
            };
            var createComponent = function() {
                optionChangedCallbacks.add(handleOptionChanged);
                $element.data(CREATED_WITH_KO_DATA_KEY, true).data(LOCKS_DATA_KEY, new Locker)[componentName](ctorOptions);
                ctorOptions = null
            };
            var unwrapModelValue = function(currentModel, propertyName, propertyPath) {
                var unwrappedPropertyValue;
                ko.computed(function() {
                    var propertyValue = currentModel[propertyName];
                    applyModelValueToOption(propertyPath, propertyValue);
                    unwrappedPropertyValue = ko.unwrap(propertyValue)
                }, null, {
                    disposeWhenNodeIsRemoved: domNode
                });
                if ($.isPlainObject(unwrappedPropertyValue)) {
                    if (!optionsByReference[propertyPath]) {
                        unwrapModel(unwrappedPropertyValue, propertyPath)
                    }
                }
            };
            var unwrapModel = function(model, propertyPath) {
                for (var propertyName in model) {
                    if (model.hasOwnProperty(propertyName)) {
                        unwrapModelValue(model, propertyName, propertyPath ? [propertyPath, propertyName].join(".") : propertyName)
                    }
                }
            };
            createComponent();
            return {
                controlsDescendantBindings: componentClass.subclassOf(Widget)
            }
        }
    };
    if ("dxValidator" === componentName) {
        ko.bindingHandlers.dxValidator.after = editorsBindingHandlers
    }
};
registerComponent.callbacks.add(function(name, componentClass) {
    registerComponentKoBinding(name, componentClass)
});
