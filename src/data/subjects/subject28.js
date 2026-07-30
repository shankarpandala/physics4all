export const subject28 = {
  id: "statistical-mechanics",
  number: 28,
  title: "Thermodynamics & Statistical Mechanics",
  description:
    "The Schroeder-level statistical theory of heat: entropy as counting, partition functions, quantum statistics from electron gases to Bose–Einstein condensates, and phase transitions.",
  phase: 5,
  chapters: [
    {
      id: "first-law-revisited",
      title: "Energy & the First Law Revisited",
      subtitle: "Equilibrium, equipartition, and the microscopic ideal gas",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The thermal physics of Phase 3 returns with statistical foundations: what equilibrium really is, the ideal gas from molecular degrees of freedom, and the equipartition theorem that assigns ½kT to each — along with its famous failures that only quantum mechanics explains.</p>
<h3>Topics</h3>
<ul>
  <li>Equilibrium</li>
  <li>The ideal gas microscopically</li>
  <li>Equipartition</li>
  <li>Heat &amp; work</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "entropy-second-law",
      title: "Entropy & the Second Law",
      subtitle: "S = k log W — entropy as counting, temperature as a definition",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The most profound idea in the subject: entropy simply counts microstates, and the second law is just probability at astronomical odds. Your combinatorics and Stirling's formula from Subject 23 derive it, and temperature itself gets defined statistically — 1/T = ∂S/∂E.</p>
<h3>Topics</h3>
<ul>
  <li>Multiplicity &amp; combinatorics</li>
  <li>Boltzmann entropy</li>
  <li>Temperature defined statistically</li>
  <li>The third law</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "engines-free-energy",
      title: "Engines & Free Energy",
      subtitle: "Carnot's limit, thermodynamic potentials, and Maxwell relations",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Classical thermodynamics at full power: Carnot's absolute efficiency limit, the free energies that determine what happens at constant temperature and pressure, the Maxwell relations (partial-derivative identities doing real work), and the chemical potential that governs phase equilibria.</p>
<h3>Topics</h3>
<ul>
  <li>Carnot properly</li>
  <li>Thermodynamic potentials</li>
  <li>Maxwell relations</li>
  <li>Phase equilibria</li>
  <li>Chemical potential</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "boltzmann-statistics",
      title: "Boltzmann Statistics",
      subtitle: "The partition function — the machine that computes everything",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The canonical ensemble's Boltzmann factor e^(−E/kT) and its partition function Z form the central machine of statistical mechanics: differentiate Z correctly and any thermodynamic quantity drops out. Paramagnets, oscillators, and molecular gases put the machine to work.</p>
<h3>Topics</h3>
<ul>
  <li>The canonical ensemble</li>
  <li>Partition-function machinery</li>
  <li>Applications (paramagnets, oscillators, molecules)</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "quantum-statistics",
      title: "Quantum Statistics",
      subtitle: "Fermi–Dirac, Bose–Einstein, and blackbody radiation derived",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>When particles are identical (Subject 26), statistics change: Fermi–Dirac for fermions explains metals and white-dwarf stability; Bose–Einstein for bosons yields the Planck blackbody law — the formula that started quantum theory — plus Debye's solids and Bose–Einstein condensation.</p>
<h3>Topics</h3>
<ul>
  <li>The Gibbs factor</li>
  <li>Fermi–Dirac &amp; Bose–Einstein</li>
  <li>The electron gas</li>
  <li>Blackbody radiation derived</li>
  <li>Bose–Einstein condensation</li>
  <li>Debye solids</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "phase-transitions",
      title: "Phase Transitions & Critical Phenomena",
      subtitle: "The Ising model, universality, and the renormalization idea",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>How does short-range order produce sudden global change — boiling, magnetization, superconductivity? The Ising model and mean-field theory give the classic answers; universality and the renormalization group reveal why wildly different systems share identical critical behavior.</p>
<h3>Topics</h3>
<ul>
  <li>The Ising model</li>
  <li>Mean-field theory</li>
  <li>Universality</li>
  <li>The renormalization idea</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "transport-fluctuations",
      title: "Transport & Fluctuations",
      subtitle: "Random walks, Brownian motion, and fluctuation–dissipation",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Statistical mechanics away from equilibrium: random walks becoming diffusion, Einstein's Brownian-motion analysis (which finally proved atoms exist), and the fluctuation–dissipation idea linking spontaneous jiggling to friction.</p>
<h3>Topics</h3>
<ul>
  <li>Random walks &amp; diffusion</li>
  <li>Brownian motion</li>
  <li>Fluctuation–dissipation glimpse</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
