// =====================================================================
// Single source of truth for all portfolio content.
// Edit here to update the site — every section reads from this file.
// Positioning: general Software Engineer (backend), global + freelance ready.
// Content verified against resume + company reference letters.
// =====================================================================

const BASE = import.meta.env.BASE_URL; // "/om-patel-portfolio/"

export const profile = {
  name: "Om Patel",
  handle: "om.patel",
  role: "Software Engineer",
  roleWords: ["Software", "Engineer"], // hero headline, two lines
  descriptor: "Backend · Cloud · Distributed Systems",
  rotating: [
    "Backend Systems",
    "Cloud & DevOps",
    "Secure APIs",
    "Microservices",
    "Distributed Systems"
  ],
  tagline:
    "I design, build and ship scalable, secure backend systems — from enterprise portals to national-scale identity platforms. Available worldwide for full-time roles and freelance projects.",
  yearsExperience: "3.7+",
  location: "India · open to relocation & remote",
  status: "Open to global roles & freelance projects",
  availability: "Full-time (open to relocation) · Freelance · Remote worldwide",
  resume: BASE + "resume.pdf",
  email: "reach.ompatel@gmail.com",
  phone: "+91 6354307757",
  fingerprintId: "0xF1NG3R-PR1NT-A7C9"
};

export const socials = {
  github: "https://github.com/Om781",
  linkedin: "https://www.linkedin.com/in/om-patel-7924a218a/",
  twitter: "https://twitter.com/ompatel781",
  email: "mailto:reach.ompatel@gmail.com"
};

// Domains shipped in — shows range, not a single niche
export const domains = [
  "Manufacturing",
  "Telecom",
  "Healthcare",
  "E-Commerce",
  "Digital Identity"
];

export const stats = [
  {value: "3.7+", label: "Years shipping", detail: "production backend systems"},
  {value: "25%", label: "Faster APIs", detail: "query tuning + caching"},
  {value: "94%", label: "Test coverage", detail: "JUnit & Mockito, TDD"},
  {value: "5+", label: "Enterprise products", detail: "delivered end to end"}
];

export const about = {
  story: [
    "I'm a backend engineer who believes great software is invisible — it just works, scales, and keeps data secure. My path started with one question: how do systems trust each other, and how do they know who's really on the other end?",
    "Over 3.7+ years I've shipped production systems across manufacturing, telecom, healthcare, e-commerce and digital-identity domains — enterprise portals, event-driven microservices, and national-scale authentication. I care about the whole lifecycle: clean architecture, tuned queries, secure APIs, and zero-downtime deploys under real production traffic.",
    "I'm now looking outward — open to opportunities globally (including relocation) and available for remote freelance and contract work with teams anywhere in the world."
  ],
  philosophy:
    "I don't just write code that works — I build systems that scale, secure, and survive production traffic.",
  brings: [
    {icon: "🏗️", title: "Clean Architecture", text: "Boundaries and layers that age well."},
    {icon: "📈", title: "Performance-Obsessed", text: "Milliseconds are a feature."},
    {icon: "🔐", title: "Security-Minded", text: "Keycloak, OAuth2, RBAC by default."},
    {icon: "☁️", title: "Cloud-Native", text: "Containerized, automated, resilient."},
    {icon: "🧪", title: "Quality-First", text: "TDD, high coverage, static analysis."},
    {icon: "🤝", title: "Team Multiplier", text: "Code reviews, mentoring, clear docs."}
  ]
};

