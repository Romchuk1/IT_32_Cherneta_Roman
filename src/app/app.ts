import { Component } from '@angular/core';
import { FilmForm } from './film-form/film-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}