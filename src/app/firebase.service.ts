import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './shared/auth.service'; 

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  async addCampaignToUser(campaignData: any) {
    try {
      const userId = await this.authService.getCurrentUserId();
      if (userId) {
        await this.firestore
          .collection('users')
          .doc(userId)
          .collection('campaigns')
          .add(campaignData);
      } else {
        console.error('Failed to get user ID.');
        throw new Error('Failed to get user ID.');
      }
    } catch (error) {
      console.error('An error occurred while adding the campaign:', error);
      throw error;
    }
  }

  async getCampaigns() {
    try {
      const userId = await this.authService.getCurrentUserId();
      if (userId) {
        return this.firestore
          .collection('users')
          .doc(userId)
          .collection('campaigns')
          .valueChanges();
      } else {
        console.error('Failed to get user ID.');
        throw new Error('Failed to get user ID.');
      }
    } catch (error) {
      console.error('An error occurred while retrieving campaigns:', error);
      throw error;
    }
  }

  
  
}
