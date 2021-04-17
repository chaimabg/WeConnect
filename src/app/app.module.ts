import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoworkingSpacesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
