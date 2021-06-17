import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  added:string = this.spaceService.submitted;
  filters = '';
  page: number = 1;
  maxSize: number = 1;
  isLoading!:boolean;
  constructor(private fb: FormBuilder,private spaceService: SpaceService, private userService: UserService) { }
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
  public filterForm = this.fb.group({
    location: [''],
    hourOpen: [''],
    hourClose: [''],
  });
  getSpaces(): void{
    this.isLoading = true;
    this.spaceService.getSpaces().subscribe(spaces => {
      this.spaces = spaces;
      this.isLoading = false;
      this.config.totalItems = this.spaces.length;
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getSpaces();
    this.clear();
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
  addFilter(): void{
    const data = {
      "location": this.filterForm.value.location,
      "hourOpen": this.filterForm.value.hourOpen,
      "hourClose": this.filterForm.value.hourClose
    }
    console.log(data);
    for (let [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
      if(this.filters == ''){
        if (value != ''){
          this.filters = ((this.filters.concat(key).concat("="))).concat(value) ;
        }
      }else{
        if (value != ''){
          this.filters = (((this.filters.concat("&")).concat(key).concat("="))).concat(value);
        }
      }
    }
    this.spaceService.filterSpaces(this.filters).subscribe(data => {
      this.spaces = data;
      this.isLoading = false;
      this.config.totalItems = this.spaces.length;

    });
    this.filters='';
    //this.filterForm.reset();
  }
  clear(): void{
    this.spaceService.submitted = null;
  }

  onSubmit(): void {
  }
  onPageChange(event: any): void {
    console.log(event);
    this.config.currentPage = event;
  }




}
