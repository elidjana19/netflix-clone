import { Component, Inject, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../../services/movies-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../header/header.component';
import { RouterLink } from '@angular/router';
import { ShareComponent } from '../../../share/share.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail',
  standalone:true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports:[CommonModule, HeaderComponent, RouterLink, ShareComponent]
})
export class MovieDetailComponent implements OnInit {

  
  movieId: number;
  movieDetails!: any;
  movieCast!: any[];
  movieReviews!: any[];
  position:any

  x:any;
  y:any
  paramId:any


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService: MoviesServiceService, private dialogRef:MatDialogRef<MovieDetailComponent>, 
    private route:ActivatedRoute
  )
   {
    this.movieId = data.movieId;
    this.movieDetails=data.details
  
  }

  ngOnInit(): void {
    const movieId =  this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.getMovieDetails(movieId);
    }
  }

  getMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe((details) => {
      this.movieDetails = details;
    });
  }

}
