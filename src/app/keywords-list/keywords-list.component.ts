
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
  filteredKeywords: any[] = [];
  keywordSearch: string = '';

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select((state) => state.keywordState.keywords).subscribe((keywords) => {
      this.keywords = keywords;
      this.filteredKeywords = [...keywords]; 
    });
  }

  setMatchType(keyword: any) {
  }

  setBid(keyword: any) {
  }

  removeKeyword(keyword: any) {
    this.store.dispatch(removeKeyword({ keyword }));
  }

  searchKeywords() {
    this.filteredKeywords = this.keywords.filter(keyword =>
      keyword.keyword.toLowerCase().includes(this.keywordSearch.toLowerCase())
    );
  }

  navigateToAddKeywords() {
    this.router.navigate(['/add-keywords']); 
  }

  continueNextStep() {
  }

  cancel() {
  }
}
