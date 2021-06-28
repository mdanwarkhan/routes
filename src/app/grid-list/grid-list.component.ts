import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from './services/grid-list.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  grid = true;
  products: any;
  myForm: FormGroup;
  filteredProducts: any;
  isLoading = false;
  error = null;
  PriceFilter = [
    {
      "Value": 100,
      "DisplayText": "$100"
    },
    {
      "Value": 500,
      "DisplayText": "$500"
    },
    {
      "Value": 1000,
      "DisplayText": "$1000"
    }]
  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      filterProduct: [this.PriceFilter[0].DisplayText]
    })
  }

   getValue(index: number) {
    if(index === 0)
      return { 
        lower: 0, 
        displayText: this.PriceFilter[index].DisplayText, 
        upper: this.PriceFilter[index].Value 
      };
    else {
      return { 
        lower: this.PriceFilter[index - 1].Value, 
        upper: this.PriceFilter[index].Value,
        displayText: `${this.PriceFilter[index - 1].DisplayText} - ${this.PriceFilter[index].DisplayText}`
      };
    }
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
      

    this.myForm.get('filterProduct')?.valueChanges.subscribe(
      value => {
        console.log(value);
        this.filteredProducts = this.products.filter((product: any) => product.price >= value.lower && product.price <= value.upper )
      }
    )
  }

  gridView(isGrid: boolean) {
    this.grid = isGrid;
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.Value === c2.Value : c1 === c2;
}
}
