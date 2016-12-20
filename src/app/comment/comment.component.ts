import { Component, Input, OnInit } from '@angular/core';

import {CommentService} from '../services/comment.service'
import {Comment } from '../shared/comment'
import {Post} from '../shared/post'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() post: Post;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(content : String) : void
  {
    console.log(content);
    if (!content) { return;}

    this.commentService.create(content, this.post.id)
    .subscribe(comment => 
    {
      this.comments.push(comment);
      }
      );
  }

}
