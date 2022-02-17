import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {Store} from "@ngrx/store";
import {SelectProductAction} from "../../../../ngrx/products.actions";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | null = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.store.dispatch(new SelectProductAction(product));
  }
}
