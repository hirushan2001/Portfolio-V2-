// Mock data for the portfolio - This will be replaced with backend integration later
import resume from '../assets/mycv.pdf';
import photo from '../assets/myphoto.png';
import uomLogo from '../assets/uom_logo.png';
import aloysiusLogo from '../assets/AloysiusLogo.png';
import siddarthaLogo from '../assets/siddarthaLogo.png';
import agrithmicsLogo from '../assets/AgrithmicsLogo.png';
import Handfree from '../assets/projects/Handfree.png';
import PortfolioV1 from '../assets/projects/PortfolioV1.png';
import Meethub from '../assets/projects/Meethub1.png';
import FieldMaster from '../assets/projects/FeildMaster.png';
import PortfolioV2 from '../assets/projects/PortfolioV2.png';
import FitnessApp from '../assets/projects/FitnessApp.png';
import { Icon } from "@iconify/react";

export const portfolioData = {
  personal: {
    name: "Dhananjana Hirushan",
    title: ["Full-Stack Developer", "Front-End Developer", "Content Creator"], 
    tagline: "Building scalable solutions across web, mobile, and backend systems",
    photo: photo,
    resumeUrl: resume,
    location: "Matara, Sri Lanka",
    email: "dhpdhananjana@email.com",
    phone: "+94 (76) 451-2428",
    social: {
      github: "https://github.com/hirushan2001",
      linkedin: "https://www.linkedin.com/in/dhananjana-hirushan-70992625b/",
      twitter: "https://x.com/dhanajanahp",
      portfolio: "https://alexjohnson.dev"
    }
  },

  about: {
    description: "Passionate IT undergraduate with proven problem-solving skills and hands-on industry experience. A collaborative team player with leadership qualities and adaptability, eager to build innovative solutions and explore emerging technologies.",
    highlights: [
      "2+ years of full-stack development experience",
      "Undergraduate in Information Technology at the University of Moratuwa",
      "Applied academic knowledge to real-world projects and industry practices",
      "Continuously learning and adapting to new technologies and frameworks"
    ],
    interests: ["Open Source", "UI/UX", "Web Development", "Mobile Development"]
  },

   experience: [
    {
      id: 1,
      company: "Agrithmics Pvt Ltd",
      position: "Intern Software Engineer",
      duration: "2025 Feb - 2025 Aug",
      location: "Rajagiriya, Sri Lanka",
      logo: agrithmicsLogo,
      description: "Contributed to multiple ERP projects in the agricultural sector, working on both frontend and backend development while improving automation processes and system functionality.",
      achievements: [
        "Developed automation processes for supplier payment and advance payment workflows",
        "Created report screens and implemented mobile APIs for production use",
        "Fixed critical bugs across ERP modules ensuring smooth system performance",
        "Collaborated with team leads and engineers using Agile practices with Azure DevOps"
      ],
      technologies: ["React.js", "Node.js", ".NET", "MSSQL", "Azure DevOps"]
    }
  ],

  education: [
    {
      id: 1,
      institution: "University of Moratuwa",
      degree: "BSc (Hons.) in Information Technology",
      duration: "2022 - 2026 (Expected)",
      location: "Moratuwa, Sri Lanka",
      logo: uomLogo, 
      gpa: "Current GPA: 3.42 / 4.0",
      focus: "Software Engineering"
    },
    {
      id: 2,
      institution: "St. Aloysius College",
      degree: "G.C.E. Advanced Level (Physical Science Stream)",
      duration: "2011 - 2020",
      location: "Galle, Sri Lanka",
      logo: aloysiusLogo,
      gpa: "Z-Score: 1.7401",
      focus: "Mathematics, Physics, Chemistry"
    },
    {
      id: 3,
      institution: "MR/Siddartha College",
      degree: "Primary Education",
      duration: "2006 - 2011",
      location: "Weligama, Sri Lanka",
      logo: siddarthaLogo,
      gpa: "", // No GPA for primary education
      focus: "General Education"
    }
  ],

skills: {
  frontend: [
    { name: "React", level: 95, icon: <Icon icon="logos:react" /> },
    { name: "TypeScript", level: 92, icon: <Icon icon="logos:typescript-icon" /> },
    { name: "Next.js", level: 88, icon: <Icon icon="logos:nextjs-icon" /> },
    { name: "React Native", level: 85, icon: <Icon icon="logos:react" /> },
    { name: "HTML5", level: 98, icon: <Icon icon="logos:html-5" /> },
    { name: "CSS3", level: 94, icon: <Icon icon="logos:css-3" /> },
    { name: "Tailwind CSS", level: 94, icon: <Icon icon="logos:tailwindcss-icon" /> },
    { name: "Material UI", level: 90, icon: <Icon icon="logos:material-ui" /> },
    { name: "Ant Design", level: 85, icon: <Icon icon="logos:ant-design" /> }
  ],
  backend: [
    { name: ".NET", level: 86, icon: <Icon icon="logos:dotnet" /> },
    { name: "Node.js", level: 93, icon: <Icon icon="logos:nodejs-icon" /> },
    { name: "Express.js", level: 92, icon: <Icon icon="simple-icons:express" /> },
  ],
  database: [
    { name: "MongoDB", level: 92, icon: <Icon icon="logos:mongodb-icon" /> },
    { name: "MySQL", level: 85, icon: <Icon icon="logos:mysql" /> },
    { name: "MS SQL", level: 88, icon: <Icon icon="simple-icons:microsoftsqlserver" /> }
  ],
  languages: [
    { name: "Java", level: 93, icon: <Icon icon="logos:java" /> },
    { name: "C#", level: 90, icon: <Icon icon="logos:c-sharp" /> },
    { name: "C", level: 88, icon: <Icon icon="logos:c" /> },
    { name: "JavaScript", level: 95, icon: <Icon icon="logos:javascript" /> }
  ],
  tools: [
    { name: "Docker", level: 90, icon: <Icon icon="logos:docker-icon" /> },
    // { name: "AWS", level: 88, icon: <Icon icon="logos:aws" /> },
    { name: "Git", level: 96, icon: <Icon icon="logos:git-icon" /> },
    { name: "Redis", level: 86, icon: <Icon icon="logos:redis" /> },
    { name: "Vite", level: 89, icon: <Icon icon="logos:vitejs" /> },
    { name: "Linux", level: 91, icon: <Icon icon="logos:linux-tux" /> },
    { name: "Blender", level: 75, icon: <Icon icon="logos:blender" /> },
    { name: "Azure DevOps", level: 85, icon: <Icon icon="simple-icons:azuredevops" /> },
    { name: "Figma", level: 92, icon: <Icon icon="logos:figma" /> }
  ],
},

  projects: [
    {
      id: 1,
      title: "FeidMaster",
      description: "eldMaster is a comprehensive land measuring and management application available on both mobile and web platforms. It features accurate land measurement, plantation and fertilization count estimation, fencing details estimation, land clearing assessment, and map management tools, including resizing and partitioning lands.",
      image: FieldMaster,
      technologies: ["React", "Node.js", "MongoDB", "React Native"],
      demoUrl: "https://field-master-frontend.vercel.app/",
      githubUrl: "https://github.com/kanishkazoysa/FieldMaster",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "HandFree.lk",
      description: "HandFree is an e-commerce platform specializing in iPhone and Apple products, built with the MERN stack and Micro-Service Architecture for scalability. It features secure OTP-based authentication, a PayHere-integrated payment gateway, dynamic product search and filtering, a persistent shopping cart, and a centralized admin dashboard for managing products, orders, and inventory..",
      image: Handfree,
      technologies: ["React", "Node.js", "MongoDB", "Express.js",],
      //demoUrl: "https://apps.apple.com/app/taskmanager",
      githubUrl: "https://github.com/EADOnlineShoppingSystem",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Portfolio Website V2",
      description: "My personal portfolio website showcasing my projects, skills, and experience. Built with React.js and Tailwind CSS for a modern, responsive design.",
      image: PortfolioV2,
      technologies: ["React", "Tailwind CSS", "Framer Motion","Node.js"],
      demoUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/alexjohnson/realtime-chat",
      featured: false,
      category: "Frontend"
    },
    {
      id: 4,
      title: "MeetHub",
      description: "This project replicates the widely used Zoom video conferencing tool, leveraging the latest Next.js and TypeScript technologies. It enables users to log in securely, create meetings, and access a range of meeting functionalities, including recording, screen sharing, and participant management. With a focus on security and real-time communication, this platform provides a seamless video conferencing experience.",
      image: Meethub,
      technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      //demoUrl: "https://analytics-dashboard.com",
      githubUrl: "https://github.com/hirushan2001/MeetHub",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 5,
      title: "Portfolio Website V1",
      description: "A personal portfolio website built with React.js and CSS3, showcasing my projects, skills, and experience with a clean and responsive design.",
      image: PortfolioV1,
      technologies: ["React", "Node.js", "Framer Motion"],
      demoUrl: "https://dhananjanahirushan.vercel.app/",
      githubUrl: "https://github.com/hirushan2001/portfolio",
      featured: false,
      category: "Frontend"
    },
    {
      id: 6,
      title: "Fitness Mobile App",
      description: "A React Native mobile app that fetches data from a fitness API to provide users with workout information, exercises, and health insights.",
      image: FitnessApp,
      technologies: ["React Native"],
      demoUrl: null,
      githubUrl: "https://github.com/hirushan2001/Fitness_app",
      featured: false,
      category: "Mobile"
    }
  ]
};

export default portfolioData;