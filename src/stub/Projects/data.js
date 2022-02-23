import django from "../../Assets/ProjectsCategory/django.png";
import react from "../../Assets/ProjectsCategory/react.png";
import php from "../../Assets/ProjectsCategory/php.png";
import mern from "../../Assets/ProjectsCategory/mern.png";
import js from "../../Assets/ProjectsCategory/js.png";

const data = [
  {
    id: 14,
    title: "CmpGen npm package",
    content: <h1>a</h1>,
    tags: [
      {
        id: 0,
        text: "CLI",
      },
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
        text: "Node.js",
      },
    ],
    link: "https://devnops.tech/cmpgen/",
    github: "https://github.com/TanvirMahin24/cmpgen",
    npm: "https://www.npmjs.com/package/cmpgen",
    description:
      "This is a CLI built with Node.js for generating boilerplate code for react components. This package also accept config file for constant structure.",
    image: react,
  },
  {
    id: 15,
    title: "Qubitech Solutions Website",
    content: <h1>a</h1>,
    tags: [
      {
        id: 0,
        text: "React",
      },
    ],
    link: "https://qubitechbd.com/",
    description: `
  Qubitech is a creative team working with ambitious tech
  companies around the world. Every day, we are
  developing tech solutions that help our partners
  stand out, connect with customers and grow faster.`,
    image: react,
  },

  {
    id: 2,
    title: "Client Workflow Management System",
    description:
      "It is a workflow management system where the designers and the clients can communicate with each other and make rivisions of their work. It is a web application which is developed using React and Node.js.",
    tags: [
      {
        id: 1,
        text: "React",
      },
      {
        id: 2,
        text: "AWS EC2",
      },
      {
        id: 3,
        text: "Node.js",
      },
      {
        id: 3,
        text: "Express",
      },
      {
        id: 4,
        text: "MongoDB",
      },
    ],
    link: "http://meetnayeem.com/",
    github: "https://github.com/NayeemH/Upwork-Client-workflow-management",
    image: django,
  },
  {
    id: 21,
    title: "Pioneer Alpha",
    description:
      "Being the lead web developer of Pioneer Alpha I had the opportunity to work on Pioneer Alpha's official website.",
    tags: [
      {
        id: 1,
        text: "React",
      },
      {
        id: 2,
        text: "AWS EC2",
      },
      {
        id: 3,
        text: "Node.js",
      },
      {
        id: 3,
        text: "Express",
      },
      {
        id: 4,
        text: "MongoDB",
      },
    ],
    link: "https://pioneeralpha.com/",
    image: django,
  },
  {
    id: 21,
    title: "Amar iSchool",
    description:
      "I was the lead web developer of Pioneer Alpha where I contributed to making the Amar iSchool website. It was a great learning phase for me as a web developer.",
    tags: [
      {
        id: 1,
        text: "React",
      },
      {
        id: 2,
        text: "AWS EC2",
      },
      {
        id: 3,
        text: "AWS API Gateway",
      },
      {
        id: 3,
        text: "AWS Lambda",
      },
      {
        id: 4,
        text: "AWS DynamoDB",
      },
    ],
    image: django,
  },
  {
    id: 13,
    title: "InfraAgency React Website",
    content: <h1>a</h1>,
    tags: [
      {
        id: 1,
        text: "React",
      },
      {
        id: 2,
        text: "Netlify",
      },
      {
        id: 3,
        text: "Jquery",
      },
    ],
    link: "https://infraagency.com/",
    description:
      "This project wascompeleted for Upwork Client and it is a website for InfraAgency. It is a React website deployed to Netlify.",
    image: react,
  },
  {
    id: 1,
    title: "Winbox-React npm package",
    content: <h1>a</h1>,
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
    github: "https://github.com/TanvirMahin24/winbox-react",
    npm: "https://www.npmjs.com/package/winbox-react",
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
    link: "",
    github: "https://github.com/TanvirMahin24/realstate-django",
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
    github: "",
    image: react,
  },
  // {
  //   id: 12,
  //   title: "Portfolio Nextjs",
  //   description:
  //     "This is a Gatsby project. I was quite experienced with the MERN stack and wanted to make my website more SEO-friendly. For this, I learned a bit about Gatsby and made this project.",
  //   tags: [
  //     {
  //       id: 1,
  //       text: "Nextjs",
  //     },
  //     {
  //       id: 2,
  //       text: "Node.js",
  //     },
  //     {
  //       id: 3,
  //       text: "React",
  //     },
  //   ],
  //   link: "https://tanvirmahin.herokuapp.com/",
  //   github: "https://github.com/TanvirMahin24/Portfolio-site-react",
  //   image: react,
  // },
  // {
  //   id: 5,
  //   title: "Moment Startup Site",
  //   description:
  //     "The moment is a startup of my team. We provide clothing online store and we have a lot of customers around Bangladesh. This is a static website. I wanted this website to have an elegant look.",
  //   tags: [
  //     {
  //       id: 1,
  //       text: "React",
  //     },
  //     {
  //       id: 2,
  //       text: "UI/UX",
  //     },
  //   ],
  //   link: "https://momentbd.netlify.app",
  //   github: "",
  //   image: react,
  // },
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
    github: "https://github.com/TanvirMahin24/reddot",
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
    github: "https://github.com/TanvirMahin24/blogger",
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
    github: "https://github.com/TanvirMahin24/DevAdda",
    image: mern,
  },
  // {
  //   id: 8,
  //   title: "Obosor Website",
  //   description:
  //     "Obosor is a online library. It was a great project for me. This project was built in MERN stack.",
  //   tags: [
  //     {
  //       id: 1,
  //       text: "MongoDB",
  //     },
  //     {
  //       id: 2,
  //       text: "Express",
  //     },
  //     {
  //       id: 3,
  //       text: "React",
  //     },
  //     {
  //       id: 4,
  //       text: "Node.js",
  //     },
  //   ],
  //   link: "https://obosor.shop",
  //   image: mern,
  // },

  // {
  //   id: 11,
  //   title: "Bytech Web Design",
  //   description: "This is a simple HTML CSS design for creative agency.",
  //   tags: [
  //     {
  //       id: 1,
  //       text: "HTML/CSS",
  //     },
  //     {
  //       id: 2,
  //       text: "D3",
  //     },
  //   ],
  //   link: "https://bytechbd.tech/",
  //   github: "https://github.com/TanvirMahin24/bytech",
  //   image: js,
  // },
];

export default data;
