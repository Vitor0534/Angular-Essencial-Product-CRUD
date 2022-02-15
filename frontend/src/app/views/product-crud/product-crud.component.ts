import { HeaderService } from './../../components/templates/header/header.service';
import { HeaderComponent } from './../../components/templates/header/header.component';
import { Component, OnInit } from '@angular/core';
//O router é o objeto de rotas que pode ser utilizado para "redirecionar" a página
// isso é, como a lógica é SPA, ele carrega os components da rota X na tela
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
   
  
  //Uma forma de fazer uso do router no escopo dessa classe
  //é fazer a injeção dessa dependência via construtor
  constructor(private router:Router, headerService:HeaderService){ 
    headerService.headerData = {
      title:'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/Products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['products/create'])
  }


}
