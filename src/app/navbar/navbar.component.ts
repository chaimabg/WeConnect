import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 token: any;
  constructor(private router: Router,private userService:UserService) { }



  ngOnInit(): void {
    this.token = localStorage.getItem('users');
  }
  signout(): void{
    this.userService.logout();
  }



}
