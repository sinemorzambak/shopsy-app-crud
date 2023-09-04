import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setCampaignInfo } from '../store/campaign.actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


interface Product {
  'product-name': string;
  'product-price': number;
  'product-stock': string;
  'product-image-url': string;
}

@Component({
  selector: 'app-ad-set-info',
  templateUrl: './ad-set-info.component.html',
  styleUrls: ['./ad-set-info.component.css'],
})
export class AdSetInfoComponent implements OnInit {
  adGroupName: string = '';
  availableProducts: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(private store: Store<AppState>, private firestore: AngularFirestore,  private router: Router ) {}

  ngOnInit() {
    this.firestore
      .collection<Product>('products')
      .valueChanges()
      .subscribe((products: Product[]) => {
        this.availableProducts = products.map((product) => {
          return {
            ...product,
            'product-image-url': 'assets/images.jpg', 
          };
        });
      });

      this.store
      .select((state) => state.campaignState)
      .subscribe((campaignState) => {
        if (campaignState && campaignState.campaignInfo) {
          this.selectedProducts = campaignState.campaignInfo.selectedProducts || [];
        }
      });
    
  }

  continueNextStep() {
    const updatedCampaignInfo = {
      adGroupName: this.adGroupName,
      selectedProducts: this.selectedProducts,
    };
    this.store.dispatch(setCampaignInfo({ campaignInfo: updatedCampaignInfo }));
    this.router.navigate(['/add-keywords']);
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
