import { Component } from '@angular/core';
import { ProcdutService } from '../produit/procdut.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
constructor(private s:ProcdutService,
  private ac: ActivatedRoute,
private r:Router){

}
product:any;
ngOnInit(){

this.s.getProductById(this.ac.snapshot.params["id"]).subscribe(
  (result)=>{
this.product=result
  }
)
}
updateproduit(d:any){
  this.s.updateProduct(d,this.ac.snapshot.params["id"]).subscribe(
    ()=>{
      //alert('updtaed')
      this.r.navigate(['listp'])
    }
  )
}
}
