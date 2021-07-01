import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sort } from '../util/sort';
import { ProductService } from './services/grid-list.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  grid = true;
  products: any;
  productForm: FormGroup;
  filteredProducts: any;
  isLoading = false;
  error = null;
  priceFilter = [
    {
      "order": "asc",
      "displayText": "Price low to high"
    },
    {
      "order": "desc",
      "displayText": "Price high to low"
    }]
  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      filterProduct: []
    })
  }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProducts()
      .subscribe(prod => {
        this.products = prod
        this.isLoading = false;
        this.filteredProducts = this.products;
      }, error => {
        this.error = error;
        this.isLoading = false;
      });


    this.productForm.get('filterProduct')?.valueChanges.subscribe(
      value => {
        const sort = new Sort;
        if (value == 'asc') {
          this.products.sort(sort.startSort('price', 'asc'));
        } else {
          this.products.sort(sort.startSort('price', 'desc'));
        }
      }
    )
  }

  gridView(isGrid: boolean) {
    this.grid = isGrid;
  }
}
