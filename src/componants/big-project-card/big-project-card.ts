import { AfterContentInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../app-types.model';

@Component({
  selector: 'app-big-project-card',
  imports: [],
  templateUrl: './big-project-card.html',
  styleUrl: './big-project-card.css',
})
export class BigProjectCard implements AfterContentInit {
  @Input() Project!: project;
  ProjectLink: string = '';

  constructor(private router: Router){}

  ngAfterContentInit(): void {
    this.ProjectLink = `/${this.Project.projectType === 'Project' ? 'projects' : 'games'}/${this.Project.projectName}`;
  }

  OnClickLink(){
    this.router.navigate([this.ProjectLink], {state: {projectData: this.Project}});
  }
}
