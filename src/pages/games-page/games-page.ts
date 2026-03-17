import { Component } from '@angular/core';
import { projectSection } from '../../app-types.model';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";

@Component({
  selector: 'app-games-page',
  imports: [Paragraph, BigProjectCard, BtnWithImage],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage {
  PageContent: projectSection = {
    title: 'Games',
    projects: [
      {
        projectMainImage: '',
        projectImages: [],
        projectIcon: '',
        projectName: '',
        projectDescription: [],
        projectPlatform: 'Code',
        projectVersion: '',
        projectTech: [],
        projectUrl: '',
        projectItch: '',
        projectGithub: '',
        projectCreateYear: '',
        projectLastUpdateYear: '',
        projectStatus: 'complete',
        Credits: []
      },
      {
        projectMainImage: '',
        projectImages: [],
        projectIcon: '',
        projectName: '',
        projectDescription: [],
        projectPlatform: 'Code',
        projectVersion: '',
        projectTech: [],
        projectUrl: '',
        projectItch: '',
        projectGithub: '',
        projectCreateYear: '',
        projectLastUpdateYear: '',
        projectStatus: 'complete',
        Credits: []
      }
    ]
  }
}
