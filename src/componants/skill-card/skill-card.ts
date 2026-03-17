import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
@Input() progress: number = 0;
@Input() Title: string = "";
@Input() Image: string = "";
@Input() gray: boolean = true;
}
