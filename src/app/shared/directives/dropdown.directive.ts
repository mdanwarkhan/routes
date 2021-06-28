import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;
  @HostListener('click') toggleisOpen() {
     this.isOpen = !this.isOpen;
     this.isOpen ? this.el.nativeElement.children[0].style.display = 'block' : this.el.nativeElement.children[0].style.display = 'none' 
  }
  constructor(public el : ElementRef) { }

}
