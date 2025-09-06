// Mock data for the portfolio - This will be replaced with backend integration later
import resume from '../assets/mycv.pdf';
import photo from '../assets/myphoto.png';
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
    description: "Passionate full-stack developer with 5+ years of experience building scalable web applications, mobile apps, and robust backend systems. I love solving complex problems and creating user-centric solutions that make a real impact.",
    highlights: [
      "5+ years of full-stack development experience",
      "Led development teams of 3-8 developers",
      "Built applications serving 100K+ users",
      "Expert in modern web and mobile technologies"
    ],
    interests: ["Open Source", "AI/ML", "Cloud Architecture", "Mobile Development"]
  },

  experience: [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Full-Stack Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of microservices architecture serving 50K+ daily active users. Built React Native mobile app with 4.8 App Store rating.",
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Led migration to containerized deployment reducing costs by 30%",
        "Mentored 3 junior developers"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "React Native"]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      duration: "2020 - 2022",
      location: "Remote",
      description: "Developed MVP from concept to launch, handling both frontend and backend development. Built scalable REST APIs and responsive web applications.",
      achievements: [
        "Built entire platform from scratch in 6 months",
        "Implemented real-time chat system with WebSocket",
        "Achieved 99.9% uptime in production"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Socket.io"]
    },
    {
      id: 3,
      company: "WebSolutions Ltd.",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: "Specialized in creating responsive, accessible web applications with modern JavaScript frameworks.",
      achievements: [
        "Improved page load speed by 60%",
        "Implemented accessibility standards (WCAG 2.1)",
        "Built component library used across 5 projects"
      ],
      technologies: ["React", "TypeScript", "SASS", "Webpack", "Jest"]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Stanford University",
      degree: "Master of Science in Computer Science",
      duration: "2017 - 2019",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      focus: "Software Engineering & AI"
    },
    {
      id: 2,
      institution: "UC Berkeley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2013 - 2017",
      location: "Berkeley, CA",
      gpa: "3.7/4.0",
      focus: "Computer Systems & Algorithms"
    }
  ],

  skills: {
    frontend: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Vue.js", level: 90, icon: "💚" },
      { name: "TypeScript", level: 92, icon: "🔷" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Flutter", level: 80, icon: "🐦" },
      { name: "HTML/CSS", level: 98, icon: "🎨" },
      { name: "Tailwind CSS", level: 94, icon: "💨" }
    ],
    backend: [
      { name: "Node.js", level: 93, icon: "💚" },
      { name: "Python", level: 90, icon: "🐍" },
      { name: "Express.js", level: 92, icon: "🚂" },
      { name: "FastAPI", level: 88, icon: "⚡" },
      { name: "GraphQL", level: 85, icon: "📊" },
      { name: "REST APIs", level: 95, icon: "🔌" },
      { name: "Microservices", level: 87, icon: "🏗️" },
      { name: "Socket.io", level: 84, icon: "🔄" }
    ],
    database: [
      { name: "MongoDB", level: 92, icon: "🍃" },
      { name: "PostgreSQL", level: 89, icon: "🐘" },
      { name: "Redis", level: 86, icon: "🔴" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "Firebase", level: 83, icon: "🔥" }
    ],
    tools: [
      { name: "Docker", level: 90, icon: "🐳" },
      { name: "AWS", level: 88, icon: "☁️" },
      { name: "Git", level: 96, icon: "📝" },
      { name: "Jenkins", level: 82, icon: "👷" },
      { name: "Kubernetes", level: 80, icon: "☸️" },
      { name: "Linux", level: 91, icon: "🐧" }
    ]
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