import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

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
  updateUser(id:string, data:User){
 return this.http.put<User>("http://localhost:3000/users/"+id,data)
  }
  getUserById(id:string):Observable<User>{
     return this.http.get<User>("http://localhost:3000/users/"+id)
  }
}
