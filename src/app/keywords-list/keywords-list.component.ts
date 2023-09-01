import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { addKeyword, removeKeyword } from '../store/keyword.actions';
import { Router } from '@angular/router';


@Component({ 
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.css'],
})
export class KeywordsListComponent {
  keywords: any[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.keywordState.keywords).subscribe(keywords => {
      this.keywords = keywords;
    });
  }

  
  setMatchType(keyword: any, matchType: string) {
   
  
  }

  setBid(keyword: any, bid: number) {
   
  }

  removeKeyword(keyword: any) {
    
    this.store.dispatch(removeKeyword({ keyword }));
  }
}
