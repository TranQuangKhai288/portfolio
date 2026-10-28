import { useRef } from "react";
import { AnimatedBeam } from "../ui/animated-beam";
import { 
  Layers, 
  Cpu, 
  Database, 
  Bot, 
  Server, 
  Globe, 
  Smartphone, 
  Radio, 
  Video, 
  Clock, 
  Zap 
} from "lucide-react";

// Node badge element for blueprint aesthetic
const BlueprintNode = ({ icon: Icon, title, subtitle, badge, innerRef }) => {
  return (
    <div
      ref={innerRef}
      className="z-10 flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-900 shadow-sm backdrop-blur-md text-center transition-all hover:border-emerald-500/40 hover:scale-[1.02]"
    >
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1.5">
        <Icon className="h-4 w-4" />
      </div>
      <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </span>
      {subtitle && (
        <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
          {subtitle}
        </span>
      )}
      {badge && (
        <span className="mt-1.5 font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
          {badge}
        </span>
      )}
    </div>
  );
};

// 1. Tripdata TravelTech Platform Diagram
export const TripdataArchitectureDiagram = () => {
  const containerRef = useRef(null);
  const clientRef = useRef(null);
  const cacheRef = useRef(null);
  const workerRef = useRef(null);
  const backendRef = useRef(null);
  const aiRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/60 dark:bg-zinc-950/60 p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            SYSTEM ARCHITECTURE · OFF-MAIN-THREAD & AGENT PIPELINE
          </span>
        </div>
        <span className="font-mono text-[10px] tabular-nums text-zinc-500">
          ~30% API Reduction
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4 items-center">
        {/* Col 1: Frontend Client */}
        <div className="flex flex-col gap-3">
          <BlueprintNode
            innerRef={clientRef}
            icon={Layers}
            title="React 19 + Vite"
            subtitle="Tailwind UI Wizard"
          />
        </div>

        {/* Col 2: Mid-tier optimizations */}
        <div className="flex flex-col gap-3">
          <BlueprintNode
            innerRef={cacheRef}
            icon={Zap}
            title="TanStack Query"
            subtitle="Zustand Caching"
            badge="-30% calls"
          />
          <BlueprintNode
            innerRef={workerRef}
            icon={Cpu}
            title="Web Workers"
            subtitle="Heavy Schema Offload"
          />
        </div>

        {/* Col 3: Backend & AI Agentic Flow */}
        <div className="flex flex-col gap-3">
          <BlueprintNode
            innerRef={backendRef}
            icon={Server}
            title="C# / .NET APIs"
            subtitle="DTO Validation & Booking"
          />
          <BlueprintNode
            innerRef={aiRef}
            icon={Bot}
            title="MCP & Agent Skills"
            subtitle="16-dev team (5-9 tkts/wk)"
            badge="Claude Code / AGY"
          />
        </div>
      </div>

      {/* Animated Beams connecting nodes */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={cacheRef}
        curvature={-15}
        duration={3.5}
        gradientStartColor="#10b981"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={workerRef}
        curvature={15}
        duration={3.8}
        gradientStartColor="#10b981"
        gradientStopColor="#8b5cf6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cacheRef}
        toRef={backendRef}
        duration={4}
        gradientStartColor="#3b82f6"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={backendRef}
        curvature={-10}
        duration={4.2}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#10b981"
      />
    </div>
  );
};

// 2. ZenFlow Spa Edge Architecture Diagram
export const ZenFlowArchitectureDiagram = () => {
  const containerRef = useRef(null);
  const nextRef = useRef(null);
  const workerRef = useRef(null);
  const supabaseRef = useRef(null);
  const cronRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/60 dark:bg-zinc-950/60 p-4 sm:p-5"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          ZERO-COLD-START EDGE FLOW
        </span>
        <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
          0ms Cold-Start
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 items-center">
        <BlueprintNode
          innerRef={nextRef}
          icon={Globe}
          title="Next.js 15"
          subtitle="React 19 App"
        />
        <BlueprintNode
          innerRef={workerRef}
          icon={Zap}
          title="Cloudflare Workers"
          subtitle="Hono Framework"
          badge="Edge API"
        />
        <BlueprintNode
          innerRef={supabaseRef}
          icon={Database}
          title="Supabase REST"
          subtitle="Web Crypto HMAC"
        />
        <BlueprintNode
          innerRef={cronRef}
          icon={Clock}
          title="Workers Cron"
          subtitle="15m ➔ SpeedSMS"
        />
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nextRef}
        toRef={workerRef}
        duration={3.2}
        gradientStartColor="#10b981"
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={workerRef}
        toRef={supabaseRef}
        duration={3.5}
        gradientStartColor="#06b6d4"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={workerRef}
        toRef={cronRef}
        curvature={-25}
        duration={4.2}
        gradientStartColor="#06b6d4"
        gradientStopColor="#f59e0b"
      />
    </div>
  );
};

// 3. Cupid Echo Real-Time & WebRTC Architecture Diagram
export const CupidArchitectureDiagram = () => {
  const containerRef = useRef(null);
  const rnRef = useRef(null);
  const socketRef = useRef(null);
  const webrtcRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/60 dark:bg-zinc-950/60 p-4 sm:p-5"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          REAL-TIME SIGNALING & WEBRTC PIPELINE
        </span>
        <span className="font-mono text-[10px] text-zinc-500">
          Sub-100ms Latency
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 items-center">
        <BlueprintNode
          innerRef={rnRef}
          icon={Smartphone}
          title="React Native"
          subtitle="Reanimated Gestures"
        />
        <BlueprintNode
          innerRef={socketRef}
          icon={Radio}
          title="Socket.IO"
          subtitle="Match Queue & Signaler"
          badge="Node.js"
        />
        <BlueprintNode
          innerRef={webrtcRef}
          icon={Video}
          title="Stream.io SDK"
          subtitle="WebRTC Video/Voice"
        />
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rnRef}
        toRef={socketRef}
        duration={3}
        gradientStartColor="#ec4899"
        gradientStopColor="#8b5cf6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={socketRef}
        toRef={webrtcRef}
        duration={3.2}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#10b981"
      />
    </div>
  );
};

