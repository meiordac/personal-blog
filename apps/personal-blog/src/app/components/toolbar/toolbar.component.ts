import { Component, Output, OnInit } from "@angular/core";

import { User } from "../../shared/user";
import { UserService } from "../../services/user.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  user: User;
  private sub: any;
  title = "Blog!";

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
