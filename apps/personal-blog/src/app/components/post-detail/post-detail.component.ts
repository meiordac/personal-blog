import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../../../../../../libs/shared/src/models/post';
import { Comment } from '../../../../../../libs/shared/src/models/comment';
import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';
import { User } from '../../../../../../libs/shared/src/models/user';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  user: User;
  post: Post;
  comments: Comment[];

  /**
   *Creates an instance of PostDetailComponent.
   * @param {PostService} postService
   * @param {CommentService} commentService
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {Location} location
   * @param {UserService} userService
   * @memberof PostDetailComponent
   */
  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  /**
   *
   *
   * @memberof PostDetailComponent
   */
  ngOnInit(): void {
    this.user = this.userService.getUser();

    this.route.params.forEach((params: Params) => {
      const id = params['id'];

      this.getPost(id);
      this.fetchComments(id);
    });
  }

  // LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
  /**
   *
   *
   * @private
   * @param {Post} post
   * @memberof PostDetailComponent
   */
  private linkedInShare(post: Post) {
    let shareUrl =
      'http://www.linkedin.com/shareArticle?url=' + window.location;
    const windowAttr = 'width=' + 500 + ', height=' + 400;
    shareUrl += '&title=' + post.title;
    shareUrl += '&summary=' + post.content.slice(0, 100) + '...';
    window.open(shareUrl, 'newwindow', windowAttr);
  }

  /**
   *
   *
   * @memberof PostDetailComponent
   */
  goBack(): void {
    this.location.back();
  }

  /**
   *
   *
   * @private
   * @param {number} id
   * @memberof PostDetailComponent
   */
  private fetchComments(id: number) {
    this.commentService
      .getComments(id)
      .pipe(first())
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  /**
   *
   *
   * @private
   * @param {number} id
   * @memberof PostDetailComponent
   */
  private getPost(id: number) {
    this.postService
      .getPost(id)
      .pipe(first())
      .subscribe(post => {
        this.post = post;
      });
  }
}
