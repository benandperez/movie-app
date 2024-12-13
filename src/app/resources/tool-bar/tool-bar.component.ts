import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  public items: MenuItem[] | undefined;

  public searchTerm: string = '';

  constructor( 
    public router: Router,
    private movieService:MovieService
  ) { }

  ngOnInit() {
      this.items = [
          {
              label: 'Trending',
              // icon: 'fa-regular fa-fire',
              icon: 'pi pi-fw pi-bolt',
              routerLink: 'movies/trending',
              queryParams: { page: 1, first: 0 }
          },
          {
              label: 'Popular',
              // icon: 'pi pi-fw pi-thumbs-up-fill',
              icon: 'pi pi-fw pi-thumbs-up',
              routerLink: 'movies/popular',
              queryParams: { page: 1, first: 0 }
          },
          {
              label: 'Best Rated',
              // icon: 'pi pi-fw pi-star-fill',
              icon: 'pi pi-fw pi-star',
              routerLink: 'movies/best-rated',
              queryParams: { page: 1, first: 0 }
          },

      ];
  }

  onSearch (ev: KeyboardEvent | MouseEvent ) {
    // Si es un KeyboardEvent y la tecla es 'Enter' o es un MouseEvent y el tipo es 'click'
    if ((ev as KeyboardEvent).key==='Enter' || (ev as MouseEvent).type==='click') {
      // setea el serchTerm
      this.movieService.setSearchTerm(this.searchTerm) 
      //redirige a pagina search con default query params
      this.router.navigate([`/movies/search`], {
        queryParams:{ q:this.searchTerm, page:1, first:0, year:'', includeAdult:false }
      }) 
    }
  }

}
