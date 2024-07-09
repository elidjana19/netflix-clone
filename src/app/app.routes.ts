import { Routes } from '@angular/router';
import { MovieslistComponent } from './movies/movies-list/movieslist/movieslist.component';
import { HomeComponent } from './home/home.component';
import { authcompleteGuard } from './authcomplete.guard';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail/movie-detail.component';
import { DetaisPageComponent } from './detais-page/detais-page.component';



export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'movies', component:MovieslistComponent , },
    {path:'movies/:id', component:DetaisPageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } ,
  
    
];  //canActivate: [authcompleteGuard]

export default routes