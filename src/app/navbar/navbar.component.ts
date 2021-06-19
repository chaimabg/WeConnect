import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ForgetPassComponent} from "../forget-pass/forget-pass.component";
import {EditPasswordComponent} from "../edit-password/edit-password.component";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 token!: User;
  constructor(private router: Router,private userService:UserService,private dialog: MatDialog) { }



  ngOnInit(): void {
    this.token = this.userService.getConnectedUser();
  }
  signout(): void{
    this.userService.logout();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};
    dialogConfig.height='520px';
    dialogConfig.width='420px';

    const dialogRef = this.dialog.open(EditPasswordComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}
