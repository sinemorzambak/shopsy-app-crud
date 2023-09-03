import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { setCampaignInfo , createCampaign} from './campaign.actions';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {

  constructor(private store: Store<AppState>) {}

  setCampaignInfo(campaignInfo: any) {
    this.store.dispatch(setCampaignInfo({ campaignInfo }));
  }
  createCampaign(createdCampaign: any) {
    this.store.dispatch(createCampaign({ createdCampaign }));
  }

  getCampaignInfo() {
  }
}
