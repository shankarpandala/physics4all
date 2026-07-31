export const subject22 = {
  id: "differential-equations-linear-algebra",
  number: 22,
  title: "Differential Equations & Linear Algebra",
  description:
    "The MIT 18.03 + 18.06 (Strang) pair in one subject — second-order ODEs, eigenvalue problems, and inner-product spaces, timed so that linear algebra lands immediately before the quantum formalism that is built on it.",
  phase: 4,
  chapters: [
    {
      id: "second-order-odes",
      title: "Second-Order ODEs",
      subtitle:
        "Constant-coefficient linear equations and the mathematics behind resonance",
      sections: [
        {
          id: "the-oscillator-equation",
          title: "One Equation, All of Oscillation",
          content: `
<p>Pull a mass on a spring away from equilibrium, let it go, and Newton's second law hands you the single most important differential equation in physics:</p>
<p style="text-align:center; font-size:1.15em;"><strong>m x″ + b x′ + k x = F(t)</strong></p>
<p>Read it term by term: m x″ is inertia (mass times acceleration), −b x′ is a <strong>damping</strong> force proportional to velocity and opposing it, −k x is the spring's <strong>restoring</strong> force, and F(t) is whatever external agent drives the system. The equation is <strong>second-order</strong> because acceleration is a second derivative, <strong>linear</strong> because x, x′, x″ appear only to the first power, and has <strong>constant coefficients</strong> because m, b, k don't change in time. This one template covers pendulums, car suspensions, swaying skyscrapers — and, with the renaming L q″ + R q′ + q/C = V(t), every RLC circuit from the electromagnetism course. Solve it once and you have solved them all.</p>
<p>Linearity is the superpower. If x₁ and x₂ both solve the homogeneous equation (F = 0), so does every combination c₁x₁ + c₂x₂ — plug it in and the terms sort themselves. The set of solutions is therefore closed under addition and scaling: it is a two-dimensional <em>vector space</em>, a phrase that will become the heart of this subject's second half.</p>
<div class="key-concept">
  <h4>The structure of every solution</h4>
  <p>General solution = (general homogeneous solution, with two free constants for the two initial conditions x(0) and x′(0)) + (any one particular solution of the driven equation). Find each piece separately; add.</p>
</div>
<p>How do we find homogeneous solutions? Exploit the one function that reproduces itself under differentiation: try x = e<sup>rt</sup>. Then x′ = r e<sup>rt</sup> and x″ = r²e<sup>rt</sup>, so the ODE collapses to e<sup>rt</sup>(mr² + br + k) = 0. Since e<sup>rt</sup> is never zero, everything hinges on an ordinary quadratic — the <strong>characteristic equation</strong> mr² + br + k = 0. Calculus has become algebra.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The mirror-suspension systems of the LIGO gravitational-wave detectors are modeled with exactly this equation. Engineering the damping term b was a decade-long project: too little and the mirrors ring, too much and thermal noise drowns the signal.</p>
</div>`,
        },
        {
          id: "three-damping-cases",
          title: "The Characteristic Equation: Three Damping Cases",
          content: `
<p>Everything about free motion is encoded in the roots of mr² + br + k = 0, and the quadratic formula says the roots change character with the sign of the <strong>discriminant b² − 4mk</strong>. Three signs, three physically distinct behaviors — work one example of each.</p>
<p><strong>Case 1: Overdamped (b² − 4mk &gt; 0).</strong> Take x″ + 5x′ + 6x = 0. The characteristic equation r² + 5r + 6 = (r + 2)(r + 3) = 0 gives two real roots r = −2, −3, so</p>
<p style="text-align:center;">x(t) = c₁e<sup>−2t</sup> + c₂e<sup>−3t</sup></p>
<p>Two decaying exponentials, no oscillation at all: released from rest, the mass oozes back to equilibrium like a spoon through honey.</p>
<p><strong>Case 2: Critically damped (b² − 4mk = 0).</strong> Take x″ + 4x′ + 4x = 0, so (r + 2)² = 0 — a repeated root r = −2. One root can't supply two independent solutions; the fix is an extra factor of t:</p>
<p style="text-align:center;">x(t) = (c₁ + c₂t)e<sup>−2t</sup></p>
<p>Check that te<sup>−2t</sup> really works — it does, precisely because the root is repeated. Critical damping is the engineer's sweet spot: the fastest possible return to equilibrium with no overshoot, which is why door closers and analog meter needles are tuned to it.</p>
<p><strong>Case 3: Underdamped (b² − 4mk &lt; 0).</strong> Take x″ + 2x′ + 10x = 0. The roots are r = −1 ± 3i — complex. Euler's formula e<sup>iθ</sup> = cos θ + i sin θ converts the complex exponentials into real oscillations:</p>
<p style="text-align:center;">x(t) = e<sup>−t</sup>(c₁ cos 3t + c₂ sin 3t)</p>
<div class="key-concept">
  <h4>Reading a complex root</h4>
  <p>A root r = −a ± iω means: real part → decay envelope e<sup>−at</sup>; imaginary part → oscillation at frequency ω. The mass rings like a struck bell inside a shrinking envelope. A pure imaginary root (b = 0) gives undying oscillation at the natural frequency ω₀ = √(k/m).</p>
</div>
<p>One quadratic's discriminant thus classifies every free vibration in nature: sluggish creep, perfect settling, or ringing decay. Memorize the dictionary — you will use it again for circuits, for control systems, and for the stability theory of the next chapter.</p>`,
        },
        {
          id: "driven-oscillations",
          title: "Driving Forces & the Particular Solution",
          content: `
<p>Now switch the driving force on. For the sinusoidal forcing that dominates physics — AC voltages, sound waves, a motor's vibration — the method of <strong>undetermined coefficients</strong> finds a particular solution fast: guess a trial solution with the same shape as the forcing, and let the equation fix the constants.</p>
<p><strong>Worked example.</strong> Solve x″ + 2x′ + 2x = 10 cos 2t. Since derivatives of cosine generate sines, guess x<sub>p</sub> = A cos 2t + B sin 2t. Then:</p>
<ol>
  <li>x<sub>p</sub>′ = −2A sin 2t + 2B cos 2t, and x<sub>p</sub>″ = −4A cos 2t − 4B sin 2t.</li>
  <li>Substitute and collect: cosine terms give (−4A + 4B + 2A) = −2A + 4B; sine terms give (−4B − 4A + 2B) = −4A − 2B.</li>
  <li>Match the right side: −2A + 4B = 10 and −4A − 2B = 0, so B = −2A, hence −2A − 8A = 10.</li>
  <li>Therefore A = −1, B = 2: <strong>x<sub>p</sub> = −cos 2t + 2 sin 2t</strong>, a sinusoid of amplitude √5 ≈ 2.24.</li>
</ol>
<p>The full solution adds the homogeneous part. Here the characteristic roots are −1 ± i, so the homogeneous piece e<sup>−t</sup>(c₁ cos t + c₂ sin t) — whatever the initial conditions made of it — dies away within a few time constants. What survives is x<sub>p</sub>, marching in lockstep with the drive.</p>
<div class="key-concept">
  <h4>Transient + steady state</h4>
  <p>Every damped driven system forgets its initial conditions. The homogeneous solution is the <strong>transient</strong>; the particular solution is the <strong>steady state</strong>, oscillating at the <em>driving</em> frequency (not the natural one), with an amplitude and phase lag set by the equation. Turn on a lamp and the flicker of switch-on vanishes; the 60 Hz steady state remains.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Stubborn Metronome</h3>
  <p>Grip a metronome arm and waggle it at your own tempo. At first its preferred rhythm fights your hand — that superposed struggle is the transient. Soon friction eats its rebellion and it swings exactly at your frequency, though lagging your hand slightly. Steady state is the drive winning; the phase lag is the fingerprint of the damping.</p>
</div>
<p>A cleaner route to the same answer — replace 10 cos 2t by the complex drive 10e<sup>2it</sup>, solve for a complex amplitude, take the real part — becomes indispensable in AC circuit analysis and quantum mechanics alike. The next section uses it to crack resonance wide open.</p>`,
        },
        {
          id: "resonance-mathematically",
          title: "Resonance, Mathematically",
          content: `
<p>Drive the oscillator mx″ + bx′ + kx = F₀ cos ωt across a range of frequencies ω and ask: how big is the steady-state response? Carrying out the undetermined-coefficients algebra in general (or the slicker complex-exponential version) yields the steady-state <strong>amplitude formula</strong> — the mathematical heart of resonance:</p>
<p style="text-align:center; font-size:1.1em;"><strong>A(ω) = F₀ / √( (k − mω²)² + (bω)² )</strong></p>
<p>Stare at the denominator. The first term vanishes when ω = ω₀ = √(k/m) — driving at the natural frequency kills the spring-inertia part entirely, leaving only damping to limit the response. That is <strong>resonance</strong>.</p>
<p><strong>Worked numbers.</strong> Let m = 1, b = 2, k = 100, so ω₀ = 10. Driving slowly (ω → 0) gives the static stretch A = F₀/k = F₀/100. Driving at ω = 10 gives A = F₀/√(0 + 400) = F₀/20 — <strong>five times</strong> the static response. That amplification factor is the <strong>quality factor Q = ω₀m/b = 5</strong>: a dimensionless rating of how sharp and tall the resonance peak is. A wine glass has Q in the hundreds; a superconducting microwave cavity, in the billions. (Calculus locates the true peak at ω² = ω₀² − b²/2m², a hair below ω₀ — for light damping the difference is negligible.)</p>
<div class="key-concept">
  <h4>Pure resonance: the undamped catastrophe</h4>
  <p>Set b = 0 and drive exactly at ω₀: x″ + ω₀²x = (F₀/m) cos ω₀t. The usual guess fails — it already solves the homogeneous equation — so the fix, as with repeated roots, is a factor of t: x<sub>p</sub> = (F₀/2mω₀) t sin ω₀t. The amplitude grows <em>linearly forever</em>. Each push arrives perfectly timed with the motion, feeding energy in every cycle with nothing to drain it.</p>
</div>
<p>This is why soldiers break step on bridges, why a tuned radio circuit plucks one station's frequency out of the electromagnetic din (high Q = sharp selectivity), and why MRI machines whisper to protons at precisely their resonant frequency. Resonance is nature's amplifier, and you now own its exact formula.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The 1940 Tacoma Narrows bridge collapse is often mislabeled simple resonance; it was aeroelastic flutter, a self-excited feedback where the bridge's own twisting altered the wind forces on it. The mathematics of instability, though, is the same family: a solution growing without bound because energy input outruns damping.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The equation x″ + 6x′ + 9x = 0 has characteristic equation (r + 3)² = 0. Which statement describes the motion?",
          options: [
            "It oscillates at frequency 3 inside a decaying envelope",
            "It decays as a sum of two different exponentials",
            "It is critically damped: x = (c₁ + c₂t)e⁻³ᵗ returns to equilibrium as fast as possible without oscillating",
            "It oscillates forever at its natural frequency",
          ],
          correctIndex: 2,
          explanation:
            "A repeated real root r = −3 is the signature of critical damping. One root supplies only one exponential, so the second independent solution picks up a factor of t, giving (c₁ + c₂t)e⁻³ᵗ. This is the boundary case engineers tune for: quickest settling, zero overshoot.",
        },
        {
          question:
            "What single quantity decides whether a free damped oscillator mx″ + bx′ + kx = 0 actually oscillates?",
          options: [
            "The sign of the discriminant b² − 4mk of the characteristic equation",
            "The size of the initial displacement",
            "The ratio of the driving frequency to the natural frequency",
            "Whether the mass m is larger than the spring constant k",
          ],
          correctIndex: 0,
          explanation:
            "The roots of mr² + br + k = 0 are complex — and only complex roots produce sines and cosines — exactly when b² − 4mk < 0. Initial conditions set the constants c₁, c₂ but never the character of the motion, and there is no driving frequency in a free oscillator.",
        },
        {
          question:
            "A damped oscillator with natural frequency ω₀ = 10 rad/s is driven at ω = 7 rad/s. Long after switch-on, at what frequency does it oscillate?",
          options: [
            "10 rad/s, its natural frequency",
            "Somewhere between 7 and 10 rad/s",
            "At both frequencies superposed, forever",
            "7 rad/s, the driving frequency",
          ],
          correctIndex: 3,
          explanation:
            "The homogeneous (natural-frequency) part of the solution is the transient, and damping kills it exponentially. The surviving steady state is the particular solution, which oscillates at the driving frequency — with an amplitude and phase lag fixed by the amplitude formula. Driven systems dance to the driver's tune.",
        },
        {
          question:
            "An undamped oscillator is driven exactly at its natural frequency ω₀. What does the mathematics predict?",
          options: [
            "A large but constant steady-state amplitude",
            "A response x ∝ t sin ω₀t whose amplitude grows linearly without bound",
            "No response, because the drive and the motion cancel",
            "Beats between the drive and the natural motion that persist forever",
          ],
          correctIndex: 1,
          explanation:
            "With b = 0 and ω = ω₀ the usual sinusoidal guess already solves the homogeneous equation, so the particular solution gains a factor of t: x = (F₀/2mω₀)t sin ω₀t. Each cycle of the drive is perfectly timed to add energy, and with no damping to drain it, the amplitude climbs forever. Beats occur only when ω is near — not equal to — ω₀.",
        },
        {
          question:
            "For the oscillator with m = 1, b = 2, k = 100 (so ω₀ = 10, Q = 5), what happens to the resonance peak if the damping b is increased?",
          options: [
            "The peak grows taller and narrower",
            "The peak is unaffected; only the transient changes",
            "The peak gets lower and broader, and shifts slightly below ω₀",
            "The peak moves to a frequency above ω₀",
          ],
          correctIndex: 2,
          explanation:
            "At resonance the amplitude is limited only by the damping term bω in the denominator, so bigger b directly lowers the peak (A ≈ F₀/bω₀) and reduces Q = ω₀m/b, broadening the response. The exact maximum sits at ω² = ω₀² − b²/2m², which moves further below ω₀ as b grows.",
        },
      ],
    },
    {
      id: "systems-of-odes-phase-portraits",
      title: "Systems of ODEs & Phase Portraits",
      subtitle:
        "Coupled equations, eigen-analysis, and reading stability from phase portraits",
      sections: [
        {
          id: "coupled-systems",
          title: "When Equations Come in Pairs",
          content: `
<p>Real systems rarely involve one variable minding its own business. Two masses joined by springs, predator and prey populations, the charge and current in a circuit — each variable's rate of change depends on the <em>others</em>. The result is a <strong>coupled system</strong> of first-order equations, and the natural bookkeeping device is a matrix. For two unknowns x(t), y(t):</p>
<p style="text-align:center;">x′ = a x + b y,&nbsp;&nbsp; y′ = c x + d y&nbsp;&nbsp;&nbsp;⟺&nbsp;&nbsp;&nbsp;<strong>u′ = A u</strong></p>
<p>where u = (x, y) is the state vector and A is the 2×2 coefficient matrix. One vector equation, however many variables.</p>
<p>Here is a quietly important trick: <strong>every higher-order ODE is secretly a first-order system.</strong> Take the oscillator x″ = −(k/m)x − (b/m)x′ and define v = x′. Then</p>
<p style="text-align:center;">x′ = v,&nbsp;&nbsp; v′ = −(k/m)x − (b/m)v</p>
<p>— a 2×2 system whose state vector (x, v) is a point in the <strong>phase plane</strong> of position and velocity. Knowing the state now determines the entire future: the system is a machine that assigns to every point of the plane an arrow u′ = Au, and solutions simply follow the arrows. This state-vector view is how planetary orbits are computed, how control engineers stabilize rockets, and how chaos will be diagnosed in Classical Mechanics II.</p>
<p>How to solve u′ = Au? Copy the scalar success story. For one equation x′ = ax the answer was e<sup>at</sup>; so for the system, guess a solution that keeps a fixed <em>direction</em> while its length grows or decays:</p>
<p style="text-align:center;">u(t) = e<sup>λt</sup> v,&nbsp;&nbsp; with v a constant vector</p>
<p>Substituting gives λe<sup>λt</sup>v = A e<sup>λt</sup>v, and canceling the never-zero scalar e<sup>λt</sup>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>A v = λ v</strong></p>
<div class="key-concept">
  <h4>The eigenvalue problem arrives</h4>
  <p>The exponential guess works precisely when v is a special direction that A merely stretches — an <strong>eigenvector</strong> — with stretch factor λ, its <strong>eigenvalue</strong>. Solving linear systems of ODEs <em>is</em> the eigenvalue problem. This is the door through which linear algebra enters physics, and it never leaves.</p>
</div>`,
        },
        {
          id: "eigen-analysis-of-systems",
          title: "Eigenvalues Untangle the Coupling",
          content: `
<p>Time to solve a coupled system completely. Take</p>
<p style="text-align:center;">x′ = x + 2y,&nbsp;&nbsp; y′ = 2x + y,&nbsp;&nbsp;&nbsp;i.e.&nbsp;&nbsp;A = [1&nbsp;&nbsp;2 / 2&nbsp;&nbsp;1]</p>
<p><strong>Step 1 — find the eigenvalues.</strong> Av = λv rearranges to (A − λI)v = 0, which has a nonzero solution v only if A − λI squashes space flat — that is, only if det(A − λI) = 0:</p>
<p style="text-align:center;">det [1−λ&nbsp;&nbsp;2 / 2&nbsp;&nbsp;1−λ] = (1−λ)² − 4 = λ² − 2λ − 3 = (λ − 3)(λ + 1) = 0</p>
<p>Eigenvalues: <strong>λ₁ = 3, λ₂ = −1</strong>.</p>
<p><strong>Step 2 — find each eigenvector.</strong> For λ₁ = 3: (A − 3I)v = 0 means −2v₁ + 2v₂ = 0, so v₂ = v₁ — take <strong>v₁ = (1, 1)</strong>. For λ₂ = −1: 2v₁ + 2v₂ = 0 gives <strong>v₂ = (1, −1)</strong>.</p>
<p><strong>Step 3 — write the general solution</strong> as a superposition of the two straight-line solutions:</p>
<p style="text-align:center;">u(t) = c₁ e<sup>3t</sup> (1, 1) + c₂ e<sup>−t</sup> (1, −1)</p>
<p>Decode the physics. Along the direction (1, 1) — where x = y — the system explodes like e<sup>3t</sup>. Along (1, −1) — where x = −y — it decays like e<sup>−t</sup>. Any starting point is a mix of the two, and the growing piece eventually dominates: almost every trajectory sweeps out toward the line y = x.</p>
<div class="key-concept">
  <h4>What eigen-analysis really does</h4>
  <p>In the eigenvector directions the coupling vanishes: the combination s = x + y obeys s′ = 3s and d = x − y obeys d′ = −d, two independent scalar equations. Eigenvectors are the coordinates in which a tangled system falls apart into problems you solved in week one. "Diagonalization," coming in Chapter 5, is this idea given its proper name.</p>
</div>
<p>The recipe never changes with size: an n×n system has n eigenvalues from an n-th degree determinant, n eigenvector directions, and a general solution that superposes n exponential motions. Nature's coupled problems are hard only until you find the directions along which they were never coupled at all.</p>`,
        },
        {
          id: "phase-portraits",
          title: "Phase Portraits: The Geometry of Solutions",
          content: `
<p>Instead of formulas, draw pictures. A <strong>phase portrait</strong> plots the trajectories of u′ = Au as curves in the (x, y) plane, one through every starting point. Because the eigen-solutions dictate all motion, just two numbers — the eigenvalues — determine the portrait's entire character. There are only a handful of species to learn.</p>
<ul>
  <li><strong>Saddle</strong> (real eigenvalues, opposite signs): the system of the last section, λ = 3 and −1. Trajectories rush in along the decaying eigendirection, veer away along the growing one. Unstable — like a ball balanced on a mountain pass, the one inbound path is impossible to hit exactly.</li>
  <li><strong>Node</strong> (real eigenvalues, same sign): both negative → all trajectories slide into the origin (stable node, e.g. an overdamped oscillator); both positive → all flee (unstable node).</li>
  <li><strong>Spiral</strong> (complex eigenvalues λ = a ± iω): the imaginary part makes solutions rotate; the real part scales them. For A = [−1&nbsp;&nbsp;−2 / 2&nbsp;&nbsp;−1], det(A − λI) = λ² + 2λ + 5 = 0 gives λ = −1 ± 2i: trajectories spiral <em>into</em> the origin — an underdamped oscillator seen in the phase plane.</li>
  <li><strong>Center</strong> (pure imaginary, a = 0): A = [0&nbsp;&nbsp;1 / −1&nbsp;&nbsp;0] gives λ = ±i and closed circular orbits. This is the frictionless harmonic oscillator: each closed loop is a curve of constant energy, traced forever.</li>
</ul>
<p>You don't even need to solve for the eigenvalues to classify: for a 2×2 matrix the characteristic equation is λ² − (tr A)λ + det A = 0, so the <strong>trace</strong> (sum of diagonal entries = λ₁ + λ₂) and the <strong>determinant</strong> (= λ₁λ₂) alone fix the type. Negative determinant? Eigenvalues have opposite signs: saddle, always. Positive determinant with negative trace? Both eigenvalues have negative real part: stable node or spiral.</p>
<div class="analogy">
  <h3>Analogy: A Topographic Map for Dynamics</h3>
  <p>A phase portrait is to a dynamical system what a topographic map is to a landscape: without following any single hiker, the contours tell you where every possible hike must lead — which valleys trap you, which passes shed you left or right. One glance replaces infinitely many solution formulas.</p>
</div>
<p>These portraits are the local alphabet of all dynamics: near an equilibrium, even wildly nonlinear systems read as one of these letters — the subject of the next section.</p>`,
        },
        {
          id: "stability",
          title: "Stability: Reading the Future from Eigenvalues",
          content: `
<p>The deepest question about any equilibrium is brutally practical: nudge the system slightly — does the disturbance die out or take over? For u′ = Au the general solution is a sum of terms e<sup>λt</sup>v, so the answer is a one-line criterion:</p>
<div class="key-concept">
  <h4>The stability criterion</h4>
  <p>An equilibrium of a linear system is <strong>asymptotically stable</strong> when every eigenvalue has negative real part — all modes decay. If <em>any</em> eigenvalue has positive real part, that mode grows exponentially and the equilibrium is <strong>unstable</strong>, no matter how well-behaved the others are. Pure imaginary eigenvalues sit on the knife edge: undying oscillation.</p>
</div>
<p>The reach of this criterion is enormous because of <strong>linearization</strong>. Near an equilibrium of a nonlinear system, replace each function by its tangent-line approximation (keep only first powers of the small displacements); what remains is a linear system whose matrix is built from first derivatives. The pendulum shows both faces:</p>
<ul>
  <li><strong>Hanging straight down:</strong> for small θ, the equation θ″ = −(g/L) sin θ ≈ −(g/L)θ. Eigenvalues ±i√(g/L) — a center; add a little friction and they move to −a ± iω, a stable spiral. Displace the pendulum and it settles back.</li>
  <li><strong>Balanced straight up:</strong> setting θ = π + φ, sin θ ≈ −φ flips the sign: φ″ = +(g/L)φ. Eigenvalues ±√(g/L), one positive, one negative — a <strong>saddle</strong>. The upright pendulum is the mountain-pass equilibrium: mathematically balanced, practically doomed, tipping over with e<sup>√(g/L)·t</sup> growth.</li>
</ul>
<p>The same eigenvalue arithmetic decides whether a marble rests in a bowl or on a dome, whether an aircraft design damps out gusts or flutters apart, whether a feedback controller calms a rocket or shakes it to pieces, and whether a fixed point of a population model persists. Control engineers spend careers pushing eigenvalues into the left half of the complex plane.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Segways and hoverboards are ridable inverted pendulums. Their controllers sense tilt hundreds of times per second and drive the wheels so that the closed-loop system's eigenvalues — unstable saddle values on their own — are shifted to have negative real parts. You are literally standing on a solved eigenvalue problem.</p>
</div>
<p>Linearization has one honest limitation: on the knife edge (zero real parts) the neglected nonlinear terms decide the verdict, and richer behavior — limit cycles, chaos — becomes possible. That story resumes in Classical Mechanics II.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "For the system u′ = Au with A = [1 2 / 2 1], the characteristic equation is λ² − 2λ − 3 = 0. What are the eigenvalues, and what portrait results?",
          options: [
            "λ = 1, 2: an unstable node",
            "λ = 3, −1: a saddle — decay along one eigendirection, growth along the other",
            "λ = −3, 1: a stable spiral",
            "λ = ±i√3: a center with closed orbits",
          ],
          correctIndex: 1,
          explanation:
            "λ² − 2λ − 3 factors as (λ − 3)(λ + 1), giving 3 and −1. Real eigenvalues of opposite sign always produce a saddle: trajectories approach along the eigenvector of −1 (direction (1, −1)) but are flung out along the eigenvector of 3 (direction (1, 1)). Quick check: trace = 2 = 3 + (−1), det = −3 = 3 × (−1).",
        },
        {
          question:
            "Without computing eigenvalues, what does det A < 0 tell you about the phase portrait of a 2×2 system u′ = Au?",
          options: [
            "The origin is stable, since negative determinants mean decay",
            "The trajectories are closed loops",
            "Nothing — the trace is also needed",
            "It is a saddle: the determinant is the product λ₁λ₂, so the eigenvalues are real with opposite signs",
          ],
          correctIndex: 3,
          explanation:
            "For a 2×2 matrix, det A = λ₁λ₂. A negative product forces two real eigenvalues of opposite sign (complex-conjugate pairs have positive product a² + ω²), and that is precisely a saddle — always unstable. The trace is only needed to sort out the remaining cases where det A > 0.",
        },
        {
          question:
            "A system has eigenvalues λ = −1 ± 2i. What motion do solutions exhibit?",
          options: [
            "They spiral into the origin, oscillating at frequency 2 while decaying like e⁻ᵗ",
            "They grow exponentially along a fixed direction",
            "They trace closed circles of constant amplitude",
            "They decay along one line and grow along another",
          ],
          correctIndex: 0,
          explanation:
            "Complex eigenvalues a ± iω produce rotation at frequency ω scaled by e^(at). Here a = −1 < 0 and ω = 2: an inward, stable spiral — the phase-plane portrait of an underdamped oscillator. Closed circles would need a = 0 exactly; straight-line growth or decay needs real eigenvalues.",
        },
        {
          question:
            "Why does substituting the guess u(t) = e^(λt)v into u′ = Au lead directly to the eigenvalue problem Av = λv?",
          options: [
            "Because the guess only works when A is symmetric",
            "Because e^(λt) must equal zero at t = 0",
            "Because differentiation multiplies the guess by λ, so the equation demands that A stretch v by exactly λ without turning it",
            "Because every matrix equation reduces to a determinant",
          ],
          correctIndex: 2,
          explanation:
            "Differentiating gives u′ = λe^(λt)v, while the equation demands u′ = Ae^(λt)v. Canceling the nonzero scalar e^(λt) leaves Av = λv: the solution keeps a fixed direction only if A maps v onto a multiple of itself. Straight-line solutions exist exactly along eigenvectors — no symmetry required.",
        },
        {
          question:
            "Linearizing the pendulum about its upright position gives φ″ = +(g/L)φ. What does this say about balancing a pendulum upside down?",
          options: [
            "It oscillates slowly, so balancing is easy",
            "The equilibrium is a saddle with a growing mode e^(√(g/L)t); any tiny error is amplified exponentially",
            "It is stable because gravity is a restoring force",
            "The linearization proves balancing is strictly impossible, even with feedback",
          ],
          correctIndex: 1,
          explanation:
            "The plus sign gives eigenvalues ±√(g/L): one negative (harmless) and one positive, whose mode grows exponentially — the signature of a saddle. Any imperfection in the initial state contains a whiff of the growing mode and gets amplified. Feedback control can rescue it (that is how a Segway works) by shifting the closed-loop eigenvalues into the left half-plane.",
        },
      ],
    },
    {
      id: "laplace-transforms-greens-function-idea",
      title: "Laplace Transforms & Green's-Function Idea",
      subtitle:
        "Transform methods and the impulse-response way of thinking",
      sections: [
        {
          id: "laplace-transform-definition",
          title: "Calculus Becomes Algebra",
          content: `
<p>The exponential ansatz turned one ODE into one quadratic. The <strong>Laplace transform</strong> industrializes the idea: it converts an entire function of time f(t) into a function of a new variable s, in whose world differentiation becomes mere multiplication. The definition:</p>
<p style="text-align:center; font-size:1.1em;"><strong>F(s) = ∫₀<sup>∞</sup> e<sup>−st</sup> f(t) dt</strong></p>
<p>Think of it as interrogating f with a family of decaying exponential probes, one for each s, and recording the overlap. A few transforms, computed straight from the definition, form the working vocabulary:</p>
<table>
  <thead>
    <tr><th>f(t)</th><th>F(s)</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>1/s</td></tr>
    <tr><td>e<sup>at</sup></td><td>1/(s − a)</td></tr>
    <tr><td>t</td><td>1/s²</td></tr>
    <tr><td>cos ωt</td><td>s/(s² + ω²)</td></tr>
    <tr><td>sin ωt</td><td>ω/(s² + ω²)</td></tr>
  </tbody>
</table>
<p>For instance, with f = e<sup>at</sup> the integrand is e<sup>−(s−a)t</sup>, which integrates to 1/(s − a) whenever s &gt; a. Notice the pattern in the table: oscillations of frequency ω show up as poles — places where F(s) blows up — at s² = −ω², and a growth rate a shows up as a pole at s = a. <strong>The character of a signal in time is written in the pole locations of its transform.</strong> That is the same real-part/imaginary-part dictionary you learned for characteristic roots, and it is no coincidence: the poles of a system's transform <em>are</em> its characteristic roots.</p>
<p>The crown jewel is what happens to derivatives. Integrating by parts once:</p>
<p style="text-align:center;">L[f′] = sF(s) − f(0),&nbsp;&nbsp;&nbsp;L[f″] = s²F(s) − s f(0) − f′(0)</p>
<div class="key-concept">
  <h4>Why physicists and engineers love Laplace</h4>
  <p>Differentiation in t becomes multiplication by s — and the initial conditions f(0), f′(0) are automatically stitched into the algebra, rather than bolted on at the end. One transform turns an initial-value problem into a single algebraic equation for F(s).</p>
</div>
<p>The transform also digests discontinuous inputs — switches thrown, hammer blows, square pulses — without complaint, which is exactly where the classical methods of Chapter 1 get awkward. That robustness, plus the automatic initial conditions, made the Laplace transform the native language of control theory and circuit design.</p>`,
        },
        {
          id: "solving-odes-with-laplace",
          title: "Solving an ODE End to End",
          content: `
<p>Watch the whole machine run on one initial-value problem:</p>
<p style="text-align:center;">x″ + 3x′ + 2x = 0,&nbsp;&nbsp;&nbsp;x(0) = 1,&nbsp;&nbsp;x′(0) = 0</p>
<p><strong>Step 1 — transform the equation.</strong> Using the derivative rules with X(s) = L[x]:</p>
<p style="text-align:center;">[s²X − s·1 − 0] + 3[sX − 1] + 2X = 0</p>
<p><strong>Step 2 — solve the algebra.</strong> Collect X: (s² + 3s + 2)X = s + 3, so</p>
<p style="text-align:center;">X(s) = (s + 3) / ((s + 1)(s + 2))</p>
<p>Note the denominator: it is exactly the characteristic polynomial, factored — the poles s = −1, −2 announce two decaying exponentials before we invert anything.</p>
<p><strong>Step 3 — partial fractions.</strong> Write X = A/(s + 1) + B/(s + 2). The cover-up method finds each constant instantly: multiply by (s + 1) and set s = −1 to get A = (−1 + 3)/(−1 + 2) = 2; multiply by (s + 2) and set s = −2 to get B = (−2 + 3)/(−2 + 1) = −1.</p>
<p><strong>Step 4 — invert with the table.</strong> Since 1/(s − a) ↔ e<sup>at</sup>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>x(t) = 2e<sup>−t</sup> − e<sup>−2t</sup></strong></p>
<p>Check: x(0) = 2 − 1 = 1 ✓ and x′(0) = −2 + 2 = 0 ✓. No characteristic-equation-then-fit-constants two-step — the initial conditions rode along inside the algebra from line one.</p>
<div class="key-concept">
  <h4>The three-step rhythm</h4>
  <p>Transform (ODE → algebra) → solve and split into partial fractions → invert term by term with the table. Every linear constant-coefficient initial-value problem, however long its right-hand side, yields to this same rhythm.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Oliver Heaviside — self-taught, and the man who compressed Maxwell's twenty equations into today's four — used these operational methods decades before mathematicians proved they were legitimate. Scolded for lack of rigor, he replied: "Shall I refuse my dinner because I do not fully understand the process of digestion?"</p>
</div>
<p>The method truly earns its keep when the right-hand side is a switched-on voltage or a sudden blow. For that we need one more object — the strangest and most useful "function" in physics.</p>`,
        },
        {
          id: "delta-function-impulse-response",
          title: "The Delta Function & the Impulse Response",
          content: `
<p>How do you model a hammer blow — a force that acts for almost no time yet delivers a definite momentum? Idealize it: let the force spike become infinitely tall and infinitely brief while its time-integral (the impulse) stays 1. The limit is the <strong>Dirac delta function δ(t)</strong>: zero everywhere except t = 0, yet with ∫δ(t)dt = 1. Its defining talent is the <strong>sifting property</strong> — inside an integral it plucks out a single value:</p>
<p style="text-align:center;">∫ f(t) δ(t − a) dt = f(a)</p>
<p>Setting f = e<sup>−st</sup> gives the tidiest Laplace transform in existence: <strong>L[δ(t)] = 1</strong>. The delta contains every frequency in equal measure — which is precisely why striking a bell (a delta-like input) makes it ring at <em>its own</em> natural frequencies: the strike offers all frequencies, and the bell keeps the ones it likes.</p>
<p>Now the central definition of this chapter. The <strong>impulse response</strong> g(t) of a system is its motion after a unit kick, starting from rest. For a damped oscillator:</p>
<p style="text-align:center;">g″ + 2g′ + 5g = δ(t),&nbsp;&nbsp;&nbsp;g(0) = 0, g′(0⁻) = 0</p>
<p>Transform it: (s² + 2s + 5)G = 1, so G(s) = 1/(s² + 2s + 5). Complete the square: s² + 2s + 5 = (s + 1)² + 4, and the shifted-sine entry of the table gives</p>
<p style="text-align:center; font-size:1.1em;"><strong>g(t) = ½ e<sup>−t</sup> sin 2t</strong></p>
<p>Physically sensible: before the kick, nothing; at t = 0 the impulse deposits momentum (velocity jumps from 0 to 1 while position has no time to move); afterwards the system rings freely at its own damped frequency inside a decaying envelope.</p>
<div class="key-concept">
  <h4>The transfer function</h4>
  <p>G(s) = 1/(characteristic polynomial) is called the <strong>transfer function</strong> — the system's complete identity card in the s-domain. Its poles are the characteristic roots; the impulse response is its inverse transform. Know G and you know everything the system can do.</p>
</div>
<div class="analogy">
  <h3>Analogy: Kicking the Tires</h3>
  <p>A mechanic thumps a machine once and listens; a geophysicist thumps the ground and records the echo; you tap a melon at the market. All are measuring impulse responses — the one experiment whose result characterizes a linear system completely.</p>
</div>`,
        },
        {
          id: "greens-function-superposition",
          title: "Green's Functions: Any Force Is a Sum of Kicks",
          content: `
<p>Here is the payoff idea, one of the most consequential in mathematical physics. The sifting property read backwards says that <em>any</em> force is a superposition of delta kicks:</p>
<p style="text-align:center;">f(t) = ∫ f(τ) δ(t − τ) dτ</p>
<p>— at each instant τ, a kick of strength f(τ)dτ. But the system is linear, and we know its response to a single unit kick at time τ: it is g(t − τ), the impulse response started at τ. Superpose the responses to all the kicks, each weighted by its strength, and you have the response to the whole force:</p>
<p style="text-align:center; font-size:1.1em;"><strong>x(t) = ∫₀<sup>t</sup> f(τ) g(t − τ) dτ</strong></p>
<p>This integral is the <strong>convolution</strong> of f with g, written f ∗ g. In this role g earns its grander name: the <strong>Green's function</strong> of the system. Note the limits: only kicks with τ ≤ t contribute — causality, the response cannot precede the force — and each past kick contributes according to how long ago it happened, weighted by the system's fading memory g(t − τ).</p>
<p>The Laplace transform bows out gracefully here: the <strong>convolution theorem</strong> states L[f ∗ g] = F(s)G(s). Messy convolution in time is plain multiplication in s — which is why response calculations in engineering are one-line products of transfer functions.</p>
<div class="key-concept">
  <h4>The Green's-function way of thinking</h4>
  <p>Characterize a linear system by its response to the simplest possible input — one point source, one kick — then build the response to <em>anything</em> by superposition. Solve once, answer forever.</p>
</div>
<p>This mode of thought recurs across the entire physics curriculum:</p>
<ul>
  <li><strong>Electrostatics:</strong> the potential kQ/r of a point charge is the Green's function of Poisson's equation; the potential of any charge blob is a convolution over point charges.</li>
  <li><strong>Waves and optics:</strong> Huygens' principle — every point on a wavefront radiates a wavelet — is superposition of point-source Green's functions.</li>
  <li><strong>Quantum mechanics and field theory:</strong> the <em>propagator</em>, the amplitude for a particle to travel from one spacetime point to another, is a Green's function; Feynman diagrams are bookkeeping for convolving propagators.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>George Green, who invented these functions in 1828, was a miller's son from Nottingham with one year of schooling, who taught himself mathematics in the windmill between grindings. His self-published essay went unread until after his death, when a young William Thomson (later Lord Kelvin) rescued it from obscurity.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Under the Laplace transform, what does x″ become, if x(0) = 2 and x′(0) = −1?",
          options: [
            "s²X(s) − 2s + 1",
            "s²X(s)",
            "s²X(s) + 2s − 1",
            "X(s)/s² − 2",
          ],
          correctIndex: 0,
          explanation:
            "The rule is L[x″] = s²X(s) − s·x(0) − x′(0). With x(0) = 2 and x′(0) = −1 this is s²X − 2s − (−1) = s²X − 2s + 1. The initial conditions enter the algebra immediately — that automatic bookkeeping is half the reason the transform method exists.",
        },
        {
          question:
            "What is the value of ∫₀^∞ (t² + 1) δ(t − 3) dt?",
          options: ["0", "1", "10", "Undefined — δ is not a true function"],
          correctIndex: 2,
          explanation:
            "The sifting property says the delta plucks out the integrand's value where the delta's argument vanishes: at t = 3, giving 3² + 1 = 10. And while δ is indeed not a classical function, its integrals against smooth functions are perfectly well defined — that is exactly how the theory of distributions makes it rigorous.",
        },
        {
          question:
            "A linear system has impulse response g(t). Its response to a general force f(t), starting from rest, is:",
          options: [
            "f(t)·g(t), the product of force and response",
            "the convolution ∫₀ᵗ f(τ) g(t − τ) dτ — past kicks weighted by the system's fading memory",
            "g(t) alone, since the impulse response characterizes the system",
            "f(t) + g(t), by superposition",
          ],
          correctIndex: 1,
          explanation:
            "Any force is a superposition of delta kicks, f(t) = ∫f(τ)δ(t − τ)dτ, and linearity lets us superpose the known response to each kick: strength f(τ) at time τ contributes f(τ)g(t − τ). Summing over the past gives the convolution. In the s-domain this becomes the product F(s)G(s) — but in time it is an integral, not a product.",
        },
        {
          question:
            "Why is the response of a system to a delta-function input so revealing?",
          options: [
            "Because the delta function is the smoothest possible input",
            "Because only the delta function has a Laplace transform",
            "Because the delta response equals the steady-state response",
            "Because L[δ] = 1: the kick excites all frequencies equally, so the response displays the system's own natural behavior — and determines its response to every other input",
          ],
          correctIndex: 3,
          explanation:
            "The delta's transform is 1 — a flat spectrum containing every frequency at equal strength — so what comes out is pure system: the transfer function G(s) itself, and in time the free ringing at the system's natural frequencies. Since any input is a superposition of kicks, this single response determines all responses by convolution. That is the Green's-function idea.",
        },
      ],
    },
    {
      id: "linear-algebra-core",
      title: "Linear Algebra Core",
      subtitle:
        "Vector spaces, bases, and matrices as transformations",
      sections: [
        {
          id: "vector-spaces",
          title: "What Counts as a Vector?",
          content: `
<p>Forget arrows for a moment. Linear algebra's opening move is an act of radical generosity: a <strong>vector space</strong> is <em>any</em> collection of objects that you can add to each other and multiply by numbers, with the results staying in the collection and the arithmetic behaving as arithmetic should (addition commutes, there is a zero object, every object has a negative, scaling distributes). Whatever satisfies the rules gets called a vector — and the cast of characters is startling:</p>
<ul>
  <li><strong>ℝⁿ:</strong> ordinary n-component arrows — the motivating example, but only the first.</li>
  <li><strong>Matrices:</strong> all 2×2 matrices form a vector space; add entrywise, scale entrywise.</li>
  <li><strong>Polynomials</strong> of degree ≤ 3: (1 + 2x³) + (x − x³) is again such a polynomial.</li>
  <li><strong>Functions:</strong> all continuous functions on an interval — an <em>infinite-dimensional</em> space.</li>
  <li><strong>Solutions of a homogeneous linear ODE:</strong> Chapter 1 proved that combinations of solutions of x″ + x = 0 are solutions. That closure property is exactly the vector-space property. Solution sets of linear equations <em>are</em> vector spaces — that is what "linear" means.</li>
</ul>
<p>Beware the impostors: the vectors in ℝ² with x ≥ 0 fail (multiply by −1 and you leave the set); polynomials of degree <em>exactly</em> 3 fail (x³ plus −x³ + x has degree 1, and there's no zero). A <strong>subspace</strong> is a vector space living inside another — a line or plane through the origin in ℝ³, but never one that misses the origin, since every vector space must contain its zero.</p>
<div class="key-concept">
  <h4>Quantum payoff: states are vectors</h4>
  <p>Quantum mechanics' first postulate is that the states of a physical system form a (complex) vector space. The infamous superpositions — an electron in a mixture of spin-up and spin-down, a particle taking both slits — are nothing more exotic than vector addition: c₁ψ₁ + c₂ψ₂ is a state because states form a vector space. Every theorem you prove in this chapter is a theorem about quantum states.</p>
</div>
<p>Why abstract the rules away from the arrows? Because every consequence derived from the axioms alone is then guaranteed for <em>all</em> the examples at once — one proof serving arrows, matrices, polynomials, ODE solutions, and wavefunctions simultaneously. Abstraction is not a luxury here; it is wholesale purchasing of theorems.</p>`,
        },
        {
          id: "independence-bases-dimension",
          title: "Independence, Span, Basis, Dimension",
          content: `
<p>Given a supply of vectors, two questions organize everything. What can you build from them? And are any of them redundant?</p>
<p>The <strong>span</strong> of v₁, …, v<sub>k</sub> is the set of all linear combinations c₁v₁ + … + c<sub>k</sub>v<sub>k</sub> — everything buildable. The vectors are <strong>linearly independent</strong> if no combination gives zero except the trivial all-coefficients-zero one; equivalently, none of them lies in the span of the others. Independent = no redundancy.</p>
<p><strong>Worked check.</strong> Are u = (1, 0, 1), v = (1, 1, 0), w = (0, 1, 1) independent in ℝ³? Suppose c₁u + c₂v + c₃w = 0. Componentwise: c₁ + c₂ = 0, c₂ + c₃ = 0, c₁ + c₃ = 0. From the first two, c₂ = −c₁ and c₃ = c₁; the third then reads 2c₁ = 0. So c₁ = c₂ = c₃ = 0 — <strong>independent</strong>. (For larger sets, Gaussian elimination on the matrix of columns automates this test: independent exactly when every column produces a pivot.)</p>
<p>A <strong>basis</strong> is the golden mean: a set that is independent <em>and</em> spans the whole space. Then every vector is a combination of basis vectors in <strong>exactly one way</strong> — the coefficients are the vector's <em>coordinates</em>. A basis is a coordinate system, and choosing a good one is half of physics: the standard basis for bookkeeping, the eigenvector basis to decouple dynamics, the Fourier basis to dissect waves.</p>
<div class="key-concept">
  <h4>Dimension is well-defined</h4>
  <p>Every basis of a given vector space has the same number of elements, and that number is the <strong>dimension</strong>. ℝ³ has dimension 3; the 2×2 matrices, 4; polynomials of degree ≤ 3, 4 (basis 1, x, x², x³). The solution space of x″ + x = 0 has dimension 2, with basis {cos t, sin t} — "two constants of integration" was a dimension statement all along.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The space of continuous functions has no finite basis at all — it is infinite-dimensional. Making "basis" work there (Fourier's sines and cosines are the classic example) requires the inner-product machinery of Chapter 6, and the resulting structure, a Hilbert space, is precisely where quantum wavefunctions live.</p>
</div>
<p>Independence, span, basis, dimension: four definitions that turn "how many degrees of freedom does this system really have?" from hand-waving into a computation.</p>`,
        },
        {
          id: "matrices-as-transformations",
          title: "A Matrix Is a Transformation",
          content: `
<p>The single most useful mental upgrade in linear algebra: stop seeing a matrix as a grid of numbers and start seeing it as a <strong>machine that moves vectors</strong>. The matrix A eats a vector x and outputs Ax, and it does so <em>linearly</em>: A(cx + dy) = cAx + dAy. Grids don't have geometry; machines do — they rotate, stretch, shear, reflect, and squash space.</p>
<p>The design principle is hiding in the multiplication rule:</p>
<div class="key-concept">
  <h4>Columns are where the basis goes</h4>
  <p>The first column of A is A(1, 0, …); the second is A(0, 1, 0, …); and so on — <strong>column j is the image of the j-th basis vector.</strong> Linearity then determines everything else. To build the matrix of any transformation: ask where the basis vectors land, and write the answers down as columns.</p>
</div>
<p><strong>Example — rotation.</strong> Rotating the plane by angle θ sends (1, 0) → (cos θ, sin θ) and (0, 1) → (−sin θ, cos θ). Stack as columns:</p>
<p style="text-align:center;">R(θ) = [cos θ&nbsp;&nbsp;−sin θ / sin θ&nbsp;&nbsp;cos θ]</p>
<p><strong>Example — shear.</strong> S = [1&nbsp;&nbsp;1 / 0&nbsp;&nbsp;1] keeps (1, 0) fixed and tips (0, 1) to (1, 1): squares lean into parallelograms, the italic-font transformation.</p>
<p>Composition of machines is <strong>matrix multiplication</strong>: applying A then B is the single machine BA — the product's strange row-into-column recipe is precisely what makes composition work out. And machines applied in different orders generally give different results. Rotate by 90° (R, with cos 90° = 0, sin 90° = 1) then shear:</p>
<p style="text-align:center;">SR = [1&nbsp;&nbsp;1 / 0&nbsp;&nbsp;1][0&nbsp;&nbsp;−1 / 1&nbsp;&nbsp;0] = [1&nbsp;&nbsp;−1 / 1&nbsp;&nbsp;0]&nbsp;&nbsp;&nbsp;but&nbsp;&nbsp;&nbsp;RS = [0&nbsp;&nbsp;−1 / 1&nbsp;&nbsp;0][1&nbsp;&nbsp;1 / 0&nbsp;&nbsp;1] = [0&nbsp;&nbsp;−1 / 1&nbsp;&nbsp;1]</p>
<p><strong>SR ≠ RS.</strong> Matrix multiplication does not commute, because performing operations in different orders genuinely does different things — shear-then-rotate is not rotate-then-shear.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Non-commuting operations are the mathematical soul of quantum mechanics. Position and momentum are represented by operators with XP ≠ PX, and Heisenberg's uncertainty principle is a direct consequence of the size of the mismatch XP − PX. When you verify SR ≠ RS above, you are rehearsing the calculation that shocked physics in 1925.</p>
</div>`,
        },
        {
          id: "determinants",
          title: "Determinants: Volume, Orientation & Invertibility",
          content: `
<p>Every square matrix carries one magic number. Geometrically, the <strong>determinant</strong> is the factor by which the transformation scales area (in 2D) or volume (in 3D): apply A to a unit square and the resulting parallelogram has area |det A|. A negative determinant means the machine also flips orientation, like a reflection turning a left hand into a right hand.</p>
<p>For 2×2, the formula is a one-liner:</p>
<p style="text-align:center;">det [a&nbsp;&nbsp;b / c&nbsp;&nbsp;d] = ad − bc</p>
<p>For 3×3, expand along the top row with alternating signs — each entry times the 2×2 determinant of what remains when you delete its row and column (<strong>cofactor expansion</strong>). Worked, step by step:</p>
<p style="text-align:center;">det [2&nbsp;&nbsp;1&nbsp;&nbsp;0 / 1&nbsp;&nbsp;3&nbsp;&nbsp;2 / 0&nbsp;&nbsp;1&nbsp;&nbsp;1]</p>
<ol>
  <li>Entry 2 (sign +): delete its row and column, leaving [3&nbsp;&nbsp;2 / 1&nbsp;&nbsp;1], determinant 3·1 − 2·1 = 1. Contribution: +2·1 = 2.</li>
  <li>Entry 1 (sign −): remaining [1&nbsp;&nbsp;2 / 0&nbsp;&nbsp;1], determinant 1·1 − 2·0 = 1. Contribution: −1·1 = −1.</li>
  <li>Entry 0 (sign +): contributes nothing.</li>
</ol>
<p style="text-align:center;">det A = 2 − 1 + 0 = <strong>1</strong></p>
<p>This transformation is volume-preserving. The properties worth owning: det(AB) = det A · det B (scale factors multiply when machines compose); swapping two rows flips the sign; det of a triangular matrix is the product of its diagonal.</p>
<div class="key-concept">
  <h4>The zero-determinant catastrophe</h4>
  <p>det A = 0 means A squashes space into something flatter — a plane, line, or point of zero volume. Then: the columns are linearly dependent; Ax = b is unsolvable for most b and never uniquely solvable; and no inverse machine can exist, because you cannot un-flatten. One number tests invertibility, independence, and solvability simultaneously.</p>
</div>
<p>You have already trusted this number twice: det(A − λI) = 0 located eigenvalues precisely because eigenvectors require (A − λI) to squash space. And in multivariable calculus, the Jacobian determinant in every change of variables — the r in r dr dθ — is this same volume-scaling factor, computed for the local linear approximation of the coordinate map.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Which of the following is NOT a vector space (with the usual addition and scaling)?",
          options: [
            "All polynomials of degree ≤ 3",
            "All solutions of x″ + x = 0",
            "All 2×2 matrices",
            "All vectors in ℝ² whose x-component satisfies x ≥ 0",
          ],
          correctIndex: 3,
          explanation:
            "The half-plane x ≥ 0 fails closure under scalar multiplication: multiply (1, 0) by −1 and you land outside the set. The other three all pass: sums and scalar multiples of degree-≤3 polynomials, of 2×2 matrices, and of solutions of a homogeneous linear ODE stay in each set — the last being precisely the superposition principle of Chapter 1.",
        },
        {
          question:
            "How do you construct the matrix of a linear transformation, such as rotation by θ?",
          options: [
            "Integrate the transformation over the unit square",
            "Apply the transformation to each basis vector and write the results as the matrix's columns",
            "Apply the transformation to a single well-chosen vector",
            "Write the transformation's fixed points along the diagonal",
          ],
          correctIndex: 1,
          explanation:
            "Column j of the matrix is the image of the j-th basis vector — and linearity guarantees that knowing the basis images determines the transformation everywhere. For rotation: (1,0) → (cos θ, sin θ) and (0,1) → (−sin θ, cos θ) stack into the familiar rotation matrix. One transformation value at a single vector is not enough; fixed points generally aren't either.",
        },
        {
          question: "What is det [4 2 / 3 3]?",
          options: ["6", "18", "12", "0"],
          correctIndex: 0,
          explanation:
            "For a 2×2 matrix, det = ad − bc = 4·3 − 2·3 = 12 − 6 = 6. Geometrically, this transformation maps the unit square to a parallelogram of area 6 with orientation preserved (positive sign).",
        },
        {
          question:
            "A 3×3 matrix has determinant zero. Which conclusion is NOT justified?",
          options: [
            "Its columns are linearly dependent",
            "It has no inverse",
            "The matrix must be the zero matrix",
            "It squashes 3D space into a plane, line, or point",
          ],
          correctIndex: 2,
          explanation:
            "det A = 0 does force dependent columns, non-invertibility, and the collapse of volume to zero — the three are equivalent. But plenty of nonzero matrices are singular: any matrix with a repeated column, for instance. Zero determinant means flattened, not absent.",
        },
        {
          question:
            "The solution set of x″ + x = 0 forms a vector space. What is its dimension, and what is a natural basis?",
          options: [
            "Dimension 1; basis {sin t}",
            "Dimension 2; basis {cos t, sin t}",
            "Infinite-dimensional, like all function spaces",
            "Dimension 3; basis {1, cos t, sin t}",
          ],
          correctIndex: 1,
          explanation:
            "Every solution is c₁cos t + c₂sin t for a unique pair (c₁, c₂) — so cos t and sin t span the space and are independent: dimension 2. The familiar 'two arbitrary constants' of a second-order ODE is a statement about dimension. The constant function 1 is not a solution (its second derivative plus itself is 1, not 0), and although the solutions are functions, they form a tiny 2-dimensional subspace of the infinite-dimensional function space.",
        },
      ],
    },
    {
      id: "eigenvalues-diagonalization",
      title: "Eigenvalues & Diagonalization",
      subtitle:
        "Eigenproblems, Hermitian matrices, and normal modes seen through new eyes",
      sections: [
        {
          id: "the-eigenvalue-problem",
          title: "Directions That Don't Turn",
          content: `
<p>A matrix machine generally knocks vectors off their lines — input and output point different ways. But almost every matrix hides a few privileged directions in which it acts with perfect simplicity, merely stretching:</p>
<p style="text-align:center; font-size:1.15em;"><strong>A v = λ v,&nbsp;&nbsp;&nbsp;v ≠ 0</strong></p>
<p>Such a v is an <strong>eigenvector</strong> ("own vector" — the matrix's own direction) and λ its <strong>eigenvalue</strong>, the stretch factor. Along eigenvectors, a matrix behaves like mere multiplication by a number — which is why every hard matrix problem begins with the hunt for them.</p>
<p>The hunt has a standard opening. Rewrite as (A − λI)v = 0: a nonzero v exists only if A − λI is singular, i.e. only if <strong>det(A − λI) = 0</strong> — the <strong>characteristic equation</strong>.</p>
<p><strong>Worked example.</strong> A = [2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2].</p>
<ol>
  <li><strong>Characteristic equation:</strong> det [2−λ&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2−λ] = (2−λ)² − 1 = λ² − 4λ + 3 = (λ−1)(λ−3) = 0. Eigenvalues: <strong>λ = 3 and λ = 1</strong>.</li>
  <li><strong>Eigenvector for λ = 3:</strong> (A − 3I)v = 0 reads −v₁ + v₂ = 0, so <strong>v = (1, 1)</strong>. Check: A(1,1) = (3, 3) ✓.</li>
  <li><strong>Eigenvector for λ = 1:</strong> v₁ + v₂ = 0, so <strong>v = (1, −1)</strong>. Check: A(1,−1) = (1, −1) ✓.</li>
</ol>
<p>Geometric picture: this machine stretches the diagonal direction (1, 1) threefold and leaves the anti-diagonal (1, −1) alone. Knowing that, you know the whole transformation — every other vector is a combination of the two and gets carried along accordingly.</p>
<div class="key-concept">
  <h4>Two instant checks</h4>
  <p>The <strong>trace</strong> (diagonal sum) equals the sum of eigenvalues, and the <strong>determinant</strong> equals their product. Here: trace 4 = 3 + 1 ✓ and det 3 = 3 × 1 ✓. Thirty seconds of checking catches most eigenvalue blunders — make it a reflex.</p>
</div>
<p>You have already met this equation twice in disguise: the characteristic roots of Chapter 1 and the straight-line solutions of Chapter 2 were eigenvalue problems. What is new now is the systematic exploitation — and the payoff starts with diagonalization.</p>`,
        },
        {
          id: "diagonalization-worked",
          title: "Diagonalization, Fully Worked",
          content: `
<p>If an n×n matrix has n independent eigenvectors, load them as the columns of a matrix P and collect the eigenvalues in a diagonal matrix D. Then AP = PD (apply A to each column of P: out come the columns times their λ's), so:</p>
<p style="text-align:center; font-size:1.15em;"><strong>A = P D P⁻¹</strong></p>
<p>This is <strong>diagonalization</strong> — the change of coordinates into the eigenvector basis, where the machine A is revealed as plain stretching. Continue with A = [2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2] from the last section:</p>
<ol>
  <li>P = [1&nbsp;&nbsp;1 / 1&nbsp;&nbsp;−1] (eigenvectors as columns), D = [3&nbsp;&nbsp;0 / 0&nbsp;&nbsp;1].</li>
  <li>Invert P: for a 2×2, swap the diagonal, negate the off-diagonal, divide by the determinant (here −2): P⁻¹ = [½&nbsp;&nbsp;½ / ½&nbsp;&nbsp;−½].</li>
  <li>Verify one product: PD = [3&nbsp;&nbsp;1 / 3&nbsp;&nbsp;−1], then PDP⁻¹ = [2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2] ✓.</li>
</ol>
<p>Why bother? Because <strong>powers become trivial</strong>: A² = PDP⁻¹PDP⁻¹ = PD²P⁻¹, and in general A<sup>k</sup> = PD<sup>k</sup>P⁻¹ — just raise the diagonal entries. Here the multiplication gives, for every k,</p>
<p style="text-align:center;">A<sup>k</sup> = ½ [3<sup>k</sup>+1&nbsp;&nbsp;&nbsp;3<sup>k</sup>−1 / 3<sup>k</sup>−1&nbsp;&nbsp;&nbsp;3<sup>k</sup>+1]</p>
<p>A hundredth power for the price of one diagonalization. The same trick defines matrix exponentials e<sup>At</sup> = Pe<sup>Dt</sup>P⁻¹, which solve u′ = Au in one stroke — Chapter 2's superposition of modes, repackaged.</p>
<p><strong>A 3×3, step by step.</strong> Let B = [2&nbsp;&nbsp;1&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;1&nbsp;&nbsp;2].</p>
<ol>
  <li>Spot an eigenvector: rows all sum to 4, so B(1, 1, 1) = (4, 4, 4): <strong>λ = 4</strong> with v = (1, 1, 1).</li>
  <li>Expanding det(B − λI) gives −(λ − 4)(λ − 1)²: the remaining eigenvalue is <strong>λ = 1, twice</strong>.</li>
  <li>For λ = 1: B − I has every row (1, 1, 1), so the condition is the single equation x + y + z = 0 — a whole <em>plane</em> of eigenvectors. Pick two independent ones: (1, −1, 0) and (1, 0, −1).</li>
  <li>Three independent eigenvectors for a 3×3: B <em>is</em> diagonalizable, with D = diag(4, 1, 1), despite the repeated eigenvalue.</li>
</ol>
<div class="key-concept">
  <h4>When diagonalization fails</h4>
  <p>Repeated eigenvalues are dangerous only when they come short of eigenvectors: the shear [1&nbsp;&nbsp;1 / 0&nbsp;&nbsp;1] has λ = 1 twice but only the single eigenvector direction (1, 0) — it cannot be diagonalized. Compare Chapter 1's repeated root, which forced the extra solution te<sup>rt</sup>. Same phenomenon, same culprit.</p>
</div>`,
        },
        {
          id: "symmetric-hermitian",
          title: "Symmetric & Hermitian: Why Eigenvalues Are Real",
          content: `
<p>Among all matrices, one royal family behaves perfectly. A real matrix is <strong>symmetric</strong> if A<sup>T</sup> = A — equal to its own transpose, like both examples of this chapter (look back: mirror-image across the diagonal). The complex generalization replaces transpose by <strong>conjugate transpose</strong> A<sup>†</sup> (flip and conjugate every entry); a matrix with A<sup>†</sup> = A is <strong>Hermitian</strong>.</p>
<p>Two theorems make this family royalty. First: <strong>every eigenvalue of a Hermitian (or real symmetric) matrix is real</strong> — even though the matrix may be full of complex numbers. The proof is three lines and worth savoring. Take Av = λv and compute the number ⟨v, Av⟩ (inner product of v with Av) two ways:</p>
<ol>
  <li>Acting right: ⟨v, Av⟩ = ⟨v, λv⟩ = λ⟨v, v⟩.</li>
  <li>Acting left, using Hermiticity to move A across the inner product: ⟨v, Av⟩ = ⟨Av, v⟩ = ⟨λv, v⟩ = λ̄⟨v, v⟩ — the conjugate appears because inner products conjugate their first slot.</li>
  <li>Since ⟨v, v⟩ = ‖v‖² &gt; 0, conclude λ = λ̄: <strong>λ is real</strong>.</li>
</ol>
<p>Second: <strong>eigenvectors belonging to different eigenvalues are orthogonal</strong> — a near-identical two-liner shows (λ₁ − λ₂)⟨v₁, v₂⟩ = 0. Check it on A = [2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2]: eigenvectors (1, 1) and (1, −1), dot product 1 − 1 = 0 ✓. And it never fails: the <strong>spectral theorem</strong> guarantees every real symmetric matrix has a complete orthonormal set of eigenvectors — it can be written A = QDQ<sup>T</sup> with Q's columns an orthonormal eigenbasis. Symmetric matrices are exactly the machines that stretch space along some set of <em>perpendicular</em> axes.</p>
<div class="key-concept">
  <h4>Quantum payoff: observables are Hermitian operators</h4>
  <p>Quantum mechanics represents every measurable quantity — energy, momentum, spin — by a Hermitian operator. Now you can see why the postulate is forced. Measurement outcomes are the operator's <em>eigenvalues</em>: they must be real numbers, and Hermiticity is what guarantees it. The <em>eigenvectors</em> are the states of definite outcome, and their orthogonality is what makes different outcomes perfectly distinguishable. The two little proofs above are, quite literally, the reason quantum mechanics is built on Hermitian matrices.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Heisenberg invented matrix mechanics in 1925 without knowing what a matrix was; Max Born recognized the strange multiplication rule from his student days. Within months they were diagonalizing Hermitian matrices to predict atomic spectra — eigenvalues of the energy operator are the spectral lines.</p>
</div>`,
        },
        {
          id: "quadratic-forms",
          title: "Quadratic Forms & Principal Axes",
          content: `
<p>Symmetric matrices have a second life: they encode <strong>quadratic forms</strong>, the energy-like expressions q(x) = x<sup>T</sup>Ax built from squares and cross terms. The form 2x² + 2xy + 2y², for instance, is x<sup>T</sup>Ax for our friend A = [2&nbsp;&nbsp;1 / 1&nbsp;&nbsp;2] — the diagonal entries carry the squares, and the off-diagonal pair splits the cross term 2xy between them.</p>
<p>Cross terms are the nuisance: they tilt the picture. The cure is the spectral theorem. Rotate to the orthonormal eigenvector coordinates (u along (1, 1), v along (1, −1)) and the form sheds its cross terms, keeping only squares weighted by eigenvalues:</p>
<p style="text-align:center;">2x² + 2xy + 2y² = 3u² + 1v²</p>
<p>The level curve q = 1, a tilted ellipse in x–y coordinates, is revealed as a standard ellipse with axes along the eigenvectors — the <strong>principal axes</strong> — and semi-axis lengths 1/√3 and 1 set by the eigenvalues. Diagonalization is the algebra; "finding the principal axes" is the geometry; they are the same act.</p>
<div class="key-concept">
  <h4>Positive definiteness</h4>
  <p>A symmetric matrix is <strong>positive definite</strong> if x<sup>T</sup>Ax &gt; 0 for every nonzero x — equivalently, if all its eigenvalues are positive. Our A qualifies (3 and 1). Physically: a potential energy that is positive definite in the displacements means every direction of disturbance costs energy, so the equilibrium is genuinely stable — a bowl, not a saddle surface.</p>
</div>
<p>Physics runs on this machinery:</p>
<ul>
  <li><strong>Stability analysis:</strong> near equilibrium, any potential is approximately quadratic (Taylor's theorem), U ≈ ½x<sup>T</sup>Kx. The eigenvalues of the stiffness matrix K decide bowl versus saddle, and — next section — set the vibration frequencies.</li>
  <li><strong>Rotational dynamics:</strong> a rigid body's kinetic energy is ½ω<sup>T</sup>Iω with I the inertia tensor — symmetric, hence with three perpendicular principal axes. That is why a thrown book spins cleanly about two of its axes and tumbles about the third (the intermediate-axis theorem awaits in Classical Mechanics II).</li>
  <li><strong>Statistics and data:</strong> a covariance matrix is symmetric positive semi-definite; its eigenvectors are the principal components — the same mathematics harvesting patterns instead of frequencies.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Cosmologists treat the temperature map of the cosmic microwave background with exactly this toolkit: the covariance of the fluctuations is a quadratic form, and its principal-axis analysis underpins the power spectrum from which the universe's age and composition are read off.</p>
</div>`,
        },
        {
          id: "normal-modes-revisited",
          title: "Normal Modes: The Eigenproblem You Already Solved",
          content: `
<p>In the waves course you met coupled oscillators and found their normal modes by clever guessing. Now watch the eigenvalue machinery generate them automatically. Two equal masses m slide between three identical springs k (wall–mass–spring–mass–wall). Newton's law for the displacements x₁, x₂:</p>
<p style="text-align:center;">m x₁″ = −2k x₁ + k x₂,&nbsp;&nbsp;&nbsp;m x₂″ = k x₁ − 2k x₂</p>
<p>In matrix form, m x″ = −K x with the (symmetric!) stiffness matrix K = k[2&nbsp;&nbsp;−1 / −1&nbsp;&nbsp;2]. Seek a <strong>normal mode</strong> — the whole system oscillating at one shared frequency: x(t) = v cos ωt. Substituting, the cosines cancel and out falls a pure eigenproblem:</p>
<p style="text-align:center; font-size:1.1em;"><strong>K v = mω² v</strong></p>
<p>The mode shapes are eigenvectors of K; the frequencies come from the eigenvalues. And K is our familiar matrix family: eigenvectors (1, 1) and (1, −1), eigenvalues k and 3k.</p>
<ul>
  <li><strong>Mode 1:</strong> v = (1, 1), mω² = k, so <strong>ω₁ = √(k/m)</strong>. The masses swing in phase; the middle spring never stretches, so only the outer springs contribute — the gentle mode.</li>
  <li><strong>Mode 2:</strong> v = (1, −1), mω² = 3k, so <strong>ω₂ = √(3k/m)</strong>. The masses oppose; the middle spring is worked hard, stiffening the motion — the fast mode.</li>
</ul>
<p>The general motion is a superposition of the two modes with amplitudes and phases set by initial conditions — an expansion of the initial state <em>in the eigenvector basis</em>. Strike one mass only and both modes are excited; the energy sloshes back and forth between the masses at the beat frequency ω₂ − ω₁. What looked like complicated coupled motion is two independent oscillators wearing a disguise.</p>
<div class="key-concept">
  <h4>The grand pattern</h4>
  <p>Symmetric stiffness matrix → orthogonal mode shapes, real frequencies; each mode an independent oscillator; any motion a superposition of modes. Replace "stiffness matrix" by "Hamiltonian" and "mode" by "energy eigenstate" and you have described, structure for structure, how quantum mechanics solves every system it can solve. Normal modes are the classical rehearsal for quantum theory.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A CO₂ molecule is three masses and two spring-like bonds; its normal modes vibrate at infrared frequencies. Two of those modes absorb Earth's outgoing thermal radiation — the greenhouse effect, at bottom, is an eigenvalue problem you can now set up yourself.</p>
  </div>`,
        },
      ],
      quiz: [
        {
          question: "What are the eigenvalues of A = [2 1 / 1 2]?",
          options: ["2 and 2", "4 and −1", "3 and 1", "±√3"],
          correctIndex: 2,
          explanation:
            "det(A − λI) = (2−λ)² − 1 = λ² − 4λ + 3 = (λ−1)(λ−3), giving λ = 3 and 1, with eigenvectors (1, 1) and (1, −1). Fast check: the trace 2 + 2 = 4 must equal the eigenvalue sum (3 + 1 ✓) and the determinant 4 − 1 = 3 must equal the product (3 × 1 ✓).",
        },
        {
          question:
            "Why is the factorization A = PDP⁻¹ so useful for computing A¹⁰⁰?",
          options: [
            "Because A¹⁰⁰ = PD¹⁰⁰P⁻¹, and powering the diagonal D just powers its entries",
            "Because P¹⁰⁰ is easy to compute",
            "Because diagonalization makes every entry of A¹⁰⁰ equal to λ¹⁰⁰",
            "Because det A = 0 after diagonalization",
          ],
          correctIndex: 0,
          explanation:
            "Sandwich cancellation: A² = (PDP⁻¹)(PDP⁻¹) = PD²P⁻¹, and by induction Aᵏ = PDᵏP⁻¹. Raising a diagonal matrix to a power just raises each diagonal entry, so a hundred matrix multiplications collapse to one diagonalization plus two multiplications. The same idea defines e^(At), which solves systems of ODEs outright.",
        },
        {
          question:
            "Quantum mechanics represents observables by Hermitian operators. Which mathematical facts make Hermitian matrices exactly the right choice?",
          options: [
            "Their determinants are always positive, ensuring positive probabilities",
            "They commute with every other matrix, so measurements never interfere",
            "They are always invertible, so every measurement has an outcome",
            "Their eigenvalues are guaranteed real (measurement outcomes) and eigenvectors of distinct eigenvalues are orthogonal (distinguishable outcome states)",
          ],
          correctIndex: 3,
          explanation:
            "The three-line proof: λ⟨v,v⟩ = ⟨v,Av⟩ = ⟨Av,v⟩ = λ̄⟨v,v⟩ forces λ = λ̄, so eigenvalues are real — as measured values must be. A companion argument gives (λ₁ − λ₂)⟨v₁,v₂⟩ = 0, so different outcomes correspond to orthogonal states. Hermitian matrices need not be invertible (0 is a legal eigenvalue), and famously do not all commute — that is where uncertainty relations come from.",
        },
        {
          question:
            "A real symmetric matrix has eigenvalues 5 and 2 with eigenvectors u and w. What can you say about u and w without computing them?",
          options: [
            "They point in nearly the same direction",
            "They are orthogonal: u·w = 0",
            "They are both eigenvectors for eigenvalue 7 as well",
            "Nothing — eigenvector directions are arbitrary",
          ],
          correctIndex: 1,
          explanation:
            "For symmetric matrices, eigenvectors belonging to distinct eigenvalues are always orthogonal — the spectral theorem's calling card. (Check on [2 1 / 1 2]: (1,1)·(1,−1) = 0.) Symmetric machines stretch space along perpendicular axes, which is also why quadratic forms lose their cross terms in eigencoordinates.",
        },
        {
          question:
            "Two equal masses coupled by three identical springs have modes (1, 1) at ω² = k/m and (1, −1) at ω² = 3k/m. Why is the out-of-phase mode faster?",
          options: [
            "In the (1, −1) motion the middle spring is stretched and compressed, adding restoring force; in the (1, 1) motion it stays slack, so only the outer springs act",
            "Because the masses are lighter in that mode",
            "Because the out-of-phase mode carries no energy",
            "It isn't — frequency is set by initial conditions, not by the mode",
          ],
          correctIndex: 0,
          explanation:
            "Mode shape controls which springs work. Moving in phase, the masses keep their separation fixed and the middle spring never deforms: eigenvalue k, hence ω = √(k/m). Moving oppositely, the middle spring deforms doubly, stiffening the restoring force to eigenvalue 3k and ω = √(3k/m). Frequencies are eigenvalues — properties of the system, never of the initial conditions.",
        },
      ],
    },
    {
      id: "inner-product-spaces",
      title: "Inner-Product Spaces",
      subtitle:
        "Orthogonality, projections, and function spaces — the quantum-ready chapter",
      sections: [
        {
          id: "inner-products",
          title: "Lengths and Angles for Abstract Vectors",
          content: `
<p>Vector spaces, as defined so far, have no geometry: you can add and scale, but nothing measures how <em>long</em> a vector is or what <em>angle</em> two vectors make. The missing structure is the <strong>inner product</strong> ⟨u, v⟩ — a machine that eats two vectors and returns a number, generalizing the dot product u·v = u₁v₁ + u₂v₂ + … of ℝⁿ. The rules: it is linear in each slot, symmetric, and positive — ⟨v, v⟩ &gt; 0 for v ≠ 0. From it, all of geometry regrows:</p>
<ul>
  <li><strong>Length:</strong> ‖v‖ = √⟨v, v⟩ — Pythagoras, promoted to a definition.</li>
  <li><strong>Angle:</strong> cos θ = ⟨u, v⟩ / (‖u‖‖v‖), guaranteed to lie in [−1, 1] by the <strong>Cauchy–Schwarz inequality</strong> |⟨u, v⟩| ≤ ‖u‖‖v‖ — the workhorse inequality of analysis, and the reason quantum probabilities never exceed 1.</li>
  <li><strong>Orthogonality:</strong> ⟨u, v⟩ = 0 — perpendicularity, now meaningful in any inner-product space.</li>
</ul>
<p>Over the <em>complex</em> numbers — the arena of quantum mechanics — one repair is required. With v = (1, i), the naive sum of squares gives 1² + i² = 0: a nonzero vector of zero length. Disaster. The fix is to conjugate one slot:</p>
<p style="text-align:center;">⟨u, v⟩ = ū₁v₁ + ū₂v₂ + … + ū<sub>n</sub>v<sub>n</sub></p>
<p>Now ⟨v, v⟩ = Σ|vᵢ|² &gt; 0 always. The price: the inner product is conjugate-linear in its first slot, and ⟨u, v⟩ = conjugate of ⟨v, u⟩ — the little bar that appeared at the crucial step of the "Hermitian eigenvalues are real" proof. That proof runs on this structure.</p>
<div class="key-concept">
  <h4>Quantum payoff: the bracket</h4>
  <p>Dirac's notation ⟨φ|ψ⟩ — the "bra-ket" — is precisely this complex inner product between state vectors. It is the <strong>probability amplitude</strong> for finding the system in state φ given that it is in ψ, and |⟨φ|ψ⟩|² is the probability. Orthogonal states, ⟨φ|ψ⟩ = 0, are perfectly distinguishable. When you compute a dot product with conjugation, you are one notation change away from doing quantum mechanics.</p>
</div>
<p>Everything that follows — projection, Gram–Schmidt, Fourier series — is built from this one definition, and transfers wholesale to any space with an inner product. Including, as the last two sections show, spaces whose vectors are functions.</p>`,
        },
        {
          id: "orthogonality-projections",
          title: "Orthogonality & Projection",
          content: `
<p>Orthogonality is the geometric superpower. Orthogonal vectors are maximally independent — no shadow of one falls on another — and computations that are miserable in general collapse into arithmetic when the vectors involved are mutually perpendicular.</p>
<p>The fundamental operation is <strong>projection</strong>: given b, find its best approximation p by a multiple of a — the shadow of b along a. Demand that the error e = b − p be orthogonal to a, and the coefficient follows in one line:</p>
<p style="text-align:center; font-size:1.1em;"><strong>p = (⟨a, b⟩ / ⟨a, a⟩) a</strong></p>
<p><strong>Worked example.</strong> Project b = (3, 4) onto a = (1, 2). Coefficient: ⟨a, b⟩/⟨a, a⟩ = (3 + 8)/(1 + 4) = 11/5, so p = (11/5, 22/5). Error: e = b − p = (4/5, −2/5). Check orthogonality: ⟨e, a⟩ = 4/5 − 4/5 = 0 ✓. The error is perpendicular to the direction — p really is the closest point, by Pythagoras: any other multiple of a differs from b by the hypotenuse of a right triangle with leg e.</p>
<p>This "drop a perpendicular" principle scales up. Projecting onto a whole subspace (find the combination of several vectors closest to b) is <strong>least squares</strong> — the method behind every line of best fit: the data vector b can't be reached by the model, so science settles for its orthogonal projection.</p>
<div class="key-concept">
  <h4>The luxury of an orthonormal basis</h4>
  <p>In a basis q₁, …, q<sub>n</sub> that is orthonormal (mutually orthogonal, unit length), coordinates require no equation-solving at all: v = ⟨q₁, v⟩q₁ + ⟨q₂, v⟩q₂ + … + ⟨q<sub>n</sub>, v⟩q<sub>n</sub>. Each coefficient is one inner product — computed independently of all the others. Add a basis vector later and no earlier coefficient changes. This formula is Fourier analysis, quantum measurement theory, and JPEG compression, all in one line.</p>
</div>
<p>Contrast a non-orthogonal basis, where finding coordinates means solving a fully coupled linear system, and every added vector reshuffles all previous coefficients. The lesson physics takes to heart: <em>always work in an orthonormal basis if you can get one.</em> The next section shows how to manufacture one from any raw material.</p>`,
        },
        {
          id: "gram-schmidt",
          title: "Gram–Schmidt: Manufacturing Orthonormal Bases",
          content: `
<p>The <strong>Gram–Schmidt process</strong> converts any independent set into an orthogonal one, using only the projection formula: take the vectors one at a time, and from each new vector <em>subtract its projections onto everything already built</em>. What remains is perpendicular to all of it.</p>
<p><strong>Worked example in ℝ³.</strong> Orthogonalize a₁ = (1, 1, 0), a₂ = (1, 0, 1), a₃ = (0, 1, 1).</p>
<ol>
  <li><strong>First vector — keep it:</strong> v₁ = (1, 1, 0).</li>
  <li><strong>Second — subtract its shadow on v₁:</strong> ⟨v₁, a₂⟩/⟨v₁, v₁⟩ = 1/2, so
  v₂ = a₂ − ½v₁ = (1, 0, 1) − (½, ½, 0) = (½, −½, 1).
  Check: ⟨v₁, v₂⟩ = ½ − ½ + 0 = 0 ✓.</li>
  <li><strong>Third — subtract shadows on both:</strong> ⟨v₁, a₃⟩/⟨v₁, v₁⟩ = 1/2 and ⟨v₂, a₃⟩/⟨v₂, v₂⟩ = (−½ + 1)/(3/2) = 1/3, so
  v₃ = (0, 1, 1) − (½, ½, 0) − (1/6, −1/6, 1/3) = (−2/3, 2/3, 2/3).
  Check: ⟨v₁, v₃⟩ = −2/3 + 2/3 = 0 ✓ and ⟨v₂, v₃⟩ = −1/3 − 1/3 + 2/3 = 0 ✓.</li>
  <li><strong>Normalize</strong> each to unit length to finish: q₁ = v₁/√2, q₂ = v₂/√(3/2), q₃ = v₃/(2/√3). An orthonormal basis, built to order.</li>
</ol>
<div class="key-concept">
  <h4>The algorithm in one sentence</h4>
  <p>New vector, minus its projections onto all previous ones, equals the next orthogonal direction — repeat. Nothing but the projection formula, applied with discipline.</p>
</div>
<p>Gram–Schmidt is how numerical libraries build the QR factorization at the heart of least-squares solvers, and how theorists conjure orthonormal bases in spaces where none is obvious. One more upgrade matters for physics: the process works on <em>any</em> inner-product space — including spaces of functions. Feed it the powers 1, x, x², x³ … with the integral inner product of the next section, and out come the <strong>Legendre polynomials</strong>, which govern multipole expansions in electrodynamics and angular momentum in quantum mechanics. Same three-step arithmetic as above, different vectors.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In floating-point arithmetic the textbook process slowly loses orthogonality to rounding error, so production code uses "modified Gram–Schmidt" — mathematically identical, numerically far more stable. The reordering was known to computers' first programmers in the 1950s; the mathematics is a century older.</p>
</div>`,
        },
        {
          id: "function-spaces",
          title: "When Vectors Are Functions",
          content: `
<p>Now for the boldest move in the subject. Functions on an interval can be added and scaled, so they form a vector space; think of f(x) as a vector with a continuum of components, one for each x. To import geometry, we need an inner product — and the natural one replaces the dot product's sum over components by an integral over them:</p>
<p style="text-align:center; font-size:1.1em;"><strong>⟨f, g⟩ = ∫ f(x) g(x) dx</strong>&nbsp;&nbsp;&nbsp;(over the interval; conjugate f for complex functions)</p>
<p>All the axioms check out, so the entire toolkit — lengths ‖f‖ = √∫f², angles, orthogonality, projection, Gram–Schmidt, Cauchy–Schwarz — applies verbatim to functions. The space of functions with ∫|f|² finite is called <strong>L²</strong>, the model Hilbert space of physics.</p>
<p>The stars of this space are the trigonometric functions on [−π, π]. Compute a few inner products:</p>
<ul>
  <li>⟨sin x, cos x⟩ = ∫ sin x cos x dx = ½∫ sin 2x dx = 0 — orthogonal (odd integrand over a symmetric interval, if you prefer the shortcut).</li>
  <li>⟨sin mx, sin nx⟩ = 0 for m ≠ n, and likewise for cosines and for every sine-cosine pair: product-to-sum identities turn each integrand into whole numbers of complete oscillations, which integrate to zero.</li>
  <li>⟨sin nx, sin nx⟩ = ∫ sin²nx dx = π — squared length π, so sin nx / √π is a unit vector.</li>
</ul>
<div class="key-concept">
  <h4>An orthogonal basis of infinite dimension</h4>
  <p>The family 1, cos x, sin x, cos 2x, sin 2x, … is an infinite <em>orthogonal set</em> in L²[−π, π] — pairwise perpendicular unit-scalable vectors, like the axes of ℝⁿ but unending. Completeness (they span the whole space, in the L² sense) is a deep theorem; granted it, every reasonable function has coordinates along these axes.</p>
</div>
<p>Pause on how audacious this is: sin 3x, an entire wiggling curve, is being treated as <em>one vector</em> — one arrow in an infinite-dimensional space, perpendicular to the arrow called cos 5x. Yet the arithmetic is the same as for (1, 1, 0) and (1, −1, 0), with ∫ in place of Σ.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>David Hilbert supposedly asked a colleague, "What exactly is a Hilbert space?" — the abstraction named for him had grown beyond its inventor. The definition physics uses: a complex inner-product space, complete in its norm. L² is the canonical example, and "wavefunctions live in Hilbert space" is quantum mechanics' address line.</p>
</div>`,
        },
        {
          id: "fourier-as-linear-algebra",
          title: "Fourier Series: Projection onto Sines — and the Quantum Payoff",
          content: `
<p>Everything now clicks together. A <strong>Fourier series</strong> expands a function on [−π, π] over the trigonometric family:</p>
<p style="text-align:center;">f(x) = a₀/2 + ∑ (a<sub>n</sub> cos nx + b<sub>n</sub> sin nx)</p>
<p>In the waves course the coefficient formulas were handed down as recipes. They are nothing of the sort — they are the orthonormal-expansion formula from this chapter. The coefficient of sin nx should be ⟨sin nx, f⟩/⟨sin nx, sin nx⟩, and since ⟨sin nx, sin nx⟩ = π:</p>
<p style="text-align:center; font-size:1.1em;"><strong>b<sub>n</sub> = (1/π) ∫ f(x) sin nx dx</strong>&nbsp;&nbsp;&nbsp;— a projection, nothing more</p>
<p>Fourier analysis <em>is</em> the geometry of Chapter 6: each coefficient is the shadow of f along one perpendicular axis, computable independently of all others precisely because the axes are orthogonal.</p>
<p><strong>Worked example.</strong> The square wave f = +1 on (0, π), −1 on (−π, 0). It is odd, so all cosine coefficients vanish by symmetry, and</p>
<p style="text-align:center;">b<sub>n</sub> = (2/π) ∫₀<sup>π</sup> sin nx dx = (2/nπ)(1 − cos nπ) = 4/nπ for odd n, 0 for even n</p>
<p style="text-align:center;">f(x) = (4/π)(sin x + sin 3x/3 + sin 5x/5 + …)</p>
<p>Three terms already sketch a credible square wave. And Pythagoras holds with infinitely many perpendicular legs — <strong>Parseval's theorem</strong>: ‖f‖² equals the sum of squared coefficients (with the standard normalizations). Length² = sum of components², exactly as in ℝ³.</p>
<div class="key-concept">
  <h4>The quantum payoff, in full</h4>
  <p>Assemble the subject's endgame. A quantum state is a vector ψ in a Hilbert space. An observable is a Hermitian operator, whose eigenvectors form an orthonormal basis of that space (Chapter 5) with real eigenvalues. Expand the state in that basis — a Fourier expansion, ψ = ∑ c<sub>n</sub>e<sub>n</sub> with c<sub>n</sub> = ⟨e<sub>n</sub>, ψ⟩, each coefficient a projection. Measurement returns eigenvalue λ<sub>n</sub> with probability |c<sub>n</sub>|², and Parseval's theorem — ∑|c<sub>n</sub>|² = ‖ψ‖² = 1 — is why the probabilities sum to one. The Born rule is Pythagoras in Hilbert space.</p>
</div>
<p>You are now quantum-ready. Second-order ODEs, eigenproblems, Hermitian matrices, orthonormal expansions: the Schrödinger equation ahead is a linear ODE whose Hamiltonian is Hermitian, solved by expanding states over its eigenbasis. Every tool is in your hands; the next subjects supply the physics.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "With the inner product ⟨f, g⟩ = ∫f(x)g(x)dx on [−π, π], why are sin x and cos x orthogonal?",
          options: [
            "Because they have different frequencies",
            "Because ∫ sin x cos x dx = 0 over the interval — the integrand is odd, so its symmetric integral vanishes",
            "Because sine and cosine never intersect",
            "Because orthogonality only applies to finite-dimensional vectors, so it holds trivially",
          ],
          correctIndex: 1,
          explanation:
            "Orthogonality means one thing only: the inner product is zero. Here sin x cos x = ½ sin 2x, an odd function, integrates to zero over [−π, π]. Frequency arguments alone don't settle it (sin x and cos x share a frequency yet are orthogonal), and the whole point of this chapter is that orthogonality applies perfectly well to function spaces.",
        },
        {
          question:
            "What is the projection of b = (3, 4) onto the direction a = (1, 2)?",
          options: [
            "(3, 4) — b already lies along a",
            "(1, 2)",
            "(11/5, 22/5), with error (4/5, −2/5) orthogonal to a",
            "(3/5, 8/5)",
          ],
          correctIndex: 2,
          explanation:
            "The coefficient is ⟨a, b⟩/⟨a, a⟩ = (3 + 8)/(1 + 4) = 11/5, giving p = (11/5)(1, 2) = (11/5, 22/5). The leftover e = b − p = (4/5, −2/5) satisfies ⟨e, a⟩ = 4/5 − 4/5 = 0 — the perpendicular error is the certificate that p is the closest point on the line to b.",
        },
        {
          question: "What does the Gram–Schmidt process accomplish?",
          options: [
            "It converts any independent set of vectors into an orthogonal one by subtracting, from each new vector, its projections onto the vectors already processed",
            "It finds the eigenvalues of a symmetric matrix",
            "It computes determinants by row reduction",
            "It solves least-squares problems without using projections",
          ],
          correctIndex: 0,
          explanation:
            "Gram–Schmidt is projection applied with discipline: keep the first vector; from each later vector remove its shadows on everything built so far; what remains is orthogonal to all of it. Normalize and you have an orthonormal basis. Fed the powers 1, x, x², … with the integral inner product, the same arithmetic produces the Legendre polynomials of electrodynamics and quantum mechanics.",
        },
        {
          question:
            "In what precise sense is a Fourier series 'just linear algebra'?",
          options: [
            "Fourier series only work for functions that are secretly polynomials",
            "The sines and cosines form a matrix that must be diagonalized",
            "It isn't — Fourier analysis needs calculus, which linear algebra excludes",
            "The sines and cosines are an orthogonal basis of a function space, and each coefficient formula like bₙ = (1/π)∫f sin nx dx is exactly the projection formula ⟨eₙ, f⟩/⟨eₙ, eₙ⟩",
          ],
          correctIndex: 3,
          explanation:
            "With the inner product ⟨f, g⟩ = ∫fg dx, the trigonometric family is an infinite orthogonal set, and expanding f over it is expansion in an orthonormal basis: coefficient = projection = inner product, each computable independently because the basis vectors are perpendicular. The integrals are inner products — calculus supplying the arithmetic, linear algebra supplying the meaning.",
        },
        {
          question:
            "A quantum state ψ is expanded over the orthonormal eigenstates eₙ of a Hermitian observable as ψ = ∑cₙeₙ. What are the cₙ, and why do the outcome probabilities |cₙ|² sum to 1?",
          options: [
            "The cₙ are eigenvalues, and they sum to the trace of the operator",
            "The cₙ are arbitrary constants fixed by convention, and normalization is imposed separately for each measurement",
            "Each cₙ = ⟨eₙ, ψ⟩ is a projection of the state onto an eigenstate, and Parseval's theorem gives ∑|cₙ|² = ‖ψ‖² = 1",
            "The cₙ are determined by the Gram–Schmidt process applied to ψ",
          ],
          correctIndex: 2,
          explanation:
            "Orthonormal expansion makes each coefficient an inner product — a projection, exactly as in Fourier series — and Parseval's theorem (Pythagoras with infinitely many perpendicular legs) says the squared coefficients sum to the squared length of the state. For a normalized state that length is 1, so the Born-rule probabilities |cₙ|² automatically total 1. The Born rule is Pythagoras in Hilbert space.",
        },
      ],
    },
  ],
};
