export const subject9 = {
  id: "atoms-nuclei-energy",
  number: 9,
  title: "Atoms, Nuclei & Energy",
  description:
    "The first-pass finale: journey inside the atom, meet radioactivity and nuclear power, and step back to ask how humanity should power its future.",
  phase: 2,
  chapters: [
    {
      id: "inside-the-atom",
      title: "Inside the Atom",
      subtitle:
        "From Thomson's plum pudding to Bohr's orbits — how we discovered what atoms are made of",
      sections: [
        {
          id: "the-electron",
          title: "1897: The First Crack in the Atom",
          content: `
<p>The word <strong>atom</strong> comes from the Greek <em>atomos</em> — "uncuttable." For most of the 1800s that's exactly what chemists believed: atoms were tiny, featureless billiard balls, the smallest possible pieces of matter. Then physics did what it does best — it broke its own favorite idea.</p>
<p>The detective in this first act is <strong>J.J. Thomson</strong>, working at Cambridge's Cavendish Laboratory. His evidence was the mysterious glow inside a <strong>cathode ray tube</strong> — a glass tube with most of the air pumped out and a high voltage across it. Something streamed from the negative electrode. But what?</p>
<p>Thomson interrogated the rays the way a detective checks alibis:</p>
<ul>
  <li>They bent toward a positive plate — so they carried <strong>negative charge</strong>.</li>
  <li>They also bent in a magnetic field — so they behaved like moving charged <strong>particles</strong>, not light.</li>
  <li>By balancing electric against magnetic deflection, he measured their charge-to-mass ratio — and found something absurd: they were nearly <strong>2000 times lighter than a hydrogen atom</strong>, the lightest atom known.</li>
</ul>
<p>Most damning of all: he got the <em>same particle</em> no matter what metal the electrode was made of or what trace gas was in the tube. This wasn't a fragment of one element — it was a universal ingredient of <em>all</em> matter. The "uncuttable" atom had parts. Thomson had discovered the <strong>electron</strong>.</p>
<div class="key-concept">
  <h4>Key Concept: The Plum Pudding Model</h4>
  <p>Atoms are electrically neutral, so if they contain negative electrons, positive charge must be hiding somewhere too. Thomson's guess: a diffuse ball of positive "pudding" with electron "plums" dotted through it. It was reasonable, it was testable — and as we're about to see, it was gloriously wrong.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Thomson won the Nobel Prize for showing the electron is a particle. His son George later won one for showing electrons behave as <em>waves</em>. Both were right — a paradox Subject 15 will resolve.</p>
</div>`,
        },
        {
          id: "gold-foil",
          title: "The Gold-Foil Shock",
          content: `
<p>Every good detective story has a twist nobody saw coming. Here it arrived in 1909, in the Manchester lab of <strong>Ernest Rutherford</strong>, when his assistants Hans Geiger and Ernest Marsden fired <strong>alpha particles</strong> — heavy, fast, positively charged projectiles from radioactive decay — at a sheet of gold foil just a few hundred atoms thick.</p>
<p>The plum pudding model made a clear prediction. If an atom's positive charge is smeared out like pudding, an alpha particle should punch through like a cannonball through fog, deflecting by a fraction of a degree at most. And indeed, almost all of them did exactly that.</p>
<p>But about <strong>1 in 8000</strong> bounced back toward the source.</p>
<p>Rutherford's reaction became one of physics' most famous quotes: <em>"It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you."</em> Fog cannot bounce a cannonball. Something small, heavy, and intensely charged had to be hiding inside the atom.</p>
<p>Rutherford's deduction, published in 1911, rebuilt the atom from the evidence:</p>
<ul>
  <li>Nearly all the atom's mass and all its positive charge sit in a tiny central <strong>nucleus</strong>.</li>
  <li>The electrons occupy the vast space around it.</li>
  <li>The atom is therefore almost entirely <strong>empty space</strong> — which is why most alphas sailed straight through, while the rare head-on shot rebounded off the concentrated nucleus.</li>
</ul>
<div class="analogy">
  <h3>Analogy: A Fly in a Cathedral</h3>
  <p>Scale an atom up to the size of a large cathedral and the nucleus is a fly hovering at the center — yet that fly holds about 99.97% of the atom's mass. Everything you have ever touched is, by volume, almost entirely nothing.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A typical nucleus is about 10,000 times smaller across than its atom. If atoms could be squeezed to pure nuclear density, all of humanity would fit in a sugar cube.</p>
</div>`,
        },
        {
          id: "bohr-model",
          title: "Bohr's Quantum Rescue",
          content: `
<p>Rutherford's miniature solar system — electrons orbiting a nuclear "sun" — was beautiful, and it had a fatal flaw. You met the reason in the electricity and waves subjects: an accelerating charge radiates electromagnetic waves, and a circling electron is always accelerating. It should continuously broadcast away its energy and spiral into the nucleus in about a hundred-millionth of a microsecond. Classical physics predicted that <strong>atoms cannot exist</strong>. Since you are made of atoms and are currently reading this, something was missing.</p>
<p>There was a second clue in the case file. When you pass an electric current through hydrogen gas, it glows — but not with a full rainbow. A prism reveals only a few sharp, specific colors: a <strong>line spectrum</strong>, like a barcode unique to each element. Why would an atom emit only those exact colors and nothing in between?</p>
<p>In 1913 the young Danish physicist <strong>Niels Bohr</strong> made a move that felt like cheating: he simply postulated new rules.</p>
<ol>
  <li>Electrons may occupy only certain <strong>allowed orbits</strong>, each with a definite energy. In these orbits — against everything classical physics said — they do not radiate.</li>
  <li>An electron can <strong>jump</strong> between orbits. Falling to a lower orbit releases the energy difference as a single flash of light whose color is fixed by that difference.</li>
</ol>
<p>Fixed energy rungs mean fixed jumps, which mean fixed colors — the barcode explained. Better still, Bohr's model predicted the hydrogen spectrum's wavelengths with stunning precision.</p>
<div class="analogy">
  <h3>Analogy: A Ladder, Not a Ramp</h3>
  <p>A ball on a ramp can rest at any height; a person on a ladder can stand only on the rungs. Bohr replaced the ramp with a ladder: electron energy comes in discrete steps, and light is emitted only when stepping down a rung.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: A Brilliant Stepping Stone</h4>
  <p>Bohr's model works quantitatively only for hydrogen, and electrons turn out not to follow neat circular paths at all. But its core idea — <strong>energy is quantized</strong> — survived and became the seed of quantum mechanics, the full story of Subject 15.</p>
</div>`,
        },
        {
          id: "protons-neutrons-isotopes",
          title: "The Full Cast: Protons, Neutrons & Isotopes",
          content: `
<p>Two more discoveries completed the picture. In 1919 Rutherford showed that hydrogen nuclei — soon named <strong>protons</strong> — are building blocks of all nuclei. But protons alone couldn't explain atomic masses: helium has 2 protons yet weighs as much as 4 hydrogens. The missing piece stayed hidden until 1932, when James Chadwick found the <strong>neutron</strong>: a particle about as heavy as a proton but with <strong>no electric charge</strong>, which is exactly why it took so long to detect.</p>
<table>
  <thead>
    <tr><th>Particle</th><th>Charge</th><th>Mass (vs proton)</th><th>Location</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Proton</strong></td><td>+1</td><td>1</td><td>Nucleus</td></tr>
    <tr><td><strong>Neutron</strong></td><td>0</td><td>≈ 1</td><td>Nucleus</td></tr>
    <tr><td><strong>Electron</strong></td><td>−1</td><td>≈ 1/1836</td><td>Around the nucleus</td></tr>
  </tbody>
</table>
<p>Two numbers now describe any nucleus:</p>
<ul>
  <li><strong>Atomic number Z</strong> — the proton count. This defines the element and its chemistry: 6 protons is always carbon, 79 is always gold.</li>
  <li><strong>Mass number A</strong> — protons plus neutrons, the total nucleon count. Carbon-14 means Z = 6, A = 14, so 8 neutrons.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Isotopes</h4>
  <p>Atoms with the same number of protons but different numbers of neutrons are <strong>isotopes</strong> of one element. Carbon-12 and carbon-14 behave identically in chemical reactions — your body can't tell them apart — but their nuclei differ. Hydrogen has three: ordinary hydrogen (1 proton), deuterium (add 1 neutron), and tritium (add 2).</p>
</div>
<p>Why do neutrons matter so much? They act as nuclear glue-spacers, diluting the fierce electrical repulsion between protons. Get the proton–neutron balance wrong and the nucleus becomes <strong>unstable</strong> — it will sooner or later rearrange itself and spit out radiation. Carbon-12 is perfectly stable; carbon-14 is radioactive. That single word, <em>unstable</em>, is the doorway to the next chapter.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A free neutron outside a nucleus is itself unstable: on average it survives about 15 minutes before decaying. Inside a stable nucleus, it can last forever.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "What convinced Thomson that electrons are ingredients of all matter, not fragments of one element?",
          options: [
            "Cathode rays only appeared when gold electrodes were used",
            "Electrons were exactly as heavy as hydrogen atoms",
            "He obtained identical particles regardless of the electrode metal or gas in the tube",
            "The rays traveled in curved paths even with no fields applied",
          ],
          correctIndex: 2,
          explanation:
            "Thomson found the same charge-to-mass ratio no matter what material produced the rays. A particle that emerges identically from every substance must be a universal building block of atoms — and it was nearly 2000 times lighter than hydrogen.",
        },
        {
          question:
            "In the gold-foil experiment, what observation destroyed the plum pudding model?",
          options: [
            "A tiny fraction of alpha particles bounced almost straight back",
            "All alpha particles were absorbed by the foil",
            "The foil became positively charged",
            "Every alpha particle deflected by exactly the same small angle",
          ],
          correctIndex: 0,
          explanation:
            "A diffuse 'pudding' of positive charge can only nudge a heavy, fast alpha particle. The rare violent rebounds (about 1 in 8000) proved the positive charge is concentrated in a tiny, massive nucleus — and that atoms are mostly empty space.",
        },
        {
          question:
            "Why did classical physics say Rutherford's orbiting-electron atom was impossible?",
          options: [
            "Electrons are too light to stay in orbit",
            "The nucleus's neutrons would repel the electrons",
            "Gravity between electron and nucleus is too weak",
            "An orbiting electron accelerates, so it should radiate away its energy and spiral into the nucleus",
          ],
          correctIndex: 3,
          explanation:
            "Circular motion is accelerated motion, and accelerating charges emit electromagnetic waves. A classical orbiting electron would lose energy continuously and crash into the nucleus almost instantly. Bohr's fix: only certain orbits are allowed, and in them the electron simply does not radiate.",
        },
        {
          question: "Carbon-12 and carbon-14 are isotopes. What do they share, and how do they differ?",
          options: [
            "Same neutrons, different protons — so they are different elements",
            "Same protons (6), different neutrons (6 vs 8) — identical chemistry, different nuclear stability",
            "Same total mass, different charge",
            "Same electrons, but carbon-14 has 14 protons",
          ],
          correctIndex: 1,
          explanation:
            "The proton count (Z = 6) defines carbon and fixes its chemistry, so isotopes are chemically identical. The neutron count differs — and that nuclear difference is why carbon-12 is stable while carbon-14 is radioactive.",
        },
        {
          question:
            "How did Bohr's model explain why glowing hydrogen emits only a few sharp colors instead of a full rainbow?",
          options: [
            "Hydrogen atoms filter out most colors from white light",
            "The nucleus absorbs all wavelengths except a few",
            "Electrons can only jump between fixed energy rungs, so only specific energy differences — specific colors — can be emitted",
            "Electrons emit light continuously as they spiral inward",
          ],
          correctIndex: 2,
          explanation:
            "With quantized energy levels, an electron falling to a lower level releases exactly the energy difference as light of one definite color. Fixed rungs mean fixed jumps mean a line spectrum — each element's unique barcode.",
        },
      ],
    },
    {
      id: "radioactivity",
      title: "Radioactivity",
      subtitle:
        "Alpha, beta, gamma, and half-life — unstable nuclei and what their radiation can do",
      sections: [
        {
          id: "alpha-beta-gamma",
          title: "Three Rays from Broken Nuclei",
          content: `
<p>An unstable nucleus is like an over-stressed spring: sooner or later it rearranges itself into something more stable, and the excess energy has to go somewhere. It leaves as <strong>radiation</strong>. When Rutherford sorted the emissions from radioactive materials, he found three distinct types and named them after the first three Greek letters.</p>
<ul>
  <li><strong>Alpha (α):</strong> a chunky package of 2 protons + 2 neutrons — literally a helium nucleus — ejected at high speed. Heavy and doubly charged, it barrels through matter ionizing everything nearby, exhausting itself within centimeters of air.</li>
  <li><strong>Beta (β):</strong> a fast electron fired out of the nucleus. Strange but true — the nucleus contains no electrons. Instead, a neutron transforms into a proton and the electron is created in the act and flung out.</li>
  <li><strong>Gamma (γ):</strong> not a particle of matter at all, but a pulse of electromagnetic energy — the same family as light and X-rays, only more energetic. It usually follows an α or β decay, as the rearranged nucleus sheds leftover energy.</li>
</ul>
<table>
  <thead>
    <tr><th>Type</th><th>What it is</th><th>Charge</th><th>Stopped by</th></tr>
  </thead>
  <tbody>
    <tr><td>α</td><td>Helium nucleus (2p + 2n)</td><td>+2</td><td>Paper, skin, a few cm of air</td></tr>
    <tr><td>β</td><td>Fast electron</td><td>−1</td><td>A few mm of aluminium</td></tr>
    <tr><td>γ</td><td>High-energy EM wave</td><td>0</td><td>Thick lead or concrete (reduced, never fully)</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>Key Concept: Decay Changes the Element</h4>
  <p>α and β decay alter the proton count — and the proton count <em>is</em> the element. Radium (88 protons) emits an α and becomes radon (86 protons). This is genuine transmutation: nature performs the alchemy medieval alchemists dreamed of, one nucleus at a time.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Penetrating power and danger are not the same thing. Alpha is stopped by your skin's dead outer layer — but if an alpha emitter is <em>inhaled or swallowed</em>, all that ionizing punch lands on living tissue. That's why radon gas seeping into basements is the largest natural radiation risk in many countries.</p>
</div>`,
        },
        {
          id: "half-life",
          title: "Half-Life: Predictable Unpredictability",
          content: `
<p>Here is the strangest fact in this chapter: it is <strong>impossible, even in principle,</strong> to predict when one particular unstable nucleus will decay. It has no age, no wear, no warning signs. A carbon-14 nucleus that has existed for 10,000 years is no more "due" than one created this morning. Decay is genuinely random.</p>
<p>And yet radioactive decay is one of the most precisely predictable processes in nature. How can both be true? <strong>Statistics.</strong> You can't predict one coin flip, but flip a million coins and you can bet confidently on very close to half a million heads. Nuclei play the same game: each one has a fixed <em>probability</em> of decaying in a given time, so a large population shrinks on a perfectly reliable schedule.</p>
<div class="key-concept">
  <h4>Key Concept: Half-Life</h4>
  <p>The <strong>half-life</strong> is the time for half of any sample to decay. Whatever amount you start with, one half-life later half remains; another half-life, a quarter; another, an eighth. The clock never resets and never runs out — you halve, and halve, and halve.</p>
</div>
<p>No formulas needed yet — just halving arithmetic. Start with 1000 atoms of a substance with an 8-day half-life:</p>
<table>
  <thead>
    <tr><th>Time</th><th>Half-lives</th><th>Atoms left</th></tr>
  </thead>
  <tbody>
    <tr><td>0 days</td><td>0</td><td>1000</td></tr>
    <tr><td>8 days</td><td>1</td><td>500</td></tr>
    <tr><td>16 days</td><td>2</td><td>250</td></tr>
    <tr><td>24 days</td><td>3</td><td>125</td></tr>
    <tr><td>32 days</td><td>4</td><td>≈ 63</td></tr>
  </tbody>
</table>
<p>Half-lives span an absurd range: polonium-214 lasts a ten-thousandth of a second; iodine-131 (a medical isotope) 8 days; carbon-14 about 5,700 years; uranium-238 about 4.5 <em>billion</em> years — which is exactly why uranium is still around from Earth's formation, and why comparing uranium to its decay products lets geologists date the Earth itself.</p>
<div class="analogy">
  <h3>Analogy: Popcorn</h3>
  <p>Watch one kernel and you cannot say when it will pop. Watch the whole pot and the popping follows a smooth, reliable pattern. Individual randomness, collective predictability — that's radioactivity. (The exponential decay law behind this gets its full quantitative treatment in Subject 15.)</p>
</div>`,
        },
        {
          id: "try-it-dice",
          title: "Try It Yourself: Decay in a Dice Cup",
          content: `
<p>You can hold a "radioactive sample" in your hands tonight — no radiation required. All you need is randomness with a fixed probability, and coins or dice provide exactly that. Each coin is a nucleus; each shake is a tick of the clock; heads means "decayed."</p>
<div class="key-concept">
  <h4>Try It Yourself: The Coin-Flip Nucleus</h4>
  <p><strong>You need:</strong> about 100 coins (or 50 — it still works) and a box with a lid.</p>
  <ol>
    <li>Put all coins in the box. Shake, open, and remove every coin showing <strong>heads</strong> — those nuclei have decayed.</li>
    <li>Count and write down how many "undecayed" coins remain.</li>
    <li>Repeat shaking and removing until fewer than ~5 coins survive.</li>
    <li>Plot coins remaining vs. shake number.</li>
  </ol>
  <p>Each coin has a 1-in-2 chance of decaying per shake, so the half-life is <strong>1 shake</strong>: expect roughly 100 → 50 → 25 → 12 → 6 → 3.</p>
</div>
<p><strong>Dice variant (longer half-life):</strong> use dice and remove only the ones showing a <strong>six</strong>. Now each "nucleus" has just a 1-in-6 chance of decaying per throw, so the population shrinks more gently — it takes about 3.8 throws to lose half. Same physics, different decay constant.</p>
<p>Three things to notice as you play:</p>
<ul>
  <li><strong>Your numbers won't be perfect.</strong> You might get 54 survivors, then 22. Real Geiger-counter data is jittery in exactly the same way — randomness guarantees scatter around the trend.</li>
  <li><strong>The curve never hits zero on schedule.</strong> Halving 6 gives 3, then 1 or 2 stubborn survivors linger. A few long-lived nuclei always remain, which is why "when is it all gone?" is the wrong question and "what's the half-life?" is the right one.</li>
  <li><strong>No coin remembers.</strong> A coin that survived ten shakes still has exactly a 1-in-2 chance next shake. Nuclei don't age — they only gamble.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Pool results with friends and the combined curve gets noticeably smoother. That's the statistics of large numbers in action — and precisely why a gram of material with its trillions of trillions of nuclei decays with clockwork regularity.</p>
</div>`,
        },
        {
          id: "detection-safety-uses",
          title: "Detecting the Invisible — and Putting It to Work",
          content: `
<p>Radiation is invisible, silent, and odorless, so every fact in this chapter depended on instruments. The classic is the <strong>Geiger–Müller tube</strong>: a gas-filled tube with a high voltage across it. A single particle of radiation entering the tube ionizes gas atoms, triggering an avalanche of charge — one audible <em>click</em> per particle. Cloud chambers make particle tracks visible as delicate vapor trails (you can build one with dry ice and alcohol), and workers wear <strong>film badges or electronic dosimeters</strong> that tally their accumulated dose.</p>
<p>Turn on a Geiger counter anywhere and it clicks. This is <strong>background radiation</strong>: radon gas from rocks and soil, cosmic rays from space, traces of radioactive potassium in bananas, Brazil nuts — and in you. Radioactivity is not a human invention; it is a permanent feature of nature. The sensible question is never "is there radiation?" but "<strong>how much, compared to background?</strong>"</p>
<p>Handled with respect, radioactivity is spectacularly useful:</p>
<ul>
  <li><strong>Smoke detectors:</strong> a speck of americium-241 ionizes air; smoke disrupts the tiny current and trips the alarm.</li>
  <li><strong>Carbon dating:</strong> living things constantly refresh their carbon-14; death stops the intake, and the 5,700-year half-life clock starts. Comparing remaining ¹⁴C to the expected level dates bones, wood, and cloth tens of thousands of years back.</li>
  <li><strong>Medicine:</strong> gamma-emitting tracers like technetium-99m (half-life 6 hours — long enough to image, short enough to vanish) light up organs from inside; focused radiotherapy beams destroy tumors.</li>
  <li><strong>Sterilization:</strong> gamma rays sterilize medical instruments and food without heat.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Time, Distance, Shielding</h4>
  <p>All radiation safety reduces to three moves: minimize <strong>time</strong> near a source, maximize <strong>distance</strong> (intensity falls with the square of distance — the same 1/r² law as light), and put <strong>shielding</strong> between you and it. Also keep two ideas separate: <em>irradiation</em> (being exposed to rays, which stops when you walk away) and <em>contamination</em> (radioactive material on or in you, which keeps emitting until removed).</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A typical chest X-ray delivers about the same dose as a few days of ordinary background radiation, and a long-haul flight (thinner atmosphere, more cosmic rays) is comparable. Context turns scary-sounding numbers into informed decisions.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Which correctly ranks the three radiation types from least to most penetrating?",
          options: [
            "Gamma, beta, alpha",
            "Alpha, beta, gamma",
            "Beta, alpha, gamma",
            "Alpha, gamma, beta",
          ],
          correctIndex: 1,
          explanation:
            "Heavy, doubly charged alpha particles ionize furiously and stop in paper or skin; betas need a few millimeters of aluminium; uncharged gamma rays need thick lead or concrete and are only ever reduced, never completely blocked.",
        },
        {
          question:
            "A sample contains 800 atoms of an isotope with a half-life of 6 hours. About how many remain after 24 hours?",
          options: ["400", "200", "0", "50"],
          correctIndex: 3,
          explanation:
            "24 hours is 4 half-lives. Halve four times: 800 → 400 → 200 → 100 → 50. Notice the sample is never scheduled to hit zero — it just keeps halving.",
        },
        {
          question:
            "Why is it impossible to predict when a single nucleus will decay, yet possible to date ancient bones with carbon-14?",
          options: [
            "Individual decay is random, but huge populations follow reliable halving statistics",
            "Nuclei weaken with age, and old nuclei decay faster",
            "Carbon-14 decays at a steady rate only inside living tissue",
            "Decay is predictable for single nuclei but random for large samples",
          ],
          correctIndex: 0,
          explanation:
            "Each nucleus only has a fixed probability of decaying per unit time — like a coin flip, individually unpredictable. But a bone contains vast numbers of ¹⁴C nuclei, so the fraction remaining tracks elapsed half-lives with statistical precision. Nuclei do not age or weaken.",
        },
        {
          question:
            "Why can an alpha-emitting substance be nearly harmless in a sealed smoke detector yet dangerous if inhaled as dust?",
          options: [
            "Alpha particles only become active in the lungs",
            "Inhaling it converts the alpha emitter into a gamma emitter",
            "Alpha barely penetrates — skin or casing stops it, but inhaled, it delivers intense ionization directly to living tissue",
            "Smoke detectors use a special non-radioactive form of americium",
          ],
          correctIndex: 2,
          explanation:
            "Penetrating power and danger are different things. Alpha's short range means external exposure is stopped by dead skin or the detector housing — but the same heavy ionizing punch, released inside the lungs, damages living cells at point-blank range. This is also why radon gas matters.",
        },
        {
          question:
            "In your coin-flip decay simulation, a coin has survived ten shakes in a row. What is its chance of 'decaying' on the next shake?",
          options: [
            "Much higher than 1 in 2 — it is overdue",
            "Exactly 1 in 2, the same as always",
            "Much lower than 1 in 2 — it has proven itself stable",
            "Exactly zero — survivors are permanently stable",
          ],
          correctIndex: 1,
          explanation:
            "Coins — and nuclei — have no memory. The decay probability per time step never changes, no matter how long the particle has survived. This 'memorylessness' is precisely what produces the halving pattern of half-life.",
        },
      ],
    },
    {
      id: "nuclear-energy",
      title: "Nuclear Energy",
      subtitle:
        "Fission, fusion, and reactors — the enormous energy locked inside the nucleus",
      sections: [
        {
          id: "mass-energy",
          title: "The Missing Mass",
          content: `
<p>Weigh a helium nucleus and something bizarre shows up: it is about <strong>0.7% lighter</strong> than the two protons and two neutrons that make it. Assemble the parts, and mass goes missing. Where did it go?</p>
<p>Einstein answered in 1905 with the most famous equation in science: <strong>E = mc²</strong>. Mass and energy are two forms of the same thing, exchangeable at the rate of c² — the speed of light squared. When nucleons bind together, they settle into a lower-energy arrangement, and the released energy carries the missing mass away with it. The mass deficit <em>is</em> the binding energy, on Einstein's exchange rate.</p>
<p>And what an exchange rate. Because c ≈ 300,000,000 m/s, c² is a colossal number: <strong>one gram of mass converts to about 90 trillion joules</strong> — roughly the energy released by 20,000 tonnes of TNT, or a large city's electricity for a day, packed into a paperclip's worth of matter.</p>
<div class="key-concept">
  <h4>Key Concept: Why Nuclear Beats Chemical a Million to One</h4>
  <p>Chemical reactions (burning coal, digesting lunch) rearrange <em>electrons</em>, releasing a few electron-volts per atom. Nuclear reactions rearrange <em>nucleons</em>, gripped by the far stronger nuclear force, releasing <em>millions</em> of electron-volts per nucleus. That factor of about a million is why a fuel pellet the size of a fingertip matches the energy of a tonne of coal.</p>
</div>
<p>One more idea unlocks both halves of this chapter. Nuclei are not all equally tightly bound. Plot binding-per-nucleon across the elements and it rises steeply through the light elements, peaks around <strong>iron</strong>, then gently declines toward uranium. Iron sits at the bottom of the energy valley — the most contented nucleus in nature. That shape means there are <em>two</em> directions to release energy:</p>
<ul>
  <li><strong>Split a very heavy nucleus</strong> into middleweight pieces closer to iron — <strong>fission</strong>.</li>
  <li><strong>Merge very light nuclei</strong> into heavier ones closer to iron — <strong>fusion</strong>.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>E = mc² works in reverse for chemistry too — a charged phone battery is heavier than a dead one. But the difference is around a billionth of a gram, hopelessly beyond any scale. Only nuclear energies make the mass change measurable.</p>
</div>`,
        },
        {
          id: "fission",
          title: "Fission: Splitting the Giant",
          content: `
<p>In December 1938, Otto Hahn and Fritz Strassmann bombarded uranium with neutrons and found, to their bafflement, <em>barium</em> — an element barely half uranium's size — in the debris. Lise Meitner and her nephew Otto Frisch, working through the physics over a snowy Christmas walk, realized the unthinkable: the neutron had split the uranium nucleus roughly in half. Frisch borrowed a term from cell biology: <strong>fission</strong>.</p>
<p>Here's the picture. A uranium-235 nucleus is a bloated giant, 92 mutually repelling protons barely held together. A slow neutron drifting in is like a pebble hitting an overfilled water balloon: the nucleus wobbles, stretches, and electrical repulsion tears it into two middleweight fragments, releasing about <strong>200 million electron-volts</strong> per split — tens of millions of times the energy of any chemical reaction.</p>
<p>But the detail that changed history is this: each fission also flings out <strong>two or three fresh neutrons</strong>.</p>
<div class="key-concept">
  <h4>Key Concept: The Chain Reaction</h4>
  <p>If, on average, at least one released neutron triggers another fission, the reaction feeds itself. One split becomes 2, then 4, 8, 16 — your halving arithmetic from last chapter running in reverse, as doubling. In a power reactor the chain is held at exactly <strong>one</strong> new fission per fission: steady output. A bomb is engineered for runaway doubling in a sphere of highly enriched material. Same physics, profoundly different machines.</p>
</div>
<p>Whether a chain sustains depends on the competition between neutrons causing fission and neutrons escaping or being absorbed. Too small a lump leaks too many neutrons from its surface; past the <strong>critical mass</strong>, the chain can sustain itself.</p>
<p>One subtlety matters enormously for the next section: natural uranium is over 99% uranium-238, which mostly swallows neutrons without splitting. Only the rare isotope <strong>uranium-235 (about 0.7%)</strong> fissions readily. Reactor fuel is enriched to just 3–5% U-235 — which is why a power reactor <em>physically cannot</em> explode like a nuclear bomb, no matter how badly its day is going. Bomb material requires around 90% enrichment, an enormous industrial undertaking.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Fission fragments are typically radioactive isotopes with half-lives from seconds to centuries — this is reactor waste, and we'll weigh it honestly in the next section. Meitner, who first explained fission, was excluded from the Nobel Prize awarded to Hahn; element 109, meitnerium, now carries her name.</p>
</div>`,
        },
        {
          id: "fusion",
          title: "Fusion: How Stars Do It",
          content: `
<p>Walk the binding-energy valley the other way. Merge light nuclei into heavier ones and the payoff is even richer, gram for gram, than fission: <strong>fusing hydrogen into helium releases roughly four times more energy per kilogram</strong> than splitting uranium. This is the engine of the universe. Every second, the Sun fuses about 600 million tonnes of hydrogen into helium, converting around 4 million tonnes of mass directly into sunshine — and has done so for 4.6 billion years. Every element in your body heavier than hydrogen was forged by fusion inside a star. You are, quite literally, recycled starfire.</p>
<p>So why don't we have fusion power plants already? Because fusion has a ferocious entry fee. Nuclei are positively charged, and the electric force pushes them apart harder the closer they get. The strong nuclear force only grabs hold at nearly point-blank range. To slam nuclei together fast enough, the fuel must reach temperatures around <strong>100–150 million °C</strong> — ten times hotter than the Sun's core (the Sun compensates with crushing gravitational pressure and colossal patience; we can't).</p>
<p>At those temperatures matter is a <strong>plasma</strong> — a gas of bare nuclei and electrons — and no material container can touch it. Two main strategies exist:</p>
<ul>
  <li><strong>Magnetic confinement:</strong> cage the charged plasma in a doughnut of magnetic fields (a <em>tokamak</em>, like the international ITER project) — using the same "magnetic force on moving charges" physics you met in Subject 8.</li>
  <li><strong>Inertial confinement:</strong> crush a peppercorn-sized fuel pellet with the world's most powerful lasers. In December 2022, the US National Ignition Facility achieved <em>ignition</em> — fusion output exceeding the laser energy delivered to the target — a genuine first, though still far from a power plant.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Why Fusion Is Worth the Struggle</h4>
  <p>Fusion fuel (deuterium from seawater, tritium bred from lithium) is effectively inexhaustible. There is no chain reaction to run away — any disturbance and the plasma simply fizzles out. And it produces no long-lived high-level waste. The physics works; the remaining battle is engineering a machine that produces more electricity than it consumes, reliably, for decades.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The deuterium in an average bathtub of seawater holds fusion energy equivalent to burning about 40 tonnes of coal. The fuel is not the problem — the container is.</p>
</div>`,
        },
        {
          id: "reactors-risk",
          title: "Reactors: Taming the Chain — and Weighing the Risks",
          content: `
<p>A nuclear power station is, at heart, a very exotic kettle: fission heat boils water, steam spins a turbine, the turbine spins a generator — the same electromagnetic induction you met in Subject 8. The nuclear part is about keeping the chain reaction at exactly steady state:</p>
<ul>
  <li><strong>Fuel rods:</strong> pellets of enriched uranium oxide stacked in metal tubes.</li>
  <li><strong>Moderator</strong> (usually water): slows fast neutrons, because slow neutrons split U-235 far more effectively — counterintuitive but decisive.</li>
  <li><strong>Control rods</strong> (boron, cadmium): neutron absorbers raised and lowered to hold the chain at exactly one fission per fission; fully inserted, they shut the reactor down.</li>
  <li><strong>Coolant</strong> carries heat to the steam loop; a massive steel-and-concrete <strong>containment building</strong> encloses everything.</li>
</ul>
<p>Now the honest ledger. <strong>The risks are real.</strong> Chernobyl (1986) — a flawed Soviet design with no containment, run outside its safe envelope — killed plant workers and firefighters directly and released contamination across Europe; the UN-linked scientific estimates put eventual attributable cancer deaths in the low thousands. Fukushima (2011) melted down after a tsunami overwhelmed its seawalls; radiation deaths were essentially zero, though the chaotic evacuation itself cost lives and displaced over 100,000 people. Reactor waste stays hazardous for many millennia and, while its volume is tiny, several countries have only now begun opening permanent deep repositories. Plants are also slow and expensive to build.</p>
<p><strong>The benefits are real too.</strong> Nuclear delivers carbon-free electricity around the clock, independent of weather, from astonishingly little fuel and land. Counting all accidents, nuclear power's death rate per unit of electricity is on par with wind and solar — and hundreds of times lower than the coal it often replaces, whose air pollution kills quietly but continuously.</p>
<div class="key-concept">
  <h4>Key Concept: Compare Risks to Alternatives, Not to Zero</h4>
  <p>Every energy source has a body count and a footprint; "perfectly safe" is not on the menu. The rational question is never "is nuclear risky?" but "risky <em>compared to what</em>?" Fear responds to vivid, concentrated accidents; data also counts the diffuse, invisible harms of everyday combustion. The next chapter puts numbers on all of it.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Coal ash from a coal plant carries trace uranium and thorium into the environment — a typical coal station releases <em>more</em> radioactivity in normal operation than a normally operating nuclear plant.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A helium nucleus weighs measurably less than its two protons and two neutrons weighed separately. Why?",
          options: [
            "Some protons convert into weightless neutrons during assembly",
            "The electrons orbiting the nucleus cancel part of its mass",
            "Measurement error — the masses are actually identical",
            "Binding released energy, and by E = mc² that energy carried mass away",
          ],
          correctIndex: 3,
          explanation:
            "Bound nucleons sit in a lower-energy arrangement than free ones. The energy released on binding is the mass deficit times c² — mass and energy are interchangeable, and c² is so large that tiny mass changes represent enormous energies.",
        },
        {
          question:
            "What makes a fission chain reaction possible in uranium-235?",
          options: [
            "Each fission releases 2–3 fresh neutrons that can trigger further fissions",
            "Uranium spontaneously splits when warmed",
            "The fission fragments themselves collide and split other nuclei",
            "Gamma rays from one fission split neighboring nuclei",
          ],
          correctIndex: 0,
          explanation:
            "The self-sustaining loop is neutrons: each split ejects 2–3 of them. If at least one, on average, causes another fission, the reaction continues — held at exactly one per fission in a reactor, allowed to double runaway-style in a bomb.",
        },
        {
          question:
            "Why does fusion require temperatures of around 100 million °C when fission works at ordinary temperatures?",
          options: [
            "Fusion fuel is frozen and must first be melted",
            "Heat is needed to break the light nuclei apart before rejoining them",
            "Positively charged nuclei repel; only at extreme speeds can they get close enough for the nuclear force to fuse them",
            "The plasma must glow brightly enough to sustain the reaction",
          ],
          correctIndex: 2,
          explanation:
            "Fission is triggered by neutrons, which have no charge and enter the nucleus freely. Fusion must slam two positive nuclei together against their fierce electrical repulsion, which requires the colossal collision speeds of a 100-million-degree plasma.",
        },
        {
          question:
            "Why can a nuclear power reactor not explode like a nuclear bomb?",
          options: [
            "Control rods react faster than any explosion could develop",
            "Its fuel is only 3–5% U-235 — far below the ~90% enrichment a bomb's runaway chain requires",
            "The water coolant would extinguish any nuclear explosion",
            "Reactors contain no uranium, only plutonium",
          ],
          correctIndex: 1,
          explanation:
            "A bomb needs highly enriched material so the chain reaction can double explosively fast. Reactor-grade fuel is diluted with neutron-absorbing U-238; the worst physical failure is a meltdown — genuinely serious, but a different phenomenon from a nuclear detonation.",
        },
        {
          question:
            "Which statement best reflects an honest, data-driven view of nuclear power's safety record?",
          options: [
            "Counting all accidents, its deaths per unit of electricity are comparable to wind and solar, and far below coal",
            "Nuclear power has never harmed anyone",
            "Nuclear accidents make it the deadliest energy source per unit of electricity",
            "Its risks cannot be compared with other energy sources",
          ],
          correctIndex: 0,
          explanation:
            "Chernobyl and Fukushima were real disasters with real costs — and even including them, nuclear's death toll per terawatt-hour is on par with renewables and hundreds of times below coal, whose air pollution kills continuously but invisibly. Rational risk assessment compares to alternatives, not to zero.",
        },
      ],
    },
    {
      id: "energy-and-society",
      title: "Energy & Society",
      subtitle:
        "Energy resources, renewables, and the physics behind humanity's biggest decisions",
      sections: [
        {
          id: "world-energy-bill",
          title: "The World's Energy Bill",
          content: `
<p>Before debating how to power civilization, a physicist asks: how big is the job? Humanity's primary energy consumption runs at roughly <strong>180,000 terawatt-hours per year</strong> — a continuous average power draw of about <strong>20 terawatts</strong>, or 20 trillion joules every second, day and night.</p>
<p>Numbers that size mean nothing until scaled to a person. Divide by 8 billion people and the global average is about <strong>2,500 watts per person</strong>, around the clock — as if 25 old 100 W light bulbs burned continuously on your behalf. That is not mostly your phone and lights; it is your share of factories, fertilizer, freight, steel, cement, heating, and flights. The average is also wildly uneven: a typical American draws roughly 9,000 W, a typical European 4,000–5,000 W, and hundreds of millions of people get by on a few hundred.</p>
<p>Where does it currently come from?</p>
<table>
  <thead>
    <tr><th>Source</th><th>Share of world primary energy (approx.)</th></tr>
  </thead>
  <tbody>
    <tr><td>Oil</td><td>≈ 30%</td></tr>
    <tr><td>Coal</td><td>≈ 26%</td></tr>
    <tr><td>Natural gas</td><td>≈ 23%</td></tr>
    <tr><td>Hydropower</td><td>≈ 6%</td></tr>
    <tr><td>Nuclear</td><td>≈ 4%</td></tr>
    <tr><td>Wind, solar &amp; other renewables</td><td>≈ 8% and climbing fast</td></tr>
  </tbody>
</table>
<p>Read the top three rows together: <strong>about four-fifths of civilization still runs on burning fossil carbon</strong>. That single fact frames the entire energy debate.</p>
<div class="key-concept">
  <h4>Key Concept: Energy Is Never "Used Up"</h4>
  <p>The conservation law that has anchored every subject since Phase 1 still rules here. We don't consume energy; we <em>degrade</em> it — from concentrated chemical or nuclear form into disordered waste heat. What civilization actually consumes is <strong>useful, ordered energy</strong>, and roughly two-thirds of the energy in our fuels is lost as waste heat before doing anything useful. Efficiency is a genuine energy resource.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>A fit human on a bicycle generator can sustain about 100 W. Your 2,500 W global-average share would take 25 full-time human cyclists — which is why cheap energy, historically, is what replaced human and animal muscle.</p>
</div>`,
        },
        {
          id: "comparing-contenders",
          title: "Comparing the Contenders — with Data",
          content: `
<p>Energy debates run hot on slogans and cold on numbers. Physics offers a better way: put every source on the same table and compare like with like. Three metrics do most of the work — climate impact per kilowatt-hour, safety per terawatt-hour, and reliability (what fraction of the time the source actually delivers).</p>
<table>
  <thead>
    <tr><th>Source</th><th>CO₂ (g per kWh, lifecycle)</th><th>Deaths per TWh (accidents + pollution)</th><th>Typical capacity factor</th></tr>
  </thead>
  <tbody>
    <tr><td>Coal</td><td>≈ 820</td><td>≈ 25</td><td>≈ 50%</td></tr>
    <tr><td>Natural gas</td><td>≈ 490</td><td>≈ 3</td><td>≈ 55%</td></tr>
    <tr><td>Hydro</td><td>≈ 24</td><td>≈ 1.3</td><td>≈ 40%</td></tr>
    <tr><td>Solar</td><td>≈ 40</td><td>≈ 0.02</td><td>≈ 15–25%</td></tr>
    <tr><td>Wind</td><td>≈ 11</td><td>≈ 0.04</td><td>≈ 25–40%</td></tr>
    <tr><td>Nuclear</td><td>≈ 12</td><td>≈ 0.03</td><td>≈ 90%</td></tr>
  </tbody>
</table>
<p>Reading the table honestly cuts against several popular intuitions:</p>
<ul>
  <li><strong>Coal is the outlier, and not in a good way</strong> — the highest emissions <em>and</em> a death rate hundreds of times worse than nuclear, wind, or solar, mostly through the slow grind of air pollution rather than dramatic accidents. A terawatt-hour is roughly one hour of electricity for a country of moderate size; coal's ≈ 25 deaths for each one add up to millions of early deaths from fossil air pollution worldwide every year.</li>
  <li><strong>Nuclear, wind, and solar cluster together</strong> at the clean, safe end — including Chernobyl and Fukushima in nuclear's ledger. The data refuse to match the fear rankings.</li>
  <li><strong>Hydro's average hides a skew:</strong> it is very safe per dam, but a single catastrophe (the 1975 Banqiao dam failure in China killed tens of thousands) dominates its statistics.</li>
  <li><strong>Capacity factor is the honest fine print.</strong> A solar farm's "100 MW" nameplate delivers 15–25% of that on average — night and clouds are facts of physics. Nuclear's ≈ 90% is the reliability benchmark.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Every Choice Is a Trade-off</h4>
  <p>No column wins everything. Gas is dispatchable but carbon-heavy; solar is safe and clean but intermittent and land-hungry; nuclear is reliable and clean but slow and costly to build, with long-lived waste. Adult energy policy means choosing trade-offs with open eyes — not pretending some option is free.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>These figures come from lifecycle studies aggregated by projects like Our World in Data — they count mining, construction, fuel, operation, and disposal, not just the smokestack. Always ask what a favorable-sounding energy number leaves out.</p>
</div>`,
        },
        {
          id: "renewables-physics",
          title: "The Physics of Renewables",
          content: `
<p>Renewables all cash the same check: energy income from the Sun (directly, or laundered through wind and rain) rather than drawing down Earth's fossil savings account. Each comes with physics that sets hard limits — and knowing them separates real plans from wishful thinking.</p>
<ul>
  <li><strong>Solar:</strong> sunlight delivers about <strong>1,000 W per square meter</strong> at noon on a clear day. Commercial panels convert around 20%, so figure ≈ 200 W/m² at peak and, after night, clouds, and seasons, an average of 10–40 W/m². The resource is stupendous — the Sun sends Earth more energy in about an hour than humanity uses in a year — but it is <em>dilute</em>, so collecting terawatts takes serious area.</li>
  <li><strong>Wind:</strong> a turbine harvests the kinetic energy of moving air, and the available power scales as <strong>wind speed cubed</strong> — double the wind, eight times the power. That cube is why offshore sites with steady strong winds are gold, and why calm days matter so much. A hard theorem (the Betz limit) caps any turbine at 59% of the wind's power; good modern machines reach about 45%.</li>
  <li><strong>Hydro:</strong> gravitational potential energy, mgh, of rain that the Sun lifted uphill. Dense, dispatchable, and proven — but most of the world's best river sites are already dammed, so hydro grows slowly.</li>
</ul>
<p>The deepest challenge is not generation but <strong>timing</strong>. Demand peaks on winter evenings; solar peaks at summer noon; wind blows on its own schedule. A reliable grid needs storage (batteries for hours; pumped hydro — pumping water uphill to replay the mgh trick later — still holds most of the world's stored electricity), long transmission lines to average weather over continents, and dispatchable partners for dark, still weeks.</p>
<div class="analogy">
  <h3>Analogy: Salary vs. Savings</h3>
  <p>Fossil fuels are an inheritance: concentrated, spendable any time, but finite and with a cleanup bill attached. Renewables are a salary: arriving forever, but on a schedule you don't control. Living on salary requires a buffer account — that's what storage is.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The price of solar electricity fell about <strong>90% between 2010 and 2020</strong>, making new solar the cheapest electricity in history across much of the world. Engineering-driven cost curves, not physics, were the real barrier — and they moved.</p>
</div>`,
        },
        {
          id: "energy-future",
          title: "Choosing the Energy Future",
          content: `
<p>Sustainability, stripped of buzzwords, is a physics question: <strong>can this continue?</strong> Fossil fuels fail the test twice. They are finite — concentrated solar energy banked by geology over hundreds of millions of years, being spent in a few centuries. And burning them moves carbon from underground into the atmosphere, where CO₂ has climbed from about 280 ppm before the industrial era past <strong>420 ppm</strong> today, strengthening the greenhouse effect you met in the thermal physics subject. The physics of that warming is not controversial; what to do about it is where the real debate lives.</p>
<p>What does the evidence suggest? A few load-bearing conclusions:</p>
<ul>
  <li><strong>There is no silver bullet.</strong> Every source carries trade-offs, so credible plans are <em>portfolios</em>: cheap solar and wind doing bulk work, storage and transmission smoothing their schedule, firm low-carbon sources — hydro, nuclear, geothermal, perhaps one day fusion — carrying dark, still weeks.</li>
  <li><strong>Efficiency is the quiet giant.</strong> Since roughly two-thirds of primary energy is lost as waste heat, better insulation, heat pumps, LEDs, and electric drivetrains (≈ 90% efficient vs ≈ 25% for combustion engines) deliver the same civilization for far less energy. Engineers call efficiency "the first fuel."</li>
  <li><strong>Scale honestly.</strong> Replacing a 20-terawatt fossil habit is a decades-long industrial project measured in thousands of plants and millions of turbines — which is an argument for starting seriously, not for despairing.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Back-of-Envelope Citizenship</h4>
  <p>You now own the toolkit this entire first pass was building toward. When a headline claims some gadget will "power a million homes," you can check it: a home draws ≈ 1 kW on average, so that claim means a steady gigawatt — one large power station's output. Numbers beat slogans. Demand the numbers.</p>
</div>
<p>And with that, your first full tour of physics is complete — from pushing a shopping cart in Subject 1 to weighing civilization's energy budget here, with one idea running through it all: <strong>energy is conserved, only transformed</strong>. Phase 3 starts the second pass, with vectors and calculus-grade tools that turn today's intuitions into precise calculations — including, in Subject 15, the exponential decay law and binding energies we promised.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>In several countries, solar and wind already supply over 40% of annual electricity — a share considered impossible by many experts two decades ago. Energy systems can change faster than conventional wisdom expects, when physics and economics finally point the same way.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Humanity's average primary energy use is roughly 2,500 W per person. What does that figure mostly represent?",
          options: [
            "Household electricity for lights and devices",
            "The power of each person's car engine",
            "Each person's share of everything — industry, transport, agriculture, heating — running continuously",
            "Energy lost only through body heat",
          ],
          correctIndex: 2,
          explanation:
            "The 2,500 W is total civilization power divided by population: your slice of steel mills, fertilizer plants, freight, heating, and flights, averaged around the clock. Personal electricity is only a modest fraction — which is why energy policy is about far more than switching off lights.",
        },
        {
          question:
            "Per terawatt-hour of electricity, which comparison does the safety data actually support?",
          options: [
            "Nuclear is by far the deadliest source because of its accidents",
            "Coal causes hundreds of times more deaths than nuclear, wind, or solar",
            "All sources have roughly equal death rates",
            "Hydro is the deadliest source in ordinary operation",
          ],
          correctIndex: 1,
          explanation:
            "Coal's ≈ 25 deaths per TWh — mostly from air pollution's slow, invisible toll — dwarf the ≈ 0.02–0.04 of nuclear, wind, and solar, even with Chernobyl and Fukushima counted. Vivid accidents dominate headlines; diffuse everyday harm dominates the statistics.",
        },
        {
          question:
            "Why does doubling the wind speed matter so much to a wind turbine?",
          options: [
            "It doubles the power output",
            "It quadruples the power output",
            "It has little effect — turbines cap output at all speeds",
            "Available power scales with speed cubed, so it increases eightfold",
          ],
          correctIndex: 3,
          explanation:
            "Wind power scales as v³: twice the speed carries 2³ = 8 times the power. This cube law is why steady, strong offshore winds are so valuable and why output collapses on calm days — the physics behind wind's intermittency.",
        },
        {
          question:
            "A '100 MW' solar farm has a capacity factor of about 20%. What does that mean in practice?",
          options: [
            "It averages about 20 MW over the year, because of night, clouds, and seasons",
            "It delivers 100 MW continuously, day and night",
            "Only 20% of its panels function at any time",
            "It converts 20% of its electricity into waste heat",
          ],
          correctIndex: 0,
          explanation:
            "Nameplate capacity is peak output under ideal sun. Averaged over nights, weather, and seasons, a 20% capacity factor means ≈ 20 MW of continuous-equivalent power. Comparing sources by nameplate alone is one of the commonest errors in energy debates — always ask for the capacity factor.",
        },
        {
          question:
            "Why do engineers call energy efficiency 'the first fuel'?",
          options: [
            "Efficient devices generate their own energy",
            "Efficiency was historically the earliest energy source",
            "It only applies to fossil-fuel power stations",
            "Since about two-thirds of primary energy becomes waste heat, cutting losses supplies 'new' useful energy without building anything that generates it",
          ],
          correctIndex: 3,
          explanation:
            "Energy is conserved but degrades to waste heat; civilization actually runs on the useful fraction. Heat pumps, insulation, LEDs, and electric drivetrains deliver the same services from far less primary energy — often more cheaply than building new supply. The cheapest kilowatt-hour is the one you never need.",
        },
      ],
    },
  ],
};
