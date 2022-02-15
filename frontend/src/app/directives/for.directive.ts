import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})

//Essa é a class da diretiva, ela implementa ainterface OnInit que define
//um métod ngOnInit que é executado sempre que a diretiva inicializa, ele
//é exencial para esse tipo de diretiva
export class ForDirective implements OnInit{

  //Essa anotation define a estrutura da chamada da diretiva
  // "myfor= let n em [1,2,3]"
  // numbers é um parametro dessa class é tipo uma DSL
  @Input('myForEm') numbers: number[]
  
  //Tem como construir com mais parametros é tipo criar a propria sintaxe
  //@Input('myForUsando') texto: string

  //foram injetados algumas dependências que permitem visualizar e coletar valores
  //da diretiva 
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>
              ) {
    this.numbers=[];
   }

  ngOnInit(){

    //intera dentro do arrau  numbers
    // o valor $implicit, joga dentro da variável n
    // la no html o numeber que está sendo interado no for
    //ai poder usar o {{n}} para mostrar esse valor
    for(let number of this.numbers){
      this.container.createEmbeddedView(
            this.template, {$implicit: number});
    }
    console.log(this.numbers)

  }

}
