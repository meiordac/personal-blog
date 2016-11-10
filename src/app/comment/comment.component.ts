import { Component, Input, OnInit } from '@angular/core';

import {CommentService} from '../comment.service'
import {Comment } from '../shared/comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(content : String) : void
  {
    console.log(content);
    if (!content) { return;}

    this.commentService.create(content)
    .then(comment => 
    {
      this.comments.push(comment);
      });
  }

}
