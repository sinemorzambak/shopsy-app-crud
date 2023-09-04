
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingCardComponent } from './component/shopping-card/shopping-card.component';
import { AuthGuard } from '../auth.guard';
import { SetCampaignInfoContainerComponent } from './set-campaign-info-container/set-campaign-info-container.component';
import { AdSetInfoComponent } from './ad-set-info/ad-set-info.component';
import { AddKeywordsComponent } from './add-keywords/add-keywords.component'; 
import { KeywordsListComponent } from './keywords-list/keywords-list.component'; 
import { CampaignListComponent } from './campaign-list/campaign-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-card', component: ShoppingCardComponent },
  { path: 'shopping-card', component: ShoppingCardComponent, canActivate: [AuthGuard] },
  { path: 'set-campaign-info', component: SetCampaignInfoContainerComponent },
  { path: 'ad-set-info', component: AdSetInfoComponent },
  { path: 'add-keywords', component: AddKeywordsComponent }, 
  { path: 'keywords-list', component: KeywordsListComponent } ,
  { path: 'campaign-list', component: CampaignListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
