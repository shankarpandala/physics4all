"use client";

import { useState } from "react";

const W = 560;
const ROW_H = 90;

function wavePath(amp, freq, phase, yCenter) {
  const pts = [];
  for (let px = 0; px <= W; px += 4) {
    const x = px / W;
    const y = yCenter - amp * Math.sin(2 * Math.PI * freq * x + phase);
    pts.push(`${px === 0 ? "M" : "L"}${px},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

function sumPath(a1, f1, a2, f2, phase, yCenter) {
  const pts = [];
  for (let px = 0; px <= W; px += 4) {
    const x = px / W;
    const y =
      yCenter -
      (a1 * Math.sin(2 * Math.PI * f1 * x) +
        a2 * Math.sin(2 * Math.PI * f2 * x + phase));
    pts.push(`${px === 0 ? "M" : "L"}${px},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function WaveSuperposition() {
  const [a1, setA1] = useState(28);
  const [f1, setF1] = useState(3);
  const [a2, setA2] = useState(28);
  const [f2, setF2] = useState(3);
  const [phaseDeg, setPhaseDeg] = useState(0);

  const phase = (phaseDeg * Math.PI) / 180;
  const rows = [
    { label: "Wave 1", color: "#6366f1", path: wavePath(a1, f1, 0, ROW_H / 2) },
    { label: "Wave 2", color: "#f59e0b", path: wavePath(a2, f2, phase, ROW_H / 2) },
    { label: "Sum (what you actually observe)", color: "#10b981", path: sumPath(a1, f1, a2, f2, phase, ROW_H / 2) },
  ];

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Two waves in the same place simply <strong>add, point by point</strong> — that is
        superposition. Match the frequencies and slide the phase to 180° to see waves
        cancel; nudge one frequency slightly to see <strong>beats</strong> appear in the sum.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4 text-xs text-zinc-700 dark:text-zinc-300">
        <label className="block">
          A₁ = {a1}
          <input type="range" min="0" max="40" value={a1} onChange={(e) => setA1(+e.target.value)} className="w-full accent-indigo-500" />
        </label>
        <label className="block">
          f₁ = {f1} cycles
          <input type="range" min="1" max="8" value={f1} onChange={(e) => setF1(+e.target.value)} className="w-full accent-indigo-500" />
        </label>
        <label className="block">
          A₂ = {a2}
          <input type="range" min="0" max="40" value={a2} onChange={(e) => setA2(+e.target.value)} className="w-full accent-amber-500" />
        </label>
        <label className="block">
          f₂ = {f2} cycles
          <input type="range" min="1" max="8" value={f2} onChange={(e) => setF2(+e.target.value)} className="w-full accent-amber-500" />
        </label>
        <label className="block col-span-2 sm:col-span-1">
          Phase = {phaseDeg}°
          <input type="range" min="0" max="360" step="15" value={phaseDeg} onChange={(e) => setPhaseDeg(+e.target.value)} className="w-full accent-emerald-500" />
        </label>
      </div>

      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-0.5">{row.label}</div>
            <svg viewBox={`0 0 ${W} ${ROW_H}`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label={row.label}>
              <line x1="0" y1={ROW_H / 2} x2={W} y2={ROW_H / 2} className="stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="1" />
              <path d={row.path} fill="none" stroke={row.color} strokeWidth="2" />
            </svg>
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        Presets to try: equal f, phase 0° → constructive (double height) · equal f,
        phase 180° → destructive (silence!) · f₁ = 3, f₂ = 4 → beats.
      </p>
    </div>
  );
}
