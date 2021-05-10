import {Component, Input, OnInit} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {Review} from '../models/Review';
import {Space} from '../models/Space';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {
  currentRate = 0;
  // tslint:disable-next-line:new-parens
  @Input() space: Space = new Space;
  reviews: Review[] = [];
  connectedUser!: User;

  constructor(config: NgbRatingConfig, private  fb: FormBuilder, private httpClient: HttpClient,
              private reviewService: ReviewService, private userService: UserService ) {
    config.max = 5;
    this.connectedUser = userService.getConnectedUser();
  }

  reviewForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      rating: [''],
      review: ['', Validators.required]
    }
  );

  get form(): any {return this.reviewForm.controls;}

  getReviews(): void{
    this.reviewService.getReview(this.space._id).subscribe(reviews => {
        this.reviews = reviews;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.getReviews();
  }

  // tslint:disable-next-line:typedef
  onRate($event: number) {
    this.currentRate = $event;
  }

  submit(): void {
    const review = {
      name: this.connectedUser ? this.connectedUser.username : this.reviewForm.value.name,
      review: this.reviewForm.value.review,
      rating: this.currentRate,
      email: this.connectedUser ? this.connectedUser.email : this.reviewForm.value.email,
      workspace: this.space._id,
    };
    this.reviewService.addReview(review);
  }

}
