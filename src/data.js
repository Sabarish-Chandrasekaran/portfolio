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
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

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
  {
    icon: <FaLinkedin size={20} />,
    href: "",
    name: "Linkedin",
  },
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
    image: Project1,
    name: "Beautify",
    category: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 1",
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
    ],
  },
  {
    id: "2",
    image: Project2,
    name: "Online Zoo",
    category: "web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 6",
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
    ],
  },
  {
    id: "3",
    image: Project3,
    name: "Recipe Book",
    category: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 3",
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
    ],
  },
  {
    id: "4",
    image: Project4,
    name: "project name 4",
    category: "branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 4",
    demo: "/",
    frontend: "/",
    stack: [
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
        image: SkillImg8,
      },
    ],
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 5",
    demo: "/",
    frontend: "/",
    backend: "/",
    stack: [
      {
        image: SkillImg3,
      },
      {
        image: SkillImg4,
      },
      {
        image: SkillImg5,
      },
    ],
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam 6",
    demo: "https://www.youtube.com/",
    frontend: "/",
    backend: "/",
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
        image: SkillImg4,
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
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
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
        </>
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
