import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../../services/movies-service.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../header/header.component';
import { RouterLink } from '@angular/router';
import { ShareComponent } from '../../../share/share.component';

@Component({
  selector: 'app-movie-detail',
  standalone:true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports:[CommonModule, HeaderComponent, RouterLink, ShareComponent]
})
export class MovieDetailComponent implements OnInit {

  
  castPeople?:any
  video?:any
  details?:any

  movie: any;

  movieLink!:string
  showShare: boolean = false;

  paramId:any

  constructor(private service: MoviesServiceService, private route: ActivatedRoute,
    private meta:Meta, private title:Title
  ) {}

  ngOnInit() {
     this.paramId = this.route.snapshot.paramMap.get('id');

     this.movieLink = `${window.location.origin}/movie/${this.paramId}`;
   
    this.cast(this.paramId)
   // this.getReviews(this.paramId)

    this.movieDetails(this.paramId)
    

  }



  cast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      this.castPeople=res.cast
      console.log(this.castPeople)
    })
  }


  getReviews(id:any){
    this.service.getReviews(id).subscribe((res)=>{
      console.log(res.results)
    })
  }


  movieDetails(id: string): void {
    this.service.getMovieDetails(id).subscribe(
      (res: any) => {
        this.movie = res;
        console.log(this.movie)
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }


  shareMovie() {
    this.movieLink = `${window.location.origin}/movie/${this.paramId}`;
    this.showShare = true;
  }

 

}
