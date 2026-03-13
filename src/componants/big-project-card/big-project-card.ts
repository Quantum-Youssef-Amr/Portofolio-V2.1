import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-project-card',
  imports: [],
  templateUrl: './big-project-card.html',
  styleUrl: './big-project-card.css',
})
export class BigProjectCard {
  @Input() ProjectImage: string = "";
  @Input() ProjectName: string = "";
  @Input() ProjectDescription: string = "";
}
