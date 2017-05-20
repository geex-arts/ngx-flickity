import {
  Directive, Optional, Host, ElementRef, OnInit, Input
} from '@angular/core';

import { FlickityDirective } from '../flickity/flickity.directive';

@Directive({ selector: '[flickityChild]' })
export class FlickityChildDirective implements OnInit {

  @Input() flickityChild: any;

  constructor(private el: ElementRef,
              @Optional() @Host() private parent?: FlickityDirective) {}

  ngOnInit(): void {
    if (!this.parent) {
      return;
    }

    this.parent.append(this.el.nativeElement);
  }
}
