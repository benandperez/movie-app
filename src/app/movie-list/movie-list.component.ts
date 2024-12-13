import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { MovieListItem } from 'src/app/interfaces/movieList';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  @Input() totalResults: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  public isLoadingTrending: boolean = false
  public isLoadingPopular: boolean = false
  public isLoadingTopRated: boolean = false 
  @Input() trendingMovies:MovieListItem[] = []
  @Input() popularMovies:MovieListItem[] = []
  @Input() topRatedMovies:MovieListItem[] = []

  
  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getPopularMovies()
    this.getTopRatedMovies()
  }

  getTrendingMovies () {
    this.isLoadingTrending = true
    this.movieService.getTrendingMovies()
      .subscribe( resp => {
        this.trendingMovies = resp.results
        this.isLoadingTrending = false
      })
  }
  
  getPopularMovies () {
    this.isLoadingPopular = true
    this.movieService.getPopularMovies()
      .subscribe( resp => {
        this.popularMovies = resp.results
        this.isLoadingPopular = false
      })
  }
  
  getTopRatedMovies () {
    this.isLoadingTopRated = true
    this.movieService.getTopRatedMovies()
      .subscribe( resp => {
        this.topRatedMovies = resp.results
        this.isLoadingTopRated = false
      })
  }

  changePage(event: any): void {
    this.pageChange.emit(event.pageIndex + 1);
  }
  viewDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }
  
}
