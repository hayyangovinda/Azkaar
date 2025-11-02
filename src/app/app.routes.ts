import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Morning } from './components/morning/morning';
import { Evening } from './components/evening/evening';
import { Night } from './components/night/night';
import { Privacy } from './components/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'morning', component: Morning },
  { path: 'evening', component: Evening },
  { path: 'night', component: Night },
  { path: 'privacy', component: Privacy },
  { path: '**', redirectTo: '' }
];
