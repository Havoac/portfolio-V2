// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
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
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import scmLogo from "./assets/work_logo/scm.png";
import imdbLogo from "./assets/work_logo/imdb.png";
import invoiceLogo from "./assets/work_logo/invoiceProject.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

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
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSA College, Mathura",
    date: "Sept 2018 - Aug 2021",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2017 - March 2018",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
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
