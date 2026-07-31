export const subject25 = {
  id: "electrodynamics",
  number: 25,
  title: "Electrodynamics",
  description:
    "The full Griffiths-level theory of the electromagnetic field: boundary-value problems, fields in matter, complete Maxwell equations, radiation, and the relativistic formulation.",
  phase: 5,
  chapters: [
    {
      id: "electrostatics-redone",
      title: "Electrostatics Redone",
      subtitle: "Boundary-value problems — images, separation of variables, multipoles",
      sections: [
        {
          id: "vector-calculus-full-strength",
          title: "Vector Calculus at Full Strength",
          content: `
<p>Subject 19 gave you Coulomb's law and Gauss's law in integral form. This subject runs on the differential machinery of Subject 23, so start by cashing it in. Electrostatics compresses to two local statements:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇·E = ρ/ε₀</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>∇×E = 0</strong></p>
<p>The divergence theorem (∫∇·E dτ = ∮E·da) turns the first into Gauss's law; Stokes' theorem turns the second into the statement that ∮E·dl = 0 around any loop. And a curl-free field is a gradient: E = −∇V. Substitute into the divergence equation and all of electrostatics becomes a single scalar PDE:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇²V = −ρ/ε₀</strong>&nbsp;&nbsp;(Poisson's equation; Laplace's equation ∇²V = 0 where ρ = 0)</p>
<p>One notorious puzzle gets settled here. Compute the divergence of the point-charge field r̂/r² by brute force and you get zero everywhere — yet Gauss's law demands ∮E·da = q/ε₀ over any surface enclosing the charge. The resolution is the <strong>Dirac delta function</strong>:</p>
<p style="text-align:center;">∇·(r̂/r²) = 4πδ³(r)</p>
<p>All the divergence is concentrated at the origin, in an infinitely tall, infinitely thin spike whose volume integral is 4π. The delta function isn't a mathematical curiosity; it is the honest description of a point charge, and it will reappear for point dipoles, point masses, and quantum measurements.</p>
<div class="key-concept">
  <h4>Helmholtz's theorem: why div and curl are everything</h4>
  <p>A vector field (vanishing at infinity) is completely determined by its divergence and its curl. That is why Maxwell's equations take the form they do — four statements giving the div and curl of E and B are not a partial description of the electromagnetic field. They are the whole field, exactly.</p>
</div>
<p>Two identities from Subject 23 do heavy lifting all subject long: the curl of a gradient is always zero (which is why E = −∇V exists), and the divergence of a curl is always zero (which is why B = ∇×A will exist in Chapter 3). Keep them loaded.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Oliver Heaviside — self-taught, unemployed, working alone in a small room — compressed Maxwell's original twenty equations in twenty variables into the four vector equations everyone now learns. The notation ∇·E and ∇×E is essentially his.</p>
</div>`,
        },
        {
          id: "boundary-value-uniqueness",
          title: "Boundary-Value Problems & Uniqueness",
          content: `
<p>Here is the strategic shift of this chapter. Instead of asking "where is every charge?", ask "what is the potential on the boundaries?" A capacitor plate held at 12 V, a grounded shield, a conductor with known total charge — real problems specify <em>boundary conditions</em>, and the field must solve Laplace's equation in the empty space between. Solutions of ∇²V = 0, called <strong>harmonic functions</strong>, have two lovely properties:</p>
<ul>
  <li><strong>Mean value:</strong> V at any point equals the average of V over any sphere centered there. Laplace's equation is nature's smoothing algorithm — no bumps, no wiggles, the blandest interpolation consistent with the boundary.</li>
  <li><strong>No local extremes:</strong> maxima and minima of V occur only on boundaries. A corollary is <strong>Earnshaw's theorem</strong>: no charge can rest in stable equilibrium in an electrostatic field alone, because that would require a potential minimum in empty space. Classical matter, held together electrostatically, cannot be stable — a crack that quantum mechanics (Subject 26) must fill.</li>
</ul>
<div class="key-concept">
  <h4>The uniqueness theorems</h4>
  <p><strong>First:</strong> if V is specified on every boundary of a region, the solution of Laplace's (or Poisson's) equation inside is unique. <strong>Second:</strong> in a region containing conductors, specifying the total charge on each conductor also fixes the field uniquely. There is exactly one answer — however you find it.</p>
</div>
<p>That "however" is the license for everything that follows. Guess a potential, obtain it by analogy, dream it in the bath: if it satisfies the equation and matches the boundary values, it is <em>the</em> solution — not <em>a</em> solution. Physics rarely hands out such a blank check.</p>
<p>Uniqueness also explains the classic conductor facts with new depth. Inside an empty cavity in a conductor, the boundary is an equipotential; V = constant solves Laplace's equation with those boundary values; uniqueness says that's the answer, so E = 0 inside. That is <strong>electrostatic shielding</strong> — your car in a lightning storm, the mesh door of a microwave oven — proved in two lines.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Relaxation methods solve Laplace's equation numerically by brute-forcing the mean-value property: put guesses on a grid, repeatedly replace each value by the average of its neighbors, and the array converges to the true potential. It is one of the oldest algorithms in computational physics, and you can code it in ten lines.</p>
</div>`,
        },
        {
          id: "method-of-images",
          title: "The Method of Images",
          content: `
<p>The uniqueness theorem's most audacious payoff. <strong>Problem:</strong> a point charge q sits a distance d above an infinite grounded conducting plane. Find the potential everywhere above the plane. The induced surface charge is unknown, so direct integration looks hopeless.</p>
<p><strong>The trick:</strong> throw the conductor away. Replace it with a fictitious "image" charge −q at distance d <em>below</em> where the plane was. For the pair, the potential at any point (x, y, z) with z &gt; 0 is</p>
<p style="text-align:center;">V = (1/4πε₀) [ q/√(x² + y² + (z−d)²) − q/√(x² + y² + (z+d)²) ]</p>
<p>Check the boundary conditions: on the plane z = 0 the two distances are equal, so V = 0 everywhere on it — exactly what "grounded" demands — and V → 0 far away. The charge distribution above the plane is correct (just q). By uniqueness, this <em>is</em> the field above the plane. The image charge is pure fiction — there is nothing below the plane but conductor — yet the field it generates in the upper region is exact.</p>
<p>Now harvest real physics from the fake charge:</p>
<ul>
  <li><strong>Induced charge:</strong> σ = −ε₀ ∂V/∂z at z = 0 gives σ = −qd / [2π(x² + y² + d²)^(3/2)] — piled up directly beneath q, thinning outward. Integrate over the plane: total induced charge is exactly −q.</li>
  <li><strong>Force:</strong> the charge is attracted to the plane as if the image were real: F = −(1/4πε₀) q²/(2d)², pointing down.</li>
  <li><strong>Energy:</strong> here fiction has a price. The energy is <em>not</em> the two-charge value −q²/(4πε₀·2d) but half of it, W = −q²/(16πε₀d), because no work is done assembling the field in the lower region — there is no field there.</li>
</ul>
<div class="key-concept">
  <h4>Why it works</h4>
  <p>Images exploit uniqueness: any charge configuration that reproduces the boundary values reproduces the field. The method generalizes — a charge outside a grounded sphere of radius R has an image q′ = −qR/a at distance R²/a from the center — but it remains an inspired guess, not an algorithm. When no image exists, you need the systematic machinery of the next section.</p>
</div>`,
        },
        {
          id: "separation-of-variables",
          title: "Separation of Variables & Legendre's Series",
          content: `
<p>The workhorse for boundary-value problems with symmetry. In spherical coordinates with azimuthal symmetry (nothing depends on φ), try product solutions V = R(r)Θ(θ) in Laplace's equation. The variables separate — each factor obeys its own ODE — and the angular equation is Legendre's equation from Subject 23, whose well-behaved solutions are the <strong>Legendre polynomials</strong>:</p>
<p style="text-align:center;">P₀ = 1,&nbsp;&nbsp;P₁ = cos θ,&nbsp;&nbsp;P₂ = (3cos²θ − 1)/2,&nbsp;…</p>
<p>The radial equation gives rˡ and 1/r^(l+1). The general azimuthally symmetric solution of Laplace's equation is therefore a series:</p>
<p style="text-align:center; font-size:1.05em;"><strong>V(r, θ) = Σₗ (Aₗ rˡ + Bₗ / r^(l+1)) Pₗ(cos θ)</strong></p>
<p>Boundary conditions kill most of the terms: keep only rˡ where the region includes the origin (no blow-up), only 1/r^(l+1) where it extends to infinity. The surviving coefficients are extracted with <strong>Fourier's trick</strong> — multiply by Pₗ(cos θ) sin θ, integrate, and orthogonality collapses the sum. This is the same eigenfunction game you played with sines in Subject 20, transplanted to a sphere, and it is precisely how the hydrogen atom will be solved in Subject 26.</p>
<p><strong>Worked classic: a conducting sphere in a uniform field E₀.</strong> Boundary conditions: V = 0 on the sphere (radius R), and V → −E₀ r cos θ far away. Only the l = 1 terms can match cos θ at infinity, so the series collapses to two terms:</p>
<p style="text-align:center;">V(r, θ) = −E₀ (r − R³/r²) cos θ</p>
<p>Read the physics off the answer: the −E₀ r cos θ piece is the applied field; the R³cos θ/r² piece is a perfect <em>dipole</em> — the sphere responds to a uniform field by growing an induced dipole moment. The induced surface charge is σ = 3ε₀E₀ cos θ: positive cap on top, negative cap below, exactly as intuition paints it.</p>
<div class="key-concept">
  <h4>The pattern to remember</h4>
  <p>Symmetry picks the coordinate system; separation turns one PDE into ODEs; the ODEs hand you a family of special functions; orthogonality fits the boundary data. Cartesian boxes give sines, cylinders give Bessel functions, spheres give Legendre polynomials. One method, many wardrobes — and quantum mechanics wears them all.</p>
</div>`,
        },
        {
          id: "multipole-expansion",
          title: "The Multipole Expansion",
          content: `
<p>Seen from far away, what does an arbitrary blob of charge look like? Expand the potential in powers of 1/r and the answer organizes itself into a hierarchy:</p>
<p style="text-align:center;">V(r) = (1/4πε₀) [ Q/r + p·r̂/r² + (quadrupole)/r³ + … ]</p>
<ul>
  <li><strong>Monopole (1/r):</strong> Q is the total charge. From far enough away, everything looks like a point charge.</li>
  <li><strong>Dipole (1/r²):</strong> p = Σ qᵢ rᵢ′ (or ∫ r′ρ dτ′) is the <strong>dipole moment</strong> — the leading signature of a neutral object whose positive and negative charges are displaced from one another.</li>
  <li><strong>Quadrupole (1/r³)</strong> and beyond: ever finer details of the charge arrangement, fading ever faster with distance.</li>
</ul>
<p>The expansion is a telescope run in reverse: each term you keep resolves one more layer of structure. If Q ≠ 0, the monopole dominates at large r. If Q = 0 — a neutral molecule, say — the dipole term is the headline. The water molecule's permanent dipole moment (6.2 × 10⁻³⁰ C·m, from the bent H–O–H geometry) is why water dissolves salt, absorbs microwaves, and has that anomalously large dielectric constant waiting in Chapter 2.</p>
<p>The pure dipole's field, in spherical coordinates with p along the z-axis:</p>
<p style="text-align:center;">E_dip = (p/4πε₀r³)(2cos θ r̂ + sin θ θ̂)</p>
<p>Note the 1/r³ falloff — one power faster than a point charge — and the characteristic shape: field lines leaving the + end, looping around, diving into the − end. Two subtleties guard against exam traps: the dipole moment of a <em>neutral</em> distribution is independent of your choice of origin (but not otherwise), and a physical dipole (two charges a finite distance apart) only becomes the pure dipole in the limit of vanishing separation.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The multipole expansion is the shared language of an absurd range of physics: chemists classify molecular interactions by it, nuclear physicists measure quadrupole moments to learn that many nuclei are rugby-ball shaped, and cosmologists expand the cosmic microwave background in multipoles — the famous CMB power spectrum is literally a plot against multipole number l. And in Chapter 6, the dipole term will turn out to be the dominant way the universe makes light.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A region of empty space is bounded by surfaces on which the potential V is completely specified. How many distinct solutions of Laplace's equation match those boundary values?",
          options: [
            "Infinitely many, differing by harmonic functions",
            "Two — one for each sign of the field",
            "Exactly one",
            "It depends on the charge outside the region",
          ],
          correctIndex: 2,
          explanation:
            "This is the first uniqueness theorem: with V given on every boundary, the solution inside is unique. Any two solutions would differ by a harmonic function vanishing on all boundaries, and a harmonic function attains its extremes on the boundary — so the difference is zero everywhere. Uniqueness is what licenses guessing games like the method of images.",
        },
        {
          question:
            "In the image solution for a point charge q a distance d above a grounded conducting plane, the electrostatic energy of the configuration is:",
          options: [
            "Half the energy of the real two-charge system, W = −q²/(16πε₀d), because there is no field below the plane",
            "Equal to that of two real charges q and −q separated by 2d",
            "Zero, since the plane is grounded",
            "Positive, because energy densities are always positive",
          ],
          correctIndex: 0,
          explanation:
            "The image reproduces the field only above the plane; below it the field is zero, not the mirror field. Energy lives in the field (u = ε₀E²/2), so integrating over just the upper half-space gives half the naive two-charge answer: W = −q²/(16πε₀d). The force, by contrast, is exactly the two-charge value — forces are local, energy is global.",
        },
        {
          question:
            "Why does Earnshaw's theorem forbid a charged particle from sitting in stable equilibrium in an external electrostatic field?",
          options: [
            "Because the electrostatic force is always attractive",
            "Because electric field lines always terminate on charges",
            "Because energy conservation forbids a particle at rest",
            "Because stable equilibrium requires a local minimum of V in empty space, and solutions of Laplace's equation have no interior extremes",
          ],
          correctIndex: 3,
          explanation:
            "Trapping a positive charge requires the potential to increase in every direction — a local minimum of V in charge-free space. But harmonic functions take their maxima and minima only on boundaries: any interior point is exactly the average of its neighbors. No purely electrostatic trap exists, which is one reason classical models of matter fail and ion traps must use time-varying or magnetic fields.",
        },
        {
          question:
            "A conducting sphere of radius R sits in a uniform applied field E₀. The exterior solution is V = −E₀(r − R³/r²)cos θ. What is the physical meaning of the R³cos θ/r² term?",
          options: [
            "The residue of the applied field inside the sphere",
            "The potential of the induced dipole the sphere acquires in response to the field",
            "A quadrupole correction from the sphere's curvature",
            "An unphysical artifact that must be subtracted",
          ],
          correctIndex: 1,
          explanation:
            "A cos θ/r² potential is precisely that of a point dipole at the origin. The uniform field drives positive induced charge to the top of the sphere and negative to the bottom (σ = 3ε₀E₀cos θ), and from outside this rearrangement is indistinguishable from a pure dipole of moment p = 4πε₀R³E₀. Conductors answer uniform fields with dipoles — a preview of how all matter polarizes.",
        },
        {
          question:
            "An overall neutral charge distribution is viewed from far away. Which multipole term generally dominates its potential?",
          options: [
            "The monopole term, falling off as 1/r",
            "The quadrupole term, falling off as 1/r³",
            "The dipole term, falling off as 1/r², provided the dipole moment is nonzero",
            "None — a neutral distribution produces no field at large distance",
          ],
          correctIndex: 2,
          explanation:
            "Neutrality kills the monopole term (Q = 0), so the leading survivor is the dipole term p·r̂/(4πε₀r²) — unless symmetry kills p too, in which case the quadrupole leads. Neutral is not the same as fieldless: water's permanent dipole moment dominates its long-range electrostatics and underwrites its skill as a solvent. Usefully, when Q = 0 the value of p doesn't even depend on the choice of origin.",
        },
      ],
    },
    {
      id: "fields-in-matter",
      title: "Fields in Matter",
      subtitle: "Polarization, magnetization, and the auxiliary fields D and H",
      sections: [
        {
          id: "polarization-bound-charge",
          title: "Polarization and Bound Charge",
          content: `
<p>Put an insulator in an electric field and it cannot spill free electrons like a conductor — but it responds all the same. Each atom's electron cloud shifts slightly off its nucleus, becoming a tiny induced dipole; polar molecules like water, which carry permanent dipoles, additionally twist to align with the field. Either way the material acquires a <strong>polarization</strong>:</p>
<p style="text-align:center;"><strong>P = dipole moment per unit volume</strong></p>
<p>Here is the key insight: a polarized material produces exactly the same field as a certain distribution of ordinary charge, called <strong>bound charge</strong>:</p>
<p style="text-align:center;">σ_b = P·n̂ (on surfaces)&nbsp;&nbsp;&nbsp;&nbsp;ρ_b = −∇·P (in the volume)</p>
<p>The picture is worth the formulas. Imagine rows of microscopic dipoles lined up head-to-tail, like people passing buckets along a chain. In the interior, every dipole's head touches its neighbor's tail and the charges cancel. But at the surface where the chain ends, a layer of uncanceled heads pokes out: surface charge σ_b = P·n̂. If the polarization is nonuniform, the cancellation in the bulk is imperfect too, leaving volume charge ρ_b = −∇·P. Nothing is fictitious here — bound charge is real charge, merely charge that is <em>attached</em>, displaced fractions of an atom rather than free to roam.</p>
<p><strong>Showcase: the uniformly polarized sphere.</strong> The bound charge is a surface layer σ_b = P cos θ — positive cap on top, negative below. Solving (by the separation-of-variables machinery of Chapter 1) gives a wonderfully clean result: the field <em>inside</em> the sphere is uniform,</p>
<p style="text-align:center;">E_inside = −P/3ε₀</p>
<p>pointing opposite to P, while the field outside is that of a perfect dipole. The internal field opposes the polarization that created it — which is why it's called the <strong>depolarizing field</strong>, and why materials cannot usually polarize themselves spontaneously.</p>
<div class="key-concept">
  <h4>The program for matter</h4>
  <p>Replace the material by its bound charges, then use vacuum electrostatics. All the machinery of Chapter 1 applies unchanged — matter just supplies extra sources. The auxiliary field of the next section is bookkeeping on top of this picture, not new physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Electrets — the electrostatic cousins of permanent magnets — are materials with frozen-in permanent polarization. The microphone in your phone and laptop is almost certainly an electret microphone: a permanently polarized film whose vibrations modulate a voltage with no external bias needed.</p>
</div>`,
        },
        {
          id: "d-field-dielectrics",
          title: "The D Field and Linear Dielectrics",
          content: `
<p>Gauss's law is always true with the <em>total</em> charge: ∇·E = (ρ_f + ρ_b)/ε₀, splitting charge into the free charge ρ_f you control (on wires, plates, probes) and the bound charge the material generates. But ρ_b = −∇·P depends on the answer — an annoying circularity. Absorb it. Substitute and rearrange:</p>
<p style="text-align:center;">∇·(ε₀E + P) = ρ_f</p>
<p>Define the <strong>electric displacement</strong> D = ε₀E + P, and Gauss's law becomes sublime bookkeeping:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇·D = ρ_f</strong>&nbsp;&nbsp;&nbsp;&nbsp;∮D·da = Q_f,enc</p>
<p>D responds only to the charge you put there deliberately. In symmetric problems you can find D from free charge alone, then recover E from the material law. A warning worth its weight in exam points: D is <em>not</em> "ε₀E with matter included." There is no Coulomb's law for D, and its curl need not vanish (∇×D = ∇×P, which is nonzero in, say, a bar electret) — so D can't generally be computed from a Gaussian-surface argument unless the symmetry is genuine.</p>
<p>For most materials at ordinary field strengths, the response is proportional to the stimulus — a <strong>linear dielectric</strong>:</p>
<p style="text-align:center;">P = ε₀χₑE&nbsp;&nbsp;&nbsp;⇒&nbsp;&nbsp;&nbsp;D = εE, with ε = ε₀(1 + χₑ)</p>
<p>The dimensionless ratio ε_r = 1 + χₑ is the <strong>dielectric constant</strong>: 1.00059 for air, ~5 for glass, ~80 for water (those free-swiveling permanent dipoles again).</p>
<p><strong>The capacitor payoff.</strong> Slide a dielectric between the plates of an isolated, charged capacitor. The induced bound charge partially screens the plate charge, E and V drop by ε_r, and the capacitance rises: C = ε_r C_vacuum. That is why real capacitors are stuffed with ceramic or polymer film, not vacuum — more storage at the same voltage, plus a higher breakdown threshold.</p>
<div class="key-concept">
  <h4>The pattern of auxiliary fields</h4>
  <p>E is the true, fundamental field — the one that exerts forces on charges. D is a convenience field whose sources are only the charges you control. The same division of labor recurs magnetically as B (fundamental) and H (auxiliary), and mixing up which is which is the classic blunder of this subject.</p>
</div>`,
        },
        {
          id: "boundary-conditions-energy",
          title: "Boundary Conditions, Energy & Forces",
          content: `
<p>Fields jump at surfaces, and the jumps are the practical content of the theory. Run a Gaussian pillbox and an Amperian-style loop across any interface and Maxwell's electrostatic equations deliver:</p>
<ul>
  <li><strong>D<sup>⊥</sup> is continuous</strong> across the boundary (unless free surface charge sits there: the jump equals σ_f).</li>
  <li><strong>E<sup>∥</sup> is continuous</strong> always (∇×E = 0 tolerates no tangential jump).</li>
</ul>
<p>In linear dielectrics these two rules bend field lines at interfaces — the electrostatic analog of refraction — and let you solve matter problems with the Chapter 1 machinery. The showcase: a dielectric sphere in a uniform applied field E₀. Separation of variables plus the boundary conditions gives a uniform interior field,</p>
<p style="text-align:center;">E_inside = 3E₀/(ε_r + 2)</p>
<p>reduced but not expelled — a conductor (ε_r → ∞) is the limiting case that expels the field entirely. The same calculation with the sphere's dielectric constant <em>less</em> than the surroundings reverses the effect, which is why bubbles in oil and cells in saline show up so crisply to electric probes.</p>
<p><strong>Energy.</strong> Charging a capacitor filled with linear dielectric costs</p>
<p style="text-align:center;">W = ½∫D·E dτ = ½∫ε_r ε₀E² dτ</p>
<p>The ε_r enhancement over vacuum has a physical home: part of the energy is stored in the stretched and twisted molecular dipoles, like energy in a wound spring.</p>
<p><strong>Forces.</strong> Hold a charged parallel-plate capacitor vertically and dip its edge into oil: the oil climbs up between the plates. A slab of dielectric is <em>pulled into</em> the gap. The culprit is the fringing field at the edges — the nonuniform field there acts on the induced dipoles and drags high-ε_r material toward strong field. Energy bookkeeping gets the magnitude cleanly, but be careful which is constant: at fixed charge the field energy <em>drops</em> as the slab enters (energy goes into pulling it in); at fixed voltage the battery pays for everything.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Optical tweezers — the Nobel-winning tool that manipulates single cells and DNA strands — are this section's oil-rise experiment at laser frequencies: a focused beam's field gradient pulls dielectric objects toward the focus. Gradient forces on induced dipoles hold a bacterium as surely as they lift oil between capacitor plates.</p>
</div>`,
        },
        {
          id: "magnetization-h-field",
          title: "Magnetization and the H Field",
          content: `
<p>Matter responds to magnetic fields too, through the magnetic moments of its electrons — orbital motion and, mostly, spin. Three behaviors emerge. <strong>Diamagnets</strong> (water, copper, you) develop a feeble magnetization <em>opposing</em> B. <strong>Paramagnets</strong> (aluminum, oxygen) align weakly <em>with</em> B. And <strong>ferromagnets</strong> (iron, cobalt, nickel) are the anomaly: neighboring electron spins lock together by the quantum exchange interaction into <strong>domains</strong>, magnetized to saturation, needing only an external nudge to align — response a thousand to a million times stronger than the others.</p>
<p>Define the <strong>magnetization</strong> M = magnetic dipole moment per unit volume — the twin of P. And just as P masquerades as bound charge, M masquerades as <strong>bound current</strong>:</p>
<p style="text-align:center;">J_b = ∇×M (volume)&nbsp;&nbsp;&nbsp;&nbsp;K_b = M×n̂ (surface)</p>
<p>Picture a uniformly magnetized cylinder as a stack of microscopic current loops. Interior loops cancel neighbor against neighbor; at the surface the cancellation fails, leaving a net current sheet circulating around the cylinder. A bar magnet <em>is</em> a solenoid — the bound surface current plays the role of the windings, which is why their fields are identical.</p>
<p>Now the bookkeeping move you can predict. Ampère's law with total current, ∇×B = μ₀(J_f + J_b), hides the material's response inside J_b. Absorb it by defining</p>
<p style="text-align:center; font-size:1.05em;"><strong>H = B/μ₀ − M</strong>&nbsp;&nbsp;&nbsp;⇒&nbsp;&nbsp;&nbsp;∇×H = J_f,&nbsp;&nbsp;∮H·dl = I_f,enc</p>
<p>H responds only to the free currents in your wires — which is why lab magnets are specified in H. For linear media, M = χ_m H and B = μH; χ_m is around −10⁻⁵ (diamagnets) or +10⁻⁵ to 10⁻³ (paramagnets). Ferromagnets are gloriously nonlinear: M depends on the <em>history</em> of H, tracing hysteresis loops. Drive the loop and the enclosed area is energy dissipated per cycle; leave the material at H = 0 with M ≠ 0 and you have made a permanent magnet — literally frozen memory, the original hard drive.</p>
<div class="key-concept">
  <h4>The parallel, and the mismatch</h4>
  <p>P ↔ M, bound charge ↔ bound current, D ↔ H. But note the sign conventions differ (D = ε₀E + P, H = B/μ₀ − M), and remember which fields are fundamental: E and B exert the forces; D and H keep the books.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A uniformly polarized dielectric sphere has no free charge anywhere. What produces its electric field?",
          options: [
            "Nothing — with no free charge there is no field",
            "Bound surface charge σ_b = P·n̂, positive on one hemisphere and negative on the other",
            "The D field, which acts as a source of E",
            "Displacement current within the dielectric",
          ],
          correctIndex: 1,
          explanation:
            "Uniform P means ρ_b = −∇·P = 0 in the volume, but at the surface the head-to-tail cancellation of molecular dipoles fails, leaving σ_b = P·n̂ = P cos θ. This real (if immobile) charge generates a uniform field −P/3ε₀ inside and a perfect dipole field outside. Bound charge is genuine charge — it is simply attached to molecules rather than free to move.",
        },
        {
          question:
            "The chief practical advantage of the displacement field D is that:",
          options: [
            "D is the field that exerts forces on charges inside matter",
            "D always vanishes inside dielectrics",
            "D can be computed from Coulomb's law with ε replacing ε₀",
            "Its divergence involves only free charge, so symmetric problems can be solved without knowing the bound charge in advance",
          ],
          correctIndex: 3,
          explanation:
            "∇·D = ρ_f eliminates the circularity that bound charge depends on the field you're solving for. Given symmetry, ∮D·da = Q_f,enc yields D from the controllable charge alone; then E = D/ε in linear media. But the force on charges is always exerted by E, D obeys no Coulomb's law, and its curl need not vanish — D is bookkeeping, not fundamental.",
        },
        {
          question:
            "A slab of dielectric is drawn into the gap of a charged parallel-plate capacitor. The force that pulls it in comes from:",
          options: [
            "the nonuniform fringing field at the edges acting on the slab's induced dipoles",
            "the uniform field between the plates pushing on bound charge",
            "the mutual attraction of the bound charges on the slab's two faces",
            "the increase of field energy as the slab enters",
          ],
          correctIndex: 0,
          explanation:
            "In the uniform interior field, forces on the induced dipoles balance. It is the fringing field — nonuniform, curving at the edges — that exerts a net force on the polarized slab, always toward the stronger field for ε_r > 1. Energetically (at fixed charge), the system's stored energy drops as the high-ε material enters, and the difference appears as work done on the slab. Optical tweezers use the identical gradient force at light frequencies.",
        },
        {
          question:
            "Why is a uniformly magnetized bar magnet's field identical to that of a solenoid of the same shape?",
          options: [
            "It isn't — the magnet's field comes from magnetic charges at its poles",
            "The interior molecular current loops cancel, leaving a net bound surface current K_b = M×n̂ that circulates like the solenoid's windings",
            "The H field of the magnet equals the B field of the solenoid",
            "Because both obey ∇·B = 0",
          ],
          correctIndex: 1,
          explanation:
            "Model the magnetization as a dense stack of microscopic current loops. Adjacent interior loops carry opposing currents where they touch and cancel; only at the cylindrical surface does a net azimuthal current sheet survive. That bound current is physically real and plays exactly the role of solenoid windings — which is why the two field patterns match, and why 'magnetic charge' never needs to appear.",
        },
        {
          question:
            "What distinguishes a ferromagnet from a paramagnet at the microscopic level?",
          options: [
            "Ferromagnets contain magnetic monopoles; paramagnets do not",
            "Paramagnets respond only to H, ferromagnets only to B",
            "In a ferromagnet the quantum exchange interaction locks neighboring spins into aligned domains, so the response is collective, enormous, and history-dependent",
            "Ferromagnetic atoms have magnetic moments; paramagnetic atoms do not",
          ],
          correctIndex: 2,
          explanation:
            "Both materials have atomic moments; the difference is cooperation. In a paramagnet each moment aligns independently against thermal jostling — a weak, linear, reversible effect. In iron, exchange coupling (pure quantum mechanics, no classical analog) aligns neighboring spins spontaneously within domains; an applied field merely grows and rotates domains. The result is magnetization up to a million times stronger, saturation, hysteresis, and permanent magnets.",
        },
      ],
    },
    {
      id: "magnetostatics-deepened",
      title: "Magnetostatics Deepened",
      subtitle: "The vector potential and magnetic multipoles",
      sections: [
        {
          id: "why-vector-potential",
          title: "Why A Exists: The Vector Potential",
          content: `
<p>Electrostatics earned a potential because ∇×E = 0 makes E a gradient. Magnetostatics can't play that game — ∇×B = μ₀J is generally nonzero — but it has its own gift: <strong>∇·B = 0</strong>, always and everywhere (no magnetic monopoles). And just as curl-free fields are gradients, divergence-free fields are curls. So there exists a <strong>vector potential</strong> A with</p>
<p style="text-align:center; font-size:1.15em;"><strong>B = ∇×A</strong></p>
<p>Immediately a new freedom appears. Add the gradient of any scalar function to A and, since the curl of a gradient vanishes, B is untouched:</p>
<p style="text-align:center;">A → A + ∇λ&nbsp;&nbsp;&nbsp;leaves B unchanged</p>
<p>This is your first meeting with <strong>gauge freedom</strong> — the potential is not unique, and we may impose one extra condition to pin it down. The standard magnetostatic choice, the <strong>Coulomb gauge</strong>, is ∇·A = 0. With it, Ampère's law ∇×B = μ₀J becomes (via the curl-of-curl identity) three copies of Poisson's equation:</p>
<p style="text-align:center;">∇²A = −μ₀J&nbsp;&nbsp;&nbsp;⇒&nbsp;&nbsp;&nbsp;A(r) = (μ₀/4π) ∫ J(r′)/|r − r′| dτ′</p>
<p>Compare V = (1/4πε₀)∫ρ/|r−r′| dτ′: the vector potential is the magnetic twin of the electric potential, one Cartesian component at a time, with μ₀J standing in for ρ/ε₀. Every technique of Chapter 1 — images, separation of variables, uniqueness — transfers. A useful mental picture: A tends to run parallel to the current that sources it, the way V is largest near positive charge.</p>
<div class="key-concept">
  <h4>Is A physical or bookkeeping?</h4>
  <p>In classical electrodynamics you can treat A as scaffolding — only B pushes on charges. But the ledger will not stay closed. The canonical momentum of Subject 24's Lagrangian mechanics for a charged particle is p = mv + qA; quantum mechanics writes its wave equation in terms of A, not B; and the Aharonov–Bohm effect (Subject 27) shows electrons responding measurably to A in regions where B is exactly zero. The 'mathematical device' is on a promotion track.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Maxwell himself regarded A as fundamental, calling it the "electromagnetic momentum" — before Heaviside and Hertz stripped potentials out of the equations as unphysical clutter. Quantum theory ultimately vindicated Maxwell's instinct.</p>
</div>`,
        },
        {
          id: "computing-a-boundary-conditions",
          title: "Working with A: Examples & Boundary Conditions",
          content: `
<p>The best way to befriend A is to compute it. <strong>The solenoid</strong> is the classic, because it dramatizes A's strangeness. Inside an ideal solenoid (n turns per length, current I), B = μ₀nI is uniform; outside, B = 0. The vector potential circles the axis:</p>
<p style="text-align:center;">A = (μ₀nI s/2) φ̂ inside,&nbsp;&nbsp;&nbsp;A = (μ₀nI R²/2s) φ̂ outside</p>
<p>(s is the distance from the axis, R the solenoid radius). Look at the outside line: <strong>A is nonzero where B vanishes</strong>. Its curl is zero out there, but its loop integral is not — by Stokes' theorem, ∮A·dl around the solenoid equals the enclosed flux Φ = πR²B. The vector potential remembers the flux threading a loop even along paths where no field exists. File that fact: it is precisely what the Aharonov–Bohm experiment will exploit.</p>
<p>A second workhorse: a <strong>uniform field</strong> B₀ẑ can be represented by A = ½(B₀ × r) — handy for atoms in magnetic fields in Subject 27.</p>
<p><strong>Boundary conditions.</strong> Cross a surface carrying free surface current K and the fields jump in a tidy, exam-ready way:</p>
<ul>
  <li><strong>B<sup>⊥</sup> continuous</strong> (from ∇·B = 0 and a pillbox),</li>
  <li><strong>B<sup>∥</sup> jumps by μ₀K</strong> (from Ampère's law and a small loop), direction given by K×n̂,</li>
  <li><strong>A itself is continuous</strong> across the surface (in Coulomb gauge), while its normal derivative jumps by −μ₀K.</li>
</ul>
<p>Note the mirror-image structure with electrostatics: there E<sup>∥</sup> was continuous and E<sup>⊥</sup> jumped by σ/ε₀; here the roles of parallel and perpendicular swap, because the sources swapped from charge (a scalar) to current (a vector in the surface).</p>
<div class="key-concept">
  <h4>The magnetostatic toolkit, assembled</h4>
  <p>Given currents: integrate for A (or B directly via Biot–Savart when symmetry is poor). Given symmetry: Ampère's law. Given boundaries: solve ∇²A = −μ₀J with the matching conditions, exactly as you solved Poisson problems for V. One subject's mathematics, two fields' physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A classic problem solvable this way — the uniformly charged spinning sphere — turns out to have a perfectly uniform B inside and a pure dipole field outside. Swap in a neutron star's parameters and this "toy" is the starting model for pulsar magnetospheres.</p>
</div>`,
        },
        {
          id: "magnetic-multipoles",
          title: "Magnetic Multipoles: No Monopole, Dipole Rules",
          content: `
<p>Run the far-field program of Chapter 1 on the vector potential of a localized current loop: expand 1/|r − r′| in powers of 1/r inside A = (μ₀/4π)∫J/|r−r′| dτ′. A multipole series emerges — with a stunning first entry:</p>
<p style="text-align:center;"><strong>The monopole term is exactly zero. Always.</strong></p>
<p>The would-be monopole coefficient is ∮dl′ around the loop — the sum of all the little displacement vectors around a closed path — which vanishes identically. This is ∇·B = 0 speaking in the language of multipoles: there is no magnetic "total charge," so no magnetic field can fall off like 1/r². Cut a bar magnet in half and you get two dipoles, never an isolated pole.</p>
<p>The leading term is therefore the <strong>dipole</strong>:</p>
<p style="text-align:center;">A_dip = (μ₀/4π) m×r̂/r²,&nbsp;&nbsp;&nbsp;with m = I a</p>
<p>where a is the loop's vector area — for a flat loop, magnitude = area, direction by the right-hand rule. The magnetic dipole moment m is the loop's whole identity at long range: a 1-ampere current around a 1-cm² loop and an electron's intrinsic spin moment are described by the same m, however different their innards.</p>
<p>Taking the curl gives the dipole field:</p>
<p style="text-align:center;">B_dip = (μ₀m/4πr³)(2cos θ r̂ + sin θ θ̂)</p>
<p>— <em>identical in form</em> to the electric dipole field of Chapter 1, with μ₀m replacing p/ε₀. Same donut-and-loops geometry, same 1/r³ falloff. Yet up close the twins differ tellingly: inside a physical electric dipole the field runs from + to −, <em>against</em> p; inside a current loop the field runs <em>with</em> m. Field lines of E begin and end on charge; field lines of B, having nowhere to begin, close on themselves through the loop.</p>
<div class="key-concept">
  <h4>Why dipoles dominate the magnetic world</h4>
  <p>With the monopole forbidden, the dipole is magnetism's leading voice: Earth's field, a compass needle, the electron's spin moment, an MRI scanner's target — all dipoles to first approximation. Higher multipoles are corrections; the quadrupole term leads only in devices engineered to cancel the dipole, like accelerator focusing magnets.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Searches for magnetic monopoles are serious business — grand unified theories predict them, and a monopole passing through a superconducting loop would leave an unmistakable persistent current. One candidate event was recorded on Valentine's Day 1982 ("the Valentine's Day monopole"). It was never repeated, and the monopole count stands, officially, at zero.</p>
</div>`,
        },
        {
          id: "dipoles-in-fields",
          title: "Dipoles at Work: Torque, Force & a Look Ahead",
          content: `
<p>A dipole placed in an external field is the hinge between field theory and the mechanics of Subject 24. A uniform field B exerts no net force on a current loop (the forces around the loop cancel) but a torque:</p>
<p style="text-align:center;"><strong>N = m×B</strong>,&nbsp;&nbsp;&nbsp;with energy U = −m·B</p>
<p>The torque swings m toward alignment with B — that is a compass needle, the twitch of a galvanometer, and the operating principle of every electric motor: force alignment, then flip the current (the commutator's job) just as alignment arrives, forever chasing equilibrium.</p>
<p>In a <em>nonuniform</em> field the force no longer cancels:</p>
<p style="text-align:center;">F = ∇(m·B)</p>
<p>An aligned dipole is pulled toward strong field; an anti-aligned one is pushed out. Now the material taxonomy of Chapter 2 becomes tabletop physics: paramagnets (m aligns with B) are drawn into a magnet's gap; diamagnets (induced m opposes B) are expelled. The effect is feeble — but with a strong enough gradient it lifts anything. In 1997 a live frog, an ordinary diamagnetic frog, was floated serenely in the 16-tesla bore of a Nijmegen magnet: every water molecule pushed away from strong field, the sum balancing gravity. (The frog was reportedly unbothered; the physicist, Andre Geim, won an Ig Nobel for it, and later a real Nobel for graphene.)</p>
<p>The same force equation runs the <strong>Stern–Gerlach experiment</strong> waiting in Subject 26: a nonuniform field converts the value of m into a measurable deflection. Classically the atomic beam should smear into a band; it split into two discrete spots, and quantum spin announced itself through F = ∇(m·B).</p>
<div class="key-concept">
  <h4>Where magnetostatics is headed</h4>
  <p>You now hold the complete static theory: E from charges, B from steady currents, matter folded in through P and M, potentials V and A with a first taste of gauge freedom. Everything so far assumes nothing changes in time. Release that assumption and the two static theories fuse into one dynamical one — Chapter 4.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>MRI machines image you by the dipole physics of this section: your protons' magnetic moments are aligned by a static 1.5–3 T field, tipped by a resonant radio pulse, and their precessing dipole fields induce the signal. The gradient coils that make the image spatial are precisely engineered ∇B — and they are what bangs so loudly during a scan.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The vector potential A is guaranteed to exist because:",
          options: [
            "∇×B = μ₀J relates B to its current sources",
            "every vector field can be written as a curl",
            "A is defined as the integral of B along a path",
            "∇·B = 0 everywhere, and divergence-free fields can be written as curls",
          ],
          correctIndex: 3,
          explanation:
            "The absence of magnetic monopoles, ∇·B = 0, is the existence certificate for A: just as curl-free fields are gradients (E = −∇V), divergence-free fields are curls (B = ∇×A). Not every vector field can be written as a curl — only divergence-free ones, since the divergence of a curl vanishes identically. E, with ∇·E = ρ/ε₀ ≠ 0, generally cannot.",
        },
        {
          question:
            "Outside an ideal solenoid, B = 0 yet A ≠ 0. What physical information does A carry there?",
          options: [
            "Its loop integral ∮A·dl equals the magnetic flux threading the solenoid, even along paths where B vanishes",
            "None — a quantity is physical only where B is nonzero",
            "It gives the electric field induced when the current changes",
            "It measures the solenoid's stored energy density at that point",
          ],
          correctIndex: 0,
          explanation:
            "By Stokes' theorem, ∮A·dl around any loop equals the flux of B through it. Encircle the solenoid and the answer is Φ = πR²B — nonzero — so A cannot vanish outside. Classically this looks like bookkeeping, but quantum mechanically an electron circling the solenoid acquires a measurable phase proportional to exactly this flux (the Aharonov–Bohm effect), forcing us to take A seriously as physical.",
        },
        {
          question:
            "Why does the multipole expansion of a magnetostatic field begin with the dipole term rather than a monopole term?",
          options: [
            "The monopole term is too small to measure",
            "The would-be monopole coefficient is ∮dl′ around the closed current loop, which is identically zero — the multipole echo of ∇·B = 0",
            "Current loops are electrically neutral",
            "The dipole term happens to be larger for most magnets",
          ],
          correctIndex: 1,
          explanation:
            "Expanding A in powers of 1/r, the 1/r term's coefficient is the closed line integral of dl′, which vanishes for any loop — displacement vectors around a closed path sum to zero. This is not an approximation but an identity, equivalent to the absence of magnetic charge. Hence no magnetic field falls off as 1/r², cutting a magnet yields two dipoles, and the dipole is magnetism's leading long-range term.",
        },
        {
          question:
            "A magnetic dipole m sits in a nonuniform magnetic field. Which statement is correct?",
          options: [
            "It feels a torque but never a net force",
            "It feels a net force F = ∇(m·B) as well as a torque m×B; alignment determines whether it is pulled toward or pushed away from strong field",
            "It feels a net force only if it carries electric charge",
            "It moves along field lines like a charged particle",
          ],
          correctIndex: 1,
          explanation:
            "In a uniform field the forces on a current loop cancel, leaving only the torque m×B. A gradient breaks the cancellation: F = ∇(m·B) pulls aligned dipoles toward strong field and expels anti-aligned ones. This single equation runs magnetic separation, the floating diamagnetic frog, MRI gradient physics, and the Stern–Gerlach experiment that revealed quantum spin.",
        },
      ],
    },
    {
      id: "maxwell-equations",
      title: "Electrodynamics & Maxwell's Equations",
      subtitle: "The complete field equations, their conservation laws, and gauge freedom",
      sections: [
        {
          id: "displacement-current",
          title: "Maxwell's Fix: The Displacement Current",
          content: `
<p>By 1860 the field equations read: ∇·E = ρ/ε₀, ∇·B = 0, ∇×E = −∂B/∂t (Faraday), and ∇×B = μ₀J (Ampère). Maxwell noticed the last one is <em>mathematically broken</em>. Take its divergence: the left side vanishes identically (divergence of a curl), so it demands ∇·J = 0 always. But charge conservation says ∇·J = −∂ρ/∂t — nonzero whenever charge piles up anywhere. Ampère's law contradicts the conservation of charge except in strictly steady situations.</p>
<p>The paradox has a hardware version. Apply Ampère's integral law to a wire charging a capacitor, with the Amperian loop around the wire. Stretch the surface bounded by that loop so it balloons <em>between the plates</em>: no current pierces it, yet the same loop integral must give the same answer. Contradiction.</p>
<p>Maxwell's repair: between the plates something <em>is</em> changing — the electric field, growing as charge accumulates. Add its time derivative as a new source:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∇×B = μ₀J + μ₀ε₀ ∂E/∂t</strong></p>
<p>The new term, the <strong>displacement current</strong>, is exactly what charge conservation prescribes: take the divergence now and, using Gauss's law, the equation reduces to ∇·J = −∂ρ/∂t, precisely. In the capacitor, the changing E between the plates supplies μ₀ε₀∂E/∂t flux that exactly replaces the conduction current, and every surface spanning the loop agrees.</p>
<div class="key-concept">
  <h4>The symmetry that makes light</h4>
  <p>Faraday: a changing B creates an E. Maxwell: a changing E creates a B. Each field can now regenerate the other in empty space, with no charges or wires in sight — a self-sustaining leapfrog that can detach from its sources and travel. Chapter 5 will show it travels at exactly the measured speed of light.</p>
</div>
<p>Note what kind of discovery this was: no experiment demanded the term (its effects were too small to see in 1861). Maxwell was led by consistency — the equations <em>had</em> to say this or contradict charge conservation. Hertz confirmed the consequences experimentally a quarter century later.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The name "displacement current" is a fossil. Maxwell pictured a mechanical aether whose bound charges physically displaced — the term described real (to him) moving charge in the medium. The aether evaporated; the term, and the misleading name, stayed.</p>
</div>`,
        },
        {
          id: "maxwell-complete",
          title: "The Complete Maxwell Equations",
          content: `
<p>Here they are — the complete classical theory of electricity, magnetism, and light, four lines that fit on a T-shirt and underwrite a third of the world economy:</p>
<table>
  <thead>
    <tr><th>Equation</th><th>Name</th><th>What it says</th></tr>
  </thead>
  <tbody>
    <tr><td>∇·E = ρ/ε₀</td><td>Gauss</td><td>Charges source E; field lines start and end on charge</td></tr>
    <tr><td>∇·B = 0</td><td>No monopoles</td><td>B field lines never start or end; they close on themselves</td></tr>
    <tr><td>∇×E = −∂B/∂t</td><td>Faraday</td><td>Changing B curls an E around it</td></tr>
    <tr><td>∇×B = μ₀J + μ₀ε₀∂E/∂t</td><td>Ampère–Maxwell</td><td>Currents and changing E curl a B around them</td></tr>
  </tbody>
</table>
<p>Add the force law F = q(E + v×B) and classical electromagnetism is <em>closed</em>: the equations tell fields how to respond to charges, the force law tells charges how to respond to fields. By Helmholtz's theorem (Chapter 1), specifying every div and curl is specifying the fields completely — these four lines are not a summary of electromagnetism; they are all of it.</p>
<p>Charge conservation needs no separate postulate: take the divergence of Ampère–Maxwell, invoke Gauss, and ∂ρ/∂t + ∇·J = 0 falls out. The theory <em>refuses</em> to describe a universe where charge appears from nothing.</p>
<p>Inside matter, the same content wears working clothes. Splitting charge and current into free and bound parts and folding the bound parts into D = ε₀E + P and H = B/μ₀ − M:</p>
<p style="text-align:center;">∇·D = ρ_f&nbsp;&nbsp;&nbsp;∇·B = 0&nbsp;&nbsp;&nbsp;∇×E = −∂B/∂t&nbsp;&nbsp;&nbsp;∇×H = J_f + ∂D/∂t</p>
<p>— the form engineers use daily, needing only the material's <strong>constitutive relations</strong> (D = εE, B = μH for linear media) to close the system.</p>
<div class="key-concept">
  <h4>Read them as a machine</h4>
  <p>The two divergence equations are constraints — snapshots any legal field must satisfy. The two curl equations are the dynamics: they contain the time derivatives, telling the fields how to update from one instant to the next. Feed in charges and currents, crank, and out comes everything: motors, radio, optics, and — as the next sections show — the field's own energy, momentum, and waves.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>When Boltzmann first read Maxwell's theory he quoted Goethe's Faust: "Was it a god who wrote these signs?" Einstein kept portraits of three physicists on his study wall: Newton, Faraday, and Maxwell.</p>
</div>`,
        },
        {
          id: "gauge-freedom",
          title: "Potentials & Gauge Freedom",
          content: `
<p>In electrodynamics the potentials must be rebuilt. B is still divergence-free, so B = ∇×A survives. But Faraday's law says ∇×E = −∂B/∂t ≠ 0, so E alone is no longer a gradient. Substitute B = ∇×A into Faraday's law: ∇×(E + ∂A/∂t) = 0. The <em>combination</em> in parentheses is curl-free, hence a gradient:</p>
<p style="text-align:center; font-size:1.05em;"><strong>E = −∇V − ∂A/∂t</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>B = ∇×A</strong></p>
<p>Two Maxwell equations (the homogeneous pair) are now satisfied automatically; the other two become coupled equations for V and A. And the gauge freedom of Chapter 3 blossoms into a two-part transformation. For any function λ(r, t):</p>
<p style="text-align:center;">A → A + ∇λ&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;V → V − ∂λ/∂t</p>
<p>leave E and B — and therefore every measurable force — exactly unchanged. Infinitely many potential pairs describe the same physics. Far from being a defect, this looseness is a tool: <em>choose</em> λ to make your equations pretty.</p>
<ul>
  <li><strong>Coulomb gauge</strong> (∇·A = 0): V obeys plain Poisson's equation, instantaneously tracking the charge distribution — computationally convenient, though the apparent instantaneity is a gauge artifact, not physics (E and B stay properly causal).</li>
  <li><strong>Lorenz gauge</strong> (∇·A = −μ₀ε₀ ∂V/∂t): the crown jewel. The coupled equations decouple into two identical wave equations,
  <p style="text-align:center;">∇²V − μ₀ε₀ ∂²V/∂t² = −ρ/ε₀&nbsp;&nbsp;&nbsp;∇²A − μ₀ε₀ ∂²A/∂t² = −μ₀J</p>
  sources on the right, waves on the left — the launching pad for radiation in Chapter 6, and (bonus) a form that will turn out to be relativistically immaculate in Chapter 7.</li>
</ul>
<div class="key-concept">
  <h4>A technicality with a future</h4>
  <p>Here gauge invariance looks like calculational hygiene. Run the logic backwards, though — demand that physics be invariant under local phase/gauge transformations and ask what fields must exist — and electromagnetism itself is the answer. Generalize the symmetry group and out come the weak and strong forces. The entire Standard Model is built on the principle making its modest debut on this page.</p>
</div>`,
        },
        {
          id: "poynting-theorem",
          title: "Field Energy: Poynting's Theorem, Derived",
          content: `
<p>If fields are real, they should carry energy — and Maxwell's equations, interrogated correctly, tell us exactly how much and where it flows. Follow the derivation; it is three honest steps.</p>
<p><strong>Step 1.</strong> The rate at which fields do work on the charges in a volume is ∫E·J dτ (magnetic forces, always perpendicular to velocity, do no work).</p>
<p><strong>Step 2.</strong> Eliminate the matter variable J using Ampère–Maxwell: J = ∇×B/μ₀ − ε₀∂E/∂t, so E·J = E·(∇×B)/μ₀ − ε₀E·∂E/∂t.</p>
<p><strong>Step 3.</strong> Deploy the product rule ∇·(E×B) = B·(∇×E) − E·(∇×B) and Faraday's law ∇×E = −∂B/∂t. Every term collapses into a time derivative or a divergence:</p>
<p style="text-align:center; font-size:1.05em;"><strong>∫E·J dτ = −d/dt ∫ ½(ε₀E² + B²/μ₀) dτ − ∮ (E×B)/μ₀ · da</strong></p>
<p>Read it as a bank statement — this is <strong>Poynting's theorem</strong>. Work delivered to charges = (energy withdrawn from storage in the fields) + (energy imported through the boundary). It identifies, with no room for negotiation:</p>
<ul>
  <li><strong>Energy density:</strong> u = ½(ε₀E² + B²/μ₀) — every cubic meter of field holds this much energy.</li>
  <li><strong>Energy flux:</strong> the <strong>Poynting vector</strong> S = (E×B)/μ₀ — energy per second crossing unit area, direction E×B.</li>
</ul>
<p>Now the delicious surprise. Apply S to a wire carrying current I with voltage drop V: E has a component along the wire, B circles it, and E×B points <em>radially inward through the wire's surface</em>. Do the integral: ∮S·da = VI, the full Joule heating. According to Maxwell's equations, the energy lighting your lamp does not travel inside the copper — it flows through the <em>fields surrounding</em> the cord and funnels in through the wire's sides. The wire is a guide and a drain, not a pipe.</p>
<div class="key-concept">
  <h4>Fields are not bookkeeping</h4>
  <p>Energy resides in the field itself, locatable cubic meter by cubic meter, flowing along S. Sunlight is S in flight: about 1.4 kW through every square meter above the atmosphere, eight minutes out from its source. Once fields carry energy — and, next section, momentum — they are as physically real as the matter they push.</p>
</div>`,
        },
        {
          id: "momentum-stress-tensor",
          title: "Field Momentum & the Stress Tensor Idea",
          content: `
<p>Energy was only half the ledger. Electromagnetic fields carry <strong>momentum</strong> too, with density</p>
<p style="text-align:center;">g = ε₀(E×B) = S/c²</p>
<p>— the Poynting vector again, demoted by c². Absorb light and you absorb its momentum: <strong>radiation pressure</strong> P = I/c on an absorber, 2I/c on a mirror. Sunlight's ~4.5 μPa will never flutter a flag, but it adds up on the large and the long-lived: comet dust tails streaming sunward-away, solar sails like IKAROS actually flown on it, and the outward light pressure that helps balance massive stars against their own gravity.</p>
<p>Why must fields carry momentum? Newton's third law forces it. Two charges moving at right angles exert magnetic forces on each other that are <em>not</em> equal and opposite — mechanical momentum is visibly not conserved. The books balance only when the field's momentum is counted: what the particles lose, the field gains. In the famous Feynman disk paradox, switching off a solenoid sets a charged disk rotating "from nothing" — the angular momentum was stored in the crossed E and B fields all along.</p>
<p>Who does the accounting? The <strong>Maxwell stress tensor</strong> T. The idea: momentum flowing through a surface is force, so there exists an object T whose entries T_ij give the flow of i-momentum across a surface facing j — equivalently, the electromagnetic force per unit area, pressure and shear alike, transmitted across any surface in the field:</p>
<p style="text-align:center;">F = ∮ T·da&nbsp;&nbsp;&nbsp;(total EM force on everything inside the surface)</p>
<p>Its structure (T_ij = ε₀(E_iE_j − ½δ_ijE²) + similar B terms) encodes a beautiful mechanical picture that Faraday intuited a century early: field lines behave like elastic bands — <strong>tension along</strong> the lines, <strong>pressure across</strong> them. Two opposite charges attract because the field lines connecting them pull taut; two like charges repel because their crowded parallel lines shoulder each other apart. Forces "at a distance" become local stresses in the field, handed from cubic meter to cubic meter.</p>
<div class="key-concept">
  <h4>The conservation-law trilogy</h4>
  <p>Charge conservation is built into Maxwell's equations; Poynting's theorem is energy conservation for fields; the stress tensor runs momentum conservation. A field with energy, momentum, and local stresses is a full citizen of mechanics — and in Chapter 7, energy density, Poynting flux, and stress will slot together as the sixteen components of a single relativistic object.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What inconsistency in Ampère's law ∇×B = μ₀J did Maxwell's displacement current repair?",
          options: [
            "Its divergence forces ∇·J = 0 always, contradicting charge conservation whenever charge accumulates — as between charging capacitor plates",
            "It predicted the wrong magnetic field for steady currents in wires",
            "It violated Faraday's law of induction",
            "It allowed magnetic monopoles to exist",
          ],
          correctIndex: 0,
          explanation:
            "The divergence of any curl vanishes, so Ampère's law demands ∇·J = 0 — true only for steady currents. Charge conservation requires ∇·J = −∂ρ/∂t. Adding μ₀ε₀∂E/∂t restores consistency exactly (take the divergence and Gauss's law completes charge conservation), and resolves the capacitor puzzle: between the plates, the changing E stands in for the conduction current. For steady currents the new term vanishes, so no existing experiment was disturbed.",
        },
        {
          question:
            "The gauge transformation A → A + ∇λ, V → V − ∂λ/∂t leaves which quantities unchanged?",
          options: [
            "Only B, since only A changes by a curl-free term",
            "The potentials themselves, which are directly measurable",
            "The fields E and B, and hence every measurable force — infinitely many potential pairs describe the same physics",
            "Only static fields; time-dependent fields are altered",
          ],
          correctIndex: 2,
          explanation:
            "B = ∇×A is untouched because the curl of a gradient vanishes; in E = −∇V − ∂A/∂t the two λ-terms cancel exactly. All forces, and therefore all classical measurements, are identical in every gauge. This freedom is exploited by choosing λ to simplify the equations — Coulomb gauge for statics, Lorenz gauge for radiation — and the underlying invariance principle, generalized, becomes the architecture of the Standard Model.",
        },
        {
          question:
            "According to Poynting's theorem, how does energy reach the filament of a lamp connected by wires to a battery?",
          options: [
            "It is carried by the drifting electrons' kinetic energy inside the copper",
            "It flows through the electromagnetic field surrounding the circuit and enters the wire sideways through its surface, at rate ∮S·da = VI",
            "It travels as heat conducted along the wire from the battery terminals",
            "It tunnels directly from the battery to the filament",
          ],
          correctIndex: 1,
          explanation:
            "The Poynting vector S = (E×B)/μ₀ around a current-carrying wire points radially inward: E has a component along the wire, B circles it, and E×B aims at the axis. Integrating over the wire's surface gives exactly VI, the delivered power. The electrons drift at millimeters per second and carry negligible kinetic energy; the field carries the payload. Wires guide the energy flow — they are not pipes that contain it.",
        },
        {
          question:
            "Two point charges moving at right angles to each other exert magnetic forces that are not equal and opposite. Why doesn't this destroy conservation of momentum?",
          options: [
            "The magnetic forces are too small to matter",
            "Newton's third law is simply false for all electromagnetic interactions, and momentum conservation fails with it",
            "The electric forces compensate the magnetic imbalance exactly",
            "The electromagnetic field itself carries momentum (density ε₀E×B); the total of particle plus field momentum is conserved",
          ],
          correctIndex: 3,
          explanation:
            "Mechanical momentum alone is genuinely not conserved here — the third law fails for the particles by themselves. The resolution is that the field is a momentum reservoir with density g = ε₀(E×B) = S/c²: whatever the particles lose, the field gains, with the Maxwell stress tensor doing the local accounting. Radiation pressure and the Feynman disk paradox are the same lesson: fields are mechanical objects in full standing.",
        },
        {
          question:
            "In the Maxwell stress tensor picture, the attraction between opposite charges is best described as:",
          options: [
            "tension along the field lines connecting them, transmitted locally through the field like a stretched elastic band",
            "instantaneous action at a distance between the charges",
            "pressure pushing the charges together from behind",
            "an exchange of photons",
          ],
          correctIndex: 0,
          explanation:
            "The stress tensor converts 'force at a distance' into local stresses: field lines carry tension along their length and exert pressure sideways on their neighbors. Opposite charges are laced together by lines in tension; like charges repel as their parallel lines crowd and push apart — Faraday's elastic-band intuition made quantitative. (Photon exchange is the quantum field theory retelling — a deeper layer, but not the classical stress-tensor account asked for here.)",
        },
      ],
    },
    {
      id: "em-waves",
      title: "EM Waves",
      subtitle: "Light in vacuum, matter, and conductors — dispersion to waveguides",
      sections: [
        {
          id: "waves-in-vacuum",
          title: "Waves in Vacuum: Light Falls Out of the Equations",
          content: `
<p>Set ρ = 0 and J = 0 — utterly empty space — and watch Maxwell's equations refuse to be boring. Take the curl of Faraday's law, use the curl-of-curl identity with ∇·E = 0, then swap in Ampère–Maxwell:</p>
<p style="text-align:center;">∇×(∇×E) = −∂(∇×B)/∂t&nbsp;&nbsp;⇒&nbsp;&nbsp;<strong>∇²E = μ₀ε₀ ∂²E/∂t²</strong></p>
<p>and identically for B. This is the three-dimensional wave equation of Subject 20, with propagation speed</p>
<p style="text-align:center; font-size:1.1em;">v = 1/√(μ₀ε₀) = 2.998 × 10⁸ m/s</p>
<p>Pause on what just happened. μ₀ and ε₀ were measured with coils, capacitors, and torsion balances — benchtop electricity, nothing optical. Combine them and out comes the speed of light, measured astronomically decades earlier. Maxwell, 1862: "we can scarcely avoid the inference that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena." Optics had just become a chapter of electromagnetism. Hertz generated and detected the waves in 1887 — reflecting, refracting, polarizing meter-length waves in a lecture hall.</p>
<p>Maxwell's equations also dictate the wave's anatomy. For a monochromatic plane wave traveling along ẑ:</p>
<ul>
  <li><strong>Transverse:</strong> ∇·E = 0 and ∇·B = 0 forbid components along the direction of travel.</li>
  <li><strong>Locked partners:</strong> Faraday's law forces B = (1/c) ẑ×E — B perpendicular to E, in phase, with fixed ratio E/B = c. One wave, two faces; (E, B, direction of travel) form a right-handed triad.</li>
  <li><strong>Polarization:</strong> the remaining freedom is the direction of E in the transverse plane — the two polarization states you met optically in Subject 20, now derived.</li>
  <li><strong>Energy and momentum:</strong> electric and magnetic energy densities are exactly equal; the intensity is I = ⟨S⟩ = ½ε₀cE₀², and the wave carries momentum I/c — radiation pressure, as promised in Chapter 4.</li>
</ul>
<div class="key-concept">
  <h4>The whole spectrum is one thing</h4>
  <p>Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma: identical physics, one parameter (frequency) swept across twenty orders of magnitude. The visible octave is merely the slice your retinal pigments happen to absorb.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Since 1983 the meter is defined by fixing c = 299,792,458 m/s exactly. The speed of light cannot be measured anymore, only inherited — lengths are measured in light-travel-time.</p>
</div>`,
        },
        {
          id: "waves-in-media-dispersion",
          title: "Waves in Matter & Dispersion",
          content: `
<p>Inside a linear medium, Maxwell's equations keep their shape with ε and μ replacing ε₀ and μ₀, so waves propagate at v = 1/√(εμ) = c/n, where</p>
<p style="text-align:center;">n = √(ε_r μ_r) ≈ √ε_r&nbsp;&nbsp;(μ_r ≈ 1 for transparent materials)</p>
<p>is the <strong>index of refraction</strong> — Snell's n from Subject 13, now derived from electromagnetism. But an embarrassment surfaces immediately: water has ε_r ≈ 80, predicting n ≈ 9, while measured n = 1.33. The resolution is the heart of this section: <strong>ε depends on frequency</strong>. The static value 80 comes from whole water molecules swiveling to align — a process taking ~10⁻¹¹ s. At optical frequencies (~10¹⁵ Hz) the field reverses a hundred thousand times before a molecule can turn; the dipoles simply cannot keep up, and only the nimble electron clouds respond. Different frequency, different ε, different n: <strong>dispersion</strong>.</p>
<p>The physics is a driven, damped oscillator — Subject 20's workhorse, re-employed. Model each electron as bound with natural frequency ω₀, driven by the wave's E field. The induced polarization, and hence n(ω), follows the familiar resonance response:</p>
<ul>
  <li>Well below resonance, n rises gently with frequency (<strong>normal dispersion</strong>): blue bends more than red, so prisms and raindrops unpack white light. In glass the relevant resonances sit in the ultraviolet, which is why visible n climbs toward the blue.</li>
  <li>Near ω₀ the medium absorbs strongly, and across the absorption band n plunges with frequency (<strong>anomalous dispersion</strong>).</li>
  <li>The damping term makes n complex — the imaginary part <em>is</em> absorption. A material's transparency windows are simply the gaps between its resonances.</li>
</ul>
<div class="key-concept">
  <h4>Two velocities, one wave</h4>
  <p>In a dispersive medium the crests move at the phase velocity ω/k while a pulse's envelope — and its energy and information — moves at the group velocity dω/dk (Subject 20's distinction, now with teeth). Near resonances the phase velocity can exceed c, and even the group velocity can misbehave; no signal ever outruns c. Relativity is never in danger, only naive definitions of 'speed.'</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Dispersion is a billion-dollar problem: in optical fibers, different frequencies in a pulse travel at slightly different speeds, smearing the 0s and 1s into each other over distance. Fiber engineers fight back with dispersion-shifted fiber and periodic compensation — Subject 20's dω/dk, deployed at industrial scale under every ocean.</p>
</div>`,
        },
        {
          id: "fresnel-reflection",
          title: "Reflection & Transmission: The Fresnel Story",
          content: `
<p>What happens when a wave hits the border between two media? Electromagnetism answers with the boundary conditions of Chapter 2: across the interface, E<sup>∥</sup> and H<sup>∥</sup> must be continuous. A single incident wave can't satisfy both — the field must split into reflected and transmitted parts, with amplitudes the boundary conditions dictate exactly. These are the <strong>Fresnel equations</strong>, and Subject 13's optics rules all fall out of them: same angle of reflection, Snell's law of refraction, plus the amplitudes and phases those rules never gave you.</p>
<p><strong>Normal incidence</strong> is clean. The reflected fraction of the intensity is</p>
<p style="text-align:center;">R = ((n₁ − n₂)/(n₁ + n₂))²</p>
<p>Air to glass: R = (0.5/2.5)² = 4% per surface — the faint double reflection of your face in a window at night. Note the physics in the sign: going into a denser medium (n₂ &gt; n₁), the reflected E flips phase by 180°, the electromagnetic version of a wave on a string reflecting off a fixed end (Subject 20), and the fact behind thin-film interference colors.</p>
<p><strong>Oblique incidence</strong> brings in polarization: the component with E parallel to the plane of incidence and the perpendicular component reflect <em>differently</em>. The showstopper: at <strong>Brewster's angle</strong>,</p>
<p style="text-align:center;">tan θ_B = n₂/n₁&nbsp;&nbsp;(≈ 56° for air–glass)</p>
<p>the parallel component's reflection vanishes entirely. Light reflected at this angle is perfectly polarized perpendicular to the plane of incidence. The physical reason is radiation's blind spot, a preview of Chapter 6: the transmitted wave sets the glass's electrons oscillating, and at Brewster's angle the reflected ray would have to leave exactly along those dipoles' axes — the one direction dipoles cannot radiate. Glare off water and asphalt is horizontally polarized for exactly this reason, and polarized sunglasses are mounted to reject it.</p>
<p>Reversing the trip (n₁ &gt; n₂), Snell's law jams beyond the critical angle sin θ_c = n₂/n₁: <strong>total internal reflection</strong>, at 100% — better than any mirror, and the confinement principle of the optical fiber. Just outside the surface lurks a non-traveling <strong>evanescent wave</strong>, decaying in a wavelength or so; bring a second glass surface into that skin and light leaks across the forbidden gap — frustrated total internal reflection, the optical rehearsal for quantum tunnelling in Subject 26.</p>`,
        },
        {
          id: "conductors-skin-depth",
          title: "Waves in Conductors & the Skin Depth",
          content: `
<p>A conductor adds one ingredient: free charge that moves, J = σE (Ohm's law, in field clothing). Feed that into Maxwell's equations and the wave equation gains a damping term — physically, the wave now spends itself driving currents that dissipate as Joule heat. The plane-wave solution acquires a <strong>complex wave number</strong>: the wave still oscillates, but its amplitude decays exponentially with depth,</p>
<p style="text-align:center;">E ∝ e^(−z/δ),&nbsp;&nbsp;&nbsp;<strong>δ = √(2/μσω)</strong></p>
<p>The <strong>skin depth</strong> δ is how far the wave penetrates before its amplitude falls by 1/e. For a good conductor it is tiny and shrinks with frequency:</p>
<table>
  <thead>
    <tr><th>Copper at…</th><th>Skin depth δ</th></tr>
  </thead>
  <tbody>
    <tr><td>60 Hz (power lines)</td><td>≈ 8.5 mm</td></tr>
    <tr><td>1 MHz (AM radio)</td><td>≈ 65 μm</td></tr>
    <tr><td>2.4 GHz (Wi-Fi)</td><td>≈ 1.3 μm</td></tr>
    <tr><td>Visible light</td><td>a few nm</td></tr>
  </tbody>
</table>
<p>One small formula, a fistful of consequences:</p>
<ul>
  <li><strong>Why metals are shiny and opaque:</strong> light can't get in, so its energy has nowhere to go but back out — nearly total reflection. A metal's luster <em>is</em> its conductivity, visible.</li>
  <li><strong>Why Faraday cages and microwave-oven doors work:</strong> a few skin depths of metal — even a perforated sheet, if the holes are much smaller than the wavelength — reduce the interior field to essentially nothing.</li>
  <li><strong>Why high-frequency engineering is different:</strong> at radio frequencies current flows only in a thin shell of the wire (raising its effective resistance), so RF conductors are tubes or braided litz wire, and precision cavities are merely silver-plated — the interior metal never sees the field.</li>
  <li><strong>Why submarines are hard to call:</strong> seawater conducts, so navies resort to extremely low frequencies (~76 Hz), where δ stretches to tens of meters, to reach submerged boats — at bit rates of a few characters per minute.</li>
</ul>
<div class="key-concept">
  <h4>The dividing line</h4>
  <p>"Good conductor" is frequency-relative: the criterion is σ ≫ εω — conduction current dwarfing displacement current. Seawater is a good conductor at radio frequencies but nearly transparent at optical ones (divers see sunlight). Same Maxwell equations, different term in charge.</p>
</div>`,
        },
        {
          id: "waveguides",
          title: "Waveguides: Light Down a Pipe",
          content: `
<p>Free space lets waves spread and dilute; a <strong>waveguide</strong> — at its simplest, a hollow rectangular metal pipe — herds them. The walls impose boundary conditions (E<sup>∥</sup> = 0 on a good conductor), and just as a guitar string's clamps quantize its vibrations (Subject 20), the pipe's walls quantize the transverse field pattern into discrete <strong>modes</strong>, labeled TEₘₙ by the number of half-wavelength lobes across each dimension.</p>
<p>First surprise: a hollow pipe cannot carry the simple transverse plane wave of free space (a TEM mode needs two separated conductors — coaxial cable has them; a single pipe doesn't). The guided modes must keep a field component along the axis, and each mode propagates only above its own <strong>cutoff frequency</strong>. For a pipe of width a and height b:</p>
<p style="text-align:center;">ω₁₀ = πc/a for the lowest (TE₁₀) mode; below cutoff, waves don't travel but die exponentially</p>
<p>A waveguide is thus a built-in high-pass filter. Engineers usually pick dimensions so that exactly one mode propagates at the working frequency — a single, clean field pattern with no rivals. Standard X-band guide (a ≈ 2.3 cm) does this for ~8–12 GHz radar.</p>
<p>Second surprise: inside the guide, the phase velocity <em>exceeds</em> c, while the group velocity — the speed of energy and signals — stays below it, with the elegant relation v_phase v_group = c². No relativity violated: the guided mode is a zigzag superposition of plane waves bouncing between the walls, and the faster-than-c crests are the geometrical sweep of intersecting wavefronts, like the scissors-point of a closing pair of shears. Near cutoff the zigzag steepens: phase velocity soars, group velocity crawls toward zero, and dispersion is severe.</p>
<div class="key-concept">
  <h4>One physics, two technologies</h4>
  <p>Metal pipes guide microwaves by reflection off conductors; optical fibers guide light by total internal reflection off an index step (Fresnel section). Both quantize the transverse pattern into modes with cutoffs; single-mode fiber — core a few μm, one guided mode — is the reason a hair of glass can carry terabits across an ocean. Same boundary-value mathematics, from radar plumbing to the backbone of the internet.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your microwave oven ends in a waveguide feeding a resonant metal box — a cavity, the waveguide's fully-enclosed cousin, ringing at 2.45 GHz. The cold spots that undercook food sit at the standing-wave nodes; the turntable exists to drag dinner through the antinodes.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What was historically decisive about the value 1/√(μ₀ε₀) emerging from Maxwell's wave equation?",
          options: [
            "It was the first measurement of μ₀ and ε₀",
            "It proved that light needs no medium to travel",
            "Two constants measured in tabletop electrical experiments combined to give the independently known speed of light, identifying light as an electromagnetic wave",
            "It showed that electric and magnetic fields obey different wave equations",
          ],
          correctIndex: 2,
          explanation:
            "ε₀ came from capacitor-style measurements, μ₀ from force-between-currents measurements — nothing optical anywhere. That 1/√(μ₀ε₀) reproduced the astronomically measured speed of light was a unification bombshell: optics became electromagnetism. Hertz's 1887 generation of radio waves, which reflected and refracted like light, sealed the identification experimentally.",
        },
        {
          question:
            "Water's static dielectric constant is about 80, yet its optical refractive index is only 1.33. Why?",
          options: [
            "The refractive index depends on μ_r, not ε_r",
            "ε_r is frequency-dependent: at optical frequencies water's permanent dipoles cannot reorient fast enough, leaving only the small electronic response",
            "Impurities in real water lower its permittivity",
            "The formula n = √ε_r applies only to solids",
          ],
          correctIndex: 1,
          explanation:
            "n = √ε_r is fine — provided you use ε_r at the wave's frequency. The static value 80 is dominated by whole molecules swiveling into alignment, a ~10⁻¹¹ s process. Optical fields reverse ~10¹⁵ times per second, far too fast for molecular rotation, so only the electron clouds polarize and ε_r drops to about 1.77 = 1.33². Dispersion is precisely this frequency-dependence of the material response.",
        },
        {
          question:
            "At Brewster's angle, the reflected light is completely polarized because:",
          options: [
            "the perpendicular polarization is completely transmitted",
            "the surface absorbs one polarization component",
            "the wave's magnetic field cannot cross the interface",
            "the reflected ray would lie along the oscillation axis of the medium's driven dipoles for one polarization — and a dipole radiates nothing along its axis",
          ],
          correctIndex: 3,
          explanation:
            "The refracted wave sets the medium's electrons oscillating; the reflected wave is their re-radiation. At Brewster's angle (tan θ_B = n₂/n₁, when reflected and refracted rays are perpendicular) the would-be reflected direction for in-plane polarization points straight down the dipole axes — the one direction of zero dipole radiation (sin²θ pattern). Only the perpendicular polarization reflects, which is why glare is polarized and polarized sunglasses work.",
        },
        {
          question:
            "Why does metal shielding a few millimeters thick block low-frequency electromagnetic waves, and why are metals shiny?",
          options: [
            "Waves in a conductor decay within the skin depth δ = √(2/μσω); energy that cannot penetrate is re-emitted, i.e. reflected",
            "The metal's nuclei absorb the photons",
            "Metals are dense, and wave speed decreases with density",
            "The magnetic permeability of metals diverges at low frequency",
          ],
          correctIndex: 0,
          explanation:
            "Free charges short out the wave: the field drives currents that dissipate, giving exponential decay with depth δ. A few skin depths of metal reduce the transmitted field to nearly nothing — the working principle of Faraday cages and microwave-oven mesh (holes ≪ wavelength count as solid). Since almost no energy is absorbed in the thin skin, conservation sends it back out as reflection: metallic luster is high conductivity made visible.",
        },
        {
          question:
            "In a hollow rectangular waveguide operating above cutoff, which statement is true?",
          options: [
            "Both phase and group velocity equal c",
            "The phase velocity exceeds c while the group velocity is below c, with v_phase · v_group = c² — and no signal travels faster than light",
            "Waves of every frequency propagate equally well",
            "The guide carries the same TEM plane wave as free space",
          ],
          correctIndex: 1,
          explanation:
            "A guided mode is a superposition of plane waves zigzagging between the walls. The crest pattern sweeps along the axis faster than c — a geometric effect carrying no information, like the intersection point of closing scissors — while the energy advances at the slower group velocity. Each mode has a cutoff frequency below which it only decays, and a hollow single-conductor pipe supports no TEM mode at all; that requires two conductors, as in coax.",
        },
      ],
    },
    {
      id: "potentials-and-radiation",
      title: "Potentials & Radiation",
      subtitle: "Retarded potentials and how accelerating charges shed light",
      sections: [
        {
          id: "retarded-potentials",
          title: "Retarded Potentials: Fields with a Memory",
          content: `
<p>Electrostatics let you pretend influence is instantaneous: V = (1/4πε₀)∫ρ/|r−r′| dτ′, everything evaluated <em>now</em>. Electrodynamics forbids the pretense — news travels at c. In the Lorenz gauge (Chapter 4), V and A obey wave equations with sources, and their solutions carry causality built in:</p>
<p style="text-align:center;">V(r, t) = (1/4πε₀) ∫ ρ(r′, t_r)/|r−r′| dτ′&nbsp;&nbsp;&nbsp;&nbsp;A(r, t) = (μ₀/4π) ∫ J(r′, t_r)/|r−r′| dτ′</p>
<p style="text-align:center;">with the <strong>retarded time</strong>&nbsp;&nbsp;t_r = t − |r−r′|/c</p>
<p>Read it aloud: the potential here and now is built from each source element <em>as it was</em> when light would have had just enough time to make the trip. The formulas look like statics wearing a wristwatch — the only change is evaluating ρ and J at t_r — but that change is everything. Wiggle a charge, and the news of the wiggle expands outward at c as a spherical ripple in the potentials; the far universe learns of it late. You see the Sun as it was eight minutes ago; the galaxies in a deep-field image, as they were billions of years before Earth existed. Astronomy is applied retardation.</p>
<p>Mathematically, the wave equation is equally happy with the <em>advanced</em> solution, t + |r−r′|/c — potentials determined by the future behavior of sources. We discard it by fiat: effects follow causes. It is a genuinely deep point that Maxwell's time-symmetric equations do not themselves choose a direction of time; causality (kin to Subject 12's entropic arrow) is imposed as a boundary condition on the universe.</p>
<div class="key-concept">
  <h4>A warning and a promise</h4>
  <p>Do not "retard" the fields naively: sticking t_r into Coulomb's law for E gives the wrong answer. The honest route is potentials first, then differentiate. Done carefully (Jefimenko's equations), the fields depend not only on the retarded ρ and J but on their retarded time derivatives — and it is precisely those derivative terms, falling off as 1/r rather than 1/r², that carry energy to infinity. Radiation lives in the time derivatives: no acceleration, no light.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>GPS is retarded-potential engineering: your receiver triangulates from the emission times of signals that left each satellite ~67 ms ago, and the system's error budget must also carry special- and general-relativistic clock corrections of 38 μs per day — ignore them and positions would drift by ~10 km daily.</p>
</div>`,
        },
        {
          id: "dipole-radiation-blue-sky",
          title: "Dipole Radiation — and Why the Sky Is Blue",
          content: `
<p>The simplest source that shines: an oscillating electric dipole, p(t) = p₀ cos(ωt) ẑ — two tiny spheres trading charge through a short wire, or an atom's electron cloud sloshing against its nucleus. Feed it through the retarded potentials, keep the far-zone terms, and the radiation fields emerge:</p>
<p style="text-align:center;">E, B ∝ (sin θ / r) cos[ω(t − r/c)]&nbsp;&nbsp;— transverse, in phase, E/B = c</p>
<p>Three features deserve frames:</p>
<ul>
  <li><strong>1/r, not 1/r².</strong> Intensity ∝ E² falls as 1/r², while the area of a sphere grows as r² — so the total power through any sphere is <em>constant</em>. The energy is genuinely gone from the source, en route to infinity. Static-type 1/r² fields can never do this; radiation is exactly the 1/r part.</li>
  <li><strong>The sin²θ donut.</strong> No radiation along the dipole axis, maximum broadside. The pattern of every small antenna — and the reason Brewster reflection vanished in Chapter 5.</li>
  <li><strong>The ω⁴ law.</strong> Total power ⟨P⟩ = μ₀p₀²ω⁴/12πc. Two derivatives of p (radiation cares about acceleration) get squared: frequency to the fourth. Doubling the frequency multiplies radiated power by sixteen.</li>
</ul>
<p>That fourth power paints the sky. Sunlight drives the electrons of air molecules into forced oscillation; each molecule re-radiates as a miniature dipole — <strong>Rayleigh scattering</strong>. Molecules are far smaller than the wavelength, so the driving is well below any resonance and the ω⁴ law applies raw: violet-blue light (~450 nm) scatters roughly six times more strongly than red (~700 nm). Look away from the Sun and you see scattered light — blue. (Not violet: the Sun emits less violet, and your eye is less sensitive to it.) Look <em>toward</em> the Sun at sunset, through a few hundred kilometers of air, and the blue has been sieved out en route — the survivor is orange-red. Bonus prediction: scattered skylight should be polarized perpendicular to the Sun direction (the sin²θ pattern again). It is — bees navigate by it, and photographers' polarizing filters darken exactly the right patch of sky.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Clouds are white, not blue, because their droplets are much larger than the wavelength — outside the Rayleigh regime, all colors scatter about equally (Mie scattering). The same size-dependence explains white milk, white paper, and why a drop of milk in water glows faintly blue by transmitted-versus-scattered light.</p>
</div>`,
        },
        {
          id: "larmor-formula",
          title: "The Larmor Formula: What Acceleration Costs",
          content: `
<p>Strip radiation to its essentials: any point charge that accelerates radiates, with total power given by the <strong>Larmor formula</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>P = μ₀q²a²/6πc</strong>&nbsp;&nbsp;(= q²a²/6πε₀c³)</p>
<p>Charge squared, acceleration squared, and that's all — velocity does not appear (uniform motion cannot radiate; that would violate relativity, since the charge is at rest in <em>some</em> frame). The radiation carries the dipole signature: sin²θ pattern about the acceleration vector, none fore-and-aft along a.</p>
<p>Feed the formula famous inputs:</p>
<ul>
  <li><strong>An antenna electron:</strong> gentle accelerations, minuscule power per electron — but 10²³ of them driven coherently add amplitudes, not powers, and a transmitter throws kilowatts.</li>
  <li><strong>Bremsstrahlung ("braking radiation"):</strong> slam electrons into a metal target and the violent deceleration radiates X-rays — Röntgen's tube, and every hospital X-ray machine since, is Larmor with a₂ enormous.</li>
  <li><strong>The classical atom, and its death sentence.</strong> Rutherford's electron circling a proton is perpetually accelerating (centripetally), so it must radiate continuously, spiral inward, radiate harder as it tightens, and crash into the nucleus. Put in the numbers: total collapse in about 1.6 × 10⁻¹¹ seconds. Classical electrodynamics predicts that atoms — all atoms, all matter — cannot exist for even a nanosecond. This is not a small discrepancy to patch; it is the theory's honest confession of its own limits, and the single cleanest argument for why quantum mechanics (Subject 26) had to happen: stationary states that simply do not radiate.</li>
</ul>
<div class="key-concept">
  <h4>Radiation reaction: the recoil of light</h4>
  <p>Energy radiated must be paid by the charge, so radiation exerts a back-force on its own source (the Abraham–Lorentz force, ∝ da/dt). Normally negligible, it turns philosophically explosive on close inspection — self-interaction, runaway solutions, pre-acceleration — foreshadowing the self-energy troubles that quantum electrodynamics would eventually tame by renormalization. Even classical physics, pushed hard, points beyond itself.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Larmor's formula sets real limits on accelerator design: the power a bent electron radiates scales as γ⁴, which is why CERN's 27 km LEP ring was the last great circular electron machine and its tunnel was handed to protons (the LHC) — 1836 times heavier, γ⁴-cheaper to steer in circles.</p>
</div>`,
        },
        {
          id: "antennas",
          title: "Antennas: Radiation, Engineered",
          content: `
<p>An antenna is an oscillating dipole scaled up on purpose: a structure shaped so that driven currents radiate efficiently and in the direction you want. The archetype is the <strong>half-wave dipole</strong> — a straight conductor of total length λ/2, center-fed by a transmission line. Why that length? It is the resonance condition of Subject 20 in metal: the current standing wave fits one half-wavelength, maximum at the feed, zero at the tips, so the whole structure oscillates in phase like an organ pipe of current.</p>
<p>To the transmitter, the antenna looks like a resistor of about <strong>73 Ω</strong> — the <strong>radiation resistance</strong> — but no heat appears in it: this "resistance" is power leaving as radiation, disguised as Ohmic loss in the circuit's ledger. It is why coaxial cables and RF gear standardize near 50–75 Ω: matching the line to the antenna's radiation resistance ships the power into space instead of reflecting it back down the cable (impedance matching, exactly as for waves on mismatched strings).</p>
<p>Design principles fall out of the physics you already own:</p>
<ul>
  <li><strong>Size scales with wavelength.</strong> Efficient radiators are a decent fraction of λ. AM broadcast (λ ≈ 300 m) needs skyscraper masts — often the entire tower is the antenna; Wi-Fi at 2.4 GHz (λ = 12.5 cm) fits a bent-metal sliver inside a phone. Electrically tiny antennas have radiation resistance ∝ (length/λ)², dropping toward useless.</li>
  <li><strong>Directionality by interference.</strong> A single dipole radiates its donut everywhere. Arrange several with chosen spacings and phases and their fields interfere — Subject 13's multi-slit physics run in reverse — steering power into narrow beams. Yagi TV antennas, cell towers, and phased-array radars (which steer beams electronically, no moving parts) are diffraction gratings operated as transmitters.</li>
  <li><strong>Reception is transmission reversed.</strong> By reciprocity, a good transmitting antenna is an equally good receiver with the same pattern: the incoming wave drives currents in the same resonant structure. Your car radio antenna is a Hertzian experiment running continuously.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Hertz, asked about the use of his electromagnetic waves, reportedly answered: "Of no use whatsoever... just an experiment that proves Maestro Maxwell was right." Within twenty years Marconi had spanned the Atlantic with them; a century later, essentially every bit of wireless civilization — broadcast, radar, GPS, phones, Wi-Fi — rides Hertz's useless waves.</p>
</div>`,
        },
        {
          id: "synchrotron-bremsstrahlung",
          title: "A Glimpse of Synchrotron Light & Bremsstrahlung",
          content: `
<p>Larmor at relativistic speeds acquires factors of γ — and the character of the radiation transforms. A charge forced around a circle at v ≈ c radiates <strong>synchrotron radiation</strong>, with two dramatic signatures:</p>
<ul>
  <li><strong>Beaming.</strong> The dipole donut, viewed from the lab, is aberrated into a needle-thin searchlight of half-angle ~1/γ pointing along the instantaneous velocity. An observer sees a flash only during the instant the beam sweeps past —</li>
  <li><strong>— which broadens the spectrum.</strong> Short flashes contain high frequencies (Subject 20's Fourier lesson): a particle orbiting at radio frequency emits a broad continuum reaching up to X-rays. Total power scales as γ⁴ for circular motion — the scaling that retired circular electron colliders in the last section.</li>
</ul>
<p>One machine's exhaust is another's beacon. Dedicated <strong>synchrotron light sources</strong> — storage rings whose entire purpose is this radiation — supply the brightest X-rays available, tunable and polarized, to crystallographers, battery chemists, and structural biologists; a good fraction of known protein structures (and several drug design programs) were solved in synchrotron beamlines. In astronomy, synchrotron emission is the signature of cosmic particle accelerators: its telltale power-law spectrum and strong polarization reveal relativistic electrons spiraling in magnetic fields — the radio glow of the Crab Nebula's pulsar wind, the jets of quasars, the lobes of radio galaxies. When you see polarized power-law radio light, you are watching magnetized plasma at nearly the speed of light.</p>
<p><strong>Bremsstrahlung</strong> — braking radiation from charges deflected in Coulomb collisions — is synchrotron's unkempt sibling: not periodic, not beamed into clean cones, just the Larmor cost of violent encounters. It generates the X-ray continuum of medical tubes (electrons slamming into tungsten), and cosmically it is how ten-million-kelvin plasma announces itself: the diffuse X-ray glow of galaxy-cluster gas — most of the ordinary matter in those systems — is thermal bremsstrahlung from electrons scattering off ions.</p>
<div class="key-concept">
  <h4>The unifying moral</h4>
  <p>Every photon in these stories has one ancestor: an accelerated charge. Antenna, X-ray tube, storage ring, quasar jet — the same Larmor physics across thirty orders of magnitude in scale, dressed in different values of q, a, and γ. That economy of principle is Griffiths-level electrodynamics doing what physics does best.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the retarded potential V(r,t) = (1/4πε₀)∫ρ(r′, t_r)/|r−r′| dτ′, what is the physical meaning of evaluating ρ at t_r = t − |r−r′|/c?",
          options: [
            "It corrects for the observer's motion relative to the source",
            "The potential now is assembled from each source element as it was when light could just have made the trip — electromagnetic news travels at c",
            "It accounts for the slowing of time in the source's gravitational field",
            "It is a mathematical convenience with no observable consequence",
          ],
          correctIndex: 1,
          explanation:
            "Causality enters electrodynamics precisely here: influence propagates at c, so the field at distance r reflects the source's state a time r/c ago. Wiggle a charge and the universe finds out at lightspeed, no sooner. The time-reversed 'advanced' solution also solves the wave equation and is discarded as a causal boundary condition. Astronomy is this integral experienced directly: the deep sky is a stack of retarded times.",
        },
        {
          question:
            "Why does the sky appear blue while the setting Sun appears red?",
          options: [
            "Air molecules absorb red light and re-emit it as blue",
            "The atmosphere's refractive index bends blue light toward the ground",
            "Rayleigh-scattered power grows as ω⁴, so air molecules scatter blue sunlight several times more strongly than red; skylight is scattered (blue), while sunset light is what survives the long path (red)",
            "Blue light travels faster in air and arrives preferentially",
          ],
          correctIndex: 2,
          explanation:
            "Each air molecule is a driven dipole re-radiating with the ω⁴ Rayleigh law — blue (~450 nm) scatters roughly six times more than red (~700 nm). Away from the Sun you see only scattered light: blue. Toward a setting Sun the beam has crossed hundreds of kilometers of air that sieved out the blue, leaving orange-red. The theory also predicts skylight's polarization pattern (dipole sin²θ), which bees exploit and polarizing filters confirm.",
        },
        {
          question:
            "What does the Larmor formula P = μ₀q²a²/6πc predict for Rutherford's classical planetary atom?",
          options: [
            "The orbiting electron radiates continuously, spirals into the nucleus in about 10⁻¹¹ s — so classical physics forbids stable atoms and quantum mechanics is required",
            "The electron radiates only when it changes orbits",
            "Stable orbits, because the electron's speed is constant",
            "Slow decay over billions of years, consistent with observed atomic stability",
          ],
          correctIndex: 0,
          explanation:
            "Circular motion is continuous centripetal acceleration, so the classical electron must radiate steadily, lose orbital energy, tighten, accelerate harder, and radiate faster — a runaway spiral ending in the nucleus in ~1.6 × 10⁻¹¹ s. Constant speed does not save it; radiation cares about acceleration, not speed changes alone. Matter's evident stability is therefore a flat contradiction of classical electrodynamics — resolved only by quantum stationary states that do not radiate.",
        },
        {
          question:
            "A half-wave dipole antenna presents its transmitter with a 'radiation resistance' of about 73 Ω. What is this resistance physically?",
          options: [
            "The Ohmic resistance of the antenna metal, which heats up during transmission",
            "The impedance of free space divided by the antenna length",
            "The resistance of the ionosphere reflecting the signal",
            "An effective resistance representing power that leaves the circuit as radiated waves rather than heat",
          ],
          correctIndex: 3,
          explanation:
            "From the circuit's point of view, energy delivered to the antenna disappears just as if dissipated in a 73 Ω resistor — but it departs as electromagnetic radiation, not heat (the metal's true Ohmic resistance is a much smaller loss). Matching the feed line to this radiation resistance is why RF systems standardize near 50–75 Ω: mismatch reflects power back down the cable, exactly like waves on mismatched strings.",
        },
        {
          question:
            "Astronomers observe strongly polarized radio emission with a power-law spectrum from a galactic jet. What are they most likely seeing?",
          options: [
            "Thermal blackbody radiation from hot dust",
            "Bremsstrahlung from slow electrons in cold gas",
            "Spectral lines from hydrogen atoms",
            "Synchrotron radiation from relativistic electrons spiraling around magnetic field lines",
          ],
          correctIndex: 3,
          explanation:
            "Polarization plus a power-law (non-thermal) spectrum is synchrotron's fingerprint: relativistic electrons in magnetic fields radiate beamed, polarized light whose superposed flashes build a broad power-law continuum — unlike thermal spectra, which peak, or line emission, which is discrete. The same physics is engineered on Earth in synchrotron light sources, where the 'exhaust' X-rays of circulating electrons solve protein structures.",
        },
      ],
    },
    {
      id: "relativistic-electrodynamics",
      title: "Relativistic Electrodynamics",
      subtitle: "E and B unified in the field tensor",
      sections: [
        {
          id: "magnetism-from-relativity",
          title: "Magnetism Is Relativity in Disguise",
          content: `
<p>Begin with the thought experiment that gives the whole game away. A wire carries a current: positive ions at rest, electrons drifting left at speed u, densities balanced so the wire is exactly neutral. A positive charge q outside the wire moves right at speed v, parallel to it. In the lab frame the story is purely magnetic: the current makes B circling the wire, and qv×B pulls the charge inward. No electric force — the wire is neutral.</p>
<p>Now ride along with q. In its rest frame the charge cannot feel a magnetic force — it isn't moving. Does it drift toward the wire or not? Frames must agree on events. Special relativity (Subject 21) supplies the resolution through <strong>length contraction</strong>: velocities transform, so in the charge's frame the positive ions stream backward while the electrons move at a different speed than before. Contract each line of charge according to <em>its</em> speed in the new frame, and the balance breaks: the positive charges bunch closer together than the negative ones. The wire, neutral in the lab, is <strong>positively charged in the moving frame</strong> — and it attracts q electrically. Work out the numbers and the electrostatic force in the moving frame matches the magnetic force in the lab frame exactly (after the standard relativistic transformation of force between frames).</p>
<div class="key-concept">
  <h4>One field, two names</h4>
  <p>"Electric" and "magnetic" are frame-dependent labels for a single entity, the electromagnetic field. What one observer calls B, another calls (partly) E. Neither is more fundamental; the split depends on your state of motion, like the split of spacetime into 'space' and 'time' in Subject 21.</p>
</div>
<p>Savor the strangeness of the magnitude. Drift velocities in copper are ~0.1 mm/s — v²/c² of order 10⁻²⁵, relativity at its most homeopathic. The effect is measurable at all only because matter is so stupendously neutral: the enormous electric forces of ~10²³ electrons per cm³ cancel to fantastic precision, and the flea-sized relativistic correction to that cancellation is what we call magnetism. Every motor, every compass needle, every refrigerator magnet is special relativity operating at a tenth of a millimeter per second.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein's 1905 relativity paper is titled "On the Electrodynamics of Moving Bodies," and its first paragraph is about a magnet and a conductor: the physics depends only on relative motion, yet the era's theory told two unrelated stories (induced E in one frame, v×B force in the other). Relativity was born to clean up exactly the asymmetry this chapter resolves.</p>
</div>`,
        },
        {
          id: "how-e-and-b-transform",
          title: "How E and B Transform",
          content: `
<p>If E and B are two faces of one field, there must be exact rules for converting between frames. For a boost with velocity v along the x-axis (γ = 1/√(1−v²/c²)):</p>
<ul>
  <li><strong>Components along the motion are untouched:</strong> E′ₓ = Eₓ, B′ₓ = Bₓ.</li>
  <li><strong>Perpendicular components mix:</strong>
    <p style="text-align:center;">E′_y = γ(E_y − vB_z)&nbsp;&nbsp;&nbsp;E′_z = γ(E_z + vB_y)</p>
    <p style="text-align:center;">B′_y = γ(B_y + (v/c²)E_z)&nbsp;&nbsp;&nbsp;B′_z = γ(B_z − (v/c²)E_y)</p></li>
</ul>
<p>Each transverse E′ picks up a piece of B, and vice versa — the fields interconvert exactly as the wire argument promised. Sanity checks: a capacitor's purely electric field, viewed from a passing train, acquires a magnetic component (moving surface charge is a current — of course it does); a solenoid's pure B, viewed from a moving frame, gains a transverse E (Faraday would call it induction; relativity calls it bookkeeping). And the structure v×B lurking in E′⊥ = γ(E + v×B)⊥ is no coincidence — it is the Lorentz force law's magnetic term, revealed as the electric field the moving charge experiences <em>in its own frame</em>.</p>
<p>Yet not everything is relative. Two combinations survive every boost — the <strong>Lorentz invariants</strong> of the field:</p>
<p style="text-align:center; font-size:1.05em;"><strong>E² − c²B²</strong>&nbsp;&nbsp;and&nbsp;&nbsp;<strong>E·B</strong></p>
<p>These are the field's frame-independent fingerprints, and they sort all field configurations into classes. If E·B = 0 and E² &lt; c²B² (magnetically dominated), some frame sees a pure magnetic field; if electrically dominated, some frame sees pure E. But no boost can create a field from nothing, or turn a pure E into a pure B. A light wave in vacuum has E·B = 0 <em>and</em> E = cB: both invariants vanish. Radiation is perfectly balanced between electric and magnetic — in every inertial frame, forever. There is no frame in which light is electrostatic; you can never catch up to it — Einstein's original teenage riddle, answered by an invariant.</p>
<div class="key-concept">
  <h4>Fields of a fast-moving charge</h4>
  <p>Boost a point charge's Coulomb field and the transverse components are amplified by γ while the longitudinal ones are not: the field pancakes into a thin disk perpendicular to the motion, accompanied by circling B. An ultrarelativistic charge sweeps past like a compressed flash of nearly-plane-wave field — the basis of the 'equivalent photon' trick in particle physics, and of how colliders feel each bunch's fields.</p>
</div>`,
        },
        {
          id: "field-tensor",
          title: "The Field Tensor F",
          content: `
<p>Subject 21 taught the covariant grammar: quantities that mix under Lorentz transformations belong in one geometric object. Space and time fused into x<sup>μ</sup> = (ct, x, y, z); energy and momentum into p<sup>μ</sup>. The transformation rules of the last section show E and B mixing with each other — so they, too, must be components of a single object. But E and B have six components between them, too many for a four-vector. The right container is an antisymmetric rank-2 tensor — a 4×4 matrix with zero diagonal, exactly six independent slots:</p>
<p style="text-align:center; font-size:1.05em;"><strong>F<sup>μν</sup></strong>: the time–space slots hold E (F<sup>01</sup> = Eₓ/c, F<sup>02</sup> = E_y/c, F<sup>03</sup> = E_z/c); the space–space slots hold B (F<sup>12</sup> = B_z, F<sup>31</sup> = B_y, F<sup>23</sup> = Bₓ)</p>
<p>Read the anatomy and the physics of the previous section becomes geometry. E is the <em>time–space</em> part of the field — no wonder it mixes with B under boosts, which are rotations of time into space. The two invariants are no longer mysterious either: E² − c²B² and E·B are (up to constants) the only scalars you can build from F and its dual, guaranteed frame-independent by construction, just as x² + y² survives ordinary rotations.</p>
<p>The sources get the same packaging: charge and current density form the <strong>four-current</strong> J<sup>μ</sup> = (cρ, Jₓ, J_y, J_z) — one observer's charge density is another's current, since moving charge <em>is</em> current, and ρ picks up γ factors from length contraction. The potentials join as the <strong>four-potential</strong> A<sup>μ</sup> = (V/c, A), in terms of which the whole tensor is one derivative:</p>
<p style="text-align:center;">F<sup>μν</sup> = ∂<sup>μ</sup>A<sup>ν</sup> − ∂<sup>ν</sup>A<sup>μ</sup></p>
<p>— the four-dimensional curl of A<sup>μ</sup>, antisymmetric by construction. Gauge freedom slots in with almost insulting elegance: A<sup>μ</sup> → A<sup>μ</sup> + ∂<sup>μ</sup>λ shifts F by ∂<sup>μ</sup>∂<sup>ν</sup>λ − ∂<sup>ν</sup>∂<sup>μ</sup>λ = 0. Chapter 4's two-line transformation of V and A was one four-dimensional statement wearing 3D clothes.</p>
<div class="key-concept">
  <h4>Why tensors, really</h4>
  <p>A tensor equation true in one inertial frame is true in all of them — the transformation acts identically on both sides. Writing physics tensorially is how you build laws that all observers share. F<sup>μν</sup> is not notation for E and B; it is the field itself, with E and B as the shadows it casts on a particular observer's split of spacetime.</p>
</div>`,
        },
        {
          id: "covariant-maxwell",
          title: "Maxwell in Two Lines — and What It Means",
          content: `
<p>The payoff of the tensor machinery: all four Maxwell equations condense into two covariant statements.</p>
<p style="text-align:center; font-size:1.1em;"><strong>∂_μ F<sup>μν</sup> = μ₀ J<sup>ν</sup></strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>∂_μ G<sup>μν</sup> = 0</strong></p>
<p>The first — divergence of the field tensor equals the source — unpacks, component by component: its time component (ν = 0) is Gauss's law ∇·E = ρ/ε₀; its space components are Ampère–Maxwell, displacement current included. The second, written with the <strong>dual tensor</strong> G (F with E/c and B swapped, one sign adjusted), packages the source-free pair: ∇·B = 0 and Faraday's law. Two facts fall out with no further labor:</p>
<ul>
  <li><strong>Charge conservation is automatic:</strong> apply ∂_ν to the first equation; ∂_ν∂_μF<sup>μν</sup> vanishes identically because symmetric derivatives meet an antisymmetric tensor, forcing ∂_ν J<sup>ν</sup> = 0 — the continuity equation as an identity, not an assumption.</li>
  <li><strong>Lorentz covariance is manifest:</strong> both sides are tensors, so if Maxwell holds for one inertial observer it holds for all. No proof required; the notation <em>is</em> the proof.</li>
</ul>
<p>Complete the theory with the force law in covariant dress — dp<sup>μ</sup>/dτ = qF<sup>μν</sup>u_ν, whose space part is the Lorentz force q(E + v×B) and whose time part is the work-energy theorem — and classical electrodynamics is closed, covariant, and two lines long. In the Lorenz gauge (now the manifestly covariant condition ∂_μA<sup>μ</sup> = 0) the field equation becomes □A<sup>ν</sup> = −... a wave equation for the four-potential with the four-current as source: Chapter 6's retarded potentials were covariant all along.</p>
<div class="key-concept">
  <h4>The punchline of classical physics</h4>
  <p>Maxwell's equations needed no correction from Einstein — they were relativistically perfect forty years early; it was Newtonian mechanics that had to bend. Historical order inverted logical order: relativity was discovered inside electromagnetism, not imposed on it. And the closing formulation is the opening of what comes next: F<sup>μν</sup> = ∂<sup>μ</sup>A<sup>ν</sup> − ∂<sup>ν</sup>A<sup>μ</sup> with gauge invariance is the template every fundamental interaction copies. Quantum field theory begins by writing this very structure into a Lagrangian — and the photon, W, Z, and gluons are what gauge fields become when Subject 26's quantum rules take hold.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Minkowski, who built the four-dimensional formalism in 1908, announced it with rare bravado: "Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows, and only a kind of union of the two will preserve an independent reality." The same sentence, word for word, is true of E and B.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A neutral current-carrying wire attracts a charge moving parallel to it. In the charge's own rest frame, what causes the attraction?",
          options: [
            "Length contraction acts differently on the wire's positive and negative charge lines, leaving the wire with net charge — the force is electrostatic in this frame",
            "The magnetic field is stronger in that frame",
            "A gravitational effect of the wire's mass-energy",
            "Nothing — in that frame there is no force, and the frames simply disagree",
          ],
          correctIndex: 0,
          explanation:
            "In its rest frame the charge is stationary, so magnetic force is impossible — yet frames must agree that it drifts toward the wire. Relativity supplies the mechanism: transforming to the moving frame changes the ion and electron speeds differently, so their length-contracted densities no longer cancel and the wire carries net charge. The lab's magnetic force is the moving frame's electric force: one interaction, two frame-dependent labels.",
        },
        {
          question:
            "Which quantities built from E and B have the same value in every inertial frame?",
          options: [
            "The energy density u and the Poynting vector magnitude",
            "E² and B² separately",
            "E² − c²B² and E·B",
            "None — all field quantities are frame-dependent",
          ],
          correctIndex: 2,
          explanation:
            "The transformations mix E and B, but exactly two independent scalar combinations survive every boost: E² − c²B² and E·B. They classify fields invariantly — e.g., for a vacuum light wave both vanish (E = cB, E ⊥ B) in every frame, which is why no observer can transform radiation into a static field or catch up with it. Energy density and S transform (they are components of a tensor, next stop the stress-energy tensor), and E², B² separately certainly change.",
        },
        {
          question:
            "Why do E and B fit naturally into an antisymmetric rank-2 tensor F rather than into four-vectors?",
          options: [
            "Because tensors are more general than vectors and always preferred",
            "Because B is an axial vector and cannot enter any four-dimensional object",
            "Because the field has energy and momentum",
            "Because together they have six independent components — exactly the count of an antisymmetric 4×4 tensor — and boosts mix them into each other, which four-vectors cannot do",
          ],
          correctIndex: 3,
          explanation:
            "A four-vector holds four components; E and B together carry six, and the transformation rules interleave them (E′ contains B and vice versa). An antisymmetric 4×4 tensor has precisely six independent entries: E occupies the time–space slots, B the space–space slots. That placement explains the mixing geometrically — a boost rotates time into space, so it must rotate E-type components into B-type ones.",
        },
        {
          question:
            "In the covariant formulation, taking the four-divergence of ∂_μF^μν = μ₀J^ν yields ∂_νJ^ν = 0. What does this show?",
          options: [
            "That the field tensor is traceless",
            "That charge conservation is built into Maxwell's equations as a mathematical identity, not an extra assumption",
            "That the potentials must satisfy the Lorenz gauge",
            "That magnetic monopoles are forbidden",
          ],
          correctIndex: 1,
          explanation:
            "∂_ν∂_μF^μν vanishes identically — the symmetric pair of derivatives contracted with an antisymmetric tensor gives zero — so consistency forces ∂_νJ^ν = 0, the continuity equation. Electrodynamics cannot describe charge appearing or vanishing; the theory's structure forbids it. This is the covariant echo of Maxwell's original repair: the displacement current was added precisely to make Ampère's law compatible with charge conservation.",
        },
        {
          question:
            "What is the historically inverted relationship between Maxwell's equations and special relativity?",
          options: [
            "Einstein modified Maxwell's equations to make them consistent with relativity",
            "Maxwell derived his equations from the relativity principle",
            "Maxwell's equations were already fully Lorentz-covariant decades before 1905; relativity was discovered within electromagnetism, and it was Newtonian mechanics that needed revising",
            "The two theories remain mathematically incompatible",
          ],
          correctIndex: 2,
          explanation:
            "Maxwell's equations transform perfectly under Lorentz transformations with no modification — Lorentz and Poincaré found the transformations by studying them. Einstein's 1905 insight (in a paper literally titled 'On the Electrodynamics of Moving Bodies') was to take that symmetry as a law of nature and rebuild mechanics to match. In tensor form, ∂_μF^μν = μ₀J^ν makes the covariance manifest — and its gauge-field template became the blueprint for the entire Standard Model.",
        },
      ],
    },
  ],
};
