import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  public registerForm =  this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation : ['', Validators.required]
    });
  constructor(private fb: FormBuilder) { }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  get form() { return this.registerForm.controls; }
  ngOnInit(): void {
  }
 submit(): void{
    console.log(this.registerForm.value);
    console.log(this.registerForm.get('password')?.value);
 }
}
