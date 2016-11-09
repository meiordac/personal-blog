import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Comment} from './comment'

@Injectable()
export class CommentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private commentsURL = 'app/comments';  // URL to web api
  
  constructor(private http: Http) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getAllComments(): Promise<Comment[]> {
         return this.http.get(this.commentsURL)
               .toPromise()
               .then(response => response.json().data as Comment[])
               .catch(this.handleError);
  } 


  getComments(id : number): Promise<Comment[]> {
     return this.getAllComments().then(x => x.filter(comment => comment.id_post==id));

  }

    create(content : String): Promise<Comment> {
     return this.http
     .post(this.commentsURL, JSON.stringify({content: content, author: "Matias Iordache", published_at: new Date(), avatar: "assets/img/matias.jpg"}), {headers: this.headers})
     .toPromise()
     .then(res => res.json().data)
     .catch(this.handleError);

  }
}
