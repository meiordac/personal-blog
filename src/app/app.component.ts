import { Component } from '@angular/core';
import {Post} from './post'

const POSTS: Post[] = [
  {
    id: 1,
    title: "hello word",
    content: "this is a test",
    author: "Matias",
    image: "assets/img/coffee.jpg",
    avatar: "assets/img/co2.jpg"
    
  },
  {
    id: 2,
    title: "I love angular",
    content: "Who doesn't? ",
    author: "Matias",
    image: "assets/img/road.jpg",
    avatar: "assets/img/co1.jpg"
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog!';
  subheading = 'In Angular 2';
  github= 'https://github.com/meiordac/';
  linkedin= 'https://cl.linkedin.com/in/matiasiordache';
  stackoverflow= 'http://stackoverflow.com/users/2373657/matias-iordache';
  posts= POSTS; 
}
