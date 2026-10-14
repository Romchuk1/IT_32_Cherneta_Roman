import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './film-form.html',
  styleUrl: './film-form.css'
})
export class FilmForm {
  newItem = {
    title: '',
    director: '',
    description: ''
  };

  films = [
    {
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космічну подорож.'
    }
  ];

  submitted = false;

  addItem(form: NgForm) {
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