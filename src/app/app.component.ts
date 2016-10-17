import { Component } from '@angular/core';
import {Post} from './post'

const POSTS: Post[] = [
  {
    id: 1,
    title: "hello word",
    content: "this is a test"
  },
  {
    id: 2,
    title: "I love angular",
    content: "Who doesn't? "
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Matias Iordache Blog!';
  posts= POSTS; 
}
