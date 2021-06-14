import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Space} from '../models/Space';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private error!: any;
  private msg$ !: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  getConnectedUser(): any {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  setConnectedUser(user: User): void {
    localStorage.setItem('users', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('users');
    this.router.navigateByUrl('/').then(r => {
      window.location.reload();
    });
  }


  update(user: any): any {
    this.http.put('http://localhost:5000/user/update', user).toPromise().then((msg: any) => {
      this.error = msg.error;
      if (!this.error) {
        this.setConnectedUser(msg);
        window.location.reload();
        //this.router.navigateByUrl('/').then(r => {});
      }
    });
  }

  getUserSpaces(id: any): Observable<Space[]> {
    return this.http.get<Space[]>(`http://localhost:5000/user/userspaces/${id}`);
  }
}



