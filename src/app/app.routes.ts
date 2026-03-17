import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page';
import { Page404 } from '../pages/page404/page404';
import { AboutPage } from '../pages/about-page/about-page';
import { SkillsPage } from '../pages/skills-page/skills-page';
import { ProjectsPage } from '../pages/projects-page/projects-page';
import { GamesPage } from '../pages/games-page/games-page';
import { ContactPage } from '../pages/contact-page/contact-page';

export const routes: Routes = [
  {component: LandingPage, path: ""},
  {component: AboutPage, path: "about"},
  {component: SkillsPage, path: "skills"},
  {component: ProjectsPage, path: "projects"},
  {component: GamesPage, path: "games"},
  {component: ContactPage, path: "contacts"},
  {component: Page404, path: "**"},
];
