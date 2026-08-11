import {  AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { AppData } from '../../services/app.data';
import { PersonalLinks, project, skill} from '../../app-types.model';
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { SkillCard } from '../../componants/skill-card/skill-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [ LandingHero, Paragraph, BtnWithImage, SkillCard, BigProjectCard],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit{

  private _app_data_service: AppData = inject(AppData);

  links!: PersonalLinks;
  skills: Array<skill> = [];
  games: Array<project> = [];
  projects: Array<project> = [];
  SkillAmount: number = 12;
  GameAmount: number = 4;
  ProjectsAmount: number = 8;

  constructor(private router: Router){}


  ngOnInit(): void {
    this.links = this._app_data_service.App_Personal_links;
    this.SetUpSkillArr(this.SkillAmount);
    this.SetUpGames(this.GameAmount);
    this.SetUpProjects(this.ProjectsAmount);
  }

  private SetUpSkillArr(SkillAmount: number) {
    for (let idx = 0; idx < SkillAmount; idx++) {
      let m_skillCatIdx = Math.floor(Math.random() * this._app_data_service.skills.length);
      let m_selectedSkill = this._app_data_service.skills[m_skillCatIdx].skills[Math.floor(Math.random() * this._app_data_service.skills[m_skillCatIdx].skills.length)];

      // don't allow skill duplicates
      if (this.skills.indexOf(m_selectedSkill) != -1) {
        idx--;
        continue;
      }

      this.skills.push(
        m_selectedSkill
      );
    }
  }

  private SetUpGames(GameAmount: number){
    for (let idx = 0; idx < GameAmount; idx++) {
      let m_gameCatIdx = Math.floor(Math.random() * this._app_data_service.GamesPageContent.projects.length);
      let m_selectedGame = this._app_data_service.GamesPageContent.projects[m_gameCatIdx];

      if(this.games.indexOf(m_selectedGame) != -1){
        idx--;
        continue;
      }

      this.games.push(
        m_selectedGame
      );
    }
  }

  private SetUpProjects(ProjectAmount: number){
    for (let idx = 0; idx < ProjectAmount; idx++) {
      let m_projectCatIdx = Math.floor(Math.random() * this._app_data_service.ProjectsPageContent.length);
      let m_selectedProject = this._app_data_service.ProjectsPageContent[m_projectCatIdx].projects[Math.floor(Math.random() * this._app_data_service.ProjectsPageContent[m_projectCatIdx].projects.length)];

      // don't allow skill duplicates
      if (this.projects.indexOf(m_selectedProject) != -1) {
        idx--;
        continue;
      }

      this.projects.push(
        m_selectedProject
      );
    }
  }

  GoToGames(){
    this.router.navigate(['/games']);
  }

  GoToProjects(){
    this.router.navigate(['/projects']);
  }
}
