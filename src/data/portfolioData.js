import CupidBanner from "../assets/images/cupid-banner.png";
import CupidLogin from "../assets/images/cupid-login.png";
import CupidHome from "../assets/images/cupid-home.png";
import CupidChat from "../assets/images/cupid-chat.png";
import CupidConnecting from "../assets/images/cupid-connecting.png";
import Cupidexplore from "../assets/images/cupid-explore.png";
import Cupidmatch from "../assets/images/cupid-match.png";
import Cupidmessage from "../assets/images/cupid-message.png";
import Cupidprofile from "../assets/images/cupid-profile.png";
import ZenFlowBanner from "../assets/images/zenflow-spa.png";
import ZenFlowBooking from "../assets/images/zenflow-at-cho-truc-tuyen.png";
import ZenFlowRevenue from "../assets/images/zenflow-bao-cao-doanh-thu.png";
import ZenFlowKPI from "../assets/images/zenflow-kpi-tinh-luong.png";
import ZenFlowServices from "../assets/images/zenflow-dich-vu.png";
import ZenFlowStaff from "../assets/images/zenflow-nhan-vien.png";
import ZenFlowAppointments from "../assets/images/zenflow-lich-hen.png";
import ZenFlowLogin from "../assets/images/zenflow-login.png";
import AiRagBanner from "../assets/images/ai-rag.png";
import LapTechBanner from "../assets/images/laptech.png";

export const cvVersions = [
  {
    id: "fullstack-nodejs",
    title: "Fullstack Developer (React / Node.js)",
    badge: "Mới · Target Vexere",
    badgeColor: "emerald",
    roleFocus: "ReactJS · NodeJS · REST API · Redis · Docker · Web Workers",
    description:
      "Tối ưu cho vị trí Fullstack tại Vexere. Nổi bật năng lực xây dựng REST API bằng Node.js/Express, caching với Redis, Docker, và xử lý dữ liệu lớn (Web Workers) trong domain đặt vé máy bay/khách sạn.",
    htmlUrl: "/assets/TranQuangKhai-Fullstack-NodeJS.html",
    pdfUrl: "/assets/TranQuangKhai-Fullstack-NodeJS.pdf",
    isPrimary: true,
  },
  {
    id: "fullstack-fe-focused",
    title: "Fullstack Developer (Frontend-focused)",
    badge: "Bản gốc",
    badgeColor: "blue",
    roleFocus: "Frontend-focused · TravelTech & AI Tooling",
    description:
      "Bản CV gốc cân bằng giữa thế mạnh Frontend React/Next.js/TypeScript và năng lực tích hợp hệ thống đa dịch vụ TravelTech Tripdata cùng AI Chatbot/Admin.",
    htmlUrl: "/assets/TranQuangKhai-Fullstack-FE-Focused.html",
    pdfUrl: "/assets/TranQuangKhai-Fullstack-FE-Focused.pdf",
    isPrimary: false,
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer (React, Next.js)",
    badge: "Chuyên sâu UI/UX",
    badgeColor: "amber",
    roleFocus: "React · Next.js · TypeScript · Design Systems · Performance",
    description:
      "Dành riêng cho các vị trí chuyên sâu Frontend: kiến trúc component, state management nâng cao (TanStack Query, Zustand), tối ưu render và trải nghiệm UI/UX.",
    htmlUrl: "/assets/TranQuangKhai-Front-end-Developer.html",
    pdfUrl: "/assets/TranQuangKhai-Front-end-Developer.pdf",
    isPrimary: false,
  },
];

