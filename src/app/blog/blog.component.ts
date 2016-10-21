import { Component, OnInit } from '@angular/core';
import {Post} from '../post'

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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts= POSTS; 

  constructor() { }

  ngOnInit() {
  }

}
