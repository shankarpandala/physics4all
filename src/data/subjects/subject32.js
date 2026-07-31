export const subject32 = {
  id: "astrophysics-cosmology",
  number: 32,
  title: "Astrophysics & Cosmology",
  description:
    "The universe as a physics laboratory, at the Carroll & Ostlie/Ryden level: telescopes and distances, stellar structure and death, galaxies and dark matter, and the Big Bang's evidence.",
  phase: 6,
  chapters: [
    {
      id: "observing-the-universe",
      title: "Observing the Universe",
      subtitle: "Telescopes, the distance ladder, and magnitudes",
      sections: [
        {
          id: "telescopes-across-the-spectrum",
          title: "Eyes Across the Electromagnetic Spectrum",
          content: `
<p>Almost everything we know about the universe arrives as light — and for most of history, only the sliver of it our eyes detect. Modern astronomy's first revolution was realizing that the sky looks utterly different in every band of the electromagnetic spectrum, and building an instrument for each.</p>
<p>Two numbers govern any telescope. <strong>Light-gathering power</strong> scales with collecting area, ∝ D² for aperture diameter D — a 10 m mirror collects four million times more light than your eye. <strong>Angular resolution</strong> — the finest detail resolvable — is set by diffraction:</p>
<p style="text-align:center;">θ<sub>min</sub> ≈ 1.22 λ/D</p>
<p>Smaller θ is better, so you want short wavelengths or big apertures. This one formula explains the shape of the whole field. Radio waves (λ ~ centimeters to meters) are roughly a million times longer than visible light, so a single radio dish has hopeless resolution — which is why radio astronomers invented <strong>interferometry</strong>: link dishes hundreds or thousands of kilometers apart and they synthesize the resolution of one dish that size. The Event Horizon Telescope pushed this to a dish the size of Earth, sharp enough to image a black hole's shadow.</p>
<p>The atmosphere is the other constraint. It is transparent in just two windows — visible light and radio — and absorbs nearly everything else:</p>
<ul>
  <li><strong>Infrared</strong> (warm dust, dust-shrouded star birth, highly redshifted galaxies): high dry mountaintops or space — JWST orbits 1.5 million km away, chilled below 50 K so its own heat glow doesn't blind it.</li>
  <li><strong>Ultraviolet and X-ray</strong> (hot young stars; million-kelvin gas around black holes, neutron stars, and galaxy clusters): space only — Hubble, Chandra, XMM-Newton.</li>
  <li><strong>Gamma rays</strong> (the most violent events: pulsars, jets, gamma-ray bursts): space, or ground arrays catching the flashes their air showers make.</li>
</ul>
<p>Even in the visible, atmospheric turbulence smears images to ~1 arcsecond — far worse than diffraction allows. <strong>Adaptive optics</strong> fights back, flexing a mirror hundreds of times per second against a laser-made artificial star to unblur the wavefront in real time.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your dark-adapted eye detects perhaps 1% of the photons that strike it; a modern CCD detects over 90% and integrates for hours. A backyard telescope with a camera today outperforms the great visual observatories of the 19th century.</p>
</div>`,
        },
        {
          id: "beyond-light",
          title: "Beyond Light: Neutrinos and Gravitational Waves",
          content: `
<p>Photons are no longer astronomy's only messenger. Two others now report from places light can never leave — and each has already rewritten a chapter of physics.</p>
<p><strong>Neutrinos</strong> interact so feebly that they stream unhindered from the Sun's core, where the photons around them take ~100,000 years to random-walk out. Detecting them means enormous underground tanks — chlorine, water, or ice — watching for the rare flash of a single interaction. Ray Davis's chlorine experiment caught solar neutrinos in the 1960s and found only a third of the predicted number: the famous <strong>solar neutrino problem</strong>. The resolution was profound — neutrinos oscillate between flavors in flight, which requires them to have mass, physics beyond the Standard Model discovered by staring at the Sun. In February 1987, detectors in Japan and Ohio caught about two dozen neutrinos from <strong>Supernova 1987A</strong> — hours <em>before</em> its light brightened, exactly as core-collapse theory predicts, since the neutrinos escape the exploding star's interior first. Today IceCube, a cubic kilometer of Antarctic ice, traces high-energy neutrinos back to distant active galaxies.</p>
<p><strong>Gravitational waves</strong> — ripples in spacetime itself, predicted by Einstein in 1916 — were first caught on 14 September 2015, when LIGO's two 4-km laser interferometers both recorded the chirp of two ~30 M☉ black holes merging over a billion light-years away. The strain was ~10⁻²¹: the arms changed length by a thousandth of a proton's width. Subject 33 derives the physics; here the point is the astronomy — an entirely new sense, hearing masses accelerate rather than seeing them glow.</p>
<div class="key-concept">
  <h4>Multimessenger astronomy</h4>
  <p>On 17 August 2017, LIGO/Virgo heard two neutron stars spiral together (GW170817); 1.7 seconds later a gamma-ray burst arrived, and within hours telescopes worldwide watched the glowing debris — a kilonova, its light bearing the spectral fingerprints of freshly forged gold and platinum. One event, observed in gravity and across the electromagnetic spectrum: the same source cross-examined by independent messengers.</p>
</div>
<p>The lesson of the whole chapter so far: every new window — radio, X-ray, neutrino, gravitational — revealed a universe nobody had predicted. Pulsars, the CMB, and merging black holes were all discovered by instruments built to look where no one had looked before.</p>`,
        },
        {
          id: "magnitudes",
          title: "The Magnitude System",
          content: `
<p>Astronomers measure brightness on a scale invented ~2,150 years ago. Hipparchus ranked naked-eye stars from 1st magnitude (brightest) to 6th (faintest) — and because the eye responds roughly logarithmically, his ranking was secretly a logarithmic scale of flux. The modern definition keeps his numbers and makes them exact: <strong>5 magnitudes = a factor of 100 in flux</strong>. So one magnitude is a factor of 100^(1/5) ≈ 2.512, and for two stars with fluxes F₁ and F₂:</p>
<p style="text-align:center;">m₁ − m₂ = −2.5 log₁₀(F₁/F₂)</p>
<p>Mind the two traps: <em>bigger magnitude means fainter</em>, and the scale is logarithmic. Sirius sits at m = −1.46, Venus can reach −4.6, the full Moon −12.7, the Sun −26.7; Hubble reaches beyond m = +30 — some 10¹⁵ times fainter than Sirius.</p>
<p>Apparent magnitude m mixes two things: how luminous the star is, and how far away it sits. To compare stars fairly, define the <strong>absolute magnitude M</strong>: the apparent magnitude the star <em>would</em> have at a standard distance of 10 parsecs. Since flux falls as 1/d² (the inverse-square law), m and M differ by a pure function of distance, the <strong>distance modulus</strong>:</p>
<p style="text-align:center; font-size:1.1em;"><strong>m − M = 5 log₁₀(d) − 5</strong> &nbsp;(d in parsecs)</p>
<p><strong>Worked example.</strong> A Cepheid's pulsation period tells us (next section) that M = −4.0. We measure m = +11.0. Then 5 log d = m − M + 5 = 20, so log d = 4 and d = 10⁴ pc = 10 kpc. Three measured numbers, one logarithm, and you have crossed the galaxy with a ruler.</p>
<p><strong>Worked example — the Sun.</strong> m = −26.7 at d = 1 AU = 4.85 × 10⁻⁶ pc gives M = +4.83. Seen from 10 pc, the Sun would be an anonymous 5th-magnitude star, barely visible from a dark site — a bracing calibration of our own ordinariness.</p>
<div class="key-concept">
  <h4>The master equation of distance</h4>
  <p>Every rung of the distance ladder is this same move: learn a source's absolute magnitude M somehow, measure its apparent magnitude m, and the distance modulus hands you d. Objects whose M is knowable are called <strong>standard candles</strong> — the most valuable objects in the sky.</p>
</div>`,
        },
        {
          id: "the-distance-ladder",
          title: "The Distance Ladder, Rung by Rung",
          content: `
<p>No single method reaches from the Solar System to the edge of the observable universe. Instead astronomers climb a <strong>ladder</strong>: each technique is calibrated by the one below it and reaches farther than it.</p>
<p><strong>Rung 1 — Parallax (geometry, no assumptions).</strong> As Earth orbits, a nearby star appears to shift against distant background stars. Half the annual shift is the parallax angle p, and trigonometry gives</p>
<p style="text-align:center;">d (parsecs) = 1 / p (arcseconds)</p>
<p>This <em>defines</em> the parsec: the distance where p = 1&Prime;, about 3.26 light-years. The angles are brutally small — even the nearest star, Proxima Centauri, shows p = 0.77&Prime;, which is why stellar parallax was not measured until 1838, two centuries after Copernicus made it a prediction. The Gaia satellite now measures microarcsecond-class parallaxes for nearly two billion stars, extending honest geometry across much of the galaxy.</p>
<p><strong>Rung 2 — Cepheid variables (calibrated by parallax).</strong> In 1912 Henrietta Leavitt, studying thousands of pulsating stars in the Small Magellanic Cloud — all at essentially the same distance — found that a Cepheid's pulsation <strong>period reveals its luminosity</strong>: the slower the pulse, the more luminous the star. Measure the period (easy), read off M, apply the distance modulus. Cepheids are supergiants visible in other galaxies; Edwin Hubble's 1923 detection of one in Andromeda settled the "island universe" debate at a stroke — Andromeda lay far outside the Milky Way.</p>
<p><strong>Rung 3 — Type Ia supernovae (calibrated by Cepheids).</strong> A white dwarf detonating near the Chandrasekhar limit (Chapter 3) releases nearly the same luminosity every time — M ≈ −19.3, briefly outshining its entire galaxy — with the remaining scatter correctable from the light curve's decline rate. Type Ia events are visible billions of light-years away, and they carry the ladder into the realm where the universe's expansion itself becomes measurable, with consequences Chapter 5 will detonate.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Errors climb the ladder too: a bias in parallax propagates into Cepheids and then supernovae. Today the ladder yields H₀ ≈ 73 km/s/Mpc while the CMB implies ≈ 67 — the "Hubble tension," possibly a calibration subtlety, possibly new physics. The ladder you just climbed is an active crime scene.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Gaia measures a star's parallax as 0.020 arcseconds. How far away is the star?",
          options: ["0.02 pc", "20 pc", "50 pc", "500 pc"],
          correctIndex: 2,
          explanation:
            "Distance in parsecs is the reciprocal of parallax in arcseconds: d = 1/p = 1/0.020 = 50 pc. This is pure triangulation off the diameter of Earth's orbit — the only distance method that assumes nothing about the star itself, which is why it anchors every other rung of the ladder.",
        },
        {
          question:
            "Star A has apparent magnitude m = 2.0 and star B has m = 7.0. How do their observed fluxes compare?",
          options: [
            "A is 5 times brighter than B",
            "A is 100 times brighter than B",
            "B is 100 times brighter than A",
            "A is 2.5 times brighter than B",
          ],
          correctIndex: 1,
          explanation:
            "Five magnitudes corresponds by definition to a flux ratio of exactly 100, and smaller magnitude means brighter. Each single magnitude is a factor of about 2.512, and 2.512⁵ = 100. The scale runs 'backwards' because it inherits Hipparchus's ancient ranking of stars from 1st class down to 6th.",
        },
        {
          question:
            "Why do radio telescopes rely on interferometry — linking widely separated dishes — far more than optical telescopes do?",
          options: [
            "Radio waves are too weak for a single dish to detect",
            "Radio interference from Earth must be canceled between dishes",
            "The atmosphere blocks radio waves except at multiple sites",
            "Diffraction limits resolution to θ ≈ 1.22 λ/D, and radio wavelengths are up to a million times longer than optical ones",
          ],
          correctIndex: 3,
          explanation:
            "Resolution scales as λ/D. At centimeter-to-meter wavelengths, a single dish would need to be kilometers wide to match even a small optical telescope's sharpness. Linking dishes separated by a baseline B synthesizes the resolution (though not the collecting area) of one dish of diameter B — pushed to Earth-sized baselines, this imaged a black hole's shadow.",
        },
        {
          question:
            "What property of Cepheid variable stars makes them standard candles?",
          options: [
            "They all have exactly the same luminosity",
            "Their pulsation period is directly related to their luminosity",
            "Their color is independent of distance",
            "They only occur at known, fixed distances",
          ],
          correctIndex: 1,
          explanation:
            "Leavitt's period–luminosity law: the longer a Cepheid takes to pulse, the more luminous it is. The period is easy to measure from a light curve and is unaffected by distance, so it hands you the absolute magnitude M; comparing with the apparent magnitude m through the distance modulus gives d. Cepheids do not share one luminosity (option A) — that is closer to Type Ia supernovae.",
        },
        {
          question:
            "Why was the event GW170817 a landmark for astronomy?",
          options: [
            "It was the first detection of gravitational waves of any kind",
            "It proved that neutron stars cannot merge",
            "A neutron-star merger was observed in gravitational waves, gamma rays, and visible light — one event seen through independent messengers",
            "It measured the mass of the neutrino for the first time",
          ],
          correctIndex: 2,
          explanation:
            "GW170817 was heard by LIGO/Virgo as a neutron-star inspiral, followed 1.7 s later by a gamma-ray burst and then a kilonova glowing with freshly synthesized heavy elements. The first detection of gravitational waves was GW150914 in 2015 (a black-hole merger, with no light expected or seen). Multimessenger astronomy lets utterly independent physics cross-check a single source.",
        },
      ],
    },
    {
      id: "stars",
      title: "Stars",
      subtitle: "Stellar structure, nuclear burning, and the HR diagram",
      sections: [
        {
          id: "stellar-structure-equations",
          title: "Four Equations That Build a Star",
          content: `
<p>A star is a self-gravitating ball of gas that would collapse in under an hour if gravity went unopposed — the Sun's free-fall time is about 30 minutes. It doesn't collapse because at every layer, the pressure from below exceeds the pressure from above by exactly the weight of that layer. Astrophysicists describe the whole star with four coupled differential equations in the radial coordinate r; everything about stellar life follows from them.</p>
<p><strong>1. Hydrostatic equilibrium:</strong> dP/dr = −G m(r) ρ / r². The pressure gradient balances gravity. Pressure must <em>decrease</em> outward, and the steeper the local gravity, the faster it falls. From this equation alone you can estimate the Sun's central pressure (~10¹⁶ Pa) and central temperature (~1.5 × 10⁷ K) — hot enough, it turns out, for fusion.</p>
<p><strong>2. Mass continuity:</strong> dm/dr = 4πr²ρ. Bookkeeping: m(r) is the mass enclosed within radius r, accumulated shell by shell.</p>
<p><strong>3. Energy generation:</strong> dL/dr = 4πr²ρε. The luminosity flowing outward through radius r grows wherever nuclear reactions release energy at rate ε per kilogram. In the Sun, ε is nonzero only in the inner ~25% by radius; outside that, L is constant — the envelope merely passes the energy along.</p>
<p><strong>4. Energy transport:</strong> dT/dr = (an expression depending on how heat travels). If photons diffuse outward (<strong>radiation</strong>), the temperature gradient is set by the gas's opacity. If that required gradient gets too steep, the gas starts to boil (<strong>convection</strong>) — hot blobs physically rise, as in a pot of water. The Sun is radiative inside, convective in its outer 30%; the granulation on its surface is the top of the boil.</p>
<p>Close the system with an equation of state P(ρ, T) — ideal gas plus radiation pressure for normal stars — and opacity and reaction-rate physics, and you can integrate from center to surface.</p>
<div class="key-concept">
  <h4>The thermostat</h4>
  <p>Fusion is self-regulating. If the core over-produces energy, it expands and cools, throttling the temperature-sensitive reactions; under-produce, and contraction reheats it. This feedback holds a star like the Sun steady for ten billion years — a fusion reactor with no engineers, stabilized by gravity itself.</p>
</div>`,
        },
        {
          id: "nuclear-burning",
          title: "The pp Chain and the CNO Cycle",
          content: `
<p>The Sun's power source has to convert mass to energy: chemical burning would exhaust it in ~10,000 years, gravitational contraction in ~30 million — both refuted by geology. Fusing hydrogen to helium does the job: helium-4 has 0.7% less mass than four protons, and E = mc² on 0.7% of the Sun's hydrogen funds ten billion years of sunshine. Each conversion of four protons releases 26.7 MeV.</p>
<p>But there is an obstacle. Two protons repel electrically, and at 1.5 × 10⁷ K their thermal energy (~keV) falls far short of the ~MeV Coulomb barrier. Classically the Sun cannot shine. It shines by <strong>quantum tunneling</strong>: a tiny probability of barrier penetration, multiplied by ~10⁵⁶ protons attempting constantly. The compromise between the Maxwell–Boltzmann tail (favoring rare fast protons) and tunneling probability (favoring energy) defines the narrow <strong>Gamow window</strong> where essentially all fusion happens.</p>
<p>The <strong>pp chain</strong> — the Sun's main route — in its principal branch:</p>
<ul>
  <li>p + p → ²H + e⁺ + ν &nbsp;(agonizingly slow: it needs a weak-interaction β-decay during the collision; an average proton waits ~9 billion years)</li>
  <li>²H + p → ³He + γ &nbsp;(seconds)</li>
  <li>³He + ³He → ⁴He + 2p &nbsp;(closing the loop)</li>
</ul>
<p>That first step's slowness is why the Sun burns steadily instead of exploding — the entire solar lifetime is the queue for one weak interaction. The neutrinos escape directly and are our live view of the core; detecting them (Chapter 1) confirmed this chain reaction is really running, right now.</p>
<p>Stars heavier than ~1.3 M☉ use a faster catalytic route, the <strong>CNO cycle</strong>: carbon, nitrogen, and oxygen nuclei absorb protons in a loop, emerging unchanged with one ⁴He produced per turn. Its higher Coulomb barriers make it savagely temperature-sensitive: near solar conditions, pp power scales roughly as T⁴, CNO as T¹⁷.</p>
<div class="key-concept">
  <h4>Why the T-dependence matters</h4>
  <p>A slightly hotter core means enormously faster CNO burning. Massive stars therefore run brilliantly and briefly, with fierce, concentrated cores that drive central convection. That steep exponent — not mass alone — is the deep reason an O star lives millions of years while a red dwarf will outlast a thousand solar lifetimes.</p>
</div>`,
        },
        {
          id: "the-hr-diagram",
          title: "The HR Diagram: Astronomy's Master Key",
          content: `
<p>Around 1911, Ejnar Hertzsprung and Henry Norris Russell independently plotted stars' luminosities against their surface temperatures — and the points refused to scatter. The <strong>Hertzsprung–Russell diagram</strong> is astronomy's single most important graph: luminosity (or absolute magnitude) on the vertical axis, temperature on the horizontal — plotted <em>backwards</em>, hot on the left, by historical accident of the spectral sequence O B A F G K M (hottest blue ~40,000 K to coolest red ~3,000 K).</p>
<p>About 90% of stars fall on a diagonal band from hot-and-luminous to cool-and-dim: the <strong>main sequence</strong>. These are the hydrogen-burners, and the band is really a <strong>mass sequence</strong>: massive stars sit at the top left, red dwarfs at the bottom right. Observations of binary stars reveal a steep mass–luminosity relation, roughly</p>
<p style="text-align:center;">L ∝ M³·⁵</p>
<p>so a 10 M☉ star shines ~3,000 times brighter than the Sun. Fuel scales as M but consumption as M³·⁵, giving main-sequence lifetimes t ∝ M/L ∝ M⁻²·⁵: the 10 M☉ star lives only ~30 million years against the Sun's 10 billion.</p>
<p>The off-band regions are decoded by Stefan–Boltzmann, L = 4πR²σT⁴, which links the two axes through radius:</p>
<ul>
  <li><strong>Giants and supergiants</strong> (upper right): cool yet enormously luminous — they must be huge. Betelgeuse would swallow Jupiter's orbit.</li>
  <li><strong>White dwarfs</strong> (lower left): hot yet feeble — they must be tiny, roughly Earth-sized. Chapter 3 explains what they are.</li>
</ul>
<p>Lines of constant radius run diagonally across the diagram; you can read a star's size straight off the plot.</p>
<div class="analogy">
  <h3>Analogy: The census snapshot</h3>
  <p>Photograph a city and most people are at work or asleep — not because those activities are special, but because that is where people spend most of their time. The main sequence is crowded for the same reason: hydrogen burning is the longest stage of stellar life. Sparse regions of the HR diagram mark fast evolutionary phases, exactly as empty wedding venues outnumber empty offices. The diagram is a population snapshot that secretly encodes a timeline — and reading evolution out of it is the next section's job.</p>
</div>`,
        },
        {
          id: "stellar-evolution",
          title: "Evolutionary Tracks: A Life Story Written by Mass",
          content: `
<p>A star's birth mass fixes nearly everything that follows — its luminosity, lifetime, death, and remnant. Stars condense from collapsing molecular-cloud cores, descend onto the main sequence when core hydrogen ignites, and sit there for ~90% of their lives. The drama starts when the core's hydrogen runs out.</p>
<p><strong>A Sun-like star (~0.5–8 M☉).</strong> The spent helium core, with no fusion to support it, contracts and heats; hydrogen ignites in a shell around it, and the envelope responds by ballooning a hundredfold. The star slides up and right on the HR diagram: a <strong>red giant</strong> (the Sun will reach roughly Venus's orbit in ~5 billion years). The inert core contracts until, at ~10⁸ K, helium ignites via the <strong>triple-alpha process</strong> (3 ⁴He → ¹²C — a two-step collision so improbable it only works at stellar densities, and the origin of all carbon). In solar-mass stars the core is by then electron-degenerate, so ignition runs away in a <strong>helium flash</strong>. Steady helium burning follows; then the double-shell <strong>asymptotic giant branch</strong>, thermally pulsing and shedding its envelope, which drifts off as a glowing <strong>planetary nebula</strong> while the exposed carbon–oxygen core remains as a white dwarf.</p>
<p><strong>A massive star (&gt;8 M☉).</strong> Core temperatures climb high enough to ignite each successive ash: carbon, neon, oxygen, silicon, building an onion of burning shells around a growing <strong>iron core</strong>. Each stage burns faster — for a 20 M☉ star, carbon lasts centuries and silicon about a day — because iron-group nuclei sit at the peak of binding energy per nucleon: fusing beyond iron <em>costs</em> energy. The star has run out of chemistry. What happens next is Chapter 3's core-collapse supernova.</p>
<p><strong>A red dwarf (&lt;0.5 M☉)</strong> is fully convective, circulates all its hydrogen through the core, and will burn for trillions of years. Every red dwarf ever born is still on the main sequence.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>We test these invisible-timescale predictions with star clusters — coeval stars at one distance. A cluster's HR diagram shows the main sequence peeling away from the top down: the location of the "turnoff" is a clock. Globular-cluster turnoffs date them at ~12–13 billion years, comfortably (and reassuringly) younger than the universe.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "The equation of hydrostatic equilibrium, dP/dr = −Gmρ/r², expresses the fact that in a stable star:",
          options: [
            "temperature increases toward the center",
            "the outward pressure-gradient force on each gas layer balances the weight of that layer",
            "energy generation equals energy radiated",
            "gas pressure equals radiation pressure everywhere",
          ],
          correctIndex: 1,
          explanation:
            "Each shell of gas is squeezed between higher pressure below and lower pressure above; that net outward push must exactly support the shell's weight, or the star would collapse on a free-fall time of under an hour. The other statements describe different pieces of stellar physics — energy balance and transport are handled by the other structure equations.",
        },
        {
          question:
            "What is the net result of the pp chain?",
          options: [
            "Two helium nuclei fuse into beryllium",
            "Carbon catalyzes hydrogen into helium",
            "A neutron star forms from collapsed protons",
            "Four protons become one helium-4 nucleus, releasing energy, positrons, and neutrinos",
          ],
          correctIndex: 3,
          explanation:
            "The chain's steps sum to 4p → ⁴He + 2e⁺ + 2ν + 26.7 MeV. The energy comes from the 0.7% mass deficit via E = mc², and the neutrinos escape the core directly — detecting them on Earth verified that this reaction powers the Sun. Carbon-catalyzed burning is the CNO cycle, the dominant route only in stars above ~1.3 M☉.",
        },
        {
          question:
            "Why does the CNO cycle dominate over the pp chain in stars more massive than about 1.3 M☉?",
          options: [
            "Their hotter cores favor the CNO cycle's much steeper temperature dependence (≈T¹⁷ versus ≈T⁴)",
            "Massive stars contain no hydrogen to run the pp chain",
            "The pp chain only operates in convective envelopes",
            "CNO elements are only present in massive stars",
          ],
          correctIndex: 0,
          explanation:
            "Both routes burn hydrogen to helium, but the CNO cycle must tunnel through the larger Coulomb barriers of carbon, nitrogen, and oxygen, making its rate rise explosively with temperature. In the hotter cores of massive stars that steep T¹⁷ scaling wins; in the cooler Sun, pp still supplies ~99% of the power. All stars contain hydrogen and some CNO elements.",
        },
        {
          question:
            "Two stars have the same surface temperature, but one is 10,000 times more luminous. What does L = 4πR²σT⁴ let you conclude?",
          options: [
            "The luminous star is 10,000 times hotter inside",
            "The luminous star must be much more distant",
            "The luminous star's radius is 100 times larger — it is a giant",
            "The stars must have identical radii",
          ],
          correctIndex: 2,
          explanation:
            "At fixed T, luminosity scales as R², so 10,000× the luminosity means √10,000 = 100× the radius. This is exactly how the HR diagram exposes giants and white dwarfs: cool-but-brilliant stars must be huge, hot-but-dim stars must be tiny. Distance doesn't enter — luminosity is already the intrinsic power output.",
        },
        {
          question:
            "A 10 M☉ star has ten times the Sun's fuel supply, yet lives about 300 times shorter. Why?",
          options: [
            "Its strong stellar wind blows away most of its fuel",
            "It burns its fuel disproportionately fast: L ∝ M³·⁵, so lifetime scales roughly as M⁻²·⁵",
            "Massive stars cannot fuse hydrogen efficiently",
            "Its core is too cold for sustained fusion",
          ],
          correctIndex: 1,
          explanation:
            "Lifetime is fuel over consumption rate: t ∝ M/L. With the empirical mass–luminosity relation L ∝ M³·⁵, that gives t ∝ M⁻²·⁵ — a 10 M☉ star radiates ~3,000 solar luminosities and exhausts its core hydrogen in tens of millions of years. Extravagance, not fuel shortage, is what kills massive stars young.",
        },
      ],
    },
    {
      id: "stellar-endpoints",
      title: "Stellar Endpoints",
      subtitle: "White dwarfs, neutron stars, black holes, and supernovae",
      sections: [
        {
          id: "white-dwarfs",
          title: "White Dwarfs and the Chandrasekhar Limit",
          content: `
<p>When a Sun-like star sheds its envelope, what remains is its exposed carbon–oxygen core: a <strong>white dwarf</strong>, roughly the Sun's mass packed into Earth's volume. A teaspoon of it weighs several tonnes. With fusion finished forever, what holds it up against gravity?</p>
<p>Not heat. The answer is Subject 28's Fermi gas made astronomical: <strong>electron degeneracy pressure</strong>. The Pauli exclusion principle forbids two electrons from sharing a quantum state, so as gravity crushes electrons into a smaller volume, they are forced into ever-higher momentum states — the uncertainty principle in action: confine Δx and Δp must grow. Those high-momentum electrons exert pressure that depends only on density, <em>not temperature</em>. A white dwarf would push back just as hard at absolute zero. It is a star held up by quantum mechanics.</p>
<p>Working through the statistics gives a startling result: for non-relativistic degenerate electrons, P ∝ ρ⁵ᐟ³, which leads to <strong>R ∝ M⁻¹ᐟ³</strong> — <em>more massive white dwarfs are smaller</em>. Pile on mass and the star shrinks, driving electrons to higher momenta still. As they approach the speed of light, relativity caps their speed, the pressure law softens to P ∝ ρ⁴ᐟ³ — and at that exponent, pressure can no longer win the fight at any radius. In 1930, the 19-year-old Subrahmanyan Chandrasekhar computed the maximum mass a degenerate-electron star can have:</p>
<p style="text-align:center; font-size:1.1em;"><strong>M<sub>Ch</sub> ≈ 1.4 M☉</strong></p>
<div class="key-concept">
  <h4>Why a limit exists at all</h4>
  <p>Non-relativistic degeneracy stiffens fast enough to find a new equilibrium at any mass; relativistic degeneracy does not. The limit is built from fundamental constants — ℏ, c, G, and the proton mass — a maximum stellar mass legislated by quantum mechanics and special relativity jointly. Arthur Eddington ridiculed the result publicly; Chandrasekhar was right, and collected the Nobel Prize 53 years later.</p>
</div>
<p>Below the limit, a white dwarf's future is mere bookkeeping: it radiates its stored heat and dims over billions of years toward a cold <strong>black dwarf</strong> — though the universe is not yet old enough to contain a single one. Sirius B, the first white dwarf understood, still glows at ~25,000 K beside its brilliant companion. Above the limit — Chapter 3's remaining sections.</p>`,
        },
        {
          id: "neutron-stars-and-pulsars",
          title: "Neutron Stars and Pulsars",
          content: `
<p>Push a degenerate core past 1.4 M☉ and electrons fail — but matter has one more trick. Electrons are forced into protons (inverse β-decay, e⁻ + p → n + ν), converting the star into a ball of neutrons supported by <strong>neutron degeneracy pressure</strong> plus the repulsive core of the strong nuclear force. The result is a <strong>neutron star</strong>: ~1.4–2 M☉ compressed into a radius of ~11 km — a city-sized object at nuclear density, ~10¹⁷ kg/m³. A sugar-cube of it outweighs a mountain range. Surface gravity is ~10¹¹ times Earth's, and escape velocity about half the speed of light: general relativity is no longer a correction but a structural ingredient.</p>
<p>Two conservation laws make newborn neutron stars spectacular. Collapsing from ~10⁶ km to ~10 km spins the core up by angular-momentum conservation from ~monthly rotation to <strong>tens of rotations per second</strong>, and compresses the magnetic field to ~10⁸ tesla or beyond. A spinning magnet with its magnetic axis tilted from its spin axis beams radiation from its magnetic poles — and if a beam sweeps across Earth, we see metronomic pulses: a <strong>pulsar</strong>.</p>
<p>Jocelyn Bell found the first in 1967 — a 1.337-second radio tick so regular the discovery team half-jokingly labeled it LGM-1, for "little green men." The lighthouse model won: only a neutron star is small and rigid enough to rotate that fast without flying apart (a white dwarf would shred). The Crab pulsar, spinning 30 times per second inside the remnant of the supernova of 1054 AD, clinched the connection between supernovae and neutron stars; its measured spin-down feeds exactly the power that lights the surrounding nebula.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Millisecond pulsars — old neutron stars spun up to ~700 Hz by accreting matter from a companion — keep time competitively with atomic clocks. Timing arrays of them across the sky act as a galaxy-sized gravitational-wave detector, and in 2023 reported the nanohertz hum of supermassive black-hole binaries.</p>
</div>
<p>Neutron degeneracy has its own ceiling, the Tolman–Oppenheimer–Volkoff limit, roughly 2–3 M☉ (uncertain because nuclear physics at these densities is not fully known; observed neutron stars reach ~2.1 M☉). Beyond it, no known force in physics can halt collapse.</p>`,
        },
        {
          id: "supernovae-and-nucleosynthesis",
          title: "Supernovae and the Origin of the Elements",
          content: `
<p>Supernovae come in two physically distinct kinds that between them forge and scatter most of the periodic table.</p>
<p><strong>Core collapse (Type II, and stripped-envelope Ib/Ic).</strong> A massive star's iron core grows to the Chandrasekhar mass and fails: photodisintegration shatters iron nuclei (absorbing energy) while electron capture removes the electrons providing pressure. The core free-falls from Earth-sized to ~50 km in a fraction of a second, rebounds when it overshoots nuclear density, and the bounce plus a furious flood of neutrinos ejects the star's envelope. The energy budget is astonishing: ~3 × 10⁴⁶ J of gravitational binding energy is released, and <strong>~99% leaves as neutrinos</strong> — the visible fireworks, briefly outshining a galaxy, are a 1% side effect. SN 1987A's two dozen detected neutrinos, arriving hours before the light, confirmed the picture. The remnant is a neutron star or, for the heaviest progenitors, a black hole.</p>
<p><strong>Thermonuclear (Type Ia).</strong> A carbon–oxygen white dwarf in a binary gains mass — by accretion from a companion or by merging with another white dwarf — and approaches M<sub>Ch</sub>. Because degeneracy pressure ignores temperature, carbon ignition has no thermostat: the burning cannot expand and cool the fuel, so it runs away and incinerates the entire star in seconds. Nothing remains. The near-uniform fuel mass at detonation is precisely why Type Ia events are standard candles — the same property that makes them cosmology's yardstick (Chapter 1, and decisively Chapter 5).</p>
<div class="key-concept">
  <h4>Nucleosynthesis: where your atoms were made</h4>
  <p>Big Bang: hydrogen, helium, a trace of lithium. Stellar burning: carbon through iron, the binding-energy peak. Beyond iron, fusion costs energy, so heavy elements form by <strong>neutron capture</strong> — the slow s-process in AGB stars, and the rapid r-process in the neutron-rich chaos of core-collapse ejecta and neutron-star mergers (GW170817's kilonova showed freshly minted gold and platinum). Supernovae then broadcast it all into the interstellar medium for the next stellar generation. The iron in your blood and the calcium in your bones passed through a supernova; the gold in a ring likely needed colliding neutron stars.</p>
</div>
<p>Chemical evolution is cumulative: each generation of stars enriches the gas that births the next, which is why the oldest halo stars are nearly metal-free while the Sun, a latecomer, is ~2% heavy elements — planets included.</p>`,
        },
        {
          id: "stellar-black-holes",
          title: "Stellar Black Holes",
          content: `
<p>When a collapsing core exceeds the neutron-star maximum, physics runs out of ledges. No degeneracy pressure, no nuclear force, no conceivable material stiffness can support it — relativity guarantees collapse continues, and the result is a <strong>black hole</strong>: a region where gravity has won permanently and not even light escapes.</p>
<p>The boundary of no return is the <strong>event horizon</strong>, at the Schwarzschild radius</p>
<p style="text-align:center; font-size:1.1em;">R<sub>s</sub> = 2GM/c² ≈ 3 km × (M/M☉)</p>
<p>Note what this is <em>not</em>: a surface, a membrane, or a vacuum cleaner. Orbits outside behave almost normally — if the Sun became a black hole, Earth's orbit would not change. The horizon is simply the radius within which all futures point inward. A 10 M☉ stellar black hole has a 30 km horizon; everything about its exterior gravity is described by just its mass and spin. Subject 33 derives the geometry; here we ask the astronomer's question: how do you observe an object that emits nothing?</p>
<p><strong>By its company.</strong> In an X-ray binary, gas stripped from a companion star spirals inward through an <strong>accretion disk</strong>, and friction heats the inner disk to millions of kelvin — glowing in X-rays with up to ~10% mc² efficiency, ten times better than fusion. Cygnus X-1, discovered in 1964, orbits a blue supergiant with a compact companion of ~21 M☉ — far above any neutron-star limit: the first stellar black hole identified (and the subject of a famously lost bet by Stephen Hawking, who wagered against his own hopes as insurance).</p>
<p><strong>By its gravity alone.</strong> LIGO now routinely hears stellar black holes merging — dozens of events, masses ~3 to over 100 M☉ — measuring their masses and spins from the waveform with no light involved.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Stellar-mass black holes have monstrous big siblings: the Milky Way's center hosts Sgr A*, 4 million M☉, weighed by tracking individual stars whipping around it at up to 3% of light speed (Nobel Prize 2020) and imaged in silhouette by the Event Horizon Telescope in 2022. How supermassive black holes grew so large so early remains an open problem.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What supports a white dwarf against gravitational collapse?",
          options: [
            "Ongoing helium fusion in its core",
            "Thermal gas pressure from its high surface temperature",
            "Electron degeneracy pressure — the Pauli exclusion principle forcing electrons into high-momentum states",
            "Rapid rotation providing centrifugal support",
          ],
          correctIndex: 2,
          explanation:
            "A white dwarf has no fusion left; it is supported by a quantum-mechanical pressure that depends only on density, not temperature. Squeezing electrons into a smaller volume forces them into higher momentum states by the exclusion and uncertainty principles, and the resulting pressure would persist even at absolute zero. That temperature-independence is also why the star simply cools passively for billions of years.",
        },
        {
          question:
            "Why is there a maximum mass (the Chandrasekhar limit, ≈1.4 M☉) for white dwarfs?",
          options: [
            "As electrons become relativistic, the degeneracy pressure law softens from P ∝ ρ⁵ᐟ³ to P ∝ ρ⁴ᐟ³ and can no longer halt collapse at any radius",
            "Above 1.4 M☉ the star's carbon ignites and blows it apart immediately",
            "Heavier white dwarfs spin too fast to remain stable",
            "Electron degeneracy pressure decreases as density increases",
          ],
          correctIndex: 0,
          explanation:
            "Adding mass shrinks a white dwarf (R ∝ M⁻¹ᐟ³), pushing electron speeds toward c. Relativity then caps their speed, weakening how fast pressure grows with density — and with the softer ρ⁴ᐟ³ law, gravity wins at every radius. The limit combines ℏ, c, G, and the proton mass: quantum mechanics and relativity jointly legislating a maximum stellar mass. (Carbon ignition near the limit is what happens in a Type Ia supernova, but it is a consequence of approaching the limit, not the reason the limit exists.)",
        },
        {
          question:
            "Pulsars emit radio pulses with clock-like regularity, some repeating every few milliseconds. What produces the pulses?",
          options: [
            "Nuclear explosions on the neutron star's surface",
            "A binary companion eclipsing the star",
            "Radial pulsations — the star rhythmically expanding and contracting",
            "A rotating neutron star whose misaligned magnetic beam sweeps across Earth like a lighthouse",
          ],
          correctIndex: 3,
          explanation:
            "Collapse conserves angular momentum and magnetic flux, leaving a city-sized star spinning many times per second with an enormous magnetic field. Radiation beamed from the magnetic poles sweeps the sky as the star rotates; we get a pulse per sweep. Only a neutron star is compact enough to spin at millisecond periods without disintegrating — that ruled out white-dwarf pulsation and orbital explanations soon after Jocelyn Bell's 1967 discovery.",
        },
        {
          question:
            "What distinguishes a Type Ia supernova from a core-collapse (Type II) supernova?",
          options: [
            "Type Ia occurs only in the early universe",
            "Type Ia is the thermonuclear detonation of a white dwarf driven to the Chandrasekhar limit, leaving no remnant; Type II is the collapse of a massive star's iron core, leaving a neutron star or black hole",
            "Type Ia is fainter than Type II and visible only nearby",
            "Type II destroys the star completely while Type Ia leaves a white dwarf behind",
          ],
          correctIndex: 1,
          explanation:
            "They are different machines. A Type Ia is runaway carbon fusion in degenerate matter — no thermostat, total destruction, and a nearly uniform fuel mass that makes them standard candles. A Type II is gravity crushing an iron core, with ~99% of the energy escaping as neutrinos and a compact remnant left behind. Note option D has it exactly backwards.",
        },
        {
          question:
            "Iron sits at the peak of nuclear binding energy. How, then, do elements heavier than iron come to exist?",
          options: [
            "They fuse normally in the cores of the very most massive stars",
            "They were all produced in the Big Bang",
            "They are built by neutron capture — the s-process in AGB stars and the r-process in supernovae and neutron-star mergers",
            "They form when white dwarfs slowly crystallize",
          ],
          correctIndex: 2,
          explanation:
            "Fusing past iron absorbs energy rather than releasing it, so stars cannot burn their way there. Instead, nuclei grow by capturing neutrons (no Coulomb barrier) and then β-decaying: slowly over millennia in AGB stars (s-process) or in seconds amid the neutron floods of core collapse and neutron-star mergers (r-process). The kilonova accompanying GW170817 showed r-process gold and platinum being made in real time. The Big Bang produced essentially nothing heavier than lithium.",
        },
      ],
    },
    {
      id: "galaxies-large-scale-structure",
      title: "Galaxies & Large-Scale Structure",
      subtitle: "The Milky Way, galaxy types, and the case for dark matter",
      sections: [
        {
          id: "the-milky-way",
          title: "Anatomy of the Milky Way",
          content: `
<p>The milky band across a dark sky is our galaxy seen edge-on from inside — roughly 200 billion stars arranged in structures that took a century of effort to map, precisely because we cannot step outside for a look (and dust hides the disk's far side from optical view; radio and infrared see through it).</p>
<p>The components, from inside out:</p>
<ul>
  <li><strong>The disk</strong>: a thin, rotating platter ~30 kpc (100,000 light-years) across but only a few hundred parsecs thick — proportionally thinner than a vinyl record. It holds the gas, dust, and the young, metal-rich <strong>Population I</strong> stars, organized into spiral arms. The Sun sits ~8 kpc from the center, orbiting at ~220 km/s, one lap every ~230 million years — about 20 galactic years completed since the Sun formed.</li>
  <li><strong>The bulge and bar</strong>: a peanut-shaped central swarm of mostly old stars; our galaxy is a <em>barred</em> spiral.</li>
  <li><strong>The halo</strong>: a sparse spherical cloud of ancient, metal-poor <strong>Population II</strong> stars and ~150 globular clusters — dense balls of up to a million stars each, among the oldest objects known. Harlow Shapley mapped the globular clusters in 1918 and found their swarm centered far from the Sun: the decisive demotion of humanity from the galactic center.</li>
  <li><strong>The center</strong>: Sagittarius A*, the 4-million-M☉ black hole (Chapter 3), quiet by galactic standards but occasionally flaring as it swallows.</li>
  <li><strong>The dark halo</strong>: the most massive component of all — invisible, inferred, and the subject of this chapter's third section.</li>
</ul>
<p>The spiral arms are not solid objects — they would wind up into a tight spool within a few rotations. They are better understood as <strong>density waves</strong>: slow-moving traffic jams in the disk through which stars and gas pass, compressing gas clouds and triggering star formation. The arms shine not because they contain more stars but because they contain the brilliant, short-lived O and B stars that never live long enough to leave.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The stars between the arms are still there — just dimmer. An O star lives only a few million years, less than the time needed to drift out of the jam that made it, so the arms are outlined in blue fireworks that die where they were born. The galaxy's portrait is painted by its most ephemeral residents.</p>
</div>`,
        },
        {
          id: "the-galaxy-zoo",
          title: "The Galaxy Zoo: Hubble's Classification",
          content: `
<p>Once Hubble's Cepheid in Andromeda (Chapter 1) established that the "spiral nebulae" were other galaxies, the immediate task was taxonomy. Hubble's 1926 <strong>tuning-fork diagram</strong> still organizes the zoo:</p>
<ul>
  <li><strong>Ellipticals (E0–E7)</strong>: smooth, featureless balls of stars, classed by apparent flattening. Little gas or dust, essentially no ongoing star formation, hence red — populations of old stars on randomized orbits, a swarm of bees rather than a spinning disk. They range from dwarfs to the giant ellipticals at cluster centers, the largest galaxies in the universe.</li>
  <li><strong>Spirals (Sa–Sc) and barred spirals (SBa–SBc)</strong>: rotating disks with arms, gas, dust, and active star formation — hence blue arms and reddish bulges. The subtype tracks bulge size and arm tightness: Sa means big bulge, tightly wound arms; Sc means small bulge, loose arms. The Milky Way is roughly SBbc — barred, intermediate.</li>
  <li><strong>Lenticulars (S0)</strong>: disks without arms or much gas — the fork's junction.</li>
  <li><strong>Irregulars</strong>: everything else, often small, gas-rich, and chaotic, like the Magellanic Clouds.</li>
</ul>
<div class="key-concept">
  <h4>Not an evolutionary sequence</h4>
  <p>Hubble's "early-type" (elliptical) and "late-type" (spiral) labels tempt you to read the fork as a life cycle. It is not — a spiral does not wind down into an elliptical by aging. The modern picture runs closer to the reverse: <strong>mergers</strong> of spirals scramble ordered disk orbits into random ones and quench star formation, building ellipticals. Morphology correlates with environment — ellipticals crowd cluster cores, where collisions are frequent; spirals prefer the quiet field.</p>
</div>
<p>Galaxies are social. The Milky Way belongs to the <strong>Local Group</strong> — two large spirals (us and Andromeda), the smaller Triangulum, and dozens of dwarf satellites. Andromeda is approaching at ~110 km/s; in ~4.5 billion years the two spirals will merge, over a billion-year gravitational ballet, into a single elliptical (stars essentially never collide — the galaxy is that empty — but the gas and orbits churn). Beyond the Local Group lie rich clusters like Virgo (~2,000 galaxies) and, at larger scales still, the <strong>cosmic web</strong>: galaxies strung along filaments and sheets around vast voids — the largest structures in existence, whose origin Chapter 5 traces to quantum fluctuations.</p>`,
        },
        {
          id: "rotation-curves",
          title: "Flat Rotation Curves: Something Is Missing",
          content: `
<p>Here is a measurement anyone who finished Subject 5 can interpret. For a star orbiting at radius r, Newton gives v² = GM(r)/r, where M(r) is the mass enclosed. In the Solar System, essentially all mass sits at the center, so v ∝ 1/√r — Mercury races, Neptune crawls: the <strong>Keplerian falloff</strong>.</p>
<p>A spiral galaxy's light is also centrally concentrated: the luminous disk fades exponentially outward. So beyond the bright inner regions, orbital speeds should fall in Keplerian fashion. In the 1970s, Vera Rubin and Kent Ford measured rotation curves optically across many spirals — and radio observations of neutral hydrogen, which extends far beyond the starlight, pushed the curves further out. The verdict, galaxy after galaxy:</p>
<p style="text-align:center; font-size:1.05em;"><strong>Rotation curves stay flat.</strong> v ≈ constant as far out as anything can be tracked.</p>
<p>Run that through Newton: v² = GM(r)/r with constant v forces <strong>M(r) ∝ r</strong> — enclosed mass growing linearly without end, in regions emitting almost no light. Where the starlight says the galaxy is ending, the gravity says it is not even half over. The inferred <strong>dark halo</strong> is roughly spherical, extends several times beyond the visible disk, and outweighs the luminous galaxy by a factor of ~5–10.</p>
<div class="analogy">
  <h3>Analogy: The invisible flywheel</h3>
  <p>Watch a carousel's outer horses moving just as fast as the inner ones and you would conclude the platform extends beyond the horses you can see. Galaxy disks behave exactly so: the outermost gas clouds orbit as if embedded in mass that keeps on going. Either vast unseen mass exists, or Newton's gravity fails at galactic scales.</p>
</div>
<p>Both options have been pursued honestly. Modified Newtonian Dynamics (MOND) alters gravity at tiny accelerations and fits individual galaxy rotation curves remarkably economically. But dark matter is the more parsimonious explanation of the <em>full</em> evidence, because rotation curves are only one witness of several — clusters, lensing, the CMB, and structure formation all independently demand the same unseen mass, as the next section lays out. No modification of gravity has yet matched all of them at once.</p>`,
        },
        {
          id: "the-dark-matter-case",
          title: "Clusters, Lensing, and the Case for Dark Matter",
          content: `
<p>The dark-matter case is a converging set of independent measurements — which is why most physicists find it compelling despite no particle having been caught.</p>
<p><strong>Exhibit 1: Cluster dynamics (1933).</strong> Fritz Zwicky applied the virial theorem to the Coma cluster: from the galaxies' velocity spread, he computed the mass needed to keep the cluster bound — and got hundreds of times the luminous mass (modern value ~50×, with better light accounting). He named the deficit <em>dunkle Materie</em>. The result sat ignored for forty years until Rubin's rotation curves made it unignorable.</p>
<p><strong>Exhibit 2: Hot gas.</strong> Clusters are filled with 10⁷–10⁸ K gas, glowing in X-rays and actually outweighing the stars. Gas that hot has enormous pressure; holding it bound requires a gravitational well far deeper than the visible matter provides. The dark mass inferred agrees with Zwicky's route.</p>
<p><strong>Exhibit 3: Gravitational lensing.</strong> Mass bends light (Subject 33 derives the angle), so a cluster distorts background galaxies into arcs. Crucially, lensing measures mass <em>directly</em> — no assumptions about orbits or equilibrium — and lens-mass maps of clusters again demand ~5–6× more matter than everything visible.</p>
<div class="key-concept">
  <h4>Exhibit 4: The Bullet Cluster — the smoking gun</h4>
  <p>Two clusters collided ~100 million years ago. The galaxies (collisionless) sailed through; the X-ray gas (most of the normal matter) slammed together and lags behind, shocked, in the middle. Lensing shows the <em>mass</em> is not where the gas is — it moved through with the galaxies. Dark matter passing frictionlessly through the crash predicts exactly this offset; a theory that merely modifies gravity around the visible matter struggles, because most of the visible matter is the gas, and the gravity is measurably somewhere else.</p>
</div>
<p><strong>What it is not, and might be.</strong> Big Bang nucleosynthesis and the CMB (Chapter 5) fix the total <em>baryonic</em> density at ~5% of the cosmic budget, while total matter is ~27% — so dark matter cannot be ordinary atoms in any hidden form; microlensing surveys independently ruled out dead stars and rogue planets in the needed amounts. It must be nonbaryonic, cold (slow-moving, to seed galaxy formation correctly), and nearly collisionless. Leading candidates — WIMPs, axions, and others — are hunted in underground detectors, at the LHC, and in the sky. Decades of steadily improving null results have eliminated much parameter space; the identity of most of the universe's matter remains physics' most wanted unknown.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "Where does the Sun sit within the Milky Way?",
          options: [
            "At the galactic center, near Sagittarius A*",
            "In the disk, about 8 kpc from the center, orbiting every ~230 million years",
            "In the halo, among the globular clusters",
            "In the central bar, corotating with it",
          ],
          correctIndex: 1,
          explanation:
            "We are disk residents in the galactic suburbs — roughly 8 kpc (26,000 light-years) out, circling at ~220 km/s. Shapley established our off-center position in 1918 by mapping globular clusters, whose swarm centers on the true galactic center in Sagittarius, not on us. The Sun has completed only about 20 galactic orbits in its lifetime.",
        },
        {
          question:
            "In Hubble's tuning-fork classification, what is the modern understanding of the relationship between spirals and ellipticals?",
          options: [
            "Spirals gradually wind up and fade into ellipticals as they age",
            "Ellipticals collapse and spin up into spirals",
            "They are unrelated objects that formed from different kinds of matter",
            "The fork is not an evolutionary sequence; ellipticals are largely built by mergers of disk galaxies, which scramble ordered orbits and quench star formation",
          ],
          correctIndex: 3,
          explanation:
            "Hubble's 'early' and 'late' labels are historical accidents, not a timeline. Mergers randomize disk stars' orbits into an elliptical's bee-swarm and use up or expel the gas, shutting off star formation — which is why ellipticals are red, gas-poor, and concentrated in cluster cores where collisions are common, while spirals survive in the quieter field.",
        },
        {
          question:
            "Observed rotation speeds in spiral galaxies stay roughly constant far beyond the visible disk. Applying v² = GM(r)/r, what does this imply?",
          options: [
            "The enclosed mass keeps growing linearly with radius — a dark halo extending far beyond the starlight",
            "The galaxy's mass is concentrated entirely at its center",
            "Stars in the outskirts are escaping the galaxy",
            "The luminous disk is much younger than the bulge",
          ],
          correctIndex: 0,
          explanation:
            "If light traced mass, speeds should fall off in Keplerian fashion (v ∝ 1/√r) beyond the bright disk, as planetary speeds do in the Solar System. Constant v instead forces M(r) ∝ r: gravity reports mass accumulating steadily in regions that emit almost nothing. Either galaxies are embedded in dark halos outweighing their stars ~5–10 fold, or gravity itself changes at these scales — and the other independent evidence favors the halo.",
        },
        {
          question:
            "Why is the Bullet Cluster considered strong evidence for dark matter over modified gravity?",
          options: [
            "It contains no visible galaxies at all",
            "Its rotation curve is flat like a spiral galaxy's",
            "Gravitational lensing shows the mass passed through the collision with the galaxies, separated from the X-ray gas that holds most of the normal matter",
            "Its X-ray gas is hotter than any known cluster's",
          ],
          correctIndex: 2,
          explanation:
            "The collision sorted the components: collisionless galaxies and (apparently) dark matter sailed through, while the gas — the bulk of the baryons — collided and stalled in the middle. Lensing maps put the gravitating mass with the galaxies, not the gas. Modified gravity ties gravity to where the visible matter is, and most of the visible matter is the displaced gas; collisionless dark matter predicts the observed offset naturally.",
        },
        {
          question:
            "Why do cosmologists conclude that dark matter is nonbaryonic — not ordinary atoms in some dim form (dead stars, cold gas, planets)?",
          options: [
            "Ordinary matter cannot be dark under any circumstances",
            "Big Bang nucleosynthesis and the CMB independently fix the baryon density at ~5% of the cosmic total, while total matter is ~27% — and microlensing rules out hidden compact objects in the required numbers",
            "Dark matter emits gamma rays that atoms cannot produce",
            "Atoms would fall into black holes over cosmic time",
          ],
          correctIndex: 1,
          explanation:
            "The primordial deuterium abundance (Chapter 5) is exquisitely sensitive to the baryon density, and the CMB acoustic peaks measure it independently; both agree on ~5%, far short of the ~27% total matter that dynamics, lensing, and the CMB demand. Surveys watching for hidden compact objects to microlens background stars closed that loophole separately. Whatever dark matter is, most of it cannot be made of protons and neutrons.",
        },
      ],
    },
    {
      id: "cosmology",
      title: "Cosmology",
      subtitle: "The expanding universe — Big Bang nucleosynthesis, the CMB, and dark energy",
      sections: [
        {
          id: "hubble-expansion-frw",
          title: "Hubble's Law and the Expanding FRW Universe",
          content: `
<p>In 1929 Edwin Hubble combined his Cepheid distances with Vesto Slipher's galaxy redshifts and found the relation that founded cosmology: recession velocity is proportional to distance,</p>
<p style="text-align:center; font-size:1.15em;"><strong>v = H₀ d</strong></p>
<p>with H₀ ≈ 70 km/s per megaparsec today. Read naively, every galaxy flees us — are we the center of an explosion? No. The correct picture, forced by general relativity, is that <strong>space itself expands</strong>. Distances between all galaxies grow by a universal <strong>scale factor a(t)</strong>; every observer in every galaxy sees the same Hubble law. Raisins in a rising loaf all see all other raisins receding, with speed proportional to separation — no raisin is special. Two consequences sharpen the picture:</p>
<ul>
  <li><strong>Redshift is stretching, not Doppler.</strong> A photon's wavelength expands with the space it crosses: 1 + z = a(now)/a(emission). A galaxy at z = 1 emitted its light when all cosmic distances were half today's.</li>
  <li><strong>The expansion has a beginning.</strong> Run a(t) backwards and everything was once arbitrarily hot and dense — the Big Bang, roughly 1/H₀ ~ 14 billion years ago. (Not an explosion <em>into</em> space; an expansion <em>of</em> space, with no center and no edge.)</li>
</ul>
<p>The formal framework assumes the <strong>cosmological principle</strong> — on large scales the universe is homogeneous and isotropic, as galaxy surveys confirm beyond ~100 Mpc — which restricts spacetime to the <strong>Friedmann–Robertson–Walker</strong> form: a possibly curved space, uniformly stretched by a(t). Einstein's equations then reduce to the <strong>Friedmann equation</strong> governing the expansion rate H = (da/dt)/a:</p>
<p style="text-align:center;">H² = (8πG/3)ρ − kc²/a²</p>
<p>Newtonian energy conservation for the cosmos: expansion rate set by the density ρ of everything (matter, radiation, and — see below — vacuum), minus a curvature term k. There is a knife-edge <strong>critical density</strong> ρ_c = 3H²/8πG ≈ 9 × 10⁻²⁷ kg/m³ (about five hydrogen atoms per cubic meter) at which space is exactly flat; densities are quoted as ratios Ω = ρ/ρ_c. Measuring the Ω of each ingredient — and the universe's fate they imply — is the business of the rest of this chapter.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Hubble's original 1929 value of H₀ was ~500 km/s/Mpc — seven times too high, due to miscalibrated Cepheids — implying a universe younger than the Earth. Distance-ladder systematics have haunted cosmology from its first day; today's "Hubble tension" (73 vs 67) is the refined descendant of that original crisis.</p>
</div>`,
        },
        {
          id: "big-bang-nucleosynthesis",
          title: "The First Three Minutes: Why 25% Helium",
          content: `
<p>A hot early universe is a nuclear reactor, and its output is calculable to the percent — the Big Bang's first quantitative prediction. Wind the clock to t ≈ 1 second, T ≈ 10¹⁰ K: space is a plasma of photons, electrons, neutrinos, and a trace of protons and neutrons continually interconverting via weak interactions (n + ν ⇄ p + e⁻, etc.).</p>
<p><strong>Step 1 — the neutron freeze-out.</strong> The neutron is 1.3 MeV heavier than the proton, so equilibrium slightly favors protons, more so as T drops. At t ≈ 1 s the weak reactions become slower than the expansion and the ratio <strong>freezes out at about 1 neutron per 6 protons</strong>. Free neutrons then decay (15-minute lifetime), nudging the ratio to ~1/7 by the time nuclei can form.</p>
<p><strong>Step 2 — the deuterium bottleneck.</strong> Building nuclei must start with d: p + n → ²H + γ. But deuterium is fragile (binding energy 2.2 MeV), and the billions of photons per baryon include enough energetic ones to destroy it instantly until the universe cools to T ≈ 10⁹ K — at t ≈ 3 minutes. Then the dam breaks: deuterium survives, and rapid fusion sweeps essentially <em>every available neutron</em> into the most stable light nucleus, helium-4.</p>
<p><strong>Step 3 — arithmetic.</strong> With n/p = 1/7, take 16 nucleons: 2 neutrons and 14 protons. Both neutrons end up in one ⁴He (2n + 2p, mass 4); the 12 leftover protons stay hydrogen. Helium mass fraction: 4/16 = <strong>25%</strong>.</p>
<div class="key-concept">
  <h4>A three-minute fossil</h4>
  <p>Everywhere astronomers look — the oldest stars, distant gas clouds, other galaxies — helium is ~25% by mass, far more than stars could have produced. That number is a fossil of the first three minutes, set by the neutron–proton mass difference, the weak interaction rate, and the expansion rate. No star can undo it; no alternative cosmology has explained it.</p>
</div>
<p>The reactor then shuts down — falling temperature and density, plus the absence of stable nuclei at masses 5 and 8, stop the chain — leaving traces of unburned deuterium, ³He, and ⁷Li. The <strong>leftover deuterium is a baryometer</strong>: more baryons means more complete burning and less d surviving. Measured deuterium in pristine high-redshift clouds pins the baryon density at Ω_b ≈ 0.05 — the same 5% the CMB later confirmed independently, and the number that convicts dark matter of being nonbaryonic (Chapter 4). Everything heavier than lithium came later, from stars.</p>`,
        },
        {
          id: "the-cmb",
          title: "The Cosmic Microwave Background",
          content: `
<p>For its first ~380,000 years the universe was a glowing plasma: free electrons scattered photons constantly, making it opaque as the inside of a star. When expansion cooled it to ~3,000 K, electrons and protons combined into neutral hydrogen ("recombination" — a misnomer; it was the first time), photon scattering ceased, and the universe became transparent. The light released then has traveled freely ever since, its wavelengths stretched ~1,100-fold by expansion: a 3,000 K glow redshifted into microwaves at</p>
<p style="text-align:center;">T = 2.725 K</p>
<p>This <strong>cosmic microwave background</strong> was found by accident in 1965, when Arno Penzias and Robert Wilson could not eliminate a persistent hiss from a Bell Labs horn antenna (they evicted the pigeons; the hiss stayed) — while a Princeton group down the road was building an antenna to look for exactly that signal. It is the most compelling single piece of evidence for a hot Big Bang: a steady-state universe has no way to produce an omnidirectional thermal glow. And thermal it is — COBE measured the CMB spectrum in 1990 as the most perfect blackbody ever observed, in any laboratory, anywhere.</p>
<p>The deeper treasure is the CMB's <em>imperfections</em>. COBE (1992), then WMAP and Planck, mapped temperature <strong>anisotropies of one part in 100,000</strong> — the pattern of slight over- and under-densities in the 380,000-year-old universe, the seeds that gravity would grow into the cosmic web. Their statistics are stunningly informative:</p>
<ul>
  <li>Before recombination, the photon–baryon plasma sloshed in the dark-matter gravitational wells — <strong>acoustic oscillations</strong>, sound waves in the early universe. Recombination froze the pattern.</li>
  <li>The characteristic size of the strongest ripple is calculable — a standard ruler on the sky. Its measured angular size (~1°) reveals the geometry light crossed: <strong>the universe is spatially flat</strong>, Ω_total = 1, to sub-percent precision.</li>
  <li>The relative heights of the acoustic peaks separately measure the baryon density (agreeing with nucleosynthesis) and the dark-matter density (agreeing with clusters and lensing).</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>About 1% of an untuned analog TV's static was the CMB — every screen of snow contained photons that last scattered 13.8 billion years ago. Penzias and Wilson received the 1978 Nobel Prize for a noise they initially blamed on pigeon droppings.</p>
</div>`,
        },
        {
          id: "dark-energy",
          title: "Dark Energy and the Accelerating Universe",
          content: `
<p>Through the 1990s, cosmology's central question was how fast gravity is <em>slowing</em> the expansion — measure the deceleration, and you learn whether the universe recollapses or coasts forever. Two rival teams set out to measure it using Type Ia supernovae (Chapter 3's standard candles), whose brightness gives distance while their redshift gives the expansion since their light left.</p>
<p>In 1998 both teams reported the same nonsense: distant supernovae were <strong>too faint</strong> — sitting farther away than any decelerating universe allows. The expansion of the universe is <strong>accelerating</strong>. Mundane explanations (gray dust, supernova evolution) were hunted and excluded; the acceleration has since been confirmed independently by the CMB, by galaxy clustering, and by hundreds more supernovae. The 2011 Nobel Prize acknowledged the result the discoverers themselves initially disbelieved.</p>
<p>Something must push. In the Friedmann framework, acceleration requires a component with strong negative pressure — <strong>dark energy</strong>. The simplest candidate is Einstein's own <strong>cosmological constant Λ</strong>: an energy density of the vacuum itself, constant in space and time. Its signature behavior: as space expands, matter dilutes as 1/a³, but vacuum energy density <em>stays constant</em> — every new cubic meter of space arrives with the same energy. Once the universe grew large enough, Λ inevitably took over; the crossover happened ~5 billion years ago, and the accounting today reads:</p>
<p style="text-align:center;"><strong>Ω_Λ ≈ 0.68 &nbsp;·&nbsp; Ω_matter ≈ 0.27 (dark) + 0.05 (atoms)</strong></p>
<p>— which also completes the flatness budget the CMB demanded: matter alone gave only Ω ≈ 0.3, and dark energy supplies the rest.</p>
<div class="key-concept">
  <h4>The worst prediction in physics</h4>
  <p>Quantum field theory says the vacuum should have energy — but naive estimates overshoot the observed Λ by ~10¹²⁰. Why the vacuum gravitates so little, yet not exactly zero, is arguably the deepest open problem in fundamental physics. Whether dark energy is exactly constant (w = −1) or drifts — recent survey hints keep this live — is the target of current missions; on it hangs the far future: eternal accelerating dilution, or something stranger.</p>
</div>
<p>Einstein introduced Λ in 1917 to hold a static universe up, then discarded it after Hubble — reportedly calling it his greatest blunder. The universe kept it.</p>`,
        },
        {
          id: "inflation-and-timeline",
          title: "Inflation and the ΛCDM Timeline",
          content: `
<p>The hot Big Bang model works superbly from one second onward — but its initial conditions are suspiciously fine-tuned, in two ways.</p>
<ul>
  <li><strong>The horizon problem.</strong> CMB patches on opposite sides of the sky have the same temperature to one part in 10⁵, yet in the standard expansion they were never in causal contact — light hadn't had time to cross between them by recombination. Equilibrium without contact is a conspiracy.</li>
  <li><strong>The flatness problem.</strong> Ω = 1 is an unstable equilibrium: any early deviation grows violently. Flatness today requires |Ω − 1| &lt; 10⁻⁶⁰ at the earliest times. Who tuned that?</li>
</ul>
<p><strong>Inflation</strong> (Alan Guth, 1980) answers both with one postulate: at t ~ 10⁻³⁶ s, a transient vacuum-like energy drove exponential expansion, doubling the universe's size ~100 times (a factor ≥ 10²⁶) in ~10⁻³⁴ s. The whole observable universe then descends from one tiny pre-equilibrated patch (horizon problem solved), and the enormous stretching flattens any curvature as inflating a balloon flattens its surface (flatness solved). The bonus became the main attraction: <strong>quantum fluctuations</strong> in the inflating field, stretched to cosmic size, become the density ripples — with the nearly scale-invariant spectrum the CMB actually shows. If so, galaxies are quantum noise writ large. Inflation's mechanism remains unidentified, and its evidence is circumstantial but substantial; a detection of primordial gravitational-wave imprints in CMB polarization would be close to decisive.</p>
<p>Assembling everything, the <strong>ΛCDM</strong> model (Λ + cold dark matter) narrates 13.8 billion years:</p>
<table>
  <thead>
    <tr><th>Time</th><th>Event</th></tr>
  </thead>
  <tbody>
    <tr><td>10⁻³⁶ s</td><td>Inflation; quantum fluctuations seeded</td></tr>
    <tr><td>10⁻⁶ s</td><td>Quarks bind into protons and neutrons</td></tr>
    <tr><td>1 s</td><td>Neutrinos decouple; n/p freezes out</td></tr>
    <tr><td>3 min</td><td>Nucleosynthesis: 75% H, 25% He</td></tr>
    <tr><td>380,000 yr</td><td>Recombination — the CMB is released</td></tr>
    <tr><td>~200 Myr</td><td>Dark ages end: first stars ignite</td></tr>
    <tr><td>~1–10 Gyr</td><td>Galaxies assemble in the dark-matter web; peak star formation</td></tr>
    <tr><td>~9 Gyr</td><td>Dark energy overtakes matter; acceleration begins (Sun forms ~9.2 Gyr)</td></tr>
    <tr><td>13.8 Gyr</td><td>Now — Ω_Λ ≈ 0.68, dark matter 0.27, atoms 0.05</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>The honest summary</h4>
  <p>Six parameters fit thousands of precision measurements — an extraordinary scientific achievement resting on two substances we have not identified and an early epoch we infer but cannot yet see directly. That is not a weakness to hide; it is the frontier, precisely mapped. Subject 33 supplies the general relativity underneath it all.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Every distant galaxy recedes from us with speed proportional to its distance. Does this mean we are at the center of the universe?",
          options: [
            "Yes — the Big Bang exploded outward from our location",
            "No — the galaxies are moving through space away from a center that happens to be near us",
            "No — space itself expands uniformly, so every observer in every galaxy sees the same Hubble law; there is no center",
            "Yes, but only within our Local Group",
          ],
          correctIndex: 2,
          explanation:
            "Uniform stretching of space makes all separations grow in proportion, so each observer sees all others receding at v = H₀d — like raisins in a rising loaf, none of them special. The Big Bang was not an explosion into pre-existing space from a point; it happened everywhere at once, and the redshift is the stretching of light's wavelength by the expansion it traversed.",
        },
        {
          question:
            "Why did the Big Bang produce a universe that is about 25% helium by mass?",
          options: [
            "At nucleosynthesis the neutron-to-proton ratio was ~1/7, and essentially all neutrons were swept into ⁴He: 2 neutrons plus 2 protons out of every 16 nucleons gives mass fraction 4/16",
            "Exactly 25% of the primordial gas was hot enough to fuse",
            "Stars in the first billion years converted 25% of hydrogen to helium",
            "Helium is 25% as stable as hydrogen",
          ],
          correctIndex: 0,
          explanation:
            "The weak interactions froze the n/p ratio near 1/6 at t ≈ 1 s (neutron decay nudging it to 1/7), and once the deuterium bottleneck broke at t ≈ 3 min, every surviving neutron ended up in helium-4. Count 16 nucleons: 2 neutrons make one ⁴He (mass 4) and 14 protons remain hydrogen — 25% helium by mass. Stars have only raised that by a few percent since; observing ~25% everywhere is a fossil of the first three minutes.",
        },
        {
          question:
            "What is the cosmic microwave background?",
          options: [
            "The combined radio glow of the earliest galaxies",
            "Radiation emitted by hot cluster gas throughout the universe",
            "Sunlight scattered by interstellar dust into microwaves",
            "Thermal radiation released when the universe became transparent at recombination (t ≈ 380,000 yr), redshifted from ~3,000 K to 2.725 K",
          ],
          correctIndex: 3,
          explanation:
            "Before recombination, free electrons made the universe an opaque plasma. When it cooled enough for neutral hydrogen to form, photons streamed free, and expansion has since stretched that 3,000 K glow ~1,100-fold into microwaves. Its perfect blackbody spectrum and near-uniformity from every direction are exactly what a hot Big Bang predicts and no rival model has explained — and its 10⁻⁵ ripples are the seeds of all cosmic structure.",
        },
        {
          question:
            "What did the 1998 Type Ia supernova surveys discover, and how?",
          options: [
            "Distant supernovae were brighter than expected, showing the expansion is slowing",
            "Distant supernovae were fainter than expected — farther away than any decelerating universe allows — revealing that the expansion is accelerating",
            "Supernovae showed the universe is much younger than previously thought",
            "Supernova redshifts proved the universe is spatially closed",
          ],
          correctIndex: 1,
          explanation:
            "Type Ia supernovae are standard candles, so their apparent brightness gives distance while redshift gives the expansion factor since emission. Both rival teams found high-z supernovae systematically too faint: the universe expanded less in the past and more recently — acceleration. Something with negative pressure (dark energy, Ω_Λ ≈ 0.68) now dominates the cosmic budget; the discovery also completed the flat universe's accounting alongside the CMB.",
        },
        {
          question:
            "Which pair of puzzles does cosmic inflation resolve?",
          options: [
            "The solar neutrino problem and the Hubble tension",
            "The origin of dark matter and dark energy",
            "The horizon problem (uniform CMB temperature across causally disconnected regions) and the flatness problem (why Ω is so close to 1)",
            "The deuterium bottleneck and the helium abundance",
          ],
          correctIndex: 2,
          explanation:
            "A burst of exponential expansion at ~10⁻³⁶ s means the whole observable universe grew from one tiny, causally connected, pre-equilibrated patch — explaining the CMB's uniformity — and the tremendous stretching drives space toward flatness, as inflating any balloon flattens its surface locally. As a bonus, quantum fluctuations stretched to cosmic scales during inflation supply the density seeds whose statistics the CMB anisotropies match.",
        },
      ],
    },
  ],
};
