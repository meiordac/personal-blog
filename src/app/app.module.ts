import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { UserService } from './services/user.service';
import { NewlinesPipe } from './shared/newline.pipe';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthGuard } from './guards/index';


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    NewlinesPipe, 
    CommentComponent, 
    LoginComponent, 
    RegisterComponent, 
    AddPostComponent, 
    HomeComponent, 
    ToolbarComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostService, CommentService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
