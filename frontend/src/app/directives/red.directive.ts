import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  // nesse caso, foi injetavo a dependencia capas de manipular 
  // elementos da dom, o el
  constructor(private el: ElementRef) {
    //atribui a cor vermelha ao elemento nativo da diretiva appRed 
    // tipo o "this"
    el.nativeElement.style.color = '#e35e6b';
   }
}
