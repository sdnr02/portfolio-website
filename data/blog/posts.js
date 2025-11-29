/**
 * BLOG ARCHIVE // SYSTEM WRITINGS LOG
 * ------------------------------------
 * TARGET UI: Archive Log Viewer / Timeline
 * AESTHETIC: System Logs, Expandable Entries
 */

export const blogPosts = [
  {
    id: "log-001",
    timestamp: "2025.01.15",
    title: "Building Production-Grade AI Systems",
    category: "AI ENGINEERING",
    excerpt: "Lessons learned from deploying LLM-powered applications at scale. From prototype to production, here's what actually matters.",
    content: `
> INITIATING LOG ENTRY...

Deploying AI systems in production is fundamentally different from building demos. 
Here are the critical considerations that separate hobby projects from production systems:

1. Latency Management
- Users expect <2s response times
- Streaming responses are essential for LLMs
- Caching strategies can reduce costs by 60%

2. Error Handling
- LLMs fail in unpredictable ways
- Fallback strategies are non-negotiable
- User feedback loops improve accuracy over time

3. Cost Optimization
- Token usage monitoring is critical
- Batch processing where possible
- Consider fine-tuned smaller models vs GPT-4

The gap between "it works on my laptop" and "it scales to 10,000 users" is where 
most AI projects die. Bridge that gap systematically.
    `,
    tags: ["AI", "Production", "LLMs", "Systems Design"],
    readTime: "8 min read"
  },
  {
    id: "log-002",
    timestamp: "2025.01.10",
    title: "The Memory Layer: Context is Everything",
    category: "ARCHITECTURE",
    excerpt: "Why conversational AI needs sophisticated memory systems. Building context-aware agents that remember what matters.",
    content: `
> INITIATING LOG ENTRY...

Memory is the missing piece in most AI applications. Without it, every interaction 
starts from zero. Here's how to build systems that remember:

Short-term Memory:
- Session-based context windows
- Recent conversation history
- Task-specific working memory

Long-term Memory:
- Vector databases for semantic search
- Graph databases for relationship tracking
- Hybrid approaches for complex domains

The real challenge isn't storing data—it's knowing what to remember and when to forget.
Context relevance scoring and intelligent pruning are where the magic happens.
    `,
    tags: ["Memory Systems", "Vector DBs", "Context", "AI Agents"],
    readTime: "6 min read"
  },
  {
    id: "log-003",
    timestamp: "2024.12.20",
    title: "Neural Networks Demystified",
    category: "FUNDAMENTALS",
    excerpt: "Stripping away the hype to understand how neural networks actually work. Math, intuition, and practical implementation.",
    content: `
> INITIATING LOG ENTRY...

Neural networks aren't magic—they're matrix multiplication with style.

At their core:
1. Forward pass: Data flows through weighted connections
2. Loss calculation: How wrong were we?
3. Backpropagation: Update weights to reduce error
4. Repeat until convergence

The breakthrough isn't the algorithm (it's been around since the 60s).
It's three things:
- GPU acceleration makes training feasible
- Massive datasets provide signal
- Clever architectures (transformers, attention) unlock capability

Understanding the fundamentals helps you debug when things go wrong—and they will.
    `,
    tags: ["Neural Networks", "Deep Learning", "Fundamentals", "Education"],
    readTime: "10 min read"
  },
  {
    id: "log-004",
    timestamp: "2024.12.05",
    title: "Microservices vs Monoliths: The Real Trade-offs",
    category: "SOFTWARE ARCHITECTURE",
    excerpt: "When to split, when to keep it simple. Practical insights from building both at scale.",
    content: `
> INITIATING LOG ENTRY...

The microservices vs monolith debate is mostly noise. Here's what actually matters:

Start with a monolith if:
- Team size < 10 people
- Domain boundaries are unclear
- Speed to market is critical

Split into microservices when:
- Different components have different scaling needs
- Teams are large enough to own services independently
- Deployment independence provides clear value

The real cost of microservices isn't technology—it's operational complexity.
Distributed debugging, network failures, and data consistency are hard problems.

Don't cargo cult architecture. Build for your constraints, not someone else's scale.
    `,
    tags: ["Architecture", "Microservices", "System Design", "Trade-offs"],
    readTime: "7 min read"
  }
];