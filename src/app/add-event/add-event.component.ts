import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {EventService} from "../services/event.service";

export interface DialogData {
  spaceID: string;
}
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm!: FormGroup ;
  state!: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData,
    private http:HttpClient,
    private eventService:EventService) {
    this.state=false;
  }
  error !:string;
  ngOnInit() {
    this.eventForm = this.fb.group({
      name :['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description :['', [Validators.required]],
    });

  }
  get form() :any {
    return this.eventForm.controls;
  }
  save(){

    const event ={
      name : this.eventForm.value.name,
      description : this.eventForm.value.description,
      date: this.eventForm.value.date.concat(new String('T20:20')),
      time: new String('2021-04-18T').concat(this.eventForm.value.time.toString()),
      workspace:this.data.spaceID,

    };
    console.log(event);
    this.eventService.postEvent(event).subscribe(event => console.log(event)
    );
    this.close();

  }


  close() {
    this.dialogRef.close();
  }


}
