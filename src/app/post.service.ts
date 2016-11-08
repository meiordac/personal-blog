import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Post} from './post';

@Injectable()
export class PostService {
  
  private postsURL = 'app/posts';  // URL to web api
  
  constructor(private http: Http) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getPosts(): Promise<Post[]> {
        return this.http.get(this.postsURL)
               .toPromise()
               .then(response => response.json().data as Post[])
               .catch(this.handleError);
  } 

  getPost(id : number): Promise<Post> {
    return this.getPosts().then(x => x.find(post => post.id==id));
  }
}
