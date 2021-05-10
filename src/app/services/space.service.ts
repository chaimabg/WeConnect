import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Space } from '../models/Space';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})

export class SpaceService {
  error: any;
spaceToAdd: Space = new Space;
pictureToAdd!: File ;
userId! : string ;
submitted!: any;
  spacesUrl = 'http://localhost:5000/spaces';
  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }
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

  postSpace(space:Space, userId:string, pictures:File): Observable<any> {
    // return this.http.post<Space[]>(this.spacesUrl,space );
    const formData = new FormData();
  formData.append('pictures', pictures);
  formData.append('name',space.name);
  formData.append('location',space.location);
  formData.append('hourOpen',new String ("2021-04-18T").concat(space.hourOpen.toString()));
  formData.append('description',space.description);
  formData.append('hourClose',new String ("2021-04-18T").concat(space.hourClose.toString()));
  formData.append('userId',userId);
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
  updateSpace(space: any): Observable<any> {
    return this.http.put<Space>('http://localhost:5000/updateSpace', space);
  }
  updatePicture(data:any ): Observable<any>{
    const formData = new FormData();
    formData.append('pictures', data.pictures);
    formData.append('_id', data._id);
    const header = new HttpHeaders();
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('PUT', this.spacesUrl, formData, options);
    return this.http.request(req);
  }
 delete(spaceId: any): Observable<any>{
     return this.http.delete<Space>(`${this.spacesUrl}/${spaceId}`);
}
}
