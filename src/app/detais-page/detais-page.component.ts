import { Component } from '@angular/core';
import { MovieslistComponent } from '../movies/movies-list/movieslist/movieslist.component';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movies-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detais-page',
  standalone: true,
  imports: [MovieslistComponent, CommonModule],
  templateUrl: './detais-page.component.html',
  styleUrl: './detais-page.component.css'
})
export class DetaisPageComponent {

  paramId:any
  movie?:any
  castPeople?:any
  reviews:any
  video!:any

  castExpanded = true; // Initial state for cast section
  reviewsExpanded = false; // Initial state for reviews section
  constructor(private route:ActivatedRoute, private service:MoviesServiceService, private router:Router){
  }

  ngOnInit(){
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.movieDetails(this.paramId)
    this.cast(this.paramId)
     this.getReviews(this.paramId)
     this.getvideo(this.paramId)
  }


  cast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      this.castPeople=res.cast
      //console.log(this.castPeople)
    })
  }


  getReviews(id:any){
    this.service.getReviews(id).subscribe((res)=>{
      this.reviews=res.results
      console.log(res.results)
    })
  }


  movieDetails(id: string): void {
    this.service.getMovieDetails(id).subscribe(
      (res: any) => {
        this.movie = res;
        //console.log(this.movie)
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  getvideo(id:string){
  this.service.getMovieVideo(id).subscribe((res)=>{
    this.video=res.results
    this.video.forEach((element:any)=>{
      if(element.type == "Trailer"){
        this.video=element.key
      }
    })
  })
  }
  

  toHome(){
    this.router.navigate(['/movies'])
  }



  toggleCast() {
    this.castExpanded = !this.castExpanded;
  }

  toggleReviews() {
    this.reviewsExpanded = !this.reviewsExpanded;
  }



  
}
