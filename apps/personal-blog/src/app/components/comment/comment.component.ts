import { Component, Input, OnInit } from '@angular/core';

import { CommentService } from '../../services/comment.service';
import { Comment } from '../../../../../../libs/shared/src/models/comment';
import { Post } from '../../../../../../libs/shared/src/models/post';
import { User } from '../../../../../../libs/shared/src/models/user';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() post: Post;

  user: User;

  /**
   *Creates an instance of CommentComponent.
   * @param {CommentService} commentService
   * @param {UserService} userService
   * @memberof CommentComponent
   */
  constructor(
    private commentService: CommentService,
    private userService: UserService
  ) {}

  /**
   *
   *
   * @memberof CommentComponent
   */
  ngOnInit() {
    this.user = this.userService.getUser();
  }

  /**
   *
   *
   * @param {String} content
   * @returns {void}
   * @memberof CommentComponent
   */
  addComment(content: string): void {
    console.log(content);
    if (!content) {
      return;
    }

    this.commentService
      .create(content, this.post._id)
      .pipe(first())
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }

  /**
   *
   *
   * @param {Comment} comment
   * @memberof CommentComponent
   */
  upvote(comment: Comment): void {
    this.commentService
      .upvote(comment)
      .pipe(first())
      .subscribe();
  }

  /**
   *
   *
   * @param {Comment} comment
   * @memberof CommentComponent
   */
  downvote(comment: Comment): void {
    this.commentService
      .downvote(comment)
      .pipe(first())
      .subscribe();
  }
}
