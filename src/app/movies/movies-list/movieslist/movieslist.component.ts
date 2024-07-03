import { Component } from '@angular/core';
import { MoviesServiceService } from '../../../services/movies-service.service';
import { HeaderComponent } from '../../../header/header.component';
import { BigAdComponent } from '../../../big-ad/big-ad.component';
import { Movies } from '../../../interfaces/movies';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movieslist',
  standalone: true,
  imports: [BigAdComponent, HeaderComponent, CommonModule, RouterLink],
  templateUrl: './movieslist.component.html',
  styleUrl: './movieslist.component.css'
})
export class MovieslistComponent {

  popularMovies:any
  upcomingMovies:any
  nowPlayingMovies:any
  topRatedMovies:any


  constructor(private service:MoviesServiceService){
    
  }

  ngOnInit():void{
    this.popular()
    this.upcoming()
    this.nowPlaying()
    this.topRated()
   
  }


  popular(){
    this.service.getPopularMovies().subscribe((res)=>{
      this.popularMovies=res.results
      console.log(this.popularMovies)
    })
  }

  upcoming(){
    this.service.getUpcomingMovies().subscribe((res)=>{
      this.upcomingMovies=res.results
      console.log(this.upcomingMovies)
    })
  }

  nowPlaying(){
    this.service.getNowPlayingMovies().subscribe((res)=>{
      this.nowPlayingMovies=res.results
      console.log(this.nowPlayingMovies)
    })

  }

  topRated(){
    this.service.getNowPlayingMovies().subscribe((res)=>{
      this.topRatedMovies=res.results
      console.log(this.topRatedMovies)
    })

  }

}
