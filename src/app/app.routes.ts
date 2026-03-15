import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page';
import { Page404 } from '../pages/page404/page404';
import { AboutPage } from '../pages/about-page/about-page';
import { SkillsPage } from '../pages/skills-page/skills-page';

export const routes: Routes = [
  {component: LandingPage, path: ""},
  {component: AboutPage, path: "about"},
  {component: SkillsPage, path: "skills"},
  {component: Page404, path: "**"},
];
