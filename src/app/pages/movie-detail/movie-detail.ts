import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {

  id: number = 0;

  movies = [
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      id: 2,
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      id: 3,
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ];

  movie: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);

      this.movie = this.movies.find(
        movie => movie.id === this.id
      );
    });
  }

}