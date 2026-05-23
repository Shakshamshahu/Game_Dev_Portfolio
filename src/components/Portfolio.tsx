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
      "Skill-based mobile puzzle game packing 15+ unique gameplay modes, detective rank progression, and a full meta-game loop. Players sharpen logic, memory, pattern recognition and reaction through side missions and avatar customization.",
    challenges: [
      "Engineered a scalable skill & scoring system supporting 15+ disparate gameplay types under one project.",
      "Built a multi-gameplay handler that loads and transitions between modes seamlessly at runtime.",
      "Organised 500–800 sprites into atlases with deep memory and async-loading optimisations.",
      "Reduced ANR crash rate from ~4% to 0.4–0.5% on low-end devices via profiling and pooling.",
      "Architected core systems from scratch: IAP, ads, analytics, save/load, reward, meta + skills.",
    ],
    stack: ["C#", "Unity", "Firebase", "Object Pooling", "Atlases"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 2",
    icon: "🧩",
    gradient: "from-violet-500/40 to-fuchsia-500/30",
    overview:
      "Narrative-driven sequel with choice-based story levels, erase puzzles, physics missions and a full prison-management meta. Every decision reshapes the branch flow, fueling deep replayability across contrasting gameplay archetypes.",
    challenges: [
      "Built the branch-based choice gameplay where each decision rewrites the story flow.",
      "Developed erase-style puzzle logic shared across story mode and standalone erase mode.",
      "Integrated Cut-the-Rope physics and bullet-shooting modules with obstacle/target logic.",
      "Implemented an in-game comic system with panel transitions, animations and narrative flow.",
      "Shipped a thief capture pipeline (detect → capture → prison) with 20+ punishment animations.",
      "Designed an upgradeable prison meta: cells, guards, cameras, environment and utilities.",
      "Engineered 6 reward mini-games (slot-style) with balanced probability and ticket economy.",
    ],
    stack: ["C#", "Unity", "ScriptableObjects", "2D Physics", "FSM"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+2+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 3",
    icon: "🔍",
    gradient: "from-cyan-500/40 to-blue-500/30",
    overview:
      "Sequence-driven narrative puzzler fusing three disparate mechanics — Erase, Draw and Two-Option Story — into a single cohesive flow. Led the architecture, prototyping and team standards across the full project lifecycle.",
    challenges: [
      "Designed the high-level gameplay architecture unifying 3 core mechanics in one codebase.",
      "Led prototyping for all three loops, setting performance benchmarks and engagement KPIs.",
      "Engineered custom Shape Detection Logic that analyses real-time touch paths in Draw mode.",
      "Built a Predictive Completion Algorithm that recognises partial shapes and finishes them.",
      "Acted as Team Lead — scope, coding standards, code reviews, architectural adherence.",
    ],
    stack: ["C#", "Unity", "Input System", "Observer Pattern", "Team Lead"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+3&c=apps",
  },
  {
    title: "Pizza IQ: Brain Games",
    icon: "🍕",
    gradient: "from-rose-500/40 to-amber-500/30",
    overview:
      "Brain-Out–inspired mobile puzzler built entirely from scratch with an expansive catalogue of out-of-the-box logic levels. Wrapped in a lighthearted culinary theme with instant pick-up-and-play touch interactions.",
    challenges: [
      "Built a modular level-loading framework supporting highly varied puzzle definitions.",
      "Designed a flexible puzzle-evaluation state machine that validates atypical solutions.",
      "Tuned gesture and touch input processing for diverse, creative interaction patterns.",
    ],
    stack: ["C#", "Unity", "FSM", "UGUI"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Pizza+IQ+Brain+Games&c=apps",
  },
  {
    title: "Save Detectives: Brain Puzzles",
    icon: "🦈",
    gradient: "from-teal-500/40 to-emerald-500/30",
    overview:
      "Multi-mechanic puzzle game packing three established play styles — Cut the Rope, Save from Bees and Pull the Pin — into a single app footprint. Players protect detective avatars across logic-driven rescue scenarios with steadily layered difficulty.",
    challenges: [
      "Maintained optimised performance across three distinct gameplay modules in one architecture.",
      "Refined physics for rope cutting, fluid/pin logic and environmental interactions for mobile.",
      "Collaborated with a multi-disciplinary team to keep mechanics consistent across modules.",
    ],
    stack: ["C#", "Unity", "2D Physics", "Modular Systems"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Save+Detectives+Brain+Puzzles&c=apps",
  },
  {
    title: "Bees Attack: Draw to Save",
    icon: "🐝",
    gradient: "from-yellow-500/40 to-orange-500/30",
    overview:
      "Physics-driven drawing puzzler where players shield a character from swarming bees by sketching protective geometry in real time. Difficulty layers up via new bee behaviours and environmental hazards as levels progress.",
    challenges: [
      "Converted continuous touch paths into rigid 2D physics colliders in real time.",
      "Implemented multiple bee types with unique flight & targeting AI to prevent generic solutions.",
      "Balanced obstacle layouts and resource-efficient geometry challenges for steady ramp-up.",
    ],
    stack: ["C#", "Unity", "2D Physics", "Procedural Colliders", "AI"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Bees+Attack+Draw+to+Save&c=apps",
  },
  {
    title: "Krishna Stories Game",
    icon: "🪈",
    gradient: "from-indigo-500/40 to-purple-500/30",
    overview:
      "Colorful 2D, story-based puzzle game for family-friendly brain training, retelling treasured chapters from Indian mythology. Choice-based puzzles and riddles guide players through Little Krishna's playful adventures — fully offline.",
    challenges: [
      "Built a narrative flow state machine for conditional branches with no server dependency.",
      "Optimised animations and narrative panels under strict memory budgets for wide device support.",
      "Authored chapter-based progression: Makhan Chor, Childhood Escapes, Aghasura encounter.",
    ],
    stack: ["C#", "Unity", "FSM", "Offline-First", "2D Animation"],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Krishna+Stories+Game&c=apps",
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
