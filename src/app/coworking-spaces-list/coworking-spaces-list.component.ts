import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-coworking-spaces-list',
  templateUrl: './coworking-spaces-list.component.html',
  styleUrls: ['./coworking-spaces-list.component.css']
})
export class CoworkingSpacesListComponent implements OnInit {
  config = {
    id: 'custom',
    itemsPerPage: 9,
    currentPage: 1,
    totalItems: 0
  };
  spaces: Space[] = [];

  page: number = 1;
  maxSize: number = 1;
  isLoading = true;
  constructor(private spaceService: SpaceService, private userService: UserService) { }
  // public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  getSpaces(): void{
    this.spaceService.getSpaces().subscribe(spaces => {
      this.spaces = spaces;
      this.isLoading = false;
      this.config.totalItems = this.spaces.length;
    },
    error => {
      this.isLoading = true;
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getSpaces();
  }

  search(query: any): void{
    if ((query.target as HTMLInputElement).value === ''){
      this.getSpaces();
    }else{
      this.spaceService.getSpacesByQuery((query.target as HTMLInputElement).value).subscribe(data => {
        this.spaces = data;
        this.isLoading = false;
        this.config.totalItems = this.spaces.length;

      });
    }

  }

  onSubmit(): void {
  }
  onPageChange(event: any): void {
    console.log(event);
    this.config.currentPage = event;
  }




}
