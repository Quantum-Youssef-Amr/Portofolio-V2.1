import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-card',
  imports: [],
  templateUrl: './text-card.html',
  styleUrl: './text-card.css',
})
export class TextCard {
  @Input() Title!: string;
  @Input() SubTitle!: string;
}
