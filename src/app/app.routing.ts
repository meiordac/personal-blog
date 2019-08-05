import { RouterModule, Routes } from '@angular/router';

import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'addpost', component: AddPostComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
