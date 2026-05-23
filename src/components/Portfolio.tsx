import { useState } from "react";

type Project = {
  title: string;
  icon: string;
  gradient: string;
  category: string;
  overview: string;
  challenges: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  repo: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Detective IQ",
    icon: "🕵️",
    gradient: "from-amber-500/40 to-orange-500/30",
    category: "Puzzle · Mobile",
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
    metrics: [
      { label: "Downloads", value: "10M+" },
      { label: "ANR Rate", value: "0.4%" },
      { label: "Game Modes", value: "15+" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 2",
    icon: "🧩",
    gradient: "from-sky-500/40 to-cyan-500/30",
    category: "Narrative · Puzzle",
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
    metrics: [
      { label: "Story Branches", value: "50+" },
      { label: "Animations", value: "20+" },
      { label: "Mini-Games", value: "6" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+2+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 3",
    icon: "🔍",
    gradient: "from-teal-500/40 to-emerald-500/30",
    category: "Narrative · Team Lead",
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
    metrics: [
      { label: "Core Mechanics", value: "3" },
      { label: "Episodes", value: "50+" },
      { label: "Role", value: "Lead" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Detective+IQ+3&c=apps",
  },
  {
    title: "Pizza IQ: Brain Games",
    icon: "🍕",
    gradient: "from-rose-500/40 to-amber-500/30",
    category: "Brain Training · Casual",
    overview:
      "Brain-Out–inspired mobile puzzler built entirely from scratch with an expansive catalogue of out-of-the-box logic levels. Wrapped in a lighthearted culinary theme with instant pick-up-and-play touch interactions.",
    challenges: [
      "Built a modular level-loading framework supporting highly varied puzzle definitions.",
      "Designed a flexible puzzle-evaluation state machine that validates atypical solutions.",
      "Tuned gesture and touch input processing for diverse, creative interaction patterns.",
    ],
    stack: ["C#", "Unity", "FSM", "UGUI"],
    metrics: [
      { label: "Puzzle Types", value: "20+" },
      { label: "Architecture", value: "Modular" },
      { label: "Platform", value: "Android" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Pizza+IQ+Brain+Games&c=apps",
  },
  {
    title: "Save Detectives",
    icon: "🦈",
    gradient: "from-cyan-500/40 to-blue-500/30",
    category: "Physics · Puzzle",
    overview:
      "Multi-mechanic puzzle game packing three established play styles — Cut the Rope, Save from Bees and Pull the Pin — into a single app footprint. Players protect detective avatars across logic-driven rescue scenarios with steadily layered difficulty.",
    challenges: [
      "Maintained optimised performance across three distinct gameplay modules in one architecture.",
      "Refined physics for rope cutting, fluid/pin logic and environmental interactions for mobile.",
      "Collaborated with a multi-disciplinary team to keep mechanics consistent across modules.",
    ],
    stack: ["C#", "Unity", "2D Physics", "Modular Systems"],
    metrics: [
      { label: "Mechanics", value: "3" },
      { label: "Team Size", value: "Cross-func" },
      { label: "Platform", value: "Android" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Save+Detectives+Brain+Puzzles&c=apps",
  },
  {
    title: "Bees Attack: Draw to Save",
    icon: "🐝",
    gradient: "from-yellow-500/40 to-orange-500/30",
    category: "Physics · Drawing",
    overview:
      "Physics-driven drawing puzzler where players shield a character from swarming bees by sketching protective geometry in real time. Difficulty layers up via new bee behaviours and environmental hazards as levels progress.",
    challenges: [
      "Converted continuous touch paths into rigid 2D physics colliders in real time.",
      "Implemented multiple bee types with unique flight & targeting AI to prevent generic solutions.",
      "Balanced obstacle layouts and resource-efficient geometry challenges for steady ramp-up.",
    ],
    stack: ["C#", "Unity", "2D Physics", "Procedural Colliders", "AI"],
    metrics: [
      { label: "Enemy Types", value: "Multi" },
      { label: "Input", value: "Real-time" },
      { label: "Platform", value: "Android" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Bees+Attack+Draw+to+Save&c=apps",
  },
  {
    title: "Krishna Stories Game",
    icon: "🪈",
    gradient: "from-amber-500/40 to-yellow-500/30",
    category: "Narrative · Family",
    overview:
      "Colorful 2D, story-based puzzle game for family-friendly brain training, retelling treasured chapters from Indian mythology. Choice-based puzzles and riddles guide players through Little Krishna's playful adventures — fully offline.",
    challenges: [
      "Built a narrative flow state machine for conditional branches with no server dependency.",
      "Optimised animations and narrative panels under strict memory budgets for wide device support.",
      "Authored chapter-based progression: Makhan Chor, Childhood Escapes, Aghasura encounter.",
    ],
    stack: ["C#", "Unity", "FSM", "Offline-First", "2D Animation"],
    metrics: [
      { label: "Chapters", value: "3+" },
      { label: "Connectivity", value: "Offline" },
      { label: "Audience", value: "Family" },
    ],
    repo: "https://github.com/shakshamshahu",
    demo: "https://play.google.com/store/search?q=Krishna+Stories+Game&c=apps",
  },
];

const ELECTRIC = "#007BFF";
const BG = "#0e1116";
const BORDER = "#1f2937";
const MUTED = "#6b7280";
const TEXT = "#e5e7eb";

function GameGrid({ onSelect }: { onSelect: (idx: number) => void }) {
  return (
    <div>
      <div
        className="px-4 py-3 border-b font-mono text-[11px] uppercase tracking-wider flex items-center gap-2"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        <span style={{ color: ELECTRIC }}>$</span>
        <span>ls ./projects/</span>
        <span className="ml-auto" style={{ color: ELECTRIC }}>
          {projects.length} entries
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px" style={{ background: BORDER }}>
        {projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => onSelect(i)}
            className="group relative text-left transition-all duration-200 focus:outline-none"
            style={{ background: BG }}
          >
            {/* Thumbnail */}
            <div
              className={`aspect-video bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{ background: "rgba(0,123,255,0.15)" }}
              >
                <span className="font-mono text-xs border px-2 py-1" style={{ borderColor: ELECTRIC, color: ELECTRIC }}>
                  &gt; open
                </span>
              </div>
              <div
                className="absolute bottom-2 left-2 font-mono text-[10px] opacity-60"
                style={{ color: TEXT }}
              >
                {p.category}
              </div>
            </div>

            {/* Title bar */}
            <div
              className="px-3 py-2.5 border-t flex items-center gap-2"
              style={{ borderColor: BORDER }}
            >
              <span
                className="font-mono text-[10px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: ELECTRIC }}
              >
                ▸
              </span>
              <span className="font-mono text-xs truncate" style={{ color: TEXT }}>
                {p.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function GameDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <div className="animate-in fade-in duration-200">
      {/* Breadcrumb / back bar */}
      <div
        className="px-4 py-3 border-b font-mono text-[11px] flex items-center gap-2"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 transition-colors hover:text-white"
          style={{ color: MUTED }}
        >
          <span style={{ color: ELECTRIC }}>&lt;</span>
          <span>cd ../projects/</span>
        </button>
        <span style={{ color: BORDER }}>/</span>
        <span style={{ color: ELECTRIC }}>{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}</span>
      </div>

      {/* Hero image */}
      <div
        className={`h-64 md:h-80 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center border-b`}
        style={{ borderColor: BORDER }}
      >
        <span className="text-8xl drop-shadow-2xl">{project.icon}</span>
        <div className="absolute top-4 left-4 font-mono text-[11px]" style={{ color: "#cbd5e1" }}>
          $ open ./{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.png
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[11px]" style={{ color: MUTED }}>
          {project.category}
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Title + back button */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider mb-1" style={{ color: ELECTRIC }}>
              # {project.title}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: TEXT }}>
              {project.title}
            </h3>
          </div>
          <button
            onClick={onBack}
            className="font-mono text-sm px-4 py-2 border flex items-center gap-2 transition-colors hover:bg-[rgba(0,123,255,0.08)] shrink-0"
            style={{ borderColor: ELECTRIC, color: ELECTRIC }}
          >
            <span>←</span>
            <span>Back to Games</span>
          </button>
        </div>

        {/* Metrics row */}
        <div
          className="grid grid-cols-3 border"
          style={{ borderColor: BORDER }}
        >
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="px-4 py-4 border-r last:border-r-0 text-center"
              style={{ borderColor: BORDER }}
            >
              <div className="font-mono text-xl font-bold" style={{ color: ELECTRIC }}>
                {m.value}
              </div>
              <div className="font-mono text-[11px] mt-1 uppercase tracking-wider" style={{ color: MUTED }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div>
          <div
            className="font-mono text-[11px] uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: MUTED }}
          >
            <span style={{ color: ELECTRIC }}>//</span> overview
          </div>
          <p className="font-mono text-sm leading-relaxed" style={{ color: TEXT }}>
            {project.overview}
          </p>
        </div>

        {/* Technical Challenges */}
        <div>
          <div
            className="font-mono text-[11px] uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: MUTED }}
          >
            <span style={{ color: ELECTRIC }}>//</span> technical_challenges
          </div>
          <ul className="space-y-3">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed">
                <span className="shrink-0 font-mono text-[11px] mt-0.5" style={{ color: ELECTRIC }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: TEXT }}>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <div
            className="font-mono text-[11px] uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: MUTED }}
          >
            <span style={{ color: ELECTRIC }}>//</span> tech_stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1.5 border"
                style={{ borderColor: BORDER, color: ELECTRIC, background: "rgba(0,123,255,0.05)" }}
              >
                [{t}]
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          className="flex flex-wrap gap-3 pt-6 border-t"
          style={{ borderColor: BORDER }}
        >
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-5 py-2.5 border transition-colors hover:bg-[rgba(0,123,255,0.1)]"
            style={{ borderColor: ELECTRIC, color: ELECTRIC }}
          >
            &gt; view_repo
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-5 py-2.5 border transition-colors hover:bg-[rgba(0,123,255,0.1)]"
            style={{ borderColor: ELECTRIC, color: ELECTRIC }}
          >
            &gt; view_demo
          </a>
          <button
            onClick={onBack}
            className="font-mono text-sm px-5 py-2.5 border transition-colors hover:bg-white/5 ml-auto"
            style={{ borderColor: BORDER, color: MUTED }}
          >
            ← back_to_games
          </button>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="project" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Section header */}
        <div className="mb-10">
          <div className="font-mono text-xs" style={{ color: ELECTRIC }}>
            // 03_projects
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-2" style={{ color: TEXT }}>
            Games<span style={{ color: ELECTRIC }}>.</span>
          </h2>
          {selectedIdx === null && (
            <p className="font-mono text-sm mt-3" style={{ color: MUTED }}>
              {projects.length} titles shipped · click any card to open
            </p>
          )}
        </div>

        {/* Master / Detail container */}
        <div
          className="border overflow-hidden"
          style={{ borderColor: BORDER, background: BG }}
        >
          {selectedIdx === null ? (
            <GameGrid onSelect={setSelectedIdx} />
          ) : (
            <GameDetail project={projects[selectedIdx]} onBack={() => setSelectedIdx(null)} />
          )}
        </div>
      </div>
    </section>
  );
}
