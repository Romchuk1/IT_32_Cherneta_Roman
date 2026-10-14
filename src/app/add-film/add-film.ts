import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Film {
  title: string;
  director: string;
  description: string;
}

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-film.html',
  styleUrl: './add-film.css'
})
export class AddFilm {
  newItem = {
    title: '',
    director: '',
    description: ''
  };

  films: Film[] = [];
  submitted = false;

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.films.push({
      title: this.newItem.title,
      director: this.newItem.director,
      description: this.newItem.description
    });

    form.resetForm();
    this.submitted = false;
  }
}
