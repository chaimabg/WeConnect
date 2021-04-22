import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service';

@Component({
  selector: 'app-coworking-spaces-list',
  templateUrl: './coworking-spaces-list.component.html',
  styleUrls: ['./coworking-spaces-list.component.css']
})
export class CoworkingSpacesListComponent implements OnInit {
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: 0
  };
  spaces: Space[] = [];
  page: Number=1;
  maxSize: Number = 1;
  isLoading: boolean = true;
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
  constructor(private spaceService: SpaceService) { }

  getSpaces(): void{
    this.spaceService.getSpaces().subscribe(spaces => {
      this.spaces = spaces;
      this.isLoading = false;
      this.config.totalItems = this.spaces.length;
    },
    error =>{
      this.isLoading = true;
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getSpaces();
  }

  search(query: any): void{
    if ((<HTMLInputElement>query.target).value == ""){
      this.getSpaces();
    }else{
      this.spaceService.getSpacesByQuery((<HTMLInputElement>query.target).value).subscribe(data=>{
        this.spaces = data;
        this.isLoading = false;
        this.config.totalItems = this.spaces.length;

      });
    }

  }
  onPageChange(event:any){
    console.log(event);
    this.config.currentPage = event;
  }

  onSubmit (){
  }

}
