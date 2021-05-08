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
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private spaceService: SpaceService) {
  }

  get form() {
    return this.editSpaceForm.controls;
  }
  public editSpaceForm = this.fb.group({
    name: ['', [Validators.required] ],
    location: ['', [Validators.required]],
    pictures: ['',[Validators.required]],
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
    else{
      this.picture = this.space.pictures[0];
    }
  }



  submit(): void {
    const formData = new FormData();
    formData.append('pictures', this.picture);

    const  data = {
      name: this.editSpaceForm.value.name,
      location: this.editSpaceForm.value.location,
      hourOpen: this.editSpaceForm.value.hourOpen,
      hourClose: this.editSpaceForm.value.hourClose,
      description: this.editSpaceForm.value.description,
      pictures: formData,
      _id: this.space._id
    };
    console.log(this.space._id);


    this.spaceService.updateSpace(data, this.picture).subscribe(res => {
      console.log(res);
      this.submitted = true;
    }, (err: any) => {
      this.error= err;
      console.log(err);
    });
    if ( !this.error){
      this.router.navigateByUrl('/profile').then(r => {});
    }
  }





  ngOnInit(): void {

    console.log(this.space);

    this.spaceService.getSpace(this.route.snapshot.params._id).subscribe(data => {
      console.log(data);
      this.space = data;
      this.editSpaceForm.patchValue({
        name: this.space.name,
        location: this.space.location,
        hourOpen: this.space.hourOpen.toString().substring(11,16),
        hourClose: this.space.hourClose.toString().substring(11,16),
        description: this.space.description

      });
    });


  }



}
