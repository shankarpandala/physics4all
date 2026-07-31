"use client";

import { useState } from "react";

const W = 560;
const H = 200;
const MID = H / 2;
const AMP = 70;

const TARGETS = {
  square: {
    label: "Square wave",
    coeff: (k) => (k % 2 === 1 ? 4 / (Math.PI * k) : 0),
    exact: (x) => (Math.sin(x) >= 0 ? 1 : -1),
  },
  sawtooth: {
    label: "Sawtooth",
    coeff: (k) => (2 / (Math.PI * k)) * (k % 2 === 1 ? 1 : -1),
    exact: (x) => {
      const t = ((x / (2 * Math.PI)) % 1 + 1) % 1;
      return 2 * t - 1;
    },
  },
  triangle: {
    label: "Triangle",
    coeff: (k) => (k % 2 === 1 ? (8 / (Math.PI * Math.PI * k * k)) * (((k - 1) / 2) % 2 === 0 ? 1 : -1) : 0),
    exact: (x) => {
      const t = ((x / (2 * Math.PI)) % 1 + 1) % 1;
      return t < 0.25 ? 4 * t : t < 0.75 ? 2 - 4 * t : 4 * t - 4;
    },
  },
};

export default function FourierBuilder() {
  const [nTerms, setNTerms] = useState(3);
  const [target, setTarget] = useState("square");

  const { coeff, exact, label } = TARGETS[target];

  const sumAt = (x) => {
    let y = 0;
    for (let k = 1; k <= nTerms; k++) y += coeff(k) * Math.sin(k * x);
    return y;
  };

  const path = (fn, scale = 1) => {
    const pts = [];
    for (let px = 0; px <= W; px += 2) {
      const x = (px / W) * 4 * Math.PI;
      pts.push(`${px === 0 ? "M" : "L"}${px},${(MID - fn(x) * AMP * scale).toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const activeHarmonics = [];
  for (let k = 1; k <= nTerms; k++) if (Math.abs(coeff(k)) > 1e-9) activeHarmonics.push(k);

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Fourier&apos;s astonishing claim: <strong>any</strong> periodic shape — even one with
        sharp corners — is a sum of smooth sine waves. Add harmonics one by one and watch
        the sum converge to the target.
      </p>

      <div className="flex flex-wrap items-end gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300 grow max-w-xs">
          Harmonics included: <strong>up to k = {nTerms}</strong> ({activeHarmonics.length} nonzero)
          <input
            type="range" min="1" max="29" step="1" value={nTerms}
            onChange={(e) => setNTerms(parseInt(e.target.value, 10))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <div className="flex gap-2">
          {Object.entries(TARGETS).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setTarget(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                target === key
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                  : "border-zinc-300 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label="Fourier series partial sum vs target wave">
        <line x1="0" y1={MID} x2={W} y2={MID} className="stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="1" />
        {/* target */}
        <path d={path(exact)} fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1.5" strokeDasharray="5 4" />
        {/* partial sum */}
        <path d={path(sumAt)} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div className="mt-3">
        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">
          Harmonic spectrum (amplitude of each sine)
        </div>
        <svg viewBox={`0 0 ${W} 70`} className="w-full rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" role="img" aria-label="Harmonic amplitude spectrum">
          {Array.from({ length: 29 }, (_, i) => i + 1).map((k) => {
            const a = Math.abs(coeff(k));
            const x = 14 + (k - 1) * ((W - 28) / 29);
            const h = Math.min(56, a * 42);
            const active = k <= nTerms && a > 1e-9;
            return (
              <rect
                key={k}
                x={x} y={62 - h} width="9" height={h}
                className={active ? "fill-indigo-500" : "fill-zinc-300 dark:fill-zinc-600"}
                rx="1.5"
              />
            );
          })}
        </svg>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        The dashed line is the target; solid is your sum. Sharp corners need many high
        harmonics — and the overshoot that refuses to die at the square wave&apos;s jumps is
        the famous Gibbs phenomenon. This decomposition is how equalizers, JPEG, and
        quantum mechanics all think about signals.
      </p>
    </div>
  );
}
