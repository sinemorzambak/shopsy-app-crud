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
        console.error('Kullanıcı kimliği alınamadı.');
        throw new Error('Kullanıcı kimliği alınamadı.');
      }
    } catch (error) {
      console.error('Kampanya eklenirken bir hata oluştu:', error);
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
        console.error('Kullanıcı kimliği alınamadı.');
        throw new Error('Kullanıcı kimliği alınamadı.');
      }
    } catch (error) {
      console.error('Kampanyalar alınırken bir hata oluştu:', error);
      throw error;
    }
  }

  
  
}
