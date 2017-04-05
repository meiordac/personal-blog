import { Component, Output, OnInit } from '@angular/core';

import { User } from './shared/user'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User ;
  private sub: any;

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.user = this.userService.getUser();
  }


  logout() {
    this.userService.logout();
    this.user = null;
  }
  
  github = 'https://github.com/meiordac/';
  linkedin = 'https://www.linkedin.com/in/matiasiordache';
  stackoverflow = 'http://stackoverflow.com/users/2373657/matias-iordache';
  personal = 'https://meiordac.github.io/';
}
