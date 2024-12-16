import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/core/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productsSubject = new BehaviorSubject<Product[]>([]); 
  products$: Observable<Product[]> = this.productsSubject.asObservable();
   constructor() { } 
   addProduct(product: Product): void { const currentProducts = this.productsSubject.value; this.productsSubject.next([...currentProducts, product]); } 
   getProducts(): Observable<Product[]> { return this.products$; }
}
