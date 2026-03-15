import { Component } from '@angular/core';
import { ContactsCard } from "../../componants/contacts-card/contacts-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { Timeline } from "../../componants/timeline/timeline";

@Component({
  selector: 'app-about-page',
  imports: [ContactsCard, Paragraph, Timeline],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
