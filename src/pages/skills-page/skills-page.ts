import { Component } from '@angular/core';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";

@Component({
  selector: 'app-skills-page',
  imports: [Paragraph, SkillCard],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage {

}
