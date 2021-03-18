import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private moviesService: MovielistService) {}

  ngOnInit(): void {
    this.moviesService.searchMovies().subscribe((data) => {
      this.movies = data['Search'];
    });
  }
  addFavorite(movie) {
    this.moviesService.addMovieToFavourites(movie);
  }
  remFavorite(movie) {
    this.moviesService.addMovieToFavourites(movie);
  }
}
