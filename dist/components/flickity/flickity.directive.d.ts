import { ElementRef, OnDestroy, EventEmitter, AfterContentInit } from '@angular/core';
import { FlickityOptions } from "../../interfaces/flickity-options.interface";
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    private el;
    config: FlickityOptions;
    slideSelect: EventEmitter<number>;
    cellStaticClick: EventEmitter<number>;
    childrenUpdated: EventEmitter<void>;
    private flkty;
    private appendElements;
    private childrenUpdateInterval;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    init(): void;
    destroy(): void;
    resize(): void;
    reposition(): void;
    previous(): void;
    previousAvailable(): boolean;
    next(): void;
    nextAvailable(): boolean;
    readonly selectedIndex: number | undefined;
    readonly cells: number | undefined;
    readonly slides: number | undefined;
    append(el: HTMLElement): void;
    prepend(el: HTMLElement): void;
    private updateElements();
}
