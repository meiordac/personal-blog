import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {User } from '../shared/user'

@Injectable()
export class UserService {
  public token: string;
  //private authenticationURL = 'https://personal-blog-api.herokuapp.com/posts.json'; // URL to web api
  private authenticationURL = 'http://localhost:3000/authenticate';  // URL to web api
  
  constructor(private http: Http) {        
    // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;}
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
  }
  
  login(email : string, password : string) : Observable<boolean> {
      let headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.authenticationURL, 
        JSON.stringify({ email, password }), { headers }).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().auth_token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
  } 

    logout() {
        return null;
  } 
}
