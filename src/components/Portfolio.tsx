import { useState } from "react";

type Project = {
  title: string;
  icon: string;
  gradient: string;
  overview: string;
  challenges: string[];
  stack: string[];
  repo: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Detective IQ",
    icon: "🕵️",
    gradient: "from-amber-500/40 to-orange-500/30",
    overview:
      "Skill-based mobile puzzle game with 15+ unique gameplay modes and a full meta-progression detective loop. Shipped to 24M+ players worldwide.",
    challenges: [
      "Refactored core gameplay loops to reduce GC allocations using object pooling and event-driven patterns.",
      "Wired Firebase Remote Config + Analytics to A/B test difficulty curves across 24M+ installs.",
    ],
    stack: ["C#", "Unity", "Firebase", "Object Pooling"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 2",
    icon: "🧩",
    gradient: "from-violet-500/40 to-fuchsia-500/30",
    overview:
      "Narrative-driven puzzle sequel with choice-driven story levels and branching outcomes. Includes erase-style puzzles, physics missions, and cinematic episodes.",
    challenges: [
      "Architected a branching narrative system using ScriptableObjects to manage state-driven cinematic episodes.",
      "Built a designer-facing authoring pipeline so episodes ship without engineering touches.",
    ],
    stack: ["C#", "Unity", "ScriptableObjects", "FSM"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+2+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 3: Lost Future",
    icon: "🔍",
    gradient: "from-cyan-500/40 to-blue-500/30",
    overview:
      "Developed the backend logic for a narrative-driven puzzle game with 50+ cinematic episodes. Architected the branching choice-based system.",
    challenges: [
      "Implemented draw-to-solve & erase-to-reveal input mechanics in custom C#.",
      "Choice-based branching that propagates through global narrative state.",
    ],
    stack: ["C#", "Unity", "Observer Pattern", "Input System"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+3+Lost+Future&c=apps",
  },
  {
    title: "Ghost IQ: Haunted House Escape",
    icon: "👻",
    gradient: "from-indigo-500/40 to-purple-500/30",
    overview:
      "Engineered survival logic for diverse gameplay modes. Integrated NavMeshAgent AI to handle enemy pathfinding in 2D environments.",
    challenges: [
      "Optimised NavMesh AI to reduce CPU spikes by 15% on mid-tier Android devices.",
      "Designed Mirror Horror mode with a reflected-world solver running in a single update tick.",
    ],
    stack: ["C#", "Unity", "NavMesh", "FSM"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Ghost+IQ+Haunted+House+Escape&c=apps",
  },
];

const ELECTRIC = "#007BFF";

export function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx];

  return (
    <section id="project" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="font-mono text-xs" style={{ color: ELECTRIC }}>
            // 03_projects
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-2 text-foreground">
            Projects<span style={{ color: ELECTRIC }}>.</span>
          </h2>
        </div>

        <div
          className="grid lg:grid-cols-[280px_1fr] gap-0 border"
          style={{ borderColor: "#1f2937", background: "#0e1116" }}
        >
          {/* Index list */}
          <aside
            className="border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: "#1f2937" }}
          >
            <div
              className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider border-b"
              style={{ borderColor: "#1f2937", color: "#6b7280" }}
            >
              // project_index
            </div>
            <ul>
              {projects.map((p, i) => {
                const isActive = i === activeIdx;
                return (
                  <li key={p.title}>
                    <button
                      onClick={() => setActiveIdx(i)}
                      className="w-full text-left px-4 py-3 font-mono text-sm transition-colors border-b flex items-center gap-2"
                      style={{
                        borderColor: "#1f2937",
                        color: isActive ? ELECTRIC : "#e5e7eb",
                        background: isActive ? "rgba(0,123,255,0.08)" : "transparent",
                      }}
                    >
                      <span style={{ color: isActive ? ELECTRIC : "#4b5563" }}>
                        {isActive ? "▸" : "·"}
                      </span>
                      <span className="truncate">{p.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Detail panel */}
          <div className="p-0">
            {/* Visual */}
            <div
              className={`h-56 bg-gradient-to-br ${active.gradient} relative grid place-items-center border-b`}
              style={{ borderColor: "#1f2937" }}
            >
              <span className="text-7xl drop-shadow-lg">{active.icon}</span>
              <div className="absolute top-3 left-3 font-mono text-[11px]" style={{ color: "#cbd5e1" }}>
                $ open ./{active.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.png
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: ELECTRIC }}>
                  # {active.title}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  // overview
                </div>
                <p className="font-mono text-sm leading-relaxed text-foreground/90">
                  {active.overview}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  // technical_challenge
                </div>
                <ul className="space-y-2">
                  {active.challenges.map((c) => (
                    <li key={c} className="flex gap-2 font-mono text-sm leading-relaxed text-foreground/90">
                      <span style={{ color: ELECTRIC }} className="shrink-0">-</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  // tech_stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 border"
                      style={{ borderColor: "#1f2937", color: ELECTRIC, background: "rgba(0,123,255,0.05)" }}
                    >
                      [{t}]
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-wrap gap-3 pt-4 border-t"
                style={{ borderColor: "#1f2937" }}
              >
                <a
                  href={active.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-4 py-2 border transition-colors hover:bg-[rgba(0,123,255,0.1)]"
                  style={{ borderColor: ELECTRIC, color: ELECTRIC }}
                >
                  &gt; view_repo
                </a>
                <a
                  href={active.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-4 py-2 border transition-colors hover:bg-[rgba(0,123,255,0.1)]"
                  style={{ borderColor: ELECTRIC, color: ELECTRIC }}
                >
                  &gt; view_demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