export const personalInfo = {
  name: "Tran Quang Khai",
  preferredName: "Khai Tran",
  role: "Fullstack Developer (Frontend-focused)",
  tagline: "Building high-performance interfaces, serverless systems, and autonomous agent workflows.",
  summary:
    "Fullstack Developer with ~2 years of verified experience in React, Next.js, and TypeScript, backed by RESTful API and service integrations across C#/.NET and Node.js codebases. Experienced in AI systems — engineering LLM chatbots, multi-tenant prompt/workflow admin portals, and custom Model Context Protocol (MCP) & coding agent skill setups.",
  location: "Thu Duc City, Ho Chi Minh City, Vietnam",
  email: "dev.khaitran@gmail.com",
  phone: "+84 389 346 149",
  resumeUrl: "/assets/TranQuangKhai-Fullstack-NodeJS.html",
  profileImage: "/assets/profile.jpg",
  qrisImage: "/assets/qris.jpg",
  links: {
    github: "https://github.com/TranQuangKhai288",
    linkedin: "https://www.linkedin.com/in/khai-tran-quang",
    domain: "https://khai-tran-software-engineer.id.vn",
  },
  education: {
    degree: "B.Sc. in Software Engineering",
    institution: "University of Information Technology – VNU-HCM",
    period: "2021 – 2026",
    logo: "/assets/UIT.png",
  },
  keyMetrics: [
    { label: "Engineering Practice", value: "~2 Years", detail: "Frontend & Fullstack Systems" },
    { label: "API Query Optimization", value: "30%", detail: "Redundant call reduction via TanStack Query & abort signals" },
    { label: "Team Velocity Scaling", value: "3x", detail: "Scaled weekly ticket delivery from 2–3 to 5–9 using MCP agent workflows" },
    { label: "Production & Projects", value: "5+", detail: "B2B Travel, Cloudflare Serverless, WebRTC & AI RAG" },
  ],
};

