import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceService} from '../services/space.service';
import {Space} from '../models/Space';

@Component({
  selector: 'app-edit-space',
  templateUrl: './edit-space.component.html',
  styleUrls: ['./edit-space.component.css']
})
export class EditSpaceComponent implements OnInit {
  error: any;
  space: any;

  id!: string;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private spaceService: SpaceService) {
  }

  get form() {
    return this.editSpaceForm.controls;
  }
  public editSpaceForm = this.fb.group({
    name: ['', [Validators.required] ],
    location: ['', [Validators.required]],
    hourOpen: [''],
    hourClose: [''],
    description: ['']
  });





  submit(): void {

    const  data = {
      name: this.editSpaceForm.value.name,
      location: this.editSpaceForm.value.location,
      hourOpen: new String ('2021-04-18T').concat(this.editSpaceForm.value.hourOpen.toString()),
      hourClose: new String ('2021-04-18T').concat(this.editSpaceForm.value.hourClose.toString()),
      description: this.editSpaceForm.value.description,

      spaceId: this.space._id
    };



    this.spaceService.updateSpace(data).subscribe(res => {
      console.log("hhhhhhhhhhhhhhhhhhhh",res);

      this.submitted = true;
    }, (err: any) => {
      this.error = err;
      console.log("errrrrrrrrrrrrrrrrr",err);
    });
    if ( !this.error){
      this.router.navigateByUrl('/coworkingspaces').then(r => {});
    }
  }





  ngOnInit(): void {


    this.spaceService.getSpace(this.route.snapshot.params._id).subscribe(data => {

      this.space = data;
      this.editSpaceForm.patchValue({
        name: this.space.name,
        location: this.space.location,
        hourOpen: this.space.hourOpen.toString().substring(11, 16),
        hourClose: this.space.hourClose.toString().substring(11, 16),
        description: this.space.description

      });
    });


  }



}
