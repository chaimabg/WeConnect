import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../models/Review';
import {HttpClient} from '@angular/common/http';
import {SpaceService} from "./space.service";
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  ReviewUrl = 'http://localhost:5000/review';
  reviews : any = [];
  r :any =[];
  constructor(private http: HttpClient,private spaceService: SpaceService) { }
  getReviews(): Observable<Review[]>{
   return this.http.get<Review[]>(`${this.ReviewUrl}`);
  }
  getReview(id: string): Observable<Review[]>{
    return this.http.get<Review[]>(`${this.ReviewUrl}/${id}`);
  }
  addReview(data: any ): void{
    this.http.post(`${this.ReviewUrl}/addReview`, data).toPromise().then(msg => {
      window.location.reload();
    });
  }
  modifyReview(reviews: Review[]) : any{
    reviews.forEach((item: any) => {
      this.spaceService.getSpace(item.workspace).subscribe(space =>{
        item.workspace = space.name;
      });

    });
    return reviews;
  }
}
