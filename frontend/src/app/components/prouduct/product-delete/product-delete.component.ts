import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product:Product = {
    name:'',
    price:0
  }
  
  constructor(private ProductService:ProductService, private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(`${id}`).subscribe(product =>{
      this.product = product;
    })
  }

  deleteProduct():void{
    this.ProductService.deleteProduct(this.product).subscribe(()=>{
      this.ProductService.showMessage('Produto deletado')
      this.router.navigateByUrl('Products')
    })
  }

  cancel():void{
  this.router.navigateByUrl('Products')
  }




}
