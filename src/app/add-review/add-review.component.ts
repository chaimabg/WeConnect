import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {Review} from '../models/Review';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  currentRate = 5;
  reviews: Review[] = [
    {
      email: 'ppp@aa',
    name: 'Damon Salvator',
    date: '27 Aug 2019',
    rating: 5,
    review: 'Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu'
  },
    {
      email: 'hhh@hh',
      name: 'Stefen Salvator',
      date: '2 Aug 2019',
      rating: 3,
      review: 'Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu'
    }
  ];
  constructor(config: NgbRatingConfig, private  fb: FormBuilder) {
    config.max = 5;
  }
  reviewForm = this.fb.group({
    name : [' ', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    rating: [''],
    review: ['', Validators.required]
    }
  );
  getForm(): any{ return this.reviewForm.controls; }
  ngOnInit(): void {
  }
  submit(): void{
    console.log(this.reviewForm.value);
  }


}
