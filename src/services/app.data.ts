import { Injectable } from '@angular/core';
import { aboutPar, PersonalLinks, project, projectSection, skillPar, timelineNode } from '../app-types.model';

@Injectable({
  providedIn: 'root'
})

export class AppData {
  App_Personal_links: PersonalLinks = {
    githubLink: 'https://github.com/Quantum-Youssef-Amr',
    itchLink: 'https://youssef-amr-thesolodev.itch.io/',
    linkedInLink: 'https://www.linkedin.com/in/youssef-amr-2ba9962b5',
    email: 'amry14003@gmail.com'
  };

AboutPageContent: Array<aboutPar> = [
    {
      title: "Who I am",
      paragraphs: [
        "I'm Youssef Amr — 21 years old, human (or ? :P). Online, some call me The Solo Dev. I'm a game developer, front-end engineer, and data scientist who loves turning wild ideas into things you can actually play, see, or learn from.",
        "I'm currently a data science major at Alexandria University, Egypt. But my journey started long before that. I wrote my first line of code at 11 — Scratch, then Python, then assembly. By 14, I'd built my first complete game (Energy, a city builder about pollution). By 16, I was freelancing. By 20, I was leading game jam teams.",
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
          massage: "Wrote my first line of code, Built small games in Scratch."
        },
        {
          title: "2018",
          massage: "Built my first computer game Energy using blender."
        },
        {
          title: "2019",
          massage: "Moved to UPBGE (blender game engine), made small 3D games."
        },
        {
          title: "2020",
          massage: "switched to Unity, learned C#, made my first complete game using Unity."
        },
        {
          title: "2021",
          massage: "Began freelancing as a web developer. Built website, learned client work."
        },
        {
          title: "2023",
          massage: "Entered Alexandria University's Faculty of computer and Data science."
        },
        {
          title: "2025",
          massage: "Led OrPita Studio in GMTK Game Jam. Placed Top 7%, Built in 3 days. left the studio later that year."
        },
        {
          title: "2026",
          massage: "Founded Axiom Studio. Building my portfolio. Games shipping."
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
      },
      {
        projectMainImage: 'assets/Projects/Game Dev/Astro/1.png',
        projectImages: ['assets/Projects/Game Dev/Astro/1.png', 'assets/Projects/Game Dev/Astro/2.png','assets/Projects/Game Dev/Astro/3.png', 'assets/Projects/Game Dev/Astro/4.png', 'assets/Projects/Game Dev/Astro/5.png', 'assets/Projects/Game Dev/Astro/6.png', 'assets/Projects/Game Dev/Astro/7.png', 'assets/Projects/Game Dev/Astro/8.png', 'assets/Projects/Game Dev/Astro/9.png', 'assets/Projects/Game Dev/Astro/10.png'],
        projectIcon: 'assets/Projects/Game Dev/Astro/icon.png',
        projectName: 'Astro',
        projectDescription: ['A classic arcade space shooter. Dodge asteroids, collect power-ups, and survive as long as you can', 'Pilot your ship through deep space. Asteroids are coming — fast, relentless, and in waves. Your mission: destroy them before they destroy you.', "Astro is a classic arcade space shooter where you pilot a ship through an endless asteroid field. Your goal is simple: survive as long as possible by shooting and dodging incoming asteroids while collecting power-ups to boost your firepower and speed. It's fast, addictive, and built for quick play sessions — no story, no cutscenes, just pure arcade action."],
        projectPlatform: ['PC', 'Mobile'],
        projectType: 'Game',
        projectVersion: '0.1.5 alpha',
        projectTech: [
          'assets/game dev/Unity.svg',
          'assets/langs/CSharp.svg'],
        projectUrl: '',
        projectItch: 'https://youssef-amr-thesolodev.itch.io/astro',
        projectGithub: 'https://github.com/Quantum-Youssef-Amr/Astro',
        projectCreateYear: '2026',
        projectLastUpdateYear: '2026',
        projectStatus: 'complete',
        Credits: [{
          name: 'Youssef Amr',
          role: 'Designer - Artist - programmer',
          LinkInLink: '',
          GithubLink: '',
          itchLink: ''
        }]
      },
      {
        projectMainImage: 'assets/Projects/Game Dev/one-more-day/1.png',
        projectImages: ['assets/Projects/Game Dev/one-more-day/1.png', 'assets/Projects/Game Dev/one-more-day/2.png', 'assets/Projects/Game Dev/one-more-day/3.png', 'assets/Projects/Game Dev/one-more-day/4.png', 'assets/Projects/Game Dev/one-more-day/5.png', 'assets/Projects/Game Dev/one-more-day/6.png', 'assets/Projects/Game Dev/one-more-day/7.png', 'assets/Projects/Game Dev/one-more-day/8.png', 'assets/Projects/Game Dev/one-more-day/9.png', 'assets/Projects/Game Dev/one-more-day/10.png', 'assets/Projects/Game Dev/one-more-day/11.png'],
        projectIcon: 'assets/Projects/Game Dev/one-more-day/icon.png',
        projectName: 'One More Day',
        projectDescription: ['One More Day is a short, narrative-driven experience set in the tense, emotional atmosphere of a modern hospital.', 'Developed for GMTK Game Jam 2025 (Theme: Loop), it offers a compact yet impactful story that combines exploration, high-pressure medical scenarios, and character-driven storytelling.', 'You play as Dr. Zain, a young doctor whose day begins like any other. As you move through the hospital, you’ll encounter familiar routines, brief conversations with staff, and the steady rhythm of a place that never sleeps. But when a sudden, critical emergency unfolds, that calm is shattered, and you are thrust into a race against time where every second counts.', 'The game immerses you in both the professional and personal weight of being in Zain’s shoes. From quiet moments in hospital corridors to the tension of urgent decisions, one-more-day is about more than just quick reactions—it’s about responsibility, persistence, and what we are willing to risk for those we care about.', 'This game was brought to life by a passionate and talented team at Orpita community, alongside amazing external contributors who volunteered their skills during GMTK 2025.', "Note: Game Code is currently unavailable due to some misunderstanding with the copyright law from Orpita community side, the matter will be solved shortly and the code will be public again."],
        projectPlatform: ['PC'],
        projectType: 'Game',
        projectVersion: '2.0.1',
        projectTech: [
          'assets/game dev/Unity.svg',
          'assets/langs/CSharp.svg'
        ],
        projectUrl: '',
        projectItch: 'https://orpita-community.itch.io/one-more-day',
        projectGithub: 'https://github.com/Quantum-Youssef-Amr/one-more-day',
        projectCreateYear: '8-30-2025',
        projectLastUpdateYear: '9-2-2025',
        projectStatus: 'complete',
        Credits: [
          {
            name: 'Amr Elmahdy',
            role: 'co-founder, CEO',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Youssef Amr',
            role: 'co-founder, former CTO',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Youssef Soliman',
            role: 'Game Design',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Nourhan Amr',
            role: 'Game Design',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Mariam Motaz',
            role: 'Game Design',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Amira Emad',
            role: 'Game Design',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Fatima Nadder',
            role: 'Game Design',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Youssef Amr',
            role: 'Head Game Dev',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Mark Asaad',
            role: 'Game Developer',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Mahmoud',
            role: 'Game Developer',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Fares Khaled',
            role: 'Game Developer',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Sherifa Sayed',
            role: 'Game Developer',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Esraa',
            role: 'Head Game Artist',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Chase (Gobstopper)',
            role: 'Game Artist',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Kino',
            role: 'Game Artist',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Amr Elkhelawy',
            role: 'Music & SFX Creator',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Josif ali (jomoa)',
            role: 'Music & SFX Creator',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          },
          {
            name: 'Alex',
            role: 'Music and SFX Creator',
            LinkInLink: '',
            GithubLink: '',
            itchLink: ''
          }
        ]
      }
      ,{
        projectMainImage: 'assets/Projects/Game Dev/10-sec-hero/1.png',
        projectImages: ['assets/Projects/Game Dev/10-sec-hero/1.png', 'assets/Projects/Game Dev/10-sec-hero/2.png', 'assets/Projects/Game Dev/10-sec-hero/3.png', 'assets/Projects/Game Dev/10-sec-hero/4.png'],
        projectIcon: 'assets/Projects/Game Dev/10-sec-hero/icon.png',
        projectName: '10 Sec Hero',
        projectDescription: ['We all know that triangles is the bestagon, so in this game you are one. trying to defend your door way to escape this levels. killing evils shapes and gain time to escape', 'this project was created in the 2026 GMTK game jam (Theme: COUNT DOWN), as a solo project.', 'This project was such a joy to create and I truly enjoyed making it after a year working on my big projects.', 'try it, enjoy, and don\'t hastate to reach out with feedback or a suggestion.'],
        projectPlatform: ['PC', 'Web'],
        projectType: 'Game',
        projectVersion: '0.1.14 JAM',
        projectTech: ['assets/game dev/Unity.svg', 'assets/langs/CSharp.svg'],
        projectUrl: '',
        projectItch: 'https://youssef-amr-thesolodev.itch.io/10-sec-hero',
        projectGithub: 'https://github.com/Quantum-Youssef-Amr/GMTK-GAME-JAM-2026',
        projectCreateYear: '7-22-2026',
        projectLastUpdateYear: '7-26-2026',
        projectStatus: "complete",
        Credits: [{
          name: 'Youssef Amr',
          role: 'Designer - Artist - programmer',
          LinkInLink: '',
          GithubLink: '',
          itchLink: ''
        }]
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
    {
      title: 'Data science projects',
      projects: [
        {
          projectMainImage: "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/1.png", // Add a screenshot of the pairplot or ROC curves if you have one
          projectImages: ["assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/1.png", "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/2.png", "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/3.png", "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/4.png", "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/5.png", "assets/Projects/Data/Iris-Classification-SVM-vs-Neural-Network/6.png"],
          projectIcon: "",
          projectName: "Iris-Classification-SVM-vs-Neural-Network",
          projectDescription: [
            "End-to-end machine learning project comparing Support Vector Machine (SVM) and Feedforward Neural Network on the classic Iris dataset.",
            "Dataset: 150 samples, 4 features (sepal length/width, petal length/width), 3 classes (setosa, versicolor, virginica).",
            "Workflow: EDA with pairplot visualization, train-test split (70/30 with stratification), StandardScaler normalization.",
            "SVM Results: 93.3% accuracy, weighted F1-score 0.93 — near-perfect classification with RBF kernel.",
            "Neural Network Results: 68.9% accuracy — 3-layer architecture (10→8→3 neurons, ReLU + softmax, Adam optimizer, 50 epochs).",
            "ROC-AUC comparison: SVM achieved ~0.99-1.00 across all classes; NN had lower performance on class 1 (AUC ~0.81).",
            "Includes loss curve visualization for neural network training and multiclass ROC curves for both models.",
            "Key takeaway: SVM with RBF kernel significantly outperforms simple neural network on this small, well-structured dataset.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/tensorflow.png",
            "assets/libs/scikit-learn.png"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/Iris-Classification-with-SVM-and-Neural-Network",
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
        projectMainImage: "assets/Projects/Data/KNN-implementation/1.png",
        projectImages: ["assets/Projects/Data/KNN-implementation/1.png", "assets/Projects/Data/KNN-implementation/2.png", "assets/Projects/Data/KNN-implementation/3.png", "assets/Projects/Data/KNN-implementation/4.png", "assets/Projects/Data/KNN-implementation/5.png", "assets/Projects/Data/KNN-implementation/6.png", "assets/Projects/Data/KNN-implementation/7.png", "assets/Projects/Data/KNN-implementation/8.png", "assets/Projects/Data/KNN-implementation/9.png"],
        projectIcon: "",
        projectName: "Heart-Disease-Prediction-using-KNN",
        projectDescription: [
          "End-to-end machine learning project implementing K-Nearest Neighbors (KNN) classifier for binary heart disease prediction.",
          "Dataset: Patient health records including age, gender, cholesterol, blood pressure, heart rate, and other clinical features. Target: HeartDisease (0 = No Disease, 1 = Disease).",
          "Workflow: Data preprocessing (handling missing values with SimpleImputer), StandardScaler normalization (critical for distance-based KNN), 60-20-20 train-validation-test split with stratification.",
          "Hyperparameter tuning: Tested K values 1-30 on validation set. Optimal K = 17 achieved highest validation accuracy.",
          "Cross-validation: 5-fold CV on training data — mean accuracy 0.8600 ± 0.0291, confirming model stability.",
          "Test performance: Accuracy 86.0%, Precision 88.3%, Recall 88.3%, F1-Score 88.3%.",
          "Overfitting analysis: Train accuracy 89.7% vs test 86.0% (Δ = 3.7%) — no significant overfitting detected.",
          "Visualizations: K vs Validation Accuracy plot, confusion matrix heatmap, 2D PCA projection for exploratory analysis.",
          "Optional analysis: PCA dimensionality reduction to 2 components achieved comparable performance, demonstrating feature redundancy.",
        ],
        projectPlatform: ["Code"],
        projectType: "Code",
        projectVersion: "1.0.0",
        projectTech: [
          "assets/langs/py.svg",
          "assets/libs/scikit-learn.png"
        ],
        projectUrl: "",
        projectItch: "",
        projectGithub: "https://github.com/Quantum-Youssef-Amr/KNN-implementation",
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
          projectMainImage: "assets/Projects/Data/Multiple-input-linear-regression-model/1.png", // Add 3D plot screenshot or regression visualization
          projectImages: ["assets/Projects/Data/Multiple-input-linear-regression-model/1.png", "assets/Projects/Data/Multiple-input-linear-regression-model/2.png", "assets/Projects/Data/Multiple-input-linear-regression-model/3.png", "assets/Projects/Data/Multiple-input-linear-regression-model/4.png", "assets/Projects/Data/Multiple-input-linear-regression-model/5.png"],
          projectIcon: "",
          projectName: "Multiple-input-linear-regression-model",
          projectDescription: [
            "Production-ready statistical modeling tool for predictive analytics, research, and machine learning baseline comparisons.",
            "Supports multiple input features with automated data handling — computes coefficients, intercepts, MSE, R², and statistical diagnostics.",
            "Advanced statistical testing: ANOVA (Analysis of Variance) for model significance, hypothesis testing with p-values and t-statistics for each predictor, confidence intervals for regression coefficients.",
            "Visualization: 3D plots for 2-feature models comparing actual vs predicted values, plus easy-to-interpret tabular outputs.",
            "Optimized with NumPy and pandas for fast computations. Modular design for easy extension (add custom metrics, plots, etc.).",
            "Testing & validation: Includes test scripts (`test_model.py`) with example datasets (Salary_Data.csv, taxi_trip_pricing.csv) for quick verification.",
            "Use cases: Research/academia (social sciences, economics, bioinformatics), industry applications (sales forecasting, risk analysis, predictive maintenance), baseline model for ML pipelines.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/Pandas.png",
            "assets/libs/NumPy.png",
            "assets/libs/scikit-learn.png"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/Muiltple-input-linear-regression-model",
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
          projectMainImage: "assets/Projects/Data/simple-linear-regression-model/3.png",
          projectImages: ["assets/Projects/Data/simple-linear-regression-model/1.png", "assets/Projects/Data/simple-linear-regression-model/2.png", "assets/Projects/Data/simple-linear-regression-model/3.png", "assets/Projects/Data/simple-linear-regression-model/4.png", "assets/Projects/Data/simple-linear-regression-model/5.png", "assets/Projects/Data/simple-linear-regression-model/6.png", "assets/Projects/Data/simple-linear-regression-model/7.png", "assets/Projects/Data/simple-linear-regression-model/8.png", "assets/Projects/Data/simple-linear-regression-model/9.png", "assets/Projects/Data/simple-linear-regression-model/10.png"],
          projectIcon: "",
          projectName: "Simple-Linear-Regression-Model",
          projectDescription: [
            "Foundational statistical modeling project implementing simple linear regression to explore relationships between variables.",
            "Analyzes how a single independent variable predicts a dependent variable, establishing core regression concepts.",
            "Includes evaluation metrics such as R-squared, Mean Squared Error (MSE), and coefficient significance testing.",
            "Visualizations: scatter plots with regression lines to illustrate the linear relationship and goodness of fit.",
            "Implemented using Python's scientific stack (pandas, NumPy, scikit-learn, matplotlib) for efficient computation and visualization.",
            "Includes example datasets (Heart Prediction Quantum Dataset.csv, taxi_trip_pricing.csv) for experimentation and validation.",
            "Serves as foundation for understanding more complex models like multiple linear regression and polynomial regression.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/Pandas.png",
            "assets/libs/NumPy.png",
            "assets/libs/scikit-learn.png"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/simple-linear-regression-model-",
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
          projectMainImage: "assets/Projects/Data/Study-on-LA-crimes/1.png",
          projectImages: [ "assets/Projects/Data/Study-on-LA-crimes/1.png", "assets/Projects/Data/Study-on-LA-crimes/2.png", "assets/Projects/Data/Study-on-LA-crimes/3.png", "assets/Projects/Data/Study-on-LA-crimes/4.png", "assets/Projects/Data/Study-on-LA-crimes/5.png", "assets/Projects/Data/Study-on-LA-crimes/6.png", "assets/Projects/Data/Study-on-LA-crimes/7.png", "assets/Projects/Data/Study-on-LA-crimes/8.png", "assets/Projects/Data/Study-on-LA-crimes/9.png", "assets/Projects/Data/Study-on-LA-crimes/10.png", "assets/Projects/Data/Study-on-LA-crimes/11.png", "assets/Projects/Data/Study-on-LA-crimes/12.png"],
          projectIcon: "",
          projectName: "San-Francisco-Crime-Classification",
          projectDescription: [
            "End-to-end machine learning workflow to classify crime types using real-world data from San Francisco.",
            "Dataset: Historical crime incident records from SF with features including crime category, datetime, location (latitude/longitude), and district.",
            "Exploratory Data Analysis (EDA): Pandas profiling, Matplotlib/Seaborn visualizations to understand crime distributions, temporal patterns, and spatial hotspots.",
            "Geospatial Mapping: Interactive Folium maps for crime hotspot visualization (requires internet connection for map tiles).",
            "Feature Engineering: Extracted temporal features (hour, day, month, year) and location-based attributes (distance to landmarks, clustering assignments).",
            "Clustering: KMeans and KMedoids for spatial crime pattern discovery — identifying high-crime clusters across the city.",
            "Classification: Random Forest model for crime category prediction using engineered features.",
            "Model Evaluation: Accuracy metrics and classification reports to assess predictive performance.",
            "Requirements: Python 3.11 with NumPy 1.26.4, pandas, matplotlib, seaborn, folium, scikit-learn, and scikit-learn-extra.",
            "Data source: San Francisco crime data sourced from Kaggle.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/Pandas.png",
            "assets/libs/scikit-learn.png"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/Study-on-lA-crimes",
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
          projectMainImage: "assets/Projects/Data/War-analysis/11.png",
          projectImages: ["assets/Projects/Data/War-analysis/1.png", "assets/Projects/Data/War-analysis/2.png","assets/Projects/Data/War-analysis/3.png","assets/Projects/Data/War-analysis/4.png","assets/Projects/Data/War-analysis/5.png","assets/Projects/Data/War-analysis/6.png","assets/Projects/Data/War-analysis/7.png","assets/Projects/Data/War-analysis/8.png","assets/Projects/Data/War-analysis/9.png","assets/Projects/Data/War-analysis/10.png","assets/Projects/Data/War-analysis/11.png","assets/Projects/Data/War-analysis/12.png","assets/Projects/Data/War-analysis/13.png"],
          projectIcon: "",
          projectName: "DataTools-Wars-Economic-Impact-Analysis-of-Modern-Conflicts",
          projectDescription: [
            "Interactive Streamlit dashboard analyzing the economic impact of major modern conflicts: Iraq War, Syrian Civil War, Ukraine Conflict, and Yemeni Civil War.",
            "Data source: World Bank economic indicators via automated API fetching — including GDP, GDP per capita, CPI (inflation), trade balance, exports, and unemployment rates.",
            "Analysis compares war-affected countries against global powers (USA, Russia) to contextualize economic disruption.",
            "8 specialized visualizations: GDP trends in war-affected countries, Consumer Price Index (CPI) trends, GDP per capita change during wars, Trade balance (Russia vs USA), Export changes during conflicts, GDP per capita comparison (war vs global powers), Unemployment changes during wars, Egypt-specific economic trends.",
            "Features: Automated data fetching and processing, comparative pre-war vs during-war period analysis, interactive tabs for each visualization type, export functionality for results and raw data.",
            "Technical stack: Streamlit for dashboard interface, Pandas for data manipulation, Matplotlib/Seaborn for visualizations, Requests for World Bank API integration.",
            "Purpose: Project for Data Tools and Analysis course — demonstrates end-to-end data pipeline from API to interactive insights.",
            "Usage: Run `streamlit run app.py` — app automatically fetches, cleans, processes data, and launches interactive visualizations.",
          ],
          projectPlatform: ["Web", "Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/Pandas.png",
            "assets/libs/Streamlit.png",
          ],
          projectUrl: "https://war-impace-analysis.streamlit.app/",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/War-impace-analysis",
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
          projectMainImage: "assets/Projects/Data/SVM/1.png",
          projectImages: ["assets/Projects/Data/SVM/1.png", "assets/Projects/Data/SVM/2.png", "assets/Projects/Data/SVM/3.png","assets/Projects/Data/SVM/4.png","assets/Projects/Data/SVM/5.png","assets/Projects/Data/SVM/6.png","assets/Projects/Data/SVM/7.png","assets/Projects/Data/SVM/8.png","assets/Projects/Data/SVM/9.png","assets/Projects/Data/SVM/10.png"],
          projectIcon: "",
          projectName: "US-Company-Bankruptcy-Prediction-using-SVM",
          projectDescription: [
            "Binary classification project predicting corporate bankruptcy using Support Vector Machines (SVM) on 20 years of financial data from NYSE and NASDAQ companies (1999-2018).",
            "Dataset: 78,682 firm-year observations from 8,262 distinct US public companies. Features include 22 financial indicators (18 original accounting metrics + 4 derived ratios: Debt-to-Assets, ROA, Current Ratio, EBIT-to-Revenue). Target: status_label (0 = Non-bankruptcy, 1 = Bankruptcy).",
            "Workflow: Exploratory Data Analysis (EDA) with visualizations and statistical summaries, PCA dimensionality reduction with elbow curve analysis, SVM classification with hyperparameter tuning, comprehensive model evaluation.",
            "Technical implementation: Command-line configurable script with arguments for data path, target column, test size, and random seed. Includes reproducibility controls for research consistency.",
            "Output files: eda_visualizations.png (distribution plots), eda_insights.txt (statistical summary), pca_elbow_curve.png (variance explained), confusion_matrix.png (prediction results), model_results.txt (metrics and parameters).",
            "Business context: Bankruptcy defined as Chapter 11 (reorganization) or Chapter 7 (cessation of operations). The fiscal year prior to bankruptcy filing is labeled as positive class, making this a forward-looking prediction task.",
            "Value proposition: Enables investors, creditors, and financial analysts to assess corporate default risk using publicly available accounting data.",
            "SVM selected for its effectiveness with high-dimensional financial data and ability to find optimal separating hyperplanes in imbalanced classification scenarios.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/py.svg",
            "assets/libs/Pandas.png",
            "assets/libs/NumPy.png",
            "assets/libs/scikit-learn.png"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/SVM",
          projectCreateYear: "2026",
          projectLastUpdateYear: "2026",
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
    {
      title: 'System projects',
      projects: [
        {
          projectMainImage: "assets/Projects/System/MyShell/1.png",
          projectImages: ["assets/Projects/System/MyShell/1.png", "assets/Projects/System/MyShell/2.png","assets/Projects/System/MyShell/3.png","assets/Projects/System/MyShell/4.png","assets/Projects/System/MyShell/5.png","assets/Projects/System/MyShell/6.png"],
          projectIcon: "",
          projectName: "myShell-Unix-Shell-Implementation-in-C",
          projectDescription: [
            "Feature-complete Unix shell written in C from scratch — supports pipes, redirection, background execution, signal handling, and command history.",
            "Core functionality: Command parsing, fork/exec process creation, foreground/background process management with PID tracking.",
            "I/O Redirection: Input (<) and output (>) redirection using dup2() and file descriptors.",
            "Pipes: Command chaining with | operator — full inter-process communication between multiple commands.",
            "Built-in commands: cd (directory change), pwd (print working directory), exit, history (persistent across sessions).",
            "Signal handling: SIGINT (Ctrl+C) kills foreground child processes only — shell remains alive (correct Unix behavior).",
            "History persistence: Commands saved to ~/.myshell_history and loaded on startup — survives shell restarts.",
            "Error handling: Graceful handling of command not found, file access errors, fork/pipe failures, and invalid syntax.",
            "System calls used: fork(), execvp(), waitpid(), pipe(), dup2(), open(), close(), chdir(), getcwd(), signal(), sigaction(), kill().",
            "Limitations (documented): No quoted argument support, no environment variable expansion, no wildcard expansion, no command substitution. Max command length 1024 chars, max pipeline 2 commands.",
            "Compiles with GCC 4.8+ on Linux/Unix (including WSL on Windows). Includes Makefile for easy building.",
          ],
          projectPlatform: ["Code"],
          projectType: "Code",
          projectVersion: "1.0.0",
          projectTech: [
            "assets/langs/C.svg",
            "assets/utls/linux.svg",
            "assets/utls/bash.svg"
          ],
          projectUrl: "",
          projectItch: "",
          projectGithub: "https://github.com/Quantum-Youssef-Amr/os-Konsole",
          projectCreateYear: "2026",
          projectLastUpdateYear: "2026",
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
    }
  ];
}
