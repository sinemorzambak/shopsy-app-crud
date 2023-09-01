
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { removeKeyword } from '../store/keyword.actions';

@Component({
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.css'],
})
export class KeywordsListComponent implements OnInit {
  keywords: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select((state) => state.keywordState.keywords).subscribe((keywords) => {
      this.keywords = keywords;
    });
  }

  removeKeyword(keyword: any) {
    this.store.dispatch(removeKeyword({ keyword }));
  }
}
