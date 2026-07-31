export const subject26 = {
  id: "quantum-mechanics-1",
  number: 26,
  title: "Quantum Mechanics I",
  description:
    "The Griffiths-level first course: wavefunctions and the Schrödinger equation, the classic 1D problems, the Dirac formalism, the hydrogen atom, spin, and identical particles.",
  phase: 5,
  chapters: [
    {
      id: "why-quantum",
      title: "Why Quantum",
      subtitle: "The experimental failures that forced a new physics",
      sections: [
        {
          id: "blackbody-catastrophe",
          title: "Blackbody Radiation and the Ultraviolet Catastrophe",
          content: `
<p>By 1900, classical physics looked finished: Newton for matter, Maxwell for light, thermodynamics for heat. Then physicists asked an innocent-sounding question — what is the color of heat? — and the whole edifice cracked.</p>
<p>A <strong>blackbody</strong> is an idealized object that absorbs all radiation falling on it; a small hole in a hot oven is an excellent approximation. Heated matter glows, and the glow's spectrum depends only on temperature: dull red near 1000 K, white-hot near 6000 K. Classical physics could compute this spectrum. Electromagnetic standing waves fill the cavity, and the equipartition theorem (Subject 12) assigns each wave mode an average energy k<sub>B</sub>T. The result is the <strong>Rayleigh–Jeans law</strong>: radiated energy proportional to ν² — growing without bound at high frequency.</p>
<div class="key-concept">
  <h4>The ultraviolet catastrophe</h4>
  <p>Because there are infinitely many high-frequency modes, classical physics predicts every warm object should emit <em>infinite</em> energy, mostly as ultraviolet light and X-rays. Your fireplace should vaporize you. The prediction is not slightly wrong; it is absurd — and it follows rigorously from classical premises.</p>
</div>
<p>In December 1900 Max Planck found the fix, by what he later called "an act of desperation." Suppose the oscillators in the cavity walls cannot exchange energy continuously, but only in discrete lumps proportional to frequency:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E = hν</strong>,&nbsp;&nbsp; h = 6.626 × 10⁻³⁴ J·s</p>
<p>High-frequency modes now need a large first installment of energy — hν ≫ k<sub>B</sub>T — which thermal jostling can rarely afford, so those modes are frozen out (exactly the mechanism that freezes molecular vibrations in Subject 12). The resulting <strong>Planck spectrum</strong> fit the data perfectly, rolling over and dying at high frequency instead of diverging.</p>
<p>Planck himself hoped quantization was a bookkeeping trick about matter, not a truth about light. The constant h he introduced — comically tiny by everyday standards — turned out to set the scale of the entire microworld. Every equation in this subject contains it.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The most perfect blackbody spectrum ever measured is the cosmic microwave background — the 2.725 K afterglow of the Big Bang. The COBE satellite's data points fit Planck's curve so exactly that the error bars on the famous plot had to be drawn 400 times too large to be visible.</p>
</div>`,
        },
        {
          id: "photoelectric-effect",
          title: "The Photoelectric Effect: Light Arrives in Chunks",
          content: `
<p>Shine light on a clean metal surface in vacuum and electrons pop out — the <strong>photoelectric effect</strong>, discovered by Hertz in 1887. Classical wave theory makes clear predictions about it: a brighter wave carries more energy, so brighter light should eject faster electrons; and dim light of any color should eventually eject electrons, once enough wave energy has washed ashore.</p>
<p>Every prediction failed:</p>
<ul>
  <li>Electron energy depends on the light's <strong>frequency</strong>, not its brightness. Brighter light ejects <em>more</em> electrons, but not faster ones.</li>
  <li>Below a <strong>threshold frequency</strong> (specific to each metal), no electrons emerge — however intense the light, however long you wait.</li>
  <li>Above threshold, emission is <strong>instantaneous</strong>, even in light so dim that classically the energy should take minutes to accumulate.</li>
</ul>
<p>In 1905 Einstein took Planck's lumps seriously as a statement about light itself: a beam of frequency ν is a hail of particles — <strong>photons</strong> — each carrying energy hν. One photon is absorbed by one electron. If W (the <strong>work function</strong>) is the energy needed to escape the metal, the electron leaves with at most:</p>
<p style="text-align:center; font-size:1.1em;"><strong>KE<sub>max</sub> = hν − W</strong></p>
<p>Every mystery dissolves. Frequency sets the energy per photon, hence the electron energy; intensity sets only the number of photons, hence the count. Below ν = W/h a single photon cannot pay the exit fee, and electrons essentially never absorb two. And absorption of one photon is a single event — no accumulation time.</p>
<div class="key-concept">
  <h4>Wave–particle duality begins</h4>
  <p>The same light that diffracts and interferes like a wave (Subject 16) deposits its energy in discrete, localized packets like a particle. Neither picture alone is right. Holding both at once is the first mental stretch quantum mechanics demands.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Millikan spent a decade trying to disprove Einstein's photon equation and instead confirmed it to high precision, measuring h along the way. Einstein's 1921 Nobel Prize cites the photoelectric law — not relativity. Every digital camera sensor and solar panel is the photoelectric effect industrialized.</p>
</div>`,
        },
        {
          id: "atomic-spectra-bohr",
          title: "Atoms That Shouldn't Exist: Spectra and the Bohr Model",
          content: `
<p>Rutherford's 1911 scattering experiments revealed the atom as a tiny, dense, positive nucleus orbited by electrons — a miniature solar system. Classically, this atom is a disaster. An orbiting electron accelerates continuously, and Maxwell's equations (Subject 21) say accelerating charges radiate. The electron should spiral into the nucleus in about 10⁻¹¹ seconds, emitting a smear of radiation as it falls. Classical physics predicts that <strong>matter cannot exist</strong>.</p>
<p>Worse, real atoms emit light only at sharp, discrete wavelengths — a barcode-like <strong>line spectrum</strong> unique to each element. Hydrogen's visible lines follow a formula Balmer found by pure numerology in 1885, generalized by Rydberg:</p>
<p style="text-align:center;">1/λ = R (1/n₁² − 1/n₂²),&nbsp;&nbsp; R = 1.097 × 10⁷ m⁻¹</p>
<p>Whole numbers, in a formula about light from atoms. Nothing in classical physics produces integers like that.</p>
<p>In 1913 Niels Bohr grafted quantum rules onto Rutherford's atom: electrons occupy only special orbits in which angular momentum is quantized, L = nħ (where ħ = h/2π), they do not radiate while in these orbits, and light is emitted only in <strong>quantum jumps</strong> between them, the photon carrying the energy difference hν = E<sub>initial</sub> − E<sub>final</sub>. Cranking the mechanics of circular orbits with this one new rule gives the allowed energies:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E<sub>n</sub> = −13.6 eV / n²</strong></p>
<p>which reproduces Rydberg's formula exactly, predicts hydrogen's ultraviolet and infrared series before they were measured, and yields the atom's size (the Bohr radius, 0.0529 nm) from constants of nature.</p>
<div class="key-concept">
  <h4>Right answer, wrong theory</h4>
  <p>The Bohr model is a hybrid — classical orbits with quantum rules bolted on — and it fails for helium, for line intensities, for chemistry. But its core insights survive: atomic energies are discrete, and spectra are the differences. In the QM in Three Dimensions chapter we will <em>derive</em> E<sub>n</sub> = −13.6 eV/n² honestly, from the Schrödinger equation, with no orbits anywhere.</p>
</div>`,
        },
        {
          id: "matter-waves",
          title: "Matter Waves: The Electron Diffracts",
          content: `
<p>In 1924 a French doctoral student, Louis de Broglie, proposed a beautiful symmetry. Light, long thought a wave, had turned out to have particle properties. Perhaps matter, long thought particulate, has wave properties. To every particle of momentum p, associate a wavelength:</p>
<p style="text-align:center; font-size:1.15em;"><strong>λ = h/p</strong></p>
<p>One elegant consequence: Bohr's quantization rule L = nħ is exactly the condition that a whole number of electron wavelengths fit around the orbit — the allowed orbits are <em>standing waves</em>. The integers in atomic spectra are the same integers as in a guitar string's harmonics (Subject 15).</p>
<p>The test came in 1927. Davisson and Germer fired electrons at a nickel crystal and found them reflecting only at special angles — a diffraction pattern, with the crystal's atomic planes acting as the grating, at precisely the angles de Broglie's λ predicts. G. P. Thomson confirmed it by shooting electrons through thin metal foil. (He won the Nobel Prize for showing the electron is a wave; his father J. J. had won it for showing the electron is a particle. Both were right.)</p>
<p>The cleanest demonstration is the <strong>double-slit experiment with single electrons</strong>: fire them one at a time at two slits, and each lands as a single localized dot — a particle — yet the dots accumulate into interference fringes, as if each electron passed through <em>both slits as a wave</em> and interfered with itself. Watch which slit it uses and the fringes vanish. Feynman called this "the only mystery" of quantum mechanics.</p>
<div class="key-concept">
  <h4>What the four failures demand</h4>
  <p>Energy exchanged in lumps hν; light with particle behavior; atomic states discrete and stable; matter with wave behavior λ = h/p. The theory that explains all four must describe a particle by a <em>wave</em> — some quantity spread through space whose behavior yields probabilities for particle-like detections. That object is the wavefunction ψ, and finding its equation is the next chapter's business.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Matter-wave interference has now been demonstrated with molecules of over 2000 atoms. Nothing in quantum mechanics marks a size where the wave behavior must stop — a loose end the interpretation debates of Subject 27 pick up.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What exactly was the 'ultraviolet catastrophe' in classical blackbody theory?",
          options: [
            "Ultraviolet light was found to damage classical detectors",
            "Equipartition among infinitely many high-frequency cavity modes predicted infinite radiated energy from any warm object",
            "Hot objects unexpectedly emitted no ultraviolet light at all",
            "The measured spectrum contained sharp ultraviolet lines classical physics couldn't place",
          ],
          correctIndex: 1,
          explanation:
            "Classically each electromagnetic mode gets average energy k_BT, and mode count grows without limit at high frequency — so the predicted spectrum diverges in the ultraviolet. Planck's E = hν cured it: high-frequency modes need a first energy installment that thermal energy can rarely pay, freezing them out and rolling the spectrum over.",
        },
        {
          question:
            "In the photoelectric effect, doubling the intensity of the light while keeping its frequency fixed will:",
          options: [
            "double the maximum kinetic energy of the ejected electrons",
            "halve the threshold frequency of the metal",
            "double the number of ejected electrons but leave their maximum kinetic energy unchanged",
            "cause emission below the threshold frequency",
          ],
          correctIndex: 2,
          explanation:
            "Intensity counts photons; frequency sets each photon's energy hν. One electron absorbs one photon, so KE_max = hν − W depends only on frequency. More photons means more one-photon absorption events — more electrons, same energy each. This is precisely what the classical wave picture could not explain.",
        },
        {
          question:
            "Why does classical electromagnetism predict that Rutherford's atom cannot exist?",
          options: [
            "The orbiting electron is continuously accelerating, so it should radiate energy and spiral into the nucleus within about 10⁻¹¹ s",
            "The positive nucleus should repel the electron out of the atom",
            "Electrons are too light to remain in orbit around a nucleus",
            "The nucleus should absorb the electron by the strong force",
          ],
          correctIndex: 0,
          explanation:
            "Circular motion is acceleration, and Maxwell's equations require accelerating charges to radiate. The electron would lose orbital energy continuously and crash into the nucleus almost instantly, emitting a continuous smear of light — not the sharp spectral lines actually observed. Stable, discrete atomic states demanded new physics.",
        },
        {
          question:
            "De Broglie's relation λ = h/p gave an immediate reinterpretation of Bohr's quantization rule L = nħ. What is it?",
          options: [
            "The electron's charge is quantized in units of h",
            "Only orbits whose circumference fits a whole number of electron wavelengths are allowed — the orbits are standing waves",
            "The electron orbits at exactly the speed of light divided by n",
            "The nucleus vibrates with n quanta of energy",
          ],
          correctIndex: 1,
          explanation:
            "Setting circumference = nλ with λ = h/p gives 2πr = nh/p, i.e. rp = L = nh/2π = nħ — exactly Bohr's rule. The mysterious integers of atomic spectra are the same integers that label the harmonics of a standing wave on a string: quantization is a wave phenomenon.",
        },
        {
          question:
            "In the single-electron double-slit experiment, what is observed on the detection screen?",
          options: [
            "A smooth wave-like intensity with no individual detection events",
            "Two bright bands, one behind each slit, built from single dots",
            "Individual localized dots that accumulate over time into an interference-fringe pattern",
            "Interference fringes that persist even when a detector records which slit each electron used",
          ],
          correctIndex: 2,
          explanation:
            "Each electron arrives as one localized dot (particle-like detection), yet thousands of dots build up interference fringes (wave-like propagation through both slits). Adding a which-slit detector destroys the fringes. Detection is particle-like, propagation is wave-like — the duality the wavefunction formalism is built to describe.",
        },
      ],
    },
    {
      id: "wavefunction-schrodinger",
      title: "The Wavefunction & Schrödinger Equation",
      subtitle: "ψ, probability, and the equation that runs the microworld",
      sections: [
        {
          id: "wavefunction-born-rule",
          title: "The Wavefunction and the Born Rule",
          content: `
<p>Here is the central object of this entire subject. In quantum mechanics, the state of a particle is completely described by its <strong>wavefunction</strong> Ψ(x, t) — a complex-valued function of position and time. Not "position and velocity," as in Newtonian mechanics. A function. Everything that can be known about the particle is encoded in Ψ.</p>
<p>What does Ψ mean physically? Max Born supplied the answer in 1926, and it earned him a Nobel Prize:</p>
<div class="key-concept">
  <h4>The Born rule</h4>
  <p>|Ψ(x, t)|² is a <strong>probability density</strong>: |Ψ(x, t)|² dx is the probability of finding the particle between x and x + dx, if you measure its position at time t. The probability of finding it between a and b is ∫<sub>a</sub><sup>b</sup> |Ψ|² dx.</p>
</div>
<p>Note the wording: probability of <em>finding</em>, not probability of <em>being</em>. Quantum mechanics does not say the particle has a position that we merely don't know (that reading — hidden variables — is testable and, as Subject 27 shows, experimentally disfavored). Before measurement the particle simply does not have a definite position; Ψ spread over a region is the complete story.</p>
<p>Measurement changes that story abruptly. Find the particle at some point x₀, and an immediate repeat measurement will find it there again — so the act of measurement <strong>collapses</strong> the spread-out wavefunction to a sharp spike at x₀. Between measurements Ψ evolves smoothly and deterministically (next section); at a measurement it jumps randomly, with odds given by the Born rule. This two-mode behavior is the strangest structural feature of the theory, and Subject 27 will return to what "measurement" really means.</p>
<p>Why complex numbers? Because Ψ carries a <strong>phase</strong>, and phases are what interfere. When two routes to the same point contribute Ψ₁ and Ψ₂, the density is |Ψ₁ + Ψ₂|² — which contains cross terms that can add or cancel. The double-slit fringes live in those cross terms. Probability densities alone could never interfere; complex amplitudes can.</p>
<div class="analogy">
  <h3>Analogy: The forecast map</h3>
  <p>A hurricane forecast cone isn't the storm — it's a map of where the storm may be found. Ψ is like the forecast, with one radical difference: for the electron there is no hidden "actual storm track" underneath. The cone is the complete reality until a measurement is made.</p>
</div>`,
        },
        {
          id: "schrodinger-equation",
          title: "The Schrödinger Equation",
          content: `
<p>Newton's mechanics rests on F = ma: given the force and the initial conditions, the trajectory follows. Quantum mechanics rests on an equation of exactly parallel status, proposed by Erwin Schrödinger in 1926. For a particle of mass m in a potential V(x):</p>
<p style="text-align:center; font-size:1.15em;"><strong>iħ ∂Ψ/∂t = −(ħ²/2m) ∂²Ψ/∂x² + V(x)Ψ</strong></p>
<p>Given Ψ(x, 0), this equation determines Ψ(x, t) for all later times — completely deterministically. The randomness of quantum mechanics lives entirely in measurement; the evolution of the wavefunction between measurements is as lawful as a planetary orbit.</p>
<p>The equation cannot be derived from classical physics, but it can be made plausible. A free particle should be a de Broglie wave, Ψ = e<sup>i(kx−ωt)</sup>, with momentum p = ħk and energy E = ħω. Notice that differentiating this wave once in t pulls down −iω (energy), and twice in x pulls down −k² (momentum squared). The classical energy relation E = p²/2m + V then translates, term by term, into the Schrödinger equation, with energy and momentum represented by <strong>derivative operators</strong>:</p>
<p style="text-align:center;">E → iħ ∂/∂t,&nbsp;&nbsp;&nbsp; p → −iħ ∂/∂x</p>
<p>Three structural features deserve attention:</p>
<ul>
  <li><strong>The i is essential.</strong> Unlike the classical wave equation, this equation forces Ψ to be complex — the phase that makes interference possible is built into the dynamics.</li>
  <li><strong>It is first-order in time.</strong> Ψ(x, 0) alone fixes the future; no separate initial velocity is needed. The state <em>is</em> the wavefunction, full stop.</li>
  <li><strong>It is linear.</strong> If Ψ₁ and Ψ₂ are solutions, so is aΨ₁ + bΨ₂. This <strong>superposition principle</strong> is the deep reason quantum states can be added like vectors — the seed of the entire formalism chapter.</li>
</ul>
<div class="key-concept">
  <h4>The program of this subject</h4>
  <p>Almost everything from here on is: choose a potential V(x), solve the Schrödinger equation, interpret the solutions with the Born rule. Wells, barriers, oscillators, hydrogen — same recipe, escalating mathematics, all handled by the PDE methods of Subject 23.</p>
</div>`,
        },
        {
          id: "normalization",
          title: "Normalization: Keeping Probability Honest",
          content: `
<p>If |Ψ|² is a probability density, the particle must be found <em>somewhere</em>, so the total probability must be exactly 1:</p>
<p style="text-align:center; font-size:1.1em;">∫<sub>−∞</sub><sup>+∞</sup> |Ψ(x, t)|² dx = 1</p>
<p>This is <strong>normalization</strong>, and it quietly does a lot of work. First, it selects which mathematical solutions are physical: Ψ must be <strong>square-integrable</strong>, dying away fast enough at ±∞ for the integral to converge. Solutions that blow up at infinity are solutions of the equation but not states of a particle. Second, since the Schrödinger equation is linear, any solution can be rescaled: if the integral of |Ψ|² comes out to some finite N, dividing Ψ by √N normalizes it. Only the overall scale (and phase) is fixed by this — multiplying Ψ by a constant phase factor e<sup>iθ</sup> changes nothing observable.</p>
<p>But here is the crucial consistency check. Suppose you normalize Ψ at t = 0. The Schrödinger equation then marches Ψ forward in time — what guarantees the integral <em>stays</em> equal to 1? If it didn't, the probability interpretation would collapse. The theorem: for any solution of the Schrödinger equation with real potential V,</p>
<p style="text-align:center;">d/dt ∫ |Ψ|² dx = 0</p>
<p>The proof is a lovely integration-by-parts exercise: differentiating |Ψ|² = Ψ*Ψ under the integral, substituting the Schrödinger equation for ∂Ψ/∂t (and its conjugate for ∂Ψ*/∂t), the potential terms cancel and what remains is a total derivative — the boundary term vanishes because Ψ → 0 at infinity. Probability is conserved <em>locally</em>, too: it flows through space with a probability current J = (ħ/m) Im(Ψ* ∂Ψ/∂x), obeying a continuity equation exactly like charge conservation in Subject 21.</p>
<div class="key-concept">
  <h4>Normalization once, normalized forever</h4>
  <p>The factor i and the specific structure of the Schrödinger equation conspire to preserve total probability for all time. This is no accident — in the formalism chapter it reappears as the statement that time evolution is <em>unitary</em>, the complex-vector version of a pure rotation, which preserves lengths.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The plane wave e<sup>ikx</sup> — the most obvious "momentum state" — is not normalizable: |Ψ|² = 1 everywhere integrates to infinity. A particle can never have a perfectly definite momentum. The fix, wave packets, is the finale of the next chapter.</p>
</div>`,
        },
        {
          id: "expectation-values-operators",
          title: "Expectation Values and Operators",
          content: `
<p>Given Ψ, what should we predict for a measurement? Not a single number — outcomes are random — but a distribution, and distributions have averages. The <strong>expectation value</strong> of position is the Born-rule average:</p>
<p style="text-align:center;">⟨x⟩ = ∫ Ψ* x Ψ dx</p>
<p>Read it carefully: this is the mean of position measurements on an <em>ensemble</em> of identically prepared systems — many copies, each measured once. It is not the average of repeated measurements on one particle, because the first measurement collapses Ψ and changes all subsequent statistics.</p>
<p>What about momentum? Momentum lives in the wiggliness of Ψ (de Broglie: shorter wavelength, larger p), and it enters through the operator identified last section:</p>
<p style="text-align:center;">⟨p⟩ = ∫ Ψ* (−iħ ∂/∂x) Ψ dx</p>
<p>This is the template for everything. Every classical observable Q(x, p) becomes an <strong>operator</strong> Q̂ by substituting x̂ = x (multiply by x) and p̂ = −iħ ∂/∂x, and its expectation value is ⟨Q⟩ = ∫ Ψ* Q̂ Ψ dx. Kinetic energy: p̂²/2m = −(ħ²/2m) ∂²/∂x². Total energy: the <strong>Hamiltonian</strong> Ĥ = p̂²/2m + V(x) — precisely the right-hand side of the Schrödinger equation, which now reads iħ ∂Ψ/∂t = ĤΨ.</p>
<p>Do these quantum averages behave classically? Ehrenfest's theorem says yes, beautifully:</p>
<p style="text-align:center;">d⟨x⟩/dt = ⟨p⟩/m,&nbsp;&nbsp;&nbsp; d⟨p⟩/dt = ⟨−∂V/∂x⟩</p>
<p>The centers of quantum distributions obey Newton's laws. Classical mechanics is what quantum mechanics looks like when the wavepacket is narrow compared to the scale of the potential — which for a thrown baseball it spectacularly is.</p>
<div class="key-concept">
  <h4>Spread matters as much as center</h4>
  <p>The width of the distribution is the standard deviation, σ<sub>x</sub>² = ⟨x²⟩ − ⟨x⟩², and likewise σ<sub>p</sub> for momentum. These widths are not experimental sloppiness — they are properties of the state itself. The famous inequality σ<sub>x</sub>σ<sub>p</sub> ≥ ħ/2 relating them will be <em>proved</em>, from first principles, in the formalism chapter.</p>
</div>`,
        },
        {
          id: "stationary-states",
          title: "Stationary States and the Time-Independent Equation",
          content: `
<p>Solving a PDE cold is hard; Subject 23 taught the standard opening move — <strong>separation of variables</strong> — and here it pays off magnificently. Look for solutions of the form Ψ(x, t) = ψ(x)φ(t). Substitute into the Schrödinger equation and divide by ψφ: the left side depends only on t, the right only on x, so both equal a constant. Call it E. The time part solves immediately:</p>
<p style="text-align:center;">φ(t) = e<sup>−iEt/ħ</sup></p>
<p>and the space part becomes the <strong>time-independent Schrödinger equation</strong> (TISE):</p>
<p style="text-align:center; font-size:1.15em;"><strong>Ĥψ = Eψ&nbsp;&nbsp;&nbsp;i.e.&nbsp;&nbsp;&nbsp;−(ħ²/2m) d²ψ/dx² + V(x)ψ = Eψ</strong></p>
<p>This is an <strong>eigenvalue problem</strong> — the same structure as Subject 22's matrix equation Av = λv, with the Hamiltonian as the operator and the allowed energies E as eigenvalues. For confining potentials, normalizability will permit only special discrete values of E: this is where <em>quantization comes from</em>. Nobody inserts integers by hand, as Bohr did; they emerge as the condition for solutions to exist.</p>
<p>The separated solutions Ψ<sub>n</sub> = ψ<sub>n</sub>(x)e<sup>−iE<sub>n</sub>t/ħ</sup> are called <strong>stationary states</strong>, and the name is apt: since |e<sup>−iEt/ħ</sup>|² = 1, the probability density |Ψ<sub>n</sub>|² = |ψ<sub>n</sub>|² is frozen — nothing observable about the state ever changes. Every expectation value is constant. Moreover each is a state of <em>definite energy</em>: measuring E returns exactly E<sub>n</sub>, every time. These are Bohr's stable orbits, reborn as standing waves.</p>
<div class="key-concept">
  <h4>Stationary states are the building blocks, not the whole story</h4>
  <p>By linearity, the general solution is a superposition: Ψ(x, t) = Σ c<sub>n</sub> ψ<sub>n</sub>(x) e<sup>−iE<sub>n</sub>t/ħ</sup>. Such sums are <em>not</em> stationary — the cross terms between different phases e<sup>−iE<sub>n</sub>t/ħ</sup> beat against each other, making |Ψ|² slosh at frequencies (E<sub>n</sub> − E<sub>m</sub>)/ħ. All quantum motion is interference between stationary states. Solve the TISE for the ψ<sub>n</sub>, and you have solved the dynamics forever.</p>
</div>
<p>The next chapter runs this program on the classic one-dimensional potentials — and the first one can be solved completely with nothing but sines and cosines.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A particle's wavefunction is spread over a wide region. According to the standard (Born) interpretation, before any measurement the particle:",
          options: [
            "has a definite position that the wavefunction merely fails to specify",
            "is physically smeared out like a fluid, and a measurement gathers it together",
            "does not have a definite position at all; |Ψ|² gives the probability density for where it will be found",
            "is at the location where |Ψ|² is largest",
          ],
          correctIndex: 2,
          explanation:
            "The Born rule makes |Ψ|² a probability density for measurement outcomes, and quantum mechanics asserts this is the complete description — the particle has no hidden definite position beforehand (an assumption Bell-test experiments, covered in Subject 27, strongly support). Measurement then collapses Ψ to the location actually found.",
        },
        {
          question:
            "Why must the wavefunction be complex rather than real-valued?",
          options: [
            "Complex numbers make the equations harder and therefore more fundamental",
            "The i in the Schrödinger equation forces complex solutions, and the phase it provides is what allows amplitudes to interfere",
            "Because probabilities can be negative in quantum mechanics",
            "Real wavefunctions could not be normalized",
          ],
          correctIndex: 1,
          explanation:
            "The Schrödinger equation's factor i makes complex evolution unavoidable, and physically the complex phase is the point: densities add as |Ψ₁ + Ψ₂|², whose cross terms depend on relative phase and produce interference. Probabilities themselves stay real and non-negative — the complexity lives one layer down, in the amplitudes.",
        },
        {
          question:
            "What guarantees that a wavefunction normalized at t = 0 remains normalized at all later times?",
          options: [
            "The Schrödinger equation itself preserves ∫|Ψ|² dx — probability conservation is built into the dynamics",
            "The experimenter renormalizes after each measurement",
            "It doesn't — normalization slowly decays and must be corrected",
            "Normalization is preserved only for stationary states",
          ],
          correctIndex: 0,
          explanation:
            "Differentiating ∫|Ψ|²dx under the integral and substituting the Schrödinger equation for the time derivatives yields exactly zero (the boundary terms vanish for normalizable Ψ). Probability even flows locally via a continuity equation, like charge in electromagnetism. In formal language, time evolution is unitary: it preserves the length of the state vector.",
        },
        {
          question: "The expectation value ⟨x⟩ = ∫Ψ*xΨ dx is best interpreted as:",
          options: [
            "the most likely single measurement outcome",
            "the time average of the particle's position as it moves",
            "the exact position the particle occupies between measurements",
            "the average of position measurements over an ensemble of identically prepared systems",
          ],
          correctIndex: 3,
          explanation:
            "⟨x⟩ is the mean of the Born-rule distribution: prepare many systems in the same state Ψ, measure each once, and average. It need not be the most probable value (that's the peak of |Ψ|²), and it can't be a time average over repeated measurements of one particle, because the first measurement collapses the state.",
        },
        {
          question:
            "Why are the separable solutions Ψₙ(x,t) = ψₙ(x)e^(−iEₙt/ħ) called 'stationary states'?",
          options: [
            "The particle in such a state is at rest",
            "The wavefunction does not change in time",
            "All probabilities and expectation values are constant in time, because the time dependence is a pure phase that cancels in |Ψ|²",
            "They only exist in static potentials with V = 0",
          ],
          correctIndex: 2,
          explanation:
            "The wavefunction itself does rotate in phase, but |e^(−iEt/ħ)|² = 1, so |Ψₙ|² and every expectation value are frozen. The particle isn't 'at rest' — ⟨p²⟩ is generally nonzero — but nothing measurable evolves. Time dependence in quantum mechanics comes from superposing stationary states with different energies, whose phases beat against each other.",
        },
      ],
    },
    {
      id: "one-dimensional-problems",
      title: "One-Dimensional Problems",
      subtitle: "Wells, barriers, tunnelling, and the harmonic oscillator",
      sections: [
        {
          id: "infinite-square-well",
          title: "The Infinite Square Well",
          interactive: "quantum-well",
          content: `
<p>The hydrogen atom of textbooks — simple enough to solve in full, rich enough to show everything. A particle is trapped in a box: V(x) = 0 for 0 &lt; x &lt; a, and V = ∞ outside. The infinite walls force ψ = 0 outside and, by continuity, at the walls themselves: <strong>ψ(0) = ψ(a) = 0</strong>.</p>
<p>Inside, the time-independent Schrödinger equation is just −(ħ²/2m)ψ″ = Eψ, or ψ″ = −k²ψ with k = √(2mE)/ħ — the simple harmonic oscillator equation of Subject 15, with general solution:</p>
<p style="text-align:center;">ψ(x) = A sin kx + B cos kx</p>
<p>Now apply the boundary conditions. ψ(0) = 0 kills the cosine: B = 0. ψ(a) = 0 then demands sin ka = 0, so ka must be a whole multiple of π:</p>
<p style="text-align:center;">k<sub>n</sub> = nπ/a,&nbsp;&nbsp; n = 1, 2, 3, …</p>
<p>That is the entire miracle. The boundary conditions accept only special wavelengths — exactly like a guitar string — and since k determines E, <strong>energy is quantized</strong>:</p>
<p style="text-align:center; font-size:1.15em;"><strong>E<sub>n</sub> = n²π²ħ² / 2ma²</strong></p>
<p>Normalizing (∫₀<sup>a</sup>A² sin²(nπx/a) dx = 1 gives A = √(2/a)) completes the solution: ψ<sub>n</sub>(x) = √(2/a) sin(nπx/a). Read the physics out of the formulas:</p>
<ul>
  <li><strong>E ∝ n²:</strong> levels spread apart as you climb — spacing grows like 2n + 1.</li>
  <li><strong>Zero-point energy:</strong> n = 0 would mean ψ = 0 everywhere (no particle), so the minimum energy E₁ = π²ħ²/2ma² is <em>not zero</em>. A confined quantum particle can never sit still — squeezing a smaller (smaller a) raises the floor.</li>
  <li><strong>Nodes:</strong> ψ<sub>n</sub> has n − 1 interior zeros. More wiggles = shorter wavelength = higher momentum = higher energy, by de Broglie.</li>
  <li><strong>Orthogonality:</strong> ∫ψ<sub>m</sub>ψ<sub>n</sub> dx = 0 for m ≠ n — the stationary states form an orthogonal basis, a fact the formalism chapter elevates to a principle.</li>
</ul>
<div class="key-concept">
  <h4>Explore it</h4>
  <p>Use the interactive to step through n = 1, 2, 3, …: watch the nodes appear, the energy climb as n², and the probability density |ψ<sub>n</sub>|² develop lobes. Notice that high-n states spread probability nearly uniformly — the classical limit peeking through (the correspondence principle).</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The infinite well is not just a toy: conjugated dye molecules confine electrons along their carbon chains, and E ∝ 1/a² correctly predicts how their absorption color shifts with chain length. Quantum dots — engineered boxes for electrons — tune the color of QLED televisions the same way.</p>
</div>`,
        },
        {
          id: "finite-wells-steps-scattering",
          title: "Finite Wells, Steps, and Scattering",
          content: `
<p>Real wells have finite depth. Let V(x) = −V₀ inside |x| &lt; a and 0 outside. Two new phenomena appear immediately, both impossible classically.</p>
<p><strong>Bound states (E &lt; 0).</strong> Inside the well ψ oscillates, as before. But outside, the TISE gives ψ″ = κ²ψ with κ = √(−2mE)/ħ — and the normalizable solution is a decaying exponential e<sup>−κ|x|</sup>. The wavefunction <strong>leaks into the classically forbidden region</strong>, where the particle hasn't enough energy to be: |ψ|² is nonzero where E &lt; V. The penetration depth 1/κ shrinks as the state binds deeper.</p>
<p>Matching ψ and ψ′ at the well edges yields a transcendental equation (for even states, tan z = √((z₀/z)² − 1) in the standard notation), solved graphically — where the curves intersect, a bound state exists. The results:</p>
<ul>
  <li>Finitely many bound states — a shallow, narrow well may hold only one.</li>
  <li>In one dimension, <em>every</em> attractive well holds at least one bound state, no matter how feeble.</li>
  <li>As V₀ → ∞ the energies slide to the infinite-well values E<sub>n</sub> ∝ n² — the toy model recovered as a limit.</li>
</ul>
<p><strong>Scattering states (E &gt; 0).</strong> Send a particle at a potential <strong>step</strong> of height V₀ &lt; E. Classically it slows down and continues, with certainty. Quantum mechanically, matching the incident-plus-reflected wave to the transmitted wave at the step gives reflection and transmission coefficients:</p>
<p style="text-align:center;">R = ((k₁ − k₂)/(k₁ + k₂))²,&nbsp;&nbsp; T = 1 − R</p>
<p>with k₁, k₂ the wavenumbers on each side. <strong>R ≠ 0 even though the particle has enough energy</strong> — a wave phenomenon, precisely analogous to the partial reflection of light at a glass surface (Subject 16). A quantum particle can bounce off a cliff edge going down.</p>
<div class="key-concept">
  <h4>The matching recipe</h4>
  <p>All 1D problems reduce to bookkeeping: solve the TISE in each region of constant V, then require ψ continuous everywhere and ψ′ continuous wherever V is finite. Boundary conditions do the physics: they quantize bound states and set scattering probabilities.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The finite square well is a working model of the deuteron — the proton–neutron nucleus. It is barely bound (2.2 MeV), holds exactly one bound state, and its wavefunction spends roughly half its time in the classically forbidden region outside the range of the nuclear force.</p>
</div>`,
        },
        {
          id: "tunnelling",
          title: "Tunnelling: Through the Impossible Wall",
          content: `
<p>Now stand a barrier in the particle's way: V = V₀ over a width L, with the particle's energy E <em>below</em> V₀. Classically the particle bounces off, always. Quantum mechanically, the wavefunction inside the barrier obeys ψ″ = κ²ψ with</p>
<p style="text-align:center;">κ = √(2m(V₀ − E)) / ħ</p>
<p>— not oscillation but exponential decay, e<sup>−κx</sup>. If the barrier is thin enough that the decaying tail is still alive at the far side, it reconnects there to an oscillating wave, and the matching conditions yield a nonzero transmission probability. For a wide barrier (κL ≫ 1) the result is dominated by the exponential:</p>
<p style="text-align:center; font-size:1.1em;"><strong>T ≈ e<sup>−2κL</sup></strong></p>
<p>The particle <strong>tunnels</strong> through a wall it cannot classically climb. No energy is borrowed, nothing goes over the top; the wave simply has amplitude on both sides, and the Born rule does the rest. The double exponential sensitivity — T depends exponentially on both width and √(V₀ − E) — is the signature of tunnelling and the key to its applications:</p>
<ul>
  <li><strong>Alpha decay:</strong> Gamow (1928) explained why uranium's half-life is 4.5 billion years while polonium-212's is 0.3 μs: the alpha particle tunnels out of the nuclear Coulomb barrier, and modest differences in barrier shape produce 20-plus orders of magnitude in decay rate. Tunnelling's first triumph.</li>
  <li><strong>Solar fusion:</strong> at the Sun's core temperature, protons' thermal energy is about 1000 times too small to surmount their mutual Coulomb repulsion. They fuse anyway — by tunnelling. Sunlight is tunnelling made visible.</li>
  <li><strong>The scanning tunnelling microscope:</strong> a metal tip hovers a nanometre above a surface; electrons tunnel across the vacuum gap, and because the current varies exponentially with distance, the STM maps surfaces atom by atom.</li>
  <li><strong>Flash memory:</strong> every phone stores your data as electrons pushed by tunnelling through an oxide barrier onto a floating gate — and trapped there because the same barrier suppresses their escape.</li>
</ul>
<div class="key-concept">
  <h4>Exponentials rule the microworld</h4>
  <p>T ≈ e<sup>−2κL</sup> means a factor-of-two change in barrier width can change a rate by millions. Whenever you see wildly disparate lifetimes or currents that switch on a knife-edge, suspect tunnelling.</p>
</div>`,
        },
        {
          id: "harmonic-oscillator",
          title: "The Harmonic Oscillator, Solved Twice",
          content: `
<p>The most important potential in physics: V(x) = ½mω²x². Every smooth potential minimum looks like this up close (Taylor-expand and the linear term vanishes at the minimum), so the oscillator is the universal model of vibration — molecules, crystal lattices, and ultimately the quantum electromagnetic field itself.</p>
<p><strong>Route 1: brute-force analysis (sketch).</strong> Feed V into the TISE and change to the natural variable ξ = √(mω/ħ)x. At large ξ the equation forces Gaussian decay, ψ ~ e<sup>−ξ²/2</sup>; peeling that factor off leaves Hermite's equation for the remainder. Solving by power series, one finds the series must <em>terminate</em> — otherwise it grows like e<sup>+ξ²</sup> and destroys normalizability — and termination happens only when the energy is:</p>
<p style="text-align:center; font-size:1.1em;"><strong>E<sub>n</sub> = (n + ½)ħω,&nbsp;&nbsp; n = 0, 1, 2, …</strong></p>
<p>The eigenfunctions are Hermite polynomials times the Gaussian: ψ<sub>n</sub> ∝ H<sub>n</sub>(ξ)e<sup>−ξ²/2</sup>. Quantization again arrives as the price of normalizability.</p>
<p><strong>Route 2: the ladder operators (in full).</strong> Dirac's algebraic method is one of the most elegant arguments in physics. Define</p>
<p style="text-align:center;">a<sub>±</sub> = (1/√(2ħmω)) (∓ip̂ + mωx̂)</p>
<p>Using [x̂, p̂] = iħ, a short computation gives the two identities that run everything: <strong>[a<sub>−</sub>, a<sub>+</sub>] = 1</strong> and <strong>Ĥ = ħω(a<sub>+</sub>a<sub>−</sub> + ½)</strong>. Now suppose Ĥψ = Eψ. Then:</p>
<p style="text-align:center;">Ĥ(a<sub>+</sub>ψ) = (E + ħω)(a<sub>+</sub>ψ),&nbsp;&nbsp;&nbsp; Ĥ(a<sub>−</sub>ψ) = (E − ħω)(a<sub>−</sub>ψ)</p>
<p>(proof: commute Ĥ past a<sub>±</sub> using the identities). So a<sub>+</sub> manufactures a new eigenstate one rung <em>up</em> the energy ladder, a<sub>−</sub> one rung <em>down</em>. But descending cannot continue forever — energies below the potential minimum are impossible — so there must be a bottom rung ψ₀ killed by the lowering operator: <strong>a<sub>−</sub>ψ₀ = 0</strong>. That is a first-order ODE, (ħ d/dx + mωx)ψ₀ = 0, solved instantly by the Gaussian ψ₀ ∝ e<sup>−mωx²/2ħ</sup>, with Ĥψ₀ = ½ħωψ₀. Climb with a<sub>+</sub> and the whole spectrum E<sub>n</sub> = (n + ½)ħω tumbles out — no differential equations beyond first order, no Hermite functions needed.</p>
<div class="key-concept">
  <h4>Why the ladder matters beyond this problem</h4>
  <p>Evenly spaced levels ħω apart invite a new reading: the state |n⟩ "contains n quanta," and a<sub>±</sub> create and destroy them. Promote the oscillator to each mode of the electromagnetic field and those quanta are <em>photons</em> — Planck's guess, derived. The same algebra returns for angular momentum three chapters from now.</p>
</div>`,
        },
        {
          id: "free-particle-wave-packets",
          title: "The Free Particle and Wave Packets",
          content: `
<p>Ironically, the hardest 1D problem to interpret is the one with no potential at all. With V = 0 the TISE gives travelling waves Ψ<sub>k</sub> = e<sup>i(kx − ħk²t/2m)</sup> for any k — no boundary conditions, so <em>no quantization</em>: the free particle has a continuous energy spectrum. But there's a snag: |Ψ<sub>k</sub>|² = 1 everywhere, so ∫|Ψ<sub>k</sub>|² dx = ∞. <strong>A plane wave is not a normalizable state.</strong> A particle simply cannot have a perfectly definite momentum.</p>
<p>The physical fix is superposition. Since the equation is linear, integrate plane waves over a range of wavenumbers:</p>
<p style="text-align:center;">Ψ(x, t) = (1/√(2π)) ∫ φ(k) e<sup>i(kx − ħk²t/2m)</sup> dk</p>
<p>With φ(k) peaked around some k₀, this <strong>wave packet</strong> is localized in space and perfectly normalizable — Fourier analysis from Subject 23 in its natural habitat. The function φ(k), fixed by the initial shape Ψ(x, 0), is effectively the momentum-space wavefunction.</p>
<p>Two speeds now appear, and telling them apart resolves a classic paradox:</p>
<ul>
  <li><strong>Phase velocity</strong> — the speed of individual crests: v<sub>ph</sub> = ω/k = ħk/2m. Bizarrely, this is <em>half</em> the classical particle speed.</li>
  <li><strong>Group velocity</strong> — the speed of the packet's envelope: v<sub>g</sub> = dω/dk = ħk/m = p/m. Exactly the classical velocity.</li>
</ul>
<p>The particle "is" the packet, and the packet moves at v<sub>g</sub>. Crests are born at the packet's rear, sweep through, and die at its front — carrying no probability with them.</p>
<div class="key-concept">
  <h4>Dispersion: packets spread</h4>
  <p>Because ω = ħk²/2m is not linear in k, different plane-wave components travel at different speeds — the packet <strong>disperses</strong>, widening as it goes (an electron packet confined to an atom's width doubles in about 10⁻¹⁶ s). Narrower initial packets contain a wider spread of k, so they spread <em>faster</em>: position spread and momentum spread trade off. That trade-off is the uncertainty principle in embryo, and the formalism chapter now makes it a theorem.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The Gaussian wave packet is the unique shape that saturates the uncertainty bound σ<sub>x</sub>σ<sub>p</sub> = ħ/2 — and the oscillator ground state you just met is exactly a Gaussian. The oscillator's ground state is nature's most compromise-perfect quantum state.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the infinite square well, where exactly does energy quantization come from in the derivation?",
          options: [
            "The boundary conditions ψ(0) = ψ(a) = 0 allow only sin(kx) with ka = nπ, so only discrete k — and hence discrete E — survive",
            "The Schrödinger equation only has solutions for special energies in any potential",
            "The normalization integral fixes the allowed energies",
            "Planck's constant only permits energies that are multiples of h",
          ],
          correctIndex: 0,
          explanation:
            "Inside the well every E gives a perfectly good solution A sin kx + B cos kx. It's the walls that discriminate: ψ(0) = 0 forces B = 0 and ψ(a) = 0 forces sin ka = 0, i.e. k = nπ/a. Only special wavelengths fit, exactly like a guitar string's harmonics, giving Eₙ = n²π²ħ²/2ma². Normalization just sets the amplitude.",
        },
        {
          question:
            "The ground-state energy of a particle in a box is E₁ = π²ħ²/2ma², not zero. If the box is made narrower (a decreases), the minimum energy:",
          options: [
            "decreases, since the particle has less room to move",
            "increases as 1/a² — confining a quantum particle more tightly forces it to be more energetic",
            "stays the same, since zero-point energy is universal",
            "becomes exactly zero when a reaches the de Broglie wavelength",
          ],
          correctIndex: 1,
          explanation:
            "E₁ ∝ 1/a²: squeezing the box shortens the longest wavelength that fits, raising the momentum (λ = h/p) and hence the kinetic energy. This zero-point energy is unavoidable — n = 0 would mean no wavefunction at all. It's why electrons don't sit on nuclei and why quantum dots change color with size.",
        },
        {
          question:
            "A particle tunnels through a barrier with transmission T ≈ e^(−2κL). Which statement about tunnelling is correct?",
          options: [
            "The particle briefly borrows energy to hop over the top of the barrier",
            "Tunnelling only occurs if the particle's energy is within ħω of the barrier height",
            "Inside the barrier the wavefunction decays exponentially rather than oscillating, and its surviving amplitude at the far side gives a nonzero escape probability",
            "The transmission probability decreases linearly with barrier width",
          ],
          correctIndex: 2,
          explanation:
            "For E < V₀ the TISE inside the barrier gives ψ″ = κ²ψ — exponential decay, not oscillation. If the barrier is thin, the tail is still alive at the far side and reconnects to a travelling wave. No energy is borrowed and nothing goes 'over'. The exponential dependence on L and on √(V₀ − E) is why alpha-decay lifetimes span 20+ orders of magnitude.",
        },
        {
          question:
            "In the ladder-operator solution of the harmonic oscillator, why must there be a lowest state ψ₀ with a₋ψ₀ = 0?",
          options: [
            "Because the commutator [a₋, a₊] = 1 forbids more than a finite number of states",
            "Because a₋ is not a Hermitian operator",
            "Because the Hermite series terminates at n = 0",
            "Because applying a₋ repeatedly would otherwise generate states with energy below the potential minimum, which cannot exist",
          ],
          correctIndex: 3,
          explanation:
            "Each application of a₋ lowers the energy by ħω. Descent must stop — no normalizable state can have energy below the bottom of the potential (⟨Ĥ⟩ is bounded below). The only way out is a state that a₋ annihilates outright. Solving the first-order equation a₋ψ₀ = 0 gives the Gaussian ground state with E₀ = ½ħω, and climbing with a₊ builds the whole spectrum.",
        },
        {
          question:
            "For a free-particle wave packet, the envelope moves at the group velocity v_g = ħk/m while individual crests move at ħk/2m. Which speed corresponds to the classical particle velocity?",
          options: [
            "The crest (phase) velocity — the wave crests are the particle",
            "The group velocity — the packet's envelope carries the probability, and v_g = p/m matches classical mechanics",
            "Neither; quantum particles have no well-defined velocity",
            "Their average, 3ħk/4m",
          ],
          correctIndex: 1,
          explanation:
            "The particle is where the probability is — the envelope. v_g = dω/dk = ħk/m = p/m reproduces the classical velocity exactly (consistent with Ehrenfest's theorem), while crests at ω/k = ħk/2m merely slide through the packet, carrying no probability. Because ω ∝ k², components disperse and the packet spreads as it travels.",
        },
      ],
    },
    {
      id: "the-formalism",
      title: "The Formalism",
      subtitle:
        "Hilbert space, Dirac notation, and measurement — quantum mechanics as linear algebra",
      sections: [
        {
          id: "hilbert-space",
          title: "States as Vectors: Hilbert Space",
          content: `
<p>Step back from the particular problems and look at the pattern. Wavefunctions can be added and scaled (superposition); solutions of the TISE came in orthogonal families (the sin(nπx/a), the Hermite functions); arbitrary states were expanded as Σc<sub>n</sub>ψ<sub>n</sub>. Adding, scaling, orthogonality, expansion in a basis — this is the vocabulary of Subject 22. The deep truth of quantum mechanics:</p>
<div class="key-concept">
  <h4>The first postulate</h4>
  <p>The state of a system is a <strong>vector</strong> in a complex inner-product space — a <strong>Hilbert space</strong>. Wavefunctions are one concrete representation of these vectors, in the same way a column of components represents an arrow once axes are chosen.</p>
</div>
<p>For a particle on a line, the Hilbert space is L² — the square-integrable functions, exactly the normalizable wavefunctions of the earlier chapters. The <strong>inner product</strong> generalizes the dot product:</p>
<p style="text-align:center;">⟨f|g⟩ = ∫ f(x)* g(x) dx</p>
<p>Note the complex conjugate on the first slot — it guarantees ⟨f|f⟩ = ∫|f|² dx is real and non-negative, so it can serve as a squared length. Normalization is the statement ⟨Ψ|Ψ⟩ = 1: physical states are <em>unit vectors</em>. Orthogonality ⟨f|g⟩ = 0 means the states are perfectly distinguishable — as the well's stationary states are.</p>
<p>"Hilbert space" adds one technical refinement to "inner-product space": completeness — limits of convergent sequences stay in the space — which matters because we constantly build states as infinite sums Σc<sub>n</sub>ψ<sub>n</sub>. The Cauchy–Schwarz inequality |⟨f|g⟩|² ≤ ⟨f|f⟩⟨g|g⟩ holds here as in any inner-product space, and it will shortly prove the uncertainty principle.</p>
<p>The payoff of this abstraction is unification. A particle's state is a function; a spin's state (two chapters ahead) is a two-component column; a quantum computer's state is a vector in a 2<sup>n</sup>-dimensional space. One geometry — vectors, angles, projections — describes them all, and every tool from linear algebra transfers instantly.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Heisenberg's 1925 "matrix mechanics" and Schrödinger's 1926 "wave mechanics" looked like rival theories until Schrödinger, Dirac, and von Neumann showed they were the same linear algebra in different bases. Von Neumann's 1932 book fixed the Hilbert-space language physics still speaks.</p>
</div>`,
        },
        {
          id: "dirac-notation",
          title: "Dirac Notation: Bras, Kets, and Bases",
          content: `
<p>Dirac invented a notation so well-adapted to quantum mechanics that it does half your thinking for you. A state vector is a <strong>ket</strong>, |Ψ⟩ — deliberately naming the vector without choosing coordinates, just as we write a force as <strong>F</strong> without picking axes. For each ket there is a dual <strong>bra</strong>, ⟨Ψ|, and gluing a bra to a ket gives the inner product ⟨Φ|Ψ⟩ — a "bra-ket," hence the names.</p>
<p>Choose an orthonormal basis {|e<sub>n</sub>⟩} with ⟨e<sub>m</sub>|e<sub>n</sub>⟩ = δ<sub>mn</sub>. Any state expands as |Ψ⟩ = Σ c<sub>n</sub>|e<sub>n</sub>⟩, and the coefficients are extracted by projection:</p>
<p style="text-align:center;">c<sub>n</sub> = ⟨e<sub>n</sub>|Ψ⟩</p>
<p>Substituting back gives |Ψ⟩ = Σ |e<sub>n</sub>⟩⟨e<sub>n</sub>|Ψ⟩, and since this holds for every state, the operator sandwiched in the middle must be the identity:</p>
<p style="text-align:center; font-size:1.05em;"><strong>Σ<sub>n</sub> |e<sub>n</sub>⟩⟨e<sub>n</sub>| = 1&nbsp;&nbsp;(completeness)</strong></p>
<p>This innocuous-looking identity is the workhorse of the formalism: insert it anywhere in an expression to switch bases or resolve a state into components. Objects like |a⟩⟨b| are operators — |a⟩⟨a| is the <strong>projector</strong> onto the direction |a⟩.</p>
<p>Now the unifying insight. What is the wavefunction, in this language? It is the collection of components of |Ψ⟩ in the basis of position eigenstates |x⟩:</p>
<p style="text-align:center;">Ψ(x) = ⟨x|Ψ⟩</p>
<p>The same state has momentum-space components Φ(p) = ⟨p|Ψ⟩ — and the Fourier transform relating Ψ(x) and Φ(p) is nothing but a change of basis, the rotation matrix between two coordinate systems on the same vector. "Position representation" and "momentum representation" are two shadows of one basis-free state.</p>
<div class="key-concept">
  <h4>Continuous bases — with a caveat</h4>
  <p>The kets |x⟩ and |p⟩ are idealizations: normalized to a Dirac delta, ⟨x|x′⟩ = δ(x − x′), they lie just outside the Hilbert space (a plane wave isn't normalizable, as the free particle showed). They are magnificent scaffolding — completeness becomes ∫|x⟩⟨x| dx = 1 — but physical states are always normalizable smears over them.</p>
</div>
<div class="analogy">
  <h3>Analogy: One arrow, many shadows</h3>
  <p>An arrow in space has different components in different axes, but it is one arrow. |Ψ⟩ is the arrow; Ψ(x), Φ(p), and the coefficient lists c<sub>n</sub> are its shadows on different walls. Dirac notation lets you calculate with the arrow itself.</p>
</div>`,
        },
        {
          id: "hermitian-operators-measurement",
          title: "Hermitian Operators and Measurement",
          content: `
<p>If states are vectors, what are observables? Operators — but a special class. The <strong>Hermitian conjugate</strong> (adjoint) of an operator Q̂ is defined by ⟨f|Q̂†g⟩ = ⟨Q̂f|g⟩, and an operator is <strong>Hermitian</strong> if Q̂† = Q̂ — it can hop across the inner product untouched. Position, momentum (the i and the minus sign from integration by parts conspire), and the Hamiltonian are all Hermitian.</p>
<p>Two theorems, both one-line proofs, explain why Hermitian operators are exactly what measurement needs:</p>
<ul>
  <li><strong>Real eigenvalues.</strong> If Q̂|q⟩ = q|q⟩, then q⟨q|q⟩ = ⟨q|Q̂q⟩ = ⟨Q̂q|q⟩ = q*⟨q|q⟩, so q = q*. Measured values are real numbers — as they must be.</li>
  <li><strong>Orthogonal eigenvectors.</strong> Eigenstates belonging to different eigenvalues satisfy ⟨q₁|q₂⟩ = 0 — distinct outcomes correspond to perfectly distinguishable states.</li>
</ul>
<p>Moreover (the spectral theorem, Subject 22 again) the eigenstates of a Hermitian operator form a <em>complete basis</em>. Every state can be expanded over them — and that expansion is precisely what measurement reads out:</p>
<div class="key-concept">
  <h4>The measurement postulate (generalized Born rule)</h4>
  <p>Measure observable Q on state |Ψ⟩ = Σ c<sub>n</sub>|q<sub>n</sub>⟩. The result is always one of the <em>eigenvalues</em> q<sub>n</sub>, obtained with probability |c<sub>n</sub>|² = |⟨q<sub>n</sub>|Ψ⟩|², and immediately afterwards the state has collapsed to |q<sub>n</sub>⟩. The original Born rule is the special case Q = position.</p>
</div>
<p>The expectation value follows: ⟨Q⟩ = Σ|c<sub>n</sub>|²q<sub>n</sub> = ⟨Ψ|Q̂|Ψ⟩, recovering the formula used since the wavefunction chapter. If |Ψ⟩ happens to <em>be</em> an eigenstate |q<sub>k</sub>⟩, the outcome is q<sub>k</sub> with certainty — that is what "the stationary states have definite energy" meant: they are eigenstates of Ĥ.</p>
<p>When can two observables be sharp simultaneously? Exactly when they share a full set of eigenstates, which happens if and only if they <strong>commute</strong>: [Â, B̂] = ÂB̂ − B̂Â = 0. The commutator — trivially zero for ordinary numbers — is the algebraic fingerprint of quantum incompatibility, and the canonical example is:</p>
<p style="text-align:center; font-size:1.05em;"><strong>[x̂, p̂] = iħ</strong></p>
<p>Position and momentum never commute, so no state has both sharp. How <em>unsharp</em> they must jointly be is the next section's theorem.</p>`,
        },
        {
          id: "uncertainty-principle-derived",
          title: "The Uncertainty Principle, Derived",
          content: `
<p>Heisenberg's uncertainty principle is often presented as folklore about clumsy measurements disturbing tiny systems. It is nothing of the sort. It is a <strong>theorem about states</strong>, provable in a few lines from the inner-product structure, and it applies before anyone measures anything.</p>
<p>Setup: for observables A and B in state |Ψ⟩, define the deviations σ<sub>A</sub>² = ⟨(Â − ⟨A⟩)²⟩ and likewise σ<sub>B</sub>². The proof runs on two facts. First, the <strong>Cauchy–Schwarz inequality</strong> applied to the vectors |f⟩ = (Â − ⟨A⟩)|Ψ⟩ and |g⟩ = (B̂ − ⟨B⟩)|Ψ⟩ gives σ<sub>A</sub>²σ<sub>B</sub>² = ⟨f|f⟩⟨g|g⟩ ≥ |⟨f|g⟩|². Second, split the complex number ⟨f|g⟩ into real and imaginary parts; the imaginary part alone is (1/2i)⟨[Â, B̂]⟩, and discarding the real part only strengthens the inequality. The result:</p>
<p style="text-align:center; font-size:1.1em;"><strong>σ<sub>A</sub>² σ<sub>B</sub>² ≥ ( ⟨[Â, B̂]⟩ / 2i )²</strong></p>
<p>Every pair of non-commuting observables carries an uncertainty relation, with the commutator setting the price. Insert the canonical commutator [x̂, p̂] = iħ:</p>
<p style="text-align:center; font-size:1.15em;"><strong>σ<sub>x</sub> σ<sub>p</sub> ≥ ħ/2</strong></p>
<p>No state in the Hilbert space — no matter how cleverly prepared — has position and momentum spreads whose product beats ħ/2. The wave packet trade-off observed at the end of the last chapter (narrow packets need broad momentum content) is now a theorem, with the Gaussian saturating the bound exactly.</p>
<div class="key-concept">
  <h4>What it does and does not say</h4>
  <p>It is a statement about the <em>statistics of ensembles</em>: prepare many systems identically, measure x on half and p on the other half, and the two histograms' widths obey σ<sub>x</sub>σ<sub>p</sub> ≥ ħ/2. It does not say "measuring x disturbs p" (disturbance is real but is a separate, subtler analysis), and it does not involve experimental imperfection. Sharpness in one basis and sharpness in another are geometrically incompatible properties of a single vector.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The uncertainty principle is load-bearing: it sets the zero-point energy of the harmonic oscillator (minimize ⟨H⟩ subject to σ<sub>x</sub>σ<sub>p</sub> = ħ/2 and E₀ = ħω/2 drops out), the size of atoms, and the pressure holding up white dwarf stars. LIGO's gravitational-wave detectors now routinely engineer 'squeezed' light — trading extra phase noise for reduced amplitude noise within the uncertainty bound — to hear black holes collide.</p>
</div>`,
        },
        {
          id: "time-evolution",
          title: "Time Evolution and the Energy–Time Relation",
          content: `
<p>The formalism assembles into a complete machine once time is added. The Schrödinger equation, written basis-free, says the Hamiltonian generates time translation:</p>
<p style="text-align:center;">iħ d|Ψ(t)⟩/dt = Ĥ|Ψ(t)⟩</p>
<p>For time-independent Ĥ the solution can be written formally as |Ψ(t)⟩ = Û(t)|Ψ(0)⟩ with Û(t) = e<sup>−iĤt/ħ</sup> (the exponential of an operator, defined by its power series — Subject 22). Because Ĥ is Hermitian, Û is <strong>unitary</strong>: Û†Û = 1, the complex analog of a rotation. Time evolution rotates the state vector in Hilbert space without stretching it — which is exactly why normalization, once fixed, is preserved forever.</p>
<p>In practice the recipe is the one used since the stationary-states section, now justified in general: expand the initial state in energy eigenstates, |Ψ(0)⟩ = Σ c<sub>n</sub>|E<sub>n</sub>⟩, and attach the phases:</p>
<p style="text-align:center;">|Ψ(t)⟩ = Σ c<sub>n</sub> e<sup>−iE<sub>n</sub>t/ħ</sup> |E<sub>n</sub>⟩</p>
<p>All dynamics is the beating of these phases. A superposition of two levels oscillates at the <strong>Bohr frequency</strong> ω = (E₂ − E₁)/ħ — the frequency of the light the transition emits or absorbs, tying the formalism back to the spectra that started this subject.</p>
<p>How fast can a state change? Expectation values evolve as (the generalized Ehrenfest theorem):</p>
<p style="text-align:center;">d⟨Q⟩/dt = (i/ħ)⟨[Ĥ, Q̂]⟩</p>
<p>Two readings. If Q̂ commutes with Ĥ, then ⟨Q⟩ is constant: <strong>conservation laws are commutators vanishing</strong> — momentum is conserved when Ĥ has translation symmetry, angular momentum with rotation symmetry: Noether's theorem (Subject 19) reborn in operator form. And applying the generalized uncertainty relation with A = H yields the honest <strong>energy–time uncertainty principle</strong>: ΔE Δt ≥ ħ/2, where Δt is the time any observable needs to change by one standard deviation.</p>
<div class="key-concept">
  <h4>Time is not an observable</h4>
  <p>Unlike position, time in quantum mechanics is a parameter — there is no "time operator." In ΔE Δt ≥ ħ/2, Δt is a <em>timescale of change</em>: states of sharp energy (small ΔE) evolve slowly; fast-changing states must smear their energy. This is why short-lived excited states emit spectrally broadened lines — the "natural linewidth" spectroscopists measure daily.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the Hilbert-space formulation, the position-space wavefunction Ψ(x) and the momentum-space wavefunction Φ(p) of the same particle are:",
          options: [
            "two different physical states that evolve independently",
            "components of one and the same abstract state vector |Ψ⟩ in two different bases, related by a Fourier transform",
            "approximations valid at large and small distances respectively",
            "the real and imaginary parts of the full wavefunction",
          ],
          correctIndex: 1,
          explanation:
            "Ψ(x) = ⟨x|Ψ⟩ and Φ(p) = ⟨p|Ψ⟩ are shadows of a single basis-free vector on two coordinate systems, and the Fourier transform between them is just the change-of-basis 'rotation'. This is the heart of the formalism: the state is the vector, not any particular representation of it.",
        },
        {
          question:
            "Why must observables be represented by Hermitian operators?",
          options: [
            "Hermitian operators are the only ones that can be exponentiated",
            "Because Hermitian operators always commute with the Hamiltonian",
            "Their eigenvalues are real (measurement outcomes must be real numbers) and their eigenstates form a complete orthogonal basis to expand any state over",
            "Because Planck's constant is real",
          ],
          correctIndex: 2,
          explanation:
            "Q̂ = Q̂† forces every eigenvalue to equal its own conjugate (real), makes eigenstates of distinct eigenvalues orthogonal (distinguishable outcomes), and guarantees completeness — so any |Ψ⟩ expands as Σcₙ|qₙ⟩ with outcome probabilities |cₙ|². The whole measurement postulate leans on these spectral properties.",
        },
        {
          question:
            "A system is in state |Ψ⟩ = (3/5)|E₁⟩ + (4/5)|E₂⟩, where |E₁⟩, |E₂⟩ are orthonormal energy eigenstates. An energy measurement will yield:",
          options: [
            "a value between E₁ and E₂, weighted toward E₂",
            "the average (9E₁ + 16E₂)/25 every time",
            "E₁ or E₂ at random with equal probability",
            "E₁ with probability 9/25 or E₂ with probability 16/25, collapsing the state to the corresponding eigenstate",
          ],
          correctIndex: 3,
          explanation:
            "Measurement outcomes are always eigenvalues — never averages or intermediate values. The probabilities are the squared amplitudes: (3/5)² = 9/25 and (4/5)² = 16/25. The expectation value (9E₁ + 16E₂)/25 is only the ensemble mean over many runs. After the measurement the state is the eigenstate matching the result obtained.",
        },
        {
          question:
            "The generalized uncertainty principle σ_Aσ_B ≥ |⟨[Â,B̂]⟩|/2 reveals that the uncertainty principle is fundamentally a consequence of:",
          options: [
            "non-commuting operators and the Cauchy–Schwarz inequality — a geometric property of states, not of measurement disturbance",
            "the disturbance caused by photons bouncing off the particle during measurement",
            "thermal noise present in every real experiment",
            "the finite resolution of laboratory instruments",
          ],
          correctIndex: 0,
          explanation:
            "The derivation uses only the inner-product structure of Hilbert space: Cauchy–Schwarz plus the imaginary part of ⟨f|g⟩ yields the bound, with the commutator setting its size. Since [x̂,p̂] = iħ ≠ 0, no state whatsoever has both spreads small: σ_xσ_p ≥ ħ/2 holds before any apparatus touches the system. Measurement-disturbance is a real but separate issue.",
        },
        {
          question:
            "An observable Q̂ commutes with the Hamiltonian: [Ĥ, Q̂] = 0. What follows?",
          options: [
            "Q must be the energy itself",
            "⟨Q⟩ is constant in time — Q is a conserved quantity, the quantum version of Noether's theorem",
            "Q cannot be measured simultaneously with the energy",
            "The system must be in a stationary state",
          ],
          correctIndex: 1,
          explanation:
            "The evolution law d⟨Q⟩/dt = (i/ħ)⟨[Ĥ,Q̂]⟩ makes conservation and commutation the same statement: vanishing commutator, frozen expectation value (in every state, stationary or not). Commuting operators are also simultaneously diagonalizable, so energy and Q can be sharp together — conserved quantities provide the good quantum numbers used to label states, as n, l, m will label hydrogen.",
        },
      ],
    },
    {
      id: "qm-in-three-dimensions",
      title: "QM in Three Dimensions",
      subtitle: "The hydrogen atom — quantum mechanics's greatest exact triumph",
      sections: [
        {
          id: "separation-spherical",
          title: "Into Three Dimensions: Separation in Spherical Coordinates",
          content: `
<p>Promoting the Schrödinger equation to three dimensions is a matter of replacing the second derivative with the Laplacian:</p>
<p style="text-align:center;">−(ħ²/2m) ∇²ψ + V(<strong>r</strong>)ψ = Eψ</p>
<p>with momentum now the vector operator <strong>p̂</strong> = −iħ∇ and the commutators [x̂, p̂<sub>x</sub>] = iħ holding for each coordinate independently (x̂ commutes with p̂<sub>y</sub> — uncertainty only binds a coordinate to <em>its own</em> momentum). For the atomic problems ahead, the potential is <strong>central</strong>: V = V(r), depending only on distance to the origin. That symmetry begs for spherical coordinates (r, θ, φ), and Subject 23's separation-of-variables machinery — built on exactly this Laplacian — takes over.</p>
<p>Write ψ(r, θ, φ) = R(r)Y(θ, φ). Substituting into the TISE and multiplying through by −2mr²/ħ²RY, the equation splits cleanly: a piece depending only on r, plus a piece depending only on angles. Each must be constant, and writing the separation constant — with textbook foresight — as l(l + 1):</p>
<ul>
  <li><strong>Radial equation:</strong> depends on V(r) and on l; carries all the dynamics of the specific atom.</li>
  <li><strong>Angular equation:</strong> the same for <em>every</em> central potential — solve it once, use it forever. Its solutions are the spherical harmonics of the next section.</li>
</ul>
<p>The angular piece has a deep identity. The operator appearing in it is precisely L̂²/ħ², the squared orbital <strong>angular momentum</strong> — in a central potential, angular momentum is conserved (it commutes with Ĥ), which is <em>why</em> the separation works. Symmetry, conservation, separability: one fact in three costumes.</p>
<p>A useful simplification completes the setup. Substituting u(r) = rR(r) turns the radial equation into a one-dimensional Schrödinger equation on the half-line:</p>
<p style="text-align:center;">−(ħ²/2m) u″ + [ V(r) + ħ²l(l+1)/2mr² ] u = Eu</p>
<div class="key-concept">
  <h4>The effective potential</h4>
  <p>The extra term ħ²l(l+1)/2mr² is the <strong>centrifugal barrier</strong> — the quantum version of "angular momentum keeps you off the axis" from Subject 6's orbit analysis. Everything learned about 1D wells now applies verbatim to the radial problem: bound states, node counting, quantization by normalizability. Three dimensions has been tamed into one.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The same separation runs the quantum mechanics of any central force: the 3D harmonic oscillator (nuclear shell model), the deuteron, excitons in semiconductors, even quarkonium — charm–anticharm atoms bound by the strong force. Change V(r), re-solve only the radial equation.</p>
  </div>`,
        },
        {
          id: "spherical-harmonics",
          title: "The Angular Equation: Spherical Harmonics",
          content: `
<p>The angular equation separates once more, Y(θ, φ) = Θ(θ)Φ(φ), and the φ part is trivial: Φ″ = −m²Φ, so Φ(φ) = e<sup>imφ</sup>. But φ = 0 and φ = 2π are the <em>same physical direction</em>, so Φ must return to its value after a full turn: e<sup>im·2π</sup> = 1, forcing</p>
<p style="text-align:center;"><strong>m = 0, ±1, ±2, …</strong></p>
<p>Quantization by geometry — the wave must close on itself around the axis, exactly de Broglie's picture of Bohr orbits made rigorous.</p>
<p>The θ equation is Legendre's equation (Subject 23), and the same normalizability logic as the harmonic oscillator applies: solutions blow up at the poles unless a power series terminates, which happens only when the separation constant is l(l + 1) with l a non-negative integer, and |m| ≤ l. The surviving solutions are the associated Legendre functions, and the combined angular wavefunctions are the <strong>spherical harmonics</strong> Y<sub>l</sub><sup>m</sup>(θ, φ):</p>
<ul>
  <li><strong>l = 0, 1, 2, 3, …</strong> — the orbital quantum number; chemists' s, p, d, f labels.</li>
  <li><strong>m = −l, …, +l</strong> — the magnetic quantum number: 2l + 1 values for each l.</li>
</ul>
<p>Their physical meaning comes from angular momentum. The Y<sub>l</sub><sup>m</sup> are simultaneous eigenfunctions of L̂² and L̂<sub>z</sub>:</p>
<p style="text-align:center;">L̂² Y<sub>l</sub><sup>m</sup> = ħ² l(l+1) Y<sub>l</sub><sup>m</sup>,&nbsp;&nbsp;&nbsp; L̂<sub>z</sub> Y<sub>l</sub><sup>m</sup> = ħm Y<sub>l</sub><sup>m</sup></p>
<p>The magnitude of orbital angular momentum is quantized as ħ√(l(l+1)), and its z-component in integer steps of ħ. Note the strangeness: the maximum |L<sub>z</sub>| = lħ is <em>less</em> than |L| = ħ√(l(l+1)) — the angular momentum vector can never point exactly along any axis, because then all three components would be sharp, and L̂<sub>x</sub>, L̂<sub>y</sub>, L̂<sub>z</sub> do not commute.</p>
<div class="key-concept">
  <h4>Shapes you have seen before</h4>
  <p>Y₀⁰ is a sphere (s orbital); the three l = 1 harmonics are the two-lobed p orbitals; l = 2 gives the cloverleaf d orbitals. Every chemistry textbook's orbital pictures are plots of |Y<sub>l</sub><sup>m</sup>|² — pure geometry of angular momentum, identical for every central potential.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Spherical harmonics are the sphere's Fourier modes and show up wherever functions live on spheres: the cosmic microwave background's temperature map is analyzed as a sum over Y<sub>l</sub><sup>m</sup> (its famous power spectrum is energy per l), and so are Earth's gravity field and the vibrations of stars.</p>
</div>`,
        },
        {
          id: "hydrogen-atom",
          title: "The Hydrogen Atom Solved",
          content: `
<p>Now the main event. For hydrogen the potential is Coulomb attraction between electron and proton: V(r) = −e²/4πε₀r. Insert this into the radial equation with the centrifugal barrier and hunt for bound states (E &lt; 0).</p>
<p>The strategy mirrors the harmonic oscillator's analytic route. Examine the asymptotics: at large r the equation gives exponential decay u ~ e<sup>−κr</sup> with κ = √(−2mE)/ħ; near the origin the centrifugal term dominates and forces u ~ r<sup>l+1</sup>. Peel off both behaviors, expand what remains in a power series, and the recursion relation delivers the now-familiar verdict: unless the series <strong>terminates</strong>, the solution grows like e<sup>+2κr</sup> and cannot be normalized. Termination requires a certain combination of E and the series cutoff to be an integer n — and that single integer condition quantizes the energy:</p>
<p style="text-align:center; font-size:1.15em;"><strong>E<sub>n</sub> = −[ m/2ħ² (e²/4πε₀)² ] · 1/n² = −13.6 eV / n²,&nbsp;&nbsp; n = 1, 2, 3, …</strong></p>
<p>Bohr's formula — but this time <em>derived</em>, with no orbits, no ad hoc quantization rule, nothing but the Schrödinger equation and the demand that probability make sense. The series solutions are the associated Laguerre polynomials, and the natural length that falls out of the algebra is the <strong>Bohr radius</strong>:</p>
<p style="text-align:center;">a = 4πε₀ħ²/me² = 0.0529 nm</p>
<p>The ground state is ψ₁₀₀ = (1/√(πa³)) e<sup>−r/a</sup>: a fuzzy exponential cloud, densest at the center, with ⟨r⟩ = 1.5a. The most probable radius is exactly a — Bohr's orbit surviving as the peak of a probability distribution. The atom's size, its energy scale, its spectrum: all from ħ, m, e, ε₀.</p>
<div class="key-concept">
  <h4>Why atoms don't collapse — the real answer</h4>
  <p>Squeeze the electron cloud toward the nucleus and the potential energy drops, but confinement (uncertainty principle) drives the kinetic energy up as 1/a² — faster than the −1/a potential falls. The trade-off bottoms out at the Bohr radius with energy −13.6 eV. The stability of matter, which classical physics flatly could not deliver, is a two-line uncertainty-principle estimate.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The reduced-mass correction (the proton moves a little) shifts all levels by 1 part in 1836 — easily visible in spectrometers, and how deuterium was discovered in 1931: its lines sit slightly off hydrogen's.</p>
</div>`,
        },
        {
          id: "quantum-numbers-spectrum",
          title: "Quantum Numbers, Degeneracy, and the Spectrum",
          content: `
<p>Assemble the full solution: ψ<sub>nlm</sub>(r, θ, φ) = R<sub>nl</sub>(r) Y<sub>l</sub><sup>m</sup>(θ, φ). Three integers label every state of hydrogen, each with a physical meaning and a range fixed by the mathematics:</p>
<table>
  <thead>
    <tr><th>Number</th><th>Name</th><th>Allowed values</th><th>Controls</th></tr>
  </thead>
  <tbody>
    <tr><td>n</td><td>principal</td><td>1, 2, 3, …</td><td>energy: E<sub>n</sub> = −13.6 eV/n²</td></tr>
    <tr><td>l</td><td>orbital</td><td>0, 1, …, n − 1</td><td>|L| = ħ√(l(l+1)); orbital shape (s, p, d, f)</td></tr>
    <tr><td>m</td><td>magnetic</td><td>−l, …, +l</td><td>L<sub>z</sub> = mħ; orientation</td></tr>
  </tbody>
</table>
<p>The energy depends on n alone, so distinct (l, m) states share an energy level. Counting them: for given n, l runs 0 to n − 1 with 2l + 1 orientations each, and Σ(2l + 1) = <strong>n²</strong> degenerate states (soon doubled to 2n² by spin). The m-degeneracy follows from rotational symmetry — no axis is special until, say, a magnetic field picks one (the Zeeman effect splits the m levels, hence "magnetic quantum number"). The l-degeneracy is a special miracle of the pure 1/r potential; any deviation, as in multi-electron atoms, breaks it.</p>
<p>Now the payoff promised in the first chapter. An atom dropping from level n₂ to n₁ emits a photon with hν = E<sub>n₂</sub> − E<sub>n₁</sub>, giving:</p>
<p style="text-align:center;">1/λ = R (1/n₁² − 1/n₂²),&nbsp;&nbsp; R = m/4πcħ³ · (e²/4πε₀)² = 1.097 × 10⁷ m⁻¹</p>
<p>Rydberg's empirical constant, computed from fundamental constants, correct to experimental accuracy. The series named for their discoverers are just choices of the lower level: n₁ = 1 (Lyman, ultraviolet), n₁ = 2 (Balmer, the visible lines that started it all), n₁ = 3 (Paschen, infrared).</p>
<div class="key-concept">
  <h4>The calculation that convinced physics</h4>
  <p>One equation, one potential, zero fitted parameters — and out come the atom's size, its stability, its full spectrum, and the orbital shapes underlying chemistry. This 1926 calculation is why quantum mechanics was accepted with stunning speed despite its interpretive weirdness. It simply worked, to five decimal places.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Astronomers observe hydrogen atoms in states around n = 300 — "Rydberg atoms" nearly a hundredth of a millimetre across, bigger than some bacteria — via radio recombination lines from interstellar gas. In the lab, Rydberg atoms' exaggerated sensitivity makes them the basis of quantum-computing gates and exquisite field sensors.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "For any central potential V(r), the angular part of the wavefunction is always a spherical harmonic. Why?",
          options: [
            "Because all central potentials have the same strength",
            "Because the radial equation has no bound states otherwise",
            "Because separation of variables splits off an angular equation that involves only the angular-momentum operator L̂², independent of V(r)",
            "Because spherical harmonics are the only functions defined on a sphere",
          ],
          correctIndex: 2,
          explanation:
            "In spherical coordinates the Laplacian splits into a radial part and an angular part, and the angular part is L̂²/ħ²r² — the potential V(r) never touches it. So the angular problem is universal: solve it once (the Yₗᵐ) and reuse it for hydrogen, the 3D oscillator, quarkonium, anything central. Only the radial equation knows which atom you're doing.",
        },
        {
          question:
            "The magnetic quantum number m must be an integer because:",
          options: [
            "the energy must be negative for bound states",
            "the azimuthal factor e^(imφ) must return to the same value after a full 2π turn — the wavefunction has to be single-valued around the axis",
            "the Legendre series would diverge otherwise",
            "angular momentum is always positive",
          ],
          correctIndex: 1,
          explanation:
            "φ and φ + 2π label the same physical point, so e^(imφ) must be periodic: e^(2πim) = 1, forcing m ∈ {0, ±1, ±2, …}. It is quantization by pure geometry — the de Broglie wave must close smoothly on itself around the z-axis. (The θ equation then restricts |m| ≤ l.) Half-integer values, forbidden here, will sneak back in for spin, which involves no spatial wave at all.",
        },
        {
          question:
            "In the hydrogen atom, where does the quantization of energy Eₙ = −13.6 eV/n² come from in the honest derivation?",
          options: [
            "From requiring the radial power series to terminate — otherwise the wavefunction grows exponentially and cannot be normalized",
            "From the assumption that the electron travels in circular orbits with L = nħ",
            "From the boundary condition ψ = 0 at the Bohr radius",
            "From relativistic corrections to the electron's mass",
          ],
          correctIndex: 0,
          explanation:
            "No orbits are assumed anywhere. Solving the radial equation by series, the recursion drives non-terminating solutions to blow up like e^(+2κr) — unnormalizable. Termination happens only for special energies labeled by an integer n, and those are exactly Bohr's levels. The same 'quantization by normalizability' logic solved the harmonic oscillator: it is the deep origin of discreteness in bound systems.",
        },
        {
          question:
            "How many degenerate states (ignoring spin) share the hydrogen energy level Eₙ, and why does the count come out that way?",
          options: [
            "n states, one for each value of l",
            "2l + 1 states, from the orientations of the angular momentum",
            "2n states, counting reflections",
            "n² states: l runs from 0 to n − 1, each contributing 2l + 1 orientations, and Σ(2l+1) = n²",
          ],
          correctIndex: 3,
          explanation:
            "Energy depends only on n, so all allowed (l, m) pairs at that n are degenerate: Σ from l = 0 to n−1 of (2l+1) = n². The m-degeneracy reflects rotational symmetry (no preferred axis); the l-degeneracy is a hidden-symmetry accident of the pure 1/r potential, and it breaks in multi-electron atoms — the fact that makes the periodic table's filling order interesting. Spin doubles the count to 2n².",
        },
        {
          question:
            "The Balmer series — hydrogen's visible lines — corresponds to transitions:",
          options: [
            "from n = 1 up to higher levels",
            "from higher levels down to n = 2",
            "between states of the same n but different l",
            "from n = 2 down to n = 1",
          ],
          correctIndex: 1,
          explanation:
            "Each emitted photon carries hν = E(n₂) − E(n₁). Landing on n₁ = 1 gives the Lyman series (ultraviolet — the 1/1² term is big); landing on n₁ = 2 gives Balmer, whose photon energies happen to fall in the visible band, which is why these were the lines Balmer could see in 1885; n₁ = 3 (Paschen) is infrared. The Rydberg formula with R computed from ħ, m, e, ε₀ nails them all.",
        },
      ],
    },
    {
      id: "angular-momentum-and-spin",
      title: "Angular Momentum & Spin",
      subtitle: "Ladder algebra and the two-valued mystery of spin-½",
      sections: [
        {
          id: "angular-momentum-algebra",
          title: "Angular Momentum from Commutators Alone",
          content: `
<p>The hydrogen chapter got angular momentum from differential equations. There is a purer route — Dirac's ladder trick again — that needs <em>only the commutation relations</em>, and its extra generality will turn out to be a prophecy. Start from L = r × p and grind out the commutators (each step uses [x̂, p̂<sub>x</sub>] = iħ):</p>
<p style="text-align:center; font-size:1.05em;"><strong>[L̂<sub>x</sub>, L̂<sub>y</sub>] = iħL̂<sub>z</sub></strong>&nbsp;&nbsp;(and cyclic: y,z → x; z,x → y)</p>
<p>The three components are mutually incompatible — no state has two of them sharp (unless all are zero). But L̂² = L̂<sub>x</sub>² + L̂<sub>y</sub>² + L̂<sub>z</sub>² commutes with each component, so we can look for simultaneous eigenstates of L̂² and one component, conventionally L̂<sub>z</sub>. Everything now follows from algebra:</p>
<ol>
  <li><strong>Define ladder operators</strong> L̂<sub>±</sub> = L̂<sub>x</sub> ± iL̂<sub>y</sub>. The commutation relations give [L̂<sub>z</sub>, L̂<sub>±</sub>] = ±ħL̂<sub>±</sub>: applied to an eigenstate of L̂<sub>z</sub> with eigenvalue μ, L̂<sub>±</sub> produces an eigenstate with μ ± ħ. The z-component climbs and descends in rungs of ħ, while L̂² is untouched (it commutes with everything in sight).</li>
  <li><strong>The ladder is bounded.</strong> A component cannot exceed the magnitude: ⟨L̂<sub>x</sub>² + L̂<sub>y</sub>²⟩ ≥ 0 caps μ² by the L̂² eigenvalue. So there is a top state (killed by L̂<sub>+</sub>) and a bottom state (killed by L̂<sub>−</sub>).</li>
  <li><strong>Match top to bottom.</strong> Working out L̂<sub>∓</sub>L̂<sub>±</sub> = L̂² − L̂<sub>z</sub>² ∓ ħL̂<sub>z</sub> at the ends of the ladder: if the top eigenvalue is ħl, then L̂² = ħ²l(l+1), the bottom is −ħl, and the ladder from −l to +l must contain a whole number of ħ-steps: 2l must be an integer.</li>
</ol>
<p>Conclusion, from commutators alone:</p>
<p style="text-align:center;">L̂²: ħ²l(l+1) with <strong>l = 0, ½, 1, 3/2, 2, …</strong>&nbsp;&nbsp;&nbsp; L̂<sub>z</sub>: ħm, m = −l, …, +l</p>
<div class="key-concept">
  <h4>The algebra knows more than the wavefunctions</h4>
  <p>The differential-equation route (spherical harmonics) allowed only integer l — single-valuedness of e<sup>imφ</sup> demanded it. But the algebra, which never mentions space, also permits <strong>half-integer</strong> values: l = ½, 3/2, … . For fifty years of classical physics that would be a curiosity to discard. In quantum mechanics it is a vacancy in the theory — a kind of angular momentum with no orbital wavefunction. Nature, it turns out, filled the vacancy.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>This ladder argument is one of physics' great recyclables: the same algebra classifies rotational states of molecules and nuclei, the isospin of particle physics, and the qubit rotations of quantum computing. Learn it once, use it for a career.</p>
</div>`,
        },
        {
          id: "spin-half",
          title: "Spin-½: An Angular Momentum With No Orbit",
          content: `
<p>Electrons carry the half-integer option. Every electron has an intrinsic angular momentum — <strong>spin</strong> — with s = ½, fixed forever: it cannot be raised, lowered, or removed. It is not the electron physically twirling (a spinning ball of the electron's size would need its surface moving faster than light); spin is a purely quantum property with no classical picture, as fundamental to the electron as its charge and mass. From the ladder algebra with s = ½:</p>
<p style="text-align:center;">Ŝ² = ħ²·(½)(3/2) = (3/4)ħ²,&nbsp;&nbsp;&nbsp; S<sub>z</sub> = ±ħ/2</p>
<p>Just two states: <strong>spin up</strong> |↑⟩ and <strong>spin down</strong> |↓⟩. The Hilbert space is two-dimensional — the simplest quantum system there is — and every state is a <strong>spinor</strong>:</p>
<p style="text-align:center;">|χ⟩ = a|↑⟩ + b|↓⟩,&nbsp;&nbsp; |a|² + |b|² = 1</p>
<p>Operators on a two-dimensional space are 2×2 matrices. Writing Ŝ = (ħ/2)σ defines the <strong>Pauli matrices</strong>:</p>
<p style="text-align:center;">σ<sub>x</sub> = [[0, 1], [1, 0]],&nbsp;&nbsp; σ<sub>y</sub> = [[0, −i], [i, 0]],&nbsp;&nbsp; σ<sub>z</sub> = [[1, 0], [0, −1]]</p>
<p>(rows listed left to right). They are Hermitian, each squares to the identity, and they reproduce the angular-momentum commutators exactly — the whole ladder machinery in miniature, now checkable by hand-multiplying matrices. Diagonalize σ<sub>x</sub> and you find its eigenstates are (|↑⟩ ± |↓⟩)/√2: a state with definite S<sub>z</sub> is an equal superposition of the S<sub>x</sub> outcomes, and vice versa. Measuring spin along any axis <em>always</em> returns ±ħ/2 — only the probabilities depend on the state.</p>
<div class="key-concept">
  <h4>Why spin matters everywhere</h4>
  <p>Spin gives the electron a magnetic moment, so it couples to magnetic fields: that underlies MRI (proton spins), the 21 cm line mapping galaxies, and magnetic materials. Doubling every orbital state (↑ or ↓) turns hydrogen's n² degeneracy into 2n² — the factor of 2 the periodic table will demand. And a two-state quantum system holding superpositions a|↑⟩ + b|↓⟩ is precisely a <strong>qubit</strong>: quantum computing is applied spin-½.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A spin-½ state reverses sign under a 360° rotation — you must turn it 720° to come back to itself. This is not philosophy: neutron interferometers physically rotate one path's spin and observe the interference minus sign. Objects with this property (spinors) simply have no classical counterpart.</p>
</div>`,
        },
        {
          id: "stern-gerlach",
          title: "Stern–Gerlach: Quantum Measurement Made Visible",
          content: `
<p>The experiment that revealed spin is also the cleanest demonstration of quantum measurement itself. In 1922 Stern and Gerlach fired a beam of silver atoms (one unpaired outer electron, so a net magnetic moment) through a strongly <em>non-uniform</em> magnetic field. A magnetic moment in a field gradient feels a force proportional to its component along the gradient, μ<sub>z</sub> — so the beam's deflection measures μ<sub>z</sub>, and hence S<sub>z</sub>.</p>
<p>Classical prediction: the atoms' moments point every which way, so μ<sub>z</sub> takes a continuum of values and the beam should smear into a vertical band. Observed: the beam splits cleanly into <strong>exactly two spots</strong>. S<sub>z</sub> takes only the values ±ħ/2. Space quantization, photographed.</p>
<p>The real lesson comes from chaining the apparatus:</p>
<ol>
  <li><strong>SG-z then SG-z:</strong> take the ↑ beam from one z-analyzer into a second. All atoms exit ↑. Measurement is repeatable — the first measurement left the atoms in the S<sub>z</sub> eigenstate |↑⟩.</li>
  <li><strong>SG-z then SG-x:</strong> feed the ↑ beam into an x-analyzer. It splits <strong>50/50</strong>. In the state |↑⟩, S<sub>x</sub> is genuinely undetermined — as the Pauli matrices showed, |↑⟩ is an equal superposition of the two S<sub>x</sub> eigenstates.</li>
  <li><strong>SG-z, SG-x, then SG-z again:</strong> take only the +x beam and re-measure S<sub>z</sub>. It splits 50/50 — the atoms have <em>forgotten</em> they were all ↑. Measuring S<sub>x</sub> collapsed the state onto an S<sub>x</sub> eigenstate, erasing the previous S<sub>z</sub> information.</li>
</ol>
<div class="key-concept">
  <h4>Incompatibility, physically enacted</h4>
  <p>[Ŝ<sub>z</sub>, Ŝ<sub>x</sub>] = iħŜ<sub>y</sub> ≠ 0: the two observables share no eigenstates, so sharpening one necessarily unsharpens the other. Experiment 3 is the uncertainty principle as a beam-line demonstration — not noise, not clumsiness, but the geometry of a two-dimensional state space. Modern textbooks (Sakurai, and Subject 27) <em>start</em> from these experiments because they force the formalism on you with no wavefunctions to hide behind.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Stern and Gerlach nearly missed the discovery: the silver deposit was invisible until Stern's breath — sulfurous from cheap cigars — tarnished the traces into visibility. Ironically, they thought they had confirmed Bohr's (wrong) orbital theory; electron spin wasn't proposed until 1925. Right split, right quantum mechanics, initially wrong explanation.</p>
</div>`,
        },
        {
          id: "addition-of-angular-momenta",
          title: "Adding Angular Momenta: Singlets and Triplets",
          content: `
<p>Real systems stack angular momenta: an electron has orbital <em>and</em> spin angular momentum; a helium atom has two electron spins; a proton and electron form hydrogen. How do quantum angular momenta add? Not like classical vectors — components don't commute, so the pieces can't all be simultaneously sharp — but the answer has a clean pattern.</p>
<p>Take the simplest case: two spin-½ particles. Each can be ↑ or ↓, giving a four-dimensional space: ↑↑, ↑↓, ↓↑, ↓↓. These are eigenstates of total S<sub>z</sub> = S<sub>z</sub><sup>(1)</sup> + S<sub>z</sub><sup>(2)</sup> (with m = 1, 0, 0, −1), but not all are eigenstates of total Ŝ². Reorganizing (apply the lowering operator to ↑↑ and track what appears):</p>
<ul>
  <li><strong>Triplet, s = 1</strong> (symmetric under particle exchange): |1,1⟩ = ↑↑;&nbsp; |1,0⟩ = (↑↓ + ↓↑)/√2;&nbsp; |1,−1⟩ = ↓↓.</li>
  <li><strong>Singlet, s = 0</strong> (antisymmetric): |0,0⟩ = (↑↓ − ↓↑)/√2.</li>
</ul>
<p>Two spins-½ make total spin 1 or 0: ½ ⊗ ½ = 1 ⊕ 0, and 4 = 3 + 1 states check out. Notice the two m = 0 states: <em>which</em> combination of ↑↓ and ↓↑ you take determines the total spin — a first taste of entanglement, since the singlet cannot be written as "particle 1 in some state, particle 2 in some state." The singlet is the workhorse of Bell-test experiments in Subject 27.</p>
<p>The general rule: combining angular momenta j₁ and j₂ yields every total j from |j₁ − j₂| up to j₁ + j₂ in integer steps, each once. The coefficients expressing |j, m⟩ in terms of the product states are the <strong>Clebsch–Gordan coefficients</strong> — tabulated in every quantum text, derived by exactly the ladder-and-orthogonality game played above.</p>
<div class="key-concept">
  <h4>Why this matters immediately</h4>
  <p>Coupling electron spin to orbital angular momentum (j = l ± ½) produces the fine structure of spectra — Subject 27's first perturbation calculation. Coupling the electron's spin to the proton's splits hydrogen's ground state into triplet and singlet, a sliver of energy whose photon is the <strong>21 cm line</strong> — the radio signal astronomers use to map hydrogen across the universe. And the singlet's perfect anticorrelation is the raw material of quantum information.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The 21 cm transition is fantastically forbidden — an isolated atom takes about 11 million years, on average, to make the flip. Interstellar space wins by volume: with 10⁶⁷ hydrogen atoms in a galaxy, the sky hums at 1420 MHz anyway.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The purely algebraic (ladder-operator) treatment of angular momentum allows l = 0, ½, 1, 3/2, … while the spherical-harmonic treatment allows only integers. What accounts for the difference?",
          options: [
            "The algebraic method contains an error fixed by the differential equations",
            "Half-integer values only occur in relativistic quantum mechanics",
            "The commutators are only approximately valid for half-integer l",
            "Single-valuedness of the spatial wavefunction e^(imφ) imposes integer m; the algebra never invokes a spatial wavefunction, leaving room for half-integer angular momenta — which nature uses for spin",
          ],
          correctIndex: 3,
          explanation:
            "The extra constraint in the wavefunction route is geometric: e^(imφ) must return to itself after a 2π turn, forcing integer m and hence integer l. The commutation relations alone don't know about physical space, so they also permit 2l = odd. Spin occupies exactly this algebraic vacancy: an angular momentum with no orbital wavefunction, hence free to be half-integer.",
        },
        {
          question:
            "An electron is prepared spin-up along z, i.e. in the state |↑⟩. Its spin is then measured along the x-axis. The result is:",
          options: [
            "0, since the spin points along z",
            "+ħ/2 or −ħ/2 with equal probability — |↑⟩ is an equal superposition of the Sₓ eigenstates",
            "+ħ/2 with certainty",
            "a random value between −ħ/2 and +ħ/2",
          ],
          correctIndex: 1,
          explanation:
            "Any spin-½ measurement along any axis returns only ±ħ/2 — eigenvalues are the only possible outcomes. Diagonalizing σₓ shows its eigenstates are (|↑⟩ ± |↓⟩)/√2, so |↑⟩ has amplitude 1/√2 for each: 50/50. Since [Ŝz, Ŝx] ≠ 0, no state can be sharp in both — this is the sequential Stern–Gerlach result.",
        },
        {
          question:
            "In the three-stage Stern–Gerlach experiment (measure Sz, keep ↑; measure Sx, keep +x; measure Sz again), the final Sz measurement splits 50/50. Why?",
          options: [
            "The Sx measurement collapsed the atoms into an Sx eigenstate, which erased the earlier Sz information",
            "The magnetic fields randomize the spins through heating",
            "Half the atoms were secretly spin-down all along",
            "The second apparatus was misaligned",
          ],
          correctIndex: 0,
          explanation:
            "After the Sx measurement each atom is in an Sx eigenstate — which is an equal superposition of ↑ and ↓ along z. The prior 'definitely ↑' information is genuinely gone, not hidden: measurement updates the state itself. Chaining incompatible measurements like this is quantum non-commutativity enacted with magnets and a beam of atoms.",
        },
        {
          question:
            "Two spin-½ particles combine into singlet and triplet states. Which is the singlet?",
          options: [
            "(↑↓ + ↓↑)/√2 — symmetric, total spin 1",
            "↑↑ — both spins aligned",
            "(↑↓ − ↓↑)/√2 — antisymmetric under exchange, total spin 0",
            "↓↓ — both spins reversed",
          ],
          correctIndex: 2,
          explanation:
            "The four product states reorganize as ½ ⊗ ½ = 1 ⊕ 0: three symmetric states with s = 1 (↑↑, (↑↓+↓↑)/√2, ↓↓) and one antisymmetric singlet (↑↓−↓↑)/√2 with s = 0. The minus sign matters: it makes the state entangled and rotationally invariant, with the two spins perfectly anticorrelated along every axis — the standard resource in Bell tests. Exchange symmetry of these states drives the next chapter.",
        },
        {
          question:
            "Combining angular momenta j₁ = 1 and j₂ = ½ yields which total angular momenta?",
          options: [
            "j = 3/2 only",
            "j = 3/2 or j = 1/2",
            "j = 1 or j = 0",
            "j = 3/2, 1, or 1/2",
          ],
          correctIndex: 1,
          explanation:
            "Totals run from |j₁ − j₂| to j₁ + j₂ in integer steps: here 1/2 and 3/2, each appearing once. Dimension check: (2·1+1)(2·½+1) = 6 product states = 4 (j=3/2) + 2 (j=1/2). This exact case — orbital l = 1 plus spin ½ giving j = 1/2 or 3/2 — produces the fine-structure doublets of atomic spectra, like sodium's famous pair of yellow D lines.",
        },
      ],
    },
    {
      id: "identical-particles",
      title: "Identical Particles",
      subtitle: "Bosons, fermions, and why chemistry exists",
      sections: [
        {
          id: "indistinguishability-symmetrization",
          title: "Radical Indistinguishability and Symmetrization",
          content: `
<p>Classically, "identical" particles are still trackable: film two colliding billiard balls and you can always say which ended up where, because each follows a continuous trajectory. Quantum particles have no trajectories — only overlapping wavefunctions — so when two electrons' clouds mingle and two electrons later emerge, the question "which one is which?" has <strong>no answer, even in principle</strong>. Electrons carry no serial numbers. This is not ignorance; it is a structural fact, and it has teeth.</p>
<p>Write a two-particle state Ψ(1, 2) (coordinates and spins of each). Define the exchange operator P̂: swap the particle labels. Since the particles are truly identical, the Hamiltonian cannot notice the swap, and no observable can change: the swapped state may differ only by a phase. Swapping twice returns the original, so that phase squares to 1:</p>
<p style="text-align:center; font-size:1.05em;"><strong>Ψ(2, 1) = ±Ψ(1, 2)</strong></p>
<p>Two — and only two — kinds of particle can exist:</p>
<ul>
  <li><strong>Bosons</strong> (symmetric, + sign): photons, and all particles of <em>integer</em> spin.</li>
  <li><strong>Fermions</strong> (antisymmetric, − sign): electrons, protons, neutrons — all particles of <em>half-integer</em> spin.</li>
</ul>
<p>The spin–statistics connection just quoted is an empirical law at this level; proving it requires relativistic quantum field theory. But its consequences are immediate. Given two one-particle states ψ<sub>a</sub> and ψ<sub>b</sub>, identical particles cannot occupy the plain product ψ<sub>a</sub>(1)ψ<sub>b</sub>(2) — that state illegally distinguishes them. The allowed combinations are:</p>
<p style="text-align:center;">Ψ<sub>±</sub> = [ψ<sub>a</sub>(1)ψ<sub>b</sub>(2) ± ψ<sub>b</sub>(1)ψ<sub>a</sub>(2)] / √2</p>
<div class="key-concept">
  <h4>The most consequential minus sign in science</h4>
  <p>Set ψ<sub>a</sub> = ψ<sub>b</sub> in the fermion (−) combination and the state <em>vanishes identically</em>. Two identical fermions cannot occupy the same single-particle state. That is the Pauli exclusion principle — not an extra postulate but an automatic consequence of antisymmetry. The next sections show it holding up atoms, chemistry, and dead stars.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Indistinguishability is testable: in Hong–Ou–Mandel interference, two identical photons entering a beam splitter always exit together — the 'one each way' amplitudes cancel by bosonic symmetry. The experiment works only if the photons are identical in every degree of freedom; make them distinguishable in any way and the effect vanishes.</p>
</div>`,
        },
        {
          id: "pauli-and-exchange-forces",
          title: "Pauli Exclusion and Exchange 'Forces'",
          content: `
<p>The symmetrization requirement rearranges where particles like to be, even with no force acting between them. Compute ⟨(x₁ − x₂)²⟩ — the mean-square separation — in the states Ψ<sub>±</sub> and compare with distinguishable particles. The cross terms produce a purely quantum correction:</p>
<ul>
  <li><strong>Symmetric (boson-like) states pull inward:</strong> identical bosons are found closer together than distinguishable particles would be — they bunch.</li>
  <li><strong>Antisymmetric (fermion-like) states push apart:</strong> the wavefunction has a node where the particles coincide — they antibunch, as if repelling.</li>
</ul>
<p>These <strong>exchange forces</strong> are not forces at all — no field, no potential, nothing in the Hamiltonian — just interference geometry in the joint wavefunction. Yet their energetic consequences are enormous, and spin is the hinge. For two electrons, it is the <em>total</em> state (space × spin) that must be antisymmetric. Using the last chapter's result:</p>
<p style="text-align:center;">spin singlet (antisym.) → <strong>symmetric</strong> spatial state;&nbsp;&nbsp; spin triplet (sym.) → <strong>antisymmetric</strong> spatial state</p>
<p>So spin alignment controls spatial proximity. In the hydrogen molecule, two electrons in the spin singlet may share a symmetric spatial state that piles charge <em>between</em> the protons, gluing them — the <strong>covalent bond</strong> is exchange symmetry at work. In an iron atom, electrons with parallel spins are forced apart spatially, reducing their Coulomb repulsion — making parallel alignment energetically favorable. That "exchange interaction," orders of magnitude stronger than any magnetic dipole coupling, is why <strong>ferromagnetism</strong> exists.</p>
<div class="key-concept">
  <h4>Degeneracy pressure: matter's last stand</h4>
  <p>Pack fermions together and exclusion forces them into ever-higher momentum states — filled from the bottom up to the "Fermi level" — producing a pressure that persists at absolute zero. Electron degeneracy pressure is what actually makes solids incompressible (electrostatics alone wouldn't do it), and it is all that holds up a <strong>white dwarf</strong> star against gravity. Above 1.4 solar masses (Chandrasekhar's limit) it fails; the collapse proceeds to <em>neutron</em> degeneracy pressure — a neutron star — or beyond, to a black hole. The fate of stars is decided by a minus sign.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Bosons do the opposite, and it's just as dramatic: photons bunching into one mode is a laser; helium-4 atoms crowding into one ground state below 2.2 K flow with zero viscosity (superfluidity); dilute atomic gases do the same at nanokelvins (Bose–Einstein condensation, Nobel 2001). Subject 28 derives all three from quantum statistics.</p>
</div>`,
        },
        {
          id: "periodic-table",
          title: "The Periodic Table, Explained",
          content: `
<p>Now assemble the whole subject into its finest trophy: why chemistry looks the way it does. An atom of atomic number Z has Z electrons in hydrogen-like states around the nucleus. Without Pauli, every electron would sink into the 1s ground state; all atoms would be small, inert, and nearly identical, and there would be no chemistry. With Pauli, each spatial orbital (n, l, m) holds at most <strong>two</strong> electrons (spin ↑ and ↓), so electrons stack into shells, filling from the bottom:</p>
<table>
  <thead>
    <tr><th>Subshell</th><th>Orbitals (2l+1)</th><th>Capacity</th></tr>
  </thead>
  <tbody>
    <tr><td>1s</td><td>1</td><td>2 &nbsp;→ helium closes</td></tr>
    <tr><td>2s, 2p</td><td>1 + 3</td><td>8 &nbsp;→ neon closes</td></tr>
    <tr><td>3s, 3p</td><td>1 + 3</td><td>8 &nbsp;→ argon closes</td></tr>
    <tr><td>4s, 3d, 4p</td><td>1 + 5 + 3</td><td>18 &nbsp;→ krypton closes</td></tr>
  </tbody>
</table>
<p>The magic numbers 2, 8, 8, 18 — the periodic table's row lengths — are the counts 2(2l + 1) of antisymmetry-permitted slots. But why does 4s fill before 3d, when hydrogen has them degenerate? <strong>Screening.</strong> In a multi-electron atom each electron sees the nucleus veiled by the others. Low-l orbitals penetrate close to the nucleus (recall u ~ r<sup>l+1</sup>: less centrifugal barrier), taste more of the full nuclear charge, and drop in energy; high-l orbitals ride outside the screen. Energy now depends on n <em>and</em> l — hydrogen's accidental l-degeneracy is broken — and the resulting filling order produces the table's actual, slightly lopsided shape, transition metals and all.</p>
<p>Chemistry then reads off the outermost, loosest electrons:</p>
<ul>
  <li><strong>Alkali metals</strong> (Li, Na, K): one electron beyond a closed shell — weakly bound, eagerly donated. Violently reactive.</li>
  <li><strong>Halogens</strong> (F, Cl): one hole short of closure — aggressive electron acceptors.</li>
  <li><strong>Noble gases</strong> (He, Ne, Ar): closed shells, spherical, high ionization energy — chemically aloof.</li>
</ul>
<div class="key-concept">
  <h4>The claim, made good</h4>
  <p>Mendeleev's 1869 table was a brilliant empirical filing system. Quantum mechanics explains it: hydrogen's quantum numbers (Ĥψ = Eψ in a Coulomb field) supply the slots, spin doubles them, antisymmetry rations them, screening orders them. Every valence, every reaction, every material property traces back to the machinery of this subject. Physics does not just underlie chemistry — this chapter <em>is</em> chemistry's foundation.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Element 118, oganesson, closes the seventh row exactly where the slot-counting says it should. Relativity intrudes at high Z, though: gold owes its color and mercury its liquidity to inner electrons moving at relativistic speeds — a taste of why Subject 27 pushes toward relativistic quantum theory.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why does the wavefunction of two identical particles have to satisfy Ψ(2,1) = ±Ψ(1,2)?",
          options: [
            "Because the Schrödinger equation is second order in space",
            "Because energy conservation requires it",
            "Because swapping truly identical particles can change the state by at most a phase, and swapping twice must restore the original — so the phase squares to 1",
            "Because particles must be in eigenstates of the Hamiltonian",
          ],
          correctIndex: 2,
          explanation:
            "No observable can distinguish the swapped configuration — identical particles carry no labels — so exchange multiplies the state by a phase factor. Exchanging twice is the identity, forcing the phase to be +1 (bosons, integer spin) or −1 (fermions, half-integer spin). This single sign choice splits all particles into two families with radically different collective behavior.",
        },
        {
          question:
            "The Pauli exclusion principle is best understood as:",
          options: [
            "an automatic consequence of antisymmetry — the two-fermion state ψ_a(1)ψ_a(2) − ψ_a(1)ψ_a(2) vanishes identically when both particles occupy the same state",
            "a repulsive force between electrons at short range",
            "an independent law with no connection to exchange symmetry",
            "a result of the electrons' electric charge",
          ],
          correctIndex: 0,
          explanation:
            "Set ψ_a = ψ_b in the antisymmetric combination and it is identically zero — no such state exists in the Hilbert space. Exclusion isn't a force and isn't separate from symmetrization; it's the antisymmetry requirement showing its teeth. Neutral fermions (neutrons, neutrinos) obey it just as strictly as charged ones.",
        },
        {
          question:
            "Two electrons are in the spin triplet (symmetric) state. Their spatial wavefunction must therefore be:",
          options: [
            "symmetric, so they huddle together",
            "antisymmetric — it vanishes when the electrons coincide, keeping them apart and lowering their Coulomb repulsion",
            "a plain product state with no symmetry",
            "zero — triplet states are forbidden for electrons",
          ],
          correctIndex: 1,
          explanation:
            "The total (space × spin) state of two electrons must be antisymmetric. Symmetric spin forces antisymmetric space, which has a node at coincidence: parallel-spin electrons avoid each other spatially. This 'exchange interaction' lowers the repulsion energy of aligned spins — the mechanism behind Hund's rules and, in iron, ferromagnetism. No new force is involved, only wavefunction geometry.",
        },
        {
          question:
            "What holds up a white dwarf star against its own gravity?",
          options: [
            "Nuclear fusion in its core",
            "Radiation pressure from trapped photons",
            "Electron degeneracy pressure — the Pauli principle forces electrons into high-momentum states even at zero temperature",
            "Magnetic-field pressure",
          ],
          correctIndex: 2,
          explanation:
            "A white dwarf has exhausted its fuel; no fusion burns. Compression forces its electrons — which cannot share states — up into ever higher momentum levels, generating a pressure that survives at absolute zero. It balances gravity up to Chandrasekhar's 1.4-solar-mass limit; beyond that, collapse continues to neutron degeneracy (neutron star) or a black hole. Stellar corpses are Pauli-principle laboratories.",
        },
        {
          question:
            "Why do the rows of the periodic table have lengths 2, 8, 8, 18, …?",
          options: [
            "Because nuclei become unstable beyond those electron counts",
            "Because those are the numbers of protons that fit in each nuclear shell",
            "Because electrons repel each other in groups of eight",
            "Because each subshell holds 2(2l+1) electrons — orbital slots (2l+1) doubled by spin — and screening sets the order in which subshells fill",
          ],
          correctIndex: 3,
          explanation:
            "Hydrogen-like quantum numbers supply the orbitals: a subshell of given l has 2l+1 orientations, each holding two spins (Pauli). Counting filled subshells between noble-gas closures gives 2 (1s), 8 (2s+2p), 8 (3s+3p), 18 (4s+3d+4p). Screening breaks hydrogen's l-degeneracy — penetrating low-l orbitals fall below high-l ones (4s before 3d) — producing the table's actual layout. Chemistry is applied quantum mechanics.",
        },
      ],
    },
  ],
};
