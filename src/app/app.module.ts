import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, ReadmeComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgbCollapseModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
