import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { MovieDetail } from '../interfaces/movieDetail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  // movie: any;
  public movie:MovieDetail | undefined;
  public idMovie:string = '1'
  public isLoading:boolean = false

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(id).subscribe((data) => ( console.log(data),
     this.movie = data));
    console.log(this.movie);
    
  }

  getImageUrl(movie: any): string {
    if (movie.poster_path===null) return '/assets/images/no_poster.png';
    // if (movie.adult) return '/assets/images/sensitive_content2.png'; // descomentar para reemplazar imagen pixeleada por este asset (y comenntar el css ".censured-image")

    return 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  }
}
