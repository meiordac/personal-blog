import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable ,  of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthenticationService {
  public token: string;
  constructor(private http: HttpClient) {
    this.setToken();
  }

  login(email: string, password: string): Observable<boolean> {
    const user = JSON.stringify({ email: email, password: password });
    console.log(user);
    return this.http.post<Login>(`${environment.api}/authenticate`, user).pipe(
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

  setToken() {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  getAuthorization(): string {
    return `Bearer ${this.token}`;
  }

  getAuthorizationHeader(): HttpHeaders {
    const headers = new HttpHeaders()
      .set("Authorization", `Bearer ${this.token}`)
      .set("Content-Type", "application/json");

    return headers;
  }
}

interface Login {
  name: string;
  avatar: string;
  auth_token: string;
}
