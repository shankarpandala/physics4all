export const subject8 = {
  id: "electricity-and-magnetism",
  number: 8,
  title: "Electricity & Magnetism",
  description:
    "From static sparks to the power grid: charge, circuits, Ohm's law, magnetism, and the motors and generators that electrified the world — all at first-pass, one-formula depth.",
  phase: 2,
  chapters: [
    {
      id: "static-electricity",
      title: "Static Electricity",
      subtitle:
        "Charge, attraction and repulsion, lightning, and a first feel for the electric field",
      sections: [
        {
          id: "charge-and-electrization",
          title: "Charge: The Hidden Property of Matter",
          content: `
<p>Around 600 BCE, Greek philosophers noticed something odd: rub a piece of amber with fur, and it picks up bits of straw. The Greek word for amber is <em>elektron</em> — and that little party trick is where the entire modern world of electricity begins.</p>
<p>What the Greeks were seeing was <strong>electric charge</strong>, a fundamental property of matter, as basic as mass. Every atom contains charged particles: <strong>protons</strong> in the nucleus carry positive charge, and <strong>electrons</strong> orbiting around it carry negative charge. Ordinary objects contain staggering numbers of both — but in equal amounts, so the charges cancel and the object appears neutral.</p>
<p>Rubbing changes that balance. When you rub a balloon on your hair, some electrons are literally scraped off your hair and onto the balloon. The balloon, now with extra electrons, becomes negatively charged; your hair, missing electrons, becomes positively charged. This process is called <strong>electrization</strong>, and it can happen three ways:</p>
<ul>
  <li><strong>By friction:</strong> rubbing two different materials transfers electrons from one to the other (balloon on hair, shoes on carpet, clothes in a dryer).</li>
  <li><strong>By contact:</strong> touching a charged object to a neutral one shares some of the charge.</li>
  <li><strong>By induction:</strong> simply bringing a charged object <em>near</em> a neutral one shifts the charges inside it around, without any touching at all.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Moving Sand, Not Making It</h3>
  <p>Charging an object never creates charge — it only moves it, like scooping sand from one bucket into another. The balloon gains exactly the electrons your hair loses. Physicists call this the <strong>conservation of charge</strong>: in every process ever observed, the total amount of charge stays the same.</p>
</div>
<p>Crucially, it is almost always the <strong>electrons</strong> that move. Protons are locked deep inside atomic nuclei; electrons on the outer fringes of atoms are comparatively easy to dislodge. So "positively charged" nearly always means "missing some electrons," not "gained protons." Keep that picture in mind — it explains everything from static cling to the current in a wire.</p>`,
        },
        {
          id: "attraction-repulsion-elementary-charge",
          title: "Opposites Attract: The Rules of Charge",
          content: `
<p>Two simple rules govern how charges interact, and they are worth committing to memory because all of electricity flows from them:</p>
<ul>
  <li><strong>Like charges repel</strong> — positive pushes away positive, negative pushes away negative.</li>
  <li><strong>Unlike charges attract</strong> — positive and negative pull toward each other.</li>
</ul>
<p>The force grows rapidly as charges get closer, and fades as they separate. (Subject 14 will make this exact with Coulomb's law; for now, "closer means much stronger" is the right intuition.)</p>
<p>Here is the remarkable part: charge is not a continuous fluid. It comes in indivisible packets. The smallest possible amount is the <strong>elementary charge</strong>, written <em>e</em>, carried by a single electron (negative) or proton (positive):</p>
<table>
  <thead>
    <tr><th>Particle</th><th>Charge</th><th>Location in atom</th></tr>
  </thead>
  <tbody>
    <tr><td>Proton</td><td>+e</td><td>Nucleus</td></tr>
    <tr><td>Neutron</td><td>0</td><td>Nucleus</td></tr>
    <tr><td>Electron</td><td>−e</td><td>Outer shells</td></tr>
  </tbody>
</table>
<p>Measured in the standard unit of charge, the <strong>coulomb (C)</strong>, one elementary charge is tiny: e ≈ 1.6 × 10⁻¹⁹ C. Flip that around and one coulomb is about six billion billion electrons — the coulomb is a wholesale unit.</p>
<div class="key-concept">
  <h4>Key Concept: Charge Is Quantized</h4>
  <p>Every charge ever measured is a whole-number multiple of e. You can have 5e or 1,000,000e of charge, but never 2.5e. Charge comes in steps, like coins with no smaller denomination.</p>
</div>
<h3>Try it yourself: Kitchen static lab</h3>
<ol>
  <li>Rub an inflated balloon vigorously on your hair or a wool sweater for ten seconds.</li>
  <li>Hold it near small torn scraps of paper — they leap up and stick. The charged balloon attracts even <em>neutral</em> paper by induction.</li>
  <li>Turn on a tap to a thin, gentle stream and bring the balloon close: the water visibly bends toward it.</li>
  <li>Press the balloon to a wall — it stays there, held by nothing but electrical attraction.</li>
</ol>
<p>Dry days work best; humidity lets charge leak away through the air.</p>`,
        },
        {
          id: "lightning",
          title: "Lightning: Static Electricity at Full Scale",
          content: `
<p>The spark that snaps from your finger to a doorknob and a bolt of lightning are the same phenomenon — separated charge violently reuniting — just at wildly different scales.</p>
<p>Inside a thundercloud, powerful updrafts hurl ice crystals and slushy hail pellets past each other. Their countless collisions act like trillions of tiny balloon-on-hair rubbings: lighter ice crystals tend to lose electrons and get carried to the top of the cloud, while heavier pellets gain electrons and sink. The result is a cloud with a <strong>positive top and a strongly negative base</strong> — a charge separation measured in hundreds of millions of volts.</p>
<p>The negative cloud base also pushes electrons away from the ground beneath it (induction again), leaving the ground positively charged. When the strain becomes too great, air itself — normally an excellent insulator — breaks down. An invisible, branching channel called a <strong>stepped leader</strong> zigzags down from the cloud; when it nears the ground, a connecting spark rises to meet it, and then the main event, the <strong>return stroke</strong>, blasts upward along the completed channel.</p>
<ul>
  <li>A typical stroke carries a current of roughly <strong>30,000 amperes</strong> — a household circuit carries 10 to 20.</li>
  <li>The channel is heated to about 30,000 °C, several times hotter than the Sun's surface.</li>
  <li>That sudden heating makes the air explode outward — the shockwave we hear as <strong>thunder</strong>.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Lightning Safety</h4>
  <p>The safest nearby place in a storm is inside a building or a metal-bodied car — not because of the rubber tires, but because current flows through the metal shell <em>around</em> the occupants and into the ground. Never shelter under an isolated tree: lightning favors the tallest path, and a struck tree can splash lethal current through the ground around it.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Earth hosts about 100 lightning flashes every second. And that doorknob spark of yours? It needs several thousand volts to jump even a few millimetres — but it involves so little total charge that it stings instead of harms. Voltage alone isn't what makes electricity dangerous; sustained current is.</p>
</div>`,
        },
        {
          id: "electric-field-qualitative",
          title: "The Electric Field: Action at a Distance",
          content: `
<p>The balloon on the wall raises an awkward question: how does one charge pull on another <em>without touching it</em>? Nothing visible stretches between them, yet the force is undeniably there. Physics answers with one of its most powerful ideas: the <strong>electric field</strong>.</p>
<p>The picture is this: a charge doesn't reach across empty space to grab another charge. Instead, it modifies the space around itself — it fills its surroundings with an electric field. Any other charge sitting in that field feels a force from the field <em>right where it is</em>. The field is the middleman.</p>
<div class="analogy">
  <h3>Analogy: The Weather Map</h3>
  <p>A wind map assigns an arrow to every point on the map — direction and strength of the wind there. An electric field does the same for space itself: at every point, it has a direction (which way a small positive charge would be pushed) and a strength (how hard). A charge dropped into the field simply reads its local arrow and responds.</p>
</div>
<p>We visualize fields with <strong>field lines</strong>, drawn by convention pointing <em>away from positive</em> charges and <em>toward negative</em> ones. Two reading rules:</p>
<ul>
  <li>The arrow direction shows which way a positive charge would be pushed.</li>
  <li>Where lines crowd together, the field is strong; where they spread out, it is weak. Near a charge the lines bunch tightly — matching the strong force there.</li>
</ul>
<p>For a single positive charge, lines radiate outward like a starburst. For a positive and negative pair, lines arc gracefully from one to the other — the classic pattern you can almost see when charged hair strands reach toward a balloon.</p>
<div class="key-concept">
  <h4>Key Concept: The Field Is Real</h4>
  <p>The field may sound like a bookkeeping trick, but it is physically real: fields store energy, and — as you'll see in later subjects — ripples in electric and magnetic fields travel through space as light itself. For now, hold the qualitative picture: <strong>charges create fields; fields push on charges.</strong> Subject 14 makes it quantitative.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "When you rub a balloon on your hair, what actually happens?",
          options: [
            "Protons move from the balloon to your hair",
            "New negative charge is created on the balloon",
            "Electrons transfer from your hair to the balloon",
            "Both objects gain positive charge",
          ],
          correctIndex: 2,
          explanation:
            "Only electrons move — protons are locked in atomic nuclei. Your hair loses electrons (becoming positive) and the balloon gains exactly those electrons (becoming negative). No charge is ever created or destroyed, only transferred.",
        },
        {
          question:
            "Two balloons are both rubbed on the same wool sweater and then hung side by side. What happens?",
          options: [
            "They push apart, because both carry the same kind of charge",
            "They snap together, because rubbing always causes attraction",
            "Nothing, because balloons cannot hold charge",
            "They spin in circles around each other",
          ],
          correctIndex: 0,
          explanation:
            "Both balloons take electrons from the wool, so both end up negatively charged. Like charges repel, so the balloons visibly push apart — a classic demonstration you can do at home.",
        },
        {
          question: "What does it mean that charge is 'quantized'?",
          options: [
            "Charge can only exist inside atoms",
            "All charge comes in whole-number multiples of the elementary charge e",
            "Charge gets weaker with distance",
            "Positive and negative charges always cancel exactly",
          ],
          correctIndex: 1,
          explanation:
            "Every measured charge is an exact multiple of e ≈ 1.6 × 10⁻¹⁹ C, the charge of one proton (or minus that, for an electron). You can have 3e or a billion e, but never half of e — charge comes in indivisible steps.",
        },
        {
          question:
            "Why is a metal-bodied car a relatively safe place during a lightning storm?",
          options: [
            "The rubber tires insulate it from the ground",
            "Cars are too small for lightning to notice",
            "The engine absorbs the electrical energy",
            "Current flows through the metal shell around the occupants and into the ground",
          ],
          correctIndex: 3,
          explanation:
            "The common 'rubber tires' explanation is a myth — no tire insulates against millions of volts. The real protection is the conducting metal body, which carries the current around the outside of the passenger compartment to the ground.",
        },
        {
          question:
            "In a diagram of electric field lines, what does it mean where the lines are drawn close together?",
          options: [
            "The charge there is negative",
            "The field there is strong",
            "The field there is weak",
            "No charge can exist at that location",
          ],
          correctIndex: 1,
          explanation:
            "Field-line density encodes field strength: crowded lines mean a strong field, spread-out lines mean a weak one. That's why lines bunch tightly near a charge, where the force on other charges is greatest.",
        },
      ],
    },
    {
      id: "current-and-circuits",
      title: "Current & Circuits",
      subtitle:
        "Current, voltage, and resistance — and how to read and build series and parallel circuits",
      sections: [
        {
          id: "what-is-current",
          title: "Current: Charge on the Move",
          content: `
<p>Static electricity is charge sitting still. Set it flowing, and you have <strong>electric current</strong> — the working fluid of every device you own. Current is simply the rate at which charge flows past a point:</p>
<div class="key-concept">
  <h4>Key Concept: The Ampere</h4>
  <p>Current (symbol <strong>I</strong>) is measured in <strong>amperes</strong>, or amps (A). One ampere means one coulomb of charge — about six billion billion electrons — flowing past a point every second. A phone charger cable carries around 1–2 A; a kettle draws about 10 A; a lightning bolt, roughly 30,000 A.</p>
</div>
<p>In a metal wire, the moving charges are the loosely-held outer electrons of the metal atoms — a sea of them, free to drift. Two things about this drift surprise almost everyone:</p>
<ul>
  <li><strong>The electrons themselves crawl.</strong> Their average drift speed in a household wire is well under a millimetre per second. What travels near the speed of light is the electric field — the <em>push</em> — which sets electrons everywhere in the wire moving almost simultaneously. It's like a pipe already full of water: open the valve and water emerges at the far end at once, even though no single water molecule sprinted through.</li>
  <li><strong>Conventional current points the 'wrong' way.</strong> By historical accident (Benjamin Franklin guessed before electrons were discovered), current is defined as flowing from the battery's positive terminal, around the circuit, to the negative terminal — opposite to the actual electron drift. Every diagram on Earth uses this convention, so we will too. It makes no difference to any calculation.</li>
</ul>
<p>For current to flow at all, charges need an unbroken loop — a <strong>closed circuit</strong> — from one battery terminal to the other. Break the loop anywhere, even with a millimetre air gap, and the flow stops everywhere instantly. That's all a switch is: a deliberate, reusable break.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Batteries deliver <strong>direct current (DC)</strong> — a steady one-way flow. Wall outlets deliver <strong>alternating current (AC)</strong>, in which the push reverses direction 50 or 60 times per second, so the electrons just jiggle back and forth. Why the grid prefers AC becomes clear in the final chapter, when you meet the transformer.</p>
</div>`,
        },
        {
          id: "voltage-and-resistance",
          title: "Voltage Pushes, Resistance Resists",
          content: `
<p>Current doesn't flow on its own — something must push it, and something always opposes it. Those two somethings complete the three-word vocabulary of circuits.</p>
<p><strong>Voltage</strong> (symbol <em>V</em>, unit the <strong>volt</strong>) is the push. More precisely, it measures how much energy the source gives to each coulomb of charge it drives around the circuit: one volt is one joule per coulomb. A 9 V battery hands each coulomb nine joules of energy to spend — in the bulb, the motor, wherever the circuit directs it.</p>
<div class="analogy">
  <h3>Analogy: The Water Circuit</h3>
  <p>Picture a closed loop of pipe with a pump. The pump (battery) creates pressure difference (voltage), water flows around the loop (current), and a narrow constriction in the pipe (resistance) limits how fast it can flow. Note what the pump does <em>not</em> do: it doesn't create water, it just pushes existing water around. Likewise a battery creates no electrons — the wire is already full of them — it only pumps them.</p>
</div>
<p>Some everyday voltages:</p>
<table>
  <thead>
    <tr><th>Source</th><th>Voltage</th></tr>
  </thead>
  <tbody>
    <tr><td>AA battery</td><td>1.5 V</td></tr>
    <tr><td>Phone charger (USB)</td><td>5 V</td></tr>
    <tr><td>Car battery</td><td>12 V</td></tr>
    <tr><td>Mains outlet</td><td>230 V (120 V in North America)</td></tr>
    <tr><td>Overhead transmission line</td><td>up to 400,000 V</td></tr>
    <tr><td>Thundercloud to ground</td><td>~100,000,000 V</td></tr>
  </tbody>
</table>
<p><strong>Resistance</strong> (symbol <em>R</em>, unit the <strong>ohm, Ω</strong>) is the opposition. As electrons drift, they constantly collide with the vibrating atoms of the material, losing energy at every bump — that's why wires warm up. Every component has some resistance: thick copper wire has very little, a bulb filament has a lot on purpose, and an open air gap has so much that current effectively stops.</p>
<div class="key-concept">
  <h4>Key Concept: The Circuit Triangle</h4>
  <p><strong>Voltage</strong> is the push (volts). <strong>Current</strong> is the flow (amps). <strong>Resistance</strong> is the opposition (ohms). Every circuit question you will ever meet is about how these three negotiate with each other — and the next chapter reveals the single formula that ties them together.</p>
</div>`,
        },
        {
          id: "circuit-diagrams",
          title: "Reading Circuit Diagrams",
          content: `
<p>Real circuits are a tangle of wires, but electrically only one thing matters: <em>what is connected to what</em>. Circuit diagrams (schematics) strip away the tangle and show pure connection logic, using standard symbols any engineer on Earth can read:</p>
<ul>
  <li><strong>Battery:</strong> a pair of parallel lines, one long (positive terminal) and one short (negative).</li>
  <li><strong>Wire:</strong> a straight line — drawn with right-angle corners for tidiness, though real wires bend any way they like.</li>
  <li><strong>Bulb:</strong> a circle with a cross or loop inside.</li>
  <li><strong>Resistor:</strong> a small rectangle (or a zigzag in the American style).</li>
  <li><strong>Switch:</strong> a break in the line with a pivoting lever — open means off, closed means on.</li>
  <li><strong>Ammeter (A in a circle):</strong> measures current, placed <em>in</em> the path of the flow.</li>
  <li><strong>Voltmeter (V in a circle):</strong> measures voltage, connected <em>across</em> a component like a bridge.</li>
</ul>
<p>To read any schematic, put your finger on the battery's positive terminal and trace the loop: every complete path back to the negative terminal is a route current can take. If your finger can't get home without crossing a gap, no current flows on that route.</p>
<h3>Try it yourself: The one-bulb circuit</h3>
<ol>
  <li>You need: one AA battery, one small flashlight bulb (or a bulb from a battery-powered string light), and a strip of aluminium foil about 20 cm long, folded into a narrow ribbon.</li>
  <li>Press one end of the foil ribbon against the battery's flat negative end.</li>
  <li>Touch the bulb's metal base to the battery's positive bump, and touch the other end of the foil to the metal side of the bulb.</li>
  <li>The bulb lights — you have built a complete circuit. Lift any contact and it dies instantly: the loop is broken.</li>
</ol>
<div class="key-concept">
  <h4>Safety Note</h4>
  <p>Battery experiments at 1.5 V are completely safe — the voltage is far too low to push harmful current through your skin. The one rule: <strong>never experiment with mains outlets or their wiring.</strong> At 230 V, the same curiosity is lethal. Batteries only.</p>
</div>
<p>One more habit worth building: a wire directly from one battery terminal to the other with <em>nothing</em> in between is a <strong>short circuit</strong> — near-zero resistance, so a huge current flows, and the battery and wire heat up fast. Even in your foil experiment, you'll notice the foil warming if bulb contact slips. Circuits always need something in the loop to do the resisting.</p>`,
        },
        {
          id: "series-and-parallel",
          title: "Series and Parallel: The Two Ways to Connect",
          content: `
<p>Give a battery two bulbs and you face electricity's most fundamental design decision. There are exactly two pure ways to wire them, and they behave completely differently.</p>
<p><strong>Series</strong> means one after another, in a single loop — the current has no choice but to pass through both bulbs in turn.</p>
<ul>
  <li>The <strong>same current</strong> flows through every component (there's nowhere else for it to go).</li>
  <li>The components <strong>share the battery's voltage</strong> between them — two identical bulbs get half each, so each glows dimmer than it would alone.</li>
  <li>Adding more components increases total resistance, so the current drops.</li>
  <li>The fatal flaw: <strong>one break kills everything</strong>. If one bulb burns out, the loop is open and all go dark — the misery of old-style Christmas-light strings, hunting for the one dead bulb.</li>
</ul>
<p><strong>Parallel</strong> means side by side, each component on its own branch bridging the battery's terminals.</p>
<ul>
  <li>Every branch gets the <strong>full battery voltage</strong>, so each bulb glows at full brightness.</li>
  <li>The current <strong>splits</strong> among the branches and rejoins — the battery supplies the sum, and works harder with every branch added.</li>
  <li>Each branch is <strong>independent</strong>: switch one off, unscrew one bulb, and the others don't even notice.</li>
</ul>
<table>
  <thead>
    <tr><th></th><th>Series</th><th>Parallel</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Current</strong></td><td>Same everywhere</td><td>Splits among branches</td></tr>
    <tr><td><strong>Voltage</strong></td><td>Shared between components</td><td>Full voltage on every branch</td></tr>
    <tr><td><strong>One component fails</strong></td><td>All stop</td><td>Others unaffected</td></tr>
  </tbody>
</table>
<div class="key-concept">
  <h4>Key Concept: Your Home Is Parallel</h4>
  <p>Every outlet and light in your house is wired in parallel across the mains supply. That's why each appliance receives the full 230 V (or 120 V), and why turning off the toaster doesn't darken the fridge. It's also why plugging in more appliances draws more total current — a fact that matters enormously in the chapter on fuses and safety.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Series connections have their uses too: batteries stacked in series add their voltages. The 9 V rectangular battery is secretly six tiny 1.5 V cells in series inside one shell, and an electric-car pack puts thousands of small cells in series-parallel combinations to reach around 400 V.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What does a current of 1 ampere physically mean?",
          options: [
            "One electron passes each second",
            "One volt of push is applied to the wire",
            "One coulomb of charge flows past a point each second",
            "The wire has one ohm of resistance",
          ],
          correctIndex: 2,
          explanation:
            "Current is the rate of charge flow: 1 A = 1 coulomb per second. Since one coulomb is about six billion billion elementary charges, even a small current involves an immense number of electrons.",
        },
        {
          question: "Which statement best describes voltage?",
          options: [
            "The number of electrons stored in a battery",
            "The speed of the electrons in the wire",
            "The opposition a wire offers to current",
            "The energy given to each coulomb of charge — the 'push' driving the current",
          ],
          correctIndex: 3,
          explanation:
            "Voltage is energy per charge: one volt is one joule per coulomb. A battery doesn't create or store electrons — the wire is already full of them — it gives each passing coulomb energy to spend around the circuit, like a pump creating pressure.",
        },
        {
          question:
            "Three bulbs are wired in series and one of them burns out. What happens to the other two?",
          options: [
            "They both go dark, because the single loop is broken",
            "They glow brighter, since they now share the voltage two ways",
            "They keep glowing at the same brightness",
            "They flicker but stay lit",
          ],
          correctIndex: 0,
          explanation:
            "A series circuit is one single loop, and current must pass through every component. A burned-out bulb is an open gap, so current stops everywhere — this is why old series-wired holiday lights all died together.",
        },
        {
          question: "Why are household outlets wired in parallel rather than in series?",
          options: [
            "Parallel wiring uses less copper wire",
            "Each appliance gets the full mains voltage and works independently of the others",
            "Parallel circuits carry less total current",
            "Series wiring only works with batteries, not AC",
          ],
          correctIndex: 1,
          explanation:
            "In parallel, every branch spans the full supply voltage, and switching one branch off doesn't affect the rest. In series, appliances would share the voltage unpredictably and unplugging one would kill them all.",
        },
        {
          question:
            "Electrons drift through a wire at less than a millimetre per second. Why does a lamp light the instant you flip the switch?",
          options: [
            "Electrons secretly travel at the speed of light",
            "The lamp stores electrons from the last time it was on",
            "Heat from the switch travels to the bulb",
            "The electric field's push spreads through the wire almost instantly, moving all the electrons at once",
          ],
          correctIndex: 3,
          explanation:
            "The wire is already packed with free electrons, like a hose already full of water. Closing the switch lets the field propagate at nearly light speed, so electrons everywhere in the circuit — including inside the lamp — begin drifting essentially simultaneously.",
        },
      ],
    },
    {
      id: "ohms-law-and-resistance",
      title: "Ohm's Law & Resistance",
      subtitle:
        "V = IR — the one formula that governs every circuit — and what resistance depends on",
      sections: [
        {
          id: "v-equals-ir",
          title: "V = IR: The Law That Runs Every Circuit",
          interactive: "ohms-law",
          content: `
<p>In the 1820s, a German schoolteacher named Georg Ohm did something painstaking: he measured, for wire after wire, how much current flowed when he applied different voltages. The pattern he found is the single most-used equation in all of electricity:</p>
<div class="key-concept">
  <h4>Key Concept: Ohm's Law</h4>
  <p><strong>V = I × R</strong> — voltage equals current times resistance. Push harder (more volts) and proportionally more current flows; oppose harder (more ohms) and proportionally less flows. One ohm is defined by this very relationship: a component has a resistance of 1 Ω if 1 volt drives 1 ampere through it.</p>
</div>
<p>The real power of the law is that knowing any two of the three quantities hands you the third. Rearranged:</p>
<ul>
  <li><strong>I = V / R</strong> — to find the current: a 12 V battery across a 6 Ω resistor drives I = 12/6 = <strong>2 A</strong>.</li>
  <li><strong>R = V / I</strong> — to find the resistance: if a bulb draws 0.5 A from a 3 V supply, its resistance is R = 3/0.5 = <strong>6 Ω</strong>.</li>
  <li><strong>V = I × R</strong> — to find the voltage: pushing 2 A through a 10 Ω heating element requires V = 2 × 10 = <strong>20 V</strong>.</li>
</ul>
<p>Notice what the proportionality buys you, thanks to the ratio reasoning you've practiced since Subject 1: double the voltage and the current doubles; double the resistance and the current halves. No recalculation needed — just scale.</p>
<div class="analogy">
  <h3>Analogy: The Garden Hose</h3>
  <p>Turn the tap higher (more voltage) and more water flows. Pinch the hose (more resistance) and less flows. V = IR is nothing more than this everyday intuition, made exact enough to engineer with.</p>
</div>
<p>Use the interactive circuit below to make the law physical: drag the voltage up and watch the current rise in lockstep; crank up the resistance and watch it choke the flow. Try to predict each meter reading <em>before</em> you release the slider — that habit, predict-then-check, is how the formula becomes instinct.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Not everything obeys Ohm's law. A filament's resistance climbs as it heats; diodes and transistors flout the law entirely — which is precisely what makes them useful. Materials that do obey it, like metals at steady temperature, are called <em>ohmic</em>. For this course, V = IR is your reliable workhorse.</p>
</div>`,
        },
        {
          id: "what-resistance-depends-on",
          title: "What Makes a Wire Resist?",
          content: `
<p>Ohm's law treats resistance as a given number. But where does that number come from? Picture the microscopic scene: drifting electrons threading their way through a lattice of vibrating atoms, colliding constantly. Everything that shapes a wire's resistance follows from that picture.</p>
<table>
  <thead>
    <tr><th>Factor</th><th>Effect on resistance</th><th>Why</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Length</strong></td><td>Longer wire → more resistance (double the length, double the R)</td><td>More lattice to fight through — more collisions per trip</td></tr>
    <tr><td><strong>Thickness</strong></td><td>Thicker wire → less resistance (double the cross-section area, halve the R)</td><td>More side-by-side lanes for electrons to use</td></tr>
    <tr><td><strong>Material</strong></td><td>Copper conducts superbly; nichrome resists ~65× more; rubber essentially blocks flow</td><td>Materials differ hugely in how many free electrons they offer and how often those electrons scatter</td></tr>
    <tr><td><strong>Temperature</strong></td><td>Hotter metal → more resistance</td><td>Heated atoms vibrate harder and get in the way more</td></tr>
  </tbody>
</table>
<div class="analogy">
  <h3>Analogy: The Crowded Corridor</h3>
  <p>Electrons in a wire are like people crossing a crowded station hall. A longer hall means more people to dodge (length). A wider hall offers more open lanes (thickness). Some halls are naturally emptier than others (material). And if the crowd is agitated and milling about, crossing gets even harder (temperature).</p>
</div>
<p>These four factors show up all over daily life:</p>
<ul>
  <li><strong>Extension cords</strong> for heaters must be short and thick. A long, thin cord adds real resistance in series with the appliance — it steals voltage and, worse, heats up itself.</li>
  <li><strong>Jump-starting a car</strong> takes fat cables: hundreds of amps would cook a thin wire.</li>
  <li><strong>An incandescent filament</strong> is deliberately long, hair-thin, and coiled — maximum resistance packed into a tiny space, so it runs white-hot.</li>
  <li><strong>Charging cables</strong> that are cheap and thin visibly charge phones more slowly than short, thick ones.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Design, Not Accident</h4>
  <p>Every wire in every device is a deliberate trade-off between these four factors. Where engineers want current delivered — power cords, wiring in walls — resistance is minimized. Where they want heat or light — toasters, filaments — resistance is built in on purpose.</p>
</div>`,
        },
        {
          id: "resistivity-intro",
          title: "Resistivity: A Number for Every Material",
          content: `
<p>Length and thickness describe a particular wire, but the "material" factor deserves its own number — one that captures how much a substance resists current regardless of its shape. That number is <strong>resistivity</strong>, symbol ρ (the Greek letter rho).</p>
<p>The relationship is tidy: resistance equals resistivity times length, divided by cross-sectional area — <strong>R = ρL/A</strong>. You won't need to calculate with it much in this first pass; what matters is reading it. It says exactly what the last section showed: R grows with length, shrinks with thickness, and is scaled overall by the material's ρ.</p>
<p>What's astonishing is the <em>range</em> of resistivities in nature — about 24 powers of ten, one of the widest ranges of any physical property:</p>
<table>
  <thead>
    <tr><th>Material</th><th>Resistivity (Ω·m)</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>Silver</td><td>1.6 × 10⁻⁸</td><td>Best common conductor — too pricey for wiring</td></tr>
    <tr><td>Copper</td><td>1.7 × 10⁻⁸</td><td>The workhorse of wiring</td></tr>
    <tr><td>Aluminium</td><td>2.8 × 10⁻⁸</td><td>Overhead power lines (light and cheap)</td></tr>
    <tr><td>Tungsten</td><td>5.6 × 10⁻⁸</td><td>Filaments — survives white heat</td></tr>
    <tr><td>Nichrome</td><td>≈ 1.1 × 10⁻⁶</td><td>Heating elements in toasters and kettles</td></tr>
    <tr><td>Glass, rubber</td><td>≈ 10¹⁰ to 10¹⁴</td><td>Insulation</td></tr>
  </tbody>
</table>
<p>Read the engineering straight off the table. Copper: second-best conductor, affordable — into the walls it goes. Aluminium: slightly worse per metre but far lighter — it wins for kilometre-long cables hanging from pylons. Nichrome: resists ~65 times more than copper and shrugs off high temperatures without oxidizing — perfect for glowing toaster coils. And the insulators' colossal values are why a millimetre of plastic sheathing lets you safely grip a live cord.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Cool certain materials far enough and their resistivity doesn't just shrink — it vanishes. <strong>Superconductors</strong> carry current with exactly zero resistance; a current started in a superconducting ring has been observed to circulate for years without any battery. MRI scanners use superconducting coils to sustain their enormous magnetic fields. The catch: they need extreme cold, typically below about −180 °C.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A 230 V supply is connected across a heating element with a resistance of 46 Ω. What current flows?",
          options: [
            "0.2 A",
            "10.6 kA",
            "5 A",
            "46 A",
          ],
          correctIndex: 2,
          explanation:
            "Use I = V/R: 230 V ÷ 46 Ω = 5 A. Ohm's law rearranges to give whichever quantity you're missing — here, voltage and resistance were known, so divide to find the current.",
        },
        {
          question:
            "A bulb draws 0.5 A when connected to a 3 V battery. What is its resistance?",
          options: [
            "1.5 Ω",
            "6 Ω",
            "0.17 Ω",
            "3.5 Ω",
          ],
          correctIndex: 1,
          explanation:
            "R = V/I = 3 V ÷ 0.5 A = 6 Ω. A common slip is multiplying instead of dividing (giving 1.5) — remember resistance asks how many volts are needed per ampere of current.",
        },
        {
          question:
            "You replace a wire with one of the same material and thickness but twice as long. Its resistance…",
          options: [
            "doubles",
            "halves",
            "stays the same",
            "quadruples",
          ],
          correctIndex: 0,
          explanation:
            "Resistance is proportional to length: twice the wire means twice the atomic lattice for electrons to fight through, so twice the resistance. To reduce resistance you'd shorten the wire — or make it thicker.",
        },
        {
          question:
            "Which change would decrease a wire's resistance?",
          options: [
            "Making it longer",
            "Letting it heat up",
            "Swapping copper for nichrome",
            "Making it thicker",
          ],
          correctIndex: 3,
          explanation:
            "A thicker wire offers more parallel 'lanes' for electron flow — doubling the cross-sectional area halves the resistance. The other three options all increase it: more length, more thermal jostling, or a material with ~65× copper's resistivity.",
        },
        {
          question:
            "Why is nichrome, rather than copper, used for the glowing element in a toaster?",
          options: [
            "Nichrome is a better conductor than copper",
            "Nichrome has high resistivity and survives high temperatures, so it heats up strongly without failing",
            "Copper cannot carry enough current",
            "Nichrome is much cheaper than copper",
          ],
          correctIndex: 1,
          explanation:
            "A heating element needs substantial resistance to convert electrical energy into heat, plus the ability to run red-hot in air without melting or oxidizing away. Nichrome delivers both; copper's resistivity is ~65× lower — great for delivering current, terrible for deliberately making heat.",
        },
      ],
    },
    {
      id: "electrical-power-and-home-electricity",
      title: "Electrical Power & Home Electricity",
      subtitle:
        "P = VI, Joule heating, your electricity bill, and the safety systems in your walls",
      sections: [
        {
          id: "p-equals-vi",
          title: "P = VI: How Much Power Does It Draw?",
          content: `
<p>Every appliance in your home is, at heart, a device for converting electrical energy into something else — light, heat, motion, sound. The rate of that conversion is <strong>power</strong>, measured in <strong>watts</strong> (W): one watt is one joule of energy per second, the same unit you met in mechanics.</p>
<div class="key-concept">
  <h4>Key Concept: The Power Formula</h4>
  <p><strong>P = V × I</strong> — power equals voltage times current. It makes intuitive sense: voltage is the energy each coulomb carries (joules per coulomb), and current is how many coulombs arrive per second. Multiply them and you get joules per second — watts.</p>
</div>
<p>This formula turns the label on any appliance into real information. Typical values:</p>
<table>
  <thead>
    <tr><th>Appliance</th><th>Power</th><th>Current at 230 V</th></tr>
  </thead>
  <tbody>
    <tr><td>Phone charger</td><td>10 W</td><td>≈ 0.04 A</td></tr>
    <tr><td>LED bulb</td><td>9 W</td><td>≈ 0.04 A</td></tr>
    <tr><td>Laptop</td><td>60 W</td><td>≈ 0.26 A</td></tr>
    <tr><td>Refrigerator (running)</td><td>150 W</td><td>≈ 0.65 A</td></tr>
    <tr><td>Microwave oven</td><td>1,100 W</td><td>≈ 4.8 A</td></tr>
    <tr><td>Electric kettle</td><td>2,300 W</td><td>10 A</td></tr>
    <tr><td>Electric shower</td><td>8,500 W</td><td>≈ 37 A (needs its own heavy circuit)</td></tr>
  </tbody>
</table>
<p>The pattern leaps out: <strong>anything that makes heat is power-hungry</strong>. Electronics sip; kettles, heaters, ovens, and dryers gulp. Rearranging to I = P/V is how electricians size wiring: a 2,300 W kettle on a 230 V supply draws 2300/230 = 10 A, so its circuit and plug must handle at least that.</p>
<p>P = VI also teams up with Ohm's law. Since V = IR, you can substitute to taste: the same power can be written P = I²R or P = V²/R. You don't need to memorize the variants now — just notice that power, voltage, current, and resistance are one interlocking family, and any two determine the rest.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>In North America, outlets supply 120 V, so the same 1,800 W kettle draws 15 A — right at the limit of a standard circuit. That's why kettles are noticeably slower there, and why 230 V regions have a small practical edge in tea-making.</p>
</div>`,
        },
        {
          id: "joule-heating",
          title: "Joule Heating: Wires That Warm",
          content: `
<p>Wherever current flows through resistance, electrical energy becomes heat. The drifting electrons collide with the atoms of the material, and every collision passes on a jolt of energy that sets the atoms vibrating harder — which is exactly what "getting hotter" means. This is <strong>Joule heating</strong>, named for James Joule, the same brewer-physicist behind the energy unit.</p>
<p>Whether Joule heating is a feature or a menace depends entirely on where it happens.</p>
<p><strong>On purpose</strong> — a whole catalogue of appliances is nothing but a resistor engineered to run hot:</p>
<ul>
  <li>Toasters and kettles: nichrome elements glowing red or heating water.</li>
  <li>Electric ovens, irons, hair dryers, space heaters, underfloor heating.</li>
  <li>The old incandescent bulb: a tungsten filament Joule-heated to ~2,700 °C until it glows white. Only ~5% of its energy became light — the other 95% was heat, which is why LEDs, giving the same light for a tenth of the power, replaced it worldwide.</li>
</ul>
<p><strong>By accident</strong> — the same physics turns dangerous when heat appears where it isn't wanted:</p>
<ul>
  <li><strong>Overloaded extension cords:</strong> plug a heater into a thin cord and the cord's own resistance dissipates real power along its length. Coiled or under a carpet, that heat can't escape — cords have started house fires this way. Always match the cord's current rating to the appliance.</li>
  <li><strong>Loose connections:</strong> a corroded or loose contact is a spot of unexpected resistance; at high current it becomes a tiny hotplate inside a wall socket. Warm plugs and scorch marks are warnings to take seriously.</li>
  <li><strong>Transmission losses:</strong> every kilometre of grid cable wastes some energy as heat. Utilities fight this with thick aluminium conductors and — as the final chapter explains — extremely high voltages, which allow the same power to flow at low, low current.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Friction for Electricity</h3>
  <p>Joule heating is the electrical twin of friction. Rub your hands and motion becomes warmth; push current through resistance and electrical energy becomes warmth. Both are unavoidable taxes — and both can be harnessed (striking a match, toasting bread) or minimized (oiling a bearing, thickening a wire), depending on what you're trying to do.</p>
</div>
<div class="key-concept">
  <h4>Key Concept: Heat Rises with the Square of Current</h4>
  <p>Because heating power is P = I²R, doubling the current through a wire makes it heat <strong>four times</strong> faster. This is why overloads escalate quickly, and why every safety device in the next sections watches current above all else.</p>
</div>`,
        },
        {
          id: "kwh-and-bills",
          title: "The Kilowatt-Hour: Buying Energy by the Box",
          content: `
<p>Your electricity provider doesn't sell you power — it sells you <strong>energy</strong>: power multiplied by time. The billing unit is the <strong>kilowatt-hour (kWh)</strong>: the energy used by a 1,000 W appliance running for one hour. In mechanics units, 1 kWh = 1,000 W × 3,600 s = <strong>3.6 million joules</strong> — the joule is simply too small a coin for monthly billing.</p>
<p>The recipe for any appliance's cost is three steps: <strong>kilowatts × hours = kWh, then kWh × price = cost.</strong> Using a typical price of $0.25 per kWh (check your own bill — prices vary widely by country and utility):</p>
<table>
  <thead>
    <tr><th>Appliance</th><th>Power</th><th>Usage</th><th>Energy</th><th>Cost</th></tr>
  </thead>
  <tbody>
    <tr><td>Kettle (one boil)</td><td>2.3 kW</td><td>3 min (0.05 h)</td><td>0.115 kWh</td><td>≈ 3 cents</td></tr>
    <tr><td>LED bulb, evening</td><td>0.009 kW</td><td>5 h</td><td>0.045 kWh</td><td>≈ 1 cent</td></tr>
    <tr><td>Laptop workday</td><td>0.06 kW</td><td>8 h</td><td>0.48 kWh</td><td>≈ 12 cents</td></tr>
    <tr><td>Space heater, month</td><td>2 kW</td><td>6 h/day × 30</td><td>360 kWh</td><td>≈ $90</td></tr>
    <tr><td>Fridge, month</td><td>≈ 0.05 kW average</td><td>24 h/day × 30</td><td>≈ 36 kWh</td><td>≈ $9</td></tr>
  </tbody>
</table>
<p>Two lessons hide in that table. First, <strong>heat plus hours equals money</strong>: the space heater costs ten times more per month than the always-on fridge, because it combines high power with long runtimes. Cutting one hour of heater use per day saves more than obsessively switching off every LED in the house. Second, small powers still add up when they never turn off: a home's <strong>standby load</strong> — TVs, routers, chargers, consoles idling — commonly totals 20–40 W around the clock, which at 30 W is 0.03 kW × 720 h ≈ 22 kWh a month, roughly $5.40 for nothing.</p>
<div class="key-concept">
  <h4>Key Concept: Power Is a Rate, Energy Is an Amount</h4>
  <p>A kilowatt (kW) is like a car's speed; a kilowatt-hour (kWh) is like the distance travelled. Your meter is an odometer for energy: the spinning disc or digital counter accumulates kWh, and the bill is just the month's difference times the price.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>One kWh — a few cents' worth of electricity — equals the mechanical work of a fit human labouring for most of a day. Measured in servant-hours, electricity is history's greatest bargain, which is precisely why its arrival transformed civilization within two generations.</p>
</div>`,
        },
        {
          id: "fuses-earthing-safety",
          title: "Fuses, Earthing, and Staying Alive",
          content: `
<p>Mains electricity delivers marvellous power at lethal voltage; it feels mundane only because of the safety engineering stacked in your walls. Each layer is worth knowing.</p>
<p><strong>Layer 1: Fuses and circuit breakers — protecting the wiring.</strong> A fuse is a deliberately weak link: a thin wire that Joule-heats and melts if the current exceeds its rating, breaking the circuit. A circuit breaker does the same job with an electromagnet or thermal strip tripping a switch — resettable instead of sacrificial. The rating (13 A, 16 A, 20 A…) is chosen to be above normal demand but below the current that would dangerously overheat the cables in the wall. Two rules follow: never replace a fuse with a higher-rated one (the fuse will be fine — your wall wiring becomes the fuse), and never "fix" one with foil or a nail.</p>
<p><strong>Layer 2: Earthing — protecting against live metal.</strong> The third pin on a plug connects the appliance's metal casing, via the earth wire, literally to a rod in the ground. Suppose a loose live wire inside a washing machine touches the metal case. Without earthing, the case silently sits at 230 V, waiting for a hand. With earthing, the fault current instantly floods down the low-resistance earth path, the surge blows the fuse, and the appliance goes dead — failing <em>safe</em>.</p>
<p><strong>Layer 3: RCD / GFCI — protecting people directly.</strong> A residual current device compares the current flowing out along the live wire with the current returning on the neutral. They should be exactly equal. A mismatch of even ~30 mA means current is escaping somewhere — possibly through a person — and the RCD cuts the power within a few hundredths of a second. This is the device that makes bathroom and outdoor sockets survivable, and the test button on it deserves a monthly press.</p>
<div class="key-concept">
  <h4>Key Concept: Current Kills, Milliamps Suffice</h4>
  <p>Through the human body, ~1 mA is a tingle, ~10–20 mA can lock muscles so you cannot let go, and ~50–100 mA across the chest can stop the heart. Wet skin drops your body's resistance dramatically — by Ohm's law, the same voltage then drives far more current. Hence the iron rule: water and mains electricity never mix — no dripping hands on switches, no electrical devices near baths.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Birds perch unharmed on bare power lines because both feet touch the <em>same</em> wire — with no voltage difference across their bodies, no current flows through them. The danger is touching two points at different voltages, like a line and the ground. Which is why kites, ladders, and pruning poles near overhead lines are a genuinely bad idea.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A 2,300 W electric kettle runs on a 230 V supply. What current does it draw?",
          options: [
            "0.1 A",
            "10 A",
            "529 A",
            "23 A",
          ],
          correctIndex: 1,
          explanation:
            "Rearrange P = VI to I = P/V: 2300 W ÷ 230 V = 10 A. This is exactly how electricians size circuits and choose fuse ratings — heat-making appliances draw the most current by far.",
        },
        {
          question: "What exactly does a kilowatt-hour measure?",
          options: [
            "Energy — the total amount of electrical work delivered",
            "Power — how fast energy is being used",
            "Current — the flow of charge per hour",
            "Voltage supplied over one hour",
          ],
          correctIndex: 0,
          explanation:
            "A kWh is power × time: 1 kW sustained for 1 hour, equal to 3.6 million joules. Power (kW) is the rate, like speed; energy (kWh) is the accumulated amount, like distance — and energy is what the bill charges for.",
        },
        {
          question:
            "A 2 kW space heater runs 5 hours a day for 30 days. At $0.25 per kWh, roughly what does that month of heating cost?",
          options: [
            "$7.50",
            "$2.50",
            "$75",
            "$300",
          ],
          correctIndex: 2,
          explanation:
            "Energy = 2 kW × 5 h × 30 days = 300 kWh. Cost = 300 × $0.25 = $75. High power combined with long hours is what makes bills climb — heating and cooling dominate almost every household's electricity cost.",
        },
        {
          question: "How does a fuse protect a circuit?",
          options: [
            "It stores excess charge until the surge passes",
            "It lowers the voltage when too many appliances are connected",
            "It cools the wiring in the walls",
            "Its thin wire melts when current exceeds the rating, breaking the circuit",
          ],
          correctIndex: 3,
          explanation:
            "A fuse is a sacrificial weak link that exploits Joule heating: excess current melts it first, cutting the circuit before the wall wiring can overheat. Replacing a fuse with a higher-rated one (or foil) removes this protection and invites an electrical fire.",
        },
        {
          question:
            "Why is the metal casing of a washing machine connected to the earth wire?",
          options: [
            "To give static charge a place to accumulate",
            "So that if a live wire touches the case, a large fault current flows to ground and blows the fuse, cutting the power",
            "To improve the motor's efficiency",
            "To reduce the electricity bill by recycling current",
          ],
          correctIndex: 1,
          explanation:
            "Earthing makes a fault fail-safe. Without it, a loose live wire would leave the case silently at mains voltage, waiting for a touch. With it, the fault current surges through the low-resistance earth path, the fuse blows immediately, and the appliance goes dead instead of deadly.",
        },
      ],
    },
    {
      id: "magnetism",
      title: "Magnetism",
      subtitle:
        "Magnets, fields, Earth's compass, and the discovery that currents are magnetic too",
      sections: [
        {
          id: "magnets-and-fields",
          title: "Poles, Fields, and Iron Filings",
          content: `
<p>Magnetism, like static electricity, was known to the ancients as a curiosity: lodestones — naturally magnetized rocks — that attracted iron. Two thousand years later, the rules are crisp.</p>
<p>Every magnet has two <strong>poles</strong>, named north and south (for reasons the next section makes clear). The interaction rule mirrors electric charge exactly:</p>
<ul>
  <li><strong>Like poles repel:</strong> north pushes away north, south pushes away south.</li>
  <li><strong>Unlike poles attract:</strong> north and south pull together.</li>
  <li>The force weakens rapidly with distance, and acts through air, water, plastic, even your hand.</li>
</ul>
<p>But one deep difference separates magnetism from electricity. You can isolate a positive charge — but you cannot isolate a north pole. <strong>Cut a bar magnet in half and you get two complete smaller magnets</strong>, each with its own north and south. Cut again: four magnets. Keep going to the atomic scale and the poles still come in pairs. No isolated magnetic pole — a "monopole" — has ever been found. Magnetism at root comes from moving charge, notably the motion of electrons inside atoms; in iron, nickel, and cobalt, these atomic magnets can align in unison, making the whole piece magnetic. In most other materials they point randomly and cancel, which is why copper coins and aluminium foil ignore magnets.</p>
<p>Like charges, magnets act at a distance through a <strong>magnetic field</strong> filling the space around them. And this field you can actually see: lay a sheet of paper over a bar magnet, sprinkle iron filings, tap gently — the filings snap into sweeping arcs from pole to pole, a portrait of the field. By convention field lines run <strong>from north to south outside the magnet</strong>, and where they crowd — at the poles — the field is strongest, exactly the field-line grammar you learned for electricity.</p>
<div class="key-concept">
  <h4>Key Concept: One Field-Reading Skill, Two Fields</h4>
  <p>Direction from the arrows, strength from the crowding: the skill transfers unchanged from electric to magnetic fields. Physics reuses its best ideas — and in the next chapter these two fields will turn out to be intimate partners.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>A refrigerator magnet grips through printed paper but its field fades within a centimetre or so — many are cleverly magnetized in alternating strips (strong on the gripping face, weak on the back). Meanwhile an MRI scanner's field, ~3 tesla, is powerful enough to yank steel oxygen cylinders across the room, which is why MRI suites screen everything that enters.</p>
</div>`,
        },
        {
          id: "earths-magnetic-field",
          title: "Earth: The Planet-Sized Magnet",
          content: `
<p>Float a magnetized needle on a leaf and it slowly swings to point north-south. That humble observation — the compass — guided ships across oceans for a millennium before anyone knew <em>why</em> it worked. The answer: <strong>Earth itself is a giant magnet</strong>, and every compass needle is simply aligning with its field, just like one filing in the world's largest iron-filing experiment.</p>
<p>Where does the planet's field come from? Not from a buried bar magnet — Earth's interior is far too hot for permanent magnetism to survive. Instead, the outer core is an ocean of <strong>molten iron</strong>, churning with heat-driven currents while the planet rotates. Moving molten metal means moving charge, and moving charge — as the next section reveals — generates magnetism. This self-sustaining engine is called the <strong>geodynamo</strong>, and it's a preview of the chapter's big idea: electricity and magnetism are one subject.</p>
<p>A delightful naming tangle: a compass needle's north pole points toward Earth's Arctic. But unlike poles attract — so the thing in the Arctic attracting all those north poles is, magnetically speaking, a <em>south</em> pole. Convention papers over this by calling compass-north "north-seeking," and navigation carries on regardless.</p>
<ul>
  <li>The magnetic poles don't coincide with the geographic ones, and they <strong>wander</strong> — the north magnetic pole has drifted from Canada toward Siberia at up to ~50 km per year in recent decades, forcing periodic updates to navigation systems.</li>
  <li>The rock record shows Earth's field has <strong>flipped polarity</strong> hundreds of times — most recently ~780,000 years ago. Cooling lava locks in the field's direction like a tape recording, striping the ocean floor with the evidence.</li>
  <li>The field extends far into space, where it deflects the <strong>solar wind</strong> — the Sun's stream of charged particles. Some particles funnel down near the poles, crash into the upper atmosphere, and make it glow: the auroras.</li>
</ul>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Compasses aren't only human technology. Migratory birds, sea turtles, and even some bacteria carry biological magnetic sensors, navigating by the same planetary field — a trick evolution discovered long before the lodestone.</p>
</div>`,
        },
        {
          id: "current-magnetic-field",
          title: "Oersted's Surprise: Currents Make Magnetism",
          content: `
<p>Until 1820, electricity and magnetism sat in separate chapters of every book: one about charges and sparks, the other about lodestones and compasses. Then, during a lecture, Danish physicist Hans Christian Oersted noticed something that changed physics forever: when he switched on a current in a wire, <strong>a compass needle lying nearby twitched and swung</strong>. The current was creating a magnetic field.</p>
<p>Follow-up experiments mapped the field's shape: it forms <strong>closed circles around the wire</strong>, like ripples around a stalk. There's a handy rule for the direction — the <strong>right-hand grip rule</strong>: point your right thumb along the (conventional) current, and your curled fingers show which way the circular field lines run. Stronger current gives a stronger field; farther from the wire, it fades.</p>
<div class="key-concept">
  <h4>Key Concept: The Great Unification Begins</h4>
  <p>Moving charge creates magnetism. That single sentence welds two sciences into one — electromagnetism. Every electromagnet, motor, generator, and transformer in the coming sections is engineering built on Oersted's twitching needle. Even permanent magnets fit the pattern: their magnetism comes from electron motion inside atoms.</p>
</div>
<h3>Try it yourself: Recreate Oersted's discovery</h3>
<ol>
  <li>You need: a compass (a phone compass app works, though a real needle compass is more vivid), one AA battery, and a ~30 cm length of wire — a strip of aluminium foil folded into a ribbon works too.</li>
  <li>Lay the compass flat and let the needle settle. Stretch the wire directly <em>over</em> the compass, parallel to the needle's rest direction.</li>
  <li>Press the wire's ends to the battery terminals for <strong>one second only</strong> — this is nearly a short circuit, so the wire warms quickly; brief taps are plenty (and safe at 1.5 V).</li>
  <li>Watch the needle jump sideways the instant current flows, and relax when it stops. Swap the battery ends and it jumps the other way — you've just steered a magnetic field by reversing a current, two centuries after Oersted.</li>
</ol>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>News of Oersted's demonstration raced across Europe in months. Within weeks André-Marie Ampère had worked out that two parallel currents attract or repel each other magnetically — wires acting like magnets on each other, no iron involved. The unit of current honours him for it.</p>
</div>`,
        },
        {
          id: "electromagnets",
          title: "Electromagnets: Magnetism on Demand",
          content: `
<p>A single straight wire makes a feeble magnet. The genius move is to concentrate it: <strong>wind the wire into a coil</strong>. Each loop's circular field adds to its neighbours', and inside the coil the combined field runs straight along the axis — the coil behaves exactly like a bar magnet, with a north face and a south face. Physicists call such a coil a <em>solenoid</em>.</p>
<p>Then comes the multiplier: slide an <strong>iron core</strong> into the coil. The coil's field aligns iron's atomic magnets, and their contribution stacks on top — boosting the total field enormously, often by a factor in the hundreds. Coil plus core is the classic <strong>electromagnet</strong>. Its strength grows with:</p>
<ul>
  <li><strong>More turns</strong> of wire in the coil,</li>
  <li><strong>More current</strong> through the wire,</li>
  <li><strong>A better core</strong> — soft iron being the standard choice.</li>
</ul>
<p>What makes electromagnets revolutionary isn't raw strength — it's <strong>control</strong>. Compare:</p>
<table>
  <thead>
    <tr><th></th><th>Permanent magnet</th><th>Electromagnet</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>On/off</strong></td><td>Always on</td><td>Switchable with the current</td></tr>
    <tr><td><strong>Strength</strong></td><td>Fixed</td><td>Adjustable — turn the current up or down</td></tr>
    <tr><td><strong>Poles</strong></td><td>Fixed</td><td>Reversible — flip the current, swap N and S</td></tr>
  </tbody>
</table>
<p>That trio of tricks — switchable, adjustable, reversible — runs a startling amount of your day:</p>
<ul>
  <li><strong>Scrapyard cranes</strong> lift a car with the current on, drop it with the current off.</li>
  <li><strong>Relays and door locks:</strong> a small current energizes a coil that pulls a switch or bolt — the office door buzzer is an electromagnet letting go.</li>
  <li><strong>Loudspeakers and earbuds:</strong> a coil glued to the cone sits near a permanent magnet; the audio current flips the coil's push-pull thousands of times a second, vibrating the cone into sound.</li>
  <li><strong>MRI scanners and maglev trains:</strong> superconducting electromagnets at the extreme end of the art.</li>
</ul>
<div class="analogy">
  <h3>Analogy: A Tap for Magnetism</h3>
  <p>A permanent magnet is like a spring that never stops flowing. An electromagnet is a tap: open it, close it, throttle it, even reverse it. Once magnetism became controllable, it became <em>technology</em> — and the next chapter turns that tap into motors and generators.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "What happens if you cut a bar magnet in half?",
          options: [
            "One half is a pure north pole, the other a pure south pole",
            "Both halves lose their magnetism",
            "You get two complete smaller magnets, each with a north and a south pole",
            "The halves can no longer attract iron",
          ],
          correctIndex: 2,
          explanation:
            "Poles always come in pairs — cutting a magnet just creates new pole faces at the cut. However finely you divide it, down to the atomic scale, no isolated north or south pole (monopole) has ever been found.",
        },
        {
          question:
            "What do iron filings sprinkled around a bar magnet reveal?",
          options: [
            "The pattern of the magnetic field lines around the magnet",
            "The electric charge stored in the magnet",
            "The temperature distribution of the magnet",
            "The direction of electron flow through the magnet",
          ],
          correctIndex: 0,
          explanation:
            "Each filing becomes a tiny magnet and aligns with the local field, so together they trace the field-line pattern — arcs sweeping from pole to pole, crowding where the field is strongest.",
        },
        {
          question: "What did Oersted discover in 1820?",
          options: [
            "That Earth's magnetic poles wander over time",
            "That an electric current creates a magnetic field, deflecting a nearby compass",
            "That iron is the only magnetic material",
            "That magnets can generate electric current",
          ],
          correctIndex: 1,
          explanation:
            "Oersted noticed a compass needle twitch when a nearby current was switched on — the first evidence that electricity and magnetism are one linked subject. (Magnets generating current is Faraday's later discovery of induction, in the next chapter.)",
        },
        {
          question:
            "Which of the following would NOT make an electromagnet stronger?",
          options: [
            "Increasing the current through the coil",
            "Winding more turns of wire",
            "Inserting a soft iron core",
            "Replacing the iron core with a plastic rod",
          ],
          correctIndex: 3,
          explanation:
            "Strength grows with more turns, more current, and an iron core whose atomic magnets align with and multiply the coil's field. Plastic has no such alignable atomic magnets, so a plastic core adds nothing — the electromagnet drops back to bare-coil strength.",
        },
        {
          question: "What generates Earth's magnetic field?",
          options: [
            "A gigantic deposit of permanently magnetized iron at the centre",
            "The Moon's gravitational pull on the oceans",
            "Churning molten iron in the outer core acting as a self-sustaining dynamo",
            "Sunlight striking the atmosphere near the poles",
          ],
          correctIndex: 2,
          explanation:
            "Earth's deep interior is too hot for permanent magnetism to survive. Instead, convecting molten iron in the rotating outer core carries electric currents that sustain the field — the geodynamo. Its restlessness explains why the magnetic poles wander and have even flipped throughout geological history.",
        },
      ],
    },
    {
      id: "motors-generators-and-induction",
      title: "Motors, Generators & Induction",
      subtitle:
        "The physics that electrified civilization: motors, Faraday's induction, and the grid",
      sections: [
        {
          id: "force-on-a-wire",
          title: "The Motor Effect: A Wire That Jumps",
          content: `
<p>Oersted showed that a current makes a magnetic field. Flip the logic: if a current-carrying wire is a magnet, then placing it in <em>someone else's</em> magnetic field should produce a force between them. It does — and the wire visibly jumps. This is the <strong>motor effect</strong>, and it is the muscle behind every electric motor on Earth.</p>
<p>The rules of the force, all discoverable with a wire, a battery, and a horseshoe magnet:</p>
<ul>
  <li><strong>Direction:</strong> the force is perpendicular to <em>both</em> the current and the field — a wire running left-right in a field pointing away from you gets pushed up or down, not sideways. (Physicists keep track with a finger-pointing rule; for this first pass, "perpendicular to both" is the key fact.)</li>
  <li><strong>Reversibility:</strong> reverse the current, and the force flips. Reverse the field instead — same flip. Reverse both, and it's back where it started.</li>
  <li><strong>Strength:</strong> more current, a stronger field, or more wire in the field all mean more force.</li>
  <li><strong>Alignment matters:</strong> the force is greatest when current and field are perpendicular, and vanishes when the wire runs parallel to the field.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Two Magnets in Disguise</h3>
  <p>You already know magnets push and pull on each other. The current-carrying wire simply <em>is</em> a magnet (Oersted's discovery), so of course a nearby field pushes on it. The motor effect is magnet-on-magnet force, with one of the magnets switchable, adjustable, and reversible — an electromagnet's full bag of tricks.</p>
</div>
<p>Even before building a full motor, the bare effect does real work:</p>
<ul>
  <li><strong>Loudspeakers:</strong> the audio signal is a current wiggling through a coil attached to the speaker cone, sitting in a permanent magnet's field. Every wiggle of current is a push or pull on the cone — sound, manufactured by the motor effect thousands of times per second.</li>
  <li><strong>Analog meters:</strong> the classic swinging-needle ammeter is a coil in a field; more current, more force, bigger swing.</li>
</ul>
<div class="key-concept">
  <h4>Key Concept: Force From Field Plus Current</h4>
  <p>Field alone does nothing to a dead wire. Current alone, no field, no push. But current <em>in</em> a field yields force — motion from electricity. Arrange that force to act around an axle, and you've invented the motor. That's the next section.</p>
</div>`,
        },
        {
          id: "the-dc-motor",
          title: "Inside the DC Motor",
          content: `
<p>A force that pushes a wire once is a party trick. A motor needs continuous rotation — and getting there requires one genuinely clever widget. Here's the machine, step by step.</p>
<ol>
  <li><strong>Start with a loop.</strong> Place a rectangular loop of wire between the poles of a magnet, free to spin on an axle. Send current around the loop.</li>
  <li><strong>Opposite pushes.</strong> Current flows one way along the loop's left side and the opposite way along its right side. By the motor effect, the two sides feel <strong>opposite forces</strong> — one up, one down. A pair of opposite forces on either side of an axle is exactly a twist: the loop rotates.</li>
  <li><strong>The problem at half-turn.</strong> After 180°, the loop's sides have swapped places — but each still carries current the same way around the loop, so the forces now twist it <em>backwards</em>. Left alone, the loop would just wobble to a halt, stuck at the balance point.</li>
  <li><strong>The commutator's fix.</strong> The loop's ends connect to a <strong>split ring</strong> — a metal ring cut into two halves, spinning with the loop — fed by stationary contacts called <strong>brushes</strong>. Every half-turn, each brush slides onto the other half of the ring, <strong>reversing the current through the loop at exactly the right moment</strong>. The forces therefore always twist the same way, and the loop spins continuously.</li>
</ol>
<div class="key-concept">
  <h4>Key Concept: The Commutator</h4>
  <p>The split-ring commutator is the motor's one stroke of genius: a rotary switch that flips the loop's current every half-revolution so the twist never reverses. Master this idea and you understand the DC motor completely.</p>
</div>
<p>Real motors refine the toy: <strong>many loops</strong> at different angles around the axle (so the twist is strong and smooth at every position), wound on an <strong>iron core</strong> to concentrate the field, with either permanent magnets or field coils supplying the magnetism. Spin direction reverses by reversing the supply; speed rises with current. Many modern "brushless" motors replace the sliding contacts with electronic switching — same principle, transistors instead of brushes.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Count the motors around you: phone vibration, electric toothbrush, fans, hard drives, washing machine, power tools, car windows and wipers — a typical household runs dozens. An electric car's drive motor delivers full twisting force from a standstill, which is why EVs launch so briskly, with roughly one moving part where a petrol engine has hundreds.</p>
</div>`,
        },
        {
          id: "induction-and-generators",
          title: "Faraday's Reverse Trick: Induction and Generators",
          content: `
<p>By 1831, the score read: electricity makes magnetism (Oersted), and magnetism pushes on currents (the motor effect). Michael Faraday chased the symmetry for a decade — could magnetism make <em>electricity</em>? His answer electrified the world, literally.</p>
<p>The discovery: <strong>thrust a magnet into a coil of wire, and a current flows in the coil — with no battery anywhere.</strong> Pull the magnet out, and the current flows the other way. Hold the magnet still, and… nothing at all. That last observation is the heart of the matter:</p>
<div class="key-concept">
  <h4>Key Concept: Electromagnetic Induction</h4>
  <p>A <strong>changing</strong> magnetic field through a coil induces a voltage, driving a current if the circuit is closed. No change, no current — a stationary magnet resting in a coil forever generates nothing. It is the <em>motion</em>, the changing of the field through the loop, that does the work.</p>
</div>
<p>The induced effect grows with:</p>
<ul>
  <li><strong>Faster</strong> movement — quicker change, bigger voltage;</li>
  <li><strong>More turns</strong> on the coil — each loop adds its share;</li>
  <li><strong>A stronger magnet</strong> — more field to change.</li>
</ul>
<p>Now the payoff. A generator is simply a coil and a magnet in continuous relative rotation: spin the coil in the field (or spin magnets past the coil), and the field through the loop changes relentlessly, inducing voltage as long as the spinning continues. <strong>A generator is a motor run in reverse</strong> — the motor turns current into motion, the generator turns motion into current; the hardware is nearly identical.</p>
<p>Notice something natural about the output: as the coil rotates, the induced push cycles smoothly — one way, then the other, once per revolution. Rotation naturally produces <strong>alternating current</strong>, which is a big part of why the grid runs on AC.</p>
<p>Step back and survey the world's power stations: coal, gas, and nuclear plants boil water into steam to spin a turbine; hydroelectric dams use falling water; wind turbines use moving air. <strong>Every one of them is just a different way to spin Faraday's coil.</strong> Roughly 95% of the world's electricity — the light over your head included — comes from induction in a spinning generator. Solar panels are the notable exception, converting light directly.</p>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>Asked (so the story goes) what use this induction business was, Faraday reputedly answered, "What use is a newborn baby?" The baby grew up to be the power grid. On a smaller scale, shake-to-charge torches, bicycle dynamos, and induction cooktops are all Faraday's coil in disguise.</p>
</div>`,
        },
        {
          id: "transformers-and-the-grid",
          title: "Transformers and the Journey to Your Wall Socket",
          content: `
<p>One puzzle stands between the power station and your toaster. Generators produce electricity at thousands of volts, your outlet delivers 230 V, and the cables in between run at hundreds of thousands. Who keeps changing the voltage, and why bother? The answers: the transformer, and Joule heating.</p>
<p><strong>Why high voltage?</strong> Power delivered is P = VI — the same power can travel as high voltage with small current, or low voltage with enormous current. But the cable's heating loss grows steeply with current (recall: quadruple the heat for double the current). So the grid's strategy is: <strong>crank the voltage up, squeeze the current down</strong>, and the long-distance cables barely warm. Transmitting at 400,000 V instead of 230 V cuts the current by a factor of ~1,700 — turning what would be catastrophic losses into a few percent.</p>
<p><strong>How a transformer changes voltage.</strong> Two coils share an iron core, with no electrical connection between them:</p>
<ol>
  <li>AC in the <strong>primary coil</strong> creates a magnetic field in the core that grows, collapses, and reverses 50–60 times per second.</li>
  <li>The iron core channels this ever-changing field through the <strong>secondary coil</strong>.</li>
  <li>A changing field through a coil — Faraday's induction — induces a voltage in the secondary. No moving parts; the "motion" is the field's own pulsing.</li>
</ol>
<p>The voltage ratio equals the <strong>turns ratio</strong>: a secondary with 10× the primary's turns steps voltage up 10×; a secondary with a tenth of the turns steps it down to a tenth. (Energy is conserved: what you gain in voltage, you give up in available current.) And now the grid's AC preference is fully explained: <strong>a transformer needs a changing field, so it only works on AC.</strong> Feed it steady DC and the field just sits there — no change, no induction, no output.</p>
<div class="key-concept">
  <h4>Key Concept: The Journey of a Watt</h4>
  <p>Generator (~20,000 V) → step-<strong>up</strong> transformer → transmission lines (110,000–400,000 V, tiny current, tiny losses) → step-<strong>down</strong> transformers at substations → local lines (~11,000 V) → the neighbourhood transformer on a pole or in a green box → your home at 230 V (120 V in North America). Milliseconds after generation, the energy lighting your room was steam, falling water, or wind.</p>
</div>
<div class="did-you-know">
  <h3>Did You Know?</h3>
  <p>You own transformers by the drawer-full: every charger and power brick steps mains voltage down (phones charge at 5–20 V). The faint buzz of a substation is its transformer cores physically flexing with the 50 Hz field. And the great AC-versus-DC "War of the Currents" between Edison and Westinghouse/Tesla in the 1880s was settled largely by the transformer — AC could change voltage cheaply, so AC won the grid.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question: "In a DC motor, what is the job of the split-ring commutator?",
          options: [
            "To increase the voltage supplied to the coil",
            "To reverse the current through the coil every half-turn so the twisting force keeps the same direction",
            "To hold the magnets in place around the axle",
            "To convert the motor's AC output into DC",
          ],
          correctIndex: 1,
          explanation:
            "Without the commutator, the forces on the spinning loop would reverse after half a turn and the loop would wobble to a stop. The split ring swaps the current direction at exactly that moment, so the twist always drives the rotation onward.",
        },
        {
          question:
            "A strong magnet rests motionless inside a coil connected to a sensitive meter. What does the meter read?",
          options: [
            "Zero — induction requires the magnetic field through the coil to be changing",
            "A large steady current, because the magnet is strong",
            "A small steady current that slowly drains the magnet",
            "An alternating current at 50 Hz",
          ],
          correctIndex: 0,
          explanation:
            "Faraday's key finding: only a changing field induces voltage. Move the magnet (or the coil) and current flows — faster movement, more turns, or a stronger magnet all increase it — but a stationary magnet, however strong, induces nothing.",
        },
        {
          question: "What is a generator, at its core?",
          options: [
            "A device that stores electrical energy in chemical form",
            "A transformer with additional turns on the secondary coil",
            "A coil and magnet in relative rotation, converting motion into electric current by induction",
            "An electromagnet powerful enough to create current from nothing",
          ],
          correctIndex: 2,
          explanation:
            "Spin a coil in a magnetic field (or magnets past a coil) and the changing field induces a voltage continuously — a motor run in reverse. Coal, gas, nuclear, hydro, and wind power all ultimately just spin generators; only the source of the spinning differs.",
        },
        {
          question:
            "Why does the grid transmit power at hundreds of thousands of volts?",
          options: [
            "High voltage makes the electricity travel faster",
            "Generators can only produce very high voltages",
            "High voltage keeps birds off the cables",
            "At high voltage the same power flows with much less current, so far less energy is lost heating the cables",
          ],
          correctIndex: 3,
          explanation:
            "P = VI: raising the voltage lets the current shrink for the same delivered power, and cable heating falls steeply as current drops (halving current cuts the heat to a quarter). Step-up transformers at the plant and step-down transformers near your home make this strategy practical.",
        },
        {
          question: "Why do transformers work only with alternating current?",
          options: [
            "Induction in the secondary coil requires a changing magnetic field, which steady DC cannot provide",
            "DC would melt the iron core",
            "AC is safer than DC at all voltages",
            "The two coils must alternate carrying the current",
          ],
          correctIndex: 0,
          explanation:
            "A transformer is pure Faraday induction: the primary's field must keep changing to induce voltage in the secondary. AC reverses 50–60 times a second, so the field pulses constantly; steady DC creates a constant field — no change, no induction, no output. This is the main reason the grid adopted AC.",
        },
      ],
    },
  ],
};
