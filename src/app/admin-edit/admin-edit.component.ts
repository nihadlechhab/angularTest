import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent {
  constructor(private userService : UsersService){
    this.userService.updateUser();
  }
}
