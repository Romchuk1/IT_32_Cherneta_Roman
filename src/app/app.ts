
import { Component } from '@angular/core';
import { AddFilm } from './add-film/add-film';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddFilm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
};
