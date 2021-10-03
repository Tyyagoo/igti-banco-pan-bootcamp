import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RefreshedComponent } from './refreshed/refreshed.component';
import { ChangedComponent } from './changed/changed.component';

@NgModule({
  declarations: [AppComponent, RefreshedComponent, ChangedComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
