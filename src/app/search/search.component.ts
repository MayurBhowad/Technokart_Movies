import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  private subject: Subject<string> = new Subject();

  ngOnInit(): void {
    this.subject.pipe(debounceTime(500)).subscribe((searchTextValue) => {
      this.searchService.searchMovies(searchTextValue);
    });
  }

  searchMovies(e: any) {
    this.subject.next(e.target.value);
  }
}
