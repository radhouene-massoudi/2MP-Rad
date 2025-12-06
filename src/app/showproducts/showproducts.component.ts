import { Component } from '@angular/core';
import { ProcdutService } from '../produit/procdut.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent {
constructor(private s:ProcdutService){}
list:any;
ngOnInit(){
  this.s.Products().subscribe(
    (d)=>{
this.list=d;
    }
  )
}
}
