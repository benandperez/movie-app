import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieListItem, MovieAPIResponse, MoviePageType } from '../interfaces/movieList';
import { MovieService } from '../core/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import * as movieHelper from '../interfaces/movieList';

@Component({
  selector: 'app-page-type-general',
  templateUrl: './page-type-general.component.html',
  styleUrls: ['./page-type-general.component.css']
})
export class PageTypeGeneralComponent {

  public movies: MovieListItem[] = [];
  public page: number = 1
  public first: number = 0
  public totalRecords: number = 20;
  public rows: number = 0;
  public pageType: string = '';
  public title: string = '';
  public isLoading:boolean = true
  @Output() pageChange = new EventEmitter<number>();
  @Input() totalResults: number = 0;
  
  constructor(
    private MovieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    // determina que tipo pagina es y setea titulo dinamicamente (popular | trending | best rated)
    const currentPath = this.activatedRoute.snapshot.url[1].path;
    this.pageType     = movieHelper.getPageType(currentPath)!
    this.title        = movieHelper.setPageTitle(this.pageType)!
    
    // obtiene valores de page y first desde query params para posterior exec de api call
    // this.activatedRoute.queryParams.subscribe(params => {
    //   const pageParam = params['page'];
    //   const firstParam = params['first'];
    //   this.page = +pageParam
    //   this.first = +firstParam
    // });

    this.getMovies();
  }

  // exec api call y rellena variable "movies" dependiendo que tipo de pagina es (popular | trending | best rated)
  getMovies() {
    this.isLoading = true

    switch (this.pageType) {
      case MoviePageType.trending:
        this.MovieService.getTrendingMovies(this.page)
          .subscribe( (resp:MovieAPIResponse) => {
            this.movies = resp.results
            this.totalResults = resp.total_results
            // this.setPaginatorProps(resp)         
            this.isLoading = false
          })
          break;
          
          case MoviePageType.popular:
            this.MovieService.getPopularMovies(this.page)
            .subscribe( (resp:MovieAPIResponse) => {
              this.movies = resp.results
              this.totalResults = resp.total_results
              // this.setPaginatorProps(resp)
              this.isLoading = false         
            })
            break;
            
            case MoviePageType.bestRated:
              this.MovieService.getTopRatedMovies(this.page)
              .subscribe( (resp:MovieAPIResponse) => {
                this.movies = resp.results
                this.totalResults = resp.total_results
              // this.setPaginatorProps(resp)         
              this.isLoading = false
            })
          break;
    }
  }

  changePage(event: any): void {
    
    this.page = event.pageIndex + 1
    this.getMovies();
    this.pageChange.emit(event.pageIndex + 1);
  }

  getImageUrl(item: any): string {
    if (item.poster_path===null) return '/assets/images/no_poster.png';
    if (item.adult) return '/assets/images/sensitive_content2.png';

    return 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
  }

  viewDetails(movieId: MovieListItem): void {
    this.router.navigate(['/movie', movieId.id]);
  }

}
