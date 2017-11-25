import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../shared/user";

@Injectable()
export class UserService {
  public token: string;
  private apiURL = environment.api;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<boolean> {
    const user = JSON.stringify({ email: email, password: password });
    console.log(user);
    return this.http.post<Login>(this.apiURL + "/authenticate", user).pipe(
      map(response => {
        // login successful if there's a jwt token in the response
        const token = response.auth_token;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              name: response.name,
              avatar: response.avatar,
              email: email,
              token: token
            })
          );
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
    );
  }

  logout() {
    this.token = null;
    localStorage.removeItem("currentUser");
  }

  create(user: User) {
    const new_user = JSON.stringify({ user: user });
    return this.http.post(this.apiURL + "/users", new_user);
  }

  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser;
  }
}

interface Login {
  name: string;
  avatar: string;
  auth_token: string;
}
