import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserConnectedService {
 currentUser!: User ;
constructor() {
}
getConnectedUser(): any {
  return this.currentUser;
}
setConnectedUser(user: any): void {
  this.currentUser = user;
}
}
