//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

import { GrMysql } from "react-icons/gr";
import {
  SiFirebase,
  SiMaterialui,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/makeup2.png";
import Project2 from "./assets/img/projects/zoo.png";
import Project3 from "./assets/img/projects/recipe.png";
import Project4 from "./assets/img/projects/weather.png";
import Project5 from "./assets/img/projects/chat.png";
import Project6 from "./assets/img/projects/fakeflix3.png";
import Project7 from "./assets/img/projects/clonetube.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/mongo.png";
import SkillImg5 from "./assets/img/skills/express.png";
import SkillImg6 from "./assets/img/skills/reactjs.png";
import SkillImg7 from "./assets/img/skills/nodejs.png";
import SkillImg8 from "./assets/img/skills/bootstrap.png";
import SkillImg9 from "./assets/img/skills/bootstrap.png";
import SkillImg10 from "./assets/img/skills/mui.png";
import SkillImg11 from "./assets/img/skills/tailwind.png";
import SkillImg12 from "./assets/img/skills/mysql.png";
import SkillImg13 from "./assets/img/skills/firebase.png";
import SkillImg14 from "./assets/img/skills/postman.png";
import SkillImg15 from "./assets/img/skills/git.png";
import SkillImg16 from "./assets/img/skills/aws.png";
import SkillImg17 from "./assets/img/skills/rest-api-1.svg";


// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";
import { FaAws, FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  // {
  //   name: "testimonials",
  //   href: "testimonials",
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  // {
  //   icon: <FaLinkedin size={20} />,
  //   href: "",
  //   name: "Linkedin",
  // },
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/Sabarish-Chandrasekaran",
    name: "Github",
  },
  {
    icon: <HiOutlineMail size={20} />,
    href: "mailto:sabarish27k6@gmail.com",
    name: "Email",
  },
  {
    icon: <BsFillPersonLinesFill size={20} />,
    href: "/resume.pdf",
    name: "Resume",
    download: true,
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project5,
    name: "Chat 1-on-1",
    category: "web development",
    description:
      "A single page application like whatsapp where a user can chat and able to create groups. Used socket.io for seamless interaction",
    demo: "https://chat-1-on-1.netlify.app/",
    frontend: "https://github.com/Sabarish-Chandrasekaran/chat101-client0",
    backend: "https://github.com/Sabarish-Chandrasekaran/chat101-server",
    stack: [
      {
        image: SkillImg4,
      },
      {
        image: SkillImg5,
      },
      {
        image: SkillImg6,
      },
      {
        image: SkillImg7,
      },
      {
        image: SkillImg10,
      },
    ],
  },
  {
    id: "2",
    image: Project7,
    name: "Clonetube",
    category: "web development",
    description:
      "A web application whose inference is similar to YouTube web application, where user can do basic functionality (subscribe, like, upload videos). Used react-redux for faster response.",
    demo: "https://clonetube-yt.netlify.app/",
    frontend: "https://github.com/Sabarish-Chandrasekaran/clonetube-client",
    backend: "https://github.com/Sabarish-Chandrasekaran/clonetube-server",
    stack: [
      {
        image: SkillImg4,
      },
      {
        image: SkillImg5,
      },
      {
        image: SkillImg6,
      },
      {
        image: SkillImg7,
      },
      {
        image: SkillImg13,
      },
    ],
  },
  {
    id: "3",
    image: Project6,
    name: "Fakeflix",
    category: "web development",
    description:
      "A web application whose inference is similar to Netflix web application, where user can filter their genre and can add favorite to the list. Used react-redux for faster response.",
    demo: "https://fakeflix-netflix-clone.netlify.app/",
    frontend: "https://github.com/Sabarish-Chandrasekaran/fakeflix-client",
    backend: "https://github.com/Sabarish-Chandrasekaran/fakeflix-server",
    stack: [
      {
        image: SkillImg4,
      },
      {
        image: SkillImg5,
      },
      {
        image: SkillImg6,
      },
      {
        image: SkillImg7,
      },
      {
        image: SkillImg13,
      },
    ],
  },
  {
    id: "4",
    image: Project4,
    name: "Weather App",
    category: "UI Design/Frontend",
    description:
      "A React application using openweather API to fetch data to show forecast of any city the world,background of app changes dynamically according to weather conditions and timings.",
    demo: "https://weather-forecast-dynamic.netlify.app/",
    frontend: "https://github.com/Sabarish-Chandrasekaran/weather",
    stack: [
      {
        image: SkillImg6,
      },
      {
        image: SkillImg11,
      },
      {
        image: SkillImg17,
      },
    ],
  },
  {
    id: "5",
    image: Project3,
    name: "Recipe Book",
    category: "UI Design/Frontend",
    description:
      "A frontend application using mealDB API to fetch data to show recipe of dishes, user can filter thier recipes based on ingredients. ",
    demo: "https://promise-meal-api.netlify.app/",
    frontend:
      "https://github.com/Sabarish-Chandrasekaran/Promise-TheMealDB-API ",
    stack: [
      {
        image: SkillImg1,
      },
      {
        image: SkillImg2,
      },
      {
        image: SkillImg3,
      },
      {
        image: SkillImg17,
      },
    ],
  },
  {
    id: "6",
    image: Project1,
    name: "Beautify",
    category: "UI Design/Frontend",
    description:
      "A frontend application using makeup API to fetch data to show makeup items, user can filter thier items based on product types. ",
    demo: "https://hackathon-makeup-api.netlify.app/",
    frontend:
      "https://github.com/Sabarish-Chandrasekaran/Hackathon-1-Makeup_API",
    stack: [
      {
        image: SkillImg1,
      },
      {
        image: SkillImg2,
      },
      {
        image: SkillImg3,
      },
      {
        image: SkillImg17,
      },
    ],
  },
  {
    id: "7",
    image: Project2,
    name: "Online Zoo",
    category: "UI Design/Frontend",
    description:
      "A frontend application using zoo-animal API to fetch data to show different kinds of species, it gives user, to experience online safari ride.",
    demo: "https://promise-zoo-api.netlify.app/",
    frontend: "https://github.com/Sabarish-Chandrasekaran/Promise-zoo-API",
    stack: [
      {
        image: SkillImg1,
      },
      {
        image: SkillImg2,
      },
      {
        image: SkillImg3,
      },
      {
        image: SkillImg17,
      },
    ],
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web development",
  },
  {
    name: "UI Design/Frontend",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: [
      <>
        <SiMaterialui />
        &nbsp;&nbsp;Material UI
      </>,
      <>
        <SiTailwindcss />
        &nbsp;&nbsp;Tailwindcss
      </>,
      <>
        <GrMysql />
        &nbsp;&nbsp;MySql
      </>,
      <>
        <SiFirebase />
        &nbsp;&nbsp;Firbase
      </>,
    ],
    name: "Other Technical Skills",
    description: "",
  },
  {
    icon: [
      <>
        <SiPostman />
        &nbsp;&nbsp;Postman
      </>,
      <>
        <FaGitAlt />
        &nbsp;&nbsp;Git
      </>,
      <>
        <FaAws />
        &nbsp;&nbsp;AWS
      </>,
    ],
    name: "Tools & Other Frameworks",
    description: "",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at sabarish27k6@gmail.com",
  },
  {
    icon: <FiPhoneCall />,
    title: "Talk to Me",
    subtitle: "Here is my Whatsapp Number.",
    description: "+91 9972717643",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "#10E, 5th Cross Street, Arun Nagar, Vadavalli",
    description: "Coimbatore, Tamil Nadu",
  },
];
