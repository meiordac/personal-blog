import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentComponent } from './components/comment/comment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthGuard } from './guards';
import { AuthenticationService } from './services/authentication.service';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { NewlinesPipe } from './shared/newline.pipe';

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
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MasonryModule,
    routing,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [
    PostService,
    CommentService,
    UserService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
