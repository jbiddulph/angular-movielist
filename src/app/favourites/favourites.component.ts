import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favourites: any;
  constructor(private moviesService: MovielistService) {}

  ngOnInit(): void {
    this.moviesService.loadFavourites().subscribe((data) => {
      console.log('data: ', data);
      this.favourites = data;
    });
  }
  remFavorite(movie) {
    this.moviesService.removeFavourite(movie);
  }
}
