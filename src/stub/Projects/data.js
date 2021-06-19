import django from "../../Assets/ProjectsCategory/django.png";
import react from "../../Assets/ProjectsCategory/react.png";
import php from "../../Assets/ProjectsCategory/php.png";
import mern from "../../Assets/ProjectsCategory/mern.png";
import js from "../../Assets/ProjectsCategory/js.png";

const data = [
  {
    id: 1,
    title: "Winbox-React npm package",
    tags: [
      {
        id: 1,
        text: "NPM",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "OOP",
      },
    ],
    link: "https://tanvirmahin24.github.io/winbox-react/",
    description:
      "This package is the react version of Winbox.js. Learned a lot while building this package. This package got 1000+ download in the first 24 hours.",
    image: react,
  },
  {
    id: 2,
    title: "Real Estate Management Site",
    description:
      "This is a full stack Django project. This is fully optimized and feature packed Website. Learned a lot about Django throughout this project.",
    tags: [
      {
        id: 1,
        text: "Django",
      },
      {
        id: 2,
        text: "Bootstrap",
      },
    ],
    link: "/",
    image: django,
  },
  {
    id: 3,
    title: "Portfolio Gatsby Website",
    description:
      "This is a Gatsby project. I was quite experienced with the MERN stack and wanted to make my website more SEO-friendly. For this, I learned a bit about Gatsby and made this project.",
    tags: [
      {
        id: 1,
        text: "Gatsby",
      },
      {
        id: 2,
        text: "Node.js",
      },
      {
        id: 3,
        text: "Strapi",
      },
    ],
    link: "https://tanvirmahin.netlify.app",
    image: react,
  },

  {
    id: 5,
    title: "Moment Startup Site",
    description:
      "The moment is a startup of my team. We provide clothing online store and we have a lot of customers around Bangladesh. This is a static website. I wanted this website to have an elegant look.",
    tags: [
      {
        id: 1,
        text: "React",
      },
      {
        id: 2,
        text: "UI/UX",
      },
    ],
    link: "https://momentbd.netlify.app",
    image: react,
  },
  {
    id: 6,
    title: "Blood Donation Management Site",
    description:
      "This is a raw PHP with MySQL project that I made as a task being in the RUET Career Forum DevTeam. ",
    tags: [
      {
        id: 1,
        text: "PHP",
      },
      {
        id: 2,
        text: "MySQL",
      },
      {
        id: 3,
        text: "HTML/CSS",
      },
    ],
    link: "/",
    image: php,
  },
  {
    id: 7,
    title: "Blogging Platform Website",
    description:
      "A PHP MySQL project as a task for the RUET Career Forum devTeam compition. Learned a lot about PHP while making this project.",
    tags: [
      {
        id: 1,
        text: "PHP",
      },
      {
        id: 2,
        text: "MySQL",
      },
      {
        id: 3,
        text: "HTML/CSS",
      },
    ],
    link: "/",
    image: php,
  },
  {
    id: 8,
    title: "DevAddaGhor Forum Website",
    description:
      "This is a full-stack MERN project. This is a social media-type project where profile, forum functionalities are added. ",
    tags: [
      {
        id: 1,
        text: "MongoDB",
      },
      {
        id: 2,
        text: "Express",
      },
      {
        id: 3,
        text: "React",
      },
      {
        id: 4,
        text: "Node.js",
      },
    ],
    link: "/",
    image: mern,
  },
  {
    id: 10,
    title: "Github Buddy JavaScript Project",
    description:
      "This is a simple but one of the most important projects for my web development carrier. I become much confident about asynchronous programming in JavaScript. ",
    tags: [
      {
        id: 1,
        text: "Vanilla JavaScript",
      },
      {
        id: 2,
        text: "Asynchronous Programming",
      },
    ],
    link: "https://tanvirmahin24.github.io/Github-buddy",
    image: js,
  },
  {
    id: 11,
    title: "Bytech Web Design",
    description: "This is a simple HTML CSS design for creative agency.",
    tags: [
      {
        id: 1,
        text: "HTML/CSS",
      },
      {
        id: 2,
        text: "D3",
      },
    ],
    link: "https://bytechbd.tech/",
    image: js,
  },
];

export default data;
