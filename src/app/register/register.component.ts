import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm =  this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    passwordConfirmation : ['', Validators.required]
    });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
 submit(): void{
    console.log(this.registerForm.value);
 }
}
