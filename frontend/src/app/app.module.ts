
// todo componente que será utilizado na SPA, pagina principal, deve ser declarado/injetado
// nesse arquivo, primeiro tem que importar ele, seguindo o padrão vista abaixo e depois
// declará-los usando os seletores dentro do campo de importees do @ngModule

import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

//importando layout para criação de toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';

//importando componentes para utilizar na lista laterial de navegação
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

//importando componente para construir o componente de home
import {MatCardModule} from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/prouduct/product-create/product-create.component';


//importando componentes da material para construir componentes
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//biblioteca que permite fazer uso das requisições HTTP, atravez dela
//que é feita a comunicação com o backend q nesse caso está em node
import {HttpClientModule} from '@angular/common/http';

//bibliotecas para construir formulário
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductReadComponent } from './components/prouduct/product-read/product-read.component';
import { MyForobjDirective } from './directives/my-forobj.directive';
import { ProductRead2Component } from './components/prouduct/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePT from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/prouduct/product-update/product-update.component';
import { ProductDeleteComponent } from './components/prouduct/product-delete/product-delete.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    MyForobjDirective,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,

    MatTableModule,

    MatPaginatorModule,

    MatSortModule
   

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
