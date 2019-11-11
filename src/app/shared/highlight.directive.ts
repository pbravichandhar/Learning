/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({ selector:  '[hostbinding]' })
/** Highlight the attached element or an InputElement in gray */
export class HighlightDirective {
  // constructor(el: ElementRef) {
  //   el.nativeElement.style.font = 'pink';
  // }


    constructor(private el: ElementRef) {}

    // @Input('highLight') highlightcolor: string;

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('peachpuff');
    }

     @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    @HostBinding('style.color')
    @Input() color: string;

}
