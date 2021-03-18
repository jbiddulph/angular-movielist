import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favourites', component: FavouritesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