export const featuredProjects = [
  {
    id: "zenflow-spa",
    title: "ZenFlow Spa",
    subtitle: "B2B SaaS Spa Management & Real-time Booking Platform",
    period: "05/2026 – Present",
    category: "SaaS & Cloudflare Edge",
    status: "Completed / Live Prototype",
    image: ZenFlowBanner,
    demoImages: [
      ZenFlowBanner,
      ZenFlowBooking,
      ZenFlowRevenue,
      ZenFlowKPI,
      ZenFlowServices,
      ZenFlowStaff,
      ZenFlowAppointments,
      ZenFlowLogin,
    ],
    demoUrl: "https://spa-sme-fe.pages.dev/",
    githubUrl: "https://github.com/TranQuangKhai288",
    overview:
      "A multi-tenant spa operations and booking system designed for high availability and zero cold starts, combining an edge-rendered client with serverless Cloudflare Workers backend and real-time appointment sync.",
    personalContribution:
      "Engineered the fullstack architecture: built the serverless Hono API on Cloudflare Workers, configured Supabase REST connections, implemented automated SMS triggers, and developed the glassmorphism operational dashboard in React 19 and Tailwind CSS v4.",
    challenges: [
      {
        problem: "Zero Cold Starts on Serverless Edge",
        solution:
          "Deployed the API layer on Cloudflare Workers using Hono framework and connected to Supabase via stateless HTTP/REST client rather than persistent TCP pooling, eliminating cold starts entirely.",
      },
      {
        problem: "Automated Appointment Reminders Without Dedicated Background Servers",
        solution:
          "Configured Cloudflare Workers Cron Triggers running every 15 minutes to compute schedule availability and dispatch automated customer SMS via SpeedSMS integration.",
      },
      {
        problem: "Tamper-Proof Real-Time Dashboard Events",
        solution:
          "Dispatched live salon booking updates via Pusher REST API, generating HMAC-SHA256 authentication signatures natively using the browser Web Crypto API.",
      },
    ],
    architecture: [
      { layer: "Frontend", tech: "Next.js 15, React 19, Tailwind CSS v4, shadcn/ui" },
      { layer: "Edge Backend", tech: "Cloudflare Workers, Hono Framework" },
      { layer: "Database", tech: "Supabase (PostgreSQL via REST client)" },
      { layer: "Real-time & Cron", tech: "Pusher REST API, Web Crypto API, Workers Cron Triggers" },
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Hono",
      "Cloudflare Workers",
      "Supabase",
      "Pusher",
      "Web Crypto API",
    ],
  },
  {
    id: "cupid-echo",
    title: "Cupid Echo",
    subtitle: "Real-Time Matching & WebRTC Voice/Video Mobile Application",
    period: "09/2024 – 11/2024",
    category: "Mobile & Real-Time",
    status: "Completed Application",
    image: CupidBanner,
    demoImages: [
      CupidBanner,
      CupidHome,
      CupidChat,
      Cupidmatch,
      Cupidexplore,
      Cupidprofile,
      CupidConnecting,
      Cupidmessage,
      CupidLogin,
    ],
    demoUrl: null,
    githubUrl: "https://github.com/TranQuangKhai288/CupidEcho",
    githubBeUrl: "https://github.com/TranQuangKhai288/CupidEcho_BE",
    overview:
      "A cross-platform mobile dating application featuring compatibility-score matching, anonymous blind chat rooms, and secure real-time WebRTC audio and video calling.",
    personalContribution:
      "Built the end-to-end mobile client in React Native (Expo) and NativeWind, implemented the matching queue algorithm, and constructed the real-time WebSocket signaling backend in Node.js and Express.",
    challenges: [
      {
        problem: "Matching Latency & Fairness Under Variable Queue Depths",
        solution:
          "Architected a scoring-based matching queue in Node.js evaluating mutual profile compatibility with an adaptive fallback threshold that gradually broadens criteria as wait time increases.",
      },
      {
        problem: "Low-Latency Voice & Video Handshake Across Mobile Networks",
        solution:
          "Employed Socket.IO for room coordination and mounted an Express PeerServer to manage WebRTC signaling, integrating Stream.io Video SDK for token-authenticated media streaming with automated reconnect logic.",
      },
      {
        problem: "Fluid Native Gestures & Screen Transitions",
        solution:
          "Leveraged React Native Reanimated alongside NativeWind for hardware-accelerated swipe gestures, blind-chat reveal transitions, and interactive matching animations.",
      },
    ],
    architecture: [
      { layer: "Mobile Client", tech: "React Native (Expo), TypeScript, NativeWind, Reanimated" },
      { layer: "Real-Time Backend", tech: "Node.js, Express, Socket.IO, PeerJS Server" },
      { layer: "Media Streaming", tech: "Stream.io Video SDK (WebRTC)" },
      { layer: "Persistence", tech: "MongoDB" },
    ],
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "WebRTC",
      "Stream.io SDK",
    ],
  },
  {
    id: "ai-enterprise-rag",
    title: "Enterprise AI Chatbot & RAG Engine",
    subtitle: "Knowledge Retrieval Pipeline & Autonomous In-Chat Booking",
    period: "06/2024 – Present",
    category: "AI Systems & APIs",
    status: "Production Enterprise Tooling",
    image: AiRagBanner,
    demoImages: [AiRagBanner],
    demoUrl: null,
    githubUrl: "https://github.com/TranQuangKhai288",
    overview:
      "A multi-service AI integration spanning internal knowledge retrieval and flight customer service, providing low-latency SSE answer streaming, vector embeddings in MongoDB, and dynamic in-chat booking workflows.",
    personalContribution:
      "Constructed streaming conversational UI components, engineered vector ingestion endpoints in FastAPI/Node.js, developed an AI Admin workflow configuration portal, and integrated in-chat flight search APIs against C#/.NET services.",
    challenges: [
      {
        problem: "Perceived Latency & Unstable Token Streams",
        solution:
          "Implemented resilient streaming UI consuming Server-Sent Events (SSE) with smooth markdown parsing, auto-scrolling message threads, and graceful exponential backoff retries for rate-limited endpoints.",
      },
      {
        problem: "Multi-Tenant Prompt Management & Workflow Execution",
        solution:
          "Built a dedicated AI Admin Dashboard in React and TypeScript allowing non-technical managers to edit system prompts, update knowledge documents, and configure task-oriented AI pipelines per tenant.",
      },
      {
        problem: "Transactional API Execution Inside Chat",
        solution:
          "Connected the chatbot to internal C#/.NET microservices, allowing the LLM to invoke dynamic flight availability queries and initiate booking DTO validations directly within the conversation window.",
      },
    ],
    architecture: [
      { layer: "Chat Client & Admin", tech: "React, TypeScript, Ant Design, Refine" },
      { layer: "Retrieval & Vectors", tech: "FastAPI, Node.js, MongoDB Vector Search, LlamaIndex" },
      { layer: "LLM Orchestration", tech: "Gemini Flash, GPT-4o, Server-Sent Events (SSE)" },
      { layer: "Enterprise Services", tech: "C# / .NET RESTful APIs, DTO Validation Schemas" },
    ],
    tags: [
      "React",
      "TypeScript",
      "C# / .NET",
      "FastAPI",
      "Node.js",
      "MongoDB Vector Search",
      "Gemini Flash",
      "GPT-4o",
      "MCP",
      "Antigravity",
    ],
  },
  {
    id: "tripdata-portal",
    title: "Tripdata Travel Booking Portal",
    subtitle: "High-Traffic Multi-Service Flight & Hotel Booking Platform",
    period: "06/2025 – Present",
    category: "Production B2B Platform",
    status: "Live Production Platform",
    image: null,
    demoImages: [],
    demoUrl: null,
    githubUrl: null,
    overview:
      "A B2B TravelTech platform serving regional travel agencies with multi-criteria flight and hotel search engines, complex multi-step passenger verification, and automated ticket PDF generation.",
    personalContribution:
      "Led key frontend modules in React and TypeScript, refactored legacy Bootstrap UI to Tailwind CSS, integrated C#/.NET service endpoints, and introduced TanStack Query caching to slash redundant queries by ~30%.",
    challenges: [
      {
        problem: "Network Bottlenecks During Rapid Search Re-Filtering",
        solution:
          "Integrated TanStack Query with Zustand global filters, applying query deduplication and automatic AbortController cancellations for outdated requests, saving ~30% redundant API hits.",
      },
      {
        problem: "Complex Passenger Schema Validations Slowing Down UI",
        solution:
          "Constructed a multi-step booking wizard with strict schema validations and offloaded computation-heavy tasks to Web Workers, preventing main-thread UI stutters during ticketing.",
      },
      {
        problem: "Pixel-Perfect Multi-Agency Flight Ticket PDFs",
        solution:
          "Architected responsive HTML/CSS flight ticket PDF generation templates that render reliably across diverse agency branding standards and print drivers.",
      },
    ],
    architecture: [
      { layer: "Frontend Engine", tech: "React JS, TypeScript, Vite, Tailwind CSS, Web Workers" },
      { layer: "State & Cache", tech: "TanStack Query, Zustand" },
      { layer: "Backend Integration", tech: "C# / .NET RESTful APIs, DTOs, Service Integration" },
      { layer: "Quality & Testing", tech: "Vitest, React Testing Library" },
    ],
    tags: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Vite",
      "C# / .NET",
      "Vitest",
      "Web Workers",
    ],
  },
];

