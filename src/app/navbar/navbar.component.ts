import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 token: any;
  constructor(private router: Router) { }



  ngOnInit(): void {
    this.token = localStorage.getItem('users');

  }



  signout(): void{

    localStorage.removeItem('users');
    this.router.navigateByUrl('/').then(r => {
      window.location.reload();
    });  }


}
