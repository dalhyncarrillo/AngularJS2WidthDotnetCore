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
var DxTemplateHost = (function () {
    function DxTemplateHost() {
    }
    DxTemplateHost.prototype.setHost = function (host) {
        this.host = host;
    };
    DxTemplateHost.prototype.setTemplate = function (template) {
        this.host.setTemplate(template);
    };
    return DxTemplateHost;
}());
exports.DxTemplateHost = DxTemplateHost;
//# sourceMappingURL=template-host.js.map