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
          id: "landscapes-and-level-curves",
          title: "Landscapes, Level Curves & Level Surfaces",
          content: `
<p>Single-variable calculus studied functions like f(x) — one input, one output, a curve on a page. Physics rarely gets to be that simple. The temperature in your room depends on <em>where</em> you measure it: T(x, y, z), three inputs. The altitude of terrain is h(x, y). The electric potential around a charge is V(x, y, z). These are <strong>fields</strong> — a number attached to every point in space — and this subject is the calculus of fields.</p>
<p>How do you <em>see</em> a function of two variables? Two ways:</p>
<ul>
  <li><strong>As a surface.</strong> Plot z = f(x, y) and you get a landscape floating over the xy-plane. For f(x, y) = x² + y² it is a bowl (a paraboloid); for f(x, y) = x² − y² it is a saddle — uphill in one direction, downhill in the other.</li>
  <li><strong>As a contour map.</strong> Slice the landscape at constant heights and project the slices down. Each curve f(x, y) = c is a <strong>level curve</strong>. For the bowl, the level curves are concentric circles; hikers' maps draw exactly this. Where the contours crowd together, the terrain is steep — closely spaced level curves mean rapid change.</li>
</ul>
<p>With three inputs there is no room left to plot a graph, so the contour idea takes over completely: the sets T(x, y, z) = c are <strong>level surfaces</strong> — nested shells of constant temperature, like layers of an onion.</p>
<div class="key-concept">
  <h4>Physics already uses this language</h4>
  <p>The level surfaces of electric potential V are called <strong>equipotentials</strong>. Around a point charge they are concentric spheres; on a weather map, the level curves of pressure are isobars; on that hiking map, contour lines. Whenever you meet a "surface of constant something," you are looking at a level set of a field.</p>
</div>
<p>One more habit to build now: a function of two variables can change at a different rate in every direction you step. Standing on a hillside, walking north might take you uphill and walking east might keep you level. A single number can no longer be "the derivative" — we will need a derivative per direction, and then one clever vector that encodes them all. That vector, the gradient, is the star of this chapter.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Contour maps predate calculus applications by centuries — depth contours (isobaths) appeared on Dutch river charts in the 1580s. The idea of packing an entire third dimension into curves on a flat page is one of humanity's great visualization tricks.</p>
</div>`,
        },
        {
          id: "partial-derivatives",
          title: "Partial Derivatives: Freeze and Differentiate",
          content: `
<p>The fix for "a different rate in every direction" starts with the two simplest directions. Stand at (x, y) and step purely east — y frozen — and the rate of change is the <strong>partial derivative with respect to x</strong>:</p>
<p style="text-align:center;">∂f/∂x = rate of change of f as x varies, <em>holding y constant</em></p>
<p>The curly ∂ (say "partial") is a flag: other variables exist, and they are being held still. Computing partials requires nothing new — treat every frozen variable as a constant and differentiate as usual.</p>
<p><strong>Worked example.</strong> Let f(x, y) = x²y + sin y.</p>
<ol>
  <li>∂f/∂x: treat y as a constant. The x²y term gives 2xy; sin y is a constant and dies. So ∂f/∂x = 2xy.</li>
  <li>∂f/∂y: treat x as a constant. The x²y term gives x²; sin y gives cos y. So ∂f/∂y = x² + cos y.</li>
</ol>
<p>Second partials come in four flavors: ∂²f/∂x², ∂²f/∂y², and the two <strong>mixed partials</strong> ∂²f/∂x∂y and ∂²f/∂y∂x. Check them for the example: differentiating 2xy by y gives 2x, and differentiating x² + cos y by x also gives 2x. That is no accident:</p>
<div class="key-concept">
  <h4>Clairaut's theorem</h4>
  <p>For any smooth function, the mixed partials are equal: ∂²f/∂x∂y = ∂²f/∂y∂x. Differentiation order doesn't matter. This innocent-looking symmetry will return with force: it is the test for conservative fields later in this subject, and it generates the Maxwell relations of thermodynamics.</p>
</div>
<p>Physics is saturated with partial derivatives, and you have already met them in disguise. Subject 12's gas laws were partial-derivative statements: the pressure law measured ∂P/∂T with V held constant; Boyle's experiment probed ∂P/∂V with T held constant. Thermodynamics even decorates its partials with subscripts — (∂P/∂T)<sub>V</sub> — to advertise what is being frozen, because for a gas it matters enormously.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The wave equation you met in Subject 11 — and every fundamental equation to come, from Maxwell to Schrödinger — is a <em>partial differential equation</em>: a law relating the partial derivatives of a field in space and time. As of today, this notation is the native language of physical law.</p>
</div>`,
        },
        {
          id: "the-gradient",
          title: "The Gradient: One Vector to Rule Every Direction",
          content: `
<p>Partials handle east and north. What about north-east, or any bearing whatsoever? Package the partials into a vector, the <strong>gradient</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)</strong></p>
<p>The symbol ∇ ("del" or "nabla") is the machine of this whole subject — feed it a scalar field, get a vector field. The payoff is the <strong>directional derivative</strong>: the rate of change of f as you walk in the direction of a unit vector û is simply</p>
<p style="text-align:center;">D<sub>û</sub>f = ∇f · û</p>
<p>One dot product now answers "how fast does f change?" for <em>every</em> direction at once. And the dot product's geometry (Subject 5) immediately yields three famous facts:</p>
<ul>
  <li><strong>∇f points in the direction of steepest ascent.</strong> The dot product ∇f · û is largest when û is parallel to ∇f.</li>
  <li><strong>|∇f| is the steepest rate.</strong> Walking straight up the gradient, f climbs at |∇f| per unit distance.</li>
  <li><strong>∇f is perpendicular to level curves.</strong> Step along a level curve and f doesn't change, so ∇f · (tangent direction) = 0. The gradient must cross the contours at right angles — steepest ascent is perpendicular to "flat."</li>
</ul>
<p><strong>Worked example.</strong> Let T(x, y) = 100 − x² − 2y² (a warm spot at the origin, cooling outward in elliptical contours). At the point (1, 1): ∇T = (−2x, −4y) = (−2, −4). The fastest way to warm up is to walk in the direction (−2, −4) — toward the origin, but tilted, because temperature falls twice as fast in y. The warming rate that way is |∇T| = √(4 + 16) = √20 ≈ 4.5 degrees per meter. Due east instead? D = (−2, −4)·(1, 0) = −2: cooling.</p>
<div class="analogy">
  <h3>Analogy: The Fall Line</h3>
  <p>Skiers know the "fall line" — the direction a ball would roll, straight down the slope, always perpendicular to the contour lines. That is −∇h in action. Water, skiers, and marbles all follow the negative gradient of altitude.</p>
</div>
<div class="key-concept">
  <h4>The electromagnetic preview</h4>
  <p>In Subject 19 the electric field will be defined as E = −∇V: the field points down the steepest slope of potential, perpendicular to the equipotential surfaces. Every fact you just learned about gradients and level curves is a fact about field lines and equipotentials, one subject early.</p>
</div>`,
        },
        {
          id: "chain-rule-and-differentials",
          title: "The Chain Rule & Differentials: Motion Through a Field",
          content: `
<p>Now put the pieces in motion. Suppose f depends on x and y, and both are changing — you are moving through the field along a path (x(t), y(t)). How fast does f change <em>for you</em>? Each variable contributes its own effect, and they add:</p>
<p style="text-align:center; font-size:1.1em;">df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt) = <strong>∇f · v</strong></p>
<p>The multivariable <strong>chain rule</strong> is a dot product: your rate of change equals the gradient dotted with your velocity. It is beautifully sensible — move fast up a steep slope and f changes quickly; move along a level curve (v ⊥ ∇f) and f doesn't change at all, however fast you go.</p>
<p><strong>Worked example.</strong> A drone flies through air with temperature gradient ∇T = (3, −1) °C/m at its location, moving with velocity v = (2, 4) m/s. Its thermometer reads a change of dT/dt = 3×2 + (−1)×4 = <strong>2 °C per second</strong> — even though the temperature field itself is steady. Change can come from moving through a field, not just from the field changing. (Fluid dynamics builds its "material derivative" on exactly this idea.)</p>
<p>Freeze the "per time" and you get the <strong>total differential</strong> — the master formula for small changes:</p>
<p style="text-align:center;">df = (∂f/∂x) dx + (∂f/∂y) dy</p>
<p>It says a smooth function is locally <em>linear</em>: zoom in far enough and every landscape is a tilted plane, with the partials as its two slopes. This is the multivariable version of "the tangent line approximation," and it runs all of error analysis.</p>
<p><strong>Worked example — error propagation.</strong> A cylinder has V = πr²h. Then dV = 2πrh dr + πr² dh, and dividing by V gives the professional's form:</p>
<p style="text-align:center;">dV/V = 2(dr/r) + dh/h</p>
<p>Measure the radius to 1% and the height to 1%, and the volume is uncertain by about 3% — the radius counts double because it enters squared. One line of differentials replaces pages of arithmetic.</p>
<div class="key-concept">
  <h4>Why this matters ahead</h4>
  <p>Thermodynamics runs on differentials: dU = T dS − P dV is the first law written in this notation, and comparing it with dU = (∂U/∂S) dS + (∂U/∂V) dV is how the subject extracts physics from partial derivatives. Learn the grammar now; Phase 5 speaks it fluently.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "For f(x, y) = x³y² + y, what is the partial derivative ∂f/∂x?",
          options: ["x³ · 2y + 1", "3x²y² + 1", "3x²y²", "3x² + 2y"],
          correctIndex: 2,
          explanation:
            "To take ∂f/∂x, treat y as a frozen constant. The term x³y² differentiates to 3x²y² (y² just rides along as a constant factor), and the lone y term is a constant with respect to x, so it contributes nothing. Options with '+1' mistakenly differentiate y as if it were the variable.",
        },
        {
          question:
            "At a point on a hillside, the gradient ∇h of the altitude function points:",
          options: [
            "in the direction of steepest ascent, perpendicular to the level curve through that point",
            "along the level curve, since that is the natural path",
            "in the direction of steepest descent",
            "always toward the summit of the hill",
          ],
          correctIndex: 0,
          explanation:
            "The directional derivative ∇h · û is maximized when û is parallel to ∇h, so the gradient marks steepest ascent; and since altitude doesn't change along a level curve, ∇h must be perpendicular to it. It points up the local slope — which is not necessarily toward the summit, as anyone who has climbed a winding ridge knows.",
        },
        {
          question:
            "At some point, ∇f = (3, 4). What is the maximum possible rate of change of f there, over all directions?",
          options: ["3", "4", "7", "5"],
          correctIndex: 3,
          explanation:
            "The rate of change in direction û is ∇f · û, which is greatest when û points along ∇f, giving |∇f| = √(3² + 4²) = 5. The components 3 and 4 are just the rates in the pure x and y directions; the best direction beats both. Adding them to get 7 double-counts — the dot product with a unit vector can never exceed |∇f|.",
        },
        {
          question:
            "A probe moves with velocity v through a steady temperature field T(x, y). The temperature it measures changes at the rate dT/dt = ∇T · v. When is this zero even though the probe is moving and ∇T ≠ 0?",
          options: [
            "Never — a moving probe in a nonuniform field must record change",
            "When the probe moves perpendicular to ∇T, i.e. along a level curve of T",
            "When the probe moves parallel to ∇T",
            "Only when the probe moves infinitely slowly",
          ],
          correctIndex: 1,
          explanation:
            "The chain rule dT/dt = ∇T · v vanishes when v is perpendicular to the gradient — which is exactly the direction of the level curve (isotherm). Moving along a contour, you stay at constant temperature no matter your speed. Moving parallel to ∇T maximizes the change instead.",
        },
        {
          question:
            "A rectangular plate has area A = xy with x ≈ 10 cm and y ≈ 5 cm. Using differentials, estimate the change in A if x increases by 0.1 cm and y decreases by 0.1 cm.",
          options: ["+1.5 cm²", "0 — the changes cancel", "−0.5 cm²", "+0.5 cm²"],
          correctIndex: 2,
          explanation:
            "dA = (∂A/∂x)dx + (∂A/∂y)dy = y·dx + x·dy = 5(0.1) + 10(−0.1) = 0.5 − 1.0 = −0.5 cm². The changes don't cancel because the area is more sensitive to the longer side's partner: a change in y is multiplied by x = 10, while a change in x is multiplied by only y = 5.",
        },
      ],
    },
    {
      id: "optimization-lagrange-multipliers",
      title: "Optimization & Lagrange Multipliers",
      subtitle:
        "Critical points and constrained optimization — a technique statistical mechanics will need again",
      sections: [
        {
          id: "critical-points",
          title: "Critical Points: Where the Landscape Flattens",
          content: `
<p>In one variable, extrema hide where f′(x) = 0. The multivariable version is the same idea with the gradient: at a peak or a valley bottom, the landscape is momentarily flat in <em>every</em> direction, so every directional derivative vanishes — which happens exactly when</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇f = 0</strong>&nbsp;&nbsp;(all partial derivatives zero simultaneously)</p>
<p>Such a point is a <strong>critical point</strong>. But two dimensions offer a possibility one dimension never could. Besides local maxima (hilltops) and local minima (valley floors), there are <strong>saddle points</strong>: uphill along one axis, downhill along another, like a mountain pass — or a horse's saddle, rising toward pommel and cantle, falling toward the stirrups. The simplest specimen is f(x, y) = x² − y² at the origin: a minimum if you approach along the x-axis, a maximum along the y-axis, an extremum in no honest sense.</p>
<p><strong>Worked example.</strong> Find the critical points of f(x, y) = x³ − 3x + y².</p>
<ol>
  <li>∂f/∂x = 3x² − 3 = 0 → x = 1 or x = −1.</li>
  <li>∂f/∂y = 2y = 0 → y = 0.</li>
  <li>Both must vanish at once, so the critical points are <strong>(1, 0)</strong> and <strong>(−1, 0)</strong>.</li>
</ol>
<p>Which is which — peak, pit, or pass? Eyeballing the formula only goes so far; the next section builds the systematic test. But notice already why physics cares:</p>
<div class="key-concept">
  <h4>Equilibrium = critical point of potential energy</h4>
  <p>Subject 6 taught that force is the negative slope of potential energy. In field language: F = −∇U. A particle sits in equilibrium precisely where ∇U = 0 — a critical point of the energy landscape. Minima are stable (a marble in a bowl), maxima unstable (a marble on a dome), and saddles are unstable in the sneaky way: stable against some nudges, doomed against others.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Lagrange points of the Sun–Earth system — where the James Webb Space Telescope parks — are critical points of an effective potential. L1 and L2 are saddle points: JWST is stable against sideways drift but must burn a little fuel regularly to avoid sliding off along the unstable direction.</p>
</div>`,
        },
        {
          id: "second-derivative-test",
          title: "Peak, Pit, or Pass: The Second-Derivative Test",
          content: `
<p>In one variable, the sign of f″ settled everything. In two variables there are three second partials — f<sub>xx</sub>, f<sub>yy</sub>, and the mixed f<sub>xy</sub> — and the classification hangs on a single combination of them, the <strong>discriminant</strong> (the determinant of the matrix of second partials, the <em>Hessian</em>):</p>
<p style="text-align:center; font-size:1.1em;"><strong>D = f<sub>xx</sub> f<sub>yy</sub> − (f<sub>xy</sub>)²</strong></p>
<p>At a critical point:</p>
<table>
  <thead>
    <tr><th>Condition</th><th>Verdict</th></tr>
  </thead>
  <tbody>
    <tr><td>D &gt; 0 and f<sub>xx</sub> &gt; 0</td><td>Local <strong>minimum</strong> (curves up both ways)</td></tr>
    <tr><td>D &gt; 0 and f<sub>xx</sub> &lt; 0</td><td>Local <strong>maximum</strong> (curves down both ways)</td></tr>
    <tr><td>D &lt; 0</td><td><strong>Saddle point</strong></td></tr>
    <tr><td>D = 0</td><td>Test is silent — investigate by hand</td></tr>
  </tbody>
</table>
<p>The logic: D &gt; 0 forces f<sub>xx</sub> and f<sub>yy</sub> to share a sign and guarantees the mixed term can't sabotage them — the surface curves the same way in all directions. D &lt; 0 means the curvatures genuinely disagree somewhere: a pass.</p>
<p><strong>Worked example, continued.</strong> For f = x³ − 3x + y²: f<sub>xx</sub> = 6x, f<sub>yy</sub> = 2, f<sub>xy</sub> = 0, so D = 12x.</p>
<ul>
  <li>At (1, 0): D = 12 &gt; 0 and f<sub>xx</sub> = 6 &gt; 0 → <strong>local minimum</strong>, value f = 1 − 3 = −2.</li>
  <li>At (−1, 0): D = −12 &lt; 0 → <strong>saddle point</strong>. Along the x-axis it is a local max of the cubic; in y it curves up. A pass.</li>
</ul>
<p>Why can't we ignore f<sub>xy</sub>? Consider f = x² + 10xy + y²: both pure partials say "curving up" (f<sub>xx</sub> = f<sub>yy</sub> = 2), yet D = 4 − 100 &lt; 0 — a saddle. Along the line y = −x the cross-term drags the function down. The axes alone never tell the whole story; the discriminant does.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Saddle points, not minima, are often the interesting physics. A chemical reaction proceeds through the "transition state" — the saddle point of the molecular energy landscape between reactants and products — and the saddle's height <em>is</em> the activation energy that controls the reaction rate.</p>
</div>`,
        },
        {
          id: "lagrange-multipliers",
          title: "Lagrange Multipliers: Optimizing on a Leash",
          content: `
<p>Real optimization problems almost never let you roam freely. Maximize area <em>for a fixed perimeter</em>. Maximize entropy <em>for a fixed energy</em>. Minimize cost <em>subject to a budget</em>. The pattern: optimize f(x, y) while constrained to the curve g(x, y) = c.</p>
<p>Here is the geometric insight, and it is genuinely beautiful. Walk along the constraint curve, watching the level curves of f go by like contour lines. As long as your path <em>crosses</em> contours, f is still changing — you can do better by continuing. The optimum arrives exactly where the constraint curve <strong>touches a level curve tangentially</strong>: grazing it, not crossing. And two curves tangent at a point have parallel normals — their gradients line up:</p>
<p style="text-align:center; font-size:1.15em;"><strong>∇f = λ∇g</strong>&nbsp;&nbsp;together with&nbsp;&nbsp;g = c</p>
<p>The number λ (the <strong>Lagrange multiplier</strong>) is the proportionality factor between the two gradients. Unknowns x, y, λ; equations three (two components plus the constraint). Solve the system and the candidates fall out — no parametrizing the constraint, no messy substitution.</p>
<p><strong>Worked example.</strong> What rectangle of perimeter 40 has the greatest area? Maximize f = xy subject to g = x + y = 20 (half the perimeter).</p>
<ol>
  <li>∇f = (y, x) and ∇g = (1, 1), so ∇f = λ∇g reads: y = λ and x = λ.</li>
  <li>Therefore x = y — the tangency condition alone announces a square.</li>
  <li>The constraint gives x = y = 10: a 10 × 10 square, area 100. Any lopsided rectangle of the same perimeter does worse (19 × 1 manages only 19).</li>
</ol>
<div class="key-concept">
  <h4>What λ means</h4>
  <p>The multiplier is not just scaffolding: λ equals df/dc, the rate at which the optimal value improves if the constraint is loosened. Economists call it the shadow price. Physics goes further — when statistical mechanics maximizes entropy at fixed energy, the multiplier on energy turns out to be 1/T. Temperature itself enters physics as a Lagrange multiplier.</p>
</div>
<p>The method scales effortlessly: three variables, or two constraints with two multipliers (∇f = λ∇g + μ∇h). The recipe never changes — set the gradient of the objective parallel to the gradients of the leashes, and solve.</p>`,
        },
        {
          id: "optimization-in-physics",
          title: "Why Physics Optimizes: From Soap Films to Boltzmann",
          content: `
<p>Optimization is not a mere application of calculus to physics — much of physics <em>is</em> optimization, and it is worth seeing the pattern before Phase 5 exploits it.</p>
<ul>
  <li><strong>Statics:</strong> a hanging chain, a soap film on a wire loop, a droplet — each settles into the shape minimizing its energy (for the droplet, surface energy, hence a sphere: least area for the volume, a constrained optimization solved by nature).</li>
  <li><strong>Optics:</strong> Fermat's principle (Subject 10) — light takes the path of least time. Snell's law is its Lagrange condition.</li>
  <li><strong>Mechanics:</strong> Subject 17's action principle — trajectories make the action stationary. "Stationary," note, not always minimal: nature is happy with saddle points.</li>
  <li><strong>Data:</strong> fitting a line by least squares means minimizing a sum of squared errors over the slope and intercept — a two-variable critical-point problem, solved by setting two partials to zero. Every lab course you take runs on it.</li>
</ul>
<p>And the headline act, promised by this chapter's subtitle. Statistical mechanics (Subject 28) will ask: among all ways of distributing N molecules over energy levels, which is overwhelmingly most likely? Answer: the one that <strong>maximizes entropy subject to two constraints</strong> — fixed particle number and fixed total energy. Two constraints, two multipliers. Turning the crank of ∇S = λ∇N + μ∇E yields the <strong>Boltzmann distribution</strong>: the probability of a state falls exponentially with its energy, P ∝ e<sup>−E/kT</sup>. The multiplier attached to the energy constraint is, up to a constant, 1/T.</p>
<div class="key-concept">
  <h4>Remember this moment</h4>
  <p>The most important distribution in thermal physics is not an experimental fit or a lucky guess — it is the output of a Lagrange-multiplier calculation you can already set up. When you meet it again, the mathematics will be an old friend.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Joseph-Louis Lagrange introduced multipliers in his 1788 <em>Mécanique analytique</em>, a mechanics book famously containing not a single diagram — he boasted of it in the preface. He invented the method to handle constrained motion: beads on wires, pendulums on rods. The technique physics leans on for entropy was born in mechanics from the start.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What condition identifies a critical point of a function f(x, y)?",
          options: [
            "f(x, y) = 0 at the point",
            "Both partial derivatives vanish simultaneously: ∇f = 0",
            "The discriminant D = f_xx f_yy − (f_xy)² equals zero",
            "∂f/∂x = 0, whatever ∂f/∂y is doing",
          ],
          correctIndex: 1,
          explanation:
            "At a hilltop, valley floor, or mountain pass the landscape is momentarily flat in every direction, which requires every directional derivative ∇f·û to vanish — and that happens exactly when the whole gradient is zero, i.e. BOTH partials at once. One partial vanishing only flattens one direction. The value of f itself is irrelevant, and the discriminant D is the follow-up tool that classifies a critical point after it has been found.",
        },
        {
          question:
            "At a critical point, f_xx = 4, f_yy = 1, and f_xy = 3. What does the second-derivative test conclude?",
          options: [
            "Local minimum, since f_xx > 0 and f_yy > 0",
            "Local maximum, since D > 0",
            "The test is inconclusive",
            "Saddle point, since D = 4·1 − 3² = −5 < 0",
          ],
          correctIndex: 3,
          explanation:
            "The discriminant is D = f_xx f_yy − (f_xy)² = 4 − 9 = −5 < 0: a saddle point. Both pure second partials being positive is NOT enough — the large mixed partial means the surface dives downward along some diagonal direction. This is exactly why the test uses D and not the signs of f_xx and f_yy alone.",
        },
        {
          question:
            "In the method of Lagrange multipliers, the condition ∇f = λ∇g expresses which geometric fact about the optimum?",
          options: [
            "The level curve of f through the optimal point is tangent to the constraint curve g = c",
            "The constraint curve passes through a critical point of f",
            "f and g have equal values at the optimum",
            "The gradient of f vanishes on the constraint",
          ],
          correctIndex: 0,
          explanation:
            "If the constraint curve crossed a level curve of f, you could slide along the constraint and still improve f. At the constrained optimum the two curves merely graze — they are tangent — so their normal vectors (the gradients) are parallel: ∇f = λ∇g. Note that ∇f itself need not vanish; the unconstrained peak usually lies off the leash entirely.",
        },
        {
          question:
            "Maximize f = xy subject to x + y = 8 using Lagrange multipliers. The maximum value is:",
          options: ["8", "12", "16", "64"],
          correctIndex: 2,
          explanation:
            "∇f = (y, x) and ∇g = (1, 1), so y = λ and x = λ, forcing x = y. The constraint then gives x = y = 4, and f = 4 × 4 = 16. Symmetric problems love symmetric answers: among all pairs with a fixed sum, the equal pair has the greatest product — the same reason a square maximizes area for a given perimeter.",
        },
        {
          question:
            "When statistical mechanics derives the Boltzmann distribution, what plays the role of the function being maximized, and what are the constraints?",
          options: [
            "Energy is maximized subject to fixed entropy",
            "Entropy is maximized subject to fixed particle number and fixed total energy",
            "Temperature is maximized subject to fixed pressure",
            "Particle number is maximized subject to fixed volume",
          ],
          correctIndex: 1,
          explanation:
            "The most probable arrangement of molecules is the one maximizing entropy, but nature holds the system to its actual particle count and energy budget — two constraints, handled by two Lagrange multipliers. The multiplier attached to energy turns out to be 1/kT: temperature enters the theory as a Lagrange multiplier, one of the deepest punchlines in physics.",
        },
      ],
    },
    {
      id: "multiple-integrals",
      title: "Multiple Integrals",
      subtitle:
        "Double and triple integrals, Jacobians, and the coordinate systems physics lives in",
      sections: [
        {
          id: "double-integrals",
          title: "Double Integrals: Adding Up a Region",
          content: `
<p>A single integral adds up contributions along a line. Physics constantly needs to add up contributions over an <em>area</em> or a <em>volume</em>: the total charge on a plate, the mass of a lake, the force of water pressure on a dam. Enter the <strong>double integral</strong>:</p>
<p style="text-align:center; font-size:1.1em;">∫∫<sub>R</sub> f(x, y) dA</p>
<p>The recipe behind the symbol: chop the region R into tiny patches of area dA, multiply each patch by the local value of f, add everything, and take the limit of fine chopping. If f is a surface height, the double integral is the volume under the surface; if f is a mass per unit area, it is the total mass; if f = 1, it is simply the area of R.</p>
<p>Computing one is two ordinary integrals nested — an <strong>iterated integral</strong>: integrate along strips, then add up the strips.</p>
<p><strong>Worked example.</strong> A 2 m × 1 m rectangular plate (0 ≤ x ≤ 2, 0 ≤ y ≤ 1) has surface density σ(x, y) = 6xy² kg/m². Total mass:</p>
<ol>
  <li>Inner integral (a strip at fixed x): ∫₀¹ 6xy² dy = 6x · (1/3) = 2x.</li>
  <li>Outer integral (add the strips): ∫₀² 2x dx = 4. Mass = <strong>4 kg</strong>.</li>
</ol>
<p>For rectangles the order of integration is a free choice. For curvy regions the <em>limits</em> do the geometric work: over the triangle with vertices (0,0), (1,0), (1,1), the strips at fixed x run from y = 0 up to y = x, so the inner limits are functions: ∫₀¹ ∫₀ˣ … dy dx. Drawing the region first is not optional decoration — it is how the limits are found, and swapping the order (sometimes essential when one order is impossible to integrate) means re-describing the same region with the other variable outside.</p>
<div class="key-concept">
  <h4>The physics template</h4>
  <p>Almost every field calculation to come has the shape "total = ∫∫ (density of something) dA." Total charge Q = ∫∫ σ dA will feed directly into the fields of charged plates and disks in Subject 19. The art is never the integration — it is describing the region and choosing coordinates, which is where the next section comes in.</p>
</div>`,
        },
        {
          id: "polar-coordinates-and-jacobians",
          title: "Polar Coordinates & the Jacobian: dA = r dr dθ",
          content: `
<p>Try integrating over a disk in x and y and the limits sprout square roots: y runs from −√(R² − x²) to +√(R² − x²). Misery. The disk is begging for <strong>polar coordinates</strong> (r, θ) — but changing coordinates inside a double integral demands one crucial correction.</p>
<p>Chop the plane along lines of constant r and constant θ. Each little patch is nearly a rectangle with sides dr (radially) and <strong>r dθ</strong> (sideways — an arc of radius r spanning angle dθ). Its area is therefore:</p>
<p style="text-align:center; font-size:1.15em;"><strong>dA = r dr dθ</strong></p>
<p>Not dr dθ. The extra factor r is geometry, not decoration: patches far from the origin are wider, and forgetting the r silently shrinks them all to equal size — the single most common error in the subject.</p>
<p><strong>Worked example.</strong> Mass of a disk of radius R whose density grows linearly from the center, σ = kr:</p>
<p style="text-align:center;">M = ∫₀<sup>2π</sup>∫₀<sup>R</sup> (kr) · r dr dθ = 2πk · R³/3</p>
<p>Two clean integrals; no square roots anywhere. Matching the coordinates to the symmetry is the whole game.</p>
<p>The factor r is one instance of a general machine. Any change of coordinates (u, v) → (x, y) stretches little patches by a local factor called the <strong>Jacobian</strong> — the determinant |∂(x, y)/∂(u, v)| built from the four partials ∂x/∂u, ∂x/∂v, ∂y/∂u, ∂y/∂v. The rule is always:</p>
<p style="text-align:center;">dA = |Jacobian| du dv</p>
<p>For polar coordinates the determinant works out to exactly r. The Jacobian is the exchange rate between coordinate space and real space, and every coordinate system you will ever use — cylindrical, spherical, or something exotic — comes with one.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The most famous integral in physics, ∫e<sup>−x²</sup>dx over the whole line, has no elementary antiderivative — yet its value is exactly √π. The trick: square the integral to get ∫∫e<sup>−(x²+y²)</sup>dA over the whole plane, switch to polar, and the Jacobian's r makes the integrand r·e<sup>−r²</sup> — suddenly integrable, giving π. This Gaussian integral underlies the Maxwell–Boltzmann distribution, quantum mechanics, and all of statistics.</p>
</div>`,
        },
        {
          id: "triple-integrals-cylindrical",
          title: "Triple Integrals & Cylindrical Coordinates",
          content: `
<p>One more dimension and the story repeats: to total up anything spread through a solid — mass, charge, energy — chop the solid into boxes dV, multiply by the local density, and sum:</p>
<p style="text-align:center; font-size:1.1em;">Total = ∫∫∫ (density) dV,&nbsp;&nbsp;with dV = dx dy dz</p>
<p>Three nested integrals, innermost limits possibly depending on the outer variables, exactly as before. And exactly as before, Cartesian boxes are the wrong tool for round objects — and physics is full of round objects: wires, pipes, beams, planets, atoms.</p>
<p>For anything with an axis, use <strong>cylindrical coordinates</strong> (r, θ, z): polar coordinates in the horizontal plane, plus ordinary height z. The volume element inherits polar's stretch factor:</p>
<p style="text-align:center; font-size:1.15em;"><strong>dV = r dr dθ dz</strong></p>
<p><strong>Worked example — a real one from mechanics.</strong> The moment of inertia of a solid cylinder (mass M, radius R, height h) about its axis is I = ∫ r² dm — Subject 8 quoted the answer; now we can earn it. With uniform density d = M/(πR²h) and dm = d·dV:</p>
<ol>
  <li>I = ∫₀<sup>h</sup>∫₀<sup>2π</sup>∫₀<sup>R</sup> r² · d · r dr dθ dz — note r² from physics, r from the Jacobian.</li>
  <li>The r-integral: ∫₀<sup>R</sup> r³ dr = R⁴/4. The θ and z integrals contribute 2π and h.</li>
  <li>I = d · 2πh · R⁴/4 = [M/(πR²h)] · πhR⁴/2 = <strong>½MR²</strong>.</li>
</ol>
<p>The mysterious ½ from the rotation chapter was a triple integral all along. Every entry in that old table of moments of inertia — ⅖MR² for a sphere, ⅓ML² for a rod — is an afternoon's exercise now.</p>
<div class="key-concept">
  <h4>Choosing coordinates is physics</h4>
  <p>In Subject 19 you will compute the electric field of charged wires and cylinders, where charge density and field depend only on r. Cylindrical coordinates turn those problems from impossible to easy — and the r dr dθ dz element is the ticket. Symmetry first, coordinates to match, then integrate: that is the professional order of operations.</p>
</div>`,
        },
        {
          id: "spherical-coordinates",
          title: "Spherical Coordinates: The Physics Workhorse",
          content: `
<p>For anything centered on a point — planets, stars, atoms, point charges — the right coordinates are <strong>spherical</strong>: ρ, the distance from the origin; φ, the polar angle down from the positive z-axis (0 at the north pole, π at the south); and θ, the azimuthal angle around the axis, same as in cylindrical. (Warning for later: many physics texts swap the names θ and φ. The geometry is identical; check each book's convention.)</p>
<p>The volume element takes one minute of geometry to build honestly. A small coordinate box has three edges:</p>
<ul>
  <li>radially outward: length dρ</li>
  <li>along a meridian (changing φ): an arc of radius ρ, length ρ dφ</li>
  <li>around the axis (changing θ): an arc of radius ρ sin φ — the distance to the <em>axis</em>, smaller near the poles — so length ρ sin φ dθ</li>
</ul>
<p>Multiply the three edges:</p>
<p style="text-align:center; font-size:1.15em;"><strong>dV = ρ² sin φ dρ dφ dθ</strong></p>
<p>That ρ² sin φ is the spherical Jacobian, and it encodes real geometry: shells far from the origin hold more volume (ρ²), and bands near the equator hold more than bands near the poles (sin φ).</p>
<p><strong>Worked example.</strong> The volume of a sphere of radius R, in three clean strokes:</p>
<ol>
  <li>∫₀<sup>R</sup> ρ² dρ = R³/3</li>
  <li>∫₀<sup>π</sup> sin φ dφ = 2</li>
  <li>∫₀<sup>2π</sup> dθ = 2π</li>
</ol>
<p style="text-align:center;">V = (R³/3)(2)(2π) = <strong>4πR³/3</strong></p>
<p>Archimedes needed a lifetime of genius for that result; spherical coordinates make it a warm-up. For spherically symmetric densities the same trick collapses further: dV becomes shells of volume 4πρ² dρ, and total mass is a single integral ∫ d(ρ)·4πρ² dρ.</p>
<div class="key-concept">
  <h4>Where you will live in these coordinates</h4>
  <p>Gauss's law calculations for point charges and charged spheres (Subject 19), gravitational fields of planets, and — spectacularly — the hydrogen atom (Phase 5), whose electron orbitals are labeled by exactly these coordinates: s, p, d orbitals are patterns in ρ, φ, θ. The ρ² sin φ element will appear in every normalization integral of quantum mechanics.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A flat plate occupies a region R and has surface charge density σ(x, y). What does ∫∫_R σ dA represent?",
          options: [
            "The average charge density on the plate",
            "The electric field of the plate",
            "The area of the plate",
            "The total charge on the plate",
          ],
          correctIndex: 3,
          explanation:
            "Each patch contributes its density times its area, σ dA — a little piece of charge — and the double integral sums them all: total charge Q. The area alone would be ∫∫ 1 dA, and the average density would be Q divided by that area. This 'total = ∫∫ density' template is the workhorse of continuous charge distributions in electromagnetism.",
        },
        {
          question:
            "Why is the polar-coordinate area element r dr dθ rather than just dr dθ?",
          options: [
            "A coordinate patch at radius r has width r dθ, so patches farther from the origin are genuinely larger",
            "It is a convention chosen to make circles easier",
            "Because θ is measured in radians rather than degrees",
            "The r compensates for the density of the object being integrated",
          ],
          correctIndex: 0,
          explanation:
            "Lines of constant θ separated by dθ spread apart as you move outward: at radius r, the sideways edge of a coordinate patch is an arc of length r dθ, so the patch's area is (dr)(r dθ). The factor r is the Jacobian of the polar map — real geometry, independent of what is being integrated. Dropping it treats a patch near the origin and a patch far away as equal in area, which they are not.",
        },
        {
          question:
            "In a change of variables from (u, v) to (x, y), the Jacobian determinant tells you:",
          options: [
            "the direction of steepest ascent in the new coordinates",
            "whether the integral converges",
            "the local factor by which the coordinate map stretches or shrinks areas",
            "the number of coordinate patches needed to cover the region",
          ],
          correctIndex: 2,
          explanation:
            "A small du × dv rectangle in coordinate space lands as a little parallelogram in the xy-plane, and the Jacobian determinant — built from the partials ∂x/∂u, ∂x/∂v, ∂y/∂u, ∂y/∂v — is precisely that parallelogram's area per unit du dv. Hence the universal rule dA = |J| du dv. For polar coordinates |J| = r; for spherical volume, ρ² sin φ.",
        },
        {
          question: "The volume element in spherical coordinates is:",
          options: [
            "dρ dφ dθ",
            "ρ² sin φ dρ dφ dθ",
            "ρ sin φ dρ dφ dθ",
            "ρ² dρ dφ dθ",
          ],
          correctIndex: 1,
          explanation:
            "The coordinate box has edges dρ, ρ dφ, and ρ sin φ dθ; their product is ρ² sin φ dρ dφ dθ. The ρ² says distant shells contain more volume; the sin φ says equatorial bands beat polar ones (near the poles, going around the axis is a short trip). Integrating this element with limits R, π, 2π delivers the sphere's 4πR³/3 in three lines.",
        },
        {
          question:
            "You need the total charge of a ball whose charge density depends only on distance from the center. The most efficient approach is:",
          options: [
            "spherical coordinates, where the integral collapses to a single integral over shells of volume 4πρ² dρ",
            "Cartesian coordinates, since dV = dx dy dz is simplest",
            "cylindrical coordinates, to exploit the symmetry about the z-axis",
            "numerical integration, since spherically symmetric densities have no closed form",
          ],
          correctIndex: 0,
          explanation:
            "Match the coordinates to the symmetry. With density depending only on ρ, the angular integrals give 2 × 2π = 4π automatically, leaving Q = ∫ d(ρ) 4πρ² dρ — a one-dimensional integral over spherical shells. Cartesian limits for a ball are square-root misery, and cylindrical coordinates only exploit axial, not full spherical, symmetry.",
        },
      ],
    },
    {
      id: "vector-fields",
      title: "Vector Fields",
      subtitle:
        "Line integrals, conservative fields, and flux through surfaces",
      sections: [
        {
          id: "picturing-vector-fields",
          title: "Arrows Everywhere: Picturing Vector Fields",
          content: `
<p>A scalar field attaches a number to each point of space. A <strong>vector field</strong> attaches an arrow: F(x, y, z) — a magnitude and a direction at every location. You have been living inside vector fields all along:</p>
<ul>
  <li>the wind (a velocity vector at every point of the atmosphere — weather maps draw exactly this),</li>
  <li>a river's flow, fast midstream and slow near the banks,</li>
  <li>gravity, an arrow toward Earth's center at every point in space,</li>
  <li>the electric and magnetic fields, the subject of the next two Subjects and the reason this chapter exists.</li>
</ul>
<p>Learn to read a field's picture the way you read a contour map. Two archetypes cover an enormous amount of territory:</p>
<ul>
  <li><strong>The radial field:</strong> arrows pointing straight out from a center, like a firework at the instant of detonation — F = (x, y, z) is the simplest specimen. Fields that <em>spread out from sources</em> look like this near the source; the electric field of a positive charge is radial (and shrinks with distance as 1/ρ²).</li>
  <li><strong>The rotational field:</strong> arrows circling an axis, like water in a stirred cup — F = (−y, x, 0), which at each point is perpendicular to the radius, sweeping counterclockwise. The magnetic field around a current-carrying wire circles like this.</li>
</ul>
<p>Real fields are blends of spreading and swirling, and this chapter plus the next build the two instruments that measure each tendency separately: <strong>divergence</strong> (how much a field spreads from a point) and <strong>curl</strong> (how much it circulates). Before measuring, though, we need to learn to integrate vector fields — and there are exactly two natural ways.</p>
<div class="key-concept">
  <h4>The two questions you can ask a vector field</h4>
  <p>Along a <em>curve</em>: how much does the field push you along your path? That is the line integral — work. Through a <em>surface</em>: how much of the field flows across? That is the surface integral — flux. Work and flux are the only integrals this subject needs, and each will get its own great theorem in the final chapter.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Michael Faraday, with little formal mathematics, invented the field-line picture to organize his experiments — he called them "lines of force." Maxwell then spent years translating Faraday's pictures into the vector calculus you are now learning, writing that Faraday "was in reality a mathematician of a very high order."</p>
</div>`,
        },
        {
          id: "line-integrals-and-work",
          title: "Line Integrals: Work Done Along a Path",
          content: `
<p>Push a particle along a path through a force field. Each little step dr earns work F · dr — force times displacement, counting only the force component <em>along</em> the step, exactly as in Subject 6. Add up the steps:</p>
<p style="text-align:center; font-size:1.15em;">W = ∫<sub>C</sub> F · dr</p>
<p>the <strong>line integral</strong> of F along the curve C. To compute one, parametrize the curve — describe it as r(t) with t running over an interval — and the recipe is: dr = (dr/dt) dt, dot with F, integrate over t.</p>
<p><strong>Worked example.</strong> Take the swirling field F = (−y, x) and travel from (1, 0) to (−1, 0) two different ways.</p>
<ol>
  <li><strong>Over the top of the unit circle:</strong> r(t) = (cos t, sin t), t from 0 to π. Then dr = (−sin t, cos t) dt and F = (−sin t, cos t), so F · dr = (sin²t + cos²t) dt = dt. The integral is ∫₀<sup>π</sup> dt = <strong>π</strong>. The field is tangent to the circle the whole way — perfect tailwind.</li>
  <li><strong>Straight through the origin along the x-axis:</strong> here y = 0, so F = (0, x), which is perpendicular to every step dr = (dx, 0). F · dr = 0 and the work is <strong>0</strong>.</li>
</ol>
<p>Same start, same finish, different work: for this field, <strong>work depends on the path</strong>. Hold that thought — the next section is about the special fields where it doesn't.</p>
<p>When the path is a closed loop, the line integral gets its own symbol and its own name:</p>
<p style="text-align:center; font-size:1.1em;">∮ F · dr = the <strong>circulation</strong> of F around the loop</p>
<p>Circulation measures the field's net tendency to push you around the circuit. For our swirling field around the full unit circle, the tailwind never lets up: circulation 2π.</p>
<div class="key-concept">
  <h4>Why circulation will matter enormously</h4>
  <p>Faraday's law — the principle behind every generator and transformer — states that a changing magnetic flux creates a circulation of the electric field: ∮ E · dr ≠ 0. That circulation, called the EMF, is what drives current around the circuit. When Subject 19 writes ∮ E · dr = −dΦ/dt, the left side is exactly the integral you just learned to compute.</p>
</div>`,
        },
        {
          id: "conservative-fields-and-potentials",
          title: "Conservative Fields: When Work Forgets the Path",
          content: `
<p>Now the aristocrats among vector fields. A field is <strong>conservative</strong> if the work it does depends only on the endpoints, never on the route. Three properties turn out to be perfectly equivalent — any one implies the other two:</p>
<ol>
  <li>Work is <strong>path-independent</strong>.</li>
  <li>The circulation around <strong>every closed loop is zero</strong>: ∮ F · dr = 0. (Out and back along any route, you break even.)</li>
  <li>The field is a gradient: <strong>F = ∇f</strong> for some scalar function f, called the <strong>potential</strong>.</li>
</ol>
<p>The third is the money property. If F = ∇f, the chain rule collapses the line integral completely — every step contributes ∇f · dr = df — so:</p>
<p style="text-align:center; font-size:1.1em;">∫<sub>C</sub> ∇f · dr = f(end) − f(start)</p>
<p>This is the <strong>fundamental theorem for line integrals</strong>: for gradient fields, integration is just evaluating the potential at two points. No parametrizing, no paths.</p>
<p><strong>Worked example.</strong> Is F = (2xy, x²) conservative? Seek f with ∂f/∂x = 2xy and ∂f/∂y = x². The first suggests f = x²y + (anything in y alone); the second confirms it with nothing extra: <strong>f = x²y</strong>. So the work from (0, 0) to (2, 3) along <em>any</em> path is f(2,3) − f(0,0) = 12.</p>
<p>And a quick disqualifier, courtesy of Clairaut: if F = (P, Q) = ∇f, then ∂P/∂y and ∂Q/∂x are the two mixed partials of f — they must be equal. Last section's swirl F = (−y, x) fails instantly: ∂P/∂y = −1 but ∂Q/∂x = +1. No potential exists, which is why its work was path-dependent. (This test is secretly "curl equals zero," as the final chapter will reveal.)</p>
<div class="key-concept">
  <h4>This is why potential energy exists</h4>
  <p>Gravity and the electrostatic field are conservative. That single fact is what licenses the concepts of potential energy (Subject 6) and voltage (Subject 19): U and V are precisely the potentials whose gradients (negated, by convention) give the force and field. And the caveat is thrilling — when magnetic fields change in time, E stops being conservative, ∮ E · dr ≠ 0, and that breakdown is not a problem but a power plant: it is Faraday induction.</p>
</div>`,
        },
        {
          id: "surface-integrals-and-flux",
          title: "Flux: How Much Field Crosses a Surface",
          content: `
<p>The second great integral asks a plumber's question: how much of the field flows <em>through</em> a given surface? Think of F as the velocity field of a fluid. Through a small patch of surface with area dA and unit normal n̂ (the direction the patch faces), the volume crossing per second is (F · n̂) dA — only the component of flow <em>perpendicular</em> to the surface carries anything through; flow parallel to the surface just slides past. Sum over the whole surface S:</p>
<p style="text-align:center; font-size:1.15em;">Φ = ∫∫<sub>S</sub> F · n̂ dA&nbsp;&nbsp;— the <strong>flux</strong> of F through S</p>
<p>Flux is a signed quantity: choose which side of the surface counts as positive (for closed surfaces, the convention is always outward), and field crossing the other way counts negative. Zero net flux can mean "nothing crosses" or "as much enters as leaves."</p>
<p><strong>The worked example that launches electromagnetism.</strong> Take the inverse-square radial field F = (k/ρ²) ρ̂ — the shape of the electric field of a point charge — and compute the flux out through a sphere of radius R centered on the origin.</p>
<ol>
  <li>On the sphere, F points radially out with magnitude k/R², and the outward normal n̂ is also radial: F · n̂ = k/R², the same at every point.</li>
  <li>Flux = (k/R²) × (surface area) = (k/R²)(4πR²) = <strong>4πk</strong>.</li>
</ol>
<p>The R² canceled. The flux is <strong>the same through every sphere</strong>, huge or tiny — the field weakens exactly as fast as the area grows, because the exponent in 1/ρ² matches the exponent in 4πρ². The field pours outward like an incompressible fluid from a source: what crosses the small sphere must cross the big one.</p>
<div class="key-concept">
  <h4>You have just discovered Gauss's law</h4>
  <p>For the electric field, this calculation becomes ∮∮ E · n̂ dA = Q/ε₀: the flux out of ANY closed surface measures exactly the charge inside, regardless of the surface's size or shape. It is one of Maxwell's four equations, and it works precisely because Coulomb's force is inverse-square. In Subject 19 this will crack open field calculations that direct integration cannot touch.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Flux is Latin for "flow," and the fluid picture is historically honest: Maxwell built his first model of electric fields as literal flow in an imaginary fluid, deriving theorems from plumbing intuition before trusting the algebra.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "The line integral ∫_C F · dr of a force field along a curve C computes:",
          options: [
            "the average strength of the field along the curve",
            "the work done by the field on a particle traversing the curve",
            "the length of the curve weighted by the field strength",
            "the flux of the field across the curve",
          ],
          correctIndex: 1,
          explanation:
            "Each step contributes F · dr — the force component along the displacement, times the distance — which is the definition of work from mechanics. The dot product automatically ignores force perpendicular to the motion. Flux is the other kind of integral: it counts the field crossing a surface, not pushing along a path.",
        },
        {
          question:
            "A field F satisfies ∮ F · dr = 0 around every closed loop. Which conclusion follows?",
          options: [
            "F must be zero everywhere",
            "F has constant magnitude",
            "F is conservative: work is path-independent and F = ∇f for some potential f",
            "F must be an inverse-square field",
          ],
          correctIndex: 2,
          explanation:
            "Zero circulation on every loop means going out by one route and back by another always breaks even — so any two paths between the same endpoints do equal work: path independence. That in turn guarantees a well-defined potential function f with F = ∇f. Gravity is a nonzero, nonconstant field with exactly this property; it is why gravitational potential energy is well-defined.",
        },
        {
          question:
            "For F = (2xy, x²), a potential function f with ∇f = F is f = x²y. What is ∫ F · dr along ANY path from (1, 1) to (2, 2)?",
          options: ["8 − 1 = 7", "It depends on the chosen path", "x²y evaluated at the midpoint", "2² × 2 + 1² × 1 = 9"],
          correctIndex: 0,
          explanation:
            "For a gradient field, the fundamental theorem for line integrals gives ∫ ∇f · dr = f(end) − f(start) = f(2,2) − f(1,1) = (4)(2) − (1)(1) = 8 − 1 = 7, regardless of route. This endpoint-only behavior is exactly what 'conservative' means — and exactly how voltage differences will work in circuits.",
        },
        {
          question:
            "In the fluid picture, the flux ∫∫_S F · n̂ dA of a velocity field through a surface S represents:",
          options: [
            "the average speed of the fluid on the surface",
            "the pressure exerted by the fluid on the surface",
            "the circulation of the fluid around the edge of the surface",
            "the net volume of fluid crossing the surface per unit time",
          ],
          correctIndex: 3,
          explanation:
            "Each patch passes (F · n̂) dA of fluid volume per second — only the perpendicular component of the flow carries anything through — and the surface integral totals it. The sign tracks direction: flow with the chosen normal counts positive, against it negative. Circulation, by contrast, lives on the boundary curve, not the surface.",
        },
        {
          question:
            "The flux of the inverse-square field F = (k/ρ²)ρ̂ through a sphere centered on the origin is 4πk for every radius. Why doesn't a bigger sphere capture more flux?",
          options: [
            "Because the field is conservative, flux must be the same through all surfaces",
            "Because flux is defined to be independent of surface size",
            "Because the field weakens as 1/R² while the sphere's area grows as R² — the two effects cancel exactly",
            "Because the field is zero outside the smallest sphere",
          ],
          correctIndex: 2,
          explanation:
            "On a sphere of radius R the field strength is k/R² and the area is 4πR²; their product is 4πk, radius-free. Only the inverse-square law achieves this perfect cancellation — which is why Gauss's law (flux counts enclosed charge, nothing else) holds for electricity and gravity. Conservativeness is a statement about line integrals, a different property entirely.",
        },
      ],
    },
    {
      id: "the-big-theorems",
      title: "The Big Theorems",
      subtitle:
        "Green, Stokes, and divergence — the Maxwell-ready toolkit of div, grad, and curl",
      sections: [
        {
          id: "divergence-sources-and-sinks",
          title: "Divergence: Sources, Sinks & Spreading",
          content: `
<p>Time to build the two local instruments promised earlier. The first measures spreading. Surround a point with a tiny closed box and ask: is there net flux <em>out</em> of the box? If yes, the point is acting as a <strong>source</strong> — field is being created there, like water welling up from a spring beneath a pond's surface. Net flux in: a <strong>sink</strong> (a drain). Define the <strong>divergence</strong> as the outward flux per unit volume, in the limit of a vanishingly small box.</p>
<p>Work out that flux for a tiny box with faces perpendicular to the axes (Schey's classic calculation): the x-faces contribute according to how much F<sub>x</sub> <em>grows</em> across the box — flux out the right face minus flux in the left — and similarly for y and z. The result is beautifully simple:</p>
<p style="text-align:center; font-size:1.15em;"><strong>∇·F = ∂F<sub>x</sub>/∂x + ∂F<sub>y</sub>/∂y + ∂F<sub>z</sub>/∂z</strong></p>
<p>The notation is a genuine mnemonic: the del machine ∇ "dotted" with F. Divergence takes a vector field and returns a scalar field — the source density at each point.</p>
<p><strong>Calibrate on the archetypes.</strong> The explosion field F = (x, y, z): ∇·F = 1 + 1 + 1 = 3, positive everywhere — every point acts as a source, the field visibly springing outward. The swirl F = (−y, x, 0): ∇·F = 0 + 0 + 0 = 0 — pure circulation, no spreading at all. A field with ∇·F = 0 everywhere is called <strong>incompressible</strong> or source-free: whatever flows into any region flows out.</p>
<div class="analogy">
  <h3>Analogy: Crowd Flow</h3>
  <p>Film a crowd from above and treat the people as a velocity field. Divergence is positive where the crowd is dispersing (concert just ended — people stream out of that spot), negative where it converges (the food truck arrives). Zero divergence is steady corridor flow: everyone entering the corridor leaves it.</p>
</div>
<div class="key-concept">
  <h4>Two Maxwell equations are divergence statements</h4>
  <p>∇·E = ρ/ε₀ says: electric charge is the source of the electric field — divergence lives exactly where charge lives. ∇·B = 0 says: the magnetic field has <em>no sources at all</em> — no magnetic charges, no monopoles; B-field lines never begin or end. Half of Maxwell's equations are sentences in the language you just learned.</p>
</div>`,
        },
        {
          id: "curl-circulation-density",
          title: "Curl: The Paddle Wheel Test",
          content: `
<p>The second instrument measures swirl. Drop an imaginary tiny paddle wheel into the field at a point. If the field pushes one side of the wheel harder than the other, the wheel spins — the field has local rotation there. The <strong>curl</strong> captures this: it is the circulation ∮ F · dr around a tiny loop, per unit of enclosed area, in the limit of a shrinking loop. Because a loop in 3D can be oriented three independent ways, curl is a <em>vector</em>: its component along any axis is the circulation density around that axis, and it is computed as the cross product of del with F:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇×F</strong> = (∂F<sub>z</sub>/∂y − ∂F<sub>y</sub>/∂z, ∂F<sub>x</sub>/∂z − ∂F<sub>z</sub>/∂x, ∂F<sub>y</sub>/∂x − ∂F<sub>x</sub>/∂y)</p>
<p>The vector ∇×F points along the axis the paddle wheel would spin about (right-hand rule), with magnitude twice the local rotation rate.</p>
<p><strong>Calibrate again.</strong> The swirl F = (−y, x, 0): only the z-component survives, ∂F<sub>y</sub>/∂x − ∂F<sub>x</sub>/∂y = 1 − (−1) = 2. So ∇×F = (0, 0, 2): uniform rotation about z — this field is rigid rotation at angular velocity 1, and curl returns twice that. The explosion field (x, y, z)? Every term cancels: curl zero. Radial fields don't swirl; swirling fields (this one, anyway) don't spread. Divergence and curl are independent characters, and together they nearly determine a field.</p>
<p>One trap: curl is <em>local</em>. A river flowing in straight lines can still have curl — if the current is faster near midstream, a paddle wheel near the bank spins (one paddle in fast water, one in slow) even though nothing moves in circles. Conversely the inverse-square radial field has zero curl everywhere despite all that dramatic geometry. Trust the paddle wheel, not the streamlines.</p>
<div class="key-concept">
  <h4>The other two Maxwell equations are curl statements</h4>
  <p>∇×E = −∂B/∂t is Faraday's law: a changing magnetic field makes the electric field <em>swirl</em> — that swirl drives generators. ∇×B = μ₀J + μ₀ε₀ ∂E/∂t is Ampère's law (with Maxwell's correction): currents and changing electric fields make the magnetic field circulate — hence the B-field loops around a wire. Divergence found the sources; curl found the dynamics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A conservative field's zero-circulation property now has a one-line statement: ∇×F = 0. The component-matching test from last chapter (∂Q/∂x = ∂P/∂y) was the z-component of the curl in disguise.</p>
</div>`,
        },
        {
          id: "greens-theorem",
          title: "Green's Theorem: Boundary Meets Interior",
          content: `
<p>Now the theorems that tie the local instruments to the integrals — the results this entire subject has been climbing toward. Start in the plane. Tile the region inside a closed curve C with tiny cells, and compute the circulation of F around each cell. Where two cells share an edge, their circulations traverse it in <em>opposite</em> directions — those contributions cancel. Sum over all cells and everything interior annihilates; only the outermost edges survive, and they assemble into precisely the boundary curve C. Circulation around the boundary equals the sum of the microscopic circulations inside:</p>
<p style="text-align:center; font-size:1.15em;"><strong>∮<sub>C</sub> F · dr = ∫∫<sub>R</sub> (∂Q/∂x − ∂P/∂y) dA</strong></p>
<p>This is <strong>Green's theorem</strong> (F = (P, Q), C traversed counterclockwise). The integrand on the right is exactly the curl's z-component — the circulation density — so the theorem reads: <em>total swirl inside = net push around the edge</em>.</p>
<p><strong>Worked example.</strong> Last chapter we ground through a parametrization to find the circulation of F = (−y, x) around the unit circle. Green does it in one line: ∂Q/∂x − ∂P/∂y = 1 − (−1) = 2, so the circulation is ∫∫ 2 dA = 2 × (area of unit disk) = <strong>2π</strong>. Same answer, no parametrization — the theorem converts a line integral into an often-easier area integral, or vice versa.</p>
<p>Run it backwards for a classic: choose F = (−y/2, x/2), whose curl-component is exactly 1. Then</p>
<p style="text-align:center;">Area of R = ½ ∮<sub>C</sub> (x dy − y dx)</p>
<p>— the area of a region computed <em>purely by walking its boundary</em>.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>That formula is a real instrument: the planimeter, a hinged brass arm that measures the area of any shape as you trace its outline — beloved of surveyors and leather-lung doctors reading lung capacity charts for a century before digitizers. It is Green's theorem built in metal.</p>
</div>
<div class="key-concept">
  <h4>The pattern to watch</h4>
  <p>"Add up a derivative over the interior; get the values on the boundary." That is the fundamental theorem of calculus (∫f′ = f(b) − f(a)) promoted to two dimensions. The next two sections promote it to three — one version for flux, one for circulation — and those two are the ones Maxwell's equations use daily.</p>
</div>`,
        },
        {
          id: "divergence-theorem",
          title: "The Divergence Theorem: Flux Counts What's Inside",
          content: `
<p>Promote the cancellation argument to three dimensions. Fill a solid region V with tiny boxes and total up the outward flux of each. Every interior face is shared by two boxes, which count its flux with opposite signs — cancel. Only the outer skin survives: the closed surface S enclosing V. And each tiny box's flux is, by definition, its divergence times its volume. Hence the <strong>divergence theorem</strong> (Gauss's theorem):</p>
<p style="text-align:center; font-size:1.15em;"><strong>∮∮<sub>S</sub> F · n̂ dA = ∫∫∫<sub>V</sub> ∇·F dV</strong></p>
<p>In words: the net outflow through a closed surface equals the total source strength inside. Nothing escapes a region except what is produced within it — plumbing common sense, elevated to a theorem.</p>
<p><strong>Worked example.</strong> Verify it for the explosion field F = (x, y, z) over a sphere of radius R.</p>
<ol>
  <li><strong>Directly:</strong> on the sphere, F is the position vector — radially outward with magnitude R — and n̂ is radial too, so F · n̂ = R everywhere. Flux = R × 4πR² = 4πR³.</li>
  <li><strong>Via the theorem:</strong> ∇·F = 3, so ∫∫∫ 3 dV = 3 × (4πR³/3) = 4πR³. ✓</li>
</ol>
<p>The volume side took one line; that trade is the theorem's daily use. It also settles a puzzle from last chapter: the flux of the inverse-square field was 4πk through <em>every</em> centered sphere because ∇·F = 0 everywhere except the origin — no sources in the space between two spheres, so no flux difference. All the divergence is concentrated in the point source itself.</p>
<div class="key-concept">
  <h4>Gauss's law, both dialects</h4>
  <p>Subject 19 will state Gauss's law twice. Integral form: ∮∮ E · n̂ dA = Q<sub>enclosed</sub>/ε₀ — flux counts charge. Differential form: ∇·E = ρ/ε₀ — divergence sits where charge density sits. They are not two laws; the divergence theorem is the translator between them, word for word. The same translation turns conservation of charge into the continuity equation, and it is how every "integral form / differential form" pair in physics is related.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The theorem also proves Archimedes' principle: integrate the pressure force of water over a submerged body's surface, convert with the divergence theorem, and out comes the weight of the displaced fluid — buoyancy, twenty-two centuries after the bathtub, in three lines.</p>
</div>`,
        },
        {
          id: "stokes-theorem-and-the-toolkit",
          title: "Stokes' Theorem & Your Maxwell-Ready Toolkit",
          content: `
<p>One theorem remains: Green's, lifted off the flat page. Take a closed curve C in space and any surface S that spans it — a butterfly net whose rim is C. Tile the (possibly bulging) surface with tiny cells; interior edges cancel exactly as before; each cell's circulation is the curl's component through it. The result is <strong>Stokes' theorem</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>∮<sub>C</sub> F · dr = ∫∫<sub>S</sub> (∇×F) · n̂ dA</strong></p>
<p>Circulation around the rim equals the flux of the curl through the net — and, astonishingly, through <em>any</em> net with that rim: flat disk or deep bag, the answer is identical, because only the boundary survives the cancellation. Green's theorem is the special case of a flat net.</p>
<p>Stokes also delivers a promised proof: if ∇×F = 0 everywhere, every circulation vanishes, so the field is conservative — curl-free and conservative are the same thing (in ordinary space). The chapter-4 test is certified.</p>
<div class="key-concept">
  <h4>Faraday and Ampère, both dialects</h4>
  <p>Faraday's law, integral form: ∮ E · dr = −dΦ<sub>B</sub>/dt (the EMF around a loop equals the changing magnetic flux through it — every generator on Earth). Apply Stokes to the left side, and since the loop is arbitrary, the integrands must match: ∇×E = −∂B/∂t, the differential form. Ampère's law converts identically. The divergence theorem translated Maxwell's two flux laws; Stokes translates the two circulation laws. There is no fifth theorem to learn — you now hold the complete translation kit.</p>
</div>
<p>Two identities complete the toolkit, both provable by direct (if tedious) computation, both with real meaning:</p>
<ul>
  <li><strong>∇×(∇f) = 0</strong> — gradients never swirl. This is why conservative fields have potentials and vice versa.</li>
  <li><strong>∇·(∇×F) = 0</strong> — curls never spread. A field that is a curl has no sources; since ∇·B = 0, the magnetic field can be written B = ∇×A. The vector potential A will star in advanced electromagnetism and quantum mechanics.</li>
</ul>
<p>Step back and see the single idea wearing three costumes: <em>the total of a derivative over the inside equals the value on the boundary.</em> The fundamental theorem of calculus (endpoints), Green and Stokes (a rim), the divergence theorem (a skin) — one truth, dimension by dimension. You are Maxwell-ready: when Subject 19 opens, every equation on its first page will be a sentence you can already parse.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Stokes' theorem" first appeared as a Cambridge exam problem in 1854, set by Stokes — who had received it in a letter from William Thomson (Lord Kelvin). Among the students sitting that exam was one J. C. Maxwell, who would put the theorem to historic use.</p>
  </div>`,
        },
      ],
      quiz: [
        {
          question: "The divergence ∇·F at a point measures:",
          options: [
            "the outward flux of F per unit volume from a tiny region around the point — the local source strength",
            "the rate at which the field rotates about the point",
            "the magnitude of the field at the point",
            "the work done by the field around a small loop at the point",
          ],
          correctIndex: 0,
          explanation:
            "Divergence is defined as the net outward flux from a shrinking closed box, divided by the box's volume: positive at sources (field springing outward), negative at sinks, zero where flow merely passes through. Rotation and loop-work belong to the curl, the other local instrument. For the electric field, ∇·E = ρ/ε₀ — divergence lives exactly where charge lives.",
        },
        {
          question:
            "A tiny paddle wheel placed in the field F = (−y, x, 0) will:",
          options: [
            "not spin, because the field is incompressible",
            "spin only if placed at the origin",
            "drift outward without spinning",
            "spin about the z-axis at the same rate everywhere, since ∇×F = (0, 0, 2) at every point",
          ],
          correctIndex: 3,
          explanation:
            "The curl works out to (0, 0, 2) — the same at every point, not just the origin. This field is rigid rotation, and a paddle wheel anywhere in it turns with the flow (curl equals twice the angular velocity). Incompressibility (∇·F = 0, also true here) says nothing about spinning — divergence and curl are independent measurements.",
        },
        {
          question:
            "Green's theorem says ∮_C F · dr = ∫∫_R (∂Q/∂x − ∂P/∂y) dA. What is the geometric idea behind the proof?",
          options: [
            "The boundary integral is approximated by straight-line segments",
            "Tiling the region into tiny cells: circulations along shared interior edges cancel, leaving only the boundary",
            "Both sides separately equal the area of the region",
            "The field is replaced by its average value over the region",
          ],
          correctIndex: 1,
          explanation:
            "Adjacent cells traverse their shared edge in opposite directions, so interior contributions annihilate pairwise; the survivors are exactly the outer edges, which form the boundary curve. Each tiny cell contributes its circulation density (the curl component) times its area — hence circulation around the edge equals total curl inside. The same cancellation argument, run in 3D, proves both Stokes' and the divergence theorem.",
        },
        {
          question:
            "For F = (x, y, z), the divergence is ∇·F = 3. What is the outward flux of F through the surface of ANY solid region of volume V?",
          options: ["V", "4πV", "3V", "Zero, since the field is smooth inside"],
          correctIndex: 2,
          explanation:
            "The divergence theorem converts the flux integral into ∫∫∫ ∇·F dV = ∫∫∫ 3 dV = 3V — for a sphere, a cube, or a potato shape alike; only the volume matters. This is the theorem's power: a surface integral that might be hideous to set up directly collapses to a one-line volume integral. Smoothness inside does not make flux vanish; zero divergence would.",
        },
        {
          question:
            "Stokes' theorem equates the circulation ∮_C E · dr around a loop with the flux of ∇×E through a spanning surface. Applied to Faraday's law, this shows that:",
          options: [
            "the electric field of a static charge has nonzero curl",
            "the integral form ∮ E · dr = −dΦ_B/dt and the differential form ∇×E = −∂B/∂t are the same law in two dialects",
            "magnetic field lines must begin and end on charges",
            "the EMF around a loop is always zero",
          ],
          correctIndex: 1,
          explanation:
            "Stokes converts the circulation of E into the surface flux of ∇×E; comparing with −dΦ_B/dt for an arbitrary loop forces the integrands to be equal: ∇×E = −∂B/∂t. Integral and differential forms of Faraday's law are translations of each other, with Stokes as the dictionary — just as the divergence theorem translates the two Gauss-type Maxwell equations. In statics (no changing B) the EMF is zero and E is conservative; generators exist precisely because that fails when B changes.",
        },
      ],
    },
  ],
};
