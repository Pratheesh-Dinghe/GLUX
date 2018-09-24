import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
// import { ProductdetailsComponent } from './productdetails/productdetails/productdetails.component';
import { ContentService } from './shared/services/content.service';
import { AppRoutingModule, routingComponet } from './app-routing.module';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CryptoService } from './shared/services/crypto.service';
import {HeaderdataService } from './Shared/services/headerdata.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ShoppingbagComponent } from './shoppingbag/shoppingbag.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponet,
    FullpageDirective,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CheckoutComponent,
    ProductdescriptionComponent,
    PaginationComponent,
    ShoppingbagComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContentService ,CryptoService,HeaderdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
