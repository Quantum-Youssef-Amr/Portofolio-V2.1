import { Component } from '@angular/core';
import { Navbar } from "../../componants/navbar/navbar";
import { LandingHero } from "../../componants/landing-hero/landing-hero";
import { TextCard } from "../../componants/text-card/text-card";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar, LandingHero, TextCard, Paragraph, SkillCard],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
