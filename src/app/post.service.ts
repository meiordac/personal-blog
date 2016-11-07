import { Injectable } from '@angular/core';
import {POSTS} from './mock-posts'
import {Post} from './post'

@Injectable()
export class PostService {

  constructor() { }
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  } 

  getPost(id : number): Promise<Post> {
    return this.getPosts().then(x => x.find(post => post.id==id));
  }
}
