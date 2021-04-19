import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowSpaceDetailsComponent } from './cow-space-details/cow-space-details.component';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';

const routes: Routes = [
  {path: 'coworkingspaces', component: CoworkingSpacesListComponent},
  {path: 'coworkingspace/:_id', component:  CowSpaceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
