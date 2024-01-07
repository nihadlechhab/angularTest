import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  firstname: any = ''; // Initialize it as an empty string
  terms:boolean=false;
  custype:string ='';
  constructor(private usersService:UsersService){ }

  //define function use when you submit form
  addForm(formValue:NgForm){
   console.log(formValue.value);

   const postBody={
    title: formValue.value.firstname,
    body: formValue.value.custype,
   };

   //console.log(postBody)
   this.usersService.addUser(postBody).subscribe(data =>
    {
      console.log(data);
    },(err)=>{

    console.log('unable to ADD USER')
   });
  }
  resetForm(formValue:NgForm){
    formValue.reset();
    // or formValue.resetForm();
  }

  loadValues(formValue:NgForm){

    let userDetails={
      firstname:'niahd',
      terms:false,
      custype:'1',
    }
    formValue.setValue(userDetails);
  }


}
