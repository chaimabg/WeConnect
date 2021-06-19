import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ForgetPassComponent} from "../forget-pass/forget-pass.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router, private userService: UserService,private dialog: MatDialog) {
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
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };
    dialogConfig.height='550px';
    dialogConfig.width='550px';

    const dialogRef = this.dialog.open(ForgetPassComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }
}
