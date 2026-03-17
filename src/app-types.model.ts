export type aboutPar = {title: string, paragraphs: Array<string>};
export type timelineNode = {title: string, massage: string};


export type skillPar = {title: string, skills: Array<skill>}
export type skill = {skillImage: string, skillTitle: string, skillRate: number};

export type project = {
  projectMainImage: string,
  projectImages: Array<string>,
  projectIcon: string,
  projectName: string,
  projectDescription: Array<string>,
  projectPlatform: 'PC'| 'Mobile'| 'Web' | 'Code',
  projectVersion: string,
  projectTech: Array<string>,
  projectUrl: string,
  projectItch: string,
  projectGithub: string,
  projectCreateYear: string,
  projectLastUpdateYear: string,
  projectStatus: 'in development' | 'complete',
  Credits: Array<Credit>
};

export type Credit = {
  name: string,
  role: string,
  LinkInLink: string,
  GithubLink: string,
  itchLink: string
}

export type projectSection = {
  title: string,
  projects: Array<project>
}

export type PersonalLinks = {
    githubLink: string,
    itchLink: string,
    linkedInLink: string,
    email: string
}
