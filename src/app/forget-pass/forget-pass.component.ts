import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Inject } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    @Inject(MAT_DIALOG_DATA) data:any) {
    this.state=false;
    this.email = data.description;
  }

  ngOnInit() {
    this.passForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],

    });
  }
  get form() :any {
    return this.passForm.controls;
  }
  save() {
    this.dialogRef.close(this.passForm.value.email);
  }


  close() {
    this.dialogRef.close();
  }

}
