import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './app.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import{ FilterPipe} from './app.filter';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
