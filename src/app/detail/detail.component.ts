import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
constructor(private ac:ActivatedRoute){

}
idOfProduct:any;
ngOnInit(){
  this.idOfProduct=this.ac.snapshot.params['id'];
  console.log('the value of id :',this.idOfProduct)
}
}
