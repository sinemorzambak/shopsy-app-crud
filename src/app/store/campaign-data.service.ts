import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { setCampaignInfo } from './campaign.actions';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {

  constructor(private store: Store<AppState>) {}

  setCampaignInfo(campaignInfo: any) {
    this.store.dispatch(setCampaignInfo({ campaignInfo }));
  }

  getCampaignInfo() {
  }
}
