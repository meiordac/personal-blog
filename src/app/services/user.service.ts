import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/user'

@Injectable()
export class UserService {
  public token: string;
  private apiURL = environment.api;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const user = JSON.stringify({ email: email, password: password });
    console.log(user);
    return this.http.post(this.apiURL + '/authenticate', user, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log(response.json());
        const token = response.json() && response.json().auth_token;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({
            name: response.json().name,
            avatar: response.json().avatar,
            email: email, token: token
          }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch(this.handleError);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  create(user: User) {

    // add authorization header with jwt token and application/json header so otherwise it wouldnt let me create comments!
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const new_user = JSON.stringify({ user: user });
    return this.http.post(this.apiURL + '/users', new_user, options)
      .map((response: Response) => response.json());
  }

  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}