export const expertise = [
  {
    id: "backend",
    title: "Backend & Java",
    blurb: "Scalable services with clean, testable architecture.",
    skills: [
      "Core Java (8+)",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Microservices",
      "REST APIs",
      "Multithreading",
      "Design Patterns"
    ],
    level: 90
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    blurb: "Containerized, automated, resilient deployments.",
    skills: [
      "AWS (EC2 / S3 / RDS)",
      "AWS SDK v2",
      "Docker",
      "Kubernetes",
      "Jenkins CI/CD",
      "Maven",
      "Git"
    ],
    level: 82
  },
  {
    id: "data",
    title: "Data & Messaging",
    blurb: "Fast reads, reliable events, tuned queries.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Query Optimization",
      "Apache Kafka",
      "Caching"
    ],
    level: 80
  },
  {
    id: "security",
    title: "Security & Quality",
    blurb: "Ship fast without breaking trust.",
    skills: [
      "Keycloak",
      "OAuth2 / OIDC",
      "JWT & RBAC",
      "Azure AD SSO",
      "JUnit / Mockito",
      "SonarQube",
      "Agile / Scrum"
    ],
    level: 85
  }
];

// Freelance-facing service offerings ("How I can help")
export const services = [
  {
    icon: "🔌",
    title: "Backend & API Development",
    text: "Robust Java / Spring Boot REST APIs and business logic, built to scale and easy to maintain."
  },
  {
    icon: "🧩",
    title: "Microservices Architecture",
    text: "Event-driven microservices with Kafka, clean boundaries and reliable inter-service communication."
  },
  {
    icon: "🔐",
    title: "Auth & Security Integration",
    text: "Keycloak, OAuth2, JWT and role-based access control — secure your application the right way."
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    text: "AWS deployments, Docker, Kubernetes and Jenkins CI/CD pipelines for zero-downtime releases."
  },
  {
    icon: "🗄️",
    title: "Database Design & Tuning",
    text: "Schema design and query optimization across MySQL, PostgreSQL and MongoDB."
  },
  {
    icon: "⚙️",
    title: "Legacy Modernization",
    text: "Refactor, migrate (e.g. AWS SDK v2) and performance-tune existing systems and services."
  }
];

export const experience = [
  {
    role: "Senior Software Developer L1",
    company: "Mantra Smart Identity",
    domain: "Digital Identity",
    url: "https://mantraidentity.com/",
    logo: BASE + "images/companies/mantra.png",
    date: "Nov 2025 — Present",
    summary:
      "Building secure enterprise applications for biometric & digital-identity platforms with clean architecture.",
    kpis: ["Biometric systems", "Keycloak / OAuth2", "MOSIP workflows"],
    points: [
      "Design and maintain secure enterprise applications in Java, Spring Boot & microservices with clean architecture.",
      "Implement identity & access management using Keycloak, OAuth2 and role-based authorization.",
      "Work on biometric systems (liveness detection, anti-spoofing) and integrate MOSIP identity workflows.",
      "Modernize cloud integrations — migrated Amazon S3 from AWS SDK v1 to v2; tuned performance with multithreading.",
      "Mentor junior developers and drive code reviews, architecture discussions and technical documentation."
    ]
  },
  {
    role: "Software Engineer",
    company: "Raapyd",
    domain: "Manufacturing · Healthcare · E-Commerce",
    url: "https://www.raapyd.com/",
    logo: BASE + "images/companies/raapyd.jpg",
    date: "Feb 2024 — Sept 2025",
    summary:
      "Designed and delivered five enterprise products on a microservices architecture, end to end.",
    kpis: ["25% faster APIs", "Zero-downtime deploys", "5 products"],
    points: [
      "Built Vendor Portal, CMMS, E-Catalog, Health Nexus & Commerce Portal on Spring Boot microservices.",
      "Secured applications with Keycloak authentication and role-based access control.",
      "Engineered AWS solutions (EC2/S3/RDS) with S3 file management — boosting storage capacity 40%.",
      "Optimized MySQL / PostgreSQL queries and caching, reducing API response times ~25%.",
      "Dockerized on Kubernetes and automated Jenkins CI/CD for zero-downtime releases; cut infra cost ~15%.",
      "Delivered in Agile Scrum with Git & Maven, including deployment and post-production support."
    ]
  },
  {
    role: "Java Software Engineer",
    company: "Aivid Techvision",
    domain: "Telecom",
    url: "https://aivid.ai/",
    logo: BASE + "images/companies/aivid.jpg",
    date: "Aug 2022 — Feb 2024",
    summary:
      "Built a B2B CPQ platform with complex pricing workflows for an enterprise telecom client.",
    kpis: ["94% test coverage", "30% faster queries"],
    points: [
      "Developed enterprise Java applications with Java, Spring Boot & Spring MVC.",
      "Built a B2B CPQ Portal (Spring Boot & MongoDB) with complex pricing workflows for enterprise telecom.",
      "Implemented business logic with Spring Data JPA & Hibernate; optimized MySQL queries (~30% faster).",
      "Secured role-based APIs with JWT & Spring Security; integrated Kafka events (sync minutes → seconds).",
      "Achieved 94%+ coverage with JUnit & Mockito; SonarQube reduced production defects ~18%."
    ]
  }
];

