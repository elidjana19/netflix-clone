import { Routes } from '@angular/router';
import { MovieslistComponent } from './movies/movies-list/movieslist/movieslist.component';
import { HomeComponent } from './home/home.component';
import { authcompleteGuard } from './authcomplete.guard';
import { DetaisPageComponent } from './detais-page/detais-page.component';



export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'movies', component:MovieslistComponent, canActivate: [authcompleteGuard] },
    {path:'movies/:id', component:DetaisPageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } , 
];  

export default routes