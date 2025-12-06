import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcdutService {
url=" http://localhost:3000/product/"
  constructor(private http:HttpClient) { }
  addProduct(data:any){
return this.http.post(this.url,data)
  }
  updateProduct(data:any,id:any){
return this.http.put(this.url+id,data)
  }
  deleteProduct(id:any){
return this.http.delete(this.url+id)
  }
  Products(){
return this.http.get(this.url)
  }
  getProductById(id:any){
    return this.http.get(this.url+id)
  }
}
