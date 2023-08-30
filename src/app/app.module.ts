import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


import { ShoppingCardComponent } from './component/shopping-card/shopping-card.component';
import { AuthGuard } from '../auth.guard';
import { SetCampaignInfoComponent } from './set-campaign-info/set-campaign-info.component';
import { SetCampaignInfoContainerComponent } from './set-campaign-info-container/set-campaign-info-container.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { campaignReducer } from './store/campaign.reducer';
import { EffectsModule } from '@ngrx/effects';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { localStorageSyncReducer } from './store/localStorageSync.reducer';
import { AdSetInfoComponent } from '../app/ad-set-info/ad-set-info.component'; 
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ShoppingCardComponent,
    SetCampaignInfoContainerComponent,
    SetCampaignInfoComponent,
    AdSetInfoComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    FormsModule,

    StoreModule.forRoot({
      campaign: campaignReducer,
    }, { metaReducers: [localStorageSyncReducer] }),


    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production 
    }),
    
    EffectsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase), 
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
