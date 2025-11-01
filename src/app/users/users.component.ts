import { Component } from '@angular/core';
import { UsersService } from '../serviceUser/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
constructor(private s:UsersService){

}
ngOnInit(){
  this.s.listeUser().subscribe(
    (l)=>{
      console.log(l)
    }
  )
}
}
