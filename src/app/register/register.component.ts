import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router, private snackBar: MatSnackBar) {
  }
  get form() { return this.registerForm.controls; }

  // @ts-ignore
  public registerForm =  this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation : ['', Validators.required]
    });
   error: any;
   user: any;
  ngOnInit(): void {
  }
 submit(): void{
    const data = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      address: this.registerForm.value.address,
      phoneNumber: this.registerForm.value.phone,
      password: this.registerForm.value.password
    };
    this.http.post('http://localhost:5000/signup', data).toPromise().then((msg: any) => {
      this.error = msg.error;
      this.user = msg.username;
      if ( !this.error){
        const snack = this.snackBar.open('✔ ' + this.user + ', You have signed up succesfully', 'login', {
          duration: 3000,
          verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          panelClass: 'test'
        });
        snack.onAction().subscribe(() => {
          this.router.navigateByUrl('/login').then(r => {});
        });
      }
    });
 }
}
