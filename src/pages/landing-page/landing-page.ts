import { Component } from '@angular/core';
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { TextCard } from "../../componants/text-card/text-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";
import { SmallProjectCard } from "../../componants/small-project-card/small-project-card";
import { BigProjectCard } from "../../componants/big-project-card/big-project-card";
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";

@Component({
  selector: 'app-landing-page',
  imports: [ LandingHero, TextCard, Paragraph, SkillCard, SmallProjectCard, BigProjectCard, BtnWithImage],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
