import { Injectable } from '@angular/core';
import { aboutPar, PersonalLinks, project, projectSection, skillPar, timelineNode } from '../app-types.model';

@Injectable({
  providedIn: 'root'
})

export class AppData {
  App_Personal_links: PersonalLinks = {
    githubLink: 'https://github.com/Quantum-Youssef-Amr',
    itchLink: 'https://youssef-amr0.itch.io/',
    linkedInLink: 'https://www.linkedin.com/in/youssef-amr-2ba9962b5',
    email: 'amry14003@gmail.com'
  };

  AboutPageContent: Array<aboutPar> = [
    {
          title: "Who I'm ?",
          paragraphs : [
            "I'm Youssef Amr a 21 yeas-old human (or ? :P)- but most people online call me The Solo Dev. I'm a Game developer , Front-end developer and Data scientist who loves turning wild ideas into things you can actually play, see or learn from.",
            "I'm currently a data science major at Alexandria University, Egypt. but my journey started long before that when I realized that computers can be programmed in 2016. and began to make some games with scratch and simple python. after learning to think with code, physics and the inner working of machines. i've built computers, coded in assembly and climbed my way up to full-scale projects in Unity, Angular and AWS."
          ]
        },
        {title : "What drives me is creation - that spark when something abstract become real.",
        paragraphs: [
          "Weather it's designing a horror shooter that makes players sweat, optimizing a backend system that scale flawlessly, or experimenting  with AI that learns from game play - I'm always chasing that moment when code and creativity finally click together after hours of struggle. :)"
        ]
        },
        {
          title: "Do i have any hobbies ?",
          paragraphs: [
            "actually Yes, when I'm not building systems or experiment with machines learning models, I'm usually deep in physics. specially theoretical physics. exploring the unknown of the space-time and stretching it after C (speed of light). and I love to draw ( simpler :p )."
          ]
        }
  ];

  TimelineData: Array<timelineNode> = [
     {
          title: "2016",
          massage: "discovering what computers can do and making small game using scratch"
        },
        {
          title: "2019",
          massage: "making small scale games with Ubge game engine (blender plugin)"
        },
        {
          title: "2020",
          massage: "switching to unity and learning C# and made my first game using it"
        },
        {
          title: "2023",
          massage: "made the decision to enter FCDS and begun my real journey"
        },
        {
          title: "2025",
          massage: "Entered GMTK game jams with OrPita Studio as lead Developer, achieving 600/10k"
        },
        {
          title: "2026",
          massage: "focusing on making my full scale games and enhancing my portfolio"
        },
        {
          title: "Now",
          massage: ""
        }
  ];

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

  GamesPageContent: projectSection = {
    title: 'Games',
    projects: [
      {
        projectMainImage: 'assets/Projects/Infected/Infected.png',
        projectImages: ['assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png','assets/Projects/Infected/Infected.png'],
        projectIcon: 'assets/Projects/Infected/icon.png',
        projectName: 'Infected',
        projectDescription: [
          ' is a 2D tower defense game set in a collapsing computer system overrun by viruses. Strategize, adapt, and survive as enemies evolve with every choice you make. Balance combat, resource management, and survival in a world on the brink of collapse.'
        ],
        projectPlatform: ['PC', 'Mobile'],
        projectType: 'Game',
        projectVersion: '0.0.1 preAlpha',
        projectTech: [
          'assets/game dev/Unity.svg',
          'assets/langs/CSharp.svg'
        ],
        projectUrl: '',
        projectItch: '',
        projectGithub: '',
        projectCreateYear: '2025',
        projectLastUpdateYear: '2026',
        projectStatus: 'in development',
        Credits: [
          {
            name: 'Youssef Amr',
            role: 'Developer',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          }
        ]
      }
    ]
  }
}
