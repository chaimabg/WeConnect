import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Space} from "../models/Space";
import {Event} from "../models/Event";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsUrl = 'http://localhost:5000/events';

  constructor(private http: HttpClient,private userService:UserService) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
  getSpaceEvents(id: string): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.eventsUrl}/${id}`);
  }
  postEvent(event:any): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl,event);

  }







}
