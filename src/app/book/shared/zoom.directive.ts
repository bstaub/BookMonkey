import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[bmZoom]'
})
export class ZoomDirective {

  @HostBinding('class.small') isZoomed: boolean;
  // @HostBinding() get title(): string {return 'Mein Titel'; };
  // @HostBinding('style.color') get foo(): string {return 'red'; };
  // @HostBinding() class: string = 'active';
  @HostListener('mouseenter') onMouseEnter() {
    this.isZoomed = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isZoomed = false;
  }

  constructor() { }

}
