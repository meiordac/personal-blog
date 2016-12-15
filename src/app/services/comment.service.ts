import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { UserService } from '../services/user.service';

import {Comment} from '../shared/comment'

@Injectable()
export class CommentService {

  //private commentsURL = 'https://personal-blog-api.herokuapp.com/comments';  // URL to web api
  private commentsURL = 'http://localhost:3000/comments';  // URL to web api

  constructor(private http: Http, private userService: UserService) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getAllComments(): Promise<Comment[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.token });
        let options = new RequestOptions({ headers: headers });
         return this.http.get(this.commentsURL, options)
               .toPromise()
               .then(response => response.json() as Comment[])
               .catch(this.handleError);
  } 


  getComments(id : number): Promise<Comment[]> {
     return this.getAllComments().then(x => x.filter(comment => comment.id_post==id));

  }

    create(content : String, id_post: Number): Promise<Comment> {
        // add authorization header with jwt token and application/json header so otherwise it wouldnt let me create comments!
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.token ,'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

      var new_comment=JSON.stringify({ id_post: id_post, content: content, author: "Matias Iordache", published_at: new Date(), avatar: "assets/img/matias.jpg" } );
      console.log(new_comment);
      return this.http
          .post(this.commentsURL, new_comment, options)
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
  }
}
