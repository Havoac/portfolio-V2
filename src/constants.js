// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import hibernateLogo from "./assets/tech_logo/hibernate.png";
import gitbashLogo from "./assets/tech_logo/gitbash.png";
import eclipseLogo from "./assets/tech_logo/eclipse.png";
import sqlWorkBenchLogo from "./assets/tech_logo/sqlworkbench.png";

// Experience Section Logo's
import arriseLogo from "./assets/company_logo/arrise.png";
import curiousJrLogo from "./assets/company_logo/curiousJr.png";
import highRadiusLogo from "./assets/company_logo/highRadius.png";

// Education Section Logo's
import kiitLogo from "./assets/education_logo/kiit.png";
import mtsLogo from "./assets/education_logo/mts.png";
import stJohnsLogo from "./assets/education_logo/stJohns.png";

// Project Section Logo's
import scmLogo from "./assets/work_logo/scm.png";
import imdbLogo from "./assets/work_logo/imdb.png";
import invoiceLogo from "./assets/work_logo/invoiceProject.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Hibernate", logo: hibernateLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "C#", logo: csharpLogo },
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Gitbash", logo: gitbashLogo },
      { name: "Eclipse", logo: eclipseLogo },
      { name: "MySQL", logo: sqlWorkBenchLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: arriseLogo,
    role: "Associate Developer",
    company: "Arrise Solutions Powering Pragmatic Play",
    date: "July 2023 - Present",
    desc: "I’ve built and optimized Spring Boot microservices, reducing latency by 25% and improving performance by 30%. I integrated Spring Security with OAuth2 and JWT for secure authentication and led database optimizations using Spring Data JPA and Hibernate. I collaborate closely across teams to implement efficient, scalable solutions. My contributions have directly impacted system performance, data security, and development speed across key services.",
    skills: [
      "JavaScript",
      "React JS",
      "Spring boot",
      "Spring Security",
      "Spring MVC",
      "Hibernate",
    ],
  },
  {
    id: 1,
    img: curiousJrLogo,
    role: "Software Developer Intern",
    company: "CuriousJr",
    date: "April 2022 - January 2023",
    desc: "Led the development of 20+ interactive games, 3+ courses, and 12+ competition projects for the CuriousJr app. Mentored a junior intern, improving their coding proficiency by 50% and ensuring timely delivery. Contributed across the frontend stack using JavaScript, HTML, CSS, and jQuery to build engaging, educational experiences tailored for mobile users.",
    skills: ["JavaScript", "HTML", "CSS", "Jquery"],
  },
  {
    id: 2,
    img: highRadiusLogo,
    role: "Full stack Developer Intern",
    company: "High Radius",
    date: "January 2022 - April 2022",
    desc: "Developed a Servlet within a web server to connect with SQLyog and extract imported data. Processed and sent data to a Web API, created functionality-specific files, and handled data format transformations. Worked with Java, SQLyog, and Eclipse throughout the development process.",
    skills: ["HTML", "CSS", "Javascript", "Material UI", "Java", "SQL", "JDBC"],
  },
];

export const education = [
  {
    id: 0,
    img: kiitLogo,
    school: "KIIT University, Bhubaneswar",
    date: "July 2019 - June 2023",
    grade: "8.96 CGPA",
    desc: "I have completed my bachelor's degree in Computer Science and Engineering from KIIT University, Bhubaneswar. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIIT University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: mtsLogo,
    school: "MTS Public School, Mirzapur",
    date: "July 2018 - June 2019",
    grade: "80.8 %",
    desc: "I completed my 12th grade from MTS Public School with a focus on Physics, Chemistry, and Mathematics, along with Computer Science as an elective. This combination strengthened my analytical thinking and introduced me to programming fundamentals, which laid the foundation for my interest in software development and problem-solving.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: stJohnsLogo,
    school: "St John's Co-Ed School, Prayagraj",
    date: "July 2016 - June 2017",
    grade: "79.6 %",
    desc: "I completed my 10th grade from St. John’s Co-Ed School, where I opted for Computer Applications as an elective subject over Commerce and Hindi. This early exposure to computers sparked my curiosity in technology and laid the groundwork for my continued interest in programming and software development.",
    degree: "ICSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Smart Contact Manager",
    description:
      "Built a full-featured contact management system that allows users to securely manage and organize their contacts. Integrated Spring Security for authentication and access control, and used Spring Data JPA for efficient data handling. The application features a modern interface with user-friendly notifications powered by SweetAlert2, focusing on both functionality and a smooth user experience.",
    image: scmLogo,
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "HTML",
      "CSS",
      "JavaScript",
      "SweetAlert2",
      "Git",
      "Maven",
    ],
    github: "https://github.com/Havoac/Smart-Contact-Manager/tree/master",
    webapp: null,
  },
  {
    id: 1,
    title: "Imdb Clone",
    description:
      "A feature-rich clone of IMDb built using HTML, CSS, and JavaScript. The app allows users to browse movies, view detailed information, and explore popular, top-rated, and upcoming films using the TMDB API. Designed with a modern UI and responsive layout for a smooth user experience across devices.",
    image: imdbLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Fetch API", "REST APIs"],
    github: "https://github.com/Havoac/Imdb-Clone",
    webapp: "https://imdb-clone-havoc.netlify.app/",
  },
  {
    id: 2,
    title: "Invoice Management Project",
    description:
      "Built a full-stack Movie and Invoice Management application with dynamic dashboards. Implemented CRUD operations for movies using Spring Boot with filtered search and pagination support. Designed a B2B Fintech Receivables Dashboard using React.js and Material UI to visualize invoice data interactively.",
    image: invoiceLogo,
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "React JS",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Pagination",
      "CRUD",
      "Git",
    ],
    github: "https://github.com/Havoac/Invoice-Management-Project",
    webapp: null,
  },
];
