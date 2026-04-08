import { Component } from '@angular/core';
import { projectSection } from '../../app-types.model';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";

@Component({
  selector: 'app-projects-page',
  imports: [Paragraph, BigProjectCard, BtnWithImage],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  PageContent: Array<projectSection> = [
    {
      title: 'Front-end Projects',
      projects: []
    },
    {
      title: 'Data science Projects',
      projects: []
    }
  ];
}
