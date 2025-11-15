import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcComponent } from './firstc/firstc.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveuserComponent } from './removeuser/removeuser.component';
import { AdduserComponent } from './adduser/adduser.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstcComponent,
    FooterComponent,
    NavComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    DetailComponent,
    UsersComponent,
    RemoveuserComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
