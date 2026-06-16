import { Component, ElementRef, HostListener, numberAttribute, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar{
  @ViewChild("links") links! : ElementRef<HTMLSpanElement>;

  is_scrolled = false;
  id = 0;
  el!: HTMLElement;
  tabIndex = 0;
  pageToIdx = [
    "/",
    "/about",
    "/skills",
    "/projects",
    "/games",
    "/contacts"
  ];

  constructor(private router: Router){}

  @HostListener('window:scroll')
  onWindowScroll(){
    this.is_scrolled = window.scrollY > 50;
  }

  OnClickMenu(){
    if(!this.links) return;

    this.el = this.links.nativeElement;
    if(this.el){
      clearTimeout(this.id);
      this.el.classList.toggle("open");

    }
  }

  onMouseOverMenu(){
    if(this.el){
      clearTimeout(this.id);
    }
  }

  onMouseOutMenu(){
    if(this.el){
      this.setMenuTimeout();
    }
  }

  setMenuTimeout(){
      this.id = setTimeout(() => {
        this.el.classList.remove("open");
      }, 3000)
  }

  changeTabIndex(idx: number)
  {
    this.tabIndex = idx;
    this.router.navigate([this.pageToIdx[this.tabIndex]]);

    if(this.el){
      this.el.classList.remove("open");
    }
  }
}
