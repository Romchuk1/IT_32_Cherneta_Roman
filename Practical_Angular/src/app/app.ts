import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = '';
  year: number | null = null;
  rating: number | null = null;

  constructor(private movieService: MovieService) {}

  get movies() {
    return this.movieService.getMovies();
  }

  addMovie() {
    if (
      this.title &&
      this.year !== null &&
      this.rating !== null
    ) {
      this.movieService.addMovie(
        this.title,
        this.year,
        this.rating
      );

      this.title = '';
      this.year = null;
      this.rating = null;
    }
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id);
  }
}