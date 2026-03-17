import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-project-card',
  imports: [],
  templateUrl: './big-project-card.html',
  styleUrl: './big-project-card.css',
})
export class BigProjectCard implements AfterContentInit {
  @Input() ProjectImage: string = "";
  @Input() ProjectName: string = "";
  @Input() ProjectDescription: string = "";
  @Input() ProjectType: 'Project' | 'Game' = 'Project';
  ProjectLink: string = '';

  ngAfterContentInit(): void {
    this.ProjectLink = `/${this.ProjectType == 'Project' ? 'projects' : 'games'}/${this.ProjectName}`;
  }
}
