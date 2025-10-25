import { Component } from '@angular/core';

@Component({
  selector: 'app-firstc',
  templateUrl: './firstc.component.html',
  styleUrls: ['./firstc.component.css']
})
export class FirstcComponent {
klass="MP RAD 2"
kolor="yellow"
a=20
showMsg(){
  alert('Bonjour')
}
getColor(){
  if(this.a>10){
    return "pink"
  }else{
return "red"
  }
}
}
