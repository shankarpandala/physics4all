export const subject18 = {
  id: "multivariable-vector-calculus",
  number: 18,
  title: "Multivariable & Vector Calculus",
  description:
    "Calculus in three dimensions at MIT 18.02-level, with the div-grad-curl intuition of Schey's classic — the exact toolkit you need in hand before electromagnetism, because Gauss and Stokes ARE Maxwell's equations.",
  phase: 4,
  chapters: [
    {
      id: "functions-of-several-variables",
      title: "Functions of Several Variables",
      subtitle:
        "Partial derivatives, the gradient, and the multivariable chain rule",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Physical fields — temperature in a room, potential in space — depend on several variables at once, and this chapter extends calculus to handle them. The star is the gradient ∇f, the vector that points uphill and encodes how a field changes in every direction at once. You will meet it again almost immediately: the electric field is the (negative) gradient of the potential.</p>
<h3>Topics</h3>
<ul>
  <li>Partial derivatives</li>
  <li>The gradient</li>
  <li>Chain rule</li>
  <li>Differentials</li>
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
      id: "optimization-lagrange-multipliers",
      title: "Optimization & Lagrange Multipliers",
      subtitle:
        "Critical points and constrained optimization — a technique statistical mechanics will need again",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Finding extrema in several variables is a fundamental skill, and the method of Lagrange multipliers — optimizing under a constraint — is one of the most elegant tricks in mathematics. Learn it well now: it is exactly how statistical mechanics derives the Boltzmann distribution, by maximizing entropy subject to fixed energy.</p>
<h3>Topics</h3>
<ul>
  <li>Critical points</li>
  <li>Constrained optimization (needed again in stat mech)</li>
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
      id: "multiple-integrals",
      title: "Multiple Integrals",
      subtitle:
        "Double and triple integrals, Jacobians, and the coordinate systems physics lives in",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>To find the total charge in a volume or the mass of a solid body, you integrate over regions of space — and choosing the right coordinate system makes the difference between a nightmare and a three-line calculation. Cylindrical and spherical coordinates, with the Jacobian to convert between systems, are the working currency of every field calculation in electromagnetism and quantum mechanics.</p>
<h3>Topics</h3>
<ul>
  <li>Double & triple integrals</li>
  <li>Jacobians</li>
  <li>Cylindrical & spherical coordinates</li>
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
      id: "vector-fields",
      title: "Vector Fields",
      subtitle:
        "Line integrals, conservative fields, and flux through surfaces",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Vector fields — an arrow at every point in space — are how physics describes forces, flows, and electromagnetic fields. This chapter teaches the two great ways to integrate them: along curves (work) and through surfaces (flux). The idea that some fields are conservative, with a potential function behind them, explains why potential energy exists at all — and flux is the concept at the heart of Gauss's law.</p>
<h3>Topics</h3>
<ul>
  <li>Line integrals</li>
  <li>Conservative fields & potentials</li>
  <li>Surface integrals & flux</li>
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
      id: "the-big-theorems",
      title: "The Big Theorems",
      subtitle:
        "Green, Stokes, and divergence — the Maxwell-ready toolkit of div, grad, and curl",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The three great theorems of vector calculus relate what happens inside a region to what happens on its boundary — and they are not merely tools for electromagnetism, they essentially <em>are</em> electromagnetism: Maxwell's equations in integral and differential form are connected by exactly these theorems. Build genuine intuition for divergence (sources) and curl (circulation) here, and Maxwell's equations in the next two subjects will read like sentences instead of hieroglyphics.</p>
<h3>Topics</h3>
<ul>
  <li>Green's, Stokes', and the divergence theorem</li>
  <li>Div/grad/curl intuition — the Maxwell-ready toolkit</li>
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
