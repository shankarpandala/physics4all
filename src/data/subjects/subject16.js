export const subject16 = {
  id: "calculus-1-2",
  number: 16,
  title: "Calculus I & II",
  description:
    "Single-variable calculus at MIT 18.01-level (Stewart/Thomas depth) — derivatives, integrals, series, and first differential equations, arriving exactly one step ahead of the calculus-based mechanics that needs them.",
  phase: 4,
  chapters: [
    {
      id: "limits-derivatives",
      title: "Limits & Derivatives",
      subtitle:
        "Formal limits and the full differentiation toolkit, from the chain rule to related rates",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The derivative is the single most important idea in mathematical physics: it turns "how fast is this changing?" into something you can compute. This chapter makes limits precise and then builds the complete differentiation toolkit — the machinery you will use on day one of Classical Mechanics I, where velocity and acceleration become derivatives of position.</p>
<h3>Topics</h3>
<ul>
  <li>Formal limits</li>
  <li>Differentiation rules</li>
  <li>Chain rule</li>
  <li>Implicit differentiation</li>
  <li>Related rates</li>
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
      id: "applications-of-derivatives",
      title: "Applications of Derivatives",
      subtitle:
        "Using derivatives to optimize, approximate, and analyze the shape of functions",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Once you can differentiate, you can answer real questions: where is a quantity largest, how does a function behave near a point, and what happens in tricky limiting cases. Linearization in particular is the physicist's reflex — replacing a complicated function by its tangent line is how half of physics gets solved. These skills return constantly, from finding stable equilibria in energy diagrams to small-angle approximations in oscillations.</p>
<h3>Topics</h3>
<ul>
  <li>Optimization</li>
  <li>Linearization</li>
  <li>L'Hôpital</li>
  <li>Curve analysis</li>
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
      id: "integration",
      title: "Integration",
      subtitle:
        "The fundamental theorem and the full toolkit of integration techniques",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Integration is addition taken to its logical extreme — summing infinitely many infinitesimal pieces — and the fundamental theorem of calculus reveals it as the inverse of differentiation. This chapter builds fluency with the standard techniques, because in Electromagnetism I you will integrate charge distributions and in mechanics you will recover motion from acceleration. The ∫ symbol is about to become your most-used tool.</p>
<h3>Topics</h3>
<ul>
  <li>The fundamental theorem</li>
  <li>Substitution</li>
  <li>Integration by parts</li>
  <li>Partial fractions</li>
  <li>Trig integrals</li>
  <li>Improper integrals</li>
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
      id: "applications-of-integration",
      title: "Applications of Integration",
      subtitle:
        "Areas, volumes, arc length, work, and centre of mass — integrals doing physics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Here the integral stops being abstract and starts computing physical things: the volume of a solid, the work done by a varying force, the balance point of an extended body. The "slice, sum, take the limit" pattern you practice here is exactly how physicists set up integrals for the rest of the curriculum — from moments of inertia to field calculations.</p>
<h3>Topics</h3>
<ul>
  <li>Areas & volumes</li>
  <li>Arc length</li>
  <li>Work & centre of mass</li>
  <li>Average value</li>
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
      id: "infinite-series",
      title: "Infinite Series",
      subtitle:
        "Convergence, power series, and Taylor expansions — physics's favourite approximation tool",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Taylor series are arguably the most-used tool in all of theoretical physics: nearly every "approximately equals" you will ever see is a truncated series. This chapter teaches when infinite sums converge, how to expand any function into powers of x, and how to control the error you make by stopping early. Master this and moves like sin θ ≈ θ or the low-speed limit of relativity become second nature.</p>
<h3>Topics</h3>
<ul>
  <li>Convergence</li>
  <li>Power series</li>
  <li>Taylor & Maclaurin series</li>
  <li>Error bounds</li>
  <li>Series as physics's favourite tool</li>
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
      id: "intro-differential-equations",
      title: "Intro Differential Equations",
      subtitle:
        "First-order ODEs, exponential models, and direction fields — your first taste of physics's native language",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Newton's second law is a differential equation, so learning to solve simple ODEs is learning to read the laws of nature in their native language. This chapter covers separable and first-order linear equations and the exponential growth/decay models that describe everything from radioactive decay to RC circuits. It is the direct warm-up for terminal velocity — your first real ODE — in Classical Mechanics I.</p>
<h3>Topics</h3>
<ul>
  <li>Separable & first-order linear ODEs</li>
  <li>Exponential models</li>
  <li>Direction fields</li>
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
      id: "parametric-polar",
      title: "Parametric & Polar",
      subtitle:
        "Curves as functions of time, polar coordinates, and vector-valued motion",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Physical trajectories are naturally parametric — position as a function of time — and many problems (orbits especially) are far simpler in polar coordinates than Cartesian ones. This chapter connects calculus to geometry in motion, ending with vector-valued functions: the exact mathematical form kinematics takes in the very next subject.</p>
<h3>Topics</h3>
<ul>
  <li>Parametric curves</li>
  <li>Polar coordinates</li>
  <li>Vector-valued functions & motion</li>
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
