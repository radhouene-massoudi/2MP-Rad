import { Component } from '@angular/core';
import { ProcdutService } from '../produit/procdut.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent {
constructor(private s:ProcdutService
  ,private ac:ActivatedRoute,
private r:Router){}
ngOnInit(){
  this.s.deleteProduct(this.ac.snapshot.params['idofdelete']).subscribe(
    ()=>{
      //alert('deleted')
      this.r.navigate(['listp'])
    }
  )
}
}
