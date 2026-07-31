"use client";

import { useState } from "react";

const W = 560;
const H = 230;
const PAD = 42;
const W0 = 1; // natural frequency (normalized)

function amplitude(w, gamma) {
  const d1 = W0 * W0 - w * w;
  return 1 / Math.sqrt(d1 * d1 + gamma * gamma * w * w);
}

export default function DrivenOscillator() {
  const [drive, setDrive] = useState(0.6);
  const [gamma, setGamma] = useState(0.2);

  const wMax = 2.5;
  const aPeak = amplitude(Math.sqrt(Math.max(0.0001, W0 * W0 - (gamma * gamma) / 2)), gamma);
  const aMaxPlot = Math.min(aPeak * 1.15, 12);

  const xs = (w) => PAD + (w / wMax) * (W - PAD - 12);
  const ys = (a) => H - PAD - (Math.min(a, aMaxPlot) / aMaxPlot) * (H - PAD - 16);

  const pts = [];
  for (let i = 0; i <= 240; i++) {
    const w = (i / 240) * wMax;
    pts.push(`${i === 0 ? "M" : "L"}${xs(w).toFixed(1)},${ys(amplitude(w, gamma)).toFixed(1)}`);
  }

  const aDrive = amplitude(drive, gamma);
  const phase = Math.atan2(gamma * drive, W0 * W0 - drive * drive) * (180 / Math.PI);
  const q = W0 / gamma;

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Push a swing at the right rhythm and small pushes build a huge response — that is
        <strong> resonance</strong>. Sweep the driving frequency across the natural frequency
        ω₀ and watch the amplitude curve; lower the damping and see the peak sharpen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Driving frequency ω = <strong>{drive.toFixed(2)} × ω₀</strong>
          <input
            type="range" min="0.1" max="2.5" step="0.02" value={drive}
            onChange={(e) => setDrive(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Damping γ = <strong>{gamma.toFixed(2)}</strong> (Q ≈ {q.toFixed(1)})
          <input
            type="range" min="0.05" max="1" step="0.05" value={gamma}
            onChange={(e) => setGamma(parseFloat(e.target.value))}
            className="w-full accent-amber-500 mt-1"
          />
        </label>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label="Resonance amplitude curve">
        <line x1={PAD} y1={H - PAD} x2={W - 8} y2={H - PAD} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1.5" />
        <line x1={PAD} y1={12} x2={PAD} y2={H - PAD} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" />
        <text x={W - 10} y={H - PAD + 15} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">driving frequency ω →</text>
        <text x={PAD - 6} y={20} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">A</text>
        {/* natural frequency marker */}
        <line x1={xs(W0)} y1={14} x2={xs(W0)} y2={H - PAD} className="stroke-emerald-400" strokeWidth="1" strokeDasharray="4 4" />
        <text x={xs(W0)} y={H - PAD + 15} textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">ω₀</text>
        {/* response curve */}
        <path d={pts.join(" ")} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
        {/* current drive point */}
        <line x1={xs(drive)} y1={ys(aDrive)} x2={xs(drive)} y2={H - PAD} className="stroke-amber-400" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx={xs(drive)} cy={ys(aDrive)} r="5" className="fill-amber-500" />
      </svg>

      <div className="grid grid-cols-2 gap-3 text-center mt-3 max-w-sm mx-auto">
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Relative amplitude</div>
          <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">{aDrive.toFixed(2)}×</div>
        </div>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Phase lag</div>
          <div className="text-base font-bold text-amber-600 dark:text-amber-400">{phase.toFixed(0)}°</div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        Notice the phase: below resonance the oscillator moves in step with the push (≈0°),
        at ω₀ it lags by 90°, far above it moves opposite (→180°). Sharp peaks (high Q) are
        why a wine glass shatters at one precise note — and why radios can tune one station.
      </p>
    </div>
  );
}
