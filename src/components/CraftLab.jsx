import { useState, useEffect } from "react";
import { InView } from "./ui/in-view";
import {
  Terminal,
  Activity,
  CheckCircle2,
  Sliders,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react";

const models = [
  {
    id: "gemini",
    name: "Gemini 2.5 Flash",
    provider: "Google DeepMind",
    latency: "142ms",
    tokensSec: "145 t/s",
    cost: "$0.075 / 1M",
    verdict: "Selected for Tripdata Live Inquiry Chatbot · Optimal Latency & Accuracy",
    sampleOutput:
      '{\n  "status": "confirmed",\n  "pnr": "VN-89241X",\n  "route": "SGN -> DAD",\n  "passengers": 2,\n  "bookingToken": "hmac_89f021ac"\n}',
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    latency: "240ms",
    tokensSec: "95 t/s",
    cost: "$3.00 / 1M",
    verdict: "Team Agent Standard · Powered MCP Developer Tooling across 16 Engineers",
    sampleOutput:
      "// MCP Ticket Execution Result\nexport const executeBookingSchema = z.object({\n  flightId: z.string().uuid(),\n  paxList: z.array(PassengerSchema).min(1)\n});",
  },
  {
    id: "gpt4o",
    name: "GPT-4o",
    provider: "OpenAI",
    latency: "285ms",
    tokensSec: "110 t/s",
    cost: "$2.50 / 1M",
    verdict: "High Reasoning · Evaluated for Complex Passenger Validation Rules",
    sampleOutput:
      '{\n  "validation": "passed",\n  "notes": "Infant baggage allowance matched with Vietnam Airlines fare rules",\n  "score": 0.98\n}',
  },
];

const CraftLab = () => {
  // Model Evaluation state
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState(models[0].sampleOutput);

  // Rauno-style Spring physics state
  const [springDamping, setSpringDamping] = useState(24);
  const [ballBouncing, setBallBouncing] = useState(false);

  const handleSimulateStream = (model) => {
    setSelectedModel(model);
    setIsStreaming(true);
    setStreamedText("");

    const fullText = model.sampleOutput;
    let index = 0;

    const interval = setInterval(() => {
      index += 3;
      setStreamedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 18);
  };

  const triggerBounce = () => {
    setBallBouncing(true);
    setTimeout(() => setBallBouncing(false), 350);
  };

  return (
    <section id="craft-lab" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-500">
                Interactive Engineering Lab
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                Tactile Craft &amp; AI Benchmarks
              </h2>
            </div>
            <p className="text-base text-neutral-500 dark:text-[#86868B] max-w-md leading-relaxed">
              Living demonstrations of micro-interactions, spring physics, and production telemetry from autonomous developer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Widget 1: Rauno Spring Physics Tuner (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Spring Physics Tuner
                  </h3>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">
                    Motion 14 Frame Budget
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  Damping: {springDamping}
                </span>
              </div>

              {/* Interactive Stage */}
              <div className="h-36 rounded-2xl bg-neutral-100 dark:bg-black/80 hairline-border flex items-center justify-center relative overflow-hidden select-none">
                <div
                  onClick={triggerBounce}
                  style={{
                    transitionDuration: `${springDamping * 15}ms`,
                    transform: ballBouncing ? "scale(1.2) rotate(12deg)" : "scale(1) rotate(0deg)",
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 shadow-2xl cursor-pointer flex items-center justify-center text-white dark:text-black font-mono text-xs font-bold transition-transform"
                >
                  Click Me
                </div>
              </div>

              {/* Slider Control */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono text-neutral-500 dark:text-[#86868B]">
                  <span>Stiffness / Damping</span>
                  <span className="text-neutral-900 dark:text-white font-medium">60 FPS Native</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  value={springDamping}
                  onChange={(e) => setSpringDamping(Number(e.target.value))}
                  className="w-full interactive-slider bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="pt-2 hairline-t text-xs text-neutral-500 dark:text-[#86868B] leading-relaxed">
                Authored with custom exponential decay curves to eliminate layout shifts and preserve tactile feedback on touch devices.
              </div>
            </div>

            {/* Widget 2: Multi-Model AI Streaming & MCP Benchmark (7 cols) */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Model Evaluation &amp; Agent Dispatch
                  </h3>
                  <div className="text-xs text-neutral-500 dark:text-[#86868B]">
                    Prompt engineering and latency benchmarks in production
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full w-fit">
                  MCP Tooling
                </span>
              </div>

              {/* Model Selectors */}
              <div className="flex flex-wrap gap-2 p-1 rounded-full bg-neutral-100 dark:bg-black/60 hairline-border">
                {models.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => handleSimulateStream(model)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      selectedModel.id === model.id
                        ? "bg-white dark:bg-white/15 text-neutral-900 dark:text-white font-semibold shadow-xs"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>

              {/* Telemetry Strip for Selected Model */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 hairline-border text-center text-xs font-mono">
                <div>
                  <div className="text-neutral-400 text-[10px]">TIME TO FIRST TOKEN</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white pt-0.5">
                    {selectedModel.latency}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px]">OUTPUT SPEED</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white pt-0.5">
                    {selectedModel.tokensSec}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px]">COST EFFICIENCY</div>
                  <div className="text-sm font-semibold text-emerald-500 pt-0.5">
                    {selectedModel.cost}
                  </div>
                </div>
              </div>

              {/* Streaming Output Terminal */}
              <div className="p-4 rounded-2xl bg-neutral-900 dark:bg-black/80 hairline-border font-mono text-xs text-neutral-300 space-y-2 min-h-[140px] flex flex-col justify-between overflow-x-auto">
                <div className="flex items-center justify-between text-neutral-500 text-[11px] hairline-b pb-2">
                  <span>// OUTPUT STREAM · {selectedModel.provider}</span>
                  <span className="text-emerald-400">
                    {isStreaming ? "Streaming..." : "Response Buffered"}
                  </span>
                </div>
                <pre className="text-emerald-400 dark:text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {streamedText}
                  {isStreaming && <span className="inline-block w-2 h-3.5 bg-emerald-400 ml-1 animate-pulse" />}
                </pre>
                <div className="text-[11px] text-neutral-400 pt-2 hairline-t">
                  Verdict: {selectedModel.verdict}
                </div>
              </div>

            </div>

          </div>
        </InView>
      </div>
    </section>
  );
};

export default CraftLab;
