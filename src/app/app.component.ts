import { Component } from '@angular/core';
import {Post} from './post'

const POSTS: Post[] = [
  {
    id: 1,
    title: "hello word",
    content: "this is a test",
    author: "Matias",
    
  },
  {
    id: 2,
    title: "I love angular",
    content: "Who doesn't? ",
    author: "Matias"
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal Blog!';
  subheading = 'In Angular 2';
  posts= POSTS; 
}
