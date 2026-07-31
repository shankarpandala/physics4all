export const subject12 = {
  id: "thermal-physics",
  number: 12,
  title: "Thermal Physics",
  description:
    "Heat becomes exact: the ideal gas from kinetic theory, the first law's energy bookkeeping, and the second law's deep truth about engines, entropy, and the arrow of time.",
  phase: 3,
  chapters: [
    {
      id: "temperature-and-ideal-gases",
      title: "Temperature & Ideal Gases",
      subtitle:
        "The gas laws, PV = nRT, and deriving pressure from molecules in motion",
      sections: [
        {
          id: "thermal-equilibrium-zeroth-law",
          title: "Temperature, Equilibrium & the Zeroth Law",
          content: `
<p>"Hot" and "cold" are everyday words. Phase 3 physics demands something sharper, and the sharpening starts with a simple observation: put two objects in <strong>thermal contact</strong> — touching, so energy can pass between them — and energy flows spontaneously from one to the other until, eventually, nothing more changes. At that point the objects are in <strong>thermal equilibrium</strong>.</p>
<p>Now the key logical step. Experiment shows:</p>
<div class="key-concept">
  <h4>The Zeroth Law of Thermodynamics</h4>
  <p>If object A is in thermal equilibrium with object C, and object B is also in thermal equilibrium with C, then A and B are in thermal equilibrium with each other.</p>
</div>
<p>This sounds almost too obvious to state, but it is what makes the concept of temperature possible. It guarantees that there is a single property — call it <strong>temperature</strong> — that all mutually equilibrated objects share. Object C can be a <strong>thermometer</strong>: let it equilibrate with your coffee, read off its state (the length of a mercury column, the resistance of a wire, the pressure of a trapped gas), and you have measured a number that predicts what the coffee will do when it touches anything else. No zeroth law, no thermometry.</p>
<p>Which scale should the thermometer read? Celsius is anchored to water's freezing and boiling points — convenient but arbitrary. Physics prefers the <strong>kelvin</strong> scale, which starts at the coldest temperature possible:</p>
<ul>
  <li><strong>Absolute zero</strong> (0 K = −273.15 °C): the temperature at which an ideal gas would exert zero pressure, and molecular motion reaches its minimum.</li>
  <li>Conversion: T(K) = T(°C) + 273.15. A kelvin and a Celsius degree are the same <em>size</em>; only the zero moves.</li>
  <li>Room temperature ≈ 293 K; water boils at 373 K; the Sun's surface ≈ 5800 K.</li>
</ul>
<p>Every gas-law calculation in this subject requires kelvins. Doubling 10 °C does not give "twice as hot" — but doubling 283 K genuinely doubles the quantity that matters, as the kinetic theory later in this chapter will reveal.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The zeroth law got its odd name because physicists only realized in the 1930s that it needed stating — decades after the first and second laws were already famous. It was too fundamental to be law three, so it was slotted in before law one.</p>
</div>`,
        },
        {
          id: "gas-laws",
          title: "The Gas Laws: Three Classic Experiments",
          content: `
<p>Long before anyone believed in molecules, experimenters squeezed, heated, and measured gases — and found astonishingly simple rules. Each law holds a fixed amount of gas and freezes one variable to watch the other two.</p>
<table>
  <thead>
    <tr><th>Law</th><th>Held constant</th><th>Result</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Boyle's law</strong> (1662)</td><td>T</td><td>P ∝ 1/V, i.e. PV = constant</td></tr>
    <tr><td><strong>Charles's law</strong> (1787)</td><td>P</td><td>V ∝ T (kelvin)</td></tr>
    <tr><td><strong>Pressure law</strong> (Gay-Lussac)</td><td>V</td><td>P ∝ T (kelvin)</td></tr>
  </tbody>
</table>
<p><strong>Worked example — Boyle.</strong> A syringe traps 60 cm³ of air at atmospheric pressure, 100 kPa. You push the plunger until the volume is 20 cm³, slowly enough that the temperature stays constant. Since P₁V₁ = P₂V₂:</p>
<p style="text-align:center;">P₂ = P₁V₁/V₂ = 100 kPa × 60/20 = <strong>300 kPa</strong></p>
<p>Squeeze the gas to a third of its volume and its pressure triples. Microscopically, the same molecules now hit the walls three times as often.</p>
<p><strong>Worked example — pressure law.</strong> A rigid tyre holds air at an absolute pressure of 350 kPa on a 20 °C morning (293 K). After a long drive the air heats to 50 °C (323 K). The volume barely changes, so:</p>
<p style="text-align:center;">P₂ = P₁ × T₂/T₁ = 350 kPa × 323/293 ≈ <strong>386 kPa</strong></p>
<div class="key-concept">
  <h4>Kelvin or bust</h4>
  <p>Using 50/20 instead of 323/293 would predict the pressure more than doubles — nonsense. Ratios of temperature only mean anything on the absolute scale. Convert to kelvin <em>first</em>, every time.</p>
</div>
<p>Charles's law hides a prophecy: plot V against T in Celsius for any dilute gas and the line, extrapolated backwards, hits zero volume at −273 °C — regardless of the gas. Nineteenth-century physicists could see absolute zero on their graph paper a century before anyone could approach it in the lab. Three separate proportionalities, one shared special temperature: the laws were begging to be unified, which is exactly what the next section does.</p>`,
        },
        {
          id: "ideal-gas-equation",
          title: "One Equation to Rule Them All: PV = nRT",
          content: `
<p>Boyle, Charles, and Gay-Lussac each pinned down one pairing of P, V, and T. Combine them and you find that for a fixed amount of gas, PV/T is constant. Double the amount of gas and that constant doubles — so it must be proportional to how much gas you have. Measuring amount in <strong>moles</strong> (1 mol = 6.02 × 10²³ particles, Avogadro's number) gives the <strong>ideal-gas equation</strong>:</p>
<p style="text-align:center; font-size:1.2em;"><strong>PV = nRT</strong></p>
<p>where R = 8.31 J/(mol·K) is the <strong>universal gas constant</strong> — the same for helium, oxygen, or vaporized gold. That universality is remarkable: at low enough density, gases forget their chemistry and obey one shared law. Pressure in pascals, volume in m³, temperature in kelvins.</p>
<p>There is a second form, one particle at a time. Since n mol contains N = n × 6.02 × 10²³ particles:</p>
<p style="text-align:center;">PV = Nk<sub>B</sub>T,&nbsp;&nbsp; where k<sub>B</sub> = R/N<sub>A</sub> = 1.38 × 10⁻²³ J/K</p>
<p><strong>Boltzmann's constant</strong> k<sub>B</sub> is R scaled down to a single molecule — the conversion rate between temperature and energy, and one of the most important constants in physics.</p>
<p><strong>Worked example.</strong> How much air is in a 4 m × 3 m × 2.5 m bedroom (V = 30 m³) at 101 kPa and 20 °C (293 K)?</p>
<ol>
  <li>n = PV/RT = (101,000 × 30)/(8.31 × 293) ≈ <strong>1240 mol</strong></li>
  <li>Air's average molar mass is 0.029 kg/mol, so the mass is 1240 × 0.029 ≈ <strong>36 kg</strong>.</li>
</ol>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>The air in an ordinary bedroom weighs about as much as a ten-year-old child. You never notice because its weight is spread as pressure over every surface — and buoyancy cancels it on your body.</p>
</div>
<p>An <strong>ideal gas</strong> is defined as one that obeys PV = nRT exactly. Real gases follow it beautifully at everyday densities and temperatures, and deviate at high pressure or near liquefaction — the final chapter of this subject maps exactly where and why. First, though, the payoff this chapter promised: <em>deriving</em> this law from molecules in motion.</p>`,
        },
        {
          id: "kinetic-theory-pressure",
          title: "Pressure from Particles: The Kinetic-Theory Derivation",
          content: `
<p>Here is one of the great arguments in physics: starting from nothing but Newton's laws applied to molecules, we will derive the pressure of a gas. The assumptions of the <strong>kinetic theory</strong>: a huge number N of identical molecules of mass m move randomly; their own volume is negligible; they exert no forces on each other except during collisions; and all collisions are perfectly elastic.</p>
<p>Put the gas in a cubical box of side L and follow one molecule with velocity component v<sub>x</sub> toward the right-hand wall.</p>
<ol>
  <li><strong>Momentum transfer per collision.</strong> The molecule bounces elastically: v<sub>x</sub> → −v<sub>x</sub>. Its momentum changes by 2mv<sub>x</sub>, so that is the impulse it delivers to the wall.</li>
  <li><strong>Collision rate.</strong> Between hits on that wall it must cross the box and return — a distance 2L — taking time 2L/v<sub>x</sub>.</li>
  <li><strong>Average force from one molecule.</strong> Force is momentum delivered per unit time:
  F = 2mv<sub>x</sub> ÷ (2L/v<sub>x</sub>) = mv<sub>x</sub>²/L.</li>
  <li><strong>Add up all N molecules,</strong> replacing v<sub>x</sub>² by its average ⟨v<sub>x</sub>²⟩: total force = Nm⟨v<sub>x</sub>²⟩/L.</li>
  <li><strong>Use randomness.</strong> No direction is special, so ⟨v<sub>x</sub>²⟩ = ⟨v<sub>y</sub>²⟩ = ⟨v<sub>z</sub>²⟩ = ⅓⟨v²⟩.</li>
</ol>
<p>Pressure is force over wall area L², and L³ = V, giving the master result:</p>
<p style="text-align:center; font-size:1.15em;"><strong>PV = ⅓Nm⟨v²⟩</strong></p>
<p>Pressure explained: trillions of tiny momentum kicks per second, smoothed into a steady push. Now compare with experiment. The ideal-gas law says PV = Nk<sub>B</sub>T. Setting the two expressions equal and rearranging:</p>
<p style="text-align:center;">½m⟨v²⟩ = (3/2)k<sub>B</sub>T</p>
<div class="key-concept">
  <h4>What temperature really is</h4>
  <p>The average translational kinetic energy of a molecule is (3/2)k<sub>B</sub>T. Temperature is not a mysterious fluid — it is a direct measure of average molecular kinetic energy. Absolute zero is simply the state of minimum motion.</p>
</div>
<p>Notice what just happened: a 17th-century pump experiment (Boyle) and Newton's mechanics met, and the meeting <em>defined</em> temperature microscopically. This is your first full success of statistical thinking — averaging over molecules you can never track individually and getting an exact macroscopic law. Phase 5's statistical mechanics is this idea grown up.</p>`,
        },
        {
          id: "molecular-speeds",
          title: "How Fast Are Molecules Moving?",
          content: `
<p>The result ½m⟨v²⟩ = (3/2)k<sub>B</sub>T can be flipped into a speed. The <strong>root-mean-square (rms) speed</strong> — the square root of the average of v² — is:</p>
<p style="text-align:center;">v<sub>rms</sub> = √(3k<sub>B</sub>T/m) = √(3RT/M)</p>
<p>where M is the molar mass in kg/mol. For nitrogen (M = 0.028 kg/mol) at 300 K:</p>
<p style="text-align:center;">v<sub>rms</sub> = √(3 × 8.31 × 300 / 0.028) ≈ <strong>517 m/s</strong></p>
<p>The air molecules hitting your skin right now are moving at roughly 1900 km/h — faster than sound, which makes sense: sound <em>is</em> a disturbance passed along by molecular collisions, so it can never outrun the molecules carrying it.</p>
<p>But 517 m/s is only an average. In any gas the molecules share energy through collisions, producing a spread of speeds called the <strong>Maxwell–Boltzmann distribution</strong>:</p>
<ul>
  <li>Few molecules are very slow; the curve rises to a <strong>peak</strong> near the most probable speed.</li>
  <li>A long <strong>high-speed tail</strong> stretches out — at any instant, a small fraction of molecules are moving several times faster than average.</li>
  <li>Heating the gas shifts the peak to higher speeds and flattens the curve; the tail grows dramatically.</li>
  <li>At the same temperature, <strong>lighter molecules move faster</strong>: hydrogen at 300 K has v<sub>rms</sub> ≈ 1930 m/s, nearly four times nitrogen's.</li>
</ul>
<div class="analogy">
  <h3>Analogy: Motorway Traffic</h3>
  <p>Quote the "average speed" on a motorway and you hide the real story: some cars crawl, most cluster near the average, and a few fly past everything. A gas is the same — and often it is the outliers in the fast tail that matter, just as it is the speeders who determine accident statistics.</p>
</div>
<p>That tail explains planetary history. Earth's escape velocity is 11.2 km/s. For nitrogen and oxygen, essentially no molecules in the tail ever reach it — so we keep our atmosphere. For hydrogen and helium, the tail pokes past escape velocity often enough that, over billions of years, Earth leaked them to space. That is why helium from a burst balloon is gone for good, why the Moon (escape velocity 2.4 km/s) is airless, and why chemistry-rich hydrogen dominates massive, cold Jupiter but not our warm little world.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "A sealed syringe holds gas at 120 kPa in a volume of 30 cm³. The plunger is slowly pushed in until the volume is 10 cm³ at constant temperature. What is the new pressure?",
          options: ["40 kPa", "120 kPa", "360 kPa", "1080 kPa"],
          correctIndex: 2,
          explanation:
            "At constant temperature Boyle's law applies: P₁V₁ = P₂V₂. Compressing to one third of the volume triples the pressure: 120 × 30/10 = 360 kPa. Microscopically, the same molecules now strike the walls three times as often.",
        },
        {
          question:
            "Why must temperatures be converted to kelvin before using Charles's law or the pressure law?",
          options: [
            "Because the laws state proportionality to temperature, which only holds when temperature is measured from absolute zero",
            "Because kelvin degrees are larger than Celsius degrees",
            "Because Celsius temperatures cannot be negative",
            "Because the gas constant R is only defined for kelvin",
          ],
          correctIndex: 0,
          explanation:
            "V ∝ T and P ∝ T are statements about ratios: doubling T doubles V. Ratios only make sense on a scale whose zero is the true zero of molecular energy. 20 °C is not 'twice as hot' as 10 °C, but 586 K genuinely is twice 293 K.",
        },
        {
          question:
            "In the kinetic-theory derivation, the pressure a gas exerts on a wall ultimately comes from:",
          options: [
            "molecules sticking to the wall and weighing it down",
            "electrical repulsion between molecules and the wall",
            "the gas's temperature radiating heat onto the wall",
            "the momentum change 2mvₓ each molecule delivers when it rebounds elastically",
          ],
          correctIndex: 3,
          explanation:
            "Each elastic bounce reverses the molecule's wall-ward velocity component, transferring momentum 2mvₓ to the wall. Trillions of these tiny impulses per second average into the steady force per area we call pressure — no sticking, charge, or radiation required.",
        },
        {
          question:
            "The absolute temperature of an ideal gas is quadrupled. What happens to the rms speed of its molecules?",
          options: [
            "It quadruples",
            "It doubles",
            "It increases by a factor of 16",
            "It stays the same",
          ],
          correctIndex: 1,
          explanation:
            "Since ½m⟨v²⟩ = (3/2)k_BT, the mean square speed is proportional to T, so v_rms ∝ √T. Quadrupling T doubles v_rms. Speed grows more slowly than energy because kinetic energy depends on speed squared.",
        },
        {
          question:
            "A container holds a mixture of hydrogen (light molecules) and oxygen (molecules 16 times heavier) at the same temperature. Which statement is correct?",
          options: [
            "The oxygen molecules move faster because they carry more momentum",
            "Both gases have the same average speed",
            "Both gases have the same average kinetic energy, so the hydrogen molecules move 4 times faster on average",
            "The hydrogen molecules have 16 times more kinetic energy",
          ],
          correctIndex: 2,
          explanation:
            "Temperature fixes average translational kinetic energy at (3/2)k_BT for every gas, regardless of mass. Equal ½m⟨v²⟩ with 16 times less mass means ⟨v²⟩ is 16 times larger — so hydrogen's rms speed is √16 = 4 times oxygen's.",
        },
      ],
    },
    {
      id: "the-first-law",
      title: "The First Law",
      subtitle:
        "Internal energy, heat, and work — energy bookkeeping on P–V diagrams",
      sections: [
        {
          id: "internal-energy",
          title: "Internal Energy: The Gas's Bank Account",
          content: `
<p>Every gas carries energy inside it: the random kinetic energy of its molecules' motion, plus (in real gases) potential energy from intermolecular forces. This total is the <strong>internal energy U</strong>. For an ideal gas the forces are zero, so U is purely kinetic — and since kinetic theory gave us ½m⟨v²⟩ = (3/2)k<sub>B</sub>T, the internal energy of an ideal monatomic gas is:</p>
<p style="text-align:center;">U = (3/2)nRT</p>
<p>Notice what U depends on: temperature and amount of gas, <em>nothing else</em>. U is a <strong>state function</strong> — it depends only on the gas's current state, not on the history of how it got there. Your bank balance is a state function; the list of deposits and withdrawals is not.</p>
<p>There are exactly two ways to change U:</p>
<ul>
  <li><strong>Heat (Q):</strong> energy transferred because of a temperature difference — molecular collisions at a boundary passing energy from hot to cold.</li>
  <li><strong>Work (W):</strong> energy transferred by macroscopic force times distance — a piston compressing the gas, for instance.</li>
</ul>
<div class="key-concept">
  <h4>The First Law of Thermodynamics</h4>
  <p><strong>ΔU = Q + W</strong>, where Q is the heat supplied <em>to</em> the gas and W is the work done <em>on</em> the gas. It is energy conservation with the microscopic books balanced: the account changes only by what flows in.</p>
</div>
<p>Sign conventions cause more lost marks than the physics does, so fix them now:</p>
<table>
  <thead>
    <tr><th>Event</th><th>Sign</th></tr>
  </thead>
  <tbody>
    <tr><td>Heat flows into the gas</td><td>Q &gt; 0</td></tr>
    <tr><td>Heat flows out of the gas</td><td>Q &lt; 0</td></tr>
    <tr><td>Gas is compressed (work done on it)</td><td>W &gt; 0</td></tr>
    <tr><td>Gas expands (does work on surroundings)</td><td>W &lt; 0</td></tr>
  </tbody>
</table>
<p>Beware: many American textbooks define W as work done <em>by</em> the gas and write ΔU = Q − W. Both conventions are correct and give identical physics — but you must know which one a book is using before trusting its signs.</p>
<p>One subtlety matters enormously: Q and W are <em>transfers</em>, not contents. A gas does not "contain heat" or "contain work" any more than a bank account contains deposits. It contains internal energy; heat and work are merely the two doors that energy can pass through. That distinction is the whole reason the first law needed stating.</p>`,
        },
        {
          id: "work-and-pv-diagrams",
          title: "Work and the P–V Diagram",
          content: `
<p>How much work does a gas do when it expands? If a piston of area A moves out a small distance Δx against gas pressure P, the force is PA and the work done by the gas is PAΔx = PΔV. At constant pressure:</p>
<p style="text-align:center;">W<sub>by gas</sub> = PΔV</p>
<p>When pressure changes during the process, add up PΔV strip by strip — which is exactly finding the <strong>area under the curve</strong> on a graph of P against V. This is why the <strong>P–V diagram</strong> is the working language of thermodynamics: every equilibrium state of the gas is a point, every slow process is a curve, and the area beneath the curve is the work transferred.</p>
<p><strong>Worked example.</strong> A gas at a constant 100 kPa expands from 2.0 × 10⁻³ m³ to 5.0 × 10⁻³ m³ while absorbing 800 J of heat.</p>
<ol>
  <li>Work done by the gas: W = PΔV = 100,000 × 3.0 × 10⁻³ = 300 J. In our convention, W<sub>on gas</sub> = −300 J.</li>
  <li>First law: ΔU = Q + W = 800 + (−300) = <strong>+500 J</strong>. The gas banked 500 J and spent 300 J pushing the piston.</li>
</ol>
<p>Now the crucial insight. Take a gas from state A to state B by two different routes — say, high-pressure expansion first versus cooling first. The two curves enclose different areas, so the <strong>work differs with the path</strong>, and therefore so does the heat. Yet ΔU is identical either way, because U is a state function. Q and W individually depend on the journey; their sum depends only on the endpoints.</p>
<div class="key-concept">
  <h4>Closed loops are engines</h4>
  <p>Run a gas around a closed cycle on the P–V diagram and it returns to its start, so ΔU = 0 for the cycle. But the work does not cancel: the <strong>net work per cycle equals the area enclosed by the loop</strong>. Traverse clockwise and the gas does net work on the world — that is a heat engine, drawn as a picture.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Engineers still analyze car engines with "indicator diagrams" — live P–V plots traced by pressure sensors as the cylinder runs. James Watt's company invented the device in the 1790s and kept it an industrial secret for decades.</p>
</div>`,
        },
        {
          id: "specific-heats-of-gases",
          title: "Why Gases Have Two Specific Heats",
          content: `
<p>Ask "how much heat raises one mole of gas by one kelvin?" and, oddly, there is no single answer — it depends on what the gas is allowed to do while you heat it.</p>
<ul>
  <li><strong>Constant volume:</strong> the gas cannot expand, so no work is done and every joule of heat goes into internal energy. The molar specific heat is C<sub>V</sub>.</li>
  <li><strong>Constant pressure:</strong> the gas expands as it warms, pushing back the atmosphere. Heat must fund the temperature rise <em>and</em> the expansion work, so more is needed: C<sub>P</sub> &gt; C<sub>V</sub>.</li>
</ul>
<p>For an ideal gas the extra cost is exactly the expansion work PΔV = RΔT per mole, giving the tidy relation:</p>
<p style="text-align:center;"><strong>C<sub>P</sub> − C<sub>V</sub> = R</strong></p>
<p>The values themselves come straight from kinetic theory via the <strong>equipartition theorem</strong>: each independent way a molecule can store energy (each "degree of freedom") holds ½k<sub>B</sub>T on average.</p>
<table>
  <thead>
    <tr><th>Gas type</th><th>Degrees of freedom</th><th>C<sub>V</sub></th><th>C<sub>P</sub></th><th>γ = C<sub>P</sub>/C<sub>V</sub></th></tr>
  </thead>
  <tbody>
    <tr><td>Monatomic (He, Ar)</td><td>3 translational</td><td>(3/2)R</td><td>(5/2)R</td><td>5/3 ≈ 1.67</td></tr>
    <tr><td>Diatomic (N₂, O₂, air)</td><td>3 translational + 2 rotational</td><td>(5/2)R</td><td>(7/2)R</td><td>7/5 = 1.40</td></tr>
  </tbody>
</table>
<p>A diatomic molecule is shaped like a dumbbell: it can tumble end-over-end about two axes, so rotation adds two energy-storing modes and its specific heat is larger. The ratio <strong>γ</strong> (gamma) will star in the next section's adiabatic processes.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Measuring γ tells you a molecule's shape without ever seeing it — 1.67 means single atoms, 1.40 means dumbbells. But 19th-century physicists were haunted by what they <em>didn't</em> see: a dumbbell should also vibrate along its bond, predicting the wrong γ for air. The vibrations turn out to be "frozen out" at room temperature — an effect classical physics cannot explain at all. It was one of the first visible cracks that quantum mechanics (Phase 5) would fill: energy comes in steps, and room-temperature collisions can't afford the first vibrational step.</p>
</div>`,
        },
        {
          id: "isothermal-and-adiabatic",
          title: "Isothermal and Adiabatic Paths",
          content: `
<p>Two idealized processes bracket everything a gas in a cylinder can do, distinguished by what is held fixed — temperature, or heat flow.</p>
<p><strong>Isothermal (constant T).</strong> Compress or expand the gas <em>slowly</em> while it sits in perfect thermal contact with a large reservoir; heat leaks in or out fast enough to hold T constant. For an ideal gas, constant T means constant U, so the first law becomes Q = W<sub>by gas</sub>: in an isothermal expansion, every joule of work the gas does is imported from the reservoir as heat. The path obeys Boyle's law, PV = constant, and the work along it is W<sub>by</sub> = nRT ln(V₂/V₁).</p>
<p><strong>Adiabatic (Q = 0).</strong> Now insulate the cylinder, or act so fast heat has no time to flow. With Q = 0 the first law reads ΔU = W<sub>on gas</sub>: the gas can only spend or bank its own internal energy.</p>
<ul>
  <li><strong>Adiabatic expansion → cooling.</strong> The gas does work at the expense of U, so T falls.</li>
  <li><strong>Adiabatic compression → heating.</strong> Work done on the gas is banked as U, so T rises.</li>
</ul>
<p>The path obeys <strong>PV<sup>γ</sup> = constant</strong>, with γ from the last section. Because γ &gt; 1, adiabatic curves fall more steeply on a P–V diagram than isotherms — expansion drops the pressure twice over, by spreading the gas out <em>and</em> cooling it.</p>
<table>
  <thead>
    <tr><th>Process</th><th>Constant</th><th>First law becomes</th></tr>
  </thead>
  <tbody>
    <tr><td>Isochoric</td><td>V</td><td>ΔU = Q (no work)</td></tr>
    <tr><td>Isobaric</td><td>P</td><td>ΔU = Q − PΔV</td></tr>
    <tr><td>Isothermal</td><td>T</td><td>Q = W<sub>by gas</sub> (ΔU = 0)</td></tr>
    <tr><td>Adiabatic</td><td>Q = 0</td><td>ΔU = W<sub>on gas</sub></td></tr>
  </tbody>
</table>
<div class="analogy">
  <h3>Adiabatics are everywhere</h3>
  <p>Pump a bicycle tyre and the barrel gets hot: rapid compression, work banked as internal energy. A diesel engine compresses air adiabatically until it is hot enough to ignite fuel with no spark plug. And rising air expands adiabatically as pressure drops with altitude, cooling about 1 °C per 100 m — reach the dew point and a cloud switches on. Flat cloud bases mark the altitude where rising parcels hit that temperature.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "A gas absorbs 500 J of heat while expanding and doing 300 J of work on its surroundings. What is the change in its internal energy?",
          options: ["+800 J", "+200 J", "−200 J", "−800 J"],
          correctIndex: 1,
          explanation:
            "With Q = +500 J supplied to the gas and W = −300 J (the gas does work, so work done on it is negative), the first law gives ΔU = Q + W = 500 − 300 = +200 J. The gas took in 500 J, spent 300 J pushing the piston, and banked the rest.",
        },
        {
          question:
            "On a P–V diagram, the work involved in a slow expansion is represented by:",
          options: [
            "the slope of the curve",
            "the height of the curve at the final volume",
            "the length of the curve",
            "the area under the curve",
          ],
          correctIndex: 3,
          explanation:
            "Each small step contributes work PΔV — a thin strip of height P and width ΔV. Summing the strips gives the total area under the curve between the initial and final volumes. For a closed cycle, the net work is the area enclosed by the loop.",
        },
        {
          question:
            "Why is a gas's molar specific heat at constant pressure greater than at constant volume?",
          options: [
            "At constant pressure, some of the supplied heat must also pay for the work of expansion",
            "At constant pressure the molecules move faster for a given temperature",
            "At constant volume some heat escapes through the container walls",
            "Constant-pressure heating changes the gas into a different phase",
          ],
          correctIndex: 0,
          explanation:
            "At constant volume all heat becomes internal energy. At constant pressure the warming gas expands and does work PΔV = RΔT per mole on its surroundings, so achieving the same 1 K rise costs extra heat — exactly R more, giving C_P − C_V = R.",
        },
        {
          question:
            "A gas expands adiabatically (no heat exchange). What happens to its temperature, and why?",
          options: [
            "It stays constant, because no heat flows in or out",
            "It rises, because the molecules speed up as the volume grows",
            "It falls, because the gas does work on the surroundings entirely at the expense of its internal energy",
            "It falls, because heat escapes to the surroundings during the expansion",
          ],
          correctIndex: 2,
          explanation:
            "With Q = 0 the first law reads ΔU = W_on gas. An expanding gas does work on the surroundings (W_on is negative), so U must fall — and for an ideal gas, U falling means T falling. This is why rising air cools and forms clouds. 'No heat flow' does not mean 'no temperature change'; work is the other door for energy.",
        },
        {
          question:
            "During an isothermal expansion of an ideal gas, which statement is true?",
          options: [
            "The gas absorbs no heat because its temperature is constant",
            "The heat absorbed equals the work done by the gas, since internal energy is unchanged",
            "The internal energy rises by the amount of work done",
            "The pressure remains constant while the volume grows",
          ],
          correctIndex: 1,
          explanation:
            "For an ideal gas U depends only on T, so constant temperature means ΔU = 0. The first law then forces Q = W_by gas: every joule of work the expanding gas performs is replaced by heat flowing in from the reservoir. Pressure is not constant — it falls along PV = constant.",
        },
      ],
    },
    {
      id: "the-second-law-intro",
      title: "The Second Law (intro)",
      subtitle:
        "Heat engines, Carnot's limit, and a first meeting with entropy and time's arrow",
      sections: [
        {
          id: "the-one-way-street",
          title: "The One-Way Street",
          content: `
<p>Run a film of a pendulum swinging and it looks fine backwards. Run a film of cream swirling into coffee, a sandcastle collapsing, or an ice cube melting in a warm drink, and the reversed version is instantly, laughably wrong. Yet here is the puzzle: <strong>nothing in the first law forbids the reversed film.</strong> Energy is perfectly conserved when heat flows from your cold drink into the warm room, un-melting the ice. It just never happens.</p>
<p>Clearly nature obeys a second rule — one about <em>direction</em>, not amount. The <strong>second law of thermodynamics</strong> has several classic formulations:</p>
<ul>
  <li><strong>Clausius statement:</strong> heat never flows spontaneously from a colder body to a hotter body.</li>
  <li><strong>Kelvin–Planck statement:</strong> no cyclic device can absorb heat from a single reservoir and convert it entirely into work.</li>
</ul>
<p>These sound like separate claims about fridges and engines, but they are logically equivalent — violate either one and you could build a machine that violates the other. Later in this chapter both will collapse into a single statement about a new quantity, entropy.</p>
<p>Pause on Kelvin–Planck, because it is the shocking one. The oceans hold a staggering amount of thermal energy; the first law would happily let a ship suck heat from seawater and turn it all into propulsion, cooling the wake behind it. Energy conserved, no fuel needed. The second law says no: heat can only be <em>partially</em> converted to work, and only while flowing from hot toward cold — some must always be dumped into something colder.</p>
<div class="key-concept">
  <h4>Quality, not just quantity</h4>
  <p>The first law audits energy's amount; the second law grades its quality. Work is premium energy — fully convertible into anything. Heat is degraded energy, only partly convertible, and heat at low temperature is more degraded still. The universe's energy total never changes, but its quality only ever goes downhill.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Perpetual-motion machines of the "second kind" — those violating the second law rather than the first — were proposed for decades. Patent offices worldwide now reject both kinds without examination. The second law has never once been observed to fail.</p>
</div>`,
        },
        {
          id: "heat-engines",
          title: "Heat Engines",
          content: `
<p>A <strong>heat engine</strong> is any cyclic device that turns heat into work: steam turbines, petrol engines, jet engines. Strip away the machinery and every one of them has the same skeleton:</p>
<ol>
  <li>Absorb heat Q<sub>H</sub> from a <strong>hot reservoir</strong> (burning fuel, a reactor core).</li>
  <li>Convert part of it into useful work W.</li>
  <li>Reject the remainder Q<sub>C</sub> into a <strong>cold reservoir</strong> (the atmosphere, a river, a cooling tower).</li>
</ol>
<p>Because the engine returns to its starting state each cycle, ΔU = 0 per cycle, and the first law demands W = Q<sub>H</sub> − Q<sub>C</sub>. The figure of merit is the <strong>thermal efficiency</strong> — what fraction of the fuel's heat becomes work:</p>
<p style="text-align:center; font-size:1.1em;">η = W/Q<sub>H</sub> = 1 − Q<sub>C</sub>/Q<sub>H</sub></p>
<p><strong>Worked example.</strong> Each cycle, an engine draws 1000 J from its hot reservoir and exhausts 700 J to the cold one. Then W = 300 J and η = 300/1000 = <strong>30%</strong> — about right for a real petrol engine. Fossil-fuel power stations manage 35–45%; the rest of the fuel's energy literally goes up the cooling tower.</p>
<p>Why not just eliminate Q<sub>C</sub>? Because that is precisely what the Kelvin–Planck statement forbids. Intuitively: the working gas must be <em>reset</em> — recompressed, cooled — to begin the next cycle, and that reset step unavoidably discharges heat somewhere colder. An engine with no cold reservoir is an engine that never completes a second cycle.</p>
<div class="analogy">
  <h3>Analogy: The Waterwheel</h3>
  <p>Sadi Carnot, who founded this whole subject in 1824, pictured heat like water turning a mill wheel. A waterwheel extracts work from water falling from a high level to a low one — it cannot extract anything from a still pond, however deep. Likewise an engine extracts work from heat "falling" from high temperature to low. Q_C is the water leaving the bottom of the wheel: not a design flaw, but the price of flow itself.</p>
</div>
<p>The analogy raises the crucial question: given the two temperatures, how much work can the fall of heat yield <em>at best</em>? Carnot's answer is two sections away — first, run the engine backwards.</p>`,
        },
        {
          id: "refrigerators-and-heat-pumps",
          title: "Refrigerators and Heat Pumps",
          content: `
<p>Run the engine skeleton in reverse and you get a machine that <em>consumes</em> work W to drag heat Q<sub>C</sub> out of a cold place and dump Q<sub>H</sub> = Q<sub>C</sub> + W into a hot place. That is a <strong>refrigerator</strong>: its interior is the cold reservoir, your kitchen is the hot one, and the compressor supplies W. It moves heat from cold to hot — but does not violate the Clausius statement, because the flow is not <em>spontaneous</em>. It is paid for, joule by joule, with electrical work.</p>
<p>The figure of merit flips too. For a fridge you want maximum heat removed per unit work — the <strong>coefficient of performance</strong>:</p>
<p style="text-align:center;">COP<sub>fridge</sub> = Q<sub>C</sub>/W</p>
<p>A <strong>heat pump</strong> is the identical machine with the opposite sales pitch: park the cold side in the winter air outside your house and the hot side indoors, and now the <em>delivered heat</em> is the product:</p>
<p style="text-align:center;">COP<sub>heat pump</sub> = Q<sub>H</sub>/W = (Q<sub>C</sub> + W)/W</p>
<p>Here is the beautiful part: <strong>COP is routinely greater than 1</strong>. A typical domestic heat pump has a COP of 3 to 4 — for every 1 kWh of electricity, it delivers 3–4 kWh of heat indoors, because most of that heat was not generated but merely <em>moved</em>, harvested from the outside air.</p>
<p><strong>Worked comparison.</strong> Heating a room needs 3 kW.</p>
<ul>
  <li>Electric resistance heater: converts work straight to heat, COP = 1 → draws <strong>3 kW</strong> of electricity.</li>
  <li>Heat pump with COP = 3: draws <strong>1 kW</strong>, and lifts the other 2 kW in from the cold outdoors.</li>
</ul>
<div class="key-concept">
  <h4>Nothing is free — check the whole ledger</h4>
  <p>The pumped heat isn't conjured from nowhere: the outside air gets slightly colder, and the work input is degraded to heat too. Every ledger balances. But "moving heat is cheaper than making it" is genuine physics, and it is why heat pumps are central to decarbonizing heating — one unit of clean electricity displaces three units of burned gas.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Your fridge slightly heats your kitchen: it ejects Q_C + W, more heat than it removes from the food. Leaving the fridge door open on a hot day makes the room warmer, not cooler.</p>
</div>`,
        },
        {
          id: "carnot-efficiency",
          title: "Carnot's Ceiling",
          content: `
<p>In 1824, decades before energy conservation was even formulated, the 28-year-old French engineer Sadi Carnot asked exactly the right question: for an engine running between temperatures T<sub>H</sub> and T<sub>C</sub>, what is the <em>best possible</em> efficiency? His answer is one of physics' most consequential formulas:</p>
<p style="text-align:center; font-size:1.2em;"><strong>η<sub>max</sub> = 1 − T<sub>C</sub>/T<sub>H</sub></strong>&nbsp;&nbsp;(temperatures in kelvin)</p>
<p>The maximum is achieved only by a perfectly <strong>reversible</strong> engine — one run infinitely slowly, with no friction and no heat crossing any finite temperature gap. Real engines are irreversible and always fall short.</p>
<p><strong>Numbers.</strong> A coal or nuclear plant's steam enters the turbine at about 800 K and rejects heat to a river or cooling tower at about 300 K:</p>
<p style="text-align:center;">η<sub>max</sub> = 1 − 300/800 = <strong>62.5%</strong></p>
<p>Real plants achieve roughly 40% — impressive engineering, yet nowhere near 100%, and the shortfall from 62.5% is friction, turbulence, and finite-rate heat transfer. A car engine burns fuel at around 1100 K and exhausts near 350 K: ceiling 68%, reality about 25–30%.</p>
<p>Why is the ceiling unbreakable? Carnot's argument is a masterpiece. Suppose a super-engine beat the reversible limit. Use its work output to drive a reversible engine <em>backwards</em> as a heat pump between the same two reservoirs. Grind through the bookkeeping and the combined gadget would move heat from cold to hot with <strong>no net work input</strong> — flatly violating the Clausius statement. Therefore no engine, whatever its fuel, gas, or mechanism, can exceed 1 − T<sub>C</sub>/T<sub>H</sub>. This also answers the question planted in Subject 6: engine waste heat is not sloppy engineering but a law of nature.</p>
<div class="key-concept">
  <h4>The levers that matter</h4>
  <p>Efficiency improves only by widening the temperature gap: raise T<sub>H</sub> (why turbine-blade metallurgy is a billion-dollar field) or lower T<sub>C</sub> (why power stations sit beside cold rivers and seas). The formula also explains why low-temperature "waste heat" is so hard to use: with T<sub>H</sub> = 330 K and T<sub>C</sub> = 300 K, the ceiling is a dismal 9%.</p>
</div>`,
        },
        {
          id: "entropy-first-look",
          title: "Entropy: The Universe Keeps Score",
          content: `
<p>The second law's statements — Clausius's about heat flow, Kelvin–Planck's about engines — feel like separate prohibitions. In the 1850s Rudolf Clausius found the single quantity behind both. When heat Q flows reversibly into a system at absolute temperature T, define the change in <strong>entropy</strong> as:</p>
<p style="text-align:center; font-size:1.1em;">ΔS = Q/T</p>
<p>Entropy is a state function, like internal energy — and its units, joules per kelvin, mark it as heat <em>weighted by the temperature at which it arrives</em>. The same joule counts for more entropy when it lands somewhere cold.</p>
<p>Watch it work. Let heat Q leak from a hot reservoir at T<sub>H</sub> to a cold one at T<sub>C</sub>:</p>
<ul>
  <li>Hot reservoir loses entropy: ΔS<sub>H</sub> = −Q/T<sub>H</sub></li>
  <li>Cold reservoir gains entropy: ΔS<sub>C</sub> = +Q/T<sub>C</sub></li>
  <li>Since T<sub>C</sub> &lt; T<sub>H</sub>, the gain outweighs the loss: <strong>total entropy rises</strong>.</li>
</ul>
<p>Run the flow backwards — cold to hot — and total entropy would <em>fall</em>. That is what never happens, and it generalizes into the deepest form of the second law: <strong>the total entropy of an isolated system never decreases.</strong> Reversible processes hold it constant; every real process increases it. One inequality now polices heat flow, engine efficiency (a perfect engine would lower the total entropy — recompute Carnot's limit from ΔS ≥ 0 and it drops out), mixing, friction, and the fate of the universe.</p>
<p>What <em>is</em> entropy, physically? The honest short answer: a measure of how widely energy is spread out among molecules and places. "Disorder" is the popular word, but <strong>dispersal</strong> is better — heat concentrated in a hot object is compact and useful; the same energy scattered thinly through the environment is neither. Entropy increase is energy spreading out, never to be fully regathered.</p>
<p>This is also why time has a direction. Newton's laws run equally well backwards, but entropy only climbs — the reversed film of cream un-swirling from coffee depicts a colossal entropy decrease, which is why your brain instantly rejects it. Local decreases are allowed if exported elsewhere: your fridge, and indeed your body, lower entropy inside by raising it more outside.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Ludwig Boltzmann found what entropy counts: S = k log W, where W is the number of microscopic arrangements consistent with the macroscopic state. The formula is carved on his gravestone in Vienna. Subject 28 rebuilds all of thermodynamics from that single line.</p>
</div>`,
        },
      ],
      quiz: [
        {
          question:
            "Each cycle, a heat engine absorbs 500 J from its hot reservoir and does 150 J of useful work. How much heat does it reject, and what is its efficiency?",
          options: [
            "150 J rejected; 70% efficient",
            "500 J rejected; 30% efficient",
            "350 J rejected; 70% efficient",
            "350 J rejected; 30% efficient",
          ],
          correctIndex: 3,
          explanation:
            "Per cycle ΔU = 0, so the first law gives Q_C = Q_H − W = 500 − 150 = 350 J rejected to the cold reservoir. Efficiency is the work fraction: η = W/Q_H = 150/500 = 30%. The rejected 350 J is not a design flaw — some rejection is required by the second law.",
        },
        {
          question:
            "What is the maximum possible efficiency of any engine operating between a 600 K heat source and a 300 K environment?",
          options: ["100%", "50%", "33%", "67%"],
          correctIndex: 1,
          explanation:
            "Carnot's theorem: η_max = 1 − T_C/T_H = 1 − 300/600 = 50%, and only a perfectly reversible engine reaches it. No cleverness of design or choice of working substance can do better — a super-engine could be coupled to a reversed Carnot engine to push heat from cold to hot for free, violating the second law.",
        },
        {
          question:
            "A refrigerator moves heat from its cold interior into a warm kitchen. Why doesn't this violate the second law?",
          options: [
            "The transfer is driven by external work input, so it is not a spontaneous flow from cold to hot",
            "The second law only applies to gases, not to food and air",
            "Refrigerators create cold rather than moving heat",
            "The heat involved is too small for the second law to apply",
          ],
          correctIndex: 0,
          explanation:
            "The Clausius statement forbids heat flowing from cold to hot spontaneously. A fridge pays for the transfer with compressor work W, ejecting Q_C + W into the kitchen. Total entropy still increases once the work input is counted — the ledger always balances.",
        },
        {
          question:
            "Heat flows from a hot object to a cold one. In entropy terms, why is this the direction nature chooses?",
          options: [
            "The hot object has more entropy to give away",
            "Entropy is conserved, so it must flow alongside the heat",
            "The cold object gains more entropy (Q/T_C) than the hot object loses (Q/T_H), so total entropy increases",
            "The heat carries entropy from cold to hot",
          ],
          correctIndex: 2,
          explanation:
            "The same heat Q counts for more entropy at low temperature: gain Q/T_C exceeds loss Q/T_H because T_C < T_H, so the total entropy of the pair rises. The reverse flow would decrease total entropy, which the second law forbids. Entropy is not conserved — real processes always create it.",
        },
        {
          question:
            "Which change would raise the Carnot efficiency ceiling of a power station?",
          options: [
            "Using a larger volume of working gas",
            "Doubling the heat input Q_H each cycle",
            "Replacing the steam with helium",
            "Raising the boiler temperature or finding a colder place to reject heat",
          ],
          correctIndex: 3,
          explanation:
            "The ceiling η_max = 1 − T_C/T_H depends only on the two temperatures — not on the working substance, the amount of gas, or the scale of the machine. That is why turbine research pushes ever-hotter materials and why plants are sited next to cold water: widening the temperature gap is the only lever nature offers.",
        },
      ],
    },
    {
      id: "thermal-properties-of-matter",
      title: "Thermal Properties of Matter",
      subtitle:
        "Calorimetry with rigor, phase diagrams, humidity, and where the ideal gas breaks down",
      sections: [
        {
          id: "calorimetry-revisited",
          title: "Calorimetry with Full Rigor",
          content: `
<p>Phase 2 introduced the ideas; now we compute like professionals. Two formulas run all of calorimetry:</p>
<ul>
  <li><strong>Heating without phase change:</strong> Q = mcΔT, where c is the <strong>specific heat capacity</strong> (water: 4186 J/(kg·K), unusually high).</li>
  <li><strong>Phase change without heating:</strong> Q = mL, where L is the <strong>latent heat</strong>. For water: L<sub>fusion</sub> = 334 kJ/kg (melting), L<sub>vaporization</sub> = 2256 kJ/kg (boiling). During a phase change the temperature holds constant — the energy goes into breaking intermolecular bonds, not into speeding molecules up.</li>
</ul>
<p>The professional method: in an insulated container, <strong>heat lost by hot things = heat gained by cold things</strong>, and you must <em>check whether phase changes complete</em> before assuming a final state.</p>
<p><strong>Worked example.</strong> Drop 50 g of ice at 0 °C into 200 g of water at 25 °C in an insulated cup. Final temperature?</p>
<ol>
  <li><strong>Budget check first.</strong> Melting all the ice needs Q = 0.050 × 334,000 = 16,700 J. Cooling the warm water all the way to 0 °C could release at most 0.200 × 4186 × 25 = 20,930 J. Since 20,930 &gt; 16,700, all the ice melts and the final state is liquid water at some T above 0 °C. (Had the budget failed, the answer would be a 0 °C ice–water mix — a common exam trap.)</li>
  <li><strong>Energy balance.</strong> Heat from warm water cooling = heat to melt ice + heat to warm the meltwater from 0 °C:<br>
  0.200 × 4186 × (25 − T) = 16,700 + 0.050 × 4186 × T</li>
  <li>20,930 − 837T = 16,700 + 209T → 4230 = 1046T → <strong>T ≈ 4.0 °C</strong></li>
</ol>
<p>A quarter of the water's mass in ice erased almost all of its 25 degrees — latent heat is an enormous energy sink, which is exactly why ice is so good at chilling drinks and why melting glaciers buffer the climate's warming.</p>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Evaporating 1 kg of sweat carries away about 2.4 MJ — the heat output of a resting human for over 20 minutes. Sweating is your body exploiting water's giant latent heat of vaporization; the next-to-last section shows what happens when humid air sabotages it.</p>
</div>`,
        },
        {
          id: "phase-diagrams",
          title: "Phase Diagrams: The Map of Matter",
          content: `
<p>Whether a substance is solid, liquid, or gas is not a fixed property — it depends on both pressure and temperature. A <strong>phase diagram</strong> plots pressure against temperature and divides the plane into three territories, with the substance's actual state read off like a location on a map.</p>
<ul>
  <li><strong>Regions:</strong> solid at low T, gas at high T and low P, liquid wedged between at moderate conditions.</li>
  <li><strong>Boundary lines:</strong> along them, two phases coexist. Crossing the solid–liquid line is melting; crossing liquid–gas is boiling; crossing solid–gas directly is <strong>sublimation</strong>. The liquid–gas line is exactly the graph of boiling point versus pressure — which is why water boils at 70 °C on Everest and above 120 °C in a pressure cooker.</li>
  <li><strong>Triple point:</strong> the unique pressure and temperature where all three lines meet and solid, liquid, and gas coexist in equilibrium. For water: 0.01 °C at 611 Pa (0.006 atm). It is so sharply reproducible that until 2019 the kelvin itself was <em>defined</em> by water's triple point.</li>
  <li><strong>Critical point:</strong> the liquid–gas line simply <em>ends</em> (water: 374 °C, 218 atm). Beyond it lies <strong>supercritical fluid</strong> — squeeze hot enough gas and it thickens continuously to liquid density with no boiling, no meniscus, no distinction at all. Liquid and gas turn out to be two ends of one phase, not two different substances.</li>
</ul>
<p>Two famous quirks of real maps:</p>
<ul>
  <li><strong>Water's solid–liquid line slopes backwards</strong> (negative slope): pressure favors the <em>denser</em> phase, and uniquely, liquid water is denser than ice. Squeezing ice near 0 °C can melt it. For almost every other substance the line leans the other way.</li>
  <li><strong>CO₂'s triple point sits at 5.1 atm</strong> — above atmospheric pressure. At 1 atm the liquid region is simply unreachable, so solid CO₂ ("dry ice", −78.5 °C) never melts in open air; it sublimes straight to gas. Hence the name, and hence stage fog.</li>
</ul>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>Supercritical CO₂ (31 °C, 73 atm) flows like a gas but dissolves like a liquid — it's how most decaffeinated coffee is made, soaking caffeine out of beans and leaving no solvent residue. Deep in the oceans of gas giants, hydrogen exists in supercritical states no lab can fully reproduce.</p>
</div>`,
        },
        {
          id: "humidity",
          title: "Humidity and the Physics of Muggy Days",
          content: `
<p>Above every water surface, molecules from the fast tail of the Maxwell–Boltzmann distribution escape into the air (evaporation) while vapor molecules rebound back in (condensation). In a closed space the traffic balances at the <strong>saturation vapor pressure</strong> — the maximum partial pressure of water vapor the air can sustain at that temperature. It climbs steeply with temperature, roughly doubling every 10 °C:</p>
<table>
  <thead>
    <tr><th>Temperature</th><th>Saturation vapor pressure</th></tr>
  </thead>
  <tbody>
    <tr><td>10 °C</td><td>1.23 kPa</td></tr>
    <tr><td>20 °C</td><td>2.34 kPa</td></tr>
    <tr><td>30 °C</td><td>4.25 kPa</td></tr>
    <tr><td>100 °C</td><td>101 kPa — boiling: vapor pressure reaches atmospheric</td></tr>
  </tbody>
</table>
<p><strong>Relative humidity (RH)</strong> compares the vapor actually present to that maximum:</p>
<p style="text-align:center;">RH = (partial pressure of water vapor ÷ saturation vapor pressure at that temperature) × 100%</p>
<p>Cool a parcel of moist air and its vapor content stays fixed while the saturation ceiling drops. The temperature at which the ceiling meets the actual vapor pressure — RH hits 100% — is the <strong>dew point</strong>; cool further and vapor must condense: dew, fog, clouds, the mist on a cold drink, fogged glasses when you step inside.</p>
<p><strong>Worked example.</strong> A 30 °C day with RH = 60%. Vapor pressure = 0.60 × 4.25 = 2.55 kPa. Cooling the air, saturation pressure falls to 2.55 kPa at about 21 °C — so the dew point is <strong>≈ 21 °C</strong>. Tonight, any surface cooler than 21 °C will bead with water.</p>
<div class="key-concept">
  <h4>Why humid heat is dangerous</h4>
  <p>Your body's main coolant is sweat, and its cooling power is water's huge latent heat of vaporization — but only if the sweat <em>evaporates</em>. High RH throttles net evaporation, so sweat drips uselessly. 35 °C in a desert is unpleasant; 35 °C at 90% RH can be lethal, because the body's heat pump has lost its cold reservoir. Meteorologists' "wet-bulb temperature" measures exactly this limit.</p>
</div>
<div class="did-you-know">
  <h4>Did you know?</h4>
  <p>"Relative" matters: cold winter air at 100% RH holds far less water than desert air at 20% RH. Heat that saturated winter air to room temperature without adding water and its RH plummets — which is why heated buildings are so dry in winter.</p>
</div>`,
        },
        {
          id: "real-gases",
          title: "Real Gases: Where the Ideal Model Bends",
          content: `
<p>The ideal-gas law rests on two idealizations: molecules occupy no volume, and they exert no forces between collisions. Both are false — merely negligible under everyday conditions. Push a gas toward high pressure or low temperature and the neglected physics returns:</p>
<ul>
  <li><strong>High pressure:</strong> molecules are crowded so closely that their own volume is a real fraction of the container's. The free space is less than V, so the gas is <em>harder</em> to compress than PV = nRT predicts.</li>
  <li><strong>Low temperature:</strong> molecules move slowly enough that weak intermolecular attractions start to matter, gently pulling inward-bound molecules back and softening their impact on the walls. Pressure runs <em>below</em> the ideal prediction — and if attractions win outright, the gas condenses to liquid.</li>
</ul>
<p>In 1873 Johannes van der Waals patched both flaws with two constants fitted to each gas:</p>
<p style="text-align:center; font-size:1.05em;">(P + a·n²/V²)(V − nb) = nRT</p>
<ul>
  <li><strong>nb</strong> subtracts the volume occupied by the molecules themselves — b is roughly the volume of one mole of tightly packed molecules.</li>
  <li><strong>a·n²/V²</strong> adds back the pressure lost to intermolecular attraction, which grows as molecules crowd together.</li>
</ul>
<p>This modest fix predicts something the ideal gas never could: <strong>condensation</strong>. Below a <strong>critical temperature</strong> T<sub>c</sub> — the same critical point that ends the liquid–gas line on the phase diagram — van der Waals isotherms develop a kink where liquid and gas coexist. Above T<sub>c</sub>, no pressure whatsoever can liquefy the gas. That single fact stalled 19th-century science: hydrogen (T<sub>c</sub> = 33 K) and helium (T<sub>c</sub> = 5.2 K) defied all liquefaction attempts until cryogenics caught up — helium finally surrendering in 1908.</p>
<div class="key-concept">
  <h4>When is ideal good enough?</h4>
  <p>Chemists track the deviation with the compression factor Z = PV/nRT, which equals exactly 1 for an ideal gas. For air at room conditions Z ≈ 0.9995 — ideal to 1 part in 2000, so every calculation in this subject stands. Z strays significantly only near condensation or above ~50 atm. Know your model's edges and you can trust its interior.</p>
</div>
<p>And with that, the Phase 3 thermal story closes where it began: a simple law, now understood from molecules up, with its limits honestly mapped. Subject 28 will return with statistical mechanics to explain phase transitions, entropy, and the critical point itself — by counting.</p>`,
        },
      ],
      quiz: [
        {
          question:
            "While an ice cube melts in a drink, its temperature stays at 0 °C even though it continuously absorbs heat. Why?",
          options: [
            "The absorbed energy is breaking intermolecular bonds rather than increasing molecular kinetic energy",
            "Ice is a perfect insulator until fully melted",
            "The drink stops transferring heat once melting begins",
            "The melting ice radiates energy away as fast as it absorbs it",
          ],
          correctIndex: 0,
          explanation:
            "Temperature measures average molecular kinetic energy, but during a phase change the incoming heat — the latent heat of fusion, 334 kJ per kg for ice — is spent dismantling the rigid bonds of the crystal instead. Only when the structure is fully broken does further heat begin raising the temperature.",
        },
        {
          question: "On a phase diagram, the triple point is:",
          options: [
            "the temperature above which a gas can no longer be liquefied",
            "any point where the substance is changing phase",
            "the unique pressure and temperature at which solid, liquid, and gas coexist in equilibrium",
            "the point where the substance splits into three different substances",
          ],
          correctIndex: 2,
          explanation:
            "The triple point is where all three coexistence lines meet — one exact (P, T) pair per substance, such as 611 Pa and 0.01 °C for water. Its perfect reproducibility made it the definition of the kelvin until 2019. The temperature above which no pressure can liquefy a gas is the critical point, a different landmark.",
        },
        {
          question:
            "Why does dry ice (solid CO₂) turn directly into gas at room pressure instead of melting?",
          options: [
            "CO₂ has no liquid phase under any conditions",
            "Atmospheric pressure lies below CO₂'s triple-point pressure of 5.1 atm, so the liquid region of its phase diagram is unreachable",
            "Dry ice is too cold to melt",
            "The latent heat of fusion of CO₂ is zero",
          ],
          correctIndex: 1,
          explanation:
            "Liquid CO₂ exists only above 5.1 atm — its triple-point pressure. At 1 atm, heating solid CO₂ crosses straight from the solid region into the gas region of the phase diagram: sublimation. Liquid CO₂ is perfectly real inside pressurized cylinders and fire extinguishers.",
        },
        {
          question:
            "Air at 30 °C has a relative humidity of 50%. As the air cools overnight with its water-vapor content unchanged, what happens?",
          options: [
            "The relative humidity falls, because cold air is drier",
            "The relative humidity stays at 50% until the vapor freezes",
            "Water vapor is destroyed as the temperature drops",
            "The relative humidity rises, reaching 100% at the dew point, after which condensation forms",
          ],
          correctIndex: 3,
          explanation:
            "Relative humidity compares actual vapor pressure to the saturation value, and the saturation value drops steeply as air cools. Fixed vapor over a falling ceiling means RH climbs; at the dew point RH reaches 100%, and further cooling forces vapor to condense as dew, fog, or mist on cold surfaces.",
        },
        {
          question:
            "In the van der Waals equation (P + a·n²/V²)(V − nb) = nRT, what does the constant b account for?",
          options: [
            "The attractive forces between molecules",
            "The energy lost in inelastic collisions",
            "The finite volume occupied by the molecules themselves",
            "The increase of the gas constant at high pressure",
          ],
          correctIndex: 2,
          explanation:
            "The ideal model treats molecules as points; b restores their finite size by subtracting the volume they occupy (nb for n moles) from the space available to move in. The other correction, a·n²/V², handles intermolecular attraction, which reduces the measured pressure. Collisions remain elastic, and R never changes.",
        },
      ],
    },
  ],
};
