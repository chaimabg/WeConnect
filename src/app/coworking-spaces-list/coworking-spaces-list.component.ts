import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service'

@Component({
  selector: 'app-coworking-spaces-list',
  templateUrl: './coworking-spaces-list.component.html',
  styleUrls: ['./coworking-spaces-list.component.css']
})
export class CoworkingSpacesListComponent implements OnInit {
  spaces: Space[] = [];
  page: Number=1;
  maxSize: Number = 1;
  isLoading: boolean = true;
  constructor(private spaceService: SpaceService) { }

  getSpaces(): void{
    this.spaceService.getSpaces().subscribe(spaces => {
      this.spaces = spaces;
      this.isLoading = false;
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
    if ((<HTMLInputElement>query.target).value == null){
      this.getSpaces();
    }else{
      this.spaceService.getSpacesByQuery((<HTMLInputElement>query.target).value).subscribe(data=>{
        this.spaces = data;
        this.isLoading = false;
      });
    }

  }

  onSubmit (){
  }

}
