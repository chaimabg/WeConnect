import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  passForm!: FormGroup ;
  email!:string;
  state!: boolean;
  user !:User;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private http:HttpClient,
    private userService:UserService) {
    this.state=false;
    this.email = data.description;
  }
  error !:string;
  ngOnInit() {
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern('^.{5,}$')]],
      passwordConfirmation: ['', Validators.required]

    });
    this.user=this.userService.getConnectedUser();
  }
  get form() :any {
    return this.passForm.controls;
  }
  save() {

    const data ={
      _id : this.user._id,
      password: this.passForm.value.password
    };
    console.log(data);
    this.http.put("http://localhost:5000/user/resetPassword",data).toPromise().then((msg:any) =>{
      this.error = msg.error;
      if (!this.error) {
        this.dialogRef.close(this.passForm.value.password);
      }
    });

  }


  close() {
    this.dialogRef.close();
  }


}
