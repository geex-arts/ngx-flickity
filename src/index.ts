import { FlickityDirective } from './components/flickity/flickity.directive';
import { FlickityChildDirective } from './components/flickity-child/flickity-child.directive';

export { FlickityOptions } from './interfaces/flickity-options.interface';
export { FlickityDirective } from './components/flickity/flickity.directive';
export { FlickityChildDirective } from './components/flickity-child/flickity-child.directive';
export { FlickityModule } from './flickity.module';

export let FLICKITY_DIRECTIVES = [
    FlickityDirective,
    FlickityChildDirective
];
