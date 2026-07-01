import CupidBanner from "../assets/images/cupid-banner.png";
import LapTechBanner from "../assets/images/laptech.png";
import CupidLogin from "../assets/images/cupid-login.png";
import CupidHome from "../assets/images/cupid-home.png";
import CupidChat from "../assets/images/cupid-chat.png";
import CupidConnecting from "../assets/images/cupid-connecting.png";
import Cupidexplore from "../assets/images/cupid-explore.png";
import Cupidmatch from "../assets/images/cupid-match.png";
import Cupidmessage from "../assets/images/cupid-message.png";
import Cupidprofile from "../assets/images/cupid-profile.png";
import ZenFlowBanner from "../assets/images/zenflow-spa.png";
import AiRagBanner from "../assets/images/ai-rag.png";

const projectsData = [
  {
    name: "ZenFlow Spa – SaaS Spa Management Platform",
    description:
      "A B2B SaaS-ready spa management and booking system featuring high-fidelity glassmorphism design, multi-tenant landing pages, real-time admin dashboards, and Pusher-based client notifications.",
    icon: "bx bx-spa",
    demo: "https://spa-sme-fe.pages.dev/",
    github: "https://github.com/TranQuangKhai288",
    image: ZenFlowBanner,
    demoImages: [ZenFlowBanner],
    category: "Web Apps",
    tags: [
      "Next.js",
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
    name: "Cupid Echo – Random Dating Mobile App",
    description:
      "A mobile dating application featuring compatibility score matchmaking, anonymous blind chat rooms, and secure real-time WebRTC voice and video calls.",
    icon: "bx bx-heart",
    demo: "",
    github: "https://github.com/TranQuangKhai288/CupidEcho",
    githubBe: "https://github.com/TranQuangKhai288/CupidEcho_BE",
    image: CupidBanner,
    demoImages: [
      CupidBanner,
      CupidLogin,
      CupidHome,
      CupidChat,
      CupidConnecting,
      Cupidexplore,
      Cupidmatch,
      Cupidmessage,
      Cupidprofile,
    ],
    category: "Mobile Apps",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "PeerJS (WebRTC)",
      "Stream.io SDK",
    ],
  },
  {
    name: "AI Knowledge Retrieval Engine (RAG)",
    description:
      "A high-performance Retrieval-Augmented Generation (RAG) backend pipeline that ingests raw documents, generates vector embeddings, and exposes secure REST endpoints for streaming context-aware answers.",
    icon: "bx bx-brain",
    demo: "",
    github: "https://github.com/TranQuangKhai288",
    image: AiRagBanner,
    demoImages: [AiRagBanner],
    category: "AI Integrations",
    tags: [
      "Node.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "Vector Search",
      "Gemini API",
      "LlamaIndex",
      "RAG Pipeline",
    ],
  },
  {
    name: "UIT Social App",
    description:
      "A student social media platform for University of Information Technology, featuring real-time group chat rooms, post feeds, dynamic comments, and active user profiles.",
    icon: "bx bx-group",
    demo: "",
    github: "https://github.com/TranQuangKhai288/uit-social-app",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczOqJ7CgK6h1IZz4i3Tir9xh7zsz1dFkT5zzV-1SkqHayZJVpSUtkrx4Pth5cajnpgXgkCeJSZqXZ4xhPEpRDv3z-b01z7oRwUAY6AOleB6ntICLQF5zteoCfnwrn6V_a3ZJPorgGjxsvsy7IpDVHrY=w903-h312-s-no-gm?authuser=0",
    demoImages: [
      "https://lh3.googleusercontent.com/pw/AP1GczOqJ7CgK6h1IZz4i3Tir9xh7zsz1dFkT5zzV-1SkqHayZJVpSUtkrx4Pth5cajnpgXgkCeJSZqXZ4xhPEpRDv3z-b01z7oRwUAY6AOleB6ntICLQF5zteoCfnwrn6V_a3ZJPorgGjxsvsy7IpDVHrY=w903-h312-s-no-gm?authuser=0",
    ],
    category: "Web Apps",
    tags: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Real-time"],
  },
  {
    name: "Laptech – Laptop E-commerce Portal",
    description:
      "A responsive e-commerce web platform specializing in laptops and tech gadgets, equipped with product filtering, cart management, and checkout simulation.",
    icon: "bx bx-cart",
    demo: "",
    github: "https://github.com/TranQuangKhai288/laptech",
    image: LapTechBanner,
    demoImages: [LapTechBanner],
    category: "Web Apps",
    tags: ["Next.js", "Tailwind CSS", "Ant Design", "JavaScript"],
  },
];

export default projectsData;
