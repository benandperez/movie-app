import { Component } from '@angular/core';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery = '';
  movies: any[] = [];
  currentPage = 1;

  constructor(private movieService: MovieService) {}

  searchMovies(): void {
    this.movieService.getTrendingMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.searchMovies();
  }
}
