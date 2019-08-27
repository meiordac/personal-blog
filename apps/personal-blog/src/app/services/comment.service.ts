import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, first } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';
import { Comment } from '../../../../../libs/shared/src/models/comment';
import { handleError } from '../shared/httpHelper';

@Injectable()
export class CommentService {
  private commentsURL = environment.api + '/comments'; // URL to web api

  constructor(private http: HttpClient, private userService: UserService) {}

  /**
   *
   *
   * @returns {Observable<Comment[]>}
   * @memberof CommentService
   */
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsURL).pipe(
      first(),
      tap(comments => console.log(`fetched comments`)),
      catchError(handleError('getAllComments', []))
    );
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Observable<Comment[]>}
   * @memberof CommentService
   */
  getComments(id: number): Observable<Comment[]> {
    return this.getAllComments().pipe(
      tap(_ => console.log(`fetched comments for post id=${id}`)),
      catchError(handleError<Comment[]>(`getComments id=${id}`))
    );
  }

  /**
   *
   *
   * @param {String} content
   * @param {String} id_post
   * @returns {Observable<Comment>}
   * @memberof CommentService
   */
  create(content: String, id_post: String): Observable<Comment> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const options = {
      headers: { 'Content-Type': ['application/json'] }
    };
    const new_comment = JSON.stringify({
      id_user: currentUser._id,
      id_post: id_post,
      content: content,
      author: currentUser.name,
      published_at: new Date(),
      avatar: currentUser.avatar
    });

    return this.http
      .post<Comment>(this.commentsURL, new_comment, options)
      .pipe(catchError(handleError<Comment>('create')));
  }

  /**
   *
   *
   * @param {Comment} comment
   * @returns
   * @memberof CommentService
   */
  upvote(comment: Comment) {
    comment.upvotes += 1;

    return this.http
      .put(this.commentsURL + comment._id, comment)
      .pipe(catchError(handleError<Comment>('upvote')));
  }

  /**
   *
   *
   * @param {Comment} comment
   * @returns
   * @memberof CommentService
   */
  downvote(comment: Comment) {
    comment.upvotes -= 1;

    return this.http
      .put(this.commentsURL, comment)
      .pipe(catchError(handleError<Comment>('downvote')));
  }
}
