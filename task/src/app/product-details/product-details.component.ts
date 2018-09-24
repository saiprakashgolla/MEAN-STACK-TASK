import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public data:any;
  public search:any;
  public productDetails:any;
  public productKeyNames:any;

  product = {
    find: '',
  }


  p: number = 1;
  count: number;

  constructor(
    private prouctService : ProductService
  ) { }

  ngOnInit() {
    this.prouctService.searchData(this.search)
    
  .subscribe(
    (responce) => {
      this.data = responce;
      this.productDetails = this.data.addDetails;
      this.productKeyNames =  Object.keys(this.productDetails[0]);
      console.log(this.productKeyNames)
    }
  ) 
}
}
