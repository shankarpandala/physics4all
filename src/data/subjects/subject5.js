export const subject5 = {
  id: "motion-and-forces",
  number: 5,
  title: "Motion & Forces",
  description:
    "Your first complete, quantitative tour of mechanics at one-formula depth — motion, forces, pressure, buoyancy, and energy, in the classic Russian/Chinese grade 8–9 tradition.",
  phase: 2,
  chapters: [
    {
      id: "describing-motion",
      title: "Describing Motion",
      subtitle:
        "Speed, acceleration, and the motion graphs that turn movement into mathematics",
      sections: [
        {
          id: "distance-and-displacement",
          title: "Position, Distance & Displacement",
          content: `
<p>Before physics can explain motion, it has to describe it — and the first surprise is that "how far did you go?" has two different answers. <strong>Distance</strong> is the total length of the path you actually traveled, counted step by step. <strong>Displacement</strong> is the straight-line change from where you started to where you ended, together with a direction.</p>
<p>Try it with a real trip. You walk 400 m from home to the bakery, then 400 m straight back:</p>
<ul>
  <li><strong>Distance traveled:</strong> 400 m + 400 m = 800 m. Your legs did all of it.</li>
  <li><strong>Displacement:</strong> 0 m. You ended exactly where you began.</li>
</ul>
<p>Both numbers are honest — they just answer different questions. Distance tells you how much walking happened; displacement tells you the net result of the motion. A marathon run on a loop course covers 42,195 m of distance with a displacement of almost zero.</p>
<p>Describing motion also requires saying <strong>motion relative to what</strong>. A passenger asleep on a train is motionless relative to her seat, yet moving at 90 km/h relative to the ground. Neither description is "the true one" — physics always measures motion against a chosen reference object, usually the ground, and you should quietly note which one you are using.</p>
<div class="key-concept">
  <h4>Key Concept: Direction Is Part of the Answer</h4>
  <p>Displacement always comes with a direction: "600 m north," not just "600 m." Later subjects will grow this idea into full vectors; for now, an arrow drawn from start point to end point is all the machinery you need.</p>
</div>
<div class="analogy">
  <h3>Analogy: The Taxi Meter and the Crow</h3>
  <p>A taxi meter charges you for distance — every turn and detour adds to the fare. A crow flying from your origin to your destination measures displacement. In a city grid the taxi might drive 5 km while the crow flies just 3 km, and both numbers are correct measurements of the same trip.</p>
</div>`,
        },
        {
          id: "speed",
          title: "Speed: v = d/t, the First Formula of Physics",
          content: `
<p>Speed answers the question "how fast?" by comparing distance to the time it took: <strong>v = d/t</strong> — speed equals distance divided by time. It is the first of the great ratio formulas of physics, and every one that follows (density, pressure, power) works the same way: one quantity spread out over another.</p>
<p><strong>Worked example.</strong> A cyclist covers 36 km in 2 hours. Her speed is v = 36 km ÷ 2 h = <strong>18 km/h</strong>. In the scientific unit, metres per second: 36,000 m ÷ 7,200 s = <strong>5 m/s</strong>. The handy conversion is worth memorizing: 1 m/s = 3.6 km/h, so 5 m/s × 3.6 = 18 km/h. It checks out.</p>
<p>Some reference points to calibrate your intuition:</p>
<table>
  <thead>
    <tr><th>Mover</th><th>Typical speed</th></tr>
  </thead>
  <tbody>
    <tr><td>Brisk walk</td><td>1.5 m/s (≈ 5 km/h)</td></tr>
    <tr><td>Sprinting human</td><td>10 m/s (≈ 36 km/h)</td></tr>
    <tr><td>Highway car</td><td>28 m/s (≈ 100 km/h)</td></tr>
    <tr><td>Passenger jet</td><td>250 m/s (≈ 900 km/h)</td></tr>
    <tr><td>Sound in air</td><td>340 m/s</td></tr>
  </tbody>
</table>
<p>Most real motion is uneven — a bus speeds up, crawls in traffic, stops at lights. Dividing total distance by total time gives the <strong>average speed</strong>. What the speedometer shows at one instant is the <strong>instantaneous speed</strong>. A 60 km trip that takes 1.5 hours has an average speed of 40 km/h even if the speedometer touched 90 somewhere along the way.</p>
<p>When speed comes packaged with a direction — 15 m/s <em>east</em> — physicists call it <strong>velocity</strong>. A car rounding a bend at a steady 50 km/h keeps the same speed but changes its velocity, because its direction changes.</p>
<div class="did-you-know">
  <h4>Did You Know? Thunder Is a Speedometer</h4>
  <p>Light reaches you almost instantly, but thunder travels at only 340 m/s. Count the seconds between flash and rumble and divide by 3 to get the storm's distance in kilometres: d = v × t = 340 m/s × 6 s ≈ 2 km. That is v = d/t rearranged and put to work.</p>
</div>`,
        },
        {
          id: "acceleration",
          title: "Acceleration: When Speed Changes",
          content: `
<p>Steady speed is the exception; the interesting moments of motion are when speed <em>changes</em>. <strong>Acceleration</strong> measures how quickly velocity changes: the change in speed divided by the time it took, a = Δv/t. Its unit, the metre per second per second (<strong>m/s²</strong>), sounds odd until you read it literally: how many m/s of speed are gained (or lost) each second.</p>
<p><strong>Worked example.</strong> A metro train pulls away from the platform and reaches 24 m/s in 8 s. Its acceleration is a = 24 m/s ÷ 8 s = <strong>3 m/s²</strong>. Every second, the train is moving 3 m/s faster than the second before: 3, 6, 9, 12 … you can feel each of those steps pressing you gently into your seat.</p>
<p>Slowing down is also acceleration — just directed against the motion. A car braking from 20 m/s to rest in 4 s changes speed by 20 m/s in 4 s, a deceleration of <strong>5 m/s²</strong>. Everyday language says "deceleration"; physics happily calls both cases acceleration and keeps track with a sign or an arrow.</p>
<p>The most famous acceleration of all belongs to falling objects. Near Earth's surface, anything dropped (when air resistance is small) gains speed at about <strong>10 m/s every second</strong> — after 1 s it falls at 10 m/s, after 2 s at 20 m/s, after 3 s at 30 m/s. Galileo established this by rolling balls down ramps to slow the action enough to time it, one of the founding experiments of physics.</p>
<div class="key-concept">
  <h4>Key Concept: Speed Tells You Nothing About Acceleration</h4>
  <p>A jet cruising at 900 km/h has zero acceleration; a skateboard rolling off from rest has plenty. Acceleration is about <em>change</em>. This distinction — between how fast something moves and how fast that changes — is the single most common source of confusion in mechanics, and mastering it now pays off for the rest of the curriculum.</p>
</div>
<div class="analogy">
  <h3>Analogy: Salary vs. Raise</h3>
  <p>Speed is like your salary: how much distance you earn per second. Acceleration is like your annual raise: how quickly the salary itself is changing. A high salary with no raise (cruising jet) and a small salary growing fast (sprinter off the blocks) are completely different situations.</p>
</div>`,
        },
        {
          id: "motion-graphs",
          title: "Motion Graphs: Distance–Time and Velocity–Time",
          interactive: "motion-graphs",
          content: `
<p>A motion graph compresses an entire journey into a single picture — and once you can read the two classic types, you can decode any trip at a glance.</p>
<p><strong>Distance–time graphs</strong> put time on the horizontal axis and distance on the vertical. The rule is: <strong>the slope of the line is the speed</strong>.</p>
<ul>
  <li>A horizontal line means the object is standing still — time passes, distance doesn't grow.</li>
  <li>A straight rising line means steady speed; steeper means faster.</li>
  <li>A curve that gets steeper shows speeding up.</li>
</ul>
<p><strong>Worked example.</strong> A jogger's graph rises from 0 m to 1,200 m between the 0 s and 600 s marks, then goes flat for 120 s (water break), then rises again. First leg speed: v = d/t = 1,200 m ÷ 600 s = <strong>2 m/s</strong>. The flat stretch is v = 0. The whole story is right there in the shape.</p>
<p><strong>Velocity–time graphs</strong> put velocity on the vertical axis, and they carry two treasures:</p>
<ul>
  <li><strong>The slope is the acceleration.</strong> A rising line means speeding up; a horizontal line means constant velocity; a falling line means braking.</li>
  <li><strong>The area under the line is the distance traveled.</strong> A bus holding 10 m/s for 30 s sweeps out a rectangle: 10 m/s × 30 s = <strong>300 m</strong>. A train accelerating steadily from 0 to 20 m/s over 10 s sweeps out a triangle: half of 20 m/s × 10 s = <strong>100 m</strong>.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Same Shape, Different Meaning</h4>
  <p>A horizontal line on a distance–time graph means <em>stopped</em>. A horizontal line on a velocity–time graph means <em>moving at constant speed</em>. Always check the vertical axis label before reading a motion graph — it is the most common trap in every physics exam ever written.</p>
</div>
<p>Use the simulator below to drive an object back and forth and watch both graphs draw themselves in real time. Try to produce a flat line, a steep line, and a triangle — matching motion to graph is a skill your hands learn faster than your eyes.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "You walk 300 m east to a shop, then 300 m west back home. What are your distance and displacement?",
          options: [
            "Distance 0 m, displacement 600 m",
            "Distance 600 m, displacement 600 m",
            "Distance 600 m, displacement 0 m",
            "Distance 300 m, displacement 300 m",
          ],
          correctIndex: 2,
          explanation:
            "Distance counts the whole path (300 + 300 = 600 m), while displacement is the straight-line change from start to finish — and you ended where you started, so it is 0 m.",
        },
        {
          question: "A train covers 150 km in 2.5 hours. What is its average speed?",
          options: ["60 km/h", "75 km/h", "50 km/h", "375 km/h"],
          correctIndex: 0,
          explanation:
            "v = d/t = 150 km ÷ 2.5 h = 60 km/h. Average speed is always total distance over total time, no matter how uneven the trip was in between.",
        },
        {
          question: "On a distance–time graph, what does the slope of the line represent?",
          options: ["Acceleration", "Speed", "Distance", "Time elapsed"],
          correctIndex: 1,
          explanation:
            "Slope is rise over run — distance gained per unit time — which is exactly the definition of speed, v = d/t. A steeper line means a faster mover; a flat line means standing still.",
        },
        {
          question:
            "A car speeds up from rest to 24 m/s in 8 seconds. What is its acceleration?",
          options: ["24 m/s²", "8 m/s²", "192 m/s²", "3 m/s²"],
          correctIndex: 3,
          explanation:
            "Acceleration is the change in speed divided by the time: 24 m/s ÷ 8 s = 3 m/s². Every second, the car moves 3 m/s faster than the second before.",
        },
        {
          question:
            "A bus holds a steady 10 m/s for 30 s. On its velocity–time graph, what does the area under the line tell you?",
          options: [
            "Its acceleration: 3 m/s²",
            "Its average speed: 40 m/s",
            "The distance traveled: 300 m",
            "Nothing — area has no meaning on motion graphs",
          ],
          correctIndex: 2,
          explanation:
            "On a velocity–time graph, area under the line equals distance: 10 m/s × 30 s = 300 m. This area rule is the graph version of d = v × t and works even when the speed changes.",
        },
      ],
    },
    {
      id: "mass-density-and-measurement",
      title: "Mass, Density & Measurement",
      subtitle:
        "Mass vs weight, ρ = m/V, and the measuring instruments of the physics lab",
      sections: [
        {
          id: "measuring-instruments",
          title: "The Instruments of the Physics Lab",
          content: `
<p>Physics became a real science the day it started measuring instead of just arguing, and every measurement follows the same recipe: an instrument, a scale, and an honest statement of how precise the reading is. The classic starter kit:</p>
<ul>
  <li><strong>Ruler or tape measure</strong> — length, usually marked in millimetres.</li>
  <li><strong>Measuring cylinder</strong> — volume of liquids, marked in millilitres (1 mL = 1 cm³).</li>
  <li><strong>Balance</strong> — mass, in grams or kilograms.</li>
  <li><strong>Stopwatch</strong> — time, in seconds.</li>
  <li><strong>Thermometer</strong> — temperature, in °C.</li>
</ul>
<p>Before trusting any instrument, find its <strong>scale division</strong>: the gap between neighbouring marks. A ruler marked every 1 mm can honestly report "12.4 cm, give or take half a millimetre" — but never "12.4132 cm." Writing more digits than your instrument can justify is the physics equivalent of making things up.</p>
<p><strong>Worked example.</strong> A measuring cylinder has marks every 10 mL, and the water level sits between 70 and 80, slightly closer to 80. The honest reading is 78 mL ± 5 mL. When you read it, put your eye level with the liquid surface and read the bottom of the curved meniscus — reading from above or below shifts the answer by several millilitres.</p>
<p>What about the volume of an irregular solid — a stone, a key, a chess knight? Use <strong>displacement</strong>: submerge it and see how much liquid it shoves aside. If the cylinder reads 60 mL before and 85 mL after the stone goes in, the stone's volume is 85 − 60 = <strong>25 cm³</strong>. This trick, over two thousand years old, is exactly what you will need for density in the next section.</p>
<div class="did-you-know">
  <h4>Try It Yourself: Calibrate Your Own Hands</h4>
  <p>Measure your hand span (thumb tip to pinky tip, fingers spread) with a ruler — for many adults it is close to 20 cm. Now pace out a room, measure one pace, and multiply. With a calibrated span and a calibrated pace you carry two measuring instruments everywhere you go, accurate to a few percent. Estimate first, then check with a tape measure: good physicists always guess before they measure.</p>
</div>`,
        },
        {
          id: "mass-vs-weight",
          title: "Mass Is Not Weight",
          content: `
<p>In everyday speech "mass" and "weight" blur together; in physics they are different quantities with different units, and keeping them straight is a rite of passage.</p>
<p><strong>Mass</strong> measures how much matter an object contains — equivalently, how hard it is to change the object's motion. It is measured in <strong>kilograms (kg)</strong> with a balance, and it does not change when you travel: a 70 kg astronaut is 70 kg on Earth, on the Moon, and floating in orbit.</p>
<p><strong>Weight</strong> is the <em>force</em> with which gravity pulls on that mass. Like every force it is measured in <strong>newtons (N)</strong>, and it very much depends on where you are. Near Earth's surface, gravity pulls with about <strong>10 N on every kilogram</strong>, so:</p>
<p style="text-align:center"><strong>weight ≈ 10 N/kg × mass</strong></p>
<p><strong>Worked example.</strong> A 2 kg bag of flour has a weight of about 2 kg × 10 N/kg = <strong>20 N</strong> on Earth. On the Moon, where gravity pulls with only 1.6 N per kilogram, the same bag weighs 2 × 1.6 = 3.2 N — yet it is still exactly 2 kg of flour, and would make exactly as much bread.</p>
<table>
  <thead>
    <tr><th></th><th>Mass</th><th>Weight</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>What it is</strong></td><td>Amount of matter</td><td>Force of gravity on it</td></tr>
    <tr><td><strong>Unit</strong></td><td>kilogram (kg)</td><td>newton (N)</td></tr>
    <tr><td><strong>Instrument</strong></td><td>Balance</td><td>Spring scale</td></tr>
    <tr><td><strong>On the Moon</strong></td><td>Unchanged</td><td>About 1/6 of Earth value</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>Key Concept: Why the Bathroom Scale Lies (Slightly)</h4>
  <p>A bathroom scale actually measures the force you press on it — a weight — and then divides by 10 N/kg to display kilograms. On the Moon it would read about 12 kg for a 70 kg person: same mass, weaker pull. A two-pan balance, which compares your mass against standard masses, would still read correctly, because gravity pulls equally on both pans.</p>
</div>`,
        },
        {
          id: "density",
          title: "Density: ρ = m/V",
          content: `
<p>Which is heavier, iron or wood? The honest answer is "it depends on how much of each" — a log outweighs a nail. The fair comparison asks how much mass is packed into each unit of volume, and that ratio is <strong>density</strong>:</p>
<p style="text-align:center"><strong>ρ = m/V</strong> (density = mass ÷ volume)</p>
<p>Density is measured in g/cm³ or kg/m³ (1 g/cm³ = 1000 kg/m³), and it is a fingerprint of the material itself, not of the object's size. Every scrap of pure aluminium — filing or engine block — has density 2.7 g/cm³.</p>
<table>
  <thead>
    <tr><th>Material</th><th>Density (g/cm³)</th></tr>
  </thead>
  <tbody>
    <tr><td>Cork</td><td>0.24</td></tr>
    <tr><td>Ice</td><td>0.92</td></tr>
    <tr><td>Water</td><td>1.00</td></tr>
    <tr><td>Aluminium</td><td>2.7</td></tr>
    <tr><td>Iron</td><td>7.9</td></tr>
    <tr><td>Gold</td><td>19.3</td></tr>
  </tbody>
</table>
<p><strong>Worked example.</strong> A metal part has mass 540 g. You lower it into a measuring cylinder and the water level rises by 200 cm³. Its density: ρ = m/V = 540 g ÷ 200 cm³ = <strong>2.7 g/cm³</strong> — the table says aluminium. You have just identified a material with a balance and a jug of water.</p>
<p>The formula runs in every direction. Need the mass of water in a 40-litre aquarium? m = ρ × V = 1 g/cm³ × 40,000 cm³ = 40,000 g = <strong>40 kg</strong> — which is why you empty an aquarium before moving it.</p>
<div class="did-you-know">
  <h4>Did You Know? Ice Is the Odd One Out</h4>
  <p>Almost every substance is denser as a solid than as a liquid — but water expands about 9% when it freezes, dropping to 0.92 g/cm³. That is why ice floats, why frozen pipes burst, and why ponds freeze from the top down, letting fish winter safely underneath. Life on Earth quietly depends on this one anomaly in the density table.</p>
</div>`,
        },
        {
          id: "density-and-floating",
          title: "Why Density Decides Who Floats",
          content: `
<p>Drop a coin in water: it sinks. Drop a cork: it floats. Drop an ice cube: it floats, but just barely, riding low. One number predicts all three outcomes — density compared to the liquid's density.</p>
<ul>
  <li><strong>Denser than the liquid → sinks.</strong> Iron (7.9 g/cm³) in water (1.0 g/cm³): straight down.</li>
  <li><strong>Less dense → floats,</strong> with only part of it submerged. Cork (0.24) floats high; ice (0.92) floats with about 9/10 of its volume hidden underwater — the "tip of the iceberg" is a real density calculation.</li>
  <li><strong>Equal density → hovers,</strong> drifting at whatever depth you leave it, like a fish with a tuned swim bladder.</li>
</ul>
<p><strong>Worked example.</strong> An ice cube of volume 30 cm³ has mass m = ρ × V = 0.92 g/cm³ × 30 cm³ ≈ 27.6 g. Floating, it displaces 27.6 g of water — which occupies 27.6 cm³. So 27.6 of its 30 cm³ sit below the surface: 92% submerged, matching the ratio of the densities.</p>
<p>Then what about a steel ship? Steel is eight times denser than water, yet a 100,000-tonne ship floats. The resolution: the ship is not solid steel. Its hull encloses vast air-filled spaces, so the <em>average</em> density of the whole ship — steel plus air — is less than 1 g/cm³. Puncture the hull, let water replace the air, and the average density climbs past water's; the ship sinks. Submarines do this on purpose, pumping water in and out of ballast tanks to tune their average density above or below the water's.</p>
<div class="did-you-know">
  <h4>Try It Yourself: The Floating Egg</h4>
  <p>Place a fresh egg in a glass of tap water — it sinks, because an egg is slightly denser than fresh water. Now stir in salt, a spoonful at a time. Salt water is denser than fresh, and after 3–4 spoonfuls the egg lifts off the bottom and floats. You changed nothing about the egg; you changed the liquid's density. The same physics makes swimmers float noticeably better in the sea than in a pool.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "An astronaut travels from Earth to the Moon. What happens to her mass and weight?",
          options: [
            "Both mass and weight decrease",
            "Mass stays the same; weight decreases",
            "Weight stays the same; mass decreases",
            "Both stay the same",
          ],
          correctIndex: 1,
          explanation:
            "Mass measures the amount of matter and travels unchanged. Weight is gravity's pull on that mass — the Moon pulls with about 1.6 N/kg instead of Earth's 10 N/kg, so weight drops to roughly one sixth.",
        },
        {
          question:
            "A metal block has mass 540 g and volume 200 cm³. What is its density, and what metal is it likely to be?",
          options: [
            "2.7 g/cm³ — aluminium",
            "0.37 g/cm³ — cork",
            "7.9 g/cm³ — iron",
            "108 g/cm³ — no known metal",
          ],
          correctIndex: 0,
          explanation:
            "ρ = m/V = 540 g ÷ 200 cm³ = 2.7 g/cm³, the density of aluminium. Density is a fingerprint of the material — measuring m and V is enough to identify what something is made of.",
        },
        {
          question:
            "What is the best way to measure the volume of an irregular stone?",
          options: [
            "Weigh it on a balance and divide by 10",
            "Measure its length, width, and height with a ruler",
            "It cannot be measured without cutting it into cubes",
            "Submerge it in a measuring cylinder and read how much the water level rises",
          ],
          correctIndex: 3,
          explanation:
            "A submerged object displaces exactly its own volume of liquid, so the rise in the water level equals the stone's volume. Rulers only work for regular shapes, and a balance gives mass, not volume.",
        },
        {
          question: "An object floats in a liquid when…",
          options: [
            "it is lighter than the container",
            "it contains no metal",
            "its density is less than the liquid's density",
            "its volume is smaller than the liquid's volume",
          ],
          correctIndex: 2,
          explanation:
            "Floating is a density contest: less dense than the liquid floats, denser sinks, equal density hovers. This is why cork (0.24 g/cm³) floats on water while iron (7.9 g/cm³) sinks — and why a hollow steel ship, whose average density includes lots of air, floats too.",
        },
        {
          question:
            "Taking gravity's pull as 10 N per kilogram, what is the weight of a 5 kg sack of potatoes on Earth?",
          options: ["5 N", "50 N", "0.5 N", "500 N"],
          correctIndex: 1,
          explanation:
            "Weight = 10 N/kg × 5 kg = 50 N. Mass (5 kg) is the amount of matter; weight (50 N) is the gravitational force on it — different quantities, different units.",
        },
      ],
    },
    {
      id: "forces-and-inertia",
      title: "Forces & Inertia",
      subtitle:
        "Newton's first law, friction, Hooke's law, and the art of the force diagram",
      sections: [
        {
          id: "force-as-interaction",
          title: "Force: An Interaction, Not a Possession",
          content: `
<p>Kick a ball, stretch a rubber band, hold up a bag of groceries — in each case something pushes or pulls on something else. A <strong>force</strong> is exactly that: a push or a pull that one object exerts on another. The wording matters: force is not something an object <em>has</em>, like mass; it is an <em>interaction between two objects</em>. No partner, no force. The ball is kicked by a foot; the band is stretched by fingers; the bag is held by a hand while Earth pulls it down.</p>
<p>What can a force do? Only two kinds of things:</p>
<ul>
  <li><strong>Change motion</strong> — start it, stop it, speed it up, slow it down, or bend its path.</li>
  <li><strong>Change shape</strong> — stretch, squash, bend, or twist the object.</li>
</ul>
<p>Force is measured in <strong>newtons (N)</strong>. One newton is roughly the weight of a small apple (100 g) — a pleasantly Newtonian coincidence. To measure a force, physicists use a <strong>dynamometer</strong> (spring scale): a spring stretches in proportion to the pull, and a pointer reads the force off a scale. Some everyday magnitudes: lifting a 1-litre water bottle takes about 10 N, a firm handshake squeezes with 50–100 N, and a car engine can push with several thousand newtons.</p>
<p>Because a force has a size <em>and</em> a direction, we draw it as an <strong>arrow</strong>: the arrow points the way the force pushes or pulls, and its length shows how strong it is. If 10 N is drawn as a 1 cm arrow, a 30 N force gets 3 cm.</p>
<p><strong>Worked example.</strong> A shopping bag with 3 kg of groceries hangs from your hand. Earth pulls it down with about 3 kg × 10 N/kg = 30 N; your hand pulls it up with 30 N. Two arrows, equal length, opposite directions — the bag hangs still.</p>
<div class="key-concept">
  <h4>Key Concept: Forces Come in Pairs</h4>
  <p>Every force is one side of a two-way interaction. Push a wall and you feel the wall push back on your hand; the Earth pulls you down, and you pull the Earth up (very slightly). You never find a lone force with no partner object — a preview of Newton's third law, treated fully in a later subject.</p>
</div>`,
        },
        {
          id: "inertia-and-first-law",
          title: "Inertia & Newton's First Law",
          content: `
<p>Common sense says motion needs a motor: stop pedalling and the bicycle coasts to a halt, so surely "no force means no motion." For two thousand years, following Aristotle, nearly everyone believed exactly that. Galileo and Newton showed it is backwards.</p>
<p>The bicycle stops not because its motion "runs out," but because friction and air resistance actively slow it. Reduce those forces and the coasting stretches out: farther on smooth asphalt than gravel, farther still on ice. Imagine the limit — a perfectly smooth, endless surface with no air — and the conclusion is inescapable: the bicycle would coast <strong>forever</strong>.</p>
<div class="key-concept">
  <h4>Newton's First Law</h4>
  <p>An object keeps doing what it is doing — staying at rest, or moving in a straight line at constant speed — unless a force acts to change it. Motion needs no force to <em>continue</em>; it needs a force only to <em>change</em>.</p>
</div>
<p>This built-in stubbornness of matter is called <strong>inertia</strong>, and the more mass, the more of it. You feel inertia constantly:</p>
<ul>
  <li>A bus brakes and passengers lurch <em>forward</em> — their bodies keep moving at the old speed while the bus slows under them.</li>
  <li>The bus turns right and everyone leans left — their bodies try to continue straight ahead.</li>
  <li>Ketchup leaves the bottle when you jerk the bottle downward and stop it: the bottle stops, the ketchup doesn't.</li>
</ul>
<p><strong>Worked example.</strong> A car travels at 20 m/s (72 km/h). During a crash it stops in about 0.1 s — but an unbelted passenger does not. Their body continues at 20 m/s until something stops it. A seatbelt supplies a controlled stopping force over the longest possible distance; that is inertia, taken deadly seriously by engineers.</p>
<div class="did-you-know">
  <h4>Try It Yourself: The Coin Drop</h4>
  <p>Place a stiff card on top of a glass and a coin on top of the card. Flick the card sharply sideways: the card flies away and the coin drops straight into the glass. The flick lasts too briefly for friction to drag the coin along, so the coin simply stays put — inertia in action — then falls under gravity. The tablecloth-yanking trick is the same physics with higher stakes.</p>
</div>`,
        },
        {
          id: "friction",
          title: "Friction: The Force That Rubs Both Ways",
          content: `
<p>Slide a book across a table and it stops. The culprit is <strong>friction</strong> — a force that appears wherever two surfaces touch and resists their sliding, always pointing against the motion (or attempted motion). Up close, even polished surfaces are mountain ranges of microscopic bumps that catch, snag, and weld momentarily; friction is the price of dragging those landscapes across each other.</p>
<p>Friction comes in three varieties, in order of strength:</p>
<ul>
  <li><strong>Static friction</strong> holds surfaces that are not yet sliding — it is why a parked car stays put on a hill and why you can walk without slipping. It is usually the strongest.</li>
  <li><strong>Sliding friction</strong> acts on surfaces slipping past each other — the book on the table, skis on snow.</li>
  <li><strong>Rolling friction</strong> resists a wheel or ball rolling — typically far weaker than sliding, which is why humanity is so fond of the wheel and the ball bearing.</li>
</ul>
<p><strong>Worked example.</strong> Hook a spring scale to a 1 kg brick on a wooden table and pull gently. The reading climbs — 1 N, 2 N, 2.5 N — while the brick sits still (static friction matches your pull). At about 3 N the brick breaks loose, and keeping it sliding steadily takes roughly 2.5 N: sliding friction is a bit weaker than the static maximum. At steady speed your 2.5 N pull exactly balances 2.5 N of friction. Press down on the brick and every number grows — friction is stronger the harder the surfaces press together.</p>
<p>Friction is neither villain nor hero — it is both, and engineering is largely the art of managing it:</p>
<ul>
  <li><strong>Wanted:</strong> tire grip, brake pads, shoe soles, nails holding in wood, knots staying tied. On ice, where friction nearly vanishes, walking itself becomes a physics problem.</li>
  <li><strong>Unwanted:</strong> engine wear, squeaky hinges, energy lost as heat. Cures: smooth polishing, oil and grease (a liquid film keeps the mountain ranges apart), and replacing sliding with rolling via wheels and bearings.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Velcro Landscapes</h3>
  <p>Two touching surfaces behave like gentle Velcro: countless tiny hooks and loops engaging. Pressing harder engages more of them (more friction); lubricant is like a film keeping the hooks apart; and rolling lifts the hooks out cleanly instead of dragging them — which is why a wheel beats a sled on almost every surface.</p>
</div>`,
        },
        {
          id: "elastic-force-hookes-law",
          title: "Elastic Force & Hooke's Law",
          content: `
<p>Stretch a spring and it pulls back; squash a foam ball and it pushes out; sit on a mattress and it supports you. This restoring push or pull is the <strong>elastic force</strong> — it appears when an object is deformed and always acts to restore the original shape.</p>
<p>Robert Hooke discovered in 1660 that springs are beautifully lawful. Stretch a spring twice as far and it pulls back exactly twice as hard:</p>
<p style="text-align:center"><strong>F = k × x</strong></p>
<p>where x is the stretch (or compression) and k is the <strong>stiffness</strong> of the spring, in newtons per metre. A soft toy spring might have k = 50 N/m; a car suspension spring, 50,000 N/m. The law holds up to the <strong>elastic limit</strong> — overstretch a spring and it stays deformed, and the law (like the spring) is broken.</p>
<p><strong>Worked example.</strong> A spring with k = 200 N/m is stretched by 5 cm = 0.05 m. The elastic force: F = 200 N/m × 0.05 m = <strong>10 N</strong>. Hang a 1 kg mass (weight ≈ 10 N) from this spring and it stretches exactly 5 cm — the spring's pull grows with the stretch until it balances the weight, and everything hangs in equilibrium.</p>
<p>This proportionality is precisely what makes a <strong>spring scale</strong> work: since stretch is proportional to force, a scale of equal marks along the spring's travel reads force directly. Kitchen scales, luggage scales, and the dynamometers of the physics lab are all Hooke's law with a pointer attached.</p>
<p>Even "rigid" objects obey Hooke's law in miniature. A concrete floor sags imperceptibly under your feet and pushes back with precisely your weight; a table compresses a hair's breadth under a book. The <strong>support force</strong> that solid surfaces exert is elastic force — solids are simply springs too stiff to see flexing.</p>
<div class="did-you-know">
  <h4>Did You Know? Bungee Jumping Is Applied Hooke</h4>
  <p>A bungee cord is a giant soft spring. Designers choose its stiffness k and length so that the elastic force builds gradually, stopping a jumper over many metres with forces the body finds thrilling instead of injurious. The same calculation, with sterner numbers, designs climbing ropes and car crumple zones: stopping people is always a Hooke's-law problem.</p>
</div>`,
        },
        {
          id: "force-diagrams-and-resultants",
          title: "Force Diagrams, Balance & Resultants",
          content: `
<p>Real objects rarely feel just one force — a book on a table feels gravity and the table's support; a towed sled feels the rope, gravity, the snow's support, and friction. To think clearly, physicists draw a <strong>force diagram</strong>: the object reduced to a box or dot, with one labelled arrow per force, each arrow's length showing its strength.</p>
<p>The paydown is the <strong>resultant</strong> — the single force that would have the same effect as all of them combined. Along one line the arithmetic is simple:</p>
<ul>
  <li>Same direction: add. 300 N + 200 N of two people pushing a car = <strong>500 N</strong> forward.</li>
  <li>Opposite directions: subtract; the resultant points with the larger force. In a tug-of-war, 400 N left vs 350 N right gives a resultant of <strong>50 N left</strong>.</li>
</ul>
<p>Now Newton's first law snaps into sharper focus:</p>
<div class="key-concept">
  <h4>Key Concept: Balanced vs Unbalanced</h4>
  <p>If the forces on an object <strong>balance</strong> (resultant = 0), its motion does not change: at rest it stays at rest; moving, it keeps its exact speed and direction. Only an <strong>unbalanced</strong> resultant changes motion. Constant velocity is therefore <em>not</em> evidence of a driving force winning — it is evidence of a perfect tie.</p>
</div>
<p><strong>Worked example.</strong> A car cruises down a straight highway at a steady 100 km/h. The engine drives it forward with 1,200 N while air resistance and rolling friction drag backward with a combined 1,200 N. Resultant: 0. The car keeps its velocity — moving fast, yet in perfect force balance, exactly like a parked car as far as the resultant is concerned. If the driver presses the accelerator and the drive force rises to 1,700 N, the resultant becomes 500 N forward and the car speeds up; ease off, and a backward resultant slows it.</p>
<p>A useful reading habit: force diagrams tell you about <em>change</em>. See an object speeding up, slowing, or turning? Hunt for the unbalanced force. See steady motion or rest? Every arrow must be cancelled by another. Practising this one skill — diagram first, verdict second — is the surest way to make the rest of mechanics feel easy.</p>`,
        },
      ],
      quiz: [
        {
          question: "What does Newton's first law state?",
          options: [
            "Every force has an equal and opposite reaction",
            "Objects always slow down and stop unless a force keeps pushing them",
            "An object keeps its state of rest or steady straight-line motion unless a force changes it",
            "Heavier objects fall faster than lighter ones",
          ],
          correctIndex: 2,
          explanation:
            "Motion needs no force to continue — only to change. The everyday feeling that things 'naturally stop' is caused by friction, a real force doing the stopping. Remove it, and coasting lasts forever.",
        },
        {
          question:
            "A bus brakes suddenly and the passengers lurch forward. Why?",
          options: [
            "Their bodies keep moving at the old speed by inertia while the bus slows",
            "The brakes push the passengers toward the front of the bus",
            "Air inside the bus pushes them forward",
            "Gravity acts more strongly during braking",
          ],
          correctIndex: 0,
          explanation:
            "No forward force acts on the passengers at all. The bus slows under them, but their bodies — by inertia — continue at the previous speed until seats, handrails, or seatbelts supply the slowing force.",
        },
        {
          question:
            "A spring with stiffness k = 200 N/m is stretched by 5 cm (0.05 m). What force does it pull back with?",
          options: ["1,000 N", "40 N", "4 N", "10 N"],
          correctIndex: 3,
          explanation:
            "Hooke's law: F = k × x = 200 N/m × 0.05 m = 10 N. Watch the units — the stretch must be in metres. This proportionality between force and stretch is exactly what makes spring scales work.",
        },
        {
          question:
            "The forces on a moving car are perfectly balanced (resultant = 0). What happens to the car?",
          options: [
            "It gradually slows to a stop",
            "It keeps moving at constant speed in a straight line",
            "It immediately stops",
            "It speeds up slowly",
          ],
          correctIndex: 1,
          explanation:
            "Balanced forces mean no change in motion — which for a moving object means constant velocity, not stopping. A cruising car with drive force exactly matching air resistance and friction is in the same force situation as a parked one.",
        },
        {
          question:
            "In a tug-of-war, one team pulls with 400 N and the other with 150 N in the opposite direction. What is the resultant force on the rope?",
          options: [
            "550 N toward the stronger team",
            "275 N toward the stronger team",
            "250 N toward the stronger team",
            "Zero — the forces cancel",
          ],
          correctIndex: 2,
          explanation:
            "Opposite forces along one line subtract: 400 N − 150 N = 250 N, pointing toward the stronger team. Only equal opposite forces (400 vs 400) would balance and leave the rope's motion unchanged.",
        },
      ],
    },
    {
      id: "pressure-and-buoyancy",
      title: "Pressure & Buoyancy",
      subtitle:
        "P = F/A, Pascal, and Archimedes — the celebrated grade-8 block on fluids at rest",
      sections: [
        {
          id: "pressure",
          title: "Pressure: P = F/A",
          content: `
<p>Why can you push a drawing pin into wood with a thumb, but not the same thumb alone? Why do snowshoes keep you on top of snow that swallows your boots? The answer in both cases is not force but <strong>pressure</strong> — how concentrated a force is over the area that carries it:</p>
<p style="text-align:center"><strong>P = F/A</strong> (pressure = force ÷ area)</p>
<p>The unit is the <strong>pascal (Pa)</strong>: one newton spread over one square metre. A pascal is tiny — a sheet of paper lying flat presses on the table with about 1 Pa — so kilopascals (kPa, thousands) are the everyday currency.</p>
<p><strong>Worked example.</strong> A 60 kg person weighs about 600 N. Standing in boots with a total sole area of 0.03 m², they press on the snow with P = 600 N ÷ 0.03 m² = <strong>20,000 Pa</strong> — and punch through the crust. On snowshoes of total area 0.3 m²: P = 600 ÷ 0.3 = <strong>2,000 Pa</strong>, one tenth the pressure, and the snow holds. Same person, same force, different area — different outcome.</p>
<p>Once you have the idea, you see area engineering everywhere:</p>
<ul>
  <li><strong>Making pressure small</strong> (spread the force): wide tractor tires and tank tracks on soft ground, broad foundations under buildings, wide shoulder straps on heavy backpacks.</li>
  <li><strong>Making pressure large</strong> (concentrate the force): knife edges, needles, nails, ice skates, the drawing pin — whose point shrinks A so much that a modest thumb-force creates millions of pascals at the tip.</li>
</ul>
<p>The formula also runs backwards. A firm handshake force of 50 N applied through a needle point of one millionth of a square metre delivers 50,000,000 Pa — enough to pierce skin; that is the entire engineering principle of the syringe.</p>
<div class="analogy">
  <h3>Analogy: Butter on Bread</h3>
  <p>Pressure is force the way thickness is butter: the same pat of butter spread over one slice lies thick, over ten slices lies thin. Same total force (butter), different area (bread), different pressure (thickness at each point). Sharp tools are simply devices for buttering all the force onto one crumb.</p>
</div>`,
        },
        {
          id: "pressure-in-liquids",
          title: "Pressure in Liquids: Deeper Means Stronger",
          content: `
<p>Solids push only where they touch, and only downward under gravity. Liquids play by stranger rules, because their particles flow and shove in every direction:</p>
<ul>
  <li><strong>Liquid pressure acts in all directions</strong> — down, sideways, and even upward. A submerged diver feels squeezing on every side; water spurts out of a hole in a bottle's <em>side</em> just as readily as its bottom.</li>
  <li><strong>Pressure grows with depth.</strong> Each layer of water must carry the weight of all the water above it, so the deeper you go, the greater the squeeze. In fresh water the rule of thumb is <strong>about 10 kPa for every metre of depth</strong> — one full atmosphere of extra pressure for every 10 m.</li>
  <li><strong>Only depth matters, not width.</strong> At 2 m down, the pressure is the same in a narrow test tube, a swimming pool, and a lake. A denser liquid squeezes harder at the same depth: mercury, 13.6 times denser than water, produces 13.6 times the pressure.</li>
</ul>
<p><strong>Worked example.</strong> A dam holds a reservoir 40 m deep. Near the surface the extra water pressure is a few kPa; at the base it is about 10 kPa/m × 40 m = <strong>400 kPa</strong> — four atmospheres, roughly the pressure in a racing-bike tire, pushing on every square metre of concrete. That is why dams are always built dramatically thicker at the bottom: the wall is a graph of pressure versus depth, drawn in concrete.</p>
<p>The same arithmetic disciplines divers. At 20 m down, a scuba diver bears 200 kPa of water pressure on top of the atmosphere's 100 — triple the surface total. Ears must equalize; ascent must be slow; every diving rule is written by pressure-with-depth.</p>
<div class="did-you-know">
  <h4>Try It Yourself: The Three-Hole Bottle</h4>
  <p>Take a plastic bottle and poke three small holes in a vertical line — near the top, middle, and bottom. Fill it with water over a sink. The bottom jet shoots out farthest, the top one dribbles: deeper water is under higher pressure, and the jets measure it for you. You have built a working pressure-versus-depth demonstration for free.</p>
</div>`,
        },
        {
          id: "atmospheric-pressure",
          title: "The Ocean of Air: Atmospheric Pressure",
          content: `
<p>You live at the bottom of an ocean — an ocean of air hundreds of kilometres deep. Air has weight (a cubic metre of it is about 1.3 kg), and the whole column stacked above your head presses down with a pressure of about <strong>100 kPa</strong> at sea level — 100,000 newtons on every square metre, equivalent to a 1 kg mass pressing on every square centimetre of your body.</p>
<p>Why aren't you crushed? Because air pressure pushes in <em>all</em> directions — up, down, sideways — and the fluids inside your body push outward just as hard. You only notice the atmosphere when you create an imbalance, and then its strength is startling:</p>
<ul>
  <li><strong>Drinking through a straw:</strong> you don't pull the drink up — you lower the pressure in your mouth, and the atmosphere pushes the liquid up the straw for you.</li>
  <li><strong>Suction cups:</strong> squeezing out the air leaves the atmosphere pressing the cup against the wall with nothing pushing back.</li>
  <li><strong>The collapsing can:</strong> steam-fill a can, seal it, cool it — the steam condenses, inside pressure plummets, and the atmosphere crumples steel like paper.</li>
</ul>
<p><strong>Worked example.</strong> In 1643, Torricelli sealed a long glass tube, filled it with mercury, and upended it in a dish. The mercury fell until a column about <strong>760 mm</strong> high remained, held up by nothing but atmospheric pressure pressing on the dish. That column is the atmosphere's measuring stick — the first <strong>barometer</strong> — and "760 mm of mercury" still means standard pressure (101.3 kPa) today. Water, 13.6 times less dense, would need a tube over 10 m tall: the reason no suction pump on Earth can lift water higher than about 10 m.</p>
<div class="did-you-know">
  <h4>Try It Yourself: The Upside-Down Glass</h4>
  <p>Fill a glass to the brim with water, press a stiff card flat on top, hold the card, and flip the glass over a sink. Let go of the card: it stays, holding the water in. The atmosphere pushes up on the card with roughly 100 kPa — hundreds of newtons on a card that size — while the water above pushes down with only a few. The air wins effortlessly.</p>
</div>
<p>Weather forecasters watch the barometer because falling pressure signals rising, stormy air; mountaineers feel pressure drop about 10 kPa per kilometre of altitude, which is why ears pop and high-altitude tea is disappointingly lukewarm — water boils below 100 °C when the air presses down less.</p>`,
        },
        {
          id: "pascals-principle",
          title: "Pascal's Principle & Hydraulic Machines",
          content: `
<p>Squeeze one end of a sealed tube of toothpaste and paste comes out the other. Blaise Pascal turned that everyday fact into a law of nature: <strong>pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and the walls of its container</strong>. Push on a trapped liquid anywhere, and the extra pressure appears everywhere — instantly, in all directions, at full strength.</p>
<p>That sounds modest. It is actually a force-multiplying machine. Connect two cylinders with a pipe, fill with oil, and fit pistons: a small piston of area 1 cm² and a large one of 100 cm². Push the small piston with 10 N:</p>
<ol>
  <li>Pressure created: P = F/A = 10 N ÷ 0.0001 m² = 100,000 Pa.</li>
  <li>Pascal: that same 100,000 Pa arrives under the large piston.</li>
  <li>Force delivered: F = P × A = 100,000 Pa × 0.01 m² = <strong>1,000 N</strong>.</li>
</ol>
<p>Ten newtons in, a thousand out — a hundredfold gain, set entirely by the ratio of piston areas. This is the <strong>hydraulic press</strong>, and it is everywhere: car brake pedals (your foot's push travels through brake fluid to all four wheels at once, equally — Pascal guarantees the balance), the jacks that lift cars, excavator arms, garbage-truck compactors, dentist chairs.</p>
<p>There is no free lunch, only a fair trade. To raise the large piston 1 cm, the small piston must travel 100 cm, pushing through the same volume of fluid. You gain force exactly as much as you give up distance — a preview of the "golden rule of mechanics" waiting in the final chapter.</p>
<div class="analogy">
  <h3>Analogy: The Crowd in a Sealed Room</h3>
  <p>A trapped liquid behaves like a tightly packed crowd in a closed room: shove one person at the door and the push propagates shoulder-to-shoulder until everyone, everywhere, presses outward a little harder — on every wall, in every direction, not just along the line of your shove. Liquids transmit pressure, not force — and pressure has no favourite direction.</p>
</div>
<p>Why liquids and not gases? Gases work (air brakes on trucks) but compress like sponges, making motion soft and delayed. Liquids are practically incompressible — squeeze water with 100 atmospheres and it shrinks by only half a percent — so hydraulic machines respond stiffly and immediately.</p>`,
        },
        {
          id: "archimedes-and-floating",
          title: "Archimedes' Principle: Why Ships Float",
          content: `
<p>Everything underwater feels lighter — you can lift a friend in a swimming pool. The lift is real: an upward <strong>buoyant force</strong> acts on any object in a fluid. Its origin is pressure-with-depth: water presses on the object's bottom harder than on its top (the bottom is deeper), and the mismatch adds up to a net upward push.</p>
<div class="key-concept">
  <h4>Archimedes' Principle</h4>
  <p>The buoyant force on an object equals the <strong>weight of the fluid it displaces</strong>. Push aside 2 litres of water (which weigh 20 N) and the water pushes you up with exactly 20 N — regardless of what you are made of.</p>
</div>
<p><strong>Worked example.</strong> A stone of volume 500 cm³ and mass 1.5 kg (weight 15 N) is lowered into water. It displaces 500 cm³ of water, which has mass 0.5 kg and weight 5 N. Buoyant force: <strong>5 N upward</strong>. The stone's apparent weight underwater is 15 − 5 = 10 N — a spring scale hooked to it reads exactly that. Buoyancy helps, but 5 N cannot beat 15 N: the stone sinks.</p>
<p>The contest is always the same: weight down versus buoyancy up.</p>
<ul>
  <li><strong>Weight &gt; buoyancy</strong> (object denser than the fluid): it sinks.</li>
  <li><strong>Weight &lt; buoyancy when fully submerged</strong> (object less dense): it rises and pops up, then floats — settling exactly deep enough that the water it displaces weighs precisely as much as it does. A floating object displaces its own weight of fluid.</li>
</ul>
<p>Now the steel ship makes complete sense. A 100,000-tonne ship settles until it has pushed aside 100,000 tonnes of seawater — its hollow hull has volume to spare for that. Load more cargo and it rides lower, displacing more; the painted <strong>Plimsoll line</strong> on every hull marks the legal limit. Submarines pump water into ballast tanks to make weight beat buoyancy (dive) and blow it out with compressed air to reverse the verdict (surface). Hot-air balloons float on the atmosphere by the same principle — a balloon full of hot, thin air weighs less than the cool air it displaces.</p>
<div class="did-you-know">
  <h4>Did You Know? The Original "Eureka!"</h4>
  <p>King Hiero of Syracuse suspected his goldsmith had cut the crown's gold with silver. Archimedes (c. 250 BCE) realized in the bath that submerging the crown reveals its volume — and volume plus weight gives density. The crown displaced more water than an equal weight of pure gold: less dense, therefore adulterated. Legend says he ran home shouting "Eureka!", too excited to dress. The method — weigh it, dunk it, divide — is exactly the ρ = m/V experiment from the last chapter.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A 600 N person stands on skis with a total area of 0.03 m². What pressure do they exert on the snow?",
          options: ["18 Pa", "20,000 Pa", "180,000 Pa", "2,000 Pa"],
          correctIndex: 1,
          explanation:
            "P = F/A = 600 N ÷ 0.03 m² = 20,000 Pa. Spread the same 600 N over ten times the area and the pressure drops tenfold — the entire design principle behind skis, snowshoes, and tank tracks.",
        },
        {
          question: "Why are dams built much thicker at the bottom than at the top?",
          options: [
            "Water pressure increases with depth, so the base must withstand the greatest push",
            "The extra thickness raises the dam's own weight so it cannot float away",
            "Deeper water is colder and expands against the wall",
            "It is cheaper to pour concrete at the bottom",
          ],
          correctIndex: 0,
          explanation:
            "Liquid pressure grows about 10 kPa per metre of water depth, so a 40 m reservoir pushes forty times harder at its base than one metre down. The dam's profile is essentially a pressure-versus-depth graph built in concrete.",
        },
        {
          question:
            "In a hydraulic press, a 10 N push on a 1 cm² piston delivers what force at a connected 100 cm² piston?",
          options: ["10 N — force is transmitted unchanged", "0.1 N", "1,000 N", "100,000 N"],
          correctIndex: 2,
          explanation:
            "Pascal's principle transmits pressure, not force: 10 N ÷ 1 cm² of pressure appears under the big piston too, and over 100 cm² that pressure delivers 100 times the force — 1,000 N. The catch: the small piston must move 100 times farther.",
        },
        {
          question: "According to Archimedes' principle, the buoyant force on a submerged object equals…",
          options: [
            "the object's own weight",
            "the weight of the fluid the object displaces",
            "the object's density times its depth",
            "the atmospheric pressure on the fluid's surface",
          ],
          correctIndex: 1,
          explanation:
            "Buoyancy equals the weight of displaced fluid — displace 500 cm³ of water (5 N) and you get 5 N of lift, whatever you are made of. Whether you float is then a contest between that lift and your own weight.",
        },
        {
          question:
            "Torricelli's barometer holds up a mercury column about 760 mm tall. What holds the mercury up?",
          options: [
            "The vacuum at the top of the tube sucks it upward",
            "Surface tension between mercury and glass",
            "The glass tube squeezes the mercury",
            "Atmospheric pressure pushing on the mercury in the open dish",
          ],
          correctIndex: 3,
          explanation:
            "A vacuum cannot pull — it simply pushes with nothing. The atmosphere presses down on the open dish with about 101 kPa, and that push supports 760 mm of mercury. When air pressure changes with the weather, the column height changes with it: a barometer.",
        },
      ],
    },
    {
      id: "work-energy-power-and-machines",
      title: "Work, Energy, Power & Machines",
      subtitle:
        "W = Fd, energy conservation, and why no machine can cheat the golden rule of mechanics",
      sections: [
        {
          id: "work",
          title: "Work: W = Fd",
          content: `
<p>In physics, <strong>work</strong> has a strict meaning far narrower than the everyday word: work is done only when a <strong>force moves something along its direction</strong>. The amount is the force times the distance moved:</p>
<p style="text-align:center"><strong>W = F × d</strong></p>
<p>The unit is the <strong>joule (J)</strong>: one newton acting through one metre. Lifting a small apple (weight ≈ 1 N) from the floor to a table 1 m up is almost exactly one joule — a handy mental anchor.</p>
<p><strong>Worked example.</strong> You lift a 10 kg box (weight ≈ 100 N) from the floor onto a 1.5 m shelf. Work done against gravity: W = 100 N × 1.5 m = <strong>150 J</strong>. Lift it twice as high, or lift a box twice as heavy: 300 J either way. Force and distance enter as equals.</p>
<p>The strict definition produces verdicts that surprise the muscles:</p>
<ul>
  <li><strong>Holding a heavy suitcase perfectly still:</strong> force, yes (100 N up) — but d = 0, so W = 0. Your burning arms are doing physiological work inside the muscle fibres, but no work is done <em>on the suitcase</em>.</li>
  <li><strong>Carrying the suitcase horizontally at steady speed:</strong> your force is upward, the motion is sideways — the force has no component along the motion, so again the work on the suitcase is zero.</li>
  <li><strong>Dragging a sled 50 m with a 40 N pull along the ground:</strong> W = 40 × 50 = 2,000 J. Now the force and motion line up, and real work flows.</li>
</ul>
<p>Nature keeps double-entry books. When you do 150 J of work lifting the box, gravity does 150 J of <em>negative</em> work resisting you — and stands ready to pay all 150 J back the moment the box falls. That repayment idea is the doorway to energy, next section.</p>
<div class="analogy">
  <h3>Analogy: Work Is Physics' Currency</h3>
  <p>Think of the joule as money and work as a payment. You pay 150 J into the box by lifting it; the box now holds 150 J of credit (energy) it can spend by falling. No motion along the force, no transaction — which is why the still, aching suitcase-holder is, in physics' cold ledger, spending nothing on the suitcase at all.</p>
</div>`,
        },
        {
          id: "kinetic-and-potential-energy",
          title: "Kinetic & Potential Energy — and Conservation",
          content: `
<p><strong>Energy is the ability to do work</strong> — the credit an object holds toward future pushes through distances. It is measured in joules, the same unit as work, because energy is simply stored work. In mechanics it comes in two great forms:</p>
<ul>
  <li><strong>Kinetic energy</strong> — energy of motion. A rolling bowling ball can do work on the pins; a moving hammer drives a nail. More mass and (especially) more speed mean more kinetic energy — doubling speed roughly <em>quadruples</em> it, which is why highway crashes are so much worse than parking-lot bumps.</li>
  <li><strong>Potential energy</strong> — stored energy of position or shape. A raised hammer, water behind a dam, a drawn bow, a compressed spring: each holds work done earlier, waiting for release.</li>
</ul>
<p><strong>Worked example.</strong> Lifting a 2 kg hammer (weight ≈ 20 N) a height of 1.5 m stores W = 20 N × 1.5 m = <strong>30 J</strong> of potential energy. Let it fall: gravity pays back the 30 J, converting it into kinetic energy on the way down, and the hammer arrives at the nail carrying 30 J to spend.</p>
<p>Watch a playground swing and you see the two forms trading places twice per cycle: highest points, all potential; bottom of the arc, all kinetic; and the sum stays fixed. That constancy is one of the deepest laws in all of science:</p>
<div class="key-concept">
  <h4>Key Concept: Conservation of Energy</h4>
  <p>Energy is never created and never destroyed — only transformed from one form to another or transferred from one object to another. Every machine, every collision, every process in this entire curriculum balances its energy books exactly. No exception has ever been observed.</p>
</div>
<p>But real swings do stop. Friction and air resistance skim energy off every pass — not destroying it, converting it to heat, gently warming the air and bearings. "Lost" energy is just energy that left the account you were watching for the messy small change of thermal energy — the subject of the next course, Heat.</p>
<div class="did-you-know">
  <h4>Did You Know? A Chocolate Bar Is a Mountain of Joules</h4>
  <p>One 50 g chocolate bar stores about 1,000,000 J of chemical energy. Lifting your 700 N body up one 3 m floor costs W = 700 × 3 = 2,100 J — so one bar funds, in principle, nearly 500 floors of climbing. Muscles are only about 20% efficient, so reality is closer to 100 floors — still the Empire State Building on a single snack.</p>
</div>`,
        },
        {
          id: "power",
          title: "Power: How Fast the Work Gets Done",
          content: `
<p>A crane and a worker with a rope can both raise a tonne of bricks to the tenth floor — the same work, W = Fd, either way. The difference is <em>time</em>: the crane does it in half a minute, the worker takes all afternoon. The rate of doing work is <strong>power</strong>:</p>
<p style="text-align:center"><strong>P = W/t</strong> (power = work ÷ time)</p>
<p>The unit is the <strong>watt (W)</strong>: one joule per second. It is the same watt as on light bulbs and phone chargers — electrical devices are rated by how fast they convert energy, which is exactly this quantity.</p>
<p><strong>Worked example.</strong> You (weight 700 N) jog up a staircase 3 m high in 6 s. Work against gravity: W = 700 N × 3 m = 2,100 J. Power: P = 2,100 J ÷ 6 s = <strong>350 W</strong> — about half a horsepower, and roughly the limit a fit human can sustain for more than a few seconds. Sprint it in 3 s and your power doubles to 700 W, though the work stays 2,100 J.</p>
<p>Calibrate your sense of the watt:</p>
<table>
  <thead>
    <tr><th>Source</th><th>Typical power</th></tr>
  </thead>
  <tbody>
    <tr><td>Human, steady effort</td><td>75–100 W</td></tr>
    <tr><td>Human, brief sprint</td><td>up to ≈ 1,000 W</td></tr>
    <tr><td>One horsepower</td><td>746 W</td></tr>
    <tr><td>Family car engine</td><td>≈ 80,000 W</td></tr>
    <tr><td>Large wind turbine</td><td>≈ 5,000,000 W</td></tr>
  </tbody>
</table>
<p>The "horsepower" is James Watt's own marketing invention from the 1780s: selling steam engines, he needed to tell mine owners how many horses each engine replaced, so he measured what a strong horse could sustain — about 746 W — and priced accordingly. The metric unit of power was later named for him; the horse got the imperial one.</p>
<div class="did-you-know">
  <h4>Try It Yourself: Measure Your Own Power</h4>
  <p>Find a staircase, estimate its height (count steps × about 0.17 m each), and time yourself walking up, then running. Compute W = your weight in newtons × height, then P = W/t for each trip. Most people find walking gives 200–300 W and a hard run 600–1,000 W. You have just performed the classic physics-lab power experiment with a phone stopwatch.</p>
</div>`,
        },
        {
          id: "levers-and-moments",
          title: "Levers & the Law of Moments",
          content: `
<p>"Give me a place to stand," Archimedes boasted, "and I will move the Earth." His instrument was the <strong>lever</strong> — a rigid bar pivoting on a fixed point, the <strong>fulcrum</strong> — and it is humanity's oldest force multiplier: crowbars, seesaws, scissors, wheelbarrows, bottle openers, your own forearm.</p>
<p>What a force does to a lever depends not just on its strength but on <em>where it acts</em>. The turning effectiveness of a force is its <strong>moment</strong>:</p>
<p style="text-align:center"><strong>moment = force × distance from the fulcrum</strong></p>
<p>A lever balances when the turning effects match:</p>
<div class="key-concept">
  <h4>The Law of Moments</h4>
  <p>A lever is in balance when the moment turning it one way equals the moment turning it the other: F₁ × d₁ = F₂ × d₂. A small force far from the fulcrum can hold — or beat — a large force close in.</p>
</div>
<p><strong>Worked example.</strong> A 600 N adult sits 1 m from a seesaw's pivot. Where must a 300 N child sit to balance? Moments must match: 600 N × 1 m = 300 N × d, so d = <strong>2 m</strong>. Half the force needs twice the arm — the seesaw is a moment-balancing instrument that every playground calibrates daily.</p>
<p><strong>Worked example.</strong> A crowbar 1 m long is set with its fulcrum 5 cm from the end under a crate weighing 1,000 N. Your hands push at 95 cm from the fulcrum. Required force: F × 0.95 m = 1,000 N × 0.05 m, giving F ≈ <strong>53 N</strong> — a one-finger push lifting a crate, with a force gain of about 19.</p>
<p>Note what the crowbar quietly charges you: your end sweeps through 19 times more distance than the crate rises. The force is multiplied; the work, F × d, is not. Hold that thought for the final section.</p>
<div class="analogy">
  <h3>Analogy: The Stubborn Door</h3>
  <p>You already play the law of moments daily: you push a door at the handle, as far from the hinges as possible. Push instead right beside the hinges and the same door feels immovable — tiny d, tiny moment. Door designers put handles at the far edge because everyone prefers small forces with long arms.</p>
</div>`,
        },
        {
          id: "machines-efficiency-golden-rule",
          title: "Pulleys, Efficiency & the Golden Rule of Mechanics",
          content: `
<p>The lever's trade — less force, more distance — turns out to be the universal contract of every simple machine.</p>
<p>A single <strong>fixed pulley</strong> (wheel on the well-top) multiplies nothing: you pull down with 100 N to raise 100 N of bucket. Its gift is redirection — pulling down is more convenient than hauling up. Add a <strong>movable pulley</strong> riding on the load, and the load hangs from <em>two</em> rope strands, each carrying half: now 200 N of load needs only about 100 N of pull. The price appears immediately — to lift the load 1 m you must haul in 2 m of rope, because both supporting strands must shorten. Block-and-tackle systems with more strands push the trade further: one sailor, six strands, six-fold force gain, six metres of rope hauled per metre of lift.</p>
<p>The <strong>inclined plane</strong> makes the same bargain: rolling a 900 N barrel up a 3 m-long ramp onto a 1 m-high truck bed needs (ideally) only 300 N of push — one third the force, three times the distance. Levers, pulleys, ramps, screws, hydraulic presses: centuries of tinkering distilled into one law that no gearing can evade:</p>
<div class="key-concept">
  <h4>The Golden Rule of Mechanics</h4>
  <p>Whatever a machine gains in force, it pays for in distance. No machine reduces the <em>work</em>: F × d out can never exceed F × d in. Machines reshape work into convenient forces — they never create it. This is energy conservation wearing overalls.</p>
</div>
<p>Reality is slightly worse than the golden rule, never better: friction in axles and the weight of the pulleys themselves eat a share. The honest scorecard is <strong>efficiency</strong>:</p>
<p style="text-align:center"><strong>efficiency = (useful work out ÷ work put in) × 100%</strong></p>
<p><strong>Worked example.</strong> Using the ramp, you actually push with 350 N (not the ideal 300 N) over its 3 m: work in = 350 × 3 = 1,050 J. Useful work = lifting 900 N by 1 m = 900 J. Efficiency = 900 ÷ 1,050 × 100% ≈ <strong>86%</strong> — the missing 150 J became heat in the scraping surfaces. Well-oiled pulleys reach 90%+; a car engine manages only about 25%; and every perpetual-motion machine ever proposed has failed for exactly this reason: you cannot win, and you cannot even break even.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A mover pushes a crate 4 m across a floor with a steady 50 N force. How much work is done?",
          options: ["12.5 J", "54 J", "200 J", "2,000 J"],
          correctIndex: 2,
          explanation:
            "W = F × d = 50 N × 4 m = 200 J. Work is force times the distance moved along the force's direction — both factors matter equally.",
        },
        {
          question:
            "You carry a heavy suitcase 100 m along level ground at constant speed. How much work does your upward supporting force do on the suitcase?",
          options: [
            "Zero — the force is vertical but the motion is horizontal",
            "Your force × 100 m",
            "The suitcase's weight × 100 m",
            "It depends on how fast you walk",
          ],
          correctIndex: 0,
          explanation:
            "Physics work requires motion along the force. Your force points up, the motion is sideways, so W = 0 on the suitcase — however tired your arms feel. Lifting it onto a shelf, by contrast, is real work: force and motion align.",
        },
        {
          question:
            "A motor does 3,000 J of work in 60 seconds. What is its power?",
          options: ["180,000 W", "3,000 W", "20 W", "50 W"],
          correctIndex: 3,
          explanation:
            "P = W/t = 3,000 J ÷ 60 s = 50 W. Power is the rate of doing work — the same 3,000 J done in 10 s would be 300 W. Watts measure speed of energy conversion, not the amount.",
        },
        {
          question: "What does the \"golden rule of mechanics\" say about simple machines?",
          options: [
            "A machine multiplies both force and distance if built well",
            "Whatever a machine gains in force, it loses in distance — work is never multiplied",
            "Machines with more pulleys always waste more work than they save",
            "Levers obey the rule but hydraulic presses do not",
          ],
          correctIndex: 1,
          explanation:
            "Every machine — lever, pulley, ramp, hydraulic press — trades force against distance, leaving the ideal work F × d unchanged. It is energy conservation in disguise, and it is why perpetual-motion machines are impossible.",
        },
        {
          question:
            "You put 400 J of work into a pulley system, which does 300 J of useful lifting. What is its efficiency, and where did the rest go?",
          options: [
            "75% — the remaining 100 J became heat through friction",
            "133% — the machine multiplied the work",
            "25% — the remaining energy was destroyed",
            "75% — the remaining 100 J vanished from the universe",
          ],
          correctIndex: 0,
          explanation:
            "Efficiency = 300 ÷ 400 × 100% = 75%. The missing 100 J was not destroyed — energy never is — it was converted to heat in rubbing axles and rope. Real machines always land below 100%, never above.",
        },
      ],
    },
  ],
};
