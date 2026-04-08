import { AfterContentInit, Component, Input } from '@angular/core';
import { project } from '../../app-types.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-project-card',
  imports: [],
  templateUrl: './small-project-card.html',
  styleUrl: './small-project-card.css',
})
export class SmallProjectCard implements AfterContentInit{
  @Input() Project!: project;
  ProjectLink: string = '';


  constructor(private router: Router){}

  ngAfterContentInit(): void {
    this.ProjectLink = `/${this.Project.projectType == 'Project' ? 'projects' : 'games'}/${this.Project.projectName}`;
  }


  OnClickLink(){
    this.router.navigate([this.ProjectLink], {state: {projectData: this.Project}});
  }
}
