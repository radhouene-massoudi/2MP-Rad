import { Component } from '@angular/core';
import { MyfirstserviceService } from '../Serives/myfirstservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // providers:[MyfirstserviceService]
})
export class LoginComponent {
  constructor(private s: MyfirstserviceService){

  }
  ngOnInit(){
    this.s.showTab()
  }
showF(l:any){
  console.log(l)
}
}
