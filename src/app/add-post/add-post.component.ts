import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {Post} from '../shared/post'
import {PostService} from '../services/post.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private location: Location) { }

  ngOnInit() {
  }

  model : Post;

    // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  
  addComment(content : String) : void
  {
    console.log(content);
    if (!content) { return;}

    this.postService.create(content)
    .subscribe(post => 
    {
      console.log(post);
      });
  }
}
