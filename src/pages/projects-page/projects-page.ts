import { Component, inject, OnInit } from '@angular/core';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { AppData } from '../../services/app.data';
import { projectSection } from '../../app-types.model';

@Component({
  selector: 'app-projects-page',
  imports: [Paragraph, BigProjectCard, BtnWithImage],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage implements OnInit{
  private _app_data: AppData = inject(AppData);
  projects!: projectSection[];

  ngOnInit(): void {
    this.projects = this._app_data.ProjectsPageContent;
  }
}
