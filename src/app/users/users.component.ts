import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  contacts$:any;
  users:any;
  usersStatus:any;
  listUsers$:any;
  userDetails:any;
  userMsg:any;
  constructor( private contactService :ContactsService){
    this.users=['nihad','malak','yasine','said'];
    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    new Observable(observer =>{

      setTimeout(() =>{
        observer.next('in progress');
      }, 2000);
      setTimeout(() =>{
        observer.next('pending');
      }, 4000);
      setTimeout(() =>{
        observer.next('Completed');
      }, 6000);
    }).subscribe(data=>{
      this.usersStatus=data;
    }, error =>
         {
      console.log('was an eroor')
         }
         );

    //exp3
    this.contactService.getUsers().subscribe(data=>{
      this.listUsers$=data; 

    })

    //topromise
    this.contactService.viewUsers().toPromise()
    .then(response=>{
      this.userDetails=response;
    })
    .catch(error =>{
      console.log('eroooor');
    })
    .finally(()=>{
      this.userMsg='user details loaded';
    })
    
  };


  
  

}
