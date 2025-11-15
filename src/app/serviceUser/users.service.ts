import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listeUser(){
    return this.http.get("http://localhost:3000/users")
  }
  removeUser(idOfUser:any){
return this.http.delete("http://localhost:3000/users/"+idOfUser)
  }
  addUser(data:any){
  return  this.http.post("http://localhost:3000/users/",data)
  }
}
