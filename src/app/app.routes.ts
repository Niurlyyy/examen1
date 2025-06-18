import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalaxiasComponent } from './components/galaxias/galaxias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galaxias', component: GalaxiasComponent }
];