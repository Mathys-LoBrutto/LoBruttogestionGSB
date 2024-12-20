import { Routes } from '@angular/router';
import { PraticienListComponent } from './praticien-list/praticien-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { NewPraticienComponent } from './new-praticien/new-praticien.component';

export const routes: Routes = [

  { path: 'praticiens', component: PraticienListComponent },
  { path: '', component: LandingPageComponent },
  { path : 'create', component: NewPraticienComponent },
];
