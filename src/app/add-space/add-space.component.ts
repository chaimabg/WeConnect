import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { SpaceService } from '../services/space.service';
import { Space } from '../models/Space';


@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.component.html',
  styleUrls: ['./add-space.component.css']
})
export class AddSpaceComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private spaceService:SpaceService) { }
  get form() { return this.addSpaceForm.controls; }

  public addSpaceForm =  this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    pictures: ['', [Validators.required]],
    hourOpen: [''],
    hourClose: [''],
    description : ['']
    });
   error: any;
   space:Space = new Space;
   picture:any;
   submitted: boolean = false;
   selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
      console.log(this.picture);
    }
  }
   submit(): void{
    const formData = new FormData();
    formData.append('pictures', this.picture);
    const user = JSON.parse(localStorage.getItem('users') as string);
    const  data = {
      name: this.addSpaceForm.value.name,
      location: this.addSpaceForm.value.location,
      hourOpen: this.addSpaceForm.value.hourOpen,
      hourClose: this.addSpaceForm.value.hourClose,
      description: this.addSpaceForm.value.description,
      pictures: formData
    };

    this.space.name = data.name;
    this.space.location = data.location;
    this.space.hourClose = data.hourClose;
    this.space.hourOpen = data.hourOpen;
    this.space.description = data.description;
    console.log(this.space);
    this.spaceService.postSpace(this.space,user.id,this.picture).subscribe(res => {
      console.log(res);
       this.submitted = true;
    },(err: any) => {
      console.log(err);
    });
    if ( !this.error){
      this.router.navigateByUrl('/coworkingspaces').then(r => {});
    }
  }


  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('users') as string);
    if (user === null){
      this.router.navigateByUrl('/login').then(r => {
      });
    }

  }

}
