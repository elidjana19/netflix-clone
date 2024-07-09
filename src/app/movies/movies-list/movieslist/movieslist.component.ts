import { Component } from '@angular/core';
import { MoviesServiceService } from '../../../services/movies-service.service';
import { HeaderComponent } from '../../../header/header.component';
import { BigAdComponent } from '../../../big-ad/big-ad.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ShareComponent } from '../../../share/share.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieDetailComponent } from '../../movie-detail/movie-detail/movie-detail.component';
import { QrcodeService } from '../../../services/qrcode.service';


@Component({
  selector: 'app-movieslist',
  standalone: true,
  imports: [BigAdComponent, HeaderComponent, CommonModule, RouterLink, ShareComponent, MovieDetailComponent],
  templateUrl: './movieslist.component.html',
  styleUrl: './movieslist.component.css',
})
export class MovieslistComponent {

  popularMovies:any
  upcomingMovies:any
  nowPlayingMovies:any
  topRatedMovies:any
  actionMovies:any
  adventureMovies:any
  dialogRef!: MatDialogRef<MovieDetailComponent>;
  hoverTimeout: any;

  constructor(private service:MoviesServiceService, public dialog:MatDialog, private router:Router){
    
  }

  ngOnInit():void{
    this.popular()
    this.upcoming()
    this.nowPlaying()
    this.topRated()
    this.action()
    this.adventure()
   
  }

//categories

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

  action(){
    this.service.getActionMovies().subscribe((res)=>{
      this.actionMovies=res.results
     console.log(this.actionMovies)
    })

  }

  adventure(){
    this.service.getAdventureMovies().subscribe((res)=>{
      this.adventureMovies=res.results
    })
  }


  // for details modal


  openMovieDetail(event: MouseEvent, movie:any, category:string): void {

    event.preventDefault()
   
    const target= event.currentTarget as HTMLElement
    
    const movieCardRect = target.getBoundingClientRect()

  console.log(movieCardRect.left)
  console.log(movieCardRect.top)

    event.preventDefault();
    event.stopPropagation();

    let topPosition:number

    if(category === 'top'){
        topPosition= movieCardRect.top  - 4 *  movieCardRect.height
    }else if(category==='popular'){
      topPosition= topPosition= movieCardRect.top  - 4 * movieCardRect.height
    }

    this.service.getMovieDetails(movie.id).subscribe((details) => {
      if(this.dialogRef){
        this.dialogRef.close()  //close any dialog before i open other
      }
     this.dialogRef= this.dialog.open(MovieDetailComponent, {
        data: {
          movieId: movie.id,
          details: details,
        },
        position: {
          left: `${movieCardRect.left}` + 'px',
          top: `${topPosition}` + 'px' 
        },
        width: '300px', 
        height: 'auto',
        panelClass: 'custom-dialog-container',
      });
    });
  }


  close(){
    this.dialogRef.close()
  }
  


  navigateToMovieDetails(movie:any){
    this.router.navigate(['/movies', movie.id]);
    console.log("clicked", movie.id)
    this.close()
  }


}


  

