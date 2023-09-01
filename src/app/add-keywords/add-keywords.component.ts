
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { addKeyword } from '../store/keyword.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-keywords',
  templateUrl: './add-keywords.component.html',
  styleUrls: ['./add-keywords.component.css'],
})
export class AddKeywordsComponent {
  keyword: string = '';
  matchType: string = '';
  bid: number = 0;

  constructor(private store: Store<AppState>, private router: Router) {}

  addKeyword() {
    if (this.keyword.trim() !== '') {
      const newKeyword = {
        keyword: this.keyword,
        matchType: this.matchType,
        bid: this.bid,
      };
      this.store.dispatch(addKeyword({ keyword: newKeyword }));

      this.keyword = '';
      this.matchType = '';
      this.bid = 0;

      this.router.navigate(['/keywords-list']);
    }
  }
}
