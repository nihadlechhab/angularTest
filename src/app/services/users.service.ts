import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  name:string,
  age:string,
  add:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
  }
// delete;;;
deleteUser(id :any):Observable<object>{
  return this.http.delete('https://jsonplaceholder.typicode.com/USERS/'+id);
}
//put
  updateUser(){
    const putHeaders = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken': '3456',
      'userIs':'testinguser',
    });
    const putBody={
     name:'ARC Tutorials',
    userId: 1,
    }
    this.http.put('https://jsonplaceholder.typicode.com/USERS/1',putBody, {headers:putHeaders}).subscribe (data=>{
      console.log(data);
    })
  }


  //Post 
  
  addUser(body:any){
    const headers =new HttpHeaders({
      
      'authentificationKey': '123456'
    });
 return this.http.post('https://jsonplaceholder.typicode.com/USERS',body,{headers:headers})
}




  getUsers():Observable<User>{

    const headers =new HttpHeaders({
      'content-type':'application/json',
      'authentificationToken': '123456'
    });

    const param1 =new HttpParams()
      .set('pageNum','10')
      .set('pageSize','100')
   

    return this.http.get<User>('https://jsonplaceholder.typicode.com/USERS',{headers:headers,params:param1})
     
  }





  //define the method    
  //  getUsers(){
  //   const users =[
  //     {userId:10, username:'youtube'},
  //     {userId:20 ,username :'instagram'},
  //   ];
  //   return users;
  //  }
}
  