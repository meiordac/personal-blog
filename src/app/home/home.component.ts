import { Component, Output, OnInit } from '@angular/core';

import { User } from '../shared/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  title = 'Blog!';
  subheading = 'In Angular 2';
  github = 'https://github.com/meiordac/';
  linkedin = 'https://www.linkedin.com/in/matiasiordache';
  stackoverflow = 'http://stackoverflow.com/users/2373657/matias-iordache';
  personal = 'https://meiordac.github.io/';
}
