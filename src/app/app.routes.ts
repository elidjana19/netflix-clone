import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register/register.component';
import { MovieslistComponent } from './movies/movies-list/movieslist/movieslist.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail/movie-detail.component';
import { QrcodeComponent } from 'ngx-qrcode2';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'movies', component:MovieslistComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}
    
];

export default routes