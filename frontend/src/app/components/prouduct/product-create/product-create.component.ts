import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //Atributo criado para usar o binding de atributo [id]="atributodeTeste"
  atributodeTeste = 'teste'
  
  //cria um produto de teste, o id é opicional
  product: Product = {
    name: '',
    price: 0
  }
  
  constructor(private productService: ProductService,
              private router: Router) 
              { }

  ngOnInit(): void {

  }

  //função criada para o binding de evento (click)="fazerAlgo()"
  fazerAlgo(): void{
    console.log('testando o binding')
    alert('testando o binding')
  }

  creatProduct():void{
    //ele cria um novo produto e utiliza o subscribe para mostra a 
    //mensagem de confirmação e redirecionar para a página de produtos
    //o observable permite fazer isso quando chegar a confirmação http
    this.productService.createProduct(this.product).subscribe(()=>
    {
      this.productService.showMessage('operação executada...')
      this.router.navigate(['/Products'])
    }
    )
  }

  cancel():void{
    this.router.navigate(['/Products'])
  }


}
