import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private firestore: AngularFirestore) { }

  
  addCampaignToUser(userId: string, campaignData: any) {
    return this.firestore.collection('users').doc(userId).collection('campaigns').add(campaignData);
  }

}
