import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getItems();
  }
}