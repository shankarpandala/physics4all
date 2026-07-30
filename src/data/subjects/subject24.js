export const subject24 = {
  id: "classical-mechanics-2",
  number: 24,
  title: "Classical Mechanics II — Lagrangian & Hamiltonian",
  description:
    "Mechanics reborn from a single principle — least action. Lagrangians, Noether's theorem, rigid bodies, Hamiltonian phase space, and chaos, at the Taylor/Landau level.",
  phase: 5,
  chapters: [
    {
      id: "principle-of-least-action",
      title: "The Principle of Least Action",
      subtitle: "All of mechanics from one variational statement",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Nature extremizes action — and from that single statement all of Newtonian mechanics follows. Armed with the calculus of variations from Subject 23, you'll reformulate mechanics in generalized coordinates where constraints handle themselves.</p>
<h3>Topics</h3>
<ul>
  <li>The variational formulation</li>
  <li>Generalized coordinates</li>
  <li>Constraints</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "lagrangian-mechanics",
      title: "Lagrangian Mechanics",
      subtitle: "Euler–Lagrange in practice — problems Newton's laws make painful",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Write L = T − V, turn the crank, and equations of motion fall out — no force diagrams, no constraint forces. Cyclic coordinates hand you conservation laws for free, and effective potentials tame two-dimensional problems.</p>
<h3>Topics</h3>
<ul>
  <li>Euler–Lagrange in practice</li>
  <li>Cyclic coordinates</li>
  <li>Effective-potential problems</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "symmetry-and-conservation",
      title: "Symmetry & Conservation",
      subtitle: "Noether's theorem — why conservation laws exist at all",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Emmy Noether proved the deepest theorem in classical physics: every continuous symmetry implies a conservation law. Time symmetry gives energy, space symmetry gives momentum, rotational symmetry gives angular momentum. This idea organizes all of modern physics, from particle physics to cosmology.</p>
<h3>Topics</h3>
<ul>
  <li>Noether's theorem</li>
  <li>The deep meaning of conservation laws</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "central-forces-revisited",
      title: "Two-Body & Central Forces Revisited",
      subtitle: "Reduced mass, orbits, and the language of scattering",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The two-body problem collapses to one body with a reduced mass, and orbits follow elegantly. Then the setup inverts: instead of bound orbits, particles fly past and scatter — introducing the cross sections that nuclear and particle physics (Subject 31) measure daily.</p>
<h3>Topics</h3>
<ul>
  <li>Reduced mass</li>
  <li>Scattering</li>
  <li>Cross sections</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "rigid-body-motion",
      title: "Rigid-Body Motion",
      subtitle: "Euler angles, the inertia tensor, and why tops don't fall",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Real rotation is gloriously three-dimensional: the inertia tensor (your Subject 23 tensors at work), Euler's angles and equations, and the gyroscopic precession that keeps a spinning top upright and torque-free satellites tumbling predictably.</p>
<h3>Topics</h3>
<ul>
  <li>Euler angles</li>
  <li>The inertia tensor</li>
  <li>Euler's equations</li>
  <li>Tops &amp; precession</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "small-oscillations",
      title: "Small Oscillations",
      subtitle: "Normal modes as an eigenvalue problem — done right",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Every stable system oscillates harmonically near equilibrium. The normal-modes formalism diagonalizes the physics — literally: eigenvalues give frequencies, eigenvectors give mode shapes, and molecular vibration spectra follow.</p>
<h3>Topics</h3>
<ul>
  <li>The normal-modes formalism</li>
  <li>Molecular vibrations</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "hamiltonian-mechanics",
      title: "Hamiltonian Mechanics",
      subtitle: "Phase space, Poisson brackets, and the doorway to quantum mechanics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The Legendre transform trades velocities for momenta and reveals mechanics as flow in phase space. Poisson brackets, Liouville's theorem, and canonical transformations aren't just elegant — they are the exact classical skeleton onto which quantum mechanics grafts (Poisson brackets become commutators).</p>
<h3>Topics</h3>
<ul>
  <li>Legendre transform</li>
  <li>Phase space</li>
  <li>Poisson brackets</li>
  <li>Liouville's theorem</li>
  <li>Canonical transformations</li>
  <li>Hamilton–Jacobi glimpse</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "nonlinear-dynamics-chaos",
      title: "Nonlinear Dynamics & Chaos",
      subtitle: "Deterministic yet unpredictable — sensitivity and strange attractors",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Determinism does not imply predictability: tiny differences in initial conditions grow exponentially. The driven pendulum from Phase 4 returns as a gateway to attractors, bifurcations, and the modern science of chaos.</p>
<h3>Topics</h3>
<ul>
  <li>Sensitivity to initial conditions</li>
  <li>Attractors</li>
  <li>The driven pendulum revisited</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "classical-to-quantum-continuum",
      title: "From Classical to Quantum & Continuum",
      subtitle: "Action-angle variables, adiabatic invariants, and continuous media",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Two bridges out of particle mechanics: action-angle variables and adiabatic invariants (the historical route to quantization), and a taste of continuum mechanics — fluids and elasticity — where the Lagrangian idea extends to fields.</p>
<h3>Topics</h3>
<ul>
  <li>Action-angle variables &amp; adiabatic invariants</li>
  <li>Fluids &amp; elasticity taste</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
