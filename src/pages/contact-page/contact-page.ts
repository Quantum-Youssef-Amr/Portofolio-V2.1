import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContactsCard } from "../../componants/contacts-card/contacts-card";

@Component({
  selector: 'app-contact-page',
  imports: [ContactsCard],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})

export class ContactPage implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('PopUp') popUp!: ElementRef<HTMLElement>;

  private achievementMade: boolean = false;
  private ctx!: CanvasRenderingContext2D;
  private animationFrame: number = 0;
  private mouse: Vector = { x: 0, y: 0 };
  private points: Point[] = [];
  private PARTICLE_COUNT: number = 0;
  private readonly FractionCo = 0.98;
  private readonly G = 0.15;
  private readonly PRIMARY_COLOR = '#111111';
  private readonly ACCENT_COLOR = '#ffca00';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvas();
      window.addEventListener('resize', this.handleResize.bind(this));

      const container = this.canvasRef.nativeElement.parentElement;
      if (container) {
        container.addEventListener('mousemove', this.handleMouseMove.bind(this));
        container.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      }

      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize.bind(this));
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.PARTICLE_COUNT = Math.random() > 0.95 ? 500 : Math.ceil(Math.random() * 45 + 5);

    this.points = [];
    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      this.points.push({
        position : {x :Math.random() * canvas.width, y: Math.random() * canvas.height},
        v: {x: (Math.random() - 0.5), y: (Math.random() - 0.5)},
        r: Math.random() * 2 + 2
      });
    }

    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  private handleResize(): void {
    this.initCanvas();
  }

  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  private handleMouseLeave(): void {
    this.mouse.x = -10000;
    this.mouse.y = -10000;
  }

  private animate(): void {
    if (!this.ctx) return;
    this.updateParticles();
    this.drawPattern();
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  private updateParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.width;
    const h = canvas.height;

    for (let p1 of this.points) {

      let g : Vector = {x:0, y:0};

      for(let p2 of this.points) {
        const distance = this.getDistance(p1.position,p2.position) + 1.5;
        if(distance <= p1.r || distance <= p2.r || distance == 0) continue;

        g.x += (this.G * p1.r * p2.r / Math.pow(distance, 2)) * Math.sign(p2.position.x - p1.position.x);
        g.y += (this.G * p1.r * p2.r / Math.pow(distance, 2)) * Math.sign(p2.position.y - p1.position.y);
      }

      const distanceToMouse = this.getDistance(this.mouse, p1.position);
      if(distanceToMouse > 0 && distanceToMouse >= 20 && distanceToMouse >= p1.r){
        g.x += (this.G * p1.r * 20 / Math.pow(distanceToMouse, 2)) * Math.sign(this.mouse.x - p1.position.x) * 50;
        g.y += (this.G * p1.r * 20 / Math.pow(distanceToMouse, 2)) * Math.sign(this.mouse.y - p1.position.y) * 50;
      }

      p1.v.x += g.x;
      p1.v.y += g.y;

      p1.position.x += p1.v.x;
      p1.position.y += p1.v.y;

      p1.v.x *= this.FractionCo;
      p1.v.y *= this.FractionCo;


      if (p1.position.x < 0) p1.position.x = w;
      if (p1.position.x > w) p1.position.x = 0;
      if (p1.position.y < 0) p1.position.y = h;
      if (p1.position.y > h) p1.position.y = 0;
    }

    let distanceBetweenAllPoints = this.points.reduce((acc: number, val: Point, idx: number, arr: Point[]) =>{
      let idxInRange = (idx + 1) % arr.length;
      acc += this.getDistance(val.position, arr[idxInRange].position);
      return acc;
    }, 0);

    if(distanceBetweenAllPoints < this.points.length * 20 && this.achievementMade === false){
      this.popUp.nativeElement.classList.add('show');
      setTimeout(() => {
        this.achievementMade = true;
        this.popUp.nativeElement.classList.remove('show');
      }, 5000);
    }
  }

  private drawPattern(): void {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = this.PRIMARY_COLOR;
    ctx.fillRect(0, 0, w, h);

    for (let p of this.points) {
      ctx.beginPath();
      ctx.arc(p.position.x - 1, p.position.y - 1, p.r, 0, Math.PI * 2);
      ctx.fillStyle = this.ACCENT_COLOR;
      ctx.fill();
    }
  }

  getDistance(p1: Vector,p2: Vector){
      return Math.sqrt(Math.pow(p1.x - p2.x,2) + Math.pow(p1.y - p2.y,2));
  }

}


interface Point {
  position: Vector;
  v: Vector;
  r: number;
}

interface Vector{
  x: number;
  y: number;
}
