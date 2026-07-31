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
          id: "the-function-machine",
          title: "One Quantity Depends on Another",
          content: `
<p>Strip physics to its skeleton and you find one sentence repeated forever: <strong>this quantity depends on that one</strong>. Position depends on time. Pressure depends on depth. Force depends on distance. The mathematical object that captures "depends on" is the <strong>function</strong> — a machine that takes an input, applies a fixed rule, and returns exactly one output.</p>
<p>The notation f(x) reads "f of x": the rule f applied to the input x. Physics reuses the same idea with different letters, and learning to read them is half the battle:</p>
<ul>
  <li><strong>x(t)</strong> — position as a function of time (the star of kinematics)</li>
  <li><strong>V(r)</strong> — potential energy as a function of separation</li>
  <li><strong>P(T)</strong> — pressure as a function of temperature</li>
</ul>
<p>Two vocabulary words matter. The <strong>domain</strong> is the set of inputs the machine accepts; the <strong>range</strong> is the set of outputs it can produce. Physics adds its own restrictions: a formula may be algebraically happy with t = −3 s, but if the ball was released at t = 0, negative times are physically meaningless.</p>
<p><strong>Worked example.</strong> Drop a ball from a 20 m tower. Its height is h(t) = 20 − 4.9t². Then:</p>
<ul>
  <li>h(0) = 20 m (the release point)</li>
  <li>h(1) = 20 − 4.9 = 15.1 m</li>
  <li>h(2) = 20 − 19.6 = 0.4 m — about to land</li>
</ul>
<p>The sensible domain runs from t = 0 to roughly t ≈ 2.02 s, when h hits zero. After that the formula predicts the ball tunneling underground — the math keeps going, but the physics has stopped.</p>
<div class="key-concept">
  <h4>Key Concept: A Function Is a Contract</h4>
  <p>One input, one output, every time. That reliability is what lets physics make predictions: feed in a time, get out a position — no ambiguity, no exceptions. When you meet motion graphs again in Subject 11, every curve you plot is a function wearing a picture.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The notation f(x) was introduced by Leonhard Euler in 1734. You will meet Euler again in this subject — his formula about e, i, and π is the grand finale of the complex numbers chapter.</p>
</div>`,
        },
        {
          id: "composition-and-inverses",
          title: "Chaining Machines and Running Them Backward",
          content: `
<p>Functions become powerful when you connect them. <strong>Composition</strong> means feeding one machine's output into another: f(g(x)) says "do g first, then f." Order matters enormously — f(g(x)) and g(f(x)) are usually different machines.</p>
<p><strong>Worked example.</strong> Converting Fahrenheit to Kelvin is a composition. First C(F) = (F − 32) × 5/9 converts to Celsius; then K(C) = C + 273.15 converts to Kelvin. Chain them for boiling water: C(212) = 180 × 5/9 = 100, then K(100) = 373.15. One composite machine, K(C(F)), does the whole trip.</p>
<p>Running a machine backward gives the <strong>inverse function</strong>: if f turns input a into output b, then f⁻¹ turns b back into a. To find an inverse algebraically, swap the roles and solve.</p>
<p><strong>Worked example.</strong> If y = 3x + 2, solve for x: x = (y − 2)/3. That formula <em>is</em> the inverse. Check with numbers: f(4) = 14, and (14 − 2)/3 = 4. ✓</p>
<p>Physics asks inverse questions constantly. The formula h(t) = 20 − 4.9t² answers "where is the ball at time t?" — but the question you actually care about is usually "<em>when</em> does it reach the ground?" That's the inverse: set h = 0 and solve, t = √(20/4.9) ≈ 2.02 s.</p>
<div class="key-concept">
  <h4>Key Concept: Not Everything Inverts Cleanly</h4>
  <p>y = x² sends both 3 and −3 to 9, so "which x gave me 9?" has two answers. To define √ as a function we restrict to x ≥ 0. Remember this move — it returns when we define inverse sine and cosine in the trigonometry chapter, where infinitely many angles share one sine value.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Assembly Line</h3>
  <p>Composition is an assembly line: station g attaches the wheels, station f paints the car. Swap the stations and you're painting wheels onto nothing. An inverse is the disassembly line — it only works if every finished product could have come from exactly one starting part.</p>
</div>`,
        },
        {
          id: "transformations",
          title: "Shift, Stretch, Flip: Reading a Formula as a Picture",
          content: `
<p>Here is a skill that pays off for the rest of your physics life: looking at y = a·f(b(x − c)) + d and instantly <em>seeing</em> the graph, because it's just a known shape that has been shifted and stretched. Four knobs, four effects:</p>
<table>
  <tr><th>Change</th><th>Effect on graph</th></tr>
  <tr><td>f(x) + d</td><td>shift <strong>up</strong> by d</td></tr>
  <tr><td>f(x − c)</td><td>shift <strong>right</strong> by c (yes, minus means right)</td></tr>
  <tr><td>a·f(x)</td><td>stretch <strong>vertically</strong> by factor a (flip if negative)</td></tr>
  <tr><td>f(bx)</td><td>compress <strong>horizontally</strong> by factor b</td></tr>
</table>
<p><strong>Worked example.</strong> Compare y = 2(x − 3)² + 1 with the basic parabola y = x². Reading the knobs: shift right 3, stretch vertically by 2, shift up 1. The vertex moves from (0, 0) to (3, 1) and the arms climb twice as steeply. No plotting of points needed — you <em>read</em> the graph off the formula.</p>
<p>Why does physics care so much? Because the single most important curve in Phase 3 is the sinusoid, and its physics-famous form</p>
<p style="text-align:center;"><strong>y = A sin(k(x − vt))</strong></p>
<p>is nothing but transformations of plain sin(x): the amplitude A is a vertical stretch, k is a horizontal compression, and the vt inside is a shift that <em>grows with time</em> — which is exactly what a travelling wave is: a shape sliding sideways. When Subject 13 writes y = A sin(kx − ωt), you'll recognize every symbol as a transformation knob.</p>
<div class="analogy">
  <h3>Analogy: The Projector</h3>
  <p>Think of f(x) as a slide in a projector. Moving the projector left or right shifts the image (c and d); adjusting the zoom stretches it (a and b). The picture on the slide never changes — only how it lands on the wall. Transformations let you carry one memorized shape everywhere.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Inside vs Outside</h4>
  <p>Changes <em>outside</em> f act on the output (vertical, intuitive). Changes <em>inside</em> f act on the input (horizontal, and backwards: −c shifts right, b &gt; 1 compresses). Almost every transformation mistake comes from forgetting the inside is inverted.</p>
</div>`,
        },
        {
          id: "asymptotic-thinking",
          title: "Rational Functions and the Art of Asymptotic Thinking",
          content: `
<p>A <strong>rational function</strong> is a ratio of polynomials, like f(x) = (2x² + 3x)/(x² + 1). These functions introduce the two questions physicists ask about <em>every</em> formula they meet:</p>
<ol>
  <li><strong>What happens when the input gets huge?</strong> (x → ∞)</li>
  <li><strong>What happens when it shrinks toward zero — or toward a forbidden value?</strong></li>
</ol>
<p>For large x, only the highest powers matter. In (2x² + 3x)/(x² + 1), the +3x and +1 become rounding errors, leaving 2x²/x² = 2. The graph flattens toward the <strong>horizontal asymptote</strong> y = 2. Check numerically: f(10) = 230/101 ≈ 2.28; f(100) = 20,300/10,001 ≈ 2.03. It's converging, just as the leading terms promised.</p>
<p>Where a denominator hits zero, the function blows up — a <strong>vertical asymptote</strong>. g(x) = 1/(x − 2) explodes near x = 2: g(2.1) = 10, g(2.01) = 100, g(2.001) = 1000.</p>
<p><strong>Physics runs on this thinking.</strong> Newton's gravity, F = Gm₁m₂/r², is a rational function of r. Asymptotic questions reveal its character instantly:</p>
<ul>
  <li>As r → ∞, F → 0: gravity fades with distance but never quite dies.</li>
  <li>Double the distance and the force drops to 1/4; triple it, 1/9. That inverse-square signature governs orbits in Subject 11.6 and Coulomb's law in Subject 14.1.</li>
  <li>As r → 0 the formula diverges — a flag that new physics must take over at small scales.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Limiting Cases Are Free Sanity Checks</h4>
  <p>Physicists test every new formula by pushing its inputs to extremes: does it do something sensible when m → 0, v → 0, r → ∞? Einstein's relativity earns trust partly because at everyday speeds it collapses into Newton's mechanics. You now own that habit — use it on every equation in Phase 3.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The word "asymptote" comes from Greek for "not falling together." The curve and its asymptote approach forever but never touch — like a capacitor charging toward full voltage in Subject 14.2, getting eternally closer and never quite arriving.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "If f(x) = 3x − 1 and g(x) = x², what is f(g(2))?",
          options: ["25", "11", "5", "36"],
          correctIndex: 1,
          explanation:
            "Work inside-out: g(2) = 2² = 4, then f(4) = 3(4) − 1 = 11. Order matters — g(f(2)) would be (3·2 − 1)² = 25, a completely different machine.",
        },
        {
          question:
            "Compared with y = f(x), the graph of y = f(x − 5) is…",
          options: [
            "shifted left by 5",
            "shifted down by 5",
            "compressed horizontally by 5",
            "shifted right by 5",
          ],
          correctIndex: 3,
          explanation:
            "Changes inside the function act on the input and work backwards: subtracting 5 from x shifts the graph right by 5, because each output now happens 5 units later. This is exactly how the (x − vt) inside a wave formula makes the shape slide rightward.",
        },
        {
          question:
            "What is the horizontal asymptote of f(x) = (3x² + 1)/(x² + 4)?",
          options: ["y = 0", "y = 4", "y = 3", "There isn't one"],
          correctIndex: 2,
          explanation:
            "For huge x, only the leading terms survive: 3x²/x² = 3. The +1 and +4 become negligible, so the graph flattens toward y = 3. Reading off leading terms is the fastest asymptotic move there is.",
        },
        {
          question:
            "Gravity follows F = Gm₁m₂/r². If you triple the distance between two masses, the force becomes…",
          options: [
            "1/9 of its original value",
            "1/3 of its original value",
            "3 times larger",
            "1/6 of its original value",
          ],
          correctIndex: 0,
          explanation:
            "The r is squared in the denominator, so tripling r divides the force by 3² = 9. This inverse-square behavior is the asymptotic signature you'll meet again in orbits (Subject 11.6) and Coulomb's law (Subject 14.1).",
        },
      ],
    },
    {
      id: "exponentials-and-logarithms",
      title: "Exponentials & Logarithms",
      subtitle:
        "Growth, decay, e, and the log scales — dB, pH, Richter — that tame huge ranges",
      sections: [
        {
          id: "growth-and-decay",
          title: "Doubling, Halving, and the Shape of Runaway Change",
          content: `
<p>Linear change adds the same <em>amount</em> each step: +5, +5, +5. Exponential change multiplies by the same <em>factor</em> each step: ×2, ×2, ×2. That one-word difference — amount versus factor — separates a gentle ramp from an explosion.</p>
<p><strong>Worked example (growth).</strong> A bacterial colony of 1000 cells doubles every 20 minutes. After 2 hours that's 6 doublings: 1000 × 2⁶ = 64,000 cells. After 6 hours (18 doublings): 1000 × 2¹⁸ ≈ 262 million. The general formula is N = N₀ × 2^(t/T), where T is the doubling time.</p>
<p><strong>Worked example (decay).</strong> Decay is the same movie in reverse: multiply by ½ each <strong>half-life</strong>. An 80 mg radioactive sample with a 6-hour half-life:</p>
<table>
  <tr><th>Time</th><th>Half-lives</th><th>Remaining</th></tr>
  <tr><td>0 h</td><td>0</td><td>80 mg</td></tr>
  <tr><td>6 h</td><td>1</td><td>40 mg</td></tr>
  <tr><td>12 h</td><td>2</td><td>20 mg</td></tr>
  <tr><td>24 h</td><td>4</td><td>5 mg</td></tr>
</table>
<p>Formula: N = N₀ × (1/2)^(t/T½). Notice what decay <em>never</em> does: it never hits zero. Each half-life removes half of what remains, so something always remains — the decaying-forever tail is the signature of exponential death.</p>
<div class="key-concept">
  <h4>Key Concept: Equal Times, Equal Factors</h4>
  <p>The defining property of exponential change: in any fixed time interval, the quantity multiplies by the same factor — regardless of how much you started with. A sample takes exactly as long to fall from 80 mg to 40 mg as from 4 mg to 2 mg. If a process has this property, it is exponential; no other test needed.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>This exact math runs the radioactive decay law N = N₀e^(−λt) in Subject 15.4, capacitor discharge in Subject 14.2, the damping of oscillations in Subject 11.8, and the absorption of light in matter. Master one exponential and you have mastered them all.</p>
</div>`,
        },
        {
          id: "the-number-e",
          title: "e: The Natural Rate of Growth",
          content: `
<p>Why do physicists write exponentials with the strange number e ≈ 2.71828 instead of a tidy base like 2 or 10? Because e is the base nature itself uses whenever growth is <strong>continuous</strong> — happening at every instant rather than in yearly or hourly steps.</p>
<p><strong>Worked example.</strong> Invest 1 unit at 100% annual interest. Compounded once: (1 + 1)¹ = 2. Twice a year: (1 + ½)² = 2.25. Monthly: (1 + 1/12)¹² ≈ 2.613. Daily: ≈ 2.7146. Compounding every instant, the value climbs toward a ceiling: <strong>e = 2.71828…</strong> That's e's job description — the outcome of continuous compounding.</p>
<p>The function e^x has a magical property you'll prove in the calculus chapter: <strong>its rate of growth equals its current value</strong>. A population growing in proportion to its size, a sample decaying in proportion to how much remains — any "change proportional to amount" process is automatically an e^x (or e^(−x)) in disguise. That's why physics writes decay as:</p>
<p style="text-align:center;"><strong>N = N₀ e^(−λt)</strong></p>
<p>where λ (the decay constant) sets how fast. The half-life connects to λ through T½ = ln 2 / λ ≈ 0.693/λ.</p>
<p><strong>Worked example.</strong> A radioisotope has λ = 0.1 per year. Its half-life is T½ = 0.693/0.1 ≈ 6.93 years. After 10 years the surviving fraction is e^(−0.1 × 10) = e⁻¹ ≈ 0.368 — about 37% remains.</p>
<div class="key-concept">
  <h4>Key Concept: e⁻¹ ≈ 37% Is a Physics Landmark</h4>
  <p>In one "time constant" (t = 1/λ for decay, t = RC for a discharging capacitor), the quantity falls to 1/e ≈ 37% of its start. Engineers and physicists quote time constants constantly — Subject 14.2 measures capacitor discharge in exactly these units.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>e was first pinned down by Jacob Bernoulli in 1683 while studying compound interest — banking math that turned out to govern radioactive atoms, cooling coffee, and discharging capacitors. Nature, it seems, compounds continuously.</p>
</div>`,
        },
        {
          id: "log-rules",
          title: "Logarithms: Asking “What Exponent?”",
          content: `
<p>A logarithm answers one question: <strong>what exponent do I need?</strong> Writing log₂ 8 = 3 is just asking "2 to the what is 8?" — answer, 3. The log undoes the exponential the way subtraction undoes addition: log_b(b^x) = x. Two bases dominate: log₁₀ (written log) and log_e (written <strong>ln</strong>, the natural log).</p>
<p>Three rules carry all the weight, and Phase 3 needs them at reflex speed:</p>
<table>
  <tr><th>Rule</th><th>In words</th></tr>
  <tr><td>log(ab) = log a + log b</td><td>multiplication becomes addition</td></tr>
  <tr><td>log(a/b) = log a − log b</td><td>division becomes subtraction</td></tr>
  <tr><td>log(aⁿ) = n log a</td><td>powers slide down front</td></tr>
</table>
<p>The third rule is the workhorse: it drags an unknown out of an exponent, which is how you solve for <em>time</em> in any growth or decay problem.</p>
<p><strong>Worked example 1.</strong> How long until e^(0.2t) = 5? Take ln of both sides: 0.2t = ln 5 ≈ 1.609, so t ≈ 8.05. Done — no guessing.</p>
<p><strong>Worked example 2.</strong> How many doublings does it take to reach a million? Solve 2ⁿ = 10⁶: n = log(10⁶)/log 2 = 6/0.301 ≈ 19.9. Twenty doublings turn one into a million — a fact worth keeping in your pocket.</p>
<p><strong>Worked example 3.</strong> A sample decays with λ = 0.05 per day. When is 10% left? Solve e^(−0.05t) = 0.1: −0.05t = ln 0.1 ≈ −2.303, so t ≈ 46 days.</p>
<div class="key-concept">
  <h4>Key Concept: Logs Are How You Solve for Time</h4>
  <p>Exponential formulas hand you the amount when you know the time. Real questions run backward — "how long until the dose is safe?", "when was this fossil alive?" — and every one of them is solved by taking a log. Radiocarbon dating in Subject 15.4 is precisely worked example 3 with λ for carbon-14.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Because logs turn multiplication into addition, slide rules — two sliding logarithmic scales — could multiply any two numbers by <em>adding lengths</em>. Engineers designed the Apollo program largely on slide rules.</p>
</div>`,
        },
        {
          id: "log-scales",
          title: "dB, pH, Richter: Taming Huge Ranges",
          content: `
<p>Human senses and natural phenomena span absurd ranges. The quietest audible sound carries about 10⁻¹² W/m² of intensity; a jet engine at close range, about 10 W/m² — a factor of 10¹³. No linear axis can hold that. The fix: plot the <strong>exponent</strong> instead of the number. That's a logarithmic scale.</p>
<p>The <strong>decibel</strong> scale for sound defines loudness as</p>
<p style="text-align:center;"><strong>dB = 10 log(I/I₀)</strong>, with I₀ = 10⁻¹² W/m²</p>
<p><strong>Worked example.</strong> Normal conversation has I ≈ 10⁻⁶ W/m². Then I/I₀ = 10⁶, log gives 6, so loudness = 60 dB. A rock concert at 10⁻¹ W/m² is 110 dB. The rules of thumb fall straight out of the log rules:</p>
<ul>
  <li><strong>+10 dB = 10× the intensity</strong> (log of 10 is 1)</li>
  <li><strong>+3 dB ≈ 2× the intensity</strong> (log of 2 ≈ 0.301)</li>
</ul>
<p>The same trick appears across science: <strong>pH</strong> = −log[H⁺] compresses hydrogen-ion concentrations spanning 14 powers of ten; each step of the <strong>Richter</strong> scale is 10× the ground amplitude (roughly 32× the energy), so a magnitude 7 quake shakes 100× harder than a magnitude 5.</p>
<p>The lab version of this idea is the <strong>semilog plot</strong>: graph log N (or use log-scaled paper) against time. An exponential N = N₀e^(−λt) becomes ln N = ln N₀ − λt — a <em>straight line</em> with slope −λ. Curves are hard to judge by eye; lines are easy. Straight on semilog paper? It's exponential, and the slope hands you the decay constant.</p>
<div class="analogy">
  <h3>Analogy: Counting Zeros Instead of Things</h3>
  <p>A log scale is what you already do with money: you don't picture the difference between a million and a billion as a pile of coins — you count zeros. Log scales make axes count zeros too.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: The Slope Is the Physics</h4>
  <p>On a semilog plot, the straight line's slope <em>is</em> the decay constant λ (or growth rate). Subject 13.3 uses decibels quantitatively, and Subject 15.4 extracts half-lives from exactly this plot. Learn to read slopes and you can measure invisible processes.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A radioactive sample has a half-life of 8 days. Starting with 160 mg, how much remains after 24 days?",
          options: ["40 mg", "53 mg", "20 mg", "10 mg"],
          correctIndex: 2,
          explanation:
            "24 days is 3 half-lives, so the sample halves three times: 160 → 80 → 40 → 20 mg. Equal time intervals always multiply by the same factor — that's the defining property of exponential decay.",
        },
        {
          question: "What is ln(e³)?",
          options: ["e", "3", "3e", "1/3"],
          correctIndex: 1,
          explanation:
            "The natural log asks 'e to what power gives this?' Since the input is literally e³, the answer is 3. Logs and exponentials undo each other: ln(e^x) = x, always.",
        },
        {
          question:
            "A sound has intensity 1000 times the reference I₀. Its loudness in decibels is…",
          options: ["1000 dB", "100 dB", "3 dB", "30 dB"],
          correctIndex: 3,
          explanation:
            "dB = 10 log(I/I₀) = 10 log(1000) = 10 × 3 = 30 dB. Every factor of 10 in intensity adds just 10 dB — that compression is the whole point of the decibel scale you'll use in Subject 13.3.",
        },
        {
          question:
            "Why do experimenters plot exponential data on a semilog plot?",
          options: [
            "It makes the data points larger",
            "An exponential becomes a straight line whose slope gives the rate",
            "It removes measurement error",
            "It converts decay into growth",
          ],
          correctIndex: 1,
          explanation:
            "Taking the log of N = N₀e^(−λt) gives ln N = ln N₀ − λt, which is linear in t. Eyes judge straightness far better than curviness, and the slope of the line is the decay constant λ itself.",
        },
        {
          question:
            "Using log 2 ≈ 0.301, roughly how many doublings turn 1 into 1,000,000?",
          options: ["20", "10", "50", "100"],
          correctIndex: 0,
          explanation:
            "Solve 2ⁿ = 10⁶ by taking logs: n = 6/log 2 = 6/0.301 ≈ 19.9 ≈ 20. Twenty doublings to a million — a handy landmark for everything from bacteria to chain reactions.",
        },
      ],
    },
    {
      id: "trigonometry-mastery",
      title: "Trigonometry Mastery",
      subtitle:
        "The unit circle from memory, radians, identities — the never-skip chapter of the math ladder",
      sections: [
        {
          id: "the-unit-circle",
          title: "The Unit Circle: One Diagram to Rule Them All",
          content: `
<p>Forget triangles for a moment. The modern definition of sine and cosine lives on the <strong>unit circle</strong> — a circle of radius 1 centered at the origin. Walk counterclockwise around it through angle θ from the positive x-axis, and the point where you stand has coordinates:</p>
<p style="text-align:center;"><strong>(cos θ, sin θ)</strong> — cosine is the x-coordinate, sine is the y-coordinate.</p>
<p>That's it. Every trig fact you will ever use in waves, circuits, and rotations falls out of this picture. The values at the special angles must live in your memory, and there's a pattern that makes them almost free:</p>
<table>
  <tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
  <tr><td>sin θ</td><td>√0/2 = 0</td><td>√1/2 = 1/2</td><td>√2/2</td><td>√3/2</td><td>√4/2 = 1</td></tr>
  <tr><td>cos θ</td><td>1</td><td>√3/2</td><td>√2/2</td><td>1/2</td><td>0</td></tr>
</table>
<p>Sine climbs √0/2, √1/2, √2/2, √3/2, √4/2; cosine runs the same list backward. Beyond 90°, symmetry takes over. Signs by quadrant: in QI both positive; QII only sin; QIII only tan; QIV only cos (the classic "All Students Take Calculus" mnemonic).</p>
<p><strong>Worked examples.</strong> cos 120°: the point sits in QII, mirror of 60°, where cosine is negative → cos 120° = −1/2. sin 225°: QIII, mirror of 45°, sine negative → sin 225° = −√2/2. sin 330°: QIV, mirror of 30° → −1/2.</p>
<div class="key-concept">
  <h4>Key Concept: Reference Angles</h4>
  <p>Any angle's sine and cosine equal those of its acute "reference angle" (its angular distance to the x-axis), with a sign set by the quadrant. Two steps — reference angle, then sign — unlock all 360°, from just five memorized values.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A point moving around this circle at steady speed has an x-coordinate that traces a perfect cosine in time. That is not a metaphor — it is literally why circular motion (Subject 11.6) and simple harmonic motion (Subject 11.8) share the same mathematics.</p>
</div>`,
        },
        {
          id: "radians",
          title: "Radians: The Angle Measure Nature Prefers",
          content: `
<p>Degrees are a human convention — the Babylonians liked 360. The <strong>radian</strong> is defined by the circle itself: one radian is the angle whose arc length equals the radius. Since a full circle's circumference is 2πr, a full turn is <strong>2π radians</strong>. The conversions worth knowing cold:</p>
<table>
  <tr><th>Degrees</th><td>30°</td><td>45°</td><td>60°</td><td>90°</td><td>180°</td><td>360°</td></tr>
  <tr><th>Radians</th><td>π/6</td><td>π/4</td><td>π/3</td><td>π/2</td><td>π</td><td>2π</td></tr>
</table>
<p>The payoff is the cleanest formula in geometry: <strong>arc length s = rθ</strong> — but <em>only</em> when θ is in radians.</p>
<p><strong>Worked example.</strong> A wheel of radius 2 m rotates through 3 radians. The rim travels s = 2 × 3 = 6 m. In degrees the same computation needs an ugly conversion factor; in radians it's a single multiplication.</p>
<p>Rotation rates work the same way. <strong>Angular velocity</strong> ω is measured in rad/s, with ω = 2π/T for period T. Earth spins once in 86,400 s, so ω = 2π/86,400 ≈ 7.27 × 10⁻⁵ rad/s. At the equator (r ≈ 6.37 × 10⁶ m), your speed is v = rω ≈ 463 m/s — you are moving faster than the speed of sound right now, courtesy of s = rθ divided by time.</p>
<p>One more radian miracle, previewed here and cashed in later: for small angles measured in radians, <strong>sin θ ≈ θ</strong>. Check it: sin(0.1) = 0.0998. In degrees this is false and useless (sin 0.1° = 0.0017). This tiny fact will single-handedly turn the pendulum into a solvable problem in Subject 11.8.</p>
<div class="analogy">
  <h3>Analogy: Metric for Angles</h3>
  <p>Degrees are like measuring distance in "number of my feet" — workable, but every formula picks up a conversion constant. Radians are the metric system of angles: defined by the geometry itself, so the constants vanish and formulas like s = rθ, v = rω, and sin θ ≈ θ come out clean.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Calculus Demands Radians</h4>
  <p>The derivative rules for sine and cosine you'll meet in Subject 16 are only true in radians. From this chapter forward, radians are the default; degrees are for carpentry.</p>
</div>`,
        },
        {
          id: "sinusoid-anatomy",
          title: "Amplitude, Period, Phase: The Anatomy of an Oscillation",
          content: `
<p>Graph y = sin x and you get physics's favorite shape: a wave rising to +1, dipping to −1, repeating every 2π. Cosine is the same curve shifted left by π/2. Tangent is the wilder cousin — period π, with vertical asymptotes at ±π/2 where cosine hits zero.</p>
<p>Real oscillations are transformed sinusoids, and the general form has three knobs you must read fluently:</p>
<p style="text-align:center;"><strong>y = A sin(ωt + φ)</strong></p>
<ul>
  <li><strong>Amplitude A</strong> — how far from center the oscillation swings (vertical stretch)</li>
  <li><strong>Angular frequency ω</strong> — how fast; the period is T = 2π/ω and frequency f = 1/T</li>
  <li><strong>Phase φ</strong> — where in the cycle it starts (horizontal shift)</li>
</ul>
<p><strong>Worked example.</strong> y = 3 sin(2t − π/2). Amplitude: 3. Period: T = 2π/2 = π ≈ 3.14 s. Phase: the curve is shifted right by (π/2)/2 = π/4 — in fact 3 sin(2t − π/2) = −3 cos(2t), the same oscillation starting at its minimum. At t = 0: y = 3 sin(−π/2) = −3. ✓</p>
<p>A travelling wave simply lets the phase depend on position too:</p>
<p style="text-align:center;"><strong>y = A sin(kx − ωt)</strong></p>
<p>where k = 2π/λ packs the wavelength and ω = 2π/T packs the period. Freeze time and you see a wavy snapshot; stand at one x and you bob up and down. This exact expression headlines Subject 13.1, and the AC voltages of Subject 14.6 are V = V₀ sin(ωt) — pure sinusoid anatomy.</p>
<div class="key-concept">
  <h4>Key Concept: Three Numbers Describe Any Oscillation</h4>
  <p>How big (A), how fast (ω or T), and where it starts (φ). Every pendulum, mass-on-spring, sound wave, radio signal, and alternating current in this course is captured by those three numbers. When two waves meet, their phase <em>difference</em> decides whether they reinforce or cancel — the heart of interference in Subject 13.2.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your mains electricity is a sinusoid with f = 50 or 60 Hz depending on country — meaning ω ≈ 314 or 377 rad/s. Engineers quote ω without ever drawing the circle it comes from.</p>
</div>`,
        },
        {
          id: "identities",
          title: "The Identity Toolkit",
          content: `
<p>Identities are equations true for <em>every</em> angle — the algebra of trig. Physics uses a small, powerful set, and the first is free: apply Pythagoras to the unit-circle point (cos θ, sin θ), whose distance from the origin is 1:</p>
<p style="text-align:center;"><strong>sin²θ + cos²θ = 1</strong></p>
<p><strong>Worked example.</strong> A first-quadrant angle has sin θ = 0.6. Then cos²θ = 1 − 0.36 = 0.64, so cos θ = 0.8. No angle-finding needed — the identity converts one trig value into the other directly. (In QII the cosine would be −0.8; the quadrant sets the sign.)</p>
<p>Next, the <strong>sum formulas</strong>:</p>
<ul>
  <li>sin(a + b) = sin a cos b + cos a sin b</li>
  <li>cos(a + b) = cos a cos b − sin a sin b</li>
</ul>
<p><strong>Worked example.</strong> sin 75° = sin(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4 ≈ 0.966. Exact values beyond the special angles, from pure algebra.</p>
<p>Set a = b and the sum formulas collapse into the <strong>double-angle formulas</strong>:</p>
<ul>
  <li>sin 2θ = 2 sin θ cos θ</li>
  <li>cos 2θ = 1 − 2 sin²θ (also cos²θ − sin²θ)</li>
</ul>
<p>Here's the physics payoff. A projectile launched at speed v and angle θ has range R = (v²/g) sin 2θ (derived in Subject 11.2). Because sin 2θ peaks when 2θ = 90°, maximum range comes at <strong>θ = 45°</strong> — a famous fact that is literally a double-angle formula wearing a helmet. The identities also rewrite sin²θ as (1 − cos 2θ)/2, which is how Subject 14.6 shows that AC power delivery averages to half its peak.</p>
<div class="key-concept">
  <h4>Key Concept: Identities Are Rewriting Tools</h4>
  <p>You rarely "solve" an identity — you use it to rewrite an expression into a friendlier shape: one trig function instead of two, a single angle instead of a double. When a physics derivation seems to make a magic simplification, an identity is usually the wand.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Ptolemy knew the sum formulas around 150 CE — he needed them to build the chord tables behind his astronomy. Wave physics inherited its core algebra from stargazers.</p>
</div>`,
        },
        {
          id: "trig-equations-and-inverses",
          title: "Solving for the Angle",
          content: `
<p>Physics often hands you a trig <em>value</em> and demands the <em>angle</em>: at what angle does the ramp slip, the light refract, the projectile land? Inverse trig functions answer it — with a catch you must understand.</p>
<p>Since sin θ = 0.5 is true for θ = 30°, 150°, 390°, and infinitely many others, "the angle whose sine is 0.5" has no single answer. The function <strong>arcsin</strong> (or sin⁻¹) is made single-valued by convention: it returns only angles in [−90°, 90°]. Your calculator obeys this convention — it gives the <em>principal</em> value and silently hides the rest.</p>
<p><strong>Worked example.</strong> Solve sin θ = 0.5 for 0° ≤ θ &lt; 360°. Calculator: θ = 30°. Unit circle: sine is the y-coordinate, and two points on the circle share y = 0.5 — at 30° and at its mirror 180° − 30° = <strong>150°</strong>. Both are solutions. For cosine the pair is θ and 360° − θ; check: cos θ = −√2/2 gives θ = 135° and 225°.</p>
<p><strong>Worked example (physics).</strong> A projectile at 25 m/s must land 51 m away. Range formula: sin 2θ = Rg/v² = (51 × 9.8)/625 ≈ 0.8. Calculator: 2θ = 53.1°, so θ = 26.6°. But sine also hits 0.8 at 180° − 53.1° = 126.9°, giving θ = 63.4°. <strong>Two launch angles produce the same range</strong> — one flat and fast, one high and floaty. Mortar crews have exploited that second solution for centuries; a calculator-only student never finds it.</p>
<div class="key-concept">
  <h4>Key Concept: The Calculator Gives One Answer; the Circle Gives Them All</h4>
  <p>Every time an inverse trig button fires, follow up with the unit-circle question: "which other angle shares this value?" For sine, mirror across the vertical axis (180° − θ); for cosine, across the horizontal (360° − θ); for tangent, add 180°.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Inverse trig is also how GPS receivers, robot arms, and Snell's-law refraction problems (Subject 13.5) recover angles from measured ratios. The ratio is data; arcsin is the decoder.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What is cos 150°?",
          options: ["√3/2", "−√3/2", "−1/2", "1/2"],
          correctIndex: 1,
          explanation:
            "150° sits in quadrant II with reference angle 30°. Cosine of 30° is √3/2, and cosine (the x-coordinate) is negative in QII, so cos 150° = −√3/2. Reference angle plus quadrant sign unlocks the whole circle.",
        },
        {
          question: "Convert 270° to radians.",
          options: ["3π/4", "2π/3", "π/2", "3π/2"],
          correctIndex: 3,
          explanation:
            "180° = π, so 270° = 270/180 × π = 3π/2. It helps to picture the circle: 270° is three quarter-turns, and each quarter-turn is π/2.",
        },
        {
          question: "What is the period of y = 4 sin(3t)?",
          options: ["2π/3", "3", "6π", "4"],
          correctIndex: 0,
          explanation:
            "Period T = 2π/ω with ω = 3, giving T = 2π/3 ≈ 2.09. The 4 is the amplitude — it changes how far the oscillation swings, never how often it repeats.",
        },
        {
          question:
            "An acute angle has sin θ = 5/13. Without finding θ, what is cos θ?",
          options: ["8/13", "5/12", "12/13", "13/12"],
          correctIndex: 2,
          explanation:
            "Use sin²θ + cos²θ = 1: cos²θ = 1 − 25/169 = 144/169, so cos θ = 12/13 (positive, since the angle is acute). The Pythagorean identity converts between sine and cosine with no inverse-trig detour.",
        },
        {
          question:
            "How many solutions does sin θ = 0.5 have in the range 0° ≤ θ < 360°, and what are they?",
          options: [
            "One: 30°",
            "Two: 30° and 330°",
            "Two: 30° and 210°",
            "Two: 30° and 150°",
          ],
          correctIndex: 3,
          explanation:
            "Sine is the y-coordinate on the unit circle, and y = 0.5 at 30° and its mirror 180° − 30° = 150°. The calculator reports only 30° — the unit circle supplies the partner. (330° and 210° have sine −0.5.)",
        },
      ],
    },
    {
      id: "vectors",
      title: "Vectors",
      subtitle:
        "Components, dot and cross products — the mathematical objects forces actually are",
      sections: [
        {
          id: "what-is-a-vector",
          title: "Arrows with Meaning: Magnitude, Direction, Components",
          content: `
<p>Some quantities are fully described by one number: temperature, mass, energy. These are <strong>scalars</strong>. Others are incomplete without a direction: a 50 N push means nothing until you say <em>which way</em>. Force, velocity, acceleration, displacement, and field are all <strong>vectors</strong> — arrows with both magnitude (length) and direction.</p>
<p>The move that makes vectors computable is <strong>resolution into components</strong>: split the arrow into its shadow along x and its shadow along y. For a vector of magnitude A at angle θ above the x-axis:</p>
<p style="text-align:center;"><strong>Ax = A cos θ  Ay = A sin θ</strong></p>
<p><strong>Worked example.</strong> A rope pulls a sled with 50 N at 30° above the horizontal. Components: Ax = 50 cos 30° = 43.3 N (dragging it forward), Ay = 50 sin 30° = 25 N (lifting it slightly). One force, two independent jobs.</p>
<p>The reverse trip uses Pythagoras and inverse tangent. Given components (3, 4): magnitude = √(3² + 4²) = 5, direction = tan⁻¹(4/3) ≈ 53.1° above the x-axis.</p>
<div class="key-concept">
  <h4>Key Concept: A Vector IS Its Components</h4>
  <p>Once resolved, the x-story and the y-story proceed independently — what happens horizontally never interferes with what happens vertically. That single idea is the entire strategy of two-dimensional physics: a projectile in Subject 11.2 is just constant velocity in x running side by side with free fall in y.</p>
</div>
<div class="analogy">
  <h3>Analogy: City Directions</h3>
  <p>"Walk 5 km northeast" and "walk 3.5 km east, then 3.5 km north" deliver you to the same café. Components are the street-grid version of an arrow — less romantic, infinitely easier to compute with.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Notation flags vectors everywhere in physics texts: boldface (<strong>F</strong>), arrows overhead, or unit-vector form like 3i + 4j. Whenever you see one, your first instinct should be: what are its components?</p>
</div>`,
        },
        {
          id: "adding-vectors",
          title: "Adding Vectors: Tip-to-Tail and by Components",
          content: `
<p>Vectors don't add like numbers. Walk 4 km east, then 3 km north: you've walked 7 km, but you are only 5 km from home. Graphically, addition is <strong>tip-to-tail</strong>: place the second arrow's tail on the first arrow's tip; the sum (the <strong>resultant</strong>) runs from the very start to the very end.</p>
<p><strong>Worked example 1.</strong> That hiker: resultant magnitude √(4² + 3²) = 5 km, direction tan⁻¹(3/4) ≈ 36.9° north of east. A 3-4-5 triangle in disguise.</p>
<p>Drawing works for two arrows; algebra scales to any number. The rule could not be simpler: <strong>add the components separately</strong>.</p>
<p><strong>Worked example 2.</strong> Two tugboats pull a barge: F₁ = 10 kN due east, F₂ = 10 kN at 60° north of east. Components: F₁ = (10, 0); F₂ = (10 cos 60°, 10 sin 60°) = (5, 8.66). Sum: (15, 8.66) kN. Resultant: √(15² + 8.66²) = √300 ≈ 17.3 kN at tan⁻¹(8.66/15) = 30° north of east.</p>
<p>Notice: 10 + 10 gave 17.3, not 20. Vectors only add magnitudes when they are perfectly parallel; at any other angle the resultant is shorter. Fully opposed, they cancel entirely — and that cancellation is a concept, not a failure:</p>
<div class="key-concept">
  <h4>Key Concept: Equilibrium Means the Vector Sum Is Zero</h4>
  <p>A bridge, a ladder, a tug-of-war at stalemate: "not accelerating" translates to "all force vectors sum to zero" — which by components means ΣFx = 0 <em>and</em> ΣFy = 0, two equations from one picture. Statics in Subject 11.7 is this idea run at industrial scale.</p>
</div>
<p>Subtraction is addition of the reverse: A − B = A + (−B), where −B is B flipped 180°. You'll need it the moment you compute a <em>change</em> in velocity — Δv = v₂ − v₁ — which is how circular motion reveals its center-pointing acceleration in Subject 11.6.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Airline pilots do vector addition every flight: airspeed vector plus wind vector equals ground-track vector. A 40-knot crosswind on a 400-knot airliner demands a heading correction of about tan⁻¹(0.1) ≈ 6°.</p>
</div>`,
        },
        {
          id: "the-dot-product",
          title: "The Dot Product: How Much Do Two Vectors Agree?",
          content: `
<p>Multiplying vectors comes in two flavors. The first, the <strong>dot product</strong>, takes two vectors and returns a <em>scalar</em> measuring how much they point the same way:</p>
<p style="text-align:center;"><strong>A · B = |A||B| cos θ = AxBx + AyBy</strong></p>
<p>Two formulas, one number: the geometric version (magnitudes times the cosine of the angle between) and the component version (multiply matching components, add). The cosine is the personality here:</p>
<ul>
  <li>Parallel (θ = 0°): cos θ = 1, maximum dot product</li>
  <li>Perpendicular (θ = 90°): cos θ = 0, <strong>dot product zero</strong></li>
  <li>Opposed (θ = 180°): cos θ = −1, maximally negative</li>
</ul>
<p><strong>Worked example 1.</strong> A force F = (6, 8) N drags a crate through displacement d = (3, 0) m. Work done: W = F · d = 6×3 + 8×0 = <strong>18 J</strong>. Only the 6 N component along the motion does work; the 8 N pulling upward contributes nothing. Work in Subject 11.5 is <em>defined</em> as this dot product: W = F·d cos θ.</p>
<p><strong>Worked example 2.</strong> Find the angle between A = (1, 2) and B = (3, 1). Dot product: 1×3 + 2×1 = 5. Magnitudes: √5 and √10. So cos θ = 5/(√5·√10) = 5/√50 ≈ 0.707, giving θ = 45°. The dot product is a protractor that never needs drawing.</p>
<div class="key-concept">
  <h4>Key Concept: Perpendicular Means Zero Work</h4>
  <p>A satellite's gravity pulls perpendicular to its circular velocity, so gravity does no work on it — which is why the orbit's speed never changes. Deep dynamics, one cosine. The same test (dot product = 0) is how you check perpendicularity without drawing anything.</p>
</div>
<div class="analogy">
  <h3>Analogy: Pulling a Wagon at an Angle</h3>
  <p>Haul a wagon by a slanted handle and only the along-the-road part of your pull moves it forward; the upward part just unweights the wheels. The dot product is the bookkeeper that credits only the cooperating fraction — |B| cos θ is B's shadow cast along A.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Magnetic flux in Subject 14.5 is another dot product — field vector dotted with the loop's area vector — which is why tilting a coil in a field changes the flux by exactly cos θ.</p>
</div>`,
        },
        {
          id: "the-cross-product",
          title: "The Cross Product: Turning Effects and the Right Hand",
          content: `
<p>The second vector product answers a different question: how effectively do two vectors <em>turn</em> things? The <strong>cross product</strong> A × B is itself a vector, with magnitude</p>
<p style="text-align:center;"><strong>|A × B| = |A||B| sin θ</strong></p>
<p>and a direction perpendicular to <em>both</em> A and B, chosen by the <strong>right-hand rule</strong>: point your right hand's fingers along A, curl them toward B, and your thumb gives A × B. Where the dot product loved parallel vectors (cos θ), the cross product loves perpendicular ones (sin θ): it is maximal at 90° and <strong>zero for parallel vectors</strong>. And order matters: B × A points the opposite way, so A × B = −(B × A).</p>
<p><strong>Worked example 1 (torque).</strong> You push a 0.3 m wrench with 40 N. Applied perpendicular to the handle: torque τ = rF sin 90° = 0.3 × 40 × 1 = <strong>12 N·m</strong>. At 60° to the handle: τ = 0.3 × 40 × sin 60° = 10.4 N·m. Push along the handle (θ = 0°): τ = 0 — you can shove a wrench lengthwise all day and nothing rotates. Torque, the star of Subject 11.7, is the cross product τ = r × F.</p>
<p><strong>Worked example 2 (magnetic force).</strong> A proton (q = 1.6 × 10⁻¹⁹ C) crosses a 0.5 T magnetic field at 2 × 10⁶ m/s, perpendicular. Force: F = qvB sin θ = 1.6 × 10⁻¹⁹ × 2 × 10⁶ × 0.5 = <strong>1.6 × 10⁻¹³ N</strong> — tiny, yet enough to whip the proton into a circle, because the full law F = qv × B always pushes perpendicular to the motion. Subject 14.4 builds mass spectrometers from exactly this.</p>
<div class="key-concept">
  <h4>Key Concept: Two Products, Two Questions</h4>
  <p>Dot product: "how much do these cooperate?" — scalar, cos θ, zero when perpendicular. Cross product: "how much do these twist?" — vector, sin θ, zero when parallel. Between them they cover nearly every vector formula in Phases 3 and 4.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Generations of physics students have been spotted in exams silently contorting their right hands. It works — but never the left hand: using it flips every answer by 180°.</p>
</div>`,
        },
        {
          id: "force-decomposition",
          title: "Vectors at Work: The Inclined Plane",
          content: `
<p>Time to assemble the chapter into physics's most classic setup: a block on a ramp. This is the exact move Subject 11.3 ("force decomposition on inclines") assumes you own, so let's own it.</p>
<p>A block of mass m rests on a frictionless incline at angle θ. Gravity pulls straight down with weight W = mg. The clever step: <strong>tilt your axes</strong> to match the ramp — x along the slope, y perpendicular to it. Gravity then splits into:</p>
<ul>
  <li><strong>Along the slope: mg sin θ</strong> — the component trying to slide the block down</li>
  <li><strong>Into the slope: mg cos θ</strong> — the component pressing the block against the surface (balanced by the normal force N)</li>
</ul>
<p>Sanity-check with limiting cases, asymptotic-thinking style: at θ = 0° (flat ground), sin θ = 0 — nothing slides, and N = mg, full weight on the surface. At θ = 90° (a wall), sin θ = 1 — free fall, and N = 0. The formulas pass at both extremes, so you've almost certainly assigned sine and cosine to the right components.</p>
<p><strong>Worked example.</strong> A 10 kg crate on a 30° frictionless ramp, g = 9.8 m/s²:</p>
<ol>
  <li>Weight: W = 10 × 9.8 = 98 N, straight down.</li>
  <li>Along the slope: 98 sin 30° = 98 × 0.5 = <strong>49 N</strong> pulling it downhill.</li>
  <li>Into the slope: 98 cos 30° = 98 × 0.866 ≈ <strong>84.9 N</strong>, so the normal force is 84.9 N.</li>
  <li>Acceleration: a = 49/10 = 4.9 m/s² — exactly g sin 30°, half of free fall.</li>
</ol>
<p>To hold the crate still, a rope up the slope needs just 49 N — the ramp itself carries the rest. That's the entire engineering point of ramps, and with friction (μN) or tension added, every incline problem in Subject 11.3 is this same decomposition plus one more arrow.</p>
<div class="analogy">
  <h3>Analogy: Rotate the Graph Paper</h3>
  <p>Tilting the axes feels like cheating, but axes are yours to choose — like rotating your graph paper until the problem lines up with the grid. Aligned axes turn a 2D problem into two clean 1D problems.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: sin for Slide, cos for Squash</h4>
  <p>On any incline: mg sin θ acts along the slope, mg cos θ acts into it. Verify once with the θ = 0° and θ = 90° limits, then use it forever.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A ball is launched at 20 m/s at 60° above the horizontal. Its horizontal and vertical velocity components are…",
          options: [
            "17.3 m/s and 10 m/s",
            "10 m/s and 17.3 m/s",
            "20 m/s and 20 m/s",
            "10 m/s and 10 m/s",
          ],
          correctIndex: 1,
          explanation:
            "Horizontal: 20 cos 60° = 10 m/s; vertical: 20 sin 60° = 17.3 m/s. Cosine goes with the axis the angle is measured from. These two components then evolve independently — the heart of projectile motion in Subject 11.2.",
        },
        {
          question:
            "Forces of 6 N east and 8 N north act on an object. The magnitude of the resultant is…",
          options: ["14 N", "2 N", "10 N", "48 N"],
          correctIndex: 2,
          explanation:
            "Perpendicular vectors add by Pythagoras: √(6² + 8²) = √100 = 10 N (a 6-8-10 triangle). Magnitudes only add directly (to 14 N) when vectors are parallel.",
        },
        {
          question: "The dot product of two perpendicular vectors is…",
          options: [
            "zero",
            "the product of their magnitudes",
            "negative",
            "a vector perpendicular to both",
          ],
          correctIndex: 0,
          explanation:
            "A · B = |A||B| cos θ, and cos 90° = 0. Physically: perpendicular vectors don't cooperate at all — which is why a force perpendicular to motion (like gravity on a circular orbit) does zero work.",
        },
        {
          question:
            "For fixed magnitudes, the cross product |A × B| is largest when the angle between A and B is…",
          options: ["0°", "45°", "180°", "90°"],
          correctIndex: 3,
          explanation:
            "|A × B| = |A||B| sin θ peaks at sin 90° = 1. That's why a wrench turns best when you push perpendicular to the handle, and why a charge moving straight along a magnetic field (θ = 0°) feels no force at all.",
        },
        {
          question:
            "A 5 kg block sits on a frictionless 37° incline (take g = 9.8 m/s², sin 37° ≈ 0.6). The component of its weight along the slope is about…",
          options: ["49 N", "39 N", "29.4 N", "9.8 N"],
          correctIndex: 2,
          explanation:
            "Weight is mg = 49 N; the along-slope share is mg sin θ = 49 × 0.6 ≈ 29.4 N. The remaining mg cos θ ≈ 39 N presses into the ramp and is balanced by the normal force. 'sin for slide, cos for squash.'",
        },
      ],
    },
    {
      id: "complex-numbers",
      title: "Complex Numbers",
      subtitle:
        "The Argand plane, polar form, and a preview of Euler's formula — quantum's native language",
      sections: [
        {
          id: "meet-i",
          title: "A Number Whose Square Is Negative",
          content: `
<p>Every real number squares to something non-negative, so x² = −1 looks unanswerable. Mathematics answered it anyway, by decree: define a new number <strong>i</strong> with the single property <strong>i² = −1</strong>, and see what happens. What happens turns out to run AC circuit analysis and all of quantum mechanics — but first, the arithmetic.</p>
<p>A <strong>complex number</strong> has the form z = a + bi: a real part a and an imaginary part b. The rules are ordinary algebra plus the one new fact:</p>
<ul>
  <li><strong>Add/subtract</strong> part by part: (2 + 3i) + (4 − i) = 6 + 2i</li>
  <li><strong>Multiply</strong> by expanding, then replace i² with −1</li>
</ul>
<p><strong>Worked example (multiplication).</strong> (2 + 3i)(1 − 2i) = 2 − 4i + 3i − 6i² = 2 − i − 6(−1) = <strong>8 − i</strong>. The i² term hops over to the real side with a sign flip — that hop is where all the magic hides.</p>
<p>Powers of i cycle with period four: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then repeat. (Remember this cycle; the Argand plane will explain it as rotation.)</p>
<p>Division uses the <strong>conjugate</strong>: the conjugate of a + bi is a − bi, and multiplying the two gives the real number a² + b². To divide, multiply top and bottom by the denominator's conjugate.</p>
<p><strong>Worked example (division).</strong> (3 + i)/(1 − i): multiply by (1 + i)/(1 + i). Bottom: (1 − i)(1 + i) = 1 + 1 = 2. Top: (3 + i)(1 + i) = 3 + 3i + i − 1 = 2 + 4i. Result: (2 + 4i)/2 = <strong>1 + 2i</strong>.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Complex numbers weren't invented for quadratics — mathematicians happily called those "no solution." They were forced on us by <em>cubics</em>: Cardano's 16th-century formula sometimes routed through square roots of negatives on its way to answers that were plainly real. The "impossible" numbers worked, so they stayed.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Nothing Broke</h4>
  <p>Adding i to arithmetic creates no contradictions — every algebra rule you know still holds. Complex numbers aren't a hack; they're the completion of the number system, the place where every polynomial finally has all its roots.</p>
</div>`,
        },
        {
          id: "the-argand-plane",
          title: "Numbers as Points: The Argand Plane",
          content: `
<p>The insight that made complex numbers respectable is geometric: plot a + bi as the point (a, b) — real part on the horizontal axis, imaginary part on the vertical. This picture is the <strong>Argand plane</strong>, and it converts complex arithmetic into geometry you already own from the vectors chapter.</p>
<p>Two measurements describe any complex number's position:</p>
<ul>
  <li><strong>Modulus</strong> |z| = √(a² + b²) — the distance from the origin (a vector magnitude in disguise)</li>
  <li><strong>Argument</strong> θ — the angle from the positive real axis (found with inverse tangent, minding the quadrant)</li>
</ul>
<p><strong>Worked example.</strong> z = 3 + 4i sits at the point (3, 4). Modulus: |z| = √(9 + 16) = 5. Argument: tan⁻¹(4/3) ≈ 53.1°. Same 3-4-5 triangle as the vector chapter — deliberately so.</p>
<p><strong>Addition is vector addition</strong>: (3 + 4i) + (2 − i) = 5 + 3i is tip-to-tail arrows. But multiplication is where complex numbers leave ordinary vectors behind. Multiply z = 2 + i by i and watch:</p>
<p style="text-align:center;">(2 + i) × i = 2i + i² = <strong>−1 + 2i</strong></p>
<p>Plot both: (2, 1) became (−1, 2). Same distance from the origin (√5), but rotated exactly 90° counterclockwise. This is completely general: <strong>multiplying by i rotates any complex number by 90°</strong>. Now the power cycle of i makes sense — i, −1, −i, 1 are just quarter-turns of the point 1, coming home every four turns.</p>
<div class="key-concept">
  <h4>Key Concept: 2D Vectors with a Rotation Built In</h4>
  <p>A complex number is a plane vector that knows how to rotate: addition works like vectors, but multiplication rotates and scales. Anything in physics that rotates or oscillates — AC voltages, wave phases, quantum states — becomes bookkeeping in this plane.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The plane is named for Jean-Robert Argand, an amateur — a Paris bookshop manager who published the idea in 1806. Gauss had it earlier and Wessel earlier still, but the bookseller's name stuck.</p>
</div>`,
        },
        {
          id: "polar-form",
          title: "Polar Form: Multiplication Becomes Rotation",
          content: `
<p>If a complex number is really "a distance r and an angle θ," why not write it that way? Reading components off the Argand triangle gives the <strong>polar form</strong>:</p>
<p style="text-align:center;"><strong>z = r(cos θ + i sin θ)</strong></p>
<p>where r = |z| is the modulus and θ the argument. Check: r = 5, θ = 53.1° gives 5(0.6 + 0.8i) = 3 + 4i. ✓</p>
<p>Polar form exists for one glorious reason — the multiplication rule collapses into two words:</p>
<div class="key-concept">
  <h4>Key Concept: Multiply the Moduli, Add the Angles</h4>
  <p>If z₁ has modulus r₁ and angle θ₁, and z₂ has r₂ and θ₂, then z₁z₂ has modulus r₁r₂ and angle θ₁ + θ₂. Multiplication <em>is</em> rotate-and-scale. The 90° rotation from multiplying by i is now obvious: i has modulus 1 and angle 90°, so it adds 90° and scales by nothing.</p>
</div>
<p><strong>Worked example 1.</strong> z₁ = 2 at angle 30°, z₂ = 3 at angle 45°. Product: modulus 2 × 3 = 6, angle 30° + 45° = 75°. In rectangular form this would have taken four multiplications and an i² hop; in polar it's mental arithmetic.</p>
<p><strong>Worked example 2 (powers).</strong> Compute (1 + i)⁴. Convert once: 1 + i has modulus √2 and angle 45°. Fourth power: modulus (√2)⁴ = 4, angle 4 × 45° = 180°. A modulus of 4 at angle 180° is the real number <strong>−4</strong>. Try expanding (1 + i)⁴ by brute force and you'll appreciate the shortcut.</p>
<p>The general statement is <strong>De Moivre's theorem</strong>: zⁿ has modulus rⁿ and angle nθ. It also runs backward to find roots: the cube roots of 8 have modulus 2 and angles 0°, 120°, 240° — three roots spaced evenly around a circle, invisible until you think polar.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Electrical engineers call polar-form complex numbers <strong>phasors</strong> and write 6∠75°. In Subject 14.6, an AC circuit's resistances and reactances combine as phasors — turning calculus-grade differential equations into complex arithmetic.</p>
</div>`,
        },
        {
          id: "eulers-formula",
          title: "Euler's Formula: The Bridge to Waves",
          content: `
<p>The polar form r(cos θ + i sin θ) is crying out for an abbreviation, and Euler found one that shook mathematics. Extending the exponential function to imaginary inputs (via the series expansions you'll meet properly in Subject 16) yields:</p>
<p style="text-align:center;"><strong>e^(iθ) = cos θ + i sin θ</strong></p>
<p>An exponential equals a package of trig functions. Geometrically, e^(iθ) is the point on the unit circle at angle θ — so the exponential function, fed imaginary numbers, <em>travels in circles</em>. Every complex number becomes z = re^(iθ), and "multiply moduli, add angles" is now just the familiar law of exponents: e^(iα) × e^(iβ) = e^(i(α+β)).</p>
<p><strong>Worked examples.</strong> e^(iπ/2) = cos 90° + i sin 90° = i. e^(iπ/3) = cos 60° + i sin 60° = 0.5 + (√3/2)i. And at θ = π, since cos π = −1 and sin π = 0:</p>
<p style="text-align:center;"><strong>e^(iπ) + 1 = 0</strong></p>
<p>— one equation containing e, i, π, 1, and 0, routinely voted the most beautiful in mathematics.</p>
<p>Why does physics adore this formula? Because a wave A cos(ωt) is simply the <strong>real part of Ae^(iωt)</strong> — a point circling the Argand plane, viewed edge-on. Oscillation is rotation seen from the side. Exponentials are far easier to manipulate than trig (they multiply, differentiate, and add phases effortlessly), so physicists do wave algebra with e^(iωt) and take the real part at the end.</p>
<div class="key-concept">
  <h4>Key Concept: Where This Is Headed</h4>
  <p>AC circuit analysis (Subject 14.6) treats voltages as rotating e^(iωt) phasors. Interference of waves (Subject 13.2) becomes addition of complex numbers with different phases. And the quantum wavefunction ψ that rules Phase 5 is irreducibly complex-valued — probability amplitudes are complex numbers whose moduli squared give probabilities. This chapter is your passport.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Richard Feynman, in his famous Lectures, called Euler's formula "the most remarkable formula in mathematics — our jewel," connecting algebra and geometry in one line.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What is i³?",
          options: ["i", "−1", "−i", "1"],
          correctIndex: 2,
          explanation:
            "i³ = i² × i = (−1) × i = −i. The powers of i cycle every four steps — i, −1, −i, 1 — which the Argand plane reveals as successive 90° rotations of the point 1.",
        },
        {
          question: "What is the modulus of z = 3 − 4i?",
          options: ["5", "7", "√7", "25"],
          correctIndex: 0,
          explanation:
            "|z| = √(3² + (−4)²) = √25 = 5 — the distance from the origin to the point (3, −4) on the Argand plane. The sign of the imaginary part doesn't matter, since it gets squared.",
        },
        {
          question:
            "In polar form, multiplying a number with modulus 2 and angle 40° by one with modulus 5 and angle 20° gives…",
          options: [
            "modulus 7, angle 60°",
            "modulus 10, angle 800°",
            "modulus 7, angle 800°",
            "modulus 10, angle 60°",
          ],
          correctIndex: 3,
          explanation:
            "The polar multiplication rule: multiply the moduli (2 × 5 = 10), add the angles (40° + 20° = 60°). Multiplication of complex numbers is always rotate-and-scale — this rule is why AC circuit phasors are so convenient.",
        },
        {
          question: "According to Euler's formula, e^(iπ) equals…",
          options: ["1", "−1", "i", "0"],
          correctIndex: 1,
          explanation:
            "e^(iθ) = cos θ + i sin θ, and at θ = π: cos π = −1, sin π = 0, so e^(iπ) = −1. Rearranged as e^(iπ) + 1 = 0, it links e, i, π, 1, and 0 in a single line — a half-turn around the unit circle, written as an exponential.",
        },
      ],
    },
    {
      id: "sequences-series-and-approximation",
      title: "Sequences, Series & Approximation",
      subtitle:
        "Geometric series, the binomial theorem, and small-x expansions — physics's favorite move",
      sections: [
        {
          id: "arithmetic-and-geometric-series",
          title: "Adding Up Patterns",
          content: `
<p>A <strong>sequence</strong> is an ordered list of numbers; a <strong>series</strong> is what you get when you add one up. Two patterns dominate.</p>
<p>An <strong>arithmetic sequence</strong> steps by a constant difference: 3, 7, 11, 15, … Its sum has a famous shortcut — pair the first term with the last: S = n/2 × (first + last). Legend says nine-year-old Gauss summed 1 + 2 + … + 100 instantly this way: 50 pairs, each totaling 101, giving <strong>5050</strong>.</p>
<p>A <strong>geometric sequence</strong> multiplies by a constant ratio r: 2, 6, 18, 54, … (r = 3). Its finite sum is S = a(1 − rⁿ)/(1 − r). The showstopper comes when |r| &lt; 1: the terms shrink fast enough that even <em>infinitely many</em> of them add to a finite number:</p>
<p style="text-align:center;"><strong>S∞ = a/(1 − r)  (for |r| &lt; 1)</strong></p>
<p>Check with the classic: 1 + 1/2 + 1/4 + 1/8 + … = 1/(1 − 1/2) = 2. Infinite terms, finite total.</p>
<p><strong>Worked example.</strong> A ball is dropped from 2 m; each bounce reaches 60% of the previous height. Total distance travelled? The drop contributes 2 m. Each bounce adds an up-and-down pair: 2×(2 × 0.6) + 2×(2 × 0.6²) + … — a geometric series with first term 2.4 and ratio 0.6. Sum: 2.4/(1 − 0.6) = 6 m. Total: 2 + 6 = <strong>8 m</strong>. The ball bounces (mathematically) forever, yet travels a finite distance — and, it turns out, in finite time.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Zeno's paradox — to cross a room you must first cross half, then half the rest, forever — dissolved the day mathematics could sum 1/2 + 1/4 + 1/8 + … = 1. Twenty-four centuries of philosophy, settled by a geometric series.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Ratios Rule Repetition</h4>
  <p>Whenever a physical process repeats with a fixed fraction surviving each round — light bouncing between partially reflecting surfaces, a drug dose decaying between daily pills, echoes fading in a concert hall — the long-run total is a geometric series, and a/(1 − r) closes it in one line.</p>
</div>`,
        },
        {
          id: "the-binomial-theorem",
          title: "The Binomial Theorem",
          content: `
<p>Expanding (a + b)² = a² + 2ab + b² is familiar. But (a + b)⁷? Multiplying it out by hand is misery. The <strong>binomial theorem</strong> hands you any power directly:</p>
<p style="text-align:center;"><strong>(a + b)ⁿ = Σ C(n, k) aⁿ⁻ᵏ bᵏ</strong></p>
<p>where the coefficients C(n, k) = n!/(k!(n − k)!) count the ways of choosing k items from n. They're also the rows of <strong>Pascal's triangle</strong>, where each entry is the sum of the two above it:</p>
<table>
  <tr><td>n = 0:</td><td>1</td></tr>
  <tr><td>n = 1:</td><td>1 1</td></tr>
  <tr><td>n = 2:</td><td>1 2 1</td></tr>
  <tr><td>n = 3:</td><td>1 3 3 1</td></tr>
  <tr><td>n = 4:</td><td>1 4 6 4 1</td></tr>
</table>
<p><strong>Worked example.</strong> Expand (x + 2)⁴ using row 4 (coefficients 1, 4, 6, 4, 1):</p>
<p style="text-align:center;">x⁴ + 4x³(2) + 6x²(4) + 4x(8) + 16 = <strong>x⁴ + 8x³ + 24x² + 32x + 16</strong></p>
<p>Powers of x fall as powers of 2 rise, and the coefficients come straight off the triangle. Spot-check with x = 1: left side 3⁴ = 81; right side 1 + 8 + 24 + 32 + 16 = 81. ✓</p>
<p>For physics, the crucial special case is a = 1:</p>
<p style="text-align:center;"><strong>(1 + x)ⁿ = 1 + nx + [n(n − 1)/2]x² + …</strong></p>
<p>Stare at the structure: a leading 1, a term with one power of x, then terms with x², x³, … If x happens to be <em>small</em>, each successive term is much smaller than the last — a series arranged in order of importance. The next section weaponizes that observation into the most-used move in physics.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The same C(n, k) coefficients will return in the probability chapter as the number of ways to get k heads in n coin flips. Algebra and chance share one triangle — "Pascal's" triangle, known in China (Yang Hui) and Persia (al-Karaji) centuries before Pascal.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Newton's Leap</h4>
  <p>Newton showed the (1 + x)ⁿ series works even for negative and fractional n — where it runs forever. That means √(1 + x) = (1 + x)^(1/2) and 1/(1 + x) = (1 + x)⁻¹ have expansions too, and those two are physics's daily bread.</p>
</div>`,
        },
        {
          id: "small-x-expansions",
          title: "The Small-x Approximation: Physics's Favorite Move",
          content: `
<p>Here is the move the curriculum calls the most-used in physics. Take the binomial series (1 + x)ⁿ = 1 + nx + [n(n − 1)/2]x² + … and suppose x is small — say 0.02. Then x² = 0.0004 is tiny and x³ is microscopic. So chop the series after the second term:</p>
<p style="text-align:center;"><strong>(1 + x)ⁿ ≈ 1 + nx  (when |x| ≪ 1)</strong></p>
<p>This is called <strong>expanding to first order</strong>. Watch it perform:</p>
<table>
  <tr><th>Exact</th><th>First-order estimate</th><th>Truth</th></tr>
  <tr><td>(1.02)³</td><td>1 + 3(0.02) = 1.06</td><td>1.0612</td></tr>
  <tr><td>√1.04 = (1.04)^(1/2)</td><td>1 + 0.04/2 = 1.02</td><td>1.0198</td></tr>
  <tr><td>1/1.05 = (1.05)⁻¹</td><td>1 − 0.05 = 0.95</td><td>0.9524</td></tr>
</table>
<p>Three keystrokes of mental math, accurate to a fraction of a percent. The three service patterns worth memorizing:</p>
<ul>
  <li><strong>√(1 + x) ≈ 1 + x/2</strong> (n = 1/2)</li>
  <li><strong>1/(1 + x) ≈ 1 − x</strong> (n = −1)</li>
  <li><strong>1/(1 + x)² ≈ 1 − 2x</strong> (n = −2)</li>
</ul>
<p>The error you commit is roughly the x² term you dropped — about n(n − 1)x²/2. For x = 0.02 that's parts in ten thousand. For x = 0.5 the move is illegitimate: "small" means small.</p>
<div class="analogy">
  <h3>Analogy: The Zoom Lens</h3>
  <p>Zoom far enough into any smooth curve and it looks like a straight line. First-order expansion is that zoom performed algebraically: near x = 0, the wild function (1 + x)ⁿ is indistinguishable from the line 1 + nx. Keep the x² term and you're fitting a parabola — the second-order refinement.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Approximation Is a Precision Tool</h4>
  <p>"Expand to first order" is not sloppiness — it's controlled precision: you know exactly what you dropped (order x²) and exactly when the drop is safe (x small). Physicists trade exactness for insight only when the price is measured and tiny.</p>
</div>`,
        },
        {
          id: "approximation-in-physics",
          title: "Where the Move Shows Up: Pendulums, Relativity, Everest",
          content: `
<p>Now watch first-order thinking crack real physics — three previews of arguments you'll meet again.</p>
<p><strong>The pendulum (Subject 11.8).</strong> A swinging mass feels a restoring force proportional to sin θ — an equation with no clean solution. But for small swings in radians, <strong>sin θ ≈ θ</strong> (at 10° = 0.175 rad, sin θ = 0.174 — a 0.5% error). Replace sin θ by θ and the pendulum becomes exactly simple harmonic motion, complete with the clean period formula T = 2π√(L/g). Every pendulum-clock second ever ticked rests on that swap.</p>
<p><strong>Relativity at low speed (Subject 15.1).</strong> Einstein's factor γ = 1/√(1 − v²/c²) = (1 − v²/c²)^(−1/2) looks alien, so expand it with n = −1/2 and x = −v²/c²:</p>
<p style="text-align:center;"><strong>γ ≈ 1 + v²/2c²</strong></p>
<p>Check at v = 0.1c: exact γ = 1.00504; approximation 1.005. Feed this into Einstein's energy E = γmc² and you get E ≈ mc² + ½mv² — rest energy plus <em>Newton's familiar kinetic energy</em>, reborn as the first-order term of relativity. New theories must contain old ones as small-x limits; this is the sanity check from the functions chapter, now with teeth.</p>
<p><strong>Gravity on Everest.</strong> At height h above Earth (radius R), g scales by 1/(1 + h/R)² ≈ 1 − 2h/R. For h = 8.8 km and R = 6371 km: a fractional drop of 2 × 8.8/6371 ≈ 0.28%. No universal-gravitation slog — one first-order move, done.</p>
<div class="key-concept">
  <h4>Key Concept: "To First Order" Is a Physics Dialect</h4>
  <p>When physicists say a result holds "to first order," they mean: expand everything in the small quantity, keep terms with one power of it, and guarantee the corrections are order-x² small. You now speak the dialect — and you'll hear it in every chapter from here to quantum mechanics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>GPS satellites move fast enough (v ≈ 3.9 km/s) that the tiny v²/2c² correction — about 8 parts in 10¹¹ — would smear your position by kilometers per day if uncorrected. First-order terms are small, not ignorable.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What is the sum of the infinite geometric series 1 + 1/3 + 1/9 + 1/27 + …?",
          options: ["2", "3/2", "∞ (it diverges)", "4/3"],
          correctIndex: 1,
          explanation:
            "First term a = 1, ratio r = 1/3, and since |r| < 1 the infinite sum converges: S = a/(1 − r) = 1/(2/3) = 3/2. Shrinking terms can pile up forever and still total a finite number.",
        },
        {
          question:
            "In the expansion of (1 + x)⁵, what is the coefficient of x²?",
          options: ["5", "20", "25", "10"],
          correctIndex: 3,
          explanation:
            "The coefficient is C(5, 2) = 5!/(2!·3!) = 10 — also the middle-left entry of Pascal's triangle row 1, 5, 10, 10, 5, 1. The same number counts the ways to choose 2 objects from 5, a link the probability chapter will exploit.",
        },
        {
          question:
            "Using the first-order approximation √(1 + x) ≈ 1 + x/2, estimate √1.06.",
          options: ["1.03", "1.06", "1.12", "1.006"],
          correctIndex: 0,
          explanation:
            "With x = 0.06: √1.06 ≈ 1 + 0.03 = 1.03. The true value is 1.0296 — the estimate is off by 4 parts in 10,000, because the neglected term is of order x² ≈ 0.0036 times a small coefficient.",
        },
        {
          question:
            "Why does the approximation sin θ ≈ θ matter so much for the pendulum?",
          options: [
            "It only works in degrees, matching protractor measurements",
            "It makes the pendulum stop swinging in the equations",
            "It shows pendulums are impossible to analyze",
            "It turns the unsolvable sin θ equation into simple harmonic motion with a clean period formula",
          ],
          correctIndex: 3,
          explanation:
            "The exact pendulum equation involves sin θ and has no elementary solution. For small angles in radians, sin θ ≈ θ converts it into the SHM equation, yielding T = 2π√(L/g). The approximation requires radians — in degrees it fails completely.",
        },
      ],
    },
    {
      id: "limits-and-the-idea-of-calculus",
      title: "Limits & the Idea of Calculus",
      subtitle:
        "The derivative as rate, the integral as area, and first calculus applied to motion",
      sections: [
        {
          id: "limits-and-continuity",
          title: "Sneaking Up on a Value",
          content: `
<p>Calculus begins with a question algebra cannot quite answer: what is a function <em>heading toward</em> at a point it never actually reaches? The tool is the <strong>limit</strong>. Writing lim (x → a) f(x) = L means: as x creeps ever closer to a, f(x) settles ever closer to L — whether or not f(a) itself even exists.</p>
<p><strong>Worked example.</strong> Take f(x) = (x² − 1)/(x − 1). At x = 1 it's the forbidden 0/0. But watch the neighborhood:</p>
<table>
  <tr><th>x</th><td>0.9</td><td>0.99</td><td>1.01</td><td>1.1</td></tr>
  <tr><th>f(x)</th><td>1.9</td><td>1.99</td><td>2.01</td><td>2.1</td></tr>
</table>
<p>Both sides funnel toward 2, so lim (x → 1) f(x) = <strong>2</strong>. Algebra agrees: x² − 1 = (x − 1)(x + 1), and cancelling leaves x + 1, which is 2 at x = 1. The function has a single missing point — a pinhole — and the limit reads straight through it.</p>
<p>A function is <strong>continuous</strong> where its actual value equals its limit: no holes, no jumps, the pencil never leaves the paper. Most physics formulas are continuous, which is exactly why the limit machinery works on them. You've already met limits at infinity, too — the horizontal asymptotes of the functions chapter were lim (x → ∞) statements in disguise.</p>
<p>Why force this precision? Because the next section's question — "what is the speed <em>right now</em>?" — is Δx/Δt with both Δs shrinking to zero: another 0/0 expression whose limit is perfectly finite. Taming 0/0 is the whole entrance fee of calculus.</p>
<div class="key-concept">
  <h4>Key Concept: The Journey, Not the Destination</h4>
  <p>A limit asks where the outputs are <em>converging</em>, not what happens at the point itself. That one shift in attitude turns "division by zero" from a dead end into the doorway to derivatives — the same doorway Subject 16 walks through on day one.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton and Leibniz used limits for 150 years before anyone defined them properly. The airtight definition — Cauchy and Weierstrass, 19th century — arrived long after calculus had already predicted planetary orbits. Physics often runs ahead of its own rigor.</p>
</div>`,
        },
        {
          id: "the-derivative",
          title: "The Derivative: Slope as a Rate of Change",
          content: `
<p>Average speed is easy: distance over time, Δx/Δt. But your speedometer doesn't report averages — it reports speed <em>now</em>. The <strong>derivative</strong> is that idea made exact: the slope of a graph at a single point, computed as a limit of secant-line slopes over shrinking intervals:</p>
<p style="text-align:center;"><strong>f′(x) = lim (h → 0) [f(x + h) − f(x)] / h</strong></p>
<p><strong>Worked example.</strong> What is the slope of f(x) = x² at x = 3? Over a small interval from 3 to 3 + h, the slope is [(3 + h)² − 9]/h = (6h + h²)/h = <strong>6 + h</strong>. Now let h shrink: 6.1, 6.01, 6.001, … → the limit is exactly <strong>6</strong>. The dreaded 0/0 collapsed into a clean number, just as the last section promised.</p>
<p>Run the same computation at a general x and you get f′(x) = 2x — a formula that hands you the slope everywhere. It's the first case of the <strong>power rule</strong>, the workhorse pattern:</p>
<p style="text-align:center;"><strong>if f(x) = xⁿ, then f′(x) = n·xⁿ⁻¹</strong></p>
<ul>
  <li>x³ → 3x²  x⁵ → 5x⁴  x → 1  constants → 0</li>
  <li>Sums differentiate term by term: (t³ + 4t)′ = 3t² + 4</li>
</ul>
<p>Physics reads every derivative as a <strong>rate</strong>: dx/dt is velocity, dN/dt is a decay rate, dQ/dt is electric current. The Leibniz notation dy/dx — "a little change in y per little change in x" — keeps the meaning visible. And two old promises come due here: e^x from chapter 2 is the function that equals its own derivative, and (in radians only) the derivative of sin is cos — both proved properly in Subject 16.</p>
<div class="analogy">
  <h3>Analogy: The Zoom Lens, Part Two</h3>
  <p>The small-x chapter zoomed into curves until they looked straight. The derivative is the slope of that straight line — the zoom taken to its limit. Differentiable just means: zoom far enough and the curve gives up its curviness.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: The Derivative Is the Instantaneous Rate</h4>
  <p>Wherever a quantity changes, its derivative is how fast. Subject 17's analytical mechanics writes all of Newton's physics in this language — force is literally the derivative of momentum.</p>
</div>`,
        },
        {
          id: "the-integral",
          title: "The Integral: Area That Accumulates",
          content: `
<p>Calculus has a second big idea, and it looks unrelated at first: finding the <strong>area under a curve</strong>. Why would a physicist care about area? Because area under a <em>rate</em> is a <em>total</em>: area under a velocity graph is distance travelled, area under a power graph is energy delivered, area under a force–distance graph is work done.</p>
<p><strong>Worked example 1.</strong> The area under y = 2x from x = 0 to x = 3 is a triangle: ½ × base × height = ½ × 3 × 6 = <strong>9</strong>. Note for later: 9 is exactly x² evaluated at 3.</p>
<p><strong>Worked example 2.</strong> Under y = x² from 0 to 3 there is no triangle formula — so approximate with rectangles. Slice into six strips of width 0.5 and use each strip's midpoint height: 0.5 × (0.0625 + 0.5625 + 1.5625 + 3.0625 + 5.0625 + 7.5625) ≈ <strong>8.94</strong>. Thinner strips give 8.99, then 8.9999… The limit of this slicing process is the <strong>integral</strong>, written ∫x² dx from 0 to 3, and its exact value is 9.</p>
<p>Where did the exact 9 come from? From the miracle called the <strong>fundamental theorem of calculus</strong>: accumulating area and taking derivatives are inverse operations. The area under x² is x³/3 — precisely the function whose <em>derivative</em> is x² — evaluated at the endpoints: 3³/3 − 0 = 9. To integrate, run the power rule backward:</p>
<p style="text-align:center;"><strong>∫xⁿ dx = xⁿ⁺¹/(n + 1)</strong>  (plus a constant)</p>
<div class="analogy">
  <h3>Analogy: Speedometer and Odometer</h3>
  <p>Your car computes both directions of calculus. The speedometer differentiates the odometer (rate of change of distance); the odometer integrates the speedometer (accumulated area under the speed curve). Neither instrument peeks at the other — yet each could be rebuilt from the other's record.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Integration Undoes Differentiation</h4>
  <p>Slicing into infinitely many rectangles sounds hopeless; the fundamental theorem replaces it with "find the function whose derivative you're holding." Subject 16.4 builds the full toolkit — this chapter needs only the power rule, run in both directions.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Archimedes computed the area inside a parabola by exhaustion with triangles around 250 BCE — genuine integration, two millennia before Newton. What he lacked was the fundamental theorem, the shortcut that turns each new area from a research project into a one-liner.</p>
</div>`,
        },
        {
          id: "calculus-meets-motion",
          title: "Kinematics with Calculus: The Motion Ladder",
          content: `
<p>Now assemble both ideas into the move that Singapore's Additional Mathematics course drills into every student, because it converts kinematics from formula-hunting into two mechanical steps. Position, velocity, and acceleration form a ladder:</p>
<p style="text-align:center;"><strong>x(t) → differentiate → v(t) → differentiate → a(t)</strong></p>
<p>and integration climbs back up. Given <em>any</em> position formula, the entire motion is yours.</p>
<p><strong>Worked example (down the ladder).</strong> A particle moves along a line with x(t) = t³ − 6t² + 9t (meters, seconds).</p>
<ol>
  <li><strong>Velocity:</strong> v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3). The particle is momentarily at rest when v = 0: at t = 1 s and t = 3 s.</li>
  <li><strong>Acceleration:</strong> a(t) = 6t − 12. At t = 1 s, a = −6 m/s²: the particle sits at x(1) = 1 − 6 + 9 = 4 m, about to reverse. Between t = 1 and t = 3 it drifts back to x(3) = 27 − 54 + 27 = 0 m.</li>
</ol>
<p><strong>Worked example (up the ladder).</strong> A cart's velocity is v(t) = 6t² m/s. Displacement in the first 2 s is the area under v: ∫6t² dt = 2t³, evaluated from 0 to 2 → 2 × 8 = <strong>16 m</strong>. No motion formula memorized — just the reverse power rule.</p>
<p>Here is the payoff that reorganizes everything you learned in Phase 1: for <em>constant</em> acceleration a, integrate once to get v = u + at, integrate again to get x = ut + ½at². The sacred kinematics formulas were never separate facts — they are one integral, done twice. The ½ in ½at² is the ½ from ∫t dt = t²/2.</p>
<div class="key-concept">
  <h4>Key Concept: Differentiate Down, Integrate Up</h4>
  <p>Slope of the x–t graph = velocity; slope of the v–t graph = acceleration; area under the v–t graph = displacement. This ladder is the skeleton of Subject 16's calculus and the native language of Subject 17, where Newton's F = ma becomes a differential equation: force prescribes d²x/dt², and integration reconstructs the trajectory.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton invented this exact ladder to answer one question: what orbit follows from an inverse-square force? The Principia is, at heart, integration performed on gravity — the moon is the area under a curve.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What is the limit of (x² − 9)/(x − 3) as x approaches 3?",
          options: [
            "Undefined — it becomes 0/0",
            "3",
            "6",
            "9",
          ],
          correctIndex: 2,
          explanation:
            "At x = 3 the expression is 0/0, but the limit reads through the pinhole: factor x² − 9 = (x − 3)(x + 3), cancel, and x + 3 → 6. Check numerically: at x = 2.99 the ratio is 5.99. Taming 0/0 is exactly what limits are for.",
        },
        {
          question:
            "Using the power rule, the derivative of f(x) = x³ evaluated at x = 2 is…",
          options: ["12", "8", "6", "24"],
          correctIndex: 0,
          explanation:
            "The power rule gives f′(x) = 3x², and 3 × 2² = 12. Note the trap: 8 is f(2), the function's value — the derivative is the slope there, a different number entirely.",
        },
        {
          question:
            "A train moves at a constant 4 m/s from t = 0 to t = 3 s. On its velocity–time graph, its displacement appears as…",
          options: [
            "the slope of the line, 4 m",
            "the y-intercept, 4 m",
            "the length of the line, 5 m",
            "the area under the line, 12 m",
          ],
          correctIndex: 3,
          explanation:
            "Displacement is the area under the v–t graph: a 4 × 3 rectangle = 12 m. Slope of the v–t graph would be acceleration (here zero). Area under a rate gives a total — the integral's whole job.",
        },
        {
          question:
            "A particle's position is x(t) = 5t³. What is its acceleration at t = 2 s?",
          options: ["40 m/s²", "60 m/s²", "20 m/s²", "15 m/s²"],
          correctIndex: 1,
          explanation:
            "Differentiate twice down the ladder: v(t) = 15t², then a(t) = 30t, so a(2) = 60 m/s². One differentiation gives velocity (60 m/s at t = 2 — a coincidence of this example); the second gives acceleration.",
        },
        {
          question:
            "Why does integrating a constant acceleration a twice produce the familiar formula x = ut + ½at²?",
          options: [
            "Because ∫t dt = t²/2 — the ½ is the reverse power rule at work",
            "Because acceleration is halved on average during the motion",
            "It doesn't — that formula must be memorized separately",
            "Because the second integration divides everything by 2",
          ],
          correctIndex: 0,
          explanation:
            "Integrating a once gives v = u + at; integrating v gives x = ut + at²/2, where the ½ comes from ∫t dt = t²/2. The kinematics formulas of Phase 1 are one integral performed twice — calculus reveals them as a family, not a list.",
        },
      ],
    },
    {
      id: "probability-and-statistics-foundations",
      title: "Probability & Statistics Foundations",
      subtitle:
        "Counting, distributions, mean and variance, and the ubiquitous normal curve",
      sections: [
        {
          id: "counting-the-ways",
          title: "Counting Without Listing",
          content: `
<p>Probability begins with an unglamorous skill: counting how many ways things can happen — without listing them, because the numbers get astronomical fast. Three tools cover almost everything.</p>
<p><strong>The multiplication principle.</strong> Independent choices multiply: 3 shirts × 4 pants × 2 jackets = 24 outfits. Flip a coin 10 times: 2 × 2 × … × 2 = 2¹⁰ = <strong>1024</strong> possible sequences.</p>
<p><strong>Permutations.</strong> Arrangements where order matters. Five books on a shelf: 5 × 4 × 3 × 2 × 1 = 5! = 120 orders. Factorials explode: 10! is already 3,628,800, and 60! exceeds the number of atoms in the observable universe.</p>
<p><strong>Combinations.</strong> Selections where order does <em>not</em> matter. Choosing k things from n:</p>
<p style="text-align:center;"><strong>C(n, k) = n! / (k!(n − k)!)</strong></p>
<p><strong>Worked example 1.</strong> Pick 3 pizza toppings from 8: C(8, 3) = 8!/(3!·5!) = (8 × 7 × 6)/(3 × 2 × 1) = <strong>56</strong>.</p>
<p><strong>Worked example 2.</strong> In 10 coin flips, how many sequences contain exactly 5 heads? Choose which 5 of the 10 positions are heads: C(10, 5) = 252. So the probability of exactly 5 heads is 252/1024 ≈ 0.246 — barely one chance in four, even though 5 is the most likely single count. These C(n, k) are the same numbers that filled Pascal's triangle in the binomial chapter; algebra and chance genuinely share one triangle.</p>
<div class="key-concept">
  <h4>Key Concept: Order Matters → Permutation; Order Doesn't → Combination</h4>
  <p>A podium (gold, silver, bronze) is a permutation; a committee is a combination. Divide by k! to erase the ordering. Nearly every counting error is a mix-up between the two.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Counting arrangements is the engine of Subject 28's statistical mechanics. Boltzmann's tombstone formula S = k log W defines entropy as a count of microscopic arrangements — a gas spreads to fill its box simply because there are astronomically more spread-out arrangements than huddled ones. Thermodynamics is combinatorics wearing a lab coat.</p>
</div>`,
        },
        {
          id: "the-rules-of-chance",
          title: "The Rules of Chance",
          content: `
<p>When every outcome is equally likely, probability is a counting ratio: P(event) = favorable outcomes / total outcomes, always between 0 (impossible) and 1 (certain). The counting tools now pay off, and three rules organize everything.</p>
<p><strong>Worked example.</strong> Roll two dice: 6 × 6 = 36 equally likely pairs. A sum of 7 happens six ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), so P(sum 7) = 6/36 = <strong>1/6</strong> — the most likely sum, which is why 7 rules the casino game of craps.</p>
<ul>
  <li><strong>Complement rule:</strong> P(not A) = 1 − P(A).</li>
  <li><strong>Addition rule:</strong> for mutually exclusive events, P(A or B) = P(A) + P(B). A sum of 7 or 11: 6/36 + 2/36 = 8/36 = 2/9.</li>
  <li><strong>Multiplication rule:</strong> for independent events, P(A and B) = P(A) × P(B). Two sixes in a row: 1/6 × 1/6 = 1/36.</li>
</ul>
<p><strong>Worked example (the champion move).</strong> What is the probability of at least one six in four rolls? Attacking "at least one" directly means adding the cases one six, two sixes, three, four — a mess. Flip it: the complement of "at least one six" is "zero sixes," and by independence P(no six four times) = (5/6)⁴ ≈ 0.482. So P(at least one six) = 1 − 0.482 = <strong>0.518</strong>. Slightly better than even — a bet 17th-century gamblers paid dearly to understand.</p>
<div class="key-concept">
  <h4>Key Concept: "At Least One" → Use the Complement</h4>
  <p>Whenever a question says "at least one," compute the probability of <em>none</em> and subtract from 1. The same maneuver computes the chance that at least one atom decays, at least one photon arrives, at least one detector fires — it never stops being useful.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In a room of just 23 people, the probability that at least two share a birthday exceeds 50% — computed by exactly the complement trick: P(all 23 birthdays differ) = (364/365)(363/365)… ≈ 0.493. Intuition says 183 people; the multiplication rule says 23.</p>
</div>`,
        },
        {
          id: "distributions-mean-and-variance",
          title: "Distributions, Mean, and Variance",
          content: `
<p>A single probability answers a single question. A <strong>distribution</strong> answers all of them at once: it lists every possible value of a random quantity together with its probability. Flip four coins and count heads:</p>
<table>
  <tr><th>Heads</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
  <tr><th>Probability</th><td>1/16</td><td>4/16</td><td>6/16</td><td>4/16</td><td>1/16</td></tr>
</table>
<p>The numerators 1, 4, 6, 4, 1 are Pascal's row 4 — combinations counting the ways, divided by 2⁴ = 16 total sequences. Note the shape: peaked in the middle, symmetric, thin at the edges. Remember it.</p>
<p>Two numbers summarize any distribution. The <strong>mean</strong> (expected value) is the probability-weighted average, μ = Σ x·P(x) — the long-run average over many trials.</p>
<p><strong>Worked example.</strong> A fair die: μ = (1 + 2 + 3 + 4 + 5 + 6)/6 = <strong>3.5</strong>. No roll ever shows 3.5 — the mean is a center of mass, not a prediction. For the four coins: μ = 2 heads, as symmetry demands.</p>
<p>The <strong>variance</strong> σ² = Σ (x − μ)²·P(x) measures spread — the average <em>squared</em> distance from the mean (squared so that misses on either side can't cancel). Its square root σ, the <strong>standard deviation</strong>, restores the original units and answers: how far from the mean is typical?</p>
<p><strong>Worked example.</strong> For the die: σ² = [(1 − 3.5)² + … + (6 − 3.5)²]/6 = 17.5/6 ≈ 2.92, so σ ≈ <strong>1.71</strong>. A typical roll lands within about 1.7 of the mean 3.5 — which squares with experience.</p>
<div class="key-concept">
  <h4>Key Concept: μ Is the Center, σ Is the Spread</h4>
  <p>Report a repeated measurement as mean ± standard deviation and you've summarized the whole distribution in two numbers. Every error bar in every lab of this course is a σ.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Temperature is a mean: Subject 12 defines it as the average kinetic energy of molecules, and Subject 28 builds on the fluctuations about that mean. When a physicist says a gas is at 300 K, they are quoting the μ of a distribution over roughly 10²³ molecules.</p>
</div>`,
        },
        {
          id: "the-normal-curve",
          title: "The Normal Curve: Why the Bell Is Everywhere",
          content: `
<p>Measure anything shaped by many small independent influences — human heights, manufacturing wobble, the scatter of repeated lab measurements — and its histogram keeps coming out the same shape: the symmetric bell of the <strong>normal curve</strong> (the Gaussian), centered on the mean μ with width set by σ. This is no coincidence; it is a theorem. The <strong>central limit theorem</strong> says: add up many independent random contributions, and the total's distribution approaches normal — almost regardless of what the individual pieces look like. Even coin flips, the crudest randomness there is, comply: the four-coin distribution (1, 4, 6, 4, 1) is already visibly bell-ish, and 100 flips are indistinguishable from a smooth Gaussian.</p>
<p>For any normal curve, one memorized ruler applies — the <strong>68–95–99.7 rule</strong>: about 68% of outcomes fall within 1σ of μ, 95% within 2σ, and 99.7% within 3σ.</p>
<p><strong>Worked example 1.</strong> Flip 100 coins. The head count has μ = 50 and σ = √(100 × ½ × ½) = 5. So 95% of trials land between 40 and 60 heads, and a run of 70 heads sits 4σ out — probability of order 1 in 30,000. Fluctuations grow like √N while totals grow like N, so <em>relative</em> wobble shrinks as 1/√N.</p>
<p><strong>Worked example 2.</strong> A student times a pendulum repeatedly and gets g = 9.81 m/s² with σ = 0.02. The 68% band is 9.79–9.83. A later reading of 9.90 lies 4.5σ from the mean — not bad luck, but a flag: something in the setup changed.</p>
<div class="key-concept">
  <h4>Key Concept: The Bell Is the Signature of Summed Randomness</h4>
  <p>Measurement errors are normal because each reading is nudged by many tiny independent effects — vibration, reaction time, temperature — and the central limit theorem averages them into a Gaussian. That is why mean ± σ is the universal language of experimental physics, starting with your next lab.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Subject 28 runs this logic on 10²³ molecules: the Maxwell–Boltzmann distribution of molecular speeds is statistics, and with N ≈ 10²³ the 1/√N relative fluctuation is about 10⁻¹² — which is why pressure and temperature feel perfectly steady. The deterministic-looking laws of thermodynamics are the normal curve's thin waist, seen from far away.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "How many different 3-person committees can be chosen from 8 people?",
          options: ["336", "56", "24", "512"],
          correctIndex: 1,
          explanation:
            "A committee is a combination — order doesn't matter: C(8, 3) = (8 × 7 × 6)/(3 × 2 × 1) = 56. The answer 336 is the permutation count 8 × 7 × 6, which treats the same three people in different orders as different committees.",
        },
        {
          question:
            "Rolling two fair dice, the probability that the sum is 7 is…",
          options: ["1/12", "1/36", "7/36", "1/6"],
          correctIndex: 3,
          explanation:
            "Of the 36 equally likely pairs, six give a sum of 7 (1+6 through 6+1), so P = 6/36 = 1/6. Seven is the most likely sum because it can be assembled in the most ways — counting is the whole computation.",
        },
        {
          question:
            "What is the probability of getting at least one head in 3 fair coin flips?",
          options: ["7/8", "3/8", "1/2", "1/8"],
          correctIndex: 0,
          explanation:
            "Use the complement: P(no heads) = (1/2)³ = 1/8, so P(at least one head) = 1 − 1/8 = 7/8. 'At least one' problems almost always yield fastest to computing the probability of none and subtracting.",
        },
        {
          question: "The mean (expected value) of one roll of a fair die is…",
          options: ["3", "4", "3.5", "21"],
          correctIndex: 2,
          explanation:
            "μ = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3.5. No single roll can show 3.5 — the mean is the long-run average over many rolls, the distribution's center of mass rather than a possible outcome.",
        },
        {
          question:
            "Measurements of a quantity are normally distributed with mean 50 and standard deviation 2. Roughly what fraction of measurements falls between 46 and 54?",
          options: ["68%", "50%", "99.7%", "95%"],
          correctIndex: 3,
          explanation:
            "The band 46 to 54 is μ ± 2σ, and the 68–95–99.7 rule assigns 95% of a normal distribution to within two standard deviations. One σ (48 to 52) would hold 68%; three σ (44 to 56), 99.7%. This ruler underlies every error bar in the course.",
        },
      ],
    },
  ],
};
