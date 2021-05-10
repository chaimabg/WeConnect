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
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  space: Space = new Space;
  id!: string;
  constructor(private spaceService: SpaceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getSpace(this.route.snapshot.params._id);
    //if (this.space == null) this.router.navigateByUrl('/404NOTFOUND').then(r => {});
    // if (this.space.pictures != null && this.space.pictures != undefined) {}console.log(this.space.pictures);
  }

  getSpace(id:string):void{
    this.spaceService.getSpace(id).subscribe(data =>{
      this.space = data;
      console.log(this.space);
    })
  }

}
