import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../../../../../../libs/shared/src/models/post';
import { PostService } from '../../services/post.service';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router,
    private location: Location
  ) {}

  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {
    this.getPosts();
  }

  /**
   *
   *
   * @param {Post} post
   * @memberof HomeComponent
   */
  gotoDetail(post: Post): void {
    const link = ['/detail', post.id];
    this.router.navigate(link);
  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  gotoLogin(): void {
    const link = ['/login'];
    this.router.navigate(link);
  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  getPosts(): void {
    this.postService
      .getPosts()
      .pipe(
        first(),
        map(posts => posts.map(post => Object.assign(new Post(), post)))
      )
      .subscribe(posts => {
        this.posts = posts;
        this.posts = this.posts.sort(this.compare);
      });
  }

  /**
   * add compare to sort posts by date
   * @param a
   * @param b
   */
  compare(a: Post, b: Post) {
    if (a.published_at > b.published_at) {
      return -1;
    }
    if (a.published_at < b.published_at) {
      return 1;
    }
    return 0;
  }
}
