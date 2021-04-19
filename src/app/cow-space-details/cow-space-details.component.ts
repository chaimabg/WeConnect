import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cow-space-details',
  templateUrl: './cow-space-details.component.html',
  styleUrls: ['./cow-space-details.component.css']
})
export class CowSpaceDetailsComponent implements OnInit {
  space!: Space;
  id!: string;
  constructor(private spaceService: SpaceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getSpace(this.route.snapshot.params._id);
  }

  getSpace(id:string):void{
    this.spaceService.getSpace(id).subscribe(data =>{
      this.space = data;
    })
  }

}
