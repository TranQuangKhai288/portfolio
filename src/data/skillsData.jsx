const skillsData = [
  {
    section: "SPECIALIZED SKILLS",
    groups: [
      {
        category: "Frontend",
        skills: [
          { name: "HTML", icon: "bx bxl-html5", level: "Advanced" },
          { name: "CSS", icon: "bx bxl-css3", level: "Advanced" },
          { name: "JavaScript", icon: "bx bxl-javascript", level: "Advanced" },
          { name: "TypeScript", icon: "bx bxl-typescript", level: "Intermediate" },
          { name: "React JS", icon: "bx bxl-react", level: "Advanced" },
          { name: "React Native", icon: "bx bxl-react", level: "Intermediate" },
          { name: "Material UI", icon: "bx bx-palette", level: "Intermediate" },
          { name: "Refine", icon: "bx bx-rocket", level: "Intermediate" },
          { name: "BootStrap", icon: "bx bxl-bootstrap", level: "Intermediate" },
          { name: "AntD", icon: "bx bx-layout", level: "Intermediate" },
          { name: "Redux & Redux Toolkit", icon: "bx bx-sync", level: "Intermediate" },
        ],
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js", icon: "bx bxl-nodejs", level: "Intermediate" },
          { name: "Express.js", icon: "bx bx-code-alt", level: "Intermediate" },
          { name: "REST API", icon: "bx bx-link-external", level: "Intermediate" },

        ],
      },
      {
        category: "Database",
        skills: [
          { name: "SQL", icon: "bx bx-data", level: "Intermediate" },
          { name: "MySQL", icon: "bx bxs-data", level: "Intermediate" },
          { name: "MongoDB", icon: "bx bxl-mongodb", level: "Intermediate" },
          { name: "Firebase", icon: "bx bxl-firebase", level: "Basic" },
          { name: "PostgreSQL", icon: "bx bxl-postgresql", level: "Basic" },
        ],
      },
      {
        category: "Other",
        skills: [
          { name: "Clean code & Debugging", icon: "bx bx-code-curly", level: "Intermediate" },
          { name: "Unit Testing (Jest, React Testing Library…)", icon: "bx bx-check-double", level: "Basic" },
          { name: "CI/CD Basics", icon: "bx bx-git-branch", level: "Basic" },
          { name: "Git", icon: "bx bxl-git", level: "Intermediate" },
          { name: "Figma", icon: "bx bxl-figma", level: "Basic" },
        ],
      },
    ],
  },
  {
    section: "SOFT SKILLS",
    groups: [
      {
        category: "Soft Skills",
        skills: [
          {
            name: "Problem Solving",
            icon: "bx bx-bulb",
            description: "Able to break down complex software issues, debug efficiently, and develop logical, maintainable solutions."
          },
          {
            name: "Self-Learning",
            icon: "bx bx-book-open",
            description: "Proactively explores new technologies, frameworks, and best practices to improve development quality and productivity."
          },
          {
            name: "Teamwork",
            icon: "bx bx-group",
            description: "Collaborates effectively in Agile/Scrum teams, participates in code reviews, and supports teammates to achieve common goals."
          },
          {
            name: "Technical Research",
            icon: "bx bx-search",
            description: "Capable of evaluating technical documentation, comparing libraries/tools, and applying the most suitable ones to project requirements."
          },
          {
            name: "Communication",
            icon: "bx bx-conversation",
            description: "Clearly communicates technical ideas, writes understandable documentation, and actively participates in discussions with both dev and non-dev stakeholders."
          },
          {
            name: "Adaptability",
            icon: "bx bx-refresh",
            description: "Comfortable switching between stacks, tools, and tasks based on project needs while maintaining focus and effectiveness."
          },
          {
            name: "Time Management",
            icon: "bx bx-time",
            description: "Manages development tasks with clear priorities, estimates effort realistically, and consistently meets sprint or delivery deadlines."
          },
          {
            name: "Critical Thinking",
            icon: "bx bx-brain",
            description: "Evaluates requirements and trade-offs thoroughly to design solutions that are both technically sound and aligned with business needs."
          },
        ],
        
      },
    ],
  },
];

export default skillsData;
