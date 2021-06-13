import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  passForm!: FormGroup ;
  email!:string;
  state!: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ForgetPassComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private http:HttpClient) {
    this.state=false;
    this.email = data.description;
  }
 error !:string;
  ngOnInit() {
    this.passForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],

    });
  }
  get form() :any {
    return this.passForm.controls;
  }
  save() {

    const data ={
      email : this.passForm.value.email
    };
    console.log(data);
    this.http.post("http://localhost:5000/user/sendEmail",data).toPromise().then((msg:any) =>{
      this.error = msg.error;
      if (!this.error) {
        this.dialogRef.close(this.passForm.value.email);
      }
    });

  }


  close() {
    this.dialogRef.close();
  }

}
