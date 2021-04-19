import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Space } from '../models/Space';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  spacesUrl:string = 'http://localhost:5000/spaces';
  constructor(private http: HttpClient) { }
  getSpaces(): Observable<Space[]> {
    return this.http.get<Space[]>(this.spacesUrl);
  }
  getSpace(id: string): Observable<Space>{
    console.log('fetching...');
    return this.http.get<Space>(`${this.spacesUrl}/${id}`);
  }

}
