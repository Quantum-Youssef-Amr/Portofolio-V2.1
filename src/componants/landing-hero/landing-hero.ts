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
    this.OnesZeros.set(this.getOnesZeros());
  }

  getOnesZeros() : string{
    let Text = "Started at 11 with Scratch. Built Energy at 14. Co-founded a studio at 19. Built a top 7 percent GMTK game. Best friend erased my name. Left. Built 10 games, 8 compilers, an FTL paper. Success is not what you have. It is what you are when you have nothing. I am what I am when I have nothing. A builder. A rider. Still building. Still riding.";

    let m_binaryText = "";

    let m_repeat = 4;
    for (let init = 0; init < m_repeat; init++) m_binaryText += this.stringToBinaryText(Text);

    return m_binaryText;
  }


  stringToBinaryText(input: string): string {
  return Array.from(input)
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('.');
  }

}
