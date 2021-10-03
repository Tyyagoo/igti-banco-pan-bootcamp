import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [AppComponent, MovieRatingComponent, PanelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
