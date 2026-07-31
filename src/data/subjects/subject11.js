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
          id: "the-si-system",
          title: "The SI System in Full",
          content: `
<p>Every measurement in physics is a comparison against an agreed standard, and the <strong>Système International (SI)</strong> is that agreement. Just seven base units generate every quantity you will ever meet:</p>
<table>
  <thead>
    <tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
  </thead>
  <tbody>
    <tr><td>Length</td><td>metre</td><td>m</td></tr>
    <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
    <tr><td>Time</td><td>second</td><td>s</td></tr>
    <tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
    <tr><td>Temperature</td><td>kelvin</td><td>K</td></tr>
    <tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr>
    <tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr>
  </tbody>
</table>
<p>Everything else is a <strong>derived unit</strong>, built by multiplying and dividing base units. The newton is kg·m/s², the joule is kg·m²/s², the watt is a joule per second. When a derived unit gets a name of its own, that is usually a sign the quantity matters enough to appear constantly.</p>
<p>Since 2019 every base unit has been defined by fixing the value of a constant of nature: the second by a caesium atomic transition, the metre by the speed of light (exactly 299,792,458 m/s), and the kilogram by Planck's constant. No physical artefact — no metal cylinder in a Paris vault — defines anything any more. A lab on the Moon could reconstruct the entire system from scratch.</p>
<p>Prefixes let one unit span the universe: from femto (10⁻¹⁵) through nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), to tera (10¹²). A proton is about 1 fm across; the Sun is 1.4 Gm wide. Same metre, 27 orders of magnitude apart.</p>
<div class="key-concept">
  <h4>Key Concept: Units Are Algebra</h4>
  <p>Units multiply, divide, and cancel exactly like symbols. If you compute a speed and the units come out as m/s², you have made an error — before you check a single digit of arithmetic. Carrying units through every step is the cheapest error-detector in science.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>In 1999 NASA lost the $327-million Mars Climate Orbiter because one team supplied thruster data in pound-seconds while another expected newton-seconds. The spacecraft entered the Martian atmosphere 100 km too low and burned up — a unit-conversion error at planetary scale.</p>
</div>`,
        },
        {
          id: "dimensional-analysis",
          title: "Dimensional Analysis: The Physicist's Superpower",
          content: `
<p>Strip away the numbers and every mechanical quantity reduces to powers of three dimensions: mass <strong>M</strong>, length <strong>L</strong>, and time <strong>T</strong>. Speed is L T⁻¹, acceleration is L T⁻², force is M L T⁻², energy is M L² T⁻². Any equation of physics must be <strong>dimensionally homogeneous</strong> — both sides, and every added term, must carry identical dimensions. You cannot add an energy to a force any more than you can add three metres to five seconds.</p>
<p>This gives you two remarkable abilities.</p>
<h3>1. Checking formulas</h3>
<p>Is v² = u² + 2as legitimate? Left side: (L T⁻¹)² = L² T⁻². Right side: u² gives L² T⁻², and 2as gives (L T⁻²)(L) = L² T⁻². Every term matches → the equation is at least dimensionally sound. If you ever mis-remember it as v² = u² + 2as², the check fails instantly.</p>
<h3>2. Deriving the shape of a law</h3>
<p><strong>Worked example.</strong> On what can a simple pendulum's period depend? Plausibly its length L, its mass m, and gravity g. Suppose T = k · Lᵃ mᵇ gᶜ with k a pure number. Dimensions:</p>
<p style="text-align:center;">T¹ = Lᵃ · Mᵇ · (L T⁻²)ᶜ = Lᵃ⁺ᶜ Mᵇ T⁻²ᶜ</p>
<ol>
  <li>Time: 1 = −2c → c = −½</li>
  <li>Mass: b = 0 — the mass <em>cannot appear at all</em></li>
  <li>Length: a + c = 0 → a = +½</li>
</ol>
<p>So T = k √(L/g). We derived, without solving any equation of motion, that a pendulum's period grows as the square root of its length and is independent of mass. The full theory (Chapter 8) supplies only the missing constant, k = 2π.</p>
<div class="key-concept">
  <h4>Key Concept: The Limit of the Method</h4>
  <p>Dimensional analysis can never find dimensionless constants (the 2π, the ½) and cannot detect dimensionless factors like sin θ. It gives you the skeleton of a law, not its flesh — but a correct skeleton kills a wrong formula on sight.</p>
</div>`,
        },
        {
          id: "significant-figures",
          title: "Significant Figures Done Properly",
          content: `
<p>Writing a measurement as 2.50 m instead of 2.5 m is a claim, not a style choice: it says you trust that final zero. <strong>Significant figures</strong> encode how much of a number is actually known.</p>
<ul>
  <li>All non-zero digits are significant: 523 has 3 sig figs.</li>
  <li>Zeros between non-zero digits count: 5.03 has 3.</li>
  <li>Leading zeros never count: 0.00420 has 3 (the 4, 2, and trailing 0).</li>
  <li>Trailing zeros after a decimal point count: 2.500 has 4.</li>
  <li>Trailing zeros in 4500 are ambiguous — write 4.5 × 10³ (2 sig figs) or 4.500 × 10³ (4 sig figs) to be explicit.</li>
</ul>
<h3>Rules for combining measurements</h3>
<p>When <strong>multiplying or dividing</strong>, the result keeps as many significant figures as the least precise input. When <strong>adding or subtracting</strong>, the result keeps the least precise <em>decimal place</em>, not sig-fig count: 12.1 + 0.324 = 12.4, because the first number is only known to one decimal place.</p>
<p><strong>Worked example.</strong> A plank is measured as 2.14 m long and 0.31 m wide. Area = 2.14 × 0.31 = 0.6634 m² on the calculator — but the width has only 2 significant figures, so honesty demands <strong>0.66 m²</strong>. Reporting 0.6634 m² claims a precision your ruler never delivered.</p>
<p><strong>Variation.</strong> Add a strip 0.062 m wide to the plank's width: 0.31 + 0.062 = 0.372 → report 0.37 m, matching the two-decimal-place precision of the worse measurement.</p>
<div class="key-concept">
  <h4>Key Concept: Round Only at the End</h4>
  <p>Carry one or two extra guard digits through intermediate steps and round only the final answer. Rounding early lets small errors compound; a multi-step suvat problem can drift noticeably if every intermediate result is chopped to 2 sig figs.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Chain and Its Weakest Link</h3>
  <p>A calculation is a chain of measurements, and its precision is the weakest link's. Multiplying a superbly measured 2.000000 by a rough 3.1 gives you a rough answer — the six decimal places of the first number cannot rescue the second.</p>
</div>`,
        },
        {
          id: "error-propagation",
          title: "Propagating Uncertainty",
          content: `
<p>No measurement is exact; the honest form is value ± uncertainty, like L = 1.000 ± 0.005 m. The <strong>absolute uncertainty</strong> is the ±0.005 m; the <strong>fractional (percentage) uncertainty</strong> is 0.005/1.000 = 0.5%. When measured quantities combine in a formula, their uncertainties combine too, by two simple A-level rules:</p>
<ul>
  <li><strong>Adding or subtracting:</strong> add the <em>absolute</em> uncertainties. (5.0 ± 0.1) + (3.0 ± 0.2) = 8.0 ± 0.3.</li>
  <li><strong>Multiplying or dividing:</strong> add the <em>percentage</em> uncertainties. And for a power xⁿ, multiply the percentage uncertainty by |n| — so squaring a quantity doubles its percentage uncertainty.</li>
</ul>
<p>Notice why subtraction is dangerous: subtracting two large, nearly equal numbers leaves a small result carrying the <em>sum</em> of their absolute errors — the percentage uncertainty can explode.</p>
<h3>Worked example: measuring g with a pendulum</h3>
<p>Chapter 8 will show T = 2π√(L/g), which rearranges to g = 4π²L/T². You measure:</p>
<ul>
  <li>L = 1.000 ± 0.005 m → 0.5%</li>
  <li>T = 2.01 ± 0.02 s → 1.0%</li>
</ul>
<ol>
  <li>Central value: g = 4π² × 1.000 / 2.01² = 39.48 / 4.040 ≈ 9.77 m/s²</li>
  <li>Percentage uncertainty: 0.5% (from L) + 2 × 1.0% (from T²) = 2.5%</li>
  <li>Absolute uncertainty: 0.025 × 9.77 ≈ 0.24 m/s²</li>
</ol>
<p>Result: <strong>g = 9.8 ± 0.2 m/s²</strong> — comfortably consistent with the accepted 9.81 m/s². Note that T, entering squared, dominates the error budget: improving the timing helps twice as much as improving the length measurement.</p>
<p><strong>Variation.</strong> Time 20 swings instead of one: the same ±0.02 s stopwatch error now spreads over 40 s, so the uncertainty in T drops to ±0.001 s (0.05%), and g's uncertainty collapses to about 0.6%. One trick, four times the precision.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>The 2016 discovery of gravitational waves required measuring a length change of 10⁻¹⁸ m in a 4 km arm — a fractional uncertainty of one part in 10²¹. Error analysis is not bookkeeping; at the frontier it <em>is</em> the experiment.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Which of the following is an SI base unit, rather than a derived unit?",
          options: ["The newton", "The joule", "The kelvin", "The watt"],
          correctIndex: 2,
          explanation:
            "The kelvin is one of the seven SI base units. The newton (kg·m/s²), joule (kg·m²/s²), and watt (J/s) are all derived — built by combining base units.",
        },
        {
          question: "What are the dimensions of energy?",
          options: ["M L² T⁻²", "M L T⁻²", "M L² T⁻¹", "M L⁻¹ T⁻²"],
          correctIndex: 0,
          explanation:
            "Energy is force × distance: (M L T⁻²) × L = M L² T⁻². Check with KE = ½mv²: M × (L T⁻¹)² gives the same M L² T⁻². M L T⁻² is force; M L⁻¹ T⁻² is pressure.",
        },
        {
          question: "How many significant figures does 0.00420 have?",
          options: ["Five", "Two", "Six", "Three"],
          correctIndex: 3,
          explanation:
            "Leading zeros never count — they only locate the decimal point. The significant digits are 4, 2, and the trailing zero (which does count, because it sits after the decimal point in a measured value): three in total.",
        },
        {
          question:
            "A quantity is computed as x = a·b². If a has 1% uncertainty and b has 2%, what is the percentage uncertainty in x?",
          options: ["3%", "5%", "2%", "4%"],
          correctIndex: 1,
          explanation:
            "For products, percentage uncertainties add, and a power multiplies the percentage by the exponent: 1% + 2 × 2% = 5%. The squared quantity contributes double — which is why it usually dominates the error budget.",
        },
        {
          question:
            "Dimensional analysis of the simple pendulum shows T = k√(L/g). What can the method NOT tell you?",
          options: [
            "That the period is independent of mass",
            "That the period grows with length",
            "The value of the dimensionless constant k",
            "That g appears under the square root",
          ],
          correctIndex: 2,
          explanation:
            "Dimensional analysis pins down the powers of L, m, and g (including the surprising absence of mass), but pure numbers like k = 2π are dimensionless and invisible to it. Only the full equation of motion supplies them.",
        },
      ],
    },
    {
      id: "kinematics-in-1d-and-2d",
      title: "Kinematics in 1D & 2D",
      subtitle:
        "The suvat equations, free fall, and projectile motion — vectors earning their keep",
      sections: [
        {
          id: "suvat-equations",
          title: "The suvat Equations",
          content: `
<p>When acceleration is <strong>constant</strong>, the entire motion is captured by five quantities — displacement s, initial velocity u, final velocity v, acceleration a, time t — and four equations that link them:</p>
<table>
  <thead>
    <tr><th>Equation</th><th>Missing quantity</th></tr>
  </thead>
  <tbody>
    <tr><td>v = u + at</td><td>s</td></tr>
    <tr><td>s = ut + ½at²</td><td>v</td></tr>
    <tr><td>v² = u² + 2as</td><td>t</td></tr>
    <tr><td>s = ½(u + v)t</td><td>a</td></tr>
  </tbody>
</table>
<p>They are not four independent laws — each follows from the definition of constant acceleration plus the fact that displacement is the area under a velocity–time graph (a trapezium, hence s = ½(u + v)t). The strategy is always the same: list the three quantities you know, identify the one you want, and pick the equation missing the one you neither know nor need.</p>
<h3>Worked example</h3>
<p>A car doing 8.0 m/s accelerates uniformly at 2.5 m/s² along a 60 m slip road. How fast is it moving at the end?</p>
<ol>
  <li>Known: u = 8.0 m/s, a = 2.5 m/s², s = 60 m. Wanted: v. Time is neither known nor wanted → use v² = u² + 2as.</li>
  <li>v² = 8.0² + 2 × 2.5 × 60 = 64 + 300 = 364</li>
  <li>v = √364 ≈ <strong>19 m/s</strong> (about 69 km/h).</li>
</ol>
<p><strong>Variation.</strong> How long did that take? Now v is known, so v = u + at gives t = (19.1 − 8.0)/2.5 ≈ <strong>4.4 s</strong>. Cross-check with s = ½(u + v)t = ½ × 27.1 × 4.4 ≈ 60 m ✓.</p>
<div class="key-concept">
  <h4>Key Concept: Signs Carry the Vectors</h4>
  <p>In 1D, vector direction survives as a ± sign. Choose a positive direction and commit: a ball thrown upward with downward gravity has u = +15 m/s and a = −9.8 m/s². Most suvat errors are sign errors — the algebra is trivial, the bookkeeping is not.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>"suvat" is just the variable list pronounced as a word. These equations only hold for constant acceleration — for anything varying you need the calculus of Phase 4, where they reappear as the simplest special case of integration.</p>
</div>`,
        },
        {
          id: "free-fall",
          title: "Free Fall",
          content: `
<p>Near Earth's surface, every object free of air resistance accelerates downward at <strong>g ≈ 9.8 m/s²</strong>, independent of its mass — Galileo's great discovery. Free fall is simply suvat with a = −g (taking up as positive), and it is worth solving the classic cases until they feel automatic.</p>
<h3>Worked example 1: dropping</h3>
<p>A stone is dropped (u = 0) from a 45 m cliff.</p>
<ol>
  <li>Time to fall: s = ½gt² → 45 = ½ × 9.8 × t² → t² = 9.18 → t ≈ <strong>3.0 s</strong></li>
  <li>Impact speed: v = gt = 9.8 × 3.03 ≈ <strong>30 m/s</strong> (108 km/h — this is why falls are dangerous).</li>
</ol>
<h3>Worked example 2: throwing upward</h3>
<p>A ball leaves your hand at 15 m/s straight up.</p>
<ol>
  <li><strong>Maximum height:</strong> at the top v = 0, so v² = u² − 2gh → 0 = 225 − 19.6h → h ≈ <strong>11.5 m</strong>.</li>
  <li><strong>Time to the top:</strong> v = u − gt → t = 15/9.8 ≈ <strong>1.53 s</strong>.</li>
  <li><strong>Total flight time</strong> (back to the hand): by symmetry, 2 × 1.53 ≈ <strong>3.1 s</strong>, returning at 15 m/s downward.</li>
</ol>
<p>The symmetry is exact: the upward and downward halves of the flight mirror each other in time and speed. And note the subtle point — at the peak the <em>velocity</em> is zero but the <em>acceleration</em> is still 9.8 m/s² downward. Gravity does not pause at the top.</p>
<div class="analogy">
  <h3>Analogy: The Elevator Test</h3>
  <p>Free fall means gravity is the only force acting. A skydiver at terminal velocity is NOT in free fall (drag balances gravity; acceleration is zero), but an astronaut orbiting Earth IS — orbit is perpetual free fall that keeps missing the ground, as Chapter 6 will make precise.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>In 1971 Apollo 15 commander David Scott dropped a hammer and a falcon feather together on the Moon. With no air, they hit the lunar dust simultaneously — Galileo vindicated on another world, on live television.</p>
</div>`,
        },
        {
          id: "projectile-motion",
          title: "Projectile Motion",
          interactive: "projectile-motion",
          content: `
<p>Launch a ball at an angle and its curved flight looks complicated — until you deploy the deepest trick in kinematics: <strong>the horizontal and vertical motions are completely independent</strong>. Gravity acts only vertically, so horizontally the projectile coasts at constant velocity while vertically it is in ordinary free fall. Two easy problems, sharing only the time.</p>
<p>Decompose the launch velocity u at angle θ:</p>
<ul>
  <li>Horizontal: uₓ = u cos θ (constant throughout)</li>
  <li>Vertical: u_y = u sin θ (suvat with a = −g)</li>
</ul>
<h3>Worked example</h3>
<p>A ball is kicked at 20 m/s at 30° above the horizontal from flat ground.</p>
<ol>
  <li><strong>Components:</strong> uₓ = 20 cos 30° ≈ 17.3 m/s; u_y = 20 sin 30° = 10 m/s.</li>
  <li><strong>Time of flight:</strong> vertical journey up and back: t = 2u_y/g = 20/9.8 ≈ <strong>2.0 s</strong>.</li>
  <li><strong>Range:</strong> horizontal coasting for that time: R = uₓt = 17.3 × 2.04 ≈ <strong>35 m</strong>.</li>
  <li><strong>Maximum height:</strong> h = u_y²/2g = 100/19.6 ≈ <strong>5.1 m</strong>.</li>
</ol>
<p>Combining the steps gives the range formula R = u² sin 2θ / g, maximized at <strong>θ = 45°</strong> (where sin 2θ = 1). Complementary angles share a range: 30° and 60° land in the same spot, one on a flat fast arc, the other high and slow.</p>
<p><strong>Variation.</strong> Same ball kicked horizontally at 17.3 m/s off a 5.1 m ledge: the vertical drop takes t = √(2h/g) ≈ 1.02 s and it lands 17.3 × 1.02 ≈ 17.7 m out — exactly the second half of the flight above, confirming the symmetry.</p>
<div class="key-concept">
  <h4>Key Concept: Two Clocks, One Time</h4>
  <p>Solve the vertical problem to find the time; feed that time to the horizontal problem to find the distance. Nearly every projectile question yields to this two-step, and the simulator below lets you test it — vary the angle and watch 45° win, then toggle air drag and watch the ideal world break.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>With air resistance, real optimal launch angles are lower than 45° — a shot put leaves at about 37–38°, and a golf ball's dimples and spin rewrite the trajectory entirely. The parabola is the vacuum's signature.</p>
</div>`,
        },
        {
          id: "relative-motion",
          title: "Relative Motion",
          content: `
<p>Velocity is always measured <em>relative to something</em>. A passenger walking forward at 1 m/s inside a train doing 30 m/s moves at 31 m/s relative to the ground — velocities relative to different frames combine by <strong>vector addition</strong>:</p>
<p style="text-align:center;"><strong>v(A relative to C) = v(A relative to B) + v(B relative to C)</strong></p>
<p>In 1D this is arithmetic with signs; in 2D the vectors of Subject 10 earn their keep.</p>
<h3>Worked example: crossing a river</h3>
<p>A boat can travel at 4.0 m/s in still water and must cross a river 120 m wide flowing at 3.0 m/s.</p>
<p><strong>Case 1 — aim straight across.</strong> The crossing component stays 4.0 m/s, so the crossing time is t = 120/4.0 = <strong>30 s</strong> — the current does not slow the crossing at all. But during those 30 s the current carries the boat 3.0 × 30 = <strong>90 m downstream</strong>. The resultant speed over the ground is √(4² + 3²) = 5.0 m/s, angled downstream at tan θ = 3/4 → θ ≈ 37° from straight across.</p>
<p><strong>Case 2 — land directly opposite.</strong> Now the boat must aim upstream so the current's 3.0 m/s is cancelled by the upstream component of its own velocity: sin θ = 3/4 → θ ≈ 49° upstream of straight across. The component actually crossing shrinks to √(4² − 3²) = √7 ≈ 2.65 m/s, and the crossing takes 120/2.65 ≈ <strong>45 s</strong>. Fighting the current costs time.</p>
<p><strong>Variation.</strong> Rain falling vertically at 8 m/s appears, to a cyclist riding at 6 m/s, to come from ahead at tan θ = 6/8 → 37° from vertical, at √(8² + 6²) = 10 m/s — which is why you tilt your umbrella forward.</p>
<div class="key-concept">
  <h4>Key Concept: No Privileged Frame</h4>
  <p>Every inertial observer's description is equally valid — the ground frame is convenient, not correct. This modest bookkeeping idea, pushed hard by Einstein in 1905, becomes special relativity: the one addition it cannot survive is the speed of light.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A cyclist accelerates uniformly from 4 m/s to 10 m/s over 21 m. What is her acceleration?",
          options: ["1.5 m/s²", "2.0 m/s²", "3.0 m/s²", "0.5 m/s²"],
          correctIndex: 1,
          explanation:
            "Time is neither given nor wanted, so use v² = u² + 2as: 100 = 16 + 2a(21) → 84 = 42a → a = 2.0 m/s². Choosing the equation that skips the unknown you don't need is the whole suvat game.",
        },
        {
          question:
            "A ball is thrown straight up. At the highest point of its flight, which is true?",
          options: [
            "Velocity and acceleration are both zero",
            "Velocity is 9.8 m/s; acceleration is zero",
            "Acceleration is zero; velocity is momentarily constant",
            "Velocity is zero; acceleration is 9.8 m/s² downward",
          ],
          correctIndex: 3,
          explanation:
            "The ball momentarily stops rising, so v = 0 — but gravity never pauses, so a = g downward throughout the flight. If the acceleration were zero at the top, the ball would stay there forever.",
        },
        {
          question:
            "A projectile is launched at 20 m/s at 30°. Ignoring air resistance, what is its horizontal velocity component just before landing on level ground?",
          options: [
            "The same as at launch: 20 cos 30° ≈ 17.3 m/s",
            "Zero — gravity has consumed it",
            "20 m/s — speed is conserved",
            "Greater than at launch, since the ball speeds up as it falls",
          ],
          correctIndex: 0,
          explanation:
            "No horizontal force acts (in vacuum), so the horizontal component u cos θ never changes. Only the vertical component evolves under gravity. The independence of the two motions is the key principle of projectile analysis.",
        },
        {
          question:
            "Two projectiles are launched at the same speed, one at 35° and one at 55°. On level ground, how do their ranges compare?",
          options: [
            "The 55° launch goes farther",
            "The 35° launch goes farther",
            "They land at the same distance",
            "It depends on their masses",
          ],
          correctIndex: 2,
          explanation:
            "Range R = u² sin 2θ / g, and sin 70° = sin 110°, so complementary angles (adding to 90°) give equal ranges — the low arc gets there fast, the high arc hangs longer. Mass never enters projectile kinematics.",
        },
        {
          question:
            "A boat that does 4 m/s in still water aims straight across a river flowing at 3 m/s. What is its speed relative to the riverbank?",
          options: ["7 m/s", "5 m/s", "4 m/s", "1 m/s"],
          correctIndex: 1,
          explanation:
            "The boat's velocity and the current are perpendicular, so they add as vectors: √(4² + 3²) = 5 m/s, angled downstream. Simple addition (7) or subtraction (1) only applies when velocities are parallel.",
        },
      ],
    },
    {
      id: "newtons-laws-properly",
      title: "Newton's Laws Properly",
      subtitle:
        "Force decomposition, friction models, tension, and connected bodies — real problem-solving begins",
      sections: [
        {
          id: "three-laws-with-vectors",
          title: "The Three Laws, Now with Vectors",
          content: `
<p>You met Newton's laws in the first pass; now they become precision instruments. Stated properly, each is a vector statement:</p>
<ol>
  <li><strong>First law:</strong> if the net force ΣF = 0, velocity is constant — including the constant value zero. Equilibrium means the vector <em>sum</em> of forces vanishes, component by component.</li>
  <li><strong>Second law:</strong> ΣF = ma. Both sides are vectors: the acceleration points exactly along the <em>net</em> force, and the equation splits into independent component equations — ΣFₓ = maₓ and ΣF_y = ma_y. One law, two (or three) scalar equations per body.</li>
  <li><strong>Third law:</strong> if A pushes on B with force F, then B pushes on A with −F: equal magnitude, opposite direction, <em>acting on different bodies</em>. Third-law pairs never cancel, because they never act on the same object.</li>
</ol>
<p>The professional tool for deploying these laws is the <strong>free-body diagram</strong>: isolate one body, draw every force acting <em>on it</em> (and nothing it exerts on other things), choose axes, and write ΣF = ma along each axis. Every problem in this chapter — inclines, friction, pulleys, elevators — is this recipe executed carefully.</p>
<h3>Worked example</h3>
<p>A 10 kg crate is pulled across frictionless ice by two horizontal ropes: 30 N due east and 40 N due north.</p>
<ol>
  <li>Net force: the ropes are perpendicular, so ΣF = √(30² + 40²) = 50 N, at tan θ = 40/30 → 53° north of east.</li>
  <li>Acceleration: a = ΣF/m = 50/10 = <strong>5.0 m/s², at 53° north of east</strong> — along the net force, not along either rope.</li>
</ol>
<div class="key-concept">
  <h4>Key Concept: Books Do Not Cancel Themselves</h4>
  <p>A book resting on a table: gravity down on the book and the normal force up on the book balance — but they are NOT a third-law pair (both act on the book). The partner of the table pushing the book up is the book pushing the table down. Misidentifying these pairs is the classic Newton's-laws error.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Newton wrote the second law as force equals rate of change of momentum, not F = ma. The momentum form is the deeper one — it survives into rocketry (mass changes) and relativity (m alone does not), as Chapter 4 will show.</p>
</div>`,
        },
        {
          id: "inclined-planes",
          title: "Force Decomposition on Inclines",
          content: `
<p>The inclined plane is where vector decomposition becomes indispensable. Gravity pulls straight down with force mg, but the object can only slide <em>along</em> the surface — so the smart move is to tilt your axes to match the slope:</p>
<ul>
  <li><strong>Along the incline (down-slope):</strong> mg sin θ — the component that drives sliding</li>
  <li><strong>Perpendicular to the incline:</strong> mg cos θ — the component the surface must resist</li>
</ul>
<p>Sanity-check the trig: at θ = 0° (flat ground), sin θ = 0 and nothing slides; at θ = 90° (a wall), sin θ = 1 and the object free-falls. The perpendicular balance gives the normal force N = mg cos θ — <em>less</em> than mg on any slope, which will matter enormously for friction.</p>
<h3>Worked example</h3>
<p>A 5.0 kg box sits on a frictionless 30° ramp.</p>
<ol>
  <li>Down-slope force: mg sin θ = 5.0 × 9.8 × sin 30° = 49 × 0.5 = 24.5 N</li>
  <li>Acceleration: a = mg sin θ / m = g sin θ = 9.8 × 0.5 = <strong>4.9 m/s²</strong> — mass cancels; every frictionless object slides down a 30° ramp at 4.9 m/s².</li>
  <li>Normal force: N = mg cos θ = 49 × 0.866 ≈ <strong>42.4 N</strong> (not 49 N).</li>
</ol>
<p><strong>Variation 1.</strong> What force, applied parallel to the slope, holds the box still? Exactly the down-slope pull: 24.5 N up the slope. The ramp has diluted gravity by a factor sin θ — the ancient machine advantage of ramps.</p>
<p><strong>Variation 2.</strong> Released from rest, how fast is the box moving after sliding 4.0 m along the ramp? v² = 2as = 2 × 4.9 × 4.0 = 39.2 → v ≈ <strong>6.3 m/s</strong> — the suvat equations bolt straight onto Newton's laws.</p>
<div class="analogy">
  <h3>Analogy: Tilting the World</h3>
  <p>Rotating your axes to lie along and perpendicular to the slope is not a trick, it is a choice of description — like turning a map so your road runs straight up the page. Physics does not care which axes you choose; your algebra deeply does.</p>
</div>`,
        },
        {
          id: "friction-models",
          title: "Friction: The Two-Regime Model",
          content: `
<p>Friction is electromagnetic hand-holding between surface atoms, but mechanics tames it with a beautifully simple empirical model with two regimes:</p>
<ul>
  <li><strong>Static friction</strong> (no sliding yet): adjusts itself to match the applied force, up to a ceiling — f_s ≤ μ_s N. It is an inequality: static friction is exactly as strong as needed, until it can't be.</li>
  <li><strong>Kinetic friction</strong> (sliding): a fixed magnitude f_k = μ_k N, direction opposing the sliding. Almost always μ_k &lt; μ_s — it takes more force to start a slide than to sustain one, which is why things lurch.</li>
</ul>
<p>Two features surprise everyone: the model contains <strong>no contact area</strong> (a brick slides the same on any face) and no speed dependence. Both are decent approximations, not deep laws.</p>
<h3>Worked example</h3>
<p>The 5.0 kg box on the 30° ramp again, now with μ_s = 0.45, μ_k = 0.20.</p>
<ol>
  <li><strong>Does it slide?</strong> Driving force: mg sin θ = 24.5 N. Maximum static friction: μ_s N = 0.45 × 42.4 ≈ 19.1 N. Since 24.5 &gt; 19.1, static friction loses — it slides.</li>
  <li><strong>Acceleration while sliding:</strong> ΣF = mg sin θ − μ_k mg cos θ = 24.5 − 0.20 × 42.4 = 24.5 − 8.5 = 16.0 N, so a = 16.0/5.0 = <strong>3.2 m/s²</strong> (down from 4.9 without friction).</li>
</ol>
<p><strong>Variation: the critical angle.</strong> The steepest angle at which the box can rest satisfies mg sin θ = μ_s mg cos θ, i.e. <strong>tan θ = μ_s</strong>. With μ_s = 0.45, θ ≈ 24°. Tilting a surface until an object just slips is a two-minute lab measurement of μ_s — the mass cancels completely.</p>
<div class="key-concept">
  <h4>Key Concept: Friction Is Not the Enemy</h4>
  <p>Walking, driving, gripping, knots, nails: all are static friction doing its job. When you accelerate a car, the force propelling it forward is the road's friction on the tyres — the engine merely spins the wheels so the tyres push backward on the road, and the third law does the rest.</p>
</div>`,
        },
        {
          id: "tension-and-connected-bodies",
          title: "Tension, Pulleys & Connected Bodies",
          content: `
<p><strong>Tension</strong> is the pull transmitted along a rope. For the ideal (massless, inextensible) ropes of A-level problems, tension is the same at every point, and an ideal pulley merely redirects it without changing its magnitude. Connected bodies then share a single acceleration — the rope guarantees it — and the method is fixed: <em>free-body diagram for each mass, ΣF = ma for each, solve simultaneously.</em></p>
<h3>Worked example: the Atwood machine</h3>
<p>Masses of 5.0 kg and 3.0 kg hang from a light string over a frictionless pulley. Take the direction of motion (5 kg down, 3 kg up) as positive for each body.</p>
<ol>
  <li>5 kg mass: m₁g − T = m₁a → 49 − T = 5a</li>
  <li>3 kg mass: T − m₂g = m₂a → T − 29.4 = 3a</li>
  <li>Add the equations (T cancels): 19.6 = 8a → <strong>a = 2.45 m/s²</strong></li>
  <li>Back-substitute: T = 29.4 + 3 × 2.45 = <strong>36.75 N</strong></li>
</ol>
<p>Check the answer's sense: T lies <em>between</em> the two weights (29.4 N and 49 N). It must — it has to out-pull the light mass's weight to accelerate it upward, yet under-pull the heavy one's so it can fall.</p>
<p><strong>Variation: table and hanging mass.</strong> A 4.0 kg block on a frictionless table is tied to a 2.0 kg mass hanging off the edge via a pulley. Only the hanging weight drives the system: a = m₂g/(m₁ + m₂) = 19.6/6.0 ≈ <strong>3.27 m/s²</strong>, and T = m₁a = 4.0 × 3.27 ≈ <strong>13.1 N</strong> — less than the 19.6 N hanging weight, as it must be, or the hanging mass could not accelerate downward.</p>
<div class="key-concept">
  <h4>Key Concept: One System or Two Bodies — Your Choice</h4>
  <p>For the acceleration alone, you may treat the whole assembly as one system: net external driving force divided by total mass, a = (m₁ − m₂)g/(m₁ + m₂) for the Atwood machine. But the tension is internal to that system and invisible to it — to find T you must cut the rope conceptually and analyze a single body. Choosing the right system boundary is half the skill of mechanics.</p>
</div>`,
        },
        {
          id: "apparent-weight",
          title: "Apparent Weight",
          content: `
<p>A bathroom scale does not measure gravity — it measures the <strong>normal force</strong> it exerts on you. Usually N = mg and the distinction is invisible. But accelerate vertically and the two part company: your <em>weight</em> mg is unchanged, while your <em>apparent weight</em> N is whatever Newton's second law demands.</p>
<p>For a person of mass m in an elevator with upward acceleration a (negative if downward):</p>
<p style="text-align:center;"><strong>N − mg = ma → N = m(g + a)</strong></p>
<h3>Worked example</h3>
<p>A 70 kg person stands on a scale in an elevator. True weight: mg = 686 N.</p>
<table>
  <thead>
    <tr><th>Elevator motion</th><th>Scale reading</th></tr>
  </thead>
  <tbody>
    <tr><td>At rest, or moving at constant velocity</td><td>N = 686 N (normal)</td></tr>
    <tr><td>Accelerating upward at 2.0 m/s²</td><td>N = 70 × 11.8 = 826 N (feels heavy)</td></tr>
    <tr><td>Accelerating downward at 2.0 m/s²</td><td>N = 70 × 7.8 = 546 N (feels light)</td></tr>
    <tr><td>Cable cut: a = −g</td><td>N = 0 (weightless)</td></tr>
  </tbody>
</table>
<p>Note the crucial subtlety: what matters is <em>acceleration</em>, not velocity. An elevator moving <em>downward</em> but slowing to a stop is accelerating <em>upward</em> — the scale reads heavy. Riding an elevator with a phone's accelerometer app makes all four rows of this table visible in real time.</p>
<p><strong>Variation.</strong> At what downward acceleration does the person's apparent weight halve? N = m(g + a) = ½mg → a = −g/2 = −4.9 m/s². And if the elevator somehow accelerated downward <em>faster</em> than g, the floor would fall away and only the ceiling could push them — apparent weight cannot go negative from a floor.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Astronauts on the ISS are not beyond gravity — at 400 km up, g is still about 8.7 m/s², nearly 90% of its surface value. They float because station and astronaut are both in perpetual free fall around Earth: a = −g permanently, so N = 0 forever. "Weightlessness" is the last row of the table above, sustained by orbital motion. Einstein promoted this observation — that free fall erases the sensation of gravity — into the founding principle of general relativity.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A book rests on a table. Which force is the Newton's third-law partner of gravity pulling the book down?",
          options: [
            "The normal force of the table on the book",
            "The book's gravitational pull on the Earth",
            "The friction between book and table",
            "The weight of the table itself",
          ],
          correctIndex: 1,
          explanation:
            "Third-law pairs involve the same two objects with roles swapped: Earth pulls book, so book pulls Earth. The table's normal force on the book merely happens to balance gravity — it acts on the same body, so it cannot be the third-law partner.",
        },
        {
          question:
            "A 5 kg box slides down a frictionless 30° incline. What is its acceleration?",
          options: ["9.8 m/s²", "8.5 m/s²", "4.9 m/s²", "2.45 m/s²"],
          correctIndex: 2,
          explanation:
            "Only the along-slope component of gravity accelerates the box: a = g sin 30° = 9.8 × 0.5 = 4.9 m/s². The mass cancels — any frictionless object has the same acceleration on the same slope.",
        },
        {
          question:
            "You push a heavy cabinet with 150 N and it does not move. The maximum static friction is 200 N. What is the actual friction force on the cabinet?",
          options: [
            "150 N, opposing your push",
            "200 N, opposing your push",
            "50 N, opposing your push",
            "Zero — nothing is moving",
          ],
          correctIndex: 0,
          explanation:
            "Static friction is self-adjusting: it supplies exactly what is needed to prevent sliding, up to its ceiling μ_s N. Since the cabinet is in equilibrium, friction exactly matches your 150 N push. The 200 N ceiling is only reached at the verge of slipping.",
        },
        {
          question:
            "In an Atwood machine with 5 kg and 3 kg masses, the string tension turns out to be about 36.8 N. Why must the tension lie between the two weights (29.4 N and 49 N)?",
          options: [
            "Because tension is always the average of the two weights",
            "Because the pulley absorbs the difference",
            "Because friction in the string dissipates the excess",
            "Because T must exceed the light mass's weight to lift it, yet be less than the heavy mass's weight so it can fall",
          ],
          correctIndex: 3,
          explanation:
            "Apply ΣF = ma to each body: the 3 kg mass accelerates upward only if T > 29.4 N, and the 5 kg mass accelerates downward only if T < 49 N. (The exact value, 36.75 N, is not the simple average — that would be 39.2 N.)",
        },
        {
          question:
            "An elevator is moving downward but slowing to a stop at a floor. What does a scale under a passenger read during the braking?",
          options: [
            "Less than their normal weight",
            "More than their normal weight",
            "Exactly their normal weight",
            "Zero",
          ],
          correctIndex: 1,
          explanation:
            "Slowing while moving down means the acceleration points upward, so N = m(g + a) > mg: the scale reads heavy. Apparent weight tracks acceleration, never velocity — the direction of travel is irrelevant.",
        },
      ],
    },
    {
      id: "momentum-and-collisions",
      title: "Momentum & Collisions",
      subtitle:
        "Impulse, conservation of momentum, and the physics of crashes, recoil, and rockets",
      sections: [
        {
          id: "impulse-and-momentum",
          title: "Impulse: Force Multiplied by Time",
          content: `
<p><strong>Momentum</strong> is mass times velocity, p = mv — a vector pointing along the motion, measured in kg·m/s. Newton's second law, in his own preferred form, says force equals the rate of change of momentum, which rearranges into the <strong>impulse–momentum theorem</strong>:</p>
<p style="text-align:center;"><strong>FΔt = Δp</strong></p>
<p>The product FΔt is the <em>impulse</em>. The profound consequence: a given momentum change can be achieved by a huge force for a short time or a gentle force for a long time. Every safety device ever built exploits this trade.</p>
<h3>Worked example</h3>
<p>A 0.16 kg cricket ball arrives at 30 m/s and is caught, ending at rest. The momentum change is Δp = 0.16 × 30 = 4.8 kg·m/s regardless of technique. But the force depends entirely on the stopping time:</p>
<ul>
  <li><strong>Stiff hands</strong> (Δt = 0.02 s): F = 4.8/0.02 = <strong>240 N</strong> — sting and possibly a dropped catch.</li>
  <li><strong>Hands drawn back with the ball</strong> (Δt = 0.5 s): F = 4.8/0.5 = <strong>9.6 N</strong> — twenty-five times gentler.</li>
</ul>
<p>Same physics: airbags and crumple zones stretch a crash from ~0.01 s to ~0.1 s, cutting peak force tenfold; gymnasts bend their knees on landing; ships' fenders are soft. You cannot negotiate with Δp, but Δt is yours to engineer.</p>
<p><strong>Variation.</strong> A 60 kg driver at 15 m/s (Δp = 900 kg·m/s) stops against a rigid dashboard in 0.01 s: F = 90,000 N — about 150 times body weight, unsurvivable. With belt, airbag, and crumple zone extending the stop to 0.15 s: F = 6,000 N — a survivable 10g.</p>
<div class="key-concept">
  <h4>Key Concept: Impulse Is a Vector</h4>
  <p>A ball bouncing off a wall at 30 m/s and returning at 30 m/s has Δp = 2mv, not zero — the direction reversed, and momentum is a vector. Walls that bounce things back take twice the impulse of walls that merely stop them.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Modern F1 cars can survive 50g crashes largely through sacrificial carbon-fibre crash structures that shatter progressively — each fracture buys another millisecond of Δt. The car is destroyed precisely so the driver is not.</p>
</div>`,
        },
        {
          id: "conservation-of-momentum",
          title: "Conservation of Momentum",
          content: `
<p>Here is the first great conservation law you can compute with. When two bodies collide, Newton's third law says they exert equal and opposite forces on each other for the same contact time — so they receive equal and opposite <em>impulses</em>, and their momentum changes cancel exactly. Hence:</p>
<div class="key-concept">
  <h4>Key Concept: Conservation of Momentum</h4>
  <p>If no net external force acts on a system, its total momentum is constant: <strong>total p before = total p after</strong>. This holds no matter how violent, messy, or brief the interaction — the internal forces can be anything at all.</p>
</div>
<p>That last clause is the superpower. You do not need to know the forces during a crash — millions of newtons, wildly varying, utterly unmeasurable — because they are internal to the system and cancel in pairs. Only the before and after matter.</p>
<h3>Worked example</h3>
<p>A 1200 kg car travelling at 20 m/s rear-ends a stationary 800 kg car; the wreckage locks together. How fast does it move?</p>
<ol>
  <li>Momentum before: 1200 × 20 + 800 × 0 = 24,000 kg·m/s</li>
  <li>Momentum after: (1200 + 800) × v = 2000v</li>
  <li>Conservation: 2000v = 24,000 → <strong>v = 12 m/s</strong></li>
</ol>
<p>Now audit the kinetic energy: before, ½ × 1200 × 20² = 240 kJ; after, ½ × 2000 × 12² = 144 kJ. Some <strong>96 kJ vanished</strong> into crumpled metal, heat, and sound. Momentum is conserved; kinetic energy is not — this asymmetry defines the next section.</p>
<p><strong>Variation.</strong> Head-on instead: the 800 kg car approaches at 10 m/s. Taking the first car's direction as positive: p = 24,000 − 8,000 = 16,000 kg·m/s → v = 16,000/2000 = <strong>8 m/s</strong> in the first car's direction. Momentum's vector nature means opposing motions subtract.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Crash investigators run this calculation in reverse: from skid marks and final wreckage positions they reconstruct pre-impact speeds, and the results are accepted as evidence in court. Conservation of momentum is literally the law.</p>
</div>`,
        },
        {
          id: "elastic-and-inelastic",
          title: "Elastic & Inelastic Collisions",
          content: `
<p>All collisions conserve momentum. They differ in what happens to kinetic energy:</p>
<table>
  <thead>
    <tr><th>Type</th><th>Momentum</th><th>Kinetic energy</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Elastic</strong></td><td>Conserved</td><td>Conserved</td><td>Billiard balls, atomic collisions</td></tr>
    <tr><td><strong>Inelastic</strong></td><td>Conserved</td><td>Partly lost</td><td>Most real crashes</td></tr>
    <tr><td><strong>Perfectly inelastic</strong></td><td>Conserved</td><td>Maximum loss — bodies stick</td><td>Coupling rail cars, mid-air catch</td></tr>
  </tbody>
</table>
<p>Two elastic results are worth memorizing. <strong>Equal masses exchange velocities:</strong> a moving ball striking an identical stationary one stops dead, the target departing with the full original velocity — Newton's cradle in action. And a light ball bouncing elastically off a massive wall reverses at essentially unchanged speed.</p>
<h3>Worked example: the ballistic pendulum</h3>
<p>A 10 g bullet embeds in a 2.99 kg block hanging on strings; the block swings up 5.0 cm. Find the bullet's speed. This is a <em>two-stage</em> problem, and the stages obey different laws:</p>
<ol>
  <li><strong>Swing (energy conserved):</strong> after the collision the block+bullet rises h = 0.05 m, so ½Mv² = Mgh → v = √(2 × 9.8 × 0.05) ≈ 0.99 m/s just after impact.</li>
  <li><strong>Impact (momentum conserved, KE not):</strong> mu = (m + M)v → 0.010 × u = 3.0 × 0.99 → <strong>u ≈ 297 m/s</strong>.</li>
</ol>
<p>Check the energy books: bullet KE ≈ ½ × 0.01 × 297² ≈ 441 J; block+bullet KE after ≈ 1.5 J. Over 99.6% of the energy became heat and deformation — using energy conservation across the impact itself would be catastrophically wrong. Choosing <em>which conservation law applies to which stage</em> is the entire art.</p>
<div class="analogy">
  <h3>Analogy: Money vs. Cash</h3>
  <p>Momentum is like total money — merely transferred, never destroyed, in every transaction. Kinetic energy is like cash specifically: a transaction can convert it to other forms (heat, sound, deformation). Elastic collisions are the rare all-cash deals.</p>
</div>`,
        },
        {
          id: "recoil-and-rockets",
          title: "Recoil & Rockets",
          content: `
<p>Conservation of momentum works just as well in reverse: start with total momentum zero, blow the system apart, and the pieces must carry equal and opposite momenta. This is <strong>recoil</strong> — and, iterated continuously, it is how rockets work.</p>
<h3>Worked example: rifle recoil</h3>
<p>A 4.0 kg rifle fires a 10 g bullet at 400 m/s. Total momentum starts at zero, so:</p>
<ol>
  <li>0 = m_b v_b + m_r v_r → 0 = 0.010 × 400 + 4.0 × v_r</li>
  <li>v_r = −4.0/4.0 = <strong>−1.0 m/s</strong> — the rifle recoils at 1 m/s.</li>
</ol>
<p>Momenta are equal and opposite (4.0 kg·m/s each), but kinetic energies are not: bullet ½ × 0.01 × 400² = 800 J; rifle ½ × 4 × 1² = 2 J. The lighter body carries almost all the energy — since KE = p²/2m, equal momenta mean energy inversely proportional to mass. This is why the bullet is lethal and the shoulder is merely bruised, and why in radioactive decay the light alpha particle, not the heavy nucleus, flies off with the energy.</p>
<h3>The rocket: continuous recoil</h3>
<p>A rocket is a machine that throws part of itself backward, very fast, continuously. Each parcel of exhaust ejected at speed v_e takes momentum backward; the rocket gains the same momentum forward. The thrust is:</p>
<p style="text-align:center;"><strong>Thrust = (Δm/Δt) × v_e</strong> — mass flow rate times exhaust speed</p>
<p><strong>Variation.</strong> A rocket burning 100 kg of propellant per second at exhaust speed 3000 m/s produces thrust = 100 × 3000 = <strong>300,000 N</strong> — enough to accelerate a 25-tonne rocket at 300,000/25,000 − 9.8 ≈ 2.2 m/s² straight up. As propellant burns off, the same thrust pushes ever less mass, so the acceleration climbs throughout the burn.</p>
<div class="key-concept">
  <h4>Key Concept: Nothing to Push Against — and No Need</h4>
  <p>Early critics of spaceflight insisted rockets could not work in vacuum with "nothing to push against." But a rocket pushes against its own exhaust: momentum conservation needs no road, no air, no medium. The 1920 New York Times editorial mocking Robert Goddard on exactly this point was formally retracted in July 1969 — as Apollo 11 was en route to the Moon.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does an airbag reduce injury in a crash? The occupant's momentum change is the same with or without it.",
          options: [
            "It reduces the momentum the occupant must lose",
            "It extends the stopping time, so the same Δp requires a smaller force",
            "It absorbs the car's momentum into the bag",
            "It reduces the occupant's mass effectively",
          ],
          correctIndex: 1,
          explanation:
            "FΔt = Δp is fixed by the crash, but stretching Δt from ~0.01 s to ~0.1 s cuts the peak force tenfold. Crumple zones, bent knees, and ships' fenders all run the same trade: buy time, spend less force.",
        },
        {
          question:
            "A 1200 kg car at 20 m/s hits a stationary 800 kg car and they lock together. Their common speed just after impact is:",
          options: ["12 m/s", "20 m/s", "10 m/s", "16 m/s"],
          correctIndex: 0,
          explanation:
            "Momentum is conserved: 1200 × 20 = 2000 × v → v = 12 m/s. Kinetic energy is NOT conserved here (240 kJ → 144 kJ) — the missing 96 kJ crumpled the metal. Momentum first, always, in collision problems.",
        },
        {
          question:
            "In a perfectly elastic head-on collision, a moving ball strikes an identical stationary ball. What happens?",
          options: [
            "Both move off together at half the speed",
            "The moving ball bounces straight back",
            "Both balls stop",
            "The first ball stops; the second moves off with the original velocity",
          ],
          correctIndex: 3,
          explanation:
            "Equal masses in an elastic collision exchange velocities — the only outcome that conserves both momentum and kinetic energy. It is exactly what you see in Newton's cradle. Moving off together (option 1) conserves momentum but loses KE, so it is the perfectly INELASTIC outcome.",
        },
        {
          question:
            "A rifle fires a bullet. Bullet and rifle receive equal and opposite momenta — so why is the bullet dangerous while the recoiling rifle is not?",
          options: [
            "The rifle actually receives less momentum than the bullet",
            "The bullet's momentum grows as it flies",
            "With equal momenta, KE = p²/2m — the much lighter bullet carries almost all the kinetic energy",
            "Newton's third law applies only weakly to explosions",
          ],
          correctIndex: 2,
          explanation:
            "Momenta are exactly equal and opposite (third law), but kinetic energy at fixed momentum is inversely proportional to mass. In the worked example the bullet took 800 J, the 400-times-heavier rifle just 2 J. Danger tracks energy, not momentum.",
        },
        {
          question: "How does a rocket accelerate in the vacuum of space?",
          options: [
            "By ejecting exhaust backward and gaining equal forward momentum",
            "By pushing against residual traces of atmosphere",
            "It cannot — rockets need air to push against",
            "By reducing its gravitational mass as fuel burns",
          ],
          correctIndex: 0,
          explanation:
            "A rocket pushes against its own exhaust: every kilogram of propellant flung backward at v_e gives the rocket forward momentum, with thrust = mass flow rate × exhaust speed. No external medium is needed — momentum conservation is self-contained.",
        },
      ],
    },
    {
      id: "work-energy-and-conservation",
      title: "Work, Energy & Conservation",
      subtitle:
        "Varying forces, conservative forces, and energy conservation as a problem-solving superpower",
      sections: [
        {
          id: "work-and-varying-forces",
          title: "Work, Including Varying Forces",
          content: `
<p>Work is energy transferred by a force acting through a distance — but only the component of force <em>along</em> the motion counts:</p>
<p style="text-align:center;"><strong>W = F d cos θ</strong></p>
<p>where θ is the angle between force and displacement. The cosine encodes three regimes: force along motion (θ = 0°) does full positive work; force perpendicular (θ = 90°) does <em>zero</em> work — which is why gravity does nothing to a satellite in circular orbit; force opposing motion (θ = 180°) does negative work, draining energy, as friction always does.</p>
<p><strong>Worked example.</strong> You drag a sled 5.0 m with a 20 N rope held at 60° above the horizontal: W = 20 × 5.0 × cos 60° = <strong>50 J</strong>. Half the force's effort is "wasted" pulling upward.</p>
<h3>When the force varies: area under the graph</h3>
<p>W = Fd fails if F changes along the way. The fix: on a force–displacement graph, <strong>work is the area under the curve</strong> — chop the motion into slivers so small F is nearly constant in each, sum F × Δx over all slivers. (In Phase 4 this becomes the integral ∫F dx; the picture is already exact.)</p>
<p>The showcase is the spring. Hooke's law says F = kx: the force ramps up linearly as you stretch. The F–x graph is a triangle of base x and height kx, so:</p>
<p style="text-align:center;"><strong>W = ½ k x²</strong> — the elastic potential energy stored</p>
<p><strong>Worked example.</strong> A spring with k = 200 N/m stretched by 0.10 m stores ½ × 200 × 0.10² = <strong>1.0 J</strong>. Note it is <em>not</em> F_final × x = 20 × 0.1 = 2 J — the force averaged only half its final value on the way out. <strong>Variation:</strong> stretching to 0.20 m stores 4.0 J: double the stretch, <em>quadruple</em> the energy, because the area of a triangle grows as the square of its base.</p>
<div class="key-concept">
  <h4>Key Concept: No Distance, No Work</h4>
  <p>Hold a 20 kg suitcase stationary for an hour and you do zero work on it, no matter how much your arms burn — the burn is your muscle fibres twitching internally. Physics' definition of work is narrower than everyday language, and the mismatch is deliberate: this definition is the one energy conservation obeys.</p>
</div>`,
        },
        {
          id: "kinetic-and-potential-energy",
          title: "Kinetic & Potential Energy",
          content: `
<p>Do net work on a body and its speed changes. Combining W = Fs with the suvat relation v² = u² + 2as gives the <strong>work–energy theorem</strong>:</p>
<p style="text-align:center;"><strong>W_net = ½mv² − ½mu² = ΔKE</strong></p>
<p>The quantity ½mv² is <strong>kinetic energy</strong> — the energy of motion. The theorem is Newton's second law in energy clothing, and it is often the faster tool because it never asks about time.</p>
<h3>Worked example: braking distance</h3>
<p>A 1000 kg car at 20 m/s brakes to a stop with 4000 N of friction. The brakes must destroy KE = ½ × 1000 × 20² = 200,000 J, so the stopping distance obeys 4000 × d = 200,000 → <strong>d = 50 m</strong>.</p>
<p><strong>Variation — the crucial one:</strong> from 40 m/s (double the speed), KE = 800,000 J → d = <strong>200 m</strong>. Double the speed, <em>quadruple</em> the braking distance, because KE grows as v². Every highway following-distance rule is this square law in disguise.</p>
<h3>Potential energy: stored work</h3>
<p>Lift a mass m through height h at constant speed and you do work mgh against gravity. That work is not lost — it is banked as <strong>gravitational potential energy</strong>, PE = mgh, recoverable in full on the way down. Likewise the spring's ½kx² from last section is elastic PE. Potential energy is work you have prepaid.</p>
<p>Only <em>changes</em> in PE matter, so you may set the zero level anywhere convenient — floor, table, sea level. Nothing physical depends on the choice; only Δ(PE) enters any equation.</p>
<div class="analogy">
  <h3>Analogy: Energy as Currency</h3>
  <p>KE is cash in hand; PE is money in the bank. Lifting a ball deposits mgh; dropping it withdraws the deposit as speed. The work–energy theorem is the bank statement: every change in your cash balance is accounted for by transactions (work done on or by you).</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Because KE ∝ v², wind turbine power scales as speed <em>cubed</em> (v² per unit mass, times mass arriving ∝ v). A site with 25% more wind delivers roughly double the energy — which is why turbine placement is a science of its own.</p>
</div>`,
        },
        {
          id: "conservative-forces",
          title: "Conservative Forces: Why Potential Energy Exists",
          content: `
<p>Not every force lets you define a potential energy. The dividing line is one question: <strong>does the work done depend on the path taken?</strong></p>
<ul>
  <li><strong>Conservative forces</strong> (gravity, spring force, later the electric force): work depends only on the <em>endpoints</em>. Carry a ball up a mountain by cable car or winding trail — gravity's work is −mgh either way. Consequently the work done around any closed loop is exactly zero: what gravity takes on the way up, it refunds in full on the way down.</li>
  <li><strong>Non-conservative forces</strong> (friction, air drag): work depends on the path — the longer the road, the more energy friction eats — and a closed loop costs you outright. There are no refunds; the energy has left mechanics for heat.</li>
</ul>
<p>This is precisely why potential energy exists for conservative forces only. PE is defined as the work the force will give back on returning to a reference point — a definition that only makes sense if that work has a unique, path-independent value. "Frictional potential energy" is impossible because friction's ledger depends on the route travelled, not the destination.</p>
<h3>Worked example</h3>
<p>A 2.0 kg block is moved from the floor to a shelf 1.5 m up — once straight up, once via a 5 m ramp-and-detour route.</p>
<ol>
  <li><strong>Gravity's work</strong> (both routes): −mgh = −2.0 × 9.8 × 1.5 = <strong>−29.4 J</strong>. Identical; ΔPE = +29.4 J regardless of path.</li>
  <li><strong>Friction's work</strong> on the ramp route (μ = 0.3, normal force ≈ 17 N along the 5 m ramp): ≈ −0.3 × 17 × 5 ≈ <strong>−25 J</strong> — and along a 10 m route it would be −50 J. Path-dependent; unrecoverable.</li>
</ol>
<div class="key-concept">
  <h4>Key Concept: The Test</h4>
  <p>Conservative ⇔ zero work around every closed loop ⇔ work depends only on endpoints ⇔ a potential energy function exists. These three statements are logically equivalent, and checking any one settles the matter.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>At the microscopic level friction is electromagnetic — and the electromagnetic force is conservative! The energy "lost" to friction is really mechanical energy scattered into random jiggling of countless atoms: heat. Nothing is destroyed; it is disorganized. That distinction becomes the second law of thermodynamics in Subject 12.</p>
</div>`,
        },
        {
          id: "energy-conservation-solver",
          title: "Energy Conservation as a Problem-Solving Superpower",
          content: `
<p>Assemble the pieces and you get mechanics' most elegant solver. If only conservative forces do work:</p>
<p style="text-align:center;"><strong>KE₁ + PE₁ = KE₂ + PE₂</strong></p>
<p>Energy just sloshes between kinetic and potential forms. If friction intrudes, the ledger still balances — you simply subtract its toll: KE₁ + PE₁ − W_friction = KE₂ + PE₂.</p>
<p>The power of the method is what it <em>ignores</em>: the path, the timing, the wildly varying forces along the way. Only the endpoints matter.</p>
<h3>Worked example: roller coaster</h3>
<p>A coaster car crests a 40 m hill at negligible speed, then plunges to ground level. Speed at the bottom? Forces vary constantly along the curving track — Newton's laws directly would be a nightmare. Energy conservation:</p>
<ol>
  <li>mgh = ½mv² (mass cancels, track shape irrelevant)</li>
  <li>v = √(2gh) = √(2 × 9.8 × 40) = √784 = <strong>28 m/s</strong> (≈ 100 km/h)</li>
</ol>
<p><strong>Variation 1.</strong> Speed at a second crest of height 15 m: ½v² = g(40 − 15) → v = √(2 × 9.8 × 25) ≈ <strong>22 m/s</strong>. Only the height <em>difference</em> enters.</p>
<p><strong>Variation 2 — with friction.</strong> If the car (mass 500 kg) actually arrives at the bottom at 25 m/s: energy lost = mgh − ½mv² = 196,000 − 156,250 ≈ <strong>39.8 kJ</strong> to friction and drag. Conservation with a leak still audits perfectly.</p>
<h3>Power: the rate of energy transfer</h3>
<p>Power is work per unit time, P = W/t, in watts (1 W = 1 J/s) — and for a force pushing at speed v, <strong>P = Fv</strong>. <strong>Worked example:</strong> a winch lifts 500 kg through 20 m in 25 s: P = mgh/t = 500 × 9.8 × 20/25 = <strong>3920 W</strong> ≈ 4 kW. <strong>Variation:</strong> a 1200 kg car climbing a 5° grade at a steady 20 m/s must supply P = mg sin θ × v = 1200 × 9.8 × 0.0872 × 20 ≈ <strong>20.5 kW</strong> against gravity alone, before drag — why hills expose weak engines. P = Fv also explains gear shifts: at fixed power, high force means low speed and vice versa.</p>
<div class="key-concept">
  <h4>Key Concept: Choose Your Weapon</h4>
  <p>Asked about forces, accelerations, or time → Newton's laws. Asked about speeds at positions, heights, distances → energy. Asked about collisions → momentum. The mark of fluency in mechanics is reaching for the right conservation law before reaching for F = ma.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A satellite moves in a perfectly circular orbit. How much work does gravity do on it per orbit?",
          options: [
            "Positive work on the near side, negative on the far side, netting positive",
            "Zero — the force is always perpendicular to the motion",
            "mgh per orbit",
            "It depends on the satellite's speed",
          ],
          correctIndex: 1,
          explanation:
            "W = Fd cos θ, and in a circular orbit gravity points along the radius while motion is along the circumference: θ = 90°, cos θ = 0, at every instant. No work, no speed change — which is exactly why circular orbits are stable at constant speed.",
        },
        {
          question:
            "A spring with k = 200 N/m is stretched 0.1 m, storing 1 J. How much energy does it store when stretched 0.2 m?",
          options: ["2 J", "1 J", "8 J", "4 J"],
          correctIndex: 3,
          explanation:
            "Elastic PE = ½kx² grows as the square of the stretch: ½ × 200 × 0.04 = 4 J. Doubling x quadruples the stored energy — the area under the linear F–x graph is a triangle, and triangles scale with the square of their base.",
        },
        {
          question:
            "A car's braking distance from 20 m/s is 50 m. From 40 m/s (same braking force), it is approximately:",
          options: ["200 m", "100 m", "70 m", "50 m"],
          correctIndex: 0,
          explanation:
            "The brakes must destroy KE = ½mv², which quadruples when speed doubles. With the same braking force, F·d = ΔKE means d quadruples too: 200 m. Stopping distance grows with the SQUARE of speed — the most practically important equation on the road.",
        },
        {
          question: "Why can't we define a 'frictional potential energy'?",
          options: [
            "Friction is too weak a force to store energy",
            "Friction only acts on rough surfaces",
            "Friction's work depends on the path taken, so no unique stored-energy value exists for a given position",
            "Frictional energy is negative, and potential energy must be positive",
          ],
          correctIndex: 2,
          explanation:
            "Potential energy is defined as recoverable, path-independent work — gravity's work from A to B is the same by any route. Friction's work depends on the route's length and never refunds around a closed loop, so no PE function can represent it. That energy leaves mechanics as heat.",
        },
        {
          question:
            "A coaster car starts from rest atop a 40 m hill of complicated shape. Ignoring friction, its speed at the bottom is:",
          options: [
            "Impossible to find without knowing the track shape",
            "28 m/s, regardless of the track shape",
            "40 m/s, one for each metre of height",
            "19.8 m/s",
          ],
          correctIndex: 1,
          explanation:
            "Energy conservation ignores the path entirely: mgh = ½mv² → v = √(2 × 9.8 × 40) = 28 m/s. The track's twists change the forces and the timing but not the final speed — that indifference to path is exactly what makes energy methods so powerful.",
        },
      ],
    },
    {
      id: "circular-motion-and-gravitation",
      title: "Circular Motion & Gravitation",
      subtitle:
        "Centripetal acceleration, Newton's gravity, Kepler's laws, and the physics of orbits",
      sections: [
        {
          id: "centripetal-acceleration",
          title: "Centripetal Acceleration",
          content: `
<p>Here is the surprise at the heart of circular motion: an object circling at <em>constant speed</em> is accelerating the whole time. Velocity is a vector, and its direction is changing continuously — and any change of velocity, in magnitude <em>or</em> direction, is acceleration. The acceleration points toward the centre of the circle (centripetal = "centre-seeking"), with magnitude:</p>
<p style="text-align:center;"><strong>a = v²/r = ω²r</strong></p>
<p>where ω is the angular velocity in radians per second, related to speed by v = ωr and to the period by ω = 2π/T. By Newton's second law, some real force must supply F = mv²/r toward the centre — tension, friction, gravity, a normal force. <strong>"Centripetal force" is a job description, not a new force</strong>; something on your free-body diagram must take the job, or the object flies off along the tangent.</p>
<h3>Worked example</h3>
<p>A 1000 kg car rounds a flat curve of radius 50 m at 15 m/s.</p>
<ol>
  <li>Required acceleration: a = v²/r = 225/50 = <strong>4.5 m/s²</strong> toward the centre.</li>
  <li>Required force: F = ma = <strong>4500 N</strong> — supplied entirely by tyre friction.</li>
  <li>Minimum friction coefficient: μ ≥ F/mg = 4500/9800 ≈ <strong>0.46</strong>. Dry asphalt (μ ≈ 0.9) manages easily; ice (μ ≈ 0.1) cannot — the car continues in a straight line, which feels like "sliding outward" but is really failing to turn.</li>
</ol>
<p><strong>Variation.</strong> Double the speed to 30 m/s: the required force quadruples to 18,000 N (F ∝ v²), needing μ ≈ 1.8 — beyond any tyre. Speed is savage on curves.</p>
<div class="analogy">
  <h3>Analogy: The Hammer Throw</h3>
  <p>Whirl a hammer on its wire and the wire's tension constantly drags it off its straight-line course into a circle. Let go, and the hammer does not fly outward — it flies along the tangent, in whatever straight line it had at release. There is no "centrifugal force" flinging things out; there is only inertia going straight while the centre-seeking force fights it.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Laboratory ultracentrifuges spin samples to over 100,000 revolutions per minute, producing centripetal accelerations near 1,000,000 m/s² — 100,000g — enough to separate molecules by mass. Same formula, a = ω²r, just breathtaking numbers.</p>
</div>`,
        },
        {
          id: "banked-curves",
          title: "Banked Curves",
          content: `
<p>If friction alone must turn a car, ice or rain can betray it. The engineering fix: <strong>tilt the road</strong>. On a banked curve the normal force — always perpendicular to the surface — leans inward, and its horizontal component can supply the centripetal force with no friction at all.</p>
<p>Resolve the normal force N on a curve banked at angle θ, for a car in a horizontal circle of radius r:</p>
<ul>
  <li>Vertical balance: N cos θ = mg</li>
  <li>Horizontal (centripetal): N sin θ = mv²/r</li>
</ul>
<p>Divide the second by the first, and both N and m cancel:</p>
<p style="text-align:center;"><strong>tan θ = v²/(rg)</strong></p>
<p>This defines the <strong>design speed</strong>: the one speed at which the banking alone turns the car, friction unemployed. Slower, and the car tends to slip down the bank (friction acts up-slope); faster, and it tends to slide up (friction acts down-slope). The banking doesn't eliminate friction's role at other speeds — it just dramatically widens the safe range.</p>
<h3>Worked example</h3>
<p>A highway curve of radius 200 m is designed for 25 m/s (90 km/h).</p>
<ol>
  <li>tan θ = v²/(rg) = 625/(200 × 9.8) = 625/1960 ≈ 0.319</li>
  <li>θ = tan⁻¹(0.319) ≈ <strong>17.7°</strong></li>
</ol>
<p><strong>Variation.</strong> The Daytona speedway's 31° banking with r ≈ 300 m gives a no-friction design speed of v = √(rg tan θ) = √(300 × 9.8 × 0.60) ≈ 42 m/s ≈ 150 km/h — and with racing-tyre friction on top, cars corner far faster still.</p>
<p>The same triangle of forces governs an aircraft banking into a turn (the lift vector tilts, its horizontal component turning the plane), a cyclist leaning into a corner, and the conical pendulum. One free-body diagram, many costumes.</p>
<div class="key-concept">
  <h4>Key Concept: Read the Geometry</h4>
  <p>Notice what cancelled: the mass. A loaded truck and a bicycle share the same design speed on the same curve. Whenever an answer is independent of mass, gravity and inertia (both proportional to m) are silently balancing each other — a hint that will bloom into the equivalence principle of general relativity.</p>
</div>`,
        },
        {
          id: "newtons-law-of-gravitation",
          title: "Newton's Law of Universal Gravitation",
          content: `
<p>Newton's great unification: the force dropping an apple and the force steering the Moon are one law. Every mass attracts every other with:</p>
<p style="text-align:center;"><strong>F = G m₁m₂ / r²</strong></p>
<p>where G = 6.67 × 10⁻¹¹ N·m²/kg² and r is the centre-to-centre distance. The force is always attractive, acts along the line joining the masses, and forms a third-law pair — the Earth pulls you with exactly the force you pull the Earth.</p>
<h3>Worked example: g from first principles</h3>
<p>The weight of a mass m at Earth's surface is the gravitational pull of the whole planet (M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m), so g = GM/R²:</p>
<p style="text-align:center;">g = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(6.37 × 10⁶)² ≈ 3.98 × 10¹⁴ / 4.06 × 10¹³ ≈ <strong>9.8 m/s²</strong></p>
<p>The familiar 9.8 is not a fundamental constant — it is G, M, and R in a trench coat, and it changes on every other world (Moon: 1.6 m/s²; Mars: 3.7 m/s²).</p>
<h3>The Moon test</h3>
<p>Newton's decisive check: the Moon sits at r ≈ 60 Earth radii, so the inverse-square law predicts its acceleration should be g/60² = 9.8/3600 ≈ 0.00272 m/s². Now compute the Moon's actual centripetal acceleration from its orbit (r = 3.84 × 10⁸ m, T = 27.3 days): a = 4π²r/T² = 4π² × 3.84 × 10⁸ / (2.36 × 10⁶)² ≈ <strong>0.00272 m/s²</strong>. The agreement — apple physics stretched a quarter-million miles — convinced Newton the law was truly universal.</p>
<p><strong>Variation.</strong> Gravitational force between two 70 kg people 1 m apart: F = 6.67 × 10⁻¹¹ × 4900 ≈ 3 × 10⁻⁷ N — the weight of a dust grain. Gravity is absurdly weak; it dominates the cosmos only because mass is never negative, so it always adds up.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>G is so small that it was first measured in 1798 by Henry Cavendish, using a torsion balance sensitive enough to feel lead spheres attracting each other. His result effectively "weighed the Earth," pinning down M to within about 1% of today's value — arguably the most delicate experiment of its century.</p>
</div>`,
        },
        {
          id: "orbits-and-keplers-laws",
          title: "Orbits & Kepler's Laws",
          content: `
<p>Half a century before Newton, Johannes Kepler distilled Tycho Brahe's planetary data into three laws:</p>
<ol>
  <li><strong>Orbits are ellipses</strong> with the Sun at one focus (circles are the special case).</li>
  <li><strong>Equal areas in equal times:</strong> a planet sweeps area at a constant rate — moving fastest at perihelion, slowest at aphelion. (This is conservation of angular momentum, as Chapter 7 will reveal.)</li>
  <li><strong>T² ∝ r³:</strong> the square of the period is proportional to the cube of the orbit's size, with the same constant for every planet round the Sun.</li>
</ol>
<p>Newton's triumph was <em>deriving</em> these from F = Gm₁m₂/r². For a circular orbit, gravity is the centripetal force:</p>
<p style="text-align:center;">GMm/r² = mv²/r, and with v = 2πr/T this rearranges to <strong>T² = (4π²/GM) r³</strong></p>
<p>Kepler's third law falls out, and the constant contains M — meaning you can <strong>weigh a central body by watching anything orbit it</strong>. This is how we know the mass of the Sun, of Jupiter (from its moons), and of the black hole at the galaxy's centre (from stars whipping around it).</p>
<h3>Worked example: the geostationary orbit</h3>
<p>What orbit radius gives a period of one sidereal day (T = 86,164 s), so a satellite hovers over one spot on the equator?</p>
<ol>
  <li>r³ = GMT²/4π² = (3.98 × 10¹⁴ × (8.62 × 10⁴)²)/39.5 ≈ 7.49 × 10²²  m³</li>
  <li>r ≈ <strong>4.22 × 10⁷ m</strong> = 42,200 km from Earth's centre — about 35,800 km altitude.</li>
</ol>
<p>Every satellite-TV dish on Earth points at this one ring in the sky. <strong>Variation:</strong> the ISS at r ≈ 6,780 km: T = 2π√(r³/GM) ≈ 5,570 s ≈ <strong>93 minutes</strong> — sixteen sunrises a day.</p>
<div class="key-concept">
  <h4>Key Concept: An Orbit Is Falling and Missing</h4>
  <p>Newton's own thought experiment: fire a cannonball horizontally from a high mountain, faster and faster. At ~7.9 km/s the ground curves away exactly as fast as the ball falls toward it — the fall never ends and never lands. Orbiting is not escaping gravity; it is perpetual free fall with enough sideways speed to keep missing.</p>
</div>`,
        },
        {
          id: "gravitational-field-energy-satellites",
          title: "Gravitational Fields, Energy & Escape",
          content: `
<p>Modern physics prefers to say a mass creates a <strong>gravitational field</strong> filling the space around it, and other masses respond to the field where they are. The field strength g = GM/r² is the force per kilogram; near Earth's surface it is our familiar 9.8 N/kg, and it thins with the inverse square of distance.</p>
<p>Far from a planet, PE = mgh fails (g isn't constant). The general gravitational potential energy, choosing PE = 0 at infinite separation, is:</p>
<p style="text-align:center;"><strong>U = −GMm/r</strong></p>
<p>Negative everywhere: gravity is attractive, so every bound pair sits in an energy debt relative to being infinitely separated. Climbing out of the well means paying the debt off; U rises toward zero as r → ∞.</p>
<h3>Worked example: escape velocity</h3>
<p>Minimum launch speed to leave Earth entirely (arrive at infinity with nothing to spare)? Set total energy to zero:</p>
<ol>
  <li>½mv² − GMm/R = 0</li>
  <li>v = √(2GM/R) = √(2 × 3.98 × 10¹⁴ / 6.37 × 10⁶) ≈ <strong>11.2 km/s</strong> — about 40,000 km/h, independent of the object's mass.</li>
</ol>
<p><strong>Variation: energy of a circular orbit.</strong> For a satellite at radius r, the orbit condition gives KE = ½GMm/r = −U/2, so the total energy is E = −GMm/2r. Two consequences worth savouring: (1) low orbit needs v = √(GM/R) ≈ <strong>7.9 km/s</strong> — escape speed is exactly √2 times orbital speed; (2) a satellite dragged to a <em>lower</em> orbit ends up moving <em>faster</em> — atmospheric drag on a decaying satellite makes it speed up, gravity paying out twice what drag steals.</p>
<div class="key-concept">
  <h4>Key Concept: Bound Means Negative</h4>
  <p>Total energy E &lt; 0: bound — an ellipse, forever captive. E = 0: parabolic escape, arriving at infinity exhausted. E &gt; 0: hyperbolic flyby with speed to spare. One signed number classifies every trajectory in the Solar System; mission designers live by it.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>An object whose escape velocity exceeds the speed of light is a black hole. Setting √(2GM/R) = c gives R = 2GM/c² — for Earth's mass, about 9 mm. Squeeze the planet to marble size and not even light climbs out of the well. Remarkably, this Newtonian estimate matches the Schwarzschild radius of general relativity exactly.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A car rounds a curve at constant speed. Is it accelerating?",
          options: [
            "No — constant speed means zero acceleration",
            "Only if the road is banked",
            "Yes — its velocity's direction is changing, so it accelerates toward the centre",
            "Yes — it accelerates outward, away from the centre",
          ],
          correctIndex: 2,
          explanation:
            "Velocity is a vector; changing its direction is acceleration even at fixed speed. The acceleration v²/r points toward the centre, supplied by tyre friction. The 'outward fling' you feel is your inertia trying to go straight, not a real outward force.",
        },
        {
          question:
            "A curve of radius 200 m is banked so a car at 25 m/s needs no friction. The banking angle satisfies tan θ = v²/(rg) ≈ 0.32. A truck of ten times the mass takes the curve at the same 25 m/s. It:",
          options: [
            "Also needs no friction — mass cancelled from the condition",
            "Slides up the bank because it is heavier",
            "Needs ten times the friction",
            "Must slow to 2.5 m/s",
          ],
          correctIndex: 0,
          explanation:
            "In deriving tan θ = v²/(rg), both N and m cancel — the design speed of a banked curve is independent of mass. Doubly loaded or empty, any vehicle at the design speed is turned by the banking alone.",
        },
        {
          question:
            "If the distance between two masses is tripled, the gravitational force between them becomes:",
          options: [
            "One third as large",
            "One ninth as large",
            "Three times as large",
            "Unchanged — gravity depends only on the masses",
          ],
          correctIndex: 1,
          explanation:
            "Inverse square: F ∝ 1/r², so tripling r divides the force by 3² = 9. This is exactly the scaling Newton verified with the Moon: at 60 Earth radii, the Moon's acceleration is g/3600.",
        },
        {
          question:
            "Kepler's third law, T² ∝ r³, lets astronomers determine what about a body like Jupiter by observing its moons?",
          options: [
            "Its radius",
            "Its temperature",
            "Its rotation rate",
            "Its mass",
          ],
          correctIndex: 3,
          explanation:
            "Newton's derivation gives T² = (4π²/GM)r³, where M is the mass of the CENTRAL body. Measure any moon's orbital radius and period, and M falls out. The same trick weighs the Sun, exoplanet host stars, and the Milky Way's central black hole.",
        },
        {
          question:
            "Earth's escape velocity is 11.2 km/s. This is the minimum launch speed to:",
          options: [
            "Reach the edge of the atmosphere",
            "Reach infinity with nothing to spare, for any projectile regardless of its mass",
            "Enter low Earth orbit",
            "Escape, but only for lightweight objects — heavier ones need more speed",
          ],
          correctIndex: 1,
          explanation:
            "Setting ½mv² − GMm/R = 0 gives v = √(2GM/R); the projectile's mass cancels, so 11.2 km/s serves a pebble or a battleship. Low orbit needs only 7.9 km/s — escape is exactly √2 times faster.",
        },
      ],
    },
    {
      id: "rotation-and-statics",
      title: "Rotation & Statics",
      subtitle:
        "Torque, moment of inertia, angular momentum, and why structures stand or fall",
      sections: [
        {
          id: "torque",
          title: "Torque: The Turning Effect of a Force",
          content: `
<p>Push a door near its hinge and it barely moves; push at the handle and it swings easily. Rotation cares not just about force but about <em>where</em> and <em>in what direction</em> the force is applied. The turning effectiveness of a force is its <strong>torque</strong>:</p>
<p style="text-align:center;"><strong>τ = r F sin θ</strong></p>
<p>where r is the distance from the pivot to the point of application and θ is the angle between the force and the lever arm. Equivalently, τ = force × <em>perpendicular distance</em> from the pivot to the force's line of action. Units: newton-metres (N·m). Maximum turning comes from pushing perpendicular to the arm (sin 90° = 1); a force aimed straight through the pivot (sin 0°) turns nothing at all — which is why door handles sit far from the hinges and are pushed at right angles.</p>
<h3>Worked example</h3>
<p>A stubborn bolt needs 20 N·m to crack loose. You have a 0.25 m wrench.</p>
<ol>
  <li>Pulling perpendicular: F = τ/r = 20/0.25 = <strong>80 N</strong> — a firm pull.</li>
  <li>Pulling at 60° to the wrench: F = τ/(r sin 60°) = 20/(0.25 × 0.866) ≈ <strong>92 N</strong> — the misalignment costs you.</li>
  <li>Slip a pipe over the wrench, doubling r to 0.50 m: F = 20/0.5 = <strong>40 N</strong> — the mechanic's "cheater bar," trading distance for force exactly as every lever does.</li>
</ol>
<p><strong>Variation.</strong> Wheel nuts on a car are torqued to ≈ 110 N·m. With a 0.3 m wrench that is 367 N — near your whole body weight, which is why people stand on the wrench (torque = mg × r ≈ 70 × 9.8 × 0.3 ≈ 206 N·m... check your handbook before you strip the thread).</p>
<div class="key-concept">
  <h4>Key Concept: Torque Is Force's Rotational Twin</h4>
  <p>Everything Newton says about forces and straight-line motion has a rotational mirror: torque plays force, angular acceleration plays acceleration, and (next section) moment of inertia plays mass. Learning the dictionary once lets you translate all of mechanics.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Archimedes' "give me a place to stand and I will move the Earth" is a torque boast: with a long enough lever arm, any force can produce any torque. The catch is distance — moving the Earth a millimetre with a human push would sweep the long arm through light-years.</p>
</div>`,
        },
        {
          id: "moment-of-inertia",
          title: "Moment of Inertia & the Rotational Second Law",
          content: `
<p>What plays the role of mass in rotation? Not mass alone — <em>where</em> the mass sits matters. Spin a mass m at radius r and its rotational laziness is mr²; add up every particle in a body and you get its <strong>moment of inertia</strong>, I = Σmr², in kg·m². The rotational form of Newton's second law is then:</p>
<p style="text-align:center;"><strong>τ = I α</strong></p>
<p>with α the angular acceleration in rad/s². Standard shapes (mass M, radius R or length L, spinning about the usual axis):</p>
<table>
  <thead>
    <tr><th>Body</th><th>I</th></tr>
  </thead>
  <tbody>
    <tr><td>Point mass, radius r</td><td>mr²</td></tr>
    <tr><td>Hoop / thin ring</td><td>MR²</td></tr>
    <tr><td>Solid disc / cylinder</td><td>½MR²</td></tr>
    <tr><td>Solid sphere</td><td>⅖MR²</td></tr>
    <tr><td>Thin rod, axis through centre</td><td>ML²/12</td></tr>
  </tbody>
</table>
<p>The pattern: the farther the mass from the axis, the larger I. A hoop (all mass at radius R) resists spin-up twice as hard as a disc of equal mass and radius (much mass near the axle). This is why flywheels are rim-heavy and racing wheels are light at the rim.</p>
<h3>Worked example</h3>
<p>A solid disc grindstone, M = 2.0 kg, R = 0.10 m, is driven by a 0.50 N·m torque from rest.</p>
<ol>
  <li>I = ½MR² = ½ × 2.0 × 0.01 = 0.010 kg·m²</li>
  <li>α = τ/I = 0.50/0.010 = <strong>50 rad/s²</strong></li>
  <li>After 4.0 s: ω = αt = 200 rad/s ≈ 1900 rpm, and its stored rotational KE = ½Iω² = ½ × 0.01 × 200² = <strong>200 J</strong>.</li>
</ol>
<p><strong>Variation.</strong> Same mass shaped into a hoop: I doubles to 0.020 kg·m², α halves to 25 rad/s². Identical torque, identical mass — half the response, purely because of geometry.</p>
<div class="analogy">
  <h3>Analogy: The Spinning Office Chair</h3>
  <p>Sit on a swivel chair holding weights, arms out, and have someone spin you: you turn ponderously. Pull the weights to your chest and the same push spins you briskly. You changed no mass — only its distribution, and I with it. (Hold on: this experiment also previews angular momentum conservation.)</p>
</div>`,
        },
        {
          id: "angular-momentum",
          title: "Angular Momentum & Its Conservation",
          content: `
<p>Completing the rotational dictionary: angular momentum <strong>L = Iω</strong> mirrors linear momentum p = mv. And just as p is conserved without external forces, <strong>L is conserved when no external torque acts</strong>. But rotation adds a twist unavailable to linear motion: a body can change its own I mid-spin by rearranging its mass — and ω must respond instantly to keep L fixed.</p>
<h3>Worked example: the figure skater</h3>
<p>A skater spins at ω = 2.0 rad/s with arms out, I = 4.0 kg·m². She snaps her arms in, cutting I to 1.0 kg·m².</p>
<ol>
  <li>Conservation: I₁ω₁ = I₂ω₂ → 4.0 × 2.0 = 1.0 × ω₂ → <strong>ω₂ = 8.0 rad/s</strong> — four times faster.</li>
  <li>Energy check: KE₁ = ½ × 4 × 2² = 8 J; KE₂ = ½ × 1 × 8² = 32 J. Kinetic energy <em>quadrupled</em>. No contradiction: her muscles did 24 J of work hauling her arms inward against the spin's tendency to fling them out. L is conserved; energy was honestly paid for.</li>
</ol>
<p><strong>Variation.</strong> A collapsing star pulls the same trick at cosmic scale: shrink the Sun's core (ω ≈ 1 revolution/25 days) to a 10 km neutron star and I drops by ~10¹⁰ — spin-up to hundreds of revolutions <em>per second</em>. Pulsars are skaters with no arms left to extend.</p>
<p>Angular momentum is also a vector (along the spin axis), and torque-free bodies keep its <em>direction</em> fixed too. That rigidity in space is why a spinning top resists falling over, a rifled bullet flies true, gyroscopes steer aircraft and spacecraft, and a moving bicycle steadies itself. And Kepler's equal-areas law? A planet's L about the Sun is conserved because gravity, pointing along r, exerts zero torque — sweeping equal areas in equal times is angular momentum conservation wearing an astronomer's hat.</p>
<div class="key-concept">
  <h4>Key Concept: The Three Great Conservation Laws</h4>
  <p>Energy, momentum, angular momentum: mechanics' complete set. Deep theorems (Noether's, Phase 5) tie each to a symmetry of nature — energy to time-translation, momentum to space-translation, angular momentum to rotation. Conservation laws are not accounting conveniences; they are the universe's symmetries made audible.</p>
</div>`,
        },
        {
          id: "rolling-motion",
          title: "Rolling: Translation Meets Rotation",
          content: `
<p>A wheel rolling without slipping obeys one golden constraint: the contact point is momentarily at rest on the road, which locks translation to rotation:</p>
<p style="text-align:center;"><strong>v = ωR</strong></p>
<p>The wheel's centre moves at v while the rim spins at ωR — equal and opposite at the bottom (net zero: no skidding) and <em>adding</em> at the top, which therefore moves at 2v. Photograph a rolling wheel and the top spokes blur while the bottom ones stay sharp.</p>
<p>Rolling kinetic energy splits into two accounts:</p>
<p style="text-align:center;">KE = ½mv² + ½Iω² = ½mv² (1 + I/mR²)</p>
<h3>Worked example: the great downhill race</h3>
<p>Roll a hoop, a solid disc, and a solid sphere (any masses, any radii) down the same ramp of height h = 1.0 m. Energy conservation: mgh = ½mv²(1 + I/mR²), so</p>
<p style="text-align:center;"><strong>v = √( 2gh / (1 + I/mR²) )</strong></p>
<ul>
  <li><strong>Sphere</strong> (I/mR² = ⅖): v = √(2 × 9.8 × 1.0/1.4) ≈ <strong>3.74 m/s</strong> — wins.</li>
  <li><strong>Disc</strong> (½): v = √(19.6/1.5) ≈ <strong>3.61 m/s</strong> — second.</li>
  <li><strong>Hoop</strong> (1): v = √(19.6/2) ≈ <strong>3.13 m/s</strong> — last, every time.</li>
</ul>
<p>Mass and radius cancel completely; only the <em>shape</em> of the mass distribution decides. The hoop banks half its energy in rotation, leaving less for forward speed; the sphere banks only 2/7. Compare a frictionless sliding block: v = √(2gh) ≈ 4.43 m/s — faster than all rollers, since it pays no rotation tax.</p>
<p><strong>Variation.</strong> Which reaches the bottom first if released together? Same ordering — sphere, disc, hoop — regardless of size or mass. A bowling ball and a marble (both solid spheres) tie exactly.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Galileo used rolling balls on inclines to slow free fall enough to time with water clocks — but rolling dilutes gravity by that factor (1 + I/mR²) = 7/5. His measured accelerations were 5/7 of g's incline component. Fortunately he cared about the <em>pattern</em> (distance ∝ time²), which rolling preserves perfectly.</p>
</div>`,
        },
        {
          id: "equilibrium-and-stability",
          title: "Statics: Equilibrium & Stability",
          content: `
<p>Why do bridges, cranes, and ladders stand still? A rigid body is in <strong>equilibrium</strong> only if two conditions hold simultaneously:</p>
<ol>
  <li><strong>ΣF = 0</strong> — no net force (no linear acceleration)</li>
  <li><strong>Στ = 0</strong> — no net torque about <em>any</em> point (no angular acceleration)</li>
</ol>
<p>The freedom to choose your torque pivot anywhere is the statics superpower: put the pivot on the line of an unknown force, and that force vanishes from the torque equation.</p>
<h3>Worked example: the seesaw, then the plank</h3>
<p>A 60 kg parent sits 1.2 m from a seesaw's pivot. Where must a 24 kg child sit to balance? Στ = 0: 60g × 1.2 = 24g × d → d = <strong>3.0 m</strong> on the far side. Torque balance is the ancient law of the lever.</p>
<p>Now a harder classic: a uniform 20 kg plank, 4.0 m long, rests on two supports at its ends, and a 60 kg painter stands 1.0 m from the left end. Find the support forces. Take torques about the left support (eliminating its unknown force):</p>
<ol>
  <li>Στ = 0: N_right × 4.0 = 20g × 2.0 (plank's weight at its centre) + 60g × 1.0 → N_right = (392 + 588)/4 = <strong>245 N</strong></li>
  <li>ΣF = 0: N_left = (20 + 60)g − 245 = 784 − 245 = <strong>539 N</strong></li>
</ol>
<p>The left support carries more, as intuition demands — the painter stands nearer to it. As she walks right, the loads shift continuously; when she passes the right support onto an overhang, N_left can hit zero and the plank tips. That tipping threshold is a statics calculation every scaffolder implicitly trusts.</p>
<h3>Stability</h3>
<p>Equilibrium comes in flavours: <strong>stable</strong> (a marble in a bowl — displaced, it returns), <strong>unstable</strong> (a marble on a dome — displaced, it flees), <strong>neutral</strong> (a marble on a table). For standing objects the rule is geometric: a body topples when the vertical line through its <strong>centre of gravity</strong> exits its base of support. Wide stance and low centre of gravity = stable; that is the entire design philosophy of racing cars, Sumo stances, and the reason the leaning tower of Pisa still stands — its centreline, tilted as it is, remains inside the base.</p>
<div class="key-concept">
  <h4>Key Concept: Two Equations, All of Civil Engineering</h4>
  <p>ΣF = 0 and Στ = 0, applied piece by piece, size every beam, cable, and joint of a static structure. The full discipline of structural engineering is these two lines plus material limits and imagination.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A 20 N·m torque is needed to loosen a bolt. Using a 0.25 m wrench and pulling perpendicular to it requires 80 N. Slipping a pipe over the wrench to double its length to 0.5 m requires:",
          options: ["160 N", "80 N — length doesn't matter", "40 N", "20 N"],
          correctIndex: 2,
          explanation:
            "τ = rF for a perpendicular pull, so F = τ/r = 20/0.5 = 40 N. Doubling the lever arm halves the needed force — the mechanic's cheater bar, and the principle of every lever since Archimedes.",
        },
        {
          question:
            "A hoop and a solid disc have equal mass and radius. The same torque is applied to each. Which spins up faster, and why?",
          options: [
            "The hoop — its mass is farther out, giving it more leverage",
            "The disc — its smaller moment of inertia (½MR² vs MR²) means twice the angular acceleration",
            "Both the same — equal mass, radius, and torque",
            "The hoop — rings always outspin discs",
          ],
          correctIndex: 1,
          explanation:
            "α = τ/I, and I measures how far from the axis the mass sits: hoop MR², disc ½MR². Same torque, half the moment of inertia, double the angular acceleration for the disc. Mass distribution, not just mass, governs rotation.",
        },
        {
          question:
            "A spinning skater pulls her arms in and speeds up from 2 to 8 rad/s. Her kinetic energy quadruples. Where did the extra energy come from?",
          options: [
            "Nowhere — rotational KE isn't a real energy",
            "From the ice pushing on her skates",
            "Angular momentum was converted into energy",
            "From work her muscles did pulling her arms inward",
          ],
          correctIndex: 3,
          explanation:
            "Angular momentum L = Iω is conserved (no external torque), which forces ω up as I drops — but energy is NOT conserved for free here. Her arms 'want' to fly outward; hauling them in against that tendency takes real muscular work, which appears precisely as the extra ½Iω².",
        },
        {
          question:
            "A solid sphere, a solid disc, and a hoop roll from rest down the same ramp. The finishing order is:",
          options: [
            "Sphere, disc, hoop — smaller I/mR² keeps more energy in translation",
            "Hoop, disc, sphere — more rotational storage means more speed",
            "A tie — mass and radius cancel, so shape can't matter either",
            "Whichever is heaviest wins",
          ],
          correctIndex: 0,
          explanation:
            "v = √(2gh/(1 + I/mR²)): the sphere (⅖) taxes the least energy for rotation, the hoop (1) the most. Mass and radius cancel but the SHAPE factor I/mR² survives — a marble and a bowling ball tie, yet both beat any disc, which beats any hoop.",
        },
        {
          question:
            "For a rigid body to be in static equilibrium, which conditions must hold?",
          options: [
            "ΣF = 0 is enough — no net force means no motion",
            "Στ = 0 is enough — no net torque means no rotation",
            "Both ΣF = 0 and Στ = 0",
            "ΣF = 0, Στ = 0, and the body must have no stored energy",
          ],
          correctIndex: 2,
          explanation:
            "Two equal and opposite forces applied at different points give ΣF = 0 yet still spin the body (a couple) — force balance alone is insufficient. Equilibrium demands both zero net force AND zero net torque about any point. These two conditions are the entire foundation of statics.",
        },
      ],
    },
    {
      id: "oscillations",
      title: "Oscillations",
      subtitle:
        "Simple harmonic motion, pendulums and springs, damping and resonance — the heartbeat of physics",
      sections: [
        {
          id: "simple-harmonic-motion",
          title: "Simple Harmonic Motion Defined",
          content: `
<p>Displace almost any stable system from equilibrium — a spring, a pendulum, a floating buoy, an atom in a crystal — and a restoring force pulls it back. When that force is <em>proportional</em> to the displacement and opposite in direction, the motion has a special name and an exact solution. <strong>Simple harmonic motion (SHM)</strong> is defined by:</p>
<p style="text-align:center;"><strong>a = −ω²x</strong></p>
<p>acceleration proportional to displacement, always aimed at equilibrium. The minus sign is the whole story: far out means strongly pulled back. The resulting motion is sinusoidal:</p>
<p style="text-align:center;">x = A cos(ωt),  v = −Aω sin(ωt),  a = −Aω² cos(ωt)</p>
<p>Here A is the <strong>amplitude</strong> (maximum displacement), ω the angular frequency, and the period is T = 2π/ω with frequency f = 1/T. Reading the trio: speed peaks (v_max = Aω) at the centre where acceleration is zero, and acceleration peaks (a_max = Aω²) at the extremes where the object is momentarily at rest. The object dawdles at the turning points and rushes through the middle.</p>
<p>The deepest property: <strong>the period is independent of the amplitude</strong>. Swing wider and the oscillator travels farther but proportionally faster; the round-trip time is untouched. This "isochronism" is what made pendulum clocks possible — the swing can decay all day while the tick rate holds.</p>
<h3>Worked example</h3>
<p>A point oscillates in SHM with A = 0.05 m and f = 2.0 Hz.</p>
<ol>
  <li>ω = 2πf = 4π ≈ 12.6 rad/s</li>
  <li>v_max = Aω = 0.05 × 12.6 ≈ <strong>0.63 m/s</strong> (at the centre)</li>
  <li>a_max = Aω² = 0.05 × 158 ≈ <strong>7.9 m/s²</strong> (at the extremes) — nearly a full g of acceleration from a gentle 5 cm wobble at 2 Hz.</li>
</ol>
<p><strong>Variation.</strong> Doubling the frequency at fixed amplitude doubles v_max but <em>quadruples</em> a_max (ω² scaling) — why high-frequency vibration is so destructive to machinery.</p>
<div class="analogy">
  <h3>Analogy: The Shadow of a Circle</h3>
  <p>Move a peg round a circle at steady angular speed ω and shine light from the side: the peg's shadow on the wall executes perfect SHM. Circular motion viewed edge-on IS simple harmonic motion — one geometric fact that gifts us every formula above, and explains why ω is called an angular frequency for a motion with no angles in sight.</p>
</div>`,
        },
        {
          id: "pendulum-and-spring",
          title: "The Pendulum & the Spring",
          content: `
<p>Two archetypes dominate SHM, and their period formulas are the most quoted in mechanics.</p>
<h3>The mass on a spring</h3>
<p>Hooke's law gives F = −kx: restoring force proportional to displacement — SHM by definition, with mω² = k. Hence:</p>
<p style="text-align:center;"><strong>T = 2π√(m/k)</strong></p>
<p>Stiffer spring (larger k) → faster oscillation; larger mass → slower. Amplitude and gravity appear nowhere — a vertical spring oscillates with the same period as a horizontal one, gravity merely shifting the equilibrium point.</p>
<h3>The simple pendulum</h3>
<p>Displace a pendulum by angle θ and the restoring force is mg sin θ — <em>not</em> proportional to θ, so a pendulum is not exactly SHM. But for small angles, sin θ ≈ θ (in radians; at 10° the error is 0.5%), the force becomes proportional to displacement, and:</p>
<p style="text-align:center;"><strong>T = 2π√(L/g)</strong></p>
<p>Exactly the form dimensional analysis predicted in Chapter 1 — now with its 2π. The mass cancels (gravity both drives and resists in proportion to m), so a lead bob and a wooden one, same length, keep identical time.</p>
<h3>Worked examples</h3>
<ol>
  <li><strong>The metre pendulum:</strong> T = 2π√(1.00/9.8) ≈ <strong>2.0 s</strong> — one second per swing, the historical "seconds pendulum" that once nearly defined the metre.</li>
  <li><strong>A spring system:</strong> m = 0.50 kg on a k = 20 N/m spring: T = 2π√(0.025) ≈ <strong>0.99 s</strong>.</li>
  <li><strong>Variation — measuring g:</strong> carry the metre pendulum up a mountain where g = 9.78 m/s²: T lengthens to 2.009 s. Pendulum clocks literally run slow at altitude, and 18th-century surveyors mapped Earth's gravity by exactly this drift.</li>
  <li><strong>Variation — quadrupling:</strong> to double either period, quadruple L (or m): the square root demands it.</li>
</ol>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>The 1851 Foucault pendulum in Paris — 67 m of wire, T ≈ 16.4 s — did more than keep time: its swing plane slowly rotated as the Earth turned beneath it, the first direct laboratory proof of the planet's rotation. It still swings in the Panthéon today.</p>
</div>`,
        },
        {
          id: "energy-in-shm",
          title: "Energy in SHM",
          content: `
<p>An undamped oscillator is a perfect energy pendulum-swing between two accounts. For a spring system, elastic PE = ½kx² and KE = ½mv²; their sum at any instant is fixed by the amplitude alone:</p>
<p style="text-align:center;"><strong>E_total = ½kA²</strong></p>
<ul>
  <li><strong>At the extremes</strong> (x = ±A): all potential, v = 0 — the account is fully in PE.</li>
  <li><strong>At the centre</strong> (x = 0): all kinetic, v = v_max = Aω — fully in KE.</li>
  <li><strong>In between:</strong> KE = ½k(A² − x²), a continuous slosh at twice the oscillation frequency (each swing passes the centre twice).</li>
</ul>
<p>The quadratic dependence on amplitude is worth internalizing: <strong>double the amplitude, four times the energy</strong>. A wave of twice the height carries four times the punch — a scaling that returns for sound, light, and ocean waves in Subject 13.</p>
<h3>Worked example</h3>
<p>The 0.50 kg mass on the k = 20 N/m spring is pulled 0.10 m from equilibrium and released.</p>
<ol>
  <li>Total energy: E = ½ × 20 × 0.10² = <strong>0.10 J</strong> — the budget for the entire motion, forever (no friction).</li>
  <li>Maximum speed (at centre): ½mv² = 0.10 → v_max = √(0.4) ≈ <strong>0.63 m/s</strong>. (Check: Aω = 0.10 × √(k/m) = 0.10 × 6.32 ✓)</li>
  <li>Speed at x = 0.05 m: KE = ½ × 20 × (0.01 − 0.0025) = 0.075 J → v = √(2 × 0.075/0.5) ≈ <strong>0.55 m/s</strong>. Halfway out in distance, the oscillator still has three-quarters of its energy in motion.</li>
</ol>
<p><strong>Variation.</strong> Where are KE and PE equal? ½kx² = ½ × ½kA² → x = A/√2 ≈ 0.707A — not halfway, another victim of the square law.</p>
<div class="key-concept">
  <h4>Key Concept: The Universal Template</h4>
  <p>Any energy landscape has valleys, and near the bottom of ANY smooth valley the walls look parabolic (½kx²-shaped). That is why SHM is everywhere: molecules vibrating in bonds, atoms in crystals, ions in traps, even fields in the vacuum — all are approximately harmonic oscillators near equilibrium. Master this one system and you hold the template for half of physics.</p>
</div>`,
        },
        {
          id: "damping-and-resonance",
          title: "Damping & Resonance",
          content: `
<p>Real oscillators leak energy — friction, air drag, internal flexing — and the leak is called <strong>damping</strong>. Three regimes matter:</p>
<ul>
  <li><strong>Light damping:</strong> oscillation continues at (almost) the natural frequency while the amplitude decays exponentially — each cycle loses the same <em>fraction</em> of energy. A struck tuning fork.</li>
  <li><strong>Critical damping:</strong> the fastest possible return to equilibrium with no overshoot. This is the engineering sweet spot: car suspensions, analogue meter needles, and self-closing doors are tuned near it.</li>
  <li><strong>Heavy (over)damping:</strong> no oscillation, just a slow ooze home. A pendulum in honey.</li>
</ul>
<p>Now drive a damped oscillator with a periodic force. The response amplitude depends dramatically on the driving frequency, peaking sharply when it matches the system's natural frequency. That peak is <strong>resonance</strong>: each push arrives perfectly in step, energy accumulates cycle after cycle, and a modest force builds an enormous amplitude — limited only by the damping. Lighter damping means a taller, narrower resonance peak.</p>
<p>Resonance is both tool and menace:</p>
<ul>
  <li><strong>Tool:</strong> radio tuning (circuit resonant at one station's frequency), musical instruments (air columns and strings amplifying select frequencies), MRI (nuclear magnetic resonance), microwave ovens driving water molecules, a child's swing pushed in rhythm.</li>
  <li><strong>Menace:</strong> London's Millennium Bridge (2000) swayed alarmingly when pedestrians' footfalls synchronized with its 1 Hz lateral mode — closed for two years of damper retrofits. Soldiers break step crossing bridges. Washing machines shudder violently at one particular spin-up speed — the drum sweeping through the frame's natural frequency.</li>
</ul>
<p><strong>Worked example.</strong> A swing with L = 2.5 m has natural frequency f = (1/2π)√(g/L) ≈ 0.32 Hz — push every 3.2 s and tiny shoves build a soaring amplitude; push at 2 s or 5 s intervals and you fight yourself. Every child discovers resonant driving empirically.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>The famous 1940 Tacoma Narrows Bridge collapse is often mislabelled simple resonance. The modern verdict is aeroelastic flutter — a self-excited feedback where the bridge's own twisting motion harvested energy from steady 68 km/h wind. Subtler than resonance, same moral: oscillations that feed on a driving energy source can grow until something breaks.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "The defining condition for simple harmonic motion is:",
          options: [
            "Acceleration proportional to displacement and directed toward equilibrium (a = −ω²x)",
            "Constant acceleration throughout the motion",
            "Speed proportional to displacement",
            "Any motion that repeats periodically",
          ],
          correctIndex: 0,
          explanation:
            "SHM requires a linear restoring law: a = −ω²x. The minus sign (always aimed back at equilibrium) is essential. Many motions repeat without being SHM — a bouncing ball is periodic but its acceleration is constant between bounces, not proportional to displacement.",
        },
        {
          question:
            "A pendulum clock is carried up a mountain, where g is slightly smaller. The clock:",
          options: [
            "Runs fast — less gravity means less resistance",
            "Runs slow — T = 2π√(L/g) lengthens as g decreases",
            "Keeps perfect time — the period depends only on length",
            "Stops entirely",
          ],
          correctIndex: 1,
          explanation:
            "T = 2π√(L/g): smaller g means a longer period, so each 'second' of swinging takes more real time and the clock falls behind. Eighteenth-century surveyors exploited exactly this drift to map variations in Earth's gravity.",
        },
        {
          question:
            "In SHM, where is the oscillator's speed greatest, and where is its acceleration greatest?",
          options: [
            "Both greatest at the extremes",
            "Both greatest at the centre",
            "Speed greatest at the extremes; acceleration at the centre",
            "Speed greatest at the centre; acceleration at the extremes",
          ],
          correctIndex: 3,
          explanation:
            "At the centre, all energy is kinetic (v_max = Aω) but x = 0, so a = −ω²x = 0. At the extremes, the oscillator is momentarily at rest while displacement — hence restoring acceleration Aω² — peaks. Speed and acceleration peak in opposite places.",
        },
        {
          question:
            "Doubling the amplitude of an undamped oscillator multiplies its total energy by:",
          options: ["√2", "2", "4", "8"],
          correctIndex: 2,
          explanation:
            "E = ½kA² depends on the square of the amplitude: double A, quadruple E. The same square law will follow you into waves — twice the wave height, four times the energy delivered.",
        },
        {
          question:
            "Why did engineers add dampers to London's Millennium Bridge after its opening in 2000?",
          options: [
            "To increase the bridge's natural frequency above walking pace",
            "To stiffen the deck against wind loads",
            "Pedestrians' synchronized footfalls were resonantly driving the bridge's ~1 Hz lateral sway, and damping limits resonant amplitude",
            "To reduce the bridge's weight",
          ],
          correctIndex: 2,
          explanation:
            "Footfall frequency matched the bridge's natural lateral mode, and — worse — the sway encouraged walkers to synchronize, deepening the drive. Resonant amplitude is limited chiefly by damping, so retrofitting dampers (rather than rebuilding the span) was the cure. It reopened in 2002, steady.",
        },
      ],
    },
    {
      id: "fluids",
      title: "Fluids",
      subtitle:
        "Continuity, Bernoulli's principle, and a first look at viscosity — mechanics of flow",
      sections: [
        {
          id: "pressure-revisited",
          title: "Pressure, Now with Mathematics",
          content: `
<p>Pressure is force per unit area, P = F/A, in pascals (1 Pa = 1 N/m²) — and in a fluid at rest it acts equally in all directions at a given point. Two quantitative results power everything else.</p>
<h3>Pressure grows with depth</h3>
<p>A column of fluid must support the weight of everything above it:</p>
<p style="text-align:center;"><strong>P = P₀ + ρgh</strong></p>
<p>where P₀ is the surface pressure (usually atmospheric, ≈ 101 kPa), ρ the fluid density, h the depth. Only depth matters — not the container's shape or the total volume. A thin tube and a lake exert the same pressure at the same depth.</p>
<p><strong>Worked example.</strong> At the bottom of a 10 m swimming pool (ρ = 1000 kg/m³): added pressure = ρgh = 1000 × 9.8 × 10 = 98,000 Pa ≈ <strong>one extra atmosphere</strong>. Every 10 m of water adds another atmosphere — divers' rule of thumb, and the reason a Titanic-depth submersible at 3,800 m endures ≈ 380 atm, about 38 MPa of crush.</p>
<h3>Pascal's principle and the hydraulic lever</h3>
<p>Pressure applied to an enclosed fluid transmits undiminished throughout. Connect a small piston (area A₁) to a large one (A₂) and equal pressures mean unequal forces:</p>
<p style="text-align:center;">F₂ = F₁ × (A₂/A₁)</p>
<p><strong>Worked example.</strong> Press 200 N on a 0.005 m² master piston of a car lift with a 0.100 m² output piston: F₂ = 200 × 20 = <strong>4000 N</strong> — enough to hoist a small car with one arm. No free lunch, though: to raise the car 0.1 m you must pump the small piston through 2.0 m of travel. Force is multiplied by 20; distance is divided by 20; work (energy) is conserved exactly. The hydraulic press is a lever made of liquid — and it is how car brakes deliver your modest pedal push to four wheels at once, undiminished.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Atmospheric pressure is the weight of the air column above you — about 10 tonnes pressing on each square metre. You don't notice because it pushes equally from all sides, and from inside you. Torricelli's barometer (1643) measured it first: the atmosphere can hold up 76 cm of mercury, or equivalently about 10 m of water — which is exactly why suction pumps can never raise well water more than 10 m, a fact that puzzled mine engineers for a century.</p>
</div>`,
        },
        {
          id: "continuity-equation",
          title: "The Continuity Equation",
          content: `
<p>Set the fluid moving and the first law of flow is bookkeeping: in a steady flow of an incompressible fluid, whatever volume enters a pipe each second must leave it each second — fluid does not pile up or vanish. The volume flow rate Q = Av (area × speed, in m³/s) is therefore the same at every cross-section:</p>
<p style="text-align:center;"><strong>A₁v₁ = A₂v₂</strong></p>
<p>The consequence is instinctively familiar: <strong>narrow means fast</strong>. Squeeze the flow through a smaller area and it must speed up in exact inverse proportion.</p>
<h3>Worked example</h3>
<p>A garden hose of cross-section 2.0 cm² delivers water at 1.5 m/s. You cap it with a nozzle of 0.25 cm².</p>
<ol>
  <li>Flow rate: Q = A₁v₁ = 2.0 × 10⁻⁴ × 1.5 = 3.0 × 10⁻⁴ m³/s (0.3 litres per second — check: a 10-litre bucket fills in ~33 s, about right for a garden hose).</li>
  <li>Nozzle speed: v₂ = A₁v₁/A₂ = (2.0/0.25) × 1.5 = <strong>12 m/s</strong> — an eightfold squeeze gives an eightfold speed-up, which is why thumbing the hose end makes the jet leap across the garden.</li>
</ol>
<p><strong>Variation.</strong> A river 40 m wide and 2 m deep flowing at 1 m/s reaches a gorge 8 m wide and 5 m deep: A drops from 80 m² to 40 m², so v doubles to <strong>2 m/s</strong>. Rapids are continuity made audible.</p>
<p>The same accounting explains the tapering of a falling water stream from a tap: as gravity accelerates the water, v grows, so A must shrink to keep Av constant — the stream necks down like pulled toffee.</p>
<div class="key-concept">
  <h4>Key Concept: Conservation, Yet Again</h4>
  <p>Continuity is conservation of mass wearing plumber's overalls. Notice the pattern of this whole subject: momentum, energy, angular momentum, now mass — every pillar of mechanics is a statement that some quantity is neither created nor destroyed, only redistributed. The same equation, with 'fluid' replaced by 'charge,' will reappear as the continuity equation of electromagnetism.</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Your own circulation obeys continuity: the aorta (≈ 3 cm²) carries blood at ~30 cm/s, but the billions of parallel capillaries have a combined cross-section of ~5000 m² equivalent scale — thousands of times the aorta's — so capillary flow crawls at ~0.5 mm/s, giving each red blood cell leisurely seconds to trade oxygen through the vessel walls. The slowness is the point.</p>
</div>`,
        },
        {
          id: "bernoullis-principle",
          title: "Bernoulli's Principle",
          content: `
<p>Apply energy conservation to a flowing fluid and you get the most famous — and most misquoted — equation in fluid mechanics. For steady, incompressible, frictionless flow along a streamline:</p>
<p style="text-align:center;"><strong>P + ½ρv² + ρgh = constant</strong></p>
<p>Three terms, three energies per unit volume: pressure (work done by pushing), kinetic (½ρv²), and gravitational (ρgh). The headline consequence, at constant height: <strong>where the fluid moves faster, its pressure is lower</strong>. Combined with continuity — narrow means fast — you get: constrictions are low-pressure zones.</p>
<h3>Worked example: Torricelli's tank</h3>
<p>Water drains from a small hole 5.0 m below the open surface of a large tank. Compare surface (P = atm, v ≈ 0, height h) with the jet (P = atm, speed v, height 0): the pressures cancel, and Bernoulli reduces to ρgh = ½ρv², so</p>
<p style="text-align:center;">v = √(2gh) = √(2 × 9.8 × 5.0) ≈ <strong>9.9 m/s</strong></p>
<p>— exactly the speed of an object <em>dropped</em> 5 m. The efflux behaves as if each parcel of water had fallen freely from the surface: Bernoulli really is energy conservation.</p>
<p><strong>Variation: the Venturi meter.</strong> Water (ρ = 1000 kg/m³) flows at 2.0 m/s through a pipe that narrows to half its area, doubling v to 4.0 m/s. Pressure drop: ΔP = ½ρ(v₂² − v₁²) = ½ × 1000 × (16 − 4) = <strong>6000 Pa</strong>. Measure that drop with a gauge and you have metered the flow without touching it — the standard industrial flowmeter.</p>
<p>The same fast-equals-low-pressure logic explains the curve of a spinning football, the draw of a chimney (wind across the top lowers pressure), a perfume atomizer, and why shower curtains billow inward. Aircraft lift involves Bernoulli too, but honestly: a wing generates lift by deflecting air <em>downward</em> — Newton's third law — with the pressure difference and the deflection being two views of one process, not competing theories. (The folk story that air must "reunite" over the top in equal time is simply false.)</p>
<div class="key-concept">
  <h4>Key Concept: Know the Fine Print</h4>
  <p>Bernoulli's equation assumes steady, incompressible, frictionless flow along a streamline. Break the assumptions — turbulence, viscosity, compressible high-speed gas — and it fails quantitatively. It is a superb first approximation and a treacherous last word.</p>
</div>`,
        },
        {
          id: "viscosity-intro",
          title: "Viscosity: A First Look at Real Fluids",
          content: `
<p>Bernoulli's frictionless fluid is an idealization; real fluids resist flowing. <strong>Viscosity</strong> (symbol η, units Pa·s) is a fluid's internal friction — the drag adjacent layers exert on each other as they slide. Water manages ≈ 0.001 Pa·s, olive oil ≈ 0.08, honey ≈ 10: four orders of magnitude, felt in every pour.</p>
<p>Viscous flow in a pipe is layered — fastest at the centre, stationary at the walls — and the price of pushing fluid through appears in <strong>Poiseuille's law</strong>: for a given pressure difference, the flow rate scales as</p>
<p style="text-align:center;"><strong>Q ∝ r⁴/η</strong></p>
<p>That fourth power is ferocious. Halve a pipe's radius and the flow drops sixteenfold; narrow an artery by 20% and, at fixed pressure, flow falls by 1 − 0.8⁴ ≈ 59%. This is why arterial plaque is so dangerous, and why the body regulates blood flow by tiny adjustments of vessel radius — the r⁴ lever means small dilations command large flow changes.</p>
<h3>Worked example: terminal velocity</h3>
<p>A small sphere falling through fluid feels Stokes' drag F = 6πηrv. It stops accelerating when drag (plus buoyancy) balances weight — at <strong>terminal velocity</strong>, which for a dense small sphere scales as v ∝ r²ρ_s g/η. A raindrop of radius 0.1 mm falling through air (η ≈ 1.8 × 10⁻⁵ Pa·s): the balance 6πηrv = (4/3)πr³ρg gives v = 2r²ρg/9η = 2 × (10⁻⁴)² × 1000 × 9.8 / (9 × 1.8 × 10⁻⁵) ≈ <strong>1.2 m/s</strong> — a drizzle drop's gentle fall. <strong>Variation:</strong> halve the radius and terminal velocity quarters (r² scaling): mist at 0.3 m/s barely falls at all, and micron-sized cloud droplets sink so slowly (~mm/s) that clouds effectively float. The sky is a suspension held up by viscosity.</p>
<p>Whether flow is smooth (laminar) or chaotic (turbulent) is governed by the ratio of inertial to viscous effects — the Reynolds number. Low Re: syrupy, orderly, reversible. High Re: eddies, mixing, and the whitewater of a mountain stream. Turbulence remains one of classical physics' great unsolved problems; Phase 4's mathematics will let you at least write down the equations that hide it.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Robert Millikan's 1909 oil-drop experiment — which measured the charge of the electron — depended on Stokes' law: he weighed individual micro-droplets by timing their viscous terminal velocity. A 17th-century law of falling spheres in syrup delivered the fundamental constant of the electrical age.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A dam holds back a reservoir 10 km long; another identical dam holds a pond 50 m long, both filled to the same 20 m depth. How do the water pressures on the two dams compare?",
          options: [
            "The reservoir dam feels vastly more pressure — more water pushes on it",
            "Equal — pressure depends only on depth (P = P₀ + ρgh), not on the volume behind",
            "The pond's dam feels more pressure, concentrated in less water",
            "It depends on the dams' widths",
          ],
          correctIndex: 1,
          explanation:
            "Static fluid pressure is set entirely by depth: P = P₀ + ρgh. The horizontal extent of the water is irrelevant — a fact called the hydrostatic paradox. Dams are built thicker at the bottom because pressure grows with DEPTH, not with reservoir length.",
        },
        {
          question:
            "In a hydraulic lift, a 200 N push on a 0.005 m² piston raises a car on a 0.1 m² piston with 4000 N of force. What is the catch?",
          options: [
            "The small piston must travel 20 times farther than the car rises — work is conserved",
            "There is none — hydraulics multiply work for free",
            "The fluid gradually absorbs the extra energy",
            "The force multiplication only works with mercury",
          ],
          correctIndex: 0,
          explanation:
            "Pascal's principle transmits pressure undiminished, multiplying force by the area ratio (20×). But the same incompressible volume passes both pistons, so distance divides by 20: F₂d₂ = F₁d₁. A hydraulic press is a lever made of liquid — force for distance, never energy for free.",
        },
        {
          question:
            "Water flows at 1.5 m/s through a 2.0 cm² hose fitted with a 0.25 cm² nozzle. The speed through the nozzle is:",
          options: ["1.5 m/s", "3 m/s", "12 m/s", "0.19 m/s"],
          correctIndex: 2,
          explanation:
            "Continuity: A₁v₁ = A₂v₂ → v₂ = (2.0/0.25) × 1.5 = 12 m/s. The area shrank by a factor of 8, so the speed grew by 8 — what flows in each second must flow out. Thumbing a hose end is the everyday demonstration.",
        },
        {
          question:
            "According to Bernoulli's principle, in horizontal streamline flow the pressure is lowest where:",
          options: [
            "The fluid moves slowest",
            "The pipe is widest",
            "The fluid is densest",
            "The fluid moves fastest",
          ],
          correctIndex: 3,
          explanation:
            "P + ½ρv² is constant along a horizontal streamline: speed up, and pressure must drop. Paired with continuity (narrow = fast), constrictions become low-pressure zones — the working principle of Venturi meters, atomizers, and chimney draw.",
        },
        {
          question:
            "Poiseuille's law says pipe flow scales as r⁴. If an artery narrows to 80% of its radius, flow at the same pressure difference falls to about:",
          options: ["41% of the original", "80% of the original", "64% of the original", "20% of the original"],
          correctIndex: 0,
          explanation:
            "Flow ∝ r⁴, so a 20% narrowing leaves 0.8⁴ ≈ 0.41 — a 59% loss from what seems a modest constriction. The ferocious fourth power is why arterial plaque is so dangerous, and why the body steers blood flow with tiny changes in vessel radius.",
        },
      ],
    },
  ],
};
