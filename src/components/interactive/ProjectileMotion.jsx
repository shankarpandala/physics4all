"use client";

import { useState } from "react";

const W = 560;
const H = 240;
const PAD = 36;
const G = 9.8;

export default function ProjectileMotion() {
  const [speed, setSpeed] = useState(25);
  const [angleDeg, setAngleDeg] = useState(45);

  const angle = (angleDeg * Math.PI) / 180;
  const vx = speed * Math.cos(angle);
  const vy = speed * Math.sin(angle);
  const tFlight = (2 * vy) / G;
  const range = vx * tFlight;
  const hMax = (vy * vy) / (2 * G);

  // Fixed world scale so changes are visually comparable
  const X_MAX = 130; // m
  const Y_MAX = 60; // m
  const xs = (x) => PAD + (x / X_MAX) * (W - PAD - 10);
  const ys = (y) => H - PAD - (y / Y_MAX) * (H - PAD - 12);

  const pts = [];
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * tFlight;
    const x = vx * t;
    const y = vy * t - 0.5 * G * t * t;
    pts.push(`${i === 0 ? "M" : "L"}${xs(x).toFixed(1)},${ys(Math.max(0, y)).toFixed(1)}`);
  }

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Projectile motion is two independent problems sharing a clock: constant velocity
        horizontally, free fall vertically. Change the launch speed and angle and watch
        range and height respond. Which angle gives maximum range?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Launch speed = <strong>{speed} m/s</strong>
          <input
            type="range" min="5" max="35" step="1" value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Launch angle = <strong>{angleDeg}°</strong>
          <input
            type="range" min="5" max="85" step="1" value={angleDeg}
            onChange={(e) => setAngleDeg(parseInt(e.target.value, 10))}
            className="w-full accent-amber-500 mt-1"
          />
        </label>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label="Projectile trajectory">
        {/* ground + y axis */}
        <line x1={PAD} y1={H - PAD} x2={W - 6} y2={H - PAD} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1.5" />
        <line x1={PAD} y1={10} x2={PAD} y2={H - PAD} className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" />
        {/* scale marks */}
        {[25, 50, 75, 100, 125].map((m) => (
          <g key={m}>
            <line x1={xs(m)} y1={H - PAD} x2={xs(m)} y2={H - PAD + 5} className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1" />
            <text x={xs(m)} y={H - PAD + 16} textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[9px]">{m} m</text>
          </g>
        ))}
        {[20, 40, 60].map((m) => (
          <text key={m} x={PAD - 5} y={ys(m) + 3} textAnchor="end" className="fill-zinc-500 dark:fill-zinc-400 text-[9px]">{m}</text>
        ))}
        {/* velocity components at launch */}
        <line x1={xs(0)} y1={ys(0)} x2={xs(vx * 0.8)} y2={ys(0)} className="stroke-emerald-500" strokeWidth="2" strokeDasharray="4 3" />
        <line x1={xs(0)} y1={ys(0)} x2={xs(0)} y2={ys(vy * 0.8)} className="stroke-amber-500" strokeWidth="2" strokeDasharray="4 3" />
        {/* trajectory */}
        <path d={pts.join(" ")} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
        {/* apex + landing markers */}
        <circle cx={xs(range / 2)} cy={ys(hMax)} r="3.5" className="fill-amber-500" />
        <circle cx={xs(range)} cy={ys(0)} r="3.5" className="fill-emerald-500" />
      </svg>

      <div className="grid grid-cols-3 gap-3 text-center mt-3 max-w-md mx-auto">
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Range</div>
          <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">{range.toFixed(1)} m</div>
        </div>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Max height</div>
          <div className="text-base font-bold text-amber-600 dark:text-amber-400">{hMax.toFixed(1)} m</div>
        </div>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Flight time</div>
          <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">{tFlight.toFixed(2)} s</div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        Try 30° vs 60° — same range! Complementary angles trade height for hang time.
        Maximum range sits exactly between them at 45° (with no air resistance).
      </p>
    </div>
  );
}
