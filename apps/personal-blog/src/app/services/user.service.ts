import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from '../../../../../libs/shared/src/models/user';

@Injectable()
export class UserService {
  private apiURL = environment.api;

  constructor(private http: HttpClient) {}

  create(user: User) {
    const new_user = JSON.stringify({ user: user });
    return this.http.post(this.apiURL + '/users', new_user);
  }

  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}
