import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { TimelineNode } from "../timeline-node/timeline-node";

@Component({
  selector: 'app-timeline',
  imports: [TimelineNode],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline implements AfterViewInit{
  @Input() Timeline: Array<TimelineNodeDT> = []
  @ViewChildren(TimelineNode) nodes!: QueryList<TimelineNode>;
  indicateIndex: number = -1;

  ngAfterViewInit(): void {
    const nodesELementArr = this.nodes.toArray();
    setInterval(()=>{

      let is_hovering = nodesELementArr.reduce((acc : boolean, val) => acc = acc || val.MouseOver, false);

      if(!is_hovering){
        this.indicateIndex = ++this.indicateIndex % nodesELementArr.length;
        nodesELementArr[this.indicateIndex].Indicate(0.9);
      }

    }, 1000);
  }
}

export type TimelineNodeDT = {
  year: string,
  massage: string
}
