import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
produtcs:Product[]=[{'id':1,'name':'pc1', 'Quantity':3},
  {'id':2,'name':'pc2', 'Quantity':3},
  {'id':3,'name':'pc3', 'Quantity':3}
]
}
