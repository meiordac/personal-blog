import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogComponent } from './blog/blog.component';
import {PostService} from './post.service';
import {CommentService} from './comment.service';
import {NewlinesPipe} from './newline.pipe';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    BlogComponent, 
    NewlinesPipe, CommentComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BlogComponent
      },
      {
        path: 'detail/:id',
        component: PostDetailComponent
      }
    ])
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
