import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../app-types.model';

@Component({
  selector: 'app-big-project-card',
  imports: [],
  templateUrl: './big-project-card.html',
  styleUrl: './big-project-card.css',
})
export class BigProjectCard implements AfterContentInit, AfterViewInit {
  @ViewChild("main") main!: ElementRef<HTMLDivElement>;
  @Input() Project!: project;
  ProjectLink: string = '';

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    let el = this.main?.nativeElement;
    if(el){
      el.style.background = `url('/${this.Project.projectMainImage}')`
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.backgroundRepeat = 'no-repeat';
    }
  }

  ngAfterContentInit(): void {
    let m_projectToURLName = this.Project.projectName.toLowerCase().split(" ").join("-");
    this.ProjectLink = `/${this.Project.projectType === "Game" ? 'games' : 'projects'}/${m_projectToURLName}`;
  }

  OnClickLink(){
    this.router.navigate([this.ProjectLink], {state: {projectData: this.Project}});
  }
}
