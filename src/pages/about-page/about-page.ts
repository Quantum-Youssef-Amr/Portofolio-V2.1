import { Component } from '@angular/core';
import { ContactsCard } from "../../componants/contacts-card/contacts-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { Timeline } from "../../componants/timeline/timeline";
import { aboutPar, timelineNode } from '../../app-types.model';

@Component({
  selector: 'app-about-page',
  imports: [ContactsCard, Paragraph, Timeline],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  AboutPageContent: Array<aboutPar> = [
    {
          title: "Who I'm ?",
          paragraphs : [
            "I'm Youssef Amr a 21 yeas-old human (or ? :P)- but most people online call me The Solo Dev. I'm a Game developer , Front-end developer and Data scientist who loves turning wild ideas into things you can actually play, see or learn from.",
            "I'm currently a data science major at Alexandria University, Egypt. but my journey started long before that when I realized that computers can be programmed in 2016. and began to make some games with scratch and simple python. after learning to think with code, physics and the inner working of machines. i've built computers, coded in assembly and climbed my way up to full-scale projects in Unity, Angular and AWS."
          ]
        },
        {title : "What drives me is creation - that spark when something abstract become real.",
        paragraphs: [
          "Weather it's designing a horror shooter that makes players sweat, optimizing a backend system that scale flawlessly, or experimenting  with AI that learns from game play - I'm always chasing that moment when code and creativity finally click together after hours of struggle. :)"
        ]
        },
        {
          title: "Do i have any hobbies ?",
          paragraphs: [
            "actually Yes, when I'm not building systems or experiment with machines learning models, I'm usually deep in physics. specially theoretical physics. exploring the unknown of the space-time and stretching it after C (speed of light). and I love to draw ( simpler :p )."
          ]
        }
  ];
  TimelineData: Array<timelineNode> = [
     {
          title: "2016",
          massage: "discovering what computers can do and making small game using scratch"
        },
        {
          title: "2019",
          massage: "making small scale games with Ubge game engine (blender plugin)"
        },
        {
          title: "2020",
          massage: "switching to unity and learning C# and made my first game using it"
        },
        {
          title: "2023",
          massage: "made the decision to enter FCDS and begun my real journey"
        },
        {
          title: "2025",
          massage: "Entered GMTK game jams with OrPita Studio as lead Developer, achieving 600/10k"
        },
        {
          title: "2026",
          massage: "focusing on making my full scale games and enhancing my portfolio"
        },
        {
          title: "Now",
          massage: ""
        }
  ];
}
