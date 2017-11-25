import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { UserService } from "../services/user.service";
import { Post } from "../shared/post";
import { handleError } from "../shared/httpHelper";

@Injectable()
export class PostService {
  private postsURL = environment.api + "/posts";

  constructor(private http: HttpClient, private userService: UserService) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.postsURL)
      .pipe(
        tap(comments => console.log(`fetched posts`)),
        catchError(handleError("getPosts", []))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsURL}/${id}`;
    return this.http
      .get<Post>(url)
      .pipe(
        tap(_ => console.log(`fetched post id=${id}`)),
        catchError(handleError<Post>(`getPost id=${id}`))
      );
  }

  create(
    title: String,
    content: String,
    author: String,
    image: String
  ): Observable<Post> {
    const new_post = JSON.stringify({
      title: title,
      content: content,
      author: author,
      published_at: new Date(),
      avatar: image
    });
    return this.http.post<Post>(this.postsURL, new_post);
  }
}
