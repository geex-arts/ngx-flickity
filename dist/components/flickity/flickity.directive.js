"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import * as Flickity from 'flickity';
var Flickity = require('flickity');
var FlickityDirective = (function () {
    function FlickityDirective(el) {
        var _this = this;
        this.el = el;
        this.config = {};
        this.slideSelect = new core_1.EventEmitter();
        this.cellStaticClick = new core_1.EventEmitter();
        this.childrenUpdated = new core_1.EventEmitter();
        this.appendElements = [];
        this.childrenUpdateInterval = 300;
        setInterval(function () { return _this.updateElements(); }, this.childrenUpdateInterval);
    }
    FlickityDirective.prototype.ngAfterContentInit = function () {
        this.init();
    };
    FlickityDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    FlickityDirective.prototype.init = function () {
        var _this = this;
        var config = this.config;
        if (this.flkty) {
            config['initialIndex'] = this.flkty.selectedIndex;
            this.flkty.destroy();
        }
        this.flkty = new Flickity(this.el.nativeElement, config);
        this.flkty.on('select', function () {
            _this.slideSelect.emit(_this.selectedIndex);
        });
        this.flkty.on('staticClick', function (_event, _pointer, _cellElement, cellIndex) {
            _this.cellStaticClick.emit(cellIndex);
        });
    };
    FlickityDirective.prototype.destroy = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.destroy();
    };
    FlickityDirective.prototype.resize = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.resize();
    };
    FlickityDirective.prototype.reposition = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.reposition();
    };
    FlickityDirective.prototype.previous = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.previous();
    };
    FlickityDirective.prototype.previousAvailable = function () {
        if (!this.selectedIndex) {
            return false;
        }
        return this.selectedIndex > 0;
    };
    FlickityDirective.prototype.next = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.next();
    };
    FlickityDirective.prototype.nextAvailable = function () {
        if (!this.selectedIndex || !this.slides) {
            return false;
        }
        return this.selectedIndex < this.slides - 1;
    };
    Object.defineProperty(FlickityDirective.prototype, "selectedIndex", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlickityDirective.prototype, "cells", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty.cells.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlickityDirective.prototype, "slides", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty['slides'].length;
        },
        enumerable: true,
        configurable: true
    });
    FlickityDirective.prototype.append = function (el) {
        this.appendElements.push(el);
    };
    FlickityDirective.prototype.prepend = function (el) {
        this.flkty.prepend(el);
    };
    FlickityDirective.prototype.updateElements = function () {
        var _this = this;
        if (!this.flkty || this.appendElements.length == 0) {
            return;
        }
        this.appendElements.forEach(function (el) { return _this.flkty.append(el); });
        this.appendElements = [];
        this.resize();
        this.childrenUpdated.emit();
    };
    return FlickityDirective;
}());
FlickityDirective.decorators = [
    { type: core_1.Directive, args: [{ selector: '[flickity]' },] },
];
/** @nocollapse */
FlickityDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
FlickityDirective.propDecorators = {
    'config': [{ type: core_1.Input, args: ['flickity',] },],
    'slideSelect': [{ type: core_1.Output },],
    'cellStaticClick': [{ type: core_1.Output },],
    'childrenUpdated': [{ type: core_1.Output },],
};
exports.FlickityDirective = FlickityDirective;
//# sourceMappingURL=flickity.directive.js.map