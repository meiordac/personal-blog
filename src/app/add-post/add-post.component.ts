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
  
  model: any = {};

    // TODO: Remove this when we're done
  diagnostic() { return JSON.stringify(this.model); }

  
  addPost() : void
  {
    console.log(this.model.content);

    this.postService.create(this.model.title,this.model.content, "Matias Iordache",this.model.image )
    .subscribe(post => 
    {
      console.log(post);
      });
  }
}
