export const subject25 = {
  id: "electrodynamics",
  number: 25,
  title: "Electrodynamics",
  description:
    "The full Griffiths-level theory of the electromagnetic field: boundary-value problems, fields in matter, complete Maxwell equations, radiation, and the relativistic formulation.",
  phase: 5,
  chapters: [
    {
      id: "electrostatics-redone",
      title: "Electrostatics Redone",
      subtitle: "Boundary-value problems — images, separation of variables, multipoles",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Electrostatics at full mathematical strength: Laplace's equation with your Subject 23 PDE toolkit, the sly method of images, separation of variables in spherical coordinates (hello, Legendre polynomials), and the multipole expansion that organizes any charge distribution.</p>
<h3>Topics</h3>
<ul>
  <li>Vector calculus at full strength</li>
  <li>Boundary-value problems</li>
  <li>Method of images</li>
  <li>Separation of variables</li>
  <li>Multipole expansion</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "fields-in-matter",
      title: "Fields in Matter",
      subtitle: "Polarization, magnetization, and the auxiliary fields D and H",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Real materials respond to fields: dielectrics polarize, magnetic materials magnetize. The auxiliary fields D and H keep the bookkeeping honest and explain everything from capacitor dielectrics to why iron is special.</p>
<h3>Topics</h3>
<ul>
  <li>Polarization &amp; the D field</li>
  <li>Dielectrics</li>
  <li>Magnetization &amp; the H field</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "magnetostatics-deepened",
      title: "Magnetostatics Deepened",
      subtitle: "The vector potential and magnetic multipoles",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The vector potential A steps out of the shadows — a calculational device here, but destined to become physically real in quantum mechanics (the Aharonov–Bohm effect of Subject 27) and fundamental in QFT.</p>
<h3>Topics</h3>
<ul>
  <li>The vector potential</li>
  <li>Magnetic multipoles</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "maxwell-equations",
      title: "Electrodynamics & Maxwell's Equations",
      subtitle: "The complete field equations, their conservation laws, and gauge freedom",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Displacement current completes Maxwell's equations, and the theory's inner accounting emerges: field energy, field momentum, the Poynting vector, and the stress tensor. Gauge freedom — seemingly a technicality — foreshadows the organizing principle of the Standard Model.</p>
<h3>Topics</h3>
<ul>
  <li>Maxwell's equations complete</li>
  <li>Gauge freedom</li>
  <li>Field energy &amp; momentum</li>
  <li>Poynting's theorem</li>
  <li>The stress tensor</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "em-waves",
      title: "EM Waves",
      subtitle: "Light in vacuum, matter, and conductors — dispersion to waveguides",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Maxwell's equations sing: waves in vacuum, refraction and dispersion in media, attenuation in conductors, the Fresnel coefficients governing reflection, and the guided waves inside waveguides and optical fibers.</p>
<h3>Topics</h3>
<ul>
  <li>Waves in vacuum, media, and conductors</li>
  <li>Dispersion</li>
  <li>Waveguides</li>
  <li>Reflection &amp; transmission (Fresnel)</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "potentials-and-radiation",
      title: "Potentials & Radiation",
      subtitle: "Retarded potentials and how accelerating charges shed light",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Causality enters through retarded potentials — fields today reflect charges as they were. Accelerating charges radiate: dipole radiation explains antennas and the blue sky, Larmor's formula counts the power, and synchrotron light powers modern materials science.</p>
<h3>Topics</h3>
<ul>
  <li>Retarded potentials</li>
  <li>Dipole radiation</li>
  <li>Antennas</li>
  <li>The Larmor formula</li>
  <li>Synchrotron &amp; bremsstrahlung glimpse</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "relativistic-electrodynamics",
      title: "Relativistic Electrodynamics",
      subtitle: "E and B unified in the field tensor",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The punchline of classical physics: electricity and magnetism are one field seen from different frames. The field tensor F^μν makes Maxwell's equations manifestly covariant — two tensor equations containing everything — and the fields of fast-moving charges follow by transformation.</p>
<h3>Topics</h3>
<ul>
  <li>The field tensor</li>
  <li>Covariant Maxwell equations</li>
  <li>Fields of moving charges</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
