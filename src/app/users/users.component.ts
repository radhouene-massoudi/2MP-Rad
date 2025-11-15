import { Component } from '@angular/core';
import { UsersService } from '../serviceUser/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;
constructor(private s:UsersService){

}
ngOnInit(){
  this.s.listeUser().subscribe(
    (l)=>{
      this.users=l
      console.log(l)
    }
  )
}
}
