import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MasonryModule } from "angular2-masonry";
import "hammerjs";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostService } from "./services/post.service";
import { CommentService } from "./services/comment.service";
import { UserService } from "./services/user.service";
import { NewlinesPipe } from "./shared/newline.pipe";
import { CommentComponent } from "./components/comment/comment.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { HomeComponent } from "./components/home/home.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { AuthGuard } from "./guards/index";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { environment } from "../environments/environment.prod";
import { AuthenticationService } from "./services/authentication.service";

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
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false
        }),
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
