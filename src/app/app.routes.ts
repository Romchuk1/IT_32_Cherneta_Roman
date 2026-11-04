import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { AddMovie } from './pages/add-movie/add-movie';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'movies',
    component: Movies
  },
  {
    path: 'movies/add',
    component: AddMovie
  },
  {
    path: 'movie/:id',
    component: MovieDetail
  },
  {
    path: '**',
    redirectTo: ''
  }
];