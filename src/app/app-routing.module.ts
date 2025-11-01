import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirstcComponent } from './firstc/firstc.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UsersComponent},
  {path:'detail/:id',component:DetailComponent},
    {path:'products',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'first',component:FirstcComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
