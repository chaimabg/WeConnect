import {Component, Input, OnInit} from '@angular/core';
import {Space} from '../models/Space';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceService} from "../services/space.service";

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.css']
})
export class SpaceItemComponent implements OnInit {
  error: any;

  @Input()
  space: Space = new Space;

  constructor(private router: Router,private spaceService: SpaceService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  delete(id: string): void {
    this.spaceService.delete(id).subscribe(msg => {
      this.error=msg.error;
      console.log(msg);
      if (!this.error) {
        this.router.navigateByUrl('/coworkingspaces').then(r => {
        });
      }
    });
  }
}
