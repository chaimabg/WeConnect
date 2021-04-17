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
  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.spaces = this.spaceService.getSpaces();

  }

}
