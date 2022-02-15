import { Product } from './../components/prouduct/product.model';
import { Directive } from '@angular/core';
import { Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[MyForobj]'
})
export class MyForobjDirective implements OnInit{

  @Input('MyForobjEm') produtos: Product[]
  
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) 
  {this.produtos=[]}

  ngOnInit(){

      for(let produto of this.produtos){
        this.container.createEmbeddedView(
              this.template, {$implicit: produto});
      }
      //console.log(this.numbers)
  }


}
