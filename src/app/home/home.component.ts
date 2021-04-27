import { Component, OnInit } from '@angular/core';
import {UserConnectedService} from '../services/userConnected.service';
import {Space} from '../models/Space';
import {SpaceService} from '../services/space.service';
import {User} from '../models/User';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaces: Space[] = [];
 //user:any;
  constructor(private userService: UserConnectedService, private spaceService: SpaceService) {
  }
  getSpaces(): void{
    this.spaceService.getSpaces().subscribe((spaces: Space[]) => {
        this.spaces = spaces.slice(0,4);
      },
        (error: any) => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    this.getSpaces();

  }
 /* do(): void{
   console.log(localStorage.getItem('user'));
   this.user = JSON.parse( localStorage.getItem('user') as string)  ;
   console.log( this.user.username );
  }*/
}
