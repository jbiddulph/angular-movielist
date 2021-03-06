import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovielistService {
  constructor(private http: HttpClient) {}
  url = 'http://omdbapi.com/?s=green&apikey=33047d7c';
  favapi = 'http://choosapi.test/api/favefilms/';
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  searchMovies() {
    return this.http.get(this.url);
  }
  loadFavourites() {
    return this.http.get(this.favapi, {
      headers: {
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    });
  }
  addMovieToFavourites(movie) {
    this.http
      .post(this.favapi, movie, {
        headers: {
          Authorization: 'Bearer ' + this.currentUser.token,
        },
      })
      .subscribe({
        next: (data) => {
          console.log('data: ', data);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
  removeFavourite(movieid) {
    console.log('id: ', movieid);
    this.http
      .delete(this.favapi + movieid, {
        headers: {
          Authorization: 'Bearer ' + this.currentUser.token,
        },
      })
      .subscribe({
        next: (data) => {
          console.log('data: ', data);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
