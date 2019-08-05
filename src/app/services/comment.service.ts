import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable ,  of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { UserService } from "../services/user.service";

import { Comment } from "../shared/comment";
import { handleError } from "../shared/httpHelper";

@Injectable()
export class CommentService {
  private commentsURL = environment.api + "/comments"; // URL to web api

  constructor(private http: HttpClient, private userService: UserService) {}

  getAllComments(): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.commentsURL)
      .pipe(
        tap(comments => console.log(`fetched comments`)),
        catchError(handleError("getAllComments", []))
      );
  }

  getComments(id: number): Observable<Comment[]> {
    return this.getAllComments().pipe(
      tap(_ => console.log(`fetched comments for post id=${id}`)),
      catchError(handleError<Comment[]>(`getComments id=${id}`))
    );
  }

  create(content: String, id_post: Number): Observable<Comment> {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const new_comment = JSON.stringify({
      id_user: currentUser.id,
      id_post: id_post,
      content: content,
      author: currentUser.name,
      published_at: new Date(),
      avatar: currentUser.avatar
    });

    return this.http
      .post<Comment>(this.commentsURL, new_comment)
      .pipe(catchError(handleError<Comment>("create")));
  }

  upvote(comment: Comment) {
    comment.upvotes += 1;

    return this.http
      .put(this.commentsURL + comment.id, comment)
      .pipe(catchError(handleError<Comment>("upvote")));
  }

  downvote(comment: Comment) {
    comment.upvotes -= 1;

    return this.http
      .put(this.commentsURL, comment)
      .pipe(catchError(handleError<Comment>("downvote")));
  }
}
