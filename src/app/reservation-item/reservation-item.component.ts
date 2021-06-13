import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Reservation} from "../models/Reservation";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  error:any;
  @Input()
  reservation: Reservation = new Reservation;
  constructor(private router: Router,private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  delete(id: string): void {
    this.reservationService.delete(id).subscribe(msg => {
      this.error = msg.error;
      console.log(msg);
      if (!this.error) {
        window.location.reload();
      }
    });
  }





}
