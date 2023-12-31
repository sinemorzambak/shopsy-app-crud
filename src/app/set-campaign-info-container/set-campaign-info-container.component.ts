import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCampaign } from '../store/campaign.actions';

@Component({
  selector: 'app-set-campaign-info-container',
  templateUrl: './set-campaign-info-container.component.html',
  styleUrls: ['./set-campaign-info-container.component.css']
})
export class SetCampaignInfoContainerComponent {

  constructor(private store: Store) { }

  onCreateCampaign(createdCampaign: any) {
    console.log('Received campaign information:', createdCampaign);
    this.store.dispatch(createCampaign({ createdCampaign }));
  }

  onCancelCreation() {
   
  }
}
