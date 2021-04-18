import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormBuilder, FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    username : ['', Validators.required ],
    password :['', Validators.required ]
 });
  constructor(private fb: FormBuilder) {}
  userModel = new User('', '');

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
