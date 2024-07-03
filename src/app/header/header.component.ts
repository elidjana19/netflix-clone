import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MovieslistComponent } from '../movies/movies-list/movieslist/movieslist.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MovieslistComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){

  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])

  }

}
