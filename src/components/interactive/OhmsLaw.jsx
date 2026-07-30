"use client";

import { useState } from "react";

export default function OhmsLaw() {
  const [voltage, setVoltage] = useState(6);
  const [resistance, setResistance] = useState(20);

  const current = voltage / resistance;
  const power = voltage * current;
  // Bulb glow: full brightness around 3 W
  const glow = Math.min(1, power / 3);

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Ohm&apos;s law in your hands: <strong>I = V ÷ R</strong>. Raise the voltage and the
        current (and brightness) rises with it; raise the resistance and the current is
        choked back. Watch how power P = V × I responds to both.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Voltage V = <strong>{voltage.toFixed(1)} V</strong>
          <input
            type="range" min="0" max="12" step="0.5" value={voltage}
            onChange={(e) => setVoltage(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Resistance R = <strong>{resistance} Ω</strong>
          <input
            type="range" min="5" max="100" step="1" value={resistance}
            onChange={(e) => setResistance(parseInt(e.target.value, 10))}
            className="w-full accent-amber-500 mt-1"
          />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <svg viewBox="0 0 260 150" className="w-full max-w-[300px]" role="img" aria-label="Simple circuit with battery, resistor, and bulb">
          {/* wires */}
          <path d="M40,120 L40,40 L110,40 M150,40 L220,40 L220,120 L150,120 M110,120 L40,120" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="2.5" />
          {/* battery */}
          <line x1="100" y1="105" x2="100" y2="135" className="stroke-zinc-600 dark:stroke-zinc-300" strokeWidth="3" />
          <line x1="112" y1="112" x2="112" y2="128" className="stroke-zinc-600 dark:stroke-zinc-300" strokeWidth="6" />
          <text x="106" y="98" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">{voltage.toFixed(1)} V</text>
          {/* resistor (zigzag) */}
          <path d="M110,40 l5,-8 l8,16 l8,-16 l8,16 l8,-8 l3,0" fill="none" className="stroke-amber-500" strokeWidth="2.5" />
          <text x="130" y="22" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[10px]">{resistance} Ω</text>
          {/* bulb */}
          <circle cx="220" cy="80" r="16" fill="#fbbf24" opacity={0.15 + glow * 0.85} />
          <circle cx="220" cy="80" r="16" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />
          <path d="M210,70 L230,90 M230,70 L210,90" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="1.5" />
          {glow > 0.55 && (
            <g className="stroke-amber-400" strokeWidth="1.5">
              <line x1="220" y1="56" x2="220" y2="48" />
              <line x1="220" y1="104" x2="220" y2="112" />
              <line x1="196" y1="80" x2="188" y2="80" />
              <line x1="244" y1="80" x2="252" y2="80" />
            </g>
          )}
          {/* current arrow */}
          <path d="M60,40 l-8,-5 l0,10 z" className="fill-emerald-500" />
          <text x="66" y="32" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">I</text>
        </svg>

        <div className="grid grid-cols-2 gap-3 text-center w-full max-w-[260px]">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Current</div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {current >= 0.1 ? current.toFixed(2) + " A" : (current * 1000).toFixed(0) + " mA"}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Power</div>
            <div className="text-lg font-bold text-amber-600 dark:text-amber-400">{power.toFixed(2)} W</div>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        Double V at fixed R and I doubles (direct proportion). Double R at fixed V and I
        halves (inverse proportion) — Subject 1&apos;s proportional reasoning, now electrified.
      </p>
    </div>
  );
}
