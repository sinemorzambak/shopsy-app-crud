import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { addKeyword } from '../store/keyword.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-keywords',
  templateUrl: './add-keywords.component.html',
  styleUrls: ['./add-keywords.component.css']
})
export class AddKeywordsComponent {
  keyword: string = '';

  constructor(private store: Store<AppState> ,private router: Router) {}

  addKeyword() {
    const newKeyword = {
      keyword: this.keyword
    };
    this.store.dispatch(addKeyword({ keyword: newKeyword }));
    this.router.navigate(['/keywords-list']);


    this.keyword = '';
  }
  cancel(){
    const confirmation = confirm('Are you sure you want to cancel adding words to the campaign?');

    if (confirmation) {
      
      this.router.navigate(['/ad-set-info']);
    } else {
      
      console.log('Word insertion has been cancelled.');
    }
  }
}
