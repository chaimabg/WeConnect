import {Component, Input, OnInit} from '@angular/core';
import {Space} from '../models/Space';
import {Router} from '@angular/router';

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.css']
})
export class SpaceItemComponent implements OnInit {

  @Input()
  space: Space = new Space;
  constructor(private router: Router) { } @Input()

  ngOnInit(): void {
  }

}
