import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../models/Review';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  ReviewUrl = 'http://localhost:5000/review';
  constructor(private http: HttpClient) { }
  getReviews(): Observable<Review[]>{
    console.log('fetching...');
    return this.http.get<Review[]>(`${this.ReviewUrl}`);
  }
  getReview(id: string): Observable<Review[]>{
    console.log('fetching...');
    return this.http.get<Review[]>(`${this.ReviewUrl}/${id}`);
  }
  addReview(data: any ): void{
    this.http.post(`${this.ReviewUrl}/addReview`, data).toPromise().then(msg => {
      window.location.reload();
    });
  }
}
