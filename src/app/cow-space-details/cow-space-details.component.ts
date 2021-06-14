import { Component, OnInit } from '@angular/core';
import { Space } from '../models/Space';
import { SpaceService } from '../services/space.service'
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ReservationService} from '../services/reservation.service';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEventComponent} from "../add-event/add-event.component";
import {EventService} from "../services/event.service";


@Component({
  selector: 'app-cow-space-details',
  templateUrl: './cow-space-details.component.html',
  styleUrls: ['./cow-space-details.component.css']
})
export class CowSpaceDetailsComponent implements OnInit {
  space: Space = new Space;
  id!: string;
  idd: any;
  all: any;
  nulle: any;
  tab: any [] = [];
  error: any;
  user!: User;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient,
              private router: Router, private spaceService: SpaceService, private reservationService: ReservationService
    , private userService: UserService, config: NgbRatingConfig, private dialog: MatDialog,
              private eventService:EventService) {
    this.user = this.userService.getConnectedUser();
    config.max = 5;
  }

  get form() {
    return this.ReservationForm.controls;
  }

  public ReservationForm = this.fb.group({
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    guests: ['', [Validators.required]],
    number: [''],
    AllSpace: ['']
  });


  submit(): void {
    if (this.ReservationForm.value.number === "") {
      this.nulle = null;
    } else {
      this.nulle = new String('2021-04-18T').concat(this.ReservationForm.value.number.toString());
    }
    if (this.ReservationForm.value.AllSpace === "") {
      this.all = false;
    } else {
      this.all = this.ReservationForm.value.AllSpace
    }
    const diff = this.tab[0]['capacity'] - this.tab[0]['exists'];
    if (this.tab[0]['exists'] < this.tab[0]['capacity']) {
      if (diff > this.ReservationForm.value.guests) {
        const data = {
          date: this.ReservationForm.value.date.concat(new String('T20:20')),
          time: new String('2021-04-18T').concat(this.ReservationForm.value.time.toString()),
          guests: this.ReservationForm.value.guests,
          NumberOfHours: this.nulle,
          AllSpace: this.all,
          spaceId: this.space._id
        };
        console.log("dataaa", data);

        this.reservationService.createReservation(data).subscribe(res => {
          console.log("res", res);
        }, (err: any) => {
          this.error = err;
          console.log("er", err);
        });
      } else {
        this.error = "There are only " + diff + " places left !";
      }
      if (!this.error) {
        this.router.navigateByUrl('/coworkingspaces').then(r => {
        });
      }
    } else {
      this.error = 'this space is full';
    }

  }


  ngOnInit(): void {
    this.idd = this.route.snapshot.params._id;
    this.reservationService.getSpace(this.idd).subscribe(res => {
      this.tab = res;
    });
    this.getSpace(this.route.snapshot.params._id);

  }

  getSpace(id: string): void {
    this.spaceService.getSpace(id).subscribe(data => {
      this.space = data;
    })
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {spaceID : this.space._id};
    dialogConfig.height = '650px';
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddEventComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }
}
