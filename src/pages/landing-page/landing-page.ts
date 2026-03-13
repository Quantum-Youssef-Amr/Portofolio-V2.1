import { Component } from '@angular/core';
import { Navbar } from "../../componants/navbar/navbar";
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { TextCard } from "../../componants/text-card/text-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";
import { SmallProjectCard } from "../../componants/small-project-card/small-project-card";
import { Page404 } from "../page404/page404";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar, LandingHero, TextCard, Paragraph, SkillCard, SmallProjectCard, Page404, BigProjectCard],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
