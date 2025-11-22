import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../serviceUser/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
id:any;
user = new User();
  constructor(private ac:ActivatedRoute,
    private userService:UsersService,
  private router:Router
  ) {}

ngOnInit(){
  this.id=this.ac.snapshot.params['t']
  //je vais envoyer une requeste to db select * from user where id=t
  this.userService.getUserById(this.id).subscribe(
    (result)=>{
console.log(result)
this.user=result
    },
    (error)=>{
 if(error.status==404){
        console.log('error')
        this.router.navigate(['/notfound'])
      }
    }
  )
  
}
updateUserF(d:any){
  console.log(d)
  this.userService.updateUser(this.id,d).subscribe(
    ()=>{
      alert("updated")
    },
    (error)=>{
      console.log(error.status)
     
    },
    ()=>{alert('complted');}
    
  )

}
}
