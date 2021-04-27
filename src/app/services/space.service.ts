import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http'
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
  getSpacesByQuery(query: string): Observable<Space[]> {
    return this.http.get<Space[]>(`${this.spacesUrl}/search/${query}`);
  }
  getSpace(id: string): Observable<Space>{
    console.log('fetching...');
    return this.http.get<Space>(`${this.spacesUrl}/${id}`);
  }
  postSpace(space:Space, pictures:File): Observable<any> {
    // return this.http.post<Space[]>(this.spacesUrl,space );
    const formData = new FormData();
    formData.append('pictures', pictures);
    formData.append('name',space.name);
   formData.append('location',space.location);
     formData.append('hourOpen',space.hourOpen.toString());
    formData.append('description',space.description);
   formData.append('hourClose',space.hourClose.toString());
   const header = new HttpHeaders();
   const params = new HttpParams();

   const options = {
     params,
     reportProgress: true,
     headers: header
   };
   const req = new HttpRequest('POST', this.spacesUrl, formData, options);
   return this.http.request(req);
  }

}
