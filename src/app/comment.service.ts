import { Injectable } from '@angular/core';
import {COMMENTS} from './mock-comments'
import {Comment} from './comment'

@Injectable()
export class CommentService {

  constructor() { }
  getAllComments(): Promise<Comment[]> {
    return Promise.resolve(COMMENTS);
  } 

  getComments(id : number): Promise<Comment[]> {
    //return this.getAllComments().then(x => x.find(comment => comment.id_post==id));
     return Promise.resolve(COMMENTS);
  }
}
