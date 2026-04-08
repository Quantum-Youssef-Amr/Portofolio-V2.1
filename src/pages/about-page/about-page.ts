import { Component, inject, OnInit } from '@angular/core';
import { ContactsCard } from "../../componants/contacts-card/contacts-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { Timeline } from "../../componants/timeline/timeline";
import { aboutPar, timelineNode } from '../../app-types.model';
import { AppData } from '../../services/app.data';

@Component({
  selector: 'app-about-page',
  imports: [ContactsCard, Paragraph, Timeline],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage implements OnInit{
  private _app_data: AppData = inject(AppData);

  AboutPageContent!: Array<aboutPar>;
  TimelineData!: Array<timelineNode>;

  ngOnInit(): void {
    this.AboutPageContent = this._app_data.AboutPageContent;
    this.TimelineData = this._app_data.TimelineData;
  }
}
