import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContactsCard } from "../../componants/contacts-card/contacts-card";

@Component({
  selector: 'app-contact-page',
  imports: [ContactsCard],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})

export class ContactPage {
  @ViewChild('moon') moon!: ElementRef<HTMLImageElement>;
  moonOrbitDistance: number = 500;
  moonOrbitSpeed: number = 0.001;
  moonAngle: number = 70;
  PlanetCenterX: number = 300;
  PlanetCenterY: number = 300;

  ngAfterViewInit(): void {
    setInterval(() => {
      this.moonAngle -= this.moonOrbitSpeed;
      this.animateMoon();
    }, 10);
  }

  animateMoon() {
    const el = this.moon?.nativeElement;
    if (el) {
      let x = this.moonOrbitDistance * Math.cos(this.moonAngle);
      let y = this.moonOrbitDistance * Math.sin(this.moonAngle);
      el.style.top = `${y + this.PlanetCenterY}px`;
      el.style.left = `${x + this.PlanetCenterX}px`;
    }
  }

}
