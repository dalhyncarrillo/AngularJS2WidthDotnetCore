/**
 * DevExtreme (ui/validation/validation_mixin.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var ValidationMixin = {
    _findGroup: function() {
        var $dxGroup, group = this.option("validationGroup");
        if (!group) {
            $dxGroup = this.element().parents(".dx-validationgroup:first");
            if ($dxGroup.length) {
                group = $dxGroup.dxValidationGroup("instance")
            } else {
                group = this._modelByElement(this.element())
            }
        }
        return group
    }
};
module.exports = ValidationMixin;
