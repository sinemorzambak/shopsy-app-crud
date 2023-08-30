import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setCampaignInfo } from '../store/campaign.actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface Product {
  'product-name': string;
  'product-price': number;
  'product-stock': string;
  'product-image-url': string; 
}

@Component({
  selector: 'app-ad-set-info',
  templateUrl: './ad-set-info.component.html',
  styleUrls: ['./ad-set-info.component.css']
})
export class AdSetInfoComponent implements OnInit {
  adGroupName: string = '';
  availableProducts: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(
    private store: Store<AppState>,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.firestore.collection<Product>('products').valueChanges().subscribe((products: Product[]) => {
      this.availableProducts = products;
    });


    const storageInstance = getStorage();
    const productImageRef = ref(storageInstance, 'tshirt.jpg'); 

    
    getDownloadURL(productImageRef).then((url) => {
      const productWithImage: Product = {
        'product-name': 'Product with Image',
        'product-price': 20,
        'product-stock': 'In Stock',
        'product-image-url': url, 
      };
      this.availableProducts.push(productWithImage);
    });

    this.store.select(state => state.campaignState.campaignInfo).subscribe(campaignInfo => {
      this.selectedProducts = campaignInfo.selectedProducts || [];
    });
  }

  continueNextStep() {
    const updatedCampaignInfo = {
      adGroupName: this.adGroupName,
      selectedProducts: this.selectedProducts
    };
    this.store.dispatch(setCampaignInfo({ campaignInfo: updatedCampaignInfo }));
  }

  addProduct(product: Product) {
    if (!this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);
    }
  }

  removeProduct(product: Product) {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }

  cancel() {
    
  }
}
