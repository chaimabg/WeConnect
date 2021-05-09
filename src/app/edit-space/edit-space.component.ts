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
  picture: any;
  id!: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private spaceService: SpaceService) {
  }

  get form() {
    return this.editSpaceForm.controls;
  }
  public editSpaceForm = this.fb.group({
    name: ['', [Validators.required] ],
    location: ['', [Validators.required]],
    pictures: ['', [Validators.required]],
    hourOpen: [''],
    hourClose: [''],
    description: ['']
  });


  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
      console.log(this.picture);
    }
  }



  submit(): void {
  }


  ngOnInit(): void {

    console.log(this.space);

    this.spaceService.getSpace(this.route.snapshot.params._id).subscribe(data => {
      console.log(data);
      console.log("11111111111");
      this.space = data;
      console.log("2222222222222");
      console.log(this.space.name);

    });
    this.editSpaceForm.patchValue({
      name: this.space.name

    });

  }

  getSpace(id: string): any {
  this.spaceService.getSpace(id).subscribe(data => {
    console.log(data);
    return data;

    });
  }

}
