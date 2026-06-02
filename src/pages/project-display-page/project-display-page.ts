import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../app-types.model';
import { BtnWithImage } from "../../componants/btn-with-image/btn-with-image";
import { Paragraph } from "../../componants/paragraph/paragraph";
import { AppData } from '../../services/app.data';

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
    const m_projectNameFromUrl = this.router.url.split('/').at(-1);
    this._app_data.GamesPageContent.projects.forEach(project => {
      if(project.projectName == m_projectNameFromUrl){
        this.ProjectData = project;
        return;
      }
    })
  }

  OnPreviewImageClicked(idx: number){
    this.PreviewImage.style.backgroundImage = `url(/${this.ProjectData.projectImages[idx]})`;
    this.PreviewImageBox.classList.add('showPreview');
  }

  OnClosePreviewImage(){
    this.PreviewImageBox.classList.remove('showPreview');
  }

}
