import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: PostDetailComponent},
    { path: 'addpost', component: AddPostComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);