import { AfterContentInit, Component, Inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../componants/footer/footer";
import { Navbar } from "../componants/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('Youssef Amr');
}
