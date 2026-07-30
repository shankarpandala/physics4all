export const subject26 = {
  id: "quantum-mechanics-1",
  number: 26,
  title: "Quantum Mechanics I",
  description:
    "The Griffiths-level first course: wavefunctions and the Schrödinger equation, the classic 1D problems, the Dirac formalism, the hydrogen atom, spin, and identical particles.",
  phase: 5,
  chapters: [
    {
      id: "why-quantum",
      title: "Why Quantum",
      subtitle: "The experimental failures that forced a new physics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Before the formalism, the evidence: blackbody radiation, the photoelectric effect, atomic spectra, and electron diffraction each broke classical physics in a specific way. Understanding exactly what failed makes the strange postulates ahead feel inevitable rather than arbitrary.</p>
<h3>Topics</h3>
<ul>
  <li>The failures of classical physics</li>
  <li>The experiments that forced the theory</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "wavefunction-schrodinger",
      title: "The Wavefunction & Schrödinger Equation",
      subtitle: "ψ, probability, and the equation that runs the microworld",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The state of a particle is a complex-valued wavefunction whose square is a probability density — Born's rule. The Schrödinger equation (a PDE your Subject 23 methods handle) evolves it deterministically. Operators, expectation values, and normalization set up the machinery.</p>
<h3>Topics</h3>
<ul>
  <li>Probability interpretation</li>
  <li>Normalization</li>
  <li>Expectation values</li>
  <li>Operators intro</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "one-dimensional-problems",
      title: "One-Dimensional Problems",
      subtitle: "Wells, barriers, tunnelling, and the harmonic oscillator",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The exactly-solvable classics: infinite and finite wells (energy quantization appears!), tunnelling through barriers (how the sun fuses and flash memory writes), the harmonic oscillator solved twice — analytically and with the elegant ladder operators — and wave packets for free particles.</p>
<h3>Topics</h3>
<ul>
  <li>Infinite &amp; finite wells</li>
  <li>Tunnelling</li>
  <li>Scattering off steps &amp; barriers</li>
  <li>The harmonic oscillator (analytic + ladder operators)</li>
  <li>Free particles &amp; wave packets</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "the-formalism",
      title: "The Formalism",
      subtitle: "Hilbert space, Dirac notation, and measurement — quantum mechanics as linear algebra",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The conceptual core: states are vectors in Hilbert space, observables are Hermitian operators, measurement yields eigenvalues — your Subject 22 linear algebra was all preparation for this chapter. The uncertainty principle stops being folklore and becomes a theorem.</p>
<h3>Topics</h3>
<ul>
  <li>Hilbert space</li>
  <li>Dirac notation</li>
  <li>Hermitian operators &amp; observables</li>
  <li>Eigenvalues &amp; eigenstates</li>
  <li>The uncertainty principle derived</li>
  <li>Time evolution</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "qm-in-three-dimensions",
      title: "QM in Three Dimensions",
      subtitle: "The hydrogen atom — quantum mechanics's greatest exact triumph",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Separation of variables in spherical coordinates (spherical harmonics from Subject 23 return) cracks the hydrogen atom exactly: the quantum numbers n, l, m emerge naturally and the spectrum Bohr guessed is derived. This is the calculation that convinced physics quantum mechanics was true.</p>
<h3>Topics</h3>
<ul>
  <li>Separation in spherical coordinates</li>
  <li>The hydrogen atom</li>
  <li>Quantum numbers</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "angular-momentum-and-spin",
      title: "Angular Momentum & Spin",
      subtitle: "Ladder algebra and the two-valued mystery of spin-½",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Angular momentum in quantum mechanics comes quantized, and the ladder-operator algebra derives it all from commutators alone. Then spin: an intrinsic angular momentum with no classical analog, revealed by Stern–Gerlach, described by two-component spinors — the qubit of quantum computing.</p>
<h3>Topics</h3>
<ul>
  <li>L operators &amp; ladder algebra</li>
  <li>Spin-½</li>
  <li>Stern–Gerlach</li>
  <li>Addition of angular momenta intro</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "identical-particles",
      title: "Identical Particles",
      subtitle: "Bosons, fermions, and why chemistry exists",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Identical quantum particles are radically identical — swapping them changes nothing observable, which splits the world into bosons and fermions. The Pauli exclusion principle follows, and with it the shell structure of atoms: the periodic table, and hence chemistry, explained from symmetry.</p>
<h3>Topics</h3>
<ul>
  <li>Bosons &amp; fermions</li>
  <li>The Pauli principle</li>
  <li>The periodic table explained</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
