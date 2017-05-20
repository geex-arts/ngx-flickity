import { ElementRef, OnInit } from '@angular/core';
import { FlickityDirective } from '../flickity/flickity.directive';
export declare class FlickityChildDirective implements OnInit {
    private el;
    private parent;
    flickityChild: any;
    constructor(el: ElementRef, parent?: FlickityDirective);
    ngOnInit(): void;
}
