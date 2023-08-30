import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCampaign } from '../store/campaign.actions';
import { AppState } from '../store/app.state';
import { Router } from '@angular/router';


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

  constructor(private store: Store<AppState>, private router: Router) { }

  continueNextStep() {
    const campaignInfo = {
      campaignName: this.campaignName,
      dailyBudget: this.dailyBudget,
      startDate: this.startDate,
      endDate: this.endDate
    };
    
    console.log('Dispatching createCampaign action with:', campaignInfo); 
    this.store.dispatch(createCampaign({ campaignInfo }));
    this.clearInputFields();
  
    this.router.navigate(['/ad-set-info']);
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


