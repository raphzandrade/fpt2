import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() public appHover: string = '';

  private defaultColor: string;

  constructor(private elementRef: ElementRef) {
    this.defaultColor = this.elementRef.nativeElement.style.backgroundColor
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.appHover || 'yellow'
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.defaultColor || 'transparent'
  }
}
