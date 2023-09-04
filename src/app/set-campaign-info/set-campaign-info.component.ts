import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { CampaignService } from '../firebase.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createCampaign } from '../store/campaign.actions';

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

  constructor(
    private authService: AuthService,
    private campaignService: CampaignService,
    private router: Router,
    private store: Store
  ) {}

  async continueNextStep() {
    try {
      const userId = await this.authService.getCurrentUserId();
      if (userId) {
        const createdCampaign = {
          campaignName: this.campaignName,
          dailyBudget: this.dailyBudget,
          startDate: this.startDate,
          endDate: this.endDate
        };

        await this.campaignService.addCampaignToUser( createdCampaign);
        console.log('Kampanya başarıyla eklenmiştir.');

        this.store.dispatch(createCampaign({ createdCampaign }));

        this.router.navigate(['/ad-set-info']);
      } else {
        console.error('Kullanıcı kimliği alınamadı.');
      }
    } catch (error) {
      console.error('Kampanya eklenirken bir hata oluştu:', error);
    }
  }

  cancelCreation() {
    
  }
}
