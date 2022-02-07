import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postData(data:any){
   return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
     return res
   }))
  }

  getData(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res
    }))
   }

  delData(id:any){
    return this.http.delete<any>("http://localhost:3000/posts"+id)
  }

  putData(id:any,data:any){
    return this.http.put<any>("http://localhost:3000/posts"+id,data)
  }
}
