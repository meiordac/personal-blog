import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';
import { handleError } from '../shared/httpHelper';
import { Post } from '../../../../../libs/shared/src/models/post';

/**
 *
 *
 * @export
 * @class PostService
 */
@Injectable()
export class PostService {
  private postsURL = environment.api + '/posts';

  /**
   *Creates an instance of PostService.
   * @param {HttpClient} http
   * @param {UserService} userService
   * @memberof PostService
   */
  constructor(private http: HttpClient, private userService: UserService) {}

  /**
   *
   *
   * @returns {Observable<Post[]>}
   * @memberof PostService
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsURL).pipe(
      tap(comments => console.log(`fetched posts`)),
      catchError(handleError('getPosts', []))
    );
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Observable<Post>}
   * @memberof PostService
   */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsURL}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched post id=${id}`)),
      catchError(handleError<Post>(`getPost id=${id}`))
    );
  }

  /**
   *
   *
   * @param {String} title
   * @param {String} content
   * @param {String} author
   * @param {String} image
   * @returns {Observable<Post>}
   * @memberof PostService
   */
  create(
    title: String,
    content: String,
    author: String,
    image: String
  ): Observable<Post> {
    const options = {
      headers: { 'Content-Type': ['application/json'] }
    };
    const new_post = JSON.stringify({
      title: title,
      content: content,
      author: author,
      published_at: new Date(),
      avatar: image
    });
    return this.http.post<Post>(this.postsURL, new_post, options);
  }
}
