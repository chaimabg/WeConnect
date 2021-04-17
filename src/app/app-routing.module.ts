import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoworkingSpacesListComponent } from './coworking-spaces-list/coworking-spaces-list.component';

const routes: Routes = [
  {path: 'coworkingspaces', component: CoworkingSpacesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
