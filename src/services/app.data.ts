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
      title: "Who I am",
      paragraphs: [
        "I'm Youssef Amr — 21 years old, human (or ? :P). Online, some call me The Solo Dev. I'm a game developer, front-end engineer, and data scientist who loves turning wild ideas into things you can actually play, see, or learn from.",
        "I'm currently a data science major at Alexandria University, Egypt. But my journey started long before that. I wrote my first line of code at 11 — Scratch, then Python, then assembly. By 14, I'd built my first complete game (Energy, a city builder about pollution). By 16, I was freelancing. By 19, I was leading game jam teams.",
        "That's 10 years of learning, failing, and shipping. I've built computers, coded in assembly, and climbed my way up to full-scale projects in Unity, Angular, and AWS."
      ]
    },
    {
      title: "What drives me is creation — that spark when something abstract becomes real",
      paragraphs: [
        "Whether it's designing a horror shooter that makes players sweat, optimizing a backend system that scales flawlessly, or experimenting with AI that learns from gameplay — I'm always chasing that moment when code and creativity finally click together after hours of struggle. :)"
      ]
    },
    {
      title: "Do I have any hobbies?",
      paragraphs: [
        "Actually, yes. When I'm not building systems or experimenting with machine learning models, I'm usually deep in physics — specifically, theoretical physics. Exploring the unknown of spacetime and stretching it beyond C (the speed of light). I've written simulation papers on FTL travel.",
        "I also love to draw. Simpler. :P"
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
          massage: "making small scale games with UPBGE game engine (blender plugin)"
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
            skillRate: 9,
            skillNote: "Built 10+ games in Unity including Operator (custom HLSL shaders) and Console (8 compilers)."
          },
          {
            skillImage: "assets/langs/C++.svg",
            skillTitle: "C++",
            skillRate: 7.8,
            skillNote: "Used for performance-critical systems and understanding game engine internals."
          },
          {
            skillImage: "assets/langs/C.svg",
            skillTitle: "C",
            skillRate: 5,
            skillNote: "Wrote compilers. Understand memory management at assembly level."
          },
          {
            skillImage: "assets/langs/HTML.svg",
            skillTitle: "HTML",
            skillRate: 9,
            skillNote: "Built dynamic Angular portfolio with hidden achievements and interactive storytelling."
          },
          {
            skillImage: "assets/langs/CSS.svg",
            skillTitle: "CSS",
            skillRate: 8.5,
            skillNote: "Responsive design. Animations. Pixel-perfect implementation across all projects."
          },
          {
            skillImage: "assets/langs/Scss.svg",
            skillTitle: "SCSS",
            skillRate: 6.9,
            skillNote: "Used for maintainable, scalable styling in larger web projects."
          },
          {
            skillImage: "assets/langs/JS.svg",
            skillTitle: "JavaScripts",
            skillRate: 8,
            skillNote: "Core language for frontend work and portfolio interactivity."
          },
          {
            skillImage: "assets/langs/TS.svg",
            skillTitle: "TypeScripts",
            skillRate: 7,
            skillNote: "Angular portfolio. Type-safe, maintainable code that ships."
          },
          {
            skillImage: "assets/langs/R.svg",
            skillTitle: "R",
            skillRate: 7,
            skillNote: "Data science major. Used for statistical analysis and data visualization."
          },
          {
            skillImage: "assets/langs/py.svg",
            skillTitle: "Python",
            skillRate: 6.7,
            skillNote: "Data processing, backend APIs, and AI/ML experimentation."
          },
          {
            skillImage: "assets/langs/Java.svg",
            skillTitle: "Java",
            skillRate: 8,
            skillNote: "Object-oriented fundamentals. University projects. Self-taught depth."
          }
        ]
      },
      {
        title: "Frameworks",
        skills: [
          {
            skillImage: "assets/Frameworks/Angular.svg",
            skillTitle: "Angular",
            skillRate: 9,
            skillNote: "Built full portfolio with dynamic routing, hidden achievements, and gamified UX."
          },
          {
            skillImage: 'assets/Frameworks/Flutter.svg',
            skillTitle: 'Flutter',
            skillRate: 7.99,
            skillNote: "Mentored a junior developer to pivot from frontend to Flutter for multi-platform apps."
          },
          {
            skillImage: "assets/Frameworks/Django.svg",
            skillTitle: "DJango",
            skillRate: 6,
            skillNote: "Used for backend prototypes and data-driven web applications."
          },
          {
            skillImage: "assets/Frameworks/Flask.svg",
            skillTitle: "Flask",
            skillRate: 8,
            skillNote: "Lightweight APIs. Quick prototyping. Microservices."
          },
          {
            skillImage: "assets/Frameworks/Nodejs.svg",
            skillTitle: "NodsJS",
            skillRate: 5,
            skillNote: "Basic understanding. Used for simple backends and tooling."
          }
        ]
      },
      {
        title: "Tools",
        skills: [
          {
            skillImage: "assets/utls/linux.svg",
            skillTitle: "Linux",
            skillRate: 9,
            skillNote: "Daily driver for development. Bash scripting. Server management."
          },
          {
            skillImage: "assets/utls/bash.svg",
            skillTitle: "Bash",
            skillRate: 7.6,
            skillNote: "Automation. Build scripts. Pipeline scripting."
          },
          {
            skillImage: "assets/utls/VsCode.svg",
            skillTitle: "VS Code",
            skillRate: 8,
            skillNote: "Primary editor. Customized for multi-language development."
          },
          {
            skillImage: "assets/utls/docker.svg",
            skillTitle: "Docker",
            skillRate: 6,
            skillNote: "Containerization for consistent dev environments."
          },
          {
            skillImage: "assets/utls/Firebase.svg",
            skillTitle: "Firebase",
            skillRate: 7,
            skillNote: "Authentication, real-time DB, hosting for quick prototypes."
          },
          {
            skillImage: "assets/utls/AWS.svg",
            skillTitle: "AWS",
            skillRate: 8,
            skillNote: "Deployed scalable backends. Used for data science pipelines."
          }
        ]
      },
      {
        title: "Game Development",
        skills: [
          {
            skillImage: "assets/game dev/Unity.svg",
            skillTitle: "Unity",
            skillRate: 9,
            skillNote: "5+ shipped games. Custom HLSL shaders. Full game architecture."
          },
          {
            skillImage: "assets/game dev/Godot.svg",
            skillTitle: "Godot",
            skillRate: 7,
            skillNote: "Explored for lightweight 2D games. Open-source advocate."
          },
          {
            skillImage: "assets/game dev/krita.svg",
            skillTitle: "Krita 2D art",
            skillRate: 8,
            skillNote: "Created game assets, UI elements, and pixel art for multiple projects."
          },
          {
            skillImage: "assets/game dev/Pixelorama.png",
            skillTitle: "Pixelorama",
            skillRate: 7.75,
            skillNote: "Pixel art for Starfish game and 2-bit retro aesthetic in Infected (tower defense)."
          },
          {
            skillImage: "assets/game dev/Blender.svg",
            skillTitle: "Blender 3D art",
            skillRate: 7,
            skillNote: "Basic 3D modeling. Used for prototyping and asset creation."
          },
          {
          skillImage: "assets/game dev/lmms.svg",
          skillTitle: "LMMS studio",
          skillRate: 8,
          skillNote: "Composed chiptune-style soundtracks for Console and Operator. Designed SFX for multiple games."
          }
        ]
      },
      {
        title: "Databases",
        skills: [
          {
            skillImage: "assets/dbs/SQLServer.svg",
            skillTitle: "SQLServer",
            skillRate: 7,
            skillNote: "Used in data science projects and backend systems."
          },
          {
            skillImage: "assets/dbs/SQLite.svg",
            skillTitle: "SQLite",
            skillRate: 8,
            skillNote: "Lightweight DB for game saves, local data, and quick prototypes."
          },
          {
            skillImage: "assets/dbs/SQL.svg",
            skillTitle: "SQL",
            skillRate: 8,
            skillNote: "Complex queries. Optimization. Database design."
          },
          {
            skillImage: "assets/dbs/postgresql.svg",
            skillTitle: "Postgresql",
            skillRate: 9,
            skillNote: "Primary relational DB. Used in DrWisee (ministry-funded medical project)."
          },
          {
            skillImage: "assets/dbs/MongoDB.svg",
            skillTitle: "MongoDB",
            skillRate: 6,
            skillNote: "Used for document-based storage in specific projects."
          }
        ]
      },
      {
        title: "Version Control",
        skills: [
          {
            skillImage: "assets/Version control/Git.svg",
            skillTitle: "Git",
            skillRate: 8,
            skillNote: "Branching, merging, rebasing. Solo and team workflows."
          },
          {
            skillImage: "assets/Version control/GitHub.svg",
            skillTitle: "GitHub",
            skillRate: 9,
            skillNote: "Full repo history proving ownership of 10+ games and 8 compilers."
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
            role: 'Made every thing',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          }
        ]
      }
    ]
  }
}
