/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Om Patel",
  title: "Hi, I'm Om Patel",
  subTitle: emoji(
    "Senior Software Engineer 🚀 with 3.6+ years of experience in building scalable, secure, and cloud-native backend systems using Java, Spring Boot, AWS, Kubernetes, Redis, and Keycloak."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/Om781",
  linkedin: "https://www.linkedin.com/in/om-patel-7924a218a/",
  gmail: "reach.ompatel@gmail.com",
  display: true
};

// Skills
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Backend-focused Software Engineer specializing in scalable systems, secure authentication, and cloud-native deployments",
  skills: [
    emoji("⚡ Design and develop scalable backend systems using Java & Spring Boot"),
    emoji("⚡ Secure authentication & authorization using Keycloak, Azure AD, JWT, OAuth2"),
    emoji("⚡ Microservices with Docker & Kubernetes"),
    emoji("⚡ Performance optimization using Redis & DB tuning"),
    emoji("⚡ CI/CD pipelines using Jenkins")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Kafka", fontAwesomeClassname: "fas fa-stream" },
    { skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BVM Engineering College, Vallabh Vidhyanagar",
      subHeader: "B.Tech in Computer Engineering",
      duration: "2018 – 2022",
      desc: "Strong foundation in software engineering and backend systems.",
      descBullets: ["CPI: 7.54 / 10"]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development (Java / Spring Boot)", progressPercentage: "90%" },
    { Stack: "Cloud & DevOps (AWS, Docker, Kubernetes)", progressPercentage: "80%" },
    { Stack: "Databases & Caching", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// ✅ WORK EXPERIENCE (LOGOS FIXED)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Developer L1",
      company: "Mantra Smart Identity",
      companylogo: "/images/companies/mantra.png",
      companyUrl: "https://mantraidentity.com/",
      date: "Nov 2024 – Present",
      desc:
        "Leading backend development for biometric and digital identity platforms.",
      kpis: [
        "🔐 Secure MOSIP Identity Workflows",
        "☁️ Cloud-native Microservices"
      ],
      descBullets: [
        "Designed secure authentication & authorization modules",
        "Built scalable Spring Boot microservices with clean architecture",
        "Delivered enterprise-grade identity systems"
      ]
    },
    {
      role: "Software Engineer",
      company: "Raapyd",
      companylogo: "/images/companies/raapyd.jpg",
      companyUrl: "https://www.raapyd.com/",
      date: "Feb 2024 – Sept 2025",
      kpis: [
        "🚀 25% Faster API Response Time",
        "☁️ Kubernetes-based Deployments"
      ],
      desc:
        "Developed and maintained enterprise backend systems using microservices architecture.",
      descBullets: [
        "Built Vendor Portal, CMMS & E-Catalog platforms",
        "Migrated authentication to Azure AD SSO with zero downtime",
        "Improved API performance through Redis caching & DB tuning",
        "Implemented Docker & Kubernetes based deployments"
      ]
    },
    {
      role: "Software Engineer",
      company: "Aivid Techvision Pvt. Ltd.",
      companylogo: "/images/companies/aivid.jpg",
      companyUrl: "https://aivid.ai/",
      date: "Aug 2022 – Feb 2024",
      kpis: [
        "✅ 94% Test Coverage",
        "🔐 JWT-based Security"
      ],
      desc:
        "Developed B2B CPQ portal for Tech Mahindra.",
      descBullets: [
        "Implemented Apache Kafka for event-driven architecture",
        "Achieved 94%+ unit test coverage using JUnit & Mockito",
        "Improved system security using JWT authentication"
      ]
    }
  ]
};

// Disabled Sections
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };

const openSource = { display: false };
const resumeSection = { display: false };
const bigProjects = { display: false };

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in backend engineering, cloud systems, or secure identity platforms? Let’s connect.",
  number: "+91 6354307757",
  email_address: "reach.ompatel@gmail.com"
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};