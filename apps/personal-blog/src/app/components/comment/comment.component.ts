import { Component, Input, OnInit } from '@angular/core';

import { CommentService } from '../../services/comment.service'
import { Comment } from '../../shared/comment'
import { Post } from '../../shared/post'
import { User } from '../../shared/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() post: Post;
  user: User;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
     this.user = this.userService.getUser();
  }

  addComment(content: String): void {
    console.log(content);
    if (!content) { return; }

    this.commentService.create(content, this.post.id)
      .subscribe(comment => {
        this.comments.push(comment);
      }
      );
  }

  upvote(comment: Comment): void {
    this.commentService.upvote(comment).subscribe();
  }
  downvote(comment: Comment): void {
    this.commentService.downvote(comment).subscribe();
  }

}
