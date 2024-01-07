import { Component, OnInit, SimpleChange } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  {


  addLoanTypesForm : FormGroup =new FormGroup({
   
  })  

//-------values change----

trackLoanName():void{
  //=== capture all filed in form
  //this.addLoanTypesForm.valueChanges.subscribe(data=>{console.log(data);});
  // console.log("value change");
  //=== but thid capture only one field
  this.addLoanTypesForm.get('loanName')?.statusChanges.subscribe(data=>{console.log(data);});
 

}

// From array-------



  constructor( private fb : FormBuilder)
  {



    let users  =new FormArray([
      new FormControl('ARCA'),
      new FormControl('tutorials'),
 
 
   ]);

   console.log(users);
   console.log(users.value);
 
    // this.addLoanTypesForm=new FormGroup({
    //   'loanName': new FormControl(),
    //   'loanDesciption':new FormControl(),


    // });

    

    //diract way to set values 
    this.addLoanTypesForm=this.fb.group({
      'loanName': new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
      ])),
      'loanDesciption':new FormControl('',Validators.required),

    //   'users':new FormArray([
    //     new FormControl('ARCA'),
    //     new FormControl('tutorials'),
    //  ])

    /*second method*/
    'users':new FormArray([
      this.fb.group({
        'name': new FormControl(''),
        'age': new FormControl(''),
        'departement': new FormControl(''),
      })

    ])

    });
   
    
  //this is another way to settings values of form
    //   this.addLoanTypesForm=this.fb.group({
    //     'loanName': new FormControl(),
    //     'loanDesciption':new FormControl(),
  
    //   })
    //   const newLoanObj ={
    //     //'loanName': 'my loan',
    //     'loanDesciption':'this is for me and diha frask w diha f qaraj d khrak ok safi iwa mxi tb3as ila fik xi n3as '
    //   }
    //   // this.addLoanTypesForm.setValue(newLoanObj);      // should pass all values    
    //   this.addLoanTypesForm.patchValue(newLoanObj);    // not necessary to pass al values     
    
    }

  loanType(){
    //get all values forms
    //console.log(this.addLoanTypesForm.value)
    //get values specific
    // console.log(this.addLoanTypesForm.get('loanName')?.value ?? 'Default Value');
    console.log(this.addLoanTypesForm.valid);
    console.log(this.addLoanTypesForm.invalid);
    console.log(this.addLoanTypesForm.pending);
    console.log(this.addLoanTypesForm.pristine);
    console.log(this.addLoanTypesForm.dirty);
    console.log(this.addLoanTypesForm.touched);
    console.log(this.addLoanTypesForm.untouched);

    //
    //console.log(this.addLoanTypesForm.value)
  }
  
  //form array 
  //add new input forms vide
  get users():FormArray{
    return this.addLoanTypesForm.get('users') as FormArray;
  }
   addUser(){
    let userArray= this.users;
    let newUser = this.fb.group({
      'name':'',
      'age':'',
      'departement':'',
    }) ;
    userArray.push(newUser);
   }
//remove ligne of column in the form
   removeUser(i:any){
    let arr=this.addLoanTypesForm.get('users') as FormArray;
    arr.removeAt(i);

   }

   // when you put some data in one input form 
   //the next who have this function will be assigned automaticly
  assigndept(i:any){
    let arr =this.addLoanTypesForm.get('users') as FormArray;
    let values= arr.value;
    arr.value[i].departement='CSE';
    this.users.setValue(arr.value);

   }
  getUsersControls():AbstractControl[]{
    return (this.addLoanTypesForm.get('users') as FormArray).controls;
  }


}