export const projects = [
  {
    id: "P-01",
    name: "MOSIP Biometric Identity Platform",
    org: "Mantra Smart Identity",
    url: "https://mantraidentity.com/",
    year: "2025",
    tags: ["Java", "Spring Boot", "Keycloak", "Biometrics"],
    desc:
      "Authentication and authorization modules for MOSIP-based national identity workflows, with liveness detection and anti-spoofing built into biometric verification pipelines. Secured with Keycloak & OAuth2 on a clean microservice architecture.",
    metric: "National-scale identity"
  },
  {
    id: "P-02",
    name: "Vendor Portal & CMMS",
    org: "Raapyd",
    url: "https://www.raapyd.com/",
    year: "2024",
    tags: ["Spring Boot", "AWS", "Kubernetes", "Keycloak"],
    desc:
      "A vendor-onboarding portal with secure role-based access, plus a CMMS with preventive-maintenance scheduling and work-order management. Spring Boot microservices on AWS EC2/S3/RDS, Dockerized on Kubernetes, secured with Keycloak.",
    metric: "+40% storage capacity"
  },
  {
    id: "P-03",
    name: "E-Catalog & Catalog Management",
    org: "Raapyd",
    url: "https://www.raapyd.com/",
    year: "2024",
    tags: ["MySQL", "PostgreSQL", "Caching", "Jenkins"],
    desc:
      "Hierarchical product catalogs with advanced search and filtering for enterprise clients. Tuned MySQL / PostgreSQL queries and caching cut API response times ~25%, with Jenkins CI/CD enabling zero-downtime deploys and ~15% lower infra cost.",
    metric: "-25% API latency"
  },
  {
    id: "P-04",
    name: "B2B CPQ Portal",
    org: "Aivid Techvision",
    url: "https://aivid.ai/",
    year: "2023",
    tags: ["Spring Boot", "MongoDB", "Kafka", "JWT"],
    desc:
      "A Configure-Price-Quote platform for an enterprise telecom client. Kafka-driven events cut data-sync delays from minutes to seconds; JWT auth across 5 microservices cut unauthorized access ~40%; 94%+ coverage and SonarQube reduced defects ~18%.",
    metric: "94% coverage"
  },
  {
    id: "P-05",
    name: "Health Nexus & Commerce Platform",
    org: "Raapyd",
    url: "https://www.raapyd.com/",
    year: "2025",
    tags: ["Spring Boot", "Keycloak", "AWS", "PostgreSQL"],
    desc:
      "Contributed to Health Nexus (healthcare management) and a B2B Commerce Portal — building secure Spring Boot microservices, Keycloak-based access control, AWS-backed file services and optimized PostgreSQL data layers.",
    metric: "Multi-product delivery"
  }
];

export const education = {
  school: "BVM Engineering College, Vallabh Vidhyanagar",
  degree: "B.Tech in Information Technology",
  date: "2018 — 2022",
  detail: "CPI 7.54 / 10 — strong foundation in software engineering & systems."
};

export const nav = [
  {label: "About", href: "#about", id: "01"},
  {label: "Expertise", href: "#expertise", id: "02"},
  {label: "Experience", href: "#experience", id: "03"},
  {label: "Work", href: "#work", id: "04"},
  {label: "Services", href: "#services", id: "05"},
  {label: "Contact", href: "#contact", id: "06"}
];
