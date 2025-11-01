import { Component } from '@angular/core';
import { Product } from '../model/product';
import { MyfirstserviceService } from '../Serives/myfirstservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  constructor(private s:MyfirstserviceService){

  }
  ngOnInit(){
    //this.s.showMsg();
    this.s.addtoTab('L')
    this.s.showTab()
    this.s.sayHello().subscribe()
  }
produtcs:Product[]=[{'id':1,'name':'pc1', 'Quantity':3},
  {'id':2,'name':'pc2', 'Quantity':3},
  {'id':3,'name':'pc3', 'Quantity':3}
]
}
