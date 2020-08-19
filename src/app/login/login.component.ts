import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup;

  constructor(private fb: FormBuilder){ 

  }

  ngOnInit(): void{
    this.initializeForm();
  }

  initializeForm(): void{
    this.userForm = this.fb.group({
      email : '',
      password : ''
    });
  }

  onSubmit(): void{
    console.log(this.userForm);
  }
  

}
