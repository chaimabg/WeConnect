import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register', templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;
  user: any;

  constructor(private fb: FormBuilder, private userService: UserService,
              private http: HttpClient, private snackBar: MatSnackBar, private router: Router,) {
  }

  get form() {
    return this.registerForm.controls;
  }

  // @ts-ignore
  public registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation: ['', Validators.required]
  });


  ngOnInit(): void {
    const userConnected = this.userService.getConnectedUser();
    if (userConnected !== null) {
      this.router.navigateByUrl('/').then(r => {
      });
    }
  }

  submit(): void {
    const data = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      address: this.registerForm.value.address,
      phoneNumber: this.registerForm.value.phone,
      password: this.registerForm.value.password
    };

    this.http.post('http://localhost:5000/user/signup', data).toPromise().then((msg: any) => {
      this.error = msg.error;
      console.log(msg);
      if (!this.error) {
        const snack = this.snackBar.open('✔ ' + msg.username + ', You have signed up succesfully', 'login', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: 'test'
        });
        snack.onAction().subscribe(() => {
          this.router.navigateByUrl('/login').then(r => {
          });
        });
      }
    });

  }

}
