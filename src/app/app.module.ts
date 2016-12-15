import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogComponent } from './blog/blog.component';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import {UserService} from './services/user.service';
import {NewlinesPipe} from './shared/newline.pipe';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    BlogComponent, 
    NewlinesPipe, CommentComponent, LoginComponent
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
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [PostService, CommentService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
