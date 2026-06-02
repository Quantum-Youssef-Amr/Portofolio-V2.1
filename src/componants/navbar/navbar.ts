import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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

}
