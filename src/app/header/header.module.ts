import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
// import { SlickModule } from 'ngx-slick';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
  ],
 })
export class HeaderModule { }
