# ⚛ Physics4All

**Relearn physics from class 1 to graduation — the way the world's best systems teach it.**

Physics4All is an interactive, structured learning web app for adults who want to (re)learn physics from absolute basics to advanced undergraduate level, **including every bit of mathematics needed along the way**. It is the sibling project of [learn-semi](https://github.com/shankarpandala/learn-semi) and follows the same architecture: a static Next.js + Tailwind PWA with progress tracking, quizzes, and a subject → chapter → section content model, deployed to GitHub Pages.

## The curriculum

The syllabus is not invented — it is synthesized from deep research into:

1. **How the strongest school systems teach physics, class 1–12** — Singapore, China, Russia, Japan, South Korea, Finland, Estonia, UK, Germany, India, plus IB and AP ([research report](docs/research/01-school-systems.md))
2. **How the best universities structure the physics degree** — MIT, Cambridge, Oxford, LMU Munich, the IITs, and the Russian Landau tradition, plus the canonical self-study roadmaps ('t Hooft, Rigetti, Susskind) ([research report](docs/research/02-university-programs.md))
3. **The complete math pathway physics requires** — from arithmetic to the Boas-level math-methods canon, with a full physics↔math dependency map ([research report](docs/research/03-math-pathway.md))

The result: **6 phases · 34 subjects · ~208 chapters · ~1,000 hours** — a three-pass spiral through school physics (phenomena → first quantitative tour → theory pass) followed by the universal university two-pass structure (general physics → the theoretical core four), with math subjects interleaved just-in-time, one step ahead of the physics that needs them.

➡ **[Read the full curriculum](docs/CURRICULUM.md)**

| Phase | Equivalent | Content |
|---|---|---|
| 1. Foundations | Classes 1–7 (compressed) | Numbers & proportion · all physics phenomena · scientific method |
| 2. The First Full Tour | Classes 8–10 | All of physics at one-formula depth + algebra & geometry |
| 3. Quantitative Physics | Classes 11–12 | The theory pass with vectors & trig + precalculus |
| 4. University General Physics | BSc years 1–2 | Calculus-based mechanics, E&M, waves, special relativity + calculus → linear algebra |
| 5. The Theoretical Core | BSc years 2–3 | Lagrangian mechanics · electrodynamics · quantum mechanics · statistical mechanics + math methods + computation |
| 6. Advanced & Frontier | BSc years 3–4 | Solid state · nuclear & particle · astro & cosmology · general relativity · QFT gateway |

## Tech (mirrors learn-semi)

- Next.js (static export) + React + Tailwind CSS
- Content as data: `src/data/curriculum.js` + one file per subject (chapters → sections → quizzes)
- Interactive physics simulations embedded per chapter
- Dark mode, sidebar navigation, localStorage progress tracking, PWA offline support
- GitHub Actions → GitHub Pages deployment

## Development

```bash
npm install
npm run dev    # local dev server
npm run build  # static export to ./out
```

Deployment: pushes to `main` trigger the GitHub Pages workflow (`.github/workflows/deploy.yml`), publishing the static export to the `gh-pages` branch. Enable GitHub Pages (source: `gh-pages` branch) in the repository settings after the first deploy.

## Status

**The curriculum is complete: all 34 subjects, 208 chapters, 884 sections and 1,015 quiz questions are written.**

- [x] Deep research: school systems, university programs, math pathway
- [x] Master curriculum (chapters & topics)
- [x] App scaffold (shell, navigation, data model, PWA, deploy workflow)
- [x] Phase 1 — Foundations (Subjects 1–3)
- [x] Phase 2 — The First Full Tour (Subjects 4–9)
- [x] Phase 3 — Quantitative Physics (Subjects 10–15)
- [x] Phase 4 — University General Physics (Subjects 16–22)
- [x] Phase 5 — The Theoretical Core (Subjects 23–29)
- [x] Phase 6 — Advanced & Frontier (Subjects 30–34)
- [x] Interactive simulations (7 labs)

### Interactive labs

| Lab | Lives in |
|---|---|
| Motion Graphs Explorer | Motion & Forces → Describing Motion |
| Wave Superposition Sandbox | Sound, Light & Optics → Wave Basics |
| Ohm's Law Circuit Lab | Electricity & Magnetism → Ohm's Law |
| Projectile Launcher | Mechanics → Kinematics in 1D & 2D |
| Resonance Lab | Classical Mechanics I → Oscillations in Depth |
| Fourier Series Builder | Waves, Vibrations & Optics → Fourier Analysis |
| Particle-in-a-Box Explorer | Quantum Mechanics I → One-Dimensional Problems |
| Ising Model (live phase transition) | Statistical Mechanics → Phase Transitions |

Future work: more simulations, KaTeX rendering for the advanced phases, and per-chapter problem sets with worked solutions.
