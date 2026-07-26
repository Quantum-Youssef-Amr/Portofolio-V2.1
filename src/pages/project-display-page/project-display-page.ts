import {AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../app-types.model';
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { AppData } from '../../services/app.data';
import { ImageConfig } from '@angular/common';

@Component({
  selector: 'app-project-display-page',
  imports: [BtnWithImage, Paragraph],
  templateUrl: './project-display-page.html',
  styleUrl: './project-display-page.css',
})
export class ProjectDisplayPage implements OnInit, AfterViewInit{
  @ViewChild('mainProjectImage') HTMLImageRef!: ElementRef<HTMLDivElement>;
  @ViewChild('imgPreview') ImagePreview!: ElementRef<HTMLDivElement>;
  @ViewChild('imgPreviewBox') ImagePreviewParent!: ElementRef<HTMLDivElement>;


  private _app_data: AppData = inject(AppData);
  private PreviewImage!: HTMLDivElement;
  private PreviewImageBox!: HTMLDivElement;
  ProjectData!: project;
  gridColor = signal<string>('rgb(238, 205, 21)');


  constructor(
    private router: Router
  ){}

  ngAfterViewInit(): void {
    let div = this.HTMLImageRef.nativeElement;
    if(div){
      div.style.backgroundImage = `url('/${this.ProjectData.projectMainImage}')`;
      console.log(div, this.ProjectData.projectMainImage);
    }

    div = this.ImagePreview.nativeElement;
    if(div){
      this.PreviewImage = div;
    }

    div = this.ImagePreviewParent.nativeElement;
    if(div){
      this.PreviewImageBox = div;
    }
  }

  ngOnInit(): void {
    let m_projectNameFromUrl = this.router.url.split('/').at(-1)?.split("-").join(" ") ?? "";
    let m_projectTypeFromUrl = this.router.url.split('/').at(-2) ?? "";


    if(m_projectTypeFromUrl == 'projects'){
      this._app_data.ProjectsPageContent.forEach(projectCat => {
        projectCat.projects.forEach(project => {
          if(project.projectName.toLowerCase().trim() == m_projectNameFromUrl.toLowerCase().trim()){
            this.ProjectData = project;
            this.getMostDistinctColor(this.ProjectData.projectMainImage).then(colors => {
              this.gridColor.set(colors);
              console.log(colors);
            });
            return;
          }
        })
      })
    }

    if(m_projectTypeFromUrl == "games"){
      this._app_data.GamesPageContent.projects.forEach(project => {
        if(project.projectName.toLowerCase().trim() == m_projectNameFromUrl.toLowerCase().trim()){
          this.ProjectData = project;
            this.getMostDistinctColor(this.ProjectData.projectMainImage).then(colors => {
              this.gridColor.set(colors);
              console.log(colors);
            });
          return;
        }
      })
    }
  }

  OnPreviewImageClicked(idx: number){
    this.PreviewImage.style.backgroundImage = `url('/${this.ProjectData.projectImages[idx]}')`;
    console.log(`url(/${this.ProjectData.projectImages[idx]})`)
    this.PreviewImageBox.classList.add('showPreview');
  }

  OnClosePreviewImage(){
    this.PreviewImageBox.classList.remove('showPreview');
  }

  getMostDistinctColor(imagePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject('Canvas context not available');
          return;
        }

        let width = img.width;
        let height = img.height;
        const maxSize = 100;

        if (width > maxSize || height > maxSize) {
          if (width > height) {
            height = (height * maxSize) / width;
            width = maxSize;
          } else {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const colors: { r: number; g: number; b: number }[] = [];

        for (let i = 0; i < data.length; i += 40) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a < 128) continue;

          colors.push({ r, g, b });
        }

        let mostDistinctColor = colors[0];
        let maxDistance = 0;

        for (const color of colors) {
          let minDistanceToOthers = Infinity;

          for (const other of colors) {
            if (color === other) continue;

            const distance = Math.sqrt(
              Math.pow(color.r - other.r, 2) +
              Math.pow(color.g - other.g, 2) +
              Math.pow(color.b - other.b, 2)
            );

            minDistanceToOthers = Math.min(minDistanceToOthers, distance);
          }

          if (minDistanceToOthers > maxDistance) {
            maxDistance = minDistanceToOthers;
            mostDistinctColor = color;
          }
        }

        resolve(`rgb(${mostDistinctColor.r},${mostDistinctColor.g},${mostDistinctColor.b})`);
      };

      img.onerror = () => reject('Failed to load image');
      img.src = imagePath;
    });
  }
}
