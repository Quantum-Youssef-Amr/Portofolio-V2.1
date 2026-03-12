import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar{
  is_scrolled = false;
  @HostListener('window:scroll')
  onWindowScroll(){
    this.is_scrolled = window.scrollY > 100;
  }
}
