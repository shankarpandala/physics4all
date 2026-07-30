export const subject22 = {
  id: "differential-equations-linear-algebra",
  number: 22,
  title: "Differential Equations & Linear Algebra",
  description:
    "The MIT 18.03 + 18.06 (Strang) pair in one subject — second-order ODEs, eigenvalue problems, and inner-product spaces, timed so that linear algebra lands immediately before the quantum formalism that is built on it.",
  phase: 4,
  chapters: [
    {
      id: "second-order-odes",
      title: "Second-Order ODEs",
      subtitle:
        "Constant-coefficient linear equations and the mathematics behind resonance",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Second-order linear ODEs are the equations of oscillation, and here you learn to solve them completely and systematically. Every damped, driven oscillator you met in mechanics and every RLC circuit from electromagnetism is a special case — and resonance, treated mathematically at last, explains precisely when and why a driven system's response blows up.</p>
<h3>Topics</h3>
<ul>
  <li>Linear ODEs with constant coefficients</li>
  <li>Oscillator applications</li>
  <li>Resonance, mathematically</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "systems-of-odes-phase-portraits",
      title: "Systems of ODEs & Phase Portraits",
      subtitle:
        "Coupled equations, eigen-analysis, and reading stability from phase portraits",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Real systems have many interacting variables, so their equations of motion couple together — and eigenvalues are what untangle them. This chapter teaches you to analyze systems of ODEs, draw phase portraits, and classify equilibria by stability at a glance. These are the exact tools behind normal modes, chaos theory in Classical Mechanics II, and dynamical systems everywhere from ecology to engineering.</p>
<h3>Topics</h3>
<ul>
  <li>Coupled systems</li>
  <li>Eigen-analysis of systems</li>
  <li>Stability</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "laplace-transforms-greens-function-idea",
      title: "Laplace Transforms & Green's-Function Idea",
      subtitle:
        "Transform methods and the impulse-response way of thinking",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Transform methods convert differential equations into algebra: solve, transform back, done. Beyond the technique, this chapter plants a deep idea — characterize a system by its response to a single sharp kick (the impulse response), and you can build its response to anything by superposition. That Green's-function way of thinking recurs in electrodynamics, quantum mechanics, and field theory.</p>
<h3>Topics</h3>
<ul>
  <li>Transform methods</li>
  <li>Impulse response</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "linear-algebra-core",
      title: "Linear Algebra Core",
      subtitle:
        "Vector spaces, bases, and matrices as transformations",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Linear algebra is the language quantum mechanics is written in, and this chapter builds it properly: vector spaces as abstract structures, bases as coordinate choices, and matrices as transformations rather than grids of numbers. When quantum mechanics declares that "states are vectors," everything you learn here is what makes that sentence meaningful.</p>
<h3>Topics</h3>
<ul>
  <li>Vector spaces</li>
  <li>Linear independence & bases</li>
  <li>Matrices as transformations</li>
  <li>Determinants</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "eigenvalues-diagonalization",
      title: "Eigenvalues & Diagonalization",
      subtitle:
        "Eigenproblems, Hermitian matrices, and normal modes seen through new eyes",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Eigenvectors are the directions a transformation merely stretches, and finding them — diagonalization — is the single most useful computation in applied mathematics. Symmetric and Hermitian matrices, with their real eigenvalues and orthogonal eigenvectors, are precisely the mathematical objects quantum mechanics will use to represent observables; the normal modes you found by physical intuition in the waves course reappear here as a clean eigenproblem.</p>
<h3>Topics</h3>
<ul>
  <li>Eigenproblems</li>
  <li>Symmetric/Hermitian matrices</li>
  <li>Quadratic forms</li>
  <li>Normal modes revisited</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "inner-product-spaces",
      title: "Inner-Product Spaces",
      subtitle:
        "Orthogonality, projections, and function spaces — the quantum-ready chapter",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The dot product generalizes into the inner product, bringing geometry — lengths, angles, orthogonality — to abstract vector spaces, including spaces whose "vectors" are functions. The stunning payoff: Fourier series is just projection onto an orthogonal basis of sines and cosines. This is the quantum-ready chapter — wavefunctions live in exactly such a space, and expansion in eigenstates is exactly this projection.</p>
<h3>Topics</h3>
<ul>
  <li>Orthogonality</li>
  <li>Projections</li>
  <li>Gram–Schmidt</li>
  <li>Function spaces & Fourier as linear algebra — the quantum-ready chapter</li>
</ul>
<div class="key-concept">
  <h4>Status</h4>
  <p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p>
</div>`,
        },
      ],
      quiz: [],
    },
  ],
};
