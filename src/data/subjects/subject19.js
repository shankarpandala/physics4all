export const subject19 = {
  id: "electromagnetism-1",
  number: 19,
  title: "Electromagnetism I",
  description:
    "Calculus-based electricity and magnetism from MIT 8.02 up to Purcell & Morin level — from Gauss's law to the full set of Maxwell's equations and the stunning conclusion that light is an electromagnetic wave.",
  phase: 4,
  chapters: [
    {
      id: "electrostatics-with-calculus",
      title: "Electrostatics with Calculus",
      subtitle:
        "From Coulomb's law to continuous charge distributions and the power of Gauss's law",
      sections: [
        {
          id: "from-points-to-densities",
          title: "From Point Charges to Charge Densities",
          content: `
<p>Phase 2 gave you Coulomb's law for point charges. Now write it as physics demands — as a vector equation. The force on charge q₂ from charge q₁ separated by distance r is:</p>
<p style="text-align:center;">F = (1/4πε₀) · q₁q₂/r² · r̂</p>
<p>where r̂ is the unit vector pointing from q₁ toward q₂, and ε₀ = 8.85 × 10⁻¹² C²/(N·m²) is the <strong>permittivity of free space</strong>. The combination k = 1/4πε₀ ≈ 8.99 × 10⁹ N·m²/C² is Coulomb's constant. The <strong>electric field</strong> of q₁ is this force per unit test charge: E = (1/4πε₀)(q/r²)r̂, radially outward for positive q.</p>
<p>The law obeys <strong>superposition</strong>: the field of many charges is the vector sum of their individual fields. That single fact, plus calculus, unlocks everything in this chapter. Real objects — wires, sheets, spheres — carry charge smeared continuously, described by a density:</p>
<table>
  <thead>
    <tr><th>Distribution</th><th>Density</th><th>Charge element</th></tr>
  </thead>
  <tbody>
    <tr><td>Line (wire)</td><td>λ (C/m)</td><td>dq = λ dl</td></tr>
    <tr><td>Surface (sheet)</td><td>σ (C/m²)</td><td>dq = σ dA</td></tr>
    <tr><td>Volume (solid)</td><td>ρ (C/m³)</td><td>dq = ρ dV</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>The master recipe</h4>
  <p>Chop the object into infinitesimal charges dq. Each contributes a field of magnitude dE = dq/4πε₀r², pointing from dq toward your field point. Resolve dE into components, use symmetry to spot which components cancel, and integrate the survivors over the whole object. Every electrostatics integration in this subject is this recipe with different geometry.</p>
</div>
<p>The symmetry step is not optional garnish — it is where most of the work disappears. On the axis of a ring, every sideways component of dE is cancelled by the diametrically opposite element, so only the axial component needs integrating. Spotting the cancellation <em>before</em> writing the integral is the professional move.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Coulomb established the 1/r² law in 1785 with a torsion balance sensitive to forces of billionths of a newton. Modern tests confirm the exponent is 2 to within one part in 10¹⁶ — making it one of the most precisely verified laws in physics.</p>
</div>`,
        },
        {
          id: "line-and-ring-fields",
          title: "Worked Integrations: The Line and the Ring",
          content: `
<p>Time to run the recipe for real. <strong>Problem 1: an infinite straight wire</strong> with uniform charge density λ. Find E at perpendicular distance r from the wire.</p>
<ol>
  <li>Put the field point on the y-axis at height r; let the wire run along x. An element at position x carries dq = λ dx and sits a distance √(x² + r²) away.</li>
  <li><strong>Symmetry:</strong> for every element at +x there is a mirror element at −x whose field's along-the-wire component cancels. Only the perpendicular component survives: dE⊥ = (λ dx/4πε₀(x² + r²)) · r/√(x² + r²).</li>
  <li>Integrate over the whole wire. The standard substitution x = r tan θ collapses the integral of r dx/(x² + r²)^(3/2), which evaluates to 2/r.</li>
</ol>
<p style="text-align:center; font-size:1.1em;"><strong>E = λ/2πε₀r</strong>, pointing radially away from the wire</p>
<p>Note the payoff: the field of a line falls off as 1/r, not 1/r². Adding up charge that extends to infinity softens the decay — a pattern you will see again with the plane.</p>
<p><strong>Problem 2: a ring</strong> of radius R carrying total charge q, field point on the axis at height z. Every element is the same distance √(z² + R²) from the point, and symmetry kills all components except the axial one, which carries a factor z/√(z² + R²). Because both factors are constant around the ring, the "integral" is just a multiplication:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E = (1/4πε₀) · qz/(z² + R²)^(3/2)</strong>, along the axis</p>
<div class="key-concept">
  <h4>Always interrogate the limits</h4>
  <p>For z much larger than R, the ring result becomes q/4πε₀z² — a point charge, exactly as it must. At z = 0 the field vanishes: at the center, every element's pull is cancelled by the element across the ring. A formula that fails its limiting cases is wrong; one that passes them has been partially checked for free. Make this reflex.</p>
</div>
<p>The ring is more than an exercise — its field is the building block for the disk in the next section, where an integral over rings constructs the field of a plane.</p>`,
        },
        {
          id: "disk-and-plane",
          title: "The Disk and the Infinite Plane",
          content: `
<p>With the ring solved, a <strong>uniformly charged disk</strong> is a stack of rings — this is how physicists really work, assembling new solutions from old ones instead of starting from scratch.</p>
<p>Take a disk of radius R with surface density σ, field point on the axis at height z. Slice it into thin rings of radius a and width da; each carries dq = σ · 2πa da. Feed that into the ring formula and integrate a from 0 to R:</p>
<p style="text-align:center;">E = (σz/4ε₀) ∫ 2a da/(z² + a²)^(3/2)</p>
<p>The integrand is a perfect derivative — the antiderivative of 2a/(z² + a²)^(3/2) is −2/√(z² + a²) — so the integral evaluates cleanly:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E = (σ/2ε₀)(1 − z/√(z² + R²))</strong></p>
<p>Now interrogate the limits, as always. For z much larger than R, a binomial expansion recovers the point-charge field of total charge σπR². But let R → ∞ and the parenthesis becomes 1:</p>
<p style="text-align:center; font-size:1.15em;"><strong>E = σ/2ε₀</strong> — the infinite plane</p>
<div class="key-concept">
  <h4>A field that never weakens</h4>
  <p>The infinite plane's field is uniform: the same strength at any distance, never falling off at all. The progression is worth memorizing — point charge: 1/r². Infinite line: 1/r. Infinite plane: constant. Each added dimension of charge softens the decay by one power of r. Geometrically: as you back away from a plane, each patch of charge pulls more weakly, but more patches lean their fields toward your direction — and the two effects cancel exactly.</p>
</div>
<p>Real capacitor plates are not infinite, but close to a plate (z much smaller than the plate size) the formula E = σ/2ε₀ is an excellent approximation — which is why the next-but-one chapter's capacitance calculations work so well.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Stack two parallel planes with opposite charges and superposition makes the fields cancel outside but add between: E = σ/ε₀ in the gap, zero elsewhere. That sandwich — all field, neatly confined — is the parallel-plate capacitor, and you have just derived its field with one integral and one addition.</p>
</div>`,
        },
        {
          id: "flux-and-gauss",
          title: "Flux and Gauss's Law",
          content: `
<p>Integrating dq works for anything, but there is a shortcut of astonishing power. It begins with a new quantity: <strong>electric flux</strong>, the amount of field "flowing" through a surface,</p>
<p style="text-align:center;">Φ_E = ∮ E · dA</p>
<p>where dA is a little patch of surface with a direction (its outward normal), and the dot product keeps only the field component actually piercing the patch. Picture E as fluid flow: flux is the volume of fluid crossing the surface per second. For a closed surface, positive flux means net outflow.</p>
<p>Now compute the flux of a point charge q through a sphere of radius r centered on it. E = q/4πε₀r² is constant over the sphere and everywhere perpendicular to it, so the integral is just field times area:</p>
<p style="text-align:center;">Φ_E = (q/4πε₀r²) · 4πr² = q/ε₀</p>
<p>The r² in the area <em>exactly cancels</em> the 1/r² in the field. The flux does not depend on the sphere's radius — and, one can show, not on the surface's shape either: any closed surface enclosing q catches the same flux, because every field line leaving q must pierce it. Charges outside contribute nothing — their field lines enter one side and exit the other, cancelling. Superposition then delivers the general statement:</p>
<div class="key-concept">
  <h4>Gauss's law — the first Maxwell equation</h4>
  <p><strong>∮ E · dA = q_enclosed/ε₀</strong>. The total electric flux out of any closed surface equals the enclosed charge divided by ε₀. In the local language of vector calculus: ∇ · E = ρ/ε₀ — charge density is the divergence, the "sourciness," of the electric field. Field lines begin on positive charge and end on negative charge, and nowhere else.</p>
</div>
<p>Gauss's law is exactly equivalent to Coulomb's law plus superposition — it contains no new physics. What it offers is new <em>leverage</em>: an exact global statement, true for any surface you care to draw around any distribution however messy. The next section shows how, when the geometry is symmetric enough, that leverage lets you extract E from the integral in one line — no integration over dq at all.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The 1/r² law and the flux law live or die together: flux conservation works only because area grows as r² while the field dies as 1/r². In a universe with a 1/r².⁰⁰¹ force law, Gauss's law would fail — which is why precision tests of Gauss's law double as tests of Coulomb's exponent.</p>
</div>`,
        },
        {
          id: "gauss-applications",
          title: "Symmetry Arguments: Gauss's Law at Work",
          content: `
<p>Gauss's law is always true, but only sometimes <em>useful</em>. The magic happens when symmetry lets you argue — before any calculation — that E has a known direction and a constant magnitude over a well-chosen "Gaussian surface." Then E slides out of the integral, and ∮E·dA becomes E times an area. Three symmetries deliver this:</p>
<p><strong>1. Spherical symmetry.</strong> A uniformly charged solid sphere, radius R, total charge Q. By symmetry E must point radially with a magnitude depending only on r. Choose a concentric spherical Gaussian surface.</p>
<ul>
  <li><strong>Outside (r &gt; R):</strong> E · 4πr² = Q/ε₀, so E = Q/4πε₀r². The sphere behaves exactly like a point charge — the theorem Newton sweated over for gravity, free of charge.</li>
  <li><strong>Inside (r &lt; R):</strong> the surface encloses only the fraction of charge within radius r, namely Q·r³/R³. Then E · 4πr² = Qr³/R³ε₀, giving <strong>E = Qr/4πε₀R³</strong> — the field grows linearly from zero at the center.</li>
</ul>
<p><strong>2. Cylindrical symmetry.</strong> The infinite line, revisited. E must point radially outward from the wire. Choose a coaxial cylinder of radius r and length L: the flat ends catch no flux (E is parallel to them), and the curved wall gives E · 2πrL = λL/ε₀, so E = λ/2πε₀r. The integral that took a trig substitution last time now takes one line.</p>
<p><strong>3. Planar symmetry.</strong> The infinite plane. E must point straight away from the plane on both sides. Choose a squat cylinder ("pillbox") piercing it, cross-section A: flux 2EA out the two ends, enclosed charge σA, hence E = σ/2ε₀. Again — one line.</p>
<div class="key-concept">
  <h4>The honest fine print</h4>
  <p>Gauss's law did not compute these fields alone; <em>symmetry</em> did the heavy lifting, by dictating the direction of E and licensing E to leave the integral. For a charged cube or a finite rod, Gauss's law remains perfectly true but yields no such shortcut — the flux integral cannot be unwound, and you are back to integrating over dq. Learn to recognize which situation you are in.</p>
</div>
<p>Sphere, cylinder, plane: master these three arguments and you own every standard electrostatics field in one line each. This is your vector-calculus investment paying its first dividend.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "On the axis of a uniformly charged ring, the electric field is zero at the very center and falls off as 1/z² far away. Why is it zero at the center?",
          options: [
            "The ring's charge is neutralized at the center",
            "The potential is zero there, so the field must be too",
            "Each charge element's field is exactly cancelled by the element diametrically opposite it",
            "Gauss's law forbids any field inside a closed loop of charge",
          ],
          correctIndex: 2,
          explanation:
            "At the center, every dq has a partner directly across the ring pulling with equal strength in the opposite direction — the vector sum vanishes by symmetry. Zero potential does not imply zero field (and V is actually nonzero at the center), and a ring is not a closed surface, so Gauss's law says nothing so specific.",
        },
        {
          question:
            "The field of an infinite charged plane is σ/2ε₀ at any distance — it never weakens. What makes this possible?",
          options: [
            "As you move away, each patch of charge pulls more weakly, but more patches direct their pull along your direction, and the effects cancel exactly",
            "The plane's charge density increases with distance",
            "Electric fields only weaken with distance for negative charges",
            "The result is an approximation valid only very close to the plane",
          ],
          correctIndex: 0,
          explanation:
            "It is a geometric conspiracy: distance dilutes each element's 1/r² contribution, but from farther away a larger region of the plane sits at a favorable angle, its field components aligning with the perpendicular. For a truly infinite plane the cancellation is exact at every distance — the pattern point (1/r²) → line (1/r) → plane (constant).",
        },
        {
          question:
            "A point charge sits just outside a closed surface. What is the net electric flux through the surface?",
          options: [
            "q/ε₀, the same as if it were inside",
            "Zero — every field line that enters the surface also exits it",
            "Negative, because the field lines point inward",
            "It depends on the exact shape of the surface",
          ],
          correctIndex: 1,
          explanation:
            "Gauss's law counts only enclosed charge. An outside charge sends field lines through the surface, but each line that pierces inward must pierce outward again somewhere else — inflow and outflow cancel exactly, for any shape. The field on the surface is not zero, but its net flux is.",
        },
        {
          question:
            "Inside a uniformly charged solid sphere, the field at radius r is E = Qr/4πε₀R³ — growing linearly with r. What produces this behavior?",
          options: [
            "The field of the outer shells adds to that of the inner core",
            "The charge density increases toward the surface",
            "Gauss's law fails inside charge distributions, so a different law applies",
            "Enclosed charge grows as r³ while the Gaussian surface area grows as r², leaving one factor of r",
          ],
          correctIndex: 3,
          explanation:
            "A concentric Gaussian sphere of radius r encloses charge Q·r³/R³ (volume fraction) spread over area 4πr². The ratio r³/r² = r gives the linear growth. Equivalently: the shells outside radius r contribute zero net field inside themselves — only the inner core counts, acting like a point charge at the center.",
        },
        {
          question:
            "Why can't Gauss's law be used to directly compute the electric field of a uniformly charged cube?",
          options: [
            "Gauss's law only holds for spheres, cylinders, and planes",
            "A cube's symmetry is too low to fix the direction of E and make its magnitude constant on any simple closed surface, so E cannot be pulled out of the flux integral",
            "The flux through a surface around a cube is not q/ε₀",
            "A cube's field is zero everywhere outside it",
          ],
          correctIndex: 1,
          explanation:
            "Gauss's law is true for the cube — the flux through any enclosing surface is exactly q_enc/ε₀. But usefulness requires symmetry strong enough to dictate E's direction and constancy over a Gaussian surface, so that ∮E·dA collapses to E × area. The cube offers no such surface, so you must fall back on integrating Coulomb contributions.",
        },
      ],
    },
    {
      id: "potential-theory",
      title: "Potential Theory",
      subtitle:
        "Moving between field and potential, energy of charge configurations, and conductors",
      sections: [
        {
          id: "v-from-e",
          title: "Potential from the Field",
          content: `
<p>The electric field is three numbers at every point in space. Remarkably, in electrostatics all that information can be compressed into <em>one</em> number per point. Here is why.</p>
<p>Move a test charge q slowly from point a to point b through a field E. The work you do against the electric force is W = −q∫E·dl, integrated along your path. The crucial experimental fact: for any electrostatic field, this integral is <strong>path-independent</strong> — a direct route and a wild detour cost the same work. Equivalently, the circulation of E around any closed loop vanishes:</p>
<p style="text-align:center;">∮ E · dl = 0&nbsp;&nbsp;(electrostatics)</p>
<p>A field with zero circulation is called <strong>conservative</strong>, and path independence lets us define a function of position alone — the <strong>electric potential</strong>:</p>
<p style="text-align:center; font-size:1.1em;">V(b) − V(a) = −∫ᵃᵇ E · dl</p>
<p>Potential is potential energy per unit charge, measured in volts (1 V = 1 J/C). Only differences matter; the conventional zero is at infinity. For a point charge, integrating E = q/4πε₀r² inward from infinity gives:</p>
<p style="text-align:center; font-size:1.1em;"><strong>V = q/4πε₀r</strong></p>
<p>Note 1/r, not 1/r² — potential dies off more slowly than field.</p>
<div class="key-concept">
  <h4>Why V is the easier workhorse</h4>
  <p>V is a scalar. Superposing potentials means adding numbers — no components, no direction bookkeeping. Compare the ring of charge from last chapter: every element sits at distance √(z² + R²) from an axial point, so the potential is simply V = q/4πε₀√(z² + R²). No components to resolve, no cancellation argument — one line. The standard professional strategy is: compute V first, then extract E from it (next section).</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Path independence" will spectacularly fail later in this subject: when magnetic flux changes, ∮E·dl becomes nonzero — that is Faraday's law, and it is how every generator works. The potential concept of this chapter is an exact truth of <em>electrostatics</em> and a fair-weather friend beyond it.</p>
</div>`,
        },
        {
          id: "e-from-v",
          title: "The Field from the Potential",
          content: `
<p>Compression must be reversible: if V stores everything about E, there must be a way back. There is, and it is the gradient. Since dV = −E·dl for a small step dl, the component of E along any direction is minus the rate of change of V in that direction:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E = −∇V</strong>&nbsp;&nbsp;&nbsp;(Eₓ = −∂V/∂x, and likewise for y, z)</p>
<p>In words: the electric field points in the direction of <em>steepest decrease</em> of potential, with magnitude equal to the slope. Positive charges roll downhill in V; negative charges roll uphill.</p>
<div class="analogy">
  <h3>Analogy: The Contour Map</h3>
  <p>A hiking map draws contour lines of constant altitude; the terrain's steepest descent runs perpendicular to them, and closely packed contours mean steep ground. Potential works identically. Surfaces of constant V — <strong>equipotentials</strong> — are the contour lines of the electric landscape; E crosses them at right angles, pointing downhill, and crowded equipotentials mean a strong field. Around a point charge the equipotentials are concentric spheres; between capacitor plates they are evenly spaced planes.</p>
</div>
<p><strong>Worked example.</strong> Recover the ring's field from its potential. On the axis, V(z) = q/4πε₀√(z² + R²). Differentiate:</p>
<p style="text-align:center;">E_z = −dV/dz = (1/4πε₀) · qz/(z² + R²)^(3/2)</p>
<p>— exactly the field we obtained in the last chapter by resolving vector components, but this time via one scalar formula and one derivative. That trade — integrate a scalar, then differentiate — is almost always cheaper than integrating vectors.</p>
<p>One caution, and it catches many students: the axial formula V(z) alone gives only E_z on the axis. To get the sideways components you would need to know how V varies <em>off</em> the axis too — a gradient needs the function in a neighborhood, not just along a line.</p>
<div class="key-concept">
  <h4>Two directions of travel</h4>
  <p>V from E: integrate, V = −∫E·dl. E from V: differentiate, E = −∇V. Integration and differentiation undo each other, so these are one relationship read in two directions. Fluency means choosing whichever direction makes the current problem easiest — usually computing the scalar V first.</p>
</div>`,
        },
        {
          id: "energy-of-configurations",
          title: "The Energy of Charge Configurations",
          content: `
<p>Potential immediately buys you energies. A charge q sitting where the potential (due to everything else) is V has potential energy U = qV. To find the energy stored in a whole arrangement, imagine assembling it charge by charge from infinity and add up the work.</p>
<p><strong>Worked example.</strong> Three charges of +2 μC at the corners of an equilateral triangle of side 10 cm.</p>
<ol>
  <li>First charge: free to place, W₁ = 0 — nothing is there yet to push against.</li>
  <li>Second charge: brought to distance 0.1 m from the first. W₂ = kq²/r = (8.99 × 10⁹)(2 × 10⁻⁶)²/0.1 ≈ 0.36 J.</li>
  <li>Third charge: pushed against <em>both</em>, each at 0.1 m. W₃ = 2 × 0.36 = 0.72 J.</li>
</ol>
<p>Total U ≈ <strong>1.08 J</strong> — one term per <em>pair</em> of charges, kqᵢqⱼ/rᵢⱼ summed over all pairs. Positive U means the configuration stores energy and would fly apart if released; opposite charges give negative U, a bound system that costs energy to dismantle.</p>
<p>A slick bookkeeping identity reorganizes the pairwise sum: each pair term can be split half-and-half between its two members, giving</p>
<p style="text-align:center; font-size:1.05em;">U = ½ Σ qᵢVᵢ</p>
<p>where Vᵢ is the potential at charge i due to all the others. The ½ prevents double-counting each pair. For continuous distributions the sum becomes an integral, U = ½∫ρV dV — and evaluating it for a uniformly charged sphere of radius R gives U = (3/5)Q²/4πε₀R.</p>
<div class="key-concept">
  <h4>Where does the energy live?</h4>
  <p>Notice that the sphere's energy grows without bound as R shrinks. Assembling a point charge would cost infinite energy — a genuine crack in classical electromagnetism. The resolution, developed in the capacitors chapter, is to relocate the energy from the charges to the <em>field</em> filling the space around them: every cubic meter of field stores energy density ½ε₀E². That reinterpretation, radical here, becomes indispensable when fields detach from charges entirely and fly off as light.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Setting the electron's electrostatic self-energy equal to its rest energy mc² defines the "classical electron radius," about 2.8 × 10⁻¹⁵ m. Experiment shows the electron is pointlike to far below that scale — the classical picture fails, and only quantum field theory (Phase 5 territory) resolves the infinity.</p>
</div>`,
        },
        {
          id: "conductors",
          title: "Conductors: Where the Field Goes to Die",
          content: `
<p>A conductor is a material stuffed with mobile charges — in a metal, roughly one free electron per atom. That single property forces a cascade of exact conclusions about electrostatic equilibrium (the state after all charges have finished rearranging, reached within about 10⁻¹⁹ s in copper).</p>
<ol>
  <li><strong>E = 0 everywhere inside the conducting material.</strong> If any field existed, free electrons would feel it and move — so we would not be at equilibrium. Charges rearrange precisely until their own field cancels the applied one, everywhere inside.</li>
  <li><strong>All excess charge sits on the surface.</strong> Apply Gauss's law to any surface drawn inside the metal: E = 0 on it, so the flux is zero, so it encloses no net charge. Any net charge has nowhere to be but the outer skin.</li>
  <li><strong>The conductor is an equipotential.</strong> With E = 0 inside, −∫E·dl between any two points of the conductor vanishes: every point, surface included, sits at one common V.</li>
  <li><strong>At the surface, E is perpendicular, with magnitude σ/ε₀.</strong> Any parallel component would drive surface currents; a Gaussian pillbox straddling the surface then gives E = σ/ε₀ just outside — twice the free-standing sheet's field, because the conductor's other charges conspire to double it.</li>
</ol>
<div class="key-concept">
  <h4>Shielding: the Faraday cage</h4>
  <p>Hollow out a cavity inside a conductor and the shielding is perfect: for an empty cavity, E = 0 inside it no matter what fields rage outside. The surface charges rearrange to cancel external fields everywhere within. This is why your car is a decent lightning shelter (the metal shell, not the tires), why coaxial cables are wrapped in braided copper, and why sensitive labs work inside metal-walled rooms.</p>
</div>
<p>One more consequence with teeth: on a lumpy conductor, charge crowds onto regions of small curvature radius, making the surface field strongest at <strong>sharp points</strong>. Roughly, for two connected spheres sharing a potential, E at the surface scales as 1/R — the smaller the radius, the fiercer the field. Push past about 3 × 10⁶ V/m in air and molecules ionize: sparks, corona discharge, St. Elmo's fire.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The lightning rod exploits the sharp-point effect deliberately: its tip concentrates the field, quietly leaking charge and offering a preferred, grounded path for any strike. Benjamin Franklin invented it in 1752 from exactly the physics on this page — arguably electrostatics' first life-saving application.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What property of the electrostatic field makes it possible to define a potential V(r) at all?",
          options: [
            "The field always points radially away from charges",
            "The circulation ∮E·dl vanishes around every closed loop, so the work integral between two points is path-independent",
            "The field is strongest near charges and weak far away",
            "Electric fields carry no energy in statics",
          ],
          correctIndex: 1,
          explanation:
            "A single-valued V(r) exists only if −∫E·dl from a to b gives the same answer along every route — otherwise 'the potential at b' would depend on how you got there. Zero circulation is exactly that guarantee. When changing magnetic flux later makes ∮E·dl nonzero, the electrostatic potential loses this universal footing.",
        },
        {
          question:
            "In a region of space the potential V is constant. What can you conclude about the electric field there?",
          options: [
            "E is constant but not necessarily zero",
            "E points along the direction of constant V",
            "Nothing — V and E are independent quantities",
            "E is zero throughout the region, since E = −∇V and the gradient of a constant vanishes",
          ],
          correctIndex: 3,
          explanation:
            "The field is minus the gradient of the potential; a flat landscape has no slope, so E = 0 everywhere in the region. Note the one-way traffic of the logic: V constant forces E = 0, and V = 0 at a single point tells you nothing about E there — the field depends on how V changes, not on its value.",
        },
        {
          question:
            "Why do physicists usually compute the potential of a charge distribution first and then get the field from E = −∇V, rather than integrating the field directly?",
          options: [
            "Potential is a scalar, so superposition is a sum of plain numbers instead of a vector sum with components and cancellations",
            "The potential integral always converges while the field integral may not",
            "The field cannot be computed directly for continuous distributions",
            "Differentiation is defined only for potentials, not fields",
          ],
          correctIndex: 0,
          explanation:
            "Both routes are legitimate, but adding scalars dq/4πε₀r beats resolving and integrating vector components — the ring's axial potential is a one-liner, and one derivative then recovers the field. Differentiating is almost always cheaper than an extra vector integration; that trade is the working habit this chapter builds.",
        },
        {
          question:
            "A solid metal sphere is given a net positive charge. In electrostatic equilibrium, where does the charge reside, and what is the field inside the metal?",
          options: [
            "Charge spreads uniformly through the volume; the field inside grows linearly with radius",
            "Charge sits at the center; the field inside points inward",
            "All charge sits on the outer surface; the field inside the metal is exactly zero",
            "Charge sits on the surface; the field inside equals σ/ε₀",
          ],
          correctIndex: 2,
          explanation:
            "Free electrons rearrange until no field remains inside — otherwise they would still be moving. With E = 0 on any interior Gaussian surface, the enclosed net charge must be zero, so all excess charge is driven to the outer surface. σ/ε₀ is the field just outside the surface, not within the metal.",
        },
        {
          question:
            "Lightning rods are sharpened to a point. What physics is being exploited?",
          options: [
            "Sharp points attract lightning magnetically",
            "A point minimizes the rod's electrical resistance",
            "Pointed metal cannot hold any charge, so strikes pass through harmlessly",
            "Surface charge crowds onto regions of small curvature radius, making the field at a sharp tip intense enough to ionize air and offer a preferred conducting path",
          ],
          correctIndex: 3,
          explanation:
            "On a conductor, the surface field scales roughly as 1/R with local curvature radius — a needle tip concentrates the field enormously, past air's breakdown threshold of about 3 × 10⁶ V/m. The ionized channel and grounded rod give the discharge a safe, low-resistance route instead of your roof beams.",
        },
      ],
    },
    {
      id: "capacitors-dielectrics",
      title: "Capacitors & Dielectrics",
      subtitle:
        "Computing capacitance, energy stored in fields, and what dielectrics do microscopically",
      sections: [
        {
          id: "capacitance-from-geometry",
          title: "Capacitance from Geometry",
          content: `
<p>Take any two conductors, put +Q on one and −Q on the other, and a potential difference V appears between them. Double Q and — by superposition — every field doubles, so V doubles too. The ratio is therefore a constant of the geometry alone:</p>
<p style="text-align:center; font-size:1.15em;"><strong>C = Q/V</strong>&nbsp;&nbsp;(unit: farad, 1 F = 1 C/V)</p>
<p><strong>Capacitance</strong> measures charge-storage capacity per volt, and computing it is a clean three-step algorithm: assume charge ±Q, find E between the conductors (Gauss's law, chapter 1), integrate to get V, divide.</p>
<p><strong>Parallel plates</strong> — area A, gap d. Two oppositely charged planes give E = σ/ε₀ = Q/ε₀A between them, uniform. Then V = Ed = Qd/ε₀A, so:</p>
<p style="text-align:center; font-size:1.1em;"><strong>C = ε₀A/d</strong></p>
<p>Big plates, small gap: more capacitance. The numbers are humbling — plates of one square meter separated by one millimeter give C = 8.85 × 10⁻⁹ F, about 9 nanofarads. The farad is an enormous unit.</p>
<p><strong>Coaxial cylinders</strong> — radii a and b, length L. Gauss gives E = λ/2πε₀r in the gap; integrating from a to b, V = (λ/2πε₀) ln(b/a), so:</p>
<p style="text-align:center;">C = 2πε₀L/ln(b/a) — the capacitance of every coaxial cable</p>
<p><strong>Concentric spheres</strong> — radii a and b: C = 4πε₀ab/(b − a). Let b → ∞ and you get the capacitance of an isolated sphere, C = 4πε₀a. For the entire planet Earth (a = 6.4 × 10⁶ m): about 710 μF — less than a pocket-sized electrolytic capacitor.</p>
<div class="key-concept">
  <h4>Combinations</h4>
  <p>Capacitors in <strong>parallel</strong> share the same V and pool their plate area: C_total = C₁ + C₂. In <strong>series</strong> they carry the same Q and stack their voltages: 1/C_total = 1/C₁ + 1/C₂ — series always yields <em>less</em> than the smallest member, because you have effectively widened the gap. (Note this is exactly opposite to resistors.)</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Modern supercapacitors reach thousands of farads in soda-can sizes by making A colossal and d atomic: porous activated carbon offers football fields of surface area per gram, with the charge separation only nanometers wide.</p>
</div>`,
        },
        {
          id: "energy-stored",
          title: "Charging a Capacitor: Where the Energy Goes",
          content: `
<p>Charging a capacitor stores energy — release it and you get the flash of a camera or the jolt of a defibrillator. How much energy? Follow the work, with an integral.</p>
<p>Midway through charging, the capacitor holds charge q and its plates differ by v = q/C. To move the next sliver of charge dq from the negative plate to the positive one, you must push it up through that potential difference, doing work dW = v dq = (q/C) dq. Total work to reach final charge Q:</p>
<p style="text-align:center;">W = ∫₀^Q (q/C) dq = Q²/2C</p>
<div class="key-concept">
  <h4>The stored energy, three ways</h4>
  <p><strong>U = Q²/2C = ½CV² = ½QV.</strong> All equivalent via Q = CV; use whichever variables the problem hands you. The factor ½ is not decoration — it is the integral's fingerprint. The first sliver of charge crosses almost zero voltage and costs nothing; the last crosses the full V. On average each coulomb crosses V/2, hence ½QV, not QV.</p>
</div>
<p><strong>Worked example — camera flash.</strong> A 330 μF capacitor charged to 300 V holds U = ½ × 330 × 10⁻⁶ × 300² ≈ <strong>15 J</strong>. Dumped through the flash tube in a millisecond, that is a peak power of ~15,000 W — a small car engine's worth, from a component the size of your thumb. Capacitors store modest energy but release it <em>fast</em>; batteries are the opposite. (This is also why disposable-camera circuit boards could bite hours after use.)</p>
<p><strong>A famous subtlety.</strong> Charge capacitor C to voltage V, then connect it to an identical uncharged one. Charge conservation says each ends with Q/2, so the voltage halves — and the total stored energy drops from ½CV² to 2 × ½C(V/2)² = ¼CV². Half the energy has vanished! It went to resistive heating (and a little radiation) during the current surge, and here is the kicker: the lost fraction is <em>independent of the resistance</em>. Lower R just means a bigger, briefer surge with the same I²R total. You cannot slide charge downhill between capacitors for free.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A defibrillator is a capacitor bank charged to a few kilovolts, delivering 100–200 J in milliseconds. The design brief is pure ½CV²: enough energy to reset the heart's electrical rhythm, delivered faster than any battery chemistry could manage.</p>
</div>`,
        },
        {
          id: "field-energy-density",
          title: "The Energy Lives in the Field",
          content: `
<p>Where, physically, is the capacitor's energy? On the charges? In the wires? The parallel-plate capacitor answers the question, and the answer reorganizes all of electromagnetism.</p>
<p>Take U = ½CV² and substitute the geometry: C = ε₀A/d and V = Ed. Then:</p>
<p style="text-align:center;">U = ½ (ε₀A/d)(Ed)² = ½ε₀E² × (Ad)</p>
<p>But Ad is precisely the <em>volume between the plates</em> — the region where the field lives. The energy is proportional to the volume of field, with a fixed exchange rate:</p>
<div class="key-concept">
  <h4>Field energy density</h4>
  <p><strong>u = ½ε₀E²</strong> joules per cubic meter, wherever there is an electric field — any field, not just a capacitor's. The energy of any electrostatic system is the integral of ½ε₀E² over all space. Charges are the bookkeeping; the field is the vault.</p>
</div>
<p><strong>Check it against an old result.</strong> A charged sphere of radius R has field Q/4πε₀r² outside and (say, for a conducting sphere) zero inside. Integrate the density over shells of volume 4πr² dr from R to infinity:</p>
<p style="text-align:center;">U = ∫ ½ε₀E² · 4πr² dr = Q²/8πε₀ ∫ dr/r² = Q²/8πε₀R</p>
<p>— exactly the assembly work computed from the charge picture. Two utterly different accounting schemes, one answer. For statics the two views are mathematically equivalent, and you may use whichever is convenient.</p>
<p>So why insist the field view is the deep one? Because fields can exist <em>without charges nearby</em>. A light wave crossing the vacuum between the Sun and Earth carries energy — it warms your skin eight minutes after leaving home, long after any charge stopped touching it. Energy in transit must reside somewhere, and the only thing present is the field. The final chapter's Poynting vector will track exactly how this energy flows.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Air's breakdown field of 3 × 10⁶ V/m corresponds to an energy density of only about 40 J/m³ — a thousandth of gasoline's chemical energy density. That is why electric-field energy storage (capacitors) lags chemical storage (batteries, fuels) so badly, and why supercapacitor research chases materials that tolerate monstrous internal fields.</p>
</div>`,
        },
        {
          id: "dielectrics-microscopically",
          title: "Dielectrics, Microscopically",
          content: `
<p>Slide a slab of glass, plastic, or ceramic between a capacitor's plates and the capacitance jumps by a factor κ, the <strong>dielectric constant</strong>:</p>
<p style="text-align:center;">C = κε₀A/d&nbsp;&nbsp;&nbsp;(κ ≈ 2–6 for plastics and glass, 80 for water)</p>
<p>Why? The answer lives at the molecular scale, and it comes in two flavors:</p>
<ul>
  <li><strong>Polar molecules</strong> (water, for instance) are permanent dipoles — their charge is lopsided from birth. An applied field torques them toward alignment, fighting thermal jostling.</li>
  <li><strong>Nonpolar molecules</strong> have no built-in dipole, but the field <em>induces</em> one: it tugs each molecule's electron cloud one way and its nuclei the other, stretching every molecule into a tiny dipole.</li>
</ul>
<p>Either way the outcome is the same: the material <strong>polarizes</strong>. Inside the bulk, each molecule's positive end sits beside its neighbor's negative end and cancels — but at the slab's faces the cancellation fails, leaving thin layers of <strong>bound surface charge</strong>: negative on the face toward the positive plate, positive on the other. These bound layers generate their own field <em>opposing</em> the applied one, so the net field inside the dielectric is reduced:</p>
<p style="text-align:center;">E = E₀/κ</p>
<p>With the same charge Q on the plates but a weakened field, the voltage V = Ed drops by κ — and C = Q/V rises by κ. That is the whole mechanism: <strong>a dielectric is matter partially short-circuiting the field with its own polarization</strong>.</p>
<div class="key-concept">
  <h4>Two jobs, one slab</h4>
  <p>Dielectrics boost capacitance, and they also raise the breakdown voltage — polymer films withstand fields ten to a hundred times stronger than air before sparking. Real capacitors are long sandwiches of metal foil and polymer film rolled into cylinders: large A, tiny d, large κ, high breakdown strength, all at once.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Water's κ ≈ 80 is why it dissolves salt so well: immersed in water, the attraction between a Na⁺ and Cl⁻ pair is weakened eighty-fold as water molecules swarm and align around each ion. Life's solvent chemistry runs on a dielectric constant — and a microwave oven runs on the same polar molecules, driven to flip 2.45 billion times a second until friction heats the food.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A parallel-plate capacitor is connected to a battery, then the plates are pulled twice as far apart while the battery stays connected. What happens to the stored charge?",
          options: [
            "It doubles, because the volume of field doubles",
            "It stays the same, because charge is conserved",
            "It halves — C = ε₀A/d drops by half, and with V fixed by the battery, Q = CV must drop too",
            "It goes to zero because the field cannot span the wider gap",
          ],
          correctIndex: 2,
          explanation:
            "Doubling d halves the capacitance. Connected to a battery, the capacitor's voltage is pinned, so Q = CV halves — the surplus charge flows back into the battery. (Disconnect the battery first, and instead Q would be trapped while V doubled.) Tracking which quantity is held fixed is the key to every capacitor puzzle.",
        },
        {
          question:
            "The energy stored in a capacitor is ½QV, not QV. Where does the factor of ½ come from?",
          options: [
            "The voltage grows from 0 to V during charging, so on average each increment of charge is lifted through only V/2",
            "Half the energy is always lost as heat during charging",
            "Only half the plate area actually stores charge",
            "It is a convention chosen to match the formula for kinetic energy",
          ],
          correctIndex: 0,
          explanation:
            "The work is an integral, W = ∫(q/C)dq = Q²/2C: early charge crosses almost no potential difference, the last charge crosses the full V, and the average is V/2. Resistive loss is a separate matter — ½QV is the energy genuinely banked in the capacitor even with ideal, lossless charging.",
        },
        {
          question:
            "What does the formula u = ½ε₀E² claim, at its most ambitious?",
          options: [
            "Capacitors store energy only when fully charged",
            "Energy density is a property of charged conductors' surfaces",
            "The formula applies only between parallel plates",
            "Every region of space containing an electric field stores energy at ½ε₀E² per cubic meter, whether or not charges are nearby",
          ],
          correctIndex: 3,
          explanation:
            "Derived from the parallel-plate case, the claim generalizes: integrate ½ε₀E² over all space and you recover the assembly energy of any static distribution. The ambition pays off beyond statics — a light wave in vacuum carries exactly this energy density with no charges in sight, which is why the field view wins.",
        },
        {
          question:
            "A dielectric slab is inserted into a charged, isolated capacitor. Microscopically, why does the voltage drop?",
          options: [
            "The slab conducts charge between the plates, discharging them",
            "Molecular dipoles align, creating bound surface charge whose field opposes the plates' field, reducing the net E and hence V = Ed",
            "The slab absorbs some of the plate charge into its volume",
            "The slab increases the gap d between the plates",
          ],
          correctIndex: 1,
          explanation:
            "Polarization leaves thin sheets of bound charge on the slab's faces — negative facing the positive plate, positive facing the negative plate. Their field partially cancels the applied one, so E falls to E₀/κ and V falls with it while Q is unchanged, raising C = Q/V by κ. A dielectric is an insulator: no charge crosses it.",
        },
        {
          question:
            "Two identical capacitors: one charged to voltage V, one empty. They are connected in parallel and the charge shares equally. What happens to the total stored energy?",
          options: [
            "Half of it is dissipated in the connecting circuit, no matter how small the resistance",
            "It is conserved — energy always is",
            "It doubles, since there are now two charged capacitors",
            "It is entirely lost as heat",
          ],
          correctIndex: 0,
          explanation:
            "Each capacitor ends with Q/2 at V/2, for total energy 2 × ½C(V/2)² = ¼CV² — half the original ½CV². The missing half became heat (and a little radiation) in the surge; remarkably, the lost fraction is independent of R, since smaller resistance just means a larger, briefer current with the same I²R total. Energy is conserved overall — but not within the capacitors.",
        },
      ],
    },
    {
      id: "current-dc-circuits",
      title: "Current & DC Circuits",
      subtitle:
        "Current density, the microscopic view of Ohm's law, and RC circuits as differential equations",
      sections: [
        {
          id: "current-and-current-density",
          title: "Current and Current Density",
          content: `
<p>Electrostatics ends the moment charge starts to flow. <strong>Current</strong> is the rate of charge transport through a surface, I = dQ/dt, measured in amperes (1 A = 1 C/s). But current through a whole wire is a blunt, global number. The local, field-worthy quantity is the <strong>current density</strong> J: a vector at each point giving the direction of charge flow and the current per unit cross-sectional area. The two connect by a flux integral, just like E and Φ:</p>
<p style="text-align:center;">I = ∫ J · dA</p>
<p>Microscopically, if n carriers per cubic meter, each of charge q, drift with average velocity v_d, then a little pillbox argument gives:</p>
<p style="text-align:center; font-size:1.1em;"><strong>J = nqv_d</strong></p>
<p><strong>Worked example — the shockingly slow electron.</strong> A copper wire of 1 mm² cross-section carries 1 A. Copper offers about n = 8.5 × 10²⁸ free electrons/m³. Solve for the drift speed:</p>
<p style="text-align:center;">v_d = I/nqA = 1/(8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 10⁻⁶) ≈ <strong>0.07 mm/s</strong></p>
<p>The electrons powering your lamp drift more slowly than a snail. Yet the light responds the instant you flip the switch, because what travels fast is not the electrons but the <em>field</em> — the electromagnetic influence propagates along the wire near light speed, setting the whole electron column drifting at once, like water in a full hose responding instantly to the tap.</p>
<div class="key-concept">
  <h4>Charge conservation as an equation</h4>
  <p>Charge is never created or destroyed, and in flux language that becomes: ∮J·dA = −dQ_enc/dt — net outflow of current through a closed surface drains the charge inside. For steady currents nothing accumulates anywhere, so ∮J·dA = 0: what flows into any junction flows out. You have known this as Kirchhoff's junction rule; now you know it is conservation of charge, written as a statement about flux.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In household AC, electrons do not even go anywhere — they jiggle back and forth about 60 times a second over a fraction of a micrometer. No electron from the power station will ever reach your toaster. What the grid delivers is not particles but energy, carried by the fields.</p>
</div>`,
        },
        {
          id: "microscopic-ohms-law",
          title: "Ohm's Law from Electron Drift",
          content: `
<p>V = IR was an empirical rule in Phase 2. Now let us <em>derive</em> it from a microscopic model — the 1900 picture of Paul Drude, still remarkably serviceable.</p>
<p>Picture a metal as a lattice of fixed ions swarming with free electrons in random thermal motion at ~10⁶ m/s. Switch on a field E and each electron feels force −eE, accelerating at a = eE/m between collisions with the lattice. Each collision scrambles its velocity, erasing the memory of the drift. If the mean time between collisions is τ, an electron picks up, on average, an extra velocity:</p>
<p style="text-align:center;">v_d = eEτ/m</p>
<p>— a steady drift superimposed on the thermal chaos, like a breeze biasing a swarm of gnats. Substitute into J = nev_d:</p>
<p style="text-align:center; font-size:1.15em;"><strong>J = (ne²τ/m) E = σE</strong></p>
<p>This is the <strong>microscopic Ohm's law</strong>: current density proportional to field, with conductivity σ = ne²τ/m built from counting electrons (n), their charge and mass, and how long they fly between collisions (τ). Its reciprocal ρ = 1/σ is the <strong>resistivity</strong>.</p>
<p>The household version follows in three lines. For a uniform wire of length L and area A carrying uniform J = I/A driven by field E = V/L:</p>
<p style="text-align:center;">I/A = σV/L&nbsp;&nbsp;→&nbsp;&nbsp;V = I · (ρL/A)&nbsp;&nbsp;→&nbsp;&nbsp;<strong>R = ρL/A</strong></p>
<p>Resistance is resistivity dressed in geometry: long thin wires resist, short fat ones conduct. Copper's ρ ≈ 1.7 × 10⁻⁸ Ω·m; glass sits around 10¹⁰–10¹⁴ Ω·m — a range of over twenty orders of magnitude between conductors and insulators, one of the widest of any material property.</p>
<div class="key-concept">
  <h4>Why metals resist more when hot</h4>
  <p>Heat a metal and the lattice ions vibrate harder, scattering electrons more often: τ falls, so ρ rises — roughly linearly with temperature. In semiconductors the opposite happens: heat liberates more carriers, n soars, and resistance <em>drops</em>. One formula, σ = ne²τ/m, explains both behaviors through which factor dominates.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Ohm's law is not a law of nature — it is a material property that many conductors approximately obey. Diodes, spark gaps, and your nervous system flout it flagrantly. And below a critical temperature, superconductors make ρ exactly zero: currents in superconducting rings have circulated for years without measurable decay.</p>
</div>`,
        },
        {
          id: "emf-and-circuit-rules",
          title: "EMF, Power, and the Rules of the Circuit",
          content: `
<p>A field pushes current through a resistor — but the charges arrive at the far end with less energy. Something must lift them back up, or the flow stops like water settling to one level. That something is a source of <strong>electromotive force (EMF)</strong>: a battery, generator, or solar cell — any device using non-electrostatic means (chemistry, magnetism, light) to pump charge from low potential to high, like a pump lifting water uphill so it can flow down again. EMF, symbol ε, is the energy given to each coulomb: volts again, despite the misleading name "force."</p>
<p>A real battery has internal resistance r, so its terminal voltage under load sags: V = ε − Ir. Short a fresh 9 V battery and its internal resistance, not the wire, limits the current.</p>
<p>Two rules, both old friends in new clothes, govern any circuit:</p>
<ul>
  <li><strong>Junction rule:</strong> currents into a node equal currents out — charge conservation, the steady-state flux statement ∮J·dA = 0 from two sections ago.</li>
  <li><strong>Loop rule:</strong> potential changes around any closed loop sum to zero — because the electrostatic field's circulation vanishes, ∮E·dl = 0. Walk any loop, gaining ε through sources and dropping IR across resistors, and you must return to your starting potential.</li>
</ul>
<p>Energy flows at rate P = IV for any element (charge per second times energy per charge). For a resistor, substituting V = IR:</p>
<p style="text-align:center;">P = I²R = V²/R — dissipated irreversibly as heat</p>
<p><strong>Worked example.</strong> A 12 V battery with internal resistance 0.5 Ω drives a 5.5 Ω lamp. Loop rule: 12 = I(0.5 + 5.5), so I = 2 A. The lamp gets P = I²R = 22 W; the battery wastes I²r = 2 W internally; terminal voltage reads 12 − 1 = 11 V. Every joule per second is accounted for: 24 W chemical → 22 W light and heat in the lamp + 2 W battery warming.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>This is why the grid transmits at hundreds of kilovolts. Delivering power P at voltage V needs current I = P/V, and the line wastes I²R_line. Raise V a hundredfold and the loss falls ten-thousandfold — the single argument that decided the AC-versus-DC "war of currents" in the 1890s, since only AC could change voltage easily (with transformers, coming in the induction chapter).</p>
</div>`,
        },
        {
          id: "rc-circuits-as-odes",
          title: "RC Circuits: Your First Circuit ODE",
          content: `
<p>Connect a battery ε, resistor R, and capacitor C in a loop and close the switch. The loop rule now involves a quantity that <em>changes</em>: with charge q on the capacitor and current I = dq/dt flowing,</p>
<p style="text-align:center; font-size:1.1em;">ε − R(dq/dt) − q/C = 0</p>
<p>This is a first-order differential equation — the circuit's behavior is not a number but a <em>function</em>, and we can solve for it. Separate variables:</p>
<p style="text-align:center;">dq/(εC − q) = dt/RC</p>
<p>Integrate both sides (with q = 0 at t = 0): −ln(εC − q) evaluated between limits gives ln[(εC − q)/εC] = −t/RC. Exponentiate and solve:</p>
<p style="text-align:center; font-size:1.15em;"><strong>q(t) = εC(1 − e^(−t/RC))</strong>,&nbsp;&nbsp;I(t) = (ε/R)e^(−t/RC)</p>
<p>Read the story in the solution. At t = 0 the uncharged capacitor is invisible — a plain wire — and the current leaps to its maximum ε/R. As charge builds, the capacitor's growing voltage opposes the battery, choking the current exponentially. As t → ∞, current stops and the capacitor sits at full charge εC: a full capacitor is an open circuit.</p>
<div class="key-concept">
  <h4>The time constant τ = RC</h4>
  <p>Resistance times capacitance has units of seconds, and τ = RC sets the tempo: after one τ, charging reaches 63% (1 − 1/e); after 5τ, better than 99%. Discharging is the same equation without ε, with solution q = Q₀e^(−t/RC) — losing 63% per time constant. Note the shape of the whole subject to come: <em>circuit elements write differential equations; solving them is circuit analysis.</em> RC gives exponentials; adding inductors (two chapters ahead) will give oscillations.</p>
</div>
<p><strong>Worked example.</strong> A 330 μF flash capacitor charges through 10 kΩ: τ = RC = 3.3 s, so a full flash needs ~15 s of charging — that familiar whine while you wait. Wiper-delay knobs, touchscreen sensing, and the timing of neuron membranes (R from ion channels, C from the lipid membrane, τ ≈ 10 ms — setting the speed of your thoughts) are all RC clocks.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The exponential's fingerprint is a constant ratio per interval: whatever charge remains, one τ later 37% of it remains. This memoryless decay is the same mathematics as radioactive half-life — and measuring an RC curve is how many instruments infer an unknown capacitance.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Electrons in a lamp cord drift at a fraction of a millimeter per second, yet the lamp lights the instant the switch closes. Why?",
          options: [
            "Electrons accelerate to near light speed briefly, then slow down",
            "The switch releases electrons stored inside the lamp",
            "The electromagnetic field propagates along the circuit near light speed, setting the entire column of electrons drifting almost simultaneously",
            "Current in wires is carried by photons rather than electrons",
          ],
          correctIndex: 2,
          explanation:
            "The wire is already packed with mobile electrons, like a hose full of water. Closing the switch lets the field ripple down the line near light speed, so electrons everywhere in the circuit start drifting nearly at once. No individual electron needs to travel from switch to lamp — energy is delivered by the fields, not by any particle's journey.",
        },
        {
          question:
            "In the Drude model, conductivity is σ = ne²τ/m. Why does heating a metal increase its resistivity?",
          options: [
            "Hotter electrons carry less charge",
            "Stronger lattice vibrations scatter electrons more often, shortening the mean time τ between collisions",
            "The electron density n drops sharply as the metal expands",
            "The electron mass increases with temperature",
          ],
          correctIndex: 1,
          explanation:
            "Heat makes the lattice ions vibrate more vigorously, so a drifting electron's free flight is interrupted sooner: τ falls, σ = ne²τ/m falls, resistivity rises roughly linearly with T. Semiconductors run the logic through the other factor — heating liberates more carriers, n rises steeply, and their resistance drops instead.",
        },
        {
          question:
            "Kirchhoff's loop rule — potential changes around a closed loop sum to zero — is the circuit-level expression of which field property?",
          options: [
            "The electrostatic field has zero circulation: ∮E·dl = 0",
            "Gauss's law: flux equals enclosed charge over ε₀",
            "Charge conservation at junctions",
            "Energy dissipated in resistors equals I²R",
          ],
          correctIndex: 0,
          explanation:
            "Potential is single-valued precisely because the electrostatic field is conservative: walk any closed loop and −∮E·dl brings you back to your starting potential, so gains (EMFs) must balance drops (IR). The junction rule is the separate statement — charge conservation, ∮J·dA = 0 in steady state. Faraday's law will later add a term to the loop rule when magnetic flux changes.",
        },
        {
          question:
            "A capacitor charges through a resistor with time constant τ = RC. After a very long time, what limits the current in the circuit?",
          options: [
            "The resistor, which heats up and increases its resistance",
            "The battery's chemistry running down",
            "The wire's inductance",
            "The fully charged capacitor: its voltage equals the EMF, leaving no net push — it behaves as an open circuit and the current is essentially zero",
          ],
          correctIndex: 3,
          explanation:
            "The solution I(t) = (ε/R)e^(−t/RC) decays because the capacitor's rising voltage q/C opposes the battery ever more closely. When q reaches εC the loop rule reads ε − 0 − ε = 0: no current flows at all. At the opposite extreme, t = 0, the empty capacitor acts like a plain wire and the resistor alone sets I = ε/R.",
        },
        {
          question:
            "In q(t) = εC(1 − e^(−t/RC)), what fraction of the final charge has accumulated after one time constant τ = RC?",
          options: [
            "50%",
            "About 63% — the fraction 1 − 1/e",
            "About 37% — the fraction 1/e",
            "100%",
          ],
          correctIndex: 1,
          explanation:
            "Set t = τ: q = εC(1 − e⁻¹) ≈ 0.632 εC. Each additional τ closes 63% of the remaining gap, so ~86% after 2τ and over 99% after 5τ. The mirror-image discharge keeps 1/e ≈ 37% per time constant — the same memoryless exponential that governs radioactive decay.",
        },
      ],
    },
    {
      id: "magnetostatics",
      title: "Magnetostatics",
      subtitle:
        "Biot–Savart, Ampère's law, and the fields of steady currents",
      sections: [
        {
          id: "biot-savart",
          title: "The Biot–Savart Law",
          content: `
<p>Electric charges at rest make electric fields. Charges in <em>motion</em> — currents — make magnetic fields, and the recipe for computing them is the magnetic sibling of the Coulomb integration. A short element of wire dl carrying current I contributes:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dB = (μ₀/4π) · I dl × r̂ / r²</strong></p>
<p>where μ₀ = 4π × 10⁻⁷ T·m/A is the <strong>permeability of free space</strong> and r̂ points from the element to the field point. Same 1/r² falloff as Coulomb — but note the <strong>cross product</strong>: dB is perpendicular both to the current element and to the line joining it to you. Magnetic fields do not point away from their sources; they <em>circle</em> them. Your right hand keeps the books: thumb along the current, fingers curl along B.</p>
<p><strong>Worked example 1 — infinite straight wire.</strong> Field point at perpendicular distance r. Every element's dl × r̂ points the same way (circling the wire), so magnitudes add. The integral ∫dx·r/(x² + r²)^(3/2) is the very one you did for the charged line in chapter 1 — it evaluates to 2/r — giving:</p>
<p style="text-align:center; font-size:1.1em;"><strong>B = μ₀I/2πr</strong>, in circles around the wire</p>
<p>Same mathematics as E = λ/2πε₀r, different geometry of the answer: radial spokes for the charge, closed loops for the current.</p>
<p><strong>Worked example 2 — circular loop, on its axis.</strong> Radius R, current I, field point at height z. Symmetry cancels all but the axial components of dB, and every element sits at the same distance:</p>
<p style="text-align:center;">B = μ₀IR²/2(z² + R²)^(3/2)&nbsp;&nbsp;→&nbsp;&nbsp;<strong>B = μ₀I/2R at the center</strong></p>
<p>Far away (z much larger than R), B ≈ μ₀IR²/2z³ — a 1/z³ falloff that should ring a bell: it is the signature of a <em>dipole</em>, the loop's true identity, taken up two sections from now.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The story began in 1820 when Hans Christian Ørsted, mid-lecture, noticed a compass needle twitch beside a current-carrying wire — the first hint that electricity and magnetism were one subject. Within months Biot and Savart had the quantitative law, and Ampère had founded electrodynamics. Physics rarely moves that fast.</p>
</div>`,
        },
        {
          id: "amperes-law",
          title: "Ampère's Law and Its Symmetries",
          content: `
<p>Gauss's law shortcut Coulomb integrations; magnetostatics has a parallel shortcut, but built on <em>circulation</em> rather than flux — fitting, since B circles its sources instead of radiating from them. Compute ∮B·dl around a circle of radius r centered on a straight wire: B = μ₀I/2πr is constant along the loop and parallel to it, so the circulation is (μ₀I/2πr)(2πr) = μ₀I. The r cancels — any loop around the wire gives the same answer, and loops enclosing no current give zero. The general statement:</p>
<div class="key-concept">
  <h4>Ampère's law</h4>
  <p><strong>∮ B · dl = μ₀ I_enclosed</strong> — the circulation of B around any closed loop equals μ₀ times the current threading through it. Compare Gauss: charge is what E-flux counts; current is what B-circulation counts. (And the magnetic <em>flux</em> law is the humble ∮B·dA = 0 — no magnetic charges exist, so field lines never end; they only close on themselves.)</p>
</div>
<p>As with Gauss, symmetry converts truth into a calculating machine:</p>
<p><strong>Inside a thick wire.</strong> Uniform current I in a wire of radius a. An Amperian circle of radius r &lt; a encloses only the fraction I·r²/a². Then B·2πr = μ₀Ir²/a², so <strong>B = μ₀Ir/2πa²</strong> — growing linearly inside, matching μ₀I/2πr at the surface. (Exactly parallel to E inside the charged sphere.)</p>
<p><strong>The solenoid.</strong> A long, tightly wound coil, n turns per meter. The field is strong and uniform inside, nearly zero outside. Take a rectangular loop with one side (length L) inside, parallel to the axis: only that side contributes circulation BL, and the loop encloses nLI of current. Hence:</p>
<p style="text-align:center; font-size:1.1em;"><strong>B = μ₀nI</strong>, uniform inside — independent of position and of the coil's radius</p>
<p>The solenoid is magnetism's parallel-plate capacitor: winding a wire into a helix packs the field into a clean uniform column. It will star in the inductance chapter.</p>
<p><strong>The toroid</strong> — a solenoid bent into a doughnut with N total turns — yields B = μ₀NI/2πr inside the core, zero outside: the field completely caged. Tokamak fusion reactors are toroids writ large.</p>
<p>The same fine print as Gauss applies: Ampère's law is always true (for steady currents), but only high symmetry lets B escape the integral. For a single loop of wire, back to Biot–Savart. And keep a loose thread in view: <em>steady</em> currents only. The law as written fails for changing fields — Maxwell's repair of exactly this defect is the climax of the subject.</p>`,
        },
        {
          id: "magnetic-dipoles",
          title: "Magnetic Dipoles",
          content: `
<p>The circular current loop is not just an exercise — it is the fundamental unit of magnetism, playing the role in magnetostatics that the point charge plays in electrostatics. Its character is captured by one vector, the <strong>magnetic dipole moment</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>m = IA</strong>&nbsp;&nbsp;(current times loop area, direction by the right hand: fingers along current, thumb along m)</p>
<p>Everything a distant observer can know about the loop is encoded in m:</p>
<ul>
  <li><strong>Far field:</strong> on the axis, B ≈ μ₀m/2πz³ — the 1/z³ dipole falloff from last section, with a field pattern identical in shape to a bar magnet's or an electric dipole's.</li>
  <li><strong>Torque in an external field:</strong> τ = m × B. A uniform field exerts no net force on a loop, but it twists it, torquing m toward alignment with B — this torque is precisely what spins every electric motor and swings every compass needle.</li>
  <li><strong>Energy of orientation:</strong> U = −m·B, lowest when aligned. Nonuniform fields then pull dipoles toward stronger field regions — why a magnet grips iron.</li>
</ul>
<div class="analogy">
  <h3>Analogy: The Compass in the Loop</h3>
  <p>A compass needle is a dipole reading τ = m × B in real time: it oscillates about north and settles when m ∥ B. An MRI machine plays the same physics at the atomic scale — proton dipole moments aligning in a strong field, then wobbling at a precise frequency that reveals their chemical surroundings.</p>
</div>
<p>Why call this the fundamental unit? Because <strong>magnetic charges do not exist</strong>. Cut a bar magnet in half hoping to isolate a north pole and you get two smaller complete magnets, each with both poles. The flux law ∮B·dA = 0 codifies the experimental verdict: no magnetic monopoles have ever been found, so the simplest possible magnetic source is the dipole — a closed current loop. Where electrostatics builds matter's behavior from charges, magnetostatics builds it from tiny loops: electrons orbiting, and (dominantly) the intrinsically spinning electron itself, whose built-in dipole moment is a quantum fact with no classical picture. Those atomic loops are the bridge to the next section — magnetism inside matter.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Earth's field is approximately a dipole with m ≈ 8 × 10²² A·m², generated by convecting molten iron — and it flips polarity at irregular intervals averaging a few hundred thousand years. Mid-ocean-ridge basalt records the reversals like a tape recorder, striped symmetrically about the ridge: the decisive 1960s evidence for seafloor spreading and plate tectonics.</p>
</div>`,
        },
        {
          id: "magnetism-in-matter",
          title: "Magnetism in Matter: A First Look",
          content: `
<p>If atoms are full of electron current loops, why isn't every object magnetic? Because in most materials the atomic dipoles point randomly and cancel. What distinguishes materials is how their dipoles <em>respond</em> to an applied field — and there are three characteristic answers.</p>
<ul>
  <li><strong>Diamagnetism</strong> (all materials, usually buried): the applied field slightly modifies every atom's electron orbits, inducing dipoles that <em>oppose</em> it — a whisper of Lenz's law at the atomic scale, as the next chapter will make precise. Effect: feeble repulsion from magnets. Water, copper, bismuth, and you are diamagnetic.</li>
  <li><strong>Paramagnetism</strong>: atoms with unpaired electrons carry permanent dipole moments; an applied field torques them (τ = m × B) toward alignment against thermal jostling. Effect: feeble attraction, strengthening as temperature drops. Aluminum, oxygen, many salts.</li>
  <li><strong>Ferromagnetism</strong> (iron, nickel, cobalt, and alloys): the outlier that makes magnets worth owning. A quantum effect — exchange interaction — makes neighboring electron spins <em>want</em> to align spontaneously, organizing the material into <strong>domains</strong>: regions of ~10¹⁷ atoms all magnetized one way, but with different domains pointing differently and cancelling overall.</li>
</ul>
<p>Magnetize a piece of iron and you are not creating dipoles — you are taking sides in a civil war: domains aligned with the applied field grow at their neighbors' expense, and the material's own dipoles add their fields to yours, multiplying it by factors of hundreds to thousands. That is why transformer and electromagnet cores are iron: the same solenoid current buys a vastly larger B.</p>
<div class="key-concept">
  <h4>Hysteresis: matter with memory</h4>
  <p>Remove the applied field and the domain walls, snagged on crystal defects, do not fully retreat: the iron stays partly magnetized. This lag — <strong>hysteresis</strong> — is what makes permanent magnets permanent, and it makes magnetization a form of memory: from tape and floppy disks to modern hard drives, data storage has long meant writing tiny magnetic domains. Heat any ferromagnet past its <strong>Curie temperature</strong> (770 °C for iron) and thermal agitation defeats the exchange alignment: the domains dissolve and the material turns merely paramagnetic.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Diamagnetism is weak but universal — and with a strong enough field it wins spectacularly. In 1997 a 16-tesla magnet levitated a live frog: the water in its body, pushed away from the strong field, floated the whole animal. The work earned Andre Geim an Ig Nobel prize — before his graphene work earned him the ordinary kind.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the Biot–Savart law, dB ∝ I dl × r̂/r². What does the cross product tell you about the geometry of magnetic fields?",
          options: [
            "B points radially away from the current, like E from a charge",
            "B is strongest along the direction of current flow",
            "B is perpendicular both to the current element and to the line toward the field point — magnetic fields circle their sources rather than radiating from them",
            "B vanishes everywhere except on the wire itself",
          ],
          correctIndex: 2,
          explanation:
            "The cross product forces dB to be perpendicular to both dl and r̂, so field lines wrap in closed loops around currents — the right-hand rule gives the sense. This is the structural difference from electrostatics: E has sources and sinks (charges), while B has none, only circulation, which is why ∮B·dA = 0.",
        },
        {
          question:
            "An Amperian loop encircles a wire carrying current I. If the loop is deformed into a much larger, lopsided shape that still encircles the wire once, the circulation ∮B·dl:",
          options: [
            "remains exactly μ₀I — circulation depends only on the enclosed current, not the loop's size or shape",
            "decreases, because B is weaker far from the wire",
            "increases, because the loop is longer",
            "becomes zero once the loop is no longer circular",
          ],
          correctIndex: 0,
          explanation:
            "That is the whole content of Ampère's law: the weakening of B (∝ 1/r) is exactly compensated by the greater path length, for any loop and any steady current distribution. The same conspiracy that makes Gauss's flux radius-independent (r² area versus 1/r² field) makes Ampère's circulation shape-independent.",
        },
        {
          question:
            "Inside a long solenoid with n turns per meter carrying current I, the field is B = μ₀nI. Which feature of this result is most remarkable?",
          options: [
            "It grows with the solenoid's radius",
            "It is uniform — the same at the axis or near the windings — and independent of the coil's radius entirely",
            "It falls off as 1/r from the axis",
            "It depends on the length of the solenoid",
          ],
          correctIndex: 1,
          explanation:
            "The Amperian rectangle argument gives BL = μ₀nLI wherever the inner side sits, so B is the same everywhere inside: a uniform magnetic column, the magnetic analogue of the parallel-plate capacitor's uniform E. Only the turn density and current matter — wind tighter or drive harder to strengthen it.",
        },
        {
          question:
            "A current loop with dipole moment m sits in a uniform magnetic field B. What does the field do to it?",
          options: [
            "Pushes it toward the strongest field region",
            "Nothing, since the net force is zero",
            "Accelerates it along the field direction",
            "Exerts zero net force but a torque τ = m × B that twists m toward alignment with B",
          ],
          correctIndex: 3,
          explanation:
            "In a uniform field the forces on opposite sides of the loop cancel, but they form a couple: torque m × B, zero only when m aligns with B (the minimum of U = −m·B). This torque is the operating principle of motors and compasses. Only a nonuniform field adds a net force — which is how magnets attract iron.",
        },
        {
          question:
            "Why does inserting an iron core into a solenoid multiply its magnetic field hundreds of times?",
          options: [
            "Iron conducts the current better than air",
            "The applied field grows aligned magnetic domains at the expense of misaligned ones, and the iron's own atomic dipoles add their field to the solenoid's",
            "Iron concentrates the electric field of the windings",
            "The core increases the number of turns per meter",
          ],
          correctIndex: 1,
          explanation:
            "Ferromagnetic iron is pre-organized into domains of aligned electron spins. The solenoid's modest field tips the balance — favorable domains grow and rotate into line — recruiting an enormous population of atomic dipoles whose combined field dwarfs the original. Remove the field and hysteresis leaves some alignment behind: a permanent magnet, and the principle of magnetic data storage.",
        },
      ],
    },
    {
      id: "induction-inductance",
      title: "Induction & Inductance",
      subtitle:
        "Faraday's law properly, inductors, and LR/LC/RLC circuits as differential equations",
      sections: [
        {
          id: "faradays-law",
          title: "Faraday's Law: Flux That Changes",
          content: `
<p>In 1831 Michael Faraday found electricity's second source. Define the <strong>magnetic flux</strong> through a loop, Φ_B = ∫B·dA — field times area, angle-weighted, in webers (1 Wb = 1 T·m²). Faraday's discovery:</p>
<div class="key-concept">
  <h4>Faraday's law</h4>
  <p><strong>ε = −dΦ_B/dt</strong> — a changing magnetic flux through a circuit induces an EMF equal to the rate of change of flux. In field language: <strong>∮E·dl = −dΦ_B/dt</strong>. Read that carefully: the circulation of E is no longer zero. A changing magnetic field creates an electric field that curls in closed loops — a fundamentally new kind of E, with no charges as its source and no single-valued potential.</p>
</div>
<p>Anything that changes Φ_B = BA cos θ induces: change B (move a magnet), change A (deform the circuit), or change θ (rotate it). The minus sign is <strong>Lenz's law</strong>: the induced current flows so as to <em>oppose</em> the change creating it. Push a magnet toward a loop and the induced current makes a field pushing back. Lenz is energy conservation in disguise — an induced current that reinforced its cause would amplify itself from nothing.</p>
<p><strong>Worked example 1 — rod on rails.</strong> A conducting rod of length L slides at speed v along rails through a perpendicular field B, closing a circuit of resistance R. Flux through the circuit grows at dΦ/dt = BLv, so:</p>
<p style="text-align:center;">ε = BLv,&nbsp;&nbsp;I = BLv/R</p>
<p>With B = 0.5 T, L = 0.4 m, v = 3 m/s, R = 2 Ω: ε = 0.6 V, I = 0.3 A. The current-carrying rod feels a magnetic drag force F = BIL = 0.06 N opposing its motion (Lenz again); the mechanical power pushing against it, Fv = 0.18 W, exactly equals the I²R heat. You have built a generator and audited its books.</p>
<p><strong>Worked example 2 — the rotating coil.</strong> Spin a coil of N turns and area A at angular speed ω in field B. Flux: Φ = BA cos ωt per turn, so:</p>
<p style="text-align:center; font-size:1.05em;"><strong>ε = NBAω sin ωt</strong></p>
<p>— alternating voltage, made by rotation. This is the world's electricity: in every power station — coal, nuclear, hydro, wind — something spins a coil in a field (or a field past coils), and Faraday's law does the rest. Only solar photovoltaics escapes the flywheel.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Lenz drag is put to work in induction braking: a moving magnet induces eddy currents in a nearby conductor, whose opposing field brakes the motion smoothly, with no contact and no wear. Roller-coasters, high-speed trains, and gym flywheels all stop this way — and induction hobs run the effect in reverse, dumping eddy currents straight into the pan to cook with.</p>
</div>`,
        },
        {
          id: "inductors-and-inductance",
          title: "Inductance: Circuits That Resist Change",
          content: `
<p>A current-carrying coil threads its <em>own</em> flux — so if its current changes, its flux changes, and by Faraday's law it induces an EMF <em>in itself</em>, opposing the change. This is <strong>self-induction</strong>. Since the flux a circuit threads through itself is proportional to its own current, define the <strong>self-inductance</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>L = Φ_B/I</strong>&nbsp;&nbsp;(unit: henry, 1 H = 1 Wb/A), so that&nbsp;&nbsp;<strong>ε = −L dI/dt</strong></p>
<p>An inductor does for current what a capacitor does for voltage: it resists changing it. Steady current passes an ideal inductor without complaint; changing current meets a back-EMF proportional to the rate of change.</p>
<p><strong>Worked calculation — the solenoid.</strong> Length l, area A, n turns per meter, so N = nl turns total. Inside, B = μ₀nI (last chapter), and each turn threads flux BA, so the total flux linkage is NBA = nl·μ₀nI·A. Divide by I:</p>
<p style="text-align:center; font-size:1.05em;"><strong>L = μ₀n²Al</strong></p>
<p>Inductance is pure geometry (times μ₀) — just as capacitance was. Note the n²: doubling the winding density doubles both the flux per amp <em>and</em> the number of turns collecting it. A 10 cm coil of 1 cm² cross-section with 1000 turns/cm: L ≈ 12.6 mH. An iron core multiplies this by the core's relative permeability — hundreds to thousands, courtesy of the domains from last chapter.</p>
<div class="analogy">
  <h3>Analogy: Electrical Inertia</h3>
  <p>ε = −L dI/dt has the exact shape of F = ma with L as mass and I as velocity. An inductor gives current momentum: hard to start, and — crucially — hard to <em>stop</em>. Interrupt an inductive circuit abruptly and dI/dt spikes enormous, generating hundreds of volts across the opening switch: the spark when unplugging a motor, and precisely how a car's ignition coil turns 12 V into the 20,000 V that fires a spark plug.</p>
</div>
<p><strong>Mutual inductance.</strong> Two nearby coils share flux: current changing in coil 1 induces ε₂ = −M dI₁/dt in coil 2, with the same M in both directions. Wind both around a shared iron core and you have a <strong>transformer</strong>: an AC voltage on N₁ turns appears on N₂ turns scaled by N₂/N₁ — no moving parts, near-perfect efficiency. This one Faraday application makes high-voltage transmission (and hence the entire AC grid) possible.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Joseph Henry discovered self-induction in 1832, independently of Faraday and within months of him — American physics' first major result. The unit is his; the law's name went to Faraday, who published first. Priority, as ever, favors the printing press.</p>
</div>`,
        },
        {
          id: "lr-circuits",
          title: "The LR Circuit: Current with Inertia",
          content: `
<p>Put inductance into a circuit and, as with RC, the loop rule writes a differential equation. Battery ε, resistor R, inductor L in series; close the switch at t = 0. The inductor's back-EMF joins the loop sum:</p>
<p style="text-align:center; font-size:1.1em;">ε − L(dI/dt) − IR = 0</p>
<p>Structurally this is the RC equation with new actors, and it solves the same way — separate variables and integrate, with I(0) = 0:</p>
<p style="text-align:center; font-size:1.15em;"><strong>I(t) = (ε/R)(1 − e^(−t/τ))</strong>,&nbsp;&nbsp;with time constant&nbsp;<strong>τ = L/R</strong></p>
<p>The story, told by the solution: at t = 0 the inductor fights hardest — current is zero and the full battery voltage appears across L as it strains against the rising current (electrical inertia resisting acceleration). As current approaches its final value ε/R, dI/dt fades, the inductor's opposition dies away, and it ends as a plain wire. Note the mirror symmetry with capacitors: <em>a fresh inductor acts like an open circuit and a fresh capacitor like a wire; at late times they swap roles.</em></p>
<p><strong>Worked numbers.</strong> ε = 12 V, R = 6 Ω, L = 30 mH: final current 2 A, τ = L/R = 5 ms. After 5 ms, I ≈ 1.26 A (63%); after 25 ms, within 1% of 2 A.</p>
<p><strong>Now open the switch</strong> — with a path for decay, say through the resistor. The equation loses its source: L dI/dt + IR = 0, so I(t) = I₀e^(−t/τ). The inductor now acts as a temporary battery, spending its stored energy (next section's ½LI²) to keep the current alive while it dies exponentially.</p>
<div class="key-concept">
  <h4>The interrupted inductor</h4>
  <p>But open the circuit with <em>no</em> decay path and the mathematics turns violent: forcing I to drop almost instantly makes dI/dt huge, and ε = −L dI/dt spikes to hundreds or thousands of volts — an arc jumps the switch gap to keep the current flowing. Circuit designers bleed this energy off with "flyback" diodes across relay coils; ignition systems weaponize it instead. An inductor's current, like momentum, cannot jump discontinuously.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>τ = L/R versus τ = RC: inductance times conductance, resistance times capacitance — each pairing has units of seconds. Circuits hand you clocks in two mirror-image ways, and every timing chip, filter, and oscillator is built from these two time constants and their combinations.</p>
</div>`,
        },
        {
          id: "lc-rlc-oscillations",
          title: "LC and RLC: The Electrical Oscillator",
          content: `
<p>Now for the payoff of the whole circuits thread. Charge a capacitor to Q₀, connect it across an inductor, and stand back. The loop rule, with I = dq/dt:</p>
<p style="text-align:center; font-size:1.1em;">L(d²q/dt²) + q/C = 0&nbsp;&nbsp;&nbsp;i.e.&nbsp;&nbsp;d²q/dt² = −(1/LC)q</p>
<p>Look hard at that equation. It is <em>exactly</em> the simple harmonic oscillator of Classical Mechanics — m(d²x/dt²) = −kx — with charge playing position. The solution follows instantly from the analogy:</p>
<p style="text-align:center; font-size:1.15em;"><strong>q(t) = Q₀ cos(ωt)</strong>,&nbsp;&nbsp;<strong>ω = 1/√(LC)</strong></p>
<p>The charge sloshes between the plates forever, current surging and reversing, at natural frequency f = 1/2π√(LC). Energy shuttles between the capacitor's field (q²/2C, electrical "spring energy") and the inductor's field (½LI², electrical "kinetic energy"), the total constant — a pendulum made of fields.</p>
<table>
  <thead>
    <tr><th>Mechanical</th><th>Electrical</th></tr>
  </thead>
  <tbody>
    <tr><td>Position x</td><td>Charge q</td></tr>
    <tr><td>Velocity v</td><td>Current I = dq/dt</td></tr>
    <tr><td>Mass m (inertia)</td><td>Inductance L</td></tr>
    <tr><td>Spring constant k</td><td>1/C (stiffness)</td></tr>
    <tr><td>Friction b</td><td>Resistance R</td></tr>
    <tr><td>ω = √(k/m)</td><td>ω = 1/√(LC)</td></tr>
  </tbody>
</table>
<p>Add resistance and the dictionary keeps translating: L(d²q/dt²) + R(dq/dt) + q/C = 0 is the <em>damped</em> oscillator. Small R: <strong>underdamped</strong> — oscillations inside a decaying envelope e^(−Rt/2L). Large R: <strong>overdamped</strong> — a sluggish slide to zero. The critical boundary sits at R = 2√(L/C). Drive an RLC circuit with an AC source and it <strong>resonates</strong> at ω = 1/√(LC), responding enormously at its natural frequency and snubbing all others.</p>
<div class="key-concept">
  <h4>One equation, many costumes</h4>
  <p>You have now met the damped driven oscillator as a mass on a spring, a pendulum, and a circuit — and it will return as molecules, buildings, and quantum states. Learning physics efficiently means recognizing the equation through its costumes: solve it once, own it everywhere.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Tuning a radio is choosing C: a variable capacitor shifts the RLC resonance ω = 1/√(LC) until it matches one station's carrier frequency, which then rings up a large response while every other broadcast, arriving at the same antenna, barely stirs the circuit. Resonance is nature's radio dial.</p>
</div>`,
        },
        {
          id: "energy-in-magnetic-fields",
          title: "Energy in Magnetic Fields",
          content: `
<p>Building a current against an inductor's back-EMF costs work, just as charging a capacitor did — and the same power-integral audit finds it. While current grows, the source pushes power P = εI = LI(dI/dt) into the inductor. Integrate from 0 to final current I:</p>
<p style="text-align:center;">U = ∫ LI′ dI′ = <strong>½LI²</strong></p>
<p>— the twin of ½CV², with the ½ again marking an integral's average. A 30 mH coil at 2 A stores a modest 0.06 J; the superconducting magnets of the LHC, at 11,850 A through henries of inductance, store about 10 gigajoules per sector — which is why they are shut down gently, over hours.</p>
<p><strong>Where does this energy live?</strong> Run the capacitor chapter's argument in parallel. For a solenoid: L = μ₀n²Al and I = B/μ₀n, so:</p>
<p style="text-align:center;">U = ½(μ₀n²Al)(B/μ₀n)² = (B²/2μ₀) × (Al)</p>
<p>Al is the solenoid's interior volume — where the field is. The energy is field energy, at density:</p>
<div class="key-concept">
  <h4>The two field energy densities</h4>
  <p style="text-align:center; font-size:1.05em;"><strong>u_E = ½ε₀E²&nbsp;&nbsp;&nbsp;u_B = B²/2μ₀</strong></p>
  <p>Every electric field and every magnetic field carries energy, joule for joule, by these exchange rates. The pair's symmetry — one constant downstairs, one upstairs — traces to how the fields' sources were defined; the physics is identical. In an LC circuit the total oscillates between the two forms; in a light wave, as the final chapter shows, the two ride together in exact equality across empty space.</p>
</div>
<p>A comparison worth feeling: air's electrical breakdown caps u_E near 40 J/m³, but a routine 1-tesla laboratory magnet stores B²/2μ₀ ≈ 400,000 J/m³ — magnetic fields can be packed ten thousand times denser with energy before matter fails, which is why energy-storage flywheels use magnetic bearings and why fusion reactors confine plasma magnetically rather than electrostatically.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>When a superconducting magnet "quenches" — one spot goes resistive — the stored B²/2μ₀ energy dumps into heat within seconds. The 2008 LHC quench boiled away six tonnes of liquid helium and shut the machine for a year: field energy is real energy, and ½LI² sends the repair bill to prove it.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A bar magnet is pushed north-pole-first toward a wire loop. Lenz's law says the induced current creates a field that repels the approaching magnet. What deeper principle does this reflect?",
          options: [
            "Magnetic monopoles cannot exist",
            "Energy conservation — an induced current that attracted the magnet would accelerate it, boosting the induction in a runaway loop of free energy",
            "Charge conservation in the loop",
            "The loop's resistance always opposes current",
          ],
          correctIndex: 1,
          explanation:
            "If induction aided the change causing it, the magnet would speed up, increasing dΦ/dt, increasing the current, ad infinitum — a perpetual motion machine. The minus sign in ε = −dΦ_B/dt forbids this: you must do work against the induced effects, and that work is precisely the electrical energy generated. Every power station charges you for exactly this push.",
        },
        {
          question:
            "A rod of length L slides at speed v along rails in a perpendicular field B, closing a circuit of resistance R. What is the induced EMF, and what does the delivered electrical power equal?",
          options: [
            "ε = BLv²; the power comes from the magnetic field's energy",
            "ε = BL/v; the power equals the rod's kinetic energy",
            "ε = BLv; the power I²R exactly equals the mechanical power Fv spent pushing the rod against its magnetic drag force",
            "ε = B²L²v; no power is needed since the field does the work",
          ],
          correctIndex: 2,
          explanation:
            "The circuit's area grows at rate Lv, so dΦ/dt = BLv = ε, driving I = BLv/R. The current-carrying rod feels drag F = BIL opposing v (Lenz), and pushing against it costs Fv = B²L²v²/R — precisely the I²R heat. The magnetic field brokers the conversion but pays nothing: generators turn muscle, steam, or falling water into electricity, joule for joule.",
        },
        {
          question:
            "Just after the switch closes in a series LR circuit, the current is zero even though the battery is connected. Why?",
          options: [
            "The inductor's back-EMF −L·dI/dt initially balances the battery: current, like momentum, must build gradually and cannot jump",
            "The resistor blocks all current until it warms up",
            "The inductor must first charge up with magnetic monopoles",
            "The battery needs time to establish its EMF",
          ],
          correctIndex: 0,
          explanation:
            "At t = 0 the entire battery voltage appears across the inductor, fixing the initial slope dI/dt = ε/L but the initial current at zero — electrical inertia. The current then climbs as (ε/R)(1 − e^(−t/τ)) with τ = L/R, ending with the inductor acting as a plain wire. Capacitors mirror this exactly: wire first, open circuit later.",
        },
        {
          question:
            "In an ideal LC circuit oscillating at ω = 1/√(LC), what happens at the instant the capacitor's charge passes through zero?",
          options: [
            "All energy has been dissipated and the oscillation stops",
            "The current is also zero",
            "The voltage across the inductor is at its maximum",
            "The current is at its maximum, and all the energy resides in the inductor's magnetic field as ½LI²",
          ],
          correctIndex: 3,
          explanation:
            "q(t) = Q₀cos ωt makes I = dq/dt largest exactly when q = 0 — like a pendulum moving fastest at the bottom of its arc. The energy has fully migrated from the capacitor's field (q²/2C) to the inductor's (½LI²); a quarter period later it is back. With no resistance nothing is dissipated, and the total is constant.",
        },
        {
          question:
            "The magnetic field energy density is u_B = B²/2μ₀. In which sense is this the partner of the electric result u_E = ½ε₀E²?",
          options: [
            "Both apply only inside circuit components",
            "Together they assign real energy to every field in space — and in a light wave the two densities travel together in exact equality through vacuum",
            "They are alternative formulas for the same electric energy",
            "u_B applies only inside iron cores",
          ],
          correctIndex: 1,
          explanation:
            "Each was derived from a component (capacitor, solenoid) but asserts a local property of fields anywhere — including empty space with no hardware in sight. The claim becomes unavoidable for electromagnetic waves, where E and B sail through vacuum carrying u_E = u_B in equal measure: the sunshine warming your face is these two densities, delivered.",
        },
      ],
    },
    {
      id: "maxwells-equations-light",
      title: "Maxwell's Equations & Light",
      subtitle:
        "The complete set of equations, the wave solution, and the discovery that light is electromagnetic",
      sections: [
        {
          id: "displacement-current",
          title: "The Missing Term: Displacement Current",
          content: `
<p>Around 1861, James Clerk Maxwell noticed that Ampère's law — reliable for every steady current — contains a contradiction, and it surfaces in a device you now know well: a charging capacitor.</p>
<p>Ampère's law reads ∮B·dl = μ₀I_enc, where I_enc is the current piercing <em>any surface bounded by the loop</em> — the law cannot care which surface, since the loop alone appears on the left. Now draw an Amperian loop around the wire feeding a charging capacitor:</p>
<ul>
  <li><strong>Surface 1</strong> — a flat disk spanning the loop: the wire pierces it. I_enc = I.</li>
  <li><strong>Surface 2</strong> — a balloon bulging through the capacitor gap: no charge crosses the gap, so no current pierces it. I_enc = 0.</li>
</ul>
<p>Same loop, two answers. The law is broken — subtly, only where fields change in time. Maxwell's diagnosis: something <em>is</em> happening in the gap. As charge accumulates, the electric field between the plates grows, and the electric flux Φ_E through surface 2 grows with it. Maxwell proposed that a changing electric flux generates magnetic field exactly as a current does, and repaired the law:</p>
<div class="key-concept">
  <h4>The Ampère–Maxwell law</h4>
  <p style="text-align:center; font-size:1.05em;"><strong>∮ B · dl = μ₀I_enc + μ₀ε₀ (dΦ_E/dt)</strong></p>
  <p>The new term is the <strong>displacement current</strong>, I_d = ε₀ dΦ_E/dt — not a current of moving charge, but a changing electric flux with a current's magnetic credentials.</p>
</div>
<p><strong>Check that it heals the paradox.</strong> In the gap, E = σ/ε₀ = q/ε₀A over area A, so Φ_E = q/ε₀ and I_d = ε₀ dΦ_E/dt = dq/dt = I. The displacement current through surface 2 exactly equals the wire current through surface 1: every surface now agrees, and the "current," conduction plus displacement, flows in an unbroken loop through the circuit <em>and the vacuum gap alike</em>.</p>
<p>Do not let the bookkeeping obscure the thunderclap. Faraday had shown that a changing B creates E. Maxwell's term says a changing E creates B. The two inductions form a closed loop of cause and effect — each field able to regenerate the other, no charges or currents required. Shake that loop loose from its sources and it should be able to travel. Two sections from now, it does — at a speed Maxwell could compute from tabletop constants.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Maxwell reached the term partly through a mechanical model of space filled with spinning vortex cells and idler wheels — Victorian machinery he later discarded, keeping only the equations. The name "displacement current" is a fossil of that scaffolding; the term needs no medium at all, as the vacuum wave it predicts would prove.</p>
</div>`,
        },
        {
          id: "the-complete-set",
          title: "The Complete Maxwell Set",
          content: `
<p>With Ampère's law repaired, the description of electromagnetism is <em>finished</em>. Four equations — two about flux through closed surfaces, two about circulation around closed loops — govern every electromagnetic phenomenon in the universe:</p>
<table>
  <thead>
    <tr><th>Law</th><th>Equation</th><th>What it says</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Gauss (E)</strong></td><td>∮E·dA = q_enc/ε₀</td><td>Electric field lines begin and end on charges</td></tr>
    <tr><td><strong>Gauss (B)</strong></td><td>∮B·dA = 0</td><td>Magnetic field lines never end — no monopoles</td></tr>
    <tr><td><strong>Faraday</strong></td><td>∮E·dl = −dΦ_B/dt</td><td>Changing magnetic flux makes circulating E</td></tr>
    <tr><td><strong>Ampère–Maxwell</strong></td><td>∮B·dl = μ₀I_enc + μ₀ε₀ dΦ_E/dt</td><td>Currents and changing electric flux make circulating B</td></tr>
  </tbody>
</table>
<p>Add the Lorentz force law, F = q(E + v × B), which tells charges how to respond, and classical electromagnetism is complete: every circuit, motor, antenna, lens, and rainbow follows from these five lines. In the local language of vector calculus, the flux laws become divergence statements (∇·E = ρ/ε₀, ∇·B = 0) and the circulation laws become curl statements — the form you will use in Electromagnetism II.</p>
<p>Stare at the table and its near-symmetry speaks:</p>
<ul>
  <li>The E-flux law has a source term; the B-flux law's is zero. <strong>Electric charge exists; magnetic charge does not.</strong> Every asymmetry in the set traces to this one experimental fact — even the stray minus sign, which is Lenz's law guarding energy conservation.</li>
  <li>The circulation laws interlock: each field's <em>change</em> drives the other's <em>curl</em>. This handshake is the engine of light.</li>
</ul>
<div class="key-concept">
  <h4>Why "complete" is the right word</h4>
  <p>These equations survived the two revolutions that demolished the rest of 19th-century physics. Relativity did not correct them — they turned out to be relativity's first exhibit, correct at any speed (it was mechanics that had to change). And quantum electrodynamics keeps them as its exact classical limit. Newton's laws got amended; Maxwell's got vindicated.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Maxwell's own 1865 formulation sprawled over twenty equations in twenty variables. The compact four-equation form is Oliver Heaviside's 1884 distillation — a self-taught telegraph engineer who also invented the vector notation you are using. "Maxwell's equations" are really Maxwell's physics in Heaviside's handwriting.</p>
</div>`,
        },
        {
          id: "the-wave-solution",
          title: "The Wave Solution and the Speed of Light",
          content: `
<p>Now perform the most consequential calculation of the 19th century. Go to empty space — no charges, no currents. Gauss's laws say both fields have zero divergence; the two circulation laws become a closed feedback pair:</p>
<p style="text-align:center;">∮E·dl = −dΦ_B/dt&nbsp;&nbsp;&nbsp;&nbsp;∮B·dl = μ₀ε₀ dΦ_E/dt</p>
<p>Try a plane-wave arrangement: E pointing along y, B along z, both varying only with x and t. Apply Faraday's law to a thin rectangular loop in the x–y plane, and Ampère–Maxwell to one in the x–z plane. Each loop's circulation picks up the difference in field across dx, and shrinking the loops yields two interlocking equations:</p>
<p style="text-align:center;">∂E/∂x = −∂B/∂t&nbsp;&nbsp;&nbsp;&nbsp;−∂B/∂x = μ₀ε₀ ∂E/∂t</p>
<p>Differentiate the first with respect to x, substitute the second, and B drops out:</p>
<p style="text-align:center; font-size:1.1em;"><strong>∂²E/∂x² = μ₀ε₀ ∂²E/∂t²</strong></p>
<p>This is <em>the wave equation</em> — the same equation as a wave on a string — and it announces its propagation speed in its coefficient: v = 1/√(μ₀ε₀). Now put in the numbers, both measured in tabletop experiments with charges, coils, and capacitors — nothing optical anywhere:</p>
<p style="text-align:center; font-size:1.1em;">v = 1/√(4π × 10⁻⁷ × 8.85 × 10⁻¹²) ≈ <strong>2.998 × 10⁸ m/s</strong></p>
<p>The measured speed of light. Maxwell, 1865: "we can scarcely avoid the inference that <strong>light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena</strong>." Optics — a separate science for two millennia — collapsed into electromagnetism in one line of algebra.</p>
<div class="key-concept">
  <h4>Anatomy of the wave</h4>
  <p>The solutions E = E₀sin(kx − ωt), B = B₀sin(kx − ωt) travel at c with E ⊥ B ⊥ the direction of motion — a <strong>transverse</strong> wave — with the fields locked in phase and in fixed ratio <strong>E = cB</strong>. Each field's change regenerates the other, Faraday and Maxwell terms handing energy forward forever: light is the two inductions chasing each other through vacuum, no medium required.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Since 1983 the logic runs backwards: c is <em>defined</em> as exactly 299,792,458 m/s, and the meter is whatever distance light covers in 1/299,792,458 s. Maxwell's inference is now the foundation of the ruler.</p>
</div>`,
        },
        {
          id: "em-spectrum-revisited",
          title: "The Electromagnetic Spectrum Revisited",
          content: `
<p>The wave equation places no restriction on frequency: any f will do, with wavelength λ = c/f. What we call "light" is one octave of an unbounded keyboard — and every key is the same physics, oscillating E and B at c, differing only in how fast they wiggle.</p>
<table>
  <thead>
    <tr><th>Band</th><th>Wavelength</th><th>Typical source / use</th></tr>
  </thead>
  <tbody>
    <tr><td>Radio</td><td>&gt; 30 cm</td><td>Antennas; broadcast, Wi-Fi, radar astronomy</td></tr>
    <tr><td>Microwave</td><td>30 cm – 1 mm</td><td>Ovens, radar, the cosmic microwave background</td></tr>
    <tr><td>Infrared</td><td>1 mm – 700 nm</td><td>Warm objects; thermal imaging, remote controls</td></tr>
    <tr><td>Visible</td><td>700 – 400 nm</td><td>The Sun's peak output; your retina's window</td></tr>
    <tr><td>Ultraviolet</td><td>400 – 10 nm</td><td>Hotter stars; sunburn, sterilization</td></tr>
    <tr><td>X-rays</td><td>10 nm – 10 pm</td><td>Decelerated electrons; imaging through matter</td></tr>
    <tr><td>Gamma rays</td><td>&lt; 10 pm</td><td>Nuclear transitions, astrophysical cataclysms</td></tr>
  </tbody>
</table>
<p>In 1865 all of this was prophecy — only visible light, and infrared and ultraviolet at its borders, were known. The theory said waves of <em>any</em> frequency should exist and should be manufacturable by shaking charges at that frequency. In 1887 Heinrich Hertz built the transmitter: a spark across a gap, driving current oscillations at tens of megahertz — an RLC resonance, using capacitance and inductance you can now compute — and a receiving loop across the room sparked in sympathy. He measured the waves' speed (c), showed they reflected, refracted, and polarized exactly like light, and sealed Maxwell's case.</p>
<div class="key-concept">
  <h4>Emission and reception are the same physics</h4>
  <p>Accelerating charges radiate; radiation shakes charges. An antenna transmitting and an antenna receiving run the identical mechanism in opposite directions — as do a glowing filament and your warmed skin. Every band of the table is charges shaking, at rates from hertz to 10²⁰ Hz.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Asked about the use of his discovery, Hertz reportedly said: "It's of no use whatsoever... just an experiment that proves Maestro Maxwell was right." Within a decade Marconi was selling wireless telegraphy; within a century half of humanity carried a Hertzian transmitter in a pocket. Never trust a physicist's market forecast.</p>
</div>`,
        },
        {
          id: "poynting-vector",
          title: "The Poynting Vector: Energy on the Move",
          content: `
<p>Fields store energy — ½ε₀E² and B²/2μ₀ per cubic meter. Waves carry that energy across space. The last tool of this subject tracks the traffic: the <strong>Poynting vector</strong> (after John Henry Poynting, 1884 — the pun is a gift of history):</p>
<p style="text-align:center; font-size:1.15em;"><strong>S = (1/μ₀) E × B</strong></p>
<p>S points in the direction electromagnetic energy flows, with magnitude equal to the power crossing each square meter (W/m²). For a plane wave, E × B points along the propagation direction — energy rides with the wave, as it should — and using B = E/c, the time-averaged intensity is:</p>
<p style="text-align:center;">I = ⟨S⟩ = E₀²/2μ₀c</p>
<p><strong>Worked example — sunlight.</strong> Above the atmosphere, solar intensity is 1361 W/m². Invert the formula: E₀ = √(2μ₀cI) ≈ 1010 V/m, and B₀ = E₀/c ≈ 3.4 μT — a tenth of Earth's magnetic field, oscillating 5 × 10¹⁴ times per second. Sunburn is the cumulative work these modest fields do on your skin's electrons, 150 million kilometers from the shaking charges that launched them.</p>
<p>Now a surprise that shows S is more than wave bookkeeping. Consider a charging capacitor: between the plates E grows, and the changing flux makes rings of B (displacement current at work). Compute E × B and it points <em>radially inward through the gap's rim</em> — the field energy does not squirt through the wires; it flows in <em>sideways from the surrounding space</em>, converging on the gap it fills. Integrate S over the rim and you get exactly d/dt(½CV²). The same analysis on a current-carrying resistor sends S radially <em>inward through its side surface</em>, delivering exactly I²R. In the field picture, wires do not carry energy — they <em>guide</em> it; the energy travels in the fields around the wires.</p>
<div class="key-concept">
  <h4>Where this subject lands</h4>
  <p>Charges make fields; fields carry energy, momentum, and information across empty space at c; and matter is run by the arriving fields. From Coulomb's torsion balance to this — four flux-and-circulation laws and a cross product tracking sunlight to your skin. Electromagnetism II adds radiation in earnest and relativity's deep unification: E and B as two faces of one tensor field.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Light's momentum flux (S/c) means sunlight literally pushes: about 9 μN per square meter at Earth. Too feeble to feel — but free and inexhaustible, and spacecraft have sailed on it: Japan's IKAROS crossed to Venus under a 196 m² solar sail in 2010, tacking on the Poynting vector.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the charging-capacitor paradox, two surfaces bounded by the same Amperian loop gave different enclosed currents. How does the displacement current resolve it?",
          options: [
            "It shows the flat surface was drawn incorrectly",
            "It cancels the magnetic field in the gap",
            "It proves charge actually leaks across the capacitor gap",
            "The growing electric flux in the gap contributes ε₀·dΦ_E/dt, which exactly equals the wire current I, so every surface now reports the same total",
          ],
          correctIndex: 3,
          explanation:
            "In the gap, Φ_E = q/ε₀, so ε₀ dΦ_E/dt = dq/dt = I: the displacement current through the bulging surface matches the conduction current through the flat one. Generalized current — conduction plus displacement — flows in unbroken loops, and Ampère–Maxwell gives a surface-independent answer, as any law depending only on the boundary loop must.",
        },
        {
          question:
            "Which pair of Maxwell's equations forms the self-sustaining feedback loop that makes electromagnetic waves possible?",
          options: [
            "The two Gauss laws, for E and for B",
            "Faraday's law and the Ampère–Maxwell law — each field's change generates circulation of the other",
            "Gauss's law and Faraday's law",
            "The Lorentz force law and Ohm's law",
          ],
          correctIndex: 1,
          explanation:
            "A changing B curls E into existence (Faraday); a changing E curls B into existence (Maxwell's displacement term). Each regenerates the other one step ahead, letting the pair propagate through vacuum with no charges anywhere. The Gauss laws impose structure (transversality, no monopoles) but the two circulation laws are the engine.",
        },
        {
          question:
            "What made Maxwell's calculation of 1/√(μ₀ε₀) so revolutionary?",
          options: [
            "It was the first accurate measurement of the speed of light",
            "It proved light needed a medium, the ether, to travel through",
            "Two constants measured in laboratory experiments on charges and currents — nothing optical — combined to give the known speed of light, revealing light as an electromagnetic wave",
            "It showed that electricity travels faster than light",
          ],
          correctIndex: 2,
          explanation:
            "ε₀ comes from electrostatics (Coulomb-type measurements) and μ₀ from magnetostatics (forces between currents). That their combination 1/√(μ₀ε₀) equals c — measured astronomically and with spinning mirrors — could not be coincidence: optics is electromagnetism. Maxwell computed, not measured, the speed of light, and Hertz's 1887 waves confirmed the identification.",
        },
        {
          question:
            "In an electromagnetic plane wave in vacuum, the fields E and B are:",
          options: [
            "perpendicular to each other and to the propagation direction, in phase, with E = cB",
            "parallel to each other and perpendicular to the motion",
            "perpendicular to each other, with B lagging E by a quarter cycle",
            "aligned along the propagation direction, like a sound wave",
          ],
          correctIndex: 0,
          explanation:
            "The wave is transverse: E, B, and the travel direction form a mutually perpendicular right-handed set, with E × B pointing along the motion. The fields peak together (in phase) and keep the fixed ratio E = cB, which makes their energy densities ½ε₀E² and B²/2μ₀ exactly equal — the wave carries its energy split fifty-fifty.",
        },
        {
          question:
            "The Poynting vector analysis of a current-carrying resistor shows S pointing radially inward through the resistor's side surface. What is the startling implication?",
          options: [
            "Resistors radiate their heat as light",
            "The analysis must be wrong, since energy flows along the wires",
            "Energy flows from the resistor back to the battery",
            "The dissipated energy arrives through the electromagnetic field surrounding the circuit — the wires guide the energy but do not carry it internally",
          ],
          correctIndex: 3,
          explanation:
            "Integrating S = (E × B)/μ₀ over the resistor's surface delivers exactly I²R — flowing in from the surrounding field, not down the wire's interior. In the field picture the battery fills space with E and B, and energy streams through that space to wherever work is done. Strange but consistent: the same S explains sunlight delivering power across 150 million km of vacuum with no wires at all.",
        },
      ],
    },
  ],
};
