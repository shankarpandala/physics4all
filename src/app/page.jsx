"use client";

import { useState, useEffect } from "react";
import { phases, subjects, getSubjectSectionCount } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import SubjectCard from "@/components/SubjectCard";

const PHASE_COLORS = {
  1: "#8b5cf6",
  2: "#0ea5e9",
  3: "#f59e0b",
  4: "#ef4444",
  5: "#10b981",
  6: "#a855f7",
};

const LEARNING_PATH = [
  {
    step: 1,
    title: "Foundations",
    subjects: ["Numbers & Proportion", "The Phenomena of Physics", "Thinking Like a Physicist"],
    color: "#8b5cf6",
  },
  {
    step: 2,
    title: "First Full Tour",
    subjects: ["Algebra & Geometry", "Motion & Forces", "Heat", "Sound & Light", "Electricity & Magnetism", "Atoms & Nuclei"],
    color: "#0ea5e9",
  },
  {
    step: 3,
    title: "Quantitative Physics",
    subjects: ["Precalculus & Vectors", "Mechanics", "Thermal", "Waves & Optics", "Fields & Circuits", "Modern Physics"],
    color: "#f59e0b",
  },
  {
    step: 4,
    title: "University Physics",
    subjects: ["Calculus I–II", "Classical Mechanics", "Vector Calculus", "Electromagnetism", "Waves & Vibrations", "Special Relativity", "DE & Linear Algebra"],
    color: "#ef4444",
  },
  {
    step: 5,
    title: "Theoretical Core",
    subjects: ["Math Methods", "Lagrangian Mechanics", "Electrodynamics", "Quantum I & II", "Statistical Mechanics", "Computation"],
    color: "#10b981",
  },
  {
    step: 6,
    title: "Advanced & Frontier",
    subjects: ["Solid State", "Nuclear & Particles", "Astro & Cosmology", "General Relativity", "Quantum Fields"],
    color: "#a855f7",
  },
];

export default function HomePage() {
  const [sectionProgress, setSectionProgress] = useState({});

  useEffect(() => {
    const progress = getProgress();
    const sp = {};
    subjects.forEach((s) => {
      const completed = progress.completedChapters[s.id]?.length || 0;
      // Use chapter completion as proxy for section completion
      sp[s.id] = { completed, total: getSubjectSectionCount(s.id) };
    });
    setSectionProgress(sp);
  }, []);

  const totalChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0);
  const totalHours = subjects.reduce((sum, s) => sum + (s.estimatedHours || 0), 0);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 px-6 py-20 md:py-28 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20 -mx-6 -mt-8 lg:-mx-12 lg:-mt-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Relearn Physics from{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              Class 1 to Graduation
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A research-backed learning path built from how the world&apos;s best
            physics-education systems teach — from counting and everyday phenomena
            all the way to quantum mechanics and general relativity, with every bit
            of math you need woven in along the way.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {[
              { value: "6", label: "Phases" },
              { value: `${subjects.length}`, label: "Subjects" },
              { value: `${totalChapters}`, label: "Chapters" },
              { value: `~${totalHours}h`, label: "of Learning" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 backdrop-blur dark:border-gray-700 dark:bg-gray-800/60"
              >
                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {value}
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#subjects"
              className="rounded-xl bg-indigo-600 px-7 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Start Learning →
            </a>
            <a
              href="https://github.com/shankarpandala/physics4all/blob/main/docs/CURRICULUM.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Read the Research
            </a>
          </div>
        </div>
      </section>

      {/* ── Recommended Learning Path ── */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50 -mx-6 lg:-mx-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              The Six-Phase Journey
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              A three-pass spiral through school physics, then the university
              two-pass structure — math always one step ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_PATH.map((phase) => (
              <div
                key={phase.step}
                className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.step}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  {phase.title}
                </h3>
                <ul className="space-y-1">
                  {phase.subjects.map((s) => (
                    <li key={s} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: phase.color }}
                        aria-hidden="true"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Subjects by Phase ── */}
      <section id="subjects" className="px-6 py-16 -mx-6 lg:-mx-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              All Subjects
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {subjects.length} subjects from first principles to the frontier of physics.
            </p>
          </div>

          {phases.map((phase) => {
            const phaseSubjects = subjects.filter((s) => s.phase === phase.number);
            return (
              <div key={phase.number} className="mb-14 last:mb-0">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: PHASE_COLORS[phase.number] }}
                  >
                    {phase.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {phaseSubjects.map((subject) => {
                    const sp = sectionProgress[subject.id] || { completed: 0, total: 0 };
                    return (
                      <SubjectCard
                        key={subject.id}
                        subject={subject}
                        completedCount={sp.completed}
                        totalCount={sp.total}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50 -mx-6 lg:-mx-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Built on Research, Not Guesswork
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            The curriculum was synthesized from how the strongest physics-education
            systems teach (Singapore, Russia, China, Japan, Finland, the UK, Germany,
            India and more), how the best universities structure the physics degree
            (MIT, Cambridge, Oxford, the IITs, the Landau school), and the complete
            mathematics pathway physics requires. Phenomena come before formalism,
            math arrives just-in-time, and every chapter ends with a knowledge check.
            Designed for adults: diagnostics let you skip what you already know.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "No Prerequisites",
              "All Math Included",
              "Spiral Curriculum",
              "Knowledge Quizzes",
              "Progress Tracking",
              "Research-Backed",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800/60 dark:bg-indigo-900/20 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
