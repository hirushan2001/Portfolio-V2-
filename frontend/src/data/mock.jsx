// Mock data for the portfolio - This will be replaced with backend integration later
import resume from '../assets/mycv.pdf';
import photo from '../assets/myphoto.png';
import uomLogo from '../assets/uom_Logo.png';
import aloysiusLogo from '../assets/AloysiusLogo.png';
import siddarthaLogo from '../assets/siddarthaLogo.png';
import agrithmicsLogo from '../assets/AgrithmicsLogo.png';
import { Icon } from "@iconify/react";

export const portfolioData = {
  personal: {
    name: "Dhananjana Hirushan",
    title: ["Full-Stack Developer", "Front-End Developer", "Content Creator"], 
    tagline: "Building scalable solutions across web, mobile, and backend systems",
    photo: photo,
    resumeUrl: resume,
    location: "San Francisco, CA",
    email: "dhpdhananjana@email.com",
    phone: "+94 (076) 451-2428",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
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
    interests: ["Open Source", "AI/ML", "Web Development", "Mobile Development"]
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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile app built with React Native. Features offline sync, push notifications, and real-time collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      demoUrl: "https://apps.apple.com/app/taskmanager",
      githubUrl: "https://github.com/alexjohnson/task-manager-app",
      featured: true,
      category: "Mobile"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with message encryption, file sharing, and video calling capabilities.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["Socket.io", "Express.js", "React", "WebRTC"],
      demoUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/alexjohnson/realtime-chat",
      featured: false,
      category: "Backend"
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      description: "Data visualization dashboard with machine learning insights. Built with Python backend and React frontend.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "React", "D3.js", "TensorFlow"],
      demoUrl: "https://analytics-dashboard.com",
      githubUrl: "https://github.com/alexjohnson/ai-analytics",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Weather API", "Mapbox", "CSS3"],
      demoUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/alexjohnson/weather-app",
      featured: false,
      category: "Frontend"
    },
    {
      id: 6,
      title: "Fitness Tracking API",
      description: "REST API for fitness tracking with user authentication, workout logging, and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Node.js", "MongoDB", "JWT", "Express.js"],
      demoUrl: null,
      githubUrl: "https://github.com/alexjohnson/fitness-api",
      featured: false,
      category: "Backend"
    }
  ]
};

export default portfolioData;