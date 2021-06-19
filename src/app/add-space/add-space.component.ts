import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { SpaceService } from '../services/space.service';
import { Space } from '../models/Space';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.component.html',
  styleUrls: ['./add-space.component.css']
})
export class AddSpaceComponent implements OnInit {
  user = this.userService.getConnectedUser();

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
              private spaceService:SpaceService,private userService:UserService) { }
  get form() { return this.addSpaceForm.controls; }

  public addSpaceForm =  this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    latitudeMap:[''],
    longitudeMap:[''],
    pictures: ['', [Validators.required]],
    hourOpen: [''],
    hourClose: [''],
    description : [''],
    capacity: ['', Validators.required],
    });
   error: any;
   space: Space = new Space;
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
    const  data = {
      name: this.addSpaceForm.value.name,
      location: this.addSpaceForm.value.location,
      latitudeMap: this.addSpaceForm.value.latitudeMap,
      longitudeMap: this.addSpaceForm.value.longitudeMap,
      hourOpen: this.addSpaceForm.value.hourOpen,
      hourClose: this.addSpaceForm.value.hourClose,
      description: this.addSpaceForm.value.description,
      capacity: this.addSpaceForm.value.capacity,
      pictures: formData
    };

    this.space.name = data.name;
    this.space.location = data.location;
    this.space.latitudeMap = data.latitudeMap;
    this.space.longitudeMap = data.longitudeMap;
    this.space.hourClose = data.hourClose;
    this.space.hourOpen = data.hourOpen;
    this.space.description = data.description;
    this.space.capacity = data.capacity;

    console.log(this.space);

    this.spaceService.spaceToAdd = this.space;
    this.spaceService.pictureToAdd = this.picture;
    this.spaceService.userId = this.user._id;
    this.router.navigateByUrl('/payment').then(r => {});
    // this.spaceService.postSpace(this.space,user._id,this.picture).subscribe(res => {
    //   console.log(res);
    //    this.submitted = true;
    // },(err: any) => {
    //   console.log(err);
    // });
    // if ( !this.error){
    //   this.router.navigateByUrl('/coworkingspaces').then(r => {});
    // }

  }


  ngOnInit(): void {

    if (this.user === null){
      this.router.navigateByUrl('/login').then(r => {
      });
    }

  }

}
