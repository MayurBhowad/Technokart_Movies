import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'https://api.themoviedb.org/3';

  private _movies$ = new BehaviorSubject<any>([]);
  _newMovies$ = this._movies$.asObservable();

  public async searchMovies(string: string) {
    if (string.length === 0) return;
    this.http
      .get(
        `${this.BASE_URL}/search/multi?api_key=${environment.TMDB_KEY}&query=${string}&page=1`
      )
      .subscribe((data) => {
        this._movies$.next(data);
      });
  }
}
