export const subject17 = {
  id: "classical-mechanics-1",
  number: 17,
  title: "Classical Mechanics I",
  description:
    "Newtonian mechanics done properly with calculus, in the MIT 8.01 spirit with Kleppner & Kolenkow / Morin depth — F = ma becomes a differential equation, and energy, momentum, rotation, and orbits follow from it.",
  phase: 4,
  chapters: [
    {
      id: "kinematics-via-calculus",
      title: "Kinematics via Calculus",
      subtitle:
        "Position, velocity, and acceleration as derivatives — and your first real ODE",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Everything you learned about motion gets rebuilt on calculus: velocity is the derivative of position, acceleration the derivative of velocity, and motion is recovered from acceleration by integration. The payoff comes immediately — air drag gives you your first genuine differential equation, and terminal velocity falls out of it. This is the moment the physics you know becomes the physics universities teach.</p>
<h3>Topics</h3>
<ul>
  <li>Position, velocity, acceleration as derivatives</li>
  <li>Motion from integrals</li>
  <li>Drag & terminal velocity (your first real ODE)</li>
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
      id: "newtons-laws-as-differential-equations",
      title: "Newton's Laws as Differential Equations",
      subtitle:
        "Solving F = ma as an equation of motion, with a first look at oscillators and numerics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>F = ma is not a formula to plug into — it is a differential equation whose solution is the entire future of a system. This chapter teaches you to set up and solve equations of motion, previews the harmonic oscillator (the most important system in physics), and introduces numerical solution, the technique that handles everything analytic methods cannot. This way of thinking carries you all the way to Lagrangian mechanics and beyond.</p>
<h3>Topics</h3>
<ul>
  <li>Solving F = ma</li>
  <li>The oscillator preview</li>
  <li>Numerical solutions intro</li>
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
      id: "momentum-systems-of-particles",
      title: "Momentum & Systems of Particles",
      subtitle:
        "Centre of mass, rockets, and two-dimensional collisions",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Real objects are systems of many particles, and the centre-of-mass concept is what lets Newton's laws apply to them as if they were points. This chapter handles systems whose mass changes — the rocket equation is the classic — and extends collision analysis to two dimensions, where conservation of momentum becomes a genuinely vectorial statement.</p>
<h3>Topics</h3>
<ul>
  <li>Centre of mass</li>
  <li>Variable-mass systems (rockets)</li>
  <li>Collisions in 2D</li>
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
      id: "energy-methods",
      title: "Energy Methods",
      subtitle:
        "Work–energy via integrals, F = −dU/dx, and reading physics from energy diagrams",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>With calculus, energy stops being a bookkeeping trick and becomes a predictive method: force is the negative slope of potential energy, so a single U(x) curve tells you where a system can go, where it sits in equilibrium, and whether that equilibrium is stable. Energy-diagram reasoning developed here is the same reasoning you will use for molecular bonds, planetary orbits, and quantum wells.</p>
<h3>Topics</h3>
<ul>
  <li>Work–energy via integrals</li>
  <li>Potential energy & force (F = −dU/dx)</li>
  <li>Potential wells & stability</li>
  <li>Energy diagrams</li>
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
      id: "angular-momentum-rigid-bodies",
      title: "Angular Momentum & Rigid Bodies",
      subtitle:
        "Rotational dynamics with real integrals, gyroscopes, and precession",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Rotation gets the full calculus treatment: moments of inertia computed by integration rather than looked up in tables, and angular momentum as a conserved vector quantity with sometimes startling consequences. The gyroscope — which seems to defy gravity by precessing instead of falling — is the showcase, and the rotational machinery built here returns in rigid-body motion, atomic physics, and quantum spin.</p>
<h3>Topics</h3>
<ul>
  <li>Rotational dynamics properly</li>
  <li>Moment of inertia by integration</li>
  <li>Gyroscopes & precession</li>
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
      id: "oscillations-in-depth",
      title: "Oscillations in Depth",
      subtitle:
        "SHM as an ODE, damping, driving, resonance, and the first coupled oscillators",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The harmonic oscillator is the most important system in physics — almost everything, near equilibrium, is one. This chapter solves it properly as a differential equation, then adds damping and driving to get resonance quantitatively, and closes with coupled oscillators, the doorway to the waves course. The mathematics you build here reappears in AC circuits, quantum mechanics, and quantum field theory.</p>
<h3>Topics</h3>
<ul>
  <li>SHM as an ODE</li>
  <li>Damped & driven oscillations</li>
  <li>Resonance quantitatively</li>
  <li>Coupled oscillators intro</li>
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
      id: "central-forces-orbits",
      title: "Central Forces & Orbits",
      subtitle:
        "Effective potential, the orbit equation, and Kepler's laws derived from first principles",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>This is one of the great triumphs of physics: starting from Newton's law of gravitation and conservation laws, you derive Kepler's laws — the actual shapes of planetary orbits — with pencil and paper. The effective-potential technique that makes it possible is a completely general tool, and orbital transfers connect the theory directly to how real spacecraft navigate the solar system.</p>
<h3>Topics</h3>
<ul>
  <li>Effective potential</li>
  <li>The orbit equation</li>
  <li>Kepler's laws derived</li>
  <li>Orbital transfers</li>
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
      id: "noninertial-frames",
      title: "Noninertial Frames",
      subtitle:
        "Pseudo-forces, rotating frames, the Coriolis force, and tides",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Newton's laws hold in inertial frames — but we live on a rotating planet, so pseudo-forces like the centrifugal and Coriolis forces are part of everyday physics, steering hurricanes and ocean currents. This chapter teaches you to work in accelerating and rotating frames confidently, explains the tides properly, and plants a seed: the idea that "fictitious" forces reflect your frame of reference is the very intuition Einstein pushed all the way to general relativity.</p>
<h3>Topics</h3>
<ul>
  <li>Pseudo-forces</li>
  <li>Rotating frames</li>
  <li>The Coriolis force</li>
  <li>Tides</li>
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
