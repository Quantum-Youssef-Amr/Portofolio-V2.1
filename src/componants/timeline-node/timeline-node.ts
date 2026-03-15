import { AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import { Tooltip } from "../tooltip/tooltip";
import { Bigtooltip } from "../bigtooltip/bigtooltip";

@Component({
  selector: 'app-timeline-node',
  imports: [Tooltip, Bigtooltip],
  templateUrl: './timeline-node.html',
  styleUrl: './timeline-node.css',
})
export class TimelineNode implements AfterViewInit{

  @Input() Year: string = "";
  @Input() Massage: string = "";
  @Input() End: boolean = false ;

  @Input() NumberOfLines: number = 0;
  MouseOver: boolean = false;
  svgElements: any = [];

  constructor(private elementRef: ElementRef){}

  Indicate(time: number){
      this.svgElements.forEach((el: SVGElement) => {
        el.classList.add('indicate');
        setTimeout(() => {
          el.classList.remove('indicate');
        }, 1000 * time);
      });
    }

    ngAfterViewInit(): void {
    this.svgElements = this.elementRef.nativeElement.querySelectorAll('svg *');
  }
}
