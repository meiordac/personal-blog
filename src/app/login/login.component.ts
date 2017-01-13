import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error: string;
  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login()
  {
    this.userService.login(this.model.email, this.model.password)
    .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log(localStorage.getItem('currentUser'));
                    this.router.navigate(['']);
                } else {
                    // login failed
                    this.error="Login error";
                }
            });;
  }
}
