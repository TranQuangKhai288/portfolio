const experienceData = [
  {
    position: "Front-end Developer",
    company: "Tripdata Vietnam · B2B TravelTech Platform",
    period: "Jun 2025 – Present",
    description:
      "Multi-service booking platform (Flights, Hotels) for travel agencies.",
    tags: ["React JS", "TypeScript", "Vite", "Zustand", "ASP.NET", "C#"],
    highlights: [
      "Feature Development: Developed flight/hotel search engines with dynamic multi-criteria filters, and built a multi-step booking wizard with complex passenger validations.",
      "Performance Optimization: Integrated React Query and Zustand to cache API responses, handle parallel queries, and automatically abort obsolete requests, reducing redundant calls by ~30%.",
      "Refactoring & Migration: Refactored legacy UI components and migrated fully from Bootstrap to Tailwind CSS, improving load speed and codebase maintainability.",
      "Document Generation: Designed pixel-perfect responsive HTML/CSS templates for flight ticket PDFs, ensuring seamless layout consistency across multiple ticketing agencies.",
    ],
    icon: "bx bx-code-alt",
  },
  {
    position: "Software Developer (Intern & Contractor)",
    company: "Tech JDI Vietnam · JDI Group (Singapore)",
    period: "Jun 2024 – Dec 2024",
    description:
      "Full-stack development on AI chatbot and HR management platform.",
    tags: ["Refine", "TypeScript", "Ant Design", "Node.js", "FastAPI", "MongoDB"],
    highlights: [
      "Architecture & Design: Designed the codebase using Clean Architecture principles, enabling a 6-member team to develop features concurrently with minimal merge conflicts.",
      "Data & Embedding Pipeline: Engineered pipelines to receive text chunks and vector embeddings from the AI engine, implementing robust storage and indexing strategies in MongoDB.",
      "Real-time AI Integration: Built RESTful APIs (FastAPI/Node.js) that served processed vector data back to the AI services, supporting seamless RAG workflows and low-latency streaming answers.",
      "Complex UI Design: Developed role-based admin dashboard with Refine and Ant Design, translating complex permission matrices into an intuitive, responsive management interface.",
    ],
    icon: "bx bx-laptop",
  },
];

export default experienceData;
