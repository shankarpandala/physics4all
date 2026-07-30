export const phases = [
  {
    number: 1,
    title: "Foundations",
    description: "Seeing like a physicist — numbers, proportion, and every physics phenomenon qualitatively (classes 1–7, compressed for adults)",
    color: "phase-1",
    audienceLevel: "Complete Beginner",
  },
  {
    number: 2,
    title: "The First Full Tour",
    description: "All of physics once, at one-formula depth, plus the algebra to power it (classes 8–10, the Russian/Chinese model)",
    color: "phase-2",
    audienceLevel: "Beginner",
  },
  {
    number: 3,
    title: "Quantitative Physics",
    description: "The theory pass with vectors and trigonometry (classes 11–12; H2/A-level/NCERT/AP level)",
    color: "phase-3",
    audienceLevel: "Intermediate",
  },
  {
    number: 4,
    title: "University General Physics",
    description: "Calculus-based mechanics, electromagnetism, waves and special relativity (BSc years 1–2, the MIT 8.01→8.033 spine)",
    color: "phase-4",
    audienceLevel: "Intermediate",
  },
  {
    number: 5,
    title: "The Theoretical Core",
    description: "Lagrangian mechanics, electrodynamics, quantum mechanics, statistical mechanics — plus math methods and computation",
    color: "phase-5",
    audienceLevel: "Advanced",
  },
  {
    number: 6,
    title: "Advanced & Frontier",
    description: "Solid state, nuclear & particle, astrophysics & cosmology, general relativity, and the QFT gateway",
    color: "phase-6",
    audienceLevel: "Advanced",
  },
];

import { subject1 } from "./subjects/subject1";
import { subject2 } from "./subjects/subject2";
import { subject3 } from "./subjects/subject3";
import { subject4 } from "./subjects/subject4";
import { subject5 } from "./subjects/subject5";
import { subject6 } from "./subjects/subject6";
import { subject7 } from "./subjects/subject7";
import { subject8 } from "./subjects/subject8";
import { subject9 } from "./subjects/subject9";
import { subject10 } from "./subjects/subject10";
import { subject11 } from "./subjects/subject11";
import { subject12 } from "./subjects/subject12";
import { subject13 } from "./subjects/subject13";
import { subject14 } from "./subjects/subject14";
import { subject15 } from "./subjects/subject15";
import { subject16 } from "./subjects/subject16";
import { subject17 } from "./subjects/subject17";
import { subject18 } from "./subjects/subject18";
import { subject19 } from "./subjects/subject19";
import { subject20 } from "./subjects/subject20";
import { subject21 } from "./subjects/subject21";
import { subject22 } from "./subjects/subject22";
import { subject23 } from "./subjects/subject23";
import { subject24 } from "./subjects/subject24";
import { subject25 } from "./subjects/subject25";
import { subject26 } from "./subjects/subject26";
import { subject27 } from "./subjects/subject27";
import { subject28 } from "./subjects/subject28";
import { subject29 } from "./subjects/subject29";
import { subject30 } from "./subjects/subject30";
import { subject31 } from "./subjects/subject31";
import { subject32 } from "./subjects/subject32";
import { subject33 } from "./subjects/subject33";
import { subject34 } from "./subjects/subject34";

