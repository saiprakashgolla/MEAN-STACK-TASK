import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProductService {

  constructor(
    private http : HttpClient
    ) { }


    searchData(search){
            return this.http.post("http://localhost:3001/v1/product/productDetails",search)
         }
}