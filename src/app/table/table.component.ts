import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private searchService: SearchService) {}
  movies: any[] = [];

  img = '/ct04FCFLPImNG5thcPLRnVsZlmS.jpg';

  ngOnInit(): void {
    this.searchService._newMovies$.subscribe((data) => {
      this.movies = data.results;
    });
  }
}
