import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MovieslistComponent } from '../movies/movies-list/movieslist/movieslist.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MovieslistComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router, private authService:AuthService){

  }

  logout(){
    this.authService.login();
    this.router.navigate(['/home'])

  }

}
