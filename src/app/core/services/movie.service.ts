import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieAPIResponse } from '../../interfaces/movieList';
import { MovieDetail } from '../../interfaces/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}
  

  private baseUrl = environment.apiBaseUrl
  private apiKey = environment.apiKey
  
  // BehaviorSubject para almacenar valor actual de variable y notificar a los observadores cuando cambie
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Observable expuesto para que los componentes puedan suscribirse a los cambios
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();
  setPaginatorProperties = (apiResponse:any) => {

    //! NOTA: API moviedb LIMITA busqueda a 20 items x pagina con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
    const totalRecords = apiResponse.total_results > 500*20 ? 500*20 : apiResponse.total_results 
    const rows = 20 //! NOTA: 20 en duraceli para EVITAR problemas por inconsistencia nro de rows al cambiar de pagina (nro pages en paginator se vuelve loco)!
    return {totalRecords, rows}
}
  


  
  get httpHeaders(){
    return new HttpHeaders().set('Authorization',this.apiKey)
  }
  

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

  

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
