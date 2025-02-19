import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onLike() {
    this.like.emit(this.product.id);
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

  shareOnWhatsapp(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.kaspiLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.kaspiLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(text)}`, '_blank');
  }
}