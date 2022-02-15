//componente responsável por receber toda a lógica daquele escopo
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Product} from './product.model';

//class para fazer uso das requisições http
import { HttpClient, HttpClientModule } from '@angular/common/http';

//calss para fazer uso do padrão observable, junto com o http
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


//Os services tem são criados automaticamente com o decorator 
//@Injectable, que diz que a presente class pode ser injetada 
//como dependência dentro de outra class
// o service em si é um singleton, ou seja somente uma instancia dele
// existe dentro de toda a aplicação, que gera aquele lance de altera 1
// altera em tudo
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //url que mapeia a api do backend
  baseUrl = "http://localhost:3001/products"


  constructor(private snackBar: MatSnackBar,
              private http: HttpClient         
    ) { }

  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(
      msg,'X',
      {
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass: isError ? ['msg-erro'] : ['msg-sucesso'] 
      }
    )
  }

  //Cria um novo produto fazendo uma requisição post,
  //o Obserbable, por ser uma função genêrica, faz uso de um tipo
  // generic que é o templete indicando o tipo de evento q ele deve
  //observar no caso <Product>
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map((Obj) => Obj),
      catchError(error => this.errorHandler(error))
    )

  }

  readProduct():Observable<Product>{
    return this.http.get<Product>(this.baseUrl).pipe(
      map((Obj) => Obj),
      catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<Product>{
    
    //template string
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((Obj) => Obj),
      catchError(error=> this.errorHandler(error))
    );

  }

  updateProduct(product: Product): Observable<Product> {
    //template string
    const url = `${this.baseUrl}/${product.id}`

    return this.http.put<Product>(url,product).pipe(
      map((Obj) => Obj),
      catchError(error=> this.errorHandler(error))
    );

  }

  deleteProduct(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<Product>(url).pipe(
      map((Obj) => Obj),
      catchError(error=> this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    console.log(error);
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }



}
