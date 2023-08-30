import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private routerSubscription: any;

  constructor(private router: Router, private store: Store<AppState>) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started'); 
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended'); 

        
        this.store.select(state => state.campaignState.campaignInfo).subscribe(campaignInfo => {
          console.log('Current campaignInfo from Redux store:', campaignInfo);
        });
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
