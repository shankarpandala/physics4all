export const subject27 = {
  id: "quantum-mechanics-2",
  number: 27,
  title: "Quantum Mechanics II",
  description:
    "The Shankar/Sakurai-level second pass: symmetries, perturbation theory, scattering, entanglement and Bell's theorem, and Feynman's path integrals.",
  phase: 5,
  chapters: [
    {
      id: "formalism-deepened",
      title: "Formalism Deepened",
      subtitle: "Pictures, symmetries, and the generators of transformations",
      sections: [
        {
          id: "two-pictures",
          title: "Two Pictures of Time Evolution",
          content: `
<p>Quantum Mechanics I told the story one way: the state |ψ(t)⟩ evolves under the Schrödinger equation while operators like x and p sit still. Write the evolution as a single operator and the structure becomes visible: |ψ(t)⟩ = U(t)|ψ(0)⟩, where U(t) = e<sup>−iHt/ħ</sup> for a time-independent Hamiltonian. U is <strong>unitary</strong> — U<sup>†</sup>U = 1 — which is exactly the statement that total probability stays 1 forever.</p>
<p>But every measurable number in the theory has the form ⟨ψ(t)|A|ψ(t)⟩ = ⟨ψ(0)|U<sup>†</sup>AU|ψ(0)⟩. Nothing stops us from regrouping: define A<sub>H</sub>(t) = U<sup>†</sup>(t) A U(t) and declare that the <em>operators</em> carry the time dependence while the state stays frozen at |ψ(0)⟩. That is the <strong>Heisenberg picture</strong>; the original is the <strong>Schrödinger picture</strong>. Same physics, different camera: either the scenery moves past a fixed observer, or the observer pans across fixed scenery.</p>
<p>Differentiating A<sub>H</sub>(t) gives the engine of the Heisenberg picture:</p>
<p style="text-align:center;">dA<sub>H</sub>/dt = (i/ħ)[H, A<sub>H</sub>]</p>
<div class="key-concept">
  <h4>Commutators run the show</h4>
  <p>An operator that commutes with H does not evolve at all — it is a <strong>constant of the motion</strong>. Conservation laws in quantum mechanics are commutation statements, a fact the rest of this chapter turns into a machine.</p>
</div>
<p>For the harmonic oscillator the Heisenberg equations read dx/dt = p/m and dp/dt = −mω²x — literally Newton's equations, now obeyed by operators. Take expectation values and you get <strong>Ehrenfest's theorem</strong>: quantum averages follow classical trajectories whenever the force varies slowly across the wavepacket. The classical world is the Heisenberg picture with the operator hats worn loosely.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>History ran opposite to most textbooks: Heisenberg's 1925 matrix mechanics <em>was</em> the Heisenberg picture, with arrays of time-dependent transition quantities and no wavefunction anywhere. Schrödinger's wave equation arrived months later, and Dirac then showed the two formalisms were one theory viewed from two frames. A third, radically different view — Feynman's — waits in the final chapter.</p>
</div>`,
        },
        {
          id: "symmetries-unitary",
          title: "Symmetry Means Unitary",
          content: `
<p>What is a symmetry, quantum mechanically? An operation — rotate the apparatus, shift it, wait, reflect it — that leaves all <em>physical predictions</em> unchanged. Predictions are probabilities |⟨φ|ψ⟩|², so a symmetry must preserve the magnitudes of all inner products. Wigner proved that any such operation is represented by an operator that is either <strong>unitary</strong> or (for time reversal only) antiunitary. Symmetries and unitary operators are two names for one idea.</p>
<p>Continuous symmetries come in families you can dial: translate by any distance a, rotate by any angle θ. Near the identity, any such family looks like</p>
<p style="text-align:center;">U(ε) ≈ 1 − (i/ħ) ε G</p>
<p>where G is a Hermitian operator called the <strong>generator</strong>. Unitarity of U is equivalent to Hermiticity of G — so every continuous symmetry automatically supplies a candidate <em>observable</em>. Finite transformations come from compounding infinitesimal ones: U = e<sup>−iaG/ħ</sup>.</p>
<p>Now connect to dynamics. If the transformation leaves the physics invariant, U commutes with H, and therefore so does its generator: [G, H] = 0. By the Heisenberg equation of motion, G is conserved.</p>
<div class="key-concept">
  <h4>Noether's theorem, quantum edition</h4>
  <p>Every continuous symmetry of H yields a conserved Hermitian observable — its generator. Translation invariance conserves momentum, rotation invariance conserves angular momentum, time-translation invariance conserves energy. In quantum mechanics the proof is one line of commutator algebra, arguably cleaner than the classical version from Subject 24.</p>
</div>
<p>Symmetry does more than conserve — it <strong>degenerates</strong>. If [U, H] = 0 and |E⟩ is an energy eigenstate, then U|E⟩ has the same energy. Unless U|E⟩ is merely a phase times |E⟩, the level is degenerate, and the degenerate states form a multiplet that the symmetry shuffles among itself. The (2l+1)-fold degeneracy of hydrogen's m levels is rotation symmetry made visible; break the symmetry with a magnetic field and the multiplet splits — the Zeeman effect of the next chapter.</p>
<p>Discrete symmetries fit too: parity P (x → −x) is unitary and Hermitian at once, with eigenvalues ±1. When [P, H] = 0, eigenstates can be labeled even or odd — a label that will silently power selection rules in Chapter 4.</p>`,
        },
        {
          id: "translation-generator",
          title: "Momentum Generates Translations",
          content: `
<p>Quantum Mechanics I <em>postulated</em> p = −iħ d/dx. Now we can see where that comes from — it is not an assumption about momentum but a fact about geometry.</p>
<p>Define the translation operator T(a) by its action on position eigenstates: T(a)|x⟩ = |x + a⟩. Acting on a wavefunction, this shifts the profile bodily to the right: the new wavefunction is ψ(x − a). Now take an infinitesimal translation and Taylor-expand:</p>
<p style="text-align:center;">ψ(x − ε) ≈ ψ(x) − ε dψ/dx = [1 − (i/ħ) ε (−iħ d/dx)] ψ(x)</p>
<p>Compare with the generator template U(ε) ≈ 1 − (i/ħ)εG from the last section: the generator of translations is precisely the operator −iħ d/dx. If we <em>define</em> momentum as the generator of translations — the honest quantum transplant of its classical meaning — then the famous differential operator is forced on us. Finite translations exponentiate: T(a) = e<sup>−iap/ħ</sup>, which is just Taylor's theorem dressed as an operator identity.</p>
<p>The canonical commutation relation also stops being a postulate. Translating then measuring position must differ from measuring then translating by exactly a, and unpacking that statement for small a yields</p>
<p style="text-align:center;">[x, p] = iħ</p>
<div class="key-concept">
  <h4>The logic has reversed</h4>
  <p>In QM I: postulate p = −iħ d/dx, discover [x, p] = iħ. In QM II: define p as the translation generator; both the operator form and the commutator follow from what translation <em>means</em>. Structure first, formulas second — the Shankar/Sakurai habit of mind.</p>
</div>
<p>The payoff for dynamics: if the Hamiltonian is unchanged by every translation — no external potential picking out a special place — then [p, H] = 0 and momentum is conserved. Momentum conservation is homogeneity of space, now as a theorem. And when V(x) does vary, [p, H] = iħ dV/dx gives dp/dt = −⟨dV/dx⟩: force is the failure of translation symmetry.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The same template runs everywhere in physics: in crystals, discrete translation symmetry yields conserved <em>crystal momentum</em> and Bloch's theorem (Subject 30); in field theory, translation symmetry of the vacuum underlies momentum conservation in every particle collision ever recorded.</p>
</div>`,
        },
        {
          id: "rotations-angular-momentum",
          title: "Rotations, Spin & the Shape of the Rotation Group",
          content: `
<p>Run the translation playbook for rotations and something richer happens. A rotation by angle θ about axis n̂ is represented by</p>
<p style="text-align:center;">R(n̂, θ) = e<sup>−iθ n̂·J/ħ</sup></p>
<p>with the angular momentum operators J as generators. But rotations, unlike translations, <strong>do not commute</strong>: rotate a book 90° about x then 90° about y, and you get a different orientation than in the reverse order. Carefully compounding infinitesimal rotations turns that stubborn geometric fact into an algebraic one:</p>
<p style="text-align:center;">[J<sub>x</sub>, J<sub>y</sub>] = iħJ<sub>z</sub> (and cyclic)</p>
<p>This is the punchline of the chapter. The entire angular momentum theory of QM I — ladder operators, eigenvalues j(j+1)ħ², the allowed values j = 0, ½, 1, 3/2, … — was derived from these commutators alone. So all of it was secretly <strong>representation theory of the rotation group</strong>: a catalog of every way a quantum system can respond to being turned.</p>
<div class="key-concept">
  <h4>Where spin comes from</h4>
  <p>Half-integer j never fit orbital motion — ψ must be single-valued, forcing integer l. But the rotation group's algebra allows double-valued representations, in which a 360° rotation multiplies the state by −1 and only 720° returns it home. Electrons occupy exactly such a representation. Spin isn't a spinning ball; it is a system exploiting a mathematical option that space itself offers. Neutron interferometers have measured the 360° sign flip directly.</p>
</div>
<p>Rotational invariance now delivers its conservation law: for any central potential, [J, H] = 0, angular momentum is conserved, and energy levels come in (2j+1)-fold degenerate multiplets — the m-degeneracy of hydrogen, explained rather than observed.</p>
<p>One symmetry remains: time itself. Waiting is a transformation, U(t) = e<sup>−iHt/ħ</sup>, and its generator is H. The Schrödinger equation is not an extra law of nature bolted onto the formalism — it is the statement that <em>the Hamiltonian generates time translation</em>. Energy conservation is the uniformity of time. The table is complete: space → momentum, angle → angular momentum, time → energy. With generators understood, we can start perturbing them.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "In the Heisenberg picture of quantum mechanics, which of the following carries the time dependence?",
          options: [
            "The state vector, exactly as in the Schrödinger picture",
            "The operators, evolving as A(t) = U†AU, while the state stays fixed",
            "Both the state and the operators evolve together",
            "Neither — time dependence appears only at measurement",
          ],
          correctIndex: 1,
          explanation:
            "Every prediction has the form ⟨ψ(t)|A|ψ(t)⟩ = ⟨ψ(0)|U†AU|ψ(0)⟩, so the evolution operator U can be grouped with the state (Schrödinger) or with the operator (Heisenberg). In the Heisenberg picture operators obey dA/dt = (i/ħ)[H, A] while the state is frozen. The two pictures are unitarily equivalent — same physics, different bookkeeping.",
        },
        {
          question:
            "Why must symmetry operations in quantum mechanics be represented by unitary (or antiunitary) operators?",
          options: [
            "Because only unitary operators are Hermitian",
            "Because symmetries must commute with every observable",
            "Because unitary operators make the Hamiltonian diagonal",
            "Because a symmetry must preserve all transition probabilities |⟨φ|ψ⟩|², and Wigner showed only unitary or antiunitary maps do that",
          ],
          correctIndex: 3,
          explanation:
            "Physical predictions are probabilities |⟨φ|ψ⟩|². An operation that leaves physics unchanged must preserve all of these, and Wigner's theorem says any such map is unitary or (only for time reversal) antiunitary. Unitary operators need not be Hermitian, and symmetries certainly don't commute with every observable — rotations don't commute with x.",
        },
        {
          question:
            "An observable G generates a continuous transformation that leaves the Hamiltonian invariant, so [G, H] = 0. What follows?",
          options: [
            "G is conserved: its expectation value and probability distribution never change",
            "G must be zero in every stationary state",
            "The system cannot be degenerate",
            "G and H share no eigenstates",
          ],
          correctIndex: 0,
          explanation:
            "The Heisenberg equation dG/dt = (i/ħ)[H, G] vanishes when G commutes with H, so G is a constant of the motion — the quantum Noether theorem. Far from preventing degeneracy, symmetry is the chief cause of it: applying the symmetry to an eigenstate yields another state of the same energy, building degenerate multiplets.",
        },
        {
          question:
            "The relation [Jx, Jy] = iħJz is best understood as a direct consequence of:",
          options: [
            "the uncertainty principle applied to angular variables",
            "the wave nature of the electron",
            "the geometric fact that finite rotations about different axes do not commute",
            "the experimental discovery of spin",
          ],
          correctIndex: 2,
          explanation:
            "Compounding infinitesimal rotations in the order x-then-y versus y-then-x leaves a leftover rotation about z — a property of ordinary 3D geometry you can verify with a book. Translating that into the generators forces [Jx, Jy] = iħJz. Everything else — ladder operators, j(j+1), even the existence of half-integer spin — flows from this algebra, not the other way around.",
        },
        {
          question:
            "Why can spin take the half-integer value j = ½ when orbital angular momentum cannot have l = ½?",
          options: [
            "Because spin angular momentum is much smaller than orbital angular momentum",
            "Orbital l must be an integer for the wavefunction ψ(θ, φ) to be single-valued, but spin uses a double-valued representation of the rotation group where a 360° turn flips the state's sign",
            "Because the electron is a point particle and cannot rotate",
            "Half-integer orbital angular momentum exists but has never been measured",
          ],
          correctIndex: 1,
          explanation:
            "A wavefunction on real space must return to itself after a 2π rotation, forcing integer l. But the rotation group's commutation algebra also admits representations in which 2π produces a factor of −1 and only 4π returns the state — no spatial wavefunction is involved, so no contradiction. Electrons live in exactly this j = ½ representation, and neutron interferometry has observed the 2π sign flip.",
        },
      ],
    },
    {
      id: "time-independent-perturbation",
      title: "Time-Independent Perturbation Theory",
      subtitle: "Systematic approximation — fine structure, Zeeman, and Stark",
      sections: [
        {
          id: "nondegenerate-machinery",
          title: "The Machinery: Nondegenerate Perturbation Theory",
          content: `
<p>Almost no Hamiltonian is exactly solvable. The hydrogen atom, the harmonic oscillator, the square well — that is nearly the whole exact catalog. Perturbation theory is how quantum mechanics earns its living: split the problem as H = H⁰ + λH′, where H⁰ is solvable with known states |n⁰⟩ and energies E<sub>n</sub>⁰, and λH′ is small. Then expand both energies and states in powers of λ and match order by order.</p>
<p>The results, assuming no degeneracy, are two of the most-used formulas in physics:</p>
<p style="text-align:center;"><strong>E<sub>n</sub>¹ = ⟨n⁰|H′|n⁰⟩</strong></p>
<p style="text-align:center;">E<sub>n</sub>² = Σ<sub>m≠n</sub> |⟨m⁰|H′|n⁰⟩|² / (E<sub>n</sub>⁰ − E<sub>m</sub>⁰)</p>
<p>The first-order shift is simply the <strong>average of the perturbation in the unperturbed state</strong> — no recalculation of the state needed. At second order, the state itself adjusts: |n⟩ picks up admixtures of other unperturbed states, each weighted by its coupling ⟨m⁰|H′|n⁰⟩ and penalized by its energy distance. Physicists read the sum as <em>virtual transitions</em>: the state briefly borrows character from its neighbors.</p>
<div class="key-concept">
  <h4>Level repulsion</h4>
  <p>Look at the sign of the second-order term: states below n push its energy up, states above push it down — connected levels repel. Two consequences to remember: the ground state, with nothing below it, is always pushed <em>down</em> at second order; and nearly degenerate levels shove each other hard, a warning that the formula's denominators are about to cause trouble.</p>
</div>
<p>When does the expansion make sense? The mixing coefficients ⟨m⁰|H′|n⁰⟩/(E<sub>n</sub>⁰ − E<sub>m</sub>⁰) must be small: the perturbation's matrix elements must be small <em>compared to the level spacings</em>, not small in any absolute sense. A "weak" field acting on closely spaced levels can be a strong perturbation.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The technique predates quantum mechanics by two centuries: astronomers computed planetary orbits as Kepler ellipses plus small corrections from planet–planet tugs. That machinery, transplanted by Schrödinger in 1926, is why the corrections here are still called by the astronomer's word — perturbations.</p>
</div>`,
        },
        {
          id: "anharmonic-oscillator",
          title: "Worked Example: The Anharmonic Oscillator",
          content: `
<p>Real bonds are not perfect springs. Stretch a molecule and its potential is a harmonic well plus corrections — say a quartic stiffening term. Take</p>
<p style="text-align:center;">H = p²/2m + ½mω²x² + βx⁴</p>
<p>and compute the first-order shift E<sub>n</sub>¹ = β⟨n|x⁴|n⟩. Doing this integral with Hermite polynomials is misery. With ladder operators it is bookkeeping: write x = √(ħ/2mω)(a + a<sup>†</sup>), expand (a + a<sup>†</sup>)⁴, and keep only the terms with equal numbers of raisings and lowerings — the only ones whose expectation value in |n⟩ survives. Six terms survive, and collecting them gives</p>
<p style="text-align:center;">⟨n|x⁴|n⟩ = (ħ/2mω)² (6n² + 6n + 3)</p>
<p style="text-align:center;"><strong>E<sub>n</sub> ≈ (n + ½)ħω + 3β(ħ/2mω)²(2n² + 2n + 1)</strong></p>
<p>Read the physics off the formula. The shift grows like n², so the levels are no longer evenly spaced — the spectrum fans out as you climb. Real molecular spectra show exactly this: vibrational overtone lines drift away from equal spacing, and the drift measures the anharmonicity β. (For a softening cubic term βx³, the story differs instructively: x³ is odd, oscillator states have definite parity, so the first-order shift vanishes identically and the leading effect is a second-order <em>lowering</em> of every level.)</p>
<div class="key-concept">
  <h4>The ladder-operator reflex</h4>
  <p>Any matrix element of powers of x and p between oscillator states is a finite exercise in [a, a†] = 1 — no integrals, ever. This reflex carries through quantum optics, phonons, and quantum field theory, where <em>everything</em> is oscillators.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Push this example to higher orders and a scandal emerges: Bender and Wu showed in 1969 that the series for the quartic oscillator has <em>zero radius of convergence</em> — for any β it eventually diverges. It is an asymptotic series: the first several terms give superb accuracy, then adding more makes things worse. Most perturbation series in physics, including the spectacularly precise ones of QED, are of exactly this kind.</p>
</div>`,
        },
        {
          id: "degenerate-theory",
          title: "When Levels Collide: Degenerate Perturbation Theory",
          content: `
<p>The second-order formula divides by E<sub>n</sub>⁰ − E<sub>m</sub>⁰. If two unperturbed states share an energy, the machinery detonates — division by zero. The failure is telling us something physical: the formulas assumed the perturbation nudges each state slightly, but within a degenerate multiplet H′ can <em>mix states completely</em> at zero energy cost. We were expanding around the wrong starting states.</p>
<p>The repair: <strong>diagonalize H′ within the degenerate subspace first</strong>. For a 2-fold degenerate level with states |1⟩ and |2⟩, build the 2×2 matrix W<sub>ij</sub> = ⟨i|H′|j⟩ and find its eigenvalues. In the cleanest case, where the diagonal elements vanish and the off-diagonal coupling is W₁₂:</p>
<p style="text-align:center;">E<sup>±</sup> = E⁰ ± |W₁₂|,&nbsp;&nbsp;with eigenstates (|1⟩ ± |2⟩)/√2</p>
<p>The degeneracy splits symmetrically, and the correct zeroth-order states — the <strong>good states</strong> — are the fifty-fifty superpositions selected by the perturbation itself. Perturbation theory then proceeds normally from these.</p>
<p>Hydrogen's n = 2 level makes this concrete. The 2s and 2p<sub>m=0</sub> states are degenerate, and a uniform electric field ℰ (perturbation eℰz) couples them with matrix element −3ea₀ℰ. Diagonalizing gives shifts of ±3ea₀ℰ: the famous <strong>linear Stark effect</strong>, with good states (|2s⟩ ∓ |2p₀⟩)/√2 — lopsided charge distributions with permanent electric dipole moments, something no nondegenerate atomic state can have.</p>
<div class="key-concept">
  <h4>Symmetry finds the good states</h4>
  <p>In practice you rarely diagonalize blindly. Find an operator that commutes with both H⁰ and H′ — for the Stark effect, L<sub>z</sub> and parity-related combinations — and its eigenstates automatically make W diagonal. Choosing quantum numbers wisely is degenerate perturbation theory done before breakfast.</p>
</div>
<p>Keep the 2×2 pattern in mind: two coupled levels repelling and mixing is the hydrogen molecule's bond, ammonia's maser transition, and neutrino oscillations. It may be the single most reused calculation in quantum physics — and everything in the rest of this chapter runs on the machinery now assembled.</p>`,
        },
        {
          id: "fine-structure",
          title: "Fine Structure: Hydrogen Under the Microscope",
          content: `
<p>The Bohr energies E<sub>n</sub> = −13.6 eV/n² are not the end of hydrogen's story. Look closely at the spectral lines and each is a cluster of finer lines: the <strong>fine structure</strong>, a relativistic correction smaller by a factor of α² ≈ (1/137)² ≈ 5 × 10⁻⁵, where α = e²/4πε₀ħc is the <strong>fine-structure constant</strong>. Three physically distinct effects conspire, all the same size, all handled by first-order perturbation theory.</p>
<ul>
  <li><strong>Relativistic kinetic energy.</strong> Expanding the true kinetic energy gives a correction −p⁴/8m³c² — the electron moves at v/c ≈ α, fast enough for relativity to shave the energies.</li>
  <li><strong>Spin–orbit coupling.</strong> In the electron's rest frame the proton circles it, producing a magnetic field that couples to the electron's spin: H′ ∝ L·S. States are best labeled by total angular momentum j; writing L·S = ½(J² − L² − S²) makes the matrix elements trivial in the coupled basis — degenerate perturbation theory via smart quantum numbers.</li>
  <li><strong>Darwin term.</strong> A contact term acting only on l = 0 states, from the electron's position being smeared over a Compton wavelength.</li>
</ul>
<p>Adding the three produces a small miracle of cancellation — the result depends only on n and j:</p>
<p style="text-align:center;"><strong>E<sub>nj</sub> = E<sub>n</sub> [1 + (α²/n²)(n/(j+½) − ¾)]</strong></p>
<p>Every level drops slightly, and levels of the same n split by j: 2p<sub>3/2</sub> now sits above 2p<sub>1/2</sub>, while 2s<sub>1/2</sub> and 2p<sub>1/2</sub> remain exactly degenerate. The Hα line resolves into a close doublet, spacing ≈ 4.5 × 10⁻⁵ eV — measured to this precision in the 1880s, decades before anyone could explain it.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>That leftover 2s½–2p½ degeneracy became one of physics' most consequential measurements. In 1947 Lamb and Retherford found the levels are <em>not</em> quite degenerate — split by about 1057 MHz, the <strong>Lamb shift</strong>, caused by the electron's interaction with the fluctuating quantum vacuum. Explaining it launched modern quantum electrodynamics within the year. Subject 31 picks up that story.</p>
</div>`,
        },
        {
          id: "zeeman-stark",
          title: "Atoms in Fields: Zeeman & Stark Effects",
          content: `
<p>Put an atom in an external field and its degenerate multiplets split — turning spectral lines into multiplets whose spacing measures the field. Perturbation theory owns this territory.</p>
<p><strong>Zeeman effect (magnetic field B).</strong> The perturbation is H′ = (μ<sub>B</sub>/ħ)(L + 2S)·B — note the electron's g ≈ 2 doubling the spin term. In a weak field (weaker than the fine structure's internal field, roughly a tesla), j is still a good quantum number and each level splits into 2j+1 equally spaced sublevels:</p>
<p style="text-align:center;">ΔE = g<sub>J</sub> μ<sub>B</sub> B m<sub>j</sub>,&nbsp;&nbsp; g<sub>J</sub> = 1 + [j(j+1) + s(s+1) − l(l+1)] / [2j(j+1)]</p>
<p>The <strong>Landé g-factor</strong> g<sub>J</sub> measures how much of j is spin (worth double) versus orbit. Because g<sub>J</sub> differs from level to level, line patterns are rich — the historically baffling "anomalous" Zeeman effect, fully explained once spin was in hand. In strong fields (Paschen–Back regime) the field outcompetes spin–orbit coupling, L and S decouple, and the pattern simplifies — a textbook case of <em>which perturbation you treat first depends on which is bigger</em>.</p>
<p><strong>Stark effect (electric field ℰ).</strong> The perturbation is eℰz. For the nondegenerate ground state, z is odd and the state has definite parity, so the first-order shift vanishes; the leading effect is second order, ΔE = −½αℰ² with α the polarizability — the field must first <em>induce</em> a dipole, then act on it. But hydrogen's degenerate n = 2 level, as the degenerate-theory section showed, splits <em>linearly</em>, ±3ea₀ℰ: degeneracy lets the field find states with ready-made dipoles.</p>
<div class="key-concept">
  <h4>Reading fields from light</h4>
  <p>Zeeman splitting turns spectroscopy into remote magnetometry: it is how we map the Sun's sunspot fields (~0.3 T), detect magnetic white dwarfs, and measure fields in star-forming clouds. Stark broadening of lines, meanwhile, diagnoses plasma densities in stars and fusion reactors. Perturbation theory is not approximation for its own sake — it is the dictionary between spectra and environments.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In nondegenerate perturbation theory, the first-order energy shift of state |n⁰⟩ is:",
          options: [
            "the largest eigenvalue of H′",
            "Σ |⟨m⁰|H′|n⁰⟩|²/(En⁰ − Em⁰) summed over m ≠ n",
            "⟨n⁰|H′|n⁰⟩ — the expectation value of the perturbation in the unperturbed state",
            "always zero unless the state is degenerate",
          ],
          correctIndex: 2,
          explanation:
            "To first order the state hasn't adjusted yet, so the energy shift is just the perturbation averaged in the original state, ⟨n⁰|H′|n⁰⟩. The sum over other states with energy denominators is the second-order correction, where virtual admixtures of neighboring states begin to matter.",
        },
        {
          question:
            "For a harmonic oscillator perturbed by a cubic term βx³, the first-order energy shift vanishes for every level. Why?",
          options: [
            "x³ is an odd-parity operator, and oscillator eigenstates have definite parity, so ⟨n|x³|n⟩ = 0",
            "The cubic term is too small to affect the energy at any order",
            "The ladder-operator expansion of x³ contains no terms at all",
            "Because the oscillator potential is exactly solvable",
          ],
          correctIndex: 0,
          explanation:
            "Each oscillator eigenstate is either even or odd, so |ψ|² is always even, and the integral of an even function times the odd function x³ vanishes. Symmetry kills the first-order term without computation. The leading cubic effect appears at second order — which, being a sum of negative terms for the ground state, lowers the energy. The quartic term βx⁴, being even, does shift levels at first order.",
        },
        {
          question:
            "Why does naive perturbation theory fail for degenerate levels, and what is the fix?",
          options: [
            "The matrix elements of H′ become infinite; the fix is to use a weaker perturbation",
            "The unperturbed states cannot be normalized; the fix is to renormalize them",
            "Degenerate states have no definite parity; the fix is to symmetrize the Hamiltonian",
            "Energy denominators En⁰ − Em⁰ vanish; the fix is to diagonalize H′ within the degenerate subspace, which picks out the correct zeroth-order 'good' states",
          ],
          correctIndex: 3,
          explanation:
            "The formulas assume the perturbation only slightly modifies each state, but within a degenerate multiplet H′ can mix states completely at no energy cost — the vanishing denominators are the symptom. Diagonalizing the matrix Wij = ⟨i|H′|j⟩ in the degenerate subspace finds the combinations the perturbation actually selects; for hydrogen's n = 2 level in an electric field this yields the linear Stark splitting ±3ea₀ℰ.",
        },
        {
          question:
            "Hydrogen's fine structure corrections are smaller than the Bohr energies by roughly a factor of α² ≈ 5 × 10⁻⁵. What is the physical origin of this scale?",
          options: [
            "The proton's finite nuclear size",
            "Relativistic effects: the electron's speed is roughly αc, so corrections enter at order (v/c)² = α²",
            "The gravitational attraction between electron and proton",
            "Thermal motion of the atom at room temperature",
          ],
          correctIndex: 1,
          explanation:
            "In hydrogen's ground state the electron moves at v ≈ αc ≈ c/137. Relativistic corrections — the p⁴ kinetic term, spin–orbit coupling, and the Darwin term — all enter at order (v/c)², i.e. α² relative to the Bohr energies. All three combine into a result depending only on n and j. Nuclear-size and gravitational effects are far smaller still.",
        },
        {
          question:
            "The hydrogen ground state shows no first-order (linear) Stark shift in an electric field, while the n = 2 level splits linearly. What accounts for the difference?",
          options: [
            "The ground state is nondegenerate with definite parity, so ⟨eℰz⟩ = 0 and only a second-order (quadratic) shift survives; the degenerate n = 2 level can form mixed states with permanent dipole moments",
            "Electric fields cannot penetrate to the ground state because of screening",
            "The n = 2 level has more electrons to respond to the field",
            "The ground state's spherical symmetry makes it immune to all external fields",
          ],
          correctIndex: 0,
          explanation:
            "A linear Stark shift requires a permanent electric dipole, which a nondegenerate definite-parity state cannot have — the field must first polarize the atom, giving ΔE = −½αℰ² at second order. In the degenerate n = 2 manifold, the field freely mixes 2s with 2p₀ to build lopsided states with ready-made dipoles, producing shifts ±3ea₀ℰ at first order. The ground state is not immune to fields — its quadratic shift is real and measurable.",
        },
      ],
    },
    {
      id: "variational-wkb",
      title: "Variational & WKB Methods",
      subtitle: "Bounding ground states and estimating tunnelling",
      sections: [
        {
          id: "variational-principle",
          title: "The Variational Principle: Guess and Never Be Too Low",
          content: `
<p>Perturbation theory needs a solvable starting point nearby. Often there isn't one. The variational method needs almost nothing — only the ability to compute one expectation value — and rests on a theorem of disarming simplicity:</p>
<div class="key-concept">
  <h4>The variational theorem</h4>
  <p>For <em>any</em> normalized trial state |ψ⟩ whatsoever, ⟨ψ|H|ψ⟩ ≥ E₀. The proof is three lines: expand |ψ⟩ in the true eigenstates, ⟨H⟩ = Σ|c<sub>n</sub>|²E<sub>n</sub>, and since every E<sub>n</sub> ≥ E₀ and the |c<sub>n</sub>|² sum to one, the average cannot dip below the bottom. Any guess gives a rigorous <strong>upper bound</strong> on the ground-state energy.</p>
</div>
<p>That turns guessing into a strategy. Choose a family of trial wavefunctions with adjustable parameters — widths, decay lengths, effective charges — compute E(parameters) = ⟨H⟩, and minimize. The lowest value your family reaches is your best bound; the minimizing member is your approximate ground state. Build in the right qualitative physics (nodelessness, correct symmetry, sensible decay at infinity) and the results are startlingly good.</p>
<p>A calibration test: hydrogen, using a Gaussian trial ψ ∝ e<sup>−br²</sup> — deliberately the wrong shape, since the true ground state is the cusp-peaked exponential e<sup>−r/a₀</sup>. Minimizing over b gives E<sub>min</sub> = −(8/3π) Ry ≈ <strong>−11.5 eV</strong>, against the true −13.6 eV. A visibly wrong wavefunction lands within 15% of the exact energy.</p>
<p>Why so forgiving? If the trial state errs from the truth by a small amount ε, the energy errs only by order ε². First-order errors in the wavefunction cancel out of the energy — the same stationarity that underlies perturbation theory. Energies are easy; wavefunctions are hard.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The variational principle is the engine of modern quantum chemistry: Hartree–Fock, configuration interaction, and density functional theory (the subject of the 1998 Nobel Prize) are all variational schemes with ever-cleverer trial families. When a supercomputer predicts a drug molecule's binding energy, it is minimizing ⟨H⟩ — this section, industrialized.</p>
</div>`,
        },
        {
          id: "helium-ground-state",
          title: "Helium: The Variational Triumph",
          content: `
<p>Helium is the simplest atom that quantum mechanics cannot solve exactly: two electrons around a Z = 2 nucleus, with the Hamiltonian</p>
<p style="text-align:center;">H = (two hydrogen-like pieces with Z = 2) + e²/4πε₀r₁₂</p>
<p>The electron–electron repulsion 1/r₁₂ spoils separability, and no closed-form solution exists. The measured ground-state energy — the energy to remove both electrons — is <strong>−79.0 eV</strong>. Watch three approximations close in on it.</p>
<ul>
  <li><strong>Ignore the repulsion entirely.</strong> Each electron sits in a hydrogenic Z = 2 orbital with energy −Z² × 13.6 = −54.4 eV, total <strong>−108.8 eV</strong>. Off by 30 eV — the repulsion is obviously not negligible.</li>
  <li><strong>First-order perturbation theory.</strong> Treat 1/r₁₂ as the perturbation: its expectation value in the unperturbed state evaluates to (5/4)Z × 13.6/2... working the integral gives +34.0 eV, so E ≈ <strong>−74.8 eV</strong>. Better — within 5% — but the error is uncontrolled and sits on the wrong side of the truth for comfort.</li>
  <li><strong>The variational move.</strong> Keep the hydrogenic product form but let the nuclear charge be a <em>parameter</em>: each electron sees an effective charge Z<sub>eff</sub>, because the other electron partially screens the nucleus. Compute ⟨H⟩(Z<sub>eff</sub>) — every integral is elementary — and minimize. The minimum lands at Z<sub>eff</sub> = 2 − 5/16 = <strong>27/16 ≈ 1.69</strong>, giving E ≈ <strong>−77.5 eV</strong>: within 2%, with one parameter, and guaranteed to lie above the truth.</li>
</ul>
<div class="key-concept">
  <h4>The parameter means something</h4>
  <p>Z<sub>eff</sub> ≈ 1.69 is not a fudge factor — it is <strong>screening</strong>, quantified: each electron shields about 0.31 of a proton's charge from the other. The variational method found the concept on its own, and screening goes on to organize the entire periodic table in Subject 30's atomic physics.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In 1929 Hylleraas added the distance r₁₂ itself into the trial function and reached −78.7 eV with three parameters, by hand, on a mechanical calculator. Modern variational wavefunctions with thousands of terms match experiment to better than a part per billion — helium is now a precision test of QED and a tool for measuring fundamental constants.</p>
</div>`,
        },
        {
          id: "wkb-approximation",
          title: "WKB: Quantum Mechanics Goes Semiclassical",
          content: `
<p>The variational method targets ground states. The <strong>WKB approximation</strong> (Wentzel–Kramers–Brillouin) targets the opposite regime: highly excited states and barrier problems, where the de Broglie wavelength is short compared to the scale on which the potential varies — the <em>semiclassical</em> regime, where quantum mechanics shades into classical.</p>
<p>The idea: where V varies slowly, the wavefunction is locally a plane wave whose wavelength adjusts to the local classical momentum p(x) = √(2m(E − V(x))). The WKB wavefunction is</p>
<p style="text-align:center;">ψ(x) ≈ (C/√p(x)) exp(±(i/ħ)∫p(x′)dx′)</p>
<p>Both factors carry physics. The phase accumulates at the local wavenumber p/ħ — fast where the particle is classically fast. The amplitude 1/√p makes |ψ|² ∝ 1/p: the particle is most likely to be found where it moves slowly, exactly matching the classical fraction of time spent there. Quantum probability inherits classical dwell time.</p>
<p>The approximation fails precisely at the <strong>classical turning points</strong>, where p → 0 and the amplitude blows up. There the exact Schrödinger equation is locally an Airy equation, and its solutions supply <strong>connection formulas</strong> that stitch the oscillating solution inside the well to the exponentially decaying one outside. Demanding that the stitched wavefunction close consistently around the well yields the semiclassical quantization condition:</p>
<p style="text-align:center;"><strong>∮ p dx = (n + ½) h</strong></p>
<div class="key-concept">
  <h4>Counting states with phase space</h4>
  <p>Each quantum state occupies one cell of area h in classical phase space — the quantization condition says so. This single idea explains why the old Bohr–Sommerfeld rules worked (they were WKB missing the ½), gives the exact harmonic-oscillator spectrum including zero-point energy, and becomes the foundation of state-counting in statistical mechanics (Subject 28).</p>
</div>
<p>For hydrogen-like potentials WKB energies are good to a few percent at modest n and superb at large n — the regime where perturbation and variational methods are hopeless. The three approximation methods of this and the previous chapter partition the world: perturbation theory near solvable problems, variational at the bottom of the spectrum, WKB at the top. But WKB's greatest hit is what happens when E &lt; V — next section.</p>`,
        },
        {
          id: "tunnelling-rates",
          title: "Tunnelling Rates: The Exponential That Runs the World",
          content: `
<p>Inside a barrier region where V(x) &gt; E, the WKB momentum turns imaginary and the wavefunction, instead of oscillating, decays exponentially. Squaring the surviving amplitude at the far side gives the transmission probability:</p>
<p style="text-align:center;"><strong>T ≈ e<sup>−2γ</sup>,&nbsp;&nbsp; γ = (1/ħ) ∫ √(2m(V(x) − E)) dx</strong></p>
<p>with the integral running across the classically forbidden region. Wider barrier, higher barrier, heavier particle: each makes γ larger and T <em>exponentially</em> smaller. That exponential sensitivity is the signature to remember — modest changes in barrier parameters swing tunnelling rates by tens of orders of magnitude.</p>
<p><strong>Alpha decay</strong> was the first triumph (Gamow, 1928). An alpha particle rattles inside a nucleus, striking the Coulomb barrier ~10²¹ times per second, escaping with probability e<sup>−2γ</sup> per strike. Because the alpha's energy sits in the exponent, nuclei with alpha energies differing by barely a factor of two (4–9 MeV) have half-lives spanning from microseconds to far beyond the age of the universe — over 20 orders of magnitude. One formula, the Geiger–Nuttall law, captured it all and made the case that quantum mechanics governs the nucleus.</p>
<p><strong>Stars shine by tunnelling.</strong> At the Sun's core temperature, two protons' thermal energy is ~keV against a Coulomb barrier of ~MeV: classically they never touch, and classically the Sun cannot burn. Tunnelling through the barrier — helped by the Maxwell tail of Subject 12 — makes fusion proceed at exactly the sedate rate that lets stars last billions of years. We owe the Sun's patience to the smallness of e<sup>−2γ</sup>.</p>
<p><strong>The scanning tunnelling microscope</strong> inverts the exponential into a ruler. Current between tip and surface tunnels through a vacuum gap, changing by a factor of ~10 per ångström of gap. That sensitivity resolves individual atoms — Binnig and Rohrer's 1981 invention (Nobel 1986) turned this section's formula into the machine that first showed us atoms one by one.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Every time you save a file to flash memory, electrons are deliberately tunnelled through an oxide barrier onto a floating gate — and the stored bit persists because the same exponential makes the reverse leak absurdly slow. Your pocket contains a few trillion working applications of the WKB formula.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What does the variational principle guarantee about E(trial) = ⟨ψ|H|ψ⟩ for a normalized trial wavefunction?",
          options: [
            "It is always greater than or equal to the true ground-state energy, whatever the trial function",
            "It equals the ground-state energy if the trial function is normalized",
            "It is always within 10% of the true ground-state energy",
            "It is a lower bound on the ground-state energy",
          ],
          correctIndex: 0,
          explanation:
            "Expanding the trial state in the true eigenbasis gives ⟨H⟩ = Σ|cn|²En, a weighted average of energies that can never dip below the smallest one, E₀. Hence any guess yields a rigorous upper bound — never a lower one — and minimizing over a family of guesses tightens the bound. No accuracy percentage is guaranteed; that depends on how well the family can imitate the true ground state.",
        },
        {
          question:
            "The variational treatment of helium finds an optimal effective nuclear charge Z_eff = 27/16 ≈ 1.69 rather than 2. What physics does this express?",
          options: [
            "The nucleus of helium actually contains fractional charge",
            "Relativistic corrections reduce the effective charge",
            "Each electron partially screens the nucleus from the other, so each moves in an effectively reduced charge",
            "The trial wavefunction was poorly chosen and the deficit is an artifact",
          ],
          correctIndex: 2,
          explanation:
            "Minimizing ⟨H⟩ over the effective charge lets the mathematics discover screening: each electron spends time between its partner and the nucleus, cancelling about 5/16 of a proton's pull. The one-parameter result, −77.5 eV versus the measured −79.0 eV, is accurate to 2% and comes with the guarantee of being an upper bound. Screening then becomes a central organizing idea for multi-electron atoms.",
        },
        {
          question:
            "In the WKB wavefunction, the amplitude is proportional to 1/√p(x). What is the physical meaning?",
          options: [
            "The wavefunction must vanish where the particle moves fastest",
            "The probability density |ψ|² ∝ 1/p mirrors the classical result that a particle spends most time where it moves slowest",
            "It enforces normalization of the wavefunction at the turning points",
            "It makes the phase of the wavefunction real everywhere",
          ],
          correctIndex: 1,
          explanation:
            "A classical particle's dwell time in an interval is inversely proportional to its speed there — think of a pendulum lingering at the ends of its swing. The WKB amplitude reproduces exactly this: |ψ|² ∝ 1/p. The correspondence fails only near turning points where p → 0 and the amplitude diverges; there the Airy-function connection formulas take over — WKB's known weak spot, not its content.",
        },
        {
          question:
            "Alpha-decay half-lives range over more than 20 orders of magnitude while alpha-particle energies vary only from about 4 to 9 MeV. What explains this extreme sensitivity?",
          options: [
            "Different nuclei have wildly different numbers of alpha particles inside",
            "The strong nuclear force varies enormously between elements",
            "Heavier nuclei suppress alpha emission by conservation of angular momentum",
            "The energy enters the tunnelling exponent: T ≈ e^(−2γ), so modest changes in E produce astronomically large changes in the escape probability",
          ],
          correctIndex: 3,
          explanation:
            "The WKB transmission through the Coulomb barrier is exponential in γ = (1/ħ)∫√(2m(V−E))dx, and the alpha energy sets both the height above which it tunnels and where the barrier ends. Since E sits in an exponent, a factor-of-two energy change swings e^(−2γ) by tens of orders of magnitude — Gamow's 1928 explanation of the Geiger–Nuttall law, and one of the first proofs that quantum mechanics rules the nucleus.",
        },
      ],
    },
    {
      id: "time-dependent-perturbations",
      title: "Time-Dependent Perturbations",
      subtitle: "Fermi's golden rule — transitions, selection rules, and lasers",
      sections: [
        {
          id: "time-dependent-setup",
          title: "Turning On a Time-Dependent Perturbation",
          content: `
<p>Everything so far has been statics: shifted levels, corrected states. But atoms absorb light, nuclei decay, currents flow — the interesting physics is <em>transitions</em>, and for that the perturbation must depend on time: H = H⁰ + H′(t).</p>
<p>The strategy: expand the state over the unperturbed eigenstates with time-dependent coefficients,</p>
<p style="text-align:center;">|ψ(t)⟩ = Σ<sub>n</sub> c<sub>n</sub>(t) e<sup>−iE<sub>n</sub>t/ħ</sup> |n⟩</p>
<p>Without H′ the c<sub>n</sub> would be frozen — the exponentials carry all the motion. Substituting into the Schrödinger equation gives exact coupled equations for the c<sub>n</sub>; the perturbative move is to start in state |i⟩ (c<sub>i</sub> = 1) and compute the leakage into |f⟩ to first order:</p>
<p style="text-align:center;">c<sub>f</sub>(t) = −(i/ħ) ∫₀<sup>t</sup> ⟨f|H′(t′)|i⟩ e<sup>iω<sub>fi</sub>t′</sup> dt′,&nbsp;&nbsp; ω<sub>fi</sub> = (E<sub>f</sub> − E<sub>i</sub>)/ħ</p>
<p>Read it as a resonance detector: the transition amplitude is the <strong>Fourier component of the perturbation at the transition frequency</strong>. A perturbation wiggling at the wrong frequency integrates to nearly nothing; one wiggling at ω ≈ ω<sub>fi</sub> builds amplitude coherently.</p>
<p>For the all-important sinusoidal case H′(t) = V e<sup>−iωt</sup> + V<sup>†</sup>e<sup>iωt</sup> (light shining on an atom), the two terms drive different physics: the e<sup>−iωt</sup> piece resonates when E<sub>f</sub> ≈ E<sub>i</sub> + ħω (<strong>absorption</strong>), the other when E<sub>f</sub> ≈ E<sub>i</sub> − ħω (<strong>emission</strong>). Bohr's frequency condition, once a postulate, drops out of an integral.</p>
<p>The transition probability near resonance is |c<sub>f</sub>|² = (|V<sub>fi</sub>|²/ħ²) sin²(Δt/2)/(Δ/2)², with detuning Δ = ω − ω<sub>fi</sub>: a sharp central peak of height ∝ t² and width ∝ 1/t.</p>
<div class="key-concept">
  <h4>Energy–time uncertainty, live</h4>
  <p>At finite t the transition tolerates detuning ΔE ~ ħ/t — watch briefly and energy conservation is blurry; watch long and it sharpens. This is the operational meaning of ΔE·Δt ≳ ħ, and the peak's narrowing-while-growing is precisely what the next section harvests.</p>
</div>`,
        },
        {
          id: "fermis-golden-rule",
          title: "Fermi's Golden Rule",
          content: `
<p>The resonance formula has an awkward feature: probability at exact resonance grows like t², which cannot describe steady processes like radioactive decay with constant probability per second. The resolution is that real transitions almost never target one isolated final state — they feed a <strong>continuum</strong>: a photon can fly off in any direction with a near-continuum of frequencies, an ejected electron with a continuum of momenta.</p>
<p>So sum over final states, weighting by the <strong>density of states</strong> ρ(E) — the number of final states per unit energy. The derivation in outline:</p>
<ul>
  <li>Total probability = ∫ |c<sub>f</sub>(t)|² ρ(E<sub>f</sub>) dE<sub>f</sub>, with |c<sub>f</sub>|² the peaked sinc² function of the last section.</li>
  <li>As t grows the peak narrows (width ħ/t) while its height grows (t²); its <em>area</em> grows exactly linearly in t. In the long-time limit the sinc² acts as a delta function enforcing energy conservation: (2πt/ħ)δ(E<sub>f</sub> − E<sub>i</sub> − ħω).</li>
  <li>If ρ and the matrix element vary smoothly across the (ever-narrowing) peak, they come out of the integral, leaving probability = rate × t.</li>
</ul>
<p>The result is <strong>Fermi's golden rule</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>Γ<sub>i→f</sub> = (2π/ħ) |⟨f|V|i⟩|² ρ(E<sub>f</sub>)</strong></p>
<div class="key-concept">
  <h4>Two dials, every transition</h4>
  <p>Every rate in quantum physics is a coupling squared times a counting of destinations: <strong>how strongly</strong> the perturbation connects initial to final state, and <strong>how many places</strong> there are to go at the conserved energy. Suppress either dial and the transition stops — atoms in photonic cavities with no photon states at their transition frequency simply cannot decay, a striking modern confirmation.</p>
</div>
<p>The golden rule prices essentially every process in this course's remainder: atomic absorption and emission rates, beta decay spectra, electrical conductivity (electrons scattering off impurities), neutron capture, particle decay widths at the LHC. Learn to ask "what's the matrix element? what's the density of states?" and you can estimate half of physics.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The "golden rule" was derived by Dirac in 1927. The name comes from Fermi's 1950 nuclear physics lectures, where he called it "golden rule No. 2" for how often he reached for it. Fermi's own great application was his 1934 theory of beta decay — the golden rule with a brand-new force's matrix element inside.</p>
</div>`,
        },
        {
          id: "selection-rules",
          title: "Radiative Transitions & Selection Rules",
          content: `
<p>Apply the machinery to the marquee process: an atom in a light wave. Visible light's wavelength (~500 nm) dwarfs an atom (~0.1 nm), so across the atom the field is effectively uniform — the <strong>dipole approximation</strong> — and the perturbation is V = eℰ·r. Golden-rule rates are then governed by the <strong>dipole matrix element</strong> ⟨f|r|i⟩.</p>
<p>And that matrix element is very often <em>exactly zero</em>. When it vanishes, the transition is <strong>forbidden</strong> — not by energy, but by symmetry. The zeros are systematic, and Chapter 1's machinery predicts them:</p>
<ul>
  <li><strong>Parity.</strong> r is odd. Between two states of the <em>same</em> parity the integrand is odd and the integral dies. Radiative transitions must connect states of opposite parity (Laporte's rule).</li>
  <li><strong>Angular momentum.</strong> r is a vector — it transforms like l = 1. Sandwiched between states of definite l, the integral survives only if angular momenta can add up: <strong>Δl = ±1, Δm = 0, ±1</strong>. Physically, the photon carries one unit of angular momentum (spin 1), and the atom's books must balance.</li>
  <li><strong>Spin.</strong> The electric field does not touch spin: <strong>Δs = 0</strong> in light atoms.</li>
</ul>
<p>These <strong>selection rules</strong> organize every atlas of spectra: the allowed lines of hydrogen and sodium, why s → s transitions never appear, why helium behaves like two nearly separate gases (spin-singlet and triplet ladders that light cannot connect).</p>
<p>"Forbidden" means slow, not impossible. Higher multipoles and multi-photon processes proceed at rates suppressed by powers of (atom size/wavelength)² ~ 10⁻⁷. Allowed excited states live ~10 ns; hydrogen's 2s state — with no Δl = ±1 route down — survives ~0.12 s by emitting <em>two</em> photons at once.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The most important spectral line in astronomy is superbly forbidden: the 21 cm line of hydrogen, a magnetic-dipole hyperfine flip with a lifetime of ~11 million years. Only the absurd abundance of hydrogen makes it visible — and it maps our galaxy's spiral arms straight through the dust. The auroras' eerie green is another forbidden line, from oxygen atoms in air too thin to collide before the slow photon escapes.</p>
</div>`,
        },
        {
          id: "lasers",
          title: "Stimulated Emission → the Laser",
          content: `
<p>In 1917, before quantum mechanics proper existed, Einstein analyzed atoms bathed in radiation and found the bookkeeping demanded <em>three</em> processes: absorption (rate ∝ light intensity), <strong>spontaneous emission</strong> (rate A, in the dark), and a third he was forced to invent — <strong>stimulated emission</strong>: light of the transition frequency provokes an excited atom to emit, at a rate proportional to intensity, with coefficient exactly equal to absorption's. Without it, atoms in equilibrium with radiation could not reproduce the Planck spectrum. (In modern language: the golden rule's V connects the states both ways; |V<sub>fi</sub>|² = |V<sub>if</sub>|². Spontaneous emission is deeper — it is stimulated emission provoked by the vacuum's own fluctuations, a story completed by QED.)</p>
<p>The stimulated photon is a <strong>clone</strong>: same frequency, same direction, same phase as the provoking light. One photon in, two identical photons out — the elements of an amplifier. The acronym says it plainly: Light Amplification by Stimulated Emission of Radiation.</p>
<p>But there is an obstacle. Photons meeting ground-state atoms get absorbed; meeting excited atoms, they clone. Amplification needs more atoms up than down — a <strong>population inversion</strong> — and Boltzmann's distribution (Subject 12) says thermal equilibrium <em>never</em> supplies that, at any temperature. A laser must be pushed out of equilibrium:</p>
<ul>
  <li><strong>Pump</strong> atoms to a high level by flash lamp, electrical discharge, or another laser.</li>
  <li>Atoms drain fast into a long-lived <strong>metastable level</strong> — a forbidden-transition bottleneck; the previous section's "slow" states become the crucial reservoir. Inversion forms between it and a lower level (best a fourth level that empties fast).</li>
  <li>Two mirrors form a cavity; light bounces, cloning as it goes; one mirror leaks a few percent — the beam.</li>
</ul>
<div class="key-concept">
  <h4>Why laser light is special</h4>
  <p>Every photon is a phase-coherent copy of the same seed. That coherence — not raw power — is the point: it buys extreme monochromaticity, extreme collimation, and focusability. It is why lasers read data, cut steel, carry the internet through fibers, cool atoms to nanokelvins, and let LIGO measure length changes of 10⁻¹⁸ m.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Between Einstein's 1917 coefficients and the first working laser (Maiman, 1960) lay 43 years. Early on, the laser was famously dismissed as "a solution looking for a problem". The problems arrived: surgery, fiber optics, barcode scanners, atomic clocks, gravitational-wave detectors.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In first-order time-dependent perturbation theory, a transition i → f is driven most strongly by:",
          options: [
            "the average value of the perturbation over time",
            "the static part of the perturbation only",
            "any perturbation, provided it is strong enough",
            "the Fourier component of the perturbation at the transition frequency ω_fi = (E_f − E_i)/ħ",
          ],
          correctIndex: 3,
          explanation:
            "The first-order amplitude is c_f = −(i/ħ)∫⟨f|H′(t′)|i⟩e^(iω_fi t′)dt′ — literally the Fourier transform of the matrix element evaluated at ω_fi. A perturbation oscillating far from that frequency averages itself away; one on resonance builds amplitude coherently. This is why absorption requires ħω ≈ E_f − E_i: Bohr's condition emerging from the mathematics.",
        },
        {
          question:
            "Fermi's golden rule gives a constant transition rate Γ = (2π/ħ)|V_fi|²ρ(E_f). Which two factors control the rate?",
          options: [
            "The temperature of the system and the phase of the perturbation",
            "The squared coupling matrix element between the states, and the density of final states at the conserved energy",
            "The energy of the initial state and the volume of the apparatus",
            "The speed of the perturbation's switch-on and the initial state's lifetime",
          ],
          correctIndex: 1,
          explanation:
            "Every golden-rule rate is 'how strongly are the states connected' (|⟨f|V|i⟩|²) times 'how many destinations exist at the right energy' (ρ(E_f)). Kill either factor and the transition stops — an excited atom in a cavity with no photon modes at its frequency cannot decay. The linear-in-time probability arises because the sinc² resonance peak's area grows ∝ t as it narrows, turning t² peak growth into a steady rate.",
        },
        {
          question:
            "Electric-dipole transitions obey Δl = ±1. What is the physical origin of this selection rule?",
          options: [
            "The photon carries one unit of angular momentum, so the atom's orbital angular momentum must change by one to conserve the total; equivalently the vector operator r connects only states differing by one unit of l",
            "The electron's spin flips during the transition",
            "Energy conservation forbids transitions between states of equal l",
            "Transitions with Δl = 0 would violate charge conservation",
          ],
          correctIndex: 0,
          explanation:
            "The dipole operator r transforms as a vector (l = 1), so the matrix element ⟨f|r|i⟩ vanishes unless the angular momenta l_i, 1, and l_f can combine — and parity (r is odd) removes the Δl = 0 option, leaving Δl = ±1. In photon language: the emitted photon is spin-1 and carries away one ħ. Energy says which transitions are possible; symmetry says which are allowed.",
        },
        {
          question:
            "Why is a population inversion essential for laser operation, and why can't heating a gas ever produce one?",
          options: [
            "Inversion increases the energy of each photon; heating fails because photons lose energy in hot gas",
            "Inversion is needed to keep the mirrors aligned; heat warps the cavity",
            "With more atoms in the lower level, absorption outpaces stimulated emission and light is attenuated instead of amplified; the Boltzmann distribution guarantees the lower level is always more populated in equilibrium, at any temperature",
            "Inversion prevents spontaneous emission, which would otherwise destroy the beam",
          ],
          correctIndex: 2,
          explanation:
            "Absorption and stimulated emission have equal coefficients, so net gain requires more atoms upstairs than down. Thermal populations follow e^(−E/kT): higher levels are always less occupied — infinite temperature only equalizes them. So inversion is intrinsically a non-equilibrium condition, engineered by pumping into a metastable bottleneck level. Spontaneous emission still happens; it merely seeds noise rather than being prevented.",
        },
        {
          question:
            "Hydrogen's 2s state cannot decay by an ordinary allowed transition and lives about 0.12 s instead of the usual ~10 ns. Why?",
          options: [
            "The 2s state has less energy than 1s",
            "The 2s electron is shielded from electromagnetic fields by the nucleus",
            "Spontaneous emission does not occur in hydrogen",
            "The only lower state is 1s with l = 0, and a 2s → 1s dipole transition would have Δl = 0, which selection rules forbid; the state must decay by the far slower two-photon route",
          ],
          correctIndex: 3,
          explanation:
            "Dipole transitions need Δl = ±1, but from 2s (l = 0) the only downhill state, 1s, also has l = 0 — no allowed exit exists. The state is metastable and finally decays by emitting two photons simultaneously, a higher-order process about ten million times slower. Such metastable bottlenecks are not curiosities: they are precisely what laser population inversions are built on.",
        },
      ],
    },
    {
      id: "scattering-theory",
      title: "Scattering Theory",
      subtitle: "Partial waves and the Born approximation — how we probe matter",
      sections: [
        {
          id: "cross-sections",
          title: "Cross Sections: The Currency of Discovery",
          content: `
<p>How do you study something too small to see? You throw things at it and watch how they ricochet. Rutherford found the nucleus that way in 1911; the LHC found the Higgs boson the same way a century later. Scattering is not one topic among many — it is <em>the</em> experimental channel through which almost everything we know about the microworld arrived. This chapter builds its theory.</p>
<p>The setup: a uniform beam of particles with flux J (particles per area per second) hits a target; a detector at angles (θ, φ) counts what arrives in its small solid angle dΩ. The target's scattering power is quantified by the <strong>differential cross section</strong>:</p>
<p style="text-align:center;">dσ/dΩ = (particles scattered into dΩ per second) / (J dΩ)</p>
<p>Dimensionally it is an <em>area</em> per solid angle — as if each target particle held up a tiny disc of area dσ intercepting the beam and deflecting it toward your detector. Integrating over all directions gives the <strong>total cross section</strong> σ, the effective target area for scattering of any kind. Nuclear physicists measure σ in <strong>barns</strong> (10⁻²⁸ m², roughly a uranium nucleus's face — as in "couldn't miss a barn door"); particle physicists deal in picobarns and femtobarns.</p>
<p>Quantum mechanically, a scattering experiment is a stationary-state problem with peculiar boundary conditions: far from the target, the wavefunction must look like an incoming plane wave plus an outgoing spherical ripple:</p>
<p style="text-align:center;">ψ(r) → e<sup>ikz</sup> + f(θ) e<sup>ikr</sup>/r</p>
<p>All physics of the collision is compressed into the <strong>scattering amplitude</strong> f(θ), and a short flux computation connects it to what detectors measure:</p>
<p style="text-align:center; font-size:1.1em;"><strong>dσ/dΩ = |f(θ)|²</strong></p>
<div class="key-concept">
  <h4>The division of labor</h4>
  <p>Experiment measures dσ/dΩ; theory computes f(θ) from a candidate interaction. Comparing them tests the candidate. The rest of the chapter is two great methods for computing f: exactly in angular-momentum slices (partial waves), and approximately for weak potentials (Born). Cross sections are where quantum theory and laboratory reality shake hands.</p>
</div>`,
        },
        {
          id: "partial-waves",
          title: "Partial Waves and Phase Shifts",
          content: `
<p>For a central potential, angular momentum is conserved — so slice the problem by l. Decompose the incoming plane wave into spherical waves (l = 0, 1, 2, …: s, p, d…); each partial wave scatters independently. Far away, each is a superposition of an incoming and an outgoing spherical wave, and here is the key insight: since the potential can neither create nor destroy particles in the l-th channel, all it can do is <strong>delay or advance the outgoing wave</strong> — multiply it by a phase e<sup>2iδ<sub>l</sub></sup>. One real number per channel, the <strong>phase shift</strong> δ<sub>l</sub>, encodes everything. Attractive potentials pull the wave in (δ<sub>l</sub> &gt; 0); repulsive push it out.</p>
<p>Reassembling the sliced problem gives the working formulas:</p>
<p style="text-align:center;">f(θ) = (1/k) Σ<sub>l</sub> (2l+1) e<sup>iδ<sub>l</sub></sup> sin δ<sub>l</sub> P<sub>l</sub>(cos θ)</p>
<p style="text-align:center;"><strong>σ = (4π/k²) Σ<sub>l</sub> (2l+1) sin² δ<sub>l</sub></strong></p>
<p>Why this is practical: a particle with angular momentum lħ and momentum ħk passes the target at distance ~l/k. If the potential's range is a, channels with l ≳ ka never feel it and their δ<sub>l</sub> vanish. At low energy (ka ≪ 1) <strong>only the s-wave survives</strong> — one number describes the entire collision, however complicated the potential. Scattering is isotropic, and σ = 4πa<sub>s</sub>², where the <strong>scattering length</strong> a<sub>s</sub> is the single parameter (for a hard sphere, 4πa² — four times the classical geometric guess, a diffraction effect).</p>
<div class="key-concept">
  <h4>Resonances: ringing the target</h4>
  <p>When a phase shift sweeps rapidly through π/2, its channel's contribution hits the theoretical maximum — the cross section spikes. This is a <strong>resonance</strong>: the projectile briefly forms a quasi-bound state with the target before escaping. The width of the peak gives the state's lifetime via ΔE·Δt ~ ħ. Most "new particles" of the twentieth century were discovered as exactly such bumps in cross-section plots.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The <strong>optical theorem</strong>, σ = (4π/k) Im f(0), links the total cross section to the forward scattering amplitude — because the particles removed from the beam must be accounted for by interference between the unscattered wave and the forward-scattered wave. The name comes from optics: the same logic explains why a shadow forms.</p>
</div>`,
        },
        {
          id: "born-approximation",
          title: "The Born Approximation: Detectors as Fourier Analyzers",
          content: `
<p>Partial waves shine when few channels matter — low energy, short range. At high energy, hundreds of l values contribute and the method chokes. The complementary tool is the <strong>Born approximation</strong>: if the potential is weak (or the energy high), the wave scatters <em>at most once</em>, and first-order perturbation theory — the golden rule with plane-wave states in and out — delivers the amplitude directly:</p>
<p style="text-align:center;"><strong>f(θ) ≈ −(m/2πħ²) ∫ e<sup>iq·r</sup> V(r) d³r</strong></p>
<p>where ħq = ħk<sub>in</sub> − ħk<sub>out</sub> is the <strong>momentum transfer</strong>, with magnitude q = 2k sin(θ/2). Read the formula slowly, because it is one of the great sentences of physics: <em>the scattering amplitude is the Fourier transform of the potential, evaluated at the momentum transfer.</em> Every scattering detector is a Fourier analyzer. Measure dσ/dΩ across angles, invert the transform, and you reconstruct the shape of an interaction you can never see directly.</p>
<p>The reciprocity of Fourier transforms becomes strategy: small q reveals only broad features; <strong>large momentum transfer probes fine detail</strong>, at distances ~1/q. That single sentence is the business case for every accelerator ever built — finer resolution costs higher energy, with ħc ≈ 0.2 GeV·fm as the exchange rate.</p>
<p><strong>The classic worked case.</strong> For a screened Coulomb (Yukawa) potential V = (A/r)e<sup>−μr</sup>, the integral gives f ∝ 1/(q² + μ²). Let the screening fade (μ → 0) and out drops the Coulomb result:</p>
<p style="text-align:center;">dσ/dΩ ∝ 1/sin⁴(θ/2)</p>
<p>— precisely <strong>Rutherford's formula</strong>. Remarkably, the quantum Born result agrees exactly with Rutherford's classical calculation (a special grace of the 1/r potential; for anything else they differ). The strong forward peaking, with rare large-angle events, is the fingerprint of scattering from something small and hard.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Deviations from Born-level formulas carry the news. Electron–proton scattering falls below the point-charge prediction at large q: the measured ratio — the <strong>form factor</strong> — is the Fourier transform of the proton's charge distribution, and its shape told us the proton is a fuzzy ball ~0.8 fm across. The same logic at still higher q found hard grains inside: quarks.</p>
</div>`,
        },
        {
          id: "rutherford-to-lhc",
          title: "From Rutherford's Nucleus to the LHC",
          content: `
<p>The chapter's formulas are a century of discovery in disguise. Walk the timeline and watch the same logic repeat at ever-smaller scales.</p>
<ul>
  <li><strong>1909–1911: the nucleus.</strong> Geiger and Marsden fired alpha particles at gold foil; roughly 1 in 8000 bounced through more than 90°. A diffuse "plum-pudding" charge cannot produce such large momentum transfers. Rutherford fit the angular distribution to 1/sin⁴(θ/2) — point-charge scattering — and concluded the atom's positive charge sits in a speck under 10⁻¹⁴ m. The atom acquired its nucleus from a cross-section plot.</li>
  <li><strong>1920s–50s: nuclear sizes and shapes.</strong> At higher energies, alpha scattering departed from Rutherford's formula — the projectile was reaching the nuclear surface, and the departure measured nuclear radii (R ≈ 1.2 fm × A<sup>1/3</sup>). Hofstadter's electron beams then mapped nuclear and proton charge distributions via form factors (Nobel, 1961).</li>
  <li><strong>1968: quarks.</strong> SLAC scattered 20 GeV electrons off protons, deep into the inelastic regime, and found large-angle events far more common than a soft proton would allow — Rutherford's surprise, verbatim, one level down. The electrons were ricocheting off point-like constituents. Quarks, hypothesized as bookkeeping, became hardware.</li>
  <li><strong>Today: femtobarn physics.</strong> The LHC's discoveries are resonance bumps riding on smooth cross sections — the Higgs boson announced itself in 2012 as a peak at 125 GeV. Attograms of theory, femtobarns of signal, partial-wave unitarity and golden-rule rates doing daily work.</li>
</ul>
<div class="key-concept">
  <h4>One method, all the way down</h4>
  <p>Hard scattering at surprisingly large angles means small hard things inside; the momentum transfer sets the resolution; resonances mark new states. Rutherford → nucleus, Hofstadter → nuclear structure, SLAC → quarks, LHC → Higgs: four generations of physicists asking one question with bigger machines: <em>what does the cross section say?</em></p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Neutrino cross sections are so tiny (~10⁻⁴⁷ m² at MeV energies) that a light-year of lead would stop only about half of a neutrino beam. Detecting them means substituting volume for probability — cubic kilometers of Antarctic ice (IceCube) watch for the rare golden-rule event. About 100 trillion neutrinos pass through your body each second; in a lifetime, perhaps one interacts.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "The differential cross section dσ/dΩ has units of area per solid angle. What does it measure?",
          options: [
            "The physical size of the target particle",
            "The probability that the beam misses the target entirely",
            "The rate of particles scattered into a given direction, normalized by the incident flux — the effective area the target presents for deflecting particles into that solid angle",
            "The energy lost by the beam per collision",
          ],
          correctIndex: 2,
          explanation:
            "dσ/dΩ converts detector counts into a beam-independent property of the target: scattered rate into dΩ divided by incident flux and dΩ. It is only loosely related to geometric size — a hard sphere's quantum cross section at low energy is 4πa², four times its silhouette, and cross sections can dwarf or utterly undershoot geometric areas depending on the interaction. Quantum theory computes it as |f(θ)|².",
        },
        {
          question:
            "Why does low-energy scattering from a short-range potential involve only the s-wave (l = 0)?",
          options: [
            "A particle with angular momentum lħ passes at distance ~l/k from the target; when ka ≪ 1, all l ≥ 1 trajectories miss the potential entirely, so only l = 0 acquires a phase shift",
            "Higher partial waves are absorbed by the potential",
            "The s-wave has the lowest energy and energy is conserved",
            "Legendre polynomials with l ≥ 1 vanish at low energy",
          ],
          correctIndex: 0,
          explanation:
            "Angular momentum lħ at momentum ħk means an impact parameter around l/k — equivalently, the centrifugal barrier keeps l ≥ 1 waves away from the origin. If the potential's range a satisfies ka ≪ 1, only the head-on s-wave feels it. The collision is then summarized by a single number (the scattering length), and the angular distribution is isotropic — a huge simplification used everywhere from neutron physics to ultracold atoms.",
        },
        {
          question: "In the Born approximation, the scattering amplitude f(θ) is:",
          options: [
            "the Laplace transform of the wavefunction",
            "proportional to the Fourier transform of the potential, evaluated at the momentum transfer ħq",
            "equal to the classical deflection angle",
            "independent of the scattering angle",
          ],
          correctIndex: 1,
          explanation:
            "Treating the potential once, with plane waves in and out, gives f ≈ −(m/2πħ²)∫e^(iq·r)V(r)d³r — the potential's Fourier component at the momentum transfer q = 2k sin(θ/2). This is why scattering experiments are Fourier analyses of the interaction: measuring dσ/dΩ over angles reconstructs V's shape, and probing small distances requires large q — the reason accelerators keep getting bigger.",
        },
        {
          question:
            "A sharp peak appears in a cross section as the beam energy is scanned. What does it typically signify?",
          options: [
            "The detector has saturated",
            "The target has been ionized",
            "The Born approximation has broken down",
            "A resonance: a phase shift is sweeping through π/2 as projectile and target briefly form a quasi-bound state, whose lifetime is ħ divided by the peak's width",
          ],
          correctIndex: 3,
          explanation:
            "When δ_l passes through π/2, that channel's contribution reaches its unitarity maximum and σ spikes. Physically the projectile is temporarily trapped in a quasi-bound state; the energy width Γ of the bump and the state's lifetime τ satisfy τ = ħ/Γ. From compound nuclei to the J/ψ and the Higgs boson, most particle discoveries have been exactly such bumps in cross-section plots.",
        },
        {
          question:
            "What feature of the Geiger–Marsden data forced Rutherford to conclude that the atom contains a tiny massive nucleus?",
          options: [
            "All alpha particles passed straight through the gold foil",
            "A small but significant fraction of alpha particles scattered through very large angles — momentum transfers impossible from a spread-out 'plum pudding' charge, but exactly matching point-charge 1/sin⁴(θ/2) scattering",
            "The alpha particles were absorbed by the foil",
            "The scattering was the same at all angles",
          ],
          correctIndex: 1,
          explanation:
            "A charge smeared across the atom can deflect a fast alpha only slightly, even after many gentle nudges. Yet about 1 in 8000 alphas bounced back through more than 90°. Rutherford showed the full angular distribution followed the point-Coulomb form 1/sin⁴(θ/2), implying all positive charge packed into under 10⁻¹⁴ m. The identical logic — anomalously frequent hard scattering means small hard things inside — revealed quarks at SLAC in 1968.",
        },
      ],
    },
    {
      id: "entanglement-interpretation",
      title: "Entanglement & Interpretation",
      subtitle: "EPR, Bell's theorem, decoherence — and quantum information",
      sections: [
        {
          id: "entanglement-epr",
          title: "Entangled States and the EPR Argument",
          content: `
<p>Take two spin-½ particles. Some two-particle states factor neatly — |↑⟩|↓⟩ says "A is up, B is down". But the superposition principle allows states that factor into <em>no</em> product at all, such as the <strong>singlet</strong>:</p>
<p style="text-align:center;">|ψ⟩ = (|↑⟩<sub>A</sub>|↓⟩<sub>B</sub> − |↓⟩<sub>A</sub>|↑⟩<sub>B</sub>)/√2</p>
<p>Such states are <strong>entangled</strong>: the pair has a definite (total spin zero) state, while neither particle individually has any state of its own. Measure A along <em>any</em> axis and B, measured along the same axis, is instantly certain to be opposite — even with the particles separated by light-years. Schrödinger, who coined the word in 1935, called entanglement not <em>a</em> peculiarity of quantum mechanics but <em>the</em> peculiarity.</p>
<p>That same year Einstein, Podolsky and Rosen turned it into an argument — and it deserves to be stated honestly, because it is far better than the strawman version. EPR did <em>not</em> claim quantum mechanics gives wrong predictions. Their claim: it is <strong>incomplete</strong>. The argument:</p>
<ul>
  <li><strong>Criterion of reality:</strong> if you can predict a quantity's value with certainty without in any way disturbing the system, then something real must correspond to that quantity.</li>
  <li><strong>Locality:</strong> a measurement here cannot instantaneously affect facts over there.</li>
  <li>Measuring A tells you B's spin along the chosen axis with certainty, without touching B. By locality, the measurement at A didn't <em>create</em> B's value — so B's value must have existed all along. But you could have chosen any axis; so B must carry predetermined answers for <em>every</em> axis. Quantum mechanics contains no such values — hence, said EPR, it is an incomplete description, presumably awaiting completion by "hidden variables".</li>
</ul>
<div class="key-concept">
  <h4>What is genuinely at stake</h4>
  <p>EPR's logic is impeccable <em>given its premises</em>. The conclusion of hidden values follows from locality plus the reality criterion. So the real question became: is nature actually like that? For thirty years this was dismissed as philosophy — Bohr's rebuttal was famously murky, and physicists moved on. Then, in 1964, John Bell noticed the question was experimental after all.</p>
</div>`,
        },
        {
          id: "bell-inequality",
          title: "Bell's Theorem: The Numbers",
          content: `
<p>Bell's insight: any hidden-variable account of the EPR kind — where outcomes are predetermined locally — makes quantitative commitments that quantum mechanics <em>violates</em>. No philosophy required; count coincidences.</p>
<p>The cleanest version is the <strong>CHSH inequality</strong>. Alice measures her particle's spin along direction a or a′; Bob along b or b′; each outcome is ±1. Define the correlation E(a, b) = average of the product of outcomes, and form</p>
<p style="text-align:center;">S = E(a,b) − E(a,b′) + E(a′,b) + E(a′,b′)</p>
<p>If outcomes are locally predetermined, then in each run the quantity A(b + b′) + A′(b − b′) involves numbers ±1, and since b + b′ and b − b′ cannot both be nonzero... working it through, every run contributes ±2, so the average obeys</p>
<p style="text-align:center;"><strong>|S| ≤ 2 for any local hidden-variable theory.</strong></p>
<p>Quantum mechanics, for singlet pairs, predicts E(a,b) = −cos θ<sub>ab</sub>. Choose the angles a = 0°, a′ = 90°, b = 45°, b′ = 135°: each correlation has magnitude cos 45° = 0.707, and the signs conspire so all four terms add:</p>
<p style="text-align:center;"><strong>|S| = 4 × 0.707 = 2√2 ≈ 2.83 &gt; 2</strong></p>
<p>The two worldviews disagree by 41% — a fork in the road that a laboratory can test.</p>
<p>The laboratories have spoken, repeatedly: Freedman–Clauser (1972), Aspect's experiments with fast-switched analyzers (1982), and in 2015 three independent <strong>loophole-free</strong> tests (Delft, NIST, Vienna) closing the locality and detection loopholes simultaneously. All find |S| ≈ 2√2, right where quantum mechanics points. The 2022 Nobel Prize went to Clauser, Aspect, and Zeilinger for this program.</p>
<div class="key-concept">
  <h4>What died, and what didn't</h4>
  <p>Dead: <em>local</em> hidden variables — the EPR completion cannot exist. Nature's correlations are genuinely stronger than any locally predetermined story allows. Alive: relativistic causality. Bob's outcomes alone are pure coin flips whatever Alice does; the correlations appear only when the two records are <em>compared</em>, which requires ordinary slower-than-light communication. Entanglement cannot carry messages — the no-signalling theorem — so quantum mechanics is nonlocal in its correlations yet perfectly polite to special relativity.</p>
</div>`,
        },
        {
          id: "decoherence",
          title: "Decoherence: How the Classical World Emerges",
          content: `
<p>If superposition is fundamental, why have you never seen a chair in two places? The modern answer is <strong>decoherence</strong>, and its mechanism is — fittingly — entanglement itself.</p>
<p>No macroscopic object is isolated. Air molecules ricochet off it, photons scatter from it, each carrying away a record of where it was. Each collision entangles the object with its environment: a superposition (here + there) rapidly becomes a joint state in which environment states E<sub>here</sub> and E<sub>there</sub> are essentially orthogonal — the environment has, in effect, <em>measured</em> the position.</p>
<p>The consequence appears when you look at the object alone (tracing out the environment, in density-matrix language): the <strong>interference terms</strong> — the off-diagonal entries that distinguish a coherent superposition from a mere statistical mixture — are multiplied by the overlap ⟨E<sub>here</sub>|E<sub>there</sub>⟩, which crashes toward zero with every scattering event. Locally, the superposition becomes indistinguishable from a classical "either/or". The phases aren't destroyed; they are <em>dispersed</em> into a million environmental degrees of freedom, as irrecoverable as the ripples from a stone thrown in the sea.</p>
<p>The numbers are the point. For a micron-sized dust grain superposed over a distance comparable to its size, scattering of air molecules destroys coherence in roughly <strong>10⁻³¹ s</strong>; even in perfect vacuum, sunlight does it in microseconds, and the cosmic microwave background alone suffices. Position emerges as the preferred "pointer" basis because interactions are local in position — the environment monitors <em>where things are</em>. Classicality is not an extra postulate; it is what quantum mechanics looks like when the environment is watching, which is always.</p>
<div class="key-concept">
  <h4>What decoherence does and does not solve</h4>
  <p>Decoherence explains, quantitatively, why interference is unobservable for macroscopic objects, why the classical world is robust, and why building a quantum computer means fighting for isolation. What it does <em>not</em> do is select a single outcome: the global state still contains both branches. The question of why we experience one definite result — the measurement problem proper — survives decoherence, and is the next section's business.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Decoherence is watched in real time in the lab: Haroche's group tracked photon-field "Schrödinger kittens" losing coherence photon by photon in a superconducting cavity (Nobel 2012). The theory's pioneers — Zeh and Zurek — worked in obscurity for years; the subject is now central to quantum engineering.</p>
</div>`,
        },
        {
          id: "measurement-problem",
          title: "The Measurement Problem & the Interpretations",
          content: `
<p>State the difficulty plainly. Quantum mechanics contains two rules for change: the Schrödinger equation — deterministic, linear, applying whenever no one looks — and the collapse postulate — random, discontinuous, applying "upon measurement". But a measuring device is itself an assembly of atoms obeying the Schrödinger equation, and unitary evolution can never turn a superposition into a single outcome; it only entangles the apparatus with the system, superposing the pointer too. So where, physically, does the "either/or" come from — and what counts as a measurement? That is the <strong>measurement problem</strong>. Decoherence explains why the branches stop interfering; it does not say why <em>one</em> becomes actual.</p>
<p>The serious responses, honestly summarized:</p>
<ul>
  <li><strong>Copenhagen / operational:</strong> quantum states describe information for predicting outcomes, not the furniture of reality; collapse is an update, not a process. Pragmatically flawless for 100 years; critics ask what physically distinguishes the classical side of the cut.</li>
  <li><strong>Many-worlds (Everett):</strong> keep only unitary evolution; every branch happens; decoherence explains why branches never meet. Ontologically extravagant but dynamically minimal; its open wound is deriving <em>why</em> outcomes obey the Born-rule probabilities.</li>
  <li><strong>Pilot-wave (de Broglie–Bohm):</strong> particles always have definite positions, guided by ψ; measurement just reveals them. Reproduces all standard predictions, at the price of explicit nonlocality — a price Bell's theorem says <em>some</em> such theory must pay anyway.</li>
  <li><strong>Objective collapse (GRW, Penrose):</strong> modify the Schrödinger equation so superpositions self-destruct at large scales. Uniquely, this is <em>testable</em> — and experiments with massive interferometers are actively squeezing its parameter space.</li>
</ul>
<div class="key-concept">
  <h4>An honest scorecard</h4>
  <p>All of these reproduce every confirmed experiment; none commands consensus. This is not a scandal but a research frontier: Bell's theorem shows "interpretation" questions can become experiments, and collapse models are being tested right now. What no working physicist doubts is the algorithm — quantum mechanics has passed every test ever devised. The open question is what the world is like such that the algorithm works.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Polls at quantum foundations conferences routinely split several ways on interpretation, with "no preferred interpretation" scoring high — among the very physicists who use the theory flawlessly every day. Feynman's "nobody understands quantum mechanics" was about precisely this gap between mastery of the rules and consensus on their meaning.</p>
</div>`,
        },
        {
          id: "qubits-no-cloning",
          title: "Qubits, No-Cloning & Quantum Information",
          content: `
<p>The modern turn: stop treating entanglement as a paradox and start treating it as a <strong>resource</strong>. The unit of the new currency is the <strong>qubit</strong> — any two-level system (spin, photon polarization, superconducting circuit) in a state α|0⟩ + β|1⟩. One qubit holds two complex amplitudes; n qubits hold 2<sup>n</sup> — a thousand qubits span more amplitudes than there are atoms in the observable universe. The catch: measurement extracts only n classical bits. Quantum algorithms live in the gap, choreographing interference so wrong answers cancel and right ones reinforce — Shor's factoring algorithm (which breaks RSA cryptography) and Grover's search are the famous exemplars.</p>
<p>The field's foundational theorem is a prohibition. <strong>No-cloning:</strong> no device can copy an unknown quantum state. The proof is three lines of linearity: a cloner must send |0⟩|blank⟩ → |0⟩|0⟩ and |1⟩|blank⟩ → |1⟩|1⟩; by linearity a superposition input yields (|0⟩|0⟩ + |1⟩|1⟩)/√2 — an <em>entangled</em> state, not the required (α|0⟩+β|1⟩)(α|0⟩+β|1⟩) with its α² and αβ cross terms. Copying is nonlinear; quantum mechanics is linear; done.</p>
<p>Prohibitions have uses:</p>
<ul>
  <li><strong>Quantum cryptography (BB84):</strong> encode a key in nonorthogonal photon states. An eavesdropper cannot copy them and cannot measure without disturbing — interception <em>creates detectable errors</em>. Security guaranteed by physical law, running today in commercial fiber networks.</li>
  <li><strong>No faster-than-light telegraph:</strong> cloning would let entanglement signal (Bob could distinguish Alice's measurement bases by copying his particle many times and measuring the copies); no-cloning is part of why the Bell correlations stay causally polite.</li>
  <li><strong>Teleportation:</strong> you cannot copy a state, but you can <em>move</em> it — consuming one entangled pair and sending two classical bits transfers an unknown qubit exactly, destroying the original. Demonstrated over 1200 km via satellite.</li>
  <li><strong>Error correction without copying:</strong> spread one logical qubit's information across several physical qubits entangled so that errors can be caught without reading the data — the discovery that made scalable quantum computing conceivable, and today's central engineering battle against decoherence.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Wootters and Zurek's no-cloning paper (1982) was triggered by a manuscript claiming entanglement enabled superluminal signalling. The refutation became one of the most cited papers in physics — the cornerstone of a technology industry born from a paradox Einstein intended as a demolition.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What was the actual claim of the 1935 Einstein–Podolsky–Rosen paper?",
          options: [
            "That quantum mechanics makes incorrect experimental predictions about entangled pairs",
            "That quantum mechanics is incomplete: assuming locality, the perfect correlations imply predetermined values that the quantum state does not contain",
            "That entanglement would allow faster-than-light communication",
            "That measurement collapses the wavefunction physically",
          ],
          correctIndex: 1,
          explanation:
            "EPR never disputed quantum predictions. Their argument: measuring A lets you predict B's result with certainty without disturbing B; if that prediction can't have been created nonlocally, B's value must have pre-existed — for every possible measurement axis. Since ψ contains no such values, the description must be incomplete. The logic is valid given locality plus their reality criterion — which is exactly why Bell's later demonstration that those premises are experimentally false was so profound.",
        },
        {
          question:
            "In a CHSH experiment, what do local hidden-variable theories and quantum mechanics respectively predict for the maximum of |S|?",
          options: [
            "Both predict |S| ≤ 2; experiments see 4",
            "Local theories allow |S| up to 4; quantum mechanics only 2",
            "Local hidden-variable theories require |S| ≤ 2; quantum mechanics reaches 2√2 ≈ 2.83, and experiments confirm the quantum value",
            "Both predict 2√2; the difference is only philosophical",
          ],
          correctIndex: 2,
          explanation:
            "If every outcome is locally predetermined, each experimental run contributes ±2 to the CHSH combination, bounding the average: |S| ≤ 2. Singlet correlations E = −cos θ with angles 0°, 90°, 45°, 135° give four terms of magnitude 0.707 adding to 2√2 ≈ 2.83 — a 41% violation. Loophole-free experiments in 2015 measured exactly this, closing the case: no local hidden-variable completion of quantum mechanics exists.",
        },
        {
          question: "What does decoherence explain, and what does it leave unresolved?",
          options: [
            "It explains why macroscopic superpositions lose observable interference almost instantly as the environment entangles with the system — but it does not explain why one particular outcome becomes actual",
            "It explains both the loss of interference and the selection of single outcomes, resolving the measurement problem completely",
            "It explains wavefunction collapse as a physical process caused by gravity",
            "It shows that superposition never really occurs for particles larger than atoms",
          ],
          correctIndex: 0,
          explanation:
            "Environmental scattering entangles a system's position with countless external degrees of freedom, collapsing the local interference terms toward zero on absurdly short timescales (~10⁻³¹ s for a dust grain in air). That explains the classical world's robustness and why quantum computers need isolation. But the global state still contains all branches — decoherence converts 'coherent superposition' into 'effective mixture' without choosing a winner. The measurement problem survives, which is why interpretations still differ.",
        },
        {
          question: "The no-cloning theorem follows most directly from which feature of quantum mechanics?",
          options: [
            "The uncertainty principle",
            "The Pauli exclusion principle",
            "Conservation of probability",
            "The linearity of quantum evolution: a device that copies |0⟩ and |1⟩ must, by superposition, produce an entangled state rather than a copy of α|0⟩ + β|1⟩",
          ],
          correctIndex: 3,
          explanation:
            "Define a cloner on the basis states and linearity fixes its action on every superposition: the output is (|00⟩ + |11⟩)/√2, not the product state (α|0⟩+β|1⟩)⊗(α|0⟩+β|1⟩), which would need nonlinear α² terms. Copying unknown states is thus impossible in principle — underwriting quantum cryptography's security, blocking entanglement-based signalling, and forcing quantum error correction to protect information without ever duplicating it.",
        },
        {
          question:
            "Alice and Bob share many entangled singlet pairs, separated by light-years. Can Alice use her measurement choices to send Bob a message?",
          options: [
            "Yes, because her measurement instantly determines his outcomes",
            "Yes, but only if she measures faster than light could travel between them",
            "No: Bob's local outcomes are 50/50 random regardless of anything Alice does; the correlations are visible only after classically comparing both records",
            "No, because entanglement decays over large distances",
          ],
          correctIndex: 2,
          explanation:
            "Whatever axis Alice chooses — or whether she measures at all — Bob's own string of results is statistically indistinguishable from coin flips. The extraordinary correlations exist only in the joint record, which can be assembled no faster than light carries the data. This no-signalling property is why Bell nonlocality coexists peacefully with relativity: nature's correlations exceed classical limits, but they cannot be steered into a telegraph.",
        },
      ],
    },
    {
      id: "path-integrals-glimpses",
      title: "Path Integrals & Advanced Glimpses",
      subtitle: "Feynman's sum over histories, Aharonov–Bohm, and Berry phase",
      sections: [
        {
          id: "sum-over-histories",
          title: "Every Path at Once",
          content: `
<p>Start from the double slit, quantum mechanics' primal scene. The amplitude to arrive at the screen is the sum of amplitudes for the two routes. Now drill a third slit: three terms. Add another screen full of slits: sum over routes through both. Keep adding screens and drilling slits until the screens are all holes — pure empty space — and the logic delivers something astonishing: the amplitude to go from A to B is a <strong>sum over every possible path</strong> connecting them. Crooked paths, backtracking paths, paths via the Moon: all contribute.</p>
<p>Feynman's 1948 formulation makes it quantitative. Each path contributes an amplitude of <em>equal magnitude</em>; only its phase varies, and the phase is the classical <strong>action</strong> of Subject 24 — ∫(KE − PE)dt — measured in units of ħ:</p>
<p style="text-align:center; font-size:1.15em;"><strong>K(B, A) = Σ<sub>all paths</sub> e<sup>iS[path]/ħ</sup></strong></p>
<p>The sum (an integral over the infinite-dimensional space of paths, tamed by slicing time into small steps and integrating over the position at each slice) is the <strong>propagator</strong> K — the complete solution of the dynamics, since it evolves any initial wavefunction forward.</p>
<p>This is a genuinely independent formulation of quantum mechanics — after Schrödinger's waves and Heisenberg's matrices, a third. Nothing about operators, Hilbert space, or commutators appears in the postulate; yet demanding consistency over an infinitesimal time step reproduces the Schrödinger equation exactly. For the harmonic oscillator and free particle the sum can be done in closed form; for everything else it offers what the other pictures obscure — a direct bridge to classical mechanics, and computational technology (perturbation series as diagrams, lattice simulation) that powers quantum field theory.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The seed was a remark in a 1933 paper by Dirac, that the quantum amplitude for a short time step "corresponds to" e^(iS/ħ). Feynman, as a graduate student, asked what "corresponds to" meant, discovered Dirac had meant merely "is analogous to", proved it was in fact <em>proportional to</em>, and built a complete reformulation of quantum mechanics from that one upgrade. His thesis adviser Wheeler declared it beautiful; Einstein remained unconvinced.</p>
</div>`,
        },
        {
          id: "classical-limit",
          title: "Why the World Looks Classical: Stationary Phase",
          content: `
<p>A sum over <em>all</em> paths sounds like a recipe for chaos — every lunatic trajectory included with equal weight. The saving grace is interference, and it answers a question left dangling since Subject 24.</p>
<p>Consider neighboring paths. Deforming a path slightly changes its action by δS, rotating its phase by δS/ħ. Everything hinges on the size of S compared to ħ ≈ 10⁻³⁴ J·s:</p>
<ul>
  <li><strong>Macroscopic motion:</strong> for a thrown ball, S/ħ ~ 10³⁴. Adjacent paths differ by millions of radians of phase; their contributions point in scattered directions and <strong>cancel almost perfectly</strong>. The lone exception: paths near one where the action is <em>stationary</em> — δS = 0 to first order — whose neighbors all share nearly the same phase and <strong>add constructively</strong>.</li>
  <li>But δS = 0 is precisely the <strong>principle of least action</strong> — the variational condition that defines the classical trajectory!</li>
</ul>
<div class="key-concept">
  <h4>The answer to Subject 24's mystery</h4>
  <p>How does a ball "know" to follow the least-action path? It doesn't choose it — it takes <em>every</em> path, and all the others erase themselves by destructive interference. Classical mechanics is the constructive-interference skeleton of quantum mechanics. Least action, which looked teleological — as if nature scouted the options and picked the cheapest — is revealed as democracy plus interference.</p>
</div>
<p>The same criterion says when classical physics fails: for an electron in an atom, S is of order ħ itself. Neighboring paths differ by fractions of a radian, nothing cancels, and the electron genuinely explores them all — that <em>is</em> the fuzzy delocalization of atomic orbitals. The classical limit is not "small objects obey different laws"; it is the stationary-phase limit of one law, with ħ setting the exchange rate. And the fuzz width follows: paths within about δS ~ ħ of the classical one contribute coherently, giving quantum mechanics' characteristic smearing scale.</p>
<p>Every semiclassical result of this subject is this picture quantified: the WKB wavefunction e<sup>i∫p dx/ħ</sup> is the contribution of the classical path's phase; the (n + ½)h quantization rule is the demand that the phase close consistently around a loop. Approximation methods, formalism, and classical mechanics have collapsed into one story about phases.</p>`,
        },
        {
          id: "aharonov-bohm",
          title: "The Aharonov–Bohm Effect",
          content: `
<p>Path integrals frame a question that turns out to have a shocking answer. When a charged particle moves through electromagnetic potentials, its action — and hence each path's phase — acquires a term q∫A·dl involving the <strong>vector potential</strong> A. But classical physics swears that only the <em>fields</em> E and B are real; potentials are bookkeeping, adjustable by gauge transformations. Which does nature care about?</p>
<p>Aharonov and Bohm (1959) proposed the decisive test. Run a two-slit experiment with electrons, and behind the barrier place a long, thin solenoid: magnetic field <em>confined entirely inside</em> it, rigorously zero everywhere the electrons travel. Classically the solenoid can do nothing — no field ever touches an electron. Quantum mechanically, paths passing on opposite sides acquire a relative phase</p>
<p style="text-align:center;"><strong>Δφ = (q/ħ) ∮ A·dl = qΦ/ħ</strong></p>
<p>where Φ is the magnetic flux inside the solenoid (the loop integral of A equals the enclosed flux, by Stokes' theorem). Prediction: switching the solenoid's current <strong>shifts the entire interference pattern</strong> — the electrons respond to a field they never enter.</p>
<p>Experiment agrees. Definitive confirmation came from Tonomura's group (1986), using tiny toroidal magnets clad in superconductor so that no stray field could leak into the electron's path; the fringes shifted exactly as predicted.</p>
<div class="key-concept">
  <h4>What is real, then?</h4>
  <p>The phase qΦ/ħ is gauge-invariant and measurable, yet it is built from A in a region where B = 0. The honest conclusion: in quantum mechanics, the local fields are not the whole story — the physically meaningful objects are gauge-invariant <em>loop</em> quantities (holonomies) like ∮A·dl. Electromagnetism acts on quantum phases nonlocally-in-appearance but gauge-invariantly, and the effect is <strong>topological</strong>: it depends only on the flux enclosed, not on the paths' shapes or how close they pass.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The same loop-phase physics forces magnetic flux through a superconducting ring to be quantized in units of h/2e — the "2" was early evidence that superconducting electrons pair up. Flux quanta are counted routinely by SQUID magnetometers, sensitive enough to measure the magnetic fields of human brain activity.</p>
</div>`,
        },
        {
          id: "berry-phase",
          title: "Berry Phase: Geometry Takes Over",
          content: `
<p>One more phase, discovered absurdly late — 1984, by Michael Berry — and now recognized as one of quantum mechanics' organizing principles.</p>
<p>The setting is the <strong>adiabatic theorem</strong>: change a Hamiltonian's parameters slowly enough and a system in the n-th eigenstate stays in the (instantaneous) n-th eigenstate. Now steer the parameters around a closed loop, returning exactly to the starting Hamiltonian. The state comes back to itself — times a phase. Part is the expected dynamical phase e<sup>−i∫E dt/ħ</sup>, the running clock of energy. Berry's discovery: there is a leftover,</p>
<p style="text-align:center;">ψ → e<sup>iγ</sup> × (dynamical phase) × ψ</p>
<p>and the <strong>geometric phase</strong> γ depends on <em>only the path traced in parameter space</em> — not on how fast it was traversed, not on the energies along the way. Traverse the same loop in an hour or a year: same γ. It is geometry, not dynamics.</p>
<p>The cleanest example: a spin-½ in a magnetic field whose direction is slowly steered around a closed loop on the sphere of directions. The Berry phase is</p>
<p style="text-align:center;"><strong>γ = −½ Ω</strong></p>
<p>where Ω is the <strong>solid angle</strong> the loop encloses — pure geometry, with the ½ announcing spin-½ (a full equator circuit gives γ = −π: the state flips sign, the 720° strangeness of Chapter 1 resurfacing). The mathematics is a "curvature" over parameter space, making the Aharonov–Bohm effect a special case: A–B is a Berry phase whose parameter space is ordinary space, with the vector potential as the connection and flux as the curvature. Interferometry on molecules whose electronic states encircle a degeneracy confirmed the sign flip years before Berry named the general structure.</p>
<div class="key-concept">
  <h4>The glimpse forward</h4>
  <p>Berry curvature is the conceptual core of modern condensed matter: the quantum Hall effect's exactly quantized conductance is a Berry-curvature integral (a Chern number — a topological invariant immune to dirt and imperfection), and topological insulators are materials classified by such invariants. That an integer of pure geometry shows up as a resistance measurable to parts per billion is among physics' deepest surprises — and it is where Subject 30 will pick up the thread.</p>
</div>
<p>So the subject closes where its formalism began: quantum mechanics is a theory of amplitudes, and its phases — dynamical, topological, geometric — are not decorations but physics. Sum histories, watch the phases, and the classical world, gauge fields, and whole phases of matter fall out. Next stop: making the theory relativistic.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "In Feynman's path-integral formulation, how does each path from A to B contribute to the total amplitude?",
          options: [
            "With equal magnitude and a phase given by that path's classical action in units of ħ: e^(iS/ħ)",
            "With a magnitude that decreases the farther the path strays from the classical one",
            "Only paths obeying Newton's laws contribute",
            "Each path contributes its energy divided by ħ",
          ],
          correctIndex: 0,
          explanation:
            "Democracy of magnitude, aristocracy of phase: every path — however absurd — contributes one unit of amplitude, rotated by S[path]/ħ. No path is suppressed by fiat; wild paths are eliminated only later, by destructive interference with their neighbors. This single rule reproduces the Schrödinger equation exactly and generalizes seamlessly to field theory.",
        },
        {
          question:
            "Why does a macroscopic object follow the classical least-action trajectory?",
          options: [
            "Large objects are continuously measured by the environment, collapsing them onto classical paths",
            "Quantum mechanics does not apply above the atomic scale",
            "The action of the classical path is exactly zero",
            "With S/ħ ~ 10³⁴, neighboring paths differ by huge phases and cancel — except near the stationary-action path, where phases agree and contributions reinforce; δS = 0 is precisely the classical trajectory",
          ],
          correctIndex: 3,
          explanation:
            "The stationary-phase argument is the heart of the classical limit: contributions from almost all paths destructively interfere because macroscopic actions are astronomically large in units of ħ. Only the bundle of paths around the one with δS = 0 — the least-action path of classical mechanics — survives. The ball doesn't choose the optimal path; it takes all of them, and interference silences all but one. (Decoherence is real physics, but it is not what selects the least-action path.)",
        },
        {
          question:
            "In the Aharonov–Bohm experiment, electrons travel only through regions where the magnetic field B is exactly zero, yet the interference pattern shifts when the solenoid's flux changes. What does this establish?",
          options: [
            "That magnetic fields leak out of any real solenoid",
            "That quantum phases respond to the gauge-invariant loop integral of the vector potential — the enclosed flux — so local fields alone do not exhaust electromagnetism's physical content",
            "That electrons are deflected by electric forces from the solenoid's wires",
            "That energy conservation fails for quantum particles",
          ],
          correctIndex: 1,
          explanation:
            "The relative phase between paths passing on opposite sides is (q/ħ)∮A·dl = qΦ/ħ, which depends only on the enclosed flux — gauge-invariant and measurable, yet assembled entirely in a region where B = 0. Tonomura's superconductor-shielded experiment (1986) closed the field-leakage loophole. The lesson: the physically meaningful objects are loop holonomies, and the effect is topological — it cares about enclosure, not geometry of approach.",
        },
        {
          question:
            "A spin-½ particle's magnetic field direction is steered slowly around a closed loop enclosing solid angle Ω, once in one second and once in one hour. How do the geometric (Berry) phases compare?",
          options: [
            "The slower traversal accumulates a proportionally larger geometric phase",
            "The faster traversal accumulates the larger geometric phase",
            "They are identical, γ = −Ω/2, because the geometric phase depends only on the path traced in parameter space, not the traversal time",
            "Both are zero, since the system returns to its initial state",
          ],
          correctIndex: 2,
          explanation:
            "That is precisely what makes the phase geometric: unlike the dynamical phase −∫E dt/ħ, which grows with elapsed time, γ is fixed by the loop's geometry alone — for spin-½, minus half the enclosed solid angle. (Both traversals must remain slow enough for adiabaticity, but within that regime the speed is irrelevant.) This robustness against timing details is why Berry-phase physics — through quantized Hall conductance and topological materials — survives real-world imperfection so spectacularly.",
        },
      ],
    },
  ],
};
