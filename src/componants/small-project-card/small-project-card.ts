import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-project-card',
  imports: [],
  templateUrl: './small-project-card.html',
  styleUrl: './small-project-card.css',
})
export class SmallProjectCard {
@Input() ProjectName: string = "";
@Input() ProjectLink: string = "#";
@Input() ProjectLogos: Array<string> = [];
@Input() ProjectDescription: string = "";
}
