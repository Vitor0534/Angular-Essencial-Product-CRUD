import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private ProductService: ProductService, private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.readById(`${id}`).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {

    //O subscribe recebe a notificação de quando o produto foi alterado, ai pode navegar
    // para outra rota, por isso tudo está dentro do método do observable
    this.ProductService.updateProduct(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto atualizado com sucesso');
      this.router.navigate(['Products']);
    });
  }

  cancel(): void {
    this.router.navigate(['Products'])
  }



}
