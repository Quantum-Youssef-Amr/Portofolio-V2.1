import { Component } from '@angular/core';
import { Navbar } from "../../componants/navbar/navbar";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
