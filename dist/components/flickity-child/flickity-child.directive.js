"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickity_directive_1 = require("../flickity/flickity.directive");
var FlickityChildDirective = (function () {
    function FlickityChildDirective(el, parent) {
        this.el = el;
        this.parent = parent;
    }
    FlickityChildDirective.prototype.ngOnInit = function () {
        if (!this.parent) {
            return;
        }
        this.parent.append(this.el.nativeElement);
    };
    return FlickityChildDirective;
}());
FlickityChildDirective.decorators = [
    { type: core_1.Directive, args: [{ selector: '[flickityChild]' },] },
];
/** @nocollapse */
FlickityChildDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: flickity_directive_1.FlickityDirective, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
]; };
FlickityChildDirective.propDecorators = {
    'flickityChild': [{ type: core_1.Input },],
};
exports.FlickityChildDirective = FlickityChildDirective;
//# sourceMappingURL=flickity-child.directive.js.map