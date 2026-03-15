import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppDate {
  private data!: AppDateDT;
  private dataURL: string = 'assets/data/app-data.json';

  constructor(private http: HttpClient){}

  loadData():Observable<AppDateDT>{
    return this.http.get<AppDateDT>(this.dataURL).pipe(
      tap(data => {
        this.data = data;
        console.log("app data loaded");
      }),
      catchError(err => {
        console.log("err: ", err);
        return of();
      })
    );
  }

  getData(): AppDateDT{
    return this.data;
  }

  refreshData(): Observable<AppDateDT>{
    return this.loadData();
  }
}


export type AppDateDT = {
  owner: string,
  links: {
    githubLink: string,
    itchLink: string,
    linkedInLink:string,
    email:string
  },
  about: {
    aboutSummery: aboutSum,
    aboutPageContent: {
      aboutSections: Array<aboutPar>,
      timeline: Array<timelineNode>
    }
  },
  skills: Array<skill>,
  skillPageContent: {
    skillIntro: string,
    skillPageContent: Array<skillPar>
  }
}

export type aboutPar = {Title: string, paragraph: string};
export type aboutSum = {Title: string, paragraphs: Array<string>};
export type timelineNode = {Title: string, massage: string};


export type skillPar = {Title: string, skills: Array<skill>}
export type skill = {skillImage: string, skillTitle: string, skillRate: number};
