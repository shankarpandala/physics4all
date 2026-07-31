"use client";

import { useEffect, useRef, useState } from "react";

const N = 72; // lattice size
const TC = 2.269; // critical temperature (J/k units)

export default function IsingModel() {
  const canvasRef = useRef(null);
  const spinsRef = useRef(null);
  const [temp, setTemp] = useState(2.269);
  const [running, setRunning] = useState(true);
  const [mag, setMag] = useState(0);
  const tempRef = useRef(temp);
  const runningRef = useRef(running);
  tempRef.current = temp;
  runningRef.current = running;

  useEffect(() => {
    // init spins
    const spins = new Int8Array(N * N);
    for (let i = 0; i < spins.length; i++) spins[i] = Math.random() < 0.5 ? 1 : -1;
    spinsRef.current = spins;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(N, N);

    let raf;
    let frame = 0;
    const step = () => {
      const s = spinsRef.current;
      if (runningRef.current) {
        const beta = 1 / Math.max(0.05, tempRef.current);
        // one Monte Carlo sweep per frame
        for (let k = 0; k < N * N; k++) {
          const i = (Math.random() * N) | 0;
          const j = (Math.random() * N) | 0;
          const idx = i * N + j;
          const up = s[((i - 1 + N) % N) * N + j];
          const dn = s[((i + 1) % N) * N + j];
          const lf = s[i * N + ((j - 1 + N) % N)];
          const rt = s[i * N + ((j + 1) % N)];
          const dE = 2 * s[idx] * (up + dn + lf + rt);
          if (dE <= 0 || Math.random() < Math.exp(-beta * dE)) s[idx] = -s[idx];
        }
      }
      // draw
      for (let p = 0; p < N * N; p++) {
        const o = p * 4;
        if (s[p] === 1) {
          img.data[o] = 99; img.data[o + 1] = 102; img.data[o + 2] = 241; // indigo
        } else {
          img.data[o] = 245; img.data[o + 1] = 158; img.data[o + 2] = 11; // amber
        }
        img.data[o + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      if (++frame % 15 === 0) {
        let m = 0;
        for (let p = 0; p < N * N; p++) m += s[p];
        setMag(m / (N * N));
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const reheat = () => {
    const s = spinsRef.current;
    if (s) for (let i = 0; i < s.length; i++) s[i] = Math.random() < 0.5 ? 1 : -1;
  };

  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Each cell is a tiny magnet that only talks to its four neighbors — yet below the
        critical temperature T_c ≈ 2.27, the whole lattice spontaneously magnetizes.
        Drag the temperature through T_c and watch order emerge from local rules.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 items-end">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Temperature T = <strong>{temp.toFixed(2)}</strong> {temp < TC - 0.05 ? "(ordered phase)" : temp > TC + 0.05 ? "(disordered phase)" : "(critical!)"}
          <input
            type="range" min="1" max="4" step="0.01" value={temp}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 mt-1"
          />
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-colors"
          >
            {running ? "Pause" : "Run"}
          </button>
          <button
            onClick={reheat}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/30 transition-colors"
          >
            Randomize spins
          </button>
          <button
            onClick={() => setTemp(TC)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30 transition-colors"
          >
            Jump to T_c
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <canvas
          ref={canvasRef}
          width={N}
          height={N}
          className="w-full max-w-[320px] aspect-square rounded-md border border-zinc-200 dark:border-zinc-700 [image-rendering:pixelated]"
          aria-label="Ising model spin lattice"
        />
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 text-center min-w-[140px]">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Magnetization ⟨m⟩</div>
          <div className={`text-2xl font-bold ${Math.abs(mag) > 0.5 ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500 dark:text-zinc-400"}`}>
            {mag.toFixed(2)}
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all"
              style={{ width: `${Math.abs(mag) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
        This is the Metropolis algorithm from the Computational Physics subject running
        live. Near T_c, fluctuations appear at every size — the scale-free behavior
        behind universality and the renormalization group. Cool below T_c and the system
        picks one color at random: spontaneous symmetry breaking before your eyes.
      </p>
    </div>
  );
}
