import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../../services/movies-service.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone:true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports:[CommonModule]
})
export class MovieDetailComponent implements OnInit {

  movie?:any
  castPeople?:any
  video?:any

  paramId:any
  constructor(private service: MoviesServiceService, private route: ActivatedRoute,
    private meta:Meta, private title:Title
  ) {}

  ngOnInit() {
     this.paramId = this.route.snapshot.paramMap.get('id');
   


    this.cast(this.paramId)

  }




  cast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      this.castPeople=res.cast
      console.log(this.castPeople)
    })
  }

 

}
