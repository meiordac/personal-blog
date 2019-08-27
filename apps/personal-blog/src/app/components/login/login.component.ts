import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  error: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  login() {
    const value = this.loginForm.value;
    this.authService.login(value.email, value.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate(['']);
        } else {
          this.error = 'Login error';
        }
      },

      error => {
        this.error = 'Login error';
        console.log(error);
      }
    );
  }
}
