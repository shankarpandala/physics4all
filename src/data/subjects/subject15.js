export const subject15 = {
  id: "modern-physics",
  number: 15,
  title: "Modern Physics",
  description:
    "The first quantitative pass at the twentieth century: special relativity, photons, wave-particle duality, the nucleus, semiconductors — and a tour of the frontier that motivates everything ahead.",
  phase: 3,
  chapters: [
    {
      id: "special-relativity-intro",
      title: "Special Relativity Intro",
      subtitle: "Two postulates that rewrite space and time",
      sections: [
        {
          id: "the-two-postulates",
          title: "The Two Postulates and the Death of Simultaneity",
          content: `
<p>In 1905 Einstein built special relativity on just two assumptions, both of which sound almost too reasonable to be revolutionary:</p>
<ol>
  <li><strong>The principle of relativity:</strong> the laws of physics are identical in every inertial frame — every frame moving at constant velocity. There is no experiment you can do inside a smoothly moving train that reveals whether you are moving.</li>
  <li><strong>The invariance of light speed:</strong> light in vacuum travels at c ≈ 3.00 × 10⁸ m/s in <em>every</em> inertial frame, regardless of the motion of the source or the observer.</li>
</ol>
<p>The second postulate is the shocking one. If you drive at 30 m/s and throw a ball forward at 10 m/s, the ground sees the ball at 40 m/s — velocities add. But if you switch on your headlights, both you <em>and</em> a pedestrian measure the light moving at exactly c. Not c + 30 m/s. Experiments, most famously Michelson–Morley in 1887, kept confirming this stubborn fact.</p>
<p>Something has to give, and what gives is our intuition that time and space are absolute. The first casualty is <strong>simultaneity</strong>. Imagine a light flash at the exact centre of a moving train carriage. A passenger sees the flash reach the front and back walls at the same instant — the light travels equal distances at speed c. An observer on the platform also sees the light travel at c in both directions, but for her the back wall rushes <em>toward</em> the flash while the front wall runs <em>away</em>. She concludes the light hits the back wall first. Both observers are right. Two events that are simultaneous in one frame are not simultaneous in another.</p>
<div class="key-concept">
  <h4>Key Concept: "At the same time" is frame-dependent</h4>
  <p>Simultaneity is not absolute. Once you accept that light speed is the same for everyone, the order and timing of distant events depends on your state of motion. Time dilation and length contraction are direct consequences of this single idea.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein reportedly traced the idea to a teenage daydream: what would a light wave look like if you could ride alongside it? Maxwell's equations gave no consistent answer for a "frozen" light wave — so Einstein concluded no observer can ever catch up to light.</p>
</div>`,
        },
        {
          id: "time-dilation",
          title: "Time Dilation: Moving Clocks Run Slow",
          content: `
<p>Take a "light clock": a photon bouncing between two mirrors separated by a fixed distance, each bounce one tick. To an observer watching this clock fly past at speed v, the photon travels a longer, zig-zag path — yet still at speed c. Longer path at the same speed means each tick takes longer. This is <strong>time dilation</strong>: a moving clock runs slow as measured from another frame.</p>
<p>The maths delivers a precise factor, the <strong>Lorentz factor γ</strong> (gamma):</p>
<p style="text-align:center"><strong>γ = 1 / √(1 − v²/c²)</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Δt = γ Δt₀</strong></p>
<p>Here Δt₀ is the <strong>proper time</strong> — the time between two events measured by a clock present at both events (the astronaut's own wristwatch). Any other frame measures the longer time Δt. Since γ ≥ 1 always, moving clocks never run fast, only slow.</p>
<ul>
  <li>v = 0.1c → γ ≈ 1.005 (a 0.5% effect)</li>
  <li>v = 0.6c → γ = 1 / √(1 − 0.36) = 1 / √0.64 = <strong>1.25</strong></li>
  <li>v = 0.8c → γ = 1 / √(1 − 0.64) = 1 / 0.6 ≈ <strong>1.67</strong></li>
  <li>v = 0.998c → γ ≈ <strong>15.8</strong></li>
</ul>
<p><strong>Worked example:</strong> a spacecraft passes Earth at 0.8c and its pilot times a 30-minute nap (proper time, since her watch is with her the whole flight). Mission control measures Δt = γ Δt₀ = 1.67 × 30 min ≈ <strong>50 minutes</strong>. Neither measurement is "wrong" — they are measurements of the same pair of events from different frames.</p>
<div class="did-you-know">
  <h4>Did you know? Muons prove it every second</h4>
  <p>Muons created by cosmic rays 15 km up live only 2.2 μs on average. Even at 0.998c they should travel just c × 2.2 μs ≈ 660 m before decaying — yet detectors at sea level count them in abundance. At γ ≈ 15.8 their lab-frame lifetime stretches to about 35 μs, enough to cover roughly 10 km. Time dilation is not philosophy; it is particle-detector data, and GPS satellites must correct for it or your position would drift by kilometres per day.</p>
</div>`,
        },
        {
          id: "length-contraction",
          title: "Length Contraction: Moving Rulers Shrink",
          content: `
<p>If moving observers disagree about time, they must also disagree about distance — otherwise they would disagree about speed, which each can measure directly. The result is <strong>length contraction</strong>: an object moving relative to you is shortened <em>along its direction of motion</em>:</p>
<p style="text-align:center"><strong>L = L₀ / γ</strong></p>
<p>L₀ is the <strong>proper length</strong>, measured in the frame where the object is at rest. Dimensions perpendicular to the motion are unaffected — a passing spaceship looks squashed lengthwise, not thinner.</p>
<p><strong>Worked example:</strong> a spacecraft with proper length L₀ = 100 m flies past a space station at 0.6c, so γ = 1.25. The station measures its length as L = 100 / 1.25 = <strong>80 m</strong>. Meanwhile the crew, for whom the ship is at rest, measure the full 100 m — and instead see the <em>station</em> contracted.</p>
<p>Length contraction is the flip side of the muon story. In the muon's own frame its clock ticks normally, so how does it survive the trip to the ground? Because in that frame the 15 km of atmosphere is rushing toward it at 0.998c and is contracted to 15 km / 15.8 ≈ <strong>0.95 km</strong> — a distance a muon can easily cross in 2.2 μs. Two frames, two explanations (dilated time vs contracted distance), one agreed-upon fact: the muon reaches the detector.</p>
<table>
  <thead>
    <tr><th>Quantity</th><th>Measured in rest frame</th><th>Measured by moving observer</th></tr>
  </thead>
  <tbody>
    <tr><td>Time interval</td><td>Δt₀ (proper, shortest)</td><td>γ Δt₀ (longer)</td></tr>
    <tr><td>Length along motion</td><td>L₀ (proper, longest)</td><td>L₀ / γ (shorter)</td></tr>
    <tr><td>Speed of light</td><td>c</td><td>c</td></tr>
  </tbody>
</table>
<div class="analogy">
  <h3>Analogy: Perspective, but for spacetime</h3>
  <p>A distant building "looks small" but nobody thinks it shrank — apparent size depends on viewpoint. Relativity says measured durations and lengths likewise depend on your frame of motion. The difference is that these are not optical illusions: they are what careful measurements with real clocks and rulers actually give.</p>
</div>`,
        },
        {
          id: "mass-energy",
          title: "E = mc²: Mass Is Frozen Energy",
          content: `
<p>Push relativity through momentum and energy and a bombshell falls out: mass and energy are the same physical quantity in different units. A body of mass m at rest carries a <strong>rest energy</strong></p>
<p style="text-align:center"><strong>E₀ = mc²</strong></p>
<p>and the conversion rate c² = 9.00 × 10¹⁶ J/kg is enormous. One kilogram of anything — water, rock, socks — stores 9 × 10¹⁶ J, roughly the output of a large power station running for three years. Chemical reactions barely scratch this reservoir; nuclear reactions tap about 0.1–1% of it, which is why they are a million times more energetic per kilogram than burning fuel.</p>
<p><strong>Worked example 1:</strong> the Sun radiates 3.8 × 10²⁶ W. The mass it converts each second is m = E/c² = 3.8 × 10²⁶ / 9.0 × 10¹⁶ ≈ <strong>4.2 × 10⁹ kg</strong> — four million tonnes per second, sustained for billions of years, yet a negligible fraction of the Sun's 2 × 10³⁰ kg.</p>
<p><strong>Worked example 2:</strong> an electron and a positron (each with rest energy 0.511 MeV) annihilate at rest into two photons. Total energy released: 2 × 0.511 = <strong>1.022 MeV</strong>, shared as two 0.511 MeV gamma photons flying in opposite directions to conserve momentum. This exact energy signature is how PET scanners locate tumours.</p>
<p>The full statement for a moving body is E = γmc²: total energy grows with speed, and as v → c, γ → ∞. Accelerating any massive object to light speed would take infinite energy — which is relativity's polite way of saying c is a hard speed limit for matter.</p>
<div class="key-concept">
  <h4>Key Concept: Mass is a form of energy bookkeeping</h4>
  <p>Whenever a system releases energy E — by radiation, by binding together, by decay — its mass drops by exactly Δm = E/c². A stretched spring is (immeasurably) heavier than a relaxed one; a helium nucleus is measurably lighter than its separated parts. Chapter 4 turns that mass deficit into nuclear power-plant numbers.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Which statement correctly expresses Einstein's second postulate?",
          options: [
            "Light speeds up when its source moves toward you",
            "Nothing can move at all in an inertial frame",
            "All observers in inertial frames measure the same speed of light in vacuum",
            "Time runs at the same rate for all observers",
          ],
          correctIndex: 2,
          explanation:
            "The second postulate says c is invariant: every inertial observer measures the same vacuum light speed, regardless of the motion of the source or observer. Options about light speeding up or universal time are exactly the classical intuitions relativity overturns.",
        },
        {
          question:
            "A spacecraft travels at 0.6c. What is its Lorentz factor γ?",
          options: ["1.25", "0.80", "1.67", "2.50"],
          correctIndex: 0,
          explanation:
            "γ = 1/√(1 − v²/c²) = 1/√(1 − 0.36) = 1/√0.64 = 1/0.8 = 1.25. A common slip is forgetting the square root or inverting the fraction (0.8 is 1/γ, not γ).",
        },
        {
          question:
            "An astronaut's heart beats once per second by her own watch as she flies past Earth at 0.8c (γ ≈ 1.67). What beat interval does Earth measure?",
          options: [
            "0.6 s — moving clocks run fast",
            "About 1.67 s — moving clocks run slow",
            "Exactly 1 s — heartbeats are biological, not physical",
            "It depends on the direction of travel",
          ],
          correctIndex: 1,
          explanation:
            "The astronaut's heartbeat is proper time Δt₀ = 1 s, measured by a clock travelling with her. Earth measures the dilated interval Δt = γΔt₀ ≈ 1.67 s. Time dilation applies to every process — mechanical, electronic, or biological.",
        },
        {
          question:
            "Muons made 15 km up in the atmosphere reach the ground despite a 2.2 μs lifetime. How does the muon's own reference frame explain this?",
          options: [
            "The muon's internal clock runs slower in its own frame",
            "The muon travels faster than light in its own frame",
            "The muon's lifetime is longer at high altitude",
            "The atmosphere is length-contracted to under a kilometre in the muon's frame",
          ],
          correctIndex: 3,
          explanation:
            "In the muon's frame its lifetime is a normal 2.2 μs, but the onrushing atmosphere is contracted by γ ≈ 15.8 from 15 km to about 0.95 km — crossable in time. Earth's frame instead credits time dilation. Different descriptions, same observable outcome.",
        },
        {
          question:
            "The Sun radiates about 3.8 × 10²⁶ J every second. Roughly how much mass does it lose per second?",
          options: [
            "About 4 × 10⁹ kg",
            "About 4 × 10¹⁸ kg",
            "Essentially zero — radiation carries no mass",
            "About 3.8 × 10²⁶ kg",
          ],
          correctIndex: 0,
          explanation:
            "Δm = E/c² = 3.8 × 10²⁶ J ÷ 9.0 × 10¹⁶ J/kg ≈ 4.2 × 10⁹ kg, about four million tonnes per second. Energy always carries the equivalent mass E/c² — mass-energy is one conserved quantity, not two.",
        },
      ],
    },
    {
      id: "quantization-of-light",
      title: "Quantization of Light",
      subtitle: "The photoelectric effect and the birth of the photon",
      sections: [
        {
          id: "blackbody-problem",
          title: "The Blackbody Problem: Physics's First Quantum Crisis",
          content: `
<p>Heat any object and it glows — first infrared, then red, then white-hot. A <strong>blackbody</strong> is the idealized perfect absorber and emitter, and by 1900 its glow spectrum had been measured beautifully: a smooth curve that peaks at a wavelength inversely proportional to temperature (Wien's law) and grows steeply with temperature (Stefan–Boltzmann: total power ∝ T⁴).</p>
<p>Classical physics could not reproduce the curve. Treating the radiation as electromagnetic waves in a cavity, the Rayleigh–Jeans calculation predicted that emitted power should keep climbing without limit at short wavelengths — every warm object should blast out infinite ultraviolet energy. This absurdity was later nicknamed the <strong>ultraviolet catastrophe</strong>. The theory wasn't slightly off; it was catastrophically, infinitely wrong, and it was built from the best physics of the day.</p>
<p>Max Planck found the fix in 1900, by what he called "an act of desperation." Suppose the oscillating charges in the cavity walls cannot emit or absorb energy continuously, but only in discrete packets — <strong>quanta</strong> — of size</p>
<p style="text-align:center"><strong>E = hf</strong></p>
<p>where f is the frequency and h = 6.63 × 10⁻³⁴ J·s is a new constant of nature, now called <strong>Planck's constant</strong>. High-frequency (short-wavelength) quanta are then expensive: at any temperature, few oscillators can afford a packet of hf much larger than the typical thermal energy, so the ultraviolet end of the spectrum is starved and the curve turns over — exactly matching experiment.</p>
<div class="analogy">
  <h3>Analogy: A vending machine, not a tap</h3>
  <p>Classical physics assumed energy flows like water from a tap — any amount you like. Planck's cavity behaves like a vending machine: energy is exchanged only in fixed-price units, and the price hf rises with frequency. When a snack costs far more than anyone's pocket money (kT), almost nobody buys it — that is why the ultraviolet catastrophe never happens.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Planck himself resisted the idea that light itself was grainy — he thought quantization was a quirk of the emitting matter. It took Einstein's 1905 photon paper (the work cited by his Nobel Prize) to insist the light itself comes in packets. The blackbody curve, meanwhile, became a cosmology superstar: the Big Bang's afterglow is the most perfect blackbody spectrum ever measured (Chapter 6).</p>
</div>`,
        },
        {
          id: "photoelectric-effect",
          title: "The Photoelectric Effect: Where Waves Fail",
          content: `
<p>Shine light on a clean metal surface in a vacuum and, under the right conditions, electrons pop out. This <strong>photoelectric effect</strong> sounds tame — light carries energy, energy frees electrons — but the details demolished the wave picture of light.</p>
<p>What the wave theory predicts:</p>
<ul>
  <li>Brighter light (bigger amplitude) → more energetic ejected electrons.</li>
  <li>Any frequency should work, given enough intensity.</li>
  <li>Dim light should eject electrons only after a delay, while the electron "soaks up" enough wave energy.</li>
</ul>
<p>What experiment actually shows:</p>
<ul>
  <li>There is a sharp <strong>threshold frequency</strong> f₀ for each metal. Below it, <em>no</em> electrons are emitted — however intense the light. Floodlights of red light do nothing to zinc; the feeblest ultraviolet glow works instantly.</li>
  <li>The <strong>maximum kinetic energy</strong> of ejected electrons depends only on the light's frequency, rising linearly with f. Intensity does not change it at all.</li>
  <li>Intensity controls only <em>how many</em> electrons leave per second (the photocurrent).</li>
  <li>Emission is essentially instantaneous (within nanoseconds), even in extremely dim light.</li>
</ul>
<p>Einstein's 1905 explanation: light of frequency f arrives as particles — <strong>photons</strong> — each carrying energy E = hf. One photon is absorbed by one electron in an all-or-nothing event. If the photon's energy exceeds the metal's <strong>work function Φ</strong> (the minimum energy needed to escape the surface), the electron can leave immediately; if not, nothing happens, no matter how many low-energy photons rain down.</p>
<div class="key-concept">
  <h4>Key Concept: One photon, one electron</h4>
  <p>Intensity means photons per second, which sets electrons per second (current). Frequency means energy per photon, which sets the maximum energy per electron. The wave theory tangles these together; the photon theory cleanly separates them, exactly as experiment demands.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The effect was first noticed in 1887 by Heinrich Hertz — ironically, during the very experiments that confirmed Maxwell's electromagnetic <em>waves</em>. The same apparatus that crowned the wave theory quietly contained the seed of its overthrow.</p>
</div>`,
        },
        {
          id: "photoelectric-equation",
          title: "Einstein's Photoelectric Equation, Worked",
          content: `
<p>Energy conservation for a single photon–electron event gives the <strong>photoelectric equation</strong>:</p>
<p style="text-align:center"><strong>hf = Φ + KEmax</strong></p>
<p>The photon delivers hf; the work function Φ is the "exit fee" for the most loosely bound surface electrons; whatever remains appears as the electron's maximum kinetic energy KEmax. (Electrons from deeper in the metal pay more than Φ and emerge slower — that is why KEmax is a <em>maximum</em>.)</p>
<p>Two handy conversions: 1 eV = 1.60 × 10⁻¹⁹ J, and for photon energies, E (in eV) ≈ 1240 / λ (in nm).</p>
<p><strong>Worked example 1:</strong> ultraviolet light of λ = 300 nm strikes sodium, Φ = 2.28 eV.</p>
<ul>
  <li>Photon energy: E = 1240 / 300 ≈ 4.13 eV</li>
  <li>KEmax = 4.13 − 2.28 = <strong>1.85 eV</strong> ≈ 2.96 × 10⁻¹⁹ J</li>
  <li>Threshold: f₀ = Φ/h, or λ₀ = 1240 / 2.28 ≈ <strong>544 nm</strong> — green light or bluer works; red (say 650 nm, 1.91 eV… still below 2.28 eV) does not.</li>
</ul>
<p><strong>Worked example 2 — the stopping potential:</strong> experimentally, KEmax is measured by making the collector electrode negative until even the fastest electrons just fail to arrive. The required <strong>stopping potential Vs</strong> satisfies eVs = KEmax. For the sodium case above, Vs = <strong>1.85 V</strong>. Plotting Vs against f for many frequencies gives a straight line of slope h/e and intercept −Φ/e — this is precisely how Robert Millikan, trying to <em>disprove</em> Einstein, measured Planck's constant to 0.5% in 1916 and confirmed the photon picture instead.</p>
<table>
  <thead>
    <tr><th>Change made</th><th>Effect on current</th><th>Effect on KEmax</th></tr>
  </thead>
  <tbody>
    <tr><td>Double the intensity (same f)</td><td>Doubles</td><td>Unchanged</td></tr>
    <tr><td>Raise the frequency (same intensity)</td><td>Roughly unchanged</td><td>Increases linearly</td></tr>
    <tr><td>Drop below f₀</td><td>Zero</td><td>No electrons at all</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>Key Concept: A straight line worth memorising</h4>
  <p>KEmax = hf − Φ is a straight line in f. Slope = h (universal, same for every metal); x-intercept = f₀ = Φ/h (material-specific). Exam questions love asking you to read h and Φ off this graph.</p>
</div>`,
        },
        {
          id: "compton-and-xrays",
          title: "X-rays and Compton Scattering: Photons Carry Momentum",
          content: `
<p><strong>X-rays</strong> are the photoelectric effect run in reverse. In an X-ray tube, electrons accelerated through tens of kilovolts slam into a metal target; their kinetic energy converts to photons. The spectrum has two parts: a continuous "braking radiation" (bremsstrahlung) hump from electrons decelerating in the target, plus sharp characteristic peaks from electron transitions in the target atoms. The continuous spectrum has a hard cutoff: no photon can carry more than one electron's full energy, so eV = hf_max gives a minimum wavelength λ_min = hc/eV. A 50 kV tube: λ_min = 1240 eV·nm / 50 000 eV ≈ <strong>0.025 nm</strong> — atom-sized wavelengths, which is why X-rays diffract off crystals and image bones.</p>
<p>If photons are genuine particles, they should carry <strong>momentum</strong> as well as energy:</p>
<p style="text-align:center"><strong>p = E/c = hf/c = h/λ</strong></p>
<p>In 1923 Arthur Compton confirmed it. Firing X-rays at graphite, he found the scattered X-rays had a <em>longer</em> wavelength than the incident beam, with the shift growing with scattering angle. A wave should scatter at unchanged frequency; but a photon colliding with a loosely bound electron behaves exactly like one billiard ball striking another. The photon gives the electron some energy and momentum, so the scattered photon has less energy — and therefore a longer wavelength. Treating the collision with relativistic energy and momentum conservation reproduces Compton's data precisely; the wavelength shift at 90° is h/mₑc ≈ 0.0024 nm, the "Compton wavelength" of the electron.</p>
<div class="key-concept">
  <h4>Key Concept: The photon's full CV</h4>
  <p>Energy E = hf, momentum p = h/λ, speed c, rest mass zero. The photoelectric effect showed photons deliver energy in lumps; Compton scattering showed they deliver momentum in lumps too. After 1923, the particle nature of light was no longer negotiable.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Photon momentum is tiny but real and useful: it powers laser cooling (slowing atoms to microkelvin temperatures with photon kicks), solar sails such as LightSail-2, and it sets a fundamental limit on how gently you can "look at" a small object — a theme the uncertainty principle picks up in the next chapter.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What was the 'ultraviolet catastrophe'?",
          options: [
            "The discovery that UV light damages DNA",
            "The classical prediction that a blackbody should radiate unlimited energy at short wavelengths",
            "An explosion in Planck's laboratory in 1900",
            "The failure of telescopes to detect ultraviolet starlight",
          ],
          correctIndex: 1,
          explanation:
            "Classical wave theory (Rayleigh–Jeans) predicted radiated power growing without bound at short wavelengths, implying infinite total emission. Planck cured it by quantizing energy exchange in units of E = hf, making high-frequency quanta too 'expensive' to excite thermally.",
        },
        {
          question:
            "Light below a metal's threshold frequency is made ten times more intense. What happens to the photoelectron emission?",
          options: [
            "Still no electrons are emitted",
            "Ten times more electrons are emitted",
            "Electrons are emitted with ten times the energy",
            "Electrons are emitted after a long delay",
          ],
          correctIndex: 0,
          explanation:
            "Emission is a one-photon, one-electron event. If each photon carries less than the work function (f < f₀), no single photon can free an electron, and intensity only adds more equally inadequate photons. This all-or-nothing threshold is the key evidence against the wave picture.",
        },
        {
          question:
            "Light of wavelength 300 nm (photon energy ≈ 4.13 eV) strikes sodium with work function 2.28 eV. What is KEmax of the ejected electrons?",
          options: ["6.41 eV", "2.28 eV", "1.85 eV", "4.13 eV"],
          correctIndex: 2,
          explanation:
            "Einstein's equation gives KEmax = hf − Φ = 4.13 − 2.28 = 1.85 eV. The photon pays the 2.28 eV exit fee and the electron keeps the change. The corresponding stopping potential would be 1.85 V.",
        },
        {
          question:
            "In a photoelectric experiment, plotting stopping potential Vs against light frequency f gives a straight line. What is its slope?",
          options: ["Φ/e", "h/e", "Φ/h", "e/h"],
          correctIndex: 1,
          explanation:
            "From eVs = hf − Φ we get Vs = (h/e)f − Φ/e: slope h/e (the same for every metal) and intercept −Φ/e (material-specific). Millikan used exactly this plot to measure h and, reluctantly, confirm Einstein's photon theory.",
        },
        {
          question:
            "Why do X-rays scattered off electrons in graphite emerge with a longer wavelength (the Compton effect)?",
          options: [
            "The graphite absorbs part of each wave crest",
            "The X-rays slow down inside the material",
            "Longer wavelengths pass through matter more easily",
            "Each photon loses energy and momentum to the electron it strikes, and lower energy means longer wavelength",
          ],
          correctIndex: 3,
          explanation:
            "Compton scattering is a photon–electron collision obeying particle-style energy and momentum conservation. The recoiling electron takes some energy, so the scattered photon has E' < E, and since λ = hc/E, its wavelength is longer. Waves cannot explain this; particles with p = h/λ do, exactly.",
        },
      ],
    },
    {
      id: "wave-particle-duality-atoms",
      title: "Wave–Particle Duality & Atoms",
      subtitle: "de Broglie's matter waves and the quantum atom",
      sections: [
        {
          id: "de-broglie-waves",
          title: "de Broglie's Bold Symmetry: Matter Waves",
          content: `
<p>By 1923 light had been forced to lead a double life: wave-like in interference and diffraction, particle-like in the photoelectric and Compton effects, with the two faces linked by p = h/λ. Louis de Broglie, in his PhD thesis of 1924, asked the obvious-in-hindsight question: if waves can behave like particles, why shouldn't particles behave like waves? He proposed that <em>every</em> moving object has an associated wavelength:</p>
<p style="text-align:center"><strong>λ = h / p = h / (mv)</strong></p>
<p>The wavelength is inversely proportional to momentum, and Planck's constant is minuscule — which is why nobody had noticed.</p>
<p><strong>Worked example 1 — a cricket ball:</strong> m = 0.16 kg, v = 40 m/s, so p = 6.4 kg·m/s and λ = 6.63 × 10⁻³⁴ / 6.4 ≈ <strong>1.0 × 10⁻³⁴ m</strong>. That is 10¹⁹ times smaller than a proton. No slit, crystal, or measuring device could ever reveal such a wavelength — macroscopic objects behave classically for all practical purposes.</p>
<p><strong>Worked example 2 — an electron:</strong> accelerate an electron through a potential difference V and it gains KE = eV = p²/2m, giving p = √(2meV). Through 100 V:</p>
<ul>
  <li>p = √(2 × 9.11 × 10⁻³¹ × 1.60 × 10⁻¹⁹ × 100) ≈ 5.4 × 10⁻²⁴ kg·m/s</li>
  <li>λ = h/p ≈ <strong>1.23 × 10⁻¹⁰ m ≈ 0.123 nm</strong></li>
</ul>
<p>A handy shortcut for electrons: λ ≈ 1.23 / √V nm, with V in volts. The crucial observation: 0.1 nm is exactly the spacing between atoms in a crystal. Nature had conveniently provided the diffraction grating needed to test the idea.</p>
<div class="key-concept">
  <h4>Key Concept: Why h is the boundary marker</h4>
  <p>Wave behaviour shows up when λ = h/p is comparable to the structures the object meets. For electrons in atoms, λ and the atom are the same size — quantum effects dominate. For anything you can hold, λ is absurdly small — classical physics reigns. One constant, h, draws the border between the two worlds.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Einstein reviewed the thesis and championed it: "He has lifted a corner of the great veil." de Broglie won the 1929 Nobel Prize — the only person to receive one for a PhD thesis.</p>
</div>`,
        },
        {
          id: "electron-diffraction",
          title: "Electron Diffraction: The Experiment That Settled It",
          content: `
<p>A hypothesis this strange needed direct evidence, and it arrived within three years — twice, independently.</p>
<p>At Bell Labs in 1927, <strong>Davisson and Germer</strong> fired 54 eV electrons at a nickel crystal and measured how many bounced off at each angle. Instead of a smooth distribution, they found a strong peak at 50° — exactly where a wave of λ = h/p ≈ 0.167 nm would constructively interfere after reflecting off the regularly spaced planes of nickel atoms, satisfying the same Bragg condition X-rays obey. The electron's measured wavelength matched de Broglie's formula to within experimental error.</p>
<p>The same year, <strong>G. P. Thomson</strong> passed faster electrons through thin metal foils. The foil's many randomly oriented crystallites produced concentric diffraction <em>rings</em> on a photographic plate — the unmistakable signature of a wave, identical in geometry to X-ray powder-diffraction patterns. Measuring the ring radii again confirmed λ = h/p.</p>
<div class="did-you-know">
  <h4>Did you know? A family divided by duality</h4>
  <p>G. P. Thomson won the 1937 Nobel Prize (shared with Davisson) for showing the electron is a wave. His father, J. J. Thomson, had won the 1906 Nobel Prize for showing the electron is a particle. Both were right — that is precisely the point.</p>
</div>
<p>Later experiments pushed duality to its logical extreme. Send electrons through a double slit <em>one at a time</em>, so there is never more than one electron in the apparatus: each electron lands as a single localized dot (particle behaviour), yet as thousands of dots accumulate, an interference pattern of bright and dark fringes emerges (wave behaviour). Each electron somehow interferes with itself. Neither "it's a tiny bullet" nor "it's a spread-out ripple" survives contact with this experiment; the electron is a quantum object that propagates like a wave and registers like a particle.</p>
<div class="key-concept">
  <h4>Key Concept: Duality is universal — and useful</h4>
  <p>Interference has since been observed with neutrons, whole atoms, and molecules of hundreds of atoms. And the effect is practical: electron microscopes exploit the tiny de Broglie wavelength of fast electrons (a thousand times shorter than visible light) to resolve individual atoms — wave-particle duality is routine laboratory equipment.</p>
</div>`,
        },
        {
          id: "bohr-model",
          title: "The Bohr Model: Quantized Orbits, Quantized Energies",
          content: `
<p>Rutherford's 1911 scattering experiments established the nuclear atom: a tiny positive nucleus with electrons around it. But classically this atom is doomed — an orbiting electron accelerates, accelerating charges radiate, so the electron should spiral into the nucleus in about 10 nanoseconds, emitting a continuous smear of light on the way. Real atoms are stable and emit only sharp, discrete spectral lines. Niels Bohr's 1913 model patched the crisis with three postulates:</p>
<ol>
  <li>Electrons occupy only certain allowed circular orbits — <strong>stationary states</strong> — in which, contrary to classical rules, they do not radiate.</li>
  <li>The allowed orbits are those where angular momentum is quantized: mvr = nh/2π, for n = 1, 2, 3…</li>
  <li>Radiation is emitted or absorbed only when the electron jumps between states, as a single photon carrying the energy difference: hf = E_initial − E_final.</li>
</ol>
<p>Cranking the quantization condition through Coulomb's law gives hydrogen's allowed energies:</p>
<p style="text-align:center"><strong>Eₙ = −13.6 / n² eV</strong></p>
<ul>
  <li>n = 1 (ground state): E₁ = −13.6 eV, orbit radius 0.053 nm (the Bohr radius)</li>
  <li>n = 2: E₂ = −3.40 eV&nbsp;&nbsp;&nbsp; n = 3: E₃ = −1.51 eV&nbsp;&nbsp;&nbsp; n = 4: E₄ = −0.85 eV</li>
  <li>n → ∞: E = 0, the ionization threshold</li>
</ul>
<p>The energies are negative because the electron is bound; you must <em>add</em> energy to free it. The <strong>ionization energy</strong> of hydrogen from the ground state is therefore +13.6 eV — and Bohr's formula predicted this measured value from first principles, using only e, m, h, and ε₀. That success made physicists take quantization seriously.</p>
<div class="analogy">
  <h3>Analogy: A staircase, not a ramp</h3>
  <p>A classical orbit is like a ball on a ramp — any height allowed, sliding continuously downward while radiating. Bohr's atom is a staircase: the electron can stand only on discrete steps, and moves between them in jumps, emitting one photon per jump. The bottom step (n = 1) exists, so the atom cannot collapse.</p>
</div>
<p>Where does de Broglie fit? Beautifully: mvr = nh/2π rearranges to 2πr = nλ. The allowed orbits are exactly those whose circumference fits a whole number of electron wavelengths — a standing wave. Orbits that don't fit interfere themselves out of existence. Bohr's mysterious rule is the wave nature of the electron in disguise.</p>`,
        },
        {
          id: "spectral-lines",
          title: "Spectral Lines: Reading the Atomic Barcode",
          content: `
<p>Pass a current through hydrogen gas and view the glow through a diffraction grating: you see not a rainbow but a handful of sharp coloured lines. Every element has its own unmistakable line pattern — an atomic barcode used to identify elements in everything from streetlamps to distant galaxies. Bohr's model finally explained the pattern: each line is a specific downward jump, with photon energy</p>
<p style="text-align:center"><strong>hf = Eᵢ − E_f = 13.6 × (1/n_f² − 1/nᵢ²) eV</strong></p>
<p>Jumps are grouped into series by their destination level:</p>
<table>
  <thead>
    <tr><th>Series</th><th>Ends on</th><th>Region</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td>Lyman</td><td>n = 1</td><td>Ultraviolet</td><td>2 → 1: 121.6 nm</td></tr>
    <tr><td>Balmer</td><td>n = 2</td><td>Visible</td><td>3 → 2: 656 nm (red Hα)</td></tr>
    <tr><td>Paschen</td><td>n = 3</td><td>Infrared</td><td>4 → 3: 1875 nm</td></tr>
  </tbody>
</table>
<p><strong>Worked example 1 — the red Balmer line:</strong> for the 3 → 2 transition, ΔE = E₃ − E₂ = (−1.51) − (−3.40) = 1.89 eV. Wavelength: λ = 1240 / 1.89 ≈ <strong>656 nm</strong> — the famous red glow of hydrogen, visible in emission nebulae across the galaxy.</p>
<p><strong>Worked example 2 — Lyman alpha:</strong> 2 → 1 gives ΔE = (−3.40) − (−13.6) = 10.2 eV, so λ = 1240 / 10.2 ≈ <strong>122 nm</strong>, deep ultraviolet. Every Lyman line carries at least 10.2 eV, which is why the whole series is invisible to the eye.</p>
<p>Absorption works in reverse: cool hydrogen gas in front of a continuous source swallows exactly these wavelengths, imprinting dark lines. The dark lines in sunlight (Fraunhofer lines) are how helium was discovered in the Sun before it was found on Earth.</p>
<div class="key-concept">
  <h4>Key Concept: The model's limits</h4>
  <p>Bohr's model nails hydrogen and any one-electron ion (He⁺, Li²⁺ — scale by Z²), but fails for helium and beyond, cannot predict line intensities, and its planetary orbits are not what electrons actually do. It is the crucial stepping stone: quantized energy levels and photon-per-jump are permanently correct; the orbits will be replaced by wavefunctions in Quantum Mechanics I.</p>
</div>`,
        },
        {
          id: "uncertainty-principle",
          title: "Heisenberg's Uncertainty Principle: A First Look",
          content: `
<p>If an electron is a wave, an old question becomes treacherous: <em>where is it, and how fast is it going?</em> A pure sine wave has a perfectly defined wavelength — hence, by de Broglie, a perfectly defined momentum — but it extends forever, so it has no position at all. To localize the electron you must add together waves of many different wavelengths, building a compact "wave packet." But now the momentum is a blend of many values. Sharper position means muddier momentum, and vice versa. In 1927 Heisenberg made the trade-off precise:</p>
<p style="text-align:center"><strong>Δx · Δp ≳ h / 4π</strong></p>
<p>This <strong>uncertainty principle</strong> is not about clumsy instruments. It says a quantum particle does not <em>possess</em> a simultaneously exact position and momentum — the two are jointly limited by the mathematics of waves, the same trade-off that makes a short drum hit have no definite pitch while a long flute note does.</p>
<p><strong>Worked estimate — why atoms don't collapse:</strong> confine an electron to an atom, Δx ≈ 5 × 10⁻¹¹ m. Then Δp ≳ h/(4πΔx) ≈ 1 × 10⁻²⁴ kg·m/s, giving a typical speed around 10⁶ m/s and kinetic energy of a few eV — just what atomic electrons have. Squeeze the electron closer to the nucleus and its momentum uncertainty, and hence kinetic energy, <em>rises</em> faster than the electrical energy falls. The ground state is the truce between electrical attraction and quantum claustrophobia. The uncertainty principle, not luck, is why matter is stable and why the Bohr staircase has a bottom step.</p>
<div class="analogy">
  <h3>Analogy: The photograph of a hummingbird</h3>
  <p>A fast shutter freezes the wings sharply but tells you nothing about their motion; a slow shutter shows the blur of motion but no sharp position. Position-sharpness and motion-information are complementary in one photo — and for quantum objects the trade is mandatory, with h setting the exchange rate.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A matching relation links energy and time: ΔE · Δt ≳ h/4π. Short-lived excited states have fuzzy energies, which measurably broadens their spectral lines — and it permits the fleeting "virtual particles" that carry forces in the Standard Model (Chapter 6).</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An electron is accelerated through 100 V. Its de Broglie wavelength is closest to which value, and why does that matter?",
          options: [
            "0.12 nm — about the size of atomic spacings, so crystals can diffract electrons",
            "12 nm — about the size of a virus, so microscopes can see the wave directly",
            "1.2 × 10⁻³⁴ m — far too small ever to observe",
            "500 nm — in the visible-light range",
          ],
          correctIndex: 0,
          explanation:
            "λ = h/√(2meV) ≈ 1.23/√V nm ≈ 0.123 nm at 100 V. This matches interatomic spacings in crystals, which is exactly why Davisson–Germer saw diffraction. The 10⁻³⁴ m answer is the scale for macroscopic objects like balls, not electrons.",
        },
        {
          question:
            "In the Davisson–Germer experiment, what observation confirmed de Broglie's hypothesis?",
          options: [
            "Electrons passed straight through the nickel without deflection",
            "Electrons scattered off nickel showed an intensity peak at the angle predicted by wave diffraction",
            "Electrons emitted light of a single wavelength",
            "Electrons were absorbed only above a threshold frequency",
          ],
          correctIndex: 1,
          explanation:
            "Electrons reflected from the regularly spaced atomic planes of a nickel crystal interfered constructively at a specific angle (50° for 54 eV electrons), satisfying the Bragg condition for a wave with λ = h/p. Particles without wave character would scatter smoothly over all angles.",
        },
        {
          question:
            "Using Eₙ = −13.6/n² eV, what energy photon is emitted when a hydrogen electron drops from n = 3 to n = 2?",
          options: ["1.51 eV", "3.40 eV", "1.89 eV", "13.6 eV"],
          correctIndex: 2,
          explanation:
            "E₃ = −1.51 eV and E₂ = −3.40 eV, so the photon carries E₃ − E₂ = 1.89 eV, corresponding to λ = 1240/1.89 ≈ 656 nm — the red Hα line of the Balmer series. Remember to subtract level energies; 13.6 eV would be full ionization from the ground state.",
        },
        {
          question:
            "Why are hydrogen's energy levels negative (Eₙ = −13.6/n² eV)?",
          options: [
            "Because the electron carries negative charge",
            "It is only a sign convention with no physical meaning",
            "Because the electron loses mass in lower orbits",
            "Because the electron is bound: energy must be supplied to free it to E = 0",
          ],
          correctIndex: 3,
          explanation:
            "The zero of energy is set at a free, stationary electron infinitely far from the proton. Bound states lie below that zero, so their energies are negative; the ground-state value −13.6 eV means 13.6 eV of energy input ionizes the atom. The electron's charge sign is irrelevant to this bookkeeping.",
        },
        {
          question:
            "What does the Heisenberg uncertainty principle Δx·Δp ≳ h/4π fundamentally assert?",
          options: [
            "Better instruments will eventually measure position and momentum exactly",
            "A quantum particle cannot simultaneously have precisely defined position and momentum",
            "Every measurement of position destroys the particle",
            "Energy is not conserved in quantum mechanics",
          ],
          correctIndex: 1,
          explanation:
            "The principle is a property of matter waves, not of imperfect equipment: localizing a wave packet requires blending many wavelengths (momenta), so sharpness in x and sharpness in p are jointly capped by h/4π. One payoff: confining an electron raises its kinetic energy, which is why atoms have a stable ground state.",
        },
      ],
    },
    {
      id: "nucleus-quantitative",
      title: "The Nucleus, Quantitatively",
      subtitle: "Binding energy, the decay law, and nuclear energetics",
      sections: [
        {
          id: "mass-defect-binding-energy",
          title: "Mass Defect and Binding Energy",
          content: `
<p>Weigh a helium-4 nucleus and you find something odd: it is <em>lighter</em> than its parts. Two protons plus two neutrons, weighed separately, total more mass than the assembled nucleus. The missing mass is the <strong>mass defect Δm</strong>, and E = mc² tells us where it went: when the nucleons bound together, energy Δm·c² was released, and the bound system is lighter by exactly that amount. Equivalently, the <strong>binding energy</strong></p>
<p style="text-align:center"><strong>BE = Δm · c²</strong></p>
<p>is the energy you would have to supply to tear the nucleus back into free nucleons.</p>
<p>Nuclear masses are quoted in <strong>atomic mass units</strong>: 1 u = 1.6605 × 10⁻²⁷ kg, and the conversion every nuclear physicist memorizes is</p>
<p style="text-align:center"><strong>1 u ↔ 931.5 MeV</strong></p>
<p><strong>Worked example — helium-4:</strong></p>
<ul>
  <li>2 protons: 2 × 1.00728 u = 2.01456 u</li>
  <li>2 neutrons: 2 × 1.00867 u = 2.01734 u</li>
  <li>Sum of parts: 4.03190 u; actual ⁴He nucleus: 4.00151 u</li>
  <li>Δm = 4.03190 − 4.00151 = <strong>0.03039 u</strong></li>
  <li>BE = 0.03039 × 931.5 ≈ <strong>28.3 MeV</strong>, i.e. about 7.1 MeV per nucleon</li>
</ul>
<p>Compare scales: ionizing hydrogen costs 13.6 <em>electron</em>volts; pulling one nucleon out of helium costs about 7 <em>million</em> electronvolts. Nuclear binding is roughly a million times stronger than chemical binding — that ratio is the entire reason nuclear power and nuclear weapons dwarf chemistry.</p>
<div class="key-concept">
  <h4>Key Concept: Mass is the energy ledger</h4>
  <p>In any nuclear reaction, compare total rest mass before and after. If the products are lighter, the difference × 931.5 MeV/u was released as kinetic energy and radiation. If heavier, that energy had to be supplied. Every calculation in this chapter is this one idea applied carefully.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The strong nuclear force that does this binding acts only over about 10⁻¹⁵ m — nucleons essentially have to touch. It is around 100 times stronger than the electrical repulsion between protons at that range, which is the only reason 92 mutually repelling protons can sit inside a uranium nucleus at all.</p>
</div>`,
        },
        {
          id: "binding-energy-curve",
          title: "The Binding-Energy Curve: Iron at the Summit",
          content: `
<p>Divide each nuclide's binding energy by its number of nucleons and plot <strong>BE per nucleon</strong> against mass number A. The resulting curve is arguably the most consequential graph in physics:</p>
<ul>
  <li>It rises steeply for light nuclei: ²H sits near 1.1 MeV/nucleon, ⁴He at 7.1 (an anomalously stable spike), ¹²C near 7.7.</li>
  <li>It flattens to a broad maximum of about <strong>8.8 MeV/nucleon around iron-56 and nickel-62</strong>.</li>
  <li>It then declines gently: ²³⁵U is back down near 7.6 MeV/nucleon.</li>
</ul>
<p>Why this shape? The strong force is short-range, so each nucleon bonds only with immediate neighbours. Small nuclei have most nucleons at the "surface" with unfilled bonds — low BE per nucleon. As A grows, the surface fraction shrinks and binding improves. But protons repel electrically at <em>any</em> range, and in heavy nuclei this long-range repulsion accumulates faster than the short-range attraction, dragging the curve back down. Iron's neighbourhood is the compromise point: <strong>the most tightly bound matter in the universe</strong>.</p>
<div class="key-concept">
  <h4>Key Concept: Both roads lead to iron</h4>
  <p>Any reaction that moves nucleons to a higher BE-per-nucleon position releases energy. Light nuclei climb the curve by <strong>fusion</strong> (joining); heavy nuclei climb it by <strong>fission</strong> (splitting). Iron itself is the energy dead end — you can extract nothing by fusing or splitting it. One graph explains why stars fuse hydrogen, why reactors split uranium, and why both processes release energy despite being opposites.</p>
</div>
<p>The curve also writes the biography of the elements. Stars fuse hydrogen to helium, then helium toward carbon and oxygen, climbing the curve and paying their light bills with the released binding energy. A massive star builds an iron core — and then the fire goes out, because fusing iron <em>costs</em> energy. The core collapses within seconds, triggering a supernova whose flood of neutrons forges the elements beyond iron. Every atom of gold or iodine in your body was assembled in such an event and delivered the energy bill up front.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Iron's summit position is why it is the universe's preferred endpoint: it is the ash of cosmic burning. It is also, conveniently, the most common element on Earth by mass — you are living on a pile of nuclear ash.</p>
</div>`,
        },
        {
          id: "decay-law",
          title: "The Decay Law and Half-Life, Worked",
          content: `
<p>An unstable nucleus does not age. It has a fixed probability per second of decaying — the <strong>decay constant λ</strong> — utterly indifferent to how long it has existed. For a large sample this randomness produces exact statistics: the decay rate is proportional to the number of undecayed nuclei present, dN/dt = −λN, whose solution is the <strong>exponential decay law</strong>:</p>
<p style="text-align:center"><strong>N = N₀ e^(−λt)</strong></p>
<p>The <strong>half-life T½</strong> is the time for half of any sample to decay. Setting N = N₀/2 gives</p>
<p style="text-align:center"><strong>T½ = ln 2 / λ ≈ 0.693 / λ</strong></p>
<p>After each successive half-life the remainder halves again: 1 → 1/2 → 1/4 → 1/8 → … The measurable radiation output, the <strong>activity</strong> A = λN (in becquerels, decays per second), obeys the same law: A = A₀e^(−λt).</p>
<p><strong>Worked example 1 — hospital isotope:</strong> technetium-99m (T½ = 6.0 h) is injected for a bone scan. After 24 h — four half-lives — the fraction remaining is (1/2)⁴ = <strong>1/16 ≈ 6%</strong>. Short half-lives are chosen deliberately so the patient's dose falls off within a day.</p>
<p><strong>Worked example 2 — a non-whole number of half-lives:</strong> a source has T½ = 8.0 days, so λ = 0.693/8.0 = 0.0866 day⁻¹. Fraction left after 20 days: e^(−0.0866 × 20) = e^(−1.73) ≈ <strong>0.18</strong>. (Sanity check: 20 days is 2.5 half-lives, and (1/2)^2.5 ≈ 0.177.)</p>
<p><strong>Worked example 3 — radiocarbon dating:</strong> living things hold a constant ¹⁴C fraction; at death, intake stops and the clock starts (T½ = 5730 y). A bone shows 25% of the living ¹⁴C activity. 25% = (1/2)², two half-lives: the bone is about <strong>11 460 years old</strong>. For awkward fractions, solve t = ln(N₀/N)/λ.</p>
<div class="analogy">
  <h3>Analogy: Popcorn kernels</h3>
  <p>You cannot predict when any single kernel will pop, but the popping rate of the batch is proportional to the unpopped kernels left, so the bowl's crackle dies away exponentially. Individual randomness, collective regularity — that is radioactivity.</p>
</div>`,
        },
        {
          id: "fission-fusion",
          title: "Fission and Fusion Energetics",
          content: `
<p>The binding-energy curve pays out in two directions.</p>
<p><strong>Fission.</strong> A slow neutron absorbed by ²³⁵U makes wobbling ²³⁶U, which splits into two mid-sized fragments (e.g. barium and krypton) plus 2–3 fresh neutrons. The fragments sit higher on the curve (~8.4 MeV/nucleon) than uranium (~7.6), so about 0.8 MeV per nucleon × 235 nucleons ≈ <strong>200 MeV is released per fission</strong>, mostly as fragment kinetic energy that becomes heat. The liberated neutrons can trigger further fissions — a <strong>chain reaction</strong>. Controlled with moderators (to slow neutrons) and absorbing control rods, exactly one neutron per fission survives to cause the next: a steady reactor. Uncontrolled, the fission count doubles generation after generation in microseconds.</p>
<p><strong>Worked comparison:</strong> fissioning 1 kg of ²³⁵U releases about 8 × 10¹³ J. Burning 1 kg of coal releases 3 × 10⁷ J. Ratio: roughly <strong>2.5 million</strong>. That is the chemical-vs-nuclear gap made concrete: a pellet of uranium the size of a fingertip matches a tonne of coal.</p>
<p><strong>Fusion.</strong> Light nuclei climb the steep left side of the curve, where the slope is far greater. The most accessible reaction, ²H + ³H → ⁴He + n, releases <strong>17.6 MeV</strong> from just five nucleons — about 3.5 MeV per nucleon, four times fission's yield per unit mass. Fusion fuel (deuterium from seawater) is effectively limitless, and the products are not long-lived radioactive waste.</p>
<p>The catch: two nuclei must overcome their electrical repulsion to touch. That demands temperatures above ~10⁸ K — hotter than the Sun's core — plus enough density and confinement time. The Sun manages with gravity, gigantic size, and (crucially) quantum tunnelling: protons occasionally tunnel through a Coulomb barrier they could never climb classically. On Earth, tokamaks confine the plasma with magnetic fields, and laser facilities crush fuel capsules; in 2022 the National Ignition Facility finally released more fusion energy from a capsule than the laser energy that struck it.</p>
<div class="key-concept">
  <h4>Key Concept: Same law, opposite directions</h4>
  <p>Fission and fusion both release energy because both move nucleons toward iron's summit. Products lighter than reactants — always check with Δm × 931.5 MeV/u — and the mass difference is the energy released. There is no contradiction in "splitting releases energy" and "joining releases energy": it depends entirely on which side of iron you start.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A helium-4 nucleus has a mass defect of 0.0304 u. Its total binding energy is about (1 u ↔ 931.5 MeV):",
          options: ["0.03 MeV", "931 MeV", "7.1 MeV", "28.3 MeV"],
          correctIndex: 3,
          explanation:
            "BE = Δm × 931.5 MeV/u = 0.0304 × 931.5 ≈ 28.3 MeV. Dividing by the 4 nucleons gives the 7.1 MeV/nucleon figure — that is binding energy per nucleon, a different (and also useful) quantity.",
        },
        {
          question:
            "Why does the binding-energy-per-nucleon curve peak near iron-56?",
          options: [
            "Iron has equal numbers of protons and electrons",
            "Beyond iron, cumulative proton–proton electrical repulsion outpaces the short-range strong-force attraction",
            "Iron is the heaviest element formed in stars",
            "The strong force switches off for nuclei heavier than iron",
          ],
          correctIndex: 1,
          explanation:
            "The strong force binds only nearest neighbours, so its contribution per nucleon saturates, while every proton pair in the nucleus repels electrically no matter the distance. Small nuclei suffer from surface effects, heavy nuclei from accumulated repulsion; the optimum sits near A ≈ 56–62. The strong force never 'switches off'.",
        },
        {
          question:
            "Technetium-99m has a half-life of 6 hours. What fraction of an injected dose remains after 24 hours?",
          options: ["1/16", "1/4", "1/8", "1/24"],
          correctIndex: 0,
          explanation:
            "24 h is four half-lives, and each half-life halves the remainder: (1/2)⁴ = 1/16 ≈ 6%. For non-whole numbers of half-lives, use N = N₀e^(−λt) with λ = 0.693/T½ — the halving shortcut is just the exponential law at whole-number multiples.",
        },
        {
          question:
            "An ancient wooden tool shows 25% of the carbon-14 activity of living wood (T½ = 5730 years). Its approximate age is:",
          options: ["2 900 years", "5 730 years", "11 500 years", "23 000 years"],
          correctIndex: 2,
          explanation:
            "25% is (1/2)², i.e. two half-lives have elapsed: 2 × 5730 ≈ 11 460 years. A common error is reading 25% as one half-life; each half-life halves what is left, so 50% → one, 25% → two, 12.5% → three.",
        },
        {
          question:
            "Fission of heavy nuclei and fusion of light nuclei BOTH release energy because in both cases:",
          options: [
            "the number of nucleons decreases",
            "the products lie higher on the binding-energy-per-nucleon curve than the reactants",
            "neutrons are converted into protons",
            "electrical repulsion is eliminated entirely",
          ],
          correctIndex: 1,
          explanation:
            "Energy is released whenever nucleons end up more tightly bound — closer to the iron peak. Heavy nuclei get there by splitting; light nuclei by joining. Nucleon number is conserved in both, and the released energy shows up as the mass difference Δm × c² between reactants and products.",
        },
      ],
    },
    {
      id: "semiconductors-electronics",
      title: "Semiconductors & Electronics",
      subtitle: "Bands, diodes, transistors — the physics inside every chip",
      sections: [
        {
          id: "energy-bands",
          title: "Energy Bands: Why Solids Conduct, Insulate, or Hesitate",
          content: `
<p>A lone atom has sharp energy levels — the staircase of Chapter 3. Bring 10²³ atoms together into a crystal and each level, forced by the exclusion principle to remain distinct, splits into 10²³ closely spaced levels: effectively continuous <strong>bands</strong> of allowed energy separated by forbidden <strong>gaps</strong>. Electrical behaviour is decided by just two bands: the <strong>valence band</strong> (the highest band filled by bonding electrons) and the <strong>conduction band</strong> above it, where electrons can roam freely and carry current.</p>
<table>
  <thead>
    <tr><th>Material</th><th>Band picture</th><th>Energy gap</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Conductor</strong></td><td>Bands overlap or partly filled</td><td>None</td><td>Copper</td></tr>
    <tr><td><strong>Insulator</strong></td><td>Full valence, empty conduction</td><td>Large (~6 eV)</td><td>Diamond</td></tr>
    <tr><td><strong>Semiconductor</strong></td><td>Same, but small gap</td><td>Si: 1.1 eV, Ge: 0.7 eV</td><td>Silicon</td></tr>
  </tbody>
</table>
<p>In pure (<strong>intrinsic</strong>) silicon at room temperature, thermal jostling kicks a few electrons across the 1.1 eV gap. Each promotion creates two carriers: the freed electron, and the <strong>hole</strong> it leaves behind — a missing bond that behaves like a mobile positive charge as neighbouring electrons shuffle into it. Warm the crystal and more pairs form, so a semiconductor conducts <em>better</em> when hot, opposite to a metal.</p>
<p>Intrinsic conduction is feeble. The transformative trick is <strong>doping</strong> — seasoning silicon (four valence electrons) with about one impurity atom per million:</p>
<ul>
  <li><strong>n-type:</strong> a pentavalent donor (phosphorus, arsenic) bonds with four neighbours and donates its fifth electron to the conduction band. Majority carriers: electrons.</li>
  <li><strong>p-type:</strong> a trivalent acceptor (boron, aluminium) is one bond short, creating a hole. Majority carriers: holes.</li>
</ul>
<p>Both types remain electrically neutral overall — doping changes carrier populations, not net charge.</p>
<div class="analogy">
  <h3>Analogy: The car park</h3>
  <p>A packed car park (full valence band) allows no movement; an empty upper deck (conduction band) has nothing to move. Promote one car upstairs and two things become mobile: the car cruising the empty deck, and the gap downstairs, which drifts as cars shuffle into it. Electrons and holes, exactly.</p>
</div>`,
        },
        {
          id: "pn-junction-diodes",
          title: "The pn Junction: Diodes and LEDs",
          content: `
<p>Everything in electronics begins when p-type and n-type silicon meet in a single crystal — the <strong>pn junction</strong>. At the boundary, electrons from the n side diffuse into the p side and annihilate holes, and vice versa. A thin border zone is left with no mobile carriers, only fixed charged dopant ions: the <strong>depletion region</strong>. Its built-in electric field (a potential barrier of about 0.7 V in silicon) opposes further diffusion, and the junction settles into equilibrium.</p>
<p>That asymmetric barrier makes the junction a one-way valve — a <strong>diode</strong>:</p>
<ul>
  <li><strong>Forward bias</strong> (p side to +): the applied voltage pushes majority carriers toward the junction, narrowing the depletion region. Beyond about 0.7 V the barrier collapses and current rises steeply — the diode conducts.</li>
  <li><strong>Reverse bias</strong> (p side to −): carriers are pulled <em>away</em> from the junction, the depletion region widens, and only a leakage current of microamps or less flows. Push too far (breakdown voltage) and it conducts suddenly — destructive for ordinary diodes, but Zener diodes exploit this regime deliberately as voltage regulators.</li>
</ul>
<p>The diode's headline job is <strong>rectification</strong>: converting AC to DC. A single diode passes only the positive half-cycles (half-wave rectification); four diodes in a bridge flip the negative halves upward (full-wave), and a capacitor smooths the bumps into steady DC. Every phone charger runs this circuit.</p>
<p><strong>LEDs</strong> run the junction as a light factory. In a forward-biased LED, electrons pouring across the junction drop into holes, and each recombination releases the band-gap energy as one photon: E_gap ≈ hf. The gap sets the colour — a red LED has a gap near 1.9 eV (λ ≈ 1240/1.9 ≈ 650 nm), blue needs about 2.7 eV. Solar cells and photodiodes are the same junction in reverse: absorbed photons create electron–hole pairs that the built-in field sweeps apart, driving a current.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Efficient blue LEDs resisted three decades of effort until Akasaki, Amano, and Nakamura tamed gallium nitride, earning the 2014 Nobel Prize. Blue was the missing ingredient for white light — blue LED + yellow phosphor — and LED lighting now cuts lighting energy use by around 75% compared with incandescent bulbs.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: The junction is a valve</h4>
  <p>Depletion region narrow → conducts; wide → blocks. Forward bias narrows it, reverse bias widens it. Every diode behaviour — rectification, LED emission, solar generation, Zener regulation — is this single valve viewed from different angles.</p>
</div>`,
        },
        {
          id: "transistors",
          title: "Transistors: The Amplifier and the Switch",
          content: `
<p>A <strong>transistor</strong> puts two junctions back-to-back and gains something revolutionary: a terminal that <em>controls</em> the current between the other two. The classic bipolar junction transistor (BJT) is a sandwich — n-p-n or p-n-p — of three regions: a heavily doped <strong>emitter</strong>, an extremely thin and lightly doped <strong>base</strong>, and a large <strong>collector</strong>.</p>
<p>In an npn transistor in the active mode, the emitter–base junction is forward biased and the base–collector junction reverse biased. The forward-biased junction injects a torrent of electrons from emitter into base. Because the base is so thin, almost all of them shoot straight through into the collector's pull before they can find a hole to recombine with; only a trickle exits via the base terminal. The result: collector current is a fixed large multiple of base current,</p>
<p style="text-align:center"><strong>I_C = β I_B</strong>, with the current gain β typically 50–300, and I_E = I_C + I_B.</p>
<p><strong>Worked example:</strong> β = 100 and a microphone wiggles the base current by 20 μA. The collector current wiggles by 100 × 20 μA = <strong>2 mA</strong> — the whisper-level signal now controls a current a hundred times larger, which a load resistor converts into an amplified voltage. That is <strong>amplification</strong>: the small signal shapes power drawn from the supply, like a hand-turned tap controlling a fire hose.</p>
<p>Drive the base harder and the transistor leaves the proportional region and becomes a <strong>switch</strong>: zero base current → cut-off, no collector current, switch open; ample base current → saturation, maximum collector current, switch closed. This binary mode is the beating heart of digital electronics.</p>
<div class="key-concept">
  <h4>Key Concept: MOSFETs rule the chips</h4>
  <p>Modern integrated circuits use the transistor's cousin, the MOSFET, where a voltage on an insulated gate electrostatically opens or closes a conducting channel — control by voltage rather than current, with almost no input power. The logic is identical: a small signal at one terminal switches a larger current. Your phone's processor holds well over 10 billion of them, each switching billions of times per second.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The first transistor (Bardeen, Brattain, Shockley, Bell Labs, 1947) was a thumb-sized lash-up of germanium and gold foil. Today's transistors are ~10 nm across; more transistors are manufactured each year than raindrops fall on Earth — the most-produced human artefact in history.</p>
</div>`,
        },
        {
          id: "logic-gates",
          title: "Logic Gates: From Switches to Thought",
          content: `
<p>Once a transistor is a reliable switch, you can build machinery that manipulates <em>truth</em>. Encode "true/1" as high voltage and "false/0" as low voltage, and arrange switches so the output voltage is a logical function of the inputs. These circuits are <strong>logic gates</strong>, and three basic operations generate everything:</p>
<ul>
  <li><strong>NOT (inverter):</strong> output is the opposite of the input. One transistor: input high switches it on, pulling the output low, and vice versa.</li>
  <li><strong>AND:</strong> output 1 only if <em>all</em> inputs are 1 — two switches in series.</li>
  <li><strong>OR:</strong> output 1 if <em>any</em> input is 1 — two switches in parallel.</li>
</ul>
<table>
  <thead>
    <tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>NAND</th><th>NOR</th><th>XOR</th></tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
    <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
    <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
    <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
  </tbody>
</table>
<p>NAND (NOT-AND) and NOR (NOT-OR) hold a special status: each is <strong>universal</strong> — any logic function whatsoever can be built from NAND gates alone (or NOR alone). Wire a NAND's inputs together and it becomes a NOT; add that inverter after a NAND and you have AND; a little more wiring gives OR. Since NAND is also the easiest gate to fabricate in CMOS, chips are substantially oceans of NANDs.</p>
<p>From gates, computation assembles like Lego. An XOR plus an AND make a <strong>half-adder</strong>: XOR outputs the sum bit of two binary digits, AND outputs the carry (1 + 1 = 10 in binary). Chain adders and you can add any numbers; cross-couple two NOR gates and the circuit <em>remembers</em> a bit (a flip-flop) — memory. Arithmetic plus memory plus a clock is, at bottom, a computer.</p>
<div class="analogy">
  <h3>Analogy: Voting rules for switches</h3>
  <p>Each gate is a tiny committee rule. AND: "everyone must agree." OR: "any one vote passes it." NOT: the contrarian who always says the opposite. Computation is billions of these trivial committees voting several billion times a second — no single gate is smart, and the ensemble runs the modern world.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: The full stack</h4>
  <p>Band gap → doped junction → transistor switch → logic gate → adder and flip-flop → processor. Every level is ordinary physics from this subject; nowhere does anything but electrons and fields ever appear. That is the deepest fact in this chapter.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In the band picture, what distinguishes a semiconductor from an insulator?",
          options: [
            "Semiconductors have no valence band",
            "Semiconductors have overlapping valence and conduction bands",
            "The band gap is small (~1 eV) in a semiconductor and large (~6 eV) in an insulator",
            "Insulators contain no electrons at all",
          ],
          correctIndex: 2,
          explanation:
            "Both have a filled valence band and empty conduction band; the difference is only gap size. Silicon's 1.1 eV gap lets room-temperature thermal energy (and doping) supply usable carriers, while diamond's ~6 eV gap keeps its conduction band essentially empty. Overlapping bands describe a metal.",
        },
        {
          question:
            "Doping silicon with phosphorus (5 valence electrons) produces:",
          options: [
            "n-type material, with electrons as majority carriers",
            "p-type material, with holes as majority carriers",
            "a negatively charged crystal",
            "an insulator, because the extra electron fills the band gap",
          ],
          correctIndex: 0,
          explanation:
            "Phosphorus uses four electrons for bonds and donates the fifth to the conduction band, making n-type silicon whose majority carriers are electrons. The crystal stays neutral — every donated electron is matched by a fixed positive phosphorus ion. Boron, with three valence electrons, is the p-type recipe.",
        },
        {
          question:
            "Why does current flow easily through a forward-biased pn junction but not a reverse-biased one?",
          options: [
            "Forward bias heats the junction until it conducts",
            "Forward bias narrows the depletion region and lowers the barrier; reverse bias widens it",
            "Reverse bias removes all electrons from the semiconductor",
            "Electrons can only ever move from p to n material",
          ],
          correctIndex: 1,
          explanation:
            "The depletion region is a carrier-free zone with a built-in ~0.7 V barrier (in Si). Forward bias pushes majority carriers inward, shrinking the region and collapsing the barrier so current flows; reverse bias pulls carriers away, widening the region so only microamp leakage passes. The junction is a voltage-controlled valve.",
        },
        {
          question:
            "A transistor has current gain β = 100. A 20 μA signal at the base produces what collector current change, illustrating what function?",
          options: [
            "0.2 μA — attenuation",
            "20 μA — buffering",
            "100 μA — rectification",
            "2 mA — amplification",
          ],
          correctIndex: 3,
          explanation:
            "I_C = βI_B = 100 × 20 μA = 2000 μA = 2 mA. The small base current controls a much larger collector current drawn from the power supply — amplification. Driven fully on (saturation) or fully off (cut-off) instead, the same device is the digital switch inside logic gates.",
        },
        {
          question:
            "Why is the NAND gate called a universal gate?",
          options: [
            "It is the only gate whose output can be 1",
            "Any logic function can be constructed using NAND gates alone",
            "It works in every country's voltage standard",
            "It has more inputs than any other gate",
          ],
          correctIndex: 1,
          explanation:
            "Tying a NAND's inputs together makes NOT; NAND followed by NOT makes AND; NANDs with inverted inputs make OR — and from NOT, AND, OR every Boolean function follows. NOR is universal by the same argument. Practical bonus: NAND is the most compact gate to build in CMOS, so real chips lean on it heavily.",
        },
      ],
    },
    {
      id: "particles-and-universe",
      title: "Particles & the Universe",
      subtitle: "A motivating tour of the Standard Model and the Big Bang",
      sections: [
        {
          id: "standard-model-tour",
          title: "The Standard Model: A Periodic Table for Reality",
          content: `
<p>Zoom in past atoms, past nuclei, past protons, and you reach the current bottom floor: the <strong>Standard Model</strong> of particle physics, a catalogue of the fundamental building blocks and the rules they obey — the most precisely tested theory humans have produced.</p>
<p>Matter comes in two families of <strong>fermions</strong>, each arranged in three generations of increasing mass:</p>
<table>
  <thead>
    <tr><th>Family</th><th>Gen 1</th><th>Gen 2</th><th>Gen 3</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Quarks</strong></td><td>up, down</td><td>charm, strange</td><td>top, bottom</td></tr>
    <tr><td><strong>Leptons</strong></td><td>electron, ν_e</td><td>muon, ν_μ</td><td>tau, ν_τ</td></tr>
  </tbody>
</table>
<p>Quarks carry fractional charge (up: +2/3, down: −1/3) and are never seen alone — the strong force confines them into composites: a proton is uud (+2/3 +2/3 −1/3 = +1), a neutron udd (charge 0). Leptons roam free; the neutrinos are nearly massless ghosts that barely interact — about 10¹⁴ from the Sun pass through you per second. Everyday matter uses only generation 1; generations 2 and 3 are heavier photocopies that decay almost instantly, and nobody fully knows why nature bothered with three.</p>
<p>Forces are carried by exchanged <strong>bosons</strong>:</p>
<ul>
  <li><strong>Photon</strong> — electromagnetism (infinite range)</li>
  <li><strong>Gluons</strong> — strong force, binding quarks and nuclei (~10⁻¹⁵ m)</li>
  <li><strong>W and Z bosons</strong> — weak force, the agent of beta decay and the Sun's proton fusion</li>
  <li><strong>Higgs boson</strong> — the ripple of the field whose interactions give fundamental particles their masses; predicted 1964, found at the LHC in 2012</li>
</ul>
<div class="analogy">
  <h3>Analogy: Exchanged basketballs</h3>
  <p>Two skaters throwing a basketball back and forth drift apart — momentum exchange acts like a repulsive force. Quantum forces work by particle exchange in a similar (if looser) spirit: the photon is the "basketball" of electromagnetism, permitted fleeting existence by the energy-time uncertainty relation from Chapter 3.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Powerful, and openly incomplete</h4>
  <p>The Standard Model has survived every collider test, yet it omits gravity, offers no particle for dark matter, and cannot explain why matter outnumbers antimatter. Its gaps are the job listings of twenty-first-century physics — Phases 4–6 build the machinery to read them.</p>
</div>`,
        },
        {
          id: "cosmic-rays",
          title: "Cosmic Rays: The Universe's Free Particle Accelerator",
          content: `
<p>Right now, particles from deep space are striking the atmosphere above you. These <strong>cosmic rays</strong> — mostly protons, some heavier nuclei — arrive with energies from millions to beyond 10²⁰ eV, launched by supernova shock waves and the environs of supermassive black holes. The record-holder, the 1991 "Oh-My-God particle," carried 3 × 10²⁰ eV: a single proton with the kinetic energy of a well-hit tennis ball, tens of millions of times beyond the LHC's reach.</p>
<p>A primary cosmic ray never reaches your head. Around 15–25 km up it slams into an air nucleus and detonates a cascade: pions and kaons that decay into muons, electrons, positrons, neutrinos, and gamma photons, which themselves collide and multiply — an <strong>air shower</strong> that can spray billions of secondary particles over square kilometres of ground. Detector arrays such as the 3000 km² Pierre Auger Observatory reconstruct the primary's energy and direction from this footprint.</p>
<p>Cosmic rays are woven through this whole subject:</p>
<ul>
  <li>The muons reaching your body (roughly one per cm² per minute at sea level) are the <strong>time-dilation</strong> proof from Chapter 1, replayed continuously overhead.</li>
  <li>Before accelerators existed, cosmic rays <em>were</em> particle physics: the positron (1932, antimatter's debut), the muon (1936), and the pion and strange particles (1947) were all discovered in cosmic-ray photographs.</li>
  <li>Cosmic rays steadily manufacture the <strong>carbon-14</strong> in the atmosphere — the very clock behind Chapter 4's radiocarbon dating: neutrons from air showers convert ¹⁴N into ¹⁴C.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Cosmic-ray strikes occasionally flip bits in electronics — a documented hazard for aircraft avionics and data centres, and one reason spacecraft fly radiation-hardened, error-correcting computers. Muon flux is also now a tool: "muography" radiographs volcanoes and pyramids, and in 2017 revealed a previously unknown void inside the Great Pyramid of Giza.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Physics you can detect yourself</h4>
  <p>A cloud chamber — a jar, felt soaked in alcohol, and dry ice — makes cosmic-ray muon trails visible on any kitchen table. Relativistic particles born of exploding stars, condensing vapour in front of you: the entire arc of this subject in one jam jar.</p>
</div>`,
        },
        {
          id: "big-bang-evidence",
          title: "Three Lines of Evidence for the Big Bang",
          content: `
<p>"The universe began 13.8 billion years ago in a hot, dense state" sounds like the least testable sentence in science. It is actually among the best supported, resting on three independent pillars.</p>
<p><strong>1. The expansion of the universe.</strong> In 1929 Edwin Hubble found that light from distant galaxies is <strong>redshifted</strong> — wavelengths stretched — and that recession speed grows in proportion to distance: v = H₀d. This is not galaxies flying through space but space itself stretching, carrying galaxies apart like raisins in rising dough (every raisin sees all others receding, no raisin is the centre). Run the film backward and everything converges: the stretching implies a beginning, and 1/H₀ gives its timescale — about 14 billion years.</p>
<p><strong>2. The cosmic microwave background (CMB).</strong> A hot early universe was an opaque glowing plasma. Around 380 000 years in, at ~3000 K, it cooled enough for neutral atoms to form and the fog lifted; that first-released light still fills the sky, its wavelengths stretched a thousandfold by expansion into microwaves. Predicted in 1948, it was found by accident in 1964 by Penzias and Wilson (who initially blamed pigeon droppings in their antenna). The CMB's spectrum is the most perfect blackbody ever measured — Planck's curve from Chapter 2 at <strong>T = 2.725 K</strong> — and its part-in-100 000 temperature ripples are the seeds that gravity grew into galaxies.</p>
<p><strong>3. Primordial abundances.</strong> In its first three minutes the universe was a fusion reactor (Chapter 4's physics). The expansion rate and known nuclear reaction rates predict the output: roughly <strong>75% hydrogen, 25% helium-4</strong> by mass, plus traces of deuterium and lithium. Measured abundances in the oldest gas clouds match — stars could never have produced this much helium in the time available.</p>
<div class="key-concept">
  <h4>Key Concept: Independent witnesses agree</h4>
  <p>Expansion (gravity and optics), the CMB (thermal and quantum physics), and light-element abundances (nuclear physics) are three unrelated kinds of evidence, and all three point to the same hot beginning at the same epoch. That convergence — not any single observation — is why the Big Bang is settled science.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>An old analogue TV tuned between channels displayed static — and about 1% of that flicker was the cosmic microwave background. The afterglow of the Big Bang used to be visible in every living room.</p>
</div>`,
        },
        {
          id: "open-frontier",
          title: "The Open Frontier: What This Course Is Building Toward",
          content: `
<p>Here is the humbling scoreboard: everything in this subject — every atom, photon, and nucleus, every star and galaxy — accounts for about <strong>5%</strong> of the universe's energy content. The rest is the frontier:</p>
<ul>
  <li><strong>Dark matter (~27%):</strong> galaxies rotate too fast for their visible mass, clusters bend light more than their stars allow, and the CMB ripples demand extra gravitating stuff. Something invisible outweighs atoms five to one, and no Standard Model particle fits.</li>
  <li><strong>Dark energy (~68%):</strong> since 1998, supernova measurements show the expansion is <em>accelerating</em>, as if empty space itself pushes outward. What it is, nobody knows.</li>
  <li><strong>The matter mystery:</strong> the Big Bang should have minted matter and antimatter equally, annihilating to pure light. Some tiny asymmetry — about one part per billion — left the residue that is us. Its origin is unexplained.</li>
  <li><strong>Quantum gravity:</strong> general relativity and quantum mechanics, each flawless in its domain, contradict each other at black-hole cores and the first instant of the universe. Unifying them is the deepest open problem in physics.</li>
</ul>
<p>None of these are idle puzzles; all are under active attack — by the LHC, by underground dark-matter detectors, by gravitational-wave observatories listening to colliding black holes, by satellite maps of the CMB. Several were opened by exactly the tools you have just learned: photons, spectral lines, decay laws, E = mc².</p>
<div class="key-concept">
  <h4>Key Concept: Your road map from here</h4>
  <p>Phase 4 rebuilds mechanics and electromagnetism with calculus and takes relativity seriously (8.033-level). Phase 5 delivers real quantum mechanics — Schrödinger's equation replaces Bohr's scaffolding. Phase 6 reaches statistical, solid-state, nuclear, and particle physics, where this chapter's tour becomes working knowledge. Everything ahead is a sharpening of tools you now hold in rough form.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In 1900 Lord Kelvin allegedly saw only "two clouds" left in physics: the ether problem and the blackbody problem. Those clouds became relativity and quantum mechanics — this entire subject. Today's dark-matter and dark-energy clouds are plausibly the same kind of weather. The lesson of modern physics is that the anomalies are never footnotes; they are the next chapter.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "According to the Standard Model, a proton is composed of:",
          options: [
            "Three electrons bound by photons",
            "Two up quarks and one down quark bound by gluons",
            "Two down quarks and one up quark bound by W bosons",
            "A single fundamental particle with no internal structure",
          ],
          correctIndex: 1,
          explanation:
            "The proton is uud: charges +2/3 +2/3 −1/3 = +1, held together by gluons, the strong-force carriers. The neutron is udd (charge 0). Swapping the recipe (option with two downs) gives the neutron, and W bosons carry the weak force, not the binding.",
        },
        {
          question:
            "Which particle was discovered at the LHC in 2012, and what is its role?",
          options: [
            "The graviton, which carries gravity",
            "The neutrino, which explains beta decay",
            "The Higgs boson, associated with the field that gives fundamental particles mass",
            "The muon, a heavy cousin of the electron",
          ],
          correctIndex: 2,
          explanation:
            "The Higgs boson — predicted in 1964 — is the quantum ripple of the Higgs field, whose interactions give fundamental particles their masses. The muon was found in cosmic rays in 1936, neutrinos in 1956, and the graviton remains hypothetical: gravity is the force the Standard Model does not cover.",
        },
        {
          question:
            "Sea-level detectors count large numbers of cosmic-ray muons despite their 2.2 μs lifetime. This everyday observation is direct evidence for:",
          options: [
            "Relativistic time dilation",
            "The expansion of the universe",
            "Quantum tunnelling",
            "The photoelectric effect",
          ],
          correctIndex: 0,
          explanation:
            "Muons are created ~15 km up and classically could travel only ~660 m before decaying. At γ ≈ 16 their lab-frame lifetime is stretched enough to reach the ground (equivalently, in their frame the atmosphere is length-contracted). Every muon through your hand is special relativity confirmed.",
        },
        {
          question:
            "The cosmic microwave background is best described as:",
          options: [
            "Radio emission from the Milky Way's central black hole",
            "Sunlight scattered off interstellar dust",
            "Radiation produced continuously by present-day stars",
            "Light released when the early universe first became transparent, redshifted to 2.7 K",
          ],
          correctIndex: 3,
          explanation:
            "About 380 000 years after the Big Bang, the plasma cooled to ~3000 K, atoms formed, and the universe turned transparent. That freed light, stretched a thousandfold by cosmic expansion, now fills the sky as a near-perfect 2.725 K blackbody — Planck's curve serving as cosmology's star witness.",
        },
        {
          question:
            "Why is the measured ~25% helium abundance of the universe considered strong Big Bang evidence?",
          options: [
            "Helium is too heavy to be made any other way",
            "Nucleosynthesis in the hot first minutes predicts exactly this abundance, far more than stars could have produced",
            "Helium is only found in the oldest galaxies",
            "The CMB is made of helium nuclei",
          ],
          correctIndex: 1,
          explanation:
            "Applying known fusion physics to a hot, expanding early universe predicts ~75% hydrogen and ~25% helium-4 by mass, plus trace deuterium and lithium — matching observations of the most pristine gas. Stellar fusion over 13.8 billion years could account for only a small fraction of the helium seen, so most of it must be primordial.",
        },
      ],
    },
  ],
};
