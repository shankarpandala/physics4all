"use client";

import { useState } from "react";

const W = 560;
const H = 220;
const PAD = 30;

export default function QuantumWell() {
  const [n, setN] = useState(1);
  const [showProb, setShowProb] = useState(false);

  const wellLeft = PAD + 40;
  const wellRight = W - PAD - 150;
  const wellWidth = wellRight - wellLeft;
  const base = H - 40;

  const psi = (xFrac) => Math.sin(n * Math.PI * xFrac);

  const curve = [];
  for (let px = 0; px <= wellWidth; px += 2) {
    const xFrac = px / wellWidth;
    const v = psi(xFrac);
    const y = showProb ? -v * v * 70 : -v * 55;
    curve.push(`${px === 0 ? "M" : "L"}${wellLeft + px},${(base - 60 + y).toFixed(1)}`);
  }

  const maxN = 6;
  const eScale = 130 / (maxN * maxN);

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        A particle trapped in a box can&apos;t have just any energy: only standing waves fit,
        so energy is <strong>quantized</strong> — E ∝ n². Step through the quantum number n
        and watch the wavefunction gain nodes while the energy climbs quadratically.
      </p>

      <div className="flex flex-wrap items-end gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300 grow max-w-xs">
          Quantum number n = <strong>{n}</strong> (E = {n * n} E₁, {n - 1} node{n === 2 ? "" : "s"})
          <input
            type="range" min="1" max={maxN} step="1" value={n}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <button
          onClick={() => setShowProb((p) => !p)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-colors"
        >
          Showing: {showProb ? "|ψ|² (probability)" : "ψ (wavefunction)"} — click to toggle
        </button>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label="Particle in a box eigenstate and energy levels">
        {/* well walls */}
        <path d={`M${wellLeft},20 L${wellLeft},${base} L${wellRight},${base} L${wellRight},20`} fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="2.5" />
        <text x={(wellLeft + wellRight) / 2} y={base + 16} textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">0 ← x → L (infinite walls)</text>
        {/* baseline for the state */}
        <line x1={wellLeft} y1={base - 60} x2={wellRight} y2={base - 60} className="stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="1" strokeDasharray="3 3" />
        {/* wavefunction */}
        <path d={curve.join(" ")} fill="none" stroke={showProb ? "#10b981" : "#6366f1"} strokeWidth="2.5" strokeLinecap="round" />
        {/* energy ladder */}
        {Array.from({ length: maxN }, (_, i) => i + 1).map((level) => {
          const y = base - level * level * eScale;
          const active = level === n;
          return (
            <g key={level}>
              <line
                x1={W - PAD - 120} y1={y} x2={W - PAD - 20} y2={y}
                className={active ? "stroke-amber-500" : "stroke-zinc-300 dark:stroke-zinc-600"}
                strokeWidth={active ? 3 : 1.5}
              />
              <text x={W - PAD - 14} y={y + 3} className={`text-[9px] ${active ? "fill-amber-600 dark:fill-amber-400 font-bold" : "fill-zinc-400 dark:fill-zinc-500"}`}>
                n={level}
              </text>
            </g>
          );
        })}
        <text x={W - PAD - 70} y={30} textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">Energy levels (E ∝ n²)</text>
      </svg>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        Note the gaps widen: E₂−E₁ = 3E₁ but E₆−E₅ = 11E₁. In |ψ|² view, see where the
        particle is <em>never</em> found (nodes) — a purely quantum prediction with no
        classical analog. This one toy model explains quantum dots, conjugated dyes, and
        why confinement raises energy.
      </p>
    </div>
  );
}
