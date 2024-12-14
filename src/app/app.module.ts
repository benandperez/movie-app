import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolBarComponent } from './resources/tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingComponent } from './resources/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PageTypeGeneralComponent } from './page-type-general/page-type-general.component';
import { PaginatorPrimeComponent } from './paginator-prime/paginator-prime.component';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SearchComponent,
    ToolBarComponent,
    CarouselComponent,
    LoadingComponent,
    PageTypeGeneralComponent,
    PaginatorPrimeComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule,
    CarouselModule,
    MatProgressSpinnerModule,
    ImageModule,
    MenubarModule,
    CardModule,
    ChipModule,
    DividerModule,
    PaginatorModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
