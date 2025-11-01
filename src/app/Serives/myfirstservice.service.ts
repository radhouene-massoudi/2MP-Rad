import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyfirstserviceService {
  tab=['a','b']

  constructor() { }
  showMsg(){
    alert('bonjour')
  }
  addtoTab(t:any){
    this.tab.push(t)
  }
  showTab(){
   console.log(this.tab) 
  }
  sayHello(){
    return new Observable(()=>
      console.log('msg')
    ) 
  }
}
