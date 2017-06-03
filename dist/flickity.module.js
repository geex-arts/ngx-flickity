"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickity_directive_1 = require("./components/flickity/flickity.directive");
var flickity_child_directive_1 = require("./components/flickity-child/flickity-child.directive");
var app_config_service_1 = require("./services/app-config.service");
var DIRECTIVES = [flickity_directive_1.FlickityDirective, flickity_child_directive_1.FlickityChildDirective];
var FlickityModule = (function () {
    function FlickityModule() {
    }
    return FlickityModule;
}());
FlickityModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                providers: [app_config_service_1.AppConfigService]
            },] },
];
/** @nocollapse */
FlickityModule.ctorParameters = function () { return []; };
exports.FlickityModule = FlickityModule;
//# sourceMappingURL=flickity.module.js.map