import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import { ProductListModule } from './../product-list/product-list.module';

@NgModule({
  imports: [
    CommonModule,
    ProductListModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
