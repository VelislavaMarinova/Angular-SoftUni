import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective implements OnInit {
  //(mouseover)="mouseOverHandler($event)" on the element
  @HostListener('mouseover',['$event']) mouseOverHandler(e: MouseEvent){
    console.log(e);
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.elRef);
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.renderer.listen(
      this.elRef.nativeElement,
      // 'mousedown',
      'mouseenter',
      this.mouseEnterHandler.bind(this),

    );

    this.renderer.listen(
      this.elRef.nativeElement,
      // 'mouseup',
      'mouseleave',
      this.mouseLeaveHandler.bind(this),

    );

  }
  mouseEnterHandler(e: MouseEvent): void {
    console.log("enter",e);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.renderer.addClass(this.elRef.nativeElement, 'highlight' );


  }
  mouseLeaveHandler(e: MouseEvent): void {
    console.log("leave",e);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight' );
  }

}
