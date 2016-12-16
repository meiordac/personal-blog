import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  ngOnInit() {
  }

    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService) { }
 
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.router.navigate(['/login']);
                },
                error => {
                  console.log(error);
                });
    }
}

