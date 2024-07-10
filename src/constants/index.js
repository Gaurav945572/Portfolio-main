import {
  creator,
  bachelors,
  school,
  school2,
  web,
  data,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  express,
  git,
  bootstrap,
  tailwind,
  mysql,
  project_1_image,
  project_2_image,
  quiz,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Problem Solving",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  ,
  {
    title: "Data Analysis",
    icon: data,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tailwind",
    icon: tailwind,
  }, {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "MySQL",
    icon: mysql,
  }
];

const experiences = [
  {
    title: "B.Tech",
    company_name: "IIT PATNA",
    icon: bachelors,
    iconBg: "#ffffff",
    date: "JULY 2021 - Present",
    points: [
      "I am currently pursuing my bachelors in Mechanical Engineering",
      "My Present CGPA(Till VI Semester) is 7.94/10.",
      "Apart from this, I have done courses on Webdevelopmemt , DS, Algorithms, DBMS,Data Science, and Full Stack Development.",
    ],
    website:"Visit Website "
  },
  {
    title: "Senior Secondary",
    company_name: "G.N.National Public School",
    icon: school,
    iconBg: "#ffffff",
    date: "April 2018 - March 2020",
    points: [
      "I had studied here from my XI and XII Standard.",
      "I had secured  95.4% in XII Boards.",
      "Also, Secured  Rank 13 in class of strength of 400.",
    ],
  },
  ,
  {
    title: "Higher Secondary",
    company_name: "St.Joseph's School ",
    icon: school2,
    iconBg: "#ffffff",
    date: "April 2016 - March 2018",
    points: [
      "I had studied here from my IX and X StandardS.",
      "I had secured  96.2% in XII Boards.",
      "Also, Secured  Rank 2 i  my district Maharajganj.",
    ],
  },
];
const projects = [
  {
    name: "NewsApp",
    description:
      "Developed a full-stack web news application using JavaScript.Utilized the News API to retrieve and display real-time news articles to users. . Users can also update,add and delete their news notes.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "News API",
        color: "green-text-gradient",
      },
    ],
    image: project_1_image,
    source_code_link: "https://github.com/Gaurav945572/NewsApp",
  },
  {
    name: "Unit Converter",
    description:
      "A webapp which will be used for conversion of one unit to another another units. It includes temperature, mass, lenght and time units conversion. It can evaluate to high precession values. ",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      
    ],
    image: project_2_image,
    source_code_link: "https://github.com/Gaurav945572/Unit_converter",
  },
  
];

 

export { services, technologies, experiences, projects };
