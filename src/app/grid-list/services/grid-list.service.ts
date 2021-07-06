import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
 providedIn: 'root'
})
export class ProductService {
 private apiUrl = environment.API_URL_PRODUCTS;

 constructor(private http: HttpClient) { }

 getProducts() {
   return this.http.get<Product[]>(this.apiUrl)
 }
}