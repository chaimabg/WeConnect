import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router, private userService: UserService) {
  }

  get form() {
    return this.loginForm.controls;
  }

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error!: string;

  ngOnInit(): void {
    const userConnected = this.userService.getConnectedUser();
    if (userConnected !== null) {
      this.router.navigateByUrl('/').then(r => {
      });
    }
  }

  onSubmit(): void {
    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.http.post('http://localhost:5000/login', data).toPromise().then((msg: any) => {
      this.error = msg.error;
      if (!this.error) {

        localStorage.setItem('users', JSON.stringify(msg));
        this.router.navigateByUrl('/').then(r => {
          window.location.reload();
        });

      }
    });
  }
}
