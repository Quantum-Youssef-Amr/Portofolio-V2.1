import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page';
import { Page404 } from '../pages/page404/page404';

export const routes: Routes = [
  {component: LandingPage, path: ""},
  {component: Page404, path: "**"},
];
