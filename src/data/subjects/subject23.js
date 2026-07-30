export const subject23 = {
  id: "mathematical-methods",
  number: 23,
  title: "Mathematical Methods for Physicists",
  description:
    "The Boas-level math-methods spine (with Riley/Hobson/Bence for depth) — complex analysis, variational calculus, PDEs, transforms, tensors, probability, and a first taste of group theory: every tool the theoretical core four will demand.",
  phase: 5,
  chapters: [
    {
      id: "complex-analysis",
      title: "Complex Analysis",
      subtitle:
        "Analytic functions, contour integration, and residues — magic that computes real integrals",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Functions of a complex variable are astonishingly well-behaved: differentiable once means differentiable forever, and integrals around closed contours are determined entirely by a few special points inside. The residue theorem turns impossible-looking real integrals into short exercises, and complex methods run beneath the surface of scattering theory, Green's functions, and quantum field theory.</p>
<h3>Topics</h3>
<ul>
  <li>Analytic functions</li>
  <li>Contour integration</li>
  <li>Residues</li>
  <li>Physical applications</li>
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
      id: "calculus-of-variations",
      title: "Calculus of Variations",
      subtitle:
        "Functionals and the Euler–Lagrange equation — the door to Lagrangian mechanics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Instead of asking "where is this function smallest?", the calculus of variations asks "which entire path makes this quantity smallest?" — and the Euler–Lagrange equation answers it. The brachistochrone (fastest descent curve) is the classic showcase, but the real reason this chapter sits here is timing: it is the door to Lagrangian mechanics, where all of classical physics is rewritten as a single optimization principle.</p>
<h3>Topics</h3>
<ul>
  <li>Functionals</li>
  <li>The Euler–Lagrange equation</li>
  <li>Brachistochrone</li>
  <li>Constraints — the door to Lagrangian mechanics</li>
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
      id: "partial-differential-equations",
      title: "Partial Differential Equations",
      subtitle:
        "Laplace, heat, and wave equations solved by separation of variables in every coordinate system",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The fundamental equations of physics — Laplace, heat, wave, Schrödinger — are partial differential equations, and separation of variables is the master technique for solving them. Practicing it in Cartesian, cylindrical, and spherical coordinates prepares you for the two flagship calculations ahead: boundary-value problems in electrodynamics and the hydrogen atom in quantum mechanics.</p>
<h3>Topics</h3>
<ul>
  <li>Laplace, heat, and wave equations</li>
  <li>Separation of variables in Cartesian, cylindrical, spherical coordinates</li>
  <li>Boundary-value problems</li>
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
      id: "special-functions",
      title: "Special Functions",
      subtitle:
        "Legendre, Bessel, Hermite, spherical harmonics, and the unifying Sturm–Liouville theory",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Separate variables in a round or spherical problem and special functions appear automatically: Legendre polynomials, Bessel functions, spherical harmonics. Far from being a zoo of formulas, they are unified by Sturm–Liouville theory — each family is an orthogonal basis, exactly like sines and cosines. Spherical harmonics in particular will label the shapes of atomic orbitals; Hermite polynomials will build the quantum oscillator.</p>
<h3>Topics</h3>
<ul>
  <li>Legendre & Bessel functions</li>
  <li>Hermite polynomials</li>
  <li>Spherical harmonics</li>
  <li>Sturm–Liouville theory & orthogonality</li>
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
      id: "fourier-integral-transforms",
      title: "Fourier & Integral Transforms",
      subtitle:
        "Fourier transforms, convolution, the Dirac delta, and Green's functions",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The Fourier transform extends Fourier series to non-periodic functions, translating between position and frequency descriptions of the same physics — the mathematical backbone of the quantum position–momentum relationship. Alongside it you meet the Dirac delta (the idealized point impulse), convolution, and Green's functions in full: solve for a point source once, superpose, and you have solved for every source.</p>
<h3>Topics</h3>
<ul>
  <li>Fourier transforms</li>
  <li>Convolution</li>
  <li>The Dirac delta</li>
  <li>Green's functions</li>
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
      id: "tensors-index-notation",
      title: "Tensors & Index Notation",
      subtitle:
        "Einstein summation, Kronecker delta, Levi-Civita, and the inertia tensor",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Index notation with the Einstein summation convention compresses pages of vector algebra into single lines — and the Kronecker delta and Levi-Civita symbols make identities like the double cross product almost mechanical. Tensors themselves, introduced here through the concrete inertia tensor of a rigid body, are the objects general relativity is written in; this chapter is where that language training begins.</p>
<h3>Topics</h3>
<ul>
  <li>Einstein summation</li>
  <li>Kronecker delta & Levi-Civita</li>
  <li>Cartesian tensors</li>
  <li>The inertia tensor</li>
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
      id: "probability-for-physics",
      title: "Probability for Physics",
      subtitle:
        "Distributions, the central limit theorem, random walks, and the stat-mech toolkit",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Statistical mechanics is applied probability, and this chapter assembles its toolkit: distributions, the central limit theorem (why the Gaussian appears everywhere), random walks, and the two workhorses of every partition-function calculation — Stirling's formula and Gaussian integrals. Entropy, temperature, and the arrow of time will all be built from the combinatorics you master here.</p>
<h3>Topics</h3>
<ul>
  <li>Distributions</li>
  <li>Central limit theorem</li>
  <li>Random walks</li>
  <li>Stirling's formula & Gaussian integrals — the stat-mech toolkit</li>
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
      id: "group-theory-primer",
      title: "Group Theory Primer",
      subtitle:
        "Symmetry groups, representations, and a first look at SO(3) and SU(2)",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Group theory is the mathematics of symmetry, and modern physics is organized around it: conservation laws, particle classifications, and selection rules all flow from symmetry groups and their representations. This primer introduces the key ideas gently, previewing the rotation groups SO(3) and SU(2) whose strange double-cover relationship is the mathematical origin of spin-½ — and whose bigger cousins classify the particles of the Standard Model.</p>
<h3>Topics</h3>
<ul>
  <li>Symmetry groups</li>
  <li>The representation idea</li>
  <li>Rotations, SO(3) and SU(2) preview</li>
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
