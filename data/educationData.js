/**
 * ACADEMIC ROOT DIRECTORY // KNOWLEDGE BASE
 * -----------------------------------------
 * TARGET UI: Split View
 * - LEFT: Linux 'tree' structure for Degree & Courses
 * - RIGHT: Package Manager list (npm/pip style) for Projects
 */

export const educationData = {
  university: {
    name: "PES UNIVERSITY",
    degree: "B.Tech. Computer Science Engineering",
    timeline: "2020 - 2024",
    location: "Bengaluru, India"
  },
  
  // The "Core Dependencies"
  coursework: [
    "Web Development & Cloud Computing",
    "Operating Systems & Computer Networks",
    "DBMS + Database Tuning",
    "Linear Algebra (Comp. Vision Focus)",
    "Machine Intelligence & RL",
    "Big Data Analytics",
    "Object Oriented Analysis & Design"
  ],

  // The "Installed Packages" (Academic Projects)
  academicProjects: [
    {
      id: "pkg-social",
      name: "social-media-clone",
      category: "DBMS / SQL",
      description: "Full stack social platform with optimized SQL schema.",
      version: "v1.0.2",
      status: "INSTALLED"
    },
    {
      id: "pkg-music",
      name: "music-genre-classifier",
      category: "Machine Intelligence",
      description: "Audio processing model for genre tagging.",
      version: "v0.8.5",
      status: "INSTALLED"
    },
    {
      id: "pkg-football",
      name: "football-score-rec",
      category: "Data Analytics",
      description: "Recommendation engine for match highlights.",
      version: "v1.1.0",
      status: "INSTALLED"
    },
    {
      id: "pkg-weather",
      name: "weather-data-pipeline",
      category: "Big Data / Hadoop",
      description: "Distributed processing of global weather patterns.",
      version: "v0.9.0",
      status: "INSTALLED"
    },
    {
      id: "pkg-library",
      name: "lms-java-system",
      category: "OOAD / Java",
      description: "Library management system demonstrating SOLID principles.",
      version: "v2.0.0",
      status: "INSTALLED"
    }
  ],

  // Active Development / WIP Projects
  current_work: [
    {
      id: "dev-pitchpulse",
      name: "PitchPulse",
      type: "SAAS PLATFORM",
      description: "Cricket tournament management featuring real-time scoring and automated scheduling.",
      stack: ["Python FastAPI", "PostgreSQL", "WebSockets"],
      status: "BUILDING",
      modules: ["Real-time Scoring", "Banking Integration", "Team Reg"]
    },
    {
      id: "dev-recforge",
      name: "RecForge",
      type: "CORE ENGINE",
      description: "Production-grade recommendation engine built from scratch to master core DSA patterns.",
      stack: ["Collaborative Filtering", "A/B Testing Framework", "DSA"],
      status: "BUILDING",
      modules: ["Content-based Algo", "Performance Benchmarking"]
    }
  ],

  // NEW: Skills / System Configuration
  skills: {
    languages: {
      label: "AVAILABLE RUNTIMES",
      items: ["Python (Proficient)", "SQL (Proficient)", "JavaScript (Intermediate)", "Go (Beginner)"]
    },
    ai_ml: {
      label: "NEURAL ENGINES",
      items: ["TensorFlow", "PyTorch", "SciKit Learn", "Large Language Models"]
    },
    backend: {
      label: "SERVER PROTOCOLS",
      items: ["FastAPI", "Docker", "RESTful API Design", "Microservice Architecture"]
    },
    databases: {
      label: "STORAGE DRIVERS",
      items: ["QdrantDB (Vector)", "PostgreSQL", "Neo4j (Graph)", "MongoDB"]
    }
  }
};