import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidateEqualModule } from 'ng-validate-equal';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';
import { CoworkingspaceItemComponent } from './coworkingspace-item/coworkingspace-item.component';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddSpaceComponent } from './add-space/add-space.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UserService} from './services/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddReviewComponent } from './add-review/add-review.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { EditSpaceComponent } from './edit-space/edit-space.component';
import { SpaceItemComponent } from './space-item/space-item.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ResetPassComponent } from './forget-pass/reset-pass/reset-pass.component';





@NgModule({
  declarations: [
    AppComponent,
    EditSpaceComponent,
    LoginComponent,
    RegisterComponent,
    CoworkingSpacesListComponent,
    CoworkingspaceItemComponent,
    CowSpaceDetailsComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,
    AddSpaceComponent,
    HomeComponent,
    PageNotFoundComponent,
      AddReviewComponent,
      PaymentPageComponent,
      EditSpaceComponent,
      SpaceItemComponent,
      ForgetPassComponent,
      ResetPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ValidateEqualModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgbModule,
    ValidateEqualModule,
    MatDialogModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,

  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
