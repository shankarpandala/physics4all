export const subject10 = {
  id: "precalculus-and-vectors",
  number: 10,
  title: "Precalculus & Vectors",
  description:
    "The complete math upgrade for quantitative physics: functions, logs, deep trigonometry, vectors, complex numbers, and the first taste of calculus — everything Phase 3 needs, exactly one step ahead.",
  phase: 3,
  chapters: [
    {
      id: "functions",
      title: "Functions",
      subtitle:
        "The function concept, transformations, and reasoning about how quantities depend on each other",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Physics is the study of how one quantity depends on another, and the function is the mathematical machine that captures dependence. This chapter builds the concept properly — composition, inverses, transformations that shift and stretch graphs — and teaches the qualitative and asymptotic reasoning physicists use constantly: what happens as x grows huge or shrinks to zero? These habits of thinking about behavior, not just computing values, mark the shift from school math to physics-ready math.</p>
<h3>Topics</h3>
<ul>
  <li>Function concept</li>
  <li>Composition</li>
  <li>Inverses</li>
  <li>Transformations</li>
  <li>Rational functions</li>
  <li>Qualitative/asymptotic reasoning</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "exponentials-and-logarithms",
      title: "Exponentials & Logarithms",
      subtitle:
        "Growth, decay, e, and the log scales — dB, pH, Richter — that tame huge ranges",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Radioactive decay, capacitor discharge, sound intensity, earthquake magnitude — an astonishing amount of physics is exponential, and logarithms are how you read it. This chapter covers exponential growth and decay, the special number e, log rules drilled to automaticity, and the log scales (decibels, pH, Richter) plus semilog plots that turn exponential curves into readable straight lines. You'll use these tools directly in the decay law of Subject 15 and the decibel work of Subject 13.</p>
<h3>Topics</h3>
<ul>
  <li>Exponential growth &amp; decay</li>
  <li>e</li>
  <li>Log rules (to automaticity)</li>
  <li>Log scales (dB, pH, Richter)</li>
  <li>Semilog plots</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "trigonometry-mastery",
      title: "Trigonometry Mastery",
      subtitle:
        "The unit circle from memory, radians, identities — the never-skip chapter of the math ladder",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The curriculum lists the unit circle among the skills you must never skip, because trigonometry is the language of everything that rotates, oscillates, or waves. This chapter takes you well past SOH-CAH-TOA: the unit circle from memory, radians as the natural angle measure, the graphs of sin, cos, and tan with amplitude, period, and phase, plus the identity toolkit and trig equations. Simple harmonic motion, wave equations like y = A sin(kx − ωt), and AC circuits all read like applied trigonometry afterward.</p>
<h3>Topics</h3>
<ul>
  <li>The unit circle (from memory)</li>
  <li>Radians</li>
  <li>Graphs of sin/cos/tan</li>
  <li>Amplitude, period, phase</li>
  <li>Pythagorean/sum/double-angle identities</li>
  <li>Trig equations</li>
  <li>Inverse trig</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "vectors",
      title: "Vectors",
      subtitle:
        "Components, dot and cross products — the mathematical objects forces actually are",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Force, velocity, acceleration, and field are all vectors — quantities with direction — and this never-skip chapter teaches you to compute with them: components, addition, and the two products (dot and cross) with their geometric meanings. The entire second pass through mechanics in Subject 11 is titled "with vectors" because this is the upgrade that makes inclined planes, projectiles, and torque tractable. Work as a dot product and magnetic force as a cross product will feel natural once this chapter is behind you.</p>
<h3>Topics</h3>
<ul>
  <li>Components</li>
  <li>Addition</li>
  <li>Dot product</li>
  <li>Cross product</li>
  <li>Geometric meaning</li>
  <li>Vectors in physics</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "complex-numbers",
      title: "Complex Numbers",
      subtitle:
        "The Argand plane, polar form, and a preview of Euler's formula — quantum's native language",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Complex numbers begin as a curiosity — a number whose square is negative — and end up as physics's secret weapon: AC circuit analysis, wave superposition, and the whole of quantum mechanics run on them. This chapter covers complex arithmetic, the Argand-plane picture that makes multiplication a rotation, polar form, and a preview of Euler's formula e^(iθ) = cos θ + i sin θ, often called the most beautiful equation in mathematics. Investing here pays compound interest through Phases 4 and 5.</p>
<h3>Topics</h3>
<ul>
  <li>Arithmetic</li>
  <li>The Argand plane</li>
  <li>Polar form</li>
  <li>Euler's formula preview</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "sequences-series-and-approximation",
      title: "Sequences, Series & Approximation",
      subtitle:
        "Geometric series, the binomial theorem, and small-x expansions — physics's favorite move",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>The curriculum calls small-x expansion "the most-used move in physics" — and lists Taylor-expansion thinking among the skills never to skip — because real physics problems are rarely solved exactly; they're approximated intelligently. This chapter builds up from arithmetic and geometric series through the binomial theorem to that art of approximation: replacing complicated expressions with simple ones valid when a quantity is small. It's how the pendulum becomes simple harmonic and how relativity reduces to Newton at everyday speeds.</p>
<h3>Topics</h3>
<ul>
  <li>Arithmetic &amp; geometric series</li>
  <li>Binomial theorem</li>
  <li>The art of approximation (small-x expansions — the most-used move in physics)</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "limits-and-the-idea-of-calculus",
      title: "Limits & the Idea of Calculus",
      subtitle:
        "The derivative as rate, the integral as area, and first calculus applied to motion",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Here you meet the two greatest ideas in applied mathematics: the derivative as an instantaneous rate (the exact slope your motion graphs have been hinting at) and the integral as accumulated area. Following the Singapore Additional-Math model, you'll immediately apply basic calculus to kinematics — velocity as the derivative of position, distance as the integral of velocity — so the concepts land on physics you already know. This preview makes the full calculus sequence of Subject 16, and F = ma as a differential equation, far less of a cliff.</p>
<h3>Topics</h3>
<ul>
  <li>Limits &amp; continuity</li>
  <li>The derivative as slope/rate</li>
  <li>The integral as area</li>
  <li>Kinematics with basic calculus (the Singapore Additional-Math move)</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
    {
      id: "probability-and-statistics-foundations",
      title: "Probability & Statistics Foundations",
      subtitle:
        "Counting, distributions, mean and variance, and the ubiquitous normal curve",
      sections: [
        {
          id: "overview",
          title: "What you'll learn in this chapter",
          content: `
<p>Modern physics is statistical to its core — quantum mechanics predicts probabilities, and thermodynamics is the statistics of 10²³ particles — so probabilistic thinking belongs in your foundation. This chapter covers counting, the probability rules, an introduction to distributions, mean and variance, and the normal curve that appears everywhere from measurement error to molecular speeds. It also underpins honest data analysis: every lab measurement you'll ever quote needs an uncertainty, and uncertainty is statistics.</p>
<h3>Topics</h3>
<ul>
  <li>Counting</li>
  <li>Probability rules</li>
  <li>Distributions intro</li>
  <li>Mean &amp; variance</li>
  <li>The normal curve</li>
</ul>
<div class="key-concept"><h4>Status</h4><p>Full interactive content for this chapter is in development. This outline is your map — the chapter list and ordering are final, based on the research in <strong>docs/CURRICULUM.md</strong>.</p></div>`,
        },
      ],
      quiz: [],
    },
  ],
};
