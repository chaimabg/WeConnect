import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../models/Space';

@Component({
  selector: 'app-coworkingspace-item',
  templateUrl: './coworkingspace-item.component.html',
  styleUrls: ['./coworkingspace-item.component.css']
})
export class CoworkingspaceItemComponent implements OnInit {
  @Input()
  space: Space = new Space;
  constructor() { }

  ngOnInit(): void {
  }

}
