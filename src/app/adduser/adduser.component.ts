import { Component } from '@angular/core';
import { UsersService } from '../serviceUser/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
constructor(private s:UsersService,private router:Router){

}
add(d:any){
  this.s.addUser(d).subscribe(
    ()=>{
      this.router.navigate(['/user'])
      console.log('added')
    }
  )
}
}
