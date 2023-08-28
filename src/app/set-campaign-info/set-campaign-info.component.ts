import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCampaign } from '../store/campaign.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-set-campaign-info',
  templateUrl: './set-campaign-info.component.html',
  styleUrls: ['./set-campaign-info.component.css']
})
export class SetCampaignInfoComponent {

  campaignName: string = '';
  dailyBudget: number = 0;
  startDate: string = '';
  endDate: string = '';

  constructor(private store: Store<AppState>) { }

  saveCampaign() {
    const campaignInfo = {
      campaignName: this.campaignName,
      dailyBudget: this.dailyBudget,
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.store.dispatch(createCampaign({ campaignInfo }));
    this.clearInputFields();
  }

  cancelCreation() {
    this.clearInputFields();
  }

  private clearInputFields() {
    this.campaignName = '';
    this.dailyBudget = 0;
    this.startDate = '';
    this.endDate = '';
  }
}
