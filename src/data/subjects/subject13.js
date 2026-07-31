export const subject13 = {
  id: "waves-and-optics",
  number: 13,
  title: "Waves & Optics",
  description:
    "The quantitative second pass at waves — from y = A sin(kx − ωt) to superposition, the Doppler effect, double-slit interference, and the lens equation.",
  phase: 3,
  chapters: [
    {
      id: "wave-motion",
      title: "Wave Motion",
      subtitle: "Travelling waves, the sinusoidal wave function, and what carries the energy",
      sections: [
        {
          id: "travelling-waves",
          title: "What Actually Travels in a Travelling Wave",
          content: `
<p>Drop a stone in a pond and rings spread outward — but the water itself barely moves. A leaf on the surface bobs up and down and stays put. This is the defining trick of a wave: <strong>the disturbance travels; the medium does not</strong>. What moves from place to place is a pattern, and with the pattern, energy and information.</p>
<p>Waves come in two geometries, distinguished by how the medium moves relative to the wave's direction of travel:</p>
<ul>
  <li><strong>Transverse waves:</strong> the medium oscillates <em>perpendicular</em> to the direction of travel. Waves on a string, ripples on water (approximately), and light are transverse.</li>
  <li><strong>Longitudinal waves:</strong> the medium oscillates <em>along</em> the direction of travel, in compressions and rarefactions. Sound is the classic example — air molecules shuttle back and forth along the line the sound travels.</li>
</ul>
<p>A single flick of a rope sends a <strong>pulse</strong>; shake it rhythmically and you get a <strong>periodic wave</strong> — a repeating pattern described by a small set of numbers you already met in Phase 2:</p>
<ul>
  <li><strong>Amplitude A:</strong> the maximum displacement from equilibrium (metres).</li>
  <li><strong>Wavelength λ:</strong> the spatial repeat distance — crest to crest (metres).</li>
  <li><strong>Period T</strong> and <strong>frequency f = 1/T:</strong> the time repeat and its reciprocal (seconds, hertz).</li>
</ul>
<p>These connect through the most-used equation in wave physics. In one period T, the wave advances exactly one wavelength λ, so its speed is:</p>
<p><strong>v = λ/T = fλ</strong></p>
<div class="analogy">
  <h3>Analogy: The Stadium Wave</h3>
  <p>In a stadium "Mexican wave," each fan only stands and sits — nobody runs around the stadium. Yet the wave sweeps around at high speed. Each fan is a particle of the medium; the travelling thing is pure pattern. Every wave in this subject works exactly this way.</p>
</div>
<div class="key-concept">
  <h4>Frequency Comes from the Source, Speed from the Medium</h4>
  <p>The <em>source</em> sets the frequency (how fast you shake), the <em>medium</em> sets the speed (how stiff and heavy it is), and the wavelength adjusts to satisfy λ = v/f. When a wave crosses into a new medium, f stays fixed and λ changes — a fact that will matter for refraction and thin films later.</p>
</div>`,
        },
        {
          id: "sinusoid-anatomy",
          title: "y = A sin(kx − ωt): Every Symbol Earns Its Keep",
          content: `
<p>Here is where the sinusoid anatomy you drilled in Subject 10 pays off. A travelling sinusoidal wave on a string is described by a function of <em>two</em> variables — position x and time t:</p>
<p><strong>y(x, t) = A sin(kx − ωt)</strong></p>
<p>Read it symbol by symbol:</p>
<ul>
  <li><strong>A</strong> — the amplitude, the peak displacement. Everything inside the sine only decides <em>where in the cycle</em> you are; A decides <em>how big</em> the cycle is.</li>
  <li><strong>k = 2π/λ</strong> — the <strong>wavenumber</strong>, in radians per metre. It converts distance into phase: move one full wavelength (Δx = λ) and kx advances by 2π — one complete cycle, exactly as it should.</li>
  <li><strong>ω = 2πf = 2π/T</strong> — the <strong>angular frequency</strong>, in radians per second. It converts time into phase: wait one period and ωt advances by 2π.</li>
  <li><strong>(kx − ωt)</strong> — the <strong>phase</strong>. Every point on the wave is doing the same oscillation, just at a different moment of the cycle.</li>
</ul>
<p>Why does the minus sign mean "moving right"? Follow one crest. A crest lives where the phase equals π/2, so kx − ωt = π/2. As t increases, ωt grows, and to keep the phase constant, x must grow too — the crest slides toward larger x. Setting kx − ωt = constant and solving for the speed dx/dt gives the elegant result:</p>
<p><strong>v = ω/k = (2πf)/(2π/λ) = fλ</strong></p>
<p>The familiar v = fλ falls straight out of the algebra. A wave moving left is simply y = A sin(kx + ωt).</p>
<p><strong>Worked example.</strong> A wave is described by y = 0.02 sin(4πx − 200πt) (SI units). Then k = 4π rad/m, so λ = 2π/k = 0.5 m; ω = 200π rad/s, so f = ω/2π = 100 Hz; and v = ω/k = 200π/4π = 50 m/s. Check: fλ = 100 × 0.5 = 50 m/s. ✓</p>
<div class="key-concept">
  <h4>Two Rulers, One Wave</h4>
  <p>Freeze time (photograph the string) and y vs x is a sinusoid with repeat length λ. Stare at one point (fix x) and y vs t is a sinusoid with repeat time T. The wave function packages both pictures into one formula — k is the "space frequency," ω the "time frequency."</p>
</div>`,
        },
        {
          id: "wave-speed-on-strings",
          title: "Wave Speed on a String: Tension vs Inertia",
          content: `
<p>What determines how fast a wave travels down a string? Not how hard you shake it — that sets frequency and amplitude. Speed belongs entirely to the <em>medium</em>, and for a string two properties compete:</p>
<ul>
  <li><strong>Tension T</strong> (newtons): the restoring agent. A tighter string snaps back faster, so the disturbance propagates faster.</li>
  <li><strong>Linear mass density μ = mass/length</strong> (kg/m): the inertia. A heavier string is more sluggish, so the wave is slower.</li>
</ul>
<p>The exact relationship is:</p>
<p><strong>v = √(T/μ)</strong></p>
<p>The square root is a pattern you will see again and again in physics: wave speed = √(restoring property / inertial property). For sound in a gas it's √(elastic modulus/density); the structure is universal.</p>
<p><strong>Worked example.</strong> A guitar's low E string has a mass of 3.3 g over a vibrating length of 0.65 m, so μ = 0.0033/0.65 ≈ 5.1 × 10⁻³ kg/m. Under a tension of 72 N:</p>
<p>v = √(72 / 5.1 × 10⁻³) ≈ √14 100 ≈ <strong>119 m/s</strong></p>
<p>That single number explains how tuning works. Tightening the tuning peg raises T, which raises v; since the wavelength of the string's fundamental is fixed by its length (next chapter), f = v/λ rises and the pitch goes up. To <em>quadruple</em> the frequency by tension alone you would need <strong>16×</strong> the tension — which is why guitars instead use thicker (higher μ) strings for the low notes.</p>
<table>
  <thead>
    <tr><th>Change</th><th>Effect on v = √(T/μ)</th><th>Effect on pitch</th></tr>
  </thead>
  <tbody>
    <tr><td>Tension ×4</td><td>v doubles</td><td>One octave up</td></tr>
    <tr><td>μ ×4 (thicker string)</td><td>v halves</td><td>One octave down</td></tr>
    <tr><td>Shake harder (bigger A)</td><td>No change</td><td>Louder, same pitch</td></tr>
  </tbody>
</table>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>The wound bass strings on a guitar or piano are wire wrapped in more wire purely to boost μ without making the string stiff. A solid string heavy enough for a piano's lowest notes would behave more like a metal bar than a flexible string, and its overtones would sound sour.</p>
</div>`,
        },
        {
          id: "energy-and-intensity",
          title: "Energy and Intensity: What the Wave Delivers",
          content: `
<p>Waves are energy-delivery systems. Sunlight warms your skin, sound moves your eardrum, earthquakes topple buildings — all without any material making the trip. How much energy does a wave carry?</p>
<p>Each particle of the medium is doing simple harmonic motion, and from Phase 2 you know SHM energy scales with the <em>square</em> of amplitude and the square of frequency. For a sinusoidal wave on a string, the power transmitted is proportional to:</p>
<p><strong>P ∝ μ v ω² A²</strong></p>
<p>The two squared factors are the headline: <strong>double the amplitude → 4× the power; double the frequency → 4× the power</strong>. This quadratic scaling is why a magnitude-7 earthquake is devastating while a magnitude-5 rattles cups, and why ultrasound (high ω) can carry enough power to break kidney stones at modest amplitudes.</p>
<p>For waves spreading in 3D — sound from a speaker, light from a bulb — we care about <strong>intensity</strong>: power per unit area, in W/m².</p>
<p><strong>I = P/A</strong></p>
<p>A point source radiating power P spreads that power over ever-larger spheres of area 4πr², giving the <strong>inverse-square law</strong>:</p>
<p><strong>I = P/(4πr²)</strong>, so I ∝ 1/r²</p>
<p><strong>Worked example.</strong> A loudspeaker radiates 3.0 W uniformly. At r = 2.0 m: I = 3.0/(4π × 4.0) ≈ 0.060 W/m². Move to 4.0 m — doubling the distance — and the intensity drops to one quarter: ≈ 0.015 W/m². Since intensity ∝ amplitude², the pressure amplitude of the sound has only halved.</p>
<div class="analogy">
  <h3>Analogy: Butter on Toast</h3>
  <p>A fixed pat of butter (the power) spread over one slice is thick; spread over four slices it's thin. The wave's power is fixed at the source, but the spherical "toast" it must cover grows as r², so the coating — the intensity — thins as 1/r².</p>
</div>
<div class="key-concept">
  <h4>Amplitude² Is the Rule to Remember</h4>
  <p>Energy and intensity go as the square of amplitude for every wave you will meet — string waves, sound, light, and eventually quantum wavefunctions, where |amplitude|² becomes probability. File this now; it pays dividends for the rest of the course.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A wave is described by y = 0.05 sin(10x − 400t) in SI units. What is its speed?",
          options: [
            "4000 m/s",
            "0.025 m/s",
            "40 m/s",
            "10 m/s",
          ],
          correctIndex: 2,
          explanation:
            "For y = A sin(kx − ωt), the speed is v = ω/k = 400/10 = 40 m/s. The amplitude (0.05 m) plays no role in the speed — it only sets how large the oscillation is.",
        },
        {
          question:
            "In the wave function y = A sin(kx − ωt), what does the wavenumber k = 2π/λ physically do?",
          options: [
            "Converts distance along the wave into phase, in radians per metre",
            "Counts the number of waves emitted per second",
            "Measures the wave's maximum displacement",
            "Sets the energy carried by the wave",
          ],
          correctIndex: 0,
          explanation:
            "k translates position into phase: advancing by one wavelength (Δx = λ) advances the phase kx by exactly 2π — one full cycle. It is the spatial twin of ω, which converts time into phase.",
        },
        {
          question:
            "A string's tension is quadrupled while nothing else changes. The wave speed on the string...",
          options: [
            "quadruples",
            "stays the same",
            "increases by a factor of 16",
            "doubles",
          ],
          correctIndex: 3,
          explanation:
            "v = √(T/μ), so speed scales with the square root of tension: √4 = 2. Quadrupling T doubles v. This square-root relationship is why tuning a string up an octave (doubling f) requires four times the tension.",
        },
        {
          question:
            "You double your distance from a small loudspeaker radiating uniformly in all directions. The sound intensity you receive...",
          options: [
            "halves",
            "drops to one quarter",
            "stays the same because the power is unchanged",
            "drops to one eighth",
          ],
          correctIndex: 1,
          explanation:
            "Intensity from a point source obeys the inverse-square law, I = P/(4πr²). Doubling r multiplies the sphere's area by 4, spreading the same power four times thinner. The source's power is indeed unchanged — but your share of it is not.",
        },
        {
          question:
            "When a periodic wave passes from one medium into another where it travels slower, what happens to its frequency and wavelength?",
          options: [
            "Frequency decreases, wavelength stays the same",
            "Both frequency and wavelength decrease",
            "Frequency stays the same, wavelength decreases",
            "Frequency increases, wavelength decreases",
          ],
          correctIndex: 2,
          explanation:
            "Frequency is set by the source and cannot change at a boundary — every crest arriving must leave. With f fixed and v reduced, λ = v/f must shrink. This is the rule behind refraction and thin-film interference later in this subject.",
        },
      ],
    },
    {
      id: "superposition",
      title: "Superposition",
      subtitle: "Interference, standing waves, harmonics, and beats",
      sections: [
        {
          id: "principle-of-superposition",
          title: "The One Rule: Waves Add",
          content: `
<p>When two waves occupy the same place at the same time, something remarkably simple happens: the displacements <strong>add</strong>. Point by point, instant by instant, the total displacement is the sum of what each wave would do alone. This is the <strong>principle of superposition</strong>, and it may be the single most consequential sentence in wave physics.</p>
<p>Two crossing pulses on a rope pass straight through each other and emerge unchanged — while overlapping, their heights simply sum. For two continuous waves of the <em>same frequency</em>, the sum depends on their relative timing, their <strong>phase difference</strong>:</p>
<ul>
  <li><strong>Constructive interference:</strong> crest meets crest (in phase, phase difference 0, 2π, 4π, …). Amplitudes add: two waves of amplitude A make amplitude 2A — and since energy ∝ A², up to <em>four times</em> the intensity.</li>
  <li><strong>Destructive interference:</strong> crest meets trough (antiphase, phase difference π, 3π, …). Equal amplitudes cancel completely: the medium sits still.</li>
</ul>
<p>The practical way to predict which occurs is <strong>path difference</strong>. If two sources oscillate in step but their waves travel different distances to reach you, the extra distance shifts the phase:</p>
<table>
  <thead>
    <tr><th>Path difference</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td>0, λ, 2λ, … (nλ)</td><td>Constructive — loud / bright</td></tr>
    <tr><td>λ/2, 3λ/2, … ((n + ½)λ)</td><td>Destructive — quiet / dark</td></tr>
  </tbody>
</table>
<p>Walk slowly across a room where two speakers play the same pure tone and you pass through loud and quiet bands — real silence manufactured from two sources of sound. Noise-cancelling headphones industrialize the idea: a microphone samples the incoming noise and the electronics emit its inverted copy, engineering destructive interference at your eardrum.</p>
<div class="key-concept">
  <h4>Interference Is the Wave Fingerprint</h4>
  <p>Particles cannot cancel: two bullets never add up to no bullets. Only waves interfere. Whenever physicists see an interference pattern — in light (this subject), in electrons (Subject 15) — the conclusion is immediate: a wave is involved. Quantum mechanics reuses every idea on this page.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Superposition works because the underlying wave equations are linear. At extreme amplitudes — near-shore ocean breakers, shock waves — linearity fails and waves stop adding politely, which is exactly why breakers curl and crash instead of passing through each other.</p>
</div>`,
        },
        {
          id: "standing-waves",
          title: "Standing Waves: Interference in a Mirror",
          content: `
<p>Send a wave down a string whose far end is fixed, and it reflects — inverted — and travels back through the incoming wave. Two identical waves now cross in opposite directions, and their superposition produces something new: a <strong>standing wave</strong>, a pattern that oscillates in place and travels nowhere.</p>
<p>Adding y₁ = A sin(kx − ωt) and y₂ = A sin(kx + ωt) gives, via the trig identities from Subject 10:</p>
<p><strong>y = 2A sin(kx) cos(ωt)</strong></p>
<p>Read the anatomy: the sin(kx) factor is a frozen spatial envelope; the cos(ωt) factor makes every point oscillate in unison. The travelling phase (kx − ωt) is gone — space and time have separated.</p>
<ul>
  <li><strong>Nodes:</strong> points where sin(kx) = 0. The string never moves there. Adjacent nodes are λ/2 apart.</li>
  <li><strong>Antinodes:</strong> points where sin(kx) = ±1, oscillating with maximum amplitude 2A. They sit midway between nodes.</li>
</ul>
<p>Now impose the crucial constraint: a string of length L fixed at <em>both</em> ends must have nodes at both ends. That is only possible for wavelengths that fit exactly:</p>
<p><strong>λₙ = 2L/n</strong>, where n = 1, 2, 3, …</p>
<p>Only a discrete menu of wavelengths — and therefore frequencies — is allowed. The string cannot vibrate steadily at any in-between wavelength: the reflections would interfere destructively and wipe the motion out. This is why a plucked string rings at particular pitches rather than making noise.</p>
<div class="analogy">
  <h3>Analogy: The Skipping Rope</h3>
  <p>Two people turning a long skipping rope make the n = 1 pattern: nodes at their hands, one antinode in the middle. Turn it twice as fast with a flick and the rope forms two half-loops with a motionless point in the centre — n = 2. You cannot make it hold one and a half loops: the ends won't cooperate. That is quantization, felt in your hands.</p>
</div>
<div class="key-concept">
  <h4>Boundaries + Waves = Discrete Modes</h4>
  <p>Confining a wave forces it into a discrete set of patterns. In Subject 15 the same logic — electron waves confined around a nucleus — will produce discrete atomic energy levels. Standing waves are the classical rehearsal for quantum mechanics.</p>
</div>`,
        },
        {
          id: "harmonics-and-music",
          title: "Harmonics: The Physics of Music",
          content: `
<p>Each allowed standing-wave pattern on a string has its own frequency. Combining λₙ = 2L/n with v = fλ and v = √(T/μ) gives the <strong>harmonic series</strong>:</p>
<p><strong>fₙ = n v / (2L) = n f₁</strong>, n = 1, 2, 3, …</p>
<p>The n = 1 mode is the <strong>fundamental</strong> f₁ — the pitch you name when you hear the note. The higher modes, at exactly 2f₁, 3f₁, 4f₁ …, are the <strong>harmonics</strong> (or overtones).</p>
<p><strong>Worked example.</strong> The guitar string from Chapter 1: v ≈ 119 m/s on a vibrating length L = 0.65 m.</p>
<ul>
  <li>f₁ = v/2L = 119/(2 × 0.65) ≈ <strong>92 Hz</strong> — close to the low F♯/G region; tune the tension to 72.5 N and you land on E₂'s neighborhood in practice (concert low E is 82.4 Hz with slightly lower tension or heavier string).</li>
  <li>f₂ = 2f₁ ≈ 184 Hz, f₃ = 3f₁ ≈ 276 Hz, and so on.</li>
</ul>
<p>Fretting the string shortens L, raising every fₙ together: halve the length (the 12th fret) and the pitch jumps exactly one octave (f doubles).</p>
<p>Pipes follow the same logic with air columns. An <strong>open-open pipe</strong> (flute) needs antinodes at both ends and produces all harmonics, fₙ = n v/(2L). A <strong>closed-open pipe</strong> (clarinet-like; v = speed of sound) needs a node at the closed end and an antinode at the open end:</p>
<p><strong>fₙ = n v / (4L)</strong>, n = 1, 3, 5, … — <em>odd harmonics only</em>, and its fundamental is an octave below an open pipe of the same length.</p>
<p>A real instrument never plays one harmonic alone; it excites a blend, and the <strong>recipe of harmonic amplitudes is the timbre</strong> — why a violin and a trumpet playing the same 440 Hz sound utterly different.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Touch a guitar string lightly at its midpoint while plucking and you force a node there, silencing the odd harmonics: the string rings an octave up. Guitarists call these bell-like tones "harmonics" — they are literally selecting terms of the series fₙ = n f₁ with one finger.</p>
</div>`,
        },
        {
          id: "beats",
          title: "Beats: Interference You Can Count",
          content: `
<p>Interference between waves of the <em>same</em> frequency gives fixed loud and quiet places. But superpose two tones of slightly <em>different</em> frequencies — say 440 Hz and 444 Hz — and the interference pattern happens in <em>time</em> instead: the combined sound swells and fades, swells and fades. These pulsations are <strong>beats</strong>.</p>
<p>The mechanism is pure superposition. At some instant the two waves are in step and add constructively — loud. Because one oscillates slightly faster, it steadily gains phase on the other; after a short while it is half a cycle ahead, the waves cancel, and the sound dips to near silence. Then it gains a full cycle and they are back in step. Each full cycle of "catch-up" is one beat, so the beat frequency is simply the difference:</p>
<p><strong>f_beat = |f₁ − f₂|</strong></p>
<p>For 440 Hz and 444 Hz you hear a 442 Hz tone (the average) throbbing 4 times per second. The closer the two frequencies, the <em>slower</em> the beating — and when they match exactly, the beats stop entirely.</p>
<p><strong>Worked example.</strong> A piano tuner strikes a tuning fork (A = 440.0 Hz) together with the piano's A string and hears 3 beats per second, so the string is at 437 or 443 Hz. She tightens the string slightly and the beating slows to 1 per second — tightening raises pitch and the beats slowed, so the string was flat at 437 Hz and is now at 439 Hz. She continues tightening until the beats vanish: the string sits at 440.0 Hz, tuned to a precision no unaided ear could judge from pitch alone.</p>
<div class="key-concept">
  <h4>Beats Turn Tiny Differences into Countable Events</h4>
  <p>Distinguishing 440 Hz from 441 Hz by ear is hopeless; counting one beat per second is trivial. Converting a small frequency difference into a slow, measurable oscillation is a trick used far beyond music — radar guns and laser interferometers "listen for beats" between a reference wave and a returned wave to measure speeds and distances with extreme precision.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Twin-engine aircraft passengers sometimes hear a slow wah-wah drone: the two engines spinning at almost — but not exactly — the same rate produce beats through the cabin. Pilots "synching" the props are tuning the beat frequency to zero, exactly like the piano tuner.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Two loudspeakers emit identical 0.68 m wavelength tones in phase. At a point where the path difference to the two speakers is 1.02 m, what do you hear?",
          options: [
            "Maximum loudness — constructive interference",
            "Near silence — destructive interference",
            "A beat frequency of 1.5 Hz",
            "The pitch shifted by half an octave",
          ],
          correctIndex: 1,
          explanation:
            "1.02 m = 1.5 × 0.68 m — a path difference of exactly one and a half wavelengths. Half-integer multiples of λ put the waves in antiphase (crest on trough), so they cancel. Integer multiples (0, λ, 2λ…) would give constructive interference.",
        },
        {
          question:
            "On a standing wave, how far apart are two adjacent nodes?",
          options: [
            "One full wavelength λ",
            "A quarter wavelength λ/4",
            "It depends on the amplitude",
            "Half a wavelength λ/2",
          ],
          correctIndex: 3,
          explanation:
            "The spatial envelope 2A sin(kx) passes through zero every half wavelength, so nodes are spaced λ/2 apart, with an antinode midway between each pair. Amplitude sets how far the antinodes swing, not where the nodes sit.",
        },
        {
          question:
            "A string fixed at both ends is 0.5 m long and carries waves at 200 m/s. What is its fundamental frequency?",
          options: [
            "200 Hz",
            "400 Hz",
            "100 Hz",
            "800 Hz",
          ],
          correctIndex: 0,
          explanation:
            "The fundamental has λ₁ = 2L = 1.0 m (one antinode between the two end nodes), so f₁ = v/λ₁ = 200/1.0 = 200 Hz. The harmonics follow at 400, 600, 800 Hz — integer multiples of the fundamental.",
        },
        {
          question:
            "Why does a closed-open pipe (like a simple clarinet model) sound an octave lower than an open-open pipe of the same length?",
          options: [
            "Sound travels more slowly inside a closed pipe",
            "Its fundamental fits a quarter wavelength in the pipe instead of a half, so f₁ = v/4L rather than v/2L",
            "The closed end absorbs the higher frequencies",
            "Closed pipes only support even harmonics",
          ],
          correctIndex: 1,
          explanation:
            "A closed end forces a node and an open end an antinode, so the longest fitting pattern is a quarter wave: λ₁ = 4L and f₁ = v/4L — half the open-open pipe's v/2L, i.e. one octave down. Such pipes also produce only odd harmonics, not even ones.",
        },
        {
          question:
            "A tuner hears 5 beats per second between a 440 Hz fork and a piano string. Tightening the string makes the beats speed up. What was the string's original frequency?",
          options: [
            "435 Hz",
            "445 Hz",
            "440 Hz",
            "450 Hz",
          ],
          correctIndex: 1,
          explanation:
            "Five beats per second means the string was at 435 or 445 Hz (f_beat = |f₁ − f₂|). Tightening raises the string's pitch; if the beats got faster, the difference from 440 grew — so the string was already sharp at 445 Hz and moving further away. Had it started at 435 Hz, tightening would have slowed the beats.",
        },
      ],
    },
    {
      id: "sound-and-doppler",
      title: "Sound & Doppler",
      subtitle: "Sound made quantitative — decibels, moving sources, and shock waves",
      sections: [
        {
          id: "sound-quantitative",
          title: "Sound as a Pressure Wave, with Numbers",
          content: `
<p>Sound is a longitudinal wave: a vibrating surface — a vocal cord, a speaker cone — shoves air molecules together into a <strong>compression</strong>, they shove their neighbours, and a travelling pattern of compressions and <strong>rarefactions</strong> spreads outward. No air molecule travels to your ear; each just oscillates a fraction of a millimetre about its home position.</p>
<p>Quantitatively, sound is best described as a <strong>pressure wave</strong>: tiny oscillations Δp above and below atmospheric pressure, travelling at the speed of sound. The numbers are humbling:</p>
<ul>
  <li>Atmospheric pressure: ≈ 101 325 Pa.</li>
  <li>Pressure amplitude of the quietest audible sound: ≈ 2 × 10⁻⁵ Pa — about two <em>billionths</em> of an atmosphere.</li>
  <li>Pressure amplitude at the threshold of pain: ≈ 30 Pa — still only 0.03% of atmospheric.</li>
</ul>
<p>The speed of sound follows the universal pattern from Chapter 1 — √(stiffness/inertia). For air it works out to:</p>
<p><strong>v ≈ 331 + 0.6 T m/s</strong> (T in °C), so about <strong>343 m/s at 20 °C</strong></p>
<p>Speed rises with temperature because warmer molecules relay the disturbance faster; it does <em>not</em> depend appreciably on pressure or on loudness. In liquids and solids, far stiffer than air, sound races: ≈ 1480 m/s in water, ≈ 5100 m/s in steel.</p>
<table>
  <thead>
    <tr><th>Quantity</th><th>Human hearing range</th></tr>
  </thead>
  <tbody>
    <tr><td>Frequency</td><td>≈ 20 Hz to 20 000 Hz (shrinking with age from the top)</td></tr>
    <tr><td>Wavelength in air (20 °C)</td><td>≈ 17 m (20 Hz) down to 1.7 cm (20 kHz)</td></tr>
    <tr><td>Intensity</td><td>10⁻¹² W/m² (threshold) to ≈ 1 W/m² (pain) — a factor of 10¹²</td></tr>
  </tbody>
</table>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>The "count seconds after lightning" rule is pure wave physics: light arrives essentially instantly, while thunder crawls at 343 m/s — about 3 s per kilometre (5 s per mile). Divide the delay in seconds by 3 to get the storm's distance in km.</p>
</div>
<div class="key-concept">
  <h4>A Trillion-to-One Ear</h4>
  <p>Your ear operates across twelve orders of magnitude of intensity — like a bathroom scale that weighs both a mosquito and a battleship. No linear scale can chart that comfortably, which is exactly why the next section goes logarithmic.</p>
</div>`,
        },
        {
          id: "intensity-and-decibels",
          title: "Decibels: Loudness on a Log Scale",
          content: `
<p>Because audible intensities span a factor of 10¹², and because the ear itself judges loudness by <em>ratios</em> rather than differences, sound level is measured logarithmically. This is your log fluency from Subject 10 going to work. The <strong>sound intensity level</strong> β, in decibels (dB), is defined as:</p>
<p><strong>β = 10 log₁₀(I/I₀)</strong>, with I₀ = 10⁻¹² W/m²</p>
<p>I₀ is the nominal threshold of hearing, pegged at 0 dB. The two rules worth memorizing fall straight out of log arithmetic:</p>
<ul>
  <li><strong>×10 in intensity → +10 dB.</strong> Each factor of ten adds ten decibels.</li>
  <li><strong>×2 in intensity → +3 dB</strong>, since 10 log 2 ≈ 3.0.</li>
</ul>
<p><strong>Worked example 1.</strong> A vacuum cleaner produces I = 10⁻⁵ W/m². Then I/I₀ = 10⁻⁵/10⁻¹² = 10⁷, so β = 10 log(10⁷) = <strong>70 dB</strong>. With logs, the calculation is just counting powers of ten.</p>
<p><strong>Worked example 2.</strong> One violin plays at 68 dB. Ten violins deliver ten times the intensity: β = 68 + 10 log 10 = <strong>78 dB</strong>. A hundred violins? Only 88 dB. Doubling perceived "loudness" costs roughly ten times the power — the brutal economics of orchestras and rock concerts.</p>
<p><strong>Worked example 3 (going backwards).</strong> A jackhammer at 95 dB: I = I₀ × 10^(β/10) = 10⁻¹² × 10⁹·⁵ ≈ 3.2 × 10⁻³ W/m². Combine with the inverse-square law and you can predict the level at any distance: moving from 1 m to 10 m cuts intensity by 100× — subtracting 20 dB — leaving 75 dB.</p>
<table>
  <thead>
    <tr><th>Sound</th><th>Level</th><th>I (W/m²)</th></tr>
  </thead>
  <tbody>
    <tr><td>Threshold of hearing</td><td>0 dB</td><td>10⁻¹²</td></tr>
    <tr><td>Whisper</td><td>30 dB</td><td>10⁻⁹</td></tr>
    <tr><td>Conversation</td><td>60 dB</td><td>10⁻⁶</td></tr>
    <tr><td>Rock concert</td><td>110 dB</td><td>10⁻¹</td></tr>
    <tr><td>Pain threshold</td><td>≈ 120 dB</td><td>1</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>Decibels Add When Intensities Multiply</h4>
  <p>That is the entire point of a log scale: the unmanageable multiplication of intensities becomes simple addition of decibels. +10 dB per ×10, +3 dB per ×2, −20 dB per tenfold distance increase (inverse square) — three rules cover nearly every practical decibel question.</p>
</div>`,
        },
        {
          id: "doppler-effect",
          title: "The Doppler Effect: Motion Written in Pitch",
          content: `
<p>An ambulance sweeps past and its siren visibly (audibly!) drops in pitch — eee-yooo. Neither the siren nor your ears changed; the <em>relative motion</em> did. This is the <strong>Doppler effect</strong>: motion of source or observer changes the frequency received.</p>
<p>The physical picture: a moving source chases its own forward-going wavefronts, cramming them closer together (shorter λ, higher pitch ahead) while stretching the ones behind (lower pitch). A moving observer instead changes how fast wavefronts are swept up. For sound of source frequency f in air where sound travels at speed v:</p>
<p><strong>f′ = f (v ± v_obs)/(v ∓ v_src)</strong></p>
<p>Sign rule: choose the signs so that <strong>approach raises pitch, recession lowers it</strong> — upper signs for approach. (v_obs = observer speed, v_src = source speed, both measured relative to the air.)</p>
<p><strong>Worked example 1 — moving source.</strong> An ambulance siren at f = 700 Hz approaches a stationary pedestrian at 30 m/s (v = 343 m/s):</p>
<p>f′ = 700 × 343/(343 − 30) = 700 × 343/313 ≈ <strong>767 Hz</strong></p>
<p>After it passes: f′ = 700 × 343/(343 + 30) = 700 × 343/373 ≈ <strong>644 Hz</strong>. The listener hears the pitch fall by about two semitones as it sweeps by — the source itself never changes.</p>
<p><strong>Worked example 2 — moving observer.</strong> You drive at 25 m/s toward a stationary 700 Hz siren: f′ = 700 × (343 + 25)/343 ≈ <strong>751 Hz</strong>. Note the asymmetry with example 1: source motion and observer motion give slightly different shifts, because sound's speed is fixed relative to the <em>air</em>, not relative to either party.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Astronomers apply the same idea to light: spectral lines from galaxies arrive shifted toward the red (lower frequency), showing the galaxies recede — Hubble's evidence for the expanding universe. Radar speed guns, medical Doppler ultrasound measuring blood flow, and exoplanet hunting via stellar wobble all run on this one effect.</p>
</div>
<div class="key-concept">
  <h4>Frequency Shift ⇒ Relative Speed</h4>
  <p>Invert the formula and a measured frequency shift hands you the speed of something you may never touch — a car, blood cells, a galaxy. The Doppler effect is physics' universal speedometer.</p>
</div>`,
        },
        {
          id: "shock-waves",
          title: "Shock Waves: When the Source Outruns the Sound",
          content: `
<p>Push the Doppler formula toward v_src = v and something breaks: the frequency heard ahead of the source diverges to infinity. Physically, the source is catching up with its own wavefronts. At exactly the speed of sound they pile up into a single intense pressure wall riding on the aircraft's nose — the old "sound barrier" that early jets had to punch through.</p>
<p>Go <em>faster</em> than sound and the geometry reorganizes. The source now leaves each spherical wavefront behind, and the spheres stack into a cone trailing the source — a <strong>shock wave</strong>, or Mach cone. The half-angle θ of the cone follows from a right triangle: in time t the sound expands a distance vt while the source travels v_src t, so:</p>
<p><strong>sin θ = v/v_src = 1/M</strong></p>
<p>where <strong>M = v_src/v</strong> is the <strong>Mach number</strong>. The faster the flight, the narrower the cone.</p>
<p><strong>Worked example.</strong> A jet flies at Mach 2.0 where v = 320 m/s (high, cold air): v_src = 640 m/s and sin θ = 1/2, so θ = 30°. An observer on the ground hears nothing as the jet passes overhead — then the cone's edge sweeps across them and the accumulated pressure jump arrives all at once: a <strong>sonic boom</strong>. The boom is not a one-time event "when the plane breaks the barrier"; the cone drags along the entire supersonic flight path, booming everyone it crosses in turn.</p>
<ul>
  <li>A crack of a bullwhip is a miniature sonic boom — the tip goes supersonic.</li>
  <li>A boat's V-shaped bow wake is the same physics in 2D: the boat outruns the water waves it makes.</li>
  <li>Thunder is a shock wave from air exploding outward along the superheated lightning channel.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Outrunning Your Own Ripples</h3>
  <p>Wade slowly through a pond and ripples spread ahead of you, announcing your approach. Sprint faster than the ripples travel and no warning can get ahead — everything you make piles into a wedge dragging behind you. A supersonic jet is exactly this: silence, then the wedge, all at once.</p>
</div>
<div class="key-concept">
  <h4>Waves Cannot Warn Faster Than They Travel</h4>
  <p>The Mach cone marks the boundary between "has heard the jet" and "has no idea it exists." Nothing carried by a wave can outrun the wave itself — an idea that returns with force in special relativity, where the wave is light.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A sound's intensity increases by a factor of 1000. By how much does its decibel level rise?",
          options: [
            "1000 dB",
            "3 dB",
            "100 dB",
            "30 dB",
          ],
          correctIndex: 3,
          explanation:
            "β = 10 log₁₀(I/I₀), so a ×1000 = 10³ intensity ratio adds 10 × 3 = 30 dB. Every factor of 10 in intensity is +10 dB; decibels turn multiplication of intensities into addition.",
        },
        {
          question:
            "Two identical machines each produce 80 dB alone. Running both together gives approximately...",
          options: [
            "160 dB",
            "83 dB",
            "86 dB",
            "80 dB",
          ],
          correctIndex: 1,
          explanation:
            "Two machines double the intensity, and doubling intensity adds 10 log 2 ≈ 3 dB, giving 83 dB. Decibel levels never simply add — 160 dB would be a hundred million times the actual combined intensity.",
        },
        {
          question:
            "A 500 Hz siren moves away from a stationary listener at 34.3 m/s (take v = 343 m/s). What frequency is heard?",
          options: [
            "550 Hz",
            "500 Hz",
            "455 Hz",
            "545 Hz",
          ],
          correctIndex: 2,
          explanation:
            "Receding source: f′ = f v/(v + v_src) = 500 × 343/377.3 ≈ 455 Hz. Recession stretches the wavelengths behind the source, lowering the pitch — the falling half of the classic ambulance 'eee-yooo.'",
        },
        {
          question:
            "A jet's Mach cone has a half-angle of 30°. How fast is the jet flying?",
          options: [
            "At Mach 2 — twice the speed of sound",
            "At exactly the speed of sound",
            "At Mach 0.5 — half the speed of sound",
            "At Mach 3 — sin 30° sets M = 3",
          ],
          correctIndex: 0,
          explanation:
            "The cone angle obeys sin θ = 1/M. With sin 30° = 0.5, M = 2: the jet travels at twice the sound speed. Faster flight narrows the cone; at exactly Mach 1 the 'cone' is a flat wall of piled-up wavefronts at 90°.",
        },
        {
          question:
            "Why does a stationary listener hear a different Doppler shift from a source approaching at 30 m/s than a listener approaching a stationary source at 30 m/s?",
          options: [
            "They don't — only relative velocity can matter",
            "The moving listener's ears physically compress the sound",
            "Sound moves at a fixed speed relative to the air, so moving the source (which squeezes wavelengths) differs from moving the observer (who sweeps up wavefronts faster)",
            "The approaching source also gets louder, which raises its pitch",
          ],
          correctIndex: 2,
          explanation:
            "Sound needs a medium, and its speed is fixed relative to that medium. A moving source genuinely shortens the wavelengths in the air; a moving observer meets unchanged wavelengths more often. The formulas f v/(v − v_src) and f (v + v_obs)/v differ slightly at the same speed. (For light, with no medium, only relative velocity survives — a hint of relativity.) Loudness has no effect on pitch.",
        },
      ],
    },
    {
      id: "wave-optics",
      title: "Wave Optics",
      subtitle: "Interference and diffraction — the experiments that prove light is a wave",
      sections: [
        {
          id: "huygens-principle",
          title: "Huygens' Principle: Every Point a New Source",
          content: `
<p>In 1678 Christiaan Huygens proposed a deceptively simple recipe for predicting how any wave moves forward: <strong>treat every point on a wavefront as a tiny source of circular (spherical) wavelets; a moment later, the new wavefront is the surface that just touches all of them</strong>. That is the whole principle — and it quietly explains almost everything in this chapter.</p>
<ul>
  <li><strong>Straight-line travel:</strong> for a broad wavefront, the wavelets' envelope is simply the wavefront moved forward — light appears to travel in rays.</li>
  <li><strong>Reflection:</strong> wavelets bouncing off a mirror reconstruct a wavefront leaving at the same angle it arrived — the law of reflection drops out of geometry.</li>
  <li><strong>Refraction:</strong> if the wavelets expand more slowly in glass than air, the envelope of a wavefront entering glass at an angle pivots — the wavefront bends toward the normal. Snell's law follows, and it <em>requires</em> light to travel slower in the denser medium. (Newton's rival particle theory predicted faster — the wave picture won when the speed of light in water was finally measured.)</li>
  <li><strong>Diffraction:</strong> block most of a wavefront with a barrier containing a small gap, and only the wavelets in the gap survive. If the gap is comparable to λ, those few wavelets spread in near-circular arcs — the wave bends around the edges.</li>
</ul>
<p>Diffraction is the tell-tale. Sound (λ ≈ 1 m) diffracts generously around doorways, which is why you hear a conversation from the next room without seeing the speakers. Light's wavelength is a few hundred <em>nanometres</em>, so its diffraction around everyday objects is imperceptible — light seems to travel in perfect rays, and for centuries that hid its wave nature.</p>
<div class="analogy">
  <h3>Analogy: The Marching Band</h3>
  <p>A band marching from firm pavement into deep mud at an angle pivots: the first marchers to hit mud slow down while their far-side colleagues still stride on pavement, wheeling the whole line toward the normal. That is refraction, performed by people.</p>
</div>
<div class="key-concept">
  <h4>Wavelength Sets the Scale of Wave Behavior</h4>
  <p>Waves noticeably bend and interfere around obstacles comparable to their wavelength. The rule of the whole chapter: to reveal light's wave nature, build apparatus with features close to light's tiny λ — slits micrometres apart. That is precisely what Young did next.</p>
</div>`,
        },
        {
          id: "double-slit-interference",
          title: "Young's Double Slit: λ = xd/D",
          content: `
<p>In 1801 Thomas Young let light pass through two narrow slits, very close together, onto a distant screen. Particle thinking predicts two bright stripes, one behind each slit. What appears instead is a whole <em>series</em> of evenly spaced bright and dark fringes — an interference pattern. Light was adding and cancelling. Light is a wave.</p>
<p>The two slits act as synchronized sources (the same wavefront feeds both). At any point on the screen, what matters is the <strong>path difference</strong> between the two routes, exactly as with the two loudspeakers in Chapter 2. For slit separation d and a point at angle θ from the centreline:</p>
<p><strong>path difference = d sin θ</strong></p>
<ul>
  <li><strong>Bright fringes:</strong> d sin θ = mλ (m = 0, 1, 2, …) — whole wavelengths, constructive.</li>
  <li><strong>Dark fringes:</strong> d sin θ = (m + ½)λ — half-integer, destructive.</li>
</ul>
<p>For a screen at distance D ≫ d, the small-angle approximation (Subject 10 again: sin θ ≈ tan θ ≈ θ in radians) turns this geometry into the workhorse formula for the <strong>fringe spacing x</strong> (centre-to-centre distance of adjacent bright fringes):</p>
<p><strong>x = λD/d</strong>, usually remembered as <strong>λ = xd/D</strong></p>
<p><strong>Worked example.</strong> Red laser light passes through slits d = 0.25 mm apart onto a screen D = 2.0 m away, and the bright fringes are measured x = 5.1 mm apart:</p>
<p>λ = xd/D = (5.1 × 10⁻³ × 0.25 × 10⁻³)/2.0 ≈ 6.4 × 10⁻⁷ m = <strong>640 nm</strong></p>
<p>With a ruler, a metre stick, and two scratches in a slide, Young-style apparatus measures a length of well under a thousandth of a millimetre. The pattern also predicts sensibly: halve the slit separation d and the fringes spread twice as far apart; switch to blue light (smaller λ) and they crowd together.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>The double slit is arguably physics' most important experiment. Repeated with electrons — even fired one at a time — it produces the same fringes, forcing the quantum conclusion that single particles interfere with themselves. Subject 15 picks up that story; the geometry you just learned carries over unchanged.</p>
</div>
<div class="key-concept">
  <h4>One Formula, Three Levers</h4>
  <p>x = λD/d: fringes widen with longer wavelength, a more distant screen, or closer slits. Every double-slit exam question is one of these three levers in disguise.</p>
</div>`,
        },
        {
          id: "diffraction-and-gratings",
          title: "Single Slits and Diffraction Gratings",
          content: `
<p>Even <em>one</em> slit makes a pattern. Huygens wavelets from different parts of a single slit of width a interfere with each other, producing a bright central band flanked by weaker fringes, with <strong>dark</strong> minima at:</p>
<p><strong>a sin θ = mλ</strong> (m = 1, 2, 3, …)</p>
<p>Note the reversal: for a single slit this condition gives <em>darkness</em> (the slit's wavelets pair off and cancel), whereas for two slits d sin θ = mλ gave brightness. The central maximum is twice the width of the side fringes, and the narrower the slit, the <em>wider</em> the spread — confinement begets divergence, a theme that returns as the uncertainty principle.</p>
<p>Now scale up: instead of two slits, rule <em>thousands</em> of them, equally spaced — a <strong>diffraction grating</strong>. The bright-fringe condition is the same as the double slit's:</p>
<p><strong>d sin θ = mλ</strong></p>
<p>where d is now the spacing between adjacent lines and m is the <strong>order</strong>. The transformation is in the quality: with N slits contributing, the maxima become dramatically sharper and brighter — knife-thin lines on a dark background instead of broad soft fringes — because at any angle even slightly off a maximum, the thousands of contributions find partners to cancel with.</p>
<p><strong>Worked example.</strong> A grating stamped "600 lines/mm" has d = 1/600 mm = 1.67 × 10⁻⁶ m. For green light, λ = 546 nm:</p>
<ul>
  <li>m = 1: sin θ = λ/d = 546 × 10⁻⁹/1.67 × 10⁻⁶ = 0.327 → θ ≈ <strong>19.1°</strong></li>
  <li>m = 2: sin θ = 0.655 → θ ≈ <strong>40.9°</strong></li>
  <li>m = 3: sin θ = 0.982 → θ ≈ 79.1°; m = 4 would need sin θ > 1 — impossible, so only three orders exist.</li>
</ul>
<p>Because θ depends on λ, a grating fans different wavelengths to different angles: it is a precision <strong>spectrometer</strong>. Shine starlight through one and the spectrum's bright and dark lines fingerprint the elements present — how we know what stars are made of without leaving home.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>The rainbow shimmer of a CD or DVD is a reflection grating at work: the data tracks are spaced about 1.6 μm (CD) or 0.74 μm (DVD) apart — the right scale to diffract visible light into vivid orders.</p>
</div>`,
        },
        {
          id: "polarization",
          title: "Polarization: Proof That Light Waves Sideways",
          content: `
<p>Interference proved light is a wave; polarization tells us what <em>kind</em>. A longitudinal wave has only one way to oscillate — along its travel direction. A transverse wave has a choice of sideways directions, and that choice is called <strong>polarization</strong>. Light can be polarized; therefore light is a transverse wave, its electric field oscillating perpendicular to the ray.</p>
<p>Ordinary light from the Sun or a lamp is <strong>unpolarized</strong> — a rapid random jumble of all transverse directions. A <strong>polarizing filter</strong> (Polaroid) contains long aligned molecules that absorb the field component along one axis and pass the perpendicular component. Unpolarized light emerging from a polarizer is polarized along the filter's transmission axis, with <strong>half</strong> its original intensity (averaging over all input angles).</p>
<p>Send that polarized light through a <em>second</em> filter (an "analyser") at angle θ to the first, and only the component of the oscillation along the new axis survives. Qualitatively — this is <strong>Malus's law</strong> territory:</p>
<ul>
  <li>θ = 0° (parallel): essentially all of it passes.</li>
  <li>θ increases: transmission falls smoothly — the amplitude is projected by cos θ, so intensity falls as cos²θ (amplitude squared, as always).</li>
  <li>θ = 90° (crossed): <strong>nothing</strong> passes. Two crossed polaroids are black.</li>
</ul>
<p>The crossed-polaroid blackout is the party trick that convinces: rotate one filter over the other and watch the view breathe from clear to black and back.</p>
<p>Polarization also happens naturally. Light reflecting off horizontal surfaces — water, wet roads, car hoods — comes away partially polarized <strong>horizontally</strong>. Polarized sunglasses are simply analysers with a <em>vertical</em> transmission axis: they selectively delete that horizontal glare while dimming the rest of the scene only mildly. Tilt your head 90° and the glare blazes back — try it.</p>
<div class="key-concept">
  <h4>Only Transverse Waves Can Be Polarized</h4>
  <p>Sound can never be polarized — a longitudinal wave has no sideways component to filter. Any wave that shows polarization is certified transverse. This single observable settled the geometry of light in the early 1800s.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>LCD screens work by electrically twisting the polarization of light between two crossed polarizers, pixel by pixel. Look at a laptop screen through polarized sunglasses and rotate it — at some angle the screen goes dark: you have crossed your glasses with the display's output polarizer. Bees, unlike us, see sky polarization directly and navigate by it.</p>
</div>`,
        },
        {
          id: "thin-films",
          title: "Thin Films: Interference Paints the Soap Bubble",
          content: `
<p>The swirling colours on a soap bubble or an oily puddle are interference made visible in daylight. A thin transparent film has two reflecting surfaces — top and bottom — so every incoming wave splits: part reflects off the top, part travels through, reflects off the bottom, and rejoins the first. Two copies of the same wave with a built-in path difference: the double slit, folded into a film.</p>
<p>Two ingredients set the outcome:</p>
<ul>
  <li><strong>The extra path.</strong> The second reflection travels an extra distance ≈ 2t (film thickness t, near-normal viewing), measured in the wavelength <em>inside the film</em>, λ_film = λ/n, where n is the film's refractive index — remember from Chapter 1 that λ shrinks where the wave slows.</li>
  <li><strong>Reflection phase flips.</strong> A wave reflecting off a <em>slower</em> medium (higher n) flips phase by half a cycle — like a string pulse inverting off a fixed end. Reflecting off a <em>faster</em> medium, it doesn't. For a soap film in air, only the top reflection flips, contributing a built-in half-wavelength offset.</li>
</ul>
<p>For a soap-type film (one phase flip), the conditions invert from the intuitive ones:</p>
<p><strong>Constructive (bright):</strong> 2t = (m + ½) λ/n &nbsp;&nbsp; <strong>Destructive (dark):</strong> 2t = m λ/n</p>
<p><strong>Worked example.</strong> A soap film (n = 1.33) strongly reflects green light of λ = 532 nm at near-normal incidence. The thinnest film that works has 2t = ½ × 532/1.33 nm, so t = 532/(4 × 1.33) = <strong>100 nm</strong> — a film 500 times thinner than a hair, measured by its colour alone.</p>
<p>Because the condition depends on λ, each thickness reflects some colours strongly and cancels others — as the film drains and thins, the colours flow. Just before a bubble pops, its thinnest patch (t ≪ λ) goes <strong>black</strong>: only the phase flip remains, and the two reflections cancel for every visible wavelength.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Anti-reflective lens coatings run this logic in reverse: a λ/4-thick layer of magnesium fluoride (n = 1.38) on glass makes the two reflections cancel, so more light passes through. Camera lenses stack many such layers; the faint purple-green sheen you see on them is the residue of the wavelengths the coating cancels least well.</p>
</div>
<div class="key-concept">
  <h4>Count Both the Path and the Flips</h4>
  <p>Thin-film problems are bookkeeping: total phase difference = path term 2t/(λ/n) in cycles, plus half a cycle for each surface where light reflects off a higher-n medium (net effect from the pair of surfaces). Whole cycles → bright; half-odd cycles → dark.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "In a double-slit experiment, light of wavelength 500 nm passes through slits 0.20 mm apart onto a screen 1.6 m away. What is the fringe spacing?",
          options: [
            "4.0 mm",
            "0.4 mm",
            "16 mm",
            "1.0 mm",
          ],
          correctIndex: 0,
          explanation:
            "x = λD/d = (500 × 10⁻⁹ × 1.6)/(0.20 × 10⁻³) = 4.0 × 10⁻³ m = 4.0 mm. Wider spacing needs longer λ, larger D, or closer slits — the three levers of the fringe formula.",
        },
        {
          question:
            "Why does sound audibly bend around a doorway while light appears not to?",
          options: [
            "Light is absorbed by the door frame",
            "Sound travels faster than light indoors",
            "Diffraction is strong when the gap is comparable to the wavelength: ≈ 1 m sound waves fit a doorway; ≈ 500 nm light waves do not",
            "Sound is a transverse wave, so it can change direction",
          ],
          correctIndex: 2,
          explanation:
            "Waves spread significantly through openings comparable to their wavelength. Audible sound (λ from centimetres to metres) matches doorways; visible light's sub-micrometre wavelength makes its bending around such a gap utterly negligible. (Sound is longitudinal, and speed has nothing to do with it.)",
        },
        {
          question:
            "Light of wavelength 600 nm strikes a grating with 500 lines/mm. At what angle does the first-order maximum appear?",
          options: [
            "8.6°",
            "17.5°",
            "30.0°",
            "36.9°",
          ],
          correctIndex: 1,
          explanation:
            "d = 1/500 mm = 2.0 × 10⁻⁶ m. First order: sin θ = λ/d = 600 × 10⁻⁹/2.0 × 10⁻⁶ = 0.30, so θ = sin⁻¹(0.30) ≈ 17.5°. Longer wavelengths diffract to larger angles, which is how a grating splits light into a spectrum.",
        },
        {
          question:
            "Unpolarized light passes through a polarizing filter, then a second filter rotated 90° to the first. What emerges?",
          options: [
            "Half the original intensity, polarized diagonally",
            "A quarter of the original intensity",
            "The full original intensity, repolarized",
            "Nothing — crossed polarizers transmit no light",
          ],
          correctIndex: 3,
          explanation:
            "The first filter passes half the unpolarized light, polarized along its axis. The second, at 90°, asks for the component perpendicular to that polarization — which is zero (Malus: intensity ∝ cos²90° = 0). Crossed polaroids are black; this is also why polarization proves light is transverse.",
        },
        {
          question:
            "Why does the thinnest region of a soap film look black just before the bubble pops?",
          options: [
            "The film becomes too thin to reflect any light",
            "With negligible path difference, the half-cycle phase flip at the top surface makes the two reflections cancel for all visible wavelengths",
            "The soap molecules absorb all colours equally at that thickness",
            "Light speeds up in the thin film and misses the eye",
          ],
          correctIndex: 1,
          explanation:
            "When t ≪ λ the path difference ≈ 0, but the top reflection (air → soap, low n to high n) still flips phase by half a cycle while the bottom one does not. The two reflected waves are in antiphase for every visible λ, so the reflection cancels across the spectrum — the film reflects almost nothing and looks black.",
        },
      ],
    },
    {
      id: "ray-optics-quantitative",
      title: "Ray Optics Quantitative",
      subtitle: "Mirror and lens equations, instruments, and the limits of resolution",
      sections: [
        {
          id: "mirror-equation",
          title: "The Mirror Equation: Ray Diagrams Become Algebra",
          content: `
<p>Phase 2's ray diagrams showed <em>where</em> a curved mirror forms an image; now one equation predicts it exactly. For a spherical mirror of focal length f (equal to half its radius of curvature, f = R/2), with the object a distance d₀ away and the image forming at distance dᵢ:</p>
<p><strong>1/f = 1/d₀ + 1/dᵢ</strong></p>
<p>and the <strong>magnification</strong> is</p>
<p><strong>m = −dᵢ/d₀</strong></p>
<p>The equations only work with a sign convention. The standard one:</p>
<table>
  <thead>
    <tr><th>Quantity</th><th>Positive</th><th>Negative</th></tr>
  </thead>
  <tbody>
    <tr><td>f</td><td>Concave (converging) mirror</td><td>Convex (diverging) mirror</td></tr>
    <tr><td>dᵢ</td><td>Real image (in front, projectable)</td><td>Virtual image (behind the mirror)</td></tr>
    <tr><td>m</td><td>Upright image</td><td>Inverted image</td></tr>
  </tbody>
</table>
<p><strong>Worked example 1.</strong> A candle stands 30 cm from a concave mirror with f = +10 cm:</p>
<p>1/dᵢ = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → dᵢ = <strong>+15 cm</strong></p>
<p>m = −15/30 = <strong>−0.5</strong>: a real, inverted image, half-size, 15 cm in front of the mirror — you could catch it on a card.</p>
<p><strong>Worked example 2.</strong> Move the candle inside the focal point, to d₀ = 5 cm: 1/dᵢ = 1/10 − 1/5 = −1/10 → dᵢ = <strong>−10 cm</strong>, m = −(−10)/5 = <strong>+2</strong>. The image is virtual (behind the mirror), upright, and doubled — the makeup-mirror configuration. Same mirror, different distance, opposite character: the algebra tracks it effortlessly.</p>
<p><strong>Worked example 3.</strong> A convex security mirror (f = −20 cm) viewing a person at 100 cm: 1/dᵢ = −1/20 − 1/100 = −6/100 → dᵢ ≈ −16.7 cm, m ≈ +0.17. Always virtual, upright, shrunken — a wide-angle view, which is exactly why shops use them.</p>
<div class="key-concept">
  <h4>Trust the Signs</h4>
  <p>The power of the formula is that the <em>signs</em> of the answers describe the image. dᵢ > 0: real. dᵢ < 0: virtual. m < 0: inverted. |m| > 1: enlarged. Compute first, interpret after.</p>
</div>`,
        },
        {
          id: "lens-equation",
          title: "The Thin Lens Equation at Work",
          content: `
<p>Remarkably, thin lenses obey the <em>same</em> equation as mirrors:</p>
<p><strong>1/f = 1/d₀ + 1/dᵢ</strong>, with <strong>m = −dᵢ/d₀</strong></p>
<p>Only the geometry of the signs shifts: light passes <em>through</em> a lens, so a real image (dᵢ > 0) forms on the <strong>far</strong> side, where a screen or sensor can catch it. Convex (converging) lenses have f > 0; concave (diverging) lenses have f < 0 and, alone, only ever make reduced virtual images.</p>
<p><strong>Worked example 1 — the camera.</strong> A lens of f = +50 mm photographs a subject 2.0 m away:</p>
<p>1/dᵢ = 1/0.050 − 1/2.0 = 20 − 0.5 = 19.5 → dᵢ ≈ <strong>51.3 mm</strong></p>
<p>The sensor must sit 51.3 mm behind the lens — and focusing a camera is literally moving the lens those extra 1.3 mm away from the sensor as subjects get closer. For a distant mountain (d₀ → ∞), 1/d₀ → 0 and dᵢ = f exactly: <em>the focal length is where far-away images land</em>.</p>
<p><strong>Worked example 2 — the magnifying glass.</strong> Hold a stamp 5 cm from a f = +10 cm lens (inside the focal length):</p>
<p>1/dᵢ = 1/10 − 1/5 = −1/10 → dᵢ = <strong>−10 cm</strong>, m = +2</p>
<p>A virtual, upright, doubled image on the <em>same</em> side as the stamp — you look through the lens and see it floating there, enlarged. Every magnifying glass works in this regime; push the object past f and the image flips, inverts, and becomes projectable instead.</p>
<table>
  <thead>
    <tr><th>Object position (converging lens)</th><th>Image</th></tr>
  </thead>
  <tbody>
    <tr><td>d₀ > 2f</td><td>Real, inverted, reduced (camera)</td></tr>
    <tr><td>2f > d₀ > f</td><td>Real, inverted, enlarged (projector)</td></tr>
    <tr><td>d₀ < f</td><td>Virtual, upright, enlarged (magnifier)</td></tr>
  </tbody>
</table>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Optometrists work in <strong>dioptres</strong> — lens power P = 1/f with f in metres, so a +2.0 D reading lens has f = 0.5 m. The convenience: powers of thin lenses in contact simply add. Your eye's cornea-plus-lens system is about +60 D; a typical prescription is a few dioptres of fine-tuning on top.</p>
</div>
<div class="key-concept">
  <h4>One Equation, Every Instrument</h4>
  <p>Camera, projector, magnifier — one formula, three regimes, distinguished only by where the object sits relative to f. The next section chains two lenses together and gets the microscope and telescope for free.</p>
</div>`,
        },
        {
          id: "optical-instruments",
          title: "Microscopes and Telescopes: Lenses in Series",
          content: `
<p>The serious instruments are two-lens machines, built on one simple idea: <strong>the image formed by the first lens becomes the object for the second</strong>. Apply the lens equation twice and multiply the magnifications.</p>
<p><strong>The compound microscope</strong> attacks tiny, near objects:</p>
<ol>
  <li>The <strong>objective</strong> (very short f, millimetres) sits just beyond its focal length from the specimen, forming a <em>real, inverted, greatly enlarged</em> image inside the tube — a projector in miniature.</li>
  <li>The <strong>eyepiece</strong> is positioned so that this real image lies just inside <em>its</em> focal length, and acts as a magnifying glass on it.</li>
</ol>
<p>The overall magnification is the product: a 40× objective with a 10× eyepiece gives 400×. Multiplication is the whole secret — two modest stages compound into a large total.</p>
<p><strong>The astronomical telescope</strong> attacks huge, distant objects. Magnifying a star's <em>size</em> is meaningless; what a telescope magnifies is <strong>angle</strong>. Parallel rays from a distant object form a real image exactly at the objective's focal point (dᵢ = f, as the camera example showed); the eyepiece, its own focal point placed at the same spot, magnifies that image. The angular magnification is:</p>
<p><strong>M = f_objective / f_eyepiece</strong></p>
<p><strong>Worked example.</strong> An amateur telescope with f_obj = 900 mm and a 10 mm eyepiece gives M = 90×: the Moon, half a degree wide to the naked eye, spans 45° of your view — a wall of craters. Swap in a 25 mm eyepiece for M = 36× and a wider, brighter field. Eyepieces are interchangeable precisely because M is a ratio.</p>
<p>Note both instruments invert the image — harmless for craters and cells, which is why astronomical telescopes skip the extra correcting optics that binoculars include.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Big research telescopes use a concave <em>mirror</em> as the objective — the mirror equation doing the work — because mirrors have no chromatic aberration, can be supported from behind, and can be made enormous. The largest single-aperture telescopes now under construction approach 40 m across; the reason size matters so much is the subject of the final section.</p>
</div>
<div class="key-concept">
  <h4>Chain Rule for Optics</h4>
  <p>Image of lens 1 → object of lens 2; total magnification = product of stages. This composition idea scales to any optical train — zoom lenses, periscopes, relay optics — and it is just the lens equation applied patiently, twice or more.</p>
</div>`,
        },
        {
          id: "resolution-limits",
          title: "The Diffraction Limit: Why Bigger Optics See Finer Detail",
          content: `
<p>If magnification multiplies, why not stack eyepieces forever and read license plates on the Moon? Because wave optics sends the bill. Every aperture — lens rim, mirror edge, pupil — diffracts. Light from a point source passing through a circular aperture of diameter D cannot focus to a point; it lands as a small blurred disc (the Airy pattern) of angular radius:</p>
<p><strong>θ_min ≈ 1.22 λ/D</strong> (radians)</p>
<p>Two point sources closer together in angle than θ_min blur into one blob no matter how much you magnify — magnifying a diffraction blur yields a bigger blur. This is the <strong>Rayleigh criterion</strong>, the resolution limit of any optical instrument. The two levers are visible in the formula: <strong>shorter wavelength or bigger aperture → finer resolution</strong>.</p>
<p><strong>Worked example 1 — the eye.</strong> Pupil D ≈ 3 mm in daylight, λ ≈ 550 nm:</p>
<p>θ_min ≈ 1.22 × 550 × 10⁻⁹ / 0.003 ≈ 2.2 × 10⁻⁴ rad</p>
<p>At 10 m that is a separation of 10 × 2.2 × 10⁻⁴ ≈ 2.2 mm — about the finest print you can genuinely resolve across a room, and close to the actual spacing of cones on your retina. Evolution built the sensor to match the diffraction limit of the aperture.</p>
<p><strong>Worked example 2 — a telescope.</strong> A 200 mm (8-inch) amateur mirror: θ_min ≈ 1.22 × 550 × 10⁻⁹/0.20 ≈ 3.4 × 10⁻⁶ rad — sixty-plus times sharper than the eye, and enough to split close double stars. The 2.4 m Hubble does ~12× better again, not because it is in space per se, but because D is bigger and the atmosphere's turbulence is absent.</p>
<ul>
  <li>Radio telescopes must be enormous (or linked across continents) because λ is metres — the λ in the numerator is brutal.</li>
  <li>Microscopes cannot resolve detail much finer than ~λ/2 ≈ 250 nm with visible light — viruses are invisible to light microscopy. Electron microscopes win by using electron wavelengths thousands of times shorter (Subject 15).</li>
  <li>Camera lenses stopped down to tiny apertures go <em>soft</em>: less light and more diffraction.</li>
</ul>
<div class="key-concept">
  <h4>The Wave Always Has the Last Word</h4>
  <p>This subject began by treating light as rays and ended with rays overruled by waves. Every lens and mirror equation holds only down to the scale ~λ/D, where diffraction takes over. Sharper vision means shorter λ or bigger D — there is no third option, and no amount of magnification changes it.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An object sits 40 cm from a concave mirror of focal length 10 cm. Where is the image, and what is it like?",
          options: [
            "40 cm behind the mirror, virtual and upright",
            "8 cm in front, real and enlarged",
            "13.3 cm in front of the mirror: real, inverted, and one-third the size",
            "At the focal point, infinitely magnified",
          ],
          correctIndex: 2,
          explanation:
            "1/dᵢ = 1/10 − 1/40 = 3/40, so dᵢ = 13.3 cm (positive → real, in front). m = −13.3/40 = −0.33: inverted and reduced to a third. Objects far outside the focal length always give real, inverted, shrunken images — the camera regime.",
        },
        {
          question:
            "A stamp is placed 6 cm from a converging lens of focal length 12 cm. The image is...",
          options: [
            "virtual, upright, and enlarged — the magnifying-glass configuration",
            "real, inverted, and reduced",
            "real, upright, and the same size",
            "virtual, inverted, and reduced",
          ],
          correctIndex: 0,
          explanation:
            "With the object inside the focal length: 1/dᵢ = 1/12 − 1/6 = −1/12, so dᵢ = −12 cm (virtual, same side) and m = −(−12)/6 = +2 (upright, doubled). Every magnifying glass operates in this d₀ < f regime.",
        },
        {
          question:
            "A telescope has a 1200 mm focal-length objective. Which eyepiece gives 60× angular magnification?",
          options: [
            "60 mm",
            "12 mm",
            "5 mm",
            "20 mm",
          ],
          correctIndex: 3,
          explanation:
            "M = f_objective/f_eyepiece, so f_eyepiece = 1200/60 = 20 mm. Shorter eyepieces give more magnification from the same objective — which is why eyepieces are swappable and sold by focal length.",
        },
        {
          question:
            "Two stars are separated by 1 × 10⁻⁶ rad. Which change would allow a telescope that cannot split them to resolve the pair?",
          options: [
            "Doubling the eyepiece magnification",
            "Using a larger-diameter objective mirror",
            "Observing at a longer (redder) wavelength",
            "Making the exposure time longer",
          ],
          correctIndex: 1,
          explanation:
            "Resolution is set by diffraction: θ_min ≈ 1.22 λ/D. Only increasing the aperture D (or shortening λ) shrinks θ_min. More magnification just enlarges the merged diffraction blur, longer wavelengths make it worse, and exposure time affects brightness, not sharpness.",
        },
        {
          question:
            "Why can't an ordinary light microscope image a 100 nm virus, no matter how good its lenses are?",
          options: [
            "Diffraction limits resolution to roughly half the wavelength of light, and visible light's ~500 nm wavelength blurs anything much smaller than ~250 nm",
            "Glass lenses absorb all light at that scale",
            "Viruses are transparent and reflect no light",
            "The lens equation stops applying below one micrometre",
          ],
          correctIndex: 0,
          explanation:
            "The wave nature of light caps resolution near λ/2 ≈ 250 nm for visible light — a 100 nm virus is beneath the diffraction limit, so its image is an undifferentiated blur regardless of lens quality. Electron microscopes see viruses because electrons can have wavelengths thousands of times shorter, a de Broglie result waiting in Subject 15.",
        },
      ],
    },
  ],
};
