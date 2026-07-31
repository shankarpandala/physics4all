export const subject21 = {
  id: "special-relativity",
  number: 21,
  title: "Special Relativity",
  description:
    "A full MIT 8.033-style course in the physics of spacetime (Morin; Taylor & Wheeler) — from the two postulates to four-vectors, relativistic collisions, and the revelation that magnetism is relativity in disguise.",
  phase: 4,
  chapters: [
    {
      id: "postulates-the-lorentz-transformation",
      title: "Postulates & the Lorentz Transformation",
      subtitle:
        "Deriving the Lorentz transformation and learning to read spacetime diagrams",
      sections: [
        {
          id: "two-postulates",
          title: "Two Postulates That Broke the Clockwork",
          content: `
<p>Galileo already knew the principle of relativity: below decks on a smoothly sailing ship, no experiment tells you whether you are moving. Velocities simply add — walk at 5 km/h along a train doing 100 km/h and the ground sees 105 km/h. Newton's mechanics is built on this <strong>Galilean relativity</strong>, and for two centuries it worked flawlessly.</p>
<p>Then Maxwell wrecked it. His equations of electromagnetism (Subject 18) predict that light travels at c = 3.00 × 10⁸ m/s — but relative to <em>what</em>? Every other wave has a medium that defines its speed. Physicists postulated a "luminiferous ether" filling space, and in 1887 Michelson and Morley built an interferometer sensitive enough to detect Earth's motion through it: light racing along Earth's orbital velocity should be measurably faster or slower than light racing across it. The result, repeated in every orientation and every season, was <strong>null</strong>. No ether wind. Light's speed came out the same in every direction, always.</p>
<p>Einstein's 1905 move was not to patch the ether but to promote the embarrassment to a law of nature. Two postulates:</p>
<div class="key-concept">
  <h4>The postulates of special relativity</h4>
  <p><strong>1. The principle of relativity:</strong> the laws of physics — all of them, including electromagnetism — take the same form in every inertial frame. No experiment can detect absolute uniform motion.</p>
  <p><strong>2. The constancy of c:</strong> light in vacuum travels at the same speed c in every inertial frame, regardless of the motion of the source or the observer.</p>
</div>
<p>The second postulate sounds impossible. Chase a light beam at 0.9c and you should see it crawl away at 0.1c — yet the postulate insists you measure the full 3.00 × 10⁸ m/s. Since speed is distance over time, the only escape is that <em>distance and time themselves must depend on the observer</em>. Moving clocks and moving rulers cannot behave the way Newton assumed.</p>
<p>Everything in this subject — time dilation, length contraction, E = mc², magnetism itself — follows from these two sentences by strict logic. Our first task is to extract that logic honestly, starting with the simplest clock imaginable.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein barely mentions Michelson–Morley in his 1905 paper. His stated motivation was an asymmetry of principle: a magnet moving past a coil and a coil moving past a magnet give the same current, yet pre-1905 theory explained the two cases by completely different mechanisms. He found that intolerable.</p>
</div>`,
        },
        {
          id: "light-clock-time-dilation",
          title: "The Light Clock: Time Dilation and γ",
          content: `
<p>Build the world's simplest clock: two mirrors facing each other a distance d apart, with a light pulse bouncing between them. Each round trip is one tick, lasting 2d/c. Now put the clock on a ship moving past you at speed v and watch a tick.</p>
<p>From your frame, the pulse no longer travels straight up and down — the mirrors slide sideways while the light is in flight, so the pulse traces a zigzag of <em>slanted</em> paths. Slanted paths are longer than d. But the second postulate says the light still moves at exactly c for you. Longer path at the same speed means <strong>each tick takes longer</strong>: the moving clock runs slow.</p>
<p>Pythagoras makes it exact. In your frame a half-tick takes time t, during which the light travels ct along the hypotenuse while the clock slides vt sideways: (ct)² = d² + (vt)². Solve for t and compare with the rest-frame half-tick d/c:</p>
<p style="text-align:center; font-size:1.15em;">Δt = γ Δt₀,&nbsp;&nbsp; where&nbsp; γ = 1/√(1 − v²/c²)</p>
<p>Here Δt₀ is the <strong>proper time</strong> — the time between ticks measured in the clock's own rest frame — and γ (gamma) is the factor that runs through all of relativity. Writing β = v/c:</p>
<table>
  <thead>
    <tr><th>β = v/c</th><th>γ</th><th>Effect</th></tr>
  </thead>
  <tbody>
    <tr><td>0.1</td><td>1.005</td><td>0.5% — barely there</td></tr>
    <tr><td>0.6</td><td>1.25</td><td>clocks slow by 20%</td></tr>
    <tr><td>0.8</td><td>1.667</td><td>1 s aboard = 1.67 s outside</td></tr>
    <tr><td>0.99</td><td>7.09</td><td>sevenfold slowdown</td></tr>
    <tr><td>0.999</td><td>22.4</td><td>a year aboard = 22 years outside</td></tr>
  </tbody>
</table>
<p>This is not a defect of light clocks. By postulate 1, <em>any</em> clock riding along — mechanical, atomic, biological — must agree with the light clock, or the discrepancy would reveal absolute motion.</p>
<p><strong>Nature runs the experiment constantly.</strong> Cosmic rays create muons 15 km up, with a lifetime of 2.2 μs. Even at nearly c they should travel only about 660 m before decaying — yet they rain down on sea level. At v = 0.994c, γ = 1/√(1 − 0.988) ≈ 9.1, stretching their lab-frame lifetime to 20 μs: range ≈ 6 km per lifetime, and plenty survive the trip. From the muon's own frame its clock ticks normally — instead, the 15 km of atmosphere is contracted to 15/9.1 ≈ 1.6 km. Two descriptions, one consistent outcome: that reciprocity is the theme of the next sections.</p>`,
        },
        {
          id: "deriving-the-lorentz-transformation",
          title: "Deriving the Lorentz Transformation",
          content: `
<p>Now the centerpiece: the exact dictionary between frames. Let frame S′ move at speed v along the x-axis of frame S, origins coinciding at t = t′ = 0. We want the rule (x, t) → (x′, t′) for any event.</p>
<ol>
  <li><strong>Linearity.</strong> Space and time are homogeneous — no point and no moment is special — so the transformation must be linear. Straight worldlines (free particles) must map to straight worldlines.</li>
  <li><strong>Guess the form.</strong> The origin of S′ sits at x = vt, so x′ = 0 whenever x − vt = 0. Linearity then forces x′ = γ(x − vt) for some factor γ that can depend only on v.</li>
  <li><strong>Use symmetry.</strong> From S′, frame S moves at −v, and postulate 1 says the same physics applies: x = γ(x′ + vt′), with the <em>same</em> γ.</li>
  <li><strong>Fire a light pulse.</strong> Let a flash leave the shared origin at t = t′ = 0. Postulate 2 demands x = ct in S <em>and</em> x′ = ct′ in S′. Substitute both into the two equations: ct′ = γt(c − v) and ct = γt′(c + v). Multiply them: c² = γ²(c² − v²), so γ = 1/√(1 − v²/c²) — the light-clock factor, rediscovered from pure algebra.</li>
  <li><strong>Solve for t′.</strong> Eliminate x′ between the two relations:</li>
</ol>
<div class="key-concept">
  <h4>The Lorentz transformation</h4>
  <p style="text-align:center;">x′ = γ(x − vt)&nbsp;&nbsp;&nbsp;&nbsp;t′ = γ(t − vx/c²)&nbsp;&nbsp;&nbsp;&nbsp;y′ = y,&nbsp; z′ = z</p>
  <p>The term −vx/c² in the time equation is the revolution: clocks at different <em>places</em> disagree between frames. Simultaneity is relative.</p>
</div>
<p>Sanity checks. Let c → ∞ and you recover Galileo: x′ = x − vt, t′ = t. Newton is the low-speed limit, which is why he was right for 200 years. And <strong>length contraction</strong> falls out at once: a rod of rest length L₀ in S′ has its ends measured <em>simultaneously</em> in S (Δt = 0), and the first equation gives Δx′ = γΔx, so L₀ = γL, i.e. L = L₀/γ. A moving metre stick is short; a moving clock is slow; and both effects are reciprocal — each frame says it about the other, with no contradiction once relative simultaneity is taken seriously.</p>
<p>Notice what we did <em>not</em> assume: nothing about light's inner workings, no ether, no mechanism. Two symmetry postulates plus algebra dictate the geometry of spacetime itself.</p>`,
        },
        {
          id: "spacetime-diagrams",
          title: "Spacetime Diagrams: Seeing Relativity",
          content: `
<p>Formulas can mislead; pictures rarely do. A <strong>spacetime diagram</strong> plots position x horizontally and time — scaled as ct so both axes carry metres — vertically. Every event is a point; every object traces a <strong>worldline</strong> upward through the diagram as time passes.</p>
<ul>
  <li>An object at rest: a vertical worldline.</li>
  <li>Steady motion: a straight line tilted from vertical — the faster, the more tilted.</li>
  <li>Light: slope exactly 45°, by our choice of scaling. Nothing material may tilt further from vertical than that.</li>
</ul>
<p>The 45° lines through any event form its <strong>light cone</strong>: the future cone holds every event it can influence, the past cone every event that can have influenced it. Causality drawn as geometry.</p>
<p>Now the payoff: draw a second observer moving at speed v. Her time axis (ct′) is her own worldline, tilted by the slope β = v/c from vertical. Where is her x′-axis? It is the set of events she calls "t′ = 0" — and the Lorentz transformation (set t′ = 0, so t = vx/c²) says it tilts <em>up</em> from horizontal by the same angle β. The two axes <strong>scissor symmetrically toward the light line</strong>, which sits at 45° for everyone — postulate 2 as a picture.</p>
<div class="key-concept">
  <h4>Lines of simultaneity</h4>
  <p>Every line parallel to an observer's x-axis is a set of events that observer calls simultaneous. Because moving observers have <em>tilted</em> x′-axes, they slice spacetime into different "nows". Nearly every paradox in Chapter 2 dissolves the moment you draw the two families of slices and see that "at the same time" names different event-sets in different frames.</p>
</div>
<p>Read time dilation off the diagram: a moving clock's ticks are equally spaced dots along its tilted worldline, and the horizontal slices of the rest frame cut those dots more than one time-unit apart. Read the relativity of simultaneity: two events on one horizontal line lie on <em>different</em> tilted lines, so the moving observer assigns them different times.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Hermann Minkowski, Einstein's former mathematics professor, introduced these diagrams in 1908, declaring that "space by itself, and time by itself, are doomed to fade away into mere shadows." Einstein initially dismissed the geometric reformulation as "superfluous learnedness" — then discovered he could not build general relativity without it.</p>
</div>`,
        },
        {
          id: "the-invariant-interval",
          title: "The Invariant Interval",
          content: `
<p>With space and time both observer-dependent, is anything left that everyone agrees on? Yes — and it is the most important quantity in this subject. For any two events separated by Δt and Δx, compute:</p>
<p style="text-align:center; font-size:1.15em;"><strong>(Δs)² = (cΔt)² − (Δx)²</strong></p>
<p>Push this through the Lorentz transformation and the cross terms cancel identically: (cΔt′)² − (Δx′)² = (cΔt)² − (Δx)². Every inertial observer, whatever their speed, computes the <strong>same interval</strong>. It plays the role Pythagorean distance plays in ordinary geometry — except for that minus sign, which is the entire difference between space and spacetime.</p>
<p>The sign of (Δs)² sorts all event pairs into three causal classes:</p>
<table>
  <thead>
    <tr><th>(Δs)²</th><th>Name</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td>&gt; 0</td><td><strong>timelike</strong></td><td>A clock can travel from one event to the other; time order is absolute; causation possible</td></tr>
    <tr><td>= 0</td><td><strong>lightlike</strong></td><td>Only light connects them — they lie on each other's light cones</td></tr>
    <tr><td>&lt; 0</td><td><strong>spacelike</strong></td><td>Too far apart in space for any signal; different frames disagree on which happened first; no causation</td></tr>
  </tbody>
</table>
<p>For timelike pairs the interval has a beautiful meaning: Δs/c is the <strong>proper time</strong> — exactly what a clock carried between the two events reads. In the clock's own frame Δx = 0, so (Δs)² = (cΔτ)²; invariance then hands every other observer the answer for free.</p>
<p><strong>Worked example.</strong> A ship leaves Earth and reaches a star 4 light-years away, 5 years later (Earth frame) — that is v = 0.8c. How much do the travellers age? Skip γ-juggling and reason with the interval: (Δs/c)² = (5 yr)² − (4 yr)² = 9, so Δτ = <strong>3 years</strong>. One line, no transformation, and it agrees with 5/γ = 5/1.667 = 3.</p>
<div class="key-concept">
  <h4>The organizing principle</h4>
  <p>When a relativity problem looks tangled, do not grab formulas — hunt for the invariant. Compute (cΔt)² − (Δx)² in whichever frame makes it trivial, then carry the answer to any frame you like. This habit, applied to momentum and energy in Chapter 3, will crack particle-collision problems that brute force cannot touch.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The Michelson–Morley experiment, repeated across seasons and orientations, found that the speed of light was the same in every direction. Within special relativity, this result is:",
          options: [
            "explained by the ether being dragged along with the Earth",
            "an unexplained coincidence that relativity works around",
            "exactly what the second postulate asserts as a law of nature — there is no ether frame to detect",
            "evidence that the interferometer arms stretched in the direction of motion",
          ],
          correctIndex: 2,
          explanation:
            "Einstein promoted the null result to a postulate: light in vacuum moves at c in every inertial frame, full stop. No medium defines a preferred frame, so there is no 'ether wind' to find. (Lorentz did try the arm-contraction patch — ironically the contraction is real, but as a consequence of spacetime geometry, not a property of ether-dragged matter.)",
        },
        {
          question:
            "A starship cruises at 0.8c on a journey that takes 30 years as measured on Earth. How much do the astronauts age?",
          options: ["30 years", "18 years", "50 years", "24 years"],
          correctIndex: 1,
          explanation:
            "At β = 0.8, γ = 1/√(1 − 0.64) = 1/0.6 = 5/3. Proper time aboard is the Earth time divided by γ: 30 × 3/5 = 18 years. Check with the interval: Earth-frame distance is 0.8 × 30 = 24 ly, so (Δτ)² = 30² − 24² = 900 − 576 = 324, giving Δτ = 18 years — same answer, no formula-grabbing.",
        },
        {
          question:
            "In the light-clock derivation of time dilation, which postulate does the crucial work?",
          options: [
            "Light travels at c in the observer's frame even though the clock is moving, so the longer zigzag path takes more time",
            "Moving mirrors reflect light at a reduced speed",
            "The light pulse gains energy from the clock's motion",
            "Time is absolute, but the mirrors move apart as the clock travels",
          ],
          correctIndex: 0,
          explanation:
            "Seen from the ground, the pulse travels a slanted, longer path between the sliding mirrors. Galilean physics would let the light speed up to compensate; postulate 2 forbids that — the speed is c for the ground observer too. Longer path at fixed speed means a longer tick: Δt = γΔt₀. Postulate 1 then extends the verdict to all clocks, or comparing them would reveal absolute motion.",
        },
        {
          question:
            "Two events are separated by Δx = 5 light-years and Δt = 3 years in some frame. What can be said about them?",
          options: [
            "One caused the other, since the interval is invariant",
            "They are timelike separated, and every observer agrees on their time order",
            "They are lightlike separated — only a photon connects them",
            "They are spacelike separated: no signal can link them, and observers in different frames disagree about which happened first",
          ],
          correctIndex: 3,
          explanation:
            "(Δs)² = (cΔt)² − (Δx)² = 3² − 5² = −16 < 0 in (light-year)² units: spacelike. Connecting them would require faster-than-light travel, so neither can cause the other — which is fortunate, because Lorentz-transforming to other frames flips their time order, and physics cannot allow an effect to precede its cause in someone's frame.",
        },
        {
          question:
            "On a spacetime diagram drawn in your rest frame, a friend flies by at speed v. How do her ct′- and x′-axes appear?",
          options: [
            "Both rotate rigidly by the same angle, like a rotated sheet of graph paper",
            "Her ct′-axis tilts but her x′-axis stays horizontal, since space is unaffected",
            "They scissor symmetrically toward the 45° light line — the ct′-axis tilts from vertical and the x′-axis tilts up from horizontal by the same angle",
            "They swap places when v exceeds c/2",
          ],
          correctIndex: 2,
          explanation:
            "Her time axis is her worldline (tilted by slope β from vertical); her x′-axis is her set of 't′ = 0' events, which the Lorentz transformation tilts up by the same slope β. The symmetric scissoring keeps the light line at 45° exactly midway between her axes — the diagram's way of saying she, too, measures light at c. A rigid rotation would tilt the light line and violate postulate 2.",
        },
      ],
    },
    {
      id: "relativistic-kinematics",
      title: "Relativistic Kinematics",
      subtitle:
        "Velocity addition, the relativistic Doppler effect, and the classic paradoxes laid to rest",
      sections: [
        {
          id: "relativity-of-simultaneity",
          title: "Simultaneity: The Master Key",
          content: `
<p>Before touching any paradox, arm yourself with the one idea that unlocks them all. Look again at the time part of the Lorentz transformation: t′ = γ(t − vx/c²). The term <strong>vx/c²</strong> says that whether an event is "now" depends on <em>where it is</em>. Two events simultaneous in one frame (same t, different x) are <em>not</em> simultaneous in another.</p>
<p>Einstein's train makes it concrete. Lightning strikes both ends of a moving train, and the flashes reach an observer on the platform — standing midway between the scorch marks — at the same moment: in the platform frame the strikes were simultaneous. But a passenger at the train's midpoint is riding <em>toward</em> the front flash and away from the rear one, so the front flash reaches her first. Light travels at c in <em>her</em> frame too, and both strikes happened equidistant from her — so she is forced to conclude the front strike <strong>happened earlier</strong>. Neither observer is wrong. Simultaneity is not a fact about the world; it is a frame-dependent bookkeeping convention.</p>
<div class="key-concept">
  <h4>The rear clock leads</h4>
  <p>Take two clocks synchronized in their own rest frame, mounted a rest-distance L apart on a train moving at v. In the ground frame they are <em>not</em> synchronized: the rear clock reads ahead of the front clock by <strong>Lv/c²</strong>. Memorize this "rear clock leads" rule — it is quantitative, it falls straight out of t′ = γ(t − vx/c²), and it is the missing ingredient in every famous paradox.</p>
</div>
<p><strong>Worked check.</strong> A train of rest length 300 m moves at 0.6c. Its rear clock leads its front clock, as judged from the ground, by Lv/c² = (300 × 0.6c)/c² = 180/c ≈ 0.6 μs — small numbers for a train, but decisive when the "train" is a 4-light-year journey.</p>
<p>This also protects causality. Only <em>spacelike</em>-separated events — pairs no signal can connect — ever have their time order flipped between frames. For timelike pairs, where causation is possible, every observer agrees on the order. Relativity reshuffles only the "nows" that could never matter causally.</p>
<p>Keep Lv/c² loaded. The twins and the pole-in-the-barn are waiting, and both are, at heart, nothing but this section wearing a costume.</p>`,
        },
        {
          id: "velocity-addition",
          title: "Velocity Addition: Why c Is Unreachable",
          content: `
<p>A ship recedes from Earth at 0.8c and fires a probe forward at 0.8c relative to itself. Galileo says Earth sees 1.6c. Relativity must say otherwise — and the Lorentz transformation tells us exactly what. Take an object moving at u′ in frame S′, which itself moves at v relative to S. Write u = Δx/Δt, substitute the transformation for Δx and Δt, divide, and the γ's cancel:</p>
<p style="text-align:center; font-size:1.15em;"><strong>u = (u′ + v) / (1 + u′v/c²)</strong></p>
<p>The numerator is Galileo; the denominator is the correction that keeps the universe consistent. For everyday speeds u′v/c² is fantastically small — two cars at 100 km/h have a correction of about 10⁻¹⁴ — and Galileo survives. Near c, the denominator bites:</p>
<ul>
  <li><strong>Ship + probe:</strong> u = (0.8c + 0.8c)/(1 + 0.64) = 1.6c/1.64 ≈ <strong>0.976c</strong>. Fast, but under c.</li>
  <li><strong>0.6c + 0.8c:</strong> u = 1.4c/1.48 ≈ 0.946c.</li>
  <li><strong>Light itself:</strong> set u′ = c: u = (c + v)/(1 + v/c) = c, <em>whatever v is</em>. The formula has postulate 2 built into its bones — light fired from any platform still travels at exactly c.</li>
</ul>
<p>No stacking of boosts ever crosses c: adding speeds below c always lands below c. The speed of light is not a wall you hit but an asymptote you approach.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The formula was confirmed 46 years before Einstein derived it. In 1851 Fizeau measured light's speed through flowing water and found the flow dragged the light — but only partially: u ≈ c/n + v(1 − 1/n²), a result that baffled ether theorists. Expand the relativistic formula for u′ = c/n to first order in v and Fizeau's "drag coefficient" (1 − 1/n²) drops out automatically. Einstein called this experiment one of his key inspirations.</p>
</div>
<p><strong>A useful companion.</strong> For velocity components <em>perpendicular</em> to the frame motion, the denominator appears too (with a γ): transverse velocities are also altered, because the frames disagree about time. That cross-talk between directions is why naive vector addition fails — and it will matter when we tilt telescopes (aberration) and, in Chapter 4, when we chase charges past wires.</p>`,
        },
        {
          id: "relativistic-doppler",
          title: "The Relativistic Doppler Effect",
          content: `
<p>A wave source moving away from you delivers its crests at a stretched spacing — the classical Doppler effect of Subject 15. Relativity adds a second ingredient: the moving source's clock ticks slowly, so it <em>emits</em> crests at a dilated rate before geometry stretches them further. Combine the two for a source receding at β = v/c. Classical stretching multiplies the period by (1 + β); time dilation multiplies it by another γ. The received frequency is f = f₀/[γ(1 + β)], and a line of algebra turns this into the memorable form:</p>
<p style="text-align:center; font-size:1.15em;"><strong>f<sub>obs</sub> = f<sub>source</sub> √((1 − β)/(1 + β))</strong>&nbsp;&nbsp;(receding; swap signs for approach)</p>
<p><strong>Worked examples.</strong></p>
<ul>
  <li><strong>Recession at 0.6c:</strong> f<sub>obs</sub> = f√(0.4/1.6) = f√0.25 = <strong>f/2</strong>. Every frequency halves; every wavelength doubles. A green laser (550 nm) arrives at 1100 nm, in the infrared.</li>
  <li><strong>Approach at 0.8c:</strong> f<sub>obs</sub> = f√(1.8/0.2) = f√9 = <strong>3f</strong>. That same green laser arrives at 183 nm — deep ultraviolet.</li>
</ul>
<p>Astronomers quote the shift as z, defined by 1 + z = λ<sub>obs</sub>/λ<sub>source</sub>, and use it daily: atomic spectral lines are barcodes with known rest wavelengths, so a measured shift reads off the line-of-sight velocity of a star or galaxy directly. Binary stars, exoplanet wobbles, galactic rotation curves, and the expansion of the universe are all Doppler measurements.</p>
<div class="key-concept">
  <h4>The transverse Doppler effect — relativity's fingerprint</h4>
  <p>Classically, a source moving <em>across</em> your line of sight at closest approach shows no shift at all. Relativistically it does: you receive f₀/γ, a pure redshift caused by time dilation alone, with no geometric stretching to hide behind. Ives and Stilwell measured this in 1938 with fast hydrogen ions — the first direct laboratory confirmation that moving clocks run slow.</p>
</div>
<p>One caution: the Doppler formula describes what you <em>see</em> (light arrival rates), while time dilation describes what <em>is</em> (coordinate clock rates). A twin watching her sister's ship through a telescope sees her sister's clock via Doppler — slowed on the way out, sped up on the way back. Keeping "see" and "is" separate is half the work of the next section.</p>`,
        },
        {
          id: "twin-paradox",
          title: "The Twin Paradox, Resolved",
          content: `
<p>Stella boards a ship and travels at 0.8c (γ = 5/3) to a star 4 light-years away, turns around, and comes home. Earth frame: each leg takes 5 years, so her twin Terra ages <strong>10 years</strong>. Stella's clock runs slow by γ, so she ages 10 × 3/5 = <strong>6 years</strong>. The interval agrees: per leg, (Δτ)² = 5² − 4² = 9, so 3 years each way.</p>
<p>The "paradox": doesn't Stella see <em>Terra's</em> clock running slow, by perfect symmetry? Shouldn't each twin be younger than the other?</p>
<p><strong>The asymmetry is real.</strong> Terra occupies one inertial frame throughout. Stella does not — she occupies an outbound frame, then fires engines and occupies a different inbound frame. She feels the turnaround in her bones. The situations are physically distinguishable, so no symmetry argument applies.</p>
<p>But locating the asymmetry is not yet an accounting. Here is Stella's own ledger, and it balances only because of the rear-clock-leads rule:</p>
<ol>
  <li><strong>Outbound (3 years of Stella's time):</strong> in her frame Terra's clock runs slow: Terra ages 3/γ = 1.8 years.</li>
  <li><strong>Turnaround:</strong> Stella swaps her outbound "now"-slices for inbound ones. Her line of simultaneity sweeps across 8 light-years of spacetime, and the Earth-time it labels "now" jumps forward by 2Lv/c² = 2 × 4 × 0.8 = <strong>6.4 years</strong>. No one on Earth feels a jump — Stella has merely changed which distant events she calls simultaneous.</li>
  <li><strong>Inbound (3 more years):</strong> Terra again ages 1.8 years by Stella's reckoning.</li>
</ol>
<p>Total: 1.8 + 6.4 + 1.8 = <strong>10 years</strong>. Both twins agree Terra is 4 years older, each with an internally consistent story.</p>
<div class="key-concept">
  <h4>The deepest view: proper time is path length</h4>
  <p>On a spacetime diagram Terra's worldline is straight; Stella's is bent. Proper time is the "length" of a worldline computed with the interval — and thanks to the minus sign in (cΔt)² − (Δx)², the straight path between two events is the <em>longest</em> in elapsed time, not the shortest. The twin paradox is just the triangle inequality of spacetime geometry, running in reverse.</p>
</div>
<p>What each twin <em>sees</em> through a telescope is Doppler, and it balances too. At 0.8c the Doppler factors are 3 (approach) and 1/3 (recession). Stella watches Terra at 1/3 rate for her 3 outbound years (seeing 1 Earth-year) and at triple rate for her 3 inbound years (seeing 9 more): 10 years total. Terra, though, keeps receiving redshifted signals until light from the turnaround reaches her at year 5 + 4 = 9 — so she watches Stella at 1/3 rate for 9 years (seeing 3 ship-years) and at triple rate for just 1 year (3 more): 6 years total. Each twin's telescope view is consistent with the aging both agree on; the asymmetry in <em>when</em> the redshift flips to blueshift is the visible face of who turned around. Seeing is Doppler; being is the interval.</p>`,
        },
        {
          id: "pole-in-barn",
          title: "The Pole in the Barn",
          content: `
<p>A runner carries a 20 m pole toward a 10 m barn at v = 0.866c, so γ = 2. Barn frame: the pole is contracted to 20/γ = 10 m — it <em>exactly fits</em>, and for one instant both doors can be shut with the pole entirely inside. Runner's frame: the pole is its full 20 m and the <em>barn</em> is contracted to 5 m — the pole never fits, not even close. Who is right?</p>
<p><strong>Both.</strong> The trap is the innocent phrase "both doors shut <em>at the same time</em>." Door-closings are two events at different places, and Chapter 2's master key applies: simultaneous in one frame means non-simultaneous in another.</p>
<ul>
  <li><strong>Barn frame:</strong> front door closes behind the pole's tail at the same instant the far door opens ahead of its tip. Fits, momentarily.</li>
  <li><strong>Runner's frame:</strong> the same two events occur in sequence. The far door opens <em>early</em> — before the pole's tip arrives — and the front door closes <em>late</em> — after the tail has entered, by which time the tip is already sticking out the far side. At no instant is the pole enclosed, and yet every door-event happens exactly as the barn frame says it does, just at different times.</li>
</ul>
<p>Check with the rear-clock-leads number: the door events are separated by L = 10 m in the barn frame, so the runner's frame disagrees about their timing by γLv/c² — precisely enough to let a 20 m pole thread a 5 m barn one end at a time. There is no contradiction because "the pole is entirely inside" is not a frame-independent statement: it asserts the simultaneous positions of two ends, and simultaneity is the very thing frames disagree about.</p>
<div class="key-concept">
  <h4>The rigid-body trap</h4>
  <p>Now slam both doors and try to <em>trap</em> the pole. The pole must stop — but "the pole stops" cannot happen all at once in every frame, and no signal, including the mechanical shock of the front hitting the door, travels faster than c. The front stops while the rear, not yet informed, keeps moving: the pole genuinely compresses, whatever it is made of. Perfectly rigid objects are impossible in relativity — rigidity would be an infinite-speed signal in disguise.</p>
</div>
<p>Notice the method, because it is universal: translate the paradox's punchline into statements about <em>events</em>, ask which claims secretly assume absolute simultaneity, and apply Lv/c². Every classic "contradiction" in special relativity — poles, trains, spaceships on threads — surrenders to this one procedure.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A ship moving away from Earth at 0.5c launches a missile forward at 0.5c relative to the ship. How fast does Earth measure the missile?",
          options: ["c", "0.8c", "0.75c", "0.9c"],
          correctIndex: 1,
          explanation:
            "Relativistic addition: u = (0.5c + 0.5c)/(1 + 0.25) = c/1.25 = 0.8c. The Galilean answer c is exactly what the denominator exists to prevent: combining any two sub-light speeds always lands below c. Only if one ingredient is light itself does the formula return c — for any platform speed.",
        },
        {
          question:
            "A galaxy recedes from us at 0.6c. Light emitted at frequency f arrives at:",
          options: ["f/4", "2f", "0.8f", "f/2"],
          correctIndex: 3,
          explanation:
            "For recession, f_obs = f√((1 − β)/(1 + β)) = f√(0.4/1.6) = f√(1/4) = f/2. Two effects stack: crests are emitted at a time-dilated rate and stretched further by the growing distance. Astronomers run this backwards every night — measuring shifted spectral lines to read off velocities of stars and galaxies.",
        },
        {
          question:
            "In the twin paradox, the travelling twin returns genuinely younger. What breaks the apparent symmetry between the twins?",
          options: [
            "The traveller changes inertial frames at turnaround, while the stay-at-home twin occupies a single inertial frame throughout — her bent worldline accumulates less proper time",
            "The traveller's high speed physically slows her biology while the Earth twin's biology runs normally",
            "The Earth's gravity speeds up the stay-at-home twin's clock",
            "The paradox is unresolved: each twin is younger in her own frame",
          ],
          correctIndex: 0,
          explanation:
            "Time dilation is symmetric only between two inertial frames. The traveller is not inertial — she feels the turnaround. On a spacetime diagram her worldline is bent, and the interval's minus sign makes the straight worldline the one of maximal proper time. Her own ledger balances via simultaneity: at turnaround her 'now' on Earth leaps forward by 2Lv/c², exactly covering the missing years.",
        },
        {
          question:
            "In the pole-in-the-barn scenario, the barn frame says the contracted pole fits with both doors briefly shut; the runner says the pole never fits. The resolution is:",
          options: [
            "The runner is wrong: length contraction is an illusion of perspective",
            "The pole physically shrinks in one frame but not the other, so one description must fail",
            "Both are right: 'both doors shut with the pole inside' asserts two spatially separated events are simultaneous, and frames legitimately disagree about that",
            "The barn is wrong: contraction applies only to the moving object, never the barn",
          ],
          correctIndex: 2,
          explanation:
            "The door-closings are distinct events at different places. In the barn frame they are simultaneous; Lorentz-transform to the runner's frame and the exit door opens before the entrance door closes, letting the 20 m pole thread the 5 m barn one end at a time. Every event happens in both accounts — only the time-labels differ. 'Contained' is not a frame-independent property.",
        },
        {
          question:
            "Two clocks are synchronized in the rest frame of a train and mounted at its front and rear, a rest length L apart. As judged from the ground, while the train moves at v:",
          options: [
            "both clocks read the same, since they were properly synchronized",
            "the front clock leads the rear clock by Lv/c²",
            "the rear clock leads the front clock by Lv/c²",
            "each clock alternately leads the other as the train passes",
          ],
          correctIndex: 2,
          explanation:
            "The Lorentz time equation t′ = γ(t − vx/c²) makes synchronization position-dependent between frames: the chasing (rear) clock reads ahead by Lv/c². This 'rear clock leads' rule is the quantitative heart of the twin ledger (the 2Lv/c² turnaround jump) and the pole-in-barn door timings — the single number behind every classic paradox.",
        },
      ],
    },
    {
      id: "four-vectors-dynamics",
      title: "Four-Vectors & Dynamics",
      subtitle:
        "4-momentum, E² = (pc)² + (mc²)², and the physics of particle collisions",
      sections: [
        {
          id: "proper-time-four-vectors",
          title: "Four-Vectors: Building with Invariants",
          content: `
<p>Newtonian dynamics runs on 3-vectors: quantities whose components mix predictably under rotations, so that laws written with them look the same from any angle. Special relativity demands more — laws that keep their form under Lorentz transformations, which mix space with <em>time</em>. The natural objects are <strong>four-vectors</strong>: packages of one time-component and three space-components that transform, all together, exactly as (ct, x, y, z) does.</p>
<p>The prototype is the <strong>4-displacement</strong> Δx = (cΔt, Δx, Δy, Δz) between two events. Its "squared length," computed with the spacetime minus sign — (cΔt)² − (Δx² + Δy² + Δz²) — is the invariant interval of Chapter 1: every frame computes the same value. That is the defining superpower of any four-vector: <strong>its norm is frame-independent</strong>.</p>
<p>To build a velocity, do not divide by Δt — coordinate time is frame-dependent, and dividing a four-vector by it wrecks the transformation property. Divide instead by the <strong>proper time</strong> Δτ, the invariant wristwatch-time of the moving object. Since Δt = γΔτ, the <strong>4-velocity</strong> is:</p>
<p style="text-align:center;">u = (γc, γv<sub>x</sub>, γv<sub>y</sub>, γv<sub>z</sub>)</p>
<p>Its norm works out to c² identically — every object traverses spacetime at the same "speed," trading motion through time for motion through space. An object at rest moves purely through time (γ = 1); a photon tips entirely toward space.</p>
<div class="key-concept">
  <h4>The recipe</h4>
  <p>Multiply the 4-velocity by the invariant mass m and you get the <strong>4-momentum</strong>: p = (γmc, γmv). Because m and Δτ are invariants, p inherits perfect Lorentz behaviour. If all four of its components are conserved in one frame, the transformation guarantees they are conserved in <em>every</em> frame — exactly the property a relativistic conservation law needs, and the property patched-up 3-vector momentum lacks.</p>
</div>
<p>What do the components mean? The spatial part γmv is the relativistic momentum — reducing to mv at low speed, but growing without bound as v → c, which is why no push ever gets a mass to light speed. The time component γmc is, at first sight, mysterious. Expand it for small β: γmc² ≈ mc² + ½mv² + … — a constant plus the <em>kinetic energy</em>. The time component of 4-momentum is energy divided by c, and that identification is about to reorganize all of dynamics.</p>`,
        },
        {
          id: "energy-momentum-relation",
          title: "E² = (pc)² + (mc²)²: The Master Relation",
          content: `
<p>Name the components of 4-momentum honestly: p = (E/c, <strong>p</strong>), with</p>
<p style="text-align:center; font-size:1.1em;"><strong>E = γmc²</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>p</strong> = γm<strong>v</strong></p>
<p>Now compute the invariant norm, the move that Chapter 1 trained: (E/c)² − p² is the same in every frame, so evaluate it in the particle's rest frame, where p = 0 and E = mc². The result is the most useful single equation in particle physics:</p>
<div class="key-concept">
  <h4>The energy–momentum relation</h4>
  <p style="text-align:center; font-size:1.2em;"><strong>E² = (pc)² + (mc²)²</strong></p>
  <p>Energy, momentum, and mass form a Pythagorean triangle: mc² is the invariant "length," the same for all observers, while E and pc are frame-dependent "components." Mass is not stuff — it is the norm of the 4-momentum.</p>
</div>
<p>Three regimes fall out immediately:</p>
<ul>
  <li><strong>At rest (p = 0):</strong> E = mc². Rest energy — every kilogram banks 9 × 10¹⁶ J.</li>
  <li><strong>Slow (pc ≪ mc²):</strong> expand the square root: E ≈ mc² + p²/2m. Newton's kinetic energy is the first correction to the rest energy.</li>
  <li><strong>Massless (m = 0):</strong> E = pc exactly. Photons carry momentum p = E/c despite having no mass — the physics behind radiation pressure, solar sails, and laser cooling. And with m = 0, the relation forces |v| = c always: a massless particle cannot slow down.</li>
</ul>
<p><strong>Worked example.</strong> An electron (mc² = 0.511 MeV) is accelerated until its momentum is p = 1.000 MeV/c. Its energy is E = √(1.000² + 0.511²) = √1.261 = 1.123 MeV, of which 0.612 MeV is kinetic. Its speed: v/c = pc/E = 1.000/1.123 = 0.890. Notice the workflow — no velocity until the very last step. In relativistic dynamics E and p are the natural variables; v is an afterthought.</p>
<p><strong>Units discipline.</strong> Particle physicists quote masses in MeV/c² and momenta in MeV/c precisely so this relation becomes plain Pythagoras: E² = p² + m² with every quantity in MeV. Adopt the habit; it strips the c's out of every calculation in the rest of this chapter.</p>`,
        },
        {
          id: "mass-energy",
          title: "Mass–Energy: The Exchange Rate of the Universe",
          content: `
<p>E = mc² is often read as "mass can convert to energy," but the deeper statement is an identity: <strong>the energy content of a system at rest <em>is</em> its mass</strong> (times c²). Heat a brick and it gets heavier — by ΔE/c², about 10⁻¹⁴ kg for a red-hot kilogram, unmeasurably small only because c² = 9 × 10¹⁶ J/kg is such an extravagant exchange rate.</p>
<p>Where the energies are nuclear, the ledger becomes visible:</p>
<ul>
  <li><strong>Binding energy.</strong> A helium-4 nucleus has 0.7% <em>less</em> mass than its two protons and two neutrons weighed separately — the mass of the binding energy that departed when they fused. Every stable nucleus sits in such a mass deficit; the curve of binding energy per nucleon, peaking at iron, is the business plan of both fusion and fission.</li>
  <li><strong>Fission:</strong> a uranium-235 nucleus splitting converts about 0.09% of its mass to energy — 200 MeV per fission, a millionfold beyond chemistry's electron-volts.</li>
  <li><strong>The Sun</strong> radiates 3.8 × 10²⁶ W, and E = mc² prices that at <strong>4.2 billion kilograms per second</strong> of lost mass. Fusing hydrogen to helium at 0.7% efficiency, the Sun has burned less than 0.1% of its mass in 4.6 billion years.</li>
  <li><strong>Annihilation and creation:</strong> an electron and positron vanish into two 0.511 MeV photons (the signal PET scanners image), and photon energy above threshold conjures matter — the subject of the next section.</li>
</ul>
<div class="key-concept">
  <h4>Mass is not additive</h4>
  <p>The mass of a system is the norm of its <em>total</em> 4-momentum — not the sum of its parts' masses. Two 1 MeV photons flying in opposite directions: total E = 2 MeV, total p = 0, so the <em>system</em> has mass 2 MeV/c², though each photon is massless. A box of hot gas outweighs the same box cold; a compressed spring outweighs a relaxed one. Over 98% of the proton's own mass is not quark rest mass but confined field energy — your weight is mostly E/c².</p>
</div>
<p>One caution about language. Older books speak of "relativistic mass" γm growing with speed. Modern practice — and this course — reserves the word <em>mass</em> for the invariant m, the frame-independent norm. Energy grows with speed; mass does not. The habit keeps the master relation clean and prevents the classic error of stuffing γm into Newtonian formulas where it does not belong.</p>`,
        },
        {
          id: "collisions-thresholds",
          title: "Collisions: Invariant Mass and Threshold Energies",
          content: `
<p>Relativistic collisions obey one rule: <strong>total 4-momentum is conserved</strong> — energy and all three momentum components, together. The professional technique adds one move: <em>square</em> the total 4-momentum. Its norm, s = E<sub>tot</sub>² − (p<sub>tot</sub>c)², is invariant, so you may evaluate it in whichever frame is easiest and carry the number anywhere. Almost every collider calculation is this trick, applied with intent.</p>
<p><strong>Worked example — making antimatter.</strong> To create antiprotons, fire protons at a hydrogen target: p + p → p + p + p + p̄ (a p̄ must come with an extra p to conserve baryon number). Naively the projectile needs kinetic energy 2m<sub>p</sub>c² ≈ 1.9 GeV to pay for the new pair. Wrong — the products must also carry the beam's momentum, so they cannot be created at rest in the lab. Use the invariant:</p>
<ol>
  <li><strong>Threshold condition:</strong> the products barely materialize, moving together as one lump — at rest in the center-of-momentum frame. There, s = (4m<sub>p</sub>c²)².</li>
  <li><strong>Lab frame:</strong> s = (E + m<sub>p</sub>c²)² − (pc)², with E, p the projectile's. Expand using E² − (pc)² = (m<sub>p</sub>c²)²: s = 2m<sub>p</sub>c²E + 2(m<sub>p</sub>c²)².</li>
  <li><strong>Equate:</strong> 16(m<sub>p</sub>c²)² = 2m<sub>p</sub>c²E + 2(m<sub>p</sub>c²)² → E = 7m<sub>p</sub>c², i.e. kinetic energy <strong>6m<sub>p</sub>c² ≈ 5.6 GeV</strong> — three times the naive answer; two-thirds of the beam energy is wasted hauling the products forward.</li>
</ol>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Berkeley's Bevatron was designed in 1954 for 6.2 GeV — precisely this threshold plus margin, a machine specified by the calculation above. The antiproton duly appeared in 1955 and earned the 1959 Nobel Prize.</p>
</div>
<p>The waste explains modern <strong>colliders</strong>: slam two beams head-on and p<sub>tot</sub> = 0, so <em>every</em> joule feeds s. Two 7 TeV protons give √s = 14 TeV; reaching that with a fixed target would take a beam of about 10⁸ GeV.</p>
<p>The same squaring trick runs in reverse as <strong>invariant mass</strong>: reconstruct E and p of a particle's decay products, compute √(E² − (pc)²), and the parent's mass emerges regardless of how it was moving. Every particle "discovery plot" — J/ψ, W, Z, the Higgs bump at 125 GeV — is a histogram of this invariant with a peak at the new particle's mass. Chapter 1's lesson, industrialized: compute the invariant, then argue.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A photon has energy E. What is its momentum, and why?",
          options: [
            "Zero, because the photon has no mass",
            "E/c², from p = mv with the relativistic mass",
            "E/c, because with m = 0 the relation E² = (pc)² + (mc²)² reduces to E = pc",
            "It depends on the photon's speed in the medium",
          ],
          correctIndex: 2,
          explanation:
            "Set m = 0 in the master relation and E = pc exactly: massless particles carry momentum in direct proportion to their energy. This is no technicality — photon momentum produces radiation pressure, pushes solar sails, lets comet tails point away from the Sun, and allows laser light to cool atoms to microkelvins. 'No mass' never means 'no momentum' in relativity.",
        },
        {
          question:
            "Creating an antiproton via p + p → p + p + p + p̄ requires a beam kinetic energy of about 6mc² ≈ 5.6 GeV on a fixed target — three times the 2mc² rest energy of the new pair. Why the surcharge?",
          options: [
            "The strong force absorbs the remaining energy",
            "Momentum conservation forces the products to keep moving forward, so much of the beam energy must remain kinetic instead of becoming new mass",
            "Antiprotons weigh three times as much as protons",
            "The uncertainty principle requires extra energy for particle creation",
          ],
          correctIndex: 1,
          explanation:
            "The beam carries momentum, and the products must carry it too — they cannot materialize at rest in the lab. Only the center-of-momentum energy √s is available for making mass. Equating s at threshold (products moving as one lump) between frames gives E_beam = 7mc². Colliders exist precisely to eliminate this waste: with head-on beams, p_total = 0 and every joule counts.",
        },
        {
          question:
            "An electron (rest energy 0.511 MeV) is accelerated to γ = 10. Its total energy is:",
          options: ["5.11 MeV", "0.511 MeV", "51.1 MeV", "4.60 MeV"],
          correctIndex: 0,
          explanation:
            "E = γmc² = 10 × 0.511 = 5.11 MeV, of which 0.511 MeV is rest energy and 4.60 MeV is kinetic. (Option d is the kinetic energy alone — a classic misread of the question.) At γ = 10 the electron moves at v = c√(1 − 1/100) ≈ 0.995c: energy grows without bound as v → c, which is exactly why c is unreachable for anything with mass.",
        },
        {
          question:
            "A sealed, massless box contains two 1 MeV photons flying in opposite directions. The mass of the box-plus-photons system is:",
          options: [
            "zero — photons are massless, and mass is additive",
            "1 MeV/c²",
            "2 MeV/c², because the system's total 4-momentum has E = 2 MeV and p = 0",
            "undefined, since mass has no meaning for light",
          ],
          correctIndex: 2,
          explanation:
            "Mass is the invariant norm of the total 4-momentum: m²c⁴ = E_tot² − (p_tot c)². The opposite momenta cancel (p_tot = 0) while the energies add, so m = 2 MeV/c². Mass is not additive — a system of massless parts can have mass. The same accounting explains most of your own weight: protons are far heavier than their constituent quarks because confined field energy contributes E/c².",
        },
        {
          question:
            "Physicists identify new particles by computing √(E² − (pc)²) for sets of decay products and histogramming the result. Why does this work no matter how fast the parent particles were moving?",
          options: [
            "Because energy is conserved in every frame",
            "Because detectors automatically transform to the parent's rest frame",
            "Because at collider energies all particles move at essentially c",
            "Because E² − (pc)² of the total 4-momentum is a Lorentz invariant equal to the parent's (mc²)², identical in every frame",
          ],
          correctIndex: 3,
          explanation:
            "The total 4-momentum of the decay products equals the parent's, and its norm is the frame-independent invariant mass. A Z boson made nearly at rest and one made at γ = 50 both reconstruct to 91 GeV/c². Events without a common parent scatter smoothly; true decays pile up in a peak at the parent mass — the J/ψ, the W and Z, and the Higgs at 125 GeV were all found as exactly such bumps.",
        },
      ],
    },
    {
      id: "relativity-electromagnetism",
      title: "Relativity & Electromagnetism",
      subtitle:
        "How E and B mix between frames — magnetism unmasked as a relativistic effect",
      sections: [
        {
          id: "fields-depend-on-frame",
          title: "Whose Field Is It? E and B Depend on the Frame",
          content: `
<p>Sit beside a point charge and you measure a pure electric field, radiating outward, with no magnetism anywhere. Now walk past the same charge. From your frame the charge is moving — a current — and currents make magnetic fields. Same charge, same physics, yet one observer reports only <strong>E</strong> while the other reports <strong>E and B together</strong>. Neither is wrong. The electric and magnetic fields are not two independent substances; they are <strong>frame-dependent components of a single electromagnetic field</strong>, mixing under Lorentz transformations the way space and time do.</p>
<p>The transformation rules (for a frame moving at velocity v, splitting fields into components parallel and perpendicular to v):</p>
<div class="key-concept">
  <h4>How the fields mix</h4>
  <p style="text-align:center;">E′<sub>∥</sub> = E<sub>∥</sub>&nbsp;&nbsp;&nbsp;&nbsp;B′<sub>∥</sub> = B<sub>∥</sub></p>
  <p style="text-align:center;">E′<sub>⊥</sub> = γ(E + v × B)<sub>⊥</sub>&nbsp;&nbsp;&nbsp;&nbsp;B′<sub>⊥</sub> = γ(B − (v/c²) × E)<sub>⊥</sub></p>
  <p>Motion through a magnetic field manufactures an electric field, and motion through an electric field manufactures a magnetic one. The Lorentz force qE + qv × B is not two forces but one, described from different frames.</p>
</div>
<p>This settles a puzzle Einstein put in the first paragraph of his 1905 paper. Move a magnet through a coil: the changing B makes an E field (Faraday induction) that drives current. Move the coil past the magnet instead: no E field exists, yet the charges feel qv × B and the same current flows. Two utterly different mechanisms, identical measurable outcome — a coincidence that pre-relativistic physics could not explain. Relativity dissolves it: the two stories are one story, told from two frames.</p>
<p>Just as (cΔt)² − (Δx)² survives frame changes, the field mixing preserves two invariants:</p>
<p style="text-align:center;"><strong>E² − c²B²</strong>&nbsp;&nbsp;and&nbsp;&nbsp;<strong>E · B</strong></p>
<p>They classify fields absolutely. A pure electrostatic field (E² − c²B² &gt; 0) can never be transformed into a pure magnetic one, and vice versa. A light wave has E² − c²B² = 0 <em>and</em> E · B = 0 — perfectly balanced, in every frame, forever: no observer can boost to a frame where a light wave becomes electrostatic, which is postulate 2 wearing field-theory clothes.</p>
<p>But the showpiece is what these rules say about an ordinary wire — next.</p>`,
        },
        {
          id: "purcell-argument",
          title: "The Purcell Argument: Magnetism Unmasked",
          content: `
<p>Here is the most celebrated derivation in Purcell's <em>Electricity and Magnetism</em> — magnetic force conjured from electrostatics plus relativity, nothing else.</p>
<p><strong>Lab frame.</strong> A copper wire carries current: a lattice of stationary positive ions, linear charge density +λ, and a stream of conduction electrons, density −λ, drifting at speed u. The densities cancel — <strong>the wire is neutral</strong>, and produces no electric field at all. Alongside rides a positive test charge q, moving parallel to the wire at the electron drift speed u. We observe: the wire's current makes B = μ₀I/2πr, and the moving charge feels the purely magnetic force F = quB — directed <em>away</em> from the wire, since the charge's motion and the conventional current run antiparallel, and antiparallel currents repel. Magnetism, as catalogued in Subject 17.</p>
<p><strong>The charge's rest frame.</strong> Here the test charge is at rest, so qv × B can exert no force on it whatsoever. Yet it must still accelerate away from the wire — frames cannot disagree about whether it drifts off. Something <em>electric</em> has to be responsible. Watch the densities:</p>
<ul>
  <li>The <strong>positive ions</strong>, at rest in the lab, now stream backward at u. Their spacing length-contracts: density rises to γλ.</li>
  <li>The <strong>electrons</strong> are now at rest, so the contraction they had in the lab frame <em>relaxes</em>: their spacing stretches to its proper value and the density falls to −λ/γ.</li>
</ul>
<p>The cancellation is broken. The wire carries a net charge density λ′ = γλ − λ/γ = γλu²/c² — <strong>positive</strong> — and its ordinary electrostatic field pushes the positive test charge away, exactly matching the lab frame's verdict. Run the numbers: the electric force qλ′/2πε₀r equals γ × quB (using 1/ε₀c² = μ₀), and the extra γ is precisely how a transverse force must transform between frames. The agreement is exact, not approximate:</p>
<div class="key-concept">
  <h4>Magnetism is relativistic electrostatics</h4>
  <p>One frame calls the force magnetic (moving charge, neutral wire); another calls it electric (static charge, charged wire). The force is one fact; E and B are its frame-dependent shadows. Magnetism is exactly what electrostatics looks like when charge densities are viewed from a moving frame — length contraction acting on charge.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Historically the logic ran backwards: magnetism was not derived from relativity — relativity was hiding inside magnetism all along. Maxwell's equations were already fully relativistic in 1865, forty years before anyone knew what that meant. Einstein titled his 1905 paper "On the Electrodynamics of Moving Bodies."</p>
</div>`,
        },
        {
          id: "why-tiny-speeds-matter",
          title: "A 10⁻²⁵ Effect You Can Feel",
          content: `
<p>Something should bother you about the last section. Relativistic corrections scale like v²/c², and the drift speed of electrons in household wiring is absurdly slow — around u ≈ 0.1 mm/s, a leisurely stroll for a snail. That makes uv/c² of order <strong>10⁻²⁵</strong>. How can a correction twenty-five orders of magnitude down produce a force that slams a contactor shut or spins a washing machine?</p>
<p>Because the force it corrects is astronomically large. Count the charge in an ordinary wire: copper carries about 8.5 × 10²⁸ conduction electrons per cubic metre, so a 1 mm² wire holds roughly 1.4 × 10⁴ coulombs of mobile charge <em>per metre</em> — with an equal positive charge in the lattice. If even one metre's worth of those electrons were removed and placed a metre from the remaining ions, Coulomb's law gives an attraction of order 10¹⁸ newtons — roughly the weight of a mountain range.</p>
<p>Ordinary matter is electrically neutral to exquisite precision, so these titanic forces cancel to zero... <em>almost</em>. The Purcell mechanism unbalances the cancellation by the relativistic factor uv/c² ~ 10⁻²⁵ — and 10⁻²⁵ of a mountain-range force is a few newtons per metre: precisely the everyday magnetic force between current-carrying wires (two parallel wires at 1 A and 1 m spacing attract with 2 × 10⁻⁷ N per metre; motor windings, with more current and tighter spacing, reach the forces that run industry).</p>
<div class="analogy">
  <h3>Analogy: The trillionaires' ledger</h3>
  <p>Two trillion-dollar accounts, one credit and one debit, sit in perfect balance. A rounding error in the twenty-fifth decimal place goes uncorrected — and a few dollars materialize. Magnetism is that rounding error: nature's most gigantic force, the Coulomb attraction of every electron in a wire for every ion, surviving cancellation only through the tiny asymmetry that relativity imposes on moving charge densities.</p>
</div>
<p>This is why magnetism, though "merely" a v²/c² relativistic correction, was discovered millennia before relativity: lodestones and compass needles work because matter carries such colossal hidden charge that even a 10⁻²⁵ imbalance is palpable. It is also a deep consistency check — if charge were not exactly conserved and Lorentz-invariant, or if the electron and proton charges differed by even one part in 10²⁰, these cancellations would fail and electrostatic forces would shred every wire. The universe's neutrality is precise, and magnetism is its relativistic residue.</p>`,
        },
        {
          id: "toward-covariant-electrodynamics",
          title: "One Field: The View Ahead",
          content: `
<p>Step back and survey what this chapter has established. E and B mix under boosts like components of a single object; two invariant combinations (E² − c²B² and E · B) survive every frame change; and a force that one observer calls magnetic, another calls electric. The conclusion is structural: electromagnetism is <em>one</em> field, and the E/B split is an artifact of choosing a frame — like splitting spacetime into "space" and "time."</p>
<p>The proper container is neither a 3-vector nor a 4-vector but the next object up: the <strong>electromagnetic field tensor</strong> F, a 4 × 4 antisymmetric array whose six independent slots hold exactly the three components of E and the three of B. In that language (developed properly in Phase 5's covariant electrodynamics):</p>
<ul>
  <li>Maxwell's four equations collapse to <strong>two tensor equations</strong>, manifestly identical in every inertial frame — postulate 1 satisfied by inspection rather than by miracle.</li>
  <li>The Lorentz force law becomes one line relating F to the 4-momentum's rate of change along a worldline.</li>
  <li>The field-mixing rules of this chapter stop being a list to memorize: they are simply how any tensor's components respond to a Lorentz transformation, the same machinery that mixed x with t.</li>
</ul>
<p>Two payoffs are worth previewing. First, <strong>light itself</strong>: Maxwell's equations support self-sustaining waves of E and B travelling at exactly c — and now we see this is no numerical coincidence. Electromagnetism is a fully relativistic theory that was discovered forty years early; c appears in it because c is woven into the spacetime the fields inhabit. Special relativity did not modify Maxwell — it modified <em>mechanics</em> to match Maxwell.</p>
<p>Second, <strong>charge conservation</strong> joins the four-vector family: charge and current densities form a 4-vector (cρ, J), and their conservation law is frame-independent for the same reason 4-momentum conservation was. Every structure in this subject — intervals, four-vectors, invariants — reappears in electrodynamics unchanged.</p>
<div class="key-concept">
  <h4>The pattern to carry forward</h4>
  <p>Relativity's method is always the same: find the objects that transform properly (four-vectors, tensors), write laws relating only those objects, and frame-independence is automatic. This template — covariance as a design principle — is how general relativity, quantum field theory, and the Standard Model are all built. You have now seen it work twice: once for mechanics, once for electromagnetism.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the rest frame of a point charge there is a pure electric field and no magnetic field. An observer flying past the charge measures:",
          options: [
            "both an electric field and a magnetic field — the moving charge is a current, and the fields mix under the transformation",
            "only the same electric field, since fields are absolute",
            "only a magnetic field, since motion converts E entirely into B",
            "no field at all, by symmetry",
          ],
          correctIndex: 0,
          explanation:
            "E and B are frame-dependent components of one electromagnetic field. The transformation B′⊥ = γ(B − (v/c²) × E)⊥ manufactures a magnetic field from the charge's electric field. A full conversion is impossible: the invariant E² − c²B² is positive for a pure electrostatic field and stays positive in every frame, so some electric field always survives.",
        },
        {
          question:
            "In Purcell's argument, a current-carrying wire is exactly neutral in the lab yet exerts a force on a test charge moving parallel to it. In the test charge's rest frame, the force arises because:",
          options: [
            "the magnetic field becomes stronger in that frame",
            "the wire's ions and electrons move at different speeds there, so their length-contracted charge densities no longer cancel — the wire acquires a net charge and exerts an ordinary electrostatic force on the test charge",
            "the test charge's own field polarizes the wire",
            "energy conservation requires a force in every frame",
          ],
          correctIndex: 1,
          explanation:
            "A charge at rest feels no magnetic force (qv × B = 0 with v = 0), so the acceleration every frame agrees on must be electric in that frame. Boosting changes the contraction of the ion spacing and the electron spacing by different amounts, leaving a net linear charge density of order λuv/c² on the once-neutral wire. Its plain Coulomb field reproduces exactly the lab frame's F = qvB — one force, two descriptions.",
        },
        {
          question:
            "Electron drift speeds in a wire are ~0.1 mm/s, making the relativistic factor uv/c² of order 10⁻²⁵. Why is the resulting magnetic force nonetheless strong enough to run motors?",
          options: [
            "Quantum effects amplify the relativistic correction",
            "The electrons' thermal speeds, not drift speeds, set the size of the effect",
            "The correction acts on the colossal cancelled Coulomb forces of ~10⁴ coulombs of mobile charge per metre of wire — 10⁻²⁵ of a mountain-range-sized force is still newtons",
            "Magnetic forces add up over the billions of turns in a motor winding only",
          ],
          correctIndex: 2,
          explanation:
            "A metre of 1 mm² copper wire contains about 1.4 × 10⁴ C of conduction electrons, balanced by equal positive lattice charge. The Coulomb forces hidden in that balance are of order 10¹⁸ N — and magnetism is the tiny relativistic imbalance (~10⁻²⁵) in their cancellation. Windings and currents help engineering-wise, but the core answer is that the cancelled electrostatic force is almost unimaginably large.",
        },
        {
          question:
            "A light wave has E² − c²B² = 0 and E · B = 0. What do these facts imply?",
          options: [
            "Some frame exists in which the wave is a pure electric field",
            "The wave's fields vanish for a sufficiently fast observer",
            "The wave carries no energy",
            "In every inertial frame the wave keeps perfectly balanced, perpendicular E and B fields — no observer can transform a light wave into a static field",
          ],
          correctIndex: 3,
          explanation:
            "Both quantities are Lorentz invariants: their values travel unchanged to every frame. Zero E² − c²B² means the electric and magnetic parts stay in exact balance (E = cB) for all observers; zero E · B keeps them perpendicular. Light can be Doppler-shifted and aberrated, but never boosted into an electrostatic or magnetostatic field — the field-theory face of the second postulate.",
        },
      ],
    },
    {
      id: "toward-general-relativity",
      title: "Toward General Relativity",
      subtitle:
        "The equivalence principle, gravitational time dilation, and why GPS needs Einstein",
      sections: [
        {
          id: "equivalence-principle",
          title: "Einstein's Happiest Thought",
          content: `
<p>In 1907, still at the patent office, Einstein had what he later called "the happiest thought of my life": <strong>a person falling freely does not feel their own weight</strong>. Release a ball while falling and it floats beside you; step on a scale mid-fall and it reads zero. In your falling laboratory, gravity has locally vanished. Conversely, stand in a windowless rocket accelerating at 9.8 m/s² in deep space, and everything behaves exactly as in a lab parked on Earth: dropped objects "fall" at g, you feel your normal weight, pendulums swing on schedule.</p>
<div class="key-concept">
  <h4>The equivalence principle</h4>
  <p>No local experiment can distinguish a uniform gravitational field from constant acceleration, nor free fall in gravity from floating in empty space. Locally, gravity and acceleration are the same phenomenon.</p>
</div>
<p>The principle rests on an empirical coincidence Newton left unexplained. The m in F = ma (inertial mass — resistance to acceleration) and the m in F = GMm/r² (gravitational mass — coupling to gravity) have no logical reason to be equal. Yet they are, which is why Galileo's feather and hammer fall together in vacuum — the famous demonstration repeated on the Moon by Apollo 15. Torsion-balance experiments from Eötvös (1900s, one part in 10⁹) to the MICROSCOPE satellite (2022, one part in 10¹⁵) confirm the equality to extraordinary precision. Einstein's move was to declare the coincidence structural: falling objects all track together because they are all simply <em>moving inertially</em>, and what we call gravity is a feature of spacetime itself.</p>
<p>This inverts the Newtonian picture of who is accelerating. The skydiver, the ISS astronaut, the comet — all are inertial, feeling nothing. The person "at rest" on the ground is the accelerated one, pushed off an inertial path at 9.8 m/s² by the floor — which is exactly what a scale measures and exactly what an accelerometer on your phone reads while it sits on a table: 1g, pointing up.</p>
<p>The principle is a machine for generating predictions: take any effect of acceleration, and gravity must produce it too. Light crossing an accelerating rocket appears to bend — so gravity must bend light. And, most consequentially for this chapter, acceleration plays tricks with clocks — so gravity must dilate time. That derivation is next, and a satnav depends on it.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Locally" is doing real work: a genuine gravitational field betrays itself over large regions through tidal effects — two dropped balls converge slightly as each falls toward Earth's center. General relativity will identify these tides with spacetime curvature; the equivalence principle holds exactly only in the small.</p>
</div>`,
        },
        {
          id: "gravitational-time-dilation",
          title: "Gravitational Time Dilation from a Thought Experiment",
          content: `
<p>The equivalence principle converts a Doppler problem into a law of gravity. Put two clocks in a rocket of height h accelerating at g in empty space — one at the nose, one at the tail — and let the tail clock flash light upward at frequency f.</p>
<ol>
  <li>A flash takes time t ≈ h/c to climb to the nose.</li>
  <li>During the flight the rocket speeds up, so at reception the nose is moving <em>away</em> from where the light was emitted with an extra speed Δv = gt = gh/c.</li>
  <li>The nose therefore receives the flashes Doppler-<em>red</em>shifted by the fraction Δv/c = gh/c².</li>
</ol>
<p>The nose observer counts fewer flashes per second than the tail emits — persistently, forever. The only consistent conclusion: <strong>the tail clock genuinely runs slower than the nose clock</strong>, by the fraction gh/c². Now invoke equivalence: an accelerating rocket is indistinguishable from a tower in gravity. Therefore:</p>
<div class="key-concept">
  <h4>Gravitational time dilation</h4>
  <p style="text-align:center;">Δf/f = gh/c²&nbsp;&nbsp;—&nbsp;&nbsp;more generally, Δt<sub>low</sub>/Δt<sub>high</sub> = 1 − ΔΦ/c²</p>
  <p>Clocks deeper in a gravitational potential run slower. Light climbing out of a gravity well arrives redshifted; light falling in arrives blueshifted. This follows from the equivalence principle plus special relativity alone — no field equations needed.</p>
</div>
<p><strong>The numbers are tiny and measurable.</strong> For a 22.5 m tower on Earth: gh/c² = 9.8 × 22.5/(9 × 10¹⁶) ≈ 2.5 × 10⁻¹⁵. In 1959–60 Pound and Rebka measured exactly this shift in gamma rays climbing a tower at Harvard, using the Mössbauer effect to reach the required precision — confirming the prediction within 10%, later refined to 1%. In 2010, NIST's optical clocks could detect the rate difference between two clocks separated by <strong>33 cm</strong> of height. Your head ages faster than your feet — by about 10⁻¹⁶ in rate, some 300 nanoseconds over a lifetime — and modern instruments can see effects of that size.</p>
<p>Note what kind of effect this is. Special relativity's time dilation is symmetric between inertial observers; gravitational time dilation is not symmetric — the mountaintop clock really does accumulate more time than the valley clock, and both parties agree. Height in a gravity well is an absolute distinction, like the twin paradox's turnaround. When both effects operate at once — a fast-moving clock high above a planet — you simply add the two rate corrections. That sum is a 38-microsecond-per-day engineering problem orbiting over your head right now.</p>`,
        },
        {
          id: "gps-numbers",
          title: "GPS: Relativity as Consumer Product",
          content: `
<p>Each GPS satellite is a flying atomic clock, broadcasting its time and position from a 26,600 km orbit. Your receiver compares arrival times from four satellites and triangulates. Since the signals travel at c ≈ 30 cm per nanosecond, <strong>every nanosecond of clock error is 30 cm of position error</strong>. Relativity enters twice, in opposite directions.</p>
<p><strong>Special relativity — the orbit is fast.</strong> Orbital speed: v = √(GM/r) ≈ 3.87 km/s, so β = 1.29 × 10⁻⁵ and the satellite clock runs slow by β²/2 ≈ 8.3 × 10⁻¹¹. Over a day (86,400 s): <strong>−7.2 μs/day</strong>.</p>
<p><strong>General relativity — the orbit is high.</strong> The satellite sits far up Earth's potential well. The rate gain is ΔΦ/c² with ΔΦ = GM(1/R<sub>E</sub> − 1/r): using GM = 3.99 × 10¹⁴ m³/s², R<sub>E</sub> = 6.37 × 10⁶ m, r = 2.66 × 10⁷ m, we get ΔΦ ≈ 4.76 × 10⁷ J/kg, so ΔΦ/c² ≈ 5.3 × 10⁻¹⁰ — a clock <em>speed-up</em> of <strong>+45.7 μs/day</strong>.</p>
<table>
  <thead>
    <tr><th>Effect</th><th>Cause</th><th>Satellite clock rate</th></tr>
  </thead>
  <tbody>
    <tr><td>Special-relativistic</td><td>orbital speed 3.87 km/s</td><td>−7.2 μs/day</td></tr>
    <tr><td>Gravitational</td><td>weaker gravity at 26,600 km</td><td>+45.7 μs/day</td></tr>
    <tr><td><strong>Net</strong></td><td></td><td><strong>+38.5 μs/day fast</strong></td></tr>
  </tbody>
</table>
<p>Gravity wins by a factor of six: the satellites' clocks outrun ground clocks by about 38 μs every day. Uncorrected, that is 38,000 ns/day × 30 cm/ns ≈ <strong>11 km of position error accumulating per day</strong> — the entire system useless within hours of switch-on.</p>
<p>The fix is built into the hardware: satellite clocks are manufactured to tick at 10.22999999543 MHz on the ground so that, once in orbit, relativity raises them to the design frequency of exactly 10.23 MHz. Receivers apply a further small correction for each satellite's orbital eccentricity (speed and altitude vary around the ellipse). Engineers debated whether the corrections were real before the first launches; a switchable synthesizer on the 1977 prototype satellite settled it — the measured offset matched Einstein's prediction within parts in a hundred.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Both corrections have the same shape as this course's core formulas: β²/2 is just the first term of γ, and ΔΦ/c² is the rocket thought experiment scaled to orbit. Every turn-by-turn direction your phone speaks is a working verification of both relativities — several billion times a day, worldwide.</p>
</div>`,
        },
        {
          id: "road-to-curved-spacetime",
          title: "The Road to Curved Spacetime",
          content: `
<p>Gravitational time dilation is not a small curiosity — it is a crack in the foundations of special relativity itself. This subject has assumed that ideal clocks everywhere can be synchronized into global inertial frames. But if clocks at different heights genuinely tick at different rates, no such global frame exists in a gravitational field. Spacetime near a mass cannot be the flat arena of Minkowski diagrams. Something has to give, and what gives is <em>geometry</em>.</p>
<p>Follow the logic of Chapter 2's deepest lesson: a worldline's elapsed proper time is its spacetime "length," and free objects take the paths of extremal proper time. Now add this chapter's discovery that clocks higher up run faster. A thrown ball trades height for speed along its arc; its worldline through a region of position-dependent clock rates maximizes proper time by ballooning upward exactly along the parabola Newton computed. Gravity stops being a force and becomes geometry: <strong>free fall is straight-line motion — a geodesic — through curved spacetime</strong>, and the "force" you feel standing still is the floor shoving you off your geodesic.</p>
<p>What curvature adds beyond the equivalence principle is the <em>tidal</em> part — the effects no falling elevator can erase. Two balls dropped side by side converge as both fall toward Earth's center; two dropped vertically separate as the lower one outruns the upper. These relative accelerations of nearby free-fallers are the honest, coordinate-free content of gravity, and general relativity identifies them with the curvature of spacetime, sourced — via Einstein's field equations — by energy and momentum (the 4-momentum of Chapter 3, promoted to a starring role).</p>
<p>The predictions waiting in Phase 6: light bending by the Sun (1.75 arcseconds at the limb — twice the naive Newtonian value, because both time <em>and</em> space are curved; measured by Eddington's 1919 eclipse expedition), the precession of Mercury's orbit, gravitational redshift (already banked), black holes where the time-dilation factor runs away entirely, and gravitational waves — ripples of curvature detected by LIGO in 2015, a century after prediction.</p>
<div class="key-concept">
  <h4>What carries forward</h4>
  <p>Every tool of this subject survives the upgrade: intervals become the metric, four-vectors live on in curved spacetime's tangent spaces, invariance remains the organizing principle, and special relativity rules exactly in every freely falling local frame. General relativity is not a repeal of this course — it is this course, applied patch by patch to a spacetime that bends.</p>
  </div>`,
        },
      ],
      quiz: [
        {
          question:
            "You wake in a sealed, windowless laboratory and find that dropped objects accelerate toward the floor at 9.8 m/s². According to the equivalence principle, what can you conclude?",
          options: [
            "You are on Earth's surface",
            "You are in a rocket accelerating in deep space",
            "Nothing distinguishes the two: no local experiment can tell uniform acceleration from a uniform gravitational field",
            "Measuring the fall of two different masses would settle the question",
          ],
          correctIndex: 2,
          explanation:
            "Local indistinguishability of gravity and acceleration is the equivalence principle itself. Comparing different masses cannot help — inertial and gravitational mass are equal (verified to one part in 10¹⁵ by the MICROSCOPE satellite), so everything falls identically in both scenarios. Only non-local measurements, such as detecting tidal convergence of two widely separated falling balls, could reveal a genuine planet.",
        },
        {
          question:
            "A precision clock spends a year in a high-altitude laboratory, then is compared with an identical clock kept at sea level. The result is:",
          options: [
            "the mountain clock has accumulated more time — clocks higher in a gravitational potential run faster, and both observers agree",
            "the sea-level clock has accumulated more time",
            "each clock is behind the other in its own frame, as with symmetric velocity time dilation",
            "the clocks agree, since neither has moved relative to the other",
          ],
          correctIndex: 0,
          explanation:
            "Gravitational time dilation depends on depth in the potential well, not relative velocity, and unlike special-relativistic time dilation it is asymmetric: everyone agrees the higher clock ran faster, by roughly gh/c². The effect is real and measured — Pound and Rebka saw the frequency shift over a 22.5 m tower in 1960, and NIST optical clocks now resolve a height difference of 33 cm.",
        },
        {
          question:
            "For GPS satellites, special relativity slows the orbiting clocks by about 7 μs/day while gravitational time dilation speeds them up by about 46 μs/day. What would happen if the net +38 μs/day were left uncorrected?",
          options: [
            "Nothing — the receiver's own clock would cancel the error",
            "Position fixes would drift by roughly 11 km per day, accumulating until the system was useless",
            "Positions would be wrong by a constant 38 metres",
            "Only altitude readings would be affected",
          ],
          correctIndex: 1,
          explanation:
            "GPS positioning converts timing into distance at light speed: 1 ns of clock error is about 30 cm. A drift of 38,000 ns/day therefore builds roughly 11 km of ranging error every day — and it accumulates, because the satellite clocks genuinely run fast, continuously. The cure is baked in before launch: clocks are set to 10.22999999543 MHz so that relativity lifts them to exactly 10.23 MHz in orbit.",
        },
        {
          question:
            "In the accelerating-rocket derivation of gravitational time dilation, why does light emitted from the tail arrive at the nose redshifted?",
          options: [
            "The light loses energy fighting the rocket's engine thrust",
            "Length contraction stretches the rocket during the light's flight",
            "The tail clock is heavier and therefore vibrates more slowly",
            "During the light's transit the rocket gains speed, so the nose is receding from the emission event at Δv = gh/c when it receives the flash — an ordinary Doppler redshift of Δf/f = gh/c²",
          ],
          correctIndex: 3,
          explanation:
            "The argument is pure special relativity plus kinematics: transit time h/c, extra recession speed gΔt = gh/c, hence fractional redshift gh/c². The equivalence principle then transfers the result verbatim to a tower in a gravitational field, forcing the conclusion that lower clocks genuinely run slower — no curved-spacetime machinery required, which is why Einstein had this result in 1907, eight years before the field equations.",
        },
        {
          question:
            "Standing on the ground, which statement best describes your situation in the post-equivalence-principle view of gravity?",
          options: [
            "You are inertial, and falling objects are accelerated downward by the force of gravity",
            "You are accelerating upward at 9.8 m/s², pushed off an inertial (free-fall) path by the floor — exactly what a scale or phone accelerometer registers",
            "Both you and falling objects are inertial in different frames",
            "You are inertial only if the Earth is not rotating",
          ],
          correctIndex: 1,
          explanation:
            "Relativity inverts Newton's assignment: free-falling objects — skydivers, ISS astronauts, thrown balls between catch and release — are the inertial ones, feeling weightless and following spacetime geodesics. The ground-dweller is continuously shoved off a geodesic by the floor's contact force, which is why an accelerometer at 'rest' reads 1g upward. What we call weight is the sensation of that acceleration.",
        },
      ],
    },
  ],
};
