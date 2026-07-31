export const subject24 = {
  id: "classical-mechanics-2",
  number: 24,
  title: "Classical Mechanics II — Lagrangian & Hamiltonian",
  description:
    "Mechanics reborn from a single principle — least action. Lagrangians, Noether's theorem, rigid bodies, Hamiltonian phase space, and chaos, at the Taylor/Landau level.",
  phase: 5,
  chapters: [
    {
      id: "principle-of-least-action",
      title: "The Principle of Least Action",
      subtitle: "All of mechanics from one variational statement",
      sections: [
        {
          id: "action-and-hamiltons-principle",
          title: "From Forces to a Single Number: The Action",
          content: `
<p>Newton's mechanics answers "what happens next?" — given forces, integrate F = ma forward in time. This chapter asks a stranger question: of all the paths a particle <em>could</em> take between two fixed events, why does it take the one it does? The answer assigns every conceivable path a single number, the <strong>action</strong>, and declares that nature picks the path that makes this number stationary.</p>
<p>Define the <strong>Lagrangian</strong> as kinetic minus potential energy, L = T − V, and the action of a path q(t) running from a fixed start (q₁, t₁) to a fixed end (q₂, t₂) as:</p>
<p style="text-align:center; font-size:1.15em;"><strong>S[q] = ∫ L(q, dq/dt, t) dt</strong>, from t₁ to t₂</p>
<p>S is a <em>functional</em>: feed it an entire trajectory, get back one number, measured in joule-seconds — the same units as Planck's constant, which is no coincidence.</p>
<div class="key-concept">
  <h4>Hamilton's Principle</h4>
  <p>The physical path between two fixed endpoints is the one for which the action is stationary: δS = 0. Nudge the true path by any small variation δq(t) that vanishes at the endpoints, and the action changes only at second order in δq.</p>
</div>
<p>From Subject 23 you know what stationarity of an integral functional demands: the integrand must satisfy the Euler–Lagrange equation,</p>
<p style="text-align:center;">d/dt (∂L/∂q̇) − ∂L/∂q = 0</p>
<p>Substitute L = ½m(dx/dt)² − V(x) for a single particle: ∂L/∂q̇ = m·dx/dt, ∂L/∂x = −dV/dx, and the equation reads m·d²x/dt² = −dV/dx. That is exactly Newton's second law. One variational sentence reproduces all of Newtonian mechanics — and, as this subject will show, it does so in <em>any</em> coordinates, handles constraints for free, and exposes the link between symmetry and conservation.</p>
<p>Note "stationary," not always "minimum." For short enough paths the action genuinely is a minimum (hence the traditional name), but for long paths it can be a saddle point. The physics only ever uses δS = 0.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The idea has optical ancestry: Fermat (1662) explained refraction by claiming light takes the path of least <em>time</em>. Maupertuis, Euler, Lagrange, and finally Hamilton (1834) generalized the idea to matter. Feynman later showed <em>why</em> it works: quantum mechanics sums over all paths, and near the stationary-action path the contributions reinforce instead of cancelling.</p>
</div>`,
        },
        {
          id: "free-particle-straight-line",
          title: "The Free Particle: Why the Straight Line Wins",
          content: `
<p>Claims this grand deserve a hands-on check. Take the simplest system in physics — a free particle, V = 0, so L = ½mv² — and verify that the straight, uniform-speed path really does minimize the action.</p>
<p>Fix the endpoints: the particle must be at x₁ at time t₁ and x₂ at time t₂. Whatever wiggling it does in between, its <em>average</em> velocity is locked in: v̄ = (x₂ − x₁)/(t₂ − t₁). Write any candidate path's velocity as the average plus a fluctuation:</p>
<p style="text-align:center;">v(t) = v̄ + u(t),&nbsp;&nbsp; where ∫ u dt = 0</p>
<p>The fluctuation must integrate to zero — otherwise the path would miss the endpoint. Now compute the action:</p>
<p style="text-align:center;">S = ½m ∫ v² dt = ½m ∫ (v̄² + 2v̄u + u²) dt</p>
<p>The middle term dies because ∫ u dt = 0. What survives is:</p>
<p style="text-align:center; font-size:1.1em;"><strong>S = ½m v̄² (t₂ − t₁) + ½m ∫ u² dt</strong></p>
<div class="key-concept">
  <h4>The straight line minimizes</h4>
  <p>The first term is the action of the uniform straight-line path; the second is ½m times the integral of u², which is never negative and vanishes only if u(t) = 0 at every instant. Any deviation whatsoever — speeding up then slowing down, overshooting and returning — strictly <em>increases</em> the action. Uniform motion is not just a stationary point; it is the unique global minimum.</p>
</div>
<p>The intuition: with the endpoints fixed, wiggling forces the particle to travel faster somewhere to make up time. Kinetic energy depends on v², and squares punish unevenness — the average of a square exceeds the square of the average. The cheapest way to be at the right place at the right time is to cruise.</p>
<p>Now add a potential. L = T − V says the particle trades speed against potential energy: it "wants" to linger where V is low and hurry through where V is high, subject to arriving on schedule. A thrown ball arcs upward because spending time at height, where V is large, <em>lowers</em> T − V… but curving the path costs kinetic-energy wiggle. The parabola is precisely the optimal compromise — Newtonian gravity re-derived as a bargaining problem.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The minus sign in L = T − V bothers everyone at first. T + V is conserved; T − V is <em>extremized along the path</em>. They are different tools: one is a constant of the motion, the other generates the motion itself.</p>
</div>`,
        },
        {
          id: "generalized-coordinates",
          title: "Generalized Coordinates: Describe the System Your Way",
          content: `
<p>Here is the first practical superpower of the Lagrangian method. Newton's second law is a <em>vector</em> equation in Cartesian components; change to polar coordinates and you must painstakingly transform accelerations (remember the centripetal and Coriolis terms that appear). Hamilton's principle, by contrast, is a statement about a <em>scalar</em> — energy — and scalars don't care what coordinates you use.</p>
<p>A set of <strong>generalized coordinates</strong> q₁, q₂, …, q<sub>n</sub> is any collection of numbers that completely specifies the system's configuration:</p>
<ul>
  <li>A pendulum: one angle θ — not two Cartesian coordinates plus a constraint.</li>
  <li>A double pendulum: two angles (θ₁, θ₂).</li>
  <li>A rigid body: three coordinates for its center of mass plus three orientation angles.</li>
  <li>A bead on a wire: one number, the distance along the wire — however bent the wire is.</li>
</ul>
<p>The number of coordinates needed is the number of <strong>degrees of freedom</strong>. The recipe is always the same: express T and V in terms of the q's and their time derivatives, form L = T − V, and write one Euler–Lagrange equation per coordinate:</p>
<p style="text-align:center;">d/dt (∂L/∂q̇ᵢ) = ∂L/∂qᵢ,&nbsp;&nbsp; i = 1, …, n</p>
<div class="key-concept">
  <h4>Same law, any coordinates</h4>
  <p>The Euler–Lagrange equations keep exactly this form under <em>any</em> invertible change of coordinates — Cartesian, polar, rotating, or a coordinate tailored to one specific contraption. Hamilton's principle δS = 0 makes no reference to coordinates at all, so its consequences can't either. This is the property physicists call <strong>covariance</strong>, and it is why the Lagrangian framework, not F = ma, generalizes to relativity and field theory.</p>
</div>
<p>Two derived quantities inherit names from the Cartesian case. ∂L/∂q̇ᵢ is the <strong>generalized momentum</strong> pᵢ conjugate to qᵢ — for an angle it turns out to be an angular momentum, with different units than mv. And ∂L/∂qᵢ is the <strong>generalized force</strong>. The Euler–Lagrange equation then reads "rate of change of generalized momentum equals generalized force" — Newton's law, wearing whatever clothes fit the problem.</p>
<div class="analogy">
  <h3>Analogy: Describing a Journey</h3>
  <p>You can log a road trip by GPS coordinates every second, or simply by "kilometers along Route 66." For motion confined to the road, the single mile-marker number carries all the information with none of the redundancy. Generalized coordinates are mile-markers for mechanical systems.</p>
</div>`,
        },
        {
          id: "constraints",
          title: "Constraints: The Forces You Never Compute",
          content: `
<p>Real mechanisms are full of constraints: the pendulum bob stays on its circle, the bead stays on its wire, the block stays on the incline. In Newtonian mechanics each constraint comes with an unknown <strong>constraint force</strong> — string tension, normal force — that you must include in the force diagram, solve for, and usually discard. The Lagrangian method makes most of them vanish before the calculation starts.</p>
<p>A constraint is <strong>holonomic</strong> if it can be written as an equation among coordinates (and possibly time): f(x, y, z, t) = 0. "The bob is a distance l from the pivot" is x² + y² = l². Holonomic constraints reduce the degrees of freedom: each equation removes one coordinate. Choose generalized coordinates that <em>automatically satisfy</em> the constraint — the pendulum angle θ already lives on the circle — and the constraint disappears from the mathematics entirely.</p>
<div class="key-concept">
  <h4>Why constraint forces drop out</h4>
  <p>Ideal constraint forces act perpendicular to every motion the constraint allows: tension is perpendicular to the bob's velocity, the normal force is perpendicular to the surface. They therefore do no work along any allowed variation of the path — and Hamilton's principle only compares allowed paths. A force that does no work in any allowed direction leaves no fingerprint on the action, so it never appears in the equations. This is d'Alembert's principle in variational clothing.</p>
</div>
<p>What the method quietly assumes: constraints are ideal (frictionless) and holonomic. Not everything qualifies:</p>
<ul>
  <li><strong>Rolling without slipping</strong> in two dimensions relates velocities, not positions, and generally cannot be integrated to a coordinate equation — a <em>nonholonomic</em> constraint. (A rolling ball can reach any position with any orientation; no equation among coordinates forbids anything.)</li>
  <li><strong>Inequality constraints</strong> — a particle inside a box, a bead that can leave the wire — also fall outside the simple recipe.</li>
</ul>
<p>These need heavier tools, chiefly <strong>Lagrange multipliers</strong>, which have a bonus feature: the multiplier itself turns out to equal the constraint force. So when you <em>do</em> want the tension in the string — say, to know when it snaps — the method hands it back on request.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Lagrange published this machinery in his 1788 <em>Mécanique analytique</em> and boasted that the book contained not a single diagram. After a semester of drawing normal-force arrows on inclined planes, you may appreciate the luxury: with good coordinates, the algebra <em>is</em> the free-body diagram.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Hamilton's principle states that the physical path taken by a system between fixed endpoints is the one that:",
          options: [
            "minimizes the total energy T + V along the path",
            "minimizes the travel time between the endpoints",
            "makes the action S = ∫(T − V) dt stationary under small variations",
            "maximizes the average kinetic energy",
          ],
          correctIndex: 2,
          explanation:
            "The action is the time integral of the Lagrangian L = T − V, and the true path satisfies δS = 0: first-order variations vanish. It need not be a strict minimum (long paths can be saddle points), and it is T − V that appears, not the conserved quantity T + V. Fermat's least-time principle is the optical cousin, not the mechanical statement.",
        },
        {
          question:
            "For a free particle traveling between fixed endpoints, writing v(t) = v̄ + u(t) with ∫u dt = 0 shows that S = ½mv̄²Δt + ½m∫u² dt. What does this prove?",
          options: [
            "Any deviation from uniform straight-line motion strictly increases the action, so uniform motion is the unique minimum",
            "All paths between the endpoints have the same action",
            "The action can be lowered by moving slowly at first and fast at the end",
            "The action is stationary but the true path is a saddle point",
          ],
          correctIndex: 0,
          explanation:
            "The cross term vanishes because the fluctuation u must average to zero to hit the endpoint, leaving the uniform path's action plus ½m∫u² dt, which is positive unless u is identically zero. Squares punish uneven speed: the average of v² always exceeds the square of the average. For the free particle the straight line is a genuine global minimum, not merely a stationary point.",
        },
        {
          question:
            "A double pendulum swings in a vertical plane. How many generalized coordinates does a Lagrangian treatment need?",
          options: [
            "Four — the x and y positions of each bob",
            "Three — two positions and one constraint multiplier",
            "One — the total energy",
            "Two — the two angles θ₁ and θ₂",
          ],
          correctIndex: 3,
          explanation:
            "Each rod is a holonomic constraint fixing one bob's distance from its pivot, removing one coordinate apiece: four Cartesian coordinates minus two constraints leaves two degrees of freedom. Choosing the two angles builds both constraints into the description, so no rod tensions ever appear in the equations. Energy is a property of the motion, not a coordinate.",
        },
        {
          question:
            "Why do ideal constraint forces (string tension, normal forces) never appear in the Euler–Lagrange equations when the generalized coordinates respect the constraint?",
          options: [
            "Because they are too small to matter compared with gravity",
            "Because they act perpendicular to every allowed displacement and so do no work along any path the variation explores",
            "Because they always cancel in action–reaction pairs",
            "Because the Lagrangian method is an approximation that ignores them",
          ],
          correctIndex: 1,
          explanation:
            "Hamilton's principle compares only paths that obey the constraints, and ideal constraint forces are perpendicular to all such motions — they do no work along any allowed variation, so they cannot affect the action. The method is exact, not approximate; and if you actually want the tension, Lagrange multipliers recover it. Action–reaction is true but not the reason.",
        },
        {
          question:
            "A ball rolling without slipping on a table is subject to a constraint relating its velocities that cannot be integrated into an equation among coordinates alone. Such a constraint is called:",
          options: [
            "holonomic, because it involves rolling",
            "isochronous",
            "nonholonomic, and it does not simply reduce the number of generalized coordinates",
            "unstable",
          ],
          correctIndex: 2,
          explanation:
            "Holonomic constraints have the form f(coordinates, t) = 0 and each removes one degree of freedom. Rolling constrains velocities — the contact point must not slide — yet the ball can still reach any position with any orientation, so no coordinate equation exists. Nonholonomic systems need Lagrange multipliers or other machinery beyond the basic recipe.",
        },
      ],
    },
    {
      id: "lagrangian-mechanics",
      title: "Lagrangian Mechanics",
      subtitle: "Euler–Lagrange in practice — problems Newton's laws make painful",
      sections: [
        {
          id: "euler-lagrange-recipe",
          title: "The Recipe, and Why It Beats Force Diagrams",
          content: `
<p>Lagrangian mechanics in practice is almost embarrassingly mechanical. For any system with ideal holonomic constraints:</p>
<ol>
  <li><strong>Count degrees of freedom</strong> and choose generalized coordinates q₁, …, q<sub>n</sub> that build the constraints in.</li>
  <li><strong>Write T</strong>, the total kinetic energy, in terms of the q's and their rates. (Often easiest in Cartesian form first, then substitute.)</li>
  <li><strong>Write V</strong>, the potential energy, in terms of the q's.</li>
  <li><strong>Form L = T − V</strong> and turn the crank: for each coordinate,
  <br /><span style="display:block; text-align:center;">d/dt (∂L/∂q̇ᵢ) − ∂L/∂qᵢ = 0</span></li>
</ol>
<p>No force diagrams. No resolving vectors into components. No constraint forces. The most error-prone parts of Newtonian problem-solving simply do not occur, because everything flows from two scalar energy functions.</p>
<div class="key-concept">
  <h4>Where the physics lives</h4>
  <p>All modeling decisions happen in steps 1–3. Once L is written down, the rest is calculus that a machine could do (and in practice, computer algebra often does). Learning Lagrangian mechanics is really learning to write correct kinetic and potential energies in clever coordinates.</p>
</div>
<p>A dictionary helps keep the crank meaningful. The quantity pᵢ = ∂L/∂q̇ᵢ is the <strong>generalized momentum</strong> conjugate to qᵢ. If qᵢ is a Cartesian coordinate, pᵢ = mvᵢ is ordinary momentum; if qᵢ is an angle, pᵢ is an angular momentum. The quantity ∂L/∂qᵢ is the <strong>generalized force</strong>: for Cartesian coordinates it is −∂V/∂x, a real force; for an angle it is a torque. Each Euler–Lagrange equation then says dpᵢ/dt = (generalized force) — familiar physics, automatically expressed in the right variables.</p>
<p>A word of caution on step 2: kinetic energy must be computed in an <em>inertial</em> frame. Coordinates may rotate or accelerate — that's fine and often smart — but the velocities entering T = Σ½mᵢvᵢ² are velocities relative to an inertial observer. Get that right and effects like centrifugal and Coriolis forces emerge from the algebra on their own, instead of being bolted on as "fictitious forces."</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>When friction or air drag matters, the pure recipe needs patching — dissipative forces can't be written as −∂V/∂q. The standard fix adds a generalized force Qᵢ on the right-hand side, or uses Rayleigh's "dissipation function." Fundamental physics rarely needs this: at the microscopic level, all forces are conservative and the Lagrangian reigns unamended.</p>
</div>`,
        },
        {
          id: "pendulum-and-atwood",
          title: "Worked: The Pendulum and the Atwood Machine",
          content: `
<p>Two classics, cranked in full.</p>
<p><strong>The plane pendulum.</strong> A bob of mass m hangs on a massless rod of length l; the single coordinate is the angle θ from vertical. The bob's speed is l·(dθ/dt), and its height below the pivot is l·cos θ, so:</p>
<p style="text-align:center;">T = ½ml²θ̇²,&nbsp;&nbsp; V = −mgl cos θ,&nbsp;&nbsp; L = ½ml²θ̇² + mgl cos θ</p>
<p>Crank: ∂L/∂θ̇ = ml²θ̇ (the angular momentum about the pivot), and ∂L/∂θ = −mgl sin θ (the gravitational torque). Euler–Lagrange gives:</p>
<p style="text-align:center; font-size:1.1em;"><strong>ml²·d²θ/dt² = −mgl sin θ</strong>&nbsp;&nbsp;⇒&nbsp;&nbsp;d²θ/dt² = −(g/l) sin θ</p>
<p>The rod tension never appeared — we never needed it. For small angles sin θ ≈ θ and the familiar ω = √(g/l) oscillation returns.</p>
<p><strong>The Atwood machine.</strong> Masses m₁ and m₂ hang from a string of fixed length over a frictionless, massless pulley. One coordinate suffices: let x be how far m₁ has descended; then m₂ has risen by the same x. Both masses move at speed dx/dt, so:</p>
<p style="text-align:center;">T = ½(m₁ + m₂)ẋ²,&nbsp;&nbsp; V = −m₁gx + m₂gx</p>
<p style="text-align:center;">L = ½(m₁ + m₂)ẋ² + (m₁ − m₂)gx</p>
<p>Crank: d/dt[(m₁ + m₂)ẋ] = (m₁ − m₂)g, so:</p>
<p style="text-align:center; font-size:1.1em;"><strong>a = (m₁ − m₂)g/(m₁ + m₂)</strong></p>
<p>Compare the Newtonian route: two free-body diagrams, two equations, an unknown tension to introduce and then eliminate. Here the string constraint was absorbed into the single coordinate x, and the tension — an ideal constraint force doing no net work — vanished from the problem before it began.</p>
<div class="key-concept">
  <h4>The pattern to internalize</h4>
  <p>In both problems, choosing a coordinate that <em>respects the constraint</em> did all the hard work. The pendulum's θ lives on the circle; Atwood's x encodes the fixed string length. Good coordinates are to Lagrangian mechanics what good free-body diagrams are to Newton — the step where insight enters.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>George Atwood built his machine in 1784 to slow gravity down: with m₁ only slightly heavier than m₂, the acceleration (m₁ − m₂)g/(m₁ + m₂) can be made tiny, letting eighteenth-century clocks time free fall accurately. It remains the standard first test of any new mechanics formalism — if your method can't do Atwood, it can't do anything.</p>
</div>`,
        },
        {
          id: "bead-on-rotating-wire",
          title: "Worked: Bead on a Rotating Wire",
          content: `
<p>Now a problem where Newton gets genuinely unpleasant: a bead of mass m slides without friction on a straight horizontal wire that a motor spins about a vertical axis at constant angular rate ω. In the Newtonian picture you'd need the normal force from the wire — which is whatever it must be to keep the bead on the wire — in a rotating, accelerating geometry. In the Lagrangian picture the problem takes four lines.</p>
<p>One degree of freedom: r, the bead's distance from the axis. In the inertial frame the bead's velocity has a radial part dr/dt and a tangential part rω (it is carried around by the wire), so:</p>
<p style="text-align:center;">T = ½m(ṙ² + r²ω²),&nbsp;&nbsp; V = 0,&nbsp;&nbsp; L = ½m(ṙ² + r²ω²)</p>
<p>Crank: ∂L/∂ṙ = mṙ and ∂L/∂r = mω²r, giving:</p>
<p style="text-align:center; font-size:1.1em;"><strong>d²r/dt² = ω²r</strong></p>
<p>The bead accelerates outward, exponentially: r(t) = A·e<sup>ωt</sup> + B·e<sup>−ωt</sup>. The term mω²r is the <strong>centrifugal force</strong> — not postulated, but generated by the algebra because the coordinate r lives in a rotating description while T was computed inertially.</p>
<div class="key-concept">
  <h4>An effective potential appears</h4>
  <p>Rewrite L = ½mṙ² − U_eff(r) with U_eff(r) = −½mω²r². The bead behaves exactly like a particle in one dimension rolling down an inverted parabola — unstable at r = 0, flung outward everywhere else. Collapsing rotation into an effective one-dimensional potential is a trick you will reuse constantly, most famously for orbits in the central-force chapter.</p>
</div>
<p>One more lesson hides here. Is energy conserved? The quantity ½mṙ² + U_eff is conserved (L has no explicit time dependence in these coordinates). But the bead's true kinetic energy ½m(ṙ² + r²ω²) grows without bound — the <em>motor</em> pumps energy in through the constraint. When a constraint moves, the constraint force can do real work even though it does no work along <em>virtual</em> displacements. The conserved quantity the Lagrangian hands you is then not the mechanical energy; it is what the next chapters will identify as the Hamiltonian. Distinguishing the two is a classic exam trap — and a preview of how subtle "energy" becomes when time enters the description explicitly.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Replace the straight wire with a rotating circular hoop and the same method predicts a pitchfork bifurcation: below a critical spin rate the bead sits at the bottom, above it the bottom destabilizes and two new equilibria climb the sides. That system is a tabletop model of spontaneous symmetry breaking — the same mathematics as the Higgs potential.</p>
</div>`,
        },
        {
          id: "cyclic-coordinates-effective-potential",
          title: "Cyclic Coordinates and the Effective Potential",
          content: `
<p>The fastest way to solve a mechanics problem is not to solve it — it is to notice a conservation law that solves half of it for you. The Lagrangian formalism has a built-in detector for such laws.</p>
<div class="key-concept">
  <h4>Cyclic coordinates</h4>
  <p>If a coordinate q does not appear in L (though its velocity q̇ does), it is called <strong>cyclic</strong> or ignorable. Then ∂L/∂q = 0, and the Euler–Lagrange equation collapses to d/dt(∂L/∂q̇) = 0: the conjugate momentum p = ∂L/∂q̇ is conserved. Every symmetry you can see in the coordinates hands you a first integral for free.</p>
</div>
<p>The showcase is a particle of mass m in a central potential V(r), moving in a plane with polar coordinates (r, φ):</p>
<p style="text-align:center;">L = ½m(ṙ² + r²φ̇²) − V(r)</p>
<p>The angle φ is nowhere to be seen — only its rate appears. So its conjugate momentum is conserved:</p>
<p style="text-align:center;">p_φ = ∂L/∂φ̇ = mr²φ̇ = ℓ&nbsp;&nbsp;(constant)</p>
<p>That is conservation of angular momentum, recognized by inspection rather than derived by torque arguments. Now spend the conservation law: substitute φ̇ = ℓ/mr² into the energy,</p>
<p style="text-align:center;">E = ½mṙ² + ℓ²/(2mr²) + V(r) = ½mṙ² + <strong>U_eff(r)</strong></p>
<p>The two-dimensional orbit problem has become one-dimensional motion in the <strong>effective potential</strong> U_eff(r) = V(r) + ℓ²/2mr². The added term — the <strong>centrifugal barrier</strong> — blows up as r → 0, which is why an orbiting body with any angular momentum can never fall straight into the center. Reading U_eff like a landscape tells you everything qualitative: circular orbits sit at its minimum, small wiggles about the minimum are radial oscillations, and whether E clears the barrier at large r decides bound versus unbound motion.</p>
<p>A worked check for gravity, V = −GMm/r: U_eff has a single minimum at r₀ = ℓ²/GMm², so one circular orbit exists for each ℓ, and any E between U_eff(r₀) and zero gives a bound orbit oscillating between two turning radii — the ellipse of Kepler, seen from its radial shadow.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Cyclic coordinates are the tip of an iceberg. A coordinate can fail to be cyclic while a hidden symmetry still guards a conservation law — the Laplace–Runge–Lenz vector of the Kepler problem is the famous example. The systematic account of all such laws is Noether's theorem, the next chapter's subject.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "For the plane pendulum with L = ½ml²θ̇² + mgl cos θ, the Euler–Lagrange equation gives:",
          options: [
            "d²θ/dt² = −(g/l) θ, exactly, for all angles",
            "ml² d²θ/dt² = −mgl sin θ, with the rod tension never appearing",
            "ml² d²θ/dt² = −mgl sin θ + T, where T is the rod tension",
            "d²θ/dt² = +(g/l) sin θ",
          ],
          correctIndex: 1,
          explanation:
            "∂L/∂θ̇ = ml²θ̇ and ∂L/∂θ = −mgl sin θ, so the equation of motion is ml²θ̈ = −mgl sin θ. The tension is an ideal constraint force perpendicular to the motion; choosing θ as the coordinate eliminates it before the calculation starts. The linear equation with −(g/l)θ is only the small-angle approximation.",
        },
        {
          question:
            "In the Atwood machine, using the single coordinate x (descent of m₁) yields a = (m₁ − m₂)g/(m₁ + m₂). What happened to the string tension that dominates the Newtonian solution?",
          options: [
            "It was assumed to be zero",
            "It was cancelled by the pulley's friction",
            "It appears as an extra term in the Lagrangian",
            "It never entered: the fixed string length was built into the coordinate, and the tension does no net work along allowed motions",
          ],
          correctIndex: 3,
          explanation:
            "Letting m₂'s rise equal m₁'s descent encodes the constraint of fixed string length, so one coordinate describes both masses. The tension is the ideal force enforcing that constraint; it does no net work along any allowed displacement and hence leaves no trace in the action. The Newtonian route introduces it in two equations only to eliminate it — the Lagrangian route skips both steps.",
        },
        {
          question:
            "A bead slides on a frictionless horizontal wire rotating at constant ω. The Lagrangian analysis gives d²r/dt² = ω²r. Which statement about energy is correct?",
          options: [
            "The conserved quantity ½mṙ² − ½mω²r² is not the bead's mechanical energy, which grows because the motor feeds energy in through the moving constraint",
            "The bead's kinetic energy is conserved because the wire is frictionless",
            "Energy conservation fails, signaling an error in the Lagrangian method",
            "The bead oscillates about r = 0, exchanging kinetic and potential energy",
          ],
          correctIndex: 0,
          explanation:
            "The effective one-dimensional energy ½mṙ² + U_eff with U_eff = −½mω²r² is constant, but the true kinetic energy ½m(ṙ² + r²ω²) increases as the bead flies outward. A moving constraint can do real work even though it does none along virtual displacements — the motor is the energy source. Nothing is wrong with the method; the conserved quantity is the Hamiltonian, not T + V. And r = 0 is unstable, not oscillatory.",
        },
        {
          question:
            "For a particle in a central potential, L = ½m(ṙ² + r²φ̇²) − V(r). Because φ is cyclic:",
          options: [
            "the radial momentum mṙ is conserved",
            "the particle must move in a circle",
            "mr²φ̇ is conserved — angular momentum, read off by inspection — and the problem reduces to 1D motion in U_eff(r) = V(r) + ℓ²/2mr²",
            "the energy is not conserved",
          ],
          correctIndex: 2,
          explanation:
            "A coordinate absent from L has a conserved conjugate momentum: here p_φ = mr²φ̇ = ℓ. Substituting φ̇ = ℓ/mr² into the energy buries the angular motion inside the centrifugal barrier ℓ²/2mr², leaving one-dimensional radial motion in an effective potential. Circular orbits are just the special case where r sits at the minimum of U_eff; general motions oscillate between turning radii.",
        },
      ],
    },
    {
      id: "symmetry-and-conservation",
      title: "Symmetry & Conservation",
      subtitle: "Noether's theorem — why conservation laws exist at all",
      sections: [
        {
          id: "what-is-a-symmetry",
          title: "What Exactly Is a Symmetry?",
          content: `
<p>Conservation laws are the workhorses of physics — energy, momentum, angular momentum rescue every hard problem. But in introductory mechanics they arrive as separate facts, each proved by its own argument. This chapter reveals them as three instances of a single theorem, and answers a question most courses never ask: <em>why do conservation laws exist at all?</em></p>
<p>First, sharpen the key word. In physics, a <strong>symmetry</strong> is a transformation you can apply to a system that leaves its physics — for us, its Lagrangian — unchanged. Rotate a perfect sphere about its center: indistinguishable. Slide an infinite featureless plane sideways: indistinguishable. Run an isolated system's dynamics starting today or starting tomorrow: same behavior.</p>
<p>The crucial distinction is between <strong>discrete</strong> and <strong>continuous</strong> symmetries:</p>
<ul>
  <li>A square is symmetric under rotations by exactly 90° — discrete jumps. Between 0° and 90° lies nothing.</li>
  <li>A circle is symmetric under rotation by <em>any</em> angle — a continuous, one-parameter family of transformations, smoothly connected to doing nothing at all.</li>
</ul>
<p>Noether's theorem concerns the continuous kind. A <strong>continuous one-parameter family of transformations</strong> is a rule q → Q(s) depending smoothly on a real parameter s, with Q(0) = q. Examples:</p>
<ul>
  <li><strong>Translation:</strong> x → x + s, sliding the whole system a distance s.</li>
  <li><strong>Rotation:</strong> φ → φ + s, turning the system by angle s about an axis.</li>
  <li><strong>Time translation:</strong> t → t + s, restarting the clock.</li>
</ul>
<div class="key-concept">
  <h4>Symmetry of the Lagrangian</h4>
  <p>The transformation is a symmetry of the system if the Lagrangian is unchanged: dL/ds = 0 when every coordinate is transported along the family. It is the <em>Lagrangian</em> — the generator of the dynamics — that must be invariant, not any particular solution. A planet's elliptical orbit is not rotationally symmetric; the gravitational Lagrangian that produces it is.</p>
</div>
<p>That last distinction deserves emphasis, because it resolves a common confusion. Symmetry of the <em>laws</em> does not force symmetry of the <em>outcomes</em>. The laws governing a pencil balanced on its tip are perfectly rotationally symmetric; the pencil still falls in one particular direction. What the symmetry of the laws guarantees is subtler and, it turns out, more powerful: a quantity that the asymmetric outcome must nevertheless conserve forever. Making that guarantee precise was Emmy Noether's achievement, and it is the next section's business.</p>`,
        },
        {
          id: "noethers-theorem-stated",
          title: "Noether's Theorem, Stated Precisely",
          content: `
<div class="key-concept">
  <h4>Noether's Theorem (1918)</h4>
  <p>Suppose the Lagrangian L(q₁,…,q<sub>n</sub>, q̇₁,…,q̇<sub>n</sub>, t) is invariant under a continuous one-parameter family of transformations qᵢ → Qᵢ(s), with Qᵢ(0) = qᵢ. Then the quantity</p>
  <p style="text-align:center; font-size:1.1em;">C = Σᵢ (∂L/∂q̇ᵢ) · (dQᵢ/ds)|<sub>s=0</sub></p>
  <p>is constant along every solution of the equations of motion. Every continuous symmetry of the Lagrangian yields a conserved quantity — one conservation law per parameter of symmetry.</p>
</div>
<p>The recipe in words: take each conjugate momentum ∂L/∂q̇ᵢ, multiply by the direction in which the symmetry pushes that coordinate (the derivative dQᵢ/ds at s = 0), and sum. The proof is three lines. Invariance means dL/ds = 0. Expanding with the chain rule and using the Euler–Lagrange equations to replace ∂L/∂qᵢ by d/dt(∂L/∂q̇ᵢ) turns the expression into a total time derivative:</p>
<p style="text-align:center;">0 = dL/ds = d/dt [ Σᵢ (∂L/∂q̇ᵢ)(dQᵢ/ds) ]</p>
<p>A vanishing time derivative is a conservation law. That is the entire mechanism: symmetry lets the Euler–Lagrange equations reorganize themselves into the statement "this combination never changes."</p>
<p>Notice what the theorem does <em>not</em> require. It does not care whether the motion is simple or chaotic, solvable or hopeless. It does not require the symmetry to be geometrically obvious — any one-parameter invariance counts, including "hidden" ones mixing coordinates in strange ways. And it comes with a converse flavor: where no continuous symmetry exists, no such conservation law is guaranteed — which is exactly why energy is <em>not</em> conserved for a system driven by a time-dependent external field, and momentum is <em>not</em> conserved for a particle near a wall.</p>
<p>Cyclic coordinates, the last chapter's shortcut, are now revealed as Noether's theorem in its easiest disguise: if q doesn't appear in L, then translating q → q + s is a symmetry, dQ/ds = 1, and the conserved quantity is just ∂L/∂q̇ — the conjugate momentum. Noether's insight is that this survives even when no coordinate system makes the symmetry look that simple.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Emmy Noether proved the theorem while formally barred, as a woman, from a paid professorship at Göttingen; Hilbert had to announce her courses under his own name. Her theorem was born answering a real crisis — whether energy is conserved in general relativity — and Einstein wrote to Hilbert praising her "penetrating mathematical thinking."</p>
</div>`,
        },
        {
          id: "three-great-examples",
          title: "The Three Great Examples",
          content: `
<p>Now run the theorem on the three symmetries every isolated system enjoys, and watch the classical trinity of conservation laws fall out.</p>
<p><strong>1. Space translation → momentum.</strong> Take N particles with L = Σ½mᵢ|vᵢ|² − V, where V depends only on particle <em>separations</em>. Shift everything: xᵢ → xᵢ + s for all i. Separations don't change, speeds don't change, so L is invariant. Noether's sum is Σᵢ (∂L/∂ẋᵢ)·1 = Σᵢ mᵢẋᵢ:</p>
<p style="text-align:center;"><strong>Homogeneity of space ⇒ total momentum is conserved.</strong></p>
<p><strong>2. Rotation → angular momentum.</strong> Now rotate the whole system by angle s about the z-axis. If V depends only on distances (central and mutual forces), L is invariant. The transformation pushes each particle in the direction of increasing azimuth; working out Noether's sum in polar or Cartesian components gives Σᵢ mᵢ(xᵢẏᵢ − yᵢẋᵢ):</p>
<p style="text-align:center;"><strong>Isotropy of space ⇒ total angular momentum is conserved</strong> — one component per rotation axis, three in all.</p>
<p><strong>3. Time translation → energy.</strong> Time needs slightly different handling since it is the integration variable, but the result is clean: if L has no explicit time dependence (∂L/∂t = 0), then the quantity</p>
<p style="text-align:center;">H = Σᵢ q̇ᵢ(∂L/∂q̇ᵢ) − L</p>
<p>is conserved. For standard L = T − V with time-independent constraints, H works out to exactly T + V:</p>
<p style="text-align:center;"><strong>Homogeneity of time ⇒ energy is conserved.</strong></p>
<div class="key-concept">
  <h4>The dictionary</h4>
  <p>Space has no preferred place → momentum. Space has no preferred direction → angular momentum. Time has no preferred moment → energy. Conservation laws are not extra facts about nature; they are the shadows cast by the featurelessness of space and time.</p>
</div>
<p>The dictionary also predicts failures, which is where it proves its worth. A charged particle near a capacitor plate: translation symmetry broken perpendicular to the plate, and precisely that component of momentum is not conserved — while the parallel components still are. A pendulum whose support is jiggled: time symmetry broken, energy not conserved. A particle in a uniform field along z: rotations about z survive, so L<sub>z</sub> is conserved while L<sub>x</sub> and L<sub>y</sub> are not. The theorem doesn't just explain the laws you know — it tells you exactly when and how much of each survives.</p>`,
        },
        {
          id: "deep-meaning",
          title: "Why This Idea Organizes All of Physics",
          content: `
<p>Noether's theorem changed what physicists think a law of nature <em>is</em>. Before it, conservation laws were empirical treasures, discovered one by one. After it, they became consequences — and the symmetries behind them became the fundamental objects. Modern physics is largely the practice of guessing symmetries first and deriving physics second.</p>
<p>A tour of where the idea leads:</p>
<ul>
  <li><strong>Particle physics.</strong> Electric charge conservation follows from a continuous symmetry too — not of space or time, but an "internal" rotation of the quantum phase of charged fields (gauge symmetry). The Standard Model is, at heart, a list of such symmetries; the forces themselves are what invariance under <em>local</em> symmetry transformations demands.</li>
  <li><strong>Crystals and condensed matter.</strong> A crystal lattice breaks continuous translation symmetry down to discrete hops. Exact momentum conservation is accordingly demoted to conservation of "crystal momentum" modulo a lattice unit — directly observable in how electrons and phonons scatter.</li>
  <li><strong>Cosmology.</strong> An expanding universe is not time-translation invariant — there was a Big Bang; tomorrow's universe is larger than today's. Noether then <em>correctly warns</em> that total energy need not be conserved on cosmological scales, and indeed photons crossing expanding space lose energy to redshift with no compensating gain anywhere.</li>
  <li><strong>Quantum mechanics.</strong> The dictionary survives the quantum revolution intact: momentum generates translations, angular momentum generates rotations, the Hamiltonian generates time evolution. Selection rules in atomic spectra are Noether's theorem enforcing angular momentum bookkeeping photon by photon.</li>
</ul>
<div class="key-concept">
  <h4>Symmetry as strategy</h4>
  <p>When physicists proposed the neutrino (Pauli, 1930) rather than abandon energy conservation in beta decay, they were betting that time-translation symmetry is exact. The bet paid off: the neutrino was detected 26 years later. Trusting Noether's theorem — treating an apparent violation of a conservation law as a signal of something unseen — has been one of the most profitable heuristics in the history of science.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Not every symmetry of nature is continuous, and discrete ones (mirror reflection P, charge conjugation C, time reversal T) carry no Noether currents — which is partly why nature could afford to violate them. The 1957 discovery that beta decay tells left from right (parity violation) shocked physicists precisely because centuries of Noether-style thinking had made symmetry feel sacred.</p>
</div>
<p>For this course, the practical takeaway is a habit: before computing anything, ask "what transformations leave this Lagrangian alone?" Each answer is a conserved quantity, each conserved quantity kills one integration, and enough of them solve the problem outright. The next chapter applies the habit to the two-body problem — where translation, rotation, and time symmetry conspire to collapse six degrees of freedom into one.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Noether's theorem states that if a Lagrangian is invariant under a continuous one-parameter family of transformations qᵢ → Qᵢ(s), then:",
          options: [
            "the quantity Σᵢ (∂L/∂q̇ᵢ)(dQᵢ/ds) evaluated at s = 0 is constant in time",
            "every coordinate qᵢ is conserved",
            "the system's motion must display the same symmetry as the Lagrangian",
            "the Lagrangian equals the total energy",
          ],
          correctIndex: 0,
          explanation:
            "The conserved charge is each conjugate momentum weighted by the direction the symmetry pushes its coordinate, summed over coordinates. Solutions need not share the symmetry of the laws — an elliptical orbit is not rotationally symmetric even though the Lagrangian is; what the symmetry guarantees is a quantity the asymmetric motion conserves forever.",
        },
        {
          question:
            "Which pairing of symmetry and conserved quantity is correct?",
          options: [
            "Rotational symmetry → energy; time symmetry → angular momentum",
            "Translation symmetry → angular momentum; rotation → linear momentum",
            "Homogeneity of space → momentum; isotropy of space → angular momentum; homogeneity of time → energy",
            "Mirror symmetry → momentum; time symmetry → charge",
          ],
          correctIndex: 2,
          explanation:
            "No preferred place gives momentum conservation, no preferred direction gives angular momentum, no preferred moment gives energy. Mirror reflection is a discrete symmetry and carries no Noether charge at all — the theorem needs a continuous family of transformations smoothly connected to the identity.",
        },
        {
          question:
            "A pendulum hangs from a support that an external motor shakes vertically according to a prescribed schedule. Which Noether-based statement is correct?",
          options: [
            "Energy is conserved because gravity is a conservative force",
            "Time-translation symmetry is broken by the driving, so energy is not conserved — exactly as the theorem predicts",
            "Angular momentum about the support is conserved",
            "Noether's theorem does not apply to systems with constraints",
          ],
          correctIndex: 1,
          explanation:
            "The prescribed shaking puts explicit time dependence into the Lagrangian: restarting the experiment a moment later changes the physics, so time translation is not a symmetry and no energy conservation follows — the motor pumps energy in and out. The theorem handles constrained systems perfectly well; and gravity's conservativeness cannot rescue a symmetry the driving has destroyed.",
        },
        {
          question:
            "A particle moves in a uniform field pointing along the z-axis (say, gravity). Which quantities does Noether's theorem guarantee are conserved?",
          options: [
            "All three components of momentum and all three of angular momentum",
            "Nothing, because the field breaks all symmetries",
            "Only the energy",
            "pₓ, p_y, L_z, and the energy — the symmetries the field leaves intact",
          ],
          correctIndex: 3,
          explanation:
            "The field breaks translation symmetry along z (so p_z is not conserved) and rotations about x and y, but translations in the horizontal plane, rotations about z, and time translation all survive. Noether's theorem is quantitative about partial symmetry: each surviving one-parameter family yields its own conserved quantity, no more and no less.",
        },
        {
          question:
            "When beta-decay experiments seemed to show energy disappearing, Pauli proposed an invisible particle (the neutrino) rather than abandon energy conservation. In Noether's language, this was a bet that:",
          options: [
            "space is perfectly isotropic",
            "time-translation symmetry of the fundamental laws is exact, so the 'missing' energy had to be carried by something unobserved",
            "the Lagrangian of beta decay is cyclic in all coordinates",
            "discrete symmetries can produce conservation laws",
          ],
          correctIndex: 1,
          explanation:
            "Energy conservation stands or falls with time-translation invariance of the underlying laws. Trusting the symmetry meant the energy books had to balance, so an undetected particle must be carrying the difference — a prediction confirmed 26 years later. Discrete symmetries, by contrast, yield no conserved Noether charges, which is one reason their violation (parity, 1957) was survivable.",
        },
      ],
    },
    {
      id: "central-forces-revisited",
      title: "Two-Body & Central Forces Revisited",
      subtitle: "Reduced mass, orbits, and the language of scattering",
      sections: [
        {
          id: "reduced-mass",
          title: "Two Bodies Become One: The Reduced Mass",
          content: `
<p>The Kepler problem of Phase 1 cheated: it nailed the Sun in place and let the planet orbit it. Real gravity pulls both bodies; the Sun wobbles. The two-body problem — six coordinates, two coupled vector equations — looks markedly harder. Symmetry dissolves it.</p>
<p>Take masses m₁ and m₂ interacting only with each other through a potential V(|r₁ − r₂|) depending on their separation. Trade the six coordinates (r₁, r₂) for a smarter six:</p>
<ul>
  <li><strong>Center of mass:</strong> R = (m₁r₁ + m₂r₂)/(m₁ + m₂)</li>
  <li><strong>Relative coordinate:</strong> r = r₁ − r₂</li>
</ul>
<p>A short calculation rewrites the Lagrangian as a clean sum:</p>
<p style="text-align:center; font-size:1.1em;">L = ½(m₁ + m₂)Ṙ² + ½μṙ² − V(r),&nbsp;&nbsp; where <strong>μ = m₁m₂/(m₁ + m₂)</strong></p>
<p>The two pieces don't talk to each other. R is cyclic (translation symmetry — Noether at work), so the center of mass drifts at constant velocity and can be ignored. Everything interesting lives in the relative coordinate, which obeys the equation of a <em>single fictitious particle</em> of mass μ — the <strong>reduced mass</strong> — moving in the potential V(r).</p>
<div class="key-concept">
  <h4>Reading the reduced mass</h4>
  <p>μ = m₁m₂/(m₁ + m₂) is always smaller than either mass, and two limits orient you. If m₂ ≫ m₁ (planet and Sun), μ ≈ m₁: the light body orbits an essentially fixed heavy one, and the Phase 1 cheat is vindicated as an approximation. If m₁ = m₂ = m (a binary star), μ = m/2: two equal stars orbiting their midpoint behave like one half-mass particle circling a fixed center.</p>
</div>
<p>Angular momentum finishes the job. The relative motion conserves ℓ = μr²φ̇ (rotational symmetry), which first confines the orbit to a plane, then — via the effective potential U_eff(r) = V(r) + ℓ²/2μr² of the last chapter — reduces the plane to a line. Six degrees of freedom have collapsed to one: radial motion in a one-dimensional landscape. All of Kepler follows, now exactly: both bodies trace ellipses about their common center of mass, and Kepler's third law picks up a correction factor of (m₁ + m₂).</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Sun's reduced-mass wobble is how we found thousands of exoplanets: a Jupiter tugs its star into a small orbit whose Doppler shift we can measure to better than 1 m/s. The hydrogen atom uses the same mathematics — the electron–proton system has μ ≈ 0.9995 mₑ, and that 0.05% shift in spectral lines is easily measurable, and was used to discover deuterium in 1931.</p>
</div>`,
        },
        {
          id: "orbits-effective-potential",
          title: "Orbits from the Effective Potential",
          content: `
<p>With the two-body problem reduced to E = ½μṙ² + U_eff(r), the entire zoo of orbits can be read off a single graph. For gravity, V(r) = −Gm₁m₂/r ≡ −k/r, so:</p>
<p style="text-align:center;">U_eff(r) = −k/r + ℓ²/2μr²</p>
<p>The attractive −k/r loses to the centrifugal barrier at small r and wins at large r, producing a well with a single minimum. Now slide a horizontal line — the energy E — across the graph:</p>
<ul>
  <li><strong>E = U_eff(min):</strong> r is pinned at the minimum. A <strong>circular orbit</strong>, at radius r₀ = ℓ²/μk.</li>
  <li><strong>U_eff(min) &lt; E &lt; 0:</strong> r oscillates between two turning points, an inner and outer radius. A <strong>bound orbit</strong>; for the 1/r potential specifically, the closed ellipse.</li>
  <li><strong>E ≥ 0:</strong> the particle comes in from infinity, reflects off the barrier at one turning point, and escapes. An unbound flyby — <strong>parabola</strong> (E = 0) or <strong>hyperbola</strong> (E &gt; 0).</li>
</ul>
<p>To get shapes, not just ranges, transform from r(t) to r(φ). The clean route substitutes u = 1/r, and the equation of motion becomes strikingly simple:</p>
<p style="text-align:center;">d²u/dφ² + u = μk/ℓ²</p>
<p>— a harmonic oscillator equation in the variable u, with a constant push. Its solution u = (μk/ℓ²)(1 + ε·cos φ) is precisely the polar equation of a conic section with eccentricity ε: ellipse for ε &lt; 1, parabola for ε = 1, hyperbola for ε &gt; 1. Kepler's first law, derived rather than decreed.</p>
<div class="key-concept">
  <h4>Closure is a coincidence of 1/r</h4>
  <p>That bound orbits <em>close</em> — retrace themselves each revolution — is special to two potentials only (Bertrand's theorem): 1/r and r². For any other central force, the ellipse's axis slowly precesses. This makes planetary orbits exquisite detectors of non-Newtonian physics: Mercury's perihelion creeps 43 arcseconds per century beyond what other planets' tugs explain, and that residue was general relativity's first triumph.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The hidden reason Kepler orbits close is an extra conserved quantity beyond E and ℓ — the Laplace–Runge–Lenz vector, which points along the ellipse's fixed axis. Noether's theorem traces it to a "hidden" four-dimensional rotational symmetry of the 1/r problem; the same symmetry explains the surprising degeneracy of hydrogen's energy levels in quantum mechanics.</p>
</div>`,
        },
        {
          id: "scattering-impact-parameter",
          title: "Scattering: The Unbound Problem Inverted",
          content: `
<p>Now flip the perspective. Bound orbits ask: given a captive particle, what path does it trace? Scattering asks the experimentalist's question: fire a particle <em>past</em> a force center from far away — how much does its path bend? Since we cannot see inside a nucleus, deflecting projectiles off it is how its contents were — and still are — discovered.</p>
<p>The setup: a beam particle approaches from infinity with speed v (energy E = ½μv²) along a line that would miss the force center by a perpendicular distance <strong>b</strong>, the <strong>impact parameter</strong>. It swings past, and recedes to infinity deflected by the <strong>scattering angle θ</strong>. The whole encounter is summarized by one function:</p>
<p style="text-align:center; font-size:1.1em;"><strong>θ = θ(b)</strong> — deflection as a function of aim</p>
<p>The two conserved quantities do the work: the angular momentum is ℓ = μvb (fixed by the aim), and the energy fixes the speed. Head-on shots (b = 0) bounce straight back (θ = 180°) from a repulsive center; distant shots (b large) barely flinch (θ → 0). In between, θ(b) decreases smoothly, encoding the force law along the way.</p>
<p><strong>Worked example — hard sphere.</strong> Bounce point particles elastically off a rigid sphere of radius R. Geometry gives sin α = b/R, where α is the angle between the incoming line and the surface normal at impact, and the elastic bounce yields θ = π − 2α:</p>
<p style="text-align:center;">b = R·cos(θ/2) for b ≤ R; anything aimed beyond R sails past untouched.</p>
<p><strong>The Coulomb/gravity case.</strong> For a repulsive 1/r² force with potential κ/r (κ = q₁q₂/4πε₀ for charges), the hyperbolic-orbit machinery of the last section gives the classic result:</p>
<p style="text-align:center; font-size:1.1em;"><strong>b = (κ/2E)·cot(θ/2)</strong></p>
<p>Small b, violent deflection; large b, gentle nudge — with the exact trade dictated by the 1/r² law. This formula is one differentiation away from the most famous experimental prediction in atomic physics, coming in the next section.</p>
<div class="analogy">
  <h3>Analogy: Reading a Fountain in the Dark</h3>
  <p>You cannot see an invisible obstacle in a stream, but watch how the water deflects around it and you can reconstruct its shape. Scattering does exactly this with particle beams: the pattern of deflections θ(b) is a fingerprint of the unseen potential. Inverting that fingerprint is how twentieth-century physics read the inside of the atom.</p>
</div>`,
        },
        {
          id: "cross-sections-rutherford",
          title: "Cross Sections and the Rutherford Experiment",
          content: `
<p>One problem: b is unmeasurable. No experimenter can aim a single alpha particle at a nucleus with subatomic precision — beams pepper the target randomly. The observable is statistical: out of a uniform rain of projectiles, <em>how many</em> end up deflected into each direction? The bookkeeping quantity is the <strong>cross section</strong>.</p>
<p>The <strong>total cross section</strong> σ is the effective target area a scatterer presents: particles whose aim falls inside σ scatter, the rest miss. For the hard sphere, σ = πR² — literally the silhouette. The finer-grained tool is the <strong>differential cross section</strong> dσ/dΩ: the area of beam that gets funneled into each unit of solid angle Ω around a given direction. Since everything aimed within the ring between b and b + db scatters into angles between θ and θ + dθ, conservation of particle number gives:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dσ/dΩ = (b/sin θ)·|db/dθ|</strong></p>
<p>Feed in the Coulomb result b = (κ/2E)cot(θ/2), differentiate, and out comes the <strong>Rutherford formula</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dσ/dΩ = (κ/4E)² · 1/sin⁴(θ/2)</strong></p>
<div class="key-concept">
  <h4>What the formula predicted</h4>
  <p>Scattering should fall off as 1/sin⁴(θ/2) — steep, but crucially <em>not zero</em> at large angles — and scale as 1/E². In 1909, Geiger and Marsden fired alpha particles at gold foil and saw about 1 in 8000 bounce back beyond 90°. The prevailing "plum pudding" atom, with charge spread across the whole atomic volume, predicted essentially none: a diffuse charge cannot supply the near-contact 1/r² kick that large-angle scattering demands. Rutherford concluded the positive charge must be concentrated in a tiny nucleus — and his point-charge formula fit the data at every angle and energy.</p>
</div>
<p>Two caveats round out the classical story. The total Coulomb cross section diverges — integrate dσ/dΩ over all angles and the infinite range of the 1/r force scatters everything at least infinitesimally; in real matter, screening by electrons cuts the force off at atomic distances. And at high enough energy, alphas approach the nucleus closely enough to touch it — the measured deviation from Rutherford's formula at those energies was the first ruler laid across the nucleus itself, giving radii of a few femtometers.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Cross sections remain particle physics' native language: the LHC reports every discovery in them, using the affectionate unit the <strong>barn</strong>, 10⁻²⁸ m² — as in "you couldn't miss a barn door." A Higgs boson's production cross section is measured in picobarns. Subject 31 will pick up this thread exactly where Rutherford leaves it.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the two-body problem, transforming to center-of-mass and relative coordinates turns the Lagrangian into ½(m₁+m₂)Ṙ² + ½μṙ² − V(r). What is the physical meaning of μ = m₁m₂/(m₁+m₂)?",
          options: [
            "The average of the two masses",
            "The mass of the heavier body",
            "The total mass of the system",
            "The mass of the single fictitious particle whose motion in V(r) exactly reproduces the relative motion of the pair",
          ],
          correctIndex: 3,
          explanation:
            "The relative coordinate obeys the equation of one particle of mass μ in the potential V — the entire two-body dynamics beyond the free drift of the center of mass. The reduced mass is smaller than either individual mass: it equals m₁ when m₂ is huge (recovering the fixed-Sun approximation) and m/2 for equal masses (a binary star behaves like a half-mass particle orbiting a fixed point).",
        },
        {
          question:
            "For gravity, U_eff(r) = −k/r + ℓ²/2μr². A particle has energy E with U_eff(min) < E < 0. Its orbit is:",
          options: [
            "unbound — it escapes to infinity after one pass",
            "bound, with r oscillating between an inner and outer turning radius — the ellipse, for this potential",
            "a circle at the minimum of U_eff",
            "a spiral that falls into the center",
          ],
          correctIndex: 1,
          explanation:
            "Negative energy below zero but above the well's floor traps r between two turning points where E = U_eff. For the 1/r potential specifically this radial oscillation closes into an ellipse (Bertrand's theorem says only 1/r and r² potentials close all bound orbits). Falling to the center is forbidden by the centrifugal barrier for any nonzero ℓ; the circle requires E to sit exactly at the minimum.",
        },
        {
          question:
            "In a scattering experiment, the impact parameter b is:",
          options: [
            "the closest distance the particle actually reaches",
            "the target's radius",
            "the perpendicular distance by which the incoming straight-line trajectory would miss the force center",
            "the wavelength of the incident beam",
          ],
          correctIndex: 2,
          explanation:
            "b measures the aim: how far off-center the undeflected incoming line would pass. It fixes the angular momentum ℓ = μvb, and together with the energy it determines the whole trajectory, including the deflection angle θ(b). The actual distance of closest approach is larger than b for a repulsive force, and only for a head-on shot (b = 0) do the two notions coincide at the turning point.",
        },
        {
          question:
            "Why did the Geiger–Marsden observation of alpha particles bouncing back at more than 90° destroy the 'plum pudding' model of the atom?",
          options: [
            "A charge spread over the whole atom cannot produce the intense close-range force needed for large-angle deflection, but a tiny concentrated nucleus can",
            "Plum pudding atoms would absorb the alphas rather than scatter them",
            "The model predicted alphas would be deflected by electrons only, gaining energy",
            "Large-angle scattering violates conservation of momentum for any extended charge",
          ],
          correctIndex: 0,
          explanation:
            "Large-angle Coulomb scattering requires the projectile to feel a huge force, which the 1/r² law delivers only at very small distances — impossible if the positive charge is diluted through the atomic volume, since inside a spread-out charge the force actually weakens. Rutherford's point-nucleus formula dσ/dΩ = (κ/4E)²/sin⁴(θ/2) matched the ~1-in-8000 backscattering rate quantitatively at every angle and energy.",
        },
        {
          question:
            "The differential cross section dσ/dΩ = (b/sin θ)|db/dθ| connects theory to experiment because:",
          options: [
            "it eliminates the need to know the beam energy",
            "it converts the unmeasurable per-particle aim b into a measurable statistical rate — how much beam area feeds each direction of deflection",
            "it equals the total cross section for every potential",
            "it applies only to the Coulomb force",
          ],
          correctIndex: 1,
          explanation:
            "No experiment can aim at a nucleus with femtometer precision; beams sample all impact parameters uniformly. Particle conservation says everything aimed in the ring between b and b+db exits between θ and θ+dθ, and the ratio of areas is exactly dσ/dΩ — a detector-facing quantity computable from any θ(b), hard spheres and Coulomb alike. Integrating it over angles recovers the total cross section.",
        },
      ],
    },
    {
      id: "rigid-body-motion",
      title: "Rigid-Body Motion",
      subtitle: "Euler angles, the inertia tensor, and why tops don't fall",
      sections: [
        {
          id: "inertia-tensor",
          title: "The Inertia Tensor: When L and ω Part Ways",
          content: `
<p>Introductory physics tells a soothing lie: L = Iω, with I a number. That works for a wheel spinning about its symmetry axis. Spin anything less symmetric — a thrown book, a wobbling satellite — and angular momentum stops pointing along the rotation axis. Rotation in three dimensions needs the tensors you built in Subject 23.</p>
<p>A rigid body is a cloud of masses m<sub>α</sub> locked at fixed mutual distances. If it rotates with angular velocity vector ω about a fixed point, each mass moves at v<sub>α</sub> = ω × r<sub>α</sub>, and summing the angular momenta Σ m<sub>α</sub> r<sub>α</sub> × v<sub>α</sub> gives a relation that is linear in ω but mixes its components:</p>
<p style="text-align:center; font-size:1.1em;"><strong>L = I·ω</strong>,&nbsp;&nbsp; with I a 3×3 symmetric matrix — the <strong>inertia tensor</strong></p>
<p>Its diagonal entries are the familiar moments of inertia about the three axes, e.g. I<sub>xx</sub> = Σ m<sub>α</sub>(y<sub>α</sub>² + z<sub>α</sub>²). The off-diagonal entries, the <strong>products of inertia</strong> like I<sub>xy</sub> = −Σ m<sub>α</sub>x<sub>α</sub>y<sub>α</sub>, are the troublemakers: they measure how mass is skewed relative to the axes, and they are what tilts L away from ω. The rotational kinetic energy is likewise T = ½ω·I·ω.</p>
<div class="key-concept">
  <h4>L ∦ ω is not exotic — it is generic</h4>
  <p>Spin a dumbbell about an axis tilted relative to its bar: as the masses whirl, their angular momentum vector sweeps around a cone. Since L changes direction, a torque must be continuously supplied by the bearings — this is why unbalanced car wheels shake the whole chassis. Only for special axes does L line up with ω and the shaking vanish.</p>
</div>
<p>Which axes are special? Ask when I·ω is parallel to ω:</p>
<p style="text-align:center;">I·ω = λω</p>
<p>— an eigenvalue problem. The symmetric matrix I is guaranteed (spectral theorem, Subject 23) to have three real eigenvalues and three mutually perpendicular eigenvectors. Those directions are the body's <strong>principal axes</strong>; the eigenvalues I₁, I₂, I₃ are its <strong>principal moments of inertia</strong>. Every rigid body, however lumpy — a potato, a wrench, a continent — comes with this hidden orthogonal frame built in.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Balancing" a car wheel is applied eigenvector alignment: the mechanic adds small weights until the wheel's principal axis coincides with the axle, so L ∥ ω and the bearing torques vanish. The machine that finds where to put the weights is, mechanically speaking, solving an eigenvalue problem at 300 rpm.</p>
</div>`,
        },
        {
          id: "principal-axes-euler-angles",
          title: "Principal Axes and Euler Angles",
          content: `
<p>Work in the principal-axis frame and rigid-body mechanics simplifies dramatically. The inertia tensor is diagonal, so with ω = (ω₁, ω₂, ω₃) along the principal axes:</p>
<p style="text-align:center;">L = (I₁ω₁, I₂ω₂, I₃ω₃),&nbsp;&nbsp; T = ½(I₁ω₁² + I₂ω₂² + I₃ω₃²)</p>
<p>The eigenvalue spectrum sorts all bodies into three families:</p>
<ul>
  <li><strong>Spherical top</strong> (I₁ = I₂ = I₃): sphere, cube — yes, a cube: any axis through its center is principal with the same moment.</li>
  <li><strong>Symmetric top</strong> (I₁ = I₂ ≠ I₃): cylinder, frisbee, football, most spacecraft.</li>
  <li><strong>Asymmetric top</strong> (all different): book, tennis racket, cell phone — and almost everything else.</li>
</ul>
<p>Now, coordinates for orientation. A rigid body pivoting about a fixed point has three rotational degrees of freedom, and the standard choice is the <strong>Euler angles</strong> (φ, θ, ψ), reaching any orientation by three successive rotations:</p>
<ol>
  <li><strong>Precession φ:</strong> rotate about the space-fixed vertical axis.</li>
  <li><strong>Tilt (nutation angle) θ:</strong> rotate about the new intermediate axis, tipping the body's symmetry axis away from vertical.</li>
  <li><strong>Spin ψ:</strong> rotate about the body's own symmetry axis.</li>
</ol>
<p>For a spinning top, the three angles cleanly separate the motions you can see: ψ̇ is the fast spin, φ̇ is the slow sweep of the tilted axis around the vertical (precession), and θ̇ is the nodding of the tilt itself (nutation). Writing ω in terms of Euler angle rates and feeding it into T = ½Σ Iᵢωᵢ² produces the top's Lagrangian — with φ and ψ cyclic, yielding two conserved momenta that make the heavy top solvable.</p>
<div class="key-concept">
  <h4>A warning about Euler angles</h4>
  <p>When θ = 0, the first and third rotations turn about the same axis and the angles φ and ψ become indistinguishable — the coordinate system degenerates. This "gimbal lock" is a flaw of the coordinates, not the physics; it crashed navigation software often enough that modern spacecraft attitude systems use quaternions instead. It is a vivid lesson that generalized coordinates are a choice, with domains of validity.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>During Apollo 13, mission control warned the crew repeatedly about drifting toward gimbal lock while they hand-flew the crippled spacecraft — losing attitude reference in that state could have been fatal. Euler's 1776 coordinate system was, for one week in 1970, front-page news.</p>
</div>`,
        },
        {
          id: "eulers-equations-tennis-racket",
          title: "Euler's Equations and the Tennis-Racket Theorem",
          content: `
<p>Newton's rotational law dL/dt = τ is true in an inertial frame — but I is only constant in the frame of the rotating body. Transforming to body-fixed principal axes (which adds the usual ω × L term for a rotating frame) gives <strong>Euler's equations</strong>:</p>
<p style="text-align:center; font-size:1.05em;">
I₁·dω₁/dt = (I₂ − I₃)ω₂ω₃ + τ₁<br />
I₂·dω₂/dt = (I₃ − I₁)ω₃ω₁ + τ₂<br />
I₃·dω₃/dt = (I₁ − I₂)ω₁ω₂ + τ₃
</p>
<p>Even torque-free (τ = 0), the equations couple the components: rotation about one axis feeds rotation about the others whenever the moments differ. Torque-free motion is anything tumbling in space — a flipped book, a wrench adrift on the ISS, a dead satellite.</p>
<p><strong>Stability analysis.</strong> Order the moments I₁ &lt; I₂ &lt; I₃ and spin the body almost exactly about one principal axis, with tiny wobbles about the other two. Linearize Euler's equations in the small components:</p>
<ul>
  <li><strong>Spin about axis 1 (smallest I) or axis 3 (largest I):</strong> the wobble equations give d²(δω)/dt² = −(positive)·δω — oscillation. The wobble stays small: <strong>stable</strong>.</li>
  <li><strong>Spin about axis 2 (intermediate I):</strong> the sign flips: d²(δω)/dt² = +(positive)·δω — exponential growth. <strong>Unstable.</strong></li>
</ul>
<div class="key-concept">
  <h4>The tennis-racket theorem</h4>
  <p>Rotation about the axes of largest and smallest moment of inertia is stable; rotation about the intermediate axis is not. Test it now: flip a phone (careful) or a book (rubber-banded shut) about each of its three axes. Face-flips and long-axis spins fly true; the flip about the intermediate axis — the one a tennis racket makes when you flip it by the handle expecting to catch it the same way up — always adds an unpredictable half-twist.</p>
</div>
<p>The energy-and-momentum picture explains it beautifully. Torque-free motion conserves both L² and T, confining ω to the intersection of two ellipsoids in body coordinates. Near the largest and smallest axes those intersections are small closed loops — bounded wobble. Near the intermediate axis, the surfaces intersect in great looping paths that carry ω clear across the ellipsoid and back: the flip.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Cosmonaut Vladimir Dzhanibekov watched a wing-nut spin off a bolt aboard Salyut-7 in 1985 and periodically somersault in mid-air, flipping 180° every few seconds — the intermediate-axis instability performing in zero gravity. Video of the "Dzhanibekov effect," and of astronauts repeating it with pliers and books on the ISS, is the tennis-racket theorem's best advertisement.</p>
</div>`,
        },
        {
          id: "tops-and-precession",
          title: "Tops, Gyroscopes, and Precession",
          content: `
<p>Why doesn't a spinning top fall over? Gravity applies a torque that would topple it in half a second at rest. The answer is the signature move of rotational dynamics: <strong>a torque changes angular momentum in the direction of the torque</strong> — and for a fast top, that direction is sideways.</p>
<p>Take a top of mass m spinning rapidly at ω₃ about its symmetry axis (moment I₃), tilted, with its center of mass a distance d along the axis from the pivot. Gravity's torque τ = mgd·sin θ points horizontally, perpendicular to the axis. Since dL/dt = τ, the tip of the nearly-axial vector L moves sideways, sweeping the axis around the vertical in a cone. Setting the rate of sweep from the geometry (|dL/dt| = Ω·L·sin θ for a cone) gives the <strong>precession rate</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>Ω = mgd / (I₃ω₃)</strong></p>
<p>Faster spin, slower precession — which matches what every top shows as friction bleeds off its spin: the precession visibly quickens before the top finally succumbs. Superposed on the smooth precession is <strong>nutation</strong>, a small nodding oscillation of the tilt angle θ, prominent when the top is released carelessly and nearly invisible for a fast, cleanly started gyroscope.</p>
<div class="key-concept">
  <h4>Two precessions — don't conflate them</h4>
  <p><strong>Torque-driven precession</strong> (this section) needs gravity or another torque: the top, the gyrocompass, a bicycle wheel on a rope. <strong>Torque-free precession</strong> needs none: a tilted symmetric top in empty space has constant L, but ω and the body axis cone around it at rate Ω_body = ω₃(I₃ − I₁)/I₁ in the body frame — a pure consequence of L ∦ ω. A thrown frisbee's wobble (about twice its spin rate, since I₃ ≈ 2I₁ for a thin disc) is torque-free; Earth's own version, the Chandler wobble, carries the pole around a ~10 m circle. Same word, different physics.</p>
</div>
<p>Earth exhibits the torque-driven kind too, on a grander clock. The Sun and Moon pull on Earth's equatorial bulge, applying a steady torque to our spinning planet; the spin axis answers exactly like the top's, precessing around the ecliptic pole once every ~26,000 years. Polaris is a temporary pole star — Vega takes the job in about 12,000 years — and the zodiac constellations have slid a full sign since Babylonian astrologers fixed their calendar, which is why astrology's "signs" no longer match the actual constellations on your birthday.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Gyroscopic stubbornness — a fast-spinning rotor resists reorientation of its L — steers real machinery: ship gyrocompasses find true north from Earth's rotation, the Hubble telescope aims with reaction wheels, and Gravity Probe B used four of the roundest spheres ever manufactured to measure spacetime itself twisting Earth's local inertial frames, confirming general relativity's frame-dragging.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "For a general rigid body, the angular momentum is L = I·ω with I a symmetric 3×3 tensor. When is L parallel to ω?",
          options: [
            "Always — L = Iω guarantees it",
            "Only when the body is a perfect sphere",
            "When ω lies along one of the three principal axes, the eigenvectors of the inertia tensor",
            "Only when no torque acts",
          ],
          correctIndex: 2,
          explanation:
            "L ∥ ω requires I·ω = λω, an eigenvalue equation. The spectral theorem guarantees the symmetric tensor I has three real eigenvalues and three orthogonal eigenvectors — every body's principal axes, sphere or potato. Off those axes the products of inertia tilt L away from ω, which is why an unbalanced wheel needs continuous bearing torques and shakes the car.",
        },
        {
          question:
            "A rigid body has principal moments I₁ < I₂ < I₃. Torque-free rotation is unstable about:",
          options: [
            "the axis with the intermediate moment I₂ — small wobbles grow exponentially and the body flips",
            "the axis with the smallest moment I₁",
            "the axis with the largest moment I₃",
            "all three axes equally",
          ],
          correctIndex: 0,
          explanation:
            "Linearizing Euler's equations about each axis gives oscillating perturbations for the largest and smallest moments but exponentially growing ones for the intermediate axis — the tennis-racket theorem. Flip a book about its intermediate axis and it adds an uncommanded half-twist; the same physics produced the Dzhanibekov wing-nut somersaults filmed aboard Salyut-7.",
        },
        {
          question:
            "The Euler angles (φ, θ, ψ) describe a spinning top's orientation. Which physical motion does each rate correspond to?",
          options: [
            "φ̇ is the spin, θ̇ is the precession, ψ̇ is the nutation",
            "φ̇ is the precession about the vertical, θ̇ is the nutation (nodding of the tilt), ψ̇ is the spin about the body's own axis",
            "All three describe precession about different axes",
            "φ̇ and ψ̇ are both nutation rates; θ̇ is the spin",
          ],
          correctIndex: 1,
          explanation:
            "The three successive rotations were designed to separate the top's motions: φ sweeps the tilted axis around the vertical (precession), θ is the tilt itself so θ̇ is its nodding (nutation), and ψ turns the body about its own symmetry axis (spin). In the top's Lagrangian both φ and ψ are cyclic, and their two conserved momenta are what make the heavy top exactly solvable.",
        },
        {
          question:
            "A gyroscope spinning at rate ω₃ precesses under gravity at Ω = mgd/(I₃ω₃). As friction gradually slows the spin, the precession:",
          options: [
            "slows down in proportion",
            "stops abruptly",
            "stays constant, since gravity is unchanged",
            "speeds up, because Ω is inversely proportional to the spin rate",
          ],
          correctIndex: 3,
          explanation:
            "Ω ∝ 1/ω₃: the same gravitational torque must swing a smaller angular momentum vector around, so the cone is swept faster. Every real top demonstrates this — the stately slow precession of a freshly spun top visibly quickens as the spin decays, before the top finally wobbles and falls. Earth's 26,000-year precession is the same formula with the Sun and Moon supplying the torque.",
        },
        {
          question:
            "A frisbee thrown with a slight tilt wobbles even though essentially no torque acts on it in flight. This torque-free precession happens because:",
          options: [
            "air resistance applies a hidden torque",
            "with I₃ ≠ I₁, angular momentum and angular velocity are not parallel, so ω and the symmetry axis cone around the fixed L vector",
            "the frisbee's angular momentum is not conserved",
            "gimbal lock develops between the spin and tilt angles",
          ],
          correctIndex: 1,
          explanation:
            "With no torque, L is fixed in space — but a tilted symmetric top's ω is not parallel to L, so both ω and the body axis precess around it, at body-frame rate ω₃(I₃−I₁)/I₁. For a thin disc I₃ ≈ 2I₁, making the wobble roughly twice the spin rate. Earth's Chandler wobble is the same phenomenon; torque-driven precession (the falling-over kind) is a different effect requiring an actual torque.",
        },
      ],
    },
    {
      id: "small-oscillations",
      title: "Small Oscillations",
      subtitle: "Normal modes as an eigenvalue problem — done right",
      sections: [
        {
          id: "linearizing-equilibrium",
          title: "Linearizing Around Equilibrium",
          content: `
<p>Here is a claim with astonishing reach: near a stable equilibrium, <em>every</em> mechanical system — molecule, bridge, crystal, star — behaves like a set of independent harmonic oscillators. This chapter proves the claim and builds the machinery, and the machinery is linear algebra.</p>
<p>Let a system have coordinates q₁, …, q<sub>n</sub> and a potential V(q) with a minimum at q⁰. Measure small displacements η = q − q⁰ and Taylor-expand:</p>
<p style="text-align:center;">V ≈ V(q⁰) + ½ Σᵢⱼ Kᵢⱼ ηᵢηⱼ,&nbsp;&nbsp; Kᵢⱼ = ∂²V/∂qᵢ∂qⱼ at the minimum</p>
<p>The constant is irrelevant; the linear term vanishes <em>because</em> q⁰ is a minimum — that is what equilibrium means. The leading survivor is quadratic, with K the symmetric matrix of curvatures (the Hessian). Meanwhile the kinetic energy, for small motions, is also quadratic in the velocities:</p>
<p style="text-align:center;">T ≈ ½ Σᵢⱼ Mᵢⱼ η̇ᵢη̇ⱼ</p>
<p>with M the symmetric, positive-definite <strong>mass matrix</strong> (evaluated at equilibrium; often just diagonal masses, but coordinates like angles bring in factors such as ml²). The Lagrangian L = ½η̇ᵀMη̇ − ½ηᵀKη yields the linearized equations of motion:</p>
<p style="text-align:center; font-size:1.1em;"><strong>M·η̈ = −K·η</strong></p>
<div class="key-concept">
  <h4>The universality of the harmonic approximation</h4>
  <p>No physical potential is exactly quadratic — but every smooth potential is quadratic <em>near a minimum</em>, and near minima is where stable systems spend their time. This single fact explains why the harmonic oscillator, seemingly a toy, underwrites molecular spectra, phonons in solids, the vibrations of buildings, and (as quantum fields) particle physics itself. Anharmonic corrections matter only when amplitudes grow large.</p>
</div>
<p>What counts as "small"? Small enough that the cubic and higher terms of V are negligible against the quadratic — for a pendulum, amplitudes of a few degrees; for chemical bonds at room temperature, ordinary thermal jiggling qualifies comfortably. And stability is diagnosed by K itself: if any direction through q⁰ has negative curvature (K has a negative eigenvalue), the "equilibrium" is a saddle and the system flees along that direction — the linearization then predicts exponential escape rather than oscillation, which is precisely what it should predict.</p>
<p>The task ahead: solve M·η̈ = −K·η for n coupled coordinates. The equations are coupled through the off-diagonal entries of M and K — motion of one coordinate drives the others. The next section uncouples them with one eigenvalue computation.</p>`,
        },
        {
          id: "normal-modes-eigenproblem",
          title: "Normal Modes: The Eigenvalue Problem",
          content: `
<p>To solve M·η̈ = −K·η, guess what a system near stable equilibrium ought to do: oscillate at some single frequency with some fixed pattern of amplitudes. Try η(t) = a·cos(ωt), with a a constant vector — every coordinate moving in lockstep, same frequency, same phase. Substituting turns the differential equation into pure algebra:</p>
<p style="text-align:center; font-size:1.15em;"><strong>K·a = ω² M·a</strong></p>
<p>This is a <strong>generalized eigenvalue problem</strong> — Subject 23's eigenproblem with the mass matrix playing the role of the metric. Nontrivial solutions exist only for special values of ω², given by:</p>
<p style="text-align:center;">det(K − ω²M) = 0</p>
<p>an n-th order polynomial in ω² with n roots. The structure of the answer:</p>
<ul>
  <li>The n roots ω₁², …, ω<sub>n</sub>² are the <strong>normal frequencies</strong> — all real, and positive for a true minimum (K and M symmetric, M positive definite guarantee it).</li>
  <li>Each eigenvector a⁽ᵏ⁾ is a <strong>normal mode shape</strong>: the fixed ratio of amplitudes in which the coordinates move together at frequency ω<sub>k</sub>.</li>
  <li>The modes are orthogonal in the mass-weighted sense: a⁽ʲ⁾ᵀM a⁽ᵏ⁾ = 0 for j ≠ k.</li>
</ul>
<div class="key-concept">
  <h4>Diagonalizing the physics</h4>
  <p>Define normal coordinates Q<sub>k</sub> as the amplitudes of each mode. In these coordinates the Lagrangian splits into n independent one-dimensional oscillators: Q̈<sub>k</sub> = −ω<sub>k</sub>²Q<sub>k</sub>. The coupling hasn't been approximated away — it has been rotated away. Every small motion of the system, however complicated it looks, is exactly a superposition: η(t) = Σ<sub>k</sub> A<sub>k</sub> a⁽ᵏ⁾ cos(ω<sub>k</sub>t + φ<sub>k</sub>), with the 2n constants set by initial conditions.</p>
</div>
<p>Some frequencies can come out zero. A zero mode, ω = 0, signals a direction with no restoring force — usually a symmetry: translate a free molecule and nothing pulls it back. These aren't failures of the method; they are Noether's theorem showing up in the spectrum, and one simply separates them from the genuine vibrations.</p>
<p>The physical picture is worth internalizing before the worked examples. Struck arbitrarily, a coupled system responds with a seemingly messy motion — but the mess is an interference pattern of a few pure tones. A spectrum analyzer (or a Fourier transform) applied to any coordinate reveals sharp peaks at exactly ω₁, …, ω<sub>n</sub>. Structural engineers ping bridges and read off the modes; chemists shine infrared light on molecules and do precisely the same thing.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>This eigenproblem is why concert halls, guitar bodies, and MEMS gyroscopes are designed in "modal analysis" software: the mesh may have a million coordinates, but the audible physics lives in the lowest few dozen eigenvalues of exactly the equation det(K − ω²M) = 0.</p>
</div>`,
        },
        {
          id: "double-pendulum-worked",
          title: "Worked: The Double Pendulum at Small Angles",
          content: `
<p>The double pendulum — mass m on a rod of length l, second identical mass hanging from the first — will be this course's poster child for chaos at large amplitudes. At small amplitudes it is beautifully orderly, and small enough to work by hand.</p>
<p>With angles θ₁, θ₂ measured from vertical and everything kept to quadratic order, the Lagrangian is:</p>
<p style="text-align:center;">L = ½ml²(2θ̇₁² + 2θ̇₁θ̇₂ + θ̇₂²) − ½mgl(2θ₁² + θ₂²)</p>
<p>(The upper pivot carries both masses — hence the 2's — and the cross term θ̇₁θ̇₂ is the coupling.) Read off the matrices in η = (θ₁, θ₂):</p>
<p style="text-align:center;">M = ml²·[[2, 1], [1, 1]],&nbsp;&nbsp; K = mgl·[[2, 0], [0, 1]]</p>
<p>Set λ = ω²l/g and expand det(K − ω²M) = 0:</p>
<p style="text-align:center;">(2 − 2λ)(1 − λ) − λ² = 0&nbsp;&nbsp;⇒&nbsp;&nbsp;λ² − 4λ + 2 = 0&nbsp;&nbsp;⇒&nbsp;&nbsp;λ = 2 ± √2</p>
<p style="text-align:center; font-size:1.1em;"><strong>ω² = (2 − √2)·g/l ≈ 0.586 g/l&nbsp;&nbsp;and&nbsp;&nbsp;ω² = (2 + √2)·g/l ≈ 3.414 g/l</strong></p>
<p>Substituting each back gives the eigenvectors:</p>
<ul>
  <li><strong>Slow mode</strong> (ω² = (2 − √2)g/l): a ∝ (1, √2). Both pendula swing the <em>same way</em>, the lower one with √2 times the amplitude — a gentle, whole-system sway at a frequency <em>below</em> a single pendulum's √(g/l).</li>
  <li><strong>Fast mode</strong> (ω² = (2 + √2)g/l): a ∝ (1, −√2). The pendula swing in <em>opposition</em>, pivoting against each other — a rapid zigzag, stiffer and hence faster than a lone pendulum.</li>
</ul>
<div class="key-concept">
  <h4>Beats: the signature of two nearby modes</h4>
  <p>Start the system by displacing only the upper pendulum. That initial condition is a mixture of both modes, and as they drift out of phase the motion visibly migrates: the upper pendulum's swing dies down as the lower one's grows, then the energy flows back. This slow exchange — beats at the difference frequency — is the audible/visible fingerprint of coupled oscillators everywhere, from twin guitar strings to coupled optical cavities.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Crank the amplitude up and the neglected cubic and quartic terms couple the modes nonlinearly: energy exchange turns erratic, and beyond roughly a radian the motion goes fully chaotic — the same device, docile in this chapter, headlines the chaos chapter. Keep the matrices; we'll need the contrast.</p>
</div>`,
        },
        {
          id: "co2-molecular-vibrations",
          title: "Worked: CO₂ and Molecular Vibrations",
          content: `
<p>Molecules are mass–spring systems built by chemistry: nuclei are the masses, chemical bonds the springs (each bond a quadratic minimum of the electronic energy). Normal-mode analysis therefore <em>predicts infrared spectra</em> — and no molecule matters more to daily life than CO₂.</p>
<p>Model CO₂ along its axis: mass m (oxygen), mass M (carbon), mass m (oxygen), joined by two identical bonds of stiffness k. With displacements x₁, x₂, x₃, the eigenproblem factorizes by symmetry, and the three longitudinal modes are:</p>
<ul>
  <li><strong>ω² = 0:</strong> a = (1, 1, 1). All three atoms slide together — pure translation, the zero mode demanded by momentum conservation. Not a vibration.</li>
  <li><strong>Symmetric stretch, ω² = k/m:</strong> a = (1, 0, −1). The oxygens breathe in and out in mirror image; the carbon, pulled equally both ways, stays still.</li>
  <li><strong>Antisymmetric stretch, ω² = (k/m)(1 + 2m/M):</strong> a = (1, −2m/M, 1). Both oxygens move one way while the carbon lunges the other, keeping total momentum zero — the stiffest, fastest mode.</li>
</ul>
<p>Off-axis, the molecule can also <strong>bend</strong> — a lower-frequency mode, doubly degenerate since the molecule can flex in either transverse plane. Count: 3 atoms × 3 directions = 9 coordinates, minus 3 translations and 2 rotations (a linear molecule's spin about its own axis doesn't count), leaving 3N − 5 = 4 vibrations: the two stretches plus the two-fold bend. The mode structure of a real greenhouse gas, from a determinant.</p>
<div class="key-concept">
  <h4>Which modes absorb light</h4>
  <p>Infrared light grips a molecule through its electric dipole moment, so a mode absorbs IR only if the vibration <em>changes</em> that dipole. CO₂'s symmetric stretch keeps the molecule's perfect symmetry — dipole stays zero, mode invisible to IR. The antisymmetric stretch (4.3 μm) and the bend (15 μm) do oscillate the dipole and absorb strongly. Earth's surface radiates its heat with a peak near 15 μm — squarely on the bending mode of CO₂. The greenhouse effect is, at bottom, an eigenvector of a 3-mass spring chain intercepting the planet's outgoing spectrum.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Spectroscopists label these modes 1388 cm⁻¹, 667 cm⁻¹, and 2349 cm⁻¹ in wavenumbers, and the CO₂ laser — workhorse of industrial cutting — lases on transitions between the very stretch modes computed here. Quantum mechanics changes what energies each mode may hold (ħω quanta, Subject 26); the mode shapes and frequencies remain this chapter's classical eigenvectors.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does every smooth potential look harmonic near a stable equilibrium?",
          options: [
            "Because friction removes the higher-order terms",
            "Because the Taylor expansion about a minimum has no linear term — the first surviving contribution is the quadratic one, which is a harmonic potential",
            "Because all fundamental forces are springs at short range",
            "Because kinetic energy is always quadratic in velocity",
          ],
          correctIndex: 1,
          explanation:
            "At a minimum the gradient of V vanishes by definition, so the expansion starts (after an irrelevant constant) at the quadratic term ½ηᵀKη. Cubic and higher terms exist but are negligible for small displacements. This is why harmonic oscillators describe molecules, crystals, and bridges alike — not because nature is made of springs, but because stable systems live near minima.",
        },
        {
          question:
            "Substituting the trial solution η(t) = a·cos(ωt) into M·η̈ = −K·η yields:",
          options: [
            "a single equation fixing ω for any amplitude vector a",
            "an inconsistency, since coupled equations have no single-frequency solutions",
            "the generalized eigenvalue problem K·a = ω²M·a, solvable only for n special frequencies with corresponding mode-shape eigenvectors",
            "the requirement that M and K be diagonal",
          ],
          correctIndex: 2,
          explanation:
            "The guess converts calculus to algebra: nontrivial a exists only when det(K − ω²M) = 0, whose n roots are the normal frequencies; each eigenvector gives the fixed amplitude ratios of that mode. Coupled systems do have single-frequency solutions — exactly n of them — and every small motion is a superposition of these, which is what makes the eigenproblem the complete solution.",
        },
        {
          question:
            "The small-angle double pendulum (equal masses and lengths) has normal frequencies ω² = (2 ∓ √2)g/l. What distinguishes the two modes physically?",
          options: [
            "In the slow mode both pendula swing together (lower one √2 times larger); in the fast mode they swing in opposition",
            "In the slow mode only the top pendulum moves; in the fast mode only the bottom one",
            "The slow mode is circular motion, the fast mode is planar",
            "The two modes differ only in amplitude, not in shape",
          ],
          correctIndex: 0,
          explanation:
            "The eigenvectors are (1, √2) and (1, −√2): the in-phase sway is soft and slow (below a single pendulum's frequency), while the anti-phase zigzag fights the coupling and oscillates faster. Displacing only one pendulum excites a mixture of both modes, producing the tell-tale beating in which energy sloshes back and forth between the two bobs.",
        },
        {
          question:
            "In the 1D model of CO₂, one longitudinal solution has ω = 0 with eigenvector (1, 1, 1). This zero mode represents:",
          options: [
            "the bending vibration",
            "an error — frequencies must be positive",
            "the symmetric stretch",
            "uniform translation of the whole molecule, a symmetry direction with no restoring force, as momentum conservation requires",
          ],
          correctIndex: 3,
          explanation:
            "Sliding all three atoms equally stretches neither bond, so no restoring force acts and ω = 0. Zero modes are Noether's theorem appearing in the spectrum — one for each continuous symmetry, here translation. The genuine vibrations are the symmetric stretch (carbon still), the antisymmetric stretch (carbon lunging opposite the oxygens), and the transverse bends.",
        },
        {
          question:
            "CO₂'s symmetric stretch does not absorb infrared light, yet the molecule is a potent greenhouse gas. Why?",
          options: [
            "The symmetric stretch is too fast for infrared photons",
            "IR absorption requires the vibration to change the molecular dipole moment; the symmetric stretch keeps it zero, but the bend (15 μm) and antisymmetric stretch (4.3 μm) oscillate the dipole and absorb strongly",
            "Greenhouse warming comes from visible light, not infrared",
            "CO₂ absorbs only when it collides with nitrogen",
          ],
          correctIndex: 1,
          explanation:
            "Light couples to the molecule's oscillating dipole. The symmetric stretch preserves CO₂'s symmetric charge distribution, so it is IR-inactive; the other modes break the symmetry as they vibrate and absorb efficiently. Earth's thermal radiation peaks near 15 μm — right on the bending mode — which is why this particular eigenvector of a three-mass spring chain shapes the planet's energy budget.",
        },
      ],
    },
    {
      id: "hamiltonian-mechanics",
      title: "Hamiltonian Mechanics",
      subtitle: "Phase space, Poisson brackets, and the doorway to quantum mechanics",
      sections: [
        {
          id: "legendre-transform",
          title: "The Legendre Transform: Trading Velocities for Momenta",
          content: `
<p>Lagrangian mechanics describes a system by coordinates and velocities (q, q̇). Hamilton's reformulation swaps velocities for momenta — and though the physics is identical, the change of language turns out to be the one quantum mechanics and statistical mechanics speak natively.</p>
<p>The tool is the <strong>Legendre transform</strong>, the standard device (you met it in thermodynamics, trading U for F = U − TS) for exchanging a variable for the derivative with respect to it. Define each momentum p = ∂L/∂q̇, solve for q̇ in terms of (q, p), and build the <strong>Hamiltonian</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>H(q, p, t) = Σᵢ pᵢq̇ᵢ − L</strong></p>
<p>For standard systems (T quadratic in velocities, time-independent constraints) H comes out equal to T + V — the energy, expressed in coordinates and momenta. A particle in a potential: H = p²/2m + V(q). The pendulum: H = p²/2ml² − mgl·cos θ.</p>
<p>Taking the differential of H and using the Euler–Lagrange equations yields the payoff, <strong>Hamilton's equations</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dq/dt = ∂H/∂p,&nbsp;&nbsp;&nbsp;dp/dt = −∂H/∂q</strong></p>
<div class="key-concept">
  <h4>What was gained</h4>
  <p>One second-order equation per coordinate became two first-order equations — and beautifully symmetric ones, with q and p on almost equal footing (that lone minus sign carries all of mechanics). First-order equations mean a state (q, p) determines the entire future through a <em>flow</em>: from each point, the equations point an arrow, and motion is following arrows. This geometric picture — dynamics as a velocity field on the space of states — is what the next section makes literal, and what fails gracefully into quantum mechanics rather than breaking.</p>
</div>
<p>A quick check on the pendulum: ∂H/∂p = p/ml² = θ̇ (definition of p recovered), and −∂H/∂θ = −mgl·sin θ = ṗ (the equation of motion). Nothing new — by design. And notice H's other convenience: dH/dt along the motion equals ∂H/∂t, so a Hamiltonian without explicit time dependence is automatically conserved — the cleanest statement yet of energy conservation, and the reason the bead-on-rotating-wire's conserved quantity was "the Hamiltonian" rather than T + V.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>William Rowan Hamilton wrote this formalism in 1833, deriving it from his earlier work on <em>optics</em> — the same mathematics that traces light rays traces trajectories. That optical–mechanical analogy lay dormant until 1926, when Schrödinger asked what "wave mechanics" would stand to Hamilton's rays as wave optics stands to ray optics. The answer was the Schrödinger equation.</p>
</div>`,
        },
        {
          id: "phase-space",
          title: "Phase Space: Mechanics as Geometry",
          content: `
<p>Collect all the coordinates and momenta into a single point x = (q₁,…,q<sub>n</sub>, p₁,…,p<sub>n</sub>): one point in a 2n-dimensional <strong>phase space</strong> captures the complete instantaneous state of the system. Hamilton's equations assign every point a velocity, so the whole space fills with a flow field, and the system's history is a streamline.</p>
<p>The pendulum's phase space (θ horizontal, p vertical) is the portrait to memorize:</p>
<ul>
  <li><strong>Near the bottom:</strong> nested ovals — small oscillations, circling the stable equilibrium at (0, 0).</li>
  <li><strong>High energy:</strong> wavy horizontal curves — the pendulum whirling over the top, θ forever increasing (or decreasing).</li>
  <li><strong>The separatrix:</strong> the critical curve between the two regimes, passing through the unstable balance point at θ = π. On it, the pendulum takes infinite time to creep up to the inverted position.</li>
</ul>
<p>Every qualitative fact about every possible pendulum motion is visible at a glance — no solving required. That is the phase portrait's power: it converts questions about dynamics into questions about geometry.</p>
<div class="key-concept">
  <h4>Trajectories never cross</h4>
  <p>Through each phase-space point passes exactly one trajectory, because Hamilton's equations give a unique velocity there. Two crossing trajectories would mean one state with two futures — determinism forbids it. (Position space has no such rule: a projectile's path can loop over itself, because position alone is not a state.) This uniqueness is what makes phase space the honest arena for mechanics — and it constrains chaos in ways the chaos chapter will exploit.</p>
</div>
<p>Now let many systems flow at once. Take a cloud of initial conditions — an uncertainty blob — and watch Hamilton's equations carry it along. <strong>Liouville's theorem</strong> states the remarkable result: the cloud deforms, stretches, and filaments, but its <em>volume never changes</em>. The proof is one line of vector calculus: the flow's divergence, Σ [∂q̇/∂q + ∂ṗ/∂p] = Σ [∂²H/∂q∂p − ∂²H/∂p∂q], vanishes identically. Hamiltonian flow is incompressible — mechanics stirs phase space like an ideal fluid, never squeezing it.</p>
<p>Liouville's theorem is the classical bedrock under statistical mechanics (probability distributions over phase space keep their normalization and density along the flow — the microcanonical ensemble depends on it), under Heisenberg's uncertainty relation's classical shadow (you cannot compress a state-cloud to a point), and under the chaos chapter's central distinction: Hamiltonian systems can scramble but never contract, so they have no attractors.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Accelerator physicists live by Liouville: a particle beam's phase-space volume ("emittance") cannot be reduced by any arrangement of magnets, however clever — only stretched and folded. Beating Liouville requires non-Hamiltonian tricks like radiation damping or laser cooling, which is precisely how modern colliders and atom traps achieve their brilliance.</p>
</div>`,
        },
        {
          id: "poisson-brackets",
          title: "Poisson Brackets: The Algebra of Observables",
          content: `
<p>Phase space comes with an algebraic structure so useful it eventually became the skeleton of quantum mechanics. For any two functions f and g of the state (q, p), define their <strong>Poisson bracket</strong>:</p>
<p style="text-align:center; font-size:1.1em;">{f, g} = Σᵢ (∂f/∂qᵢ · ∂g/∂pᵢ − ∂f/∂pᵢ · ∂g/∂qᵢ)</p>
<p>The fundamental brackets, evaluated instantly from the definition:</p>
<p style="text-align:center; font-size:1.1em;"><strong>{qᵢ, pⱼ} = δᵢⱼ,&nbsp;&nbsp;{qᵢ, qⱼ} = 0,&nbsp;&nbsp;{pᵢ, pⱼ} = 0</strong></p>
<p>Each coordinate pairs with its own momentum and nothing else — the bracket encodes which variables are canonically conjugate. Now the master formula: how does any observable f(q, p) change as the system evolves? Chain rule plus Hamilton's equations gives:</p>
<p style="text-align:center; font-size:1.15em;"><strong>df/dt = {f, H}</strong>&nbsp;&nbsp;(+ ∂f/∂t if f depends on time explicitly)</p>
<p>All of dynamics in five symbols. Setting f = q or f = p recovers Hamilton's equations themselves; the formalism has become perfectly uniform, with H the engine driving every observable.</p>
<div class="key-concept">
  <h4>Conservation, algebraically</h4>
  <p>f is conserved if and only if {f, H} = 0 — "f Poisson-commutes with the Hamiltonian." Noether's theorem gains an algebraic voice: symmetries are functions that bracket to zero with H, and moreover each conserved f <em>generates</em> its own symmetry transformation through bracketing. Momentum generates translations; angular momentum generates rotations; H itself generates time evolution. Symmetry and dynamics are now the same kind of object.</p>
</div>
<p>Brackets between conserved quantities carry structure too. The angular momentum components obey:</p>
<p style="text-align:center;">{L<sub>x</sub>, L<sub>y</sub>} = L<sub>z</sub>&nbsp;&nbsp;(and cyclic permutations)</p>
<p>— the rotation group's fingerprint, computed with pure calculus a century before "group theory" entered physics. If those relations look familiar, they should: they are, up to a factor, the commutation relations of quantum angular momentum. That is no coincidence, and the final section of this chapter makes the correspondence exact.</p>
<p>Poisson brackets also obey the algebraic identities that make them a genuine product: antisymmetry {f, g} = −{g, f}, linearity, the product rule {fg, h} = f{g, h} + {f, h}g, and the Jacobi identity. Any operation with these properties is now called a <em>Lie bracket</em> — Poisson's 1809 invention, rediscovered as the common language of symmetry across mathematics.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A deep bonus (Poisson's theorem): the bracket of two conserved quantities is itself conserved. Sometimes it yields nothing new — but sometimes it manufactures a genuinely new conservation law from two old ones, as with the components of the Runge–Lenz vector in the Kepler problem.</p>
</div>`,
        },
        {
          id: "canonical-transformations",
          title: "Canonical Transformations and Hamilton–Jacobi",
          content: `
<p>Lagrangian mechanics freed us to choose any coordinates q. Hamiltonian mechanics is freer still: it allows changes of variables that <em>mix coordinates and momenta</em> — transformations (q, p) → (Q, P) treating phase space as a single geometric object. Not all mixtures are legal: the new variables must still obey Hamilton's equations for some new Hamiltonian. Transformations that preserve this structure are called <strong>canonical</strong>.</p>
<div class="key-concept">
  <h4>The bracket test</h4>
  <p>A transformation is canonical exactly when it preserves the fundamental Poisson brackets: {Qᵢ, Pⱼ} = δᵢⱼ, {Qᵢ, Qⱼ} = {Pᵢ, Pⱼ} = 0, computed with respect to the old variables. The brackets are the invariant skeleton of mechanics; canonical transformations are its symmetries. (Liouville's theorem generalizes too: canonical maps preserve phase-space volume.)</p>
</div>
<p>Why bother? Because a clever canonical transformation can trivialize a problem. The harmonic oscillator, H = p²/2m + ½mω²q², under the canonical map to "angle" φ and "action" I (with q ∝ √I·sin φ), becomes:</p>
<p style="text-align:center;">H = ωI&nbsp;&nbsp;⇒&nbsp;&nbsp;İ = 0,&nbsp;&nbsp;φ̇ = ω</p>
<p>The new momentum is constant and the new coordinate advances uniformly — the motion has been straightened into steady rotation. Solving the problem <em>is</em> finding this transformation.</p>
<p>Push the idea to its limit: seek the canonical transformation that makes the new Hamiltonian <em>zero</em>, so all new variables are constants and the motion is completely frozen into the transformation itself. Encoding the transformation in a generating function S(q, t) turns this demand into a partial differential equation, the <strong>Hamilton–Jacobi equation</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>H(q, ∂S/∂q, t) + ∂S/∂t = 0</strong></p>
<p>One scalar function S — which turns out to be the classical action along trajectories — contains the entire dynamics; momenta are its gradients, p = ∂S/∂q. This is a glimpse, not a working course: the machinery is heavy, and its practical use (separable systems, celestial mechanics) is a specialist's craft. But conceptually it is the summit of classical mechanics — the whole theory compressed into one scalar equation — and it sits one step from quantum mechanics: surfaces of constant S are wavefronts, trajectories are their rays, and Schrödinger found his equation by asking what wave equation has Hamilton–Jacobi as its short-wavelength limit, exactly as ray optics is the short-wavelength limit of wave optics.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Substitute ψ = e^(iS/ħ) into the Schrödinger equation and expand in powers of ħ: the leading term is precisely the Hamilton–Jacobi equation. Classical mechanics is quantum mechanics' stationary-phase approximation — the mathematical content of the "classical limit."</p>
</div>`,
        },
        {
          id: "bridge-to-quantum",
          title: "The Bridge to Quantum Mechanics",
          content: `
<p>Why has this chapter fussed over brackets and phase space when Lagrangians already solved every problem? Because Hamiltonian mechanics is the load-bearing wall between classical and quantum physics. The dictionary, distilled by Dirac in 1925:</p>
<div class="key-concept">
  <h4>Dirac's correspondence</h4>
  <p>Classical observables f(q, p) become operators; the Poisson bracket becomes the commutator, divided by iħ:</p>
  <p style="text-align:center; font-size:1.1em;">{f, g}&nbsp;&nbsp;→&nbsp;&nbsp;[f̂, ĝ]/(iħ),&nbsp;&nbsp; where [f̂, ĝ] = f̂ĝ − ĝf̂</p>
  <p>Every structural statement of Hamiltonian mechanics then transcribes line by line into quantum mechanics.</p>
</div>
<p>Run the dictionary on this chapter's headline results:</p>
<ul>
  <li><strong>{q, p} = 1</strong> becomes [q̂, p̂] = iħ — the canonical commutation relation, from which the uncertainty principle ΔqΔp ≥ ħ/2 follows. The fact that position and momentum are conjugate — a purely classical statement — becomes the reason they cannot be simultaneously sharp.</li>
  <li><strong>df/dt = {f, H}</strong> becomes df̂/dt = [f̂, Ĥ]/(iħ) — the Heisenberg equation of motion. Same engine, same driver: H generates time evolution in both worlds, which is why the quantum Hamiltonian, not the Lagrangian, sits at the center of the Schrödinger equation.</li>
  <li><strong>{f, H} = 0 means f conserved</strong> becomes [f̂, Ĥ] = 0 — conserved observables commute with the Hamiltonian, can be diagonalized alongside it, and label energy eigenstates with their "good quantum numbers."</li>
  <li><strong>{L<sub>x</sub>, L<sub>y</sub>} = L<sub>z</sub></strong> becomes [L̂<sub>x</sub>, L̂<sub>y</sub>] = iħL̂<sub>z</sub> — the complete algebra of quantum angular momentum, spin included, inherited without modification from Poisson's 1809 calculus.</li>
</ul>
<p>The transcription is not a proof — quantum mechanics is new physics, and operator ordering makes the map imperfect beyond the basics — but it is the actual historical and logical route. Heisenberg produced arrays of numbers with a strange multiplication; it was Dirac who recognized, reportedly during a Sunday walk, that Heisenberg's commutators had the same algebraic properties as Poisson brackets, and the whole canonical formalism could be carried over intact.</p>
<p>Where classical structures go quantum: phase space becomes Hilbert space; a phase-space point becomes a state vector; Liouville's conserved phase volume becomes conservation of probability (unitarity); canonical transformations become unitary transformations; and Hamilton–Jacobi's action S becomes the phase of the wavefunction. When Subject 26 opens, every one of its "postulates" will have a classical ancestor you have already met.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Dirac was so struck by the correspondence that he called the quantum theory "canonical quantization" — and to this day, the first step in quantizing any new theory, including candidate theories of quantum gravity, is: write it in Hamiltonian form, find the brackets, promote them to commutators. This chapter's formalism is step one of theoretical physics' standard operating procedure.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The Hamiltonian is built from the Lagrangian by H = Σpq̇ − L with p = ∂L/∂q̇. This construction is:",
          options: [
            "a Legendre transform, exchanging the velocity variables for momentum variables — the same device that turns U into F = U − TS in thermodynamics",
            "a Fourier transform of the Lagrangian",
            "simply renaming L, since H = L for conservative systems",
            "an approximation valid only for small oscillations",
          ],
          correctIndex: 0,
          explanation:
            "The Legendre transform is the standard tool for trading a variable for the derivative with respect to it. Here it swaps q̇ for p = ∂L/∂q̇, producing H(q,p) — usually equal to T + V, while L = T − V; the two functions differ and serve different roles. The construction is exact, and Hamilton's equations dq/dt = ∂H/∂p, dp/dt = −∂H/∂q follow from it without approximation.",
        },
        {
          question:
            "Liouville's theorem says that a cloud of phase-space points evolving under Hamilton's equations:",
          options: [
            "shrinks toward the attractor of the system",
            "keeps its shape unchanged",
            "always expands, in accordance with the second law",
            "may stretch and filament arbitrarily, but its total phase-space volume is exactly conserved — Hamiltonian flow is incompressible",
          ],
          correctIndex: 3,
          explanation:
            "The divergence of the phase-space flow is Σ(∂²H/∂q∂p − ∂²H/∂p∂q) = 0 identically, so volume is transported without compression. Shapes deform dramatically — that stretching and folding is how chaos operates — but the volume bookkeeping is exact. This is why Hamiltonian systems have no attractors, why beam emittance can't be squeezed by magnets, and why statistical mechanics can define ensembles on phase space.",
        },
        {
          question:
            "In the Poisson-bracket formulation, a quantity f(q, p) with no explicit time dependence is conserved if and only if:",
          options: [
            "f is one of the generalized coordinates",
            "{f, f} = 1",
            "{f, H} = 0 — f Poisson-commutes with the Hamiltonian",
            "f appears in the Lagrangian",
          ],
          correctIndex: 2,
          explanation:
            "The master equation df/dt = {f, H} makes conservation an algebraic condition: bracket with H and get zero. This is Noether's theorem in Hamiltonian dress — and each conserved quantity also generates its symmetry via the bracket (momentum generates translations, L_z generates rotations). Note {f, f} = 0 automatically for any f, by antisymmetry.",
        },
        {
          question:
            "Under Dirac's canonical quantization, the classical relation {q, p} = 1 becomes:",
          options: [
            "q̂p̂ = p̂q̂, since operators commute",
            "[q̂, p̂] = iħ, the canonical commutation relation from which the uncertainty principle follows",
            "q̂ + p̂ = ħ",
            "the Schrödinger equation itself",
          ],
          correctIndex: 1,
          explanation:
            "Dirac's rule replaces the Poisson bracket by the commutator over iħ: {q,p} = 1 maps to [q̂,p̂] = iħ. Position and momentum being canonically conjugate — a classical structural fact — becomes the statement that their operators fail to commute, which directly implies ΔqΔp ≥ ħ/2. The same dictionary sends df/dt = {f,H} to the Heisenberg equation and {Lx,Ly} = Lz to the quantum angular momentum algebra.",
        },
        {
          question:
            "A transformation (q, p) → (Q, P) mixing coordinates and momenta is canonical when:",
          options: [
            "it leaves the Hamiltonian unchanged",
            "Q depends only on q and P only on p",
            "it preserves the fundamental Poisson brackets, {Q, P} = 1 with {Q,Q} = {P,P} = 0",
            "it reduces the energy of the system",
          ],
          correctIndex: 2,
          explanation:
            "Canonical means structure-preserving: the new variables must satisfy the same fundamental brackets (equivalently, Hamilton's equations hold in the new variables for a suitable new Hamiltonian, and phase-space volume is preserved). The Hamiltonian function itself generally changes form — that is the point: a good canonical transformation, like the oscillator's action-angle map giving H = ωI, changes H into something trivially solvable.",
        },
      ],
    },
    {
      id: "nonlinear-dynamics-chaos",
      title: "Nonlinear Dynamics & Chaos",
      subtitle: "Deterministic yet unpredictable — sensitivity and strange attractors",
      sections: [
        {
          id: "sensitivity-initial-conditions",
          title: "Determinism Without Predictability",
          content: `
<p>Laplace's dream haunted physics for two centuries: give a vast intelligence the exact present state of the universe, and all future and past lie open before it. Hamilton's equations seem to underwrite the dream — one state, one flow, one future. The dream is false, and it fails not at quantum scales but squarely inside classical mechanics.</p>
<p>The culprit is <strong>sensitive dependence on initial conditions</strong>. In a chaotic system, two states differing by an amount δ₀ — any amount, however small — diverge on average exponentially:</p>
<p style="text-align:center; font-size:1.1em;">δ(t) ≈ δ₀·e^(λt)</p>
<p>where λ &gt; 0 is the <strong>Lyapunov exponent</strong>. Exponentials are merciless. Suppose you improve your measurement of the initial state by a factor of a million (10⁶ ≈ e¹⁴): you have bought yourself only 14/λ additional units of prediction time. Every further order of magnitude of precision purchases the same fixed increment. Prediction horizons grow <em>logarithmically</em> with effort — which is why weather forecasts have improved by days, not decades, despite computing power improving a trillionfold.</p>
<div class="key-concept">
  <h4>Chaos, defined</h4>
  <p>A system is chaotic if it is (1) deterministic — no randomness in the equations; (2) bounded — trajectories don't just fly apart forever; and (3) sensitively dependent — nearby trajectories separate exponentially (positive Lyapunov exponent). All three matter: exponential separation alone is trivial (two balls rolling off opposite sides of a hill), and boundedness is what forces the endless stretching to fold back on itself, producing motion that never repeats.</p>
</div>
<p>The discovery was itself an accident of rounding. In 1961 Edward Lorenz, running a 12-variable weather model, restarted a run from printed output — entering 0.506 where the computer held 0.506127. The rerun tracked the original for a while, then departed utterly. Lorenz distilled the phenomenon into three innocuous-looking equations for convection and, in 1963, published the paper that founded modern chaos theory, later asking his famous question: "Does the flap of a butterfly's wings in Brazil set off a tornado in Texas?"</p>
<p>Crucially, chaos is not randomness. A chaotic system's future is completely determined; it is merely not <em>computable from imperfect knowledge</em> for very long. Statistical properties — climates as opposed to weather — remain perfectly predictable. That distinction, between trajectory and distribution, is the working boundary of the entire field.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Even the solar system is chaotic: Laskar's integrations put the inner planets' Lyapunov time near 5 million years, so planetary positions are unforecastable beyond ~100 million years — and Mercury has a ~1% chance of catastrophic orbit disruption before the Sun dies. Laplace's showcase of determinism turned out to be chaotic all along.</p>
</div>`,
        },
        {
          id: "attractors-bifurcations",
          title: "Attractors, Bifurcations, and Universality",
          content: `
<p>To see chaos coming, watch a system's long-term behavior as a knob is slowly turned. The right arena is phase space, and the right vocabulary is <em>attractors</em> — the sets that trajectories settle onto after transients die away. Dissipative systems (friction, drag, resistance) contract phase-space volume, funneling all initial conditions onto attractors of lower dimension:</p>
<ul>
  <li><strong>Fixed point:</strong> everything comes to rest — a damped pendulum hanging straight down.</li>
  <li><strong>Limit cycle:</strong> a closed loop, a self-sustained oscillation with its own preferred amplitude — a heartbeat, a violin string under steady bowing, a driven pendulum locked to its drive.</li>
  <li><strong>Strange attractor:</strong> the third possibility, unimagined before the 1960s — an attractor that is not a point, not a loop, but an infinitely layered fractal on which motion never repeats and neighboring trajectories separate exponentially. Attraction and chaos coexist: trajectories are pulled onto the set, yet on the set they diverge from each other.</li>
</ul>
<p>Transitions between these behaviors happen at sharp parameter values called <strong>bifurcations</strong>. The most famous route to chaos is <strong>period doubling</strong>. Turn up the driving on many nonlinear oscillators and a steady oscillation of period T suddenly develops a subtle alternation — period 2T. Turn further: period 4T, 8T, 16T…, the doublings arriving faster and faster in the parameter, accumulating at a finite value beyond which lies chaos.</p>
<div class="key-concept">
  <h4>Feigenbaum universality</h4>
  <p>Mitchell Feigenbaum discovered (1975) that the intervals between successive doublings shrink geometrically by a universal ratio, δ ≈ 4.6692…, the <em>same number</em> for the driven pendulum, convecting fluids, dripping faucets, electronic circuits, and the humble logistic map x → rx(1−x) — any system with a smooth hump in its return map. Chaos has quantitative laws that transcend the details of the system. Experiments in helium convection confirmed δ to within a percent: a constant of nature discovered in a toy equation.</p>
</div>
<p>The logistic map deserves its fame: it is a one-line model of population growth (r is the breeding rate), yet its behavior as r increases — steady state, then 2-cycle, 4-cycle, the cascade, then chaos interleaved with windows of order — is a complete miniature of the routes real physical systems take. Iterating it on a pocket calculator was, for a generation of physicists, the moment chaos became real.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Lorenz attractor — two fractal "butterfly wings," with trajectories flipping unpredictably between them — has fractal dimension ≈ 2.06: more than a surface, far less than a volume. Fractional dimensions are the geometric signature of strange attractors, and measuring them from experimental time series is a standard diagnostic for real-world chaos.</p>
</div>`,
        },
        {
          id: "driven-pendulum",
          title: "The Driven Damped Pendulum Revisited",
          content: `
<p>The gateway to chaos in this course is a device you have studied twice already — the pendulum, now damped and periodically pushed:</p>
<p style="text-align:center;">d²θ/dt² + b·dθ/dt + (g/l)·sin θ = A·cos(ω_d t)</p>
<p>In Phase 4 you linearized sin θ ≈ θ and found resonance — clean, predictable, linear physics. Keep the true sin θ, drive hard enough that the pendulum explores large angles, and this one equation contains everything the previous section catalogued.</p>
<p>Turn the drive amplitude A up slowly and watch the long-term motion:</p>
<ol>
  <li><strong>Weak drive:</strong> after transients, a steady oscillation at the drive period — a limit cycle. This is the linear regime's ghost.</li>
  <li><strong>Stronger:</strong> the cycle develops an alternation — successive swings differ, repeating every <em>two</em> drive periods. Period doubling has begun.</li>
  <li><strong>Stronger still:</strong> period 4, period 8 — the cascade, compressed into ever narrower intervals of A, converging at the Feigenbaum ratio.</li>
  <li><strong>Beyond the accumulation point:</strong> chaos. The pendulum swings and whirls over the top in an irregular sequence that never repeats; two runs from imperceptibly different starts disagree completely within a few drive periods. Embedded in the chaos are narrow windows of restored order — including a prominent period-3 window — before chaos resumes.</li>
</ol>
<div class="key-concept">
  <h4>The Poincaré section</h4>
  <p>Continuous trajectories in the pendulum's three-dimensional state space (θ, dθ/dt, drive phase) are a tangle. The clarifying instrument is the <strong>Poincaré section</strong>: photograph the state (θ, dθ/dt) once per drive cycle, at the same drive phase, like a strobe light. A period-1 motion appears as one dot; period-2 as two dots; chaos as an endless scatter of points that never repeats — yet the scatter is not a smear. It traces a delicate, folded, fractal curve: the strange attractor in cross-section. Order at the level of geometry underlying disorder at the level of trajectory.</p>
</div>
<p>Why does chaos need <em>three</em> state-space dimensions (here: angle, velocity, drive phase)? Because in two dimensions the no-crossing theorem straitjackets trajectories — a curve in the plane that can't cross itself can only spiral into fixed points or cycles (the Poincaré–Bendixson theorem). The drive supplies the third dimension through which trajectories can weave over and under one another. An undriven pendulum can never be chaotic; a driven one, or the double pendulum with its four-dimensional phase space, can.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The double pendulum of the small-oscillations chapter is the drive-free route to the same lesson: energy pumped to large amplitude replaces the external forcing, and its two coupled angles give phase space dimensions to spare. Build one from two hacksaw blades and it will happily demonstrate sensitive dependence on your desk — no motor required.</p>
</div>`,
        },
        {
          id: "hamiltonian-chaos-kam",
          title: "Chaos Without Friction: The Hamiltonian Case",
          content: `
<p>The attractor story leaned on dissipation: friction contracts phase-space volume, funneling motion onto low-dimensional sets. But Liouville's theorem forbids Hamiltonian systems from contracting volume at all. So what does chaos look like in the frictionless world of planets, particle beams, and plasmas — the world this subject's formalism was built for?</p>
<p><strong>No attractors, ever.</strong> A Hamiltonian system cannot settle; whatever region of phase space a cloud of states occupies, its volume persists forever. Instead of the question "what does motion decay onto?", the Hamiltonian question is "which motions are orderly and which are chaotic, and how do the two coexist?"</p>
<p>The orderly template is the <strong>integrable</strong> system: one with as many independent conserved quantities in involution (mutually vanishing Poisson brackets) as degrees of freedom. Kepler orbits, coupled harmonic oscillators, the heavy symmetric top — in all of these, conservation laws confine each trajectory to a torus in phase space, on which motion winds quasi-periodically at a few fixed frequencies. Integrable systems are the solvable aristocracy of mechanics; they are also infinitely delicate.</p>
<div class="key-concept">
  <h4>The KAM theorem (glimpse)</h4>
  <p>Perturb an integrable system slightly — add a third body to Kepler, couple the oscillators nonlinearly. Kolmogorov, Arnold, and Moser proved (1954–63) that <em>most</em> tori survive small perturbations, merely deforming — but tori whose frequencies are in near-resonance (rational ratios) break up, and in the shattered zones motion is chaotic. Phase space becomes an intricate mixture: islands of order embedded in a chaotic sea, with island chains within islands, at every scale. Order and chaos are not phases a system is 'in' — they interleave fractally in the same system at the same energy.</p>
</div>
<p>This picture resolves the solar system's split personality. The planets ride surviving KAM-like tori — hence billions of years of near-regularity — while chaotic zones govern the details (Mercury's long-term uncertainty, the wandering of orbital elements). The asteroid belt displays the resonant break-up directly: the <strong>Kirkwood gaps</strong> are emptied at exactly the orbital periods resonant with Jupiter (3:1, 5:2, 7:3…), where chaotic diffusion pumped asteroids onto planet-crossing orbits. Some of them became meteorites on Earth — chaos theory you can hold.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The first numerical experiment in history targeted exactly this question: Fermi, Pasta, Ulam, and Tsingou (1955) expected a chain of nonlinearly coupled oscillators to thermalize — share energy chaotically among modes — and instead watched the energy return, almost perfectly, to the initial mode. The shock of that near-integrability drove the development of both KAM theory and soliton physics, and marks the birth of computational physics.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A chaotic system has Lyapunov exponent λ. If you improve your knowledge of the initial conditions by a factor of one million, your reliable prediction horizon grows by:",
          options: [
            "a factor of one million",
            "a factor of √(one million) = 1000",
            "nothing — chaos forbids all prediction",
            "only the fixed increment ln(10⁶)/λ ≈ 14/λ — horizons grow logarithmically with precision",
          ],
          correctIndex: 3,
          explanation:
            "Errors grow as δ₀e^(λt), so the time for an error to reach a given tolerance grows only as the logarithm of the initial precision. Each additional order of magnitude of measurement effort buys the same modest extra window — the reason weather forecasting has gained days, not decades, from a trillionfold increase in computing. Short-term prediction remains possible; it is long-term trajectory prediction that is hopeless.",
        },
        {
          question:
            "What distinguishes a strange attractor from a fixed point or limit cycle?",
          options: [
            "It is a fractal set on which motion never repeats and neighboring trajectories separate exponentially, even as all trajectories are drawn onto it",
            "It repels all trajectories instead of attracting them",
            "It only exists in systems with randomness in their equations",
            "It is a closed loop traversed at irregular speed",
          ],
          correctIndex: 0,
          explanation:
            "Strange attractors reconcile attraction with chaos: dissipation pulls trajectories onto the set, while on the set stretching-and-folding drives exponential divergence and non-repeating motion. The geometry is fractal — the Lorenz attractor's dimension is about 2.06. The equations remain fully deterministic; no randomness is involved, and the motion is neither a point, a loop, nor any smooth surface.",
        },
        {
          question:
            "As the drive amplitude of a damped driven pendulum increases, the standard route to chaos observed is:",
          options: [
            "an immediate jump from steady oscillation to chaos at a single threshold",
            "a cascade of period doublings (T, 2T, 4T, 8T…) accumulating geometrically at the Feigenbaum ratio δ ≈ 4.669, beyond which chaos begins",
            "a gradual increase in amplitude with no qualitative change",
            "resonance followed by the pendulum stopping",
          ],
          correctIndex: 1,
          explanation:
            "The limit cycle doubles its period repeatedly, with the parameter intervals between doublings shrinking by the universal factor 4.6692… — the same constant measured in convecting helium, dripping taps, and the logistic map, because it depends only on the smooth-hump structure of the return map, not the system's details. Windows of periodic order (notably period 3) persist inside the chaotic regime.",
        },
        {
          question:
            "Why can a damped, undriven pendulum never be chaotic, while the periodically driven one can?",
          options: [
            "Because damping always destroys chaos",
            "Because chaos requires at least two interacting particles",
            "Because its state space is two-dimensional, where non-crossing trajectories can only approach fixed points or closed cycles; the drive adds the third dimension chaos needs",
            "Because the undriven pendulum's equation is linear",
          ],
          correctIndex: 2,
          explanation:
            "In a plane, a trajectory that cannot cross itself is topologically cornered — the Poincaré–Bendixson theorem leaves only fixed points and limit cycles as fates. The drive phase supplies a third state-space dimension through which trajectories weave without crossing. The undriven pendulum is nonlinear but not chaotic; the double pendulum achieves chaos without driving because its four-dimensional phase space provides the room instead.",
        },
        {
          question:
            "In Hamiltonian systems, chaos cannot involve attractors. Why, and what is the KAM picture instead?",
          options: [
            "Because Hamiltonian systems are all integrable and fully orderly",
            "Because energy conservation forbids any change in the motion",
            "Because chaos requires driving, which Hamiltonian systems exclude",
            "Because Liouville's theorem forbids phase-volume contraction; instead, most invariant tori survive small perturbations while resonant tori shatter into chaotic zones — islands of order in a chaotic sea",
          ],
          correctIndex: 3,
          explanation:
            "Attractors require volumes of initial conditions to contract onto smaller sets, which incompressible Hamiltonian flow cannot do. KAM theory describes the frictionless alternative: perturbing an integrable system deforms most quasi-periodic tori but destroys the near-resonant ones, interleaving regular and chaotic motion fractally at the same energy. The solar system's overall regularity alongside Mercury's chaos, and the Kirkwood gaps carved at Jupiter's resonances, are this picture in the sky.",
        },
      ],
    },
    {
      id: "classical-to-quantum-continuum",
      title: "From Classical to Quantum & Continuum",
      subtitle: "Action-angle variables, adiabatic invariants, and continuous media",
      sections: [
        {
          id: "action-angle-variables",
          title: "Action-Angle Variables: Periodic Motion Perfected",
          content: `
<p>For periodic systems, one canonical transformation stands above all others. The Hamiltonian chapter showed the harmonic oscillator straightened into H = ωI. That construction generalizes to <em>any</em> one-dimensional bounded motion, and its variables — action and angle — are the natural language for everything from planetary resonances to the birth of quantum theory.</p>
<p>For a system oscillating (or rotating) periodically, define the <strong>action variable</strong> as the phase-space area enclosed by one full cycle, scaled by 2π:</p>
<p style="text-align:center; font-size:1.15em;"><strong>I = (1/2π) ∮ p dq</strong></p>
<p>The integral runs once around the closed loop the orbit traces in the (q, p) plane. Pair I with a conjugate <strong>angle variable</strong> φ that locates the system along its cycle. The transformation (q, p) → (φ, I) is canonical, and in the new variables the Hamiltonian depends on I alone:</p>
<p style="text-align:center;">H = H(I)&nbsp;&nbsp;⇒&nbsp;&nbsp;İ = −∂H/∂φ = 0,&nbsp;&nbsp;φ̇ = ∂H/∂I ≡ ω(I)</p>
<p>The action is frozen; the angle advances at a constant rate. Every periodic system, however anharmonic, becomes uniform circular motion in the right coordinates.</p>
<div class="key-concept">
  <h4>Frequencies without solving anything</h4>
  <p>The oscillation frequency is ω = dH/dI = dE/dI: differentiate energy with respect to action and the period falls out, with the trajectory never computed. For the harmonic oscillator the loop is an ellipse of area 2πE/ω, so I = E/ω and dE/dI = ω, independent of amplitude — the oscillator's famous isochronism, obtained from an area. For the pendulum at larger amplitudes, the same recipe delivers the amplitude-dependent period that elementary methods struggle to reach.</p>
</div>
<p>In systems with several degrees of freedom, each independent periodicity contributes its own action–angle pair, and integrable motion becomes uniform winding on a torus with frequencies ω₁, ω₂, … — precisely the tori of the KAM discussion, now with coordinates on them. Whether the frequencies' ratios are rational (closed orbits, resonance, vulnerability to perturbation) or irrational (quasi-periodic filling of the torus) governs the fate of the motion under perturbation; celestial mechanics is conducted almost entirely in these variables.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Delaunay built the action-angle machinery for the Moon's motion in the 1860s, filling two volumes with hand computation. The same elements, essentially unchanged, parameterize satellite orbits in modern flight software — and the "actions" of the solar system's planets are the slow variables in million-year climate (Milankovitch) calculations.</p>
</div>`,
        },
        {
          id: "adiabatic-invariants",
          title: "Adiabatic Invariants and the Old Quantum Theory",
          content: `
<p>The action variable owns one more property — the most consequential in the history of physics. Change a parameter of a periodic system <em>slowly</em>: shorten a pendulum's string over many swings, compress the box confining a bouncing particle over many bounces. Energy is certainly not conserved (you are doing work), and nothing in Noether's theorem protects any quantity. Yet something survives:</p>
<div class="key-concept">
  <h4>The adiabatic theorem</h4>
  <p>If a system's parameters change slowly compared with its oscillation period, the action I = (1/2π)∮p dq remains almost exactly constant, even as energy, frequency, and amplitude all drift. Such a quantity is called an <strong>adiabatic invariant</strong>. The slower the change, the better the invariance — the error falls faster than any power of the slowness.</p>
</div>
<p><strong>Worked example — the shortening pendulum.</strong> For small oscillations, I = E/ω. Winch the string slowly upward: ω = √(g/l) rises as l shrinks, so keeping I constant forces E to rise in proportion to ω. The energy pumped in by the winch is bookkept precisely so that E/ω never changes; meanwhile the angular amplitude grows as l^(−3/8) — a definite, checkable prediction about a childhood toy. The same law governs a charged particle spiraling in a slowly strengthening magnetic field (the magnetic-mirror effect that traps particles in Earth's radiation belts) and a gas particle in a slowly compressed container (recovering, particle by particle, the adiabatic law PV^γ of thermodynamics).</p>
<p>Now the historical bombshell. Around 1911–1915, physicists confronting quantum riddles asked: of all classical quantities, which deserve to be <em>quantized</em> — restricted to discrete values? Einstein and Ehrenfest argued it could only be the adiabatic invariants: a quantity jumping between discrete rungs must not drift when conditions change slowly, or the rungs would smear. The <strong>Bohr–Sommerfeld rule</strong> followed:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∮ p dq = nh,&nbsp;&nbsp;n = 1, 2, 3, …</strong></p>
<p>Action comes in whole multiples of Planck's constant — which is, after all, a quantum <em>of action</em>. Applied to hydrogen's orbits it produced Bohr's energy levels; applied to the oscillator, E = nħω. The "old quantum theory" was exactly this: classical mechanics in action-angle variables, plus one quantization postulate. Full quantum mechanics (1925–26) superseded it, but the semiclassical (WKB) limit of the Schrödinger equation reproduces ∮p dq = (n + ½)h — the old rule, vindicated to within a half.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Adiabatic invariance is engineering practice today: it is why particles survive millions of turns in synchrotrons as fields ramp up, and how "adiabatic passage" techniques steer atoms and qubits between quantum states with near-perfect fidelity. A concept born from pendulum thought-experiments now underwrites quantum computers.</p>
</div>`,
        },
        {
          id: "lagrangian-fields-elasticity",
          title: "From Particles to Fields: Waves and Elasticity",
          content: `
<p>Everything so far treats systems with a handful of coordinates. But a vibrating string, a steel beam, a body of water has infinitely many — one displacement for every point. The Lagrangian framework absorbs the generalization without strain, and doing it once for the string opens the door to all of field theory.</p>
<p>Model the string as N beads on a light thread, write the beads' Lagrangian, and let N → ∞. The sum over beads becomes an integral over position: L = ∫ ℒ dx, where the <strong>Lagrangian density</strong> for a string of mass per length μ and tension τ is:</p>
<p style="text-align:center;">ℒ = ½μ(∂y/∂t)² − ½τ(∂y/∂x)²</p>
<p>— kinetic energy density minus potential energy density (the cost of stretching). The action is now a double integral, S = ∫∫ ℒ dx dt, and demanding δS = 0 for variations of the whole <em>field</em> y(x, t) yields the field version of the Euler–Lagrange equation, which here reads:</p>
<p style="text-align:center; font-size:1.1em;"><strong>μ·∂²y/∂t² = τ·∂²y/∂x²</strong></p>
<p>— the wave equation, with speed c = √(τ/μ). Hamilton's principle didn't merely survive the limit; the field equations of nature (Maxwell's, Einstein's, the Standard Model's) are all obtained exactly this way, from candidate Lagrangian densities constrained by symmetry. When Subject 25 writes electrodynamics from a Lagrangian, this is the machinery it will use.</p>
<div class="key-concept">
  <h4>Elasticity in one paragraph</h4>
  <p>Three-dimensional solids generalize the string's stretch with the tensor toolkit of Subject 23: deformation is described by a <strong>strain</strong> tensor (relative stretches and shears), internal forces by a <strong>stress</strong> tensor (force per area across each internal plane), and for small deformations they are proportional — Hooke's law grown up. For an isotropic solid two constants suffice, e.g. Young's modulus E (stiffness in stretch) and the shear modulus G. The resulting field equations support <em>two</em> wave speeds: faster longitudinal (compression, P) waves and slower transverse (shear, S) waves.</p>
</div>
<p>That last fact reads Earth's interior like an X-ray. Earthquakes emit both P and S waves; the P–S arrival gap at a seismometer gives distance, and the global pattern of arrivals maps the deep structure. The decisive observation: S waves cast a shadow over the hemisphere opposite an earthquake — shear waves cannot cross the outer core. Fluids have no shear stiffness. The discovery that Earth's outer core is liquid is a triumph of the stress tensor, and of exactly the continuum mechanics sketched here.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Inge Lehmann analyzed faint P-wave echoes inside that shadow in 1936 and proved a solid inner core floats within the liquid outer core — seismology's tensor analysis reaching 5000 km down, decades before any computer.</p>
</div>`,
        },
        {
          id: "taste-of-fluids",
          title: "A Taste of Fluids — and the Road Ahead",
          content: `
<p>Fluids are the continuum at full freedom: matter that flows. Describe it by a density field ρ(r, t), a pressure field P(r, t), and a velocity field v(r, t), and two statements of pure bookkeeping-plus-Newton govern everything.</p>
<p><strong>Mass conservation</strong> — the continuity equation:</p>
<p style="text-align:center;">∂ρ/∂t + ∇·(ρv) = 0</p>
<p>Density in a region changes only by net flow through its boundary. <strong>Momentum</strong> — Newton's second law applied to a fluid parcel, with pressure gradients and gravity supplying the force — gives the <strong>Euler equation</strong> (1757):</p>
<p style="text-align:center;">ρ·[∂v/∂t + (v·∇)v] = −∇P + ρg</p>
<p>The awkward-looking (v·∇)v term just says the parcel is accelerating partly because it is being carried into a region where the flow differs — and this innocent term is nonlinear in v, the seed of all fluid complexity. For steady, incompressible flow along a streamline the Euler equation integrates to <strong>Bernoulli's principle</strong>, ½ρv² + P + ρgh = constant: fast flow, low pressure — airfoil lift, the curve of a spinning ball, the collapse of a shower curtain toward the spray.</p>
<div class="key-concept">
  <h4>Viscosity and the Reynolds number</h4>
  <p>Real fluids resist shearing: adding viscosity μ turns Euler into the <strong>Navier–Stokes equations</strong>. One dimensionless group, the Reynolds number Re = ρvL/μ — inertia over viscosity — then classifies all flows. Low Re (microbes, honey): syrupy, reversible, orderly. High Re (aircraft, rivers, weather): inertia dominates and flow erupts into <strong>turbulence</strong> — chaotic eddies cascading energy from large scales to small, the chaos chapter's sensitivity multiplied across infinitely many degrees of freedom. Turbulence remains the great unsolved problem of classical physics; even proving that smooth Navier–Stokes solutions always exist is one of the million-dollar Millennium Prize problems.</p>
</div>
<p>And with that, step back. This subject rebuilt mechanics from δS = 0: Lagrangians turned constraints into coordinates; Noether turned symmetry into conservation; Hamilton turned dynamics into phase-space geometry; and the same action principle just wrote the equations of continuous matter. The framework, not any particular system, is the takeaway — because it is the part that survives every revolution ahead: Subject 25 derives electrodynamics from a Lagrangian density, Subject 26 quantizes the Hamiltonian, and statistical mechanics builds on Liouville's phase space. Classical mechanics is not the physics that modern physics replaced; it is the language in which modern physics is written.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Heisenberg, who wrote his doctoral thesis on turbulence before inventing quantum mechanics, reportedly quipped that he would ask God two questions — why relativity, and why turbulence — and expected an answer only to the first. The equations are eighteenth- and nineteenth-century; their consequences are still being discovered.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The action variable of a periodic system is I = (1/2π)∮p dq. Its immediate practical payoff is that:",
          options: [
            "it equals the system's total energy",
            "the oscillation frequency is ω = dE/dI, obtained without ever solving for the trajectory",
            "it determines the phase of the motion at t = 0",
            "it vanishes for anharmonic oscillators",
          ],
          correctIndex: 1,
          explanation:
            "In action-angle variables H depends on I alone, so φ̇ = ∂H/∂I = ω gives the frequency by differentiation. For the harmonic oscillator the phase-space orbit is an ellipse of area 2πE/ω, so I = E/ω and dE/dI = ω independent of amplitude — isochronism from an area. For anharmonic systems like the large-angle pendulum, I is nonzero and the same recipe yields the amplitude-dependent period.",
        },
        {
          question:
            "A pendulum's string is winched shorter very slowly over many swing periods. During this process:",
          options: [
            "its energy is conserved, since gravity is conservative",
            "its amplitude stays constant while the frequency drops",
            "the action I ≈ E/ω stays nearly constant, so the energy grows in proportion to the rising frequency",
            "both energy and action are conserved",
          ],
          correctIndex: 2,
          explanation:
            "Slow parameter change makes the action an adiabatic invariant even though energy is not conserved — the winch does net work on the pendulum. With I = E/ω fixed and ω = √(g/l) rising as l shrinks, E must rise proportionally; the bookkeeping even fixes how the swing amplitude changes (growing as l^(−3/8)). The same invariance traps charged particles in magnetic mirrors and underlies the thermodynamic adiabatic law.",
        },
        {
          question:
            "Why did Einstein and Ehrenfest argue that the quantities quantized in the old quantum theory (∮p dq = nh) had to be adiabatic invariants?",
          options: [
            "Because adiabatic invariants are the only quantities with units of energy",
            "Because Planck's constant is an adiabatic invariant of the electromagnetic field",
            "Because only conserved quantities can be measured",
            "Because a quantity restricted to discrete values must not drift continuously when conditions change slowly — otherwise the allowed rungs would smear out",
          ],
          correctIndex: 3,
          explanation:
            "If a quantized quantity changed continuously under slow perturbations, a system on one rung would be dragged smoothly between allowed values, contradicting discreteness. Adiabatic invariants are precisely the quantities that hold fast under slow change, so they alone can carry quantum numbers. The action has the right units too — Planck's constant is a quantum of action — and WKB later refined the rule to ∮p dq = (n + ½)h.",
        },
        {
          question:
            "Applying Hamilton's principle to the string's Lagrangian density ℒ = ½μ(∂y/∂t)² − ½τ(∂y/∂x)² yields:",
          options: [
            "the wave equation μ∂²y/∂t² = τ∂²y/∂x², with wave speed √(τ/μ) — the template by which field equations are derived from Lagrangian densities",
            "Bernoulli's principle for the string",
            "the diffusion equation, since the string dissipates energy",
            "Newton's second law for the string's center of mass only",
          ],
          correctIndex: 0,
          explanation:
            "Extremizing S = ∫∫ℒ dx dt over variations of the whole field y(x,t) gives the field Euler–Lagrange equation, which for this density is exactly the wave equation with c = √(τ/μ). No dissipation is present, and the result governs every point of the string, not just its center of mass. Maxwell's equations, Einstein's equations, and the Standard Model are obtained from candidate Lagrangian densities by this same variational route.",
        },
        {
          question:
            "Seismic S (shear) waves are never detected on the far side of Earth from an earthquake. What does this shadow prove?",
          options: [
            "That S waves travel too slowly to arrive",
            "That earthquakes emit only P waves downward",
            "That Earth's outer core is fluid — fluids cannot support shear stress, so transverse waves cannot pass through it",
            "That the S waves are absorbed by the crust",
          ],
          correctIndex: 2,
          explanation:
            "Transverse waves require a restoring force against shear, which only solids provide; a fluid layer transmits compressional P waves but blocks S waves entirely. The global S-wave shadow therefore maps a liquid outer core, and Lehmann's later analysis of P-wave echoes revealed the solid inner core within it. It is a planetary-scale application of the stress tensor of continuum mechanics.",
        },
      ],
    },
  ],
};
