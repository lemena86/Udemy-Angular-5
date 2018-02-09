import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // open = false;
  @HostBinding('class.open') isOpen = false;

  /*constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }*/

  // css class open
  @HostListener('click')
  onClick() {
    this.isOpen = !this.isOpen;

    /*this.open = !this.open;
    this.open ?
      this.renderer.addClass(this.elRef.nativeElement, 'open') :
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
  */
  }
}
