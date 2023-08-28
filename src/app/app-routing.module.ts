import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingCardComponent } from './component/shopping-card/shopping-card.component';
import { AuthGuard } from '../auth.guard'; 
import { SetCampaignInfoContainerComponent } from './set-campaign-info-container/set-campaign-info-container.component';


const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component:LoginComponent },
{ path: 'dashboard', component:DashboardComponent },
{ path: 'register', component:RegisterComponent },
{ path: 'shopping-card', component: ShoppingCardComponent }, 
{ path: 'shopping-card', component: ShoppingCardComponent, canActivate: [AuthGuard] },
{ path: 'set-campaign-info', component: SetCampaignInfoContainerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
