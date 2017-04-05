import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Post } from '../../shared/post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(
    private router: Router,
    private postService: PostService,
    private location: Location) { }

  ngOnInit() {
  }

  model: any = {};

  addPost(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.postService.create(this.model.title, this.model.content, currentUser.name , this.model.image)
      .subscribe(post => {
        this.router.navigate(['']);
      });
  }
}
