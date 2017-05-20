"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickity_directive_1 = require("./components/flickity/flickity.directive");
var flickity_child_directive_1 = require("./components/flickity-child/flickity-child.directive");
var DIRECTIVES = [flickity_directive_1.FlickityDirective, flickity_child_directive_1.FlickityChildDirective];
var FlickityModule = (function () {
    function FlickityModule() {
    }
    return FlickityModule;
}());
FlickityModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES
            },] },
];
/** @nocollapse */
FlickityModule.ctorParameters = function () { return []; };
exports.FlickityModule = FlickityModule;
//# sourceMappingURL=flickity.module.js.map