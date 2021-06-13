import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  error: any;
  private resetToken: any;
  CurrentState!: string;
  userId:any;
  constructor(private fb: FormBuilder, private userService: UserService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router,) {

    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log("token :"+this.resetToken);
      this.VerifyToken();
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  // @ts-ignore
  public registerForm = this.fb.group({
    password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
    passwordConfirmation: ['', Validators.required]
  });

  ngOnInit(): void {
  }
  submit(): void {
    const data = {
     _id : this.userId,
      password: this.registerForm.value.password
    };
console.log(data);
    this.http.put('http://localhost:5000/user/resetPassword', data).toPromise().then((msg: any) => {
      this.error = msg.error;
      console.log(msg);
      if (!this.error) {
        this.router.navigateByUrl('/login');

      }
    });

  }

  private VerifyToken() {
    const data = {
      resetToken : this.resetToken,
    };
    this.http.post('http://localhost:5000/user/validateToken',data).toPromise().then((msg: any) => {
      this.error = msg.error;
      console.log("vverify :"+this.error);
      if (!this.error) {
       this.CurrentState="validate";
       this.userId = msg._id;
      }
    });
  }
}