export const archiveProjects = [
  {
    name: "UIT Social App",
    description:
      "A student social media platform for University of Information Technology, featuring real-time group chat rooms, post feeds, dynamic comments, and active user profiles.",
    category: "Web Apps",
    tags: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/TranQuangKhai288/uit-social-app",
  },
  {
    name: "Laptech – Laptop E-Commerce Portal",
    description:
      "A responsive e-commerce web platform specializing in laptops and tech gadgets, equipped with product filtering, cart management, and checkout simulation.",
    category: "Web Apps",
    tags: ["Next.js", "Tailwind CSS", "Ant Design", "JavaScript"],
    github: "https://github.com/TranQuangKhai288/laptech",
    image: LapTechBanner,
  },
];

export const aiLabHighlights = [
  {
    title: "Model Context Protocol (MCP) & Agent Skills",
    subtitle: "Autonomous Coding Workflows for Antigravity & Claude Code",
    description:
      "Authored a reusable internal skill library and custom MCP servers that enable autonomous coding agents to inspect Jira/Git tickets, comprehend project architectures, and write code strictly adhering to established design tokens and component standards.",
    badge: "Agentic Engineering",
    impact: "Established consistent automated pull-request scaffolding across the engineering team.",
    codeSnippet: `// Custom MCP Server & Skill Schema
{
  "name": "agent-ticket-executor",
  "protocol": "mcp-v1",
  "capabilities": ["codebase-search", "schema-validation", "git-branching"],
  "standards": ["Clean Architecture", "Tailwind v4 tokens", "Vitest unit coverage"]
}`,
  },
  {
    title: "Multi-Model Empirical Benchmarking",
    subtitle: "Evaluating Gemini Flash, GPT-4o, GPT-3.5 & Grok",
    description:
      "Benchmarked 4 leading LLMs across 50+ real-world flight search, booking extraction, and multi-tenant domain prompts to measure response accuracy, hallucinations, and token-to-first-byte latency ahead of customer rollout.",
    badge: "Empirical Evaluation",
    impact: "Selected Gemini Flash for high-speed edge reasoning and GPT-4o for complex multi-step booking logic.",
    codeSnippet: `// Benchmark Metrics Matrix
Gemini Flash : 210ms TTFT | 98.4% flight parsing accuracy
GPT-4o       : 420ms TTFT | 99.2% complex booking accuracy
Grok         : 480ms TTFT | 95.1% domain validation
GPT-3.5      : 390ms TTFT | 89.0% schema compliance`,
  },
  {
    title: "Team Velocity Acceleration",
    subtitle: "Scaling Feature Delivery from 2–3 to 5–9 Tickets/Week",
    description:
      "Proposed and led the adoption of agent-assisted engineering workflows across a 16-member team. Standardized prompt templates, component generation runbooks, and automated unit test authoring.",
    badge: "Process Innovation",
    impact: "More than doubled weekly production feature delivery while reducing defect rates in code reviews.",
    codeSnippet: `// Production Delivery Impact
Team Size            : 16 engineers
Baseline Delivery    : 2–3 tickets / week
Agent-Assisted Rate  : 5–9 tickets / week (~2.6x increase)
Regression Coverage  : 100% passenger validation edge cases`,
  },
];

