import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Space} from '../models/Space';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private error!: any;
  private msg$ !: any;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
  }

  getConnectedUser(): any {
    return JSON.parse(localStorage.getItem('users') as string);
    console.log('user',JSON.parse(localStorage.getItem('users') as string))
  }
  setConnectedUser(user: User): void{
    localStorage.setItem('users', JSON.stringify(user));
  }

// @ts-ignore
  login(user: string, pass: string): any {
    const data = {
      username: user,
      password: pass
    };
    this.http.post('http://localhost:5000/login', data).toPromise()
    .then((msg: any) => {
      this.error = msg.error;
      if (!this.error) {
        localStorage.setItem('users', JSON.stringify(msg));
        this.router.navigateByUrl('/').then(r => {
          window.location.reload();
        });
      }
      });
    console.log(this.msg$);



  }

  logout(): void {
    localStorage.removeItem('users');
    this.router.navigateByUrl('/').then(r => {
      window.location.reload();
    });
  }
  register(user: any): any{
    this.http.post('http://localhost:5000/user/signup', user).toPromise().then((msg: any) => {
      this.error = msg.error;
      if ( !this.error){
        const snack = this.snackBar.open('✔ ' + msg.username + ', You have signed up succesfully', 'login', {
          duration: 3000,
          verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          panelClass: 'test'
        });
        snack.onAction().subscribe(() => {
          this.router.navigateByUrl('/login').then(r => {});
        });
      }
    });
  }
  update(user: any): any{
    this.http.put('http://localhost:5000/user/update', user).toPromise().then((msg: any) => {
      this.error = msg.error;
      if ( !this.error){
        this.setConnectedUser(msg);
        const snack = this.snackBar.open('✔ ' + ' profile updated succesfully', 'home', {
          duration: 3000,
          verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
          horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          panelClass: 'test'
        });


        snack.onAction().subscribe(() => {

          this.router.navigateByUrl('/').then(r => {});
        });
      }
    });
  }

  getUserSpaces(id: any): Observable<Space[]> {
    return this.http.get<Space[]>(`http://localhost:5000/user/userspaces/${id}`);
  }
      }



