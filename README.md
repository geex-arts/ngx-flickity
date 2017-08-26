# [Flickity](https://flickity.metafizzy.co/) module for Angular2

> ngx-flickity is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

## Installation

`npm install ngx-flickity --save`

## Usage

Import `FlickityModule` into your app's modules:

``` typescript
import { FlickityModule } from 'ngx-flickity';

@NgModule({
  imports: [
    FlickityModule
  ]
})
```

```typescript
 @Component({
   selector: 'my-component',
   template: `
     <div [flickity]>
       <div [flickityChild] *ngFor="let child of children">{{child.title}}</div>
     </div>
     `
 })
 class MyComponent {
   children = [
     {title: 'Child 1'},
     {title: 'Child 2'},
     {title: 'Child 3'},
     {title: 'Child 4'},
     {title: 'Child 5'},
     {title: 'Child 6'}
   ]
 }
 ```
 
## Configuration

### Options
Read about Flickity options here: https://flickity.metafizzy.co/options.html

#### Examples

Inline object:
```html
<div [flickity]="{cellAlign: 'left', percentPosition: true, groupCells: true}"></div>
```

## Events
### slideSelect: `EventEmitter<number>`
Triggered after a slide has changed.
>https://flickity.metafizzy.co/events.html#select

### cellStaticClick: `EventEmitter<number>`
Triggered after a cell has been clicked.
>https://flickity.metafizzy.co/events.html#staticclick

### Examples
```html
<div [flickity] (slideSelect)="onSelect($event)"></div>
```
