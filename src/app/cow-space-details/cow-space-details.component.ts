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
  constructor(private spaceService: SpaceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //console.log('compo');
    this.getSpace(this.route.snapshot.params.get('id'));
  }

  getSpace(id:string):void{
    //console.log('getting');
    this.spaceService.getSpace(id).subscribe(data =>{
      this.space = data;
      console.log(this.space);
    })
  }

}
