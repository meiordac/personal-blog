import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Post} from '../post'
import {PostService} from '../post.service'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})


export class PostDetailComponent implements OnInit {

  post: Post;

  goBack(): void {
  this.location.back();
}

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() : void {  
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.postService.getPost(id).then(post => this.post = post);
  });
}
}
