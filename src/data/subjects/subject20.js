export const subject20 = {
  id: "waves-vibrations-optics",
  number: 20,
  title: "Waves, Vibrations & Optics",
  description:
    "The MIT 8.03-style hinge course (French's Vibrations and Waves) — normal modes, the wave equation, and Fourier thinking, the prerequisite that unlocks both quantum mechanics and statistical physics.",
  phase: 4,
  chapters: [
    {
      id: "coupled-oscillators-normal-modes",
      title: "Coupled Oscillators & Normal Modes",
      subtitle:
        "Where matrices meet physics — beats, normal modes, and the road to the continuum",
      sections: [
        {
          id: "complex-exponentials",
          title: "The Professional's Tool: e^(iωt)",
          content: `
<p>Before coupling anything, upgrade your notation. You know the simple harmonic oscillator: ẍ = −ω²x, solved by x(t) = A cos(ωt + φ). That form works, but every physicist past their first year writes it differently, using <strong>Euler's formula</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>e^(iθ) = cos θ + i sin θ</strong></p>
<p>A complex exponential is a point circling the unit circle in the complex plane; its real part oscillates like a cosine. So instead of juggling sines and cosines, we write trial solutions as</p>
<p style="text-align:center;">x(t) = Re[ A e^(iωt) ],&nbsp;&nbsp;with A = |A| e^(iφ) a <strong>complex amplitude</strong></p>
<p>The single complex number A packs both the amplitude |A| and the phase φ. The payoff is enormous:</p>
<ul>
  <li><strong>Differentiation becomes multiplication.</strong> d/dt of e^(iωt) is just iω e^(iωt). Every derivative in a differential equation turns into a factor of iω, converting calculus into algebra.</li>
  <li><strong>Phases add themselves.</strong> Adding two oscillations with different phases is a trig-identity nightmare; adding two complex numbers is trivial. This becomes the phasor method of the interference chapter.</li>
  <li><strong>It scales.</strong> One oscillator, two coupled oscillators, a string, an electromagnetic field — the same substitution works everywhere.</li>
</ul>
<p>Check it on the harmonic oscillator: substitute x = A e^(iωt) into ẍ = −ω₀²x and get (iω)² A e^(iωt) = −ω₀² A e^(iωt), i.e. ω² = ω₀². The equation of motion has been reduced to an algebraic condition on ω. That maneuver — <em>assume e^(iωt), cancel it, solve what remains</em> — is the single most-used move in this entire subject.</p>
<div class="key-concept">
  <h4>The rules of the game</h4>
  <p>Because our equations are linear with real coefficients, the real and imaginary parts of a complex solution are each valid real solutions. So: compute with the full complex exponential, and take the real part at the very end. The imaginary part is scaffolding — free to carry, discarded when the building stands.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Richard Feynman called Euler's formula "the most remarkable formula in mathematics." Set θ = π and it collapses to e^(iπ) + 1 = 0 — five fundamental constants in one line. In this course it is not a curiosity but a daily tool.</p>
</div>`,
        },
        {
          id: "two-masses-eigenvalue-problem",
          title: "Two Masses, Three Springs: The Eigenvalue Problem",
          content: `
<p>Now the experiment that changes how you see mechanics. Two equal masses m slide on a frictionless track between two walls, connected wall–mass–mass–wall by three identical springs of constant k. Let x₁ and x₂ be the displacements from equilibrium. Newton's second law for each mass (each feels its two neighboring springs):</p>
<p style="text-align:center;">m ẍ₁ = −2k x₁ + k x₂<br>m ẍ₂ = k x₁ − 2k x₂</p>
<p>The equations are <strong>coupled</strong> — x₂ appears in the equation for x₁ and vice versa — so neither mass oscillates independently. Write the system as a matrix equation for the column vector <strong>x</strong> = (x₁, x₂):</p>
<p style="text-align:center;">m <strong>ẍ</strong> = −K<strong>x</strong>,&nbsp;&nbsp; K = [ 2k&nbsp;&nbsp;−k ; −k&nbsp;&nbsp;2k ]</p>
<p>Deploy the professional's tool: try <strong>x</strong>(t) = <strong>A</strong> e^(iωt), where <strong>A</strong> is a constant vector. Each time derivative brings down iω, so the trial turns the differential equation into pure algebra:</p>
<p style="text-align:center; font-size:1.05em;"><strong>K A = mω² A</strong></p>
<p>This is an <strong>eigenvalue problem</strong>: we need the special vectors that K merely rescales. Nontrivial solutions require det(K − mω²I) = 0:</p>
<p style="text-align:center;">(2k − mω²)² − k² = 0&nbsp;&nbsp;→&nbsp;&nbsp;2k − mω² = ±k</p>
<ul>
  <li><strong>Mode 1:</strong> ω₁² = k/m, eigenvector A₁ = A₂. The masses swing <em>together</em>; the middle spring never stretches, so only the outer springs act — hence the ordinary frequency √(k/m).</li>
  <li><strong>Mode 2:</strong> ω₂² = 3k/m, eigenvector A₁ = −A₂. The masses swing <em>oppositely</em>; the middle spring is stretched double-time, stiffening the motion to √(3k/m).</li>
</ul>
<div class="key-concept">
  <h4>Normal modes</h4>
  <p>A normal mode is a pattern of motion in which <em>every</em> part of the system oscillates at the same single frequency, with fixed amplitude ratios. Start the system in a pure mode and it stays there forever, oscillating like one big simple harmonic oscillator. The messy coupled system hides two clean, independent oscillators inside it — the eigenvectors are the "right coordinates" in which the coupling disappears.</p>
</div>
<p>This template — write K, find eigenvalues (frequencies²) and eigenvectors (shapes) — solves molecular vibrations, skyscraper sway, and, with one more upgrade, quantum mechanics, where <em>every</em> observable becomes an eigenvalue problem.</p>`,
        },
        {
          id: "beats-and-superposition",
          title: "Beats: Two Modes Interfering",
          content: `
<p>What if you do <em>not</em> start the system in a pure mode? Because the equations are linear, the general motion is a superposition of the two modes:</p>
<p style="text-align:center;">x₁(t) = C₁ cos(ω₁t + φ₁) + C₂ cos(ω₂t + φ₂)<br>x₂(t) = C₁ cos(ω₁t + φ₁) − C₂ cos(ω₂t + φ₂)</p>
<p>Four constants, four initial conditions (two positions, two velocities) — everything the system can do is a chord of its two natural notes.</p>
<p>The most beautiful case uses <strong>weak coupling</strong>: two identical pendulums joined by a feeble spring, so ω₁ and ω₂ are close. Pull aside only pendulum 1 and release. That initial condition is an equal mix of both modes (C₁ = C₂ = A/2), giving</p>
<p style="text-align:center;">x₁(t) = A cos(½(ω₂−ω₁)t) · cos(ω̄t),&nbsp;&nbsp;&nbsp;x₂(t) = A sin(½(ω₂−ω₁)t) · sin(ω̄t)</p>
<p>where ω̄ is the average frequency. Read the structure: each pendulum oscillates fast at ω̄, inside a slow envelope at half the difference frequency. Pendulum 1 swings, fades to a standstill — while pendulum 2, initially at rest, grows to full amplitude. Then the energy flows back. The two pendulums pass the motion back and forth forever, at the <strong>beat frequency ω₂ − ω₁</strong>.</p>
<div class="analogy">
  <h3>Analogy: Two guitar strings almost in tune</h3>
  <p>Sound the two strings together and you hear "wah–wah–wah" — loudness pulsing at the difference of their frequencies. Same mathematics: two close frequencies drifting in and out of phase, alternately reinforcing and canceling. Guitarists tune by slowing the beats to zero; the coupled pendulums are beats made visible, with energy instead of loudness doing the pulsing.</p>
</div>
<div class="key-concept">
  <h4>Why the energy sloshes</h4>
  <p>The modes themselves never exchange energy — each holds its share forever, like independent bank accounts. What oscillates is how the two modes' motions <em>add up</em> at each pendulum: in phase at one, out of phase at the other, alternating. "Energy transfer between pendulums" and "interference between modes" are two descriptions of one fact. Quantum mechanics will reuse this picture almost verbatim: a system in a superposition of two energy states oscillates at their difference frequency.</p>
</div>`,
        },
        {
          id: "many-body-limit",
          title: "N Masses and the Road to the Continuum",
          content: `
<p>The method does not care how many masses you have. Put N equal beads on a light stretched string (or N masses in a chain of springs), and Newton's law for bead p reads</p>
<p style="text-align:center;">m ÿ<sub>p</sub> = k(y<sub>p+1</sub> − y<sub>p</sub>) − k(y<sub>p</sub> − y<sub>p−1</sub>)</p>
<p>— each bead pulled by the difference between its neighbors. That is an N×N eigenvalue problem, and its solutions are wonderfully orderly. The n-th normal mode has the shape of a sampled sine wave,</p>
<p style="text-align:center;">A<sub>p</sub> ∝ sin( npπ / (N+1) ),&nbsp;&nbsp;n = 1, 2, …, N</p>
<p>with frequency ω<sub>n</sub> = 2√(k/m) sin( nπ / (2(N+1)) ). The rules generalize what the two-mass system taught:</p>
<ul>
  <li><strong>N masses → exactly N modes.</strong> Two masses had two; a molecule of N atoms has ~3N vibrational patterns; a crystal of 10²³ atoms has ~3×10²³.</li>
  <li><strong>Mode shapes are standing sine waves.</strong> Mode 1 is one broad arch, all beads moving together; mode 2 has a stationary point (a node) in the middle; mode n has n arches.</li>
  <li><strong>Higher modes wiggle faster and oscillate faster</strong> — more curvature means bigger restoring forces.</li>
  <li><strong>Any motion whatsoever is a sum of modes</strong>, with amplitudes set by initial conditions.</li>
</ul>
<p>Now the decisive step. Let N → ∞ while the beads shrink and crowd together, keeping the total mass and tension fixed. The chain becomes a <strong>continuous string</strong>. The mode shapes sin(npπ/(N+1)) become smooth curves sin(nπx/L); the count of modes becomes infinite; and the low modes' frequencies become the harmonics of a guitar string, ω<sub>n</sub> ∝ n. The discrete index p becomes a continuous position x, and the N coupled equations condense into a single partial differential equation — the wave equation of the next chapter.</p>
<div class="key-concept">
  <h4>The hinge of the hinge course</h4>
  <p>A wave is not a new kind of physics. It is the collective motion of infinitely many coupled oscillators, and every result of this course — Fourier series, standing waves, even the modes of the electromagnetic field that quantum theory will turn into photons — is normal-mode thinking in the continuum limit.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Two equal masses joined by three identical springs (wall–m–m–wall) have normal-mode frequencies ω₁ = √(k/m) and ω₂ = √(3k/m). Why is the antisymmetric mode (masses moving oppositely) faster?",
          options: [
            "The masses travel a longer path in that mode",
            "The wall springs are disconnected in that mode",
            "In that mode the middle spring is stretched from both ends, adding extra restoring force",
            "The antisymmetric mode carries less energy",
          ],
          correctIndex: 2,
          explanation:
            "In the symmetric mode the masses move together, the middle spring keeps its natural length, and only the outer springs act — frequency √(k/m). In the antisymmetric mode the masses approach and recede simultaneously, so the middle spring compresses and stretches at double rate, stiffening each mass's effective restoring force to 3k and raising the frequency to √(3k/m). Stiffer effective spring, faster oscillation.",
        },
        {
          question:
            "Substituting the trial solution x(t) = A e^(iωt) into a linear equation of motion is useful because:",
          options: [
            "each time derivative becomes a multiplication by iω, turning the differential equation into an algebraic one",
            "it guarantees the motion is damped",
            "complex numbers make the amplitude larger",
            "it removes the need for initial conditions",
          ],
          correctIndex: 0,
          explanation:
            "d/dt acting on e^(iωt) just multiplies it by iω, so ẍ becomes −ω²x and the equation of motion collapses to algebra — for coupled systems, to the eigenvalue problem KA = mω²A. The physical motion is the real part, taken at the end. Initial conditions are still needed; they fix the complex amplitudes of each mode.",
        },
        {
          question:
            "Two identical pendulums are joined by a weak spring. Pendulum 1 is pulled aside and released while pendulum 2 hangs at rest. What happens next?",
          options: [
            "Pendulum 1 oscillates forever; the weak spring is too feeble to move pendulum 2",
            "Both pendulums immediately oscillate with equal amplitude",
            "The system settles into its lower normal mode",
            "The oscillation slowly transfers entirely to pendulum 2, then back, repeating at the beat frequency ω₂ − ω₁",
          ],
          correctIndex: 3,
          explanation:
            "Displacing only one pendulum excites both normal modes equally. The two modes have slightly different frequencies, so they drift in and out of phase: where they add, that pendulum swings; where they cancel, it stands still. The result is complete energy transfer back and forth at the difference frequency — beats made visible. The modes themselves never exchange energy; only their sum at each pendulum changes.",
        },
        {
          question:
            "A linear chain of 5 coupled masses has how many normal modes, and what happens to the mode structure as the number of masses goes to infinity (at fixed total mass and tension)?",
          options: [
            "Ten modes; the modes become chaotic in the limit",
            "Five modes; the sampled-sine mode shapes become the smooth standing waves sin(nπx/L) of a continuous string",
            "One mode; extra masses only change the amplitude",
            "Five modes; in the limit all modes merge into a single frequency",
          ],
          correctIndex: 1,
          explanation:
            "N coupled oscillators always have exactly N normal modes — here five — each a sampled sine wave sin(npπ/(N+1)) with its own frequency. As N → ∞ the chain becomes a continuous string: the shapes become sin(nπx/L), the mode count becomes infinite, and the low-mode frequencies become the harmonic series ωₙ ∝ n. Waves are the many-body limit of normal-mode physics.",
        },
      ],
    },
    {
      id: "the-wave-equation",
      title: "The Wave Equation",
      subtitle:
        "Deriving the wave equation on a string, superposition, and standing waves done formally",
      sections: [
        {
          id: "deriving-on-a-string",
          title: "F = ma on a String",
          content: `
<p>Take a string of mass per unit length μ, stretched to tension T, and let y(x, t) be its small sideways displacement — a function of two variables, because every point of the string moves. We now apply Newton's second law to an infinitesimal piece between x and x + Δx and watch one of physics' great equations fall out.</p>
<p>The piece is pulled by tension at both ends, along the local direction of the string. For small slopes, the horizontal components cancel and the <em>vertical</em> component of tension at any point is T times the slope, T·(∂y/∂x). The net upward force on the piece is the difference between the pulls at its two ends:</p>
<p style="text-align:center;">F = T [ (∂y/∂x)|<sub>x+Δx</sub> − (∂y/∂x)|<sub>x</sub> ] ≈ T (∂²y/∂x²) Δx</p>
<p>Read that carefully: the force is proportional to the <strong>curvature</strong>. A straight piece of string — even a tilted one — feels no net force, because its two ends pull along the same line. Only where the string bends do the end-pulls fail to cancel. Curved upward means pulled upward toward straightness.</p>
<p>Newton's second law for the piece, whose mass is μΔx:</p>
<p style="text-align:center;">μΔx · (∂²y/∂t²) = T (∂²y/∂x²) Δx</p>
<p>Cancel Δx and rearrange:</p>
<p style="text-align:center; font-size:1.2em;"><strong>∂²y/∂t² = (T/μ) ∂²y/∂x²</strong></p>
<p>This is the <strong>wave equation</strong>, and the combination T/μ has units of velocity squared. Define v = √(T/μ): tighter strings wave faster, heavier strings slower — exactly why a guitarist tightens a string to raise its pitch and why bass strings are wound with extra mass.</p>
<div class="key-concept">
  <h4>What the equation says</h4>
  <p>Acceleration ∝ curvature. Each piece of string is an oscillator; the tension coupling it to its neighbors supplies the restoring force. This is precisely the N-bead chain of the last chapter with N → ∞ — the difference of neighbor-differences has matured into a second spatial derivative.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The same equation, with different constants, governs sound in air (v ≈ 343 m/s), waves on drumheads, seismic shear waves, and — as Maxwell discovered — light. Derive it once for a string and you own the mathematics of a vast slice of physics. Quantum mechanics will modify it (one time derivative, an i, and ℏ) but keep the cast of characters.</p>
</div>`,
        },
        {
          id: "traveling-wave-solutions",
          title: "Traveling Waves and d'Alembert's Solution",
          content: `
<p>What functions solve ∂²y/∂t² = v² ∂²y/∂x²? D'Alembert noticed something extraordinary: take <em>any</em> shape f and set</p>
<p style="text-align:center;">y(x, t) = f(x − vt)</p>
<p>By the chain rule, each ∂/∂t brings out a factor −v, so ∂²y/∂t² = v²f″ while ∂²y/∂x² = f″ — the equation is satisfied identically. And y = f(x − vt) is the shape f sliding rigidly to the right at speed v: whatever value f has at x₀ at t = 0, it has at x₀ + vt at time t. Likewise g(x + vt) slides left. The <strong>general solution</strong> is</p>
<p style="text-align:center;">y(x, t) = f(x − vt) + g(x + vt)</p>
<p>— a right-mover plus a left-mover, shapes arbitrary. A flick of your wrist sends a pulse down a rope unchanged: not because that shape is special, but because <em>every</em> shape travels at the same speed v on an ideal string.</p>
<p>The most important special case is the sinusoidal wave. Using the professional notation:</p>
<p style="text-align:center; font-size:1.05em;">y(x, t) = Re[ A e^(i(kx − ωt)) ],&nbsp;&nbsp;with&nbsp;&nbsp;<strong>ω = vk</strong></p>
<ul>
  <li><strong>k = 2π/λ</strong> is the wavenumber — radians of phase per meter, the spatial twin of ω (radians per second).</li>
  <li><strong>ω = 2πf</strong>; the relation ω = vk is just the familiar v = fλ in professional dress.</li>
  <li>The wave's speed is the speed of a point of constant phase kx − ωt, hence the name <strong>phase velocity</strong> v = ω/k.</li>
</ul>
<div class="key-concept">
  <h4>The dispersion relation</h4>
  <p>The function ω(k) that a medium imposes on its waves is called its dispersion relation, and it is the medium's signature. For the ideal string ω = vk: all wavelengths travel equally fast, so pulses hold their shape. In deep water, in glass, and for quantum matter waves, ω(k) is curved — different wavelengths travel at different speeds and pulses spread. That single function will organize everything from prisms to the uncertainty principle.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Because glass is dispersive for light, each color takes its own path in a prism — that is Newton's spectrum. An ideal string, with its straight-line ω = vk, could never make a rainbow.</p>
</div>`,
        },
        {
          id: "superposition-and-reflection",
          title: "Superposition and What Happens at a Boundary",
          content: `
<p>The wave equation is <strong>linear</strong>: it contains y and its derivatives only to the first power. Consequence: if y₁ and y₂ are solutions, so is y₁ + y₂. This is the <strong>superposition principle</strong>, and it is why waves are so much richer than particles. Two pulses sent toward each other pass straight through one another — while overlapping, the string's displacement is simply their sum (two crests pile up; a crest and a trough can momentarily flatten the string entirely) — and each emerges unscathed, carrying no memory of the encounter.</p>
<p>Superposition is an idealization with a boundary of validity: it holds while the medium responds proportionally. Overdrive any real medium (shock waves in air, intense laser light in glass) and nonlinearity appears. For this course — and for quantum mechanics, where linearity appears to be exact — superposition is law.</p>
<p>Now send a pulse at a boundary and watch what comes back:</p>
<ul>
  <li><strong>Fixed end</strong> (string tied to a wall): the wall must have y = 0 at all times. The only way an arriving pulse can respect that is if an <strong>inverted</strong> pulse reflects: crest returns as trough. Equivalently, the wall exerts a downward reaction on an arriving crest.</li>
  <li><strong>Free end</strong> (string ending on a frictionless massless ring on a pole): nothing can exert transverse force at the end, so the slope must vanish there, ∂y/∂x = 0. The pulse reflects <strong>upright</strong>, and the free end momentarily whips to double height.</li>
  <li><strong>A junction between two strings</strong> (light to heavy, or heavy to light): part of the wave transmits, part reflects. Going into a heavier string, the reflection is inverted, like a "partly fixed" end; into a lighter string, upright. The fraction reflected depends on the mismatch of the two strings' resistance to being waved — their impedance.</li>
</ul>
<div class="key-concept">
  <h4>Boundary conditions are physics, not bookkeeping</h4>
  <p>The wave equation governs the interior; the boundaries decide which solutions the world actually permits. That division of labor — equation plus boundary conditions — is the standard structure of all wave physics, and the next section shows its most famous consequence: confinement creates discreteness.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Impedance mismatch is why ultrasound technicians use gel: the soft tissue–air mismatch is so extreme that without gel nearly all the sound reflects at your skin and never enters the body. Anti-reflective coatings on camera lenses solve the same equation for light.</p>
</div>`,
        },
        {
          id: "standing-waves-formally",
          title: "Boundary Conditions and Standing Waves, Formally",
          content: `
<p>Clamp a string of length L at both ends — a guitar string — and demand a solution that oscillates at a single frequency: y(x, t) = ψ(x) cos(ωt). Substituting into the wave equation gives an equation for the shape alone:</p>
<p style="text-align:center;">ψ″(x) = −(ω/v)² ψ(x) = −k²ψ(x)</p>
<p>so ψ(x) = B sin(kx) + C cos(kx). Now impose the boundary conditions:</p>
<ol>
  <li><strong>y(0, t) = 0</strong> forces C = 0: only the sine survives.</li>
  <li><strong>y(L, t) = 0</strong> forces sin(kL) = 0, i.e. <strong>kL = nπ</strong> for a positive integer n.</li>
</ol>
<p>Not every wavelength is allowed. Only a discrete ladder survives:</p>
<p style="text-align:center; font-size:1.05em;">k<sub>n</sub> = nπ/L,&nbsp;&nbsp;λ<sub>n</sub> = 2L/n,&nbsp;&nbsp;<strong>ω<sub>n</sub> = nπv/L</strong>,&nbsp;&nbsp;n = 1, 2, 3, …</p>
<p>These are the string's normal modes: the <strong>fundamental</strong> (one arch, frequency f₁ = v/2L) and its <strong>harmonics</strong> at exactly 2f₁, 3f₁, … — the integer ladder that makes a plucked string musical. Each mode ψ<sub>n</sub> = sin(nπx/L) has n arches separated by motionless <strong>nodes</strong>; between nodes, points of maximum swing are <strong>antinodes</strong>. Touch a guitar string lightly at its midpoint and pluck: you force a node there, killing the fundamental and all odd harmonics — the ringing octave that remains is the n = 2 mode, a trick guitarists call a harmonic.</p>
<p>A standing wave is secretly two traveling waves. Using the identity:</p>
<p style="text-align:center;">sin(kx) cos(ωt) = ½ sin(kx − ωt) + ½ sin(kx + ωt)</p>
<p>— equal waves running left and right, forever re-reflecting off the clamped ends, interfering into a pattern that oscillates in place but goes nowhere.</p>
<div class="key-concept">
  <h4>Confinement → quantization</h4>
  <p>Follow the logic, because you will meet it again with the symbols changed: a wave equation, plus confinement by boundary conditions, permits only a discrete set of frequencies. Replace the string's displacement by a quantum wavefunction and its clamped ends by a potential well, and ωₙ becomes the discrete energy levels of an atom. Quantization is not an extra postulate bolted onto quantum mechanics — it is what wave equations do when you fence waves in. You have now seen the mechanism, classically and completely.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the derivation of the wave equation, the net transverse force on a small piece of string turned out to be proportional to ∂²y/∂x². Physically, this means a piece of string accelerates only if:",
          options: [
            "it is displaced from the axis",
            "the string is locally curved, so the tension pulls at its two ends fail to cancel",
            "it is moving faster than its neighbors",
            "the tension varies along the string",
          ],
          correctIndex: 1,
          explanation:
            "Tension pulls along the string at each end of the piece. If the piece is straight — even displaced or tilted — the two pulls are antiparallel and cancel. Only curvature (a changing slope, ∂²y/∂x² ≠ 0) leaves a net transverse force, always directed so as to straighten the string. Acceleration ∝ curvature is the wave equation's whole content.",
        },
        {
          question:
            "A wave pulse travels along a light string toward a junction with a much heavier string. What comes back?",
          options: [
            "Nothing — the pulse is fully absorbed at the junction",
            "An upright reflected pulse, as from a free end",
            "The pulse speeds up and continues without reflection",
            "An inverted reflected pulse, with part of the wave transmitted into the heavy string",
          ],
          correctIndex: 3,
          explanation:
            "A heavy string is hard to wave — the junction behaves partway toward a fixed end, so the reflected pulse is inverted, while some energy transmits into the heavy string (moving more slowly there, since v = √(T/μ) and μ is larger). Only a perfectly matched string gives no reflection; only an ideal rigid wall reflects everything.",
        },
        {
          question:
            "A string of length L fixed at both ends supports standing waves only at frequencies fₙ = n·v/2L. What is the origin of this discreteness?",
          options: [
            "The boundary conditions y = 0 at both ends are satisfied only when a whole number of half-wavelengths fits in L",
            "Friction at the supports removes the other frequencies over time",
            "The string can only vibrate at frequencies matching its material resonance",
            "The tension quantizes the wave speed",
          ],
          correctIndex: 0,
          explanation:
            "The wave equation allows every frequency; the clamps do not. Demanding sin(kL) = 0 forces kL = nπ, i.e. λ = 2L/n — an integer number of half-wavelength arches between the fixed ends. Confinement, not the medium or friction, creates the discrete ladder. The same logic, applied to a confined quantum wavefunction, yields discrete atomic energy levels.",
        },
        {
          question:
            "Which statement about the superposition principle for waves on an ideal string is correct?",
          options: [
            "Two crests that meet annihilate each other permanently",
            "Superposition only applies to waves of the same frequency",
            "Two pulses pass through each other unchanged, their displacements simply adding while they overlap",
            "When a crest meets an equal trough, the energy of the string is momentarily zero",
          ],
          correctIndex: 2,
          explanation:
            "Linearity of the wave equation means the sum of solutions is a solution: overlapping pulses add pointwise, then continue on their ways with no memory of the encounter. When a crest cancels an equal trough the string is momentarily flat but not at rest — the energy survives as kinetic energy of the moving string, ready to rebuild both pulses.",
        },
        {
          question:
            "A standing wave sin(kx)cos(ωt) on a string can equally be described as:",
          options: [
            "a single wave whose speed oscillates in time",
            "two identical traveling waves moving in opposite directions, superposed",
            "a wave with continuously varying wavelength",
            "a nonlinear effect that appears only at large amplitude",
          ],
          correctIndex: 1,
          explanation:
            "The identity sin(kx)cos(ωt) = ½sin(kx − ωt) + ½sin(kx + ωt) exposes the standing wave as equal right- and left-moving waves — physically, the endlessly re-reflecting waves trapped between the clamps. Their interference produces fixed nodes and antinodes: a pattern that oscillates in place while its two ingredients race in both directions.",
        },
      ],
    },
    {
      id: "fourier-analysis-intro",
      title: "Fourier Analysis Intro",
      subtitle:
        "Fourier series, spectra, wave packets — and a classical preview of the uncertainty principle",
      sections: [
        {
          id: "fourier-series",
          title: "Any Shape from Sines: The Fourier Series",
          interactive: "fourier-builder",
          content: `
<p>In 1807 Joseph Fourier made a claim so bold the referees (Lagrange among them) refused to believe it: <strong>any</strong> periodic function — smooth, jagged, even discontinuous — can be built by adding sines and cosines. For a function f(t) with period T (fundamental frequency ω = 2π/T):</p>
<p style="text-align:center; font-size:1.05em;">f(t) = a₀ + ∑ [ a<sub>n</sub> cos(nωt) + b<sub>n</sub> sin(nωt) ],&nbsp;&nbsp;n = 1, 2, 3, …</p>
<p>Only the fundamental and its integer harmonics appear — exactly the frequency ladder of a string fixed at both ends, and that is no coincidence: the string's modes are a Fourier basis, and "decompose the pluck into modes" <em>is</em> a Fourier series.</p>
<p>How do you find the recipe amounts a<sub>n</sub>, b<sub>n</sub>? By the miracle of <strong>orthogonality</strong>. Over one period, the integral of sin(nωt)·sin(mωt) vanishes unless n = m — different harmonics average to zero against each other, like perpendicular vectors whose dot product is zero. So to extract one coefficient, multiply f by the matching sine and integrate: every other term dies, leaving</p>
<p style="text-align:center;">b<sub>n</sub> = (2/T) ∫ f(t) sin(nωt) dt,&nbsp;&nbsp;a<sub>n</sub> = (2/T) ∫ f(t) cos(nωt) dt</p>
<p>(integrals over one period; a₀ is simply the average of f). Each coefficient is a <em>projection</em> — the shadow of f along one basis direction — and the harmonics form a set of axes for a space whose "vectors" are functions. In the complex notation the series is even cleaner: f(t) = ∑ c<sub>n</sub> e^(inωt), with a single formula for the c<sub>n</sub>.</p>
<div class="key-concept">
  <h4>Functions are vectors</h4>
  <p>Fourier's deepest legacy is this dictionary: functions behave like vectors, harmonics like perpendicular axes, integrals of products like dot products, coefficients like components. Linear algebra and calculus fuse. Quantum mechanics lives entirely inside this dictionary — its states are vectors in exactly this sense, and "measure the energy" means "project onto the modes."</p>
</div>
<p>Use the builder below to hear and see the claim: stack harmonics one by one and watch a handful of smooth sines organize themselves into corners and plateaus that no single sine could ever make.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Fourier invented the series while studying heat flow in cannon barrels, not sound. The mathematics did not care — it now runs audio compression, MRI reconstruction, and quantum field theory alike.</p>
</div>`,
        },
        {
          id: "square-wave-worked",
          title: "The Square Wave, Worked in Full",
          content: `
<p>Time to run the machinery on the hardest-looking easy case: the square wave. Let f(t) = +1 for the first half of each period and −1 for the second half — the most un-sinusoidal function imaginable, all corners and jumps.</p>
<p><strong>Symmetry first.</strong> The average is zero, so a₀ = 0. The function is odd (f(−t) = −f(t)) while cosines are even, so every a<sub>n</sub> = 0. Only sines survive — symmetry has done half the calculation for free.</p>
<p><strong>The b<sub>n</sub> integral.</strong> With ω = 2π/T,</p>
<p style="text-align:center;">b<sub>n</sub> = (2/T) [ ∫₀^(T/2) (+1)·sin(nωt) dt + ∫_(T/2)^T (−1)·sin(nωt) dt ]</p>
<p>Each integral of sin gives −cos/(nω) at its limits. Working it through, everything hinges on cos(nπ):</p>
<p style="text-align:center;">b<sub>n</sub> = (2/nπ)(1 − cos(nπ)) = 4/(nπ) if n is odd,&nbsp;&nbsp;0 if n is even</p>
<p>The even harmonics vanish (the square wave's half-period antisymmetry forbids them), and the odd ones fall off as 1/n:</p>
<p style="text-align:center; font-size:1.05em;"><strong>f(t) = (4/π) [ sin(ωt) + ⅓ sin(3ωt) + ⅕ sin(5ωt) + … ]</strong></p>
<p>Watch the sum assemble. One term: a plain sine. Add (1/3)sin(3ωt): the top flattens. By five terms the plateaus are unmistakable; by fifty the square wave is essentially perfect — corners built from things with no corners.</p>
<div class="key-concept">
  <h4>Sharpness costs high frequencies</h4>
  <p>The 1/n falloff is slow: to sharpen the jumps you need many high harmonics, and truncating the series early rounds every corner. This is a universal law of Fourier analysis — abrupt features in time demand broad content in frequency — and it is the seed of the uncertainty principle two sections ahead. It is also why a low-pass audio filter dulls a snare drum's attack, and why square-ish digital signals need wide bandwidth to transmit faithfully.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Near each jump the truncated series always overshoots by about 9% — the Gibbs phenomenon — no matter how many terms you keep; the overshoot just squeezes narrower. Engineers designing digital filters still budget for Gibbs ringing today.</p>
</div>`,
        },
        {
          id: "spectra",
          title: "Spectra: Hearing in the Frequency Domain",
          content: `
<p>A Fourier series suggests a change of worldview. Instead of plotting f(t) against time, plot the <strong>amplitude of each harmonic against its frequency</strong> — a bar chart called the <strong>spectrum</strong>. The square wave's spectrum is bars at ω, 3ω, 5ω, … with heights 4/π, 4/3π, 4/5π, … Same information, different axis: the time domain and the frequency domain are two complete, interchangeable descriptions of one signal.</p>
<p>The frequency domain is often the more physical one. Consider why a violin and a flute playing the same A₄ (440 Hz) sound utterly different. Same fundamental, same pitch — but the <em>mixture</em> differs: the flute's spectrum is dominated by the fundamental with weak harmonics, nearly a pure sine; the violin's is rich in strong harmonics. That mixture is what your ear calls <strong>timbre</strong>, and your cochlea — which physically sorts incoming sound by frequency along its coiled length — is a biological spectrum analyzer. You have been doing Fourier analysis since before you could talk.</p>
<p>The spectrum is also how a plucked string decides its sound. Pluck a guitar string at a point and release: the initial triangular shape is the initial condition y(x, 0). Decompose that triangle into the string's modes sin(nπx/L) — a Fourier series in <em>space</em> — and each mode then oscillates at its own f<sub>n</sub>, independently, forever (until damping). The amplitudes of the mix are fixed at the instant of the pluck:</p>
<ul>
  <li>Pluck at the middle → symmetric shape → even harmonics absent (they have a node where you plucked hardest) → round, mellow tone.</li>
  <li>Pluck near the bridge → sharply skewed triangle → many strong high harmonics → bright, twangy tone.</li>
</ul>
<p>Guitarists control a Fourier spectrum with their fingertips.</p>
<div class="key-concept">
  <h4>The recipe for any linear system</h4>
  <p>This is the universal algorithm of wave physics: (1) find the normal modes; (2) Fourier-decompose the initial condition into modes; (3) let each mode evolve trivially at its own frequency; (4) re-sum. Hard problems become three easy ones plus addition. Quantum mechanics solves the Schrödinger equation by exactly this recipe — with energy eigenstates as the modes.</p>
</div>`,
        },
        {
          id: "wave-packets-uncertainty",
          title: "Wave Packets and the Classical Uncertainty Principle",
          content: `
<p>Fourier series handle periodic signals, whose spectra are discrete bars. Let the period grow to infinity — a signal that never repeats, like a single clap or a solitary pulse — and the bars crowd together into a continuum: the series becomes the <strong>Fourier transform</strong>, f(t) = ∫ F(ω) e^(iωt) dω, a recipe with a continuous amount F(ω) of every frequency. Every signal, periodic or not, has a spectrum.</p>
<p>Now build the object that will matter most for quantum mechanics: a <strong>wave packet</strong> — a wave confined to a limited region, like a short pulse of light or a plucked ripple moving along a rope. Take sinusoids with wavenumbers spread over a band Δk around some k₀ and add them. Near one point they arrive in phase and reinforce; away from it, their differing wavelengths drift out of step and cancel. The result: a localized lump of length Δx, and a little Fourier bookkeeping shows the trade-off is inescapable:</p>
<p style="text-align:center; font-size:1.1em;"><strong>Δx · Δk ≳ 1</strong>&nbsp;&nbsp;&nbsp;(and its twin&nbsp;&nbsp;Δt · Δω ≳ 1)</p>
<p>A narrow packet needs a wide band of wavenumbers; a nearly pure single-k wave must extend over many wavelengths. This is not a limit of measurement or technology — it is a theorem about waves, as classical as a piano.</p>
<ul>
  <li>A piano tuner needs a sustained note: a 0.01 s blip has Δω ≳ 100 rad/s, so its pitch is genuinely fuzzy by tens of hertz. Short sounds <em>have</em> no precise pitch.</li>
  <li>Radar designers live the same trade-off: a short pulse locates a plane sharply but smears its frequency (and hence Doppler speed); a long pulse does the reverse.</li>
</ul>
<p>One more ingredient: in a dispersive medium the packet's envelope moves at the <strong>group velocity</strong> v<sub>g</sub> = dω/dk — generally different from the phase velocity ω/k of the crests inside, which can slide through the envelope as it travels. Energy and information ride with the group.</p>
<div class="key-concept">
  <h4>Heisenberg, previewed</h4>
  <p>Quantum mechanics will add one physical postulate: a particle's momentum is p = ℏk. Multiply Δx·Δk ≳ 1 by ℏ and the classical wave theorem becomes Δx·Δp ≳ ℏ — Heisenberg's uncertainty principle. Nothing about the mathematics changes. If matter is a wave, uncertainty is not an added mystery; it is Fourier analysis wearing new units.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In a Fourier series, the coefficient bₙ is found by multiplying the signal by sin(nωt) and integrating over one period. Why does this isolate exactly the n-th harmonic?",
          options: [
            "Orthogonality: the integral of sin(nωt)·sin(mωt) over a period vanishes unless m = n, so every other term integrates to zero",
            "Because sin(nωt) is larger than all the other harmonics",
            "Because integration removes all the cosine terms only",
            "Because the series converges faster for small n",
          ],
          correctIndex: 0,
          explanation:
            "Different harmonics are orthogonal: over a full period, the product of two different ones averages to zero, exactly like the dot product of perpendicular vectors. Multiplying by sin(nωt) and integrating projects the function onto that one 'axis', so only the matching term survives. This projection idea — functions as vectors, harmonics as axes — is the core machinery quantum mechanics inherits.",
        },
        {
          question:
            "The Fourier series of a square wave is (4/π)[sin(ωt) + ⅓sin(3ωt) + ⅕sin(5ωt) + …]. Which feature of the square wave is responsible for the series needing infinitely many harmonics with slowly decaying (1/n) amplitudes?",
          options: [
            "Its zero average value",
            "Its amplitude being exactly ±1",
            "Its sharp discontinuous jumps, since abrupt features in time require broad frequency content",
            "Its odd symmetry",
          ],
          correctIndex: 2,
          explanation:
            "Smooth functions have rapidly shrinking Fourier coefficients; discontinuities force a slow 1/n falloff, so sharp corners are assembled only by piling up many high harmonics. Truncate the series and every corner rounds off (plus the 9% Gibbs overshoot). The symmetries determine which terms vanish — odd symmetry kills the cosines, half-period antisymmetry kills even harmonics — but it is the jumps that demand the infinite, slowly decaying tail.",
        },
        {
          question:
            "A violin and a flute play the same 440 Hz note at the same loudness, yet sound completely different. In Fourier language, this is because:",
          options: [
            "the violin's note is not really periodic",
            "their spectra differ — the two instruments mix the harmonics of 440 Hz in different proportions",
            "the violin plays slightly sharp",
            "the flute produces no harmonics above the fundamental",
          ],
          correctIndex: 1,
          explanation:
            "Pitch is set by the shared fundamental; timbre is set by the recipe of harmonic amplitudes — the spectrum. The violin's spectrum is harmonic-rich, the flute's is dominated by the fundamental (weak but not zero harmonics). Your cochlea sorts sound by frequency along its length, so your ear literally perceives the spectrum. Same fundamental, different mixtures, different voices.",
        },
        {
          question:
            "Why does a very short sound pulse have no well-defined pitch?",
          options: [
            "Short sounds are too quiet for the ear to process",
            "The speed of sound changes during a short pulse",
            "Pitch only exists for electronically generated tones",
            "By the Fourier trade-off Δt·Δω ≳ 1, confining a signal to a short time forces it to contain a wide band of frequencies",
          ],
          correctIndex: 3,
          explanation:
            "A pulse lasting Δt is built from frequencies spread over at least Δω ≈ 1/Δt — a 10 ms click spans tens of rad/s and genuinely contains many pitches at once. This is a theorem about waves, not a limitation of ears or instruments. Multiply the identical spatial statement Δx·Δk ≳ 1 by ℏ (using p = ℏk) and it becomes Heisenberg's uncertainty principle.",
        },
        {
          question:
            "A wave packet travels through a dispersive medium where ω(k) is not a straight line. Which statement is correct?",
          options: [
            "The packet cannot move at all in a dispersive medium",
            "The crests inside the packet and the packet's envelope must move at the same speed",
            "The envelope moves at the group velocity dω/dk, which generally differs from the phase velocity ω/k of the crests inside, and the packet spreads",
            "Dispersion increases the packet's amplitude as it travels",
          ],
          correctIndex: 2,
          explanation:
            "The envelope — where the component waves momentarily agree in phase — travels at v_g = dω/dk, while individual crests move at ω/k and can slide through the envelope. Because the packet's different k-components travel at different speeds, their agreement degrades and the packet spreads. Energy and information travel with the group. On an ideal string (ω = vk exactly) the two velocities coincide and pulses keep their shape.",
        },
      ],
    },
    {
      id: "em-waves-polarization",
      title: "EM Waves & Polarization",
      subtitle:
        "Plane waves, polarization states, and what happens when light meets a boundary",
      sections: [
        {
          id: "light-as-a-plane-wave",
          title: "Light as a Plane Wave",
          content: `
<p>Electromagnetism ended with a thunderclap: in empty space, Maxwell's equations combine into wave equations for the fields,</p>
<p style="text-align:center;">∂²E/∂t² = c² ∂²E/∂x²,&nbsp;&nbsp;with&nbsp;&nbsp;c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m/s</p>
<p>— the speed of light, computed from two constants measured with coils and capacitors. Light is an electromagnetic wave. Now we treat it as one, using everything the string taught us.</p>
<p>The basic solution is the <strong>plane wave</strong>: a wave whose crests are infinite flat planes marching in one direction, the idealization of light far from a small source (sunlight at Earth is an excellent plane wave). Traveling along z, in professional notation:</p>
<p style="text-align:center; font-size:1.05em;"><strong>E</strong>(z, t) = Re[ <strong>E₀</strong> e^(i(kz − ωt)) ],&nbsp;&nbsp;ω = ck</p>
<p>Maxwell's equations impose a strict geometry on this solution:</p>
<ul>
  <li><strong>Transverse:</strong> E has no component along the travel direction. The field oscillates sideways, like the string's displacement — not along the motion, like sound.</li>
  <li><strong>B comes along:</strong> a magnetic field oscillates in phase with E, perpendicular to both E and the travel direction, with magnitude B = E/c.</li>
  <li><strong>The trio E, B, k</strong> form a right-handed set: E × B points along the propagation direction — which is also the direction the wave transports energy.</li>
</ul>
<p>Energy flow is quantified by intensity: the average power per unit area is proportional to the <em>square</em> of the field amplitude, I ∝ E₀². That square is why phasors and interference will matter so much — amplitudes add, but what detectors and eyes measure is the square of the sum, and cross terms in the square are interference.</p>
<div class="key-concept">
  <h4>One wave, one free choice</h4>
  <p>Once you fix the direction of travel and the frequency, one freedom remains: which transverse direction does E point? For travel along z, the field can oscillate along x, along y, or any combination of the two. That leftover choice is polarization — a two-dimensional space of options — and it is the subject of the next section.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The full electromagnetic spectrum is this one solution at different ω: radio (meters), microwaves (cm), infrared, the octave of visible light (400–700 nm), ultraviolet, X-rays, gamma rays. Your radio antenna and your retina are detectors for the same equation, tuned twelve orders of magnitude apart.</p>
</div>`,
        },
        {
          id: "polarization-states",
          title: "Polarization: Light's Two-Dimensional Secret",
          content: `
<p>For a plane wave heading along z, the electric field lives in the x–y plane, so the most general wave is a superposition of two independent components:</p>
<p style="text-align:center;"><strong>E</strong>(z, t) = Re[ (E<sub>x</sub> x̂ + E<sub>y</sub> ŷ) e^(i(kz − ωt)) ]</p>
<p>where E<sub>x</sub> and E<sub>y</sub> are <em>complex</em> amplitudes — each carrying a magnitude and a phase. Everything light's polarization can do is encoded in that pair of complex numbers, and the relative phase between them is the interesting part:</p>
<ul>
  <li><strong>Linear polarization:</strong> E<sub>x</sub> and E<sub>y</sub> in phase (relative phase 0 or π). The field oscillates along one fixed line in the x–y plane; the tip of E traces a straight segment. Light from lasers and radio transmitters is typically born this way.</li>
  <li><strong>Circular polarization:</strong> equal magnitudes, relative phase ±π/2 — say E<sub>y</sub> = ±iE<sub>x</sub>. As one component peaks the other passes through zero, and the tip of E sweeps a circle once per period, rotating clockwise or counterclockwise. The wave corkscrews through space.</li>
  <li><strong>Elliptical polarization:</strong> the general case — unequal magnitudes and/or intermediate phase; the tip traces an ellipse. Linear and circular are its special cases.</li>
</ul>
<p>Writing the state as a two-component complex vector (E<sub>x</sub>, E<sub>y</sub>) — a <strong>Jones vector</strong> — makes the structure vivid: polarization states form a two-dimensional complex vector space. Any state is a superposition of two basis states, and you may choose the basis freely: horizontal/vertical, the two diagonals, or left/right circular. A diagonal state <em>is</em> an equal sum of horizontal and vertical; circular <em>is</em> an equal sum with a ±i (a quarter-cycle phase twist).</p>
<div class="key-concept">
  <h4>The classical ancestor of the qubit</h4>
  <p>A normalized two-component complex vector, physical states unchanged by overall phase, measurable along any chosen basis: this is exactly the mathematics of a qubit — a spin-½ or a two-level atom. Polarization is where physicists first learned to calculate with two-state superpositions, decades before quantum mechanics needed them. When a photon meets a polarizer, the classical intensity fractions of this section become quantum probabilities, with no change to the formulas.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Many beetles' shells reflect only left-circularly polarized light, and mantis shrimp can see circular polarization — a channel of the visual world humans are entirely blind to. 3D cinema uses circular polarization too: each eye's glasses admit one handedness.</p>
</div>`,
        },
        {
          id: "malus-law",
          title: "Polarizers and Malus's Law",
          content: `
<p>A <strong>polarizer</strong> is a filter with a transmission axis: it passes the component of E along that axis and absorbs the perpendicular component. (Polaroid film does this with long aligned molecules that conduct — and hence absorb — along one direction.) Send in linearly polarized light of amplitude E₀ with its polarization at angle θ to the axis. Resolve the vector:</p>
<p style="text-align:center;">E<sub>through</sub> = E₀ cos θ&nbsp;&nbsp;→&nbsp;&nbsp;since I ∝ E²,&nbsp;&nbsp;<strong>I = I₀ cos²θ</strong></p>
<p>That is <strong>Malus's law</strong> (1809). At θ = 0, everything passes; at 90°, nothing; at 45°, exactly half. Unpolarized light — a rapid random jumble of polarization directions, like sunlight — averages cos²θ over all angles to ½: an ideal polarizer transmits half of unpolarized light and delivers it fully polarized along its axis.</p>
<p><strong>The three-polarizer surprise.</strong> Cross two polarizers at 90°: total darkness, since cos²(90°) = 0. Now slide a third polarizer <em>between</em> them at 45° — and light comes through! Follow the amplitudes:</p>
<ol>
  <li>After polarizer 1: intensity I₀, polarized vertically.</li>
  <li>Through the 45° middle polarizer: factor cos²45° = ½, now polarized at 45°.</li>
  <li>Through the horizontal final polarizer: another cos²45° = ½.</li>
</ol>
<p>Net transmission ⅛ of I₀ — through a pair that alone passed nothing. The middle filter does not "let light sneak through"; it <em>changes the question</em>, re-projecting the state onto a new axis so that the final projection is no longer zero.</p>
<div class="key-concept">
  <h4>Measurement changes the state</h4>
  <p>A polarizer is not a passive sieve — light leaves it polarized along the axis, whatever came in. Projection alters the state, and the order of projections matters. Rerun this experiment one photon at a time and cos²θ becomes the probability of transmission: the three-polarizer demonstration is, almost line for line, the textbook introduction to quantum measurement.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Every LCD pixel is a light valve built from this physics: liquid crystal between crossed polarizers twists the polarization by 90° so light passes; applying a voltage untwists the crystal and the pixel goes dark. You are reading this through millions of computer-controlled Malus's-law experiments.</p>
</div>`,
        },
        {
          id: "reflection-fresnel",
          title: "Reflection at Boundaries: Fresnel-lite",
          content: `
<p>What happens when light hits a boundary between two media — air and glass, air and water? Exactly what a wave on a string does at a junction: some reflects, some transmits, and the amounts follow from matching the wave across the interface. The full bookkeeping gives the <strong>Fresnel equations</strong>; we take the essentials.</p>
<p><strong>Normal incidence.</strong> For light arriving straight on, from index n₁ into index n₂, the amplitude reflection coefficient is</p>
<p style="text-align:center;">r = (n₁ − n₂)/(n₁ + n₂),&nbsp;&nbsp;reflected intensity R = r²</p>
<p>Air to glass (n = 1.5): r = −0.2, so R = 4% per surface. The minus sign means the reflected wave is inverted — the "into a denser medium" reflection flips, precisely like a string pulse reflecting off a heavier string. Camera lenses with ten glass surfaces would lose a third of their light to these 4% bites; anti-reflection coatings (thin films that make two reflections cancel by interference) rescue it.</p>
<p><strong>Oblique incidence: polarization enters.</strong> Away from normal incidence, the two polarizations reflect differently: the component polarized <em>in</em> the plane of incidence reflects less than the one polarized perpendicular to it. And at one special angle the in-plane reflection vanishes entirely — <strong>Brewster's angle</strong>, tan θ<sub>B</sub> = n₂/n₁ (≈ 56° for air→glass, ≈ 53° for air→water). At that angle, reflected and refracted rays are perpendicular, and the reflected light is <em>completely polarized</em> perpendicular to the plane of incidence.</p>
<p>This is why glare works the way it does: light bouncing off roads and water at typical angles is strongly horizontally polarized. Polarized sunglasses mount their transmission axis vertically and Malus's law wipes the glare out — while the rest of the scene, unpolarized, merely dims by half.</p>
<div class="key-concept">
  <h4>Total internal reflection</h4>
  <p>Going the other way — dense to rare, glass to air — Snell's law n₁ sin θ₁ = n₂ sin θ₂ fails to find a refracted angle once sin θ₂ would exceed 1. Beyond the critical angle θ_c = arcsin(n₂/n₁) (≈ 42° for glass–air) <em>all</em> the light reflects. This lossless mirror is the working principle of optical fibers, which carry the internet as light ricocheting down glass threads thinner than a hair.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Bees and many birds navigate partly by the polarization pattern of the blue sky — scattered sunlight is polarized in rings around the Sun, a compass that works even when the Sun is behind a cloud.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "For an electromagnetic plane wave traveling in the +z direction, which statement correctly describes the fields?",
          options: [
            "E points along z, and B circles around it",
            "E and B are parallel, both perpendicular to z",
            "E oscillates along z while B oscillates transversely",
            "E and B are perpendicular to each other and to z, oscillate in phase, and E × B points along +z",
          ],
          correctIndex: 3,
          explanation:
            "Maxwell's equations force EM plane waves to be transverse: both fields lie in the x–y plane, mutually perpendicular, in phase, with B = E/c. The cross product E × B gives the direction of travel and of energy flow. The only remaining freedom — which transverse direction E chooses — is the wave's polarization.",
        },
        {
          question:
            "Circularly polarized light differs from linearly polarized light in that:",
          options: [
            "its two transverse components are a quarter cycle (±π/2) out of phase, so the field tip sweeps a circle instead of a line",
            "it contains two different frequencies at once",
            "its electric field is stronger than its magnetic field",
            "it can only exist inside crystals, not in vacuum",
          ],
          correctIndex: 0,
          explanation:
            "Polarization is set by the two complex amplitudes (E_x, E_y). In phase → the components rise and fall together and E oscillates along a fixed line. Equal magnitudes with a ±π/2 relative phase → as one component peaks the other crosses zero, so the tip of E rotates uniformly, corkscrewing through space. Intermediate cases give ellipses. Same frequency throughout — only the phase relationship differs.",
        },
        {
          question:
            "Vertically polarized light of intensity I₀ passes through a polarizer whose axis is at 60° to vertical. What intensity emerges, and how is it polarized?",
          options: [
            "I₀/2, still vertically polarized",
            "I₀/4, polarized along the 60° axis",
            "3I₀/4, polarized along the 60° axis",
            "I₀ cos(60°) = I₀/2, polarized at 60°",
          ],
          correctIndex: 1,
          explanation:
            "Malus's law: the transmitted amplitude is the projection E₀cos60° = E₀/2, and intensity goes as amplitude squared, so I = I₀cos²60° = I₀/4. Crucially, the light leaves polarized along the polarizer's own axis — projection changes the state. That state change is why inserting a 45° polarizer between crossed polarizers lets light through (⅛ of the original) where none passed before.",
        },
        {
          question:
            "Why do polarized sunglasses specifically cut glare reflected from water and roads?",
          options: [
            "They absorb the blue wavelengths that dominate glare",
            "Glare is brighter than other light, and the glasses clip high intensities",
            "Light reflected near Brewster's angle is strongly horizontally polarized, and the glasses' vertical transmission axis rejects it by Malus's law",
            "Reflected light is circularly polarized and the glasses block one handedness",
          ],
          correctIndex: 2,
          explanation:
            "At oblique incidence the two polarizations reflect unequally, and at Brewster's angle (tanθ_B = n₂/n₁, about 53° for water) the reflected beam is completely polarized parallel to the surface — horizontal for roads and lakes. A vertical transmission axis makes cosθ ≈ 0 for that glare while passing half of the unpolarized scenery. The effect is strongest near Brewster's angle and weaker away from it.",
        },
        {
          question:
            "Light traveling inside glass (n = 1.5) strikes the glass–air surface at 60° from the normal. What happens?",
          options: [
            "It refracts into the air at a smaller angle than 60°",
            "Exactly 4% reflects, as at normal incidence",
            "It is completely absorbed at the surface",
            "It is totally internally reflected, since 60° exceeds the critical angle of about 42°",
          ],
          correctIndex: 3,
          explanation:
            "Going from dense to rare, Snell's law demands sinθ_air = 1.5·sin60° ≈ 1.3 — impossible, since a sine cannot exceed 1. Beyond the critical angle θ_c = arcsin(1/1.5) ≈ 42° no refracted ray exists and the surface reflects all the light. This perfect, lossless mirror guides light down optical fibers and makes diamonds (θ_c ≈ 24°) sparkle so aggressively.",
        },
      ],
    },
    {
      id: "interference-diffraction-quantitative",
      title: "Interference & Diffraction Quantitative",
      subtitle:
        "Phasors, gratings, single-slit patterns, and the fundamental limits of resolution",
      sections: [
        {
          id: "phasors",
          title: "Phasors: Adding Waves as Arrows",
          content: `
<p>Interference problems all reduce to one task: add several sinusoids of the same frequency but different phases, then square for intensity. Trigonometry makes this miserable. Complex exponentials make it geometry.</p>
<p>Each wave arriving at a detection point contributes A e^(iφ) — a complex number, drawable as an arrow of length A at angle φ in the complex plane. Such an arrow is a <strong>phasor</strong>. Because e^(iωt) is common to every wave, it factors out and cancels in the intensity; only the relative phases matter. The recipe:</p>
<ol>
  <li>Draw one arrow per wave, each rotated from its neighbor by their phase difference δ.</li>
  <li>Add the arrows head-to-tail, like displacement vectors.</li>
  <li>The resultant arrow's length is the total amplitude; <strong>intensity ∝ length²</strong>.</li>
</ol>
<p><strong>Two slits, revisited.</strong> Light from two slits a distance d apart reaches a distant screen at angle θ with a path difference d sin θ, hence a phase difference δ = kd sin θ = (2πd/λ) sin θ. Two equal arrows at relative angle δ: when δ = 0, 2π, 4π… they align — length 2A, intensity 4I₀ (constructive). When δ = π, 3π… they oppose — length 0 (destructive). In general, closing the isosceles triangle gives</p>
<p style="text-align:center; font-size:1.05em;"><strong>I = 4I₀ cos²(δ/2)</strong></p>
<p>— the exact double-slit fringe formula, derived by drawing two arrows. Bright fringes sit at d sin θ = mλ, and measuring fringe spacing hands you the wavelength of light: Young's 1801 measurement, done with sunlight and slits, got visible-light wavelengths right — under a thousandth of a millimeter.</p>
<div class="key-concept">
  <h4>Why amplitudes add, then square</h4>
  <p>Detectors respond to intensity, but nature superposes fields. Adding amplitudes first and squaring second produces the cross terms — the interference. Two equal waves can make 4I₀ or 0, not merely 2I₀: energy is not violated, just redistributed from dark fringes to bright ones. Hold on to "add the complex amplitudes, then square": it is also precisely the rule of quantum mechanics, where the arrows become probability amplitudes.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Feynman built his popular book QED entirely out of these little arrows — photons take every path, each contributing a rotating arrow, and the squared sum gives the probability. The phasor technique you are learning is the working heart of quantum electrodynamics.</p>
</div>`,
        },
        {
          id: "n-slits-gratings",
          title: "N Slits and the Diffraction Grating",
          content: `
<p>Now let N equally spaced slits illuminate the screen, each successive slit adding the same extra phase δ = (2πd/λ) sin θ. The phasor diagram is N equal arrows, each turned by δ from the last — a fan that curls as δ grows. Summing the geometric series ∑ e^(inδ) gives the exact intensity:</p>
<p style="text-align:center; font-size:1.05em;"><strong>I(θ) = I₀ [ sin(Nδ/2) / sin(δ/2) ]²</strong></p>
<p>Read the pattern from the phasors:</p>
<ul>
  <li><strong>Principal maxima:</strong> when δ = 0, 2π, 4π, … — i.e. <strong>d sin θ = mλ</strong> — all N arrows align. Amplitude NA, intensity N²I₀: staggeringly bright, since N can be tens of thousands.</li>
  <li><strong>Zeros:</strong> when Nδ/2 is a multiple of π (but δ/2 is not), the arrow fan closes into a complete polygon — head meets tail, resultant zero. There are N−1 zeros between adjacent principal maxima.</li>
  <li><strong>Sharpness:</strong> the first zero sits only δ = 2π/N away from each principal maximum, so each bright line has angular width ∝ 1/N. More slits do not move the maxima — they <em>sharpen</em> them, squeezing between them a rubble of N−2 tiny secondary maxima.</li>
</ul>
<p>A <strong>diffraction grating</strong> is this taken to the extreme: thousands of lines per millimeter. Its principal maxima become razor-thin, brilliant lines whose angles depend on λ through d sin θ = mλ — so each wavelength lands at its own angle, fanning white light into precise spectra. This is the instrument of <strong>spectroscopy</strong>: every element emits its own set of sharp spectral lines, a fingerprint readable at any distance.</p>
<div class="key-concept">
  <h4>Resolving power</h4>
  <p>Sharper lines mean finer distinctions. A grating with N illuminated lines used in order m can just separate wavelengths differing by λ/Δλ = Nm. With 10,000 lines in first order you can split wavelengths a part in 10,000 — enough to see the two famous yellow sodium lines (589.0 and 589.6 nm) cleanly apart, or to watch a star's spectral lines Doppler-shift as an unseen planet tugs it around.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Helium was discovered in the Sun's spectrum in 1868 — a set of grating lines matching no known element — 27 years before anyone found it on Earth. Astronomers still read the composition, temperature, and motion of galaxies entirely from grating spectra.</p>
</div>`,
        },
        {
          id: "single-slit-diffraction",
          title: "Single-Slit Diffraction: A Continuum of Phasors",
          content: `
<p>Even one slit makes a pattern, because a slit of width a is not a point: every strip of the opening radiates, and the strips interfere with <em>each other</em>. This is diffraction — interference of a wavefront with itself — and the phasor method handles it by letting the number of arrows go to infinity.</p>
<p>Divide the slit into many narrow strips. At angle θ, adjacent strips differ in phase by a tiny equal step; the total phase spread across the whole slit is 2β, where</p>
<p style="text-align:center;">β = (πa/λ) sin θ</p>
<p>The phasor sum of infinitely many tiny equal arrows with equal turning is an <strong>arc of a circle</strong> of fixed total length (set by the light the slit admits). As θ grows, the arc curls more:</p>
<ul>
  <li>θ = 0: the arc is straight — maximum resultant, central bright maximum.</li>
  <li>2β = 2π: the arc closes into a full circle — resultant <strong>zero</strong>. First dark fringe at <strong>a sin θ = λ</strong>.</li>
  <li>Further curling gives ever-smaller loops: zeros at a sin θ = mλ, with feeble maxima between (the second loop's "1.5 turns" peak is only ≈ 4.5% of the central intensity).</li>
</ul>
<p>The chord-to-arc geometry gives the exact curve:</p>
<p style="text-align:center; font-size:1.05em;"><strong>I(θ) = I₀ [ sin β / β ]²</strong></p>
<p>a broad central peak of angular half-width θ ≈ λ/a flanked by rapidly dying ripples. Note the reciprocity: a <em>narrower</em> slit spreads light <em>wider</em>. Squeeze the opening and the beam fans out — confining a wave in space broadens its spread of directions, the uncertainty principle drawn in light. (For a real double slit, each opening has width a, and the ideal cos² fringes ride under this sinc-shaped envelope: fine fringes from the pair, broad envelope from each slit alone.)</p>
<div class="key-concept">
  <h4>When can you ignore diffraction?</h4>
  <p>The spread angle λ/a is tiny when the aperture is huge compared with the wavelength — a doorway (a ≈ 1 m) spreads 500 nm light by microdegrees, so light seems to travel in rays; the same doorway spreads 1 m sound waves by radians, so you hear around corners. "Rays versus waves" is nothing but the size of λ/a, a point the final chapter builds into a full theory.</p>
</div>`,
        },
        {
          id: "resolution-limits",
          title: "The Resolution Limit: Why Every Instrument Blurs",
          content: `
<p>Every telescope, microscope, camera, and eye gathers light through an aperture — and the last section showed what an aperture does: it diffracts. A distant star, an ideal point of light, is imaged not as a point but as a diffraction pattern. For the usual circular aperture of diameter D the pattern is the <strong>Airy pattern</strong>, a bright disk ringed by faint circles, with its first dark ring at</p>
<p style="text-align:center; font-size:1.05em;">θ ≈ 1.22 λ/D</p>
<p>(the 1.22 is the circular-geometry cousin of the slit's a sin θ = λ). No polish, no perfection of the optics can shrink it: the blur is made by the aperture's edge, not by its flaws.</p>
<p>Two stars separated by a small angle produce two overlapping Airy disks. The conventional dividing line is the <strong>Rayleigh criterion</strong>: the sources are just resolvable when the center of one pattern falls on the first dark ring of the other —</p>
<p style="text-align:center;"><strong>θ<sub>min</sub> = 1.22 λ/D</strong></p>
<p>Closer than that, the blobs merge into one and the information is gone. The two levers are visible in the formula: shorter wavelength, or bigger aperture.</p>
<ul>
  <li><strong>Your eye:</strong> pupil ≈ 3 mm, λ ≈ 550 nm → θ ≈ 2×10⁻⁴ rad, about 1/60 of a degree — roughly a car's headlights separated at 5 km, and close to the actual spacing of cone cells on your retina. Evolution built the detector to match the diffraction limit.</li>
  <li><strong>Hubble (D = 2.4 m):</strong> θ ≈ 3×10⁻⁷ rad — 700 times sharper than the eye, and the real reason it is in space is not sharpness but escaping atmospheric turbulence, which blurs ground telescopes far above their diffraction limit unless adaptive optics fight back.</li>
  <li><strong>Microscopes:</strong> the same physics caps resolution at roughly λ/2 ≈ 250 nm for visible light. Viruses and proteins are smaller — invisible in principle, not merely in practice.</li>
</ul>
<div class="key-concept">
  <h4>The escape routes all shorten λ</h4>
  <p>To see smaller, use smaller waves: ultraviolet lithography (13.5 nm light prints computer chips), X-ray crystallography (λ ≈ 0.1 nm resolved DNA's double helix), and the electron microscope — electrons' quantum wavelength at 100 keV is a few picometers, revealing individual atoms. The resolution limit is the classical fact; that electrons have a λ at all is the quantum one, waiting in Phase 5.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Event Horizon Telescope photographed a black hole by making D the size of the Earth — radio dishes on several continents combined by interferometry into one planet-wide aperture, reaching θ ≈ 2×10⁻¹¹ rad: reading a newspaper in New York from Paris.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the phasor picture of two-slit interference, a dark fringe occurs where:",
          options: [
            "the two waves arrive with too little energy to detect",
            "the two phasor arrows point in opposite directions (phase difference π), so the resultant amplitude is zero",
            "the phasor arrows rotate too fast to sum",
            "one slit blocks the other's light",
          ],
          correctIndex: 1,
          explanation:
            "Each wave is an arrow of length A; at path difference d sinθ = (m + ½)λ the relative phase is π, the arrows are antiparallel, and the resultant is zero — no light, even though both slits deliver energy there individually. The energy is not destroyed; it is redistributed into the bright fringes, where aligned arrows give amplitude 2A and intensity 4I₀. Amplitudes add first; intensity is the square of the sum.",
        },
        {
          question:
            "Increasing the number of slits N in a grating (keeping the spacing d fixed) has what effect on the interference pattern?",
          options: [
            "The principal maxima stay at the same angles but become much sharper (width ∝ 1/N) and brighter (∝ N²)",
            "The principal maxima move to larger angles",
            "The pattern washes out as the many waves average away",
            "The number of principal maxima increases in proportion to N",
          ],
          correctIndex: 0,
          explanation:
            "Principal maxima sit where all N phasors align — d sinθ = mλ — which depends on d and λ, not N. But moving slightly off a maximum now misaligns N arrows instead of two: the first zero lies only δ = 2π/N away, so the lines sharpen as 1/N while peaking at N²I₀. Sharp, bright lines are exactly what spectroscopy needs — resolving power λ/Δλ = Nm.",
        },
        {
          question:
            "For single-slit diffraction, the first dark fringe appears at a sinθ = λ. If the slit is made narrower, the central bright maximum:",
          options: [
            "narrows, because less light gets through",
            "stays the same width but dims",
            "widens, since the diffraction angle θ ≈ λ/a grows as a shrinks",
            "splits into two separate maxima",
          ],
          correctIndex: 2,
          explanation:
            "The pattern's scale is set by λ/a: confining the wave to a smaller opening spreads it over a wider fan of angles. In the phasor picture, fewer 'strips' need less total phase spread to curl the arc closed, so the zero moves outward in angle. This reciprocity — narrow in space, wide in direction — is the uncertainty principle in classical dress, and it is why light seems ray-like only when apertures dwarf the wavelength.",
        },
        {
          question:
            "Two distant stars are separated by an angle just below 1.22λ/D for a telescope of aperture D. Which fix would let the telescope resolve them?",
          options: [
            "Increasing the exposure time to gather more light",
            "Polishing the mirror to remove all imperfections",
            "Magnifying the image with a stronger eyepiece",
            "Using a larger-diameter mirror or observing at a shorter wavelength",
          ],
          correctIndex: 3,
          explanation:
            "The blur is diffraction from the aperture itself, so neither optical perfection, exposure, nor magnification helps — magnifying merely enlarges the merged blobs. The Rayleigh criterion θ_min = 1.22λ/D offers exactly two levers: bigger D or smaller λ. Interferometry exploits the first to the extreme, synthesizing continent-sized apertures; electron microscopes exploit the second, using picometer quantum wavelengths.",
        },
      ],
    },
    {
      id: "geometrical-optics-from-waves",
      title: "Geometrical Optics from Waves",
      subtitle:
        "Why rays work at all — the eikonal idea, matrix optics, instruments, and lasers",
      sections: [
        {
          id: "eikonal-idea",
          title: "Why Rays Work: The Eikonal Idea",
          content: `
<p>For two chapters light has been a wave — yet lens designers happily draw straight rays and get the right answers. Why do rays work at all? The answer, called the <strong>eikonal approximation</strong>, is one of physics' most instructive limits.</p>
<p>When the wavelength is tiny compared with everything the wave meets — lenses, mirrors, apertures measured in centimeters against λ ≈ 0.0005 mm — the wavefronts (surfaces of constant phase) behave simply: each patch of wavefront advances perpendicular to itself at the local wave speed c/n. Define a <strong>ray</strong> as a curve that always runs perpendicular to the wavefronts, and the wave's bookkeeping reduces to geometry:</p>
<ul>
  <li>In uniform medium, wavefronts stay evenly spaced and rays are straight lines.</li>
  <li>Where the index n changes, one side of a wavefront advances faster than the other, so the front tilts — the ray bends. Applied at an interface, this yields exactly <strong>Snell's law</strong> n₁ sin θ₁ = n₂ sin θ₂: refraction is a wavefront wheeling like a marching band hitting mud at an angle.</li>
  <li>Diffraction — the wave's insistence on spreading by θ ≈ λ/a — becomes negligible precisely because λ/a ≈ 0.</li>
</ul>
<p>An equivalent, older statement is <strong>Fermat's principle</strong>: between two points, light follows the path of least travel time. The wave explanation is lovely: light "tries" every path, each contributing a phasor; along most paths the phase varies wildly from neighbor to neighbor and the arrows cancel, but near the least-time path the phase is stationary — neighboring paths agree — and the arrows reinforce. The ray is where the phasors conspire.</p>
<div class="key-concept">
  <h4>A limit worth memorizing</h4>
  <p>Geometrical optics : wave optics = classical mechanics : quantum mechanics. In exactly the same mathematical sense, Newtonian trajectories are the short-wavelength limit of quantum matter waves — the particle's path is where the quantum phasors reinforce, and Fermat's principle is the twin of the least-action principle of mechanics. Understand why rays emerge from waves and you have pre-understood how classical physics emerges from quantum physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The eikonal picture handles continuously varying n too: air cooled or heated in layers bends rays smoothly, producing mirages, the flattened setting Sun, and stars that twinkle. A desert "lake" is the sky, delivered by rays curved in hot low-index air.</p>
</div>`,
        },
        {
          id: "matrix-optics",
          title: "Matrix Optics: Ray Tracing as Linear Algebra",
          content: `
<p>Within the ray picture — and close to the optical axis, where angles are small (the <strong>paraxial</strong> regime) — optics becomes linear algebra. Describe a ray at any plane by two numbers: its height y above the axis and its angle θ with the axis. Every optical element turns an incoming (y, θ) into an outgoing (y′, θ′) <em>linearly</em>, so each element is a 2×2 matrix:</p>
<ul>
  <li><strong>Free flight</strong> through distance d: height grows by d·θ, angle unchanged → y′ = y + dθ, θ′ = θ. Matrix rows: (1 d; 0 1).</li>
  <li><strong>Thin lens</strong> of focal length f: height unchanged at the lens, angle kicked toward the axis in proportion to height → y′ = y, θ′ = θ − y/f. Matrix rows: (1 0; −1/f 1).</li>
</ul>
<p>A whole optical system — lens, gap, lens, gap… — is then just the <strong>product of its matrices</strong> (rightmost acting first, in the order the ray meets them). Design questions become matrix questions:</p>
<p><strong>Worked example: two thin lenses in contact.</strong> Multiply two lens matrices:</p>
<p style="text-align:center;">(1 0; −1/f₂ 1)(1 0; −1/f₁ 1) = (1 0; −1/f₁ − 1/f₂ 1)</p>
<p>The product has the same form as a single thin lens with</p>
<p style="text-align:center; font-size:1.05em;"><strong>1/f = 1/f₁ + 1/f₂</strong></p>
<p>— the lensmaker's stacking rule, derived by pure matrix multiplication. Optometrists use exactly this additivity when they stack trial lenses, which is why prescriptions are quoted in diopters (1/f in m⁻¹): powers add.</p>
<p>The same machinery locates images (an image plane is one whose transfer matrix has its upper-right entry zero: all rays from a point, whatever their angle, reland at one point), gives magnification (the upper-left entry), and lets designers chain twenty elements without drawing a single ray.</p>
<div class="key-concept">
  <h4>Same mathematics, third appearance</h4>
  <p>Coupled oscillators handed physics to matrices; polarization lived in 2-component complex vectors; now rays do too. This is the recurring lesson of the course: linear systems are matrices in action, and the professional instinct is to ask "what is the vector, what is the matrix?" Quantum mechanics will answer: the state, and the Hamiltonian.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Modern lens-design software still begins with these ABCD matrices before refining with exact ray tracing — and the identical formalism describes electron beams in accelerators and laser beams propagating through cavities.</p>
</div>`,
        },
        {
          id: "instruments-revisited",
          title: "Instruments Revisited, Wave-Aware",
          content: `
<p>With rays understood as a wave limit, the classic instruments deserve a second, sharper look — because every one of them is a compromise between what geometry promises and what diffraction permits.</p>
<p><strong>The magnifier.</strong> A single converging lens lets you bring an object closer than your eye's near point (≈ 25 cm) while still focusing comfortably; angular magnification ≈ 25 cm/f. Geometry says any tiny f magnifies without limit; waves answer that the lens aperture sets a resolution floor, and strong small lenses add aberrations — real magnifiers stop around 10–20×.</p>
<p><strong>The microscope.</strong> Two stages: an objective of very short focal length forms a real, enlarged intermediate image; an eyepiece then magnifies that image further. Total magnification is the product — but magnification is cheap and <em>resolution</em> is the true currency. The last chapter's limit caps detail at roughly λ/2 ≈ 250 nm for visible light, no matter how the stages multiply. Beyond about 1500×, extra magnification enlarges blur, not information — "empty magnification," the microscopist's cardinal sin.</p>
<p><strong>The telescope.</strong> An objective of long focal length f<sub>o</sub> forms an image of a distant object; an eyepiece of short f<sub>e</sub> inspects it. Angular magnification = f<sub>o</sub>/f<sub>e</sub>. But for astronomy the objective's <em>diameter</em> matters twice as much as its focal length: D collects light (brightness ∝ D²) and D sets resolution (θ<sub>min</sub> = 1.22λ/D). Amateur astronomers learn quickly that aperture, not eyepiece power, decides what you can actually see.</p>
<div class="key-concept">
  <h4>Numerical aperture and immersion oil</h4>
  <p>A microscope's resolving power is set by how wide a cone of light its objective can accept, quantified by the numerical aperture NA = n sin α: resolution ≈ λ/(2NA). That factor n is why the best objectives are used with a drop of oil (n ≈ 1.5) bridging lens and slide — the oil shortens the effective wavelength inside the gap and admits steeper rays, buying a factor of 1.5 in detail. A century-old trick, and pure wave physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Van Leeuwenhoek's 17th-century single-lens microscopes — a bead-sized lens held to the eye — resolved bacteria at ~1 μm, outperforming the compound microscopes of his day, whose stacked aberrations multiplied faster than their magnifications. Better physics beat more lenses for a century, until achromatic doublets fixed the aberration problem.</p>
</div>`,
        },
        {
          id: "how-lasers-work",
          title: "How Lasers Work",
          content: `
<p>The course ends with the device where everything converges. Ordinary light sources are chaos: each atom emits its own wave-packet at its own moment, phases uncorrelated — like a stadium crowd all talking at once. A <strong>laser</strong> is the crowd chanting in unison, and three ideas make it possible.</p>
<p><strong>1. Stimulated emission (Einstein, 1917).</strong> Atoms hold discrete energy levels. An excited atom can emit spontaneously, at random — but a passing photon of exactly the transition energy can <em>trigger</em> the emission, and the triggered photon is a perfect clone: same frequency, same direction, same phase, same polarization. Light amplifies light. (LASER: Light Amplification by Stimulated Emission of Radiation.)</p>
<p><strong>2. Population inversion.</strong> The same photon can instead be absorbed by a ground-state atom, and in thermal equilibrium lower levels are always more populated — absorption wins and light dies out. Amplification demands <em>more atoms excited than not</em>: a population inversion, an out-of-equilibrium state that must be actively maintained by <strong>pumping</strong> energy in (a flashlamp, an electric discharge, another laser). Practical lasers pump through a third level that funnels atoms into a long-lived upper level, letting the inversion accumulate.</p>
<p><strong>3. The resonant cavity.</strong> Place the amplifying medium between two mirrors, one ~100% reflective and one leaking a few percent. Photons shuttle back and forth, cloning at every pass — exponential gain — and the leak is the beam. The mirrors form a resonator, and you know its physics: standing waves. Only wavelengths with a node structure fitting the mirror spacing survive, L = mλ/2 — the cavity's <strong>modes</strong> — so the cavity enforces a razor-thin frequency and one direction. The guitar string's boundary-condition mathematics, reborn as the frequency purity of laser light.</p>
<div class="key-concept">
  <h4>What "coherent" buys</h4>
  <p>Because every photon is a clone, the whole beam is one giant wave train: monochromatic (Fourier: long coherent trains → narrow spectra), collimated to nearly the diffraction limit θ ≈ λ/D, and focusable to a spot ~λ across, concentrating power to intensities no lamp can approach. Every interference experiment in this course becomes easy with a laser — fringes at arm's length from a $5 pointer that would have cost Young weeks of care.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Stimulated emission, population inversion, cavity modes, coherence: the laser needed the wave physics of this course plus the quantum physics of the next — atoms with discrete levels. It is the perfect hinge-course capstone: you now hold every classical ingredient, and Phase 5 supplies the atoms. Lasers now read your groceries, carry the internet, correct eyesight, and detected gravitational waves by measuring mirror motions of 10⁻¹⁸ m.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does light appear to travel in straight rays through everyday optical systems, even though it is a wave?",
          options: [
            "Because light's wave nature only appears in laboratory vacuum",
            "Because lenses convert wavefronts into particles",
            "Because when λ is tiny compared with the apertures and lenses involved, diffraction spreading (θ ≈ λ/a) is negligible and wavefronts advance perpendicular to themselves — the paths perpendicular to wavefronts are the rays",
            "Because rays are exact solutions of the wave equation",
          ],
          correctIndex: 2,
          explanation:
            "Rays are the short-wavelength limit of waves: with λ/a essentially zero, each wavefront patch marches forward at the local speed c/n and the perpendicular curves — rays — obey straight-line propagation and Snell's law. Equivalently (Fermat), rays follow the least-time path, where neighboring paths' phasors reinforce instead of canceling. The same limit connects quantum matter waves to classical trajectories.",
        },
        {
          question:
            "In paraxial matrix optics, a ray is described by (y, θ) and a thin lens acts as y′ = y, θ′ = θ − y/f. What does this transformation say physically?",
          options: [
            "The lens shifts every ray toward the axis by the same distance",
            "The lens reverses the direction of rays above the axis",
            "The lens changes ray heights but leaves angles alone",
            "At the lens the ray's height is unchanged, but its angle is bent toward the axis in proportion to how far from the axis it strikes",
          ],
          correctIndex: 3,
          explanation:
            "A thin lens has no thickness for the height to change across, so y′ = y; its whole action is the angle kick −y/f, stronger for rays hitting farther out — which is exactly what brings parallel rays together at the focal point. Chaining elements multiplies their matrices, and two thin lenses in contact multiply to a single lens with 1/f = 1/f₁ + 1/f₂ — why lens powers in diopters simply add.",
        },
        {
          question:
            "A microscope's magnification is increased from 1000× to 2000× by swapping the eyepiece, with the same objective and illumination. What happens to the finest detail visible?",
          options: [
            "Nothing improves — the objective's numerical aperture and the wavelength already fixed the resolution, so the extra magnification only enlarges the blur",
            "Twice-smaller structures become visible",
            "The resolution improves, but only by √2",
            "The image gets sharper but dimmer",
          ],
          correctIndex: 0,
          explanation:
            "Resolution ≈ λ/(2NA) is set by diffraction at the objective, roughly 250 nm at best for visible light. Magnification past the point where that limit is comfortably visible to the eye (~1000–1500×) is 'empty magnification': the blur circles grow along with the image. Real gains require shorter λ or higher NA (e.g. oil immersion) — which is why electron microscopes, with picometer wavelengths, image atoms.",
        },
        {
          question:
            "Why does a laser require a population inversion (more atoms in the upper level than the lower)?",
          options: [
            "Because inverted atoms emit photons with more energy",
            "Because stimulated emission and absorption compete photon for photon; only when excited atoms outnumber ground-state atoms does cloning beat absorption, so light is amplified rather than attenuated",
            "Because the mirrors only reflect light from excited atoms",
            "Because spontaneous emission stops when the inversion is achieved",
          ],
          correctIndex: 1,
          explanation:
            "A resonant photon is equally happy to trigger emission from an excited atom (gaining a clone) or be absorbed by a ground-state atom (dying). Thermal populations always favor the ground state, so ordinary matter absorbs. Pumping maintains the unnatural inversion so gain exceeds loss; the mirror cavity then recycles photons through the gain medium, and its standing-wave boundary conditions select the sharp frequency — the guitar string's mathematics setting the color of the beam.",
        },
        {
          question:
            "Which property of laser light follows most directly from all its photons being stimulated-emission clones sharing one phase?",
          options: [
            "Its ability to travel through vacuum",
            "Its high photon energy compared with lamp light",
            "Its coherence — a single long wave train that is nearly monochromatic and can be focused near the diffraction limit",
            "Its immunity to reflection at glass surfaces",
          ],
          correctIndex: 2,
          explanation:
            "Cloned photons share frequency, direction, phase, and polarization, so the beam behaves as one enormous coherent wave. Fourier logic links the long uninterrupted train to a narrow spectrum, and coherence across the full beam width lets it collimate and focus to ~λ — concentrating power and making interference experiments trivial. Photon energy is set by the atomic transition, not by coherence, and lasers obey the same reflection physics as any light.",
        },
      ],
    },
  ],
};
