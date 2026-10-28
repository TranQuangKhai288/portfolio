import { useState } from "react";
import { archiveProjects } from "../data/portfolioData";
import { InView } from "./ui/in-view";
import {
  TripdataArchitectureDiagram,
  ZenFlowArchitectureDiagram,
  CupidArchitectureDiagram,
} from "./architecture/ProjectDiagrams";
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  Zap,
  Cpu,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Activity,
  ShieldCheck,
  Clock,
  Globe,
  Radio,
} from "lucide-react";
import { Github } from "./ui/Icons";

// Images for ZenFlow interactive tab switcher
import ZenFlowBanner from "../assets/images/zenflow-spa.png";
import ZenFlowBooking from "../assets/images/zenflow-at-cho-truc-tuyen.png";
import ZenFlowRevenue from "../assets/images/zenflow-bao-cao-doanh-thu.png";
import ZenFlowKPI from "../assets/images/zenflow-kpi-tinh-luong.png";

// Images for Cupid
import CupidBanner from "../assets/images/cupid-banner.png";
import CupidChat from "../assets/images/cupid-chat.png";
import CupidMatch from "../assets/images/cupid-match.png";

const Projects = () => {
  const [zenflowMode, setZenflowMode] = useState("ui"); // 'ui' | 'arch'
  const [zenflowTab, setZenflowTab] = useState("booking"); // 'booking' | 'revenue' | 'kpi'
  const [cupidMode, setCupidMode] = useState("ui"); // 'ui' | 'arch'
  const [cupidTab, setCupidTab] = useState("match"); // 'match' | 'chat'
  const [showArchive, setShowArchive] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const zenflowTabs = [
    {
      id: "booking",
      label: "Online Booking",
      image: ZenFlowBooking,
      desc: "Real-time slot scheduling with technician availability sync",
    },
    {
      id: "revenue",
      label: "Revenue Analytics",
      image: ZenFlowRevenue,
      desc: "Instant multi-branch revenue tracking & VAT reconciliation",
    },
    {
      id: "kpi",
      label: "Staff KPI & Payroll",
      image: ZenFlowKPI,
      desc: "Automated technician commission engine with real-time tiers",
    },
  ];

  const cupidTabs = [
    {
      id: "match",
      label: "Live Match Feed",
      image: CupidMatch,
      desc: "Spring physics card gestures with edge geolocation clustering",
    },
    {
      id: "chat",
      label: "Encrypted Chat",
      image: CupidChat,
      desc: "Zero-cold-start WebSockets with typing indicators & read receipts",
    },
  ];

  const sampleSlots = [
    { time: "09:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "02:00 PM", available: true },
    { time: "03:30 PM", available: true },
    { time: "05:00 PM", available: true },
  ];

  return (
    <section id="work" className="relative py-28 sm:py-36">
      {/* Container with Generous Width Bounding */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Section Monolithic Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Engineering Releases · 2024 — 2026
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white leading-tight">
                Flagship Systems &amp; Architecture
              </h2>
            </div>
            <p className="text-base text-neutral-500 dark:text-[#86868B] max-w-md leading-relaxed">
              Production-tested distributed platforms, edge serverless runtimes, and real-time state synchronization engines.
            </p>
          </div>

          <div className="space-y-36">
            
            {/* ═══════════════════════════════════════════════════════
                FLAGSHIP 01: ZENFLOW SPA PLATFORM
               ═══════════════════════════════════════════════════════ */}
            <article className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-400">05/2026 — Present</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-emerald-500 font-semibold">Live Production</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-blue-500">Cloudflare Edge &amp; Next.js 15</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                    ZenFlow Spa Management Engine
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600 dark:text-[#86868B] leading-relaxed max-w-2xl">
                    High-throughput spa scheduling ecosystem solving multi-branch booking conflicts via Redis atomic mutex locks, HMAC webhook security, and instant WebSocket state mesh.
                  </p>
                </div>

                <div className="lg:col-span-5 flex lg:justify-end gap-3 flex-wrap">
                  <a
                    href="https://zenflow-spa.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-all shadow-md inline-flex items-center gap-1.5"
                  >
                    <span>Live Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/TranQuangKhai288/ZenFlow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-[#0A0A0E] hairline-border text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-medium transition-all inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Mac Window Showcase Chassis with Dual Mode Switcher */}
              <div className="mac-window">
                {/* Safari Header Rail */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#12131A] hairline-b">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Dual Mode Switcher: UI Preview vs Architecture Blueprint */}
                  <div className="flex items-center gap-1 p-1 rounded-full bg-black/60 hairline-border">
                    <button
                      type="button"
                      onClick={() => setZenflowMode("ui")}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        zenflowMode === "ui"
                          ? "bg-white text-black font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <span>UI Preview</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setZenflowMode("arch")}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        zenflowMode === "arch"
                          ? "bg-blue-600 text-white font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <Cpu className="w-3 h-3" />
                      <span>Architecture Blueprint</span>
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-emerald-400 hidden sm:flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>P99: 42ms</span>
                  </div>
                </div>

                {/* Chassis Body: UI View */}
                {zenflowMode === "ui" && (
                  <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0E1017] to-[#07080B] space-y-8">
                    {/* View Switcher Sub-tabs */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-2 p-1 rounded-full bg-white/5 hairline-border">
                        {zenflowTabs.map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setZenflowTab(tab.id)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                              zenflowTab === tab.id
                                ? "bg-white/15 text-white shadow-xs"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      <span className="text-xs font-mono text-neutral-400">
                        {zenflowTabs.find((t) => t.id === zenflowTab)?.desc}
                      </span>
                    </div>

                    {/* Screenshot Preview with Smooth Falloff */}
                    <div className="relative rounded-2xl overflow-hidden hairline-border bg-black/60 shadow-2xl">
                      <img
                        src={zenflowTabs.find((t) => t.id === zenflowTab)?.image || ZenFlowBooking}
                        alt="ZenFlow Platform Screen"
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                    </div>

                    {/* Interactive Atomic Lock Simulation */}
                    <div className="p-6 rounded-2xl bg-black/40 hairline-border space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="text-xs font-medium text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          <span>Interactive Slot Booking Test (Click to test Redis mutex lock)</span>
                        </div>
                        <span className="text-xs font-mono text-emerald-400">
                          {selectedSlot
                            ? `Atomic Lock Acquired: ${selectedSlot} (TTL: 300s)`
                            : "State: Ready"}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
                        {sampleSlots.map((slot, idx) => (
                          <button
                            key={idx}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setSelectedSlot(selectedSlot === slot.time ? null : slot.time)}
                            className={`py-2.5 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                              !slot.available
                                ? "bg-white/5 border border-white/5 text-neutral-600 cursor-not-allowed"
                                : selectedSlot === slot.time
                                ? "bg-blue-600 text-white font-semibold border border-blue-400 shadow-md scale-102"
                                : "bg-white/5 hairline-border text-neutral-300 hover:border-blue-400/50 hover:text-white"
                            }`}
                          >
                            {slot.time} {!slot.available && "(Held)"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Chassis Body: Architecture Blueprint View */}
                {zenflowMode === "arch" && (
                  <div className="p-6 sm:p-10 bg-[#090A0F] space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 hairline-b pb-4 text-xs font-mono text-neutral-400">
                      <span className="text-blue-400 font-semibold">
                        // DISTRIBUTED CONCURRENCY TOPOLOGY & MUTEX PIPELINE
                      </span>
                      <span>CLOUDFLARE WORKERS · HONO · REDIS MUTEX</span>
                    </div>

                    {/* Rich Interactive Diagram with Animated Beams */}
                    <ZenFlowArchitectureDiagram />

                    {/* Protocol Handler Snippet */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-black/80 hairline-border font-mono text-xs text-neutral-300 space-y-2 overflow-x-auto">
                      <div className="text-neutral-500">// Edge Atomic Concurrency Lock Handler</div>
                      <div>
                        <span className="text-purple-400">export async function</span>{" "}
                        <span className="text-blue-400">acquireReservationSlot</span>(c: Context) &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">const</span> &#123; slotId, technicianId, customerId &#125; = <span className="text-purple-400">await</span> c.req.json();
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">const</span> lockKey = <span className="text-amber-300">`lock:slot:$&#123;slotId&#125;:$&#123;technicianId&#125;`</span>;
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500">// Distributed Mutex: SET key val NX EX 300</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">const</span> acquired = <span className="text-purple-400">await</span> redis.set(lockKey, customerId, <span className="text-emerald-300">"NX"</span>, <span className="text-emerald-300">"EX"</span>, 300);
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">if</span> (!acquired) <span className="text-purple-400">return</span> c.json(&#123; error: <span className="text-red-400">"SLOT_LOCKED_CONCURRENTLY"</span> &#125;, 409);
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">await</span> broadcastWebSocket(&#123; event: <span className="text-emerald-300">"SLOT_HELD"</span>, slotId &#125;);
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">return</span> c.json(&#123; success: <span className="text-emerald-400">true</span>, ttl: 300 &#125;);
                      </div>
                      <div>&#125;</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Apple Tech Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 hairline-t">
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Architecture</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Event-Driven Edge REST + WS
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Frontend Engine</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Next.js 15 · React 19 · Tailwind 4
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Edge Serverless</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Cloudflare Workers · Hono · HMAC
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Cache &amp; Lock</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Redis Mutex · Supabase PostgreSQL
                  </div>
                </div>
              </div>
            </article>

            {/* ═══════════════════════════════════════════════════════
                FLAGSHIP 02: CUPID DATING PLATFORM
               ═══════════════════════════════════════════════════════ */}
            <article className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-400">01/2026 — 05/2026</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-emerald-500 font-semibold">Completed Production</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-purple-500">Cloudflare Workers &amp; WebSockets</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                    Cupid Real-Time Dating Platform
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600 dark:text-[#86868B] leading-relaxed max-w-2xl">
                    High-engagement social discovery app engineered on Cloudflare edge serverless. Sub-50ms geolocation matching, encrypted live messaging, and fluid swipe deck physics.
                  </p>
                </div>

                <div className="lg:col-span-5 flex lg:justify-end gap-3 flex-wrap">
                  <a
                    href="https://cupid-dating.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-all shadow-md inline-flex items-center gap-1.5"
                  >
                    <span>Live Edge App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/TranQuangKhai288/Cupid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-[#0A0A0E] hairline-border text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-medium transition-all inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Chassis with Dual Mode Switcher */}
              <div className="mac-window">
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#12131A] hairline-b">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>

                  <div className="flex items-center gap-1 p-1 rounded-full bg-black/60 hairline-border">
                    <button
                      type="button"
                      onClick={() => setCupidMode("ui")}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        cupidMode === "ui"
                          ? "bg-white text-black font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      UI Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => setCupidMode("arch")}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        cupidMode === "arch"
                          ? "bg-purple-600 text-white font-semibold shadow-xs"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <Cpu className="w-3 h-3" />
                      <span>Edge Architecture</span>
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-purple-400 hidden sm:flex items-center gap-1.5">
                    <span>Edge Hop: 28ms</span>
                  </div>
                </div>

                {cupidMode === "ui" ? (
                  <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0F101A] to-[#07080D] space-y-8">
                    <div className="flex gap-2 p-1 rounded-full bg-white/5 hairline-border w-fit">
                      {cupidTabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setCupidTab(tab.id)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            cupidTab === tab.id
                              ? "bg-white/15 text-white shadow-xs"
                              : "text-neutral-400 hover:text-white"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="relative rounded-2xl overflow-hidden hairline-border bg-black/60 shadow-2xl">
                      <img
                        src={cupidTabs.find((t) => t.id === cupidTab)?.image || CupidMatch}
                        alt="Cupid Platform Screen"
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-10 bg-[#090A0F] space-y-8">
                    <div className="flex items-center justify-between hairline-b pb-4 text-xs font-mono text-neutral-400">
                      <span className="text-purple-400 font-semibold">
                        // SERVERLESS EDGE TOPOLOGY & WEBSOCKET DISPATCH
                      </span>
                      <span>CLOUDFLARE WORKERS · DURABLE OBJECTS · POSTGRESQL</span>
                    </div>
                    <CupidArchitectureDiagram />
                  </div>
                )}
              </div>

              {/* Tech Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 hairline-t">
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Edge Compute</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Cloudflare Pages &amp; Workers
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Real-Time Transport</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Durable Objects + WebSockets
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Motion Physics</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Motion 14 Swipe Deck
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Persistence</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    PostgreSQL · Drizzle ORM
                  </div>
                </div>
              </div>
            </article>

            {/* ═══════════════════════════════════════════════════════
                FLAGSHIP 03: TRIPDATA VIETNAM
               ═══════════════════════════════════════════════════════ */}
            <article className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-400">Production Experience</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-amber-500 font-semibold">Enterprise Traveltech</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-blue-500">React · Next.js · C# / .NET API</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                    Tripdata Vietnam B2B Platform
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600 dark:text-[#86868B] leading-relaxed max-w-2xl">
                    Dynamic flight and hotel reservation platform. Engineered complex multi-step passenger validation flows, cut redundant API calls by ~30% with TanStack Query abort signals, and maintained 60fps main-thread responsiveness.
                  </p>
                </div>

                <div className="lg:col-span-5 flex lg:justify-end gap-3 flex-wrap">
                  <span className="px-4 py-2 rounded-full bg-white/5 hairline-border text-xs font-mono text-neutral-400">
                    Proprietary Enterprise System
                  </span>
                </div>
              </div>

              {/* Tripdata Diagram Chassis */}
              <div className="mac-window p-6 sm:p-10 bg-[#090A0F] space-y-6">
                <div className="flex items-center justify-between hairline-b pb-4 text-xs font-mono text-neutral-400">
                  <span className="text-amber-400 font-semibold">
                    // HIGH-FREQUENCY QUERY CACHING & C#/.NET REST INTEGRATION
                  </span>
                  <span>TANSTACK QUERY · ABORT SIGNALS · REDUNDANCY REDUCTION</span>
                </div>
                <TripdataArchitectureDiagram />
              </div>

              {/* Tech Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 hairline-t">
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">API Call Optimization</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    -30% Redundant Calls
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">Backend Services</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    C# / .NET Core Microservices
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">State Management</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    Zustand + TanStack Query
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">UI Responsiveness</div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white pt-1">
                    60fps Main-Thread Strict
                  </div>
                </div>
              </div>
            </article>

          </div>

          {/* Archive / Additional Projects Section */}
          <div className="mt-28 pt-12 hairline-t text-center">
            <button
              type="button"
              onClick={() => setShowArchive(!showArchive)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#0A0A0E] hairline-border text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer shadow-xs"
            >
              <span>{showArchive ? "Hide Archive Systems" : "View Selected Archive Systems (AI RAG & LapTech)"}</span>
              {showArchive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showArchive && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
                {archiveProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span>{p.category}</span>
                      <span>{p.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-[#86868B] leading-relaxed">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-white/5 hairline-border text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default Projects;
