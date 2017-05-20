import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';
import { Post } from '../shared/post';

@Injectable()
export class PostService {

  private postsURL = environment.api + '/posts/';

  constructor(private http: Http, private userService: UserService) { }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getPosts(): Observable<Post[]> {

    return this.http.get(this.postsURL)
      .map(response => response.json() as Post[])
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Post> {
    return this.getPosts().map(x => x.find(post => post.id == id));
  }

  create(title: String, content: String, author: String, image: String): Observable<Post> {
    // add authorization header with jwt token and application/json header so otherwise it wouldnt let me create comments!
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.token, 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const new_post = JSON.stringify({ title: title, content: content, author: author, published_at: new Date(), avatar: image });
    return this.http
      .post(this.postsURL, new_post, options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
