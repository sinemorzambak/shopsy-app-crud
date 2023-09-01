// keywords-list.component.ts

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
    // State'ten keyword'leri al
    this.store.select((state) => state.keywordState.keywords).subscribe((keywords) => {
      this.keywords = keywords;
    });
  }

  removeKeyword(keyword: any) {
    // Keyword'ü state'ten kaldır
    this.store.dispatch(removeKeyword({ keyword }));
  }
}
