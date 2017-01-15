import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { User } from '../shared/user'

@Injectable()
export class UserService {
  public token: string;
  //private apiURL='https://personal-blog-api.herokuapp.com';
  private apiURL = 'http://localhost:3000';

  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



  login(email: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL + '/authenticate',
      JSON.stringify({ email, password }), { headers }).map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().auth_token;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ name: response.json().name, email: email, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  create(user: User) {

    // add authorization header with jwt token and application/json header so otherwise it wouldnt let me create comments!
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var new_user = JSON.stringify({ name: user.name, email: user.email, password: user.password, password_confirmation: user.password_confirmation });
    console.log(new_user);
    return this.http.post(this.apiURL + '/users', new_user, options)
      .map((response: Response) => response.json());
  }

  getUser(): User {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}
