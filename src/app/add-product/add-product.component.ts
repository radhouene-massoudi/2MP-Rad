import { Component } from '@angular/core';
import { ProcdutService } from '../produit/procdut.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private s:ProcdutService,
  private r:Router
){}
addProduit(d:any){
this.s.addProduct(d).subscribe(
  ()=>{
   // alert("added")
    this.r.navigate(['listp'])
  }
)
}
}
