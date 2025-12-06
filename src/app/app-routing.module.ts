import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirstcComponent } from './firstc/firstc.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { RemoveuserComponent } from './removeuser/removeuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
    {path:'addp',component:AddProductComponent},
      {path:'u/:id',component:UpdateproductComponent},
      {path:'r/:idofdelete',component:RemoveproductComponent},
      {path:'listp',component:ShowproductsComponent},
    {path:'add',component:AdduserComponent},
  {path:'user',component:UsersComponent},
   {path:'update/:t',component:UpdateuserComponent},
  {path:'remove/:r',component:RemoveuserComponent},
  {path:'detail/:id',component:DetailComponent},
    {path:'products',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'notfound',component:Notfound404Component},
    {path:'first',component:FirstcComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
