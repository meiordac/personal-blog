import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../services/user.service";

import { FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  model: any = {};
  error: string;
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model.email, this.model.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate([""]);
        } else {
          this.error = "Login error";
        }
      },

      error => {
        this.error = "Login error";
        console.log(error);
      }
    );
  }
}
