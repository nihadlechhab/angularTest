import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})
export class AdminDeleteComponent {
  constructor(private userService : UsersService){

  }
  deleteUser(){
    this.userService.deleteUser(1).subscribe(data =>{
      console.log('deleted succes'+data);
    });
  }
 

}
