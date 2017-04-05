import { Component, Output, OnInit } from '@angular/core';

import { User } from '../../shared/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: User ;
  private sub: any;
  title = 'Personal blog using Angular and Material design!';

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.user = null;
  }
}




