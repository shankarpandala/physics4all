export const subject8 = {
  id: "electricity-and-magnetism",
  number: 8,
  title: "Electricity & Magnetism",
  description:
    "From static sparks to the power grid: charge, circuits, Ohm's law, magnetism, and the motors and generators that electrified the world — all at first-pass, one-formula depth.",
  phase: 2,
  chapters: [
    {
      id: "static-electricity",
      title: "Static Electricity",
      subtitle:
        "Charge, attraction and repulsion, lightning, and a first feel for the electric field",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Electricity begins with charge — the property that makes rubbed balloons stick to walls and lightning leap from clouds. This chapter covers electrization, the rules of attraction and repulsion, and the remarkable fact that all charge comes in multiples of one elementary unit carried by the electron. You'll also get your first qualitative feel for the electric field, the concept Subject 14 will make fully quantitative with Coulomb's law.</p>
<h3>Topics</h3>
<ul>
  <li>Charge</li>
  <li>Electrization</li>
  <li>Attraction &amp; repulsion</li>
  <li>The elementary charge</li>
  <li>Lightning</li>
  <li>Electric field qualitatively</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "current-and-circuits",
      title: "Current & Circuits",
      subtitle:
        "Current, voltage, and resistance — and how to read and build series and parallel circuits",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Set charge flowing and you have current — the lifeblood of every device you own. This chapter builds the three-way vocabulary of current, voltage, and resistance, teaches you to read and draw circuit diagrams, and explores the two fundamental ways to connect components: series and parallel. These circuit-tracing skills are pure prerequisite gold: Ohm's law is one chapter away, and Kirchhoff's laws in Subject 14 assume them completely.</p>
<h3>Topics</h3>
<ul>
  <li>Current</li>
  <li>Voltage</li>
  <li>Resistance</li>
  <li>Circuit diagrams</li>
  <li>Series &amp; parallel circuits</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "ohms-law-and-resistance",
      title: "Ohm's Law & Resistance",
      subtitle:
        "V = IR — the one formula that governs every circuit — and what resistance depends on",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>V = IR is the archetypal one-formula chapter: a single ratio statement that lets you predict any of current, voltage, or resistance from the other two — a direct payoff of the proportional reasoning and formula fluency you've been building since Subject 1. You'll then look inside resistance itself: how a wire's length, thickness, and material set its opposition to current, with a first taste of resistivity. This is the workhorse law of all circuit analysis to come.</p>
<h3>Topics</h3>
<ul>
  <li>V = IR</li>
  <li>What resistance depends on</li>
  <li>Resistivity intro</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "electrical-power-and-home-electricity",
      title: "Electrical Power & Home Electricity",
      subtitle:
        "P = VI, Joule heating, your electricity bill, and the safety systems in your walls",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>This chapter connects circuit physics to your monthly bill: P = VI gives the power any appliance draws, Joule heating explains why wires warm up (toasters on purpose, overloaded cords dangerously), and the kilowatt-hour turns out to be simply a unit of energy you buy. You'll finish with the safety engineering hidden in every home — fuses, earthing, and the design choices that keep mains electricity from being lethal. Few chapters pay off faster in everyday practical understanding.</p>
<h3>Topics</h3>
<ul>
  <li>P = VI</li>
  <li>Joule heating</li>
  <li>kWh &amp; electricity bills</li>
  <li>Fuses, earthing, safety</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "magnetism",
      title: "Magnetism",
      subtitle:
        "Magnets, fields, Earth's compass, and the discovery that currents are magnetic too",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Magnetism starts with poles and field patterns you can map with iron filings, and with Earth's own magnetic field that has guided navigators for a thousand years. The turning point of the chapter — and historically, of physics — is Oersted's discovery that an electric current creates a magnetic field, uniting two seemingly separate phenomena and giving us the electromagnet. That link between electricity and magnetism sets up the motors and generators of the next chapter and, ultimately, all of electromagnetism.</p>
<h3>Topics</h3>
<ul>
  <li>Magnets &amp; fields</li>
  <li>Earth's magnetic field</li>
  <li>Magnetic field of a current</li>
  <li>Electromagnets</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "motors-generators-and-induction",
      title: "Motors, Generators & Induction",
      subtitle:
        "The physics that electrified civilization: motors, Faraday's induction, and the grid",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Put a current-carrying wire in a magnetic field and it feels a force — spin that idea and you have the DC motor. Run it in reverse and you get Faraday's electromagnetic induction: moving a magnet near a coil generates current, which is how essentially all of the world's electricity is made. This capstone chapter follows the chain from generator through transformer to the grid that reaches your home, and it's the first-pass preview of the full induction treatment in Subject 14.</p>
<h3>Topics</h3>
<ul>
  <li>Force on a current-carrying wire</li>
  <li>The DC motor</li>
  <li>Electromagnetic induction</li>
  <li>Generators</li>
  <li>Transformers &amp; the grid</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
