import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadmeComponent } from './components/readme/readme.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'readme', component: ReadmeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: ReadmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
