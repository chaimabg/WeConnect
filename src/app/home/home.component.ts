import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
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
  user!: User;
  style = {
    backgroundImage: 'space.pictures[0]'
  };
  constructor(private userService: UserService, private spaceService: SpaceService) {
  }
  getSpaces(): void{
    this.spaceService.getSpaces().subscribe((spaces: Space[]) => {
        this.spaces = spaces.slice(0, 4);
      },
        (error: any) => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    this.getSpaces();
  }

}
