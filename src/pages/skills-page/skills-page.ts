import { Component } from '@angular/core';
import { Paragraph } from "../../componants/paragraph/paragraph";
import { SkillCard } from "../../componants/skill-card/skill-card";
import { skillPar } from '../../app-types.model';

@Component({
  selector: 'app-skills-page',
  imports: [Paragraph, SkillCard],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage {
  skills: Array<skillPar> = [
    {
        title: "Programming languages",
        skills: [
          {
            skillImage: "assets/langs/CSharp.svg",
            skillTitle: "C#",
            skillRate: 9
          },
          {
            skillImage: "assets/langs/C++.svg",
            skillTitle: "C++",
            skillRate: 7.8
          },
          {
            skillImage: "assets/langs/C.svg",
            skillTitle: "C",
            skillRate: 5
          },
          {
            skillImage: "assets/langs/HTML.svg",
            skillTitle: "HTML",
            skillRate: 9
          },
          {
            skillImage: "assets/langs/CSS.svg",
            skillTitle: "CSS",
            skillRate: 8.5
          },
          {
            skillImage: "assets/langs/Scss.svg",
            skillTitle: "SCSS",
            skillRate: 6.9
          },
          {
            skillImage: "assets/langs/JS.svg",
            skillTitle: "JavaScripts",
            skillRate: 8
          },
          {
            skillImage: "assets/langs/TS.svg",
            skillTitle: "TypeScripts",
            skillRate: 7
          },
          {
            skillImage: "assets/langs/R.svg",
            skillTitle: "R",
            skillRate: 7
          },
          {
            skillImage: "assets/langs/py.svg",
            skillTitle: "Python",
            skillRate: 6.7
          },
          {
            skillImage: "assets/langs/Java.svg",
            skillTitle: "Java",
            skillRate: 8
          }
        ]
      },
      {
        title: "Frameworks",
        skills: [
          {
            skillImage: "assets/Frameworks/Angular.svg",
            skillTitle: "Angular",
            skillRate: 9
          },
          {
            skillImage: "assets/Frameworks/Django.svg",
            skillTitle: "DJango",
            skillRate: 6
          },
          {
            skillImage: "assets/Frameworks/Flask.svg",
            skillTitle: "Flask",
            skillRate: 8
          },
          {
            skillImage: "assets/Frameworks/Nodejs.svg",
            skillTitle: "NodsJS",
            skillRate: 5
          }
        ]
      },
      {
        title: "Tools",
        skills: [
          {
            skillImage: "assets/utls/linux.svg",
            skillTitle: "Linux",
            skillRate: 9
          },
          {
            skillImage: "assets/utls/bash.svg",
            skillTitle: "Bash",
            skillRate: 7.6
          },
          {
            skillImage: "assets/utls/VsCode.svg",
            skillTitle: "VS Code",
            skillRate: 8
          },
          {
            skillImage: "assets/utls/docker.svg",
            skillTitle: "Docker",
            skillRate: 6
          },
          {
            skillImage: "assets/utls/Firebase.svg",
            skillTitle: "Firebase",
            skillRate: 7
          },
          {
            skillImage: "assets/utls/AWS.svg",
            skillTitle: "AWS",
            skillRate: 8
          }
        ]
      },
      {
        title: "Game Development",
        skills: [
          {
            skillImage: "assets/game dev/Unity.svg",
            skillTitle: "Unity",
            skillRate: 9
          },
          {
            skillImage: "assets/game dev/Godot.svg",
            skillTitle: "Godot",
            skillRate: 7
          },
          {
            skillImage: "assets/game dev/krita.svg",
            skillTitle: "Krita 2D art",
            skillRate: 8
          },
          {
            skillImage: "assets/game dev/Blender.svg",
            skillTitle: "Blender 3D art",
            skillRate: 7
          }
        ]
      },
      {
        title: "Databases",
        skills: [
          {
            skillImage: "assets/dbs/SQLServer.svg",
            skillTitle: "SQLServer",
            skillRate: 7
          },
          {
            skillImage: "assets/dbs/SQLite.svg",
            skillTitle: "SQLite",
            skillRate: 8
          },
          {
            skillImage: "assets/dbs/SQL.svg",
            skillTitle: "SQL",
            skillRate: 8
          },
          {
            skillImage: "assets/dbs/postgresql.svg",
            skillTitle: "Postgresql",
            skillRate: 9
          },
          {
            skillImage: "assets/dbs/MongoDB.svg",
            skillTitle: "MongoDB",
            skillRate: 6
          }
        ]
      },
      {
        title: "Version Control",
        skills: [
          {
            skillImage: "assets/Version control/Git.svg",
            skillTitle: "Git",
            skillRate: 8
          },
          {
            skillImage: "assets/Version control/GitHub.svg",
            skillTitle: "GitHub",
            skillRate: 9
          }
        ]
      }
  ];
}

