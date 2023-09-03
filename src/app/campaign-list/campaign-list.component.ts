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
    const localStorageData = localStorage.getItem('appState');
    
    if (localStorageData !== null) {
      const parsedData = JSON.parse(localStorageData);

      if (parsedData && parsedData.campaign) {
        const campaignInfo = parsedData.campaign.campaignState.campaignInfo;
        this.campaigns.push({
          campaignName: campaignInfo.campaignName,
          startDate: campaignInfo.startDate,
          endDate: campaignInfo.endDate,
          adGroupName: campaignInfo.adGroupName,
        });
      }
    }
  }
}
