import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from 'src/core/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$!: Observable<Product[]>;
  constructor( private productsService :ProductServiceService){}
OnInit():void{
  this.products$ = this.productsService.getProducts();
}

}
