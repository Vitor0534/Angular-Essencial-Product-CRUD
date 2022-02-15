import { ProductDeleteComponent } from './components/prouduct/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/prouduct/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Esse é o modulo do angular que cuida de todas as rotas dos componente
// de acordo com a rota atual selecionado, ele coleta da lista de Routes
// o componente específico por meio de seu seletor e carrega o mesmo 
// dentro da tag <router-outlet></router-outlet>
// o user selecion essas rotas ao clicar em links que tenham o atributo
// routerLink = "/rota"

//importando os componentes da aplicação
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/prouduct/product-create/product-create.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "Products", component: ProductCrudComponent
  },
  {
    path: "products/create", component: ProductCreateComponent
  },
  {
    path: "products/update/:id", component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id", component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
