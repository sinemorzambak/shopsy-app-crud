import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
})
export class CampaignListComponent implements OnInit {
  campaigns: any[] = [];

  constructor() {}

  ngOnInit() {
    const storedCampaignState = localStorage.getItem('campaignState');
  
    if (storedCampaignState) {
      const campaignState = JSON.parse(storedCampaignState);
      
      const campaignInfo = campaignState.campaign.campaignState.campaignInfo;
      const createdCampaign = campaignState.campaign.campaignState.createdCampaign;
  
      if (campaignInfo && createdCampaign) {
        const status = createdCampaign ? 'Running' : 'Not Started';
  
        this.campaigns.push({
          campaignName: createdCampaign.campaignName,
          startDate: createdCampaign.startDate,
          endDate: createdCampaign.endDate,
          adGroupName: campaignInfo.adGroupName,
          status: status, 
        });
      }
    }
  }
  
}
