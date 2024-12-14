import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageTypeGeneralComponent } from './page-type-general/page-type-general.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies/search', component: PageTypeGeneralComponent, data: { pageType: 'search' } },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'movies/trending', component: PageTypeGeneralComponent, data: { pageType: 'trending' } },
  { path: 'movies/popular', component: PageTypeGeneralComponent, data: { pageType: 'popular' } },
  { path: 'movies/best-rated', component: PageTypeGeneralComponent, data: { pageType: 'best-rated' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
