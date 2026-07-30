export const subject29 = {
  id: "computational-physics",
  number: 29,
  title: "Computational Physics",
  description:
    "Physics's third pillar alongside theory and experiment: simulate motion, chaos, quantum wavefunctions, and the Ising model in Python — and analyze data like an experimentalist.",
  phase: 5,
  chapters: [
    {
      id: "tools",
      title: "Tools",
      subtitle: "Python, NumPy, and plotting — the working physicist's stack",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The modern physicist's laboratory is often a laptop. Set up Python with NumPy for fast arrays, Matplotlib for publication-quality plots, and notebooks for reproducible explorations — the stack used from undergraduate labs to LIGO.</p>
<h3>Topics</h3>
<ul>
  <li>Python &amp; NumPy for physics</li>
  <li>Plotting</li>
  <li>Notebooks</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "solving-motion-numerically",
      title: "Solving Motion Numerically",
      subtitle: "From Euler to RK4 — drag, chaos, and N-body orbits",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Most differential equations have no closed-form solution; numerics doesn't care. Build up from Euler's method to RK4, then simulate what analytic methods can't touch: projectiles with realistic drag, the chaotic double pendulum, and gravitational N-body systems.</p>
<h3>Topics</h3>
<ul>
  <li>Euler → RK4</li>
  <li>Projectile with drag</li>
  <li>The double pendulum (chaos)</li>
  <li>N-body orbits</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "monte-carlo-methods",
      title: "Monte Carlo Methods",
      subtitle: "Random numbers as a computational superpower",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Randomness computes: Monte Carlo integration beats deterministic methods in high dimensions, and the Metropolis algorithm brings Subject 28's Ising model to life on screen — watching magnetization emerge and critical fluctuations diverge.</p>
<h3>Topics</h3>
<ul>
  <li>Random numbers</li>
  <li>Monte Carlo integration</li>
  <li>Simulating the Ising model</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "pdes-waves-numerically",
      title: "PDEs & Waves Numerically",
      subtitle: "Heat, waves, Laplace, and the Schrödinger equation on a grid",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Discretize space and time and the great PDEs of physics become loops: the heat and wave equations, relaxation methods for Laplace boundary-value problems, and the time-dependent Schrödinger equation — watch a wave packet actually tunnel.</p>
<h3>Topics</h3>
<ul>
  <li>Heat &amp; wave equations</li>
  <li>Relaxation for Laplace</li>
  <li>The time-dependent Schrödinger equation</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "data-and-fitting",
      title: "Data & Fitting",
      subtitle: "Least squares, uncertainty, and honest model comparison",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The experimentalist's essential skill set: least-squares fitting, propagating uncertainties, judging goodness of fit, and comparing models honestly — the difference between a measurement and a number.</p>
<h3>Topics</h3>
<ul>
  <li>Least squares</li>
  <li>Uncertainty</li>
  <li>Model comparison — real lab-analysis skills</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
