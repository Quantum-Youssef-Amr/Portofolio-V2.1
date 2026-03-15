import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigtooltip',
  imports: [],
  templateUrl: './bigtooltip.html',
  styleUrl: './bigtooltip.css',
})
export class Bigtooltip {
  @Input() NodeTooltipMassage: string = "";
}