export const experienceData = [
  {
    company: "Tripdata Vietnam",
    subheadline: "B2B TravelTech Platform",
    position: "Fullstack Developer (Frontend-focused)",
    period: "06/2025 – Present",
    type: "Full-time",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Leading frontend feature development and backend service integrations for a multi-service B2B booking platform serving travel agencies.",
    achievements: [
      "Engineered dynamic flight/hotel search engines with multi-criteria filtering and a resilient multi-step passenger validation wizard.",
      "Implemented and extended C#/.NET RESTful backend endpoints, writing clean DTOs, input validation schemas, and service integrations.",
      "Optimized query lifecycle via TanStack Query and Zustand, caching responses and aborting obsolete requests to reduce redundant calls by ~30%.",
      "Migrated legacy UI from Bootstrap to Tailwind CSS and offloaded computation-heavy tasks to Web Workers, significantly boosting page responsiveness.",
      "Engineered pixel-perfect responsive HTML/CSS flight ticket PDF templates for multi-agency ticketing exports.",
      "Co-developed an LLM flight inquiry chatbot with in-chat booking triggers, an AI Admin dashboard, and an internal MCP skill library for coding agents.",
    ],
    tags: ["React JS", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Vite", "C# / .NET", "Vitest", "Web Workers", "MCP"],
  },
  {
    company: "Freelance Project",
    subheadline: "Sports Booking & Social Mobile App",
    position: "Freelance Mobile Developer",
    period: "01/2025 – 04/2025",
    type: "Contract",
    location: "Remote",
    summary:
      "Built the mobile application frontend for real-time sports court reservations, community player matchmaking, and live activity streams.",
    achievements: [
      "Developed responsive mobile UI screens for venue reservations, community chat, and user athletic profiles using React Native CLI and TypeScript.",
      "Managed global application and reservation state via Zustand for smooth, lag-free screen navigation.",
      "Integrated RESTful endpoints and Server-Sent Events (SSE) to deliver instant court booking confirmations and real-time activity alerts.",
    ],
    tags: ["React Native CLI", "TypeScript", "Zustand", "RESTful API", "Server-Sent Events (SSE)"],
  },
  {
    company: "Tech JDI Vietnam",
    subheadline: "JDI Group (Singapore)",
    position: "Software Developer",
    period: "06/2024 – 12/2024",
    type: "Contract",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Developed AI knowledge-retrieval solutions and enterprise HR management applications across React, Node.js, and Python FastAPI stacks.",
    achievements: [
      "Built conversational chat UI consuming SSE for real-time token streaming answers, markdown rendering, and auto-scrolling message streams.",
      "Constructed Node.js and FastAPI services storing text chunks and vector embeddings in MongoDB for RAG retrieval endpoints.",
      "Implemented resilient loading, error, and retry states to gracefully handle slow LLM responses, rate limits, and transient network errors.",
      "Developed a role-based HR management dashboard using Refine & Ant Design, translating intricate permission matrices into an intuitive interface.",
      "Optimized large-dataset rendering via pagination, useMemo memoization, and lazy loading for hierarchical records.",
    ],
    tags: ["Refine", "TypeScript", "Ant Design", "Node.js", "FastAPI", "MongoDB", "RAG Pipeline", "SSE"],
  },
];

export const skillsMatrix = [
  {
    category: "FRONTEND",
    icon: "bx bx-code-block",
    description: "Core interfaces, modern rendering pipelines, and type-safe systems",
    skills: [
      { name: "React JS", level: "Production" },
      { name: "Next.js 15", level: "Production" },
      { name: "React Native", level: "Production" },
      { name: "TypeScript", level: "Production" },
      { name: "JavaScript ES6+", level: "Production" },
      { name: "Vite", level: "Production" },
      { name: "Refine", level: "Production" },
    ],
  },
  {
    category: "UI / STYLING",
    icon: "bx bx-palette",
    description: "High-craft design engineer aesthetics, atomic design & design tokens",
    skills: [
      { name: "Tailwind CSS v4", level: "Production" },
      { name: "shadcn/ui", level: "Production" },
      { name: "Ant Design", level: "Production" },
      { name: "Bootstrap", level: "Production" },
      { name: "CSS Modules", level: "Production" },
    ],
  },
  {
    category: "STATE / FORM & TESTING",
    icon: "bx bx-check-shield",
    description: "Predictable client caching, schema validation, and unit verification",
    skills: [
      { name: "TanStack Query", level: "Production" },
      { name: "Zustand", level: "Production" },
      { name: "Redux", level: "Applied" },
      { name: "Context API", level: "Production" },
      { name: "React Hook Form + Zod", level: "Production" },
      { name: "Vitest", level: "Production" },
      { name: "Testing Library", level: "Production" },
      { name: "Playwright", level: "Production" },
    ],
  },
  {
    category: "BACKEND (WORKING KNOWLEDGE)",
    icon: "bx bx-server",
    description: "Service integrations, edge runtimes, real-time channels & typed DTOs",
    skills: [
      { name: "C# / .NET", level: "Production" },
      { name: "Node.js / Express.js", level: "Production" },
      { name: "FastAPI", level: "Applied" },
      { name: "Hono (Cloudflare Workers)", level: "Production" },
      { name: "RESTful APIs & DTO Validation", level: "Production" },
      { name: "Server-Sent Events (SSE)", level: "Production" },
      { name: "Socket.IO / WebRTC", level: "Production" },
    ],
  },
  {
    category: "DATABASE & DEVOPS",
    icon: "bx bx-data",
    description: "Relational, document, and cache storage with container workflows",
    skills: [
      { name: "PostgreSQL", level: "Applied" },
      { name: "MongoDB", level: "Production" },
      { name: "Redis", level: "Applied" },
      { name: "Supabase", level: "Production" },
      { name: "Git / GitHub", level: "Production" },
      { name: "Docker", level: "Applied" },
    ],
  },
  {
    category: "AI INTEGRATION & WORKFLOW",
    icon: "bx bx-bot",
    description: "Enterprise RAG pipelines, agentic coding skills, and MCP orchestration",
    skills: [
      { name: "LLM Chatbot (RAG)", level: "Production" },
      { name: "Multi-tenant Prompt/AI Admin Tooling", level: "Production" },
      { name: "MCP (Model Context Protocol)", level: "Production" },
      { name: "Claude Code", level: "Production" },
      { name: "Antigravity", level: "Production" },
    ],
  },
];

export const navigationItems = [
  { id: "hero", label: "Overview" },
  { id: "work", label: "Selected Work" },
  { id: "ai-systems", label: "AI & Agents" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

