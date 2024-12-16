import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/core/Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productForm!: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductServiceService) { }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [{ value: null, disabled: true }],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]], 
      available: [false],
      likes: [[], Validators.required]
    });
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = {
        ...this.productForm.value, 
        available: true 
         }; this.productService.addProduct(product);
         } 
        }
      }
