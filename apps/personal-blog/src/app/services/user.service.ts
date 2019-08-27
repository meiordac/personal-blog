import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from '../../../../../libs/shared/src/models/user';

@Injectable()
export class UserService {
  private apiURL = environment.api;

  /**
   *Creates an instance of UserService.
   * @param {HttpClient} http
   * @memberof UserService
   */
  constructor(private http: HttpClient) {}

  /**
   *
   *
   * @param {User} user
   * @returns
   * @memberof UserService
   */
  create(user: User) {
    const new_user = JSON.stringify(user);
    const options = {
      headers: { 'Content-Type': ['application/json'] }
    };
    return this.http.post(this.apiURL + '/users', new_user, options);
  }

  /**
   *
   *
   * @returns {User}
   * @memberof UserService
   */
  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}
