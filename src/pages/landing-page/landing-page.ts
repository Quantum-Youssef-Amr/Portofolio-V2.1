import {  Component, inject, OnInit } from '@angular/core';
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { AppData } from '../../services/app.data';
import { PersonalLinks} from '../../app-types.model';
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

  ngOnInit(): void {
    this.links = this._app_data_service.App_Personal_links;
  }
}
