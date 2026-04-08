import { Component, inject, OnInit } from '@angular/core';
import { projectSection } from '../../app-types.model';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { AppData } from '../../services/app.data';

@Component({
  selector: 'app-games-page',
  imports: [Paragraph, BigProjectCard, BtnWithImage],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit{
  private _app_data: AppData = inject(AppData);

  GamesContent!: projectSection;

  ngOnInit(): void {
    this.GamesContent = this._app_data.GamesPageContent;
  }
}
