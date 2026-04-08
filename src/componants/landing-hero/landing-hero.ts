import { Component, OnInit, signal } from '@angular/core';
import { ContactsCard } from "../contacts-card/contacts-card";
import { TextCard } from "../text-card/text-card";

@Component({
  selector: 'app-landing-hero',
  imports: [ContactsCard, TextCard],
  templateUrl: './landing-hero.html',
  styleUrl: './landing-hero.css',
})

export class LandingHero implements OnInit {
  public OnesZeros  = signal<string>("");
  ngOnInit(): void {
    this.OnesZeros.set(this.getOnesZeros())
  }

  getOnesZeros() : string{
    let binary = "";

    for (let i = 0; i < 5000; i++) {
      if(i % 4 === 0 && i !== 0){
        binary += ".";
      }
      binary += Math.random() > 0.5 ? "1" : "0";
    }
    return binary;
  }
}
