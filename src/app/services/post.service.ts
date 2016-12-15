import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { UserService } from '../services/user.service';
import {Post} from '../shared/post';

@Injectable()
export class PostService {

  //private postsURL = 'https://personal-blog-api.herokuapp.com/posts.json'; // URL to web api
  private postsURL = 'http://localhost:3000/posts.json';  // URL to web api

  constructor(private http: Http, private userService: UserService) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
}

  getPosts(): Promise<Post[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.postsURL,options)
               .toPromise()
               .then(response => response.json() as Post[])
               .catch(this.handleError);
  } 

  getPost(id : number): Promise<Post> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.token });
    let options = new RequestOptions({ headers: headers });
    return this.getPosts().then(x => x.find(post => post.id==id));
  }
}
