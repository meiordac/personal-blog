import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Post} from '../shared/post'
import {PostService} from '../post.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[]; 

  constructor(private postService: PostService,
    private router: Router,
    private location: Location) { }

  gotoDetail(post: Post): void {
    let link = ['/detail', post.id];
    this.router.navigate(link);
}

  getPosts(): void{
    this.postService.getPosts().then(posts =>
     { 
       this.posts = posts;
       this.posts= this.posts.sort(this.compare);
      });
  }

  //add compare to sort posts by date
  compare(a : Post,b : Post) {
  if (a.published_at > b.published_at)
    return -1;
  if (a.published_at < b.published_at)
    return 1;
  return 0;
}

  ngOnInit() {
    this.getPosts();
  }

}
