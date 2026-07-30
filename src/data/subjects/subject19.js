export const subject19 = {
  id: "electromagnetism-1",
  number: 19,
  title: "Electromagnetism I",
  description:
    "Calculus-based electricity and magnetism from MIT 8.02 up to Purcell & Morin level — from Gauss's law to the full set of Maxwell's equations and the stunning conclusion that light is an electromagnetic wave.",
  phase: 4,
  chapters: [
    {
      id: "electrostatics-with-calculus",
      title: "Electrostatics with Calculus",
      subtitle:
        "From Coulomb's law to continuous charge distributions and the power of Gauss's law",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Armed with integrals, you can now compute the field of any charge distribution — rings, disks, planes, spheres — not just point charges. Then Gauss's law arrives and shows that symmetry can replace pages of integration with a single line: this is the first of Maxwell's equations, and your vector-calculus investment starts paying dividends immediately.</p>
<h3>Topics</h3>
<ul>
  <li>Coulomb → fields of continuous charge distributions</li>
  <li>Gauss's law & its applications</li>
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
      id: "potential-theory",
      title: "Potential Theory",
      subtitle:
        "Moving between field and potential, energy of charge configurations, and conductors",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The scalar potential V is often far easier to work with than the vector field E — and the gradient connects them in both directions. This chapter builds fluency in switching representations, computes the energy stored in arrangements of charge, and explains the special behaviour of conductors, where charge rearranges itself to make the interior field vanish.</p>
<h3>Topics</h3>
<ul>
  <li>V from E and E from V</li>
  <li>Energy of charge configurations</li>
  <li>Conductors</li>
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
      id: "capacitors-dielectrics",
      title: "Capacitors & Dielectrics",
      subtitle:
        "Computing capacitance, energy stored in fields, and what dielectrics do microscopically",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Capacitors are where field theory meets hardware — and the deeper lesson of this chapter is that the energy is stored not in the charges but in the field itself, an idea that becomes central to all of physics. You will calculate capacitance from geometry and understand microscopically how a dielectric's polarized molecules boost it.</p>
<h3>Topics</h3>
<ul>
  <li>Capacitance calculations</li>
  <li>Energy stored in fields</li>
  <li>Dielectrics microscopically</li>
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
      id: "current-dc-circuits",
      title: "Current & DC Circuits",
      subtitle:
        "Current density, the microscopic view of Ohm's law, and RC circuits as differential equations",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Ohm's law gets its microscopic explanation — electrons drifting through a lattice under an applied field — turning V = IR from an empirical rule into derived physics. Then RC circuits become your differential equations in action: charging and discharging follow exponentials you can now predict, not just observe.</p>
<h3>Topics</h3>
<ul>
  <li>Current density</li>
  <li>Microscopic Ohm's law</li>
  <li>RC circuits as ODEs</li>
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
      id: "magnetostatics",
      title: "Magnetostatics",
      subtitle:
        "Biot–Savart, Ampère's law, and the fields of steady currents",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Steady currents create magnetic fields, and this chapter gives you two ways to compute them: Biot–Savart for brute-force integration and Ampère's law for elegant symmetry arguments — the magnetic mirror image of Coulomb versus Gauss. Magnetic dipoles introduced here are the key to understanding magnetism in matter, from compass needles to MRI machines.</p>
<h3>Topics</h3>
<ul>
  <li>Biot–Savart</li>
  <li>Ampère's law</li>
  <li>Magnetic dipoles</li>
  <li>Magnetism in matter intro</li>
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
      id: "induction-inductance",
      title: "Induction & Inductance",
      subtitle:
        "Faraday's law properly, inductors, and LR/LC/RLC circuits as differential equations",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Faraday's law — changing magnetic flux creates electric fields — is the principle behind every generator and transformer on Earth, and here it gets its full integral-calculus treatment. LC and RLC circuits then reveal something beautiful: the equations are <em>identical</em> to the mechanical oscillators of Classical Mechanics I, with charge sloshing instead of mass — the same mathematics describing wholly different physics.</p>
<h3>Topics</h3>
<ul>
  <li>Faraday's law in integral form</li>
  <li>Inductors</li>
  <li>LR, LC, RLC circuits as ODEs</li>
  <li>Energy in magnetic fields</li>
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
      id: "maxwells-equations-light",
      title: "Maxwell's Equations & Light",
      subtitle:
        "The complete set of equations, the wave solution, and the discovery that light is electromagnetic",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Maxwell noticed that Ampère's law was incomplete, added the displacement current, and the closed set of four equations then predicted waves travelling at exactly the measured speed of light — the greatest unification in the history of physics. In this capstone chapter you follow that derivation yourself and meet the Poynting vector, which tracks where electromagnetic energy flows. Everything from radio to gamma rays falls out of four lines of vector calculus.</p>
<h3>Topics</h3>
<ul>
  <li>Displacement current</li>
  <li>The complete set</li>
  <li>The wave solution</li>
  <li>The EM spectrum revisited</li>
  <li>Energy flow & Poynting intro</li>
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
