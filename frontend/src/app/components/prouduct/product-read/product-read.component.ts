import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { 
    //this.products=[]
  }

  ngOnInit(): void {
    this.listProducts()
  }

  //ERRO: por alguma razão o products está ficando fazio
  //      na aula é feito somente a atribuição, mas nessa versão
  //      parece não funcionar
  // os objetos são inseridos no array todos na posição 0, o que provoca o erro
  // Solução 1: o push insere todos na posição 0, uma vez que ele deve ser utilizado inteirando
  //          pelo uso da .concat, foi possível produzir o array de forma devida
  // Solução 2: uma teoria seria utilziar o push e alterar a forma acesso no binding na view
  //            levando em conta que todos estão no indice 0
  listProducts():void{

    this.productService.readProduct().subscribe(product=>{
      //this.products = product 
      this.products = this.products.concat(product)

      console.log("array de produtos")
      
      console.log(this.products)  

      //this.products.push(product)
      //prodAux.push(product)
      //console.log("produto subscribe")
      //console.log(product) 
      
    })

   
  }

}
