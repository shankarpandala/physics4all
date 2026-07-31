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
          id: "limits-and-continuity",
          title: "Limits: Sneaking Up on a Value",
          content: `
<p>Calculus was invented to answer a physics question: how fast is something moving <em>right now</em>? Average speed over an interval is easy — distance over time — but "instantaneous" speed divides zero distance by zero time. The <strong>limit</strong> is the tool that makes sense of that. Instead of evaluating at the forbidden point, you watch what the function approaches as you close in.</p>
<p><strong>Worked example.</strong> What does f(x) = (x² − 1)/(x − 1) approach as x → 1? Plugging in x = 1 gives 0/0 — undefined. But factor first:</p>
<ol>
  <li>x² − 1 = (x − 1)(x + 1), so for every x ≠ 1, f(x) = x + 1.</li>
  <li>As x closes in on 1 (from either side), x + 1 closes in on 2.</li>
  <li>Therefore lim (x → 1) of (x² − 1)/(x − 1) = <strong>2</strong>, even though f(1) itself does not exist.</li>
</ol>
<p>Try it numerically: f(0.99) = 1.99, f(1.001) = 2.001. The function never reaches x = 1, yet its destination is unmistakable.</p>
<div class="key-concept">
  <h4>The formal idea</h4>
  <p>lim (x → a) f(x) = L means: you can force f(x) as close to L as anyone demands, just by keeping x close enough to a. In the classic ε–δ phrasing: for every tolerance ε &gt; 0 there is a distance δ &gt; 0 such that whenever 0 &lt; |x − a| &lt; δ, we have |f(x) − L| &lt; ε. The definition is a guarantee, not a process — a challenge ("get within ε!") that can always be met.</p>
</div>
<p>Limits must agree from both sides. The function |x|/x jumps from −1 to +1 at x = 0: the left-hand limit is −1, the right-hand limit is +1, so the two-sided limit does not exist. A function is <strong>continuous</strong> at a when lim (x → a) f(x) = f(a) — the limit exists, the value exists, and they match. Continuous functions are the ones you can draw without lifting the pen, and almost every function in classical physics is continuous (nature rarely teleports).</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton and Leibniz used limits intuitively in the 1680s, but the rigorous ε–δ definition took another 150 years, finally nailed down by Cauchy and Weierstrass. Physics ran happily on the intuitive version the whole time — and mostly still does.</p>
</div>`,
        },
        {
          id: "the-derivative",
          title: "The Derivative: Instantaneous Rate of Change",
          content: `
<p>Now the payoff. Let x(t) be a position. The average velocity between times t and t + h is the familiar rise over run: [x(t + h) − x(t)]/h. Instantaneous velocity is the limit of that as the interval shrinks to nothing:</p>
<p style="text-align:center; font-size:1.1em;"><strong>f′(x) = lim (h → 0) of [f(x + h) − f(x)] / h</strong></p>
<p>This limit — when it exists — is the <strong>derivative</strong>, written f′(x) or df/dx. Geometrically it is the slope of the tangent line: the secant line through two nearby points pivots into the tangent as the points merge.</p>
<p><strong>Worked example.</strong> Differentiate f(x) = x² from the definition:</p>
<ol>
  <li>f(x + h) − f(x) = (x + h)² − x² = x² + 2xh + h² − x² = 2xh + h².</li>
  <li>Divide by h: (2xh + h²)/h = 2x + h.</li>
  <li>Let h → 0: the h term vanishes, leaving <strong>f′(x) = 2x</strong>.</li>
</ol>
<p>So the parabola's slope at x = 3 is 6, at x = 0 it is 0 (the bottom of the bowl), at x = −3 it is −6. One formula, every tangent.</p>
<p>The same computation with f(x) = xⁿ yields the <strong>power rule</strong>: d/dx (xⁿ) = n·xⁿ⁻¹, valid for any real exponent. So d/dx (x⁵) = 5x⁴, d/dx (√x) = d/dx (x^(1/2)) = 1/(2√x), and d/dx (1/x) = −1/x².</p>
<div class="analogy">
  <h3>The speedometer and the odometer</h3>
  <p>Your odometer records position; your speedometer displays its derivative. The car computes it exactly as the definition says: distance over a tiny time interval, with the interval as short as the electronics allow. Calculus just takes the interval all the way to zero.</p>
</div>
<p>Notation matters in physics. Leibniz's df/dx reads as a ratio of tiny changes and makes unit-tracking automatic: if x is in metres and t in seconds, dx/dt is in m/s. Newton's dot (ẋ) is standard for time derivatives in mechanics. And the second derivative, d²x/dt² — the rate of change of the rate of change — is acceleration, the star of F = ma. When Classical Mechanics I opens with "velocity is the derivative of position," this section is the whole story.</p>`,
        },
        {
          id: "differentiation-rules",
          title: "The Rules: Differentiating Anything Built from Pieces",
          content: `
<p>Computing limits from scratch for every function would be unbearable. Fortunately derivatives obey algebra of their own, and five rules let you differentiate anything you can write down.</p>
<table>
  <thead>
    <tr><th>Rule</th><th>Statement</th></tr>
  </thead>
  <tbody>
    <tr><td>Constant multiple</td><td>d/dx [c·f] = c·f′</td></tr>
    <tr><td>Sum</td><td>d/dx [f + g] = f′ + g′</td></tr>
    <tr><td><strong>Product</strong></td><td>d/dx [f·g] = f′·g + f·g′</td></tr>
    <tr><td><strong>Quotient</strong></td><td>d/dx [f/g] = (f′·g − f·g′)/g²</td></tr>
    <tr><td>Power</td><td>d/dx [xⁿ] = n·xⁿ⁻¹</td></tr>
  </tbody>
</table>
<p>Note the product rule is <em>not</em> f′·g′ — differentiate one factor at a time, and add. It makes physical sense: if a rectangle's width and height both grow, the area gains a strip from each edge.</p>
<p>Alongside the rules, memorize the small library of building blocks:</p>
<ul>
  <li>d/dx (sin x) = cos x and d/dx (cos x) = −sin x (x in <strong>radians</strong> — this is why physics uses radians)</li>
  <li>d/dx (e^x) = e^x — the exponential is its own derivative, the property that makes e special</li>
  <li>d/dx (ln x) = 1/x</li>
  <li>d/dx (tan x) = 1/cos²x = sec²x</li>
</ul>
<p><strong>Worked example (product rule).</strong> f(x) = x² e^x:</p>
<ol>
  <li>f′ = (x²)′ · e^x + x² · (e^x)′</li>
  <li>= 2x·e^x + x²·e^x = <strong>(x² + 2x)e^x</strong></li>
</ol>
<p><strong>Worked example (quotient rule).</strong> f(t) = t/(1 + t²):</p>
<ol>
  <li>Top: (1)·(1 + t²) − t·(2t) = 1 + t² − 2t² = 1 − t².</li>
  <li>f′(t) = <strong>(1 − t²)/(1 + t²)²</strong>.</li>
</ol>
<p>Notice f′ = 0 at t = 1: the function peaks there — a preview of the optimization chapter.</p>
<div class="key-concept">
  <h4>Why d/dx (sin x) = cos x matters so much</h4>
  <p>Differentiate sin twice and you get −sin: the sine function reproduces itself with a minus sign, d²x/dt² = −x. That is exactly the equation of a mass on a spring. Every oscillation in physics — pendulums, circuits, light waves — traces back to this one derivative fact.</p>
</div>`,
        },
        {
          id: "chain-rule",
          title: "The Chain Rule: Derivatives of Nested Functions",
          content: `
<p>Most real functions are nested: sin(x²) is "square, then take sine." The <strong>chain rule</strong> says the derivative of a composition is the product of the derivatives of the layers:</p>
<p style="text-align:center; font-size:1.1em;"><strong>d/dx f(g(x)) = f′(g(x)) · g′(x)</strong></p>
<p>In Leibniz form, with y = f(u) and u = g(x): dy/dx = (dy/du) · (du/dx). Rates multiply through a chain: if y changes 3 times as fast as u, and u changes 2 times as fast as x, then y changes 6 times as fast as x.</p>
<p><strong>Worked example.</strong> Differentiate y = sin(x²).</p>
<ol>
  <li>Outer function: sin(u), derivative cos(u). Inner function: u = x², derivative 2x.</li>
  <li>Multiply, keeping the inner function inside the outer derivative: dy/dx = cos(x²) · 2x = <strong>2x cos(x²)</strong>.</li>
</ol>
<p><strong>Worked example.</strong> Differentiate y = (1 + 2t³)⁵.</p>
<ol>
  <li>Outer: u⁵ → 5u⁴. Inner: 1 + 2t³ → 6t².</li>
  <li>dy/dt = 5(1 + 2t³)⁴ · 6t² = <strong>30t²(1 + 2t³)⁴</strong>. No expansion of the fifth power required.</li>
</ol>
<p><strong>Worked example (physics).</strong> A spring's potential energy is U = ½kx², and the position oscillates as x(t) = A cos(ωt). How fast is the energy changing?</p>
<ol>
  <li>dU/dt = (dU/dx)(dx/dt) — chain rule with x as the middle variable.</li>
  <li>dU/dx = kx and dx/dt = −Aω sin(ωt).</li>
  <li>dU/dt = kA cos(ωt) · (−Aω sin(ωt)) = <strong>−kA²ω sin(ωt)cos(ωt)</strong>.</li>
</ol>
<p>Energy flows out of the spring fastest mid-swing and pauses at the extremes — read straight off the derivative.</p>
<div class="analogy">
  <h3>Gears in a chain</h3>
  <p>Three gears linked in sequence: the last turns 5 times per turn of the middle, the middle 2 times per turn of the first — so the last turns 10 times per turn of the first. The chain rule is gear ratios for functions.</p>
</div>
<div class="key-concept">
  <h4>The physicist's favourite rule</h4>
  <p>Nearly every derivative in mechanics is a chain rule in disguise, because everything depends on time through something else. A classic move you will meet soon: a = dv/dt = (dv/dx)(dx/dt) = v·dv/dx, which converts Newton's law into the work–energy theorem.</p>
</div>`,
        },
        {
          id: "implicit-and-related-rates",
          title: "Implicit Differentiation & Related Rates",
          content: `
<p>Not every curve hands you y as an explicit formula. The circle x² + y² = 25 defines y in terms of x implicitly. Rather than solving for y (and juggling ± square roots), differentiate the equation as it stands, treating y as a function of x and applying the chain rule wherever y appears.</p>
<p><strong>Worked example.</strong> Find the slope of x² + y² = 25 at the point (3, 4).</p>
<ol>
  <li>Differentiate both sides with respect to x: d/dx (x²) + d/dx (y²) = 0.</li>
  <li>The y² term needs the chain rule: d/dx (y²) = 2y · (dy/dx). So 2x + 2y·(dy/dx) = 0.</li>
  <li>Solve: dy/dx = −x/y. At (3, 4): slope = <strong>−3/4</strong>.</li>
</ol>
<p>Geometry check: the radius to (3, 4) has slope 4/3, and −3/4 is its negative reciprocal — the tangent to a circle really is perpendicular to the radius. The calculus knows the geometry.</p>
<p><strong>Related rates</strong> is the same move with time as the hidden variable: differentiate a relationship through t and connect the rates. The recipe: write the equation linking the quantities, differentiate with respect to t (chain rule everywhere), insert the known rates, solve for the unknown one.</p>
<p><strong>Worked example.</strong> A spherical balloon is inflated at 100 cm³/s. How fast is the radius growing when r = 5 cm?</p>
<ol>
  <li>Relationship: V = (4/3)πr³.</li>
  <li>Differentiate with respect to t: dV/dt = 4πr² · (dr/dt).</li>
  <li>Insert numbers: 100 = 4π(25) · (dr/dt), so dr/dt = 100/(100π) = 1/π ≈ <strong>0.32 cm/s</strong>.</li>
</ol>
<p>Notice the physics in the formula: dV/dt = (surface area) × (dr/dt), because inflating a balloon adds a thin shell of volume — area times thickness — every second. And the bigger the balloon, the slower the radius grows for the same airflow, which anyone who has blown up a balloon has felt.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Related rates is exactly how physics couples changing quantities: in a collapsing star, an expanding gas, or a draining tank, some geometric constraint ties the variables together, and differentiating the constraint is what turns geometry into dynamics.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What is lim (x → 2) of (x² − 4)/(x − 2)?",
          options: ["0", "4", "2", "The limit does not exist"],
          correctIndex: 1,
          explanation:
            "Direct substitution gives 0/0, so factor: x² − 4 = (x − 2)(x + 2). For x ≠ 2 the function equals x + 2, which approaches 4 as x → 2. A 0/0 form does not mean 'no limit' — it means 'do more algebra': the limit exists and equals 4 even though the function is undefined at x = 2.",
        },
        {
          question:
            "Using the limit definition, the derivative of f(x) = x² is found by simplifying [(x + h)² − x²]/h. What does this expression become before taking h → 0?",
          options: ["2x", "x + h", "2x + h", "2xh"],
          correctIndex: 2,
          explanation:
            "Expand: (x + h)² − x² = 2xh + h². Dividing by h gives 2x + h. Only then does the limit h → 0 remove the h, leaving f′(x) = 2x. The whole art of the definition is doing enough algebra to cancel the h in the denominator before letting it vanish.",
        },
        {
          question: "What is d/dx of sin(3x²)?",
          options: [
            "cos(3x²)",
            "6x sin(3x²)",
            "cos(6x)",
            "6x cos(3x²)",
          ],
          correctIndex: 3,
          explanation:
            "Chain rule: differentiate the outer function (sin → cos, keeping the inside intact), then multiply by the derivative of the inside (3x² → 6x). Result: cos(3x²) · 6x. Forgetting the inner derivative — answer (a) — is the single most common calculus error.",
        },
        {
          question:
            "For the curve x² + y² = 25, implicit differentiation gives dy/dx = −x/y. What does this say about the tangent line at the top of the circle, the point (0, 5)?",
          options: [
            "It is horizontal, since dy/dx = 0 there",
            "It is vertical, since y is at its maximum",
            "It has slope −5",
            "It is undefined because the curve is not a function",
          ],
          correctIndex: 0,
          explanation:
            "At (0, 5): dy/dx = −0/5 = 0, a horizontal tangent — exactly what geometry says at the top of a circle. Implicit differentiation handles curves that fail the vertical line test with no trouble; the derivative is perfectly well defined at each point, even though y is not globally a function of x.",
        },
        {
          question:
            "Air is pumped into a spherical balloon at a constant 100 cm³/s. As the balloon grows, the rate dr/dt at which the radius increases:",
          options: [
            "stays constant, because the inflow is constant",
            "increases, because the balloon has more surface to push outward",
            "decreases, because the same added volume spreads over a larger surface area",
            "cannot be determined without knowing the pressure",
          ],
          correctIndex: 2,
          explanation:
            "Differentiating V = (4/3)πr³ gives dV/dt = 4πr²·(dr/dt), so dr/dt = (dV/dt)/(4πr²). With dV/dt fixed, a larger r means a smaller dr/dt: each second's 100 cm³ forms a thin shell spread over the whole surface, and a bigger surface means a thinner shell. Related rates makes the felt experience precise.",
        },
      ],
    },
    {
      id: "applications-of-derivatives",
      title: "Applications of Derivatives",
      subtitle:
        "Using derivatives to optimize, approximate, and analyze the shape of functions",
      sections: [
        {
          id: "curve-analysis",
          title: "Reading a Function's Shape from Its Derivatives",
          content: `
<p>A function's derivatives are an X-ray of its graph. The first derivative reports slope: f′ &gt; 0 means rising, f′ &lt; 0 means falling, and points where f′ = 0 — <strong>critical points</strong> — are the flat spots where maxima and minima can hide. The second derivative reports bending: f″ &gt; 0 means <strong>concave up</strong> (holds water), f″ &lt; 0 means concave down (sheds water), and a point where the concavity flips is an <strong>inflection point</strong>.</p>
<p><strong>Worked example.</strong> Analyze f(x) = x³ − 3x.</p>
<ol>
  <li>f′(x) = 3x² − 3 = 3(x − 1)(x + 1). Critical points at x = −1 and x = 1.</li>
  <li>Sign of f′: positive for x &lt; −1 (rising), negative on (−1, 1) (falling), positive for x &gt; 1 (rising). So x = −1 is a local <strong>maximum</strong> (f = 2) and x = 1 a local <strong>minimum</strong> (f = −2).</li>
  <li>f″(x) = 6x: concave down for x &lt; 0, concave up for x &gt; 0, inflection at the origin.</li>
</ol>
<p>The <strong>second-derivative test</strong> shortcuts step 2: at a critical point, f″ &gt; 0 means a minimum (the curve is a smile there), f″ &lt; 0 means a maximum (a frown). Here f″(1) = 6 &gt; 0 and f″(−1) = −6 &lt; 0, confirming both classifications.</p>
<div class="key-concept">
  <h4>This is how physicists read energy diagrams</h4>
  <p>For a particle with potential energy U(x), the force is F = −dU/dx. Equilibria sit where the force vanishes — the critical points of U. And stability is the second-derivative test in disguise: U″ &gt; 0 (a valley) is a <strong>stable</strong> equilibrium that pushes wanderers back; U″ &lt; 0 (a hilltop) is <strong>unstable</strong>. A marble in a bowl versus a marble balanced on a dome — you will use this on energy diagrams for the rest of the curriculum.</p>
</div>
<p>One caution: f′ = 0 does not guarantee an extremum. For f(x) = x³, the origin is a critical point with f″ = 0 too — the graph merely flattens momentarily and keeps climbing. When the second-derivative test returns zero, fall back on the sign chart of f′, which never lies.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>On a graph of position versus time, an inflection point is where acceleration changes sign — the instant a braking car begins speeding up again. Passengers feel inflection points directly: they are the moments the push from the seat swaps direction.</p>
</div>`,
        },
        {
          id: "optimization",
          title: "Optimization: Finding the Best",
          content: `
<p>Optimization turns "find the best" into "find where the derivative is zero." The routine: express the quantity to optimize as a function of <em>one</em> variable (using any constraint to eliminate others), differentiate, set to zero, solve, and confirm max versus min.</p>
<p><strong>Worked example.</strong> Design a closed cylindrical can holding a fixed volume V with the least metal (surface area). Two variables — radius r and height h — but the volume constraint links them.</p>
<ol>
  <li><strong>Objective:</strong> A = 2πr² + 2πrh (two lids plus the wall).</li>
  <li><strong>Constraint:</strong> V = πr²h, so h = V/(πr²).</li>
  <li><strong>Substitute:</strong> A(r) = 2πr² + 2πr · V/(πr²) = 2πr² + 2V/r.</li>
  <li><strong>Differentiate and set to zero:</strong> A′(r) = 4πr − 2V/r² = 0, so 4πr = 2V/r², giving r³ = V/(2π).</li>
  <li><strong>Interpret:</strong> the constraint says V = 2πr³ at the optimum, so h = V/(πr²) = 2πr³/(πr²) = <strong>2r</strong>. The optimal can is exactly as tall as it is wide (height = diameter).</li>
  <li><strong>Confirm:</strong> A″(r) = 4π + 4V/r³ &gt; 0 — concave up, a genuine minimum.</li>
</ol>
<p>Check the endpoints of the story too: a very flat can (r → ∞) and a very thin one (r → 0) both send A → ∞, so the interior critical point must be the global minimum.</p>
<div class="analogy">
  <h3>Nature optimizes constantly</h3>
  <p>Light crossing from air to water takes the path of least <em>time</em> — and setting the time-derivative to zero yields Snell's law of refraction. Soap films minimize area; chains hang to minimize potential energy; and in Phase 6 you will meet the principle of least action, which derives all of mechanics from one optimization. The can problem is a toy version of how nature actually works.</p>
</div>
<div class="key-concept">
  <h4>The checklist</h4>
  <p>1. Draw and name variables. 2. Write the objective. 3. Use constraints to reach one variable. 4. Differentiate, set to zero, solve. 5. Verify with the second derivative or endpoints — a critical point is only a <em>candidate</em> until checked.</p>
</div>`,
        },
        {
          id: "linearization",
          title: "Linearization: The Physicist's Reflex",
          content: `
<p>Zoom in on any smooth curve and it straightens into its tangent line. That observation is a computational superpower: near a point a, replace the complicated f(x) by its <strong>linearization</strong></p>
<p style="text-align:center; font-size:1.05em;"><strong>L(x) = f(a) + f′(a)·(x − a)</strong></p>
<p>— the value plus the slope times the small step. This is the single most-used approximation in physics.</p>
<p><strong>Worked example.</strong> Estimate √4.1 without a calculator.</p>
<ol>
  <li>Take f(x) = √x, a = 4 (the nearest easy point). f(4) = 2, and f′(x) = 1/(2√x), so f′(4) = 1/4.</li>
  <li>L(x) = 2 + (1/4)(x − 4).</li>
  <li>√4.1 ≈ 2 + (1/4)(0.1) = <strong>2.025</strong>. True value: 2.02485. Error: 0.007%.</li>
</ol>
<p>Two special cases are so common they deserve their own names:</p>
<ul>
  <li><strong>The binomial approximation:</strong> (1 + x)ⁿ ≈ 1 + nx for small x, any n. So √(1 + x) ≈ 1 + x/2 and 1/(1 + x) ≈ 1 − x. This one line unlocks half of physics estimation.</li>
  <li><strong>Small angles (radians):</strong> sin θ ≈ θ, tan θ ≈ θ, cos θ ≈ 1 − θ²/2. At 5° (0.087 rad), sin θ = 0.08716 — the approximation is good to 0.13%.</li>
</ul>
<p>The same idea, phrased with <strong>differentials</strong>, propagates errors: since Δf ≈ f′(a)·Δx, a small uncertainty in the input scales by the derivative. Example: a pendulum's period is T = 2π√(L/g). Writing T ∝ L^(1/2) and using the binomial approximation, a 2% error in measuring L produces only a 1% error in T — the exponent 1/2 halves the relative error.</p>
<div class="key-concept">
  <h4>Why physicists linearize everything</h4>
  <p>Most equations in physics cannot be solved exactly — but their linearizations can. The pendulum's true equation involves sin θ and has no elementary solution; replace sin θ by θ and it becomes the exactly-solvable harmonic oscillator. "Assume small oscillations" is the most productive phrase in theoretical physics, and it always means: keep the tangent line, drop the rest.</p>
</div>`,
        },
        {
          id: "lhopital",
          title: "L'Hôpital's Rule: Resolving 0/0",
          content: `
<p>Limits of the form 0/0 or ∞/∞ are called <strong>indeterminate</strong> — the answer could be anything, depending on how fast top and bottom shrink or grow. <strong>L'Hôpital's rule</strong> settles the race by comparing rates:</p>
<div class="key-concept">
  <h4>The rule</h4>
  <p>If f(x) → 0 and g(x) → 0 (or both → ±∞) as x → a, and the limit of f′(x)/g′(x) exists, then lim f(x)/g(x) = lim f′(x)/g′(x). Replace the functions by their derivatives and try again.</p>
</div>
<p>The intuition is linearization: near a, f(x) ≈ f′(a)(x − a) and g(x) ≈ g′(a)(x − a). Both are essentially straight lines through zero, so their ratio is the ratio of slopes.</p>
<p><strong>Worked example.</strong> lim (x → 0) of sin x / x. Both → 0.</p>
<ol>
  <li>Differentiate top and bottom separately (this is <em>not</em> the quotient rule): (sin x)′ = cos x, (x)′ = 1.</li>
  <li>lim (x → 0) cos x / 1 = <strong>1</strong>.</li>
</ol>
<p>This limit is the engine behind sin θ ≈ θ, and behind the derivative of sine itself.</p>
<p><strong>Worked example.</strong> lim (x → 0) of (e^x − 1 − x)/x². Both → 0.</p>
<ol>
  <li>First pass: (e^x − 1)/(2x). Still 0/0 — apply the rule again.</li>
  <li>Second pass: e^x/2 → <strong>1/2</strong>.</li>
</ol>
<p>So e^x ≈ 1 + x + x²/2 near zero — the rule has quietly measured the quadratic term of the exponential, foreshadowing Taylor series.</p>
<p><strong>Worked example.</strong> lim (x → ∞) of x/e^x is ∞/∞; one pass gives 1/e^x → <strong>0</strong>. Exponentials beat any power of x in the long run — the mathematical reason radioactive decay and damped oscillations die off so decisively.</p>
<div class="did-you-know">
  <h4>Warnings and a scandal</h4>
  <p>Two cautions: never apply the rule to a limit that is not indeterminate (lim (x → 0) of (1 + x)/(2 + x) is plainly 1/2; L'Hôpital-ing it gives the wrong answer 1), and remember it is top and bottom differentiated separately, never the quotient rule. As for the name: the rule was discovered by Johann Bernoulli, who was retained on salary by the Marquis de l'Hôpital — their contract let the Marquis publish Bernoulli's results in his 1696 textbook, the world's first calculus text.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A particle's potential energy is U(x) = x³ − 3x. The point x = 1 (where dU/dx = 0 and d²U/dx² = 6 > 0) is:",
          options: [
            "an unstable equilibrium, since the force vanishes there",
            "not an equilibrium, since U is nonzero there",
            "a stable equilibrium, since U has a local minimum there",
            "an inflection point of the motion",
          ],
          correctIndex: 2,
          explanation:
            "Equilibria occur where the force F = −dU/dx vanishes — the critical points of U. Stability is the second-derivative test: U″ > 0 means a valley in the energy landscape, so a displaced particle feels a restoring force back toward x = 1. The value of U itself is irrelevant; only its shape matters.",
        },
        {
          question:
            "In the optimal-can problem (fixed volume, minimum surface area), setting dA/dr = 0 for A(r) = 2πr² + 2V/r gives which proportions?",
          options: [
            "Height equal to the diameter, h = 2r",
            "Height equal to the radius, h = r",
            "Height equal to half the radius",
            "A cube-shaped can",
          ],
          correctIndex: 0,
          explanation:
            "A′(r) = 4πr − 2V/r² = 0 gives V = 2πr³; substituting into h = V/(πr²) yields h = 2r. The least-metal can is exactly as tall as it is wide. (Real soup cans are taller than this optimum — marketing, stacking, and gripping beat calculus in the supermarket.)",
        },
        {
          question:
            "Using linearization, the best quick estimate of √9.2 is:",
          options: ["3.1", "3.033", "3.067", "3.2"],
          correctIndex: 1,
          explanation:
            "With f(x) = √x at a = 9: f(9) = 3 and f′(9) = 1/(2·3) = 1/6. So √9.2 ≈ 3 + (0.2)/6 = 3.0333. The true value is 3.0332 — the tangent line is astonishingly good this close to the base point. This value-plus-slope-times-step move is the physicist's everyday reflex.",
        },
        {
          question:
            "Why does sin θ ≈ θ only work when θ is measured in radians?",
          options: [
            "Degrees are not real numbers, so the formula cannot apply",
            "It works in degrees too, just less accurately",
            "Radians make sin θ exactly equal to θ",
            "Because d/dθ (sin θ) = cos θ — and hence slope 1 at θ = 0 — holds only in radians; in degrees the slope is π/180",
          ],
          correctIndex: 3,
          explanation:
            "The approximation is the tangent line to sin at 0, whose slope is the derivative there. The clean result lim (sin θ)/θ = 1, and with it d/dθ(sin θ) = cos θ, is true only for radian measure. In degrees every derivative formula would drag a factor of π/180 — which is precisely why physics abandons degrees the moment calculus appears.",
        },
        {
          question:
            "Evaluate lim (x → 0) of (1 − cos x)/x².",
          options: ["0", "1/2", "1", "The limit does not exist"],
          correctIndex: 1,
          explanation:
            "Both top and bottom → 0, so L'Hôpital applies: the ratio becomes sin x/(2x), still 0/0; a second pass gives cos x/2 → 1/2. This limit is the small-angle statement cos x ≈ 1 − x²/2 — the quadratic correction that gives a pendulum its potential energy near the bottom of the swing.",
        },
      ],
    },
    {
      id: "integration",
      title: "Integration",
      subtitle:
        "The fundamental theorem and the full toolkit of integration techniques",
      sections: [
        {
          id: "riemann-sums-and-ftc",
          title: "From Adding Slices to the Fundamental Theorem",
          content: `
<p>Integration begins with a physics-flavoured question: a car's velocity v(t) varies continuously — how far does it travel? Chop the time into slivers Δt, pretend the velocity is constant on each sliver, add up the little distances v·Δt, and let the slivers shrink. The limit of these <strong>Riemann sums</strong> is the <strong>definite integral</strong>:</p>
<p style="text-align:center; font-size:1.1em;">∫ from a to b of f(x) dx = lim of Σ f(xᵢ) Δx</p>
<p>Geometrically it is the area under the curve (with regions below the axis counting negative). The ∫ symbol is a stretched S for "sum," and dx is the ghost of Δx — the notation remembers its origin.</p>
<p>Computing limits of sums directly is brutal. The miracle that makes calculus usable is the <strong>Fundamental Theorem of Calculus (FTC)</strong>: integration and differentiation are inverse operations.</p>
<div class="key-concept">
  <h4>The Fundamental Theorem</h4>
  <p><strong>Part 1:</strong> if A(x) = ∫ from a to x of f(t) dt (the running area), then A′(x) = f(x) — the rate at which area accumulates is the height of the curve.<br><strong>Part 2:</strong> if F is any antiderivative of f (meaning F′ = f), then ∫ from a to b of f(x) dx = F(b) − F(a). An infinite sum collapses to two evaluations.</p>
</div>
<p><strong>Worked example.</strong> ∫ from 0 to 2 of x² dx.</p>
<ol>
  <li>Find an antiderivative: F(x) = x³/3, since F′(x) = x². (Reverse the power rule: raise the exponent by one, divide by the new exponent.)</li>
  <li>Evaluate: F(2) − F(0) = 8/3 − 0 = <strong>8/3</strong>.</li>
</ol>
<p>The exact area under a parabola, no sums required — a computation that took Archimedes a career of ingenuity now takes two lines.</p>
<p>Indefinite integrals record antiderivative families: ∫ x² dx = x³/3 + C, with the constant C present because any constant differentiates to zero. In physics, C is fixed by <strong>initial conditions</strong> — integrate acceleration to get velocity, and C is the launch speed. The basic table is the derivative table read backwards: ∫ cos x dx = sin x + C, ∫ e^x dx = e^x + C, ∫ dx/x = ln|x| + C.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The FTC explains a kinematics fact you already know: the area under a velocity–time graph is displacement, because position is the antiderivative of velocity. Every "area under the curve" rule in introductory physics is the FTC wearing a disguise.</p>
</div>`,
        },
        {
          id: "substitution",
          title: "Substitution: The Chain Rule in Reverse",
          content: `
<p>Differentiation is mechanical; integration is pattern-matching. The most important pattern is <strong>substitution</strong> — the chain rule run backwards. If an integrand contains a function and (up to a constant) its derivative, rename the inner function u and the integral simplifies:</p>
<p style="text-align:center;">∫ f(g(x)) · g′(x) dx = ∫ f(u) du,&nbsp;&nbsp; where u = g(x), du = g′(x) dx</p>
<p><strong>Worked example.</strong> ∫ x cos(x²) dx.</p>
<ol>
  <li>Spot the pair: x² inside the cosine, and its derivative 2x almost present as the factor x.</li>
  <li>Let u = x². Then du = 2x dx, so x dx = du/2.</li>
  <li>∫ x cos(x²) dx = ∫ cos(u) · (du/2) = (1/2) sin u + C = <strong>(1/2) sin(x²) + C</strong>.</li>
  <li>Check by differentiating: d/dx [(1/2)sin(x²)] = (1/2)cos(x²)·2x = x cos(x²). ✓ (Every integral can be checked — always cheap insurance.)</li>
</ol>
<p><strong>Worked example (definite, with limit-swapping).</strong> ∫ from 0 to 1 of 2x/(1 + x²) dx.</p>
<ol>
  <li>u = 1 + x², du = 2x dx. Convert the limits too: x = 0 → u = 1; x = 1 → u = 2.</li>
  <li>Integral becomes ∫ from 1 to 2 of du/u = ln u evaluated from 1 to 2 = ln 2 − ln 1 = <strong>ln 2 ≈ 0.693</strong>.</li>
</ol>
<p>Changing the limits along with the variable means you never return to x — cleaner and safer.</p>
<div class="analogy">
  <h3>Changing units, not content</h3>
  <p>Substitution is a change of measuring stick. The area under the curve does not change; you have merely relabelled the axis with a coordinate in which the curve looks simpler — like switching from metres to light-seconds to make an equation tidy. Physics does this constantly: every "change of variables" in a physics integral is u-substitution.</p>
</div>
<div class="key-concept">
  <h4>How to spot the u</h4>
  <p>Look for a composite function whose inner derivative loiters nearby as a factor: the x beside cos(x²), the 2x above 1 + x². Common u choices: the inside of a power or root, the exponent of e, the denominator. If the leftover factors do not convert entirely into u and du, the substitution is wrong — pick again.</p>
</div>`,
        },
        {
          id: "integration-by-parts",
          title: "Integration by Parts: The Product Rule in Reverse",
          content: `
<p>Substitution undoes the chain rule; <strong>integration by parts</strong> undoes the product rule. Start from (uv)′ = u′v + uv′, integrate both sides, and rearrange:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∫ u dv = uv − ∫ v du</strong></p>
<p>You trade the integral ∫ u dv for a different integral ∫ v du — profitable when the new one is easier. Strategy: pick u to be the factor that <em>improves</em> when differentiated (polynomials shrink, ln x simplifies), and dv the factor you can integrate.</p>
<p><strong>Worked example.</strong> ∫ x e^x dx.</p>
<ol>
  <li>Choose u = x (differentiates to plain 1) and dv = e^x dx.</li>
  <li>Then du = dx and v = e^x.</li>
  <li>∫ x e^x dx = x e^x − ∫ e^x dx = x e^x − e^x + C = <strong>(x − 1)e^x + C</strong>.</li>
</ol>
<p><strong>Worked example (the sneaky classic).</strong> ∫ ln x dx — no product in sight, until you invent one.</p>
<ol>
  <li>u = ln x, dv = dx. Then du = dx/x and v = x.</li>
  <li>∫ ln x dx = x ln x − ∫ x · (dx/x) = x ln x − ∫ dx = <strong>x ln x − x + C</strong>.</li>
</ol>
<p>The unpromising factor "1·dx" became dv, and the logarithm's derivative dissolved the difficulty.</p>
<p>A useful mnemonic for choosing u is <strong>LIATE</strong> — Logarithm, Inverse trig, Algebraic, Trig, Exponential: pick u from the earliest category present. And repeated parts is routine: ∫ x² e^x dx takes two rounds, each round shaving the power of x down by one.</p>
<div class="did-you-know">
  <h4>Parts is a physics workhorse</h4>
  <p>Integration by parts is arguably the most important identity in theoretical physics — it is how boundary terms are traded away in electromagnetism, how the quantum harmonic oscillator's integrals fall, and how every "integrate by parts and drop the surface term" step in field theory works. The gamma-function integral ∫ from 0 to ∞ of xⁿ e^(−x) dx = n! (n factorial) — proved by repeated parts — appears in statistical mechanics again and again.</p>
</div>`,
        },
        {
          id: "partial-fractions-and-trig",
          title: "Partial Fractions & Trig Integrals",
          content: `
<p>Two more patterns complete the standard toolkit.</p>
<p><strong>Partial fractions</strong> handles ratios of polynomials by un-adding them into simple pieces you can integrate on sight.</p>
<p><strong>Worked example.</strong> ∫ dx/(x² − 1).</p>
<ol>
  <li>Factor the denominator: x² − 1 = (x − 1)(x + 1).</li>
  <li>Posit 1/(x² − 1) = A/(x − 1) + B/(x + 1). Multiply through: 1 = A(x + 1) + B(x − 1).</li>
  <li>Choose convenient x-values: x = 1 gives 1 = 2A, so A = 1/2; x = −1 gives 1 = −2B, so B = −1/2.</li>
  <li>∫ dx/(x² − 1) = (1/2)∫ dx/(x − 1) − (1/2)∫ dx/(x + 1) = <strong>(1/2) ln|(x − 1)/(x + 1)| + C</strong>.</li>
</ol>
<p>This exact integral solves the velocity of a falling object with quadratic air drag — your first meeting with it will not be the last. (If the numerator's degree ≥ the denominator's, divide first; repeated factors and irreducible quadratics get their own standard forms.)</p>
<p><strong>Trig integrals</strong> lean on identities. The essential one: since cos 2x = 1 − 2sin²x,</p>
<p style="text-align:center;">sin²x = (1 − cos 2x)/2&nbsp;&nbsp;and&nbsp;&nbsp;cos²x = (1 + cos 2x)/2</p>
<p><strong>Worked example.</strong> ∫ sin²x dx = ∫ (1 − cos 2x)/2 dx = <strong>x/2 − (sin 2x)/4 + C</strong>.</p>
<p>Over a full period the sin 2x term contributes nothing, so the average value of sin² is exactly <strong>1/2</strong> — the single most reused trig fact in physics: it is why RMS voltage is peak/√2, why average power in AC circuits carries a factor 1/2, and why the mean kinetic energy of an oscillator is half its peak.</p>
<div class="key-concept">
  <h4>Choosing the technique</h4>
  <p>Faced with an unfamiliar integral, run the checklist: (1) basic form or a simple rearrangement? (2) a function with its derivative nearby → substitution; (3) a product of unrelated types → parts; (4) rational function → partial fractions; (5) powers of sin/cos → identities. Fluency is recognizing which door to try first — and that comes only from working problems.</p>
</div>`,
        },
        {
          id: "improper-integrals",
          title: "Improper Integrals: Integrating to Infinity",
          content: `
<p>Physics routinely integrates over infinite ranges — the work to escape a planet's gravity entirely, the total energy radiated for all time, probabilities over all possible speeds. An <strong>improper integral</strong> handles an infinite limit by integrating to a finite cutoff b and then letting b → ∞:</p>
<p style="text-align:center;">∫ from 1 to ∞ of f(x) dx = lim (b → ∞) of ∫ from 1 to b of f(x) dx</p>
<p>If the limit is finite the integral <strong>converges</strong>; otherwise it <strong>diverges</strong>. Infinitely long regions can enclose finite area — provided the function dies fast enough.</p>
<p><strong>Worked example (the fundamental contrast).</strong></p>
<ol>
  <li>∫ from 1 to ∞ of dx/x² = lim (b → ∞) of [−1/x] from 1 to b = lim (1 − 1/b) = <strong>1</strong>. Converges.</li>
  <li>∫ from 1 to ∞ of dx/x = lim (b → ∞) of ln b = <strong>∞</strong>. Diverges — the logarithm grows without bound, just very slowly.</li>
</ol>
<p>The watershed is the exponent: ∫ dx/xᵖ from 1 to ∞ converges exactly when p &gt; 1. A tail falling like 1/x² is thin enough to have finite area; 1/x is not. Remember this boundary — it returns as the convergence test for infinite series.</p>
<p><strong>Worked example (physics).</strong> How much work does it take to lift a payload of mass m from a planet's surface (radius R) all the way to infinity? Gravity pulls with F = GMm/r², so the work against it is:</p>
<ol>
  <li>W = ∫ from R to ∞ of GMm/r² dr = GMm · [−1/r] from R to ∞</li>
  <li>= GMm(0 − (−1/R)) = <strong>GMm/R</strong> — finite!</li>
</ol>
<p>Escaping gravity <em>completely</em> costs a finite energy, because the force fades as 1/r². Set that equal to ½mv² and you get the escape velocity v = √(2GM/R) ≈ 11.2 km/s for Earth. If gravity fell off like 1/r instead, the integral would diverge and nothing could ever leave any planet.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The other kind of improper integral has an infinite <em>integrand</em>: ∫ from 0 to 1 of dx/√x converges to 2 even though the function blows up at 0. Same treatment — cut off, integrate, take the limit. Spikes, like tails, are fine if they are thin enough.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Part 2 of the Fundamental Theorem of Calculus says a definite integral can be computed by:",
          options: [
            "summing infinitely many rectangles explicitly",
            "differentiating the integrand at both endpoints",
            "evaluating any antiderivative at the endpoints and subtracting",
            "multiplying the average slope by the interval width",
          ],
          correctIndex: 2,
          explanation:
            "If F′ = f, then ∫ from a to b of f dx = F(b) − F(a). The infinite sum of slices collapses into two evaluations of an antiderivative — the reason calculus is practical at all. Part 1 is the flip side: the running area A(x) accumulates at rate A′(x) = f(x), so integration and differentiation undo each other.",
        },
        {
          question:
            "To evaluate ∫ x³ cos(x⁴) dx, the natural substitution is u = x⁴. What is the result?",
          options: [
            "(1/4) sin(x⁴) + C",
            "sin(x⁴) + C",
            "4 sin(x⁴) + C",
            "(1/4) cos(x⁴) + C",
          ],
          correctIndex: 0,
          explanation:
            "With u = x⁴, du = 4x³ dx, so x³ dx = du/4 and the integral becomes (1/4)∫ cos u du = (1/4) sin u + C = (1/4) sin(x⁴) + C. Substitution works because the derivative of the inner function (up to the constant 4) sits right there as a factor. Check by differentiating: the chain rule regenerates the original integrand.",
        },
        {
          question: "Using integration by parts, ∫ x cos x dx equals:",
          options: [
            "x sin x + cos x + C",
            "(x²/2) sin x + C",
            "x sin x − cos x + C",
            "−x sin x + cos x + C",
          ],
          correctIndex: 0,
          explanation:
            "Choose u = x (which improves to 1 when differentiated) and dv = cos x dx, so du = dx, v = sin x. Then ∫ x cos x dx = x sin x − ∫ sin x dx = x sin x + cos x + C. Answer (b) is the tempting wrong move of integrating the two factors independently — the product rule does not work that way in either direction.",
        },
        {
          question:
            "Which of these improper integrals converges?",
          options: [
            "∫ from 1 to ∞ of dx/x",
            "∫ from 1 to ∞ of dx/√x",
            "∫ from 1 to ∞ of dx/x²",
            "∫ from 1 to ∞ of (1/x + 1/x²) dx",
          ],
          correctIndex: 2,
          explanation:
            "The p-test: ∫ dx/xᵖ over [1, ∞) converges only for p > 1. So 1/x² (p = 2) converges — to exactly 1 — while 1/x (p = 1) and 1/√x (p = 1/2) diverge; the sum in (d) diverges because of its 1/x part. The physical echo: a 1/r² force lets you escape a planet with finite energy, a 1/r force never would.",
        },
        {
          question:
            "Why does the identity sin²x = (1 − cos 2x)/2 matter so much in physics?",
          options: [
            "It shows sin²x is always less than 1",
            "It converts sin² into a form with average value 1/2 over a cycle — the source of the 1/2 in RMS values and average AC power",
            "It proves sin x and cos x are orthogonal",
            "It allows sin²x to be differentiated",
          ],
          correctIndex: 1,
          explanation:
            "Integrating the identity over a full period, the cos 2x term averages to zero, leaving an average of exactly 1/2 for sin². That single number is why mains RMS voltage is peak/√2, why average AC power carries a factor 1/2, and why a harmonic oscillator's mean kinetic energy is half its maximum. One trig identity, decades of mileage.",
        },
      ],
    },
    {
      id: "applications-of-integration",
      title: "Applications of Integration",
      subtitle:
        "Areas, volumes, arc length, work, and centre of mass — integrals doing physics",
      sections: [
        {
          id: "areas-and-volumes",
          title: "Slice, Sum, Integrate: Areas and Volumes",
          content: `
<p>Every application in this chapter runs the same three-step program: <strong>slice</strong> the object into thin pieces, <strong>write</strong> the contribution of one representative slice, <strong>integrate</strong> over all slices. Master the pattern here and you will set up moment-of-inertia and charge-distribution integrals in later subjects without breaking stride.</p>
<p><strong>Area between curves.</strong> The region between an upper curve f and a lower curve g slices into vertical strips of height f(x) − g(x) and width dx: A = ∫ [f(x) − g(x)] dx between the intersection points. Example: between y = x and y = x² (which cross at 0 and 1), A = ∫ from 0 to 1 of (x − x²) dx = 1/2 − 1/3 = <strong>1/6</strong>.</p>
<p><strong>Volumes by disks.</strong> Rotate a curve around the x-axis and slice the solid perpendicular to the axis: each slice is a disk of radius y = f(x), volume π[f(x)]² dx.</p>
<p><strong>Worked example — the volume of a sphere, finally proved.</strong> A sphere of radius r is the circle x² + y² = r² rotated about the x-axis, so each disk has radius y = √(r² − x²):</p>
<ol>
  <li>V = ∫ from −r to r of π(r² − x²) dx</li>
  <li>= π[r²x − x³/3] evaluated from −r to r</li>
  <li>= π[(r³ − r³/3) − (−r³ + r³/3)] = π · (4r³/3) = <strong>(4/3)πr³</strong>.</li>
</ol>
<p>The formula you memorized in school is a two-line integral. A hole through the middle makes each slice a <strong>washer</strong>: subtract the inner disk, π(R_outer² − R_inner²) dx.</p>
<p><strong>Cylindrical shells</strong> slice the other way — concentric tubes of circumference 2πx, height f(x), thickness dx, so V = ∫ 2πx f(x) dx. Use whichever slicing makes the geometry simplest.</p>
<div class="key-concept">
  <h4>The slice is the skill</h4>
  <p>Nobody remembers volume formulas; physicists remember how to slice. Ask of every problem: what thin piece do I understand completely? Write its contribution with a dx in it, then let the integral do the infinite bookkeeping. This mental move — not any particular formula — is what this chapter is really teaching.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Archimedes found the sphere's volume in the 3rd century BCE by a mechanical balancing argument he considered his masterpiece — a sphere and cylinder are carved on his tomb. Integration turns his lifetime achievement into an exercise.</p>
</div>`,
        },
        {
          id: "arc-length",
          title: "Arc Length: How Long Is a Curve?",
          content: `
<p>How far do you actually walk along a curving path? Slice the curve into short segments and apply Pythagoras to each: a segment spanning dx horizontally and dy vertically has length</p>
<p style="text-align:center;">ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx</p>
<p>Summing all the little hypotenuses gives the <strong>arc length</strong>:</p>
<p style="text-align:center; font-size:1.05em;"><strong>L = ∫ from a to b of √(1 + (f′(x))²) dx</strong></p>
<p>The formula is pure Pythagoras plus the slice-sum-integrate pattern; the square root is what usually makes these integrals hard, so textbook examples are engineered to cooperate.</p>
<p><strong>Worked example.</strong> Find the length of y = (2/3)x^(3/2) from x = 0 to x = 3.</p>
<ol>
  <li>f′(x) = x^(1/2) = √x, so (f′)² = x.</li>
  <li>L = ∫ from 0 to 3 of √(1 + x) dx.</li>
  <li>Substitute u = 1 + x, du = dx, limits 1 → 4: L = ∫ from 1 to 4 of √u du = (2/3)u^(3/2) from 1 to 4.</li>
  <li>= (2/3)(8 − 1) = <strong>14/3 ≈ 4.67</strong>.</li>
</ol>
<p>Sanity check: the straight line between the endpoints (0, 0) and (3, 2√3 ≈ 3.46) has length √(9 + 12) = √21 ≈ 4.58. The curve is slightly longer than the chord, as it must be.</p>
<p>A quick sense check of the formula's limits: where the curve is flat (f′ = 0), the integrand is 1 and length equals horizontal run. Where it is steep, the factor √(1 + (f′)²) inflates each dx to account for the climb — a hiker's map-distance versus boot-distance.</p>
<div class="analogy">
  <h3>The odometer integral</h3>
  <p>Arc length is what a car's odometer computes: speed along the path, integrated over time. In the parametric chapter this becomes literal — L = ∫ √((dx/dt)² + (dy/dt)²) dt is exactly ∫ (speed) dt, and "distance travelled equals the integral of speed" turns out to be the arc-length formula in disguise.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The arc length of an ellipse has no elementary formula — the attempt spawned "elliptic integrals," a whole new class of functions. They resurface in the exact (large-angle) period of a pendulum, which is why every textbook stops at the small-angle approximation.</p>
</div>`,
        },
        {
          id: "work-and-center-of-mass",
          title: "Work and Centre of Mass: Integrals You'll Use Weekly",
          content: `
<p>When a force is constant, work is force times distance. When the force varies with position — springs, gravity, gas pressure — you slice the journey: over a short step dx the force is essentially constant, contributing dW = F(x) dx, and the total is</p>
<p style="text-align:center; font-size:1.1em;"><strong>W = ∫ from a to b of F(x) dx</strong> — work is the area under the force–position graph.</p>
<p><strong>Worked example (spring).</strong> Hooke's law says a spring pulls back with F = kx at stretch x. The work to stretch from 0 to X:</p>
<ol>
  <li>W = ∫ from 0 to X of kx dx = k · X²/2 = <strong>½kX²</strong>.</li>
</ol>
<p>That is where the elastic-potential-energy formula comes from — it is the integral of Hooke's law. The average force (½kX, half the peak) times distance gives the same answer, because the force ramps linearly.</p>
<p><strong>Worked example (lifting a hanging cable).</strong> A 10 m cable of mass density 2 kg/m hangs from a winch. Slices near the top rise barely at all; the bottom rises the full 10 m. The slice at depth y (mass 2 dy) must be lifted height y:</p>
<ol>
  <li>dW = (2 dy) · g · y, with g = 9.8 m/s².</li>
  <li>W = ∫ from 0 to 10 of 2 · 9.8 · y dy = 19.6 · [y²/2] from 0 to 10 = 19.6 · 50 = <strong>980 J</strong>.</li>
</ol>
<p>Same as lifting the whole 20 kg through 5 m — the centre of mass height. Which brings us to:</p>
<p><strong>Centre of mass.</strong> For a rod along the x-axis with varying density λ(x) (kg/m), the balance point weights each position by the mass there:</p>
<p style="text-align:center;">x̄ = ∫ x λ(x) dx ÷ ∫ λ(x) dx</p>
<p><strong>Worked example.</strong> A rod of length L whose density grows linearly, λ(x) = cx:</p>
<ol>
  <li>Total mass: M = ∫ from 0 to L of cx dx = cL²/2.</li>
  <li>Moment: ∫ from 0 to L of x · cx dx = cL³/3.</li>
  <li>x̄ = (cL³/3)/(cL²/2) = <strong>2L/3</strong> — the balance point sits two-thirds along, toward the heavy end, and the constant c cancels.</li>
</ol>
<div class="key-concept">
  <h4>Why physicists care</h4>
  <p>Mechanics lets you treat an extended object as a single point — but only if you know where that point is. The centre-of-mass integral is the licence for that simplification, and the same weighted-average structure returns as moments of inertia (weight by x² instead of x) and as expectation values in quantum mechanics.</p>
</div>`,
        },
        {
          id: "average-value",
          title: "The Average Value of a Function",
          content: `
<p>What is the average of infinitely many values? For finitely many numbers you add and divide by the count; for a function on [a, b], the integral does the adding and the interval length does the counting:</p>
<p style="text-align:center; font-size:1.1em;"><strong>f_avg = [1/(b − a)] · ∫ from a to b of f(x) dx</strong></p>
<p>Geometrically, f_avg is the height of the rectangle over [a, b] with the same area as the region under the curve — the level a lake would settle at if the curve's profile were flooded.</p>
<p><strong>Worked example.</strong> A ball dropped from rest has speed v(t) = gt. Its average speed over the first T seconds:</p>
<ol>
  <li>v_avg = (1/T) ∫ from 0 to T of gt dt = (1/T)(gT²/2) = <strong>gT/2</strong>.</li>
</ol>
<p>Half the final speed — the familiar "average of initial and final" rule for uniform acceleration, now derived rather than assumed. The rule is special to linear functions; for anything curved you must integrate.</p>
<p><strong>Worked example (the one electrical engineering runs on).</strong> Mains voltage oscillates: V(t) = V₀ sin(ωt). Its plain average over a cycle is zero — positive and negative halves cancel — yet a kettle still boils, because heating power goes as V², which is never negative. The meaningful average is the mean of V²:</p>
<ol>
  <li>(V²)_avg = V₀² × (average of sin² over a cycle) = V₀²/2, using the sin² fact from the trig-integrals section.</li>
  <li>The <strong>root-mean-square</strong> voltage is the square root: V_rms = <strong>V₀/√2</strong>.</li>
</ol>
<p>"230 V mains" is the RMS figure; the actual peaks reach 230 × √2 ≈ 325 V. RMS — root of the mean of the square — is precisely the average-value integral applied to the square of a function, and it is the honest way to average anything that oscillates around zero: AC currents, sound pressures, thermal noise, molecular velocities (the v_rms of kinetic theory is this same construction).</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Mean Value Theorem for integrals guarantees a continuous function actually <em>attains</em> its average somewhere on the interval: at some instant, the falling ball's speed is exactly gT/2. Averages are not fictions — the function passes through its own average on the way.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Rotating y = √x about the x-axis from x = 0 to x = 4 creates a solid. Using the disk method, its volume is:",
          options: ["16π", "4π", "8π", "2π"],
          correctIndex: 2,
          explanation:
            "Each slice is a disk of radius y = √x, so dV = πy² dx = πx dx. Then V = π ∫ from 0 to 4 of x dx = π · 16/2 = 8π. The disk method is the slice-sum-integrate pattern: one understandable slice (a thin cylinder), then the integral adds the infinitely many of them.",
        },
        {
          question:
            "The work needed to stretch a Hooke's-law spring (F = kx) from its natural length to extension X is ½kX², not kX·X. Why?",
          options: [
            "Half the energy is always lost to heat in the spring",
            "The force is not constant — it ramps from 0 to kX, and the integral ∫kx dx averages that ramp",
            "The spring pushes back with double the force at full stretch",
            "Work only counts the second half of the displacement",
          ],
          correctIndex: 1,
          explanation:
            "kX·X would be right only if the full force kX acted over the whole stretch. In fact the force starts at zero and grows linearly, so W = ∫ from 0 to X of kx dx = ½kX² — the area of a triangle under the force–position graph, equivalently the average force ½kX times the distance X. Varying force is exactly why work is an integral.",
        },
        {
          question:
            "A rod of length L has density increasing linearly from zero at one end: λ(x) = cx. Where is its centre of mass?",
          options: ["At x = L/2", "At x = L/3", "At x = 3L/4", "At x = 2L/3"],
          correctIndex: 3,
          explanation:
            "x̄ = ∫xλ dx / ∫λ dx = (cL³/3)/(cL²/2) = 2L/3. The balance point shifts toward the heavy end, and the constant c cancels — only the density's shape matters. This weighted-average integral is the template for moments of inertia and, later, quantum expectation values.",
        },
        {
          question:
            "Why is mains electricity rated by RMS voltage rather than by the simple average of V(t) = V₀ sin(ωt)?",
          options: [
            "The simple average over a cycle is zero, while heating depends on the average of V², which RMS captures",
            "RMS is easier to measure with analogue meters",
            "The peak voltage V₀ is dangerous to publish",
            "The average and RMS values are actually equal for a sine wave",
          ],
          correctIndex: 0,
          explanation:
            "A sine spends equal time positive and negative, so its plain average vanishes — useless as a rating. Power delivered goes as V²/R, and the mean of V₀²sin² over a cycle is V₀²/2, giving effective voltage V₀/√2 ≈ 0.707 V₀. RMS is the average-value integral applied to the square: the honest average for anything oscillating about zero.",
        },
        {
          question:
            "In the arc-length formula L = ∫√(1 + (f′(x))²) dx, what is the geometric origin of the square root?",
          options: [
            "It comes from the quadratic formula applied to the curve",
            "It ensures the length is always positive",
            "It is Pythagoras applied to each tiny segment: ds = √(dx² + dy²)",
            "It corrects for the curvature of the axes",
          ],
          correctIndex: 2,
          explanation:
            "Each short piece of curve is nearly straight — a hypotenuse spanning dx across and dy = f′(x)dx up, so ds = √(dx² + dy²) = √(1 + (f′)²) dx. The integral just sums the hypotenuses. Where the curve is flat the factor is 1 (length = run); where it is steep the factor stretches each dx to include the climb.",
        },
      ],
    },
    {
      id: "infinite-series",
      title: "Infinite Series",
      subtitle:
        "Convergence, power series, and Taylor expansions — physics's favourite approximation tool",
      sections: [
        {
          id: "convergence",
          title: "When Do Infinite Sums Make Sense?",
          content: `
<p>Can adding infinitely many numbers give a finite answer? Sometimes — and telling when is the first order of business. An infinite series Σaₙ <strong>converges</strong> if its partial sums (first term, first two, first three, …) approach a limit.</p>
<p>The founding example is the <strong>geometric series</strong>. For a ratio r with |r| &lt; 1:</p>
<p style="text-align:center; font-size:1.05em;">1 + r + r² + r³ + … = <strong>1/(1 − r)</strong></p>
<p>Proof in three lines: let S = 1 + r + r² + …; then rS = r + r² + …, subtract to get S − rS = 1, so S = 1/(1 − r). With r = 1/2: 1 + 1/2 + 1/4 + 1/8 + … = 2 — Zeno's runner covers the halves and arrives after all.</p>
<p>Two indispensable tests:</p>
<ul>
  <li><strong>Divergence test:</strong> if the terms aₙ do not shrink to zero, the series diverges. Necessary but not sufficient — shrinking terms do <em>not</em> guarantee convergence.</li>
  <li><strong>Ratio test:</strong> compute the limit L of |aₙ₊₁/aₙ|. If L &lt; 1 the series converges (it eventually behaves geometrically); if L &gt; 1 it diverges; L = 1 is inconclusive.</li>
</ul>
<p>The great cautionary tale is the <strong>harmonic series</strong> 1 + 1/2 + 1/3 + 1/4 + …: terms shrink to zero, yet it diverges. See it by grouping: 1/3 + 1/4 &gt; 1/2; 1/5 + … + 1/8 &gt; 1/2; each doubling block adds at least another half, forever. Alternatively, compare with ∫dx/x, which we saw diverge — the integral and the series stand or fall together. Meanwhile Σ1/n² converges (to π²/6, one of Euler's miracles), matching ∫dx/x²: the p = 1 boundary from improper integrals reappears verbatim.</p>
<p>Alternating signs help: 1 − 1/2 + 1/3 − 1/4 + … converges (to ln 2), because each partial sum overshoots and undershoots the target in ever-smaller steps.</p>
<div class="analogy">
  <h3>The overhang puzzle</h3>
  <p>Stack books at a table's edge: the harmonic series governs the achievable overhang, which grows without bound — 4 books can overhang by more than one book length, and in principle 10⁴⁴ books would overhang by 50. Divergence made tangible, if not practical.</p>
</div>
<div class="key-concept">
  <h4>Why physicists must care</h4>
  <p>Every quantum-mechanical perturbation calculation, every Fourier decomposition of a signal, every partition function in statistical mechanics is an infinite series. Convergence is the difference between a prediction and nonsense — and knowing roughly how fast a series converges tells you how many terms a real computation needs.</p>
</div>`,
        },
        {
          id: "power-series",
          title: "Power Series: Polynomials That Never End",
          content: `
<p>A <strong>power series</strong> is an infinite polynomial: Σ cₙxⁿ = c₀ + c₁x + c₂x² + …. For each x it is an ordinary numerical series that may or may not converge — and the set of x where it does is always an interval centred on 0 (or on a, for powers of (x − a)), with a <strong>radius of convergence</strong> R.</p>
<p>The prototype is the geometric series read as a function:</p>
<p style="text-align:center;">1/(1 − x) = 1 + x + x² + x³ + …,&nbsp;&nbsp;valid for |x| &lt; 1</p>
<p>Inside the interval the equality is exact; at x = 1 the series explodes precisely where the function does. The ratio test finds R in general.</p>
<p><strong>Worked example.</strong> For which x does Σ xⁿ/n! converge?</p>
<ol>
  <li>Ratio of consecutive terms: |xⁿ⁺¹/(n+1)!| ÷ |xⁿ/n!| = |x|/(n + 1).</li>
  <li>As n → ∞ this ratio → 0 for <em>every</em> x — always below 1.</li>
  <li>So the series converges for all x: <strong>R = ∞</strong>. (This series is about to be revealed as e^x.)</li>
</ol>
<p>The property that makes power series a workhorse: inside the radius of convergence they behave exactly like polynomials. You may <strong>differentiate and integrate term by term</strong>:</p>
<p><strong>Worked example.</strong> Differentiate 1/(1 − x) = 1 + x + x² + x³ + … term by term:</p>
<ol>
  <li>Left side: d/dx (1 − x)⁻¹ = 1/(1 − x)².</li>
  <li>Right side: 0 + 1 + 2x + 3x² + 4x³ + …</li>
  <li>So 1/(1 − x)² = Σ n xⁿ⁻¹ — a new series summed for free.</li>
</ol>
<p>Integrating instead gives ln(1 − x) = −(x + x²/2 + x³/3 + …), and substituting −x² for x in the geometric series then integrating yields the series for arctan — whole families of expansions from one seed.</p>
<div class="key-concept">
  <h4>The physicist's contract with power series</h4>
  <p>Within R, a power series is not an approximation to a function — it <em>is</em> the function, and may be manipulated with impunity: differentiate, integrate, multiply, substitute. Solving differential equations by assuming a power-series solution and matching coefficients is a standard quantum-mechanics technique (it is how the hydrogen atom's wavefunctions are found).</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your calculator has no sine wire inside. It evaluates polynomial approximations derived from power series — a few terms, cleverly optimized. Every sin, cos, ln, and e^x you have ever computed was secretly a truncated series.</p>
</div>`,
        },
        {
          id: "taylor-maclaurin",
          title: "Taylor Series: Any Function into Powers of x",
          content: `
<p>Which power series represents a given function f? Linearization was the one-term answer; Taylor's idea is to keep going. Demand that the series match f's value, slope, curvature, and every higher derivative at the base point a. Differentiating Σcₙ(x − a)ⁿ repeatedly and setting x = a forces cₙ = f⁽ⁿ⁾(a)/n!, giving the <strong>Taylor series</strong>:</p>
<p style="text-align:center; font-size:1.05em;"><strong>f(x) = f(a) + f′(a)(x − a) + f″(a)(x − a)²/2! + f‴(a)(x − a)³/3! + …</strong></p>
<p>With a = 0 it is called a <strong>Maclaurin series</strong>. The n! in the denominator is what you get from differentiating xⁿ down n times.</p>
<p><strong>Worked example.</strong> Build the series for e^x at a = 0.</p>
<ol>
  <li>Every derivative of e^x is e^x, and e⁰ = 1 — all coefficients f⁽ⁿ⁾(0) = 1.</li>
  <li><strong>e^x = 1 + x + x²/2! + x³/3! + x⁴/4! + …</strong>, converging for all x.</li>
  <li>Check at x = 1: 1 + 1 + 0.5 + 0.1667 + 0.0417 + 0.0083 ≈ 2.7183 — six terms give e to four decimals.</li>
</ol>
<p><strong>Worked example.</strong> For sin x at 0, the derivatives cycle sin → cos → −sin → −cos → sin, giving values 0, 1, 0, −1 repeating:</p>
<p style="text-align:center;"><strong>sin x = x − x³/3! + x⁵/5! − …</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>cos x = 1 − x²/2! + x⁴/4! − …</strong></p>
<p>Only odd powers for the odd function sin, only even for cos — symmetry visible in the algebra. The leading terms are exactly the small-angle approximations of the linearization section: sin x ≈ x is the Taylor series cut after one term, and cos x ≈ 1 − x²/2 after two.</p>
<p>The essential Maclaurin library, worth knowing cold:</p>
<table>
  <thead>
    <tr><th>Function</th><th>Series</th><th>Valid for</th></tr>
  </thead>
  <tbody>
    <tr><td>e^x</td><td>1 + x + x²/2! + x³/3! + …</td><td>all x</td></tr>
    <tr><td>sin x</td><td>x − x³/3! + x⁵/5! − …</td><td>all x</td></tr>
    <tr><td>cos x</td><td>1 − x²/2! + x⁴/4! − …</td><td>all x</td></tr>
    <tr><td>1/(1 − x)</td><td>1 + x + x² + x³ + …</td><td>|x| &lt; 1</td></tr>
    <tr><td>ln(1 + x)</td><td>x − x²/2 + x³/3 − …</td><td>−1 &lt; x ≤ 1</td></tr>
    <tr><td>(1 + x)ⁿ</td><td>1 + nx + n(n−1)x²/2! + …</td><td>|x| &lt; 1</td></tr>
  </tbody>
</table>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Put x = iθ into the e^x series and the even terms assemble into cos θ, the odd into i sin θ: Euler's formula e^(iθ) = cos θ + i sin θ falls straight out. Taylor series are where exponentials and oscillations are revealed as one family — the identity that powers all of AC circuit analysis and quantum mechanics.</p>
</div>`,
        },
        {
          id: "error-bounds",
          title: "Truncation Error: How Wrong Is Stopping Early?",
          content: `
<p>In practice nobody sums a whole series — you stop after a few terms. An approximation without an error estimate is a guess, so the question "how wrong am I?" has exact answers.</p>
<p><strong>Alternating series bound</strong> (the easy, common case): if the terms alternate in sign and shrink steadily to zero, the error after stopping is smaller than the first neglected term. The partial sums straddle the true value, so the truth lies within one term of wherever you stopped.</p>
<p><strong>Worked example.</strong> Estimate sin(0.5) with two terms.</p>
<ol>
  <li>sin(0.5) ≈ 0.5 − 0.5³/6 = 0.5 − 0.02083 = 0.47917.</li>
  <li>First neglected term: 0.5⁵/120 = 0.00026 — the error is guaranteed below this.</li>
  <li>True value 0.47943: actual error 0.00026. The bound is essentially exact here.</li>
</ol>
<p><strong>Lagrange remainder</strong> (the general tool): stopping a Taylor series at the (x − a)ⁿ term leaves an error</p>
<p style="text-align:center;">|Rₙ| ≤ M·|x − a|ⁿ⁺¹/(n + 1)!,</p>
<p>where M bounds the (n+1)-th derivative on the interval. Read its anatomy: the error looks like <em>the next term of the series</em>. Two levers shrink it — stay close to the base point (small |x − a|) or keep more terms (the factorial in the denominator crushes the numerator eventually, which is why e^x, sin, and cos converge everywhere).</p>
<p><strong>Worked example.</strong> How many terms of e^x = Σ xⁿ/n! give e = e¹ to within 0.001? Derivatives of e^x on [0, 1] are at most e &lt; 3, so |Rₙ| ≤ 3/(n + 1)!. Need 3/(n + 1)! &lt; 0.001, i.e. (n + 1)! &gt; 3000: since 7! = 5040, n = 6 suffices — <strong>seven terms</strong> nail e to three decimals.</p>
<div class="key-concept">
  <h4>The physicist's error discipline</h4>
  <p>Every physics approximation should come with a size tag. "sin θ ≈ θ" really means "the correction is θ³/6, about 0.5% at 18°, and I have checked that this is negligible for my problem." Quoting the first neglected term as the error estimate is standard practice across physics — this section is where that habit is licensed.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Not every function is captured by its Taylor series: e^(−1/x²) (patched to 0 at x = 0) has every derivative zero at the origin, so its Maclaurin series is identically zero — yet the function is not. Physics functions are almost always better behaved, but the example keeps mathematicians honest.</p>
</div>`,
        },
        {
          id: "series-in-physics",
          title: "Series as Physics's Favourite Tool",
          content: `
<p>Now the payoff — three showcase pieces of physics, each unlocked by the same move: expand, keep the leading terms, solve.</p>
<p><strong>1. The pendulum.</strong> Newton's law for a pendulum of length L gives d²θ/dt² = −(g/L) sin θ — unsolvable in elementary functions. Expand: sin θ = θ − θ³/6 + …. For small swings, drop everything past the first term:</p>
<p style="text-align:center;">d²θ/dt² ≈ −(g/L)θ</p>
<p>This is the simple harmonic oscillator, solved by sines and cosines, with period T = 2π√(L/g) — independent of amplitude, which is why pendulum clocks keep time. The θ³ term you dropped is the correction: at 20° amplitude the true period is longer by about 0.8%. Taylor tells you both the approximation <em>and</em> the price.</p>
<p><strong>2. Relativity's low-speed limit.</strong> Einstein's kinetic energy is E = mc²[(1 − v²/c²)^(−1/2) − 1]. Binomial-expand with x = −v²/c² and n = −1/2:</p>
<ol>
  <li>(1 − v²/c²)^(−1/2) ≈ 1 + v²/(2c²) + 3v⁴/(8c⁴) + …</li>
  <li>E ≈ <strong>½mv²</strong> + (3/8)m·v⁴/c² + …</li>
</ol>
<p>Newton's ½mv² is the first Taylor term of Einstein's formula. Relativity did not overthrow classical mechanics; it revealed it as a leading-order approximation, with corrections suppressed by (v/c)². At jetliner speed the correction is one part in 10¹².</p>
<p><strong>3. Any potential well is a spring.</strong> Expand a potential U(x) about a stable minimum x₀: U ≈ U(x₀) + 0 + ½U″(x₀)(x − x₀)² (the slope term vanishes at a minimum). Every well, whatever its shape, is quadratic up close — so <em>everything oscillates harmonically about equilibrium</em>: atoms in molecules, ions in crystals, bridges in wind. This one Taylor argument is why the harmonic oscillator rules physics.</p>
<div class="key-concept">
  <h4>The method behind the magic</h4>
  <p>Identify the small parameter (θ, v/c, x − x₀), expand in its powers, keep the lowest terms that capture the effect, and use the next term as your error bar. This is <em>perturbation theory</em> in embryo — the strategy driving much of quantum mechanics and nearly all of theoretical physics beyond exactly-solvable models.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>GPS satellites live on the correction terms: clock rates shift by parts in 10¹⁰ from both special and general relativity, computed via expansions like these. Ignore the "tiny" terms and positions would drift by kilometres per day.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The harmonic series 1 + 1/2 + 1/3 + 1/4 + … has terms that shrink to zero, yet it diverges. What does this show?",
          options: [
            "The divergence test is unreliable",
            "Terms shrinking to zero is necessary for convergence but not sufficient",
            "All series with positive terms diverge",
            "The series actually converges, just very slowly",
          ],
          correctIndex: 1,
          explanation:
            "If terms fail to approach zero, divergence is guaranteed — but the converse fails. The harmonic terms shrink too slowly: each block from n+1 to 2n adds more than 1/2, so partial sums grow forever (they pass 10 only after about 12,000 terms, and 100 after ~10⁴³). Compare Σ1/n², whose faster-shrinking terms do converge — the p > 1 boundary, same as for improper integrals.",
        },
        {
          question:
            "In the Taylor coefficient formula cₙ = f⁽ⁿ⁾(a)/n!, what job does the n! do?",
          options: [
            "It makes the series converge for all x",
            "It counts the number of terms kept",
            "It compensates for the factor of n! produced when xⁿ is differentiated n times, so the n-th derivative of the series matches f⁽ⁿ⁾(a)",
            "It is a convention with no mathematical content",
          ],
          correctIndex: 2,
          explanation:
            "Differentiate cₙ(x − a)ⁿ exactly n times and you get cₙ · n!; evaluating at x = a kills every other term. Matching this to f⁽ⁿ⁾(a) forces cₙ = f⁽ⁿ⁾(a)/n!. The factorial is bookkeeping that makes the series agree with the function derivative-by-derivative — and as a bonus it accelerates convergence, since n! eventually crushes xⁿ for any x.",
        },
        {
          question:
            "Using the alternating series bound, the error in approximating sin x by x − x³/6 is at most:",
          options: ["x²/2", "x³/6", "x⁴/24", "x⁵/120"],
          correctIndex: 3,
          explanation:
            "The sine series alternates with steadily shrinking terms (for modest x), so the truncation error is bounded by the first neglected term — here x⁵/5! = x⁵/120. At x = 0.5 that is 0.00026: two terms of the series already give engineering-grade accuracy. Quoting the first dropped term as the error bar is standard physics practice.",
        },
        {
          question:
            "Expanding Einstein's kinetic energy for v much less than c gives E ≈ ½mv² + (3/8)mv⁴/c² + …. What is the physical lesson?",
          options: [
            "Newtonian kinetic energy is the leading term of a Taylor expansion, with relativistic corrections of order (v/c)²",
            "Einstein's formula is wrong at low speeds",
            "Kinetic energy is undefined below the speed of light",
            "The expansion shows energy is quantized",
          ],
          correctIndex: 0,
          explanation:
            "Binomial-expanding the relativistic factor (1 − v²/c²)^(−1/2) reveals ½mv² as the first term beyond rest energy, with the next correction suppressed by v²/c². New physical theories must contain the old ones as limiting cases — and Taylor expansion is precisely the tool that exhibits the containment. This 'correspondence' pattern recurs throughout modern physics.",
        },
        {
          question:
            "Why does expanding any potential U(x) around a stable minimum explain the ubiquity of simple harmonic motion?",
          options: [
            "Because all real potentials are exactly parabolic",
            "Because the constant term U(x₀) drives oscillation",
            "Because at a minimum the linear term vanishes, leaving ½U″(x₀)(x − x₀)² as the leading behaviour — a spring, whatever the well's true shape",
            "Because Taylor series only exist for quadratic functions",
          ],
          correctIndex: 2,
          explanation:
            "At a minimum U′(x₀) = 0, so the expansion starts U(x₀) + ½U″(x₀)(x − x₀)². The constant shifts nothing physical, and the quadratic term is exactly Hooke's law with k = U″(x₀). Close to equilibrium, every system — molecule, crystal, bridge — is a harmonic oscillator, which is why that one solved problem echoes through all of physics.",
        },
      ],
    },
    {
      id: "intro-differential-equations",
      title: "Intro Differential Equations",
      subtitle:
        "First-order ODEs, exponential models, and direction fields — your first taste of physics's native language",
      sections: [
        {
          id: "what-is-an-ode",
          title: "Equations Whose Unknowns Are Functions",
          content: `
<p>An ordinary algebraic equation asks for a number. A <strong>differential equation</strong> asks for a <em>function</em> — one whose derivatives satisfy a stated relationship. This is physics's native grammar, because the laws of nature specify not what things are but how they <em>change</em>: Newton's F = ma is really</p>
<p style="text-align:center;">m·d²x/dt² = F(x, dx/dt, t)</p>
<p>— a differential equation whose solution x(t) is the entire trajectory. Solve it and you have predicted the future.</p>
<p>Vocabulary: the <strong>order</strong> is the highest derivative present (Newton's law is second-order; this chapter works first-order). Solving an ODE is undoing derivatives, so constants of integration appear — a first-order equation has a one-parameter family of solutions, the <strong>general solution</strong>, and pinning down the constant requires an <strong>initial condition</strong>. Physics reads this as: the law plus the starting state determine everything after.</p>
<p><strong>Worked example (verifying a solution).</strong> Claim: y = 5e^(3t) solves dy/dt = 3y with y(0) = 5.</p>
<ol>
  <li>Differentiate the candidate: dy/dt = 5 · 3e^(3t) = 15e^(3t).</li>
  <li>Compare with 3y = 3 · 5e^(3t) = 15e^(3t). Equal — the equation is satisfied for all t.</li>
  <li>Check the initial condition: y(0) = 5e⁰ = 5. ✓</li>
</ol>
<p>Verification is always mechanical, even when finding the solution takes art. Get the habit: every solved ODE gets substituted back.</p>
<p>The equation dy/dt = ky is worth internalizing before any technique: it says <em>the rate of change is proportional to the amount present</em>, and its solutions are exponentials y = y₀e^(kt). More people → more births; more nuclei → more decays per second; more money → more interest. Whenever growth feeds on itself, the exponential appears — this single ODE explains why.</p>
<div class="key-concept">
  <h4>Why this chapter matters</h4>
  <p>From here on, physics is differential equations. Terminal velocity, oscillators, circuits, waves, heat, Schrödinger's equation — every one is an ODE or PDE plus initial conditions. The two techniques in the next sections (separation, integrating factor) will carry you through the entire first-order world.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton considered the solving of differential equations so valuable that he announced it to Leibniz as an anagram, to claim priority without revealing the secret: roughly, "it is useful to solve differential equations." He was right about the usefulness.</p>
</div>`,
        },
        {
          id: "separable-equations",
          title: "Separable Equations & Radioactive Decay",
          content: `
<p>An ODE is <strong>separable</strong> when it can be rearranged so each variable stands with its own differential: g(y) dy = f(t) dt. Then integrate both sides independently. Leibniz notation makes the manoeuvre look like fraction algebra — and (with justification a rigorous course supplies) it works.</p>
<p><strong>Worked example — radioactive decay.</strong> Each nucleus decays with fixed probability per unit time, so the decay rate is proportional to the number N remaining:</p>
<p style="text-align:center;">dN/dt = −λN&nbsp;&nbsp;(λ = decay constant, units 1/time)</p>
<ol>
  <li><strong>Separate:</strong> dN/N = −λ dt.</li>
  <li><strong>Integrate both sides:</strong> ∫dN/N = −λ∫dt gives ln N = −λt + C.</li>
  <li><strong>Exponentiate:</strong> N = e^C · e^(−λt). Name the constant: at t = 0, N = N₀, so e^C = N₀.</li>
  <li><strong>Solution:</strong> <strong>N(t) = N₀ e^(−λt)</strong> — exponential decay, derived rather than decreed.</li>
</ol>
<p>The <strong>half-life</strong> is the time for N to halve: set N = N₀/2, giving e^(−λt) = 1/2, so t½ = ln 2/λ ≈ 0.693/λ. Halving is per-interval, not per-amount — after two half-lives a quarter remains, never zero exactly.</p>
<p><strong>Worked example — carbon dating.</strong> Carbon-14 (t½ = 5730 yr) is constantly replenished in living tissue but decays undisturbed after death. A bone shows 25% of the living ¹⁴C level. Since 25% = (1/2)², two half-lives have passed: the bone is about <strong>11,460 years old</strong>. For an arbitrary fraction f, solve e^(−λt) = f to get t = −ln f/λ — the logarithm turns a measured ratio into a date.</p>
<p>The same separation solves Newton's law of cooling, dT/dt = −k(T − T_room): separate with u = T − T_room to find T = T_room + (T₀ − T_room)e^(−kt). Coffee approaches room temperature exponentially — the temperature <em>difference</em> is what decays.</p>
<div class="key-concept">
  <h4>The exponential signature</h4>
  <p>Any quantity whose rate of change is proportional to itself — decay, cooling gaps, discharging capacitors, light absorbed in glass, drug concentrations — follows an exponential. When an experimentalist plots ln N against t and finds a straight line, they have diagnosed this ODE from data; the slope is −λ.</p>
</div>`,
        },
        {
          id: "first-order-linear",
          title: "First-Order Linear ODEs & the Integrating Factor",
          content: `
<p>Add a source or a drive and separation often fails. The standard form of a <strong>first-order linear ODE</strong> is</p>
<p style="text-align:center;">dy/dt + P(t)·y = Q(t)</p>
<p>The trick — one of the slickest in applied mathematics — is to multiply through by an <strong>integrating factor</strong> μ(t) = e^(∫P dt), chosen precisely so the left side collapses into the derivative of a product, d/dt (μy). Then integrate both sides and divide by μ.</p>
<p><strong>Worked example — a falling object with air drag.</strong> With gravity and a drag force proportional to speed, Newton's second law reads m·dv/dt = mg − bv, or in standard form:</p>
<p style="text-align:center;">dv/dt + (b/m)v = g</p>
<ol>
  <li><strong>Integrating factor:</strong> μ = e^(∫(b/m)dt) = e^(bt/m).</li>
  <li><strong>Multiply through:</strong> e^(bt/m)·dv/dt + (b/m)e^(bt/m)·v = g·e^(bt/m). The left side is exactly d/dt [v·e^(bt/m)] — check with the product rule.</li>
  <li><strong>Integrate:</strong> v·e^(bt/m) = (mg/b)·e^(bt/m) + C.</li>
  <li><strong>Solve and apply v(0) = 0:</strong> C = −mg/b, giving <strong>v(t) = (mg/b)(1 − e^(−bt/m))</strong>.</li>
</ol>
<p>Read the solution like a physicist. As t → ∞ the exponential dies and v → mg/b: <strong>terminal velocity</strong>, where drag balances weight — obtainable directly by setting dv/dt = 0. The combination τ = m/b is the <strong>time constant</strong>: after one τ the object has reached 63% of terminal speed (1 − 1/e), after 5τ better than 99%. Heavy, compact objects (large m, small b) take long to settle; a feather settles almost instantly.</p>
<p>The same equation with new labels is the charging RC circuit: R·dQ/dt + Q/C = V gives Q(t) = CV(1 − e^(−t/RC)) — capacitor charge in place of velocity, RC in place of m/b. Solve one first-order linear ODE and you have solved them all; only the letters change.</p>
<div class="key-concept">
  <h4>Structure of every driven first-order solution</h4>
  <p>Solutions split as (steady state) + (transient): a particular response to the drive, plus a decaying exponential that forgets the initial condition. The pattern — find equilibrium, watch exponentials relax toward it, with a characteristic time constant — recurs in circuits, thermal systems, chemical kinetics, and the damped oscillators of mechanics.</p>
</div>`,
        },
        {
          id: "direction-fields",
          title: "Direction Fields: Seeing Solutions Without Solving",
          content: `
<p>Most differential equations arising in real physics have no closed-form solution — and it barely matters, because an ODE can be <em>understood</em> without being solved. The equation dy/dt = f(t, y) assigns a slope to every point of the (t, y) plane. Draw a small dash with that slope at a grid of points and you have a <strong>direction field</strong> (slope field): a flow map that every solution curve must follow, like iron filings revealing a magnetic field.</p>
<p>To sketch a solution from initial condition y(0) = y₀, start there and go with the flow, always parallel to the local dashes. Different starting points give different curves; curves never cross (at any point, the equation permits only one slope).</p>
<p><strong>Worked example — reading a field.</strong> Consider the logistic equation for a population with limited resources:</p>
<p style="text-align:center;">dP/dt = kP(1 − P/K)</p>
<ol>
  <li><strong>Find the equilibria</strong> — where the slope is zero for all time: P = 0 and P = K. These are horizontal solution lines.</li>
  <li><strong>Sign-check between them:</strong> for 0 &lt; P &lt; K both factors are positive, so dP/dt &gt; 0 — arrows point up. For P &gt; K the second factor is negative — arrows point down.</li>
  <li><strong>Conclude the global story:</strong> every positive starting population flows toward P = K. So K is a <strong>stable</strong> equilibrium (flows converge on it), P = 0 <strong>unstable</strong> (flows leave it). Small populations grow almost exponentially, then saturate in an S-curve — all without solving anything.</li>
</ol>
<p>The same reasoning applied to the drag equation dv/dt = g − (b/m)v shows all solutions funnelling into v = mg/b: terminal velocity is a stable equilibrium, visible in the field before any integrating factor is deployed.</p>
<div class="analogy">
  <h3>A river's current</h3>
  <p>A direction field is the current of a river; solutions are the paths of leaves dropped onto the water. You may not be able to write a formula for a leaf's path, but the current map tells you every destination — which pools attract, which ridges repel.</p>
</div>
<div class="key-concept">
  <h4>Qualitative first, always</h4>
  <p>Before solving any ODE, ask: where are the equilibria, which are stable, what happens as t → ∞? This takes a minute and catches most algebra errors — a "solution" that disagrees with the direction field is wrong. Numerical solvers are the same idea made precise: Euler's method literally takes small steps along the field's dashes, and this is how spacecraft trajectories and climate models are actually computed.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does solving a first-order differential equation require an initial condition to pin down the answer?",
          options: [
            "Because differential equations always have exactly two solutions",
            "Because integration introduces an arbitrary constant, so the ODE alone gives a whole family of solutions",
            "Because the derivative is undefined at t = 0",
            "Because initial conditions make the equation linear",
          ],
          correctIndex: 1,
          explanation:
            "Undoing one derivative brings in one constant of integration: the general solution is a one-parameter family of curves. The initial condition selects the single member passing through the starting state. Physics reads this as determinism — the law (ODE) plus the initial state fix the entire future trajectory.",
        },
        {
          question:
            "A sample's radioactivity falls to 1/8 of its original level. How many half-lives have elapsed?",
          options: ["8", "4", "3", "16"],
          correctIndex: 2,
          explanation:
            "Each half-life halves what remains: 1/2 → 1/4 → 1/8 takes three halvings, so three half-lives. Algebraically, (1/2)ⁿ = 1/8 gives n = 3. The exponential N = N₀e^(−λt) never reaches zero — decay is proportional shrinkage per interval, the signature of dN/dt = −λN.",
        },
        {
          question:
            "In the drag equation m·dv/dt = mg − bv, terminal velocity can be found instantly, without solving the ODE, by:",
          options: [
            "setting dv/dt = 0 and solving mg − bv = 0 for v = mg/b",
            "setting v = 0 and solving for t",
            "integrating both sides with respect to time",
            "taking the limit b → 0",
          ],
          correctIndex: 0,
          explanation:
            "Terminal velocity is the equilibrium of the equation — the speed at which drag exactly balances weight so acceleration vanishes. Setting the derivative to zero finds it: v_term = mg/b. The full solution v = (mg/b)(1 − e^(−bt/m)) confirms that every solution relaxes exponentially toward this value with time constant m/b, but the equilibrium itself costs one line.",
        },
        {
          question:
            "In the logistic direction field for dP/dt = kP(1 − P/K), the equilibrium P = K is stable because:",
          options: [
            "the slope there is steepest",
            "populations cannot exceed K",
            "the equation has no other solutions",
            "slopes just below K point up and just above K point down, so nearby solutions converge onto it",
          ],
          correctIndex: 3,
          explanation:
            "Stability is read from the flow around the equilibrium: for P slightly below K, dP/dt > 0 (growth); slightly above, dP/dt < 0 (decline). Both push toward K. At P = 0 the flow points away — unstable. This sign analysis delivers the long-term fate of every starting condition without solving the ODE, which is the whole power of direction fields.",
        },
        {
          question:
            "The equations for a falling object with drag and a charging RC circuit have identical mathematical form. What is the RC circuit's analogue of terminal velocity?",
          options: [
            "Zero charge on the capacitor",
            "The fully charged state Q = CV, approached exponentially with time constant RC",
            "An infinite current at t = 0",
            "Oscillation of the charge about CV",
          ],
          correctIndex: 1,
          explanation:
            "Both are dy/dt + y/τ = constant: solutions relax exponentially to a steady state with a characteristic time constant. For the falling object, v → mg/b with τ = m/b; for the circuit, Q → CV with τ = RC. Same mathematics, different letters — recognizing shared equation structure across physical systems is one of the great efficiencies of physics.",
        },
      ],
    },
    {
      id: "parametric-polar",
      title: "Parametric & Polar",
      subtitle:
        "Curves as functions of time, polar coordinates, and vector-valued motion",
      sections: [
        {
          id: "parametric-curves",
          title: "Parametric Curves: Trajectories with a Clock",
          content: `
<p>A graph y = f(x) has a fatal limitation for physics: it says where the curve is, but not <em>when</em>. Real motion is a schedule — a position for every instant. A <strong>parametric curve</strong> supplies exactly that:</p>
<p style="text-align:center;">x = x(t),&nbsp;&nbsp;y = y(t)</p>
<p>As the parameter t (usually time) advances, the point (x(t), y(t)) traces the path. The same geometric curve can be traversed fast or slow, left or right, once or forever — the parametrization carries that extra information. A circle of radius R is x = R cos t, y = R sin t: as t runs from 0 to 2π the point makes one counterclockwise lap. Replace t by 2t and the same circle is traced twice as fast.</p>
<p><strong>Worked example — the projectile.</strong> Launch at speed v₀ and angle θ. Gravity acts only vertically, so the coordinates evolve independently:</p>
<p style="text-align:center;">x(t) = (v₀ cos θ)·t&nbsp;&nbsp;&nbsp;&nbsp;y(t) = (v₀ sin θ)·t − ½gt²</p>
<p>Uniform motion across, accelerated motion down — the whole insight of projectile physics is that the two components do not talk to each other, and parametric form makes the split explicit. To identify the shape, eliminate the parameter:</p>
<ol>
  <li>From the x-equation: t = x/(v₀ cos θ).</li>
  <li>Substitute into y: y = x tan θ − g·x²/(2v₀² cos²θ).</li>
</ol>
<p>y is a quadratic in x — the trajectory is a <strong>parabola</strong>, proved in two lines. But note what eliminating t threw away: the parabola alone cannot tell you when the ball passes any point, or how fast. Physics almost always keeps the parameter.</p>
<p>Slopes come from the chain rule. Since dy/dx = (dy/dt)/(dx/dt):</p>
<p style="text-align:center;">dy/dx = ẏ/ẋ</p>
<p>For the projectile at launch: ẏ/ẋ = (v₀ sin θ)/(v₀ cos θ) = tan θ — the initial slope is the launch angle, as it must be. At the peak, ẏ = 0 while ẋ ≠ 0: horizontal tangent, still moving.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A point on a rolling wheel's rim traces a cycloid — x = R(t − sin t), y = R(1 − cos t) — a curve with no simple y = f(x) form at all. It is also the solution to the brachistochrone problem (the fastest slide between two points), the puzzle that launched the calculus of variations and, eventually, the least-action formulation of mechanics.</p>
</div>`,
        },
        {
          id: "calculus-of-parametric",
          title: "Speed and Distance Along a Parametric Path",
          content: `
<p>With the clock restored, calculus on curves becomes kinematics. The rates ẋ = dx/dt and ẏ = dy/dt are the velocity components, and Pythagoras assembles them into <strong>speed</strong>:</p>
<p style="text-align:center; font-size:1.05em;">speed = √((dx/dt)² + (dy/dt)²)</p>
<p>Distance travelled is speed integrated over time — which is precisely the arc-length formula in parametric dress:</p>
<p style="text-align:center;"><strong>L = ∫ from t₁ to t₂ of √(ẋ² + ẏ²) dt</strong></p>
<p>(Substituting y = f(x), x = t recovers the ∫√(1 + (f′)²) dx version from the integration-applications chapter — same theorem, better costume.)</p>
<p><strong>Worked example — check on the circle.</strong> x = R cos t, y = R sin t, one lap (t from 0 to 2π):</p>
<ol>
  <li>ẋ = −R sin t, ẏ = R cos t.</li>
  <li>ẋ² + ẏ² = R² sin²t + R² cos²t = R² — the speed is the constant R.</li>
  <li>L = ∫ from 0 to 2π of R dt = <strong>2πR</strong>. The circumference formula, earned honestly.</li>
</ol>
<p>Constant speed on a circle: sin² + cos² = 1 is doing real physical work here, and the same identity will keep uniform circular motion "uniform" in the final section.</p>
<p><strong>Worked example — projectile speed.</strong> With ẋ = v₀ cos θ and ẏ = v₀ sin θ − gt:</p>
<ol>
  <li>speed(t) = √(v₀² cos²θ + (v₀ sin θ − gt)²).</li>
  <li>Minimum where the vertical component vanishes, t = v₀ sin θ/g — the top of the arc — where speed = v₀ cos θ, never zero. The ball is slowest, not stopped, at its peak.</li>
</ol>
<div class="key-concept">
  <h4>ds — the physicist's favourite infinitesimal</h4>
  <p>The slice of arc ds = (speed) dt is a workhorse of later physics: line integrals of force along a path (work), of charge along a wire (fields), of a magnetic field around a loop (Ampère's law) all sum contributions per ds. Multivariable calculus builds directly on this construction — meet it now and Subject 18 will feel familiar.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your GPS computes trip distance exactly this way: sampled positions give ẋ and ẏ numerically, and the receiver integrates √(ẋ² + ẏ²) dt. Every fitness tracker is quietly evaluating a parametric arc-length integral all day.</p>
</div>`,
        },
        {
          id: "polar-coordinates",
          title: "Polar Coordinates: Geometry for Orbits",
          content: `
<p>Cartesian coordinates answer "how far east, how far north?" — awkward questions for anything circling a centre. <strong>Polar coordinates</strong> ask the natural ones: how far from the origin (r), and in what direction (θ)? The dictionary between the systems:</p>
<p style="text-align:center;">x = r cos θ,&nbsp;&nbsp;y = r sin θ&nbsp;&nbsp;&nbsp;⟺&nbsp;&nbsp;&nbsp;r = √(x² + y²),&nbsp;&nbsp;tan θ = y/x</p>
<p>Curves become polar equations r = f(θ). The circle r = R is the simplest possible equation — that is the whole sales pitch. Other classics: r = 2a cos θ (a circle through the origin), r = a(1 + cos θ) (the heart-shaped cardioid), r = aθ (the Archimedean spiral). In Classical Mechanics I, planetary orbits will arrive as r = p/(1 + e cos θ) — an ellipse with the Sun at the focus, one line in polar, a mess in Cartesian.</p>
<p><strong>Area in polar.</strong> Slice a polar region into thin pie wedges rather than rectangles. A wedge of angle dθ is a sliver of a circle of radius r, so its area is (fraction of circle) × (circle area) = (dθ/2π)·πr² = ½r² dθ:</p>
<p style="text-align:center; font-size:1.05em;"><strong>A = ∫ ½ r² dθ</strong></p>
<p><strong>Worked example.</strong> Area enclosed by the cardioid r = a(1 + cos θ):</p>
<ol>
  <li>A = ½∫ from 0 to 2π of a²(1 + cos θ)² dθ = (a²/2)∫ (1 + 2cos θ + cos²θ) dθ.</li>
  <li>Over a full cycle: ∫1 dθ = 2π, ∫cos θ dθ = 0, ∫cos²θ dθ = π (average 1/2 — that fact again).</li>
  <li>A = (a²/2)(2π + 0 + π) = <strong>3πa²/2</strong>.</li>
</ol>
<div class="key-concept">
  <h4>Kepler's second law is a polar area integral</h4>
  <p>A planet's position vector sweeps area at the rate dA/dt = ½r²·(dθ/dt) — the wedge formula differentiated. Kepler observed that this rate is constant ("equal areas in equal times"); mechanics will show that ½r²(dθ/dt) being constant is precisely conservation of angular momentum, L = mr²(dθ/dt). A 17th-century observation about planets becomes one line of polar calculus.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Radar screens, hurricane maps, and antenna radiation patterns are all polar plots — any data naturally organized by "distance and bearing" lives in r and θ. Even the spiral arms of sunflower heads follow r = aθ√n patterns.</p>
</div>`,
        },
        {
          id: "vector-valued-motion",
          title: "Vector-Valued Functions: Motion in Full",
          content: `
<p>The final assembly. Package the coordinates into a single <strong>position vector</strong>:</p>
<p style="text-align:center;">r(t) = x(t) î + y(t) ĵ</p>
<p>where î and ĵ are unit vectors along the axes. Differentiation acts component by component, and the derivatives are the stars of mechanics:</p>
<ul>
  <li><strong>Velocity</strong> v(t) = dr/dt = ẋ î + ẏ ĵ — always tangent to the path; its magnitude is the speed.</li>
  <li><strong>Acceleration</strong> a(t) = dv/dt = ẍ î + ÿ ĵ — pointing wherever velocity is being pushed, often <em>not</em> along the path.</li>
</ul>
<p><strong>Worked example — uniform circular motion, the classic result.</strong> A particle circles at radius R with angular velocity ω: r(t) = R cos(ωt) î + R sin(ωt) ĵ.</p>
<ol>
  <li><strong>Velocity:</strong> v = −Rω sin(ωt) î + Rω cos(ωt) ĵ. Speed: |v| = Rω·√(sin² + cos²) = Rω, constant.</li>
  <li><strong>Check tangency:</strong> r·v = −R²ω sin cos + R²ω sin cos = 0 — velocity is perpendicular to the radius, i.e. tangent to the circle.</li>
  <li><strong>Acceleration:</strong> a = −Rω² cos(ωt) î − Rω² sin(ωt) ĵ = <strong>−ω² r(t)</strong>.</li>
</ol>
<p>Read that last line slowly: the acceleration points opposite to r — straight at the centre — with constant magnitude a = ω²R = (Rω)²/R = <strong>v²/R</strong>. This is centripetal acceleration, <em>derived in three lines of differentiation</em>. Constant speed with nonzero acceleration is no paradox: acceleration is the derivative of the velocity <em>vector</em>, and on a circle the vector's direction turns even while its length holds still.</p>
<div class="key-concept">
  <h4>You are now ready for mechanics</h4>
  <p>Every kinematics statement in Classical Mechanics I is one of these derivatives: v = dr/dt, a = dv/dt, and Newton's law F = m·d²r/dt² as a vector ODE. The circular-motion result powers orbits, and a = −ω²r is the harmonic oscillator equation appearing componentwise — circular motion viewed edge-on <em>is</em> simple harmonic motion. The toolkit of this subject is complete; the next subject starts using it on day one.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton's crucial insight about the Moon was exactly step 3 above run backwards: the Moon's circular path requires a centre-pointing acceleration v²/R ≈ 0.0027 m/s², which is g/3600 — and the Moon is 60 Earth-radii away, with 60² = 3600. Gravity weakening as 1/r² fit the sky, and vector calculus was the language the argument was written in.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A projectile follows x = (v₀ cos θ)t, y = (v₀ sin θ)t − ½gt². What information does this parametric form contain that the eliminated form y = x tan θ − gx²/(2v₀²cos²θ) lacks?",
          options: [
            "The shape of the trajectory",
            "The launch angle",
            "The timing — where the projectile is and how fast it moves at each instant",
            "The maximum height",
          ],
          correctIndex: 2,
          explanation:
            "Eliminating t collapses the schedule into a bare shape: the parabola says where the ball ever is, but not when, nor its velocity anywhere. Both forms share the shape, angle, and peak height; only the parametric form is a full kinematic record. That is why physics keeps the parameter — trajectories are schedules, not just curves.",
        },
        {
          question:
            "For a curve x(t), y(t), the distance travelled between t₁ and t₂ is ∫√(ẋ² + ẏ²) dt. Physically this integral is:",
          options: [
            "the average of the two velocity components",
            "the area swept out by the position vector",
            "displacement — the straight-line distance between endpoints",
            "the integral of the speed over time",
          ],
          correctIndex: 3,
          explanation:
            "√(ẋ² + ẏ²) is the speed (Pythagoras on the velocity components), so the integral is speed × time summed over the journey — exactly what an odometer records. Displacement, by contrast, only compares endpoints and is generally shorter. On a closed loop displacement is zero while the arc-length integral is the full lap.",
        },
        {
          question:
            "Why do planetary orbits practically demand polar coordinates?",
          options: [
            "An ellipse with a focus at the origin is the one-line equation r = p/(1 + e cos θ), and gravity's strength depends only on r",
            "Polar coordinates make all orbits circular",
            "Cartesian coordinates cannot describe ellipses",
            "The planets themselves move in the θ direction only",
          ],
          correctIndex: 0,
          explanation:
            "The Sun's pull depends only on distance r and points along it, and the orbit curve itself is a single polar equation with the Sun at the focus. Cartesian coordinates can describe ellipses, but a focus-centred ellipse is an ugly Cartesian expression — and the physics (a central force) singles out r and θ as the natural variables. Kepler's equal-area law is then just dA/dt = ½r²(dθ/dt) = constant.",
        },
        {
          question:
            "A particle moves in a circle at constant speed. Differentiating r(t) = R cos(ωt) î + R sin(ωt) ĵ twice shows its acceleration is:",
          options: [
            "zero, since the speed never changes",
            "directed at the centre with magnitude ω²R = v²/R",
            "tangent to the circle with magnitude ωR",
            "directed outward, away from the centre",
          ],
          correctIndex: 1,
          explanation:
            "Two derivatives give a = −ω²r(t): opposite to the position vector, hence centre-pointing, with constant magnitude ω²R = v²/R. Constant speed does not mean zero acceleration, because acceleration is the derivative of the velocity vector, and on a circle that vector continuously changes direction. This three-line derivation is the foundation of all orbital mechanics.",
        },
        {
          question:
            "The polar area element is ½r² dθ rather than r dθ or r² dθ. Where does the ½ come from?",
          options: [
            "It is the average of the sine over a quarter turn",
            "It compensates for double-counting overlapping wedges",
            "A thin wedge of angle dθ is the fraction dθ/2π of a full disk of area πr², giving (dθ/2π)·πr² = ½r² dθ",
            "It comes from differentiating r² by the power rule",
          ],
          correctIndex: 2,
          explanation:
            "Polar regions slice naturally into pie wedges, and a wedge of angle dθ is a proportional share of the full circle: (dθ/2π) × πr² = ½r² dθ — the same ½ as in a triangle's ½ × base × height, since a thin wedge is nearly a triangle with base r dθ and height r. Differentiated in time, ½r²(dθ/dt) is Kepler's areal sweep rate, constant for any central force.",
        },
      ],
    },
  ],
};
