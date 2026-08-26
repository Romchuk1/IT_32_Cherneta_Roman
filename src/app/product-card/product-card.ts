import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input()
  name!: string;

  @Input()
  price!: number;

  @Output()
  buyClicked = new EventEmitter<void>();

  buy(): void {
    this.buyClicked.emit();
  }
}