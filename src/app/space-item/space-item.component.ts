import {Component, Input, OnInit} from '@angular/core';
import {Space} from '../models/Space';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceService} from "../services/space.service";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.css']
})
export class SpaceItemComponent implements OnInit {
  error: any;
  err: any;
  success: any;
  picture: any;

  id: any;
  submitted: boolean = false;
  @Input()
  space: Space = new Space;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private spaceService: SpaceService) {
  }
  ngOnInit(): void {
  }





  get form() {
    return this.editPictureSpaceForm.controls;
  }
  public editPictureSpaceForm = this.fb.group({
    pictures: ['', [Validators.required] ],


  });

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
      console.log(this.picture);
    }
  }


  delete(id: string): void {
    this.spaceService.delete(id).subscribe(msg => {
      this.error= msg.error;
      console.log(msg);
      if (!this.error) {
        this.router.navigateByUrl('/coworkingspaces');
      }
    });
  }
  myfunction(id: any): void {
   this.id=id;

  }

  submit(): void {


    const  data = {
      pictures: this.picture,

    };
    console.log("data",data)
    this.spaceService.updatePicture(data).subscribe(res => {
      console.log(res);
      this.submitted = true;
      this.success = 'picture uploaded successfully';
     /* window.location.reload();*/

      this.picture= '';
    }, (err: any) => {
      this.err = err;
      console.log(err);
    });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")

  }



}

