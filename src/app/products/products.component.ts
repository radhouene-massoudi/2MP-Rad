import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
produtcs=[{'id':1,'name':'pc1', 'quantity':3},
  {'id':2,'name':'pc2', 'quantity':3},
  {'id':3,'name':'pc3', 'quantity':3}
]
}
