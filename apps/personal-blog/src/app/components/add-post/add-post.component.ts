import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service';
import { Post } from '../../../../../../libs/shared/src/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  model: Post = new Post();

  constructor(
    private router: Router,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit() {}

  addPost(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.postService
      .create(
        this.model.title,
        this.model.content,
        currentUser._id,
        this.model.image
      )
      .subscribe(post => {
        this.router.navigate(['']);
      });
  }
}
