import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 token: any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }
  signout(): void{
    localStorage.removeItem('token');
  }

}
