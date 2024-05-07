import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLightElement]'
})
export class HighLightElementDirective {

  constructor(private elm: ElementRef) { 
    console.log(elm)
    this.elm.nativeElement.style.backgroundColor = "yellow";
    this.elm.nativeElement.style.color = "blue";
  }

}
