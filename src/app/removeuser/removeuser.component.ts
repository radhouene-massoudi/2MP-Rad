import { Component } from '@angular/core';
import { UsersService } from '../serviceUser/users.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-removeuser',
  templateUrl: './removeuser.component.html',
  styleUrls: ['./removeuser.component.css']
})
export class RemoveuserComponent {
  idofuser:any;
  constructor(private s:UsersService,
    private ac:ActivatedRoute,
  private router:Router){

  }
  ngOnInit(){
    this.idofuser=this.ac.snapshot.params?.['r']
    this.s.removeUser( this.idofuser).subscribe(
    ()=>{
      alert('succes')
    this.router.navigate(['/user'])
    },
    (error)=>{
      console.log(error)
      if(error.status==404){
        alert('not found')
      }
    },
    ()=>{
      alert('completed')
    }
  )
  }

}
