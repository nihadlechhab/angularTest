import { Component } from '@angular/core';
//we import service in my component 
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent   {
  users:any;
  //create instance of service in constructor 
   constructor(private usersService:UsersService){ 
  //  // call the method using the instance of the service
    this.usersService.getUsers().subscribe(data=>{
      console.log(data)
      this.users=data;
    });
  }
  //


}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

