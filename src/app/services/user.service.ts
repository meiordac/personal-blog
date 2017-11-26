import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../shared/user";

@Injectable()
export class UserService {
  private apiURL = environment.api;

  constructor(private http: HttpClient) {}

  create(user: User) {
    const new_user = JSON.stringify({ user: user });
    return this.http.post(this.apiURL + "/users", new_user);
  }

  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser;
  }
}
