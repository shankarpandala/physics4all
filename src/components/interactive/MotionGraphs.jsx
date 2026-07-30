"use client";

import { useState } from "react";

const W = 280;
const H = 170;
const PAD = 34;
const T_MAX = 10;

function Panel({ title, unit, yMax, points, color }) {
  const xScale = (t) => PAD + (t / T_MAX) * (W - PAD - 10);
  const yScale = (v) => H / 2 - (v / yMax) * (H / 2 - 20);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${xScale(p.t).toFixed(1)},${yScale(p.y).toFixed(1)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[320px]" role="img" aria-label={title}>
      {/* axes */}
      <line x1={PAD} y1={10} x2={PAD} y2={H - 10} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" />
      <line x1={PAD} y1={H / 2} x2={W - 6} y2={H / 2} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" />
      <text x={PAD - 4} y={16} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[9px]">{yMax}</text>
      <text x={PAD - 4} y={H - 12} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[9px]">−{yMax}</text>
      <text x={W - 8} y={H / 2 + 12} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[9px]">t = {T_MAX} s</text>
      <text x={PAD + 6} y={14} className="fill-zinc-600 dark:fill-zinc-300 text-[10px] font-semibold">{title} ({unit})</text>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function MotionGraphs() {
  const [v0, setV0] = useState(4);
  const [a, setA] = useState(0);

  const steps = 100;
  const xPoints = [];
  const vPoints = [];
  let xMax = 10;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * T_MAX;
    const x = v0 * t + 0.5 * a * t * t;
    xPoints.push({ t, y: x });
    vPoints.push({ t, y: v0 + a * t });
    xMax = Math.max(xMax, Math.abs(x));
  }
  const xScaleMax = Math.ceil(xMax / 10) * 10;
  const vEnd = v0 + a * T_MAX;
  const vScaleMax = Math.max(10, Math.ceil(Math.max(Math.abs(v0), Math.abs(vEnd)) / 5) * 5);

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Set the starting velocity and the acceleration, then read the story the two
        graphs tell. Notice: the <strong>slope</strong> of the position graph at any moment
        equals the value on the velocity graph — that connection is the seed of calculus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Initial velocity v₀ = <strong>{v0.toFixed(1)} m/s</strong>
          <input
            type="range" min="-10" max="10" step="0.5" value={v0}
            onChange={(e) => setV0(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Acceleration a = <strong>{a.toFixed(1)} m/s²</strong>
          <input
            type="range" min="-3" max="3" step="0.1" value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <Panel title="Position x" unit="m" yMax={xScaleMax} points={xPoints} color="#6366f1" />
        <Panel title="Velocity v" unit="m/s" yMax={vScaleMax} points={vPoints} color="#10b981" />
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        After {T_MAX} s: position ≈ <strong>{(v0 * T_MAX + 0.5 * a * T_MAX * T_MAX).toFixed(1)} m</strong>,
        velocity = <strong>{vEnd.toFixed(1)} m/s</strong>.
        Try a = 0 (straight line), then add acceleration and watch the position graph curve.
      </p>
    </div>
  );
}
