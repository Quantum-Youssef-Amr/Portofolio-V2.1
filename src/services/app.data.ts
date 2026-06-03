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
        projectMainImage: 'assets/Projects/Game Dev/Infected/Infected.png',
        projectImages: ['assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png','assets/Projects/Game Dev/Infected/Infected.png'],
        projectIcon: 'assets/Projects/Game Dev/Infected/icon.png',
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

  ProjectsPageContent: Array<projectSection> = [
    {
      title: 'Front-end projects',
      projects: [
            {
          projectMainImage: "assets/Projects/front-end/PlantPal/1.png",
          projectImages: [
            "assets/Projects/front-end/PlantPal/1.png",
            "assets/Projects/front-end/PlantPal/2.png",
            "assets/Projects/front-end/PlantPal/3.png",
            "assets/Projects/front-end/PlantPal/4.png"
          ],
          projectIcon: "assets/Projects/front-end/PlantPal/PlanetPalIcon.png",
          projectName: "PlantPal",
          projectDescription: [
          "First complete web project — learned Bootstrap 5, responsive design, and custom CSS from scratch.",
          "Landing page for a plant care reminder app concept. Built as coursework for LUC 2 (Bootstrap and Web Development).",
          "Features dark theme with lime green accents, testimonials, feature cards, email subscription form, and animated plant icon in footer.",
          "Demonstrates Bootstrap grid system, mobile-first layout, sticky branding, and Google Fonts integration.",
          "The project that taught me how to stop killing CSS layouts and keep plants (theoretically) alive.",
          ],
          projectPlatform: ["Web"],
          projectType: "Project",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/HTML.svg",
            "assets/langs/CSS.svg",
            "assets/langs/JS.svg"
          ],
          projectUrl: "https://quantum-youssef-amr.github.io/PlantPal-webdevCourse/",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/PlantPal-webdevCourse",
          projectCreateYear: "2025",
          projectLastUpdateYear: "2025",
          projectStatus: "complete",
          Credits: [
          {
            name: "Youssef Amr",
            role: "Solo Developer",
            LinkInLink: "",
            GithubLink: "https://github.com/Quantum-Youssef-Amr",
            itchLink: ""
          }
        ]
        },
        {
        projectMainImage: "assets/Projects/front-end/Postfolio/1.png",
        projectImages: ["assets/Projects/front-end/Postfolio/1.png", "assets/Projects/front-end/Postfolio/2.png", "assets/Projects/front-end/Postfolio/3.png", "assets/Projects/front-end/Postfolio/4.png"],
        projectIcon: "assets/Projects/front-end/Postfolio/icon.png",
        projectName: "Postfolio",
        projectDescription: [
          "Second university project — Angular course exercise using vanilla JavaScript, HTML, and CSS.",
          "Learned how to work with APIs and Promises for asynchronous data fetching.",
          "Social media style post feed with user authentication flow (register/login).",
          "Built as coursework to understand API integration before moving to Angular's HttpClient.",
          "Vanilla implementation — no framework, just raw JS promises and DOM manipulation.",
        ],
        projectPlatform: ["Web"],
        projectType: "Project",
        projectVersion: "1.0.0",
        projectTech: [
          "assets/langs/HTML.svg",
          "assets/langs/CSS.svg",
          "assets/langs/JS.svg"
        ],
        projectUrl: "https://quantum-youssef-amr.github.io/going-angular-course-project-1/",
        projectItch: "",
        projectGithub: "https://github.com/Quantum-Youssef-Amr/going-angular-course-project-1",
        projectCreateYear: "2025", // Adjust based on actual course date
        projectLastUpdateYear: "2025",
        projectStatus: "complete",
        Credits: [
          {
            name: "Youssef Amr",
            role: "Solo Developer",
            LinkInLink: "",
            GithubLink: "https://github.com/Quantum-Youssef-Amr",
            itchLink: ""
          }
        ]
        },
        {
          projectMainImage: "assets/Projects/front-end/Taskflow/1.png",
          projectImages: ["assets/Projects/front-end/Taskflow/1.png", "assets/Projects/front-end/Taskflow/2.png", "assets/Projects/front-end/Taskflow/3.png","assets/Projects/front-end/Taskflow/4.png", "assets/Projects/front-end/Taskflow/5.png", "assets/Projects/front-end/Taskflow/6.png", "assets/Projects/front-end/Taskflow/7.png", "assets/Projects/front-end/Taskflow/8.png", "assets/Projects/front-end/Taskflow/9.png", "assets/Projects/front-end/Taskflow/10.png"],
          projectIcon: "",
          projectName: "TaskFlow",
          projectDescription: [
            "Full Kanban-style task management web application — university web course project, scored 95%.",
            "Team collaboration tool with project boards, task assignments, due dates, priorities, comments, and attachments.",
            "Features role-based permissions (manager vs member), drag-drop task status updates, and activity tracking.",
            "Built with vanilla HTML/CSS/JS frontend, Node.js backend, SQLite database — no frontend frameworks.",
            "Includes authentication system, demo accounts (manager@taskflow.com / user@taskflow.com, password: 123456), and responsive UI.",
            "Dashboard shows task completion trends, total/completed/overdue counts, and team member management (manager-only access).",
          ],
          projectPlatform: ["Web"],
          projectType: "Project",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/HTML.svg",
            "assets/langs/CSS.svg",
            "assets/langs/JS.svg",
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/TaskFlow2nd",
          projectCreateYear: "2025",
          projectLastUpdateYear: "2026",
          projectStatus: "complete",
          Credits: [
            {
              name: "Youssef Amr",
              role: "frontend engineer",
              LinkInLink: "https://www.linkedin.com/in/youssef-amr-2ba9962b5",
              GithubLink: "https://github.com/Quantum-Youssef-Amr",
              itchLink: ""
            }
            ,
            {
              name: 'AbdAll Ahmad',
              role: 'Backend engineer',
              LinkInLink: 'https://www.linkedin.com/in/abdulluh-samy-672342207',
              GithubLink: 'https://github.com/Abdulluh11235',
              itchLink: ''
            }
          ]
        },
        {
        projectMainImage: "assets/Projects/front-end/To-do/1.png",
        projectImages: ["assets/Projects/front-end/To-do/1.png", "assets/Projects/front-end/To-do/2.png", "assets/Projects/front-end/To-do/3.png"],
        projectIcon: "",
        projectName: "To-Do",
        projectDescription: [
          "Simple login and todo list application — built to learn JavaScript fundamentals before Angular.",
          "Part of university web course: authentication flow, DOM manipulation, and client-side state management.",
          "Features hardcoded login (username: admin, password: 123) with 2-second redirect to todo dashboard.",
          "Todo functionality: add tasks, mark as completed (strikethrough), delete tasks. Preloaded with example tasks.",
          "No backend or persistent storage — pure frontend demo. Tasks reset on page refresh.",
          "Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.",
        ],
        projectPlatform: ["Web"],
        projectType: "Project",
        projectVersion: "1.0.0",
        projectTech: [
          "assets/langs/HTML.svg",
          "assets/langs/CSS.svg",
          "assets/langs/JS.svg"
        ],
        projectUrl: "https://quantum-youssef-amr.github.io/To-Do-app/",
        projectItch: "",
        projectGithub: "https://github.com/Quantum-Youssef-Amr/To-Do-app",
        projectCreateYear: "2025",
        projectLastUpdateYear: "2025",
        projectStatus: "complete",
        Credits: [
          {
            name: "Youssef Amr",
            role: "Solo Developer",
            LinkInLink: "",
            GithubLink: "https://github.com/Quantum-Youssef-Amr",
            itchLink: ""
          }
        ]
        },
        {
        projectMainImage: "assets/Projects/front-end/Weather-wizard/1.png",
        projectImages: ["assets/Projects/front-end/Weather-wizard/1.png", "assets/Projects/front-end/Weather-wizard/2.png","assets/Projects/front-end/Weather-wizard/3.png","assets/Projects/front-end/Weather-wizard/4.png","assets/Projects/front-end/Weather-wizard/5.png"],
        projectIcon: "assets/Projects/front-end/Weather-wizard/icon.svg",
        projectName: "Weather-Wizard",
        projectDescription: [
          "Final Angular course project — placed 3rd out of 150 students learning Angular.",
          "Interactive weather dashboard using OpenWeather API for real-time global weather data.",
          "Features: current conditions (temperature, humidity, wind, UV), 5-day forecast, and hourly breakdown.",
          "Includes creative extras: pressure readings, moon phase, and '0% Chance of Aliens' for personality.",
          "Built with modular Angular components, reactive city search, and responsive design for mobile/desktop.",
          "Demonstrates API integration, environment configuration, error handling, and clean UI architecture.",
          "Collaborative project with Youssef Abd Elmohest and Youssef Hessan — full team effort.",
        ],
        projectPlatform: ["Web"],
        projectType: "Project",
        projectVersion: "1.0.0",
        projectTech: [
          "assets/langs/TS.svg",
          "assets/langs/HTML.svg",
          "assets/langs/CSS.svg",
          "assets/Frameworks/Angular.svg"
        ],
        projectUrl: "https://weather-wizard-ddc20.web.app/",
        projectItch: "",
        projectGithub: "https://github.com/Quantum-Youssef-Amr/final-angular-course-project",
        projectCreateYear: "2025",
        projectLastUpdateYear: "2025",
        projectStatus: "complete",
        Credits: [
          {
            name: "Youssef Amr",
            role: "Project Manager, frontend lead",
            LinkInLink: "",
            GithubLink: "https://github.com/Quantum-Youssef-Amr",
            itchLink: ""
          },
          {
            name: "Youssef Abd Elmohest",
            role: "Co-Developer",
            LinkInLink: "",
            GithubLink: "",
            itchLink: ""
          },
          {
            name: "Youssef Hessan",
            role: "Co-Developer",
            LinkInLink: "",
            GithubLink: "",
            itchLink: ""
          }
        ]
        },
        {
        projectMainImage: "assets/Projects/front-end/old-portfolio/1.png",
        projectImages: ["assets/Projects/front-end/old-portfolio/1.png", "assets/Projects/front-end/old-portfolio/2.png", "assets/Projects/front-end/old-portfolio/3.png", "assets/Projects/front-end/old-portfolio/4.png", "assets/Projects/front-end/old-portfolio/5.png"],
        projectIcon: "",
        projectName: "TheSoloDev-Portfolio",
        projectDescription: [
          "First version of my personal portfolio — showcasing my identity as TheSoloDev.",
          "Features: 'Who I'm' intro, Design & Productivity projects (Study on IA crimes, DataTools Wars, Library Management System, Weather Wizard),",
          "My Games section featuring Climb It (lava-rising arcade game with saw blades),",
          "Skills, Projects, Games, and Contact sections with email/LinkedIn/GitHub links.",
          "Single-page layout with professional dark/light design and clean typography.",
          "This was my old list-style portfolio before upgrading to the multi-page interactive Angular version.",
        ],
        projectPlatform: ["Web"],
        projectType: "Project",
        projectVersion: "1.0.0",
        projectTech: [
          "assets/langs/HTML.svg",
          "assets/langs/CSS.svg",
          "assets/langs/JS.svg",
          "assets/Frameworks/Angular.svg"
        ],
        projectUrl: "",
        projectItch: "",
        projectGithub: "https://github.com/Quantum-Youssef-Amr/Portfolio",
        projectCreateYear: "2025",
        projectLastUpdateYear: "2025",
        projectStatus: "complete",
        Credits: [
          {
            name: "Youssef Amr",
            role: "Solo Developer",
            LinkInLink: "",
            GithubLink: "https://github.com/Quantum-Youssef-Amr",
            itchLink: ""
          }
        ]
        }
      ]
    },
  ];
}
