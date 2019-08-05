import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  github = 'https://github.com/meiordac/';
  linkedin = 'https://www.linkedin.com/in/matiasiordache';
  stackoverflow = 'http://stackoverflow.com/users/2373657/matias-iordache';
  personal = 'https://meiordac.github.io/';

  private sub: any;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService
  ) {}
  ngOnInit() {
    this.user = this.userService.getUser();
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
