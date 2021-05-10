import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 token!: User;
  constructor(private router: Router,private userService:UserService) { }



  ngOnInit(): void {
    this.token = this.userService.getConnectedUser();
  }
  signout(): void{
    this.userService.logout();
  }



}
