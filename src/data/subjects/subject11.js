export const subject11 = {
  id: "mechanics-with-vectors",
  number: 11,
  title: "Mechanics",
  description:
    "The second pass through mechanics, now armed with vectors and trigonometry: projectiles, Newton's laws in full, momentum, energy, orbits, rotation, oscillations, and fluids at A-level/NCERT depth.",
  phase: 3,
  chapters: [
    {
      id: "measurement-and-uncertainty",
      title: "Measurement & Uncertainty",
      subtitle:
        "SI units, dimensional analysis, and honest error handling — the craft of quantitative science",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Quantitative physics begins with knowing exactly what your numbers mean, and this chapter professionalizes that: the SI system in full, dimensional analysis as a superpower for checking (and sometimes deriving) formulas, and the basics of error propagation with significant figures done properly. Dimensional thinking alone will save you from more wrong answers than any other single habit. Every multi-step problem in the rest of Phase 3 leans on the discipline you build here.</p>
<h3>Topics</h3>
<ul>
  <li>SI system</li>
  <li>Dimensional analysis</li>
  <li>Error propagation basics</li>
  <li>Significant figures properly</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "kinematics-in-1d-and-2d",
      title: "Kinematics in 1D & 2D",
      subtitle:
        "The suvat equations, free fall, and projectile motion — vectors earning their keep",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The suvat equations turn uniformly accelerated motion into pure algebra, and free fall becomes their most famous application. Then the vector toolkit from Subject 10 unlocks two dimensions: projectile motion splits into independent horizontal and vertical stories, and suddenly you can predict where the ball lands. Relative motion rounds out the chapter — the gateway idea to reference frames that special relativity will one day make profound.</p>
<h3>Topics</h3>
<ul>
  <li>The suvat equations</li>
  <li>Free fall</li>
  <li>Projectile motion</li>
  <li>Relative motion</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "newtons-laws-properly",
      title: "Newton's Laws Properly",
      subtitle:
        "Force decomposition, friction models, tension, and connected bodies — real problem-solving begins",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>This is where mechanics becomes a true problem-solving discipline: all three of Newton's laws deployed with vector decomposition on inclined planes, quantitative friction models, and the tension and normal forces that appear in every free-body diagram. Connected bodies — blocks and pulleys moving together — and apparent weight in accelerating elevators are the classic multi-step problems of the A-level/JEE tradition. The systematic method you learn here is the template for attacking any force problem for the rest of the curriculum.</p>
<h3>Topics</h3>
<ul>
  <li>The three laws</li>
  <li>Force decomposition on inclines</li>
  <li>Friction models</li>
  <li>Tension &amp; normal forces</li>
  <li>Connected bodies</li>
  <li>Apparent weight</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "momentum-and-collisions",
      title: "Momentum & Collisions",
      subtitle:
        "Impulse, conservation of momentum, and the physics of crashes, recoil, and rockets",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Momentum is the first of the great conservation laws you'll wield as a computational tool: in any collision or explosion, total momentum before equals total momentum after, no matter how messy the details. This chapter covers impulse (why airbags and crumple zones save lives), elastic versus inelastic collisions, and the recoil logic that makes rockets work by throwing mass backward. Conservation-law reasoning — solving problems while ignoring complicated intermediate forces — is a habit of mind you'll use through quantum mechanics and particle physics.</p>
<h3>Topics</h3>
<ul>
  <li>Impulse</li>
  <li>Conservation of momentum</li>
  <li>Elastic &amp; inelastic collisions</li>
  <li>Recoil &amp; rockets</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "work-energy-and-conservation",
      title: "Work, Energy & Conservation",
      subtitle:
        "Varying forces, conservative forces, and energy conservation as a problem-solving superpower",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The energy ideas from the first pass return with full quantitative teeth: work done by varying forces, kinetic and potential energy precisely defined, and the crucial concept of a conservative force — one whose work depends only on endpoints, letting you define potential energy at all. Energy conservation then becomes your most elegant solver: problems that would demand pages of force analysis fall in three lines. With power added, this chapter completes the energy toolkit that Phases 4 and 5 will deepen with calculus and reformulate as Lagrangians.</p>
<h3>Topics</h3>
<ul>
  <li>Work by a varying force</li>
  <li>KE &amp; PE</li>
  <li>Conservative forces</li>
  <li>Energy conservation</li>
  <li>Power</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "circular-motion-and-gravitation",
      title: "Circular Motion & Gravitation",
      subtitle:
        "Centripetal acceleration, Newton's gravity, Kepler's laws, and the physics of orbits",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Circular motion holds a beautiful surprise: an object moving at constant speed is still accelerating, because its direction changes — and that centripetal acceleration explains banked curves, spin cycles, and every orbit in the sky. Newton's law of gravitation then performs history's great unification, showing the fall of an apple and the orbit of the Moon are the same physics, with Kepler's laws emerging as consequences. Gravitational fields, potential energy, and satellite motion complete a chapter that runs from race tracks to the Solar System.</p>
<h3>Topics</h3>
<ul>
  <li>Centripetal acceleration</li>
  <li>Banked curves</li>
  <li>Newton's law of gravitation</li>
  <li>Orbits &amp; Kepler's laws</li>
  <li>Gravitational field &amp; potential energy</li>
  <li>Satellites</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "rotation-and-statics",
      title: "Rotation & Statics",
      subtitle:
        "Torque, moment of inertia, angular momentum, and why structures stand or fall",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Rotation gets its own complete dynamics, in perfect parallel with what you know: torque plays the role of force, moment of inertia the role of mass, and angular momentum the role of momentum — conserved, which is why spinning skaters speed up when they pull in their arms. Rolling motion combines translation and rotation, while statics applies the equilibrium conditions to explain why bridges, ladders, and cranes stand. This rotational toolkit returns with integrals in Phase 4 and with the inertia tensor in Phase 5.</p>
<h3>Topics</h3>
<ul>
  <li>Torque</li>
  <li>Moment of inertia</li>
  <li>Angular momentum</li>
  <li>Rolling</li>
  <li>Equilibrium &amp; stability</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "oscillations",
      title: "Oscillations",
      subtitle:
        "Simple harmonic motion, pendulums and springs, damping and resonance — the heartbeat of physics",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Simple harmonic motion may be the single most important model in physics: pendulums, springs, molecules, bridges, and quantum fields all oscillate, and the trigonometry you mastered in Subject 10 now describes them exactly. You'll analyze the pendulum and spring quantitatively, track how energy sloshes between kinetic and potential forms, and meet damping and resonance — the phenomenon that shatters wine glasses and topples bridges. SHM is also the direct on-ramp to waves in Subject 13 and the oscillator ODEs of Phase 4.</p>
<h3>Topics</h3>
<ul>
  <li>Simple harmonic motion</li>
  <li>Pendulum &amp; spring</li>
  <li>Energy in SHM</li>
  <li>Damping &amp; resonance</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "fluids",
      title: "Fluids",
      subtitle:
        "Continuity, Bernoulli's principle, and a first look at viscosity — mechanics of flow",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The pressure and buoyancy of the first pass return with mathematics, and then the fluid starts moving: the continuity equation says what flows in must flow out (why rivers speed up where they narrow), and Bernoulli's principle — energy conservation applied to flow — connects fast-moving fluid to low pressure. Together they illuminate airplane wings, chimney draft, and blood flow, with viscosity introduced as the fluid's internal friction. It's the mechanics finale that shows Newton's framework handles matter that flows.</p>
<h3>Topics</h3>
<ul>
  <li>Pressure revisited</li>
  <li>Continuity equation</li>
  <li>Bernoulli's principle</li>
  <li>Viscosity intro</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
