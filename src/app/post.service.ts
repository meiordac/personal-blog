import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Post} from './shared/post';

@Injectable()
export class PostService {

  private postsURL = 'https://personal-blog-api.herokuapp.com/posts.json'; // URL to web api
  
  constructor(private http: Http) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getPosts(): Promise<Post[]> {
        return this.http.get(this.postsURL)
               .toPromise()
               .then(response => response.json() as Post[])
               .catch(this.handleError);
  } 

  getPost(id : number): Promise<Post> {
    return this.getPosts().then(x => x.find(post => post.id==id));
  }
}
