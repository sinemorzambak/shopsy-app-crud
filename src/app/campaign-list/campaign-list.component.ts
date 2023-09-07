import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../firebase.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
})
export class CampaignListComponent implements OnInit {
  campaigns: any[] = [];

  constructor(private campaignService: CampaignService) {}

  async ngOnInit() {
    try {
      const campaigns = await this.campaignService.getCampaigns();
      if (campaigns) {
        campaigns.subscribe((campaignData: any[]) => {
         
          this.campaigns = campaignData.map((campaign) => {
            
            campaign.status = this.isCampaignRunning(campaign) ? 'Running' : 'Not Running';
            return campaign;
          });
        });
      } else {
        console.error('Kampanyalar alınamadı.');
      }
    } catch (error) {
      console.error('Kampanyalar alınırken bir hata oluştu:', error);
    }
  }


  isCampaignRunning(campaign: any): boolean {
    
    if (campaign.isDeleted) {
      return false;
    }

    const currentDate = new Date();
    const endDate = new Date(campaign.endDate);
    return endDate >= currentDate;
  }  
}
