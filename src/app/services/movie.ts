import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос.'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про планету Пандора.'
    },
    {
      id: 3,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Фільм про сни та свідомість.'
    }
  ];

  getItems(): Movie[] {
    return this.movies;
  }

  getItemById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addItem(item: Movie): void {
    this.movies.push(item);
  }

  getNextId(): number {
    return this.movies.length > 0
      ? Math.max(...this.movies.map(movie => movie.id)) + 1
      : 1;
  }
}