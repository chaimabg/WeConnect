import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RegisterComponent} from './register/register.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { AddSpaceComponent } from './add-space/add-space.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import {EditSpaceComponent} from './edit-space/edit-space.component';
import {ResetPassComponent} from "./forget-pass/reset-pass/reset-pass.component";
import {PayementComponent} from "./payement/payement.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'coworkingspaces', component: CoworkingSpacesListComponent},
  {path: 'coworkingspace/:_id', component:  CowSpaceDetailsComponent},
  {path: 'profile', component:  UserProfileComponent},
  {path: 'addSpace', component: AddSpaceComponent},
  {path: 'EditSpace/:_id', component: EditSpaceComponent},
  {path: 'ReservationList/:_id', component: ReservationListComponent},
  {path: '', component: HomeComponent},
  {path: '404NOTFOUND', component: PageNotFoundComponent},
  {path: 'payment', component: PaymentPageComponent},
  {path: 'paymentPage', component: PayementComponent},
  {path: 'resetPassword/:token', component: ResetPassComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
