import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library';
  userForm : FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
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
