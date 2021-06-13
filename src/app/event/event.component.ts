import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../services/event.service";
import {Space} from "../models/Space";
import {Event} from "../models/Event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() space: Space = new Space;
   events : any;
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
   this.eventService.getSpaceEvents(this.space._id).subscribe(events =>
     this.events =events
   );
  }

}
