import {  AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { AppData } from '../../services/app.data';
import { PersonalLinks, skill} from '../../app-types.model';
import { SkillCard } from '../../componants/skill-card/skill-card';

@Component({
  selector: 'app-landing-page',
  imports: [ LandingHero, Paragraph, BtnWithImage, SkillCard],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit{

  private _app_data_service: AppData = inject(AppData);

  links!: PersonalLinks;
  skills: Array<skill> = [];
  SkillAmount: number = 12;

  ngOnInit(): void {
    this.links = this._app_data_service.App_Personal_links;
    this.SetUpSkillArr(this.SkillAmount);
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
}
