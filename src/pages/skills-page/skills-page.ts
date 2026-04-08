import { Component, inject, OnInit } from '@angular/core';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";
import { skillPar } from '../../app-types.model';
import { AppData } from '../../services/app.data';

@Component({
  selector: 'app-skills-page',
  imports: [Paragraph, SkillCard],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage implements OnInit{
  private _app_data: AppData = inject(AppData)
  skills!: Array<skillPar>;

  ngOnInit(): void {
      this.skills = this._app_data.skills;
  }
}