// Enrich subjects with display metadata (icon, color, difficulty, estimatedHours)
const SUBJECT_META = [
  { icon: '½', colorHex: '#6366f1', difficulty: 'beginner', estimatedHours: 25, shortName: 'Numbers' },
  { icon: '⚛', colorHex: '#8b5cf6', difficulty: 'beginner', estimatedHours: 20, shortName: 'Phenomena' },
  { icon: '🔬', colorHex: '#a855f7', difficulty: 'beginner', estimatedHours: 12, shortName: 'Method' },
  { icon: 'x²', colorHex: '#3b82f6', difficulty: 'beginner', estimatedHours: 35, shortName: 'Algebra' },
  { icon: 'F', colorHex: '#2563eb', difficulty: 'beginner', estimatedHours: 25, shortName: 'Motion' },
  { icon: '🌡', colorHex: '#0ea5e9', difficulty: 'beginner', estimatedHours: 15, shortName: 'Heat' },
  { icon: '💡', colorHex: '#06b6d4', difficulty: 'beginner', estimatedHours: 18, shortName: 'Light' },
  { icon: '⚡', colorHex: '#0891b2', difficulty: 'beginner', estimatedHours: 22, shortName: 'Electricity' },
  { icon: '☢', colorHex: '#0e7490', difficulty: 'beginner', estimatedHours: 12, shortName: 'Atoms' },
  { icon: 'sin', colorHex: '#f59e0b', difficulty: 'intermediate', estimatedHours: 40, shortName: 'Precalc' },
  { icon: '→', colorHex: '#d97706', difficulty: 'intermediate', estimatedHours: 35, shortName: 'Mechanics' },
  { icon: 'PV', colorHex: '#b45309', difficulty: 'intermediate', estimatedHours: 18, shortName: 'Thermal' },
  { icon: 'λ', colorHex: '#eab308', difficulty: 'intermediate', estimatedHours: 20, shortName: 'Waves' },
  { icon: 'E', colorHex: '#ca8a04', difficulty: 'intermediate', estimatedHours: 30, shortName: 'Fields' },
  { icon: 'hν', colorHex: '#a16207', difficulty: 'intermediate', estimatedHours: 20, shortName: 'Modern' },
  { icon: '∫', colorHex: '#ef4444', difficulty: 'intermediate', estimatedHours: 50, shortName: 'Calculus' },
  { icon: 'ma', colorHex: '#dc2626', difficulty: 'intermediate', estimatedHours: 40, shortName: 'Mechanics I' },
  { icon: '∇', colorHex: '#b91c1c', difficulty: 'intermediate', estimatedHours: 40, shortName: 'Vector Calc' },
  { icon: '∮', colorHex: '#f97316', difficulty: 'intermediate', estimatedHours: 35, shortName: 'E&M I' },
  { icon: 'ω', colorHex: '#ea580c', difficulty: 'intermediate', estimatedHours: 30, shortName: 'Waves II' },
  { icon: 'c', colorHex: '#c2410c', difficulty: 'intermediate', estimatedHours: 18, shortName: 'Relativity' },
  { icon: 'Ax', colorHex: '#9a3412', difficulty: 'intermediate', estimatedHours: 45, shortName: 'DE & LinAlg' },
  { icon: 'ℂ', colorHex: '#10b981', difficulty: 'advanced', estimatedHours: 45, shortName: 'Math Methods' },
  { icon: 'ℒ', colorHex: '#059669', difficulty: 'advanced', estimatedHours: 35, shortName: 'Lagrangian' },
  { icon: '∇×', colorHex: '#047857', difficulty: 'advanced', estimatedHours: 40, shortName: 'Electrodynamics' },
  { icon: 'ψ', colorHex: '#14b8a6', difficulty: 'advanced', estimatedHours: 40, shortName: 'Quantum I' },
  { icon: '⟨ ⟩', colorHex: '#0d9488', difficulty: 'advanced', estimatedHours: 35, shortName: 'Quantum II' },
  { icon: 'S', colorHex: '#0f766e', difficulty: 'advanced', estimatedHours: 35, shortName: 'Stat Mech' },
  { icon: '>_', colorHex: '#115e59', difficulty: 'advanced', estimatedHours: 25, shortName: 'Computation' },
  { icon: 'Si', colorHex: '#a855f7', difficulty: 'advanced', estimatedHours: 30, shortName: 'Solid State' },
  { icon: 'q', colorHex: '#9333ea', difficulty: 'advanced', estimatedHours: 28, shortName: 'Particles' },
  { icon: '★', colorHex: '#7e22ce', difficulty: 'advanced', estimatedHours: 28, shortName: 'Astro' },
  { icon: 'g', colorHex: '#6b21a8', difficulty: 'advanced', estimatedHours: 35, shortName: 'GR' },
  { icon: 'φ', colorHex: '#581c87', difficulty: 'advanced', estimatedHours: 25, shortName: 'QFT' },
];

const rawSubjects = [
  subject1, subject2, subject3, subject4, subject5, subject6,
  subject7, subject8, subject9, subject10, subject11, subject12,
  subject13, subject14, subject15, subject16, subject17, subject18,
  subject19, subject20, subject21, subject22, subject23, subject24,
  subject25, subject26, subject27, subject28, subject29, subject30,
  subject31, subject32, subject33, subject34,
];

export const subjects = rawSubjects.map((s, i) => ({
  ...s,
  ...SUBJECT_META[i],
}));

export function getSubjectSectionCount(subjectId) {
  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) return 0;
  return subject.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
}

export function getSubject(id) {
  return subjects.find((s) => s.id === id);
}

export function getChapter(subjectId, chapterId) {
  const subject = getSubject(subjectId);
  return subject?.chapters.find((c) => c.id === chapterId);
}

export function getPhaseForSubject(subject) {
  return phases[subject.phase - 1];
}

export function getSubjectsForPhase(phaseNumber) {
  return subjects.filter((s) => s.phase === phaseNumber);
}

export function getNextChapter(subjectId, chapterId) {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  const chapterIndex = subject.chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex < subject.chapters.length - 1) {
    return { subjectId, chapterId: subject.chapters[chapterIndex + 1].id };
  }
  const subjectIndex = subjects.findIndex((s) => s.id === subjectId);
  if (subjectIndex < subjects.length - 1) {
    const nextSubject = subjects[subjectIndex + 1];
    return { subjectId: nextSubject.id, chapterId: nextSubject.chapters[0].id };
  }
  return null;
}

export function getPrevChapter(subjectId, chapterId) {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  const chapterIndex = subject.chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex > 0) {
    return { subjectId, chapterId: subject.chapters[chapterIndex - 1].id };
  }
  const subjectIndex = subjects.findIndex((s) => s.id === subjectId);
  if (subjectIndex > 0) {
    const prevSubject = subjects[subjectIndex - 1];
    return { subjectId: prevSubject.id, chapterId: prevSubject.chapters[prevSubject.chapters.length - 1].id };
  }
  return null;
}
