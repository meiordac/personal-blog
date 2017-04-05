import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Post} from '../shared/post'
import {Comment} from '../shared/comment'
import {PostService} from '../services/post.service'
import {CommentService} from '../services/comment.service'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})


export class PostDetailComponent implements OnInit {
  
  post: Post;
  comments: Comment[];
 
  //LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
  private linkedInShare(post: Post) {
        let shareUrl = 'http://www.linkedin.com/shareArticle?url=' + window.location;    
        let  windowAttr='width=' + 500 + ', height=' + 400;
        shareUrl += "&title=" + post.title;
        shareUrl += "&summary=" + post.content.slice(0,100) + '...';
        window.open(shareUrl, 'newwindow', windowAttr);
      }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() : void {  
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.postService.getPost(id).subscribe(post => this.post = post);
        this.commentService.getComments(id).subscribe(comments => this.comments = comments);

  });
}
}
