export const subject7 = {
  id: "sound-light-optics",
  number: 7,
  title: "Sound, Light & Optics",
  description:
    "From vibrating strings to rainbows: your first pass through waves, sound, mirrors, lenses, and the electromagnetic spectrum — the physics of everything you see and hear.",
  phase: 2,
  chapters: [
    {
      id: "sound",
      title: "Sound",
      subtitle:
        "Vibrations traveling through air — pitch, loudness, echoes, and ultrasound",
      sections: [
        {
          id: "everything-that-sounds-vibrates",
          title: "Everything That Sounds, Vibrates",
          content: `
<p>Touch your throat and hum. That buzz under your fingertips is the whole secret of sound: <strong>every sound begins as a vibration</strong>. A guitar string flutters back and forth, a drumhead trembles, your vocal cords open and close hundreds of times per second. The vibrating object shoves the air molecules next to it; those molecules shove their neighbours; the shove travels outward as a ripple of squeezed and stretched air. When that ripple reaches your ear, it pushes your eardrum in and out in the same rhythm, and your brain hears sound.</p>
<p>Notice what travels and what does not. The air itself does not fly from the guitar to your ear — each molecule just jiggles around its home spot and passes the push along. What crosses the room is the <strong>pattern of compressions</strong>, and the energy it carries. That makes sound our first real example of a <em>wave</em>: a travelling disturbance, not travelling stuff.</p>
<div class="analogy">
  <h3>Analogy: The Stadium Wave</h3>
  <p>In a stadium wave, no spectator runs around the arena — each person just stands up and sits down at the right moment. Yet "the wave" visibly races through the crowd. Sound moves through air exactly this way: molecules bob in place while the disturbance sprints past them.</p>
</div>
<p>Because sound is molecules pushing molecules, it needs a material to travel through — air, water, wood, bone, anything with particles to pass the push along. This is why a ringing alarm clock sealed inside a jar goes silent as the air is pumped out: the clapper still hammers away, but with no molecules to shove, no sound escapes.</p>
<ul>
  <li><strong>Solids</strong> carry sound best — their particles are packed tight and spring-connected. Put your ear on a table and tap the far end.</li>
  <li><strong>Liquids</strong> carry it well — whales call to each other across kilometres of ocean.</li>
  <li><strong>Gases</strong> carry it more slowly and weakly — but well enough for every conversation you have ever had.</li>
  <li><strong>Vacuum</strong> carries no sound at all. Space battles are silent, whatever the movies say.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Sound is a travelling vibration passed from particle to particle through a medium. No medium, no sound — the energy moves, the material stays put.</p>
</div>`,
        },
        {
          id: "the-speed-of-sound",
          title: "How Fast Does Sound Travel?",
          content: `
<p>Watch someone hammering a fence post from far across a field and you will see the hammer strike, then hear the clang a beat later. Light reaches you almost instantly; sound takes its time. In air at room temperature, sound travels at about <strong>343 metres per second</strong> — roughly 1,235 km/h, or about 1 kilometre every 3 seconds.</p>
<p>That number is not fixed. Sound is molecules shoving molecules, so anything that changes how quickly the shove passes along changes the speed:</p>
<table>
  <thead>
    <tr><th>Medium</th><th>Speed of sound</th></tr>
  </thead>
  <tbody>
    <tr><td>Air (20 °C)</td><td>≈ 343 m/s</td></tr>
    <tr><td>Air (0 °C)</td><td>≈ 331 m/s</td></tr>
    <tr><td>Water</td><td>≈ 1,480 m/s</td></tr>
    <tr><td>Steel</td><td>≈ 5,900 m/s</td></tr>
  </tbody>
</table>
<p>The pattern surprises many people: sound is <strong>faster in liquids than in gases, and fastest in stiff solids</strong>. Tightly bonded particles pass the push along almost instantly, like a shove travelling down a line of people holding rigid poles rather than loose ropes. Warmer air is slightly faster than cold air because its molecules are already moving quickly and deliver their collisions sooner.</p>
<div class="key-concept">
  <h4>Worked Example: How Far Is the Storm?</h4>
  <p>You see a lightning flash and count 6 seconds before the thunder. Light arrives essentially instantly, so the delay is all sound. Distance = speed × time = 343 m/s × 6 s ≈ 2,060 m. The strike was about <strong>2 km away</strong>. Handy rule: every 3 seconds of delay ≈ 1 km (every 5 seconds ≈ 1 mile).</p>
</div>
<p>Compare 343 m/s with light's 300,000 <em>kilometres</em> per second and you see why we always see before we hear: fireworks bloom silently, then boom; a distant bat strikes the ball before the crack reaches the stands. Jet aircraft can outrun their own sound — flying past the "sound barrier" piles the pressure ripples into a single shock wave that reaches the ground as a sonic boom.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Orchestras tune before every concert partly because the speed of sound in air shifts with temperature — and so does the pitch of wind instruments. A cold hall literally plays flat until it warms up.</p>
</div>`,
        },
        {
          id: "pitch-and-loudness",
          title: "Pitch and Loudness: Frequency and Amplitude",
          content: `
<p>Two knobs control what a sound is like. How <em>often</em> the source vibrates sets the <strong>pitch</strong>; how <em>far</em> it swings sets the <strong>loudness</strong>. Physics gives each knob a name.</p>
<p><strong>Frequency</strong> is the number of complete vibrations per second, measured in <strong>hertz (Hz)</strong>. A string vibrating 262 times per second produces 262 compressions of air per second, and you hear middle C. Double the frequency and you hear the same note an octave higher. Concert orchestras tune to A at 440 Hz. High frequency = high pitch; low frequency = low pitch — a mosquito's wings beat around 600 times per second (a whine), a bumblebee's about 130 (a hum).</p>
<p><strong>Amplitude</strong> is the size of the vibration — how far the string swings, how strongly the air is compressed. Pluck gently and the string barely moves: small amplitude, soft sound. Pluck hard and the same note comes out loud. Amplitude carries the energy; frequency carries the identity of the note. Loudness is commonly quoted in decibels (dB) — whisper ≈ 30 dB, conversation ≈ 60 dB, rock concert ≈ 110 dB — a scale you will meet properly in the second pass.</p>
<ul>
  <li>Human hearing spans roughly <strong>20 Hz to 20,000 Hz</strong>. The top end fades with age — many adults cannot hear above ≈ 15,000 Hz.</li>
  <li>Below 20 Hz is <strong>infrasound</strong> (elephants and storms rumble here); above 20,000 Hz is <strong>ultrasound</strong> (dogs, bats, dolphins).</li>
  <li>Pitch and loudness are independent: a piccolo can play a high note quietly, a tuba a low note thunderously.</li>
</ul>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Press a ruler flat on a table with about 20 cm hanging over the edge, then twang the free end. Now slide it in so only 10 cm overhangs and twang again: the shorter overhang vibrates faster and the pitch jumps up. Twang harder without moving the ruler — same pitch, more loudness. You have just separated frequency (length of the vibrating part) from amplitude (how hard you pluck) with your own hands.</p>
</div>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Frequency (vibrations per second, in Hz) determines pitch. Amplitude (size of the vibration) determines loudness. They are separate dials — every combination of high/low and loud/soft is possible.</p>
</div>`,
        },
        {
          id: "echoes-and-ultrasound",
          title: "Echoes, Sonar, and Seeing with Sound",
          content: `
<p>Shout at a cliff and the cliff shouts back. Sound, like any wave, <strong>reflects</strong> when it hits a large obstacle, and a reflection you hear separately from the original is an <strong>echo</strong>. Your ear needs roughly a tenth of a second between the original and the reflection to notice two sounds, so a distinct echo needs a wall at least about 17 m away — sound must cover the round trip of 34 m in 0.1 s. Closer walls still reflect, but the reflections blur into the original as the reverberation that makes bathrooms flattering to singers and empty halls boomy.</p>
<div class="key-concept">
  <h4>Worked Example: Echo Ranging</h4>
  <p>A ship's sonar pings straight down and hears the echo 1.2 s later. Sound in seawater travels ≈ 1,500 m/s, so the ping covered 1,500 × 1.2 = 1,800 m — <em>down and back</em>. The seabed is half that: <strong>900 m deep</strong>. Divide by two is the step everyone forgets; the sound made a round trip.</p>
</div>
<p>Turning echoes into measurements is called <strong>echolocation</strong>, and it is everywhere:</p>
<ul>
  <li><strong>Sonar</strong> maps the seafloor, finds shipwrecks and fish shoals, and guides submarines — light barely penetrates deep water, but sound travels kilometres.</li>
  <li><strong>Bats</strong> shriek ultrasonic chirps (up to ≈ 100,000 Hz) and steer through pitch-dark caves by the returning echoes, catching moths on the wing.</li>
  <li><strong>Parking sensors</strong> in car bumpers ping obstacles and beep faster as the echo time shrinks.</li>
</ul>
<p>The medical star is <strong>ultrasound imaging</strong>. Sound above 20,000 Hz is inaudible but reflects beautifully from boundaries between tissues. A probe on the skin sends millions of tiny pulses (typically 2–18 million Hz), times the echoes from each depth, and a computer paints the reflections into a live image — a beating heart, blood flow, or a baby sucking its thumb months before birth. Unlike X-rays, ultrasound deposits no ionising radiation, which is why it is the imaging tool of choice in pregnancy.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Some blind people navigate by clicking their tongues and reading the returning echoes — human echolocation. Brain scans show their visual cortex lights up while they do it: they are, in a real sense, seeing with sound.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Why can no sound cross the vacuum of space?",
          options: [
            "Sound waves are too slow to escape a planet's gravity",
            "Sound needs particles to pass the vibration along, and a vacuum has none",
            "It is too cold in space for sound to form",
            "Sound is absorbed by starlight",
          ],
          correctIndex: 1,
          explanation:
            "Sound is a vibration handed from particle to particle. In a vacuum there are no molecules to shove one another, so the disturbance has nothing to travel through — the energy simply cannot propagate.",
        },
        {
          question:
            "You see lightning and hear thunder 9 seconds later. Roughly how far away was the strike? (Sound travels ≈ 343 m/s.)",
          options: [
            "About 3 km",
            "About 300 m",
            "About 9 km",
            "About 30 km",
          ],
          correctIndex: 0,
          explanation:
            "Light arrives almost instantly, so the 9 s delay is all sound: 343 m/s × 9 s ≈ 3,100 m ≈ 3 km. The quick rule — 3 seconds per kilometre — gives the same answer.",
        },
        {
          question:
            "A guitarist plucks the same string twice: first gently, then hard. What changes?",
          options: [
            "The pitch rises because the string vibrates faster",
            "Both pitch and loudness rise together",
            "The loudness increases but the pitch stays the same",
            "Nothing changes — plucking force has no effect",
          ],
          correctIndex: 2,
          explanation:
            "Plucking harder increases the amplitude (how far the string swings), so the sound is louder. The frequency — set by the string's length, tension, and thickness — is unchanged, so the pitch stays the same. Frequency and amplitude are independent dials.",
        },
        {
          question:
            "In which medium does sound travel fastest?",
          options: [
            "Warm air",
            "Cold air",
            "Water",
            "Steel",
          ],
          correctIndex: 3,
          explanation:
            "Sound speeds up as particles couple more stiffly: ≈ 343 m/s in air, ≈ 1,480 m/s in water, and ≈ 5,900 m/s in steel. Tightly bonded solid particles pass the vibration along almost instantly — which is why you hear an approaching train through the rails before you hear it through the air.",
        },
        {
          question:
            "A sonar ping returns from the seabed after 2 s. Sound in seawater travels ≈ 1,500 m/s. How deep is the water?",
          options: [
            "3,000 m",
            "1,500 m",
            "750 m",
            "6,000 m",
          ],
          correctIndex: 1,
          explanation:
            "The ping travelled 1,500 m/s × 2 s = 3,000 m in total, but that distance covers the trip down AND back up. The depth is half: 1,500 m. Forgetting to halve the round trip is the classic sonar mistake.",
        },
      ],
    },
    {
      id: "wave-basics",
      title: "Wave Basics",
      subtitle:
        "Transverse and longitudinal waves, and the master formula v = fλ",
      sections: [
        {
          id: "two-ways-to-wave",
          title: "Two Ways to Wave: Transverse and Longitudinal",
          content: `
<p>Drop a pebble in a pond and rings spread outward. Shout across a canyon and your voice crosses it. A radio signal slips through your walls. These are all <strong>waves</strong> — travelling disturbances that carry <em>energy</em> from place to place <em>without carrying material</em>. The pond water does not migrate to the shore; a bobbing duck just moves up and down as the rings pass beneath it.</p>
<p>Every wave in nature moves in one of two basic styles, and a stretched slinky can demonstrate both:</p>
<ul>
  <li><strong>Transverse waves:</strong> shake one end of the slinky <em>side to side</em> and a snake-like wiggle runs along it. The coils move <strong>perpendicular</strong> to the direction the wave travels. Water ripples, waves on guitar strings, and — crucially — <strong>light</strong> are transverse.</li>
  <li><strong>Longitudinal waves:</strong> push and pull the slinky <em>along its own length</em> and you will see bunched-up regions race down the spring. The coils move <strong>back and forth along</strong> the travel direction, creating alternating squeezes (<em>compressions</em>) and stretches (<em>rarefactions</em>). <strong>Sound</strong> is longitudinal: air is squeezed and released, over and over, all the way to your ear.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Flag vs. Traffic Jam</h3>
  <p>A flag rippling in the wind is transverse — each patch of cloth flaps sideways while the ripple runs along the flag. A motorway traffic jam is longitudinal — cars bunch up and spread out along the same line they drive in, and the "wave" of brake lights travels backwards down the road while every car keeps pointing forward.</p>
</div>
<p>Why care about the difference? Because the style of vibration decides what a wave can do. Transverse waves can be <em>polarised</em> (filtered by orientation — how polarised sunglasses cut glare), longitudinal waves cannot. And some waves need a medium while others do not: sound must have air, water, or rock to squeeze, but light's transverse wiggle is carried by electric and magnetic fields themselves, so it crosses the emptiness of space with ease — which is why you can see the Sun but never hear it.</p>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>A wave transports energy, not matter. If the medium vibrates across the travel direction, the wave is transverse (light, water ripples); if it vibrates along the travel direction, it is longitudinal (sound).</p>
</div>`,
        },
        {
          id: "wave-anatomy",
          title: "The Anatomy of a Wave",
          interactive: "wave-superposition",
          content: `
<p>To do physics with waves we need to measure them, and it takes only four numbers to describe any simple wave completely. Picture a snapshot of ripples frozen in time: a repeating chain of high points (<strong>crests</strong>) and low points (<strong>troughs</strong>).</p>
<ul>
  <li><strong>Wavelength (λ, "lambda"):</strong> the length of one complete cycle — crest to next crest, or trough to next trough. Measured in metres. For a sound wave it is the distance from one compression to the next.</li>
  <li><strong>Amplitude:</strong> the maximum displacement from the rest position — how tall the crests are, measured from the middle line, not trough to crest. Amplitude is the wave's <em>energy</em> dial: bigger amplitude means brighter light, louder sound, taller ocean swell.</li>
  <li><strong>Frequency (f):</strong> how many complete cycles pass a fixed point each second, in hertz (Hz). Stand on a pier and count crests passing per second — that is the frequency.</li>
  <li><strong>Period (T):</strong> the time for one complete cycle to pass. It is simply the flip side of frequency: T = 1/f. A wave with f = 4 Hz has a period of 0.25 s.</li>
</ul>
<p>Frequency has a special property: it is stamped on the wave by its <strong>source</strong> and never changes afterwards. A 440 Hz tuning fork makes 440 compressions per second whether the sound then travels through air, water, or a wall — the receiving end must wiggle 440 times per second too. Wavelength, by contrast, stretches or shrinks when the wave changes speed in a new medium. Remember: <strong>frequency belongs to the source; wavelength adjusts to the medium</strong>.</p>
<div class="analogy">
  <h3>Analogy: A Marching Band</h3>
  <p>Watch a marching band from a bridge. The drummer sets how many rows step past you per minute (frequency). The spacing between rows is the wavelength. If the band suddenly marches into mud and slows down, rows bunch closer together — same frequency, shorter wavelength. Waves entering a slower medium do exactly this.</p>
</div>
<p>Use the interactive below to build waves and watch these quantities in action: slide the frequency up and see the cycles crowd together; raise the amplitude and watch the crests grow; then add a second wave and see how overlapping waves stack — crest on crest reinforcing, crest on trough cancelling. That stacking behaviour, called superposition, is a wave signature nothing else in physics shares.</p>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Wavelength λ = length of one cycle (m). Frequency f = cycles per second (Hz). Amplitude = maximum displacement, and it carries the energy. Period T = 1/f. Frequency is fixed by the source; wavelength adapts to the medium.</p>
</div>`,
        },
        {
          id: "the-master-formula",
          title: "v = fλ: The One Formula Every Wave Obeys",
          content: `
<p>Here is the most important equation of this entire subject, and one of the most universal in physics:</p>
<p style="text-align:center;"><strong>wave speed = frequency × wavelength&nbsp;&nbsp;&nbsp;v = fλ</strong></p>
<p>It is really just common sense in symbols. If 5 waves pass you every second (f = 5 Hz), and each wave is 2 m long (λ = 2 m), then 5 × 2 = 10 metres of wave march past per second: v = 10 m/s. Frequency counts the cycles; wavelength measures each one; multiply and you get the speed of the parade.</p>
<div class="key-concept">
  <h4>Worked Example 1: The Length of a Musical Note</h4>
  <p>Concert A has f = 440 Hz, and sound in air travels v = 343 m/s. Rearranged, λ = v / f = 343 / 440 ≈ <strong>0.78 m</strong>. Each cycle of that note is about the length of your arm. A low bass note at 55 Hz stretches λ = 343 / 55 ≈ 6.2 m — longer than a car, which is one reason bass rolls around corners and through walls so easily.</p>
</div>
<div class="key-concept">
  <h4>Worked Example 2: Radio</h4>
  <p>An FM station broadcasts at 100 MHz (100,000,000 Hz). Radio is a light-family wave, so v = 300,000,000 m/s. λ = 300,000,000 / 100,000,000 = <strong>3 m</strong>. FM antennas are sized around this wavelength — that is why they are metre-scale rods, not centimetre studs.</p>
</div>
<p>Three habits make the formula foolproof:</p>
<ol>
  <li><strong>Keep the units straight:</strong> f in Hz, λ in metres, v in m/s. Convert kHz and MHz to Hz before multiplying.</li>
  <li><strong>Know which quantity is fixed.</strong> In one medium, v is set by the medium (343 m/s for air), so f and λ trade off: double the frequency, halve the wavelength.</li>
  <li><strong>Rearrange freely:</strong> f = v/λ and λ = v/f are the same statement. Cover the symbol you want in the triangle v over f·λ if that helps.</li>
</ol>
<p>The reach of this little equation is astonishing. It governs ripples in your teacup, sound in a concert hall, light from a star, radio from a satellite, X-rays in a hospital, and — as you will meet in the quantum subjects — even electrons, which turn out to have wavelengths of their own. Learn v = fλ once, and you will use it for the rest of the course.</p>`,
        },
        {
          id: "waves-carry-energy",
          title: "What Waves Deliver: Energy on the Move",
          content: `
<p>Why does the universe bother with waves? Because they are nature's delivery service: they move <strong>energy and information</strong> from one place to another without shipping any material. Sunlight crosses 150 million km of empty space and still warms your face — no substance made the trip, yet energy clearly arrived. An earthquake in the seafloor rattles buildings hundreds of kilometres away. A phone call rides radio waves from a tower to your pocket. In each case something real was transported — energy — while the medium (if there even was one) stayed home, only trembling in place.</p>
<p>How much energy a wave delivers depends chiefly on its <strong>amplitude</strong>. Doubling the amplitude of a wave more than doubles its energy — for many waves, quadruples it. That is why amplitude differences feel so dramatic:</p>
<ul>
  <li>A 1 m ocean swell rocks a boat; a 10 m tsunami flattens a town.</li>
  <li>A whisper barely moves your eardrum; a jet engine at close range can damage it permanently.</li>
  <li>Gentle sunlight tans slowly; a focused laser of the same colour but huge amplitude cuts steel.</li>
</ul>
<p>Waves also do things particles cannot, and these behaviours will be your recurring test for "is this a wave?" throughout physics:</p>
<ul>
  <li><strong>Reflection:</strong> waves bounce off barriers (echoes, mirrors — the next chapter).</li>
  <li><strong>Refraction:</strong> waves bend when they change speed in a new medium (the chapter after).</li>
  <li><strong>Diffraction:</strong> waves bend around edges and spread through gaps — why you hear music through a doorway before you see the band.</li>
  <li><strong>Superposition:</strong> two waves pass through each other and simply add — crest on crest grows, crest on trough cancels — then continue unchanged, as you saw in the simulator.</li>
</ul>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Noise-cancelling headphones are applied superposition. A microphone samples the incoming noise, a chip generates the same wave flipped upside down — trough where the noise has crest — and the two add to near-silence in your ear canal. You are listening to deliberate, engineered cancellation.</p>
</div>
<p>Hold on to this picture: a wave is a travelling pattern that carries energy, described by amplitude, wavelength, and frequency, obeying v = fλ. Sound demonstrated it; light is about to run with it.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "In a longitudinal wave, the particles of the medium move…",
          options: [
            "perpendicular to the direction the wave travels",
            "in circles around the wave's path",
            "back and forth along the direction the wave travels",
            "not at all — only the energy moves",
          ],
          correctIndex: 2,
          explanation:
            "Longitudinal waves like sound vibrate the medium along the travel direction, creating compressions and rarefactions. (Transverse waves vibrate perpendicular to travel.) The particles do move — they oscillate about fixed positions — but they are not carried along with the wave.",
        },
        {
          question:
            "A wave has frequency 50 Hz and wavelength 4 m. What is its speed?",
          options: [
            "200 m/s",
            "12.5 m/s",
            "54 m/s",
            "0.08 m/s",
          ],
          correctIndex: 0,
          explanation:
            "v = fλ = 50 Hz × 4 m = 200 m/s. Fifty cycles pass per second, each 4 m long, so 200 metres of wave stream past every second.",
        },
        {
          question:
            "Which property of a wave is set by the source and does NOT change when the wave enters a new medium?",
          options: [
            "Wavelength",
            "Speed",
            "Amplitude",
            "Frequency",
          ],
          correctIndex: 3,
          explanation:
            "Frequency is stamped on the wave by its source — the new medium must wiggle at the same rate the wave arrives. Speed changes with the medium, and wavelength adjusts to match via λ = v/f, like marching rows bunching up when the band hits mud.",
        },
        {
          question:
            "Sound travels at 343 m/s in air. What is the wavelength of a 686 Hz whistle?",
          options: [
            "2 m",
            "0.5 m",
            "343 m",
            "235,000 m",
          ],
          correctIndex: 1,
          explanation:
            "λ = v / f = 343 / 686 = 0.5 m. Notice the trade-off: this frequency is high (twice 343), so the wavelength comes out short (half a metre). In a fixed medium, higher frequency always means shorter wavelength.",
        },
        {
          question:
            "Why can you see the Sun but never hear it, despite its violently roiling surface?",
          options: [
            "The Sun is too far away for any wave to reach us",
            "Light is transverse and needs no medium, but sound needs matter to travel through — and space is a near-vacuum",
            "The Sun's sound is at frequencies too low for human ears",
            "Light travels faster, so the sound has not arrived yet",
          ],
          correctIndex: 1,
          explanation:
            "Light's vibrating electric and magnetic fields carry themselves through empty space, but sound is a mechanical wave — it must squeeze a medium, and the near-vacuum between Sun and Earth gives it nothing to squeeze. The Sun does roar with pressure waves internally, but they can never cross the gap to us.",
        },
      ],
    },
    {
      id: "reflection-and-mirrors",
      title: "Reflection & Mirrors",
      subtitle:
        "The law of reflection and the images formed by plane and curved mirrors",
      sections: [
        {
          id: "light-in-straight-lines",
          title: "Rays and the Law of Reflection",
          content: `
<p>Optics begins with one simplifying idea: in a uniform material, <strong>light travels in straight lines</strong>. Sunbeams slicing through dusty air, laser pointers, the crisp edges of shadows — all testify to it. So we draw light as <strong>rays</strong>: straight arrows showing the direction of travel. A ray is not a thing; it is a bookkeeping device, and it is powerful enough to explain every mirror, lens, camera, and telescope in this subject.</p>
<p>When a ray strikes a surface and bounces, it obeys one beautifully simple rule, the <strong>law of reflection</strong>. Draw the <strong>normal</strong> — an imaginary line perpendicular to the surface at the point of impact. Measure the incoming ray's angle from that normal (the <em>angle of incidence</em>, i) and the outgoing ray's angle from the same normal (the <em>angle of reflection</em>, r). Then, always and everywhere:</p>
<p style="text-align:center;"><strong>angle of incidence = angle of reflection&nbsp;&nbsp;(i = r)</strong></p>
<p>A ray arriving at 30° from the normal leaves at 30° on the other side; a ray arriving head-on (0°) bounces straight back. Billiards players know this law in their bones — a ball banked off a cushion follows the same geometry.</p>
<p>Why, then, can you see your face in polished steel but not in brushed concrete, when both reflect light?</p>
<ul>
  <li><strong>Specular reflection:</strong> a surface smooth at microscopic scale (mirror, calm water) reflects parallel rays as parallel rays. The organised bundle preserves the picture — you get an image.</li>
  <li><strong>Diffuse reflection:</strong> a rough surface (paper, skin, walls) obeys i = r at every point, but the surface tilts every which way, so the rays scatter in all directions. No image survives — but scattering is exactly why you can see the object at all, from anywhere in the room.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Every reflection, from a shaving mirror to a satellite dish, obeys i = r measured from the normal. Smooth surfaces keep rays organised and form images (specular); rough surfaces scatter them and merely make objects visible (diffuse).</p>
</div>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Apollo astronauts left suitcase-sized reflector panels on the Moon. Observatories still fire lasers at them and time the reflection — about 2.5 seconds for the round trip — measuring the Moon's distance to millimetre precision. The measurements show the Moon spiralling away from Earth by 3.8 cm per year.</p>
</div>`,
        },
        {
          id: "plane-mirror-images",
          title: "The Person Behind the Glass: Plane Mirrors",
          content: `
<p>Look into a flat (plane) mirror and someone looks back — apparently standing <em>behind</em> the glass. There is nobody there, of course. Here is what actually happens: rays leave your face, reflect off the mirror obeying i = r, and enter your eye. Your brain, which always assumes light travels in straight lines, traces those diverging rays <em>backwards</em> — and the backward extensions meet at a point behind the mirror. That meeting point is where your brain places the image.</p>
<p>Because no light actually passes through or comes from that point, it is called a <strong>virtual image</strong>. You cannot catch it on a screen held behind the mirror; there is nothing there to catch. Yet its geometry is precise:</p>
<ul>
  <li>The image is exactly <strong>as far behind the mirror as you are in front</strong>. Stand 2 m away and your image stands 2 m behind the glass — 4 m from you, which is why your eyes focus on it as a distant object.</li>
  <li>The image is <strong>the same size</strong> as you, upright, and moves with you — step back 1 m and it retreats 1 m.</li>
  <li>The image is <strong>reversed front-to-back</strong>. The mirror does not actually swap left and right — your right hand is still on your right side of the glass. It swaps <em>towards-and-away</em>: your nose points at you, and that front-back flip is what makes text appear "mirror writing" and makes your reflection seem left-right swapped.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: The Half-Height Mirror</h4>
  <p>To see your full body you need a mirror only <strong>half your height</strong>, no matter how far you stand from it. Geometry: the ray from your toes to your eye bounces off the mirror at its halfway point (i = r), so the glass below eye-level need only reach halfway down to your toes' level. Try marking a large mirror with sticky notes at the points where you see your hairline and toes — the notes will span half your height at any distance.</p>
</div>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Stand two small mirrors upright at 90° to each other (a hinged makeup mirror works). Look into the corner: the double reflection flips your image front-to-back <em>twice</em>, so you see yourself as others see you — un-reversed. Wink your right eye and, unlike in a single mirror, the eye on your right as you see it winks back. Text held up to the corner reads normally.</p>
</div>
<p>Plane mirrors are the simplest image-formers in optics — every ray honestly obeys one law, and a life-size virtual twin appears. Curve the mirror, though, and far stranger and more useful things happen.</p>`,
        },
        {
          id: "curved-mirrors",
          title: "Curved Mirrors: Focusing and Spreading Light",
          content: `
<p>Bend a mirror and you gain a superpower: the ability to <strong>concentrate or spread</strong> light, not just redirect it. Each point of the curved surface still obeys i = r — but because the surface tilts continuously, the reflected rays converge or diverge on purpose. Both kinds live in your kitchen: the inside of a polished spoon is a <strong>concave</strong> mirror (caves inward), the back is a <strong>convex</strong> mirror (bulges outward).</p>
<p><strong>Concave mirrors</strong> collect. Rays arriving parallel to the axis (as from something distant) reflect inward and cross at one spot — the <strong>focal point</strong>, at a distance called the focal length, f, from the mirror. What you see depends on where the object sits:</p>
<ul>
  <li><strong>Object beyond the focal point:</strong> the reflected rays really do cross, forming a <strong>real, inverted image</strong> — one you can project onto a screen. Look into a spoon's bowl at arm's length and your tiny reflection is upside down.</li>
  <li><strong>Object inside the focal point:</strong> the rays diverge after reflecting, and tracing them backwards gives a <strong>virtual, upright, magnified image</strong>. This is the shaving and makeup mirror: lean in close and your face looms larger.</li>
</ul>
<p>Run the light the other way and concave mirrors become beam-makers: put a bulb <em>at</em> the focal point and reflected rays leave parallel — the principle of torches, car headlights, and lighthouse beams. Aimed at the sky, big concave mirrors gather faint starlight to a focus: every major telescope on Earth (and Webb in space) is built around one.</p>
<p><strong>Convex mirrors</strong> scatter. Parallel rays reflect outward as if from a focal point <em>behind</em> the mirror, so a convex mirror always shows a <strong>virtual, upright, shrunken</strong> image — of a very wide scene. That trade of size for field of view makes them the mirrors of safety: shop-corner domes, blind-driveway mirrors, and the passenger-side mirror stamped <em>"objects in mirror are closer than they appear"</em> — the shrunken image fools your brain into judging cars smaller and farther than they are.</p>
<table>
  <thead>
    <tr><th>Mirror</th><th>Image</th><th>Used for</th></tr>
  </thead>
  <tbody>
    <tr><td>Plane</td><td>Virtual, upright, same size</td><td>Dressing, decorating</td></tr>
    <tr><td>Concave (object close)</td><td>Virtual, upright, magnified</td><td>Makeup, shaving, dentistry</td></tr>
    <tr><td>Concave (object far)</td><td>Real, inverted</td><td>Telescopes, headlights (reversed), solar furnaces</td></tr>
    <tr><td>Convex</td><td>Virtual, upright, smaller, wide view</td><td>Security, car mirrors</td></tr>
  </tbody>
</table>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Hold a shiny tablespoon at arm's length, bowl towards you: you are beyond its focal point, so your face is small and upside down. Bring it slowly closer than the focal length (a few centimetres) and your image flips upright and swells. Turn the spoon over — the convex back always shows you upright, shrunken, and set in a wide little world, exactly like a security mirror.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A light ray strikes a plane mirror at 25° from the normal. At what angle does it reflect?",
          options: [
            "50° from the normal",
            "65° from the normal",
            "25° from the normal",
            "It depends on the mirror's material",
          ],
          correctIndex: 2,
          explanation:
            "The law of reflection says angle of incidence = angle of reflection, both measured from the normal (the perpendicular to the surface). In at 25°, out at 25° — for every mirror, always. (65° would be the answer only if angles were measured from the surface itself.)",
        },
        {
          question:
            "Why can't you project your bathroom-mirror image onto a piece of paper held behind the mirror?",
          options: [
            "The image is virtual — no light actually passes through the point where it appears",
            "The mirror absorbs too much light for projection",
            "The paper would need to be photographic film",
            "You can — if the room is dark enough",
          ],
          correctIndex: 0,
          explanation:
            "A plane mirror's image is virtual: your brain traces the reflected rays backwards to a point behind the glass, but no rays are actually there. Only real images — where rays genuinely converge, as from a concave mirror or a camera lens — can land on a screen.",
        },
        {
          question:
            "You stand 1.5 m in front of a plane mirror. How far is your image from you?",
          options: [
            "1.5 m",
            "3.0 m",
            "0.75 m",
            "It depends on the mirror's size",
          ],
          correctIndex: 1,
          explanation:
            "The image forms as far behind the mirror as you stand in front: 1.5 m behind the glass. Your distance to it is 1.5 + 1.5 = 3.0 m — which is why your eyes must refocus when you glance from the mirror frame to your own reflection.",
        },
        {
          question:
            "Why do shops and driveways use convex mirrors rather than plane or concave ones?",
          options: [
            "Convex mirrors magnify intruders so they are easier to identify",
            "Convex mirrors form real images that can be recorded",
            "Convex mirrors are the only mirrors that work in dim light",
            "Convex mirrors show a much wider field of view, at the cost of a smaller image",
          ],
          correctIndex: 3,
          explanation:
            "A convex mirror spreads reflected rays outward, packing a wide scene into one small upright image — ideal for watching a whole aisle or a hidden driveway at a glance. The shrunken image is the price, which is why car door mirrors warn that objects are closer than they appear.",
        },
        {
          question:
            "A torch bulb is placed exactly at the focal point of a concave mirror. What does the reflected light do?",
          options: [
            "It converges back onto the bulb",
            "It emerges as a parallel beam",
            "It forms an upside-down image of the bulb on the wall",
            "It scatters evenly in all directions",
          ],
          correctIndex: 1,
          explanation:
            "Rays from the focal point reflect off the concave surface and leave parallel to the axis — reflection run in reverse. This is precisely how torches, headlights, and lighthouses turn a small bulb into a straight, far-reaching beam.",
        },
      ],
    },
    {
      id: "refraction-and-lenses",
      title: "Refraction & Lenses",
      subtitle:
        "Bending light: total internal reflection, optical fibres, and ray diagrams for lenses",
      sections: [
        {
          id: "bending-light",
          title: "Refraction: Why Light Bends",
          content: `
<p>Put a straw in a glass of water and it appears snapped at the surface. Coins at the bottom of pools look closer than they are; spear-fishers must aim <em>below</em> the fish they see. Behind all these illusions is <strong>refraction</strong>: light changes direction when it crosses from one transparent material into another.</p>
<p>The cause is a change of <strong>speed</strong>. Light's famous 300,000 km/s is its speed in vacuum; in materials it is slower — about 225,000 km/s in water and 200,000 km/s in glass. Each material has a <strong>refractive index</strong>, n: how many times slower light moves there than in vacuum (water n ≈ 1.33, glass n ≈ 1.5, diamond n ≈ 2.4). When a ray crosses a boundary at an angle, one side of the beam slows before the other, and the beam swings around.</p>
<div class="analogy">
  <h3>Analogy: The Shopping Trolley on the Lawn</h3>
  <p>Push a trolley at an angle from smooth pavement onto grass. The wheel that hits the grass first slows while the other still rolls freely, so the trolley pivots towards the grass side. Light entering glass at an angle does the same — the edge that enters first is held back, and the ray bends. Leaving the grass, the first-freed wheel speeds ahead and the trolley swings the other way.</p>
</div>
<p>The rules to remember, always measuring angles from the normal:</p>
<ul>
  <li>Entering a <strong>slower</strong> medium (air → water, air → glass): the ray bends <strong>towards the normal</strong>.</li>
  <li>Entering a <strong>faster</strong> medium (glass → air): the ray bends <strong>away from the normal</strong>.</li>
  <li>Hitting the boundary <strong>head-on</strong> (along the normal): the ray slows but does not bend.</li>
  <li>Frequency never changes at the boundary — the wavelength shrinks or stretches instead, exactly as v = fλ demands.</li>
</ul>
<p>Refraction is why the pool floor looks raised (rays from the bottom bend away from the normal as they exit, and your brain traces them straight back to a shallower point), why stars twinkle (starlight refracts through churning layers of air of different densities), and why the setting Sun is still visible when it is geometrically below the horizon — the atmosphere bends its light around the curve of the Earth by about half a degree, the Sun's own width.</p>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Light bends at a boundary because it changes speed. Slower medium: bend towards the normal. Faster medium: bend away. Every lens in the world — including the two in your head — is engineered refraction.</p>
</div>`,
        },
        {
          id: "total-internal-reflection",
          title: "Trapped Light: Total Internal Reflection and Optical Fibres",
          content: `
<p>Refraction has a dramatic breaking point. Picture a ray trying to leave glass into air. It bends <em>away</em> from the normal on exit — the outgoing ray leans ever closer to the surface as you steepen the angle inside. At one particular angle of incidence, the <strong>critical angle</strong>, the refracted ray skims exactly along the surface. Push past it and the light cannot get out at all: the boundary behaves as a perfect mirror and reflects 100% of the light back inside. This is <strong>total internal reflection</strong> (TIR).</p>
<ul>
  <li>It only happens going from a <strong>slower medium towards a faster one</strong> (glass → air, water → air) — never on the way in.</li>
  <li>The critical angle depends on the material: about <strong>49°</strong> for water, <strong>42°</strong> for ordinary glass, and a mere <strong>24°</strong> for diamond.</li>
  <li>Unlike metal mirrors, which absorb a few percent of the light at each bounce, TIR is genuinely <em>total</em> — lossless, bounce after bounce.</li>
</ul>
<p>Diamond's tiny critical angle explains its fire: light entering a well-cut stone finds almost every internal surface beyond 24°, so it ricochets around inside and finally blazes out through the top facets. Swimmers see TIR too — look up from underwater at a shallow angle and the surface turns into a silver mirror reflecting the pool floor.</p>
<div class="key-concept">
  <h4>Key Concept: The Optical Fibre</h4>
  <p>Draw glass into a hair-thin thread and light launched down its core strikes the walls at glancing angles far beyond the critical angle. It ricochets forward by TIR, bounce after lossless bounce, and emerges at the far end — even if the fibre bends and loops. Modern fibres are so pure that a signal can run ~100 km before needing a boost. Bundle thousands of fibres into submarine cables and you have the physical internet: nearly all intercontinental data — this course included — crosses the oceans as flashes of laser light totally internally reflected inside glass threads thinner than fishing line.</p>
</div>
<p>Medicine borrows the same trick: an <strong>endoscope</strong> packs one fibre bundle to pipe light into the body and another to carry the image back, letting surgeons inspect and operate through keyhole incisions. Reflecting prisms in binoculars and periscopes use TIR instead of mirrors for the same reason — no silvering, no loss.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>A signal in optical fibre actually travels slower than radio through air (light in glass moves at about two-thirds speed), but fibre wins on capacity: a single modern fibre pair can carry hundreds of terabits per second — millions of video calls in a strand of glass you could thread through a needle.</p>
</div>`,
        },
        {
          id: "lenses",
          title: "Lenses: Refraction Put to Work",
          content: `
<p>A <strong>lens</strong> is a piece of transparent material shaped so that refraction at its two curved surfaces bends every ray by just the right amount to organise light on purpose. Two families cover everything:</p>
<ul>
  <li><strong>Converging (convex) lenses</strong> — fatter in the middle. Rays arriving parallel to the axis are bent inward and meet at the <strong>focal point</strong>, a distance f (the <strong>focal length</strong>) behind the lens. A fat, strongly curved lens has a short focal length — it is a <em>strong</em> lens. Magnifying glasses, camera lenses, projectors, and your own cornea are converging.</li>
  <li><strong>Diverging (concave) lenses</strong> — thinner in the middle. Parallel rays are spread outward, as if they had come from a virtual focal point <em>in front of</em> the lens. On their own they always produce a smaller, upright, virtual view — you will meet them correcting short sight in the next chapter and taming light inside camera lenses.</li>
</ul>
<p>A converging lens is a double-crossing machine, and where the object sits decides everything:</p>
<ul>
  <li><strong>Object far beyond the focal length:</strong> rays converge to a <strong>real, inverted, shrunken image</strong> just beyond f on the far side. This is the camera and the eye: the vast world imaged small and upside down on a sensor or retina.</li>
  <li><strong>Object just beyond f:</strong> a real, inverted, <strong>enlarged</strong> image forms far behind the lens — the projector, throwing a small slide huge onto a wall (the slide is loaded upside down so the picture comes out right).</li>
  <li><strong>Object closer than f:</strong> the rays leave the lens still spreading; traced backwards they form a <strong>virtual, upright, magnified image</strong>. This is the magnifying glass — the image floats behind the print, larger, on the same side as the object.</li>
</ul>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>On a sunny day, hold a magnifying glass over pavement and move it until the bright blur shrinks to a dazzling dot: you have found its focal length — the dot is a real image of the Sun (careful: it burns; never look at the Sun through it). Indoors, hold the same lens about that distance from a wall facing a bright window: a sharp, upside-down, full-colour image of the window scene appears on the wall. A real image, caught on a screen — exactly what happens on your retina right now.</p>
</div>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Converging lenses bring parallel light to a focal point at distance f; diverging lenses spread it from a virtual focal point. Object outside f → real, inverted image (camera). Object inside f → virtual, upright, magnified image (magnifying glass).</p>
</div>`,
        },
        {
          id: "ray-diagrams-and-magnification",
          title: "Ray Diagrams and Magnification",
          content: `
<p>You can predict any lens image with a pencil, a ruler, and <strong>three special rays</strong> whose paths are known in advance. Draw the lens as a vertical line, the axis through its middle, mark the focal point F at distance f on each side, and stand your object (an upright arrow) on the axis. From the arrow's tip, launch:</p>
<ol>
  <li><strong>The parallel ray:</strong> travels parallel to the axis, then refracts through the far focal point.</li>
  <li><strong>The central ray:</strong> passes straight through the centre of the lens undeviated (the middle acts like flat glass).</li>
  <li><strong>The focal ray:</strong> passes through the near focal point, then leaves the lens parallel to the axis (ray 1 in reverse).</li>
</ol>
<p>Where the rays cross, the image of the tip sits. Any two rays suffice; the third is your check. If the rays cross on the far side, the image is <strong>real and inverted</strong> (drawn below the axis). If they leave the lens still spreading, extend them backwards with dashed lines — they meet on the object's side at a <strong>virtual, upright</strong> image, which is exactly the geometry of a magnifying glass.</p>
<p>How much bigger or smaller? That is <strong>magnification</strong>:</p>
<p style="text-align:center;"><strong>magnification = image height ÷ object height = image distance ÷ object distance</strong></p>
<p>Magnification has no units — it is a pure ratio. m = 3 means three times life size; m = 0.5 means half size; and on your diagram an inverted image gives a flipped arrow.</p>
<div class="key-concept">
  <h4>Worked Example</h4>
  <p>A stamp 2 cm tall sits 6 cm from a magnifying glass, and the ray diagram puts its virtual image 18 cm from the lens. Magnification = 18 ÷ 6 = <strong>3</strong>, so the image height = 3 × 2 cm = <strong>6 cm</strong>. Upright, enlarged, floating behind the stamp — just what a collector sees. For contrast: a camera photographs a 1.8 m person from 6 m with the image forming about 5 cm behind the lens. m = 0.05 ÷ 6 ≈ 0.008, so the image is 1.8 m × 0.008 ≈ 1.5 cm — the whole person, upside down, comfortably inside the camera sensor.</p>
</div>
<p>These humble arrow-and-ruler sketches are the working language of optics. In the next chapter you will chain them — one lens's image becoming the next lens's object — and that single move builds every microscope and telescope ever made. Subject 13 will add the algebra (the thin-lens equation) to make the diagrams fully quantitative.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A ray of light passes from air into glass at an angle. What happens to it?",
          options: [
            "It speeds up and bends away from the normal",
            "It slows down and bends towards the normal",
            "It slows down and bends away from the normal",
            "It continues in a straight line at the same speed",
          ],
          correctIndex: 1,
          explanation:
            "Glass is optically denser: light drops from 300,000 km/s to about 200,000 km/s, and the ray pivots towards the normal — like a trolley swinging as its first wheel hits grass. (Only a ray entering exactly along the normal goes unbent, though it still slows.)",
        },
        {
          question:
            "Total internal reflection can occur only when light travels…",
          options: [
            "from a slower (denser) medium towards a faster one, beyond the critical angle",
            "from a faster medium towards a slower one, beyond the critical angle",
            "between any two media, if the light is bright enough",
            "when light hits any boundary exactly along the normal",
          ],
          correctIndex: 0,
          explanation:
            "TIR needs the ray to be trying to exit into a faster medium (glass → air, water → air) at an angle beyond the critical angle — then the boundary reflects 100% of the light back. Going the other way, some light always gets through, no matter the angle or brightness.",
        },
        {
          question:
            "How do optical fibres carry internet signals across oceans?",
          options: [
            "Electric currents flow through a copper core inside the glass",
            "The glass amplifies radio waves as they pass through",
            "Light ricochets along the glass core by total internal reflection, bounce after lossless bounce",
            "Mirrors coated on the outside of the fibre reflect the light forward",
          ],
          correctIndex: 2,
          explanation:
            "Light launched down the hair-thin core hits the walls beyond the critical angle, so total internal reflection returns it forward with no loss at each bounce — no silvered coating needed. Ultra-pure glass lets the signal run about 100 km between boosts, and bundles of such fibres form the physical backbone of the internet.",
        },
        {
          question:
            "A stamp is placed closer to a converging lens than its focal length. The image is…",
          options: [
            "real, inverted, and smaller",
            "real, inverted, and larger",
            "impossible — no image forms",
            "virtual, upright, and magnified",
          ],
          correctIndex: 3,
          explanation:
            "Inside the focal length the refracted rays still diverge after the lens; traced backwards they form an upright, enlarged, virtual image on the stamp's own side. That is precisely the magnifying-glass arrangement. Real, inverted images only occur when the object sits outside the focal length.",
        },
        {
          question:
            "An object 4 cm tall forms an image 12 cm tall. What is the magnification?",
          options: [
            "0.33",
            "3",
            "48",
            "8",
          ],
          correctIndex: 1,
          explanation:
            "Magnification = image height ÷ object height = 12 ÷ 4 = 3. It is a pure ratio with no units: this image is three times life size. (48 comes from multiplying instead of dividing; 0.33 from dividing the wrong way round.)",
        },
      ],
    },
    {
      id: "the-eye-cameras-and-instruments",
      title: "The Eye, Cameras & Instruments",
      subtitle:
        "Optics applied: vision and its correction, cameras, microscopes, and telescopes",
      sections: [
        {
          id: "the-eye",
          title: "The Eye: A Living Camera",
          content: `
<p>Everything in the last two chapters is running in your head right now, twice. The human eye is a self-focusing, self-cleaning, auto-exposing optical instrument, and by this point in the course you can read its blueprint:</p>
<ul>
  <li><strong>Cornea:</strong> the transparent front window — and, surprisingly, the eye's main lens. The big speed change from air into watery tissue makes the cornea do about two-thirds of all the focusing, fixed and unadjustable.</li>
  <li><strong>Iris and pupil:</strong> the coloured ring is a muscular diaphragm; the pupil is simply the hole in it. In dim light it opens to ≈ 8 mm; in sunshine it narrows to ≈ 2 mm — an automatic aperture.</li>
  <li><strong>Crystalline lens:</strong> a soft converging lens behind the pupil that supplies the adjustable third of the focusing.</li>
  <li><strong>Retina:</strong> the light-sensitive screen at the back where a <strong>real, inverted image</strong> forms — your world arrives upside down, and your brain silently flips it.</li>
</ul>
<p>A camera focuses by moving its lens; the eye does something cleverer — it <strong>reshapes</strong> its lens. Ring muscles around the lens relax for distant scenes, pulling it thin and weak, and tighten for close work, letting it bulge fat and strong. This continuous refocusing is <strong>accommodation</strong>, and you can feel its limit: bring a fingertip towards your nose and it blurs at the <em>near point</em>, about 25 cm for young adults, where the lens can bulge no further. The lens stiffens with age, which is why near points recede and reading glasses appear in most people's forties — presbyopia.</p>
<p>The retina's 100+ million detectors come in two kinds: <strong>rods</strong> (super-sensitive, colour-blind, night vision — peripheral and starlight specialists) and <strong>cones</strong> (colour vision in three types, packed into the central fovea where you point your gaze). One patch has no detectors at all — where the optic nerve exits — yet you never notice the blind spot because the brain seamlessly paints over it.</p>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Draw a small × and a • about 8 cm apart on paper. Close your left eye, stare at the × with your right, and slowly move the page towards you from arm's length. Around 25–30 cm the dot vanishes — its image has landed on your blind spot. Keep staring: the paper appears unbroken, because your brain fabricates the missing patch. You are watching your own visual system make things up.</p>
</div>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Cornea + adjustable lens form a real, inverted image on the retina. Focusing is done by reshaping the lens (accommodation); brightness by the iris; detection by rods (dim, monochrome) and cones (colour).</p>
</div>`,
        },
        {
          id: "vision-correction",
          title: "When Focus Fails: Glasses and Vision Correction",
          content: `
<p>Perfect vision means the eye's optics land a sharp image exactly on the retina for whatever you look at. If the focus falls short of the retina or beyond it, the world blurs — and the fix is beautifully simple lens physics.</p>
<p><strong>Short sight (myopia):</strong> the eyeball is slightly too long, or the cornea too strongly curved, so distant objects focus <em>in front of</em> the retina; by the time the light reaches the screen it has crossed and re-spread into blur. Near objects are fine — their diverging rays push the focus back onto the retina. The cure is a <strong>diverging (concave) lens</strong>: it pre-spreads incoming parallel light just enough that the over-eager eye focuses it on, not before, the retina. Prescriptions for myopia read negative (say, −2.5 dioptres) — a diverging correction.</p>
<p><strong>Long sight (hyperopia):</strong> the eyeball is too short or the optics too weak, so near objects would focus <em>behind</em> the retina — reading becomes the struggle, while distance may stay clear. The cure is a <strong>converging (convex) lens</strong> that adds focusing power; prescriptions read positive (+1.5 dioptres and the like). Age-related <strong>presbyopia</strong> — the stiffening lens that can no longer bulge for close work — is fixed the same way, with reading glasses, or bifocals that put distance correction on top and reading power below.</p>
<table>
  <thead>
    <tr><th>Condition</th><th>Where focus falls</th><th>Blurry range</th><th>Correcting lens</th></tr>
  </thead>
  <tbody>
    <tr><td>Myopia (short sight)</td><td>In front of retina</td><td>Far away</td><td>Diverging (−)</td></tr>
    <tr><td>Hyperopia (long sight)</td><td>Behind retina</td><td>Close up</td><td>Converging (+)</td></tr>
    <tr><td>Presbyopia (ageing lens)</td><td>Behind retina for near objects</td><td>Close up</td><td>Converging (+) for reading</td></tr>
  </tbody>
</table>
<p>Contact lenses are the same corrections floating on the tear film. Laser surgery (LASIK) goes one step further: since the cornea does most of the focusing, reshaping it by a few hundredths of a millimetre — flattening it for myopia — rebuilds the correction into the eye itself. Astigmatism, blur from a cornea curved unevenly (more rugby ball than football), is corrected with lenses ground with different power in different directions.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Myopia is surging worldwide — in some East Asian cities over 80% of school-leavers are short-sighted, roughly double the rate two generations ago. The strongest protective factor found so far is simply time outdoors in daylight: bright light appears to slow the eyeball's elongation during childhood.</p>
</div>`,
        },
        {
          id: "cameras",
          title: "Cameras: Capturing the Image",
          content: `
<p>A camera is an eye rebuilt in metal and silicon, and comparing the two is a masterclass in optics. Both use a converging lens to throw a <strong>real, inverted image</strong> onto a light-sensitive surface; nearly every difference lies in <em>how</em> each one manages focus and light.</p>
<ul>
  <li><strong>Focusing:</strong> your eye reshapes its lens; a camera slides its (rigid glass) lens towards or away from the sensor. Distant subject → lens close to the sensor, near the focal length; close subject → lens racked outward. "Macro" mode is simply permission to rack further.</li>
  <li><strong>Aperture:</strong> an iris of overlapping blades sets the size of the light-admitting hole, quoted as f-numbers (f/2, f/8, f/16 — bigger number, <em>smaller</em> hole). Like your pupil, it manages brightness; unlike your pupil, it also chooses <strong>depth of field</strong>: a wide aperture focuses sharply on one plane and melts the background (portraits), a tiny aperture keeps near and far acceptably sharp (landscapes).</li>
  <li><strong>Shutter:</strong> the eye watches continuously; a camera opens for a measured slice of time — 1/1000 s freezes a hummingbird, a 30 s exposure gathers starlight the eye could never accumulate.</li>
  <li><strong>Sensor:</strong> where the retina has rods and cones, a digital sensor has millions of pixels, each counting the light that lands on it; colour comes from a mosaic of red, green, and blue filters over the pixels — an idea you will recognise in the next chapter.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Exposure Is a Budget</h4>
  <p>A correctly exposed photo needs a set amount of light, spendable three ways: aperture (how wide the tap opens), shutter time (how long it runs), and sensor sensitivity (ISO). Open the aperture one step and you can halve the shutter time. Every camera setting, and every smartphone "night mode," is an allocation of this one budget.</p>
</div>
<p>Strip the idea to its minimum and you get the <strong>pinhole camera</strong> — no lens at all, just a tiny hole in a box. Each point of the scene can send only one narrow ray bundle through the hole, so a dim, inverted image forms on the back wall: straight-line propagation, nothing more. It proves an image needs only geometry; the lens's contribution is brightness (gathering a wide cone of rays per point) and, with it, the need for focusing.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Your smartphone camera's lens is a stack of five to eight tiny moulded plastic lenses, each correcting the flaws of the others, squeezed into a few millimetres — plus software that removes the residual distortion. A century of lens design, folded into your pocket.</p>
</div>`,
        },
        {
          id: "microscopes-and-telescopes",
          title: "Microscopes and Telescopes: Chaining Lenses",
          content: `
<p>One converging lens makes a decent magnifier — around 10× before the image distorts. The breakthrough of the 1600s was the <strong>two-stage instrument</strong>: let one lens form a real image, then examine <em>that image</em> with a second lens as if it were an object. Magnifications multiply, and two modest lenses outperform any single one.</p>
<p><strong>The compound microscope</strong> attacks the very small. A short-focal-length <strong>objective</strong> lens sits just beyond its focal length from the specimen, projecting a real, inverted, enlarged image up the tube. The <strong>eyepiece</strong> then works as a magnifying glass on that image. The powers multiply: a 40× objective with a 10× eyepiece gives <strong>400×</strong> — enough to turn a smear of pond water into a zoo of darting cells. With oil-immersion objectives, light microscopes reach about 1,500×, their practical ceiling (set, as Subject 13 will show, by the wavelength of light itself). It was through such stacked lenses that van Leeuwenhoek and Hooke first saw bacteria and cells in the 1670s — arguably optics' greatest gift to medicine.</p>
<p><strong>The telescope</strong> attacks the very far. A refracting telescope's big objective lens (long focal length) forms a real image of the Moon or a ship at its focal plane; the short-focal-length eyepiece magnifies that image. The angular magnification is the ratio of the focal lengths — objective f = 100 cm with eyepiece f = 5 cm gives 20×, and an inverted view, which astronomers cheerfully ignore. But a telescope's first job is not magnification — it is <strong>light-gathering</strong>. A 10 cm objective collects about 200 times more light than your ≈ 7 mm dark-adapted pupil, unveiling stars far too faint for the naked eye.</p>
<p>Big lenses, however, sag under their own weight and tint the image (different colours focus at slightly different points). Newton's fix in 1668: swap the objective lens for a <strong>concave mirror</strong>, which weighs less, has no colour error, and can be supported from behind. Every major telescope since is a <strong>reflector</strong> — from observatory giants with 10 m mirror mosaics to the James Webb Space Telescope's 6.5 m gold-coated mirror, a concave reflector from the mirrors chapter, catching light that has travelled for over 13 billion years.</p>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Microscope and telescope share one architecture: objective forms a real image; eyepiece magnifies it. Microscope: short-f objective, close object, magnifications multiply (40× × 10× = 400×). Telescope: long-f objective for distant objects, magnification = objective f ÷ eyepiece f — and aperture, which sets light-gathering, matters most.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Which part of the eye does most of the focusing?",
          options: [
            "The pupil",
            "The cornea",
            "The retina",
            "The crystalline lens",
          ],
          correctIndex: 1,
          explanation:
            "The cornea — the curved front window — does about two-thirds of the eye's focusing, because the biggest light-speed change happens where light passes from air into tissue. The crystalline lens supplies the adjustable remainder (accommodation); the retina is the screen, and the pupil is just the aperture.",
        },
        {
          question:
            "A short-sighted (myopic) person sees nearby objects clearly but distant ones blurred. Why, and what corrects it?",
          options: [
            "Distant objects focus behind the retina; a converging lens corrects it",
            "The retina has too few cones; no lens can correct it",
            "Distant objects focus in front of the retina; a diverging lens corrects it",
            "The pupil is too small; brighter light corrects it",
          ],
          correctIndex: 2,
          explanation:
            "In myopia the eyeball is slightly too long (or the optics too strong), so parallel light from distant objects converges before reaching the retina and blurs. A diverging (concave) lens pre-spreads the light so the eye's focus lands exactly on the retina — that is why myopic prescriptions are negative.",
        },
        {
          question:
            "The image formed on your retina and on a camera sensor is…",
          options: [
            "virtual and upright",
            "virtual and inverted",
            "real and upright",
            "real and inverted",
          ],
          correctIndex: 3,
          explanation:
            "Both the eye and the camera place the object well outside the focal length of a converging lens, which always yields a real, inverted image — light genuinely converges on the retina or sensor, upside down. Your brain flips the view; a camera flips it in software.",
        },
        {
          question:
            "A microscope has a 40× objective and a 10× eyepiece. What is its total magnification, and why?",
          options: [
            "400× — the eyepiece magnifies the real image already enlarged by the objective, so the powers multiply",
            "50× — the two powers add together",
            "40× — only the objective's power counts",
            "4× — the eyepiece divides the objective's power",
          ],
          correctIndex: 0,
          explanation:
            "Two-stage instruments chain their lenses: the objective forms a real image 40 times enlarged, and the eyepiece then magnifies that image a further 10 times, like enlarging an already-enlarged photograph. Stages multiply: 40 × 10 = 400×.",
        },
        {
          question:
            "Why are all large modern telescopes built around mirrors rather than lenses?",
          options: [
            "Mirrors magnify more than lenses of the same size",
            "Large mirrors can be supported from behind and have no colour errors, while big lenses sag and tint the image",
            "Mirrors work in the dark but lenses do not",
            "Lenses cannot form real images of very distant objects",
          ],
          correctIndex: 1,
          explanation:
            "A big lens can only be held by its rim and sags under its own weight, and it focuses different colours at slightly different points. A concave mirror has neither problem — it reflects all colours identically and can rest on supports across its whole back. Newton built the first reflector in 1668; Webb's 6.5 m gold-coated mirror continues the tradition.",
        },
      ],
    },
    {
      id: "colour-and-the-em-spectrum",
      title: "Colour & the EM Spectrum",
      subtitle:
        "Dispersion, rainbows, and light's vast invisible family from radio waves to gamma rays",
      sections: [
        {
          id: "dispersion-and-rainbows",
          title: "White Light Undone: Dispersion and Rainbows",
          content: `
<p>In 1666, a young Isaac Newton let a sunbeam through a hole in his window shutter into a glass prism — and out came a band of colour: red, orange, yellow, green, blue, violet. The prevailing view was that the glass <em>added</em> the colours. Newton's decisive move was a second prism: he isolated just the green light and passed it through — and it stayed green. Then he sent the whole spectrum through a reversed prism and got <strong>white light back</strong>. Conclusion: white light is not pure but a <strong>mixture of all colours</strong>; the prism merely sorts what was already there.</p>
<p>The sorting mechanism is refraction with a twist called <strong>dispersion</strong>: in glass or water, different colours travel at very slightly different speeds — violet slowest, red fastest — so each bends by a slightly different angle. Violet bends most, red least, and a white beam entering a prism fans out into the spectrum. (In this course, each colour is simply light of a different <strong>wavelength</strong>: red ≈ 700 nm down to violet ≈ 400 nm — a millionth of a millimetre scale.)</p>
<p>A <strong>rainbow</strong> is dispersion performed by millions of raindrops. Sunlight enters each drop, refracts (and disperses) at the front surface, reflects once off the back of the drop, and refracts again on exit. The geometry concentrates the returning light at about <strong>42°</strong> from the point directly opposite the Sun — a slightly different angle for each colour. Every drop flings out a full spectrum; you see red from drops positioned higher in the sky and violet from lower ones, painting an arc with red on the outside.</p>
<ul>
  <li>You need the <strong>Sun behind you</strong> and water droplets ahead — rainbows always stand opposite the Sun.</li>
  <li>A <strong>double rainbow</strong> adds a fainter bow at 51° from light reflecting <em>twice</em> inside each drop — with its colours reversed, violet outside.</li>
  <li>No two people see the same rainbow: your bow is made by the particular drops at 42° from <em>your</em> eye. It is an image, not an object — you can never reach its end.</li>
</ul>
<div class="did-you-know">
  <h4>Try it yourself</h4>
  <p>Make a rainbow on demand: with your back to a low sun, mist a garden hose to fine spray and look at it about 42° from your shadow's head — an arc appears, red outside. No hose? A glass of water on a sunny windowsill throws a small spectrum onto white paper on the floor, and the grooves of a CD held in sunlight fan out spectra too. In every case you are un-mixing white light.</p>
</div>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>White light is a mixture of all visible wavelengths. Dispersion — refraction that varies slightly with wavelength — separates them, in prisms (once through glass) and rainbows (refraction, internal reflection, refraction in each raindrop, concentrated near 42°).</p>
</div>`,
        },
        {
          id: "the-colours-of-things",
          title: "Why Things Have Colour",
          content: `
<p>A tomato has no red light source inside it. Objects get their colours by <strong>editing</strong> the white light that falls on them: a surface absorbs some wavelengths and reflects the rest, and the reflected remainder is the colour you see. A tomato absorbs greens and blues and bounces back red; grass absorbs red and blue and returns green; snow reflects everything (white); charcoal absorbs nearly everything (black — which is also why dark surfaces heat up in sunshine: absorbed light becomes heat).</p>
<p>This means colour is a <strong>partnership between object and light</strong>. A red tomato under pure blue light looks black — there is no red in the beam for it to reflect. That is why clothes bought under a shop's warm lighting can surprise you in daylight, and why "daylight" bulbs are sold for jobs where colour judgement matters. A <strong>colour filter</strong> works by the same subtraction on transmitted light: red glass passes red and absorbs the rest, so a white torch behind it becomes a red torch.</p>
<p>Mixing colours follows two opposite sets of rules, and confusing them is the classic mistake:</p>
<ul>
  <li><strong>Mixing light (additive):</strong> the primaries are <strong>red, green, and blue</strong>. Red + green light makes yellow; all three together make <strong>white</strong>. Every screen you own works this way — each pixel is a tiny trio of red, green, and blue lamps, and your eye, with only three cone types, is fooled into seeing millions of colours from three ingredients.</li>
  <li><strong>Mixing paints and inks (subtractive):</strong> each pigment <em>absorbs</em> part of the spectrum, so mixing means subtracting more and more. Printer primaries are <strong>cyan, magenta, and yellow</strong>; pile them all on and you approach <strong>black</strong> (printers add real black ink, the K in CMYK, to do it properly).</li>
</ul>
<div class="analogy">
  <h3>Analogy: Adding Lamps vs. Stacking Sunglasses</h3>
  <p>Mixing light is switching on more lamps — every addition brightens the result, and enough lamps give white. Mixing pigments is stacking tinted sunglasses — every layer steals more of the spectrum, and enough layers give black. Same word, "mixing"; opposite arithmetic.</p>
</div>
<p>One more colour puzzle: the sky. Air molecules scatter short wavelengths (blue) far more strongly than long ones (red), so blue sunlight is strewn across the whole sky — the blue you see overhead is scattered sunlight arriving sideways. At sunset, light reaching you has crossed so much air that the blue has been scattered away en route, leaving the Sun's disc and clouds red and gold. The day sky and the sunset are two ends of a single scattering story.</p>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Surfaces make colour by selective absorption: you see what they reflect. Light mixes additively (R + G + B = white); pigments mix subtractively (C + M + Y ≈ black). An object's colour always depends on the light you view it under.</p>
</div>`,
        },
        {
          id: "the-em-spectrum-family",
          title: "The Electromagnetic Family: A Tour from Radio to Gamma",
          content: `
<p>Here is this chapter's big reveal: visible light — the entire subject so far — is one thin slice of a vast continuous family. Light is an <strong>electromagnetic wave</strong>: vibrating electric and magnetic fields carrying themselves through space, no medium required, all travelling at the same speed c ≈ 300,000 km/s in vacuum. What distinguishes the family members is only <strong>wavelength</strong> (equivalently frequency, since c = fλ). Ordered from the longest, laziest waves to the shortest, most energetic:</p>
<table>
  <thead>
    <tr><th>Band</th><th>Typical wavelength</th><th>Uses / where you meet it</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Radio</strong></td><td>km down to ≈ 30 cm</td><td>Broadcasting, Wi-Fi, aircraft communication, radio astronomy</td></tr>
    <tr><td><strong>Microwaves</strong></td><td>30 cm – 1 mm</td><td>Ovens, radar, mobile networks, satellite links</td></tr>
    <tr><td><strong>Infrared (IR)</strong></td><td>1 mm – 700 nm</td><td>Heat radiation, remote controls, thermal cameras, night vision</td></tr>
    <tr><td><strong>Visible</strong></td><td>700 – 400 nm</td><td>The rainbow: everything any eye has ever seen</td></tr>
    <tr><td><strong>Ultraviolet (UV)</strong></td><td>400 – 10 nm</td><td>Sunburn and tanning, sterilising, fluorescent security marks</td></tr>
    <tr><td><strong>X-rays</strong></td><td>10 – 0.01 nm</td><td>Medical imaging, airport scanners, crystallography</td></tr>
    <tr><td><strong>Gamma rays</strong></td><td>&lt; 0.01 nm</td><td>Radioactive decay, cancer therapy, cosmic explosions</td></tr>
  </tbody>
</table>
<p>Notice the trend that organises the whole table: as wavelength shrinks, the waves carry <strong>more energy</strong> and become more penetrating and more dangerous. Radio passes through you unnoticed; infrared warms you; ultraviolet burns skin; X-rays pass through flesh (but not bone — hence skeleton photographs); gamma rays can damage the molecules of life, which is exactly why, carefully aimed, they can also destroy tumours.</p>
<p>The visible band is astonishingly narrow — 400 to 700 nm, less than one octave in a spectrum spanning more than fifteen octaves. It is no accident that eyes evolved here: this is where the Sun shines most strongly, and these wavelengths pass cleanly through both the atmosphere and water, where eyes first appeared.</p>
<div class="did-you-know">
  <h4>Did You Know?</h4>
  <p>Many animals read bands we cannot: bees see ultraviolet "landing-strip" patterns on flowers, pit vipers sense infrared from warm prey in total darkness, and your phone camera can often see the IR flicker of a TV remote — point the remote at the camera, press a button, and watch the screen show a flash your eyes cannot detect.</p>
</div>
<div class="key-concept">
  <h4>Key Concept</h4>
  <p>Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma: one family, one nature, one vacuum speed c. Only wavelength varies — and with it energy, penetration, and use. Visible light is a sliver less than one octave wide.</p>
</div>`,
        },
        {
          id: "one-speed-one-formula",
          title: "One Speed, One Formula: Working with the Spectrum",
          content: `
<p>Because every electromagnetic wave in vacuum moves at the same c ≈ 3 × 10⁸ m/s, the master formula from the wave chapter — with v replaced by c — unlocks the entire spectrum:</p>
<p style="text-align:center;"><strong>c = fλ&nbsp;&nbsp;so&nbsp;&nbsp;f = c/λ&nbsp;&nbsp;and&nbsp;&nbsp;λ = c/f</strong></p>
<div class="key-concept">
  <h4>Worked Example 1: Your Wi-Fi</h4>
  <p>A 2.4 GHz Wi-Fi router transmits at f = 2,400,000,000 Hz. λ = c/f = 300,000,000 ÷ 2,400,000,000 = <strong>0.125 m ≈ 12.5 cm</strong> — a microwave about the width of your hand. Kitchen microwave ovens run nearby at 2.45 GHz, tuned to be strongly absorbed by water molecules; your router just uses far less power.</p>
</div>
<div class="key-concept">
  <h4>Worked Example 2: Green Light</h4>
  <p>Green light has λ ≈ 500 nm = 0.0000005 m. f = c/λ = 300,000,000 ÷ 0.0000005 = <strong>6 × 10¹⁴ Hz</strong> — six hundred trillion vibrations per second. Compare the two answers: from Wi-Fi to green light, wavelength shrank by a factor of 250,000 and frequency grew by exactly the same factor. On one fixed speed, f and λ are locked in a perfect see-saw.</p>
</div>
<p>The formula also explains the engineering all around you:</p>
<ul>
  <li><strong>Antennas match wavelengths.</strong> Efficient antennas are sized around the waves they handle — metre-scale masts for FM radio (λ ≈ 3 m), finger-length traces inside your phone for mobile bands (λ ≈ 15–30 cm).</li>
  <li><strong>Long waves flow around obstacles.</strong> Radio's metre-to-kilometre waves diffract around hills and buildings, which is why reception survives where line of sight fails; light's sub-micrometre waves cannot, which is why shadows are sharp.</li>
  <li><strong>Short waves probe small things.</strong> A wave only "feels" details about its own wavelength or larger — the deep reason light microscopes max out near 1,500× and X-rays (λ ≈ atom spacing) can map crystals and DNA.</li>
</ul>
<p>And with that, your first pass through sound, light, and optics is complete: vibrations became waves, waves obeyed v = fλ, rays bounced and bent through mirrors and lenses into eyes and telescopes, and colour unfolded into a fifteen-octave electromagnetic family. Two promissory notes remain. Subject 8 will reveal <em>why</em> electromagnetic waves exist — electricity and magnetism regenerating each other in flight. And the quantum subjects will ask the sharpest question of all: is light really a wave? Nature's answer — both wave and particle — is where physics gets truly strange.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "What did Newton's two-prism experiment prove about white light?",
          options: [
            "That glass adds colour to light passing through it",
            "That white light is a mixture of all colours, which a prism separates but does not create",
            "That light is made of particles",
            "That only sunlight contains all the colours",
          ],
          correctIndex: 1,
          explanation:
            "When Newton passed isolated green light through a second prism it stayed green — the glass created nothing. And when he recombined the whole fan of colours with a reversed prism he recovered white light. The prism merely sorts, by dispersion, the wavelengths already mixed in the beam.",
        },
        {
          question:
            "To see a rainbow, where must the Sun be?",
          options: [
            "Behind you, with rain or spray in front of you",
            "Directly overhead at noon",
            "In front of you, behind the rain",
            "Below the horizon",
          ],
          correctIndex: 0,
          explanation:
            "Raindrops send sunlight back towards the Sun's side after refraction, one internal reflection, and refraction — concentrated about 42° from the point directly opposite the Sun. So the bow always stands opposite the Sun: light source behind you, droplets ahead.",
        },
        {
          question:
            "A ripe (red) tomato is lit with pure blue light. What colour does it appear?",
          options: [
            "Red, as always",
            "Blue",
            "Black",
            "Purple",
          ],
          correctIndex: 2,
          explanation:
            "A red tomato is red because it reflects red and absorbs other wavelengths. Pure blue light contains no red to reflect, so the tomato absorbs essentially everything and looks black. An object's colour is a partnership between its surface and the light falling on it.",
        },
        {
          question:
            "Which of these lists electromagnetic bands correctly from longest wavelength to shortest?",
          options: [
            "Gamma → X-ray → ultraviolet → visible → infrared → radio",
            "Radio → infrared → ultraviolet → visible → X-ray → gamma",
            "Visible → radio → microwave → gamma → X-ray → infrared",
            "Radio → microwave → infrared → visible → ultraviolet → X-ray → gamma",
          ],
          correctIndex: 3,
          explanation:
            "From kilometre-long radio waves the wavelengths shrink through microwaves, infrared, the narrow visible band (700–400 nm), ultraviolet, and X-rays down to sub-atomic gamma rays. Energy and penetrating power grow in the same order — the organising trend of the whole spectrum.",
        },
        {
          question:
            "All electromagnetic waves in vacuum travel at c = 3 × 10⁸ m/s. What is the wavelength of a 100 MHz FM radio signal?",
          options: [
            "0.33 m",
            "30 m",
            "3 m",
            "3 × 10¹⁶ m",
          ],
          correctIndex: 2,
          explanation:
            "λ = c/f = 300,000,000 ÷ 100,000,000 = 3 m. That metre-scale wavelength is why FM antennas are rod-sized, and why radio flows around buildings while visible light — with wavelengths half a million times shorter — casts sharp shadows.",
        },
      ],
    },
  ],
};
