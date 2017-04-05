import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { UserService } from './services/user.service';
import { NewlinesPipe } from './shared/newline.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
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
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostService, CommentService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
