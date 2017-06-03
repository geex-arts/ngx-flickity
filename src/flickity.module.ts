import { NgModule } from '@angular/core';

import { FlickityDirective } from './components/flickity/flickity.directive';
import { FlickityChildDirective } from './components/flickity-child/flickity-child.directive';
import { AppConfigService } from './services/app-config.service';

const DIRECTIVES = [FlickityDirective, FlickityChildDirective];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES,
    providers: [AppConfigService]
})
export class FlickityModule { }
