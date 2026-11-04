import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {

  title = '';
  director = '';
  description = '';

  submitted = false;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  addMovie(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem({
      id: this.movieService.getNextId(),
      title: this.title,
      director: this.director,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}