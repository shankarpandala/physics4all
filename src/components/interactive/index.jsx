"use client";

import MotionGraphs from "./MotionGraphs";
import WaveSuperposition from "./WaveSuperposition";
import OhmsLaw from "./OhmsLaw";

const REGISTRY = {
  "motion-graphs": { component: MotionGraphs, title: "Motion Graphs Explorer" },
  "wave-superposition": { component: WaveSuperposition, title: "Wave Superposition Sandbox" },
  "ohms-law": { component: OhmsLaw, title: "Ohm's Law Circuit Lab" },
};

export default function Interactive({ name }) {
  const entry = REGISTRY[name];
  if (!entry) return null;
  const Component = entry.component;

  return (
    <div className="my-8 rounded-xl border border-indigo-200 bg-indigo-50/40 dark:border-indigo-800/60 dark:bg-indigo-950/20 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-indigo-200 dark:border-indigo-800/60 bg-indigo-100/60 dark:bg-indigo-900/30 px-4 py-2.5">
        <span aria-hidden="true">🎛</span>
        <span className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">
          Interactive Lab · {entry.title}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <Component />
      </div>
    </div>
  );
}
