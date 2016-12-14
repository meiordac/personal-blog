import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Comment} from './shared/comment'

@Injectable()
export class CommentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private commentsURL = 'https://personal-blog-api.herokuapp.com/comments';  // URL to web api
  
  constructor(private http: Http) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getAllComments(): Promise<Comment[]> {
         return this.http.get(this.commentsURL)
               .toPromise()
               .then(response => response.json() as Comment[])
               .catch(this.handleError);
  } 


  getComments(id : number): Promise<Comment[]> {
     return this.getAllComments().then(x => x.filter(comment => comment.id_post==id));

  }

    create(content : String, id_post: Number): Promise<Comment> {
      var new_post=JSON.stringify({ id_post: id_post, content: content, author: "Matias Iordache", published_at: new Date(), avatar: "assets/img/matias.jpg"});
      console.log(new_post);
      return this.http
          .post(this.commentsURL, new_post, {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
  }
}
