import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Post} from '../post'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})


export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }
}
