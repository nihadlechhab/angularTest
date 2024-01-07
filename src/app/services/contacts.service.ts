import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getUsers() : Observable<object >{
    return this.http.get('https://jsonplaceholder.typicode.com/USERS/');
  }
  viewUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/USERS/');
  }
}
