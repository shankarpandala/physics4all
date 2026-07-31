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
          id: "velocity-and-acceleration-as-derivatives",
          title: "Velocity and Acceleration Are Derivatives",
          content: `
<p>Earlier phases defined velocity as "distance over time" and quietly apologized whenever the velocity kept changing. Calculus removes the apology. If x(t) is the position of an object at time t, then its <strong>velocity</strong> is the derivative — the limit of Δx/Δt as the interval shrinks to nothing:</p>
<p style="text-align:center;">v(t) = dx/dt</p>
<p>and its <strong>acceleration</strong> is the derivative of that:</p>
<p style="text-align:center;">a(t) = dv/dt = d²x/dt²</p>
<p>These are not new formulas to memorize; they are the honest versions of ideas you already own. "Instantaneous speed" on a car's speedometer <em>is</em> dx/dt. The lurch you feel when the driver brakes <em>is</em> d²x/dt².</p>
<p><strong>Worked example.</strong> A ball is thrown upward, and its height is x(t) = 20t − 4.9t² (metres, seconds). Differentiate once: v(t) = dx/dt = 20 − 9.8t. Differentiate again: a(t) = −9.8 m/s², constant — pure gravity. When is the ball at its peak? At the top the ball is momentarily at rest, so set v = 0: t = 20/9.8 ≈ 2.04 s. Substitute back: x ≈ 20.4 m. Notice the logic — the peak is not where x is biggest by inspection, it is where the <em>derivative vanishes</em>, exactly the max-finding technique from calculus.</p>
<p><strong>Variation.</strong> Suppose instead x(t) = 3t³ − 9t. Then v = 9t² − 9, which is zero at t = 1 s: the object momentarily stops and reverses. But a = 18t = 18 m/s² there — not zero! Zero velocity does not mean zero acceleration; the ball at the top of its arc is the classic case.</p>
<div class="key-concept">
  <h4>Graphs speak calculus</h4>
  <p>On an x–t graph, velocity is the slope of the tangent line. On a v–t graph, acceleration is the slope, and displacement is the area under the curve. Every kinematics question is secretly a question about slopes and areas.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton invented calculus largely to do exactly this — he called derivatives "fluxions," the flowing rates of quantities. Kinematics is not an application of calculus; it is one of the reasons calculus exists.</p>
</div>`,
        },
        {
          id: "motion-from-integrals",
          title: "Recovering Motion by Integration",
          content: `
<p>Differentiation goes from position to velocity to acceleration. Physics usually hands you the problem in the other direction: forces tell you the <em>acceleration</em>, and you must reconstruct the motion. That is integration:</p>
<p style="text-align:center;">v(t) = v₀ + ∫₀ᵗ a(t′) dt′  and  x(t) = x₀ + ∫₀ᵗ v(t′) dt′</p>
<p>The constants v₀ and x₀ are the <strong>initial conditions</strong> — integration always leaves them behind, and physically they are the launch data the equations cannot know on their own.</p>
<p><strong>Worked example — deriving the constant-acceleration formulas.</strong> The equations you once memorized are now a two-line computation. Let a be constant:</p>
<ol>
  <li>v(t) = v₀ + ∫₀ᵗ a dt′ = v₀ + at</li>
  <li>x(t) = x₀ + ∫₀ᵗ (v₀ + at′) dt′ = x₀ + v₀t + ½at²</li>
</ol>
<p>Eliminate t between them and the third classic, v² = v₀² + 2a(x − x₀), drops out. The "suvat equations" were never separate laws — they are one integral, done twice, for the special case a = constant.</p>
<p><strong>Variation — when a is not constant.</strong> A rocket sled has a(t) = 6t m/s², starting from rest at the origin. Then v = ∫6t dt = 3t² and x = ∫3t² dt = t³. At t = 2 s: v = 12 m/s, x = 8 m. Try getting that from ½at² and you will be wrong — the memorized formulas silently assume constant acceleration, and integration is what works in general.</p>
<div class="analogy">
  <h3>Analogy: The Odometer and the Speedometer</h3>
  <p>Your car's speedometer differentiates: it reports the instantaneous rate of the odometer. The odometer integrates: it accumulates the speedometer's readings over time. Kinematics is just the mathematics of that dashboard, made exact.</p>
</div>
<div class="key-concept">
  <h4>Initial conditions are half the physics</h4>
  <p>An acceleration function alone cannot tell you where an object is — infinitely many motions share the same a(t). Position and velocity at one instant pin down the unique trajectory. This pairing of "equation + initial conditions" is the template for every dynamics problem in this subject.</p>
</div>`,
        },
        {
          id: "drag-and-terminal-velocity",
          title: "Drag and Terminal Velocity: Your First Real ODE",
          content: `
<p>Drop a skydiver and the vacuum-physics answer — v = gt, growing forever — fails within seconds. Air resistance pushes back, and for many situations the drag force is roughly proportional to speed. Taking downward as positive, Newton's second law per unit mass reads:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dv/dt = g − kv</strong></p>
<p>This is a genuine <strong>differential equation</strong>: it does not tell you v, it tells you how v is currently changing, and you must find the function that fits. Solve it honestly, by separation of variables:</p>
<ol>
  <li>Rearrange: dv/(g − kv) = dt</li>
  <li>Integrate both sides: −(1/k) ln(g − kv) = t + C</li>
  <li>Solve for v: g − kv = A e^(−kt), so v(t) = g/k − (A/k) e^(−kt)</li>
  <li>Apply the initial condition v(0) = 0: A = g, giving
  <p style="text-align:center;"><strong>v(t) = (g/k)(1 − e^(−kt))</strong></p></li>
</ol>
<p>Read the solution like a physicist. At t = 0, e⁰ = 1 and v = 0: correct start. For small t, e^(−kt) ≈ 1 − kt, so v ≈ gt: free fall before drag has had time to matter. As t → ∞, e^(−kt) → 0 and v → g/k: the <strong>terminal velocity</strong>, where drag exactly balances gravity and dv/dt = 0. You could have found that endpoint without solving anything — set the right side of the ODE to zero — but the full solution shows <em>how</em> the approach happens: exponentially, with time constant 1/k. After time 1/k the skydiver has reached about 63% of terminal velocity; after 3/k, about 95%.</p>
<p><strong>Variation.</strong> A ball thrown <em>downward</em> faster than g/k does not speed up — the drag exceeds gravity, dv/dt is negative, and the ball decelerates toward g/k from above. Terminal velocity is an attractor: all initial conditions funnel into it.</p>
<div class="key-concept">
  <h4>Why this ODE matters beyond skydiving</h4>
  <p>The same equation — a rate proportional to how far you are from equilibrium — governs an RC circuit charging, a hot object cooling, and a population approaching carrying capacity. Solve dv/dt = g − kv once and you have solved them all.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A skydiver's belly-down terminal velocity is about 55 m/s (200 km/h); head-down, over 80 m/s. A raindrop's is a few metres per second — without drag, rain from a 2 km cloud would strike at 700 km/h.</p>
</div>`,
        },
        {
          id: "kinematics-in-vector-form",
          title: "Kinematics in Two Dimensions: Vectors and Independence",
          content: `
<p>Real motion happens in space, so position becomes a vector r(t) = (x(t), y(t)), and everything differentiates component by component: v = dr/dt and a = dv/dt. The deep consequence is <strong>independence of components</strong> — the x-equation and y-equation are separate one-dimensional problems joined only by sharing the same clock.</p>
<p><strong>Worked example — the projectile, derived.</strong> Launch at speed v₀ and angle θ. Gravity acts only in y, so a = (0, −g). Integrate each component with its own initial condition:</p>
<ul>
  <li>x: no acceleration → x(t) = v₀ cos θ · t</li>
  <li>y: constant −g → y(t) = v₀ sin θ · t − ½gt²</li>
</ul>
<p>Eliminate t = x/(v₀ cos θ) and the trajectory appears: y = x tan θ − gx²/(2v₀² cos²θ) — a parabola, <em>derived</em> rather than asserted. Setting y = 0 gives the range R = (v₀²/g) sin 2θ, maximal at θ = 45° because sin 2θ peaks at 90°.</p>
<p><strong>Variation — circular motion as a derivative exercise.</strong> Let r(t) = (R cos ωt, R sin ωt), a particle circling at angular velocity ω. Differentiate twice:</p>
<ul>
  <li>v = (−Rω sin ωt, Rω cos ωt), with magnitude v = ωR, always tangent to the circle</li>
  <li>a = (−Rω² cos ωt, −Rω² sin ωt) = <strong>−ω² r</strong></li>
</ul>
<p>The acceleration points opposite to r — straight at the centre — with magnitude ω²R = v²/R. The centripetal acceleration formula you once took on faith is two derivatives of a cosine. Speed is constant, yet acceleration is not zero, because velocity is a vector and its <em>direction</em> is changing.</p>
<div class="analogy">
  <h3>Analogy: Two Accountants, One Calendar</h3>
  <p>The x-motion and y-motion are like two accountants keeping separate books. Neither ever looks at the other's ledger; they only share the same calendar, t. Drop one bullet and fire another horizontally, and both hit the ground together — the y-accountant literally cannot see the x-motion.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Galileo established component independence experimentally around 1600 — before calculus, before Newton. His parabolic trajectories, obtained by rolling balls off tables, were the first hint that motion decomposes cleanly along perpendicular axes.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An object's position is x(t) = t³ − 6t² + 9t (metres, seconds). At which times is its velocity zero?",
          options: [
            "t = 1 s and t = 3 s",
            "t = 0 s only",
            "t = 2 s only",
            "t = 3 s and t = 6 s",
          ],
          correctIndex: 0,
          explanation:
            "Velocity is the derivative: v = dx/dt = 3t² − 12t + 9 = 3(t − 1)(t − 3), which vanishes at t = 1 s and t = 3 s. These are the turning points of the motion — the object momentarily stops and reverses there, exactly as a calculus max/min problem would find.",
        },
        {
          question:
            "A particle starts from rest with acceleration a(t) = 4t m/s². What is its velocity at t = 3 s?",
          options: ["12 m/s", "36 m/s", "18 m/s", "6 m/s"],
          correctIndex: 2,
          explanation:
            "Velocity is the integral of acceleration: v = ∫4t dt = 2t², so v(3) = 18 m/s. The memorized formula v = at would give 12 m/s, but it only applies when a is constant — here the integral is essential, which is the whole point of doing kinematics with calculus.",
        },
        {
          question:
            "A falling object obeys dv/dt = g − kv. What is its terminal velocity, and how do you see it directly from the equation?",
          options: [
            "g·k, found by multiplying the two constants",
            "g/k, found by setting dv/dt = 0 so that drag balances gravity",
            "g/k², found by integrating twice",
            "There is no terminal velocity; v grows without bound",
          ],
          correctIndex: 1,
          explanation:
            "Terminal velocity is the steady state where the velocity stops changing: set dv/dt = 0 and solve, giving v = g/k. The full solution v(t) = (g/k)(1 − e^(−kt)) shows the approach is exponential — the object never quite reaches g/k but is within 5% after a time of about 3/k.",
        },
        {
          question:
            "In the solution v(t) = (g/k)(1 − e^(−kt)), what does the combination 1/k represent physically?",
          options: [
            "The maximum height reached",
            "The time to reach exactly terminal velocity",
            "The distance fallen before drag begins to act",
            "The characteristic time scale: after 1/k the object is at about 63% of terminal velocity",
          ],
          correctIndex: 3,
          explanation:
            "At t = 1/k the exponential has decayed to e⁻¹ ≈ 0.37, so v = (g/k)(1 − 0.37) ≈ 0.63 g/k. The object never reaches terminal velocity exactly — it approaches it asymptotically — and 1/k sets the tempo of that approach, just as RC does for a charging capacitor.",
        },
        {
          question:
            "A particle moves in a circle at constant speed. Which statement about its acceleration is correct?",
          options: [
            "It is zero, because the speed is constant",
            "It points along the velocity, keeping the particle moving",
            "It points toward the centre with magnitude v²/R, because the velocity vector's direction is changing",
            "It points outward, balancing gravity",
          ],
          correctIndex: 2,
          explanation:
            "Differentiating r(t) = (R cos ωt, R sin ωt) twice gives a = −ω²r: an inward-pointing vector of magnitude ω²R = v²/R. Acceleration is the rate of change of the velocity vector, and in circular motion the direction of v turns continuously even while its magnitude stays fixed.",
        },
      ],
    },
    {
      id: "newtons-laws-as-differential-equations",
      title: "Newton's Laws as Differential Equations",
      subtitle:
        "Solving F = ma as an equation of motion, with a first look at oscillators and numerics",
      sections: [
        {
          id: "f-equals-ma-as-an-equation-of-motion",
          title: "F = ma Is a Differential Equation",
          content: `
<p>Written the way Newton meant it, the second law is:</p>
<p style="text-align:center; font-size:1.15em;"><strong>m d²x/dt² = F(x, v, t)</strong></p>
<p>The force may depend on where you are (a spring), how fast you move (drag), or the time (a push that switches on and off). Whatever its form, the law is a <strong>second-order differential equation</strong> for the unknown function x(t) — and its solution is not a number but the <em>entire future trajectory</em>.</p>
<p>Because the equation is second order, you must integrate twice to reach x(t), and each integration introduces one constant. Physically: to predict a system you need the equation of motion <em>plus two facts</em> — initial position and initial velocity. Give me x(0) and v(0) for a projectile, a pendulum, or a planet, and F = ma delivers everything that follows. This is <strong>Newtonian determinism</strong>: the state (x, v) at one instant, plus the force law, fixes all of history and all of the future.</p>
<p><strong>Worked example — the strategy in miniature.</strong> A 2 kg block on frictionless ice is pushed with F(t) = 12t newtons, starting from rest at the origin.</p>
<ol>
  <li>Equation of motion: 2 dv/dt = 12t → dv/dt = 6t</li>
  <li>Integrate once: v(t) = 3t² + C₁; v(0) = 0 gives C₁ = 0</li>
  <li>Integrate again: x(t) = t³ + C₂; x(0) = 0 gives C₂ = 0</li>
</ol>
<p>At t = 2 s the block is at 8 m moving at 12 m/s. The recipe — write F = ma, integrate, apply initial conditions — is the single most important skill in this subject.</p>
<p><strong>Variation.</strong> If the same force instead acted on a block starting at x = 5 m with v = −4 m/s, only the constants change: x(t) = t³ − 4t + 5. Same physics, different launch data — the equation of motion is a machine, and initial conditions are what you feed it.</p>
<div class="key-concept">
  <h4>Three kinds of force, three kinds of problem</h4>
  <p>F(t) — integrate directly, as above. F(v) — separate variables, as with drag. F(x) — the hardest and most important case, where energy methods (chapter 4) and the oscillator (this chapter) live. Classifying the dependence is always your first move.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Newton never wrote "F = ma." His Principia states the law geometrically, in terms of momentum change. The differential-equation form is due to Euler, half a century later — arguably Euler's version is the one physics actually uses.</p>
</div>`,
        },
        {
          id: "solving-equations-of-motion",
          title: "Solving Equations of Motion: Two Full Examples",
          content: `
<p>The recipe earns its keep on problems where the memorized formulas are useless. Here are two, worked honestly.</p>
<p><strong>Example 1 — velocity-dependent force.</strong> A boat of mass m glides with speed v₀ when its engine cuts out; water drag is F = −bv. The equation of motion is m dv/dt = −bv. Separate and integrate:</p>
<ol>
  <li>dv/v = −(b/m) dt</li>
  <li>ln v = −(b/m)t + C → v(t) = v₀ e^(−bt/m)</li>
</ol>
<p>The boat never fully stops — v decays exponentially with time constant m/b. But integrate once more for position: x(t) = (mv₀/b)(1 − e^(−bt/m)), which approaches the <em>finite</em> limit mv₀/b. The boat coasts a bounded distance in unbounded time. That subtle conclusion is invisible without calculus.</p>
<p><strong>Example 2 — position-dependent force.</strong> Near Earth's surface gravity is constant, but at height x above the centre of the Earth it is F = −GMm/x². For a rock falling from far away, m dv/dt = −GMm/x². Time drops out via the chain rule — the single most useful trick in mechanics:</p>
<p style="text-align:center;">dv/dt = (dv/dx)(dx/dt) = v dv/dx</p>
<p>So v dv = −GM dx/x². Integrating from rest at distance x₀ down to distance x:</p>
<p style="text-align:center;">½v² = GM(1/x − 1/x₀)</p>
<p>which is energy conservation, derived rather than assumed — a preview of chapter 4. Setting x₀ → ∞ and x = R (Earth's surface) gives the impact speed √(2GM/R) ≈ 11.2 km/s: escape velocity, run in reverse.</p>
<p><strong>Variation.</strong> Redo Example 1 with quadratic drag, F = −cv². Separation gives dv/v² = −(c/m)dt, so v(t) = v₀/(1 + cv₀t/m) — a power-law decay instead of an exponential, and this time the coasting distance grows logarithmically without bound. The <em>form</em> of the force law changes the qualitative fate of the motion.</p>
<div class="key-concept">
  <h4>The chain-rule trick</h4>
  <p>When F depends on position and you want speed as a function of place (not time), write a = v dv/dx. It converts a hard time-equation into an easy space-integral, and it is exactly how energy conservation hides inside F = ma.</p>
</div>`,
        },
        {
          id: "the-oscillator-preview",
          title: "The Oscillator: A First Look at the Most Important Equation",
          content: `
<p>Attach a mass m to a spring with stiffness k. Hooke's law gives the force F = −kx: proportional to displacement, always pointing back toward equilibrium. Newton's second law becomes:</p>
<p style="text-align:center; font-size:1.15em;"><strong>m d²x/dt² = −kx</strong></p>
<p>Read it aloud: find a function whose second derivative is a negative multiple of itself. Sines and cosines do exactly this — d²/dt² of cos ωt is −ω² cos ωt. Try the guess x(t) = A cos(ωt) and substitute:</p>
<p style="text-align:center;">−mω²A cos(ωt) = −kA cos(ωt)</p>
<p>The guess works provided ω² = k/m. The mass oscillates with <strong>angular frequency ω = √(k/m)</strong>, hence period T = 2π√(m/k). Notice what the equation dictated and what it left free: the <em>frequency</em> is fixed by the physics (m and k), while the amplitude A — and a possible phase shift, x = A cos(ωt + φ) — are set by initial conditions, exactly the two constants a second-order equation owes you.</p>
<p><strong>Worked example.</strong> A 0.5 kg mass on a k = 200 N/m spring is pulled 0.1 m from equilibrium and released from rest. Then ω = √(200/0.5) = 20 rad/s, and the initial conditions x(0) = 0.1, v(0) = 0 select x(t) = 0.1 cos(20t). Peak speed: v_max = ωA = 2 m/s, as the mass whips through equilibrium.</p>
<p><strong>Variation.</strong> Release the same mass <em>at</em> equilibrium with a 2 m/s kick instead. Same ω — frequency does not care how you start — but now x(t) = 0.1 sin(20t). Same amplitude, quarter-period phase shift.</p>
<div class="analogy">
  <h3>Analogy: The Universal Impersonator</h3>
  <p>Almost any potential-energy valley, zoomed in near its bottom, looks parabolic — so almost anything displaced slightly from stable equilibrium obeys this equation: a swaying bridge, a vibrating molecule, charge in a circuit, atoms in a crystal. Learn the harmonic oscillator once and you have met, in disguise, half the systems in physics. Chapter 6 makes this rigorous.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The oscillator's period is independent of amplitude — swing it wide or barely at all, T is the same. Galileo noticed this (approximately) in a swaying cathedral lamp, timing it with his pulse, and it is why pendulums and quartz crystals can keep time.</p>
</div>`,
        },
        {
          id: "numerical-solutions-intro",
          title: "When Calculus Runs Out: Numerical Solutions",
          content: `
<p>Separation of variables and lucky guesses solve textbook problems. But add realistic drag to a projectile, or a third body to an orbit, and no closed-form solution exists — not "hard to find," provably nonexistent. The physicist's answer: let the differential equation compute the trajectory <em>step by step</em>.</p>
<p>The idea, called <strong>Euler's method</strong>, is beautifully blunt. The state of a system is (x, v). Newton tells you the rates of change: dx/dt = v and dv/dt = F/m. Over a tiny step Δt, pretend the rates are constant:</p>
<ol>
  <li>x_new = x + v·Δt</li>
  <li>v_new = v + (F(x, v, t)/m)·Δt</li>
  <li>Advance the clock, recompute F, repeat — thousands of times.</li>
</ol>
<p><strong>Worked example.</strong> Take the oscillator with m = 1, k = 1 (so a = −x), starting at x = 1, v = 0, with Δt = 0.1. Step 1: x = 1 + 0 = 1.000, v = 0 + (−1)(0.1) = −0.1. Step 2: x = 1 + (−0.1)(0.1) = 0.990, v = −0.1 + (−1)(0.1) = −0.199. Continue and the points trace out a cosine — a computer doing with arithmetic what the sine function does with symbols.</p>
<p><strong>Variation — and a warning.</strong> Run that oscillator for many cycles and Euler's amplitude slowly <em>grows</em>: the method injects energy, because using the start-of-step rate for the whole step systematically overshoots on a curving trajectory. Halving Δt halves the error per unit time, but better cures exist — midpoint and Runge–Kutta methods sample the rates more cleverly, and "symplectic" integrators used for planetary orbits conserve energy over millions of simulated years. The lesson is not that numerics are untrustworthy; it is that a numerical method is itself a piece of physics you must understand.</p>
<div class="key-concept">
  <h4>State plus rule equals trajectory</h4>
  <p>Numerical integration lays Newtonian determinism bare: current state (x, v), a rule for the rates, and time-stepping — nothing else. Every spacecraft trajectory, climate model, and game-physics engine is this loop, running fast.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Before electronic computers, "computer" was a job title. Teams of human computers stepped differential equations by hand for artillery tables and astronomy — Katherine Johnson at NASA checked orbital numerics for John Glenn's flight, at his personal request, in 1962.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does solving F = ma always require exactly two initial conditions?",
          options: [
            "Because there are two directions, forward and backward",
            "Because F = ma is a second-order differential equation, and each of the two integrations to reach x(t) introduces one undetermined constant",
            "Because force and mass must both be measured",
            "Because Newton stated three laws but only two apply to motion",
          ],
          correctIndex: 1,
          explanation:
            "Acceleration is d²x/dt², so recovering x(t) means integrating twice, and each integration leaves an arbitrary constant. Physically the constants are the initial position and initial velocity — the state of the system at one instant. Equation plus state determines the entire trajectory: Newtonian determinism.",
        },
        {
          question:
            "A boat coasting with drag F = −bv has solution v(t) = v₀e^(−bt/m). What is the total distance it coasts as t → ∞?",
          options: [
            "Infinite — it never stops, so it travels forever",
            "Exactly v₀·(m/b)·ln 2",
            "mv₀/b — a finite distance, even though the boat never fully stops",
            "Zero, because the velocity decays to zero",
          ],
          correctIndex: 2,
          explanation:
            "Integrate the velocity: x(t) = (mv₀/b)(1 − e^(−bt/m)), which approaches mv₀/b as t → ∞. The boat's speed never quite reaches zero, yet the distance converges — an exponentially decaying speed accumulates only a finite total. Conclusions like this are exactly why the calculus treatment matters.",
        },
        {
          question:
            "For a force that depends on position, F(x), which manipulation converts m dv/dt into a form you can integrate over x?",
          options: [
            "Replace dv/dt with v dv/dx using the chain rule",
            "Replace dv/dt with dx/dv",
            "Assume the acceleration is constant over the path",
            "Differentiate both sides with respect to t",
          ],
          correctIndex: 0,
          explanation:
            "By the chain rule, dv/dt = (dv/dx)(dx/dt) = v dv/dx. Then m·v dv = F(x) dx, and integrating gives ½mv² as an integral of force over distance — the work–energy theorem emerging directly from F = ma. This trick converts time-domain problems into space-domain ones whenever the force depends only on position.",
        },
        {
          question:
            "Substituting x = A cos(ωt) into m d²x/dt² = −kx shows the guess works only if:",
          options: [
            "A = k/m",
            "A and ω are both determined by the initial conditions",
            "ω = k/m",
            "ω = √(k/m), while A remains free to be set by initial conditions",
          ],
          correctIndex: 3,
          explanation:
            "Two derivatives of A cos(ωt) give −ω²A cos(ωt); matching −(k/m)x forces ω² = k/m, i.e. ω = √(k/m). The equation fixes the frequency from the physical constants but says nothing about A — amplitude and phase are the two free constants that initial position and velocity determine.",
        },
        {
          question:
            "In Euler's method for the oscillator, the computed amplitude slowly grows over many cycles. What is the root cause?",
          options: [
            "Round-off in the computer's decimal arithmetic",
            "Using the rate at the start of each step for the whole step systematically overshoots on a curved trajectory, injecting energy",
            "The spring constant k drifts during the simulation",
            "Euler's method only works for constant forces",
          ],
          correctIndex: 1,
          explanation:
            "Euler assumes the derivatives stay frozen across each step, but on an orbit-like curve the true rates change mid-step; the frozen-rate step lands slightly outside the true trajectory each time, so energy creeps upward. Smaller steps reduce the error, and smarter schemes (midpoint, Runge–Kutta, symplectic integrators) correct it — choosing an integrator is part of the physics.",
        },
      ],
    },
    {
      id: "momentum-systems-of-particles",
      title: "Momentum & Systems of Particles",
      subtitle: "Centre of mass, rockets, and two-dimensional collisions",
      sections: [
        {
          id: "centre-of-mass",
          title: "The Centre of Mass: Why Point-Particle Physics Works",
          content: `
<p>Newton's laws were stated for particles — idealized points. Yet we cheerfully apply them to blocks, planets, and gymnasts. The concept that licenses this is the <strong>centre of mass</strong> (CM). For particles of mass mᵢ at positions rᵢ:</p>
<p style="text-align:center;">R = (1/M) Σ mᵢrᵢ,  and for continuous bodies R = (1/M) ∫ r dm</p>
<p>where M is the total mass. It is the mass-weighted average position — the balance point.</p>
<p><strong>Worked example — CM by integration.</strong> A rod of length L has density that grows linearly from zero at one end: λ(x) = cx. Total mass: M = ∫₀ᴸ cx dx = cL²/2. The CM:</p>
<p style="text-align:center;">x_cm = (1/M) ∫₀ᴸ x·(cx) dx = (cL³/3)/(cL²/2) = <strong>2L/3</strong></p>
<p>Two-thirds along, toward the heavy end — sensible, and the integral makes "sensible" exact.</p>
<p>Now the theorem that earns the concept its keep. Differentiate MR = Σmᵢrᵢ twice and use Newton's second law on each particle. Internal forces — every push and pull between the particles themselves — cancel in pairs by Newton's third law, leaving:</p>
<p style="text-align:center; font-size:1.1em;"><strong>M d²R/dt² = F_external</strong></p>
<p>The centre of mass moves as if it were a single particle of mass M feeling only the external forces. Fireworks explode into a hundred fragments; the fragments' CM continues on the original parabola. A diver somersaults wildly; her CM traces a clean arc. Internal complexity is invisible to the CM.</p>
<p><strong>Variation.</strong> A 60 kg canoeist walks 3 m toward the bow of a 30 kg canoe on still water. No external horizontal force acts, so the CM of canoeist-plus-canoe stays put — meaning the canoe must slide backward 2 m relative to the water (60 × d₁ = 30 × d₂ with d₁ + d₂ = 3). You can move relative to the boat, but not relative to the system's CM.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A high jumper doing the Fosbury flop arches so sharply that her centre of mass passes under the bar while every part of her body goes over it. The CM is a mathematical point — nothing requires any actual matter to be there.</p>
</div>`,
        },
        {
          id: "momentum-and-impulse",
          title: "Momentum Conservation, Straight from Newton",
          content: `
<p>Define the momentum of a particle as p = mv. Newton's second law in its original, more general form is:</p>
<p style="text-align:center;">F = dp/dt</p>
<p>For a system, summing over particles and cancelling internal forces (third law again) gives dP/dt = F_external, where P = MV_cm is the total momentum. The punchline is immediate:</p>
<div class="key-concept">
  <h4>Conservation of momentum</h4>
  <p>If the net external force on a system is zero, its total momentum P is constant — no matter how violent the internal explosions, collisions, or interactions. This is not an extra law; it is Newton's second and third laws, integrated.</p>
</div>
<p>Integrating F = dp/dt over a collision's duration gives the <strong>impulse–momentum theorem</strong>: ∫F dt = Δp. The time-integral of force equals the momentum change, which is why the same Δp can come from a huge force briefly (a hammer) or a small force sustained (a push). Airbags, crumple zones, and bent knees on landing all work the same way: stretch the time, shrink the peak force, Δp unchanged.</p>
<p><strong>Worked example.</strong> A 0.15 kg ball arrives at 40 m/s and is batted straight back at 50 m/s. Taking the return direction as positive: Δp = 0.15 × (50 − (−40)) = 13.5 kg·m/s. If bat and ball touch for 0.7 ms, the average force is Δp/Δt ≈ 19,000 N — about two tonnes of force, which is why the calculus distinction between average and instantaneous force matters.</p>
<p><strong>Variation.</strong> A 4 kg rifle fires a 10 g bullet at 400 m/s. Before firing, P = 0; after, it must still be 0, so the rifle recoils at 400 × 0.01/4 = 1 m/s. Momentum conservation cares nothing for the chemistry of gunpowder — only that the forces were internal.</p>
<div class="analogy">
  <h3>Analogy: The Sealed Ledger</h3>
  <p>Momentum is a strictly conserved currency inside a closed system. Particles can trade it in any collision, however chaotic, but the ledger's total never changes unless an outside party (an external force) makes a deposit. Physicists trust this ledger so deeply that when nuclear beta decay seemed to violate it, Pauli postulated an invisible particle — the neutrino — rather than give up conservation. He was right.</p>
</div>`,
        },
        {
          id: "rockets-and-variable-mass",
          title: "The Rocket Equation: Momentum with Changing Mass",
          content: `
<p>A rocket accelerates by hurling part of itself backward — a momentum-conservation machine with continuously changing mass. Naively writing F = m dv/dt fails because m is not constant. The honest approach: track momentum over a short interval dt.</p>
<p>At time t, the rocket (mass m, velocity v) drifts in free space. It ejects a small mass |dm| of exhaust backward at speed u <em>relative to the rocket</em>, boosting itself to v + dv. Conserve momentum before and after:</p>
<ol>
  <li>Before: p = mv</li>
  <li>After: (m − |dm|)(v + dv) + |dm|(v − u)</li>
  <li>Set them equal, expand, and drop the doubly-small term dm·dv:
  <p style="text-align:center;">m dv = u |dm|</p></li>
</ol>
<p>Since the rocket's mass <em>decreases</em>, |dm| = −dm, giving m dv = −u dm. Now separate variables and integrate from initial mass m₀ to final mass m_f:</p>
<p style="text-align:center;">∫ dv = −u ∫ dm/m  →  <strong>Δv = u ln(m₀/m_f)</strong></p>
<p>This is the <strong>Tsiolkovsky rocket equation</strong>, and its logarithm is brutal. To gain Δv = u, you must burn away the fraction 1 − 1/e ≈ 63% of your mass. To gain 2u, 86%. Chemical exhaust speeds top out near u ≈ 4.4 km/s, while reaching low Earth orbit costs about 9.4 km/s — so m₀/m_f ≈ e^(9.4/4.4) ≈ 8.5: a rocket must be nearly 90% propellant. That single equation explains why orbital rockets are giant fuel tanks with a small payload on top, and why they <strong>stage</strong> — dropping empty tanks resets m_f, cheating the logarithm.</p>
<p><strong>Variation — with gravity.</strong> Launching vertically, add the external force: dv = −u dm/m − g dt. The extra term, integrated, subtracts g·t_burn — "gravity losses." Burning fast minimizes them, which is one reason launch vehicles pull high thrust early.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Konstantin Tsiolkovsky, a self-taught Russian schoolteacher, derived this equation in 1897 and published it in 1903 — the year the Wright brothers first flew. He also proposed multi-stage rockets, space stations, and airlocks, all on paper, decades before any rocket flew.</p>
</div>`,
        },
        {
          id: "collisions-in-two-dimensions",
          title: "Collisions in Two Dimensions",
          content: `
<p>In one dimension, momentum conservation is a single equation. In two, it is a <strong>vector</strong> statement — one equation per component — and that is where its real power shows.</p>
<p style="text-align:center;">Σ pₓ before = Σ pₓ after  and  Σ p_y before = Σ p_y after</p>
<p>Kinetic energy, by contrast, is a scalar with no direction, and whether it survives defines the collision type: <strong>elastic</strong> (KE conserved — hard spheres, billiards, atoms), <strong>inelastic</strong> (some KE lost to heat and deformation), <strong>perfectly inelastic</strong> (objects stick; maximum possible KE loss consistent with momentum conservation).</p>
<p><strong>Worked example — a sticking collision.</strong> A 1000 kg car heading east at 20 m/s collides with a 1500 kg car heading north at 15 m/s; they lock together.</p>
<ol>
  <li>pₓ = 1000 × 20 = 20,000 kg·m/s; p_y = 1500 × 15 = 22,500 kg·m/s</li>
  <li>Total p = √(20,000² + 22,500²) ≈ 30,100 kg·m/s at angle θ = arctan(22,500/20,000) ≈ 48° north of east</li>
  <li>Speed of the wreck: v = p/M = 30,100/2500 ≈ <strong>12.0 m/s</strong></li>
</ol>
<p>Check the energy: KE before = 368,750 J; after = ½ × 2500 × 12.04² ≈ 181,200 J. Half the kinetic energy became crumpled metal, sound, and heat — momentum is conserved through the crash, energy bookkeeping shows the damage. Accident investigators run exactly this computation backward from skid marks.</p>
<p><strong>Variation — elastic and at right angles.</strong> When a moving ball strikes an identical stationary ball elastically (billiards, off-centre), momentum gives v₁ = v₁′ + v₂′ as vectors, and energy gives v₁² = v₁′² + v₂′². A vector whose square equals the sum of squares of its parts means the parts are perpendicular: the balls <em>must</em> separate at 90°. Pool players know this empirically; Rutherford's team used the same signature in cloud chambers to show alpha particles and helium nuclei have equal mass.</p>
<div class="key-concept">
  <h4>Momentum first, energy second</h4>
  <p>Momentum conservation holds in every collision, however lossy, because the forces are internal. Kinetic-energy conservation is a special property of elastic encounters only. Always write the momentum equations first; bring in energy only when the problem justifies it.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A shell explodes mid-flight into many fragments. What does the fragments' centre of mass do immediately afterward?",
          options: [
            "It stops at the explosion point",
            "It scatters along with the largest fragment",
            "It continues along the original parabolic trajectory, because the explosion forces were all internal",
            "It accelerates in the direction of the most massive fragments",
          ],
          correctIndex: 2,
          explanation:
            "The explosion exerts only internal forces, which cancel in pairs by Newton's third law. The centre of mass obeys M d²R/dt² = F_external, and the only external force is still gravity — so the CM sails on along the same parabola as if nothing had happened, until fragments start landing.",
        },
        {
          question:
            "Why does an airbag reduce injury, in impulse–momentum terms?",
          options: [
            "It reduces the passenger's momentum change during the crash",
            "It spreads the same momentum change over a longer time, lowering the peak force since ∫F dt = Δp",
            "It absorbs the passenger's momentum into the bag's own motion",
            "It converts momentum into kinetic energy",
          ],
          correctIndex: 1,
          explanation:
            "The momentum change is fixed: the passenger goes from travel speed to zero regardless. The impulse–momentum theorem says the time-integral of force equals that fixed Δp — so stretching the stopping time from milliseconds to tenths of a second cuts the average (and peak) force by an order of magnitude. Crumple zones and bent-knee landings use the identical principle.",
        },
        {
          question:
            "In deriving the rocket equation, what does the exhaust speed u represent, and what is the resulting Δv?",
          options: [
            "u is the exhaust speed relative to the ground; Δv = u·(m₀/m_f)",
            "u is the exhaust speed relative to the ground; Δv = u·ln(m_f/m₀)",
            "u is the rocket's final speed; Δv = u − gt",
            "u is the exhaust speed relative to the rocket; Δv = u·ln(m₀/m_f)",
          ],
          correctIndex: 3,
          explanation:
            "The derivation conserves momentum over each interval dt with exhaust leaving at v − u, i.e. at speed u relative to the rocket — that is the quantity engines control. Integrating m dv = −u dm gives Δv = u ln(m₀/m_f): gains scale with the logarithm of the mass ratio, which is why rockets are almost entirely propellant and why staging pays.",
        },
        {
          question:
            "To double a rocket's Δv (fixed exhaust speed u), what must happen to its mass ratio m₀/m_f?",
          options: [
            "It must be squared, because Δv depends on the logarithm of the ratio",
            "It must double",
            "It must increase by a factor of e",
            "It must quadruple",
          ],
          correctIndex: 0,
          explanation:
            "From Δv = u ln(m₀/m_f), doubling Δv requires doubling the logarithm, i.e. squaring the mass ratio. A ratio of 3 giving some Δv needs a ratio of 9 for twice that Δv. This exponential punishment is the tyranny of the rocket equation — and the reason engineers shave grams and drop spent stages.",
        },
        {
          question:
            "Two cars collide and lock together, skidding away at an angle. Which quantities are conserved through the collision itself?",
          options: [
            "Both momentum and kinetic energy",
            "Both components of total momentum, but not kinetic energy",
            "Kinetic energy, but not momentum",
            "Neither — collisions destroy both",
          ],
          correctIndex: 1,
          explanation:
            "The collision forces are internal to the two-car system, so total momentum — each vector component separately — is conserved through the impact. Kinetic energy is not: a perfectly inelastic (sticking) collision converts the maximum possible share into deformation, sound, and heat. That lost KE is precisely what crumples the metal.",
        },
      ],
    },
    {
      id: "energy-methods",
      title: "Energy Methods",
      subtitle:
        "Work–energy via integrals, F = −dU/dx, and reading physics from energy diagrams",
      sections: [
        {
          id: "work-energy-via-integrals",
          title: "Work and Kinetic Energy, Derived from F = ma",
          content: `
<p>Energy is not an independent postulate of mechanics — it is Newton's second law, integrated over distance instead of time. Start from m dv/dt = F(x) and apply the chain-rule trick dv/dt = v dv/dx:</p>
<p style="text-align:center;">m v dv = F(x) dx</p>
<p>Integrate from point 1 to point 2:</p>
<p style="text-align:center; font-size:1.1em;"><strong>½mv₂² − ½mv₁² = ∫₁² F dx = W</strong></p>
<p>The right side is the <strong>work</strong> done by the force — in general a genuine integral, the area under the F–x curve. The left side is the change in <strong>kinetic energy</strong> ½mv². This is the <strong>work–energy theorem</strong>, and note its pedigree: nothing was assumed beyond F = ma. Energy methods are Newton's laws viewed through a different integral.</p>
<p><strong>Worked example — a force that varies.</strong> How much work does it take to stretch a spring (F_applied = kx) from its natural length to extension x? Not force times distance — the force grows along the way. Integrate:</p>
<p style="text-align:center;">W = ∫₀ˣ kx′ dx′ = ½kx²</p>
<p>The ½ is the fingerprint of the integral: it is the area of the triangle under the ramping F–x line. Constant-force formulas would miss it entirely.</p>
<p><strong>Variation.</strong> A 2 kg block slides at 6 m/s into a spring with k = 800 N/m. How far does the spring compress? The spring does negative work −½kx² until the block stops: 0 − ½(2)(36) = −½(800)x², so x = 0.3 m. No timing, no trajectory, no ODE — the theorem leaps straight from initial to final state, which is exactly its selling point.</p>
<div class="key-concept">
  <h4>When to reach for energy</h4>
  <p>F = ma answers "where is it at time t?" The work–energy theorem answers "how fast is it moving at position x?" — skipping time entirely. When a question never mentions time, energy methods are almost always the shortest path.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The word "energy" entered physics only in 1807 (Thomas Young), and ½mv² was long called vis viva — "living force." The clean modern structure of work, kinetic, and potential energy was assembled decades after Newton died, largely by engineers analysing steam engines.</p>
</div>`,
        },
        {
          id: "potential-energy-and-force",
          title: "Potential Energy and F = −dU/dx",
          content: `
<p>Some forces have a marvellous property: the work they do between two points does not depend on the path taken. Gravity is one — lift a book by any route and gravity's work depends only on the height change. Friction is not — longer paths burn more energy. Path-independent forces are called <strong>conservative</strong>, and for them we can define a <strong>potential energy</strong>: the stored work,</p>
<p style="text-align:center;">U(x) = −∫ F dx  (from a chosen reference point to x)</p>
<p>The minus sign is a bookkeeping convention: work done <em>against</em> the force is banked as U. Differentiate both sides and the relationship inverts:</p>
<p style="text-align:center; font-size:1.15em;"><strong>F = −dU/dx</strong></p>
<p>Force is the negative slope of the potential-energy curve. This one line is among the most-used in all of physics. Check it on the standards: U = mgh gives F = −mg (downward — correct); U = ½kx² gives F = −kx (Hooke's law — correct); U = −GMm/r gives F = −GMm/r² (attractive inverse square — correct).</p>
<p>Combine U with the work–energy theorem and conservation appears: for conservative forces, W = −ΔU, so Δ(½mv²) = −ΔU, meaning</p>
<p style="text-align:center;"><strong>E = ½mv² + U(x) = constant</strong></p>
<p><strong>Worked example.</strong> A pendulum of length 2 m is released from rest 60° from vertical. Height drop to the bottom: h = L(1 − cos 60°) = 1 m. Then ½mv² = mgh gives v = √(2 × 9.8 × 1) ≈ 4.4 m/s — no forces resolved, no ODE solved, the mass cancels.</p>
<p><strong>Variation.</strong> Given U(x) = x⁴ − 2x² (joules, metres), find the force at x = 1: F = −dU/dx = −(4x³ − 4x) = 0. That is no accident — x = 1 is an equilibrium point, the subject of the next section.</p>
<div class="analogy">
  <h3>Analogy: Altitude on a Hiking Map</h3>
  <p>U(x) is the terrain's elevation profile, and F = −dU/dx says a ball rolls downhill, faster where the slope is steeper. Flat ground means no force. Once you internalize this, every U(x) graph becomes a landscape you can read at sight — which is precisely the skill the rest of this chapter builds.</p>
</div>`,
        },
        {
          id: "potential-wells-and-stability",
          title: "Potential Wells, Equilibrium, and Stability",
          content: `
<p>Where the potential-energy curve is flat — dU/dx = 0 — the force vanishes and a particle placed at rest stays put: <strong>equilibrium</strong>. But equilibria differ in temperament, and the second derivative tells them apart:</p>
<ul>
  <li><strong>Minimum of U</strong> (d²U/dx² &gt; 0): displace the particle and the slope pushes it back. <strong>Stable</strong> — a marble in a bowl.</li>
  <li><strong>Maximum of U</strong> (d²U/dx² &lt; 0): any displacement is amplified. <strong>Unstable</strong> — a marble balanced on a dome.</li>
  <li><strong>Flat region</strong> (both derivatives zero): the marble stays wherever you put it. <strong>Neutral</strong>.</li>
</ul>
<p>Now the result that makes the harmonic oscillator universal. Near a stable equilibrium at x₀, Taylor-expand the potential:</p>
<p style="text-align:center;">U(x) ≈ U(x₀) + ½U″(x₀)(x − x₀)²</p>
<p>(the linear term vanishes because the slope is zero there). This is exactly a spring potential with effective stiffness k_eff = U″(x₀). So:</p>
<div class="key-concept">
  <h4>Everything oscillates</h4>
  <p>Any system disturbed slightly from stable equilibrium behaves as a harmonic oscillator with ω = √(U″(x₀)/m). Molecules vibrate, bridges hum, and quartz watches tick because near the bottom, every smooth well is a parabola.</p>
</div>
<p><strong>Worked example.</strong> Take U(x) = x⁴ − 2x² again. Equilibria where U′ = 4x³ − 4x = 0: at x = 0 and x = ±1. Check U″ = 12x² − 4. At x = 0: U″ = −4 &lt; 0, unstable hilltop. At x = ±1: U″ = 8 &gt; 0, two stable wells. A double-well potential — the shape behind bistable switches, the ammonia molecule's flipping, and (in later subjects) spontaneous symmetry breaking.</p>
<p><strong>Variation.</strong> A particle of mass 2 kg sits in the well at x = 1. Frequency of small oscillations: ω = √(U″/m) = √(8/2) = 2 rad/s. Push it gently and it vibrates at 2 rad/s regardless of the (small) push — frequency is a property of the well, not the kick.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A pencil balanced on its tip sits at a potential maximum, and quantum mechanics forbids it from having exactly zero displacement and zero velocity simultaneously. Even a perfectly machined pencil in a vacuum would topple within seconds — instability plus the uncertainty principle beats idealization.</p>
</div>`,
        },
        {
          id: "energy-diagrams",
          title: "Reading Physics from Energy Diagrams",
          content: `
<p>Draw U(x), then draw a horizontal line at the system's total energy E. That single picture — the <strong>energy diagram</strong> — answers qualitative questions that would take pages of algebra.</p>
<p>The rules of reading:</p>
<ul>
  <li>Kinetic energy at any x is the gap: KE = E − U(x). The particle moves fastest where U dips lowest.</li>
  <li>The particle can exist only where E ≥ U(x); the region above the line is forbidden — entering it would need negative kinetic energy.</li>
  <li>Where the line intersects the curve, KE = 0: <strong>turning points</strong>. The particle stops and reverses.</li>
  <li>Two turning points flanking a well → <strong>bound</strong> oscillation between them. E above all barriers → <strong>unbound</strong>: the particle escapes to infinity.</li>
</ul>
<p><strong>Worked example — a molecular bond.</strong> The potential between two atoms (a Lennard-Jones curve) plunges to a minimum at separation r₀ ≈ a few tenths of a nanometre, then rises toward a plateau at U = 0 for large r. Read it: at r₀, stable equilibrium — the bond length. Small E above the minimum: the atoms oscillate about r₀ — molecular vibration, the origin of infrared spectra. E raised above the plateau: the atoms separate forever — the bond breaks, and the energy gap from well bottom to plateau <em>is</em> the bond's dissociation energy. Chemistry, read off a graph.</p>
<p><strong>Variation.</strong> The same curve explains thermal expansion. The well is asymmetric — steeper on the compressed side than the stretched side — so as temperature raises E, the midpoint of the two turning points drifts outward: the average bond length grows. Solids expand when heated because potential wells are lopsided, a fact no symmetric-spring model can capture.</p>
<div class="analogy">
  <h3>Analogy: The Skate Park</h3>
  <p>A skater rolling in a half-pipe is the energy diagram made physical: total energy set by the drop-in height, speed greatest at the bottom, turning points where she momentarily stops on the walls. Give her enough energy and she clears the lip — unbound. Every U(x) problem is a skate park with different terrain.</p>
</div>
<div class="key-concept">
  <h4>Diagrams before algebra</h4>
  <p>Professionals sketch the energy diagram before computing anything: it reveals what kinds of motion are possible, which questions make sense, and roughly what the answers must be. The same diagrams return with effective potentials for orbits (chapter 7) and quantum wells in Phase 5.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The work needed to stretch a spring from 0 to extension x is ½kx², not kx·x. Where does the factor of ½ come from?",
          options: [
            "Half the energy is always lost to heat",
            "The force ramps up linearly from zero, so the work is the area of a triangle under the F–x line: ∫kx′dx′ = ½kx²",
            "Hooke's law only applies to half the stretch",
            "It is an empirical correction with no derivation",
          ],
          correctIndex: 1,
          explanation:
            "Work is the integral of force over distance, and the applied force grows from 0 to kx as the spring stretches. The area under that ramp is a triangle: ½ × base × height = ½ · x · kx = ½kx². The ½ is the signature of integrating a varying force — constant-force shortcuts would silently get it wrong.",
        },
        {
          question:
            "Given a potential energy function U(x), how do you find the force, and what does a negative slope of U imply?",
          options: [
            "F = dU/dx; a negative slope means force in the −x direction",
            "F = −U(x); the force is largest where U is most negative",
            "F = −dU/dx; a negative slope means a positive force, pushing toward +x",
            "F = m·dU/dx; the slope must be multiplied by mass",
          ],
          correctIndex: 2,
          explanation:
            "Force is the negative gradient of potential energy: F = −dU/dx. Where U slopes downward (negative slope), the force is positive — pushing the particle downhill toward lower U, like a ball rolling down terrain. This single relation reproduces gravity from mgh, Hooke's law from ½kx², and Newtonian gravitation from −GMm/r.",
        },
        {
          question:
            "An equilibrium point sits at a local maximum of U(x). What happens to a particle nudged slightly away from it?",
          options: [
            "The force grows with displacement and pushes it further away — the equilibrium is unstable",
            "It oscillates about the maximum with ω = √(U″/m)",
            "It returns to the maximum, since equilibrium means restoring force",
            "It stays exactly where it was nudged to, since dU/dx is small",
          ],
          correctIndex: 0,
          explanation:
            "At a maximum, d²U/dx² < 0: displace the particle and the slope of U drives it downhill, away from the equilibrium — displacement amplifies. Only minima of U (U″ > 0) provide restoring forces and oscillation. This is the marble-on-a-dome versus marble-in-a-bowl distinction, made precise by the second derivative.",
        },
        {
          question:
            "On an energy diagram, the horizontal total-energy line E intersects the U(x) curve at two points flanking a well. These intersections are:",
          options: [
            "equilibrium positions where the particle can rest permanently",
            "forbidden points the particle can never reach",
            "points of maximum speed",
            "turning points, where kinetic energy hits zero and the motion reverses — the particle is bound between them",
          ],
          correctIndex: 3,
          explanation:
            "Kinetic energy is the gap E − U(x). Where the line meets the curve the gap closes, the particle momentarily stops, and the downhill force sends it back — a turning point. With turning points on both sides the motion is bound, shuttling through the well and moving fastest where U is deepest. Beyond the intersections U > E, which would require negative KE: forbidden.",
        },
        {
          question:
            "Why does virtually every system oscillate harmonically when displaced slightly from stable equilibrium?",
          options: [
            "Because all real forces are fundamentally springs",
            "Because the Taylor expansion of any smooth U about a minimum starts with a quadratic term ½U″(x₀)(x−x₀)², which is exactly a spring potential",
            "Because friction removes all non-harmonic components",
            "It is an experimental coincidence with no known explanation",
          ],
          correctIndex: 1,
          explanation:
            "At a minimum the slope of U vanishes, so the leading behaviour of U near x₀ is the quadratic term of its Taylor series — indistinguishable from ½k_eff x² with k_eff = U″(x₀). Small displacements therefore feel a linear restoring force and oscillate at ω = √(U″(x₀)/m). This is why molecules, bridges, and circuits all hum with the same mathematics.",
        },
      ],
    },
    {
      id: "angular-momentum-rigid-bodies",
      title: "Angular Momentum & Rigid Bodies",
      subtitle:
        "Rotational dynamics with real integrals, gyroscopes, and precession",
      sections: [
        {
          id: "torque-and-angular-momentum",
          title: "Torque and Angular Momentum: Rotation Done Properly",
          content: `
<p>Rotational mechanics is not a new theory — it is Newton's laws re-expressed in variables suited to spinning. Define, for a particle, the <strong>angular momentum</strong> about an origin as L = r × p (magnitude rmv sin θ: momentum times lever arm), and the <strong>torque</strong> as τ = r × F (force times lever arm). Differentiate L = r × p with respect to time; the dr/dt × p term dies because v is parallel to p, leaving the rotational second law:</p>
<p style="text-align:center; font-size:1.15em;"><strong>τ = dL/dt</strong></p>
<p>Every rotational fact descends from this. No torque → L constant: <strong>conservation of angular momentum</strong>. For a rigid body spinning about a fixed axis, every particle shares the same angular velocity ω, and summing r × p over particles gives L = Iω, where I = Σmᵢrᵢ² is the <strong>moment of inertia</strong> — the rotational analogue of mass, measuring how far the mass sits from the axis. Then τ = I dω/dt, the perfect twin of F = ma, and kinetic energy of rotation is ½Iω².</p>
<p><strong>Worked example — the spinning skater, with numbers.</strong> A skater spinning at 2 rev/s with arms out has I = 4 kg·m²; pulling her arms in drops I to 1 kg·m². No external torque acts about her axis, so L = Iω is fixed: ω_new = (4/1) × 2 = 8 rev/s. But look at the energy: ½Iω² rises by the same factor of 4. Where did that energy come from? From her muscles — pulling mass inward against the centrifugal tendency is real work, converted to rotational KE. Conservation of L is free; the speed-up is paid for.</p>
<p><strong>Variation.</strong> A star 700,000 km in radius, rotating once a month, collapses to a 10 km neutron star. With I ∝ MR², conservation of L boosts the spin rate by (70,000)² ≈ 5 × 10⁹ — from one revolution per month to hundreds per second. Pulsars, the rotating beacons radio astronomers detect, are the skater trick performed by dying stars.</p>
<div class="key-concept">
  <h4>The rotational dictionary</h4>
  <p>x → θ, v → ω, a → dω/dt, m → I, F → τ, p → L. Every linear equation you know has a rotational twin: τ = Iα, L = Iω, KE = ½Iω², W = ∫τ dθ. Translate fluently and half of rigid-body mechanics is already yours.</p>
</div>`,
        },
        {
          id: "moment-of-inertia-by-integration",
          title: "Moments of Inertia by Integration",
          content: `
<p>Tables list moments of inertia; calculus explains them. For a continuous body,</p>
<p style="text-align:center;">I = ∫ r² dm</p>
<p>where r is each mass element's distance from the axis. The technique: slice the body into pieces whose distance from the axis you know, express dm via the density, integrate.</p>
<p><strong>Worked example — a uniform rod, two axes.</strong> Rod of mass M, length L, mass per length λ = M/L. About an axis through its <em>end</em>: a slice at distance x has dm = λ dx, so</p>
<p style="text-align:center;">I_end = ∫₀ᴸ x² λ dx = λL³/3 = <strong>ML²/3</strong></p>
<p>About its <em>centre</em>, the integral runs from −L/2 to L/2:</p>
<p style="text-align:center;">I_centre = ∫ x² λ dx = <strong>ML²/12</strong></p>
<p>Four times smaller — mass near the axis barely counts, because r² weights the far ends heavily. That r² is why a figure skater's outstretched arms matter so much and why flywheels are rim-heavy by design.</p>
<p><strong>Variation — a solid disk.</strong> Disk of mass M, radius R, spinning about its centre. Slice it into rings: the ring at radius r with thickness dr has area 2πr dr, hence dm = M(2πr dr)/(πR²). Then</p>
<p style="text-align:center;">I = ∫₀ᴿ r² (2M/R²) r dr = (2M/R²)(R⁴/4) = <strong>½MR²</strong></p>
<p>The same slicing strategy gives a hollow cylinder MR² (all mass at r = R — no integral needed), and a solid sphere 2MR²/5 (stack disks). Notice the pattern: the more mass concentrated near the axis, the smaller the coefficient — which is why, racing objects down a ramp, a solid sphere beats a disk and every hollow object loses to its solid twin, regardless of mass or radius.</p>
<div class="key-concept">
  <h4>The parallel-axis theorem</h4>
  <p>Know I about the centre of mass, need it about a parallel axis a distance d away? I = I_cm + Md². Check: rod about its end = ML²/12 + M(L/2)² = ML²/3. One theorem replaces half the table.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In the ramp race, all uniform spheres tie — mass and radius cancel, leaving acceleration dependent only on the shape coefficient. Galileo could have distinguished hollow from solid balls with an incline, centuries before X-rays.</p>
</div>`,
        },
        {
          id: "rolling-and-combined-motion",
          title: "Rolling: Translation and Rotation in One Body",
          content: `
<p>A rolling wheel does two things at once: its centre of mass translates, and the body rotates about that centre. The <strong>rolling-without-slipping</strong> condition ties them together: the contact point must be momentarily at rest, which forces</p>
<p style="text-align:center;">v_cm = ωR  and  a_cm = R dω/dt</p>
<p>The kinetic energy splits cleanly (a theorem worth remembering for any rigid body): KE = ½Mv_cm² + ½I_cm ω² — translation of the CM plus rotation about the CM.</p>
<p><strong>Worked example — the ramp race, solved.</strong> A round object (I = βMR², with β = ½ for a disk, 2/5 for a sphere) rolls from rest down a ramp of height h. Energy conservation:</p>
<ol>
  <li>Mgh = ½Mv² + ½(βMR²)(v/R)² = ½Mv²(1 + β)</li>
  <li>v = √(2gh/(1 + β))</li>
</ol>
<p>Mass and radius vanish; only the shape factor β survives. Sphere (β = 0.4): v = √(2gh/1.4). Disk (β = 0.5): slower. Hoop (β = 1): slower still. Rotation taxes the energy budget — a fraction β/(1+β) of the input is locked up in spin instead of forward speed.</p>
<p><strong>Variation — where's the friction?</strong> Rolling requires static friction to supply the torque about the CM (without it, an object on a frictionless ramp would slide without spinning). Yet static friction at a non-moving contact point does <em>no work</em>, which is why energy conservation above was legitimate. On a ramp steep enough that the needed friction exceeds μN, the object slips — and then friction is kinetic, does negative work, and the clean answer dies.</p>
<div class="analogy">
  <h3>Analogy: The Instantaneous Pivot</h3>
  <p>At each moment a rolling wheel pivots about its contact point — the bottom is momentarily stationary, the centre moves at v, and the top sweeps forward at 2v. Photograph a rolling bicycle wheel and the spokes near the road are sharp while the top ones blur: the picture is the physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Because the contact point is instantaneously at rest, a rolling tyre grips with static friction, not kinetic — which is why anti-lock brakes exist. A skidding (sliding) tyre trades static for weaker kinetic friction and lengthens the stop; ABS keeps the wheels rolling right at the grip limit.</p>
</div>`,
        },
        {
          id: "gyroscopes-and-precession",
          title: "Gyroscopes and Precession: τ = dL/dt in Its Full Glory",
          content: `
<p>Spin a bicycle wheel, support one end of its axle, and let go. Intuition screams that the free end must fall. Instead the axle stays nearly horizontal and swings slowly around in a circle — <strong>precession</strong>. This is not a violation of mechanics; it is the purest demonstration that τ = dL/dt is a <em>vector</em> equation.</p>
<p>The key mental shift: torque does not change L toward the torque's "push" — it changes L in the torque's <em>direction as a vector</em>. Gravity acting at the wheel's CM, a distance r along the axle from the pivot, produces a torque τ = r × Mg that points <em>horizontally, perpendicular to the axle</em>. In time dt, the spin angular momentum picks up dL = τ dt — a sideways increment. Adding a perpendicular sliver to a vector doesn't lengthen it; it <em>rotates</em> it. So the axle swivels, gravity's torque swivels with it, and the chase continues forever: steady circular precession.</p>
<p><strong>Worked example — the precession rate.</strong> In time dt the tip of L (magnitude L = Iω, pointing along the axle) turns through angle dφ = dL/L = τ dt/L. The precession angular velocity is therefore:</p>
<p style="text-align:center; font-size:1.1em;"><strong>Ω = τ/L = Mgr/(Iω)</strong></p>
<p>Numbers: a 2 kg wheel, I = 0.15 kg·m², spun at ω = 50 rad/s, pivot 0.2 m from the CM: Ω = (2 × 9.8 × 0.2)/(0.15 × 50) ≈ 0.52 rad/s — one lazy circle every 12 seconds, while the wheel itself spins eight times a second. Note the inverse dependence on ω: as friction slows the spin, precession speeds up, which you can watch happen with a toy gyroscope.</p>
<p><strong>Variation.</strong> The same physics at planetary scale: Earth is an oblate spinning top, and the Moon and Sun torque its equatorial bulge. Result: Earth's spin axis precesses in a 26,000-year cone. Polaris is our pole star only temporarily — in 12,000 years it will be Vega, and ancient Egyptian astronomers aligned pyramids to a different pole star (Thuban) than we see.</p>
<div class="key-concept">
  <h4>Fast top approximation</h4>
  <p>The clean formula Ω = τ/L holds when spin dominates: L from ω vastly exceeds any angular momentum of the precession itself. Slow the spin too far and the motion adds a nodding oscillation, "nutation" — visible as the wobble when a top winds down.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A skater spinning with I = 4 kg·m² at 2 rev/s pulls her arms in, reducing I to 1 kg·m². Her new spin rate — and the source of the extra kinetic energy — are:",
          options: [
            "4 rev/s; the energy comes from angular momentum",
            "8 rev/s; the energy comes from the work her muscles do pulling mass inward",
            "8 rev/s; the energy appears for free since L is conserved",
            "2 rev/s; both L and KE stay fixed",
          ],
          correctIndex: 1,
          explanation:
            "With no external torque, L = Iω is conserved: ω rises by the factor 4/1 to 8 rev/s. Kinetic energy ½Iω² then quadruples — and that energy is not free. Pulling her arms inward against their outward tendency requires real muscular work, which is exactly the KE increase. Momentum conservation is automatic; energy always has a ledger.",
        },
        {
          question:
            "A uniform rod has moment of inertia ML²/12 about its centre. About a parallel axis through its end, I is:",
          options: [
            "ML²/12, since mass and length haven't changed",
            "ML²/6, twice the central value",
            "ML²/3, by the parallel-axis theorem: ML²/12 + M(L/2)²",
            "ML², since all the mass is now at distance L",
          ],
          correctIndex: 2,
          explanation:
            "The parallel-axis theorem gives I = I_cm + Md² with d = L/2: ML²/12 + ML²/4 = ML²/3, matching the direct integral ∫₀ᴸ x²(M/L)dx. Moving the axis away from the CM always increases I — the r² weighting punishes mass far from the axis, which is also why I about the end is four times I about the centre.",
        },
        {
          question:
            "A solid sphere (I = 2MR²/5) and a hoop (I = MR²) roll from rest down the same ramp. Which reaches the bottom first, and why?",
          options: [
            "The hoop — more inertia means more momentum",
            "They tie — energy conservation gives both the same speed",
            "The heavier object, whichever it is",
            "The sphere — a smaller fraction of its energy is locked in rotation, so its centre moves faster at every height",
          ],
          correctIndex: 3,
          explanation:
            "Rolling from height h gives v = √(2gh/(1+β)) with I = βMR². The sphere's β = 0.4 beats the hoop's β = 1: the hoop banks half its energy in spin, the sphere under a third. Mass and radius cancel entirely — only the mass distribution matters, so any solid sphere beats any hoop.",
        },
        {
          question:
            "A spinning gyroscope supported at one end of its axle precesses instead of falling. The correct explanation is:",
          options: [
            "Gravity's torque adds increments dL perpendicular to the spin angular momentum, rotating L's direction rather than tipping the wheel over",
            "The spin creates lift that balances gravity",
            "Angular momentum conservation forbids the axle from moving at all",
            "Centrifugal force pushes the free end upward",
          ],
          correctIndex: 0,
          explanation:
            "τ = dL/dt is a vector equation. Gravity's torque about the pivot points horizontally, perpendicular to the axle — so each instant it adds a sideways sliver dL = τdt to the large spin angular momentum. A perpendicular increment rotates a vector without shrinking it: the axle swings in a circle at Ω = τ/L = Mgr/(Iω). Nothing balances gravity vertically except the pivot's support force.",
        },
        {
          question:
            "As friction gradually slows a toy gyroscope's spin ω, its precession rate Ω = Mgr/(Iω):",
          options: [
            "slows in proportion, keeping the motion graceful",
            "speeds up, because Ω is inversely proportional to the spin rate",
            "stays constant, since gravity and geometry are unchanged",
            "drops to zero, and the gyroscope falls immediately",
          ],
          correctIndex: 1,
          explanation:
            "Ω ∝ 1/ω: less spin angular momentum means the same gravitational torque swings the axis around faster. You can watch a winding-down top precess quicker and quicker, then begin to nod (nutation) as the fast-top approximation fails, and finally tumble. The same inverse relation lets engineers set a gyrocompass's response by choosing its spin speed.",
        },
      ],
    },
    {
      id: "oscillations-in-depth",
      title: "Oscillations in Depth",
      subtitle:
        "SHM as an ODE, damping, driving, resonance, and the first coupled oscillators",
      sections: [
        {
          id: "shm-as-an-ode",
          title: "Simple Harmonic Motion, Solved Completely",
          content: `
<p>Chapter 2 guessed a cosine and got lucky. Now we solve the oscillator like professionals. The equation, in standard form:</p>
<p style="text-align:center; font-size:1.15em;"><strong>d²x/dt² + ω₀²x = 0,  ω₀ = √(k/m)</strong></p>
<p>A second-order linear ODE has exactly two independent solutions, and here they are cos ω₀t and sin ω₀t. Because the equation is <strong>linear</strong> — x appears only to the first power — any combination of solutions is a solution. The general solution is therefore:</p>
<p style="text-align:center;">x(t) = C₁ cos ω₀t + C₂ sin ω₀t = A cos(ω₀t + φ)</p>
<p>Two forms, same content: amplitude A = √(C₁² + C₂²) and phase φ package the two constants differently. The initial conditions x(0) and v(0) fix them: C₁ = x(0), C₂ = v(0)/ω₀.</p>
<p><strong>Energy makes the picture complete.</strong> With x = A cos(ω₀t + φ) and v = −Aω₀ sin(ω₀t + φ):</p>
<p style="text-align:center;">E = ½mv² + ½kx² = ½kA²(sin² + cos²) = ½kA² — constant.</p>
<p>Energy sloshes between kinetic (maximal at the centre) and potential (maximal at the turning points) twice per cycle, its total frozen. Averaged over a cycle, exactly half is kinetic and half potential — a fact with echoes all the way to quantum field theory.</p>
<p><strong>Worked example.</strong> A 0.25 kg mass on a 25 N/m spring is at x = 0.05 m moving at v = +1.5 m/s. Then ω₀ = 10 rad/s; C₁ = 0.05, C₂ = 0.15, so A = √(0.0025 + 0.0225) ≈ 0.158 m. Total energy ½kA² ≈ 0.31 J, and the mass will always turn around at ±15.8 cm no matter how the phases work out.</p>
<p><strong>Variation — the pendulum's confession.</strong> A pendulum obeys d²θ/dt² = −(g/L) sin θ — <em>not</em> SHM. But for small angles sin θ ≈ θ, and it becomes SHM with ω₀ = √(g/L). The familiar pendulum formula is a small-angle approximation; at 30° amplitude the true period runs about 1.7% long. Physics is full of such honest approximations, and knowing their limits is part of the craft.</p>
<div class="key-concept">
  <h4>Linearity is the superpower</h4>
  <p>Solutions of linear equations add. That single property underlies superposition of waves, interference, Fourier analysis, and quantum mechanics. SHM is where you first cash it in.</p>
</div>`,
        },
        {
          id: "damped-oscillations",
          title: "Damping: Three Regimes of Decay",
          content: `
<p>Real oscillators lose energy. Add a drag force −b·dx/dt and the equation of motion becomes:</p>
<p style="text-align:center; font-size:1.1em;"><strong>m d²x/dt² + b dx/dt + kx = 0</strong></p>
<p>Divide by m and define γ = b/2m (the damping rate) and ω₀² = k/m. Try the exponential ansatz x = e^(rt); substituting turns calculus into algebra: r² + 2γr + ω₀² = 0, with roots r = −γ ± √(γ² − ω₀²). Everything hangs on the sign under that square root.</p>
<ul>
  <li><strong>Underdamped (γ &lt; ω₀):</strong> complex roots. The solution is x(t) = A e^(−γt) cos(ω′t + φ) with ω′ = √(ω₀² − γ²): oscillation inside an exponentially shrinking envelope. The frequency is slightly <em>lowered</em> by damping. A struck bell, a plucked string, a child's swing left alone.</li>
  <li><strong>Overdamped (γ &gt; ω₀):</strong> two real negative roots; the system oozes back to equilibrium without a single overshoot, slower the heavier the damping. A door closer in molasses.</li>
  <li><strong>Critically damped (γ = ω₀):</strong> the boundary case — fastest possible return with no oscillation. This is the regime engineers pay for: car shock absorbers, galvanometer needles, door closers are tuned near critical damping, because underdamped bounces and overdamped dawdles.</li>
</ul>
<p><strong>Worked example.</strong> A 0.5 kg mass, k = 50 N/m, b = 2 kg/s. Then ω₀ = 10 rad/s and γ = 2 s⁻¹: underdamped. Oscillation frequency ω′ = √(100 − 4) ≈ 9.80 rad/s, barely shifted. The amplitude falls by e^(−γt); after t = 0.5 s it retains e⁻¹ ≈ 37%. Energy, going as amplitude squared, decays at rate 2γ — after 0.5 s only 13.5% remains.</p>
<p><strong>Variation.</strong> What b makes this system critically damped? γ = ω₀ requires b = 2mω₀ = 2 × 0.5 × 10 = 10 kg/s — five times the actual damping. Cars on worn shocks are underdamped: push down on the bonnet and count the bounces.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The 40-tonne mass damper hanging inside Taipei 101 is a deliberately damped pendulum tuned to the tower's sway frequency. During a 2015 typhoon it swung a full metre, drinking the building's oscillation energy — a skyscraper taking its own medicine.</p>
</div>`,
        },
        {
          id: "driven-oscillations-and-resonance",
          title: "Driven Oscillations and Resonance",
          interactive: "driven-oscillator",
          content: `
<p>Now push the oscillator rhythmically: add a driving force F₀ cos ωt, at a frequency ω of <em>your</em> choosing, to the damped equation:</p>
<p style="text-align:center; font-size:1.1em;"><strong>m d²x/dt² + b dx/dt + kx = F₀ cos ωt</strong></p>
<p>After transients die away (they decay like e^(−γt)), the system settles into <strong>steady state</strong>: it oscillates at the <em>driving</em> frequency ω — not its natural ω₀ — with amplitude</p>
<p style="text-align:center;">A(ω) = (F₀/m) / √((ω₀² − ω²)² + (2γω)²)</p>
<p>Read this remarkable formula limit by limit. Drive slowly (ω → 0): A → F₀/k, the static stretch — the mass simply tracks the force. Drive absurdly fast (ω → ∞): A → 0, the mass cannot keep up and barely quivers. In between, near <strong>ω ≈ ω₀</strong>, the denominator's first term vanishes and the amplitude spikes: <strong>resonance</strong>. At resonance the response is limited only by damping: A_res ≈ F₀/(2mγω₀) — lighter damping, taller peak. With zero damping the formula diverges, which is mathematics announcing that something breaks.</p>
<p>The <strong>Q factor</strong>, Q = ω₀/(2γ), measures the sharpness: high Q means a tall, narrow resonance peak (width Δω ≈ ω₀/Q) and many free oscillations before decay (energy falls by e^(−2π) in Q radians' worth... roughly, Q/2π cycles per e-folding). A wine glass rings at Q of a few thousand; a quartz watch crystal, around 100,000 — which is why a singer can shatter the glass and your watch keeps seconds for years.</p>
<p>Phase completes the story: below resonance the mass moves in step with the force; far above, it moves opposite; exactly at ω₀ it lags by 90° — and that quarter-cycle lag means the force always pushes in the direction of motion, feeding in energy at the maximum possible rate. Use the interactive lab here: sweep the driving frequency across ω₀, watch the amplitude climb the resonance curve, and lower the damping to see the peak sharpen.</p>
<p><strong>Worked example.</strong> A child's swing has ω₀ ≈ 2 rad/s (period ~3 s). Pushing at random moments accomplishes little; pushing once per period — at ω = ω₀, and in phase with the velocity — grows the amplitude steadily. Every parent is a resonance engineer.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>London's Millennium Bridge closed two days after opening in 2000: pedestrians' lateral footfalls (~1 Hz) resonated with the deck's sway mode, and people instinctively synchronized to the motion, driving it harder — a feedback resonance. The fix was retrofitted dampers: engineering Q downward.</p>
</div>`,
        },
        {
          id: "coupled-oscillators-intro",
          title: "Coupled Oscillators and Normal Modes",
          content: `
<p>Connect two identical pendulums with a weak spring and set only the first one swinging. Watch for a minute and something uncanny happens: the first pendulum gradually stills as the second wakes, until the motion has passed over entirely — then it flows back. Energy sloshes between them forever. This is the doorway to waves, and the key that unlocks it is the <strong>normal mode</strong>.</p>
<p>For two equal masses m with equal springs k coupled by a spring k_c, the equations of motion are tangled — each acceleration depends on both positions:</p>
<p style="text-align:center;">m d²x₁/dt² = −kx₁ − k_c(x₁ − x₂),  m d²x₂/dt² = −kx₂ − k_c(x₂ − x₁)</p>
<p>The untangling trick: add the two equations, then subtract them. Defining s = x₁ + x₂ and d = x₁ − x₂:</p>
<ul>
  <li>m d²s/dt² = −ks → s oscillates at ω₁ = √(k/m)</li>
  <li>m d²d/dt² = −(k + 2k_c)d → d oscillates at ω₂ = √((k + 2k_c)/m)</li>
</ul>
<p>Two clean, independent SHM equations. The coordinates s and d are the normal modes: <strong>in-phase</strong> motion (both swing together, coupling spring never stretches, frequency unchanged) and <strong>out-of-phase</strong> motion (they swing oppositely, coupling spring works hard, frequency higher). <em>Any</em> motion of the system is a superposition of these two — including the energy-trading spectacle above, which is the two modes, at slightly different frequencies, drifting in and out of step: <strong>beats</strong> between modes.</p>
<p><strong>Variation.</strong> Three coupled masses have three normal modes; N masses have N. Push N toward infinity — a chain of coupled atoms — and the modes become the standing waves of a continuous string, with frequencies filling out a spectrum. Waves are the N → ∞ limit of coupled oscillators, which is precisely where the waves course begins.</p>
<div class="analogy">
  <h3>Analogy: Finding the Grain</h3>
  <p>Coupled equations are like wood: hack across the grain and everything splinters together; cut along it and the problem falls into clean pieces. Normal modes are the grain of an oscillating system — the special directions along which the dynamics is just independent SHM.</p>
</div>
<div class="key-concept">
  <h4>Why this matters beyond pendulums</h4>
  <p>CO₂'s vibrational normal modes absorb infrared — the greenhouse effect is molecular coupled-oscillator physics. The same mode-decomposition, quantized, becomes photons and phonons. Learn to diagonalize two masses now, and quantum field theory will feel oddly familiar later.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In x(t) = A cos(ω₀t + φ) for a mass on a spring, which quantities are fixed by the system and which by the initial conditions?",
          options: [
            "A and φ are fixed by the system; ω₀ by the release",
            "All three are set by initial conditions",
            "ω₀ = √(k/m) is fixed by the system; A and φ are set by the initial position and velocity",
            "All three are fixed by k and m",
          ],
          correctIndex: 2,
          explanation:
            "The differential equation d²x/dt² + ω₀²x = 0 dictates the frequency: only ω₀ = √(k/m) works, regardless of how the motion starts. But a second-order equation owes two free constants, and A and φ are exactly those — determined by x(0) and v(0). System sets the tempo; you set the size and the starting point in the cycle.",
        },
        {
          question:
            "A damped oscillator has γ slightly less than ω₀. Its motion is best described as:",
          options: [
            "oscillation at ω′ = √(ω₀² − γ²) inside an envelope decaying like e^(−γt)",
            "a slow, non-oscillatory creep back to equilibrium",
            "oscillation at exactly ω₀ with constant amplitude",
            "an immediate stop at equilibrium",
          ],
          correctIndex: 0,
          explanation:
            "With γ < ω₀ the characteristic roots are complex: the system is underdamped, ringing at the slightly lowered frequency ω′ = √(ω₀² − γ²) while the amplitude shrinks exponentially at rate γ. Overdamped (γ > ω₀) gives the non-oscillatory creep; critical damping (γ = ω₀) is the engineered sweet spot — fastest return with zero overshoot.",
        },
        {
          question:
            "Why do engineers tune car shock absorbers close to critical damping?",
          options: [
            "Critical damping maximizes the resonance peak for a comfortable ride",
            "It is the cheapest damping to manufacture",
            "Critical damping gives the fastest return to equilibrium without oscillation — no bounce, no wallow",
            "It makes the suspension's natural frequency zero",
          ],
          correctIndex: 2,
          explanation:
            "Underdamped suspension bounces repeatedly after every bump; overdamped suspension responds sluggishly and can't track the road. Critical damping (γ = ω₀) is the mathematical boundary: the quickest possible settling with no overshoot. Push down on a car's bonnet — a healthy car rises once and stops; multiple bounces mean worn (underdamped) shocks.",
        },
        {
          question:
            "A driven oscillator in steady state is being pushed at ω well below ω₀, then the driving is swept up through ω₀. What does the response amplitude do?",
          options: [
            "It decreases steadily, since driving fights the natural motion",
            "It starts near the static value F₀/k, climbs to a damping-limited peak near ω₀, then falls toward zero at high ω",
            "It stays constant — steady state means constant amplitude",
            "It is zero until ω = ω₀ exactly, then jumps",
          ],
          correctIndex: 1,
          explanation:
            "The response A(ω) = (F₀/m)/√((ω₀²−ω²)² + (2γω)²) interpolates three regimes: quasi-static tracking (A ≈ F₀/k) at low ω, the resonance spike near ω₀ where only damping caps the amplitude, and vanishing response at high ω where the mass can't follow. The peak height is roughly Q times the static response — this is the curve the resonance lab lets you trace.",
        },
        {
          question:
            "Two identical coupled pendulums are described by normal-mode coordinates s = x₁ + x₂ and d = x₁ − x₂. What makes these coordinates special?",
          options: [
            "They measure the energy of each pendulum separately",
            "They are the only coordinates in which the pendulums stop interacting physically",
            "s is always zero for real motion",
            "Each obeys its own independent SHM equation with a single frequency — the coupled system decouples into two simple oscillators",
          ],
          correctIndex: 3,
          explanation:
            "Adding and subtracting the coupled equations of motion produces m·s″ = −ks and m·d″ = −(k+2k_c)d: two independent harmonic oscillators, one per mode. The in-phase mode never stretches the coupling spring (lower frequency); the out-of-phase mode works it hard (higher frequency). Every possible motion — including the eerie energy transfer between pendulums — is a superposition of these two modes beating against each other.",
        },
      ],
    },
    {
      id: "central-forces-orbits",
      title: "Central Forces & Orbits",
      subtitle:
        "Effective potential, the orbit equation, and Kepler's laws derived from first principles",
      sections: [
        {
          id: "central-forces-and-effective-potential",
          title: "Central Forces and the Effective Potential",
          content: `
<p>A <strong>central force</strong> points always along the line to a fixed centre, with strength depending only on distance: F = f(r)r̂. Gravity and the Coulomb force are the great examples. Two conservation laws follow instantly and do most of the work.</p>
<p><strong>Angular momentum.</strong> The torque about the centre is r × F, and F is parallel to r, so τ = 0: L is conserved. Consequences: the orbit stays in a fixed plane (L's direction is frozen), and L = mr²(dθ/dt) is constant — when r shrinks, the angular sweep rate grows.</p>
<p><strong>Energy.</strong> In polar coordinates the speed splits into radial and angular parts, so</p>
<p style="text-align:center;">E = ½m(dr/dt)² + ½mr²(dθ/dt)² + U(r)</p>
<p>Now the masterstroke. Use L = mr²(dθ/dt) to eliminate the angular velocity: ½mr²(dθ/dt)² = L²/(2mr²). The energy becomes</p>
<p style="text-align:center; font-size:1.1em;">E = ½m(dr/dt)² + <strong>U_eff(r)</strong>,  where U_eff(r) = U(r) + L²/(2mr²)</p>
<p>The two-dimensional orbit problem has collapsed to one-dimensional motion in r, governed by an <strong>effective potential</strong> — the true potential plus a repulsive <strong>centrifugal barrier</strong> L²/(2mr²) that grows steeply at small r. Every energy-diagram skill from chapter 4 now applies to orbits.</p>
<p><strong>Worked example — reading gravity's U_eff.</strong> With U = −GMm/r, the barrier dominates at small r (+1/r² beats −1/r) and gravity dominates at large r, so U_eff dips to a single minimum in between and rises to zero at infinity. Read off the orbit taxonomy: E at the minimum → r fixed → <strong>circular orbit</strong>. Minimum &lt; E &lt; 0 → two turning points, perihelion and aphelion → <strong>bound orbit</strong> (the ellipse, as the next section proves). E ≥ 0 → one turning point, escape to infinity → <strong>hyperbolic flyby</strong>. Every spacecraft, comet, and planet is a horizontal line on this one diagram.</p>
<p><strong>Variation.</strong> Why does nothing simply fall into the Sun? To hit the centre a body must overcome the centrifugal barrier, which blows up as 1/r² — impossible with any nonzero L. Orbiting is not balance; it is perpetually missing, protected by angular momentum.</p>
<div class="key-concept">
  <h4>The template of modern physics</h4>
  <p>Reduce dimensions using conservation laws, then read an effective potential. The same move analyzes orbits around black holes (where general relativity adds a term that lets the barrier fail) and the hydrogen atom in quantum mechanics.</p>
</div>`,
        },
        {
          id: "the-orbit-equation",
          title: "The Orbit Equation: Why Ellipses?",
          content: `
<p>The effective potential tells you the range of r, but not the shape traced in space. For that, we want r as a function of θ — the orbit's geometry with time eliminated. Two substitutions crack it open.</p>
<p><strong>Setup.</strong> The radial equation of motion for gravity is m(d²r/dt² − r(dθ/dt)²) = −GMm/r². Substitute u = 1/r, and convert time derivatives to θ derivatives using L = mr²(dθ/dt) (so d/dt = (Lu²/m) d/dθ). After the dust settles — each step is chain rule plus bookkeeping — the equation transforms into something astonishing:</p>
<p style="text-align:center; font-size:1.1em;"><strong>d²u/dθ² + u = GMm²/L²</strong></p>
<p>Look hard at that. It is the <em>harmonic oscillator equation</em> — in the variable u = 1/r, with θ playing the role of time, plus a constant push. We already know its general solution: the constant particular solution plus free oscillation,</p>
<p style="text-align:center;">u(θ) = GMm²/L² + C cos(θ − θ₀)</p>
<p>Invert back to r and tidy the constants:</p>
<p style="text-align:center; font-size:1.05em;"><strong>r(θ) = p / (1 + e cos θ)</strong>, with p = L²/(GMm²)</p>
<p>This is precisely the polar equation of a <strong>conic section</strong> with eccentricity e: a circle for e = 0, an ellipse for 0 &lt; e &lt; 1, a parabola for e = 1, a hyperbola for e &gt; 1 — matching, case by case, the energy taxonomy from the effective potential (one can show e depends on E, with e &lt; 1 exactly when E &lt; 0). Kepler's first law — planets move on ellipses with the Sun at one focus — is no longer an observed mystery. It is the solution of an ODE.</p>
<p><strong>Variation — why inverse-square is special.</strong> Repeat the derivation for a general force f(r) and the clean oscillator only emerges for the inverse-square law (and, curiously, the linear spring force). For anything else the orbit fails to close — the ellipse slowly rotates, or "precesses." That is exactly how nature flags departures from 1/r²: Mercury's orbit precesses 43 arcseconds per century beyond all Newtonian accounting, and explaining it was general relativity's first triumph.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In 1684 Halley asked Newton what orbit an inverse-square force implies. "An ellipse," Newton replied instantly — "I have calculated it." The lost calculation, redone at Halley's urging, grew into the Principia. The derivation above is the modern descendant of that answer.</p>
</div>`,
        },
        {
          id: "keplers-laws-derived",
          title: "Kepler's Laws, All Three, from F = ma",
          content: `
<p>Johannes Kepler distilled decades of Tycho Brahe's naked-eye planetary data into three empirical laws (1609–1619). Newton's program — and this section — derives all three from mechanics.</p>
<p><strong>First law: elliptical orbits, Sun at a focus.</strong> Done — the orbit equation r = p/(1 + e cos θ) of the previous section, with 0 &lt; e &lt; 1 for bound orbits.</p>
<p><strong>Second law: the line from Sun to planet sweeps equal areas in equal times.</strong> This one is pure angular momentum. In time dt the radius vector sweeps a thin triangle of area dA = ½r·(r dθ) = ½r² dθ. Therefore</p>
<p style="text-align:center;">dA/dt = ½r²(dθ/dt) = L/(2m) = constant.</p>
<p>Equal areas is conservation of angular momentum wearing 17th-century clothes. It holds for <em>any</em> central force, inverse-square or not — and it is why comets crawl at aphelion and whip around perihelion.</p>
<p><strong>Third law: T² ∝ a³.</strong> Integrate the sweep rate over a full orbit: the ellipse's area πab equals (L/2m)T. Square this, then use the geometry of the ellipse (b² = a²(1−e²)) and the orbit-equation constant p = L²/(GMm²) = a(1−e²) to eliminate L and b. The eccentricity cancels completely, leaving:</p>
<p style="text-align:center; font-size:1.1em;"><strong>T² = (4π²/GM) a³</strong></p>
<p>The period depends only on the semi-major axis a and the central mass M — not on eccentricity, not on the planet's own mass.</p>
<p><strong>Worked example — weighing the Sun.</strong> Earth: a = 1.496 × 10¹¹ m, T = 3.156 × 10⁷ s. Solve for M = 4π²a³/(GT²) ≈ 2.0 × 10³⁰ kg. Kepler's third law is a scale: any orbit weighs its central body. The same formula, applied to stars orbiting the Milky Way's centre, yields four million solar masses in a region smaller than the solar system — the black hole Sagittarius A*, weighed exactly this way (Nobel Prize, 2020).</p>
<div class="key-concept">
  <h4>What "derived" buys you</h4>
  <p>Kepler's laws as data fits applied to six planets. Derived from F = ma, they apply to exoplanets, binary stars, satellites, and moons — and their small violations (precession, perturbations) become tools: Neptune was discovered from wobbles in Uranus's Keplerian orbit.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Kepler initially resisted the ellipse, calling it a "cartload of dung" compared to the divine circle — but Tycho's Mars data disagreed with a circle by eight arcminutes, and Kepler trusted the data. That choice, precision over beauty, is a decent definition of modern science.</p>
</div>`,
        },
        {
          id: "orbital-transfers",
          title: "Orbital Transfers: Engineering with Kepler",
          content: `
<p>Orbit theory becomes engineering the moment you want to go somewhere. The tool of the trade is the <strong>vis-viva equation</strong>, which follows from energy conservation plus the (derivable) fact that a bound orbit's total energy is E = −GMm/2a:</p>
<p style="text-align:center; font-size:1.05em;"><strong>v² = GM(2/r − 1/a)</strong></p>
<p>Know your current distance r and your orbit's semi-major axis a, and you know your speed — and, crucially, how a burn that changes v changes a.</p>
<p><strong>Worked example — the Hohmann transfer.</strong> To climb from a low circular orbit of radius r₁ to a higher one of radius r₂ efficiently, fly half of an ellipse that kisses both circles: perigee at r₁, apogee at r₂, so a = (r₁ + r₂)/2.</p>
<ol>
  <li><strong>Burn 1 (at r₁):</strong> vis-viva with the new a gives the required perigee speed — faster than circular speed at r₁. Burn prograde by the difference Δv₁.</li>
  <li><strong>Coast</strong> half the ellipse, trading speed for altitude, arriving at r₂ moving slower than circular speed there.</li>
  <li><strong>Burn 2 (at r₂):</strong> prograde again by Δv₂ to circularize.</li>
</ol>
<p>For LEO (r₁ ≈ 6,700 km) to geostationary orbit (r₂ ≈ 42,200 km), the two burns total about 3.9 km/s. Note the paradox worth savoring: you fire your engine <em>forward</em> twice, yet end up moving <em>slower</em> (geostationary speed 3.1 km/s vs LEO's 7.7). Raising an orbit buys potential energy at the price of kinetic — the vis-viva equation keeps the books.</p>
<p><strong>Variation — the interplanetary version.</strong> Replace Earth-centred circles with Sun-centred ones and the same half-ellipse is a route to Mars: about 9 months in transit, with launch windows every 26 months when Mars will be at the arrival point on schedule. Every Mars rover flew an orbit that is, at heart, this worked example. Gravity assists — stealing momentum from a planet during a flyby — are the advanced trick that sent Voyager past four planets, but Hohmann is the baseline against which all cleverness is measured.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Walter Hohmann published the transfer ellipse in 1925, when no rocket could reach the stratosphere. He was a city architect in Essen who did celestial mechanics at night — and his name is now attached to nearly every satellite manoeuvre ever flown.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the effective potential U_eff(r) = U(r) + L²/(2mr²), what is the physical origin of the second term?",
          options: [
            "The kinetic energy of angular motion, rewritten using conservation of L — it acts as a repulsive barrier at small r",
            "A quantum correction to Newtonian gravity",
            "The gravitational self-energy of the orbiting body",
            "Air resistance encountered during the orbit",
          ],
          correctIndex: 0,
          explanation:
            "The angular part of the kinetic energy, ½mr²(dθ/dt)², becomes L²/(2mr²) once dθ/dt is eliminated via L = mr²(dθ/dt). Folded into the potential, it grows like 1/r² as r shrinks — a centrifugal barrier that outcompetes gravity's −1/r and prevents any orbit with L ≠ 0 from reaching the centre. Orbits don't balance; they're barred from falling in.",
        },
        {
          question:
            "The substitution u = 1/r turns the gravitational orbit problem into d²u/dθ² + u = GMm²/L². Why is this transformation so powerful?",
          options: [
            "It eliminates gravity from the problem entirely",
            "It converts the orbit into an equation with the same form as the harmonic oscillator, whose solution — a constant plus a cosine — inverts to the conic r = p/(1 + e cos θ)",
            "It proves orbits must be circles",
            "It shows angular momentum is not conserved",
          ],
          correctIndex: 1,
          explanation:
            "The transformed equation is the SHM equation in disguise, with θ as 'time' and a constant forcing term. Its solution u = GMm²/L² + C cos(θ − θ₀) inverts to r(θ) = p/(1 + e cosθ) — the polar equation of a conic section. Kepler's mysterious ellipses are thus the 'oscillation' of 1/r around a constant, and the oscillator you mastered in chapter 6 solves the solar system.",
        },
        {
          question:
            "Kepler's equal-areas law (the second law) is a direct consequence of:",
          options: [
            "the inverse-square form of gravity specifically",
            "energy conservation",
            "conservation of angular momentum — dA/dt = L/2m holds for any central force",
            "the planet's orbit being exactly circular",
          ],
          correctIndex: 2,
          explanation:
            "The swept area rate is dA/dt = ½r²(dθ/dt) = L/(2m), constant whenever L is conserved — which requires only that the force be central (zero torque), not that it be inverse-square. That's why comets on wildly eccentric orbits still obey it, racing at perihelion and crawling at aphelion. The first and third laws, by contrast, do depend on the 1/r² form.",
        },
        {
          question:
            "Two satellites orbit the same planet on different ellipses with equal semi-major axes a, but one orbit is nearly circular and the other highly eccentric. Their periods are:",
          options: [
            "longer for the eccentric orbit, which travels farther",
            "shorter for the eccentric orbit, which moves faster at perigee",
            "impossible to compare without knowing the masses of the satellites",
            "identical — T² = (4π²/GM)a³ depends only on a and the central mass",
          ],
          correctIndex: 3,
          explanation:
            "In the derivation of the third law the eccentricity cancels exactly: T² = (4π²/GM)a³. The eccentric orbit's perihelion sprint and aphelion crawl average out to the same period as the circle's steady pace. Satellite mass never enters either — which is also why Kepler's law can 'weigh' the central body from any orbiting object.",
        },
        {
          question:
            "During a Hohmann transfer to a higher circular orbit, a spacecraft fires its engine prograde (forward) twice, yet ends up moving slower than it started. How?",
          options: [
            "Both burns add kinetic energy, but the climb converts even more kinetic energy into gravitational potential energy — vis-viva shows higher orbits are slower orbits",
            "The engine actually fires retrograde on the second burn",
            "Drag from the upper atmosphere removes the excess speed",
            "This is impossible; the final orbit must be faster",
          ],
          correctIndex: 0,
          explanation:
            "Each prograde burn raises the orbit's energy and semi-major axis. But by vis-viva, v² = GM(2/r − 1/a), circular speed falls as radius grows: the energy gained goes into altitude with interest taken from speed. LEO moves at 7.7 km/s, geostationary at 3.1 km/s. In orbital mechanics, speeding up (locally) is how you end up going slower (globally) — one of its famous inversions of intuition.",
        },
      ],
    },
    {
      id: "noninertial-frames",
      title: "Noninertial Frames",
      subtitle: "Pseudo-forces, rotating frames, the Coriolis force, and tides",
      sections: [
        {
          id: "pseudo-forces",
          title: "Pseudo-Forces: Physics in an Accelerating Frame",
          content: `
<p>Newton's laws hold in <strong>inertial frames</strong> — frames that do not accelerate. But sometimes the convenient frame is the accelerating one: the inside of a braking train, a turning car, a lift. You can still use F = ma there, provided you pay an admission fee: add, to every object of mass m, a <strong>pseudo-force</strong></p>
<p style="text-align:center; font-size:1.1em;"><strong>F_pseudo = −mA</strong></p>
<p>where A is the frame's acceleration. It points opposite to the frame's acceleration, and it is "fictitious" in a precise sense: no agent exerts it, and it vanishes the moment you re-describe events from an inertial frame. Yet inside the frame it is perfectly real to experience — it is what throws you forward under braking.</p>
<p><strong>Worked example — the lift.</strong> You (mass 70 kg) stand on a scale in a lift accelerating upward at 2 m/s². In the lift frame you are in equilibrium: scale force N up, gravity mg down, pseudo-force mA down (opposite the upward acceleration). So N = m(g + A) = 70 × 11.8 ≈ 826 N — the scale reads heavy, about 84 kg worth. Accelerating downward at 2 m/s² flips the sign: N = 70 × 7.8 ≈ 546 N, and you feel light. Let the cable snap (A = g) and N = 0: <strong>weightlessness</strong>. Astronauts float not because gravity is absent — at ISS altitude it is 90% of surface strength — but because a freely falling frame's pseudo-force cancels gravity exactly.</p>
<p><strong>Variation — the pendulum in a car.</strong> A charm hangs from the mirror of a car accelerating at A. In the car frame it feels gravity mg down and pseudo-force mA backward, so it settles at angle tan θ = A/g from vertical — a built-in accelerometer. Every smartphone measures tilt and acceleration with exactly this physics, miniaturized.</p>
<div class="key-concept">
  <h4>The equivalence seed</h4>
  <p>Inside a closed box, a uniform pseudo-force from acceleration is indistinguishable from a uniform gravitational field — the lift example is the proof. Einstein promoted this from a nuisance to a principle: gravity itself is locally equivalent to acceleration. That thought, pursued relentlessly, becomes general relativity.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Vomit Comet" aircraft create weightlessness by flying the parabola a projectile would follow, making the cabin a freely falling frame for 20–25 seconds per arc. The physics of floating astronauts in films is usually shot exactly this way.</p>
</div>`,
        },
        {
          id: "rotating-frames-and-centrifugal-force",
          title: "Rotating Frames and the Centrifugal Force",
          content: `
<p>A frame rotating at constant angular velocity ω is accelerating everywhere — every point of it runs in a circle — so richer pseudo-forces appear. Transforming Newton's second law into the rotating frame (a careful exercise in differentiating rotating unit vectors) yields two velocity-independent... rather, two distinct terms. For an object at position r (measured from the axis) moving with velocity v <em>in the rotating frame</em>:</p>
<ul>
  <li><strong>Centrifugal force:</strong> F_cf = mω²r, pointing radially outward. It depends only on position.</li>
  <li><strong>Coriolis force:</strong> F_cor = −2m ω × v, perpendicular to the velocity. It acts only on <em>moving</em> objects, and it gets the next section to itself.</li>
</ul>
<p>The centrifugal force is the familiar one. On a merry-go-round, you must grip the rail: in your rotating frame, something pulls you outward with strength mω²r, and your grip supplies the balancing inward force. From the ground frame the description inverts: nothing pulls outward; your grip provides the centripetal force ω²r that keeps you circling. Same physics, two accountings.</p>
<p><strong>Worked example — artificial gravity.</strong> A space station shaped like a ring of radius 100 m spins so that rim-dwellers feel centrifugal "gravity" of g. Require ω²r = 9.8: ω = √(9.8/100) ≈ 0.31 rad/s — about 3 revolutions per minute. A resident's head (at r ≈ 98 m) feels 2% less gravity than her feet; spin a smaller station faster for the same g and that gradient grows, which is why fictional stations are huge and real designs favour long tethers.</p>
<p><strong>Variation — Earth itself.</strong> Earth rotates once per day (ω ≈ 7.3 × 10⁻⁵ rad/s), so at the equator the centrifugal effect is ω²R ≈ 0.034 m/s², about 0.3% of g. Two consequences you can measure: you weigh slightly less at the equator than at the poles, and the planet itself bulges — Earth's equatorial radius exceeds its polar radius by 21 km because rock, over geological time, flows to balance the same pseudo-force you feel on the merry-go-round.</p>
<div class="analogy">
  <h3>Analogy: The Honest Fee</h3>
  <p>Working in a rotating frame is like hiring a translator who charges a fixed, published fee. Pay it — add centrifugal and Coriolis forces by the formulas — and everything Newton promised still works. The forces are not mysterious; they are the exchange rate between a spinning viewpoint and an inertial one.</p>
</div>`,
        },
        {
          id: "the-coriolis-force",
          title: "The Coriolis Force: Why Storms Spin",
          content: `
<p>The centrifugal force pushes on everything; the <strong>Coriolis force</strong> singles out things that move. Its formula, F = −2m ω × v, makes it perpendicular to the velocity — it never speeds anything up or slows it down, it only <em>deflects</em>. In Earth's northern hemisphere the deflection is to the <strong>right</strong> of the motion; in the southern, to the left. Its magnitude, 2mωv sin(latitude), is tiny for everyday speeds — which is why it does not affect sinks or bathtubs — but it compounds relentlessly over large distances and long times.</p>
<p>The intuition: air moving toward the pole carries the larger eastward rotational speed of the latitude it left (the equator moves east at 465 m/s; higher latitudes move slower). Conserving that eastward motion while the ground beneath slows, the air drifts ahead of the ground — deflected east, i.e. rightward. Motion toward the equator lags behind: deflected west, rightward again.</p>
<p><strong>Worked example — the hurricane.</strong> Air rushes toward a low-pressure centre from all sides. Each inbound stream deflects right (northern hemisphere), so the convergence misses the centre and winds up circulating <strong>counterclockwise</strong> around the low. Around a high-pressure centre the outflow deflects into clockwise rotation. Southern hemisphere: everything mirrored. Cyclones cannot form on the equator itself — sin(latitude) = 0 kills the effect — and indeed hurricanes are born at least ~5° from it.</p>
<p><strong>Variation — the artillery shell.</strong> A shell fired north at 800 m/s at latitude 45° feels Coriolis acceleration 2ωv sin 45° ≈ 2(7.3 × 10⁻⁵)(800)(0.71) ≈ 0.083 m/s². Over a 40 s flight that integrates to a rightward drift of ½at² ≈ 66 m — a clean miss. Long-range gunnery tables have included Coriolis corrections since the 19th century.</p>
<p>The most elegant demonstration is <strong>Foucault's pendulum</strong> (1851): a long pendulum swings in a fixed plane while Earth rotates beneath it, so to us the swing plane appears to turn — a full circle per day at the pole, once per 32 hours in Paris (period = 24 h/sin latitude). It was the first direct, indoor proof that Earth rotates.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The "toilets swirl backwards in Australia" legend is false: at sink scale the Coriolis acceleration is millions of times weaker than the water's residual currents. Basin shape and how you filled it decide the swirl. Hurricanes obey the Coriolis force; plumbing does not.</p>
</div>`,
        },
        {
          id: "tides",
          title: "Tides: Gravity's Gradient",
          content: `
<p>The tides seem simple — the Moon pulls the ocean — until you meet the awkward fact: there are <strong>two</strong> high tides a day, one facing the Moon and one on the far side. Pulling cannot obviously produce a bulge pointing <em>away</em> from the puller. The resolution is that tides are caused not by gravity but by gravity's <em>differences</em>.</p>
<p>Earth as a whole is in free fall toward the Moon, accelerating at the value of the Moon's field at Earth's <em>centre</em>. In Earth's freely falling frame, that mean pull is cancelled by the pseudo-force — what remains at any point is the <strong>difference</strong> between the local lunar pull and the mean. The near-side ocean is pulled harder than average: residual force toward the Moon. The far side is pulled more weakly than average: residual force <em>away</em> from the Moon. Two bulges, and Earth rotates beneath them: two high tides per day (actually per 24 h 50 min, since the Moon advances along its orbit).</p>
<p><strong>Worked estimate.</strong> The tidal (differential) acceleration across an Earth radius r, from a body of mass M at distance d, is the derivative of the field:</p>
<p style="text-align:center;">a_tidal ≈ d/dd (GM/d²) × r = <strong>2GMr/d³</strong></p>
<p>The crucial feature: tides fall off as <strong>1/d³</strong>, one power faster than gravity. This is why the Moon out-tides the Sun despite the Sun's field at Earth being 180 times stronger: the Sun is 390 times farther, and 1/d³ punishes distance mercilessly. Plugging in numbers gives solar tides about 46% of lunar. When Sun and Moon align (new and full moon), their bulges add: <strong>spring tides</strong>. At quarter moons they fight: <strong>neap tides</strong>.</p>
<p><strong>Variation — tides as sculptors.</strong> Tidal friction transfers Earth's spin angular momentum to the Moon's orbit: days lengthen ~2 ms per century and the Moon recedes 3.8 cm per year (measured by laser, off Apollo-era mirrors). The same physics locked the Moon's rotation to its orbit — why we see one face — heats Jupiter's moon Io into the solar system's most volcanic body, and, near a black hole, stretches infalling matter in the process astrophysicists genuinely call <em>spaghettification</em>. All of it is 2GMr/d³ at different scales.</p>
<div class="key-concept">
  <h4>Tides are the frame-thinking payoff</h4>
  <p>The two-bulge puzzle is unsolvable by "the Moon pulls water" but transparent in the freely falling frame: subtract the mean pull, keep the residuals. Noninertial-frame reasoning, used honestly, turns a famous confusion into a two-line argument — a fitting close for classical mechanics, and a doorway: residual gravity across a freely falling frame is precisely what general relativity calls spacetime curvature.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A passenger stands on a scale in a lift accelerating downward at 3 m/s². Compared with the stationary reading, the scale shows:",
          options: [
            "the same weight — gravity hasn't changed",
            "more weight, because the lift presses up harder",
            "less weight: in the lift frame an upward pseudo-force of 3m newtons partially cancels gravity, so N = m(g − 3)",
            "zero — any downward acceleration produces weightlessness",
          ],
          correctIndex: 2,
          explanation:
            "In the frame of a lift accelerating downward with A, the pseudo-force −mA points upward. Equilibrium in that frame gives N = m(g − A) — lighter, but not weightless. Full weightlessness needs A = g: free fall. That limiting case, N = 0 while gravity is still fully present, is exactly the situation of astronauts in orbit.",
        },
        {
          question:
            "A rotating ring-shaped space station of radius 100 m provides artificial gravity of g at the rim. Roughly what spin is required, and via which relation?",
          options: [
            "About 0.31 rad/s (roughly 3 rpm), from setting the centrifugal acceleration ω²r equal to 9.8 m/s²",
            "About 9.8 rad/s, from setting ωr = g",
            "One rotation per day, matching Earth",
            "Any spin works if the ring is massive enough to attract residents gravitationally",
          ],
          correctIndex: 0,
          explanation:
            "In the station's rotating frame residents feel an outward centrifugal force mω²r; making ω²r = 9.8 with r = 100 m gives ω = √0.098 ≈ 0.31 rad/s — about three revolutions per minute. Smaller stations need faster spin for the same g, which worsens the head-to-foot gravity gradient and Coriolis side-effects; that is why realistic designs are large rings or long tethers.",
        },
        {
          question:
            "Why does air converging on a low-pressure centre in the northern hemisphere end up circulating counterclockwise?",
          options: [
            "Because warm air naturally rises in spirals",
            "Each inbound stream is deflected to the right by the Coriolis force, so the flows collectively miss the centre and orbit it counterclockwise",
            "The centrifugal force of Earth's rotation spins the storm directly",
            "Ocean currents beneath the storm drag the air around",
          ],
          correctIndex: 1,
          explanation:
            "The Coriolis force −2mω×v deflects northern-hemisphere motion rightward regardless of direction. Air rushing inward from the north is bent west, from the south bent east, and so on — every stream sidesteps the centre the same way, and the net result is counterclockwise circulation around lows (clockwise in the southern hemisphere). The effect vanishes at the equator, which is why hurricanes never form there.",
        },
        {
          question:
            "The Sun's gravitational pull on Earth is about 180 times stronger than the Moon's, yet lunar tides dominate. Why?",
          options: [
            "The Moon's pull is oriented more directly at the oceans",
            "The Sun's tide is cancelled by its own light pressure",
            "Ocean water responds only to nearby bodies for chemical reasons",
            "Tides depend on the difference in pull across Earth, which falls as 1/d³ — the Moon's closeness beats the Sun's strength",
          ],
          correctIndex: 3,
          explanation:
            "The tidal acceleration is 2GMr/d³ — the gradient of the field across Earth's diameter, not the field itself. Gravity falls as 1/d², but its difference across a fixed span falls as 1/d³, so the Sun's 390-times-greater distance costs it a factor of 390 relative to raw pull. Net result: solar tides are only ~46% of lunar. Aligned (new/full moon) they add as spring tides; in quadrature they partially cancel as neaps.",
        },
        {
          question:
            "Why are there two high tides per day rather than one?",
          options: [
            "In Earth's freely falling frame the mean lunar pull cancels, leaving residuals: toward the Moon on the near side and away from it on the far side — two bulges that Earth rotates through",
            "The Moon orbits Earth twice a day",
            "One tide is caused by the Moon and the other, exactly opposite, by the Sun",
            "Water reflects off continental coastlines, producing an echo tide",
          ],
          correctIndex: 0,
          explanation:
            "Earth as a whole free-falls toward the Moon at the field's central value. Subtract that mean (the pseudo-force of the falling frame) and what remains is the tidal residual: near-side water is pulled harder than average (bulge toward the Moon), far-side water more weakly (bulge away). Earth's rotation carries each coastline through both bulges every 24 h 50 min — two highs, two lows, with the 50 minutes coming from the Moon's own orbital motion.",
        },
      ],
    },
  ],
};
