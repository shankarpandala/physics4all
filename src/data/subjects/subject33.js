export const subject33 = {
  id: "general-relativity",
  number: 33,
  title: "General Relativity",
  description:
    "Einstein's theory of gravity at the Hartle/Schutz 'physics-first' level: curved spacetime, the field equations, black holes, gravitational waves, and relativistic cosmology.",
  phase: 6,
  chapters: [
    {
      id: "mathematics-of-curved-spacetime",
      title: "The Mathematics of Curved Spacetime",
      subtitle: "Metrics, tensors, geodesics, and curvature",
      sections: [
        {
          id: "metrics-and-distance",
          title: "The Metric: Distance Is the Whole Game",
          content: `
<p>All of geometry hides in one question: given two nearby points, how far apart are they? The machine that answers is the <strong>metric</strong>. On a flat plane with Cartesian coordinates, Pythagoras answers directly:</p>
<p style="text-align:center;">ds² = dx² + dy²</p>
<p>Now describe the <em>same flat plane</em> in polar coordinates (r, φ). Step outward by dr and you move a distance dr — but step around by dφ and you move a distance r·dφ, because circles farther out are bigger. So:</p>
<p style="text-align:center;">ds² = dr² + r² dφ²</p>
<p>The coefficients changed, the plane did not. A metric's components depend on your coordinate choice; the geometry they encode does not. Check it: the circumference of a circle of radius r is the integral of r·dφ from 0 to 2π, giving 2πr. Flat, as expected.</p>
<p>Next, a genuinely curved surface — a sphere of radius R, with colatitude θ and longitude φ:</p>
<p style="text-align:center;">ds² = R²(dθ² + sin²θ dφ²)</p>
<p>That sin²θ is the fingerprint of curvature: circles of constant θ have circumference 2πR sinθ, which is <em>less</em> than 2π times their radius measured along the surface. No coordinate change can massage this metric into dx² + dy² everywhere — the sphere is <strong>intrinsically</strong> curved, a fact a two-dimensional surveyor could discover without ever leaving the surface or seeing the third dimension.</p>
<div class="key-concept">
  <h4>The central object of GR</h4>
  <p>Spacetime is a four-dimensional <strong>manifold</strong> — a smooth set of events labeled by coordinates — equipped with a metric g_μν that gives the interval between neighboring events: ds² = g_μν dx^μ dx^ν. Flat spacetime is the Minkowski metric of special relativity, ds² = −dt² + dx² + dy² + dz² (units with c = 1). Gravity, we will find, is nothing but g_μν varying from place to place. Everything — distances, times, orbits, light paths — is read out of the metric.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Gauss proved in 1827 that curvature is intrinsically measurable — his <em>Theorema Egregium</em>, "remarkable theorem." Legend says he tested it by surveying a giant triangle between three German mountaintops, checking whether its angles summed to 180°. Einstein's insight was that we are all surveyors inside a curved four-dimensional spacetime.</p>
</div>`,
        },
        {
          id: "tensors-properly",
          title: "Tensors, Honestly",
          content: `
<p>Coordinates are human bookkeeping — nature never consults them. A physical law written in one coordinate system had better say the same thing in every other, and <strong>tensors</strong> are precisely the objects that guarantee it.</p>
<p>Start with the familiar. A vector V has components V^μ that depend on your coordinates: switch from x^μ to new coordinates x^μ′ and the components mix according to</p>
<p style="text-align:center;">V^μ′ = (∂x^μ′/∂x^ν) V^ν</p>
<p>(summed over repeated indices — the Einstein summation convention, which we use from here on). The vector itself, the arrow, never changed; only its description did. A <strong>tensor</strong> generalizes this: an object with any number of upper (contravariant) and lower (covariant) indices, each transforming with the appropriate factor of ∂x′/∂x or its inverse. The metric g_μν is a tensor with two lower indices; the stress–energy of matter, T_μν, likewise.</p>
<div class="key-concept">
  <h4>Why physics needs tensors</h4>
  <p>Because every index transforms the same way, a tensor equation valid in one coordinate system is valid in <em>all</em> of them. If A_μν = B_μν holds for one observer, it holds for every observer, accelerating or not. Writing physics as tensor equations is how we keep the laws coordinate-free while still being able to compute with coordinates. This is the "principle of general covariance," and it is the grammar of general relativity.</p>
</div>
<p>The metric also serves as the index-moving machine: it lowers indices (V_μ = g_μν V^ν), its inverse g^μν raises them, and contracting an upper index with a lower one produces coordinate-independent scalars — the numbers experiments actually measure. The interval ds², a particle's proper time τ, the energy an observer measures: all scalars, all built by contraction.</p>
<p>One warning that separates honest tensor work from index shuffling: <em>not everything with indices is a tensor</em>. The Christoffel symbols Γ^μ_αβ of the next section carry indices but transform with an extra, inhomogeneous term — that failure is exactly what lets them encode the "fictitious forces" of a bad coordinate system. And the ordinary partial derivative of a tensor is not a tensor either, a defect the covariant derivative will repair.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein spent 1912–1915 learning this machinery from his friend Marcel Grossmann, a geometer. He later wrote to Sommerfeld: "I have become imbued with great respect for mathematics, the subtler part of which I had, in my simple-mindedness, regarded as pure luxury until now."</p>
</div>`,
        },
        {
          id: "geodesics",
          title: "Geodesics: The Straightest Possible Paths",
          content: `
<p>What replaces the straight line in a curved geometry? Two equivalent answers: the path of <em>extremal length</em>, and the path that is <em>locally straight</em> — never turning as judged by the geometry itself. Such paths are <strong>geodesics</strong>.</p>
<p>The clean route is variational. Among all curves connecting two points, demand the one whose length ∫ds is stationary. Feeding the metric into the Euler–Lagrange equations of Subject 23 produces the <strong>geodesic equation</strong>:</p>
<p style="text-align:center;">d²x^μ/dτ² + Γ^μ_αβ (dx^α/dτ)(dx^β/dτ) = 0</p>
<p>where the Christoffel symbols Γ^μ_αβ are built from first derivatives of the metric. They vanish in Cartesian coordinates on the plane — where geodesics obey d²x/dτ² = 0, honest straight lines — but not in polar coordinates, where the same straight lines satisfy r̈ − r φ̇² = 0. The "acceleration" term is pure bookkeeping: the coordinates curve, the path doesn't. That is the recurring GR lesson — coordinate effects and physical effects must be carefully told apart.</p>
<p>On the sphere the geodesics are great circles, which is why flights from Los Angeles to London arc over Greenland: the straightest path on the globe looks bent on a flat map. Note also a genuinely non-Euclidean behavior: two travelers leaving the equator on parallel northward geodesics <em>converge</em> at the pole. Curvature makes initially parallel straight lines approach each other — remember this; it will become tidal gravity.</p>
<div class="key-concept">
  <h4>Geodesics in spacetime maximize proper time</h4>
  <p>For a massive particle the "length" of a worldline is the proper time τ ticked by a clock carried along it, and (thanks to the minus sign in the metric) free-fall paths <em>maximize</em> τ. Throw a ball upward: among all ways to leave your hand and return one second later, the free-fall arc is the one whose onboard clock records the most time. Freely falling bodies are not being pushed by a force — they are coasting along the straightest worldlines spacetime offers.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>This resolves the twin paradox with a slogan: the inertial twin ages most because her worldline is a geodesic. In relativity, the straightest path through spacetime is the one of maximal aging.</p>
</div>`,
        },
        {
          id: "covariant-derivative-and-curvature",
          title: "Parallel Transport, the Covariant Derivative & Curvature",
          content: `
<p>To differentiate a vector field you must compare vectors at neighboring points — but in curved space, vectors at different points live in different tangent planes, and there is no God-given way to compare them. The fix is a rule for sliding a vector along a curve while keeping it "as parallel as possible": <strong>parallel transport</strong>. Built into calculus, this rule yields the <strong>covariant derivative</strong>,</p>
<p style="text-align:center;">∇_ν V^μ = ∂_ν V^μ + Γ^μ_νλ V^λ</p>
<p>The Christoffel term exactly cancels the fake, coordinate-induced part of the ordinary derivative, and the result transforms as a proper tensor. With ∇ in hand, the geodesic equation gets its second reading: a geodesic parallel-transports its own tangent vector — it never turns.</p>
<p>Now the beautiful part. On a flat plane, carry a vector around any closed loop by parallel transport and it returns pointing exactly as it began. On a sphere it does not. Try it: start at the north pole with a vector pointing along a meridian, transport it down to the equator, a quarter of the way around the equator, then back up to the pole — never rotating it locally. It arrives rotated by 90°. In general the rotation angle equals the enclosed area divided by R². <strong>Path-dependence of parallel transport is the very definition of curvature.</strong></p>
<div class="key-concept">
  <h4>The Riemann tensor</h4>
  <p>Shrink the loop to an infinitesimal parallelogram and the rotation per unit area is captured by the <strong>Riemann curvature tensor</strong> R^μ_ναβ, computable from the commutator of covariant derivatives: transporting around the loop changes a vector by an amount proportional to Riemann. It vanishes everywhere if and only if the space is flat — this is the honest test, not the look of the metric. In four dimensions it has 20 independent components. Contracting it gives the Ricci tensor R_μν and Ricci scalar R, the ingredients of Einstein's field equations.</p>
</div>
<p>Riemann also controls <strong>geodesic deviation</strong>: the relative acceleration of two nearby free-fall paths is proportional to curvature. Those converging travelers on the sphere were measuring Riemann without knowing it. In the next chapter, two dropped apples converging toward Earth's center will be doing exactly the same thing — and gravity will stand revealed as geometry.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A Foucault pendulum is a physical parallel-transporter: over a day, Earth's rotation carries the pendulum around a circle of latitude, and its swing plane rotates by the holonomy angle of that path on the sphere.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In polar coordinates the flat plane's metric is ds² = dr² + r² dφ². Why does the dφ² term carry the factor r²?",
          options: [
            "Because the plane is curved near the origin",
            "Because a step dφ in angle corresponds to a physical distance r·dφ, larger on bigger circles",
            "Because polar coordinates measure area rather than length",
            "Because the metric must have units of angle",
          ],
          correctIndex: 1,
          explanation:
            "The metric converts coordinate steps into real distances. Walking through one degree of angle carries you farther when you are far from the origin — a distance r·dφ — so the metric weights dφ² by r². The plane is still perfectly flat; only the coordinate description changed. Distinguishing coordinate artifacts from genuine geometry is the core skill of GR.",
        },
        {
          question:
            "What is the honest, coordinate-independent test of whether a space is curved?",
          options: [
            "Whether the Riemann curvature tensor vanishes everywhere",
            "Whether the metric components depend on position",
            "Whether the Christoffel symbols are nonzero",
            "Whether the coordinates are Cartesian",
          ],
          correctIndex: 0,
          explanation:
            "Position-dependent metric components and nonzero Christoffel symbols both occur for the flat plane in polar coordinates — they signal curvy coordinates, not curvy space. The Riemann tensor is a genuine tensor: if it vanishes in one coordinate system it vanishes in all, and the space is flat; if not, no coordinate change can hide the curvature.",
        },
        {
          question:
            "Why are the laws of physics in GR written as tensor equations?",
          options: [
            "Tensors make the equations shorter to write",
            "Only tensors can describe four-dimensional quantities",
            "Tensors automatically include the effects of quantum mechanics",
            "A tensor equation valid in one coordinate system is automatically valid in every coordinate system",
          ],
          correctIndex: 3,
          explanation:
            "Every index of a tensor transforms with the same coordinate-change factors, so if two tensors are equal for one observer, they are equal for all observers, however they move or label events. Physics cannot depend on human bookkeeping choices, and tensor equations are exactly the statements that don't. This is the principle of general covariance.",
        },
        {
          question:
            "A vector is parallel-transported around a closed triangle on a sphere — down from the pole, along the equator, and back up. It returns rotated relative to its starting direction. What does this reveal?",
          options: [
            "The transport was performed incorrectly, since parallel transport never changes a vector",
            "The sphere's coordinate system has a singularity at the pole",
            "The sphere is intrinsically curved — the rotation angle measures the curvature enclosed by the loop",
            "Vectors cannot be defined on curved surfaces",
          ],
          correctIndex: 2,
          explanation:
            "Path-dependence of parallel transport is the defining signature of curvature: on a flat plane any loop returns a vector unchanged, while on a sphere the rotation angle equals the enclosed area divided by R². The Riemann tensor is precisely this rotation-per-unit-loop-area, made local and precise.",
        },
        {
          question:
            "In spacetime, what characterizes the worldline of a freely falling particle between two events?",
          options: [
            "It minimizes the distance traveled through space",
            "It maximizes the proper time recorded by a clock carried along it",
            "It minimizes the proper time, since gravity slows clocks",
            "It always follows the path light would take",
          ],
          correctIndex: 1,
          explanation:
            "Free-fall worldlines are spacetime geodesics, and because of the minus sign in ds² = −dt² + dx² + ..., timelike geodesics maximize proper time rather than minimize length. Toss a ball and its free-fall arc is the route between departure and catch along which a wristwatch ticks the most. Forced detours — like the traveling twin's — always age less.",
        },
      ],
    },
    {
      id: "equivalence-to-field-equations",
      title: "From Equivalence Principle to Field Equations",
      subtitle: "Einstein's 'happiest thought' becomes G = 8πT",
      sections: [
        {
          id: "equivalence-principle",
          title: "The Happiest Thought: Free Fall Erases Gravity",
          content: `
<p>In 1907, still at the Bern patent office, Einstein had what he later called "the happiest thought of my life": <em>a person falling freely from a roof does not feel their own weight</em>. Let go of your keys mid-fall and they float beside you. Locally, free fall doesn't just weaken gravity — it abolishes it.</p>
<p>This works only because of a fact Newton could state but never explain: the mass in F = ma (inertial mass, resistance to push) and the mass in F = GMm/r² (gravitational mass, coupling to gravity) are the same. Drop a hammer and a feather in vacuum and they fall identically, as Apollo 15 demonstrated on the Moon. Eötvös-type torsion-balance experiments confirmed the equality to about one part in 10¹¹ in the 20th century; the MICROSCOPE satellite (2017–2022) pushed it to parts in 10¹⁵. For Newton this was a bizarre coincidence. For Einstein it was the master clue.</p>
<div class="key-concept">
  <h4>The equivalence principle</h4>
  <p>In a small, sealed laboratory, no local experiment can distinguish (a) uniform gravitational field from uniform acceleration, or (b) free fall in gravity from floating in gravity-free space. Gravity, locally, is not a detectable force at all — it can always be transformed away by falling.</p>
</div>
<p>Run the sealed-elevator arguments and physics falls out immediately. Fire a light beam across an elevator accelerating upward at g: during the crossing time the floor gains speed, so the beam strikes the far wall slightly below its launch height — the light path curves. By equivalence, <strong>gravity must bend light</strong>. Send light from the floor of the accelerating elevator to the ceiling: by the time it arrives, the receiver is receding faster than the emitter was moving at emission, so the light arrives Doppler-shifted to the red. By equivalence, <strong>clocks deeper in a gravitational field run slow</strong> — gravitational time dilation, before any field equation has been written.</p>
<p>The word "local" is doing real work. In a large falling laboratory, two dropped balls converge (each falls toward Earth's <em>center</em>) and vertically separated balls drift apart (the lower one falls in stronger gravity). These <strong>tidal effects</strong> cannot be transformed away — they are the part of gravity that is real, and the previous chapter has already told us their name: geodesic deviation, curvature.</p>`,
        },
        {
          id: "gravity-as-geometry",
          title: "Gravity Is Not a Force — It's Geometry",
          content: `
<p>Assemble the clues. Free fall is universal — every object, regardless of mass or composition, follows the same trajectory from the same initial conditions. That is deeply un-force-like: electromagnetism accelerates a proton and an electron oppositely. But it is <em>exactly</em> how geometry behaves. Great circles on a sphere don't care what travels along them. So promote the coincidence to a principle:</p>
<div class="key-concept">
  <h4>The geometric picture of gravity</h4>
  <p>Mass and energy curve spacetime. Freely falling bodies follow the geodesics — the straightest possible worldlines — of that curved geometry. What we call "the force of gravity" is nothing but the mismatch between a geodesic and the non-geodesic path of someone refusing to fall. Standing on the floor, you are the accelerated one: the floor pushes you off your natural free-fall geodesic at 9.8 m/s², which is precisely the weight you feel. In John Wheeler's summary: spacetime tells matter how to move; matter tells spacetime how to curve.</p>
</div>
<p>A common confusion: a thrown ball's arc looks sharply curved, so how can it be a "straight" path? Because the arc lives in space<em>time</em>. A ball tossed across a room traverses maybe 5 meters of space but one full second — 3 × 10⁸ meters — of time. Plot the worldline with both axes in meters and it is a colossal, gentle arc, bent by about the same tiny amount as light's path. Near Earth the curvature is overwhelmingly curvature of <em>time</em>: clocks tick at slightly different rates at different heights, and worldlines bend toward where time runs slower. Newtonian gravity is, almost entirely, time curvature in disguise.</p>
<p>The irreducible remainder — what survives in a freely falling lab — is tidal gravity: nearby geodesics converging or spreading, governed by the Riemann tensor. The Moon's tides on Earth's oceans are literally geodesic deviation you can swim in.</p>
<div class="analogy">
  <h3>Retiring the rubber sheet</h3>
  <p>The bowling-ball-on-a-trampoline picture is everywhere, and it cheats: it explains gravity using gravity (the ball sags because Earth pulls it), shows only space curving when time curvature dominates, and suggests an external dimension to sag into, which intrinsic curvature does not need. Better mental model: a global map grid distorted so that "straight ahead" for different travelers slowly converges — and clocks in the grid ticking at different rates.</p>
</div>`,
        },
        {
          id: "einstein-field-equations",
          title: "The Einstein Field Equations",
          content: `
<p>The equivalence principle says gravity is geometry; now geometry needs an equation of motion. What curves spacetime, and by how much? Einstein's answer, reached in November 1915 after an eight-year struggle:</p>
<p style="text-align:center; font-size:1.15em;"><strong>G_μν ≡ R_μν − ½ g_μν R = (8πG/c⁴) T_μν</strong></p>
<p><strong>The right side — the source.</strong> T_μν is the <strong>stress–energy tensor</strong>: T_00 is energy density, T_0i momentum flux, T_ij pressure and stress. The lesson hiding here is that <em>mass is not the only source of gravity</em> — energy in every form, momentum, and pressure all gravitate. That pressure term will decelerate the expanding universe in Chapter 6, and its sign-flip is the secret of dark energy.</p>
<p><strong>The left side — the response.</strong> R_μν and R are the Ricci contractions of the Riemann tensor, built from the metric and its first and second derivatives. The specific combination G_μν, the <strong>Einstein tensor</strong>, is forced on us: local energy–momentum conservation demands a source with vanishing covariant divergence, ∇^μ T_μν = 0, and the Bianchi identities of Riemannian geometry guarantee ∇^μ G_μν = 0 automatically — while ∇^μ R_μν alone does not vanish. The geometry side is the unique (two-derivative) curvature object that respects conservation. The constant 8πG/c⁴ is then fixed by requiring Newton's law in the appropriate limit, as the next section shows.</p>
<p>Unpacked, this is ten coupled, nonlinear partial differential equations for the ten components of g_μν. The nonlinearity has a physical voice: gravitational fields carry energy, and energy gravitates, so <strong>gravity gravitates</strong>. That is why exact solutions are rare treasures and why two black holes merging must be simulated on supercomputers.</p>
<div class="key-concept">
  <h4>Spacetime is stiff</h4>
  <p>The coupling constant 8πG/c⁴ ≈ 2 × 10⁻⁴³ in SI units. Enormous stress–energy produces minuscule curvature: spacetime is the stiffest "material" in physics. That is why gravity is feeble, why bending starlight takes a star, and why detecting the ripples of Chapter 5 required measuring a thousandth of a proton's width.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein presented the final equations to the Prussian Academy on 25 November 1915 — days after David Hilbert derived essentially the same equations from an action principle. The modern verdict: the physics was Einstein's; Hilbert supplied an elegant route to it, still used today as the Einstein–Hilbert action.</p>
</div>`,
        },
        {
          id: "weak-field-newtonian-limit",
          title: "Recovering Newton: The Weak-Field Limit",
          content: `
<p>Any theory that overthrows Newton must first reproduce him — three centuries of celestial mechanics is not optional. So take the field equations and apply the conditions of the solar system: gravity weak, sources slow, fields static.</p>
<p><strong>Step 1: nearly flat metric.</strong> Write g_μν = η_μν + h_μν with all |h_μν| ≪ 1. For a static, weak field the crucial component turns out to be the time–time one:</p>
<p style="text-align:center;">g_00 = −(1 + 2Φ/c²)</p>
<p>where Φ is, for now, just a name for the small perturbation.</p>
<p><strong>Step 2: slow-motion geodesics.</strong> For a particle with v ≪ c, the geodesic equation d²x^μ/dτ² + Γ^μ_αβ (dx^α/dτ)(dx^β/dτ) = 0 is dominated by the time–time Christoffel term, and grinding through it gives</p>
<p style="text-align:center;">d²<strong>x</strong>/dt² = −∇Φ</p>
<p>This is exactly Newton's equation of motion if Φ is the Newtonian gravitational potential. The geodesics of a slightly warped <em>time</em> reproduce every falling apple and every Keplerian orbit — confirming that Newtonian gravity is time curvature.</p>
<p><strong>Step 3: the field equation.</strong> Insert the same weak metric into the 00 component of G_μν = (8πG/c⁴)T_μν, with T_00 = ρc² for ordinary matter. The result:</p>
<p style="text-align:center;">∇²Φ = 4πGρ</p>
<p>— Poisson's equation, the field form of Newtonian gravity. This is the calculation that fixes the constant 8πG/c⁴: any other value would get the solar system wrong.</p>
<div class="key-concept">
  <h4>How big are the corrections?</h4>
  <p>The expansion parameter is Φ/c² ≈ GM/rc². At Earth's surface it is 7 × 10⁻¹⁰; at the Sun's surface 2 × 10⁻⁶; even at the Sun's photosphere GR is a part-per-million correction to Newton. That is why Newton reigned for 250 years — and why the first tests of GR (Chapter 3) had to be precision measurements of tiny anomalies: 43 arcseconds per century, 1.75 arcseconds of bending, microseconds per day on GPS clocks. The regime where Φ/c² → 1 is the regime of black holes.</p>
</div>
<p>The weak-field limit is more than a consistency check — it is the template for how physics grows: the new theory contains the old as a limiting case, inherits all its successes, and tells you precisely where to look for the differences.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Inside a small, windowless laboratory, you feel yourself pressed to the floor with your normal weight. According to the equivalence principle, what can you conclude?",
          options: [
            "You are certainly at rest on a planet's surface",
            "You are certainly aboard an accelerating rocket",
            "You cannot tell by any local experiment whether you are in uniform gravity or accelerating at g through empty space",
            "You could distinguish the two cases by dropping objects of different masses",
          ],
          correctIndex: 2,
          explanation:
            "Uniform gravity and uniform acceleration are locally indistinguishable — that is the equivalence principle. Dropping different masses doesn't help: they fall identically in gravity (universality of free fall) and identically in the rocket (the floor accelerates up to meet them). Only over an extended region, where tidal effects appear, do the cases differ.",
        },
        {
          question:
            "In a large freely falling laboratory, two balls released side by side slowly drift toward each other. What is this effect?",
          options: [
            "An error — free fall removes all gravitational effects",
            "Tidal gravity: each ball falls toward Earth's center along a converging geodesic, and this residual effect is spacetime curvature",
            "Air resistance pushing the balls together",
            "The gravitational attraction between the two balls themselves",
          ],
          correctIndex: 1,
          explanation:
            "Free fall cancels gravity only locally, at a point. Over a finite region, the directions of 'down' at the two balls' positions differ slightly, so their free-fall geodesics converge. This tidal effect cannot be transformed away by any choice of falling frame — it is geodesic deviation, the honest, coordinate-proof content of gravity, measured by the Riemann tensor.",
        },
        {
          question:
            "In the Einstein field equations G_μν = (8πG/c⁴) T_μν, what acts as the source of spacetime curvature?",
          options: [
            "The full stress–energy tensor: energy density, momentum flux, and pressure — not mass alone",
            "Rest mass only, as in Newtonian gravity",
            "Electric charge and current",
            "The gravitational potential Φ",
          ],
          correctIndex: 0,
          explanation:
            "T_μν packages every form of energy and momentum: T_00 is energy density, T_0i momentum flow, T_ij pressure and stress. All of it gravitates. The pressure contribution is a genuinely new prediction beyond Newton — it decelerates the expanding universe, and an effective negative pressure (dark energy) accelerates it.",
        },
        {
          question:
            "Why does the geometry side of the field equations use the Einstein tensor G_μν = R_μν − ½g_μν R rather than the Ricci tensor R_μν alone?",
          options: [
            "G_μν is easier to compute than R_μν",
            "R_μν vanishes in vacuum, so it could not describe gravity outside a star",
            "G_μν has fewer components than R_μν",
            "G_μν automatically has zero covariant divergence, matching the conservation law ∇^μ T_μν = 0 obeyed by the source",
          ],
          correctIndex: 3,
          explanation:
            "Energy–momentum conservation requires the source T_μν to be covariantly divergence-free, so the geometry it equals must be too. The Bianchi identities guarantee ∇^μ G_μν = 0 identically, while ∇^μ R_μν ≠ 0 in general — equating R_μν to T_μν would contradict conservation. The mathematics of curvature and the physics of conservation click together in exactly one way.",
        },
        {
          question:
            "In the weak-field, slow-motion limit, general relativity reproduces Newtonian gravity. Which metric component carries the Newtonian potential?",
          options: [
            "The purely spatial components, g_ij",
            "The time–time component: g_00 = −(1 + 2Φ/c²)",
            "The off-diagonal components g_0i",
            "None — the Newtonian limit does not involve the metric",
          ],
          correctIndex: 1,
          explanation:
            "For slow particles in a weak static field, the geodesic equation is dominated by g_00, and setting g_00 = −(1 + 2Φ/c²) turns it into d²x/dt² = −∇Φ, while the 00 field equation becomes Poisson's equation ∇²Φ = 4πGρ. Everyday gravity is almost entirely the curvature of time: clocks at different heights tick at different rates, and trajectories bend toward where time runs slow.",
        },
      ],
    },
    {
      id: "schwarzschild-solution",
      title: "The Schwarzschild Solution",
      subtitle: "The classic tests — precession, light bending, redshift, GPS",
      sections: [
        {
          id: "schwarzschild-metric",
          title: "The First Exact Solution",
          content: `
<p>Within weeks of Einstein's November 1915 papers, Karl Schwarzschild — a 42-year-old astronomer serving on the Russian front, calculating artillery trajectories by day — found the first exact solution of the field equations: the spacetime outside any static, spherically symmetric mass M. In Schwarzschild coordinates:</p>
<p style="text-align:center;">ds² = −(1 − r_s/r) c²dt² + dr²/(1 − r_s/r) + r²(dθ² + sin²θ dφ²)</p>
<p>where everything hinges on one length, the <strong>Schwarzschild radius</strong>:</p>
<p style="text-align:center;">r_s = 2GM/c²</p>
<p>For the Sun, r_s ≈ 2.95 km; for Earth, 8.9 mm — crush Earth inside a marble and it would become a black hole. Since real stars and planets are vastly larger than their r_s, the solution describes the exterior gravity of essentially every astronomical body, and r_s/r is tiny everywhere outside them (2 × 10⁻⁶ at the Sun's surface). Far away, r_s/r → 0 and the metric smoothly becomes flat Minkowski spacetime, as it must.</p>
<p>Read the metric like an instrument panel. The g_00 factor says a clock held at radius r ticks slower than one at infinity by √(1 − r_s/r): <strong>gravitational time dilation</strong>, now exact. The g_rr factor says radial rulers are stretched: the measured distance between two spheres exceeds the difference of their r coordinates. And a warning about r itself: it is defined so a sphere at coordinate r has area 4πr² — an "areal radius," not a measured distance to the center. Coordinates in GR are labels; only the metric converts them to measurements.</p>
<div class="key-concept">
  <h4>Birkhoff's theorem</h4>
  <p>Schwarzschild's solution is stronger than it looks: any spherically symmetric vacuum spacetime is Schwarzschild — even outside a pulsating or collapsing star. Spherical dynamics produce no external ripples (this is why gravitational waves will require asymmetry), just as, in electromagnetism, a pulsating charged sphere radiates nothing.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Schwarzschild mailed his solution to Einstein from the front. Einstein replied: "I had not expected that one could formulate the exact solution of the problem in such a simple way." Six months later Schwarzschild was dead of an autoimmune disease contracted in the war. The strange behavior of his metric at r = r_s would take another 40 years to understand — that story is Chapter 4.</p>
</div>`,
        },
        {
          id: "orbits-effective-potential",
          title: "Orbits and the Effective Potential",
          content: `
<p>How does a planet move in Schwarzschild spacetime? Exactly as in Newtonian mechanics, symmetry does the heavy lifting: the metric is independent of t and φ, so orbits conserve an energy E and an angular momentum L. Feeding these into the geodesic equation reduces the problem to one-dimensional radial motion in an <strong>effective potential</strong> — the same trick as Subject 5's orbits, with one fateful new term:</p>
<p style="text-align:center;">V_eff(r) = −GM/r + L²/2r² − GML²/c²r³</p>
<p>The first two terms are pure Newton: gravitational attraction against the centrifugal barrier, whose competition produces stable ellipses at every radius. The third term is general relativity's contribution — an extra attraction that strengthens like 1/r³ and, at small radii, overwhelms the centrifugal barrier entirely.</p>
<p>The consequences reshape the inner landscape:</p>
<ul>
  <li><strong>Circular orbits</strong> exist where V_eff is flat: a stable one (potential minimum) and, novelty number one, an unstable one (maximum) closer in.</li>
  <li><strong>The ISCO.</strong> As L decreases, minimum and maximum merge; below r = 6GM/c² (three Schwarzschild radii) <em>no stable circular orbit exists at all</em>. Matter spiraling through an accretion disk reaches this innermost stable circular orbit and then plunges. The ISCO sets the inner edge of black-hole accretion disks and the ~10% mass-to-energy efficiency that makes quasars outshine galaxies.</li>
  <li><strong>The photon sphere.</strong> Light itself can orbit, unstably, at r = 1.5 r_s — the origin of the bright ring in the Event Horizon Telescope images.</li>
  <li><strong>Capture.</strong> A particle with too little angular momentum no longer whips around the center Newton-style; it spirals in and is swallowed.</li>
</ul>
<div class="key-concept">
  <h4>Why the correction matters even for Mercury</h4>
  <p>Far from r_s the new term is minuscule — but it has a qualitative signature. In pure 1/r gravity, bound orbits are closed ellipses (a special, fragile property of the inverse square law). Any 1/r³ contamination makes the ellipse fail to close: the orbit's long axis slowly rotates. That rotation is the perihelion precession, and Mercury has been broadcasting it for centuries.</p>
</div>`,
        },
        {
          id: "perihelion-precession",
          title: "Mercury's 43 Seconds of Arc",
          content: `
<p>By the 1850s, Urbain Le Verrier — celebrated for predicting Neptune from Uranus's wobbles — had assembled two centuries of Mercury transits and found a scandal. Mercury's perihelion precesses by about 574 arcseconds per century. Planetary perturbations (mostly Venus and Jupiter) account for 531″. The remaining <strong>43″ per century</strong> refused every explanation: a new planet "Vulcan" inside Mercury's orbit (searched for during eclipses, never found), solar oblateness, dust, even tweaks to the exponent in Newton's law. The anomaly sat in the books for sixty years.</p>
<p>The GR calculation comes straight from the effective potential's 1/r³ term. Perturbing the orbit equation yields a perihelion advance per orbit of</p>
<p style="text-align:center;">Δφ = 6πGM/[c²a(1 − e²)]</p>
<p>where a is the semi-major axis and e the eccentricity. Now the numbers, for Mercury: GM_sun/c² = 1.48 km, a = 5.79 × 10⁷ km, e = 0.206, so</p>
<p style="text-align:center;">Δφ = 6π × 1.48 / [5.79 × 10⁷ × (1 − 0.0424)] ≈ 5.0 × 10⁻⁷ rad per orbit ≈ 0.104″ per orbit</p>
<p>Mercury completes 415 orbits per century: 0.104″ × 415 ≈ <strong>43″ per century</strong>. The formula also explains why Mercury shows the effect best: closest to the Sun (small a), notably eccentric orbit (measurable perihelion), fastest repetition. Venus and Earth show 8.6″ and 3.8″ per century — both since confirmed.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein performed this computation in mid-November 1915, with the field equations barely a week old and no adjustable parameters available. When 43″ emerged, he wrote that he had heart palpitations and was "beside myself with joyous excitement" for days. Unlike the later eclipse test, this was a <em>postdiction</em> of impeccable data — many historians count it as the moment Einstein himself knew the theory was true.</p>
</div>
<p>The modern sequel: the double pulsar PSR J0737−3039 precesses not 43″ per century but 16.9° per <em>year</em> — the same physics, four million times stronger, tracked to five decimal places. GR keeps passing.</p>`,
        },
        {
          id: "light-bending-and-redshift",
          title: "Bending Starlight, Shifting Clocks",
          content: `
<p>Light follows null geodesics — paths with ds² = 0 — and in Schwarzschild spacetime those paths bend near mass. A ray grazing a body of mass M at impact parameter b deflects by</p>
<p style="text-align:center;">δφ = 4GM/(c²b)</p>
<p>For sunlight-grazing starlight: δφ = 4 × 1.48 km / 696,000 km ≈ 8.5 × 10⁻⁶ rad = <strong>1.75 arcseconds</strong>. The factor 4 matters historically: a naive "Newtonian" calculation (light as ballistic particles, or equivalence principle alone) gives half this, 0.87″. The other half comes from the curvature of <em>space</em> — the g_rr part of the metric — which Newton has no counterpart for. Measuring the deflection was therefore a clean three-way vote: no bending (light immune to gravity), 0.87″ (gravity without geometry), or 1.75″ (Einstein).</p>
<p>The vote was held on 29 May 1919, at a total solar eclipse. Arthur Eddington's expeditions to Príncipe (West Africa) and Sobral (Brazil) photographed the Hyades star cluster around the darkened Sun and compared with night-sky plates: the stars' apparent positions were displaced outward by ≈ 1.6″ ± 0.3″ — Einstein's value, Newton's excluded. The 7 November headlines ("Revolution in science — Newtonian ideas overthrown") made Einstein globally famous overnight. Modern versions are no longer close calls: radio interferometry of quasars passing behind the Sun confirms the GR deflection to 0.01%, and the effect, scaled up, has become a tool — gravitational lensing now weighs galaxy clusters and maps dark matter.</p>
<div class="key-concept">
  <h4>Gravitational redshift — the third classic test</h4>
  <p>Schwarzschild's g_00 says a clock at radius r runs slow by √(1 − r_s/r); a photon climbing out of a gravity well arrives with lower frequency, shifted by Δf/f ≈ gh/c² over height h in a uniform field. In 1959 Pound and Rebka measured it in a 22.5 m tower at Harvard using the Mössbauer effect: predicted fractional shift 2.5 × 10⁻¹⁵, confirmed to 10%, later to 1%. The white dwarf Sirius B shows the same physics astronomically — and the next section shows it steering your car.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein had asked astronomers to test light bending during a 1914 eclipse in Crimea. The expedition was interned when World War I broke out — luckily for Einstein, whose 1914 theory still predicted the wrong value, 0.87″. The war that delayed the test saved the prediction.</p>
</div>`,
        },
        {
          id: "gps-relativity",
          title: "GPS: Relativity in Your Pocket",
          content: `
<p>Every GPS fix is a timing measurement: your receiver compares time-stamped signals from several satellites, converting time differences to distances at the speed of light. Light travels 30 cm per nanosecond, so meter-level positioning demands nanosecond-level clock integrity. At that precision, both of Einstein's theories move from philosophy to engineering.</p>
<p>GPS satellites orbit at altitude 20,200 km (r ≈ 26,600 km) moving at about 3.9 km/s. Two relativistic effects pull their atomic clocks away from ground time:</p>
<ul>
  <li><strong>Special relativity — clocks slow.</strong> Time dilation at speed v: Δt/t ≈ −v²/2c² = −(3900)²/(2 × 9 × 10¹⁶) ≈ −8.4 × 10⁻¹¹, i.e. the orbiting clock <em>loses</em> about <strong>7 μs per day</strong>.</li>
  <li><strong>General relativity — clocks fast.</strong> The satellite sits higher in Earth's potential well than we do. The rate difference is ΔΦ/c² = (GM/c²)(1/r_earth − 1/r_orbit) ≈ 5.3 × 10⁻¹⁰, so the clock <em>gains</em> about <strong>45.7 μs per day</strong>.</li>
</ul>
<p>The gravitational effect wins by more than six to one. Net: satellite clocks run fast by roughly 45.7 − 7.1 ≈ <strong>38.6 μs per day</strong>.</p>
<div class="key-concept">
  <h4>What ignoring Einstein would cost</h4>
  <p>An uncorrected 38.6 μs/day timing error corresponds to c × 38.6 μs ≈ 11.6 km of accumulated ranging error <em>per day</em> — GPS would be useless within hours. The fix is baked into the hardware: satellite clocks are manufactured to tick at 10.22999999543 MHz instead of the nominal 10.23 MHz, a fractional offset of −4.465 × 10⁻¹⁰, so that from the ground they appear to tick perfectly. Receivers apply a further small correction for each satellite's orbital eccentricity. Every phone-map bluedot is a running experimental confirmation of both relativities.</p>
</div>
<p>A pleasing footnote: the two effects cancel exactly for a circular orbit at r ≈ 9,550 km altitude (about 1.5 Earth radii up). Satellites below that altitude — like the ISS — have clocks that run net <em>slow</em>; satellites above, like GPS, run net fast. Astronauts on the ISS age a few milliseconds less over a six-month tour; GPS satellites age a few milliseconds more per decade. Time, as Chapter 2 promised, is a local affair.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "The Schwarzschild radius of the Sun is about 3 km, yet the Sun's actual radius is 696,000 km. What does this imply?",
          options: [
            "The Sun is on the verge of becoming a black hole",
            "The Schwarzschild solution does not apply to the Sun",
            "Solar-system gravity is deep in the weak-field regime, with r_s/r at most a few parts per million — GR appears only as tiny corrections to Newton",
            "The Sun's gravity cannot bend light",
          ],
          correctIndex: 2,
          explanation:
            "The Schwarzschild metric describes the vacuum outside any spherical mass; the ratio r_s/r measures how relativistic the situation is. At the Sun's surface it is 2 × 10⁻⁶, so GR corrections are parts-per-million effects — 43″/century for Mercury, 1.75″ of light bending. Only when an object is compressed near its own r_s (a black hole) does r_s/r approach 1 and gravity turn strong.",
        },
        {
          question:
            "What does general relativity add to the Newtonian effective potential for orbits, and what is its most dramatic consequence?",
          options: [
            "An extra repulsive term that prevents anything from falling in",
            "An extra attractive term ∝ −1/r³ that overwhelms the centrifugal barrier at small radii, so no stable circular orbits exist inside r = 6GM/c²",
            "A term that makes all orbits perfectly circular",
            "Nothing — GR orbits are identical to Newtonian ones",
          ],
          correctIndex: 1,
          explanation:
            "The relativistic term −GML²/c²r³ grows faster at small r than the centrifugal L²/2r² barrier, so close enough in, attraction always wins. Stable and unstable circular orbits merge at the ISCO, r = 6GM/c²; inside it matter plunges. This sets the inner edge of accretion disks and, at larger radii, the same term makes elliptical orbits precess — Mercury's 43 arcseconds.",
        },
        {
          question:
            "Mercury's perihelion precesses by about 574″ per century. What part of this did general relativity famously explain?",
          options: [
            "The 43″ per century left over after subtracting the 531″ caused by the gravitational tugs of the other planets",
            "All 574″, which Newtonian theory could not touch",
            "Only 8.6″ per century, with the rest still unexplained",
            "The precession direction, but not its size",
          ],
          correctIndex: 0,
          explanation:
            "Newtonian perturbations by Venus, Jupiter, and the rest account for 531″ per century. The stubborn 43″ residual defied explanation for sixty years — a phantom planet 'Vulcan' was even hunted. Einstein's November 1915 calculation, Δφ = 6πGM/[c²a(1−e²)] × 415 orbits, produced 43″ with no free parameters. He reported heart palpitations.",
        },
        {
          question:
            "Why was the 1919 eclipse measurement of 1.75″ light deflection specifically a triumph for general relativity rather than for a 'Newtonian' theory of light bending?",
          options: [
            "Newtonian physics predicts light cannot be affected by gravity at all",
            "The Newtonian and Einsteinian predictions were identical, but Einstein published first",
            "The measured bending was smaller than every prediction",
            "A ballistic/equivalence-principle estimate gives only half the value, 0.87″; the other half comes from spatial curvature, which only GR contains",
          ],
          correctIndex: 3,
          explanation:
            "Treating light as falling particles — or using the equivalence principle in the time part of the metric alone — yields 0.87″. GR doubles this because the spatial geometry around the Sun is also curved (the g_rr factor), and light, moving fast, samples space and time curvature equally. Eddington's 1.6″ ± 0.3″ picked Einstein over both alternatives; modern radio measurements confirm GR to 0.01%.",
        },
        {
          question:
            "GPS satellite clocks are deliberately set to tick slightly slow before launch. Why?",
          options: [
            "To compensate for signal delays in Earth's ionosphere",
            "Because at orbital altitude the gravitational speed-up (≈ +45.7 μs/day) outweighs the special-relativistic slow-down (≈ −7 μs/day), so uncorrected clocks would run ≈ 38.6 μs/day fast — an 11 km/day ranging error",
            "Because cosmic radiation makes atomic clocks in space drift fast",
            "To synchronize with the slower rotation of the satellites",
          ],
          correctIndex: 1,
          explanation:
            "Two relativistic effects compete: orbital speed slows the clocks (special relativity, −7 μs/day), while sitting higher in Earth's gravity well speeds them up (general relativity, +45.7 μs/day). The net +38.6 μs/day, times the speed of light, would corrupt positions by over 11 km per day. The factory offset — 10.22999999543 MHz instead of 10.23 MHz — makes the orbiting clocks appear to tick at ground rate.",
        },
      ],
    },
    {
      id: "black-holes",
      title: "Black Holes",
      subtitle: "Event horizons, rotating Kerr holes, and Hawking's thermodynamics",
      sections: [
        {
          id: "event-horizon",
          title: "The Event Horizon: A One-Way Membrane",
          content: `
<p>The Schwarzschild metric misbehaves at r = r_s = 2GM/c²: g_00 vanishes and g_rr blows up. For decades this was dismissed as unphysical — no known star was compact enough to expose it. Understanding what actually happens there took until the late 1950s, and the answer created the modern subject of black holes.</p>
<p>The blow-up at r_s is a <strong>coordinate singularity</strong> — a defect of the map, not the territory, like the convergence of meridians at the North Pole. Compute genuine curvature invariants and they are perfectly finite at r_s (of order 1/r_s², tiny for a big hole); switch to better-adapted coordinates and the metric is smooth there. An astronaut falling through the horizon of a supermassive black hole notices <em>nothing locally</em> — no barrier, no jolt, no sign in spacetime. The singularity at r = 0 is another matter entirely: there curvature truly diverges, and the theory breaks down.</p>
<div class="key-concept">
  <h4>What the horizon really is</h4>
  <p>The surface r = r_s is the <strong>event horizon</strong>: the boundary of the region from which no signal, not even light, can reach the outside universe. Inside it, the light cones have tipped so far that all future-directed paths lead inward — moving outward at r &lt; r_s is as impossible as moving into last Tuesday. It is a one-way membrane defined globally by causal structure, not a material surface. "Escape velocity equals c" is a decent mnemonic but understates it: escape is not hard from inside, it is <em>geometrically undefined</em>.</p>
</div>
<p>Distant observers see something stranger. Watching a probe fall in, they receive signals increasingly redshifted (the √(1 − r_s/r) factor) and increasingly delayed; the probe appears to slow, freeze, and fade at the horizon, its final approach stretched over infinite coordinate time. Yet on the probe's own clock the crossing takes finite, unremarkable proper time. Both descriptions are correct — they answer different questions, and holding both at once is the mark of really understanding GR.</p>
<p>A final austerity: the <strong>no-hair theorem</strong>. Whatever collapses to form a black hole — stars, textbooks, antimatter — the final stationary hole is described completely by just three numbers: mass, spin, and electric charge. All other information about what fell in is (classically) erased from the outside universe. Keep that word "erased" in mind; Hawking will make trouble with it.</p>`,
        },
        {
          id: "inside-the-hole",
          title: "Falling In: Tides, Time, and the Singularity",
          content: `
<p>What is it actually like to fall into a black hole? The metric answers quantitatively, and the answers overturn most science-fiction intuitions.</p>
<p><strong>Tides come first — sometimes.</strong> Free fall cancels uniform gravity but not tidal gravity: your feet, nearer the center, are pulled harder than your head. The tidal stretching at radius r scales as GM/r³, so at the horizon (r ≈ 2GM/c²) it scales as <em>1/M²</em> — bigger holes are gentler. For a stellar black hole of 10 solar masses, tides reach lethal levels (~10 g across a body) hundreds of kilometers <em>outside</em> the horizon: you are "spaghettified" before you cross. For the 4-million-solar-mass hole at the galactic center, Sgr A*, horizon tides are a millionth of Earth's surface gravity gradient — you would cross without feeling a thing.</p>
<p><strong>Inside, space and time trade jobs.</strong> For r &lt; r_s the metric coefficient (1 − r_s/r) changes sign: the r direction becomes timelike. Decreasing r is no longer a direction you can resist any more than you can resist tomorrow. The singularity at r = 0 is therefore not a place to steer around but a <em>moment in your future</em> — collapse is guaranteed by causality itself. Firing rockets outward doesn't help; a straight free fall maximizes your remaining proper time, which from horizon to singularity is at most about πGM/c³: roughly 15 microseconds for a stellar hole, around 20 minutes for a billion-solar-mass quasar engine.</p>
<div class="key-concept">
  <h4>What the singularity means</h4>
  <p>At r = 0 curvature invariants diverge and general relativity stops predicting. Nobody believes infinite curvature is physical; the singularity is a signpost reading "quantum gravity needed here." The Penrose singularity theorem (1965, Nobel 2020) proved singularities are not artifacts of perfect symmetry but generic consequences of collapse — classical GR predicts, honestly, its own breakdown.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Black holes are no longer theoretical. Stellar-mass holes are weighed in X-ray binaries and LIGO mergers; the Event Horizon Telescope imaged the shadow and photon ring of M87* (6.5 billion solar masses) in 2019 and Sgr A* in 2022; and stars have been tracked through complete orbits around Sgr A* — one, S2, sweeps past at 3% of light speed, its orbit precessing exactly as Schwarzschild predicts.</p>
</div>`,
        },
        {
          id: "kerr-and-frame-dragging",
          title: "Kerr: The Black Holes Nature Actually Makes",
          content: `
<p>Real stars rotate, and collapsing cores spin up like ice skaters pulling in their arms — so real black holes rotate, often rapidly. The exact solution for a rotating hole eluded relativists for 48 years until Roy Kerr found it in 1963. The <strong>Kerr metric</strong>, labeled by mass M and spin parameter a = J/Mc (with a maximum a = GM/c²), is by the no-hair theorem the complete description of every uncharged astrophysical black hole in the universe.</p>
<p>Rotation adds a phenomenon with no Newtonian counterpart: <strong>frame dragging</strong>. A spinning mass drags spacetime itself around with it. A gyroscope near a rotating body slowly precesses; a probe dropped straight toward a Kerr hole picks up sideways motion, not because a force pushes it but because "straight toward the center" is itself being swept around. The effect is real and measured: Gravity Probe B (2011) detected Earth's minuscule frame dragging — a gyroscope precession of 39 milliarcseconds per year, matching GR — and laser-ranged satellites confirm it independently.</p>
<div class="key-concept">
  <h4>The ergosphere</h4>
  <p>Near a Kerr hole, frame dragging becomes irresistible. Outside the horizon lies the <strong>ergosphere</strong>, an oblate region where spacetime is dragged around faster than light can locally counter it: no rocket, however powerful, can hover at fixed coordinates there — everything <em>must</em> corotate. Yet the ergosphere is not inside the horizon; you can dip in and escape. Penrose showed in 1969 that a particle splitting inside the ergosphere can exit carrying more energy than it entered with, the excess extracted from the hole's rotation. Up to 29% of a maximally spinning hole's mass-energy is extractable this way — and magnetic versions of this process (Blandford–Znajek) are the leading engine for the relativistic jets that active galaxies fire across megaparsecs.</p>
</div>
<p>Spin also reshapes orbits. For a maximally rotating hole, the ISCO for prograde orbits moves from 6GM/c² down to GM/c², letting accreting gas release up to 42% of its rest energy — the reason quasars are the most efficient sustained power sources known. Iron-line spectroscopy and continuum fitting of X-ray binaries measure these spins: several, like Cygnus X-1, are near-extremal.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Kerr found his solution in a few weeks of calculation after spotting a simplifying structure others had missed. Chandrasekhar later called the exact match between this mathematics and the astronomical universe "the most shattering experience" of his scientific life.</p>
</div>`,
        },
        {
          id: "black-hole-thermodynamics",
          title: "Black-Hole Thermodynamics and the Hawking Glimpse",
          content: `
<p>In 1971 Hawking proved the <strong>area theorem</strong>: in any classical process, the total event-horizon area never decreases. Merge two holes and the final horizon exceeds the sum of the originals. A quantity that only ever increases — Jacob Bekenstein, a Princeton graduate student, took the analogy with entropy literally and proposed that a black hole <em>has</em> entropy proportional to its horizon area. Hawking initially objected: things with entropy have temperature, and things with temperature radiate, which a black hole by definition cannot.</p>
<p>Then in 1974 Hawking did the calculation that settled it against himself. Quantum field theory in the curved spacetime near a horizon implies that black holes radiate a perfect thermal spectrum at the <strong>Hawking temperature</strong>:</p>
<p style="text-align:center;">T = ħc³/(8πGMk_B) ≈ 6 × 10⁻⁸ K × (M_sun/M)</p>
<p>Heuristically: vacuum fluctuations create virtual particle pairs; near the horizon one partner can fall in carrying negative energy while the other escapes to infinity as real radiation, paid for by the hole's mass. The temperature formula is a landmark in itself — the only known equation uniting ħ (quantum), c (relativity), G (gravity), and k_B (thermodynamics).</p>
<p>The entropy comes out as S = k_B c³A/(4Għ) — one quarter of the horizon area measured in Planck-length squares. The numbers are staggering: a solar-mass black hole has S ≈ 10⁷⁷ k_B, versus the Sun's 10⁵⁸ — collapse multiplies entropy by 10¹⁹, making black holes the most entropic objects possible. Meanwhile the temperature is absurdly cold: 60 nanokelvin for a solar-mass hole, far below the 2.7 K microwave background, so astrophysical holes currently absorb more than they emit. Only in a far future, once the universe cools below a hole's temperature, would evaporation win — taking ~10⁶⁷ years for a stellar hole, with (in the naive picture) a final flash as T → ∞ at small mass.</p>
<div class="key-concept">
  <h4>The information paradox — the crack in the foundations</h4>
  <p>Hawking's radiation is exactly thermal: it depends only on M, spin, and charge, remembering nothing about what fell in. If the hole evaporates completely, the information in whatever formed it seems destroyed — but quantum mechanics forbids information destruction. This clash between our two best theories, sharpened in 1976 and still not fully resolved, has driven black-hole physics for fifty years (entanglement entropy, holography, the AdS/CFT correspondence). Current consensus leans toward information escaping, subtly encoded in the radiation — but the mechanism remains the sharpest known clue to quantum gravity. Subject 34 picks up this thread.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An astronaut falls through the event horizon of a supermassive black hole. What do they experience at the moment of crossing?",
          options: [
            "An impassable wall of frozen infalling matter",
            "Instant spaghettification by tidal forces",
            "Nothing locally remarkable — the horizon is a globally defined causal boundary, not a material surface, and curvature there is mild for a large hole",
            "Time stops for them permanently",
          ],
          correctIndex: 2,
          explanation:
            "The metric's misbehavior at r_s is a coordinate artifact; genuine curvature at the horizon scales as 1/M² and is tiny for a supermassive hole — tidal forces there can be gentler than Earth's. The horizon's significance is causal, not local: after crossing, no signal can ever reach the outside. Spaghettification happens near the central singularity (or, for small holes, outside the horizon).",
        },
        {
          question:
            "A distant observer watches a probe fall toward the horizon. The probe appears to slow down, redden, and fade without ever crossing. Meanwhile the probe's own clock shows an ordinary, finite crossing time. How can both be true?",
          options: [
            "The distant observer's telescope is defective at high redshift",
            "The probe genuinely never crosses; horizons cannot be entered",
            "The probe crosses in coordinate time but not in proper time",
            "Signals from near the horizon are infinitely delayed and redshifted on their way out, so the outside view freezes even though the crossing happens in finite proper time",
          ],
          correctIndex: 3,
          explanation:
            "Gravitational time dilation diverges at the horizon: light emitted just outside r_s takes arbitrarily long to climb out and arrives arbitrarily redshifted, so the external movie asymptotically freezes. The probe's own experience — governed by its proper time τ — is a smooth, finite fall. GR routinely requires holding two observer-dependent accounts of one event sequence; neither is 'the' truth alone.",
        },
        {
          question:
            "What is the ergosphere of a rotating (Kerr) black hole?",
          options: [
            "A region outside the horizon where frame dragging forces everything to corotate with the hole, yet from which escape — even with extra energy extracted from the hole's spin — is still possible",
            "The region inside the event horizon where the singularity resides",
            "The hot inner edge of the accretion disk",
            "A magnetic field zone that repels infalling charged matter",
          ],
          correctIndex: 0,
          explanation:
            "Inside the ergosphere, spacetime is dragged around faster than light can locally oppose, so hovering at fixed coordinates is impossible — but it lies outside the horizon, so entry is not a commitment. Penrose showed that particles splitting there can leave with more energy than they brought, mined from the hole's rotation; magnetized versions of this mechanism likely power the jets of active galaxies.",
        },
        {
          question:
            "According to Hawking, a black hole radiates with temperature T ∝ 1/M. Which statement follows?",
          options: [
            "Massive black holes are the hottest objects in the universe",
            "A solar-mass hole (T ≈ 6 × 10⁻⁸ K) is far colder than the 2.7 K cosmic background, so today it absorbs more than it radiates; only small holes are hot and evaporate quickly",
            "All black holes evaporate at the same rate regardless of mass",
            "Hawking radiation makes black holes grow",
          ],
          correctIndex: 1,
          explanation:
            "The inverse mass dependence means big holes are cold and long-lived — a stellar hole would need ~10⁶⁷ years to evaporate and cannot even begin until the universe cools below its 60 nK temperature — while a hypothetical mountain-mass hole would blaze and explode. As a hole loses mass it gets hotter, so evaporation accelerates: a runaway ending, in the naive extrapolation, with a flash.",
        },
        {
          question:
            "Why does Hawking radiation create a paradox with quantum mechanics?",
          options: [
            "The radiation travels faster than light",
            "It violates energy conservation, since the radiation comes from nothing",
            "The radiation is purely thermal — depending only on mass, spin, and charge — so if the hole evaporates completely, the detailed information about everything that fell in seems permanently destroyed, which quantum theory forbids",
            "Quantum mechanics predicts black holes cannot exist",
          ],
          correctIndex: 2,
          explanation:
            "Quantum evolution is unitary: information is never destroyed, only scrambled. But no-hair plus thermal Hawking radiation implies the final radiation remembers nothing about the star, books, or spacecraft that formed and fed the hole. Energy is conserved (the hole's mass pays for the radiation) — it is the information ledger that fails. Resolving this clash between GR and quantum mechanics is a central engine of quantum-gravity research.",
        },
      ],
    },
    {
      id: "gravitational-waves",
      title: "Gravitational Waves",
      subtitle: "Ripples in spacetime — the physics of LIGO",
      sections: [
        {
          id: "linearized-theory",
          title: "Linearized Gravity: Spacetime Learns to Wave",
          content: `
<p>Newtonian gravity is instantaneous — wiggle a mass and the whole universe's field updates at once, flatly contradicting relativity. Einstein's equations repair this, and the repair has a life of its own. Write the metric as flat spacetime plus a small ripple, g_μν = η_μν + h_μν with |h_μν| ≪ 1, keep only terms linear in h, and (in a convenient gauge) the field equations collapse to</p>
<p style="text-align:center;">□ h_μν = −(16πG/c⁴) T_μν</p>
<p>— a wave equation. Disturbances of spacetime geometry propagate at exactly c: <strong>gravitational waves</strong>, predicted by Einstein in 1916.</p>
<p>Their character, from the same analysis: the waves are <strong>transverse</strong>, with two polarizations called plus (+) and cross (×). A passing plus-polarized wave alternately stretches space along one axis while squeezing it along the perpendicular axis, then swaps, at the wave frequency; cross does the same rotated 45°. A ring of freely floating test particles breathes into an ellipse, then into the perpendicular ellipse — that oscillating pattern is what any detector must catch.</p>
<p>What radiates? In electromagnetism the leading emitter is an oscillating dipole. Gravity has no dipole radiation: mass has one sign, and momentum conservation freezes the mass dipole's oscillation. The leading gravitational radiation is <strong>quadrupole</strong> — it takes a mass distribution changing <em>shape</em> asymmetrically. Spheres, however violently pulsating, emit nothing (Birkhoff's theorem again); spinning axisymmetric bodies emit nothing. The great emitters are close binary systems: two masses orbiting are a rotating quadrupole par excellence.</p>
<p>The emitted power carries a lethal prefactor of G/c⁵ ~ 10⁻⁵³ — spacetime's stiffness once more. A ton of steel spun to bursting radiates ~10⁻³⁰ watts; laboratory generation is hopeless. Only astronomical masses at relativistic speeds radiate meaningfully, and compact binaries near merger radiate spectacularly.</p>
<div class="key-concept">
  <h4>The Hulse–Taylor confirmation</h4>
  <p>The binary pulsar PSR B1913+16 (discovered 1974) is a precision clock orbiting a companion neutron star every 7.75 hours. Radiating gravitational waves, the system loses energy and the orbit shrinks — by 3.5 meters per year, exactly (to better than 0.2%) the GR quadrupole prediction. Forty years of timing lie flawlessly on Einstein's curve; the 1993 Nobel Prize rewarded this first, indirect detection.</p>
</div>`,
        },
        {
          id: "strain-and-ligo",
          title: "Strain, and How LIGO Measures Almost Nothing",
          content: `
<p>A gravitational wave's amplitude is a dimensionless <strong>strain</strong> h: two free masses a distance L apart see their separation oscillate by ΔL = ½hL. The strain from astrophysical sources at Earth is brutally small. Two black holes merging a billion light-years away deliver h ~ 10⁻²¹. Across a 4 km detector arm that is</p>
<p style="text-align:center;">ΔL ≈ ½ × 10⁻²¹ × 4000 m ≈ 2 × 10⁻¹⁸ m</p>
<p>— a thousandth of a proton's diameter. Measuring it is arguably the most sensitive measurement in experimental science, and the instrument is a Michelson interferometer of heroic refinement.</p>
<p>Laser light is split down two perpendicular 4 km arms, reflected from mirrors suspended as free-hanging test masses, and recombined. Set the arms so the beams interfere destructively — a dark output. A passing wave stretches one arm while squeezing the other, shifting the interference and letting light leak through in proportion to the arm-length difference. The interferometer is a differential ruler whose "tick marks" are wavelengths of light, read to a tiny fraction of a wavelength.</p>
<p>Reaching 10⁻¹⁸ m takes an arsenal: Fabry–Pérot cavities bounce the light ~300 times, multiplying the effective arm length; power recycling builds hundreds of kilowatts of circulating laser light to beat photon-counting noise; the 40 kg fused-silica mirrors hang from quadruple pendulums on active seismic isolation, suppressing ground vibration by a factor of ~10¹² in the detection band; the beam tubes hold one of the world's largest ultra-high vacuums; and since 2019, quantum-squeezed light lowers the noise floor beneath the naive quantum limit.</p>
<div class="key-concept">
  <h4>Why two (or more) detectors</h4>
  <p>At this sensitivity, a truck three towns over is signal. LIGO therefore runs twin interferometers 3000 km apart — Hanford, Washington and Livingston, Louisiana — and demands coincident signals with the right ~10 ms light-travel offset. Noise is local; spacetime ripples are global. The arrival-time differences also triangulate the source's sky position, sharpened further by Virgo (Italy) and KAGRA (Japan).</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>LIGO's frequency band, roughly 10 Hz to a few kHz, is the audio range: played through a speaker, a binary merger is a rising 'chirp' you can literally hear — and the analogy is exact, since the wave frequency sweeps upward as the orbit shrinks.</p>
</div>`,
        },
        {
          id: "gw150914",
          title: "GW150914: The First Chirp",
          content: `
<p>On 14 September 2015, at 09:50:45 UTC — during an engineering run, days before the official observing start — both LIGO detectors recorded the same waveform, Livingston leading Hanford by 6.9 ms. It swept from 35 Hz to 250 Hz in about 0.2 seconds, peaked at strain 1.0 × 10⁻²¹, and rang down to silence. The waveform matched, wiggle for wiggle, the numerical-relativity template for a binary black-hole merger. After a century, general relativity's most elusive prediction had been caught directly.</p>
<p>Reading the signal is a physics exam in itself. The orbital frequency (half the wave frequency, since the quadrupole pattern repeats twice per orbit) and its rate of change give the "chirp mass," yielding component masses of about <strong>36 and 29 solar masses</strong>. The frequency at merger — the last stable orbit — sets the total size: two horizons, each ~100 km scale, closing at half the speed of light. The final ringdown frequency and damping identify the product: a single Kerr black hole of <strong>62 solar masses</strong>, spinning at 67% of maximum.</p>
<p>The bookkeeping leaves 36 + 29 − 62 = <strong>3 solar masses missing</strong> — radiated away as gravitational waves in a fifth of a second. The peak luminosity was about 3.6 × 10⁴⁹ W: for that instant, this one event out-powered the <em>combined light output of every star in the observable universe</em> by a factor of ~50. All of it invisible — pure geometry in motion — from 1.3 billion light-years away.</p>
<div class="key-concept">
  <h4>What GW150914 established in one stroke</h4>
  <p>Gravitational waves exist and travel as GR predicts; black holes exist as dynamical objects, not just accretion-powered X-ray sources; black-hole binaries form and merge within the age of the universe; ~30-solar-mass stellar black holes exist (heavier than any previously known); and strong-field, high-velocity GR — tested nowhere before — matches numerical solutions of the full nonlinear equations. The 2017 Nobel Prize (Weiss, Barish, Thorne) followed swiftly.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The signal arrived so soon after the detectors reached design capability that the collaboration spent weeks checking whether it was a 'blind injection' — a fake signal secretly inserted to test the pipeline. The injection system wasn't even running. Nearly 300 merger detections later, GW150914 remains one of the loudest ever seen.</p>
</div>`,
        },
        {
          id: "multimessenger-astronomy",
          title: "GW170817 and Multimessenger Astronomy",
          content: `
<p>On 17 August 2017 the detectors caught a different beast: a 100-second chirp climbing through the band, from masses of about 1.17–1.60 solar masses — not black holes but <strong>two neutron stars</strong>, spiraling to collision. Then the payoff no black-hole merger could provide: 1.7 seconds after the gravitational-wave peak, the Fermi satellite detected a short gamma-ray burst from the same sky region. Within 11 hours, telescopes found a new visible point of light in the galaxy NGC 4993, 130 million light-years away. Over following weeks, observatories across the electromagnetic spectrum — gamma to radio — watched it evolve. One cosmic event, read in gravity and light together: <strong>multimessenger astronomy</strong> had arrived.</p>
<p>The scientific harvest from this single event:</p>
<ul>
  <li><strong>The speed of gravity.</strong> Gravity and light left together and arrived 1.7 s apart after 130 million years of travel: their speeds match to about one part in 10¹⁵, killing whole families of modified-gravity theories that had been invented to replace dark energy.</li>
  <li><strong>The origin of the heaviest elements.</strong> The fading glow was a <strong>kilonova</strong>: radioactive afterglow of rapid neutron-capture (r-process) nucleosynthesis in the neutron-rich ejecta. The inferred yield included tens of Earth-masses of gold and platinum. Much of the universe's gold is forged in neutron-star collisions — your jewelry is compact-object debris.</li>
  <li><strong>Short gamma-ray bursts identified.</strong> A forty-year-old mystery closed: at least some short GRBs are neutron-star mergers.</li>
  <li><strong>A standard siren.</strong> The gravitational waveform gives the source's absolute distance from physics alone — no cosmic distance ladder — and with the galaxy's redshift yields an independent Hubble constant, a fresh referee for cosmology's H₀ tension (Chapter 6 territory).</li>
  <li><strong>Neutron-star interiors.</strong> Tidal deformation imprinted on the late waveform constrains the ultra-dense equation of state — nuclear physics from a gravity signal.</li>
</ul>
<div class="key-concept">
  <h4>The expanding spectrum</h4>
  <p>Ground interferometers hear 10 Hz–kHz: stellar-mass mergers. Pulsar timing arrays — using millisecond pulsars across the galaxy as a light-year-scale detector — reported in 2023 the nanohertz rumble consistent with supermassive black-hole binaries throughout the universe. The space interferometer LISA (2030s), with million-kilometer arms, will cover millihertz: massive black-hole mergers and extreme mass-ratio inspirals. Three windows, twelve decades of frequency — astronomy's newest sense is just opening.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does gravity produce no dipole radiation, making the quadrupole the leading source of gravitational waves?",
          options: [
            "Because gravitational waves are longitudinal rather than transverse",
            "Because gravity is too weak to sustain dipole oscillations",
            "Because mass has only one sign and momentum conservation prevents the mass dipole from oscillating — radiation requires a changing quadrupole (an asymmetrically changing shape)",
            "Because dipole radiation would travel faster than light",
          ],
          correctIndex: 2,
          explanation:
            "Electromagnetic dipole radiation exists because charge comes in two signs. Gravity's 'charge' is mass-energy: the mass dipole moment is the center of mass, whose motion is constant by momentum conservation, so it cannot oscillate and radiate. The first moment free to oscillate is the quadrupole — hence spheres and axisymmetric spinners are silent, while orbiting binaries are nature's loudspeakers.",
        },
        {
          question:
            "A gravitational wave with strain h = 10⁻²¹ passes through LIGO's 4 km arms. Roughly what length change must the interferometer detect?",
          options: [
            "About 2 × 10⁻¹⁸ m — a thousandth of a proton's diameter",
            "About 4 × 10⁻⁶ m — the width of a bacterium",
            "About 4 mm",
            "About one wavelength of the laser light",
          ],
          correctIndex: 0,
          explanation:
            "Strain is fractional length change: ΔL ≈ ½hL = ½ × 10⁻²¹ × 4000 m ≈ 2 × 10⁻¹⁸ m. Catching it requires Fabry–Pérot cavities that fold the arms ~300 times, hundreds of kilowatts of circulating laser power, mirrors on quadruple-pendulum seismic isolation, and squeezed light — plus a second distant detector to reject local noise by coincidence.",
        },
        {
          question:
            "GW150914's black holes totaled 36 + 29 = 65 solar masses before merger, but the final hole weighed only 62. Where did the difference go?",
          options: [
            "It was ejected as high-speed gas and dust",
            "It escaped as neutrinos",
            "It fell into the singularity and no longer counts as mass",
            "It was radiated as gravitational-wave energy — 3 solar masses in ~0.2 s, briefly out-powering all the stars in the observable universe",
          ],
          correctIndex: 3,
          explanation:
            "E = mc² works for geometry too: the merger converted 3 solar masses into gravitational radiation in a fifth of a second, with peak power ~3.6 × 10⁴⁹ W — around fifty times the combined electromagnetic output of every star we can see. Black-hole mergers emit no light at all; the entire outburst was ripples of spacetime, reconstructed from a signal a thousandth of a proton wide.",
        },
        {
          question:
            "In GW170817, gamma rays arrived 1.7 seconds after the gravitational-wave signal from a source 130 million light-years away. What fundamental conclusion followed?",
          options: [
            "Gravity travels measurably slower than light",
            "The speed of gravitational waves equals the speed of light to about one part in 10¹⁵, ruling out many modified-gravity alternatives to dark energy",
            "The source distance had been miscalculated",
            "Gamma rays are produced before neutron stars actually collide",
          ],
          correctIndex: 1,
          explanation:
            "A 1.7 s offset accumulated over 130 million years of travel — about 4 × 10¹⁵ seconds — bounds any fractional speed difference at roughly 10⁻¹⁵ (the small delay is astrophysical: the jet takes time to launch). Entire classes of gravity theories predicting different propagation speeds for gravity and light died that day. The same event also revealed neutron-star mergers forging gold and gave an independent Hubble-constant measurement.",
        },
        {
          question:
            "Before LIGO, what was the strongest evidence that gravitational waves exist?",
          options: [
            "Laboratory generation of weak waves with rotating masses",
            "The bending of starlight during eclipses",
            "The Hulse–Taylor binary pulsar's orbit shrinking by 3.5 m/year, matching the predicted energy loss to gravitational radiation to better than 1%",
            "Fluctuations in the cosmic microwave background",
          ],
          correctIndex: 2,
          explanation:
            "PSR B1913+16 is a pulsar clock in a 7.75-hour orbit with another neutron star. GR predicts the system radiates gravitational waves, draining orbital energy so the orbit decays; forty years of pulse timing trace Einstein's predicted curve almost perfectly. This indirect detection earned the 1993 Nobel Prize. Laboratory generation is hopeless — the emitted power carries a factor G/c⁵ ~ 10⁻⁵³.",
        },
      ],
    },
    {
      id: "relativistic-cosmology",
      title: "Relativistic Cosmology",
      subtitle: "The Friedmann equations — the universe as a GR solution",
      sections: [
        {
          id: "frw-from-symmetry",
          title: "The FRW Metric from Symmetry",
          content: `
<p>Can Einstein's equations handle the whole universe? Solving ten nonlinear PDEs for everything sounds hopeless — until symmetry rescues us. Averaged over scales of hundreds of megaparsecs, galaxy surveys and the near-perfect uniformity of the microwave background support the <strong>cosmological principle</strong>: the universe is <strong>homogeneous</strong> (the same at every place) and <strong>isotropic</strong> (the same in every direction). No center, no edge, no preferred spot.</p>
<p>Those two assumptions almost completely fix the metric. The most general spacetime that is homogeneous and isotropic on every slice of constant cosmic time is the <strong>Friedmann–Robertson–Walker</strong> geometry:</p>
<p style="text-align:center;">ds² = −c²dt² + a(t)² [ dr²/(1 − kr²) + r²(dθ² + sin²θ dφ²) ]</p>
<p>Symmetry leaves exactly two freedoms. The constant k = +1, 0, −1 selects the spatial geometry: a 3-sphere (finite, no boundary — the 2-sphere metric of Chapter 1 promoted one dimension), flat Euclidean space, or a hyperbolic 3-space. And one function of time, the <strong>scale factor a(t)</strong>, carries all the dynamics: galaxies sit at fixed <em>comoving</em> coordinates while a(t) rescales every distance between them. The universe doesn't expand <em>into</em> anything; the metric between comoving points simply grows. Hubble's law follows immediately — recession speed proportional to distance, with H = ȧ/a — and it is what uniform stretching looks like from <em>any</em> galaxy, no center required.</p>
<div class="key-concept">
  <h4>Cosmological redshift is not a Doppler shift</h4>
  <p>Light propagating while space stretches is stretched with it: a photon emitted when the scale factor was a(then) and received now arrives with wavelength multiplied by a(now)/a(then), so 1 + z = a(now)/a(then). A quasar at z = 3 emitted its light when every cosmic distance was one quarter of today's. Redshift measures the total expansion during transit — not a velocity through space — which is why distant galaxies can have superluminal recession 'speeds' without contradiction: nothing is moving past anything locally.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Alexander Friedmann, a Petrograd meteorologist and mathematician, published expanding-universe solutions in 1922 — seven years before Hubble's observations. Einstein first declared the work erroneous, then retracted the objection but dismissed the solutions as physically meaningless. Friedmann died in 1925, never knowing he had written down the equations of the actual universe.</p>
</div>`,
        },
        {
          id: "friedmann-equations",
          title: "The Friedmann Equations",
          content: `
<p>Feed the FRW metric into the field equations, modeling the cosmic contents as a uniform fluid of density ρ and pressure p. Ten equations collapse to two. The 00 component gives the <strong>first Friedmann equation</strong>:</p>
<p style="text-align:center; font-size:1.1em;">(ȧ/a)² = 8πGρ/3 − kc²/a² + Λc²/3</p>
<p>and the spatial components give the <strong>acceleration equation</strong>:</p>
<p style="text-align:center; font-size:1.1em;">ä/a = −(4πG/3)(ρ + 3p/c²) + Λc²/3</p>
<p>(Λ is the cosmological constant, whose story closes this chapter; set it aside for now.)</p>
<p>The first equation is an energy budget. Its Newtonian shadow is exact and illuminating: for a galaxy of mass m riding the edge of a uniform sphere of radius a, energy conservation ½mȧ² − GMm/a = E reproduces the equation, with the curvature term −kc²/a² playing the role of total energy. Density above a critical value means negative energy — a bound, recollapsing, positively curved universe; below it, unbound and hyperbolic; exactly at it, flat. That threshold is</p>
<p style="text-align:center;">ρ_crit = 3H²/8πG ≈ 9 × 10⁻²⁷ kg/m³</p>
<p>about five hydrogen atoms per cubic meter — and observations (chiefly the microwave background) find the real universe within a percent of it: k = 0, flat, the knife edge. Densities are quoted as fractions Ω = ρ/ρ_crit.</p>
<div class="key-concept">
  <h4>Pressure gravitates — the equation's GR surprise</h4>
  <p>The acceleration equation's source is ρ + 3p/c², not ρ alone: in GR, pressure itself generates gravity. A radiation-filled universe (p = ρc²/3) decelerates <em>faster</em> than a matter-filled one, its outward push notwithstanding — the pressure adds attraction rather than resisting collapse. Run it backwards and the shock doubles: any substance with p &lt; −ρc²/3 gravitates <em>repulsively</em>. Negative pressure sounds exotic, but it is exactly what a cosmological constant provides — the loophole through which cosmic acceleration enters.</p>
</div>
<p>Note what the equations refuse to permit: with ordinary contents and Λ = 0, ä &lt; 0 always. A static universe is not an option — a(t) must move, like a ball thrown in the air. That refusal, which Einstein could not accept in 1917, was the equations trying to predict the expanding universe twelve years before Hubble saw it.</p>`,
        },
        {
          id: "cosmic-histories",
          title: "Histories of the Universe",
          content: `
<p>To integrate the Friedmann equations you must know how each ingredient's density responds to expansion, and each behaves differently:</p>
<ul>
  <li><strong>Matter</strong> (galaxies, dark matter; p ≈ 0): fixed particles diluted by growing volume, ρ_m ∝ a⁻³.</li>
  <li><strong>Radiation</strong> (photons, light neutrinos; p = ρc²/3): number dilution ∝ a⁻³, and each photon is additionally redshifted ∝ 1/a, so ρ_r ∝ a⁻⁴.</li>
  <li><strong>Cosmological constant / vacuum energy</strong>: an energy density of space itself, ρ_Λ = constant — expansion makes more space and thus more of it, undiluted.</li>
</ul>
<p>Different dilution laws mean scheduled regime changes: whatever falls slowest eventually dominates. The universe has consequently lived three lives. For its first ~50,000 years, <strong>radiation</strong> ruled and a ∝ t^(1/2). Then <strong>matter</strong> took over for billions of years, with a ∝ t^(2/3) — the era of structure formation, when gravity assembled galaxies and clusters. And around 5 billion years ago, with matter diluted below the constant ρ_Λ, <strong>dark energy</strong> took the wheel: the expansion, decelerating since the beginning, began to accelerate, heading toward exponential growth a ∝ exp(Ht).</p>
<p>Integrating the full history with the measured budget — Ω_Λ ≈ 0.69, Ω_matter ≈ 0.31 (five sixths of it dark), Ω_radiation ≈ 10⁻⁴, k ≈ 0 — gives the age of the universe: <strong>13.8 billion years</strong>, comfortably older than the oldest stars, a consistency check that once (with badly measured H) embarrassed cosmology for decades.</p>
<div class="key-concept">
  <h4>Deceleration written in the sky</h4>
  <p>Because looking far means looking back, the expansion history is observable: distant supernovae at known redshift appear fainter or brighter than uniform expansion predicts, depending on whether the expansion coasted, decelerated, or accelerated while their light traveled. The a(t) curve — decelerating matter era bending into accelerating Λ era — is not a theory sketch but a measured plot. How that measurement happened, and what it resurrected, is the final section's story.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>If dark energy is truly a constant, the far future is lonely: in ~100 billion years, galaxies beyond our local group will have redshifted beyond detectability, and cosmologists then will find an apparently static island universe — with the evidence of the Big Bang expansion receded out of view. We may live in a privileged epoch for doing cosmology at all.</p>
</div>`,
        },
        {
          id: "cosmological-constant-story",
          title: "Λ: The Constant That Would Not Die",
          content: `
<p>In 1917, applying his year-old equations to the cosmos, Einstein hit the refusal noted above: no static solution. Astronomy then knew nothing of expansion — the very existence of other galaxies was unsettled — so Einstein modified the equations with the one term general covariance still permits:</p>
<p style="text-align:center;">R_μν − ½g_μν R + Λ g_μν = (8πG/c⁴) T_μν</p>
<p>A small positive <strong>cosmological constant Λ</strong> supplies a repulsion growing with distance, and Einstein tuned it to balance matter's attraction: a static, closed universe. The balance was a pencil standing on its point — the slightest perturbation tips it into runaway expansion or collapse — and it was answering the wrong question. When Hubble's 1929 data showed the universe expanding, the constant's purpose evaporated. Einstein dropped it, reportedly calling it his "biggest blunder": he had doctored his equations to prevent them from predicting the expanding universe.</p>
<p>Λ refused to stay dead, because quantum theory gives it a job: vacuum energy. Quantum fields fluctuate even in empty space, and a constant energy density of the vacuum enters Einstein's equations exactly as Λ does, with negative pressure p = −ρc² — repulsive gravity, by the acceleration equation. The question became not "why would Λ exist?" but "what value does it have?"</p>
<p>Observation answered in 1998. Two teams using Type Ia supernovae as standard candles — expecting to measure how much the expansion was <em>slowing</em> — found distant supernovae systematically too faint: the expansion is <strong>accelerating</strong> (Nobel Prize 2011). Concordant evidence piled on: microwave-background geometry shows the universe flat, requiring far more energy density than all matter provides, and Λ fills the gap precisely. The 'blunder,' at a value Einstein never contemplated, is ~69% of the universe: <strong>dark energy</strong>.</p>
<div class="key-concept">
  <h4>The worst prediction in physics</h4>
  <p>Estimate the vacuum energy from quantum field theory with a Planck-scale cutoff and you overshoot the observed Λ by ~10¹²⁰ — the most spectacular disagreement between theory and measurement ever recorded. Why is Λ so absurdly small yet not zero? No accepted answer exists; candidates run from unknown cancellation mechanisms to dynamical dark energy (recent survey data hint Λ may not be constant after all) to anthropic selection across a multiverse. The term Einstein regretted is now the deepest open problem shared by gravity and quantum theory — a fitting doorstep to Subject 34.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Which two assumptions, taken together, force the metric of the universe into FRW form?",
          options: [
            "The equivalence principle and energy conservation",
            "Homogeneity (the same at every location) and isotropy (the same in every direction) of space at each cosmic time",
            "Flatness and the constancy of the speed of light",
            "Static geometry and spherical symmetry about our galaxy",
          ],
          correctIndex: 1,
          explanation:
            "The cosmological principle — no special place, no special direction — reduces the metric's freedom to a single curvature sign k (+1 spherical, 0 flat, −1 hyperbolic) and one function a(t), the scale factor. Note that isotropy about every point implies homogeneity, but the universe is emphatically not static: symmetry constrains space, while a(t) leaves time free to carry the dynamics.",
        },
        {
          question:
            "A galaxy's light is observed at redshift z = 1. What does this tell us, correctly interpreted?",
          options: [
            "The galaxy is moving through space at the speed of light",
            "The galaxy's light was absorbed and re-emitted by intervening gas",
            "The universe's scale factor was half its present value when the light was emitted — the wavelength stretched with space during the journey",
            "The galaxy is at rest and the light is gravitationally redshifted",
          ],
          correctIndex: 2,
          explanation:
            "Cosmological redshift obeys 1 + z = a(now)/a(then): the photon's wavelength is stretched by the same factor as every cosmic distance during transit. At z = 1, all distances have doubled since emission. It is not a Doppler shift from motion through space — galaxies ride fixed comoving coordinates — which is why very distant objects can 'recede' faster than c without any local violation of relativity.",
        },
        {
          question:
            "In the acceleration equation ä/a = −(4πG/3)(ρ + 3p/c²) + Λc²/3, what is general relativity's key departure from Newtonian intuition?",
          options: [
            "Pressure gravitates: positive pressure adds to the deceleration, and a substance with p < −ρc²/3 gravitates repulsively, accelerating the expansion",
            "Density no longer affects the expansion",
            "The equation forbids the universe from ever decelerating",
            "Curvature k is the only source of acceleration",
          ],
          correctIndex: 0,
          explanation:
            "Newton's gravity sources on mass density alone; Einstein's sources on ρ + 3p/c². Radiation pressure therefore speeds deceleration rather than resisting collapse — and sufficiently negative pressure flips gravity's sign entirely. The cosmological constant, with p = −ρc², is exactly such a substance: the observed cosmic acceleration is this GR pressure term in action.",
        },
        {
          question:
            "The critical density ρ_crit = 3H²/8πG ≈ 9 × 10⁻²⁷ kg/m³ marks what dividing line?",
          options: [
            "The density above which stars can no longer form",
            "The density at which the universe becomes opaque to light",
            "The maximum density the Big Bang could have produced",
            "The density at which the universe is spatially flat (k = 0); above it space curves like a sphere, below it hyperbolically",
          ],
          correctIndex: 3,
          explanation:
            "In the first Friedmann equation, the curvature term's sign is set by whether ρ exceeds or falls short of 3H²/8πG — about five hydrogen atoms per cubic meter today. Measurements, led by the microwave background, put the total density (matter plus dark energy) within a percent of critical: our universe is flat to the precision of our best instruments, a fact any complete cosmology must explain.",
        },
        {
          question:
            "What is the arc of the cosmological constant's history from 1917 to today?",
          options: [
            "Einstein introduced it to explain the expansion Hubble had discovered, and it has been confirmed ever since",
            "Einstein added Λ to force a static universe, abandoned it as a blunder after Hubble found expansion — and in 1998 supernova observations of accelerating expansion resurrected it as dark energy, ~69% of the cosmic budget",
            "It was proposed by Friedmann and rejected by Einstein, and remains excluded by observation",
            "It was introduced to explain dark matter inside galaxies",
          ],
          correctIndex: 1,
          explanation:
            "Λ began as a patch to hold the universe still — unstable, and mooted by Hubble's 1929 expansion. Quantum vacuum energy later gave it a natural interpretation, and in 1998 Type Ia supernovae proved distant expansion is accelerating, exactly Λ's signature; CMB flatness independently demands its energy density. The surviving mystery is its size: naive quantum estimates overshoot by ~10¹²⁰, the worst prediction in physics.",
        },
      ],
    },
  ],
};
