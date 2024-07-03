import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/movies';
const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGExNTM3NGIxMDcyODlhNzZiOGFmNGZhY2FkZmNhZiIsInN1YiI6IjYwYzhkZDQ0Y2E4MzU0MDAyOTk1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R9ZhfiS3W_OueoH1NHoOu1kVT-cuNqHgDewH7ve5MIs'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  url:string= 'https://api.themoviedb.org/3'
  private apikey="1bf0cdb2a1a440a10fa08edb0d8b7ab4"
 

  constructor( private http:HttpClient) { }


  getPopularMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/movie/popular?api_key=${this.apikey}`)
  }

  
  getUpcomingMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/movie/upcoming?api_key=${this.apikey}`)
  }

  getNowPlayingMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/movie/now_playing?api_key=${this.apikey}`)
  }

  getTopRatedMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/movie/top_rated?api_key=${this.apikey}`)
  }

  

  // Details
  getMovieDetails(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}.movie/${id}?api_key=${this.apikey}`)

  }
  getMovieVideo (id: any): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/movie/${id}/videos?api_key=${this.apikey}`)
  }

  getMovieCast (id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/movie/${id}/credits?api_key=${this.apikey}`)
  }
}
