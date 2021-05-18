import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Space } from '../models/Space';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl = 'http://localhost:5000/reservations';
  constructor(private http: HttpClient, private router: Router) { }
  getSpace(id: string ): Observable<any>{
    console.log('fetching...');
    return this.http.get<any>(`${this.reservationUrl}/${id}`);
  }
  createReservation(reservation: any): Observable<any> {
    return this.http.post<Space>('http://localhost:5000/reservations', reservation);
  }




}
