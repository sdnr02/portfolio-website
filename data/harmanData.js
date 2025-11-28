/**
 * HARMAN OPERATIONS MODULE // DATA STREAM
 * ---------------------------------------
 * TARGET UI: 4-Column Bento Grid (Masonry Layout)
 * AESTHETIC: Cyberpunk / Terminal / Green Phosphor
 * * GRID LOGIC:
 * - "Magnum Opus" (Cost Est) -> 2x2 (Anchor)
 * - "Memory System" -> 2x1 (Header)
 * - "Code Mig" & "Test Gen" -> 1x1 (Density)
 * - "FinOps" & "SOC" -> 2x1 (Footer Base)
 */

export const harmanProjects = [
  {
    id: "project-01-magnum",
    title: "AI-Driven Cost Estimation",
    subtitle: "Autonomous Data Extraction and Predictive Modelling Pipeline",
    description: "Generative AI pipeline deployed on Google Cloud Platform to automate cost estimation for manufacturing operations. Processes technical drawings with high-fidelity feature extraction.",
    tech: ["Gemini 2.5 Pro", "Google Cloud Platform", "Image Processing", "Ensemble Learning", "Docker", "Kubernetes"],
    stats: "78% Accuracy / 300+ Drawings",
    status: "PRODUCTION ALPHA",
    icon: "Cpu", 
    layout: {
      colSpan: 2,
      rowSpan: 2, 
    },
    highlight: true,
    // ADDED: Fake terminal output to fill the empty 2x2 space
    visualContent: [
      "> INITIALIZING GEMINI 2.5 PRO PROJECTION...",
      "> CONNECTING TO GCP SECURE GATEWAY...",
      "> FETCHING BLUEPRINT: AERO_TURBINE_V4.DWG",
      "> RUNNING OCR & FEATURE EXTRACTION...",
      "> IDENTIFIED: [DIMENSION_X, MATERIAL_STEEL]",
      "> CALCULATING MFG COMPLEXITY SCORE...",
      "> GENERATING COST MATRIX...",
      "> CONFIDENCE: 78.4% [OPTIMAL]",
      "> AWAITING NEXT BATCH..."
    ]
  },
  {
    id: "project-02-memory",
    title: "Advanced Memory System",
    subtitle: "Agentic AI Platform Architecture",
    description: "State-of-the-art hierarchical memory system using Vector Embeddings and Graph Databases to bind diverse LLM backends (GPT-4o, Claude, Llama 3.2).",
    tech: ["QdrantDB", "Neo4j", "Agentic AI", "Large Language Models"],
    stats: null,
    status: "PATENT PENDING",
    icon: "Database",
    layout: {
      colSpan: 2,
      rowSpan: 1, 
    },
    highlight: false
  },
  {
    id: "project-03-migration",
    title: "Legacy Code Migration",
    subtitle: "PL/1 to Java Agentic Solution",
    description: "Automated refactoring agent achieving high syntactic accuracy across massive legacy codebases.",
    tech: ["Agentic AI", "OpenAI API", "GPT-4o", "Compiler Design", "Abstract Syntax Tree"],
    stats: "85% Accuracy / 50k+ Lines",
    status: "DEPLOYED",
    icon: "FileCode",
    layout: {
      colSpan: 1,
      rowSpan: 1, 
    },
    highlight: false
  },
  {
    id: "project-04-testgen",
    title: "Automated Test Generation",
    subtitle: "Telecom Specification Document Processing",
    description: "Computer Vision-based LLM Agent that reads 3GPP docs to generate test cases automatically.",
    tech: ["YOLO", "Object Character Recognition", "Image Processing", "Large Language Models", "MongoDB"],
    stats: "-65% Manual Effort",
    status: "DEPLOYED",
    icon: "Activity",
    layout: {
      colSpan: 1,
      rowSpan: 1, 
    },
    highlight: false
  },
  {
    id: "project-05-finops",
    title: "FinOps Copilot",
    subtitle: "Text-to-AthenaQL Generator",
    description: "Fine-tuned Small Language Model (SLM) for querying CloudHealth cost reports using natural language.",
    tech: ["PEFT", "QLORA", "Predictive Modelling", "Time Series Forecasting"],
    stats: null,
    status: "ARCHIVED",
    icon: "DollarSign",
    layout: {
      colSpan: 2,
      rowSpan: 1, 
    },
    highlight: false
  },
  {
    id: "project-06-soc",
    title: "SOC-Ops Assistant",
    subtitle: "Cybersecurity Threat Detection and Automated Ticket Management",
    description: "RAG-based security assistant utilizing Text-to-SQL and an anomaly detection model for detecting threats from network data.",
    tech: ["Retrieval Augmented Generation", "Anomaly Detection", "ETL Pipelines", "Microsoft Azure", "HuggingFace"],
    stats: null,
    status: "ARCHIVED",
    icon: "Shield",
    layout: {
      colSpan: 2,
      rowSpan: 1, 
    },
    highlight: false
  }
];