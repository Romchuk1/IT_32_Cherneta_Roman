import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  message: string = '';

  showMessage(): void {
    this.message = 'Товар додано до кошика';
  }
}