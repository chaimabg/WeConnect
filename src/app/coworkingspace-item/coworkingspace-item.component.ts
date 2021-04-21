import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../models/Space';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coworkingspace-item',
  templateUrl: './coworkingspace-item.component.html',
  styleUrls: ['./coworkingspace-item.component.css']
})
export class CoworkingspaceItemComponent implements OnInit {
  @Input()
  space: Space = new Space;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
