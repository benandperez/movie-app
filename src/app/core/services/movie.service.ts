import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieAPIResponse } from '../../interfaces/movieList';
import { MovieDetail } from '../../interfaces/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = environment.apiBaseUrl
  private apiKey = environment.apiKey


  
  get httpHeaders(){
    return new HttpHeaders().set('Authorization',this.apiKey)
  }
  
  constructor(private http: HttpClient) {}

  getMovieDetails(movieId: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get(`${this.baseUrl}/movie/${movieId}`, { params });
  }

  getTrendingMovies( page:number = 1 ):Observable<MovieAPIResponse> {

    return this.http.get<MovieAPIResponse>(
      `${this.baseUrl}/trending/movie/week`,
      { headers:this.httpHeaders, params:{page} }
    )
  }
  
  getPopularMovies(page:number = 1):Observable<MovieAPIResponse> {
    return this.http.get<MovieAPIResponse>(
      `${this.baseUrl}/movie/popular`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
  
  getTopRatedMovies(page:number = 1):Observable<MovieAPIResponse> {
    return this.http.get<MovieAPIResponse>(
      `${this.baseUrl}/movie/top_rated`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
  
  getMovieById(id:number):Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.baseUrl}/movie/${id}`,
      {headers:this.httpHeaders }
    )
  }
  
  searchMoviesByQuery(
    searchTerm:string, page:number = 1, year:string='',include_adult:boolean=false
  ):Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/search/movie`, {
        headers:this.httpHeaders, 
        params: {
          page, 
          query:searchTerm, 
          include_adult, 
          primary_release_year:year
        } 
      }
    )
  }
}
