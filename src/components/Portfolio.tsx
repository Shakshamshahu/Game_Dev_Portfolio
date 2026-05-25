import { useState } from "react";

type Project = {
  title: string;
  icon: string;
  gradient: string;
  category: string;
  overview: string;
  progression: string;
  features: string;
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
      "Skill-based mobile puzzle game focused on core cognitive training with 15+ distinct gameplay modes, each crafted to test logic, memory, pattern recognition and reaction time. Delivers a thought-provoking casual experience that sharpens player intelligence while solving mysteries.",
    progression:
      "Anchored by an interactive narrative meta-game built on a structured detective ranking system. Players advance through multiple rank tiers via skill mastery, with dynamic difficulty scaling and 4–5 meta side-mission mini-games unlocking additional structural rewards.",
    features:
      "Deep avatar customization suite for personalizing detective appearance and operational gear, tightly coupled with rank progression for long-term retention. Includes an integrated in-game feedback and technical issue-reporting framework.",
    challenges: [
      "Engineered a scalable skill & scoring system supporting 15+ disparate gameplay types under one project footprint.",
      "Built a multi-gameplay handler that loads and transitions between modes seamlessly at runtime.",
      "Compiled 500–800 sprites into texture atlases with deep memory and async-loading optimisations.",
      "Reduced ANR crash rate from ~4% to 0.4–0.5% on low-end devices through profiling and pooling.",
      "Architected core systems from scratch: IAP, ads, analytics, save/load, reward, meta + skills.",
    ],
    stack: ["C#", "Unity", "Firebase", "Object Pooling", "Atlases"],
    metrics: [
      { label: "Game Modes", value: "15+" },
      { label: "ANR Rate", value: "0.4%" },
      { label: "Sprites", value: "800+" },
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
      "Immersive, narrative-driven sequel where every player decision dynamically alters the story trajectory. Unifies contrasting archetypes — branch-based stories to interactive physics puzzles — with stylized comic storytelling and fluid visual transitions.",
    progression:
      "Layered reward loops anchored by a Thief Capture & Punishment Pipeline (detection → automated prison processing) and a Prison Management Meta with balanced upgrades for cells, guards, cameras, environment and utilities. Includes a ticket economy across 6 reward mini-games with precise probability logic.",
    features:
      "Story levels react entirely to branching choices, opening alternate flows and high replayability. Dedicated erase-style puzzle logic shared across story and standalone modes. In-game panel-by-panel comic system with custom transitions, animated panels and 20+ player-triggered punishment animations.",
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
      "Sequence-driven narrative puzzler that fuses entirely distinct puzzle archetypes into a single cohesive flow. Meticulously balanced storytelling sequences where diverse mechanical loops work in tandem to drive the overarching mystery forward.",
    progression:
      "Guided narrative progression paired with skill-based puzzles. Pacing is directly tied to the player's capacity to resolve sequence-driven story steps, with engagement validated through technical benchmarks and motivation loops set during prototyping.",
    features:
      "Three core gameplay loops collaborating in one project footprint: Erase mechanics, Draw mechanics and Two-Option Story systems. Interactive storytelling pipeline where choices and tactile inputs drive a comic-style layout.",
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
      "Engaging mobile puzzle title built completely from scratch, drawing creative inspiration from classic mind-training benchmarks like Brain Out. Delivers an expansive suite of levels challenging logical deduction, spatial awareness and creative thinking inside a lighthearted culinary theme.",
    progression:
      "Level-driven progression with a steady ramp of conceptual difficulty. Players advance sequentially through an extensive catalog of custom-engineered puzzles that demand outside-the-box thinking and unlock increasingly complex logic scenarios.",
    features:
      "Wide array of uniquely designed puzzle levels using highly interactive touch-and-gesture interfaces. Focused on a streamlined, accessible casual UX balancing brain-teasing complexity with instant pick-up-and-play visual layouts.",
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
      "Multi-mechanic mobile puzzle game packing three highly engaging puzzle genres into a single cohesive package. Players protect and rescue detective avatars across dangerous, logic-driven scenarios with steadily layered difficulty.",
    progression:
      "Difficulty scales dynamically by intertwining mechanics across levels. The challenge curve ensures long-term engagement by steadily requiring deeper tactical foresight and quick-thinking puzzle-solving to unlock further chapters.",
    features:
      "Triple-mechanic gameplay inside one app footprint: 'Cut the Rope' physics levels, 'Save from Bees' tactical drawing lines, and 'Pull the Pin' sequential pathfinding challenges.",
    challenges: [
      "Maintained optimised performance across three distinct gameplay modules in one architecture.",
      "Refined physics for rope cutting, fluid/pin logic and environmental interactions for mobile.",
      "Collaborated with a multi-disciplinary team to keep mechanics consistent across modules.",
    ],
    stack: ["C#", "Unity", "2D Physics", "Modular Systems"],
    metrics: [
      { label: "Mechanics", value: "3" },
      { label: "Team", value: "Cross-func" },
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
      "Simple yet deeply engaging physics-puzzle title where players protect a character avatar from aggressive bee swarms by strategically drawing protective lines and shapes in real time within the screen boundaries.",
    progression:
      "Robust difficulty curve that layers new challenges deeper into the level matrix. Pacing introduces structural environmental hazards and complex obstacle layouts, forcing increasingly clever, resource-efficient geometry to clear stages.",
    features:
      "High gameplay variety through distinct adversary ecosystems — multiple bee types with unique flight and targeting behaviours that prevent generic shape solutions from working at higher levels.",
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
      "Colorful 2D, story-based puzzle game for family-friendly brain training, retelling treasured chapters from Indian mythology. Guides players through Little Krishna's playful childhood adventures, combining narrative progression with interactive puzzle elements.",
    progression:
      "Chronological progression through mythological milestones: Makhan Chor Adventures (butter-stealing puzzles), Childhood Escapes (slipping away from Maa Yashoda) and Exploration & Conflict (jungle hazards including the legendary Aghasura snake).",
    features:
      "Vibrant 2D cartoon aesthetic with choice-based puzzle solving where players select paths or actions to advance. Packed with tricky brain teasers and riddles, fully offline, with humorous animated 'fail' states on incorrect choices.",
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

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="font-mono text-[11px] uppercase tracking-wider mb-3 flex items-center gap-2"
        style={{ color: MUTED }}
      >
        <span style={{ color: ELECTRIC }}>//</span> {label}
      </div>
      {children}
    </div>
  );
}

function GameDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return (
    <div className="animate-in fade-in duration-200">
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
        <span style={{ color: ELECTRIC }}>{slug}</span>
      </div>

      <div
        className={`h-64 md:h-80 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center border-b`}
        style={{ borderColor: BORDER }}
      >
        <span className="text-8xl drop-shadow-2xl">{project.icon}</span>
        <div className="absolute top-4 left-4 font-mono text-[11px]" style={{ color: "#cbd5e1" }}>
          $ open ./{slug}.png
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[11px]" style={{ color: MUTED }}>
          {project.category}
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
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

        <div className="grid grid-cols-3 border" style={{ borderColor: BORDER }}>
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

        <Section label="game_overview">
          <p className="font-mono text-sm leading-relaxed" style={{ color: TEXT }}>
            {project.overview}
          </p>
        </Section>

        <Section label="progression_system">
          <p className="font-mono text-sm leading-relaxed" style={{ color: TEXT }}>
            {project.progression}
          </p>
        </Section>

        <Section label="customization_and_features">
          <p className="font-mono text-sm leading-relaxed" style={{ color: TEXT }}>
            {project.features}
          </p>
        </Section>

        <Section label="technical_highlights">
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
        </Section>

        <Section label="tech_stack">
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
        </Section>

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
            &gt; play_store
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
